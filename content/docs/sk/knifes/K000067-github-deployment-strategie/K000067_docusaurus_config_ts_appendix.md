---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000067_docusaurus_config_ts_appendix"
guid: "7c3ff713-c422-450c-a765-fe0ab6edc560"
dao: "knife"
title: "K000067 Appendix – docusaurus.config.ts (ENV‑driven)"
description: "-"
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "-"
type: "-"
priority: "no"
tags: ["KNIFE"]
locale: "sk"
created: "2025-09-24"
modified: "-"
status: "inprogress"
privacy: "public"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: ""
author_id: "-"
author_did: "-"
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "K000067 Appendix – docusaurus.config.ts (ENV‑driven)"
---
# K000067 Appendix – docusaurus.config.ts (ENV‑driven)

<!-- fm-visible: start -->
> **GUID:** `7c3ff713-c422-450c-a765-fe0ab6edc560`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

Tento appendix prináša **univerzálny** `docusaurus.config.ts`, ktorý sa prispôsobí:

- **GitHub Pages – project site** → `url = https://ORG.github.io`, `baseUrl = /REPO/`
- **Custom doména** → `url = https://sub.domain.tld`, `baseUrl = /`

Prepínanie sa deje cez **ENV premennú** `CUSTOM_DOMAIN`. Ak je prázdna/nenastavená ⇒ GitHub Pages režim. Ak je vyplnená ⇒ custom doména.

---

## Kompletný príklad `docusaurus.config.ts`

> Ulož ako `docusaurus.config.ts` do koreňa projektu. Ponechaj TypeScript (Docusaurus ho podporuje).

```ts
import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';

// Bezpečné čítanie premenných z prostredia
const env = process.env as Record<string, string | undefined>;

// Z GitHub Actions poskytovaná premenná v tvare "ORG/REPO"
const repoPath = env.GITHUB_REPOSITORY || '';
const [org = 'ORG', repo = 'REPO'] = repoPath.split('/');

// Prepínač: ak CUSTOM_DOMAIN existuje → vlastná doména, inak GH Pages project site
const usingCustom = !!env.CUSTOM_DOMAIN && env.CUSTOM_DOMAIN.trim() !== '';
const siteUrl = usingCustom
  ? `https://${env.CUSTOM_DOMAIN}`
  : `https://${org}.github.io`;
const baseUrl = usingCustom ? '/' : `/${repo}/`;

const config: Config = {
  title: 'Class Site',
  tagline: 'Docs & projects',
  url: siteUrl,        // ↪️ mení sa podľa CUSTOM_DOMAIN
  baseUrl: baseUrl,    // ↪️ '/' (custom) vs '/REPO/' (GH Pages)
  trailingSlash: true, // stabilné URL (menej 301/404)

  // užitočné meta
  organizationName: org,
  projectName: repo,

  // build prísnosť
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n (ponechaj podľa projektu)
  i18n: { defaultLocale: 'sk', locales: ['sk'] },

  // Preset – Classic
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs', // alebo '/' pre docs-only mód
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Class',
      items: [
        {to: '/docs/intro', label: 'Docs', position: 'left'},
        // ⚠️ Používaj `to:` (nie absolútne URL), Docusaurus pridá baseUrl sám
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Class`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
```

---

## Ako nastavujem ENV premenné

### 1) GitHub Actions
V `.github/workflows/deploy.yml` priraď `CUSTOM_DOMAIN` z repo/environ. variables (alebo nechaj prázdne):

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      CUSTOM_DOMAIN: ${{ vars.CUSTOM_DOMAIN || '' }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: build }
```

- **Project URL (GH Pages)**: `vars.CUSTOM_DOMAIN` nechaj prázdne → `url=https://ORG.github.io`, `baseUrl=/${repo}/`.
- **Custom doména**: nastav `vars.CUSTOM_DOMAIN = sub.domain.tld` (v *Settings → Environments → github-pages → Variables*), plus vlož `static/CNAME`.

### 2) Lokálny build

```bash
## GH Pages (project URL)
CUSTOM_DOMAIN='' npm run build

## Custom doména
CUSTOM_DOMAIN=mysite.example.com npm run build
```

> `package.json` by mal mať skript `build: "CUSTOM_DOMAIN=${CUSTOM_DOMAIN:-} docusaurus build"`.

> ⚠️ Poznámka: názov subdomény nesmie obsahovať `_` (podtržník). Dodrž naming konvenciu, pozri [Appendix – Naming Convention](./K000067_NamingConventionPreDomeny.md).

---

## Navbar/Linky – odporúčania
- Používaj **relatívne cesty** s `to:` (nie absolútne s pevnou doménou). Príklad:
  ```js
  { to: '/docs/intro', label: 'Docs' }
  ```
  Docusaurus k tomu automaticky pridá správny `baseUrl`.
- Pre obrázky a assety začínaj `/img/…` alebo používaj importy; Docusaurus prefixuje baseUrl pri buildu.

---

## Docs‑only mód (ak nechceš homepage)
Zmeň `routeBasePath` na `'/'` a uisti sa, že máš `docs/index.md`.

```ts
presets: [
  ['classic', {
    docs: { routeBasePath: '/' },
    blog: false,
  }],
]
```

---

## Voliteľné: banner režimu pre DEV

```tsx
// src/theme/Root.tsx
import React from 'react';
export default function Root({children}) {
  const mode = process.env.CUSTOM_DOMAIN ? 'custom-domain' : 'gh-pages';
  return (
    <>
      {process.env.NODE_ENV === 'development' ? (
        <div style={{position:'fixed',bottom:8,right:8,padding:'4px 8px',border:'1px solid',borderRadius:8,opacity:.7,background:'#fff'}}>
          mode: {mode}
        </div>
      ) : null}
      {children}
    </>
  );
}
```

---

## Rýchly checklist (pred deployom)
- [ ] `CUSTOM_DOMAIN` je správne nastavený (prázdny pre project URL, vyplnený pre custom).
- [ ] Pri custom doméne existuje `static/CNAME` s **presne rovnakou** hodnotou.
- [ ] V *Settings → Pages* máš zvolený správny **Source** (Branch alebo Actions podľa zvolenej stratégie).
- [ ] Pri Actions existuje environment `github-pages` (bez reviewers pri prvom deployi).

---

## Troubleshooting
- **Žltý banner o `baseUrl`** – pravdepodobne nesedí `url/baseUrl` kombinácia. Skontroluj `CUSTOM_DOMAIN` a hodnoty vypočítané v konfigu.
- **404 po deployi** – ak používaš Actions a zlyhá `deploy-pages@v4` s 404, chýba init Pages/`github-pages` env. (pozri hlavný K000067 alebo `gh-init-pages` v Makefile appendixe).
- **HTTPS nevzniká** – `CNAME` neplatný (napr. obsahuje `_`) alebo ešte nepropagovaný DNS.

---

## Súvisiace
- *K000067 – GitHub Pages – stratégie nasadzovania (A/B/C)*
- *K000067_makefile_appendix.md* – Makefile a hromadný init cez `gh`
---
