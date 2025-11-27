# -------------------------
# 📄 Makefile – Docusaurus + Git Utils (unified)
# Date: 20250815-0950 (patched, cleaned 20250916)
# Description: Inštalácia, build, testy, validácia a WorkTree deploy.
# CESTA 2 (Actions) doplníme neskôr – tento Makefile je zámerne jednotný.
#
# ❗ Dôležité: pri deployi do worktree NIKDY nemaž priečinok/súbor .git.
# Ak je worktree „rozbité“, použi:  make check-worktree  (self-healing)
# -------------------------

# ❗ Worktree deploy vyžaduje lokálnu GIT autentikáciu k GitHubu.
#    Bez platného HTTPS tokenu (osxkeychain) alebo SSH kľúča `git push` zlyhá.
#    Pozri: make help-auth
# Keď spustíš len `make`, ukáž help
.DEFAULT_GOAL := help  # zobrazenie help pri samotnom `make`

SHELL := /bin/bash
NODE := node
NPM  := npm

DOCS_DIR  := docs
BUILD_DIR := build

# Build timestamp in UTC (used for footer "Last build")
BUILD_DATE := $(shell date -u '+%Y-%m-%d %H:%M:%S UTC')
# Release helpers (local tag push)
BRANCH ?= main
DATE   := $(shell date -u +%Y%m%d-%H%M%SZ)
VERSION ?= v$(DATE)
MSG     ?= Release $(VERSION)

# 🌿 Worktree deploy
DEPLOY_BRANCH = gh-pages-docusaurus
WORKTREE_DIR  = ../$(DEPLOY_BRANCH)
PAGES_DIR     = $(WORKTREE_DIR)/docs   # <- GH Pages „/docs“ režim

# macOS sed (BSD) potrebuje -i ''
SED_INPLACE := sed -E -i ''
FIND_MD := find $(DOCS_DIR) -type f \( -name "*.md" -o -name "*.mdx" \)

# KNIFES generator (CSV → MD)
# default CSV (SSOT export)
SCRIPTS_DIR := scripts
CSV_DEFAULT := data/KNIFE-OVERVIEW-ONLY.csv
# hlavný CSV (možno prebíjať v prostredí)
CSV_OVERVIEW ?= $(CSV_DEFAULT)
# fallback na overview, ak nie je zadané
CSV_BACKFILL ?= $(CSV_OVERVIEW)

# Minify toggle (default ON). Use: make build MINIFY=0  -> passes --no-minify
MINIFY ?= 1
BUILD_EXTRA :=
ifeq ($(MINIFY),0)
  BUILD_EXTRA := --no-minify
endif



.PHONY: \
  help help-auth help-actions \
  install dev clean build build-fast ci-build serve \
  check-links check-links-hard check-links-fast check-links-full fix-links \
  init-worktree check-worktree copy-build commit-deploy remove-worktree \
  push-main deploy full-deploy worktree-status \
  sandbox-from-main sandbox-from-worktree \
  stash-save stash-list stash-apply stash-drop \
  restore-folder restore-file restore-path restore-from-stash-file \
  delete-dotpages \
  actions-status actions-disable actions-enable \
  quickstart mode doctor next-steps \
  knifes-gen knife-new dev-gen build-gen \
  gen-dry dry-verify \
  knife-guid-backfill knife-meta-backfill \
  knife-verify knife-verify-csv-docs knife-verify-frontmatter \
  print-vars knife-audit-frontmatter \
  fm-fix fm-fix-dry fm-fix-file fm-fix-file-dry fm-set-slug-file knife-fm-add-missing knife-fm-add-missing-dry \
  release-ci release-ci-datetime \
  commit push tag push-tag release release-auto release-commit check-version knife-finish knife-finish-dry upgrade-docusaurus

# -------------------------
# 📌 Help
# -------------------------
help:
	@echo "# #########################################################################"
	@echo "#.                                        KNIFE Makefile v2 from 20250815 #"
	@echo "# 📄 Makefile – Docusaurus + Git Utils (unified)                          #"
	@echo "# Date: 20250815-0950 (patched, cleaned 20250916)                         #"
	@echo "# Description: Inštalácia, build, testy, validácia a WorkTree deploy.     #"
	@echo "# CESTA 2 (Actions) doplníme neskôr – tento Makefile je zámerne jednotný. #"
	@echo "# ❗ Pri deployi do worktree NIKDY nemaž .git; oprav: make check-worktree  #"
	@echo "# #########################################################################"
	@echo "===== 🧭 UX – pamäťový ťahák ====="
	@echo "  quickstart             - 3 kroky na bežný deň (najčastejší flow)"
	@echo "  mode                   - Zistí, či ideš cez Worktree alebo Actions"
	@echo "  doctor                 - Základná diagnostika (node/git/remote/worktree)"
	@echo "  next-steps             - Odporúčanie ďalšieho kroku podľa stavu"
	@echo "===== ⚙️ Actions toggles ====="
	@echo "  actions-status         - Zobrazí, či je workflow zapnutý/vypnutý"
	@echo "  actions-disable        - Dočasne vypne Actions (premenuje deploy.yml)"
	@echo "  actions-enable         - Znovu zapne Actions"
	@echo "  help-actions           - Krátky návod ku GitHub Pages (Actions)"
	@echo "===== 📚 Docusaurus ====="
	@echo "  install                - Nainštaluje docusaurus balíčky"
	@echo "  dev                    - Spustí dev server"
	@echo "  clean                  - Vyčistí cache a build adresáre"
	@echo "  build                  - Build (MINIFY=$(MINIFY)); prepínateľné: make build MINIFY=0"
	@echo "  build-fast             - Alias na 'make build MINIFY=0' (bez minify)"
	@echo "  ci-build               - CI-friendly build bez minifikácie (alias na 'make build MINIFY=0')"
	@echo "  serve                  - Lokálne naservíruj statický build"
	@echo "  upgrade-docusaurus    - Upgrade Docusaurus balíčkov na poslednú verziu (@latest)"
	@echo "===== 🚀 Release (CI) =====" 
	@echo "  release-ci             - SemVer patch bump (npm version patch) + push tag → spustí CI release"
	@echo "  release-ci-datetime    - Vytvorí tag vYYYYMMDD-HHMM (UTC) bez zmeny package.json a pushne ho"
	@echo "                         Príklad: v20250925-2315"
	@echo "                         Použitie: make release-ci | make release-ci-datetime"
	@echo "  (CI) vyžaduje: .github/workflows/release.yml"
	@echo "  APP_VERSION v pätičke sa nastaví v CI z tagu: $${GITHUB_REF_NAME}"
	@echo "===== 🏷️ Release (lokálne tagy) ====="
	@echo "  release            - vytvorí annotated tag $(VERSION) a pushne ho (spustí CI Release)"
	@echo "  release-auto       - automatický tag vYYYYMMDD-HHMMSSZ a pushne ho"
	@echo "  release-commit     - commit -> push vetvy -> tag -> push tag"
	@echo "  tag                - len vytvorí lokálny tag (bez pushu)"
	@echo "  push-tag           - pushne zadaný tag na origin"
	@echo "===== 🔍 Link Checker ====="
	@echo "  check-links            - DRY-RUN kontrola odkazov v docs/"
	@echo "  check-links-hard       - Striktná kontrola: spustí build"
	@echo "  check-links-fast       - Striktná kontrola s vypnutou minifikáciou"
	@echo "  check-links-full       - Full kontrola (docs + config + témy)"
	@echo "  fix-links              - Oprava …/index -> …/"
	@echo "===== 🌿 Worktree Deploy ====="
	@echo "  init-worktree          - Alias na check-worktree (založí/opraví worktree)"
	@echo "  check-worktree         - Overí/Vytvorí worktree (self-healing)"
	@echo "  copy-build             - Rsync build/ -> $(PAGES_DIR)/  (chráni .git)"
	@echo "  commit-deploy          - Commit & push z worktree"
	@echo "  remove-worktree        - Odpojí worktree (NEmaž .git ručne!)"
	@echo "  worktree-status        - Debug: git status + zoznam worktrees"
	@echo "  push-main              - Bezpečný push mainu (zastaví ak máš zmeny)"
	@echo "  deploy                 - check-worktree + build + copy-build + commit-deploy"
	@echo "  full-deploy            - check-worktree + push-main + build + copy + commit"
	@echo "===== 🧩 KNIFE Generátor ====="
	@echo "  dev-gen                - knifes-gen + dev (vygeneruje MD a spustí lokálny dev)"
	@echo "  build-gen              - knifes-gen + build (vygeneruje MD a spraví prod build)"
	@echo "  knifes-gen             - Generuje/aktualizuje MD zo CSV (prehľady + chýbajúce Kxxx skeletony)"
	@echo "  knife-new              - id=K062 title=\"...\" – rýchlo založí skeleton novej KNIFE"
	@echo "  gen-dry                - „suchý“ plán generovania (nič nezapisuje)"
	@echo "  dry-verify             - skrátená validácia cez generátor (bez zásahu)"
	@echo "  knife-finish           - Uzavri KNIFE: FM podsúborov -> backfill -> canonical fix -> verify -> gen"
	@echo "  knife-finish-dry       - DRY-RUN plán uzavretia KNIFE (nič nezapisuje)"
	@echo "===== ✅ Verifications & Backfill ====="
	@echo "  knife-guid-backfill    - Doplní chýbajúce 'guid' a 'dao' do KNIFE MD (len tam, kde chýbajú)"
	@echo "  knife-meta-backfill    - Z CSV doplní 'created'; ak chýba 'modified', nastaví ho na 'created'; voliteľne doplní category/type/priority"
	@echo "  knife-verify           - Kombinovaný check: CSV/docs + lint frontmatteru (povinné polia)"
	@echo "  knife-verify-csv-docs  - CSV/docs konzistencia (duplicitné ID, prázdne názvy, kolízie slugov, chýbajúce súbory)"
	@echo "  knife-verify-frontmatter - Lint povinných polí (guid, dao, id, title, created, modified)"
	@echo "  knife-audit-frontmatter - Audit existujúcich KNIFE index.md (guid/dao/dates/slug/locale)"
	@echo "===== 📝 Frontmatter Tools ====="
	@echo "  fm-fix                 - Prepíše frontmatter v docs/ tak, že 'slug' bude zakomentovaný (# slug: \"...\")"
	@echo "  fm-fix-dry             - Náhľad (DRY-RUN) zmien frontmatteru pre celý docs/ (vytlačí unified diff)"
	@echo "  fm-fix-file            - Prepíše frontmatter iba jedného súboru; použitie: make fm-fix-file file=PATH"
	@echo "  fm-fix-file-dry        - DRY-RUN pre jeden súbor; použitie: make fm-fix-file-dry file=PATH"
	@echo "  fm-set-slug-file       - Aktívny slug pre jediný súbor; použitie: make fm-set-slug-file file=PATH slug=/cesta/bez-locale"
	@echo "  knife-fm-add-missing   - Pridá default frontmatter do MD bez FM (idempotentne)"
	@echo "  knife-fm-add-missing-dry- DRY-RUN: ukáže, ktoré súbory by dostali frontmatter"

help-auth:
	@echo "===== 🔐 Autentikácia pre Worktree deploy ====="
	@echo "HTTPS (odporúčané na macOS):"
	@echo "  git remote -v   # má byť https://"
	@echo "  git config --global credential.helper osxkeychain"
	@echo "  pri prvom 'git push' zadaj PAT -> uloží sa do Keychain"
	@echo "SSH (alternatíva):"
	@echo "  ssh-keygen -t ed25519 -C 'tvoj@email'"
	@echo "  eval \"$$(/usr/bin/ssh-agent -s)\" && ssh-add $$HOME/.ssh/id_ed25519"
	@echo "  nahraj verejný kľúč do GitHub (Settings -> SSH and GPG keys)"
	@echo "  git remote set-url origin git@github.com:ORG/REPO.git"
	@echo "  test: ssh -T git@github.com"

help-actions:
	@echo "===== ⚙️ CI/CD (Cesta 2 – GitHub Actions → Pages) ====="
	@echo "1) Pridaj .github/workflows/deploy.yml (oficiálny Docusaurus workflow)."
	@echo "2) Settings -> Pages -> Build and deployment = GitHub Actions."
	@echo "3) V docusaurus.config nastav správny baseUrl (napr. '/knifes_overview/')."
	@echo "4) Po push do main sa build nasadí automaticky."

# -------------------------
# 🚀 Docusaurus Commands
# -------------------------

install:
	$(NPM) install

dev:
	BUILD_DATE="September 2025" NODE_OPTIONS=--max-old-space-size=16384 $(NPM) start

clean:
	$(NPM) run clear || true
	rm -rf $(BUILD_DIR) .docusaurus

build: clean
	BUILD_DATE="$(BUILD_DATE)" NODE_OPTIONS=--max-old-space-size=16384 $(NPM) run build -- $(BUILD_EXTRA)

build-fast:
	$(MAKE) build MINIFY=0

ci-build:
	$(MAKE) build MINIFY=0

serve:
	$(NPM) run serve

upgrade-docusaurus: ## Upgrade Docusaurus packages to latest version
	npm i @docusaurus/core@latest \
	      @docusaurus/plugin-google-gtag@latest \
	      @docusaurus/preset-classic@latest \
	      @docusaurus/module-type-aliases@latest \
	      @docusaurus/plugin-client-redirects@latest \
	      @docusaurus/tsconfig@latest \
	      @docusaurus/types@latest

# -------------------------
# 🔍 Link Checker
# -------------------------
check-links:
	@echo ">>> DRY-RUN: hľadám odkazy s '/index' a chýbajúce lokálne súbory"
	@grep -RInE '\]\(((\.\./|\./)+)[^)#]+/index(\.md)?\)' $(DOCS_DIR) --include "*.md" --include "*.mdx" || echo "  ✓ nič nenašiel"
	@echo
	@grep -Roh '\]\(([^)]+)\)' $(DOCS_DIR) --include "*.md" --include "*.mdx" \
	| sed 's/.*](\(.*\))/\1/' \
	| grep -vE '^(http|https|#|mailto:)' \
	| sort -u \
	| while read -r link; do \
		path="$(DOCS_DIR)/$${link#./}"; \
		if [[ ! -e "$$path" && ! -e "$${path%/}/index.md" ]]; then \
			echo "  ✗ $$link"; \
		fi; \
	done || true
	@echo "DRY-RUN done."

check-links-hard:
	@echo ">>> STRICT: validujem odkazy…"
	$(NPM) run build -- $(BUILD_EXTRA) || { echo "❌ Build failed"; exit 1; }

check-links-fast:
	@echo ">>> STRICT (no-minify): validujem odkazy…"
	$(MAKE) check-links-hard MINIFY=0

check-links-full:
	@echo ">>> FULL CHECK: kontrolujem odkazy v docs + configu + témach"
	@$(MAKE) check-links
	@grep -RIn "to: '/docs" docusaurus.config.ts || true
	@node scripts/check_config_paths.js || true

fix-links:
	@echo ">>> Opravujem odkazy …/index -> …/"
	@$(FIND_MD) -print0 | xargs -0 $(SED_INPLACE) \
	  -e 's#\]\(\.\.\/index\)#](../)#g' \
	  -e 's#\]\(\.\.\/\.\.\/index\)#](./)#g'

# -------------------------
# 🌿 Worktree Deploy – Self-healing + ochrany
# -------------------------

# Alias (nech help sedí)
init-worktree: check-worktree

## check-worktree: overí alebo vytvorí worktree pre $(DEPLOY_BRANCH); opraví ak je rozbitá
check-worktree:
	@if [ -d "$(WORKTREE_DIR)" ]; then \
	  if git -C "$(WORKTREE_DIR)" rev-parse --is-inside-work-tree >/dev/null 2>&1; then \
	    echo "✅ Worktree OK: $(WORKTREE_DIR) → $(DEPLOY_BRANCH)"; \
	  else \
	    echo "⚠️  $(WORKTREE_DIR) existuje, ale nevyzerá ako git worktree. Resetujem…"; \
	    rm -rf "$(WORKTREE_DIR)"; \
	    git worktree prune; \
	    git branch -D $(DEPLOY_BRANCH) 2>/dev/null || true; \
	  fi; \
	fi; \
	if ! git worktree list | grep -q "$(WORKTREE_DIR)"; then \
	  echo "ℹ️  Worktree pre $(DEPLOY_BRANCH) neexistuje. Vytváram…"; \
	  git fetch origin || true; \
	  if git ls-remote --exit-code --heads origin $(DEPLOY_BRANCH) >/dev/null 2>&1; then \
	    git worktree add -B $(DEPLOY_BRANCH) "$(WORKTREE_DIR)" origin/$(DEPLOY_BRANCH); \
	  else \
	    echo "ℹ️  Vetva $(DEPLOY_BRANCH) na remote neexistuje, zakladám lokálne…"; \
	    git branch -f $(DEPLOY_BRANCH) 2>/dev/null || true; \
	    git worktree add "$(WORKTREE_DIR)" $(DEPLOY_BRANCH); \
	    cd "$(WORKTREE_DIR)" && git commit --allow-empty -m "init $(DEPLOY_BRANCH)" && git push -u origin $(DEPLOY_BRANCH); \
	  fi; \
	fi

# Bezpečné kopírovanie buildu – vždy do /docs a len ak je to naozaj git repo
copy-build:
	@if ! git -C "$(WORKTREE_DIR)" rev-parse --is-inside-work-tree >/dev/null 2>&1; then \
	  echo "❌ $(WORKTREE_DIR) nie je git worktree. Spusť: make check-worktree"; \
	  exit 1; \
	fi
	mkdir -p "$(PAGES_DIR)"
	rsync -av --delete \
	  --filter='P .git' \
	  --filter='P .gitignore' \
	  "$(BUILD_DIR)/" "$(PAGES_DIR)/"

commit-deploy:
	@if ! git -C "$(WORKTREE_DIR)" rev-parse --is-inside-work-tree >/dev/null 2>&1; then \
	  echo "❌ $(WORKTREE_DIR) nie je git worktree. Spusť: make check-worktree"; \
	  exit 1; \
	fi
	cd $(WORKTREE_DIR) && git add -A
	cd $(WORKTREE_DIR) && git commit -m "Deploy $$(
	  date -u +'%Y-%m-%d %H:%M:%S UTC'
	)" || echo "⚠️ Žiadne zmeny na commit."
	cd $(WORKTREE_DIR) && git push origin $(DEPLOY_BRANCH)

# Rýchly lokálny deploy
deploy: check-worktree build copy-build commit-deploy

# Plný scenár: kontrola worktree + push main + build + deploy
full-deploy: check-worktree push-main build copy-build commit-deploy
	@echo "🎉 Full deploy úspešný → $(DEPLOY_BRANCH)"

remove-worktree:
	# Bezpečné odpojenie cez git (NEmaž .git ručne!)
	git worktree remove "$(WORKTREE_DIR)" 2>/dev/null || true
	git worktree prune || true

worktree-status:
	@git worktree list
	@echo "----"
	@git -C "$(WORKTREE_DIR)" status -sb || true

## push-main: Bezpečný push mainu
push-main:
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "❌ Máš necommitnuté zmeny na main! Najprv commitni/stashni."; \
		exit 1; \
	fi
	git push origin main
	@echo "✅ main pushnutý."

# -------------------------
# 🧪 Sandbox Commands
# -------------------------
sandbox-from-main:
	@if [ -z "$$name" ]; then echo "Použi: make sandbox-from-main name=<branch>"; exit 1; fi
	git checkout -b $$name main

sandbox-from-worktree:
	@if [ -z "$$name" ] || [ -z "$$base" ]; then echo "Použi: make sandbox-from-worktree name=<branch> base=<branch>"; exit 1; fi
	git checkout -b $$name $$base

# -------------------------
# 📦 Stash Commands
# -------------------------
stash-save:
	@if [ -z "$$m" ]; then echo "Použi: make stash-save m='správa'"; exit 1; fi
	git stash push -m "$$m"

stash-list:
	git stash list

stash-apply:
	@if [ -z "$$id" ]; then echo "Použi: make stash-apply id=<n>"; exit 1; fi
	git stash apply stash@{$$id}

stash-drop:
	@if [ -z "$$id" ]; then echo "Použi: make stash-drop id=<n>"; exit 1; fi
	git stash drop stash@{$$id}

# -------------------------
# 🎯 Restore from History
# -------------------------
# ⚠️ Každý riadok pod targetom MUSÍ začínať TABom (nie medzerami)!
restore-folder:
	@if [ -z "$$commit" ] || [ -z "$$path" ]; then \
		echo "❌ Použi: make restore-folder commit=<hash> path=<folder>"; \
		exit 1; \
	fi
	@git checkout $$commit -- $$path
	@echo "✅ Obnovené: $(path) z commitu $(commit)"
	@git status --short
	@echo "--- Zmenené súbory ---"
	@git diff --stat

restore-file:
	@if [ -z "$$commit" ] || [ -z "$$path" ]; then echo "Použi: make restore-file commit=<hash> path=<file>"; exit 1; fi
	git checkout $$commit -- $$path
	@echo "✅ Obnovené: $(path) z commitu $(commit)"
	@git status --short

restore-path:
	@echo "⚠️  Pozor: recepty v Makefile MÚSIA začínať TABom!"
	@if [ -z "$$commit" ] || [ -z "$$path" ]; then \
		echo "Použi: make restore-path commit=<hash> path=<file-or-dir>"; exit 1; \
	fi
	@echo "🔎 Pred zmenou (diff vs HEAD) pre '$$path':"
	@git diff --name-status -- $$path || true
	@echo "↩️  Obnovujem '$$path' z commitu $$commit…"
	@git checkout $$commit -- $$path
	@echo "✅ Hotovo. Zmenené súbory:"
	@git status --short -- $$path
	@echo "🔎 Po obnove (diff vs HEAD) pre '$$path':"
	@git diff --name-status -- $$path || true
	@echo "💡 Ak je to ono: git add $$path && git commit -m \"restore: $$path from $$commit\""
	@echo "✅ Obnovené: $(path) z commitu $(commit)"

restore-from-stash-file:
	@if [ -z "$(stash)" ] || [ -z "$(file)" ]; then \
		echo "Použi: make restore-from-stash-file stash=stash@{N} file=<path>"; \
		exit 1; \
	fi
	@git restore --source=$(stash) -- $(file)
	@echo "✅ Súbor '$(file)' obnovený zo stasha '$(stash)'"
	@git status --short

# -------------------------
# 🧹 Delete legacy MkDocs .pages
# -------------------------
delete-dotpages:
	@echo ">>> Odstraňujem všetky '.pages' súbory..."
	@find . -type f -name ".pages" -exec rm -f {} +
	@echo "✅ Hotovo. Súbory '.pages' boli zmazané."
	@echo "💡 Commitni: git add -A && git commit -m 'Remove .pages files'"

# -------------------------
# ⚙️ GitHub Actions – enable/disable by renaming workflow file
# -------------------------
WF_DIR := .github/workflows
WF_FILE := $(WF_DIR)/deploy.yml
WF_DISABLED := $(WF_FILE).disabled

actions-status:
	@if [ -f "$(WF_FILE)" ]; then \
	  echo "Actions workflow: ENABLED ($(WF_FILE))"; \
	elif [ -f "$(WF_DISABLED)" ]; then \
	  echo "Actions workflow: DISABLED ($(WF_DISABLED))"; \
	else \
	  echo "Actions workflow: NOT FOUND"; \
	fi

actions-disable:
	@mkdir -p $(WF_DIR)
	@if [ -f "$(WF_FILE)" ]; then \
	  mv "$(WF_FILE)" "$(WF_DISABLED)"; \
	  git add -A && git commit -m "ci: disable Actions deploy [noactions]" || true; \
	  echo "✅ Actions deaktivované (workflow súbor premenovaný)."; \
	else \
	  echo "ℹ️ Actions už vyzerá byť vypnuté (nenašiel som $(WF_FILE))."; \
	fi

actions-enable:
	@if [ -f "$(WF_DISABLED)" ]; then \
	  mv "$(WF_DISABLED)" "$(WF_FILE)"; \
	  git add -A && git commit -m "ci: enable Actions deploy"; \
	  echo "✅ Actions aktivované (workflow súbor obnovený)."; \
	else \
	  echo "ℹ️ Actions už vyzerá byť zapnuté (nenašiel som $(WF_DISABLED))."; \
	fi

# -------------------------
# 🧭 UX helpers
# -------------------------

quickstart:
	@echo "👋 Ahoj! Najčastejší denný flow:"
	@echo "  1) Uprav docs:          (napr. docs/sk/...)"
	@echo "  2) Lokálny test:        make dev   # alebo: make build && make serve"
	@echo "  3) Deployment:"
	@echo "     - Worktree:          make full-deploy"
	@echo "     - Actions (CI/CD):   git add -A && git commit -m 'msg' && git push"
	@echo ""
	@echo "ℹ️  Tipy:"
	@echo "  • PUSH bez CI:          commit msg obsahuje [noactions]"
	@echo "  • Prepínať Actions:     make actions-enable | make actions-disable"
	@echo "  • Zisti režim:          make mode"

mode:
	@echo "🔎 Režim nasadenia:"
	@if [ -d "$(WORKTREE_DIR)/.git" ]; then \
	  echo "  • Worktree:   ENABLED  → $(WORKTREE_DIR)"; \
	else \
	  echo "  • Worktree:   disabled (spusť: make check-worktree)"; \
	fi
	@if [ -f ".github/workflows/deploy.yml" ]; then \
	  echo "  • Actions:    ENABLED  (CI/CD beží na push)"; \
	elif [ -f ".github/workflows/deploy.yml.disabled" ]; then \
	  echo "  • Actions:    disabled (zapni: make actions-enable)"; \
	else \
	  echo "  • Actions:    nenašiel som workflow súbor (.github/workflows/deploy.yml)"; \
	fi
	@echo ""
	@echo "🧠 Odporúčanie:"
	@if [ -d "$(WORKTREE_DIR)/.git" ]; then \
	  echo "  • Pre okamžitý manual deploy použi: make full-deploy"; \
	else \
	  echo "  • Najprv vytvor worktree: make check-worktree (ak chceš Cestu 1)"; \
	fi
	@echo "  • Alebo použi CI/CD: commit + push (Cesta 2)."

doctor:
	@echo "🩺 Diagnostika…"
	@echo "  • Node: $$(node -v 2>/dev/null || echo 'n/a')"
	@echo "  • NPM:  $$(npm -v 2>/dev/null || echo 'n/a')"
	@echo "  • Git:  $$(git --version 2>/dev/null || echo 'n/a')"
	@echo "  • Remote origin: $$(git remote -v | awk 'NR==1{print $$2}')"
	@echo "  • Aktuálna vetva: $$(git rev-parse --abbrev-ref HEAD)"
	@if [ -d "$(WORKTREE_DIR)/.git" ]; then \
	  echo "  • Worktree: OK  ($(WORKTREE_DIR))"; \
	else \
	  echo "  • Worktree: MISSING (spusť: make check-worktree)"; \
	fi
	@if [ -f ".github/workflows/deploy.yml" ]; then \
	  echo "  • Actions:  ENABLED"; \
	elif [ -f ".github/workflows/deploy.yml.disabled" ]; then \
	  echo "  • Actions:  disabled (make actions-enable)"; \
	else \
	  echo "  • Actions:  workflow chýba (.github/workflows/deploy.yml)"; \
	fi
	@echo "✅ Done."

next-steps:
	@echo "🤖 Navrhovaný ďalší krok:"
	@if [ -d "$(WORKTREE_DIR)/.git" ]; then \
	  echo "  → make full-deploy   # skompiluje + skopíruje do worktree + pushne"; \
	else \
	  if [ -f ".github/workflows/deploy.yml" ]; then \
	    echo "  → git add -A && git commit -m 'update' && git push   # spustí CI/CD"; \
	  else \
	    echo "  → Spusti najprv: make check-worktree  (alebo zapni Actions)"; \
	  fi; \
	fi
	@echo "💡 Debug: make mode | make doctor"

# -------------------------
# 🧩 KNIFES generator (CSV → MD)
# -------------------------

## knifes-gen: CSV -> MD (prehľady + chýbajúce Kxxx súbory)
knifes-gen:
	@if [ ! -f "$(SCRIPTS_DIR)/build_knifes.mjs" ]; then \
		echo "❌ Chýba $(SCRIPTS_DIR)/build_knifes.mjs – skopíruj scripts/ do koreňa repozitára."; exit 1; \
	fi
	@if [ ! -f "$(strip $(CSV_OVERVIEW))" ]; then \
		echo "❌ Chýba CSV '$(strip $(CSV_OVERVIEW))'. Ulož export z Calc/Excel alebo použi: make knifes-gen csv=<path>"; \
		echo "   Príklad: make knifes-gen csv=data/KNIFE-OVERVIEW-ONLY.csv"; exit 1; \
	fi
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(strip $(CSV_OVERVIEW))"; fi; \
	node "$(SCRIPTS_DIR)/build_knifes.mjs" --csv "$$CSV" --root .

## knife-new: založí skeleton KNIFE
## Použitie: make knife-new id=K062 title="My Topic"
knife-new:
	@if [ -z "$(id)" ]; then echo "Použi: make knife-new id=K062 title='Názov'"; exit 1; fi
	@if [ ! -f "$(SCRIPTS_DIR)/new_knife.mjs" ]; then \
		echo "❌ Chýba $(SCRIPTS_DIR)/new_knife.mjs – skopíruj scripts/ do koreňa repozitára."; exit 1; \
	fi
	@FOLDER="docs/sk/knifes/$$(echo $(id) | tr 'A-Z' 'a-z')-*"; \
	if compgen -G "$$FOLDER" > /dev/null; then \
		echo "❌ KNIFE priečinok pre $(id) už existuje ($$FOLDER). Ukončujem."; exit 1; \
	fi
	@TITLE="$(title)"; if [ -z "$$TITLE" ]; then TITLE="New Topic"; fi; \
	node "$(SCRIPTS_DIR)/new_knife.mjs" "$(id)" "$$TITLE"

## Kombinované príkazy
dev-gen:
	node scripts/build_knifes.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root . --locale sk

build-gen: knifes-gen build

## Len suchý plán generovania (nič sa nezapisuje)
gen-dry:
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(strip $(CSV_OVERVIEW))"; fi; \
	node "$(SCRIPTS_DIR)/build_knifes.mjs" --csv "$$CSV" --root . --dry-run


## Dry-verify priamo cez generátor
dry-verify:
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(strip $(CSV_OVERVIEW))"; fi; \
	node "$(SCRIPTS_DIR)/build_knifes.mjs" --csv "$$CSV" --root . --dry-verify

# -------------------------
# 🧵 KNIFE Finish (one-button flow)
# -------------------------
.PHONY: knife-finish knife-finish-dry

## knife-finish-dry: suchý náhľad krokov (bez zápisu)
knife-finish-dry:
	@echo "① FM podsúbory – DRY"
	@$(MAKE) knife-fm-add-missing-dry
	@echo "② Verify (CSV/docs + FM)"
	@$(MAKE) knife-verify
	@echo "③ Gen-dry (CSV → plán)"
	@$(MAKE) gen-dry

## knife-finish: FM podsúbory -> backfill -> canonical fix -> verify -> gen
knife-finish:
	@echo "① FM podsúbory – dopĺňam…"
	@$(MAKE) knife-fm-add-missing
	@echo "② Backfill GUID/DAO…"
	@$(MAKE) knife-guid-backfill
	@echo "③ Backfill meta (created/modified/category/type/priority)…"
	@$(MAKE) knife-meta-backfill
	@echo "④ Canonical frontmatter (fm-fix)…"
	@$(MAKE) fm-fix
	@echo "⑤ Verify (CSV/docs + FM)…"
	@$(MAKE) knife-verify
	@echo "⑥ Generate overviews (CSV → MD)…"
	@$(MAKE) knifes-gen
	@echo "✅ KNIFE finish hotový. Pokračuj: 'make dev' alebo 'make build'"

# -------------------------
# ✅ Backfill & Verify
# -------------------------

# 1) Doplní guid + dao, nechýbajúce iba
knife-guid-backfill:
	python3 tools/guid_backfill.py docs

# 2) Backfill z CSV (created, category, type, priority, atď.)
#    - nastaví modified==created, ak modified chýba
knife-meta-backfill:
	@echo "ℹ️  Používam CSV: $(strip $(CSV_BACKFILL))"
	@test -f "$(strip $(CSV_BACKFILL))" || (echo "❌ Chýba CSV '$(strip $(CSV_BACKFILL))'. Zadaj: make knife-meta-backfill CSV_BACKFILL=path/to.csv"; exit 1)
	@python3 tools/knife_backfill_from_csv.py "$(strip $(CSV_BACKFILL))" docs

# 3a) CSV/docs konzistencia (duplicitné ID, prázdne názvy, kolízie slugov)
## knife-verify-csv-docs: skontroluje CSV + docs (duplicitné ID, prázdne Short Title, kolízie slugov)
knife-verify-csv-docs:
	@echo "🔎 Kontrolujem KNIFES CSV a docs..."
	@if [ ! -f "$(strip $(CSV_OVERVIEW))" ] && [ -z "$(strip $(CSV_BACKFILL))" ]; then \
		echo "❌ Chýba CSV '$(strip $(CSV_OVERVIEW))' (alebo zadaj CSV_BACKFILL=...)"; exit 1; \
	fi
	@CSV="$(strip $(CSV_BACKFILL))"; if [ -z "$$CSV" ]; then CSV="$(strip $(CSV_OVERVIEW))"; fi; \
	echo "→ Duplicitné ID v CSV:"; \
	cut -d',' -f1 "$$CSV" | grep -E '^K[0-9]{3}' | sort | uniq -d || echo "  ✓ nič nenašiel"; \
	echo "→ Prázdne názvy v CSV:"; \
	awk -F',' 'NR>1 && $$3=="" {print $$1}' "$$CSV" || echo "  ✓ nič nenašiel"; \
	echo "→ Kolízie slugov v docs/sk/knifes:"; \
	find docs/sk/knifes -type f -name "*.md" -exec grep -H "^slug:" {} \; | cut -d':' -f2- | sort | uniq -d || echo "  ✓ nič nenašiel"; \
	echo "✅ knife-verify-csv-docs hotovo."

# 3b) Lint povinných polí vo frontmatteri

## knife-verify-frontmatter: lint povinných polí len pre KNIFE index.md (podľa folderov)
knife-verify-frontmatter:
	@echo "🔎 Kontrolujem KNIFE frontmatter (iba index.md)…"
	@find docs/sk/knifes -name index.md -print0 \
	| xargs -0 -n1 -I {} python3 tools/frontmatter_lint.py --file "{}" \
	  --required guid dao id title created modified
	@if [ -d "docs/en/knifes" ]; then \
	  find docs/en/knifes -name index.md -print0 \
	  | xargs -0 -n1 -I {} python3 tools/frontmatter_lint.py --file "{}" \
	    --required guid dao id title created modified; \
	fi
# 3) Kombinovaný alias
## knife-verify: spustí oba checky (CSV/docs + frontmatter)
knife-verify: knife-verify-csv-docs knife-verify-frontmatter
	@echo "✅ All KNIFE verifications passed."

# Debug: vypíš kľúčové premenné (na odhalenie whitespace/chybných ciest)
.PHONY: print-vars
print-vars:
	@echo "[CSV_DEFAULT]  = '$(strip $(CSV_DEFAULT))'"
	@echo "[CSV_OVERVIEW] = '$(strip $(CSV_OVERVIEW))'"
	@echo "[CSV_BACKFILL] = '$(strip $(CSV_BACKFILL))'"
	@echo "[DOCS_DIR]     = '$(strip $(DOCS_DIR))'"
	@echo "[SCRIPTS_DIR]  = '$(strip $(SCRIPTS_DIR))'"

knife-validate-csv:
	node dev/csv/knife-csv-verify.mjs data/KNIFE-OVERVIEW-ONLY.csv --schema dev/csv/schema/header.aliases.json || \
	( echo "❌ CSV validation failed – fix ODS or update dev/csv/schema/header.aliases.json"; exit 1 )

knifes-build-safe:
	@$(MAKE) knife-validate-csv
	node scripts/build_knifes.mjs --csv data/KNIFE-OVERVIEW-ONLY.csv --root . --locale sk

knife-audit-frontmatter:
	node scripts/knife-frontmatter-audit.mjs docs/sk/knifes	

# -------------------------
# 📝 Frontmatter Tools
# -------------------------

## fm-fix: Prejde celý docs/ a zakomentuje 'slug' (bez zápisu konkrétnej hodnoty)
fm-fix:
	@python3 tools/fix_frontmatter.py --root $(DOCS_DIR)

## fm-fix-dry: DRY-RUN náhľad zmien (vypíše unified diff), nič nezapisuje
fm-fix-dry:
	@python3 tools/fix_frontmatter.py --root $(DOCS_DIR) --dry-run

## fm-fix-file: Prepíše frontmatter iba jedného súboru (vyžaduje file=PATH)
fm-fix-file:
	@if [ -z "$$file" ]; then echo "Použi: make fm-fix-file file=PATH"; exit 1; fi
	@python3 tools/fix_frontmatter.py --file "$$file"

## fm-fix-file-dry: DRY-RUN iba pre jeden súbor (vyžaduje file=PATH)
fm-fix-file-dry:
	@if [ -z "$$file" ]; then echo "Použi: make fm-fix-file-dry file=PATH"; exit 1; fi
	@python3 tools/fix_frontmatter.py --file "$$file" --dry-run


## fm-set-slug-file: Zapíše aktívny slug pre jediný súbor (vyžaduje file=PATH a slug=/cesta)
fm-set-slug-file:
	@if [ -z "$$file" ] || [ -z "$$slug" ]; then echo "Použi: make fm-set-slug-file file=PATH slug=/cesta/bez-locale"; exit 1; fi
	@python3 tools/fix_frontmatter.py --file "$$file" --set-slug --slug-val "$$slug"

# ## knife-fm-add-missing: doplní YAML frontmatter do .md súborov bez FM (idempotentné)
.PHONY: knife-fm-add-missing knife-fm-add-missing-dry

knife-fm-add-missing:
	@python3 tools/knife_frontmatter_add_missing.py
	@echo "→ Next: make knife-guid-backfill knife-meta-backfill fm-fix knife-verify"

knife-fm-add-missing-dry:
	@python3 tools/knife_frontmatter_add_missing.py --dry
#
# -------------------------
# 🚀 Release – CI-based (GitHub Actions)
# -------------------------
.PHONY: release-ci
release-ci:
	@echo "🔖 Pripravujem CI release (patch bump + push tag)…"
	@current=$$(node -p "require('./package.json').version"); \
	echo "   Aktuálna verzia: $$current"; \
	npm version patch -m "chore(release): %s"; \
	git push && git push --tags; \
	newv=$$(node -p "require('./package.json').version"); \
	echo "✅ Pushnutý tag v$$newv – CI workflow sa spustí na serveri";

# Alternatíva: dátumový tag (bez zásahu do package.json)
.PHONY: release-ci-datetime
release-ci-datetime:
	@echo "🔖 Pripravujem CI release (datetime tag)…"
	@ts=$$(date -u '+%Y%m%d-%H%M'); \
	TAG="v$$ts"; \
	echo "   Tag: $$TAG (UTC)"; \
	git tag -a "$$TAG" -m "release $$ts"; \
	git push origin "$$TAG"; \
#	echo "✅ Pushnutý tag $$TAG – CI workflow sa spustí na serveri";

# -------------------------
# 🏷️ Release helpers – local tag & push
# -------------------------

.PHONY: check-version commit push tag push-tag release release-auto release-commit

check-version: ## Overí formát verzie (musí začínať na 'v')
	@printf '%s' "$(VERSION)" | grep -Eq '^v[0-9A-Za-z._-]+$$' \
	|| (echo "❌ VERSION musí začínať na 'v' (napr. v1.0.0 alebo v20250926-0745)" && exit 1)

commit: ## Commit všetkých zmien s COMMIT_MSG
	@test -n "$(COMMIT_MSG)" || (echo "Použi: make commit COMMIT_MSG='Popis'" && exit 1)
	git add -A
	git commit -m "$(COMMIT_MSG)"

push: ## Push aktuálnej vetvy
	git push origin $(BRANCH)

tag: check-version ## Vytvorí annotated tag lokálne
	git tag -a $(VERSION) -m "$(MSG)"

push-tag: check-version ## Pushne tag na origin
	git push origin $(VERSION)

release: check-version ## Tag -> push tag (spustí GH Action Release)
	@echo "🏷️  Tagging $(VERSION) ..."
	$(MAKE) tag VERSION=$(VERSION) MSG="$(MSG)"
	@echo "🚀 Pushing tag $(VERSION) ..."
	$(MAKE) push-tag VERSION=$(VERSION)
	@echo "✅ 🚀 Release $(VERSION) hotový."

release-auto: ## Auto verzia vYYYYMMDD-HHMMSSZ
	$(MAKE) release VERSION=$(VERSION) MSG="$(MSG)"

release-commit: check-version ## Commit -> push -> tag -> push tag
	@test -n "$(MSG)" || (echo "MSG je prázdny. Pridaj MSG='...'" && exit 1)
	@echo "📝 Commit & push na $(BRANCH) ..."
	$(MAKE) commit COMMIT_MSG="$(MSG)" || true
	$(MAKE) push
	@echo "🏷️  Tagging & push tag ..."
	$(MAKE) tag VERSION=$(VERSION) MSG="$(MSG)"
	$(MAKE) push-tag VERSION=$(VERSION)
	@echo "✅ 🚀 Release $(VERSION) hotový."
	
