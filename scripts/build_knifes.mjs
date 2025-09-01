// scripts/build_knifes.mjs (v7)
// CSV -> KNIFE prehľady + chýbajúce Kxxx skeletony (.md) bez prepisovania existujúcich
// + NORMALIZE: YAML metadá, img/ + multimedia/, TEDex skelet, provenance.org/project
// + LOCALE: --locale sk|en (default sk) – promietne sa do slug/locale
// + OVERVIEWS: stĺpce Org/Project a relatívne odkazy na .md (VS Code/GitHub aj web)
// + JSON index: docs/<locale>/KNIFES/knifes_index.json (machine-readable)
// + NAV: do každého článku sa vloží navigácia na 3 prehľady (relatívne .md)
// Usage:
//   node scripts/build_knifes.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root . [--dry-run] [--dry-verify] [--org ORG] [--project PROJ] [--locale sk]
//   node scripts/build_knifes.mjs --root . --org ORG --project PROJ --locale sk

import fs from 'node:fs/promises';
import fssync from 'node:fs';
import path from 'node:path';

// --- args ---
function parseArgs() {
  const args = process.argv.slice(2);
  const out = {
    csv: 'data/KNIFE-OVERVIEW-ONLY.csv',
    root: '.',
    dryRun: false,
    dryVerify: false,
    org: process.env.KNIFE_ORG || '',
    project: process.env.KNIFE_PROJECT || '',
    locale: process.env.KNIFE_LOCALE || 'sk',
    debug: false,
  };
  for (let i = 0; i < args.length; i++) {
    const k = args[i];
    const v = args[i + 1];
    if (k === '--csv')         { out.csv = v; i++; continue; }
    if (k === '--root')        { out.root = v; i++; continue; }
    if (k === '--dry-run')     { out.dryRun = true; continue; }
    if (k === '--dry-verify')  { out.dryVerify = true; continue; }
    if (k === '--org')         { out.org = v; i++; continue; }
    if (k === '--project')     { out.project = v; i++; continue; }
    if (k === '--locale')      { out.locale = v; i++; continue; }
    if (k === '--debug')       { out.debug = true; continue; }
  }
  return out;
}

// --- CSV utils ---
function parseCSV(text) {
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n');
  const rawLines = text.split('\n');

  const parseLine = (line, delim) => {
    const cols = [];
    let curr = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQ && line[i + 1] === '"') { curr += '"'; i++; }
        else inQ = !inQ;
      } else if (ch === delim && !inQ) {
        cols.push(curr); curr = '';
      } else {
        curr += ch;
      }
    }
    cols.push(curr);
    return cols.map(c => c.trim());
  };

  const DELIMS = [',', ';', '\t', '|'];
  const reqHints = ['id', 'short title', 'category', 'status', 'type', 'priority'];

  const looksLikeHeader = (cells) => {
    const L = cells.map(c => c.replace(/^\uFEFF/, '').toLowerCase());
    const hasID = L.includes('id');
    const hits = reqHints.reduce((n, h) => n + (L.includes(h) ? 1 : 0), 0);
    return hasID && (hits >= 2);
  };

  let headerIdx = -1, delim = ',';
  outer:
  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) continue;
    for (const d of DELIMS) {
      const cells = parseLine(line, d);
      if (looksLikeHeader(cells)) { headerIdx = i; delim = d; break outer; }
      for (let j = i + 1; j < Math.min(i + 8, rawLines.length); j++) {
        const nxt = rawLines[j].trim(); if (!nxt) continue;
        const nextCells = parseLine(nxt, d);
        if (/^K\d{3}$/i.test((nextCells[0] || '').trim())) { headerIdx = i; delim = d; break outer; }
        break;
      }
    }
  }

  if (headerIdx === -1) {
    const first = rawLines.findIndex(l => l.trim().length > 0);
    if (first === -1) return [];
    delim = rawLines[first].includes(';') ? ';'
         : rawLines[first].includes('\t') ? '\t'
         : rawLines[first].includes('|') ? '|'
         : ',';
    const headers = parseLine(rawLines[first], delim);
    return rawLines.slice(first + 1)
      .filter(l => l.trim().length > 0)
      .map(line => {
        const cols = parseLine(line, delim);
        const obj = {}; headers.forEach((h, idx) => obj[h] = (cols[idx] ?? '').trim());
        return obj;
      });
  }

  const headers = parseLine(rawLines[headerIdx], delim).map(h => h.replace(/^\uFEFF/, '').trim());
  const dataLines = rawLines.slice(headerIdx + 1).filter(l => l.trim().length > 0);
  return dataLines.map(line => {
    const cols = parseLine(line, delim);
    const obj = {}; headers.forEach((h, idx) => { obj[h] = (cols[idx] ?? '').trim(); });
    return obj;
  });
}

function kebab(s) {
  return (s || 'untitled')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}
async function ensureDir(p) { await fs.mkdir(p, { recursive: true }); }
async function fileExists(p) { try { await fs.access(p); return true; } catch { return false; } }
function mdEscape(str){ return String(str||'').replace(/"/g,'\\"'); }

// --- FM I/O ---
function splitFrontMatter(text) {
  const m = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!m) return [null, text];
  return [m[1], text.slice(m[0].length)];
}
function parseSimpleYAML(yaml) {
  if (!yaml) return {};
  const obj = {};
  const lines = yaml.split('\n');
  for (const line of lines) {
    const mm = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (mm) obj[mm[1]] = mm[2].replace(/^"|"$/g, '').trim();
  }
  return obj;
}
function writeFrontMatter(obj) {
  const order = [
    'id','title','description','author','date','updated',
    'status','type','category','tags','slug','sidebar_label',
    'sidebar_position','locale','provenance'
  ];
  const b = [];
  b.push('---');
  for (const k of order) {
    if (obj[k] === undefined) continue;
    if (k === 'tags' && Array.isArray(obj[k])) {
      b.push(`${k}: [${obj[k].map(v => JSON.stringify(v)).join(', ')}]`);
    } else if (k === 'provenance' && obj[k] && typeof obj[k] === 'object') {
      b.push(`${k}:`);
      for (const [kk, vv] of Object.entries(obj[k])) {
        b.push(`  ${kk}: ${JSON.stringify(vv)}`);
      }
    } else {
      b.push(`${k}: ${JSON.stringify(obj[k])}`);
    }
  }
  b.push('---');
  return b.join('\n') + '\n';
}

// --- NAV blok (relatívne odkazy na 3 prehľady) ---
const NAV_MARKER = '<!-- nav:knifes -->';
function navBlock() {
  return `${NAV_MARKER}
> [⬅ KNIFES – Prehľad](../KNIFEsOverview.md) • [Zoznam](../KNIFE_Overview_List.md) • [Detaily](../KNIFE_Overview_Details.md)
---
`;
}

function ensureBodyDelimiter(body) {
  const t = body.trimStart();
  return t.startsWith('<!-- body:start -->') ? body : `<!-- body:start -->\n\n${body}`;
}
function injectNav(body) {
  if (body.includes(NAV_MARKER)) return body;
  // vlož NAV hneď za body:start (ak existuje), inak na začiatok
  const idx = body.indexOf('<!-- body:start -->');
  if (idx >= 0) {
    const before = body.slice(0, idx + '<!-- body:start -->'.length);
    const after  = body.slice(idx + '<!-- body:start -->'.length);
    return `${before}\n\n${navBlock()}${after}`.replace(/\n{3,}/g, '\n\n');
  }
  return `${navBlock()}${body}`;
}

function tedexSkeleton(id, title) {
  return `<!-- body:start -->

${navBlock()}# KNIFE ${id} – ${title}

## 🎯 Čo rieši (účel, cieľ)

## 🧩 Ako to rieši (princíp)

## 🧪 Ako to použiť (aplikácia)

---

## ⚡ Rýchly návod (Top)

## 📜 Detailný článok

## 💡 Tipy a poznámky

## ✅ Hodnota / Zhrnutie
`;
}
function firstParagraph(mdBody) {
  const cleaned = mdBody.replace(/<!--[\s\S]*?-->/g, '').trim();
  const para = cleaned.split(/\n\s*\n/)[0] || '';
  return para.replace(/[#>*`]/g, '').trim().slice(0, 220);
}

// --- derivácie z CSV ---
function computeDerived(row) {
  const shortTitle = row.ShortTitle || row['Short Title'] || 'Untitled';
  const id = (row.ID || row.Id || row.id || row['\uFEFFID'] || '').trim();
  const folderName = row.FolderName?.trim() || `${id}-${kebab(shortTitle)}`;
  const sidebarLabel = row.SidebarLabel?.trim() || `${id} – ${shortTitle}`;
  const linkSlug = `/${'sk'}/knifes/${kebab(`${id} ${shortTitle}`)}`; // informatívne; web slug generujeme aj z locale
  return { shortTitle, folderName, sidebarLabel, linkSlug };
}

// --- FM pre nový .md
function buildFrontMatter(row, d, opts) {
  const id = (row.ID || row.Id || row.id || row['\uFEFFID'] || 'K000').trim().toUpperCase();
  const shortTitle = d.shortTitle;
  const loc = opts?.locale || 'sk';
  const slug = `/${loc}/knifes/${kebab(`${id} ${shortTitle}`)}`;
  const position = parseInt(id.slice(1), 10) || 999;
  const tags = (row.Tags || '').split(',').map(t => t.trim()).filter(Boolean);
  if (!tags.includes('KNIFE')) tags.unshift('KNIFE');

  const fm = {
    id: id,
    title: shortTitle || id,
    description: row.Description ? String(row.Description) : '',
    status: row.Status ? String(row.Status).toLowerCase() : 'draft',
    slug,
    sidebar_label: `${id} – ${shortTitle}`,
    sidebar_position: position,
    tags,
    locale: loc
  };

  const prov = {};
  if (opts?.org) prov.org = opts.org;
  if (opts?.project) prov.project = opts.project;
  if (Object.keys(prov).length) fm.provenance = { platform: 'github', ...prov };

  return writeFrontMatter(fm);
}

// --- Prehľady (relatívne linky na .md)
function tableLine(row) {
  const link = `[${row.ShortTitle || row['Short Title'] || ''}](${row._docRelLink || '#'})`;
  return `| ${row.ID} | ${row.Category||''} | ${row.ShortTitle||row['Short Title']||''} | ${row.Status||''} | ${row.Priority||''} | ${row.Type||''} | ${row['Date of Record']||row.Date||''} | ${link} |`;
}
function detailsBlock(row, org, project) {
  const link = `[${row._folderName||row.ShortTitle||row['Short Title']||''}](${row._docRelLink||'#'})`;
  const tags = (row.Tags||'').split(',').map(t=>t.trim()).filter(Boolean).join(', ');
  const tech = row.Technology || '';
  const sfiaL = row['SFIA – Level'] || row.SFIA_Level || '';
  const sfiaD = row['SFIA – Domain (?)'] || row.SFIA_Domain || '';
  const sfiaM = row['SFIA – Maturity'] || row.SFIA_Maturity || '';
  const ctx = row['Context, Origin, Why it was initiated?'] || row.Context || '';
  const slug = row._linkSlug || '';
  const position = parseInt(String(row.ID||'').replace(/^K/i,''),10) || '';
  return `### ${row.ID} – ${row.ShortTitle||row['Short Title']||''}

**Category**: ${row.Category||''}  
**Status**: ${row.Status||''}  
**Type**: ${row.Type||''}  
**Priority**: ${row.Priority||''}  
**Date**: ${row['Date of Record']||row.Date||''}

**Technology**: ${tech}  
**Description**: ${row.Description||''}  
**Context**: ${ctx}  
**SFIA**: level=${sfiaL}, domain=${sfiaD}, maturity=${sfiaM}  
**Tags**: ${tags}  
**Link**: ${link}

**Metadáta (generated)**:  
- **slug**: \`${slug}\`  
- **sidebar_label**: \`${row.ID} – ${row.ShortTitle||row['Short Title']||''}\`  
- **sidebar_position**: \`${position}\`  
- **locale**: \`${row._locale || 'sk'}\`  
- **provenance.org**: \`${org||''}\`  
- **provenance.project**: \`${project||''}\`

---
`;
}

// --- media helpers & tags infer ---
async function ensureMediaFolders(dirAbs) {
  await ensureDir(path.join(dirAbs, 'img'));
  await ensureDir(path.join(dirAbs, 'multimedia'));
}
function inferFsTags(dirAbs, initial = []) {
  const tags = new Set(initial.length ? initial : ['KNIFE']);
  if (fssync.existsSync(path.join(dirAbs, 'img')) && fssync.readdirSync(path.join(dirAbs,'img')).length) tags.add('images');
  if (fssync.existsSync(path.join(dirAbs, 'multimedia')) && fssync.readdirSync(path.join(dirAbs,'multimedia')).length) tags.add('multimedia');
  if (fssync.existsSync(path.join(dirAbs, 'multimedia', 'AP', 'HTML5'))) { tags.add('active-presenter'); tags.add('html5'); }
  if (fssync.existsSync(path.join(dirAbs, 'multimedia', 'AP', 'video'))) tags.add('video');
  return Array.from(tags);
}

// --- NORMALIZE: doplní FM + body:start + NAV do docs/<locale>/KNIFES
async function normalizeKnifes(repoRoot, opts) {
  const loc = opts.locale || 'sk';
  const base = path.join(repoRoot, 'docs', loc, 'KNIFES');
  if (!await fileExists(base)) return;

  for (const folder of (await fs.readdir(base))) {
    const dirAbs = path.join(base, folder);
    if (!fssync.statSync(dirAbs).isDirectory()) continue;

    await ensureMediaFolders(dirAbs);

    const mainMd = (await fs.readdir(dirAbs)).find(f => /^K\d{3}.*\.md$/i.test(f));
    if (!mainMd) continue;

    const mainAbs = path.join(dirAbs, mainMd);
    const raw = await fs.readFile(mainAbs, 'utf8');
    const [fmText, bodyRaw0] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText || '');

    const bodyRaw = injectNav(ensureBodyDelimiter(bodyRaw0));

    // Derivácie z názvu priečinka
    const idFromFolder = (folder.match(/^(K\d{3})/i) || [,''])[1] || '';
    const titleFromFolder = folder.replace(/^(K\d{3})[-–\s_]*/i, '').replace(/[_]+/g, ' ').trim();
    const titleFromH1 = (bodyRaw.match(/^#\s+(.+)$/m) || [,''])[1].trim();

    const id = (idFromFolder || (titleFromH1.match(/^(K\d{3})/i)||[,''])[1] || 'K000').toUpperCase();
    const title = fm.title || titleFromFolder || titleFromH1 || 'Untitled KNIFE';

    const slug = fm.slug || `/${loc}/knifes/${kebab(`${id} ${title}`)}`;
    const sidebar_label = fm.sidebar_label || `${id} – ${title.length>40? (title.slice(0,37)+'…') : title}`;
    const sidebar_position = fm.sidebar_position || parseInt(id.slice(1), 10) || 999;

    const fmTags = fm.tags
      ? (fm.tags.startsWith?.('[') ? JSON.parse(fm.tags) : String(fm.tags).split(',').map(s=>s.trim()).filter(Boolean))
      : [];
    const tags = Array.from(new Set(inferFsTags(dirAbs, fmTags)));

    const description = fm.description && fm.description !== '""'
      ? fm.description
      : firstParagraph(bodyRaw);

    let provenance;
    if (!fm.provenance && (opts.org || opts.project)) {
      provenance = { platform: 'github', ...(opts.org?{org: opts.org}:{ }), ...(opts.project?{project: opts.project}:{ }) };
    }

    const outObj = {
      id, title, description,
      status: fm.status || 'draft',
      slug, sidebar_label, sidebar_position,
      tags,
      locale: fm.locale || loc,
      ...(provenance ? { provenance } : {})
    };

    const newRaw = writeFrontMatter(outObj) + bodyRaw;
    if (newRaw !== raw) {
      if (opts.dryRun) {
        console.log('Would update:', path.relative(repoRoot, mainAbs));
      } else {
        await fs.writeFile(mainAbs, newRaw, 'utf-8');
        console.log('Updated:', path.relative(repoRoot, mainAbs));
      }
    }
  }
}

// --- JSON index writer ---
async function writeJsonIndex(repoRoot, locale, org, project, dryRun) {
  const base = path.join(repoRoot, 'docs', locale, 'KNIFES');
  if (!fssync.existsSync(base)) return;
  const index = [];

  for (const folder of fssync.readdirSync(base)) {
    const dirAbs = path.join(base, folder);
    if (!fssync.statSync(dirAbs).isDirectory()) continue;
    const mainMd = fssync.readdirSync(dirAbs).find(f => /^K\d{3}.*\.md$/i.test(f));
    if (!mainMd) continue;

    const raw = fssync.readFileSync(path.join(dirAbs, mainMd), 'utf8');
    const [fmText] = splitFrontMatter(raw);
    const fm = parseSimpleYAML(fmText||'');

    const tags = Array.isArray(fm.tags) ? fm.tags :
      (typeof fm.tags === 'string' && fm.tags.startsWith('[') ? JSON.parse(fm.tags) :
       typeof fm.tags === 'string' ? fm.tags.split(',').map(s=>s.trim()).filter(Boolean) : []);

    index.push({
      id: fm.id || '',
      title: fm.title || '',
      description: fm.description || '',
      status: fm.status || 'draft',
      type: fm.type || '',
      category: fm.category || '',
      slug: fm.slug || '',
      sidebar_label: fm.sidebar_label || '',
      sidebar_position: Number(fm.sidebar_position||0),
      locale: fm.locale || locale,
      tags,
      provenance: {
        platform: 'github',
        org: org || '',
        project: project || ''
      },
      path: `docs/${locale}/KNIFES/${folder}/${mainMd}`
    });
  }

  const jsonPath = path.join(base, 'knifes_index.json');
  if (dryRun) {
    console.log(`Would write JSON index at ${path.relative(repoRoot, jsonPath)}`);
  } else {
    await fs.writeFile(jsonPath, JSON.stringify(index, null, 2), 'utf8');
    console.log(`JSON index written: ${path.relative(repoRoot, jsonPath)}`);
  }
}

// --- main ---
async function main() {
  const { csv, root, dryRun, dryVerify, org, project, locale, debug } = parseArgs();
  const repoRoot = path.resolve(root);
  const csvPath = path.resolve(repoRoot, csv);
  const haveCSV = fssync.existsSync(csvPath);
  if (debug) console.log({ csvPath, repoRoot, haveCSV, org, project, locale });

  // bez CSV: len normalizácia + JSON index
  if (!haveCSV) {
    await normalizeKnifes(repoRoot, { org, project, dryRun, locale });
    await writeJsonIndex(repoRoot, locale, org, project, dryRun);
    return;
  }

  // CSV → rows
  const text = await fs.readFile(csvPath, 'utf8');
  const rowsRaw = parseCSV(text);
  const rows = rowsRaw.filter(r => {
    const id = (r.ID || r.Id || r.id || r['\uFEFFID'] || '').trim();
    if (id && !r.ID) r.ID = id;
    return /^K\d{3}$/i.test(id);
  });
  if (rows.length === 0 && rowsRaw.length > 0) {
    const first = rowsRaw[0];
    console.log('ℹ️  Detected CSV header keys:', Object.keys(first));
    console.log('ℹ️  Tip: CSV musí mať stĺpec "ID" a data riadky s "KNNN" (napr. K060).');
  }

  // DRY-VERIFY
  if (dryVerify) {
    let createCount = 0;
    const missing = [];
    for (const r of rows) {
      const { folderName, linkSlug } = computeDerived(r);
      const dir = path.join(repoRoot, 'docs', locale, 'KNIFES', folderName);
      const file = path.join(dir, `${folderName}.md`);
      const exists = await fileExists(file);
      if (!exists) {
        createCount++;
        missing.push({ id: r.ID, slug: linkSlug, rel: path.relative(repoRoot, file) });
      }
    }
    console.log('\n== DRY-VERIFY (CSV → plán) ==');
    console.log(`Záznamov: ${rows.length}`);
    console.log(`Chýbajúce lokálne články: ${createCount}`);
    for (const m of missing.slice(0, 20)) console.log(` • ${m.id} → ${m.slug} (${m.rel})`);
    if (missing.length > 20) console.log(` … +${missing.length - 20} ďalších`);
    process.exit(0);
  }

  // 1) Vytváraj skeletony
  for (const row of rows) {
    const d = computeDerived(row);
    row._folderName = d.folderName;
    row._sidebarLabel = d.sidebarLabel;
    row._linkSlug = d.linkSlug;                               // web info
    row._docRelLink = `./${d.folderName}/${d.folderName}.md`; // file link
    row._locale = locale;

    const dir = path.join(repoRoot, 'docs', locale, 'KNIFES', d.folderName);
    const file = path.join(dir, `${d.folderName}.md`);
    await ensureDir(dir);
    await ensureDir(path.join(dir, 'img'));
    await ensureDir(path.join(dir, 'multimedia'));

    if (!(await fileExists(file))) {
      if (dryRun) {
        console.log('Would create:', path.relative(repoRoot, file));
      } else {
        const fm = buildFrontMatter(row, d, { org, project, locale });
        const body = tedexSkeleton(row.ID || 'K000', d.shortTitle);
        await fs.writeFile(file, fm + body, 'utf8');
        console.log('Created:', path.relative(repoRoot, file));
      }
    } else if (debug) {
      console.log('Exists:', path.relative(repoRoot, file));
    }
  }

  // 1.5) NORMALIZE + NAV inject
  await normalizeKnifes(repoRoot, { org, project, dryRun, locale });

  // 2) JSON index
  await writeJsonIndex(repoRoot, locale, org, project, dryRun);

  // 3) Prehľady
  const overviewShort =
`# 📋 KNIFEs Overview

| ID   | Category | Short Title | Status | Priority | Type | Date | Org | Project | Link |
|------|----------|-------------|--------|---------:|------|------|-----|---------|------|
` + rows.map(r => {
    const link = `[${r.ShortTitle || r['Short Title'] || ''}](${r._docRelLink || '#'})`;
    return `| ${r.ID} | ${r.Category||''} | ${r.ShortTitle||r['Short Title']||''} | ${r.Status||''} | ${r.Priority||''} | ${r.Type||''} | ${r['Date of Record']||r.Date||''} | ${org||''} | ${project||''} | ${link} |`;
  }).join('\n') + '\n';

  const overviewList =
`| ID | Category | Short Title | Status | Type | Priority | Org | Project | Description | Context | SFIA – Level | SFIA – Domain (?) | SFIA – Maturity | Tags |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---|:---|:---:|:---:|:---:|:---:|
` + rows.map(r => {
    const title = r.ShortTitle || r['Short Title'] || '';
    const link = `[${title}](${r._docRelLink || '#'})`;
    const ctx = (r['Context, Origin, Why it was initiated?']||r.Context||'').replace(/\n/g,' ');
    return `| ${r.ID} | ${r.Category||''} | ${link} | ${r.Status||''} | ${r.Type||''} | ${r.Priority||''} | ${org||''} | ${project||''} | ${r.Description||''} | ${ctx} | ${r['SFIA – Level']||r.SFIA_Level||''} | ${r['SFIA – Domain (?)']||r.SFIA_Domain||''} | ${r['SFIA – Maturity']||r.SFIA_Maturity||''} | ${r.Tags||''} |`;
  }).join('\n') + '\n';

  const overviewDetails =
`# 📘 KNIFE Overview – Detailed View

` + rows.map(r => detailsBlock(r, org, project)).join('\n');

  const overviewDir = path.join(repoRoot, 'docs', locale, 'KNIFES');
  await ensureDir(overviewDir);

  if (dryRun) {
    console.log(`Would write overview files under ${path.relative(repoRoot, overviewDir)}/`);
  } else {
    await fs.writeFile(path.join(overviewDir, 'KNIFEsOverview.md'), overviewShort, 'utf8');
    await fs.writeFile(path.join(overviewDir, 'KNIFE_Overview_List.md'), overviewList, 'utf8');
    await fs.writeFile(path.join(overviewDir, 'KNIFE_Overview_Details.md'), overviewDetails, 'utf8');
    console.log(`Overview files written under ${path.relative(repoRoot, overviewDir)}/`);
  }
}

main().catch(err => { console.error(err); process.exit(1); });