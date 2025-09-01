// scripts/knife_verify.mjs
// Robust verification for KNIFES CSV + local docs layout
// Usage:
//   node scripts/knife_verify.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root .
// Exit codes: 0 ok, 2 problems found

import fs from 'node:fs/promises';
import path from 'node:path';

function parseArgs() {
  const out = { csv: 'data/KNIFE-OVERVIEW-ONLY.csv', root: '.' };
  const a = process.argv.slice(2);
  for (let i = 0; i < a.length; i += 2) {
    const k = a[i];
    const v = a[i+1];
    if (k === '--csv') out.csv = v;
    if (k === '--root') out.root = v;
  }
  return out;
}

function parseCSV(text) {
  text = text.replace(/\r\n/g, '\n');
  const delim = text.split('\n')[0].includes(';') ? ';' : ',';
  const lines = text.split('\n').filter(l => l.trim().length > 0);
  if (!lines.length) return [];
  const headers = lines[0].split(delim).map(h => h.trim());
  const rows = [];
  for (const line of lines.slice(1)) {
    const cols = [];
    let curr = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') { if (inQ && line[i+1] === '"') { curr += '"'; i++; } else inQ = !inQ; }
      else if (ch === delim && !inQ) { cols.push(curr); curr = ''; }
      else curr += ch;
    }
    cols.push(curr);
    const obj = {};
    headers.forEach((h, idx) => obj[h] = (cols[idx] ?? '').trim());
    rows.push(obj);
  }
  return rows;
}

function kebab(s) {
  return (s || 'untitled')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();
}

function ensureSlash(s) { return s?.endsWith('/') ? s : (s || '') + '/'; }

function compute(row) {
  const id = row.ID || row.Id || row.id || '';
  const short = row['Short Title'] || row.ShortTitle || row.shortTitle || '';
  const folderName = row.FolderName?.trim() || (id && short ? `${id}-${kebab(short)}` : '');
  const linkSlug = (row.LinkSlug?.trim() || (folderName ? `/KNIFES/${folderName}/` : '') );
  const sidebarLabel = row.SidebarLabel?.trim() || (id && short ? `${id} – ${short}` : '');
  const external = /^https?:\/\//i.test(linkSlug);
  return { id, short, folderName, linkSlug: ensureSlash(linkSlug), sidebarLabel, external };
}

async function pathExists(p) { try { await fs.access(p); return true; } catch { return false; } }

async function main() {
  const { csv, root } = parseArgs();
  const repo = path.resolve(root);
  const csvPath = path.resolve(repo, csv);
  const docsRoot = path.join(repo, 'docs', 'sk', 'KNIFES');

  const out = { errors: [], warns: [], info: [] };

  // read CSV
  let text = '';
  try { text = await fs.readFile(csvPath, 'utf8'); }
  catch (e) { console.error(`❌ CSV not found: ${csvPath}`); process.exit(2); }

  const rows = parseCSV(text).filter(r => /^K\d{3}$/i.test(r.ID || ''));
  // basic checks
  const seen = new Map();
  for (const r of rows) {
    const c = compute(r);
    if (!/^K\d{3}$/i.test(c.id)) out.errors.push(`ID '${c.id}' má zlý formát (očakávam KNNN).`);
    if (!c.short) out.errors.push(`ID ${c.id}: prázdny "Short Title".`);

    // folder + slug checks
    const dir = c.folderName ? path.join(docsRoot, c.folderName) : '';
    if (c.external) {
      if (dir && await pathExists(dir)) out.warns.push(`ID ${c.id}: externý LinkSlug (${c.linkSlug}), ale existuje lokálny priečinok '${path.relative(repo, dir)}' → zváž odstránenie/konzolidáciu.`);
    } else {
      if (dir && !(await pathExists(dir))) out.warns.push(`ID ${c.id}: chýba lokálny priečinok '${path.relative(repo, dir)}' pre interný slug ${c.linkSlug}.`);
    }

    // duplicate ID detection
    const key = c.id.toUpperCase();
    seen.set(key, (seen.get(key)||0)+1);

    // bad folder naming (spaces/uppercase)
    if (c.folderName && /[A-Z\s]/.test(c.folderName)) out.warns.push(`ID ${c.id}: FolderName '${c.folderName}' obsahuje veľké písmená alebo medzery (odporúčané: lowercase-kebab).`);
  }

  for (const [k,v] of seen) if (v>1) out.errors.push(`Duplicitné ID v CSV: ${k} (počet ${v}).`);

  // existing folders sanity (uppercase/spaces)
  if (await pathExists(docsRoot)) {
    const entries = await fs.readdir(docsRoot, { withFileTypes: true });
    for (const e of entries) {
      if (e.isDirectory()) {
        if (/[A-Z\s]/.test(e.name)) out.warns.push(`Priečinok v docs/sk/KNIFES má netradičný názov: '${e.name}' (uppercase/space).`);
      }
    }
  }

  // report
  const pad = s => String(s).padStart(3,' ');
  console.log(`\n== KNIFES verify summary ==`);
  console.log(`Errors: ${pad(out.errors.length)} | Warnings: ${pad(out.warns.length)}`);
  if (out.errors.length) {
    console.log(`\n-- Errors --`);
    out.errors.forEach(m => console.log('✗', m));
  }
  if (out.warns.length) {
    console.log(`\n-- Warnings --`);
    out.warns.forEach(m => console.log('•', m));
  }
  console.log('');

  process.exit(out.errors.length ? 2 : 0);
}

main().catch(e => { console.error(e); process.exit(2); });
