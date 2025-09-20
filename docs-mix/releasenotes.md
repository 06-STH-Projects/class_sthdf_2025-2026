# KNIFE Overview — Release v1.0.1 (2025-08-15)

> Stabilizačný release s jednotným Makefile-om, vylepšeným deployom (Worktree + Actions) a úvodnou stránkou **KNIFE Preview**.

## ✨ Highlights
- **Unified Makefile v2** – jeden “control panel” pre build, validáciu, Worktree deploy aj CI/CD.
- **Prepínač režimu deployu** – `USE_ACTIONS` + príkazy `actions-enable/disable/status`.
- **Self-healing worktree** – `check-worktree` bezpečne vytvorí/opravu vykoná bez manuálneho mazania `.git`.
- **Bezpečný copy-build** – kopíruje výstup iba do `../gh-pages-docusaurus/docs/` a chráni `.git`.
- **Nová home stránka** – `src/pages/index.mdx` (*KNIFE Preview*, bez `slug`), CTA do `/docs/sk`.
- **Vstup do dokumentácie** – `docs/index.md` ako landing v sekcii Docs.
- **Lepšia hygiena odkazov** – trailing `/`, opravy vnútorných linkov a anchorov.
- **GitHub Pages (Actions) flow** – build → upload artifact → deploy (spúšťa sa len ak je povolený).

## 🔧 Zmeny

### Makefile (výber)
- **Deploy**
  - `check-worktree`, `copy-build`, `commit-deploy`, `deploy`, `full-deploy`,
    `remove-worktree`, `worktree-status`, `push-main`
- **CI/CD toggles**
  - `actions-status`, `actions-enable`, `actions-disable`
- **Kontroly & utility**
  - `check-links`, `check-links-hard`, `check-links-full`, `fix-links`
  - sandbox, stash, restore, cleanup (`delete-dotpages`) atď.

### CI/CD (GitHub Actions)
- **`.github/workflows/deploy.yml`**
  - Spúšťa sa pri pushi na `main` len keď `USE_ACTIONS=true` (repo *Variables*),
    alebo manuálne cez **workflow_dispatch**.
  - Bypass: commit správa obsahuje **`[noactions]`** → preskočí sa.

### Dokumentácia & web
- `src/pages/index.mdx` – *KNIFE Preview* (bez `slug`) → root webu.
- `docs/index.md` – “Welcome to the KNIFE Documentation”.
- Opravené relatívne linky a trailing slash (`…/index` → `…/`).

### .gitignore
- Ignoruje `build/`, `.docusaurus/`, cache, locky a ďalšie bežné artefakty.

## 🚀 Ako používať – režimy deployu

### 1) Worktree (lokálny push)
- **Prepnúť sa na Worktree**
  - V repo **Settings → Variables**: `USE_ACTIONS=false`
  - (alebo) `make actions-disable`
- **Deploy**
  ```bash
  make full-deploy   # check-worktree + push-main + build + copy + commit + push

  	•	Poznámka: nikdy nemazať ../gh-pages-docusaurus/.git ručne.

2) GitHub Actions (CI/CD)
	•	Povoliť Actions
	•	USE_ACTIONS=true (repo Variables)
	•	(alebo) make actions-enable
	•	Deploy
	•	stačí git push na main
	•	bypass jedného commitu: pridať do správy [noactions]

🧪 Rýchla kontrola po releasi
	•	Web beží: https://knife-framework.github.io/knifes_overview/
	•	Domovská stránka je KNIFE Preview a tlačidlo vedie do /docs/sk.
	•	Odkazy v Rýchlej navigácii fungujú (Calc, hrubý zoznam, tabuľka, blog).
	•	make check-links-hard prejde bez chýb (môže vypísať len warnings/anchors).

🔄 Upgrade Notes
	•	Žiadne breaking changes.
	•	Ak si používal staré ručné kopírovanie buildu do koreňa worktree, aktualizuj na nový copy-build (kopíruje do …/docs/).

📌 Meta
	•	Tag: v1.0.1
	•	Dátum: 2025-08-15
	•	Cieľová vetva: main