# -------------------------
# 📄 Makefile – Docusaurus + Git Utils (unified)
# Date: 20250815-0950 (patched)
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
.DEFAULT_GOAL := help.  # zapríčiní zobrazenie help ak zadám len  make bez parametrov

SHELL := /bin/bash
NODE := node
NPM  := npm

DOCS_DIR  := docs
BUILD_DIR := build

# 🌿 Worktree deploy
DEPLOY_BRANCH = gh-pages-docusaurus
WORKTREE_DIR  = ../$(DEPLOY_BRANCH)
PAGES_DIR     = $(WORKTREE_DIR)/docs   # <- GH Pages „/docs“ režim

# macOS sed (BSD) potrebuje -i ''
SED_INPLACE := sed -E -i ''
FIND_MD := find $(DOCS_DIR) -type f \( -name "*.md" -o -name "*.mdx" \)
# KNIFES generator (CSV → MD)
SCRIPTS_DIR := scripts
DATA_CSV    := data/KNIFE-OVERVIEW-ONLY.csv

.PHONY: help help-auth help-actions \
        install dev clean build serve \
        check-links check-links-hard check-links-full fix-links \
        init-worktree check-worktree copy-build commit-deploy remove-worktree \
        push-main deploy full-deploy worktree-status \
        sandbox-from-main sandbox-from-worktree \
        stash-save stash-list stash-apply stash-drop \
        restore-folder restore-file restore-path restore-from-stash-file \
        delete-dotpages \
        actions-status actions-disable actions-enable \
		quickstart mode doctor next-steps. knifes-gen knife-new dev-gen build-gen knife-verify \  # UX zlepšenie
		gen-dry dry-verify

# -------------------------
# 📌 Help
# -------------------------
help:
	@echo "# #########################################################################"
	@echo "#.                                        KNIFE Makefile v2 from 20250815 #"
	@echo "# 📄 Makefile – Docusaurus + Git Utils (unified)                          #"
	@echo "# Date: 20250815-0950 (patched)                                           #"
	@echo "# Description: Inštalácia, build, testy, validácia a WorkTree deploy.     #"
	@echo "# CESTA 2 (Actions) doplníme neskôr – tento Makefile je zámerne jednotný. #"
	@echo "# ❗ Pri deployi do worktree NIKDY nemaž .git; oprav: make check-worktree  #"
	@echo "# #########################################################################"
	@echo "===== 🧭 UX – pamäťový ťahák ====="
	@echo "  quickstart          - 3 kroky na bežný deň (najčastejší flow)"
	@echo "  mode                - Zistí, či ideš cez Worktree alebo Actions"
	@echo "  doctor              - Základná diagnostika (node/git/remote/worktree)"
	@echo "  next-steps          - Odporúčanie ďalšieho kroku podľa stavu"
	@echo "===== ⚙️ Actions toggles ====="
	@echo "  actions-status      - Zobrazí, či je workflow zapnutý/vypnutý"
	@echo "  actions-disable     - Dočasne vypne Actions (premenuje deploy.yml)"
	@echo "  actions-enable      - Znovu zapne Actions"
	@echo "  help-actions        - Krátky návod ku GitHub Pages (Actions)"
	@echo "===== 📚 Docusaurus ====="
	@echo "	 install             - nainstaluje docusaurus balicky"
	@echo "  dev                 - Spusti dev server"
	@echo "  clean               - Vyčisti cache a build adresáre"
	@echo "  build               - Striktný build (onBrokenLinks: throw)"
	@echo "  serve               - Lokálne naservíruj statický build"
	@echo "===== 🔍 Link Checker ====="
	@echo "  check-links         - DRY-RUN kontrola odkazov v docs/"
	@echo "  check-links-hard    - Striktná kontrola: spustí build"
	@echo "  check-links-full    - Full kontrola (docs + config + témy)"
	@echo "  fix-links           - Oprava …/index -> …/"
	@echo "===== 🌿 Worktree Deploy ====="
	@echo "  init-worktree       - Alias na check-worktree (založí/opraví worktree)"
	@echo "  check-worktree      - Overí/Vytvorí worktree (self-healing)"
	@echo "  copy-build          - Rsync build/ -> $(PAGES_DIR)/  (chráni .git)"
	@echo "  commit-deploy       - Commit & push z worktree"
	@echo "  remove-worktree     - Odpojí worktree (NEmaž .git ručne!)"
	@echo "  worktree-status     - Debug: git status + zoznam worktrees"
	@echo "  push-main           - Bezpečný push mainu (zastaví ak máš zmeny)"
	@echo "  deploy              - check-worktree + build + copy-build + commit-deploy"
	@echo "  full-deploy         - check-worktree + push-main + build + copy + commit"
	@echo "===== 🔐 Autentikácia ====="
	@echo "  help-auth           - Ako nastaviť HTTPS/SSH prístup (PAT/Keychain/SSH)"
	@echo "===== 🧩 KNIFE Generátor – kombinované ====="
	@echo "  dev-gen             - Makrocieľ: knifes-gen + dev (vygeneruje MD z CSV a spraví lokálny dev build/serve)."
	@echo "  build-gen           - Makrocieľ: knifes-gen + build (vygeneruje MD a spraví produkčný build)."
	@echo "  knifes-gen          - Generuje/aktualizuje MD súbory zo CSV (prehľady + chýbajúce Kxxx skeletony)."
	@echo "  knife-new           - id=K062 title=\"...\" – rýchlo vytvorí skeleton pre novú KNIFE (adresár, súbor, frontmatter)."
	@echo "  knife-verify        - Validácie CSV/docs (duplicitné ID, prázdne názvy, kolízie slugov, chýbajúce súbory atď.)."
	@echo "  gen-dry             - „suchý“ plán generovania (čo by sa vytvorilo/aktualizovalo), ale nič nezapisuje."
	@echo "  dry-verify          - skrátená verzia validácií cez generátor (nezasahuje do súborov)."



help-auth:
	@echo "===== 🔐 Autentikácia pre Worktree deploy ====="
	@echo "HTTPS (odporúčané na macOS):"
	@echo "  git remote -v   # má byť https://"
	@echo "  git config --global credential.helper osxkeychain"
	@echo "  pri prvom 'git push' zadaj PAT -> uloží sa do Keychain"
	@echo "  SSH (alternatíva):"
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
	$(NPM) start

clean:
	$(NPM) run clear || true
	rm -rf $(BUILD_DIR) .docusaurus

build: clean
	$(NPM) run build

serve:
	$(NPM) run serve

# -------------------------
# 🔍 Link Checker
# -------------------------
check-links:
	@echo ">>> DRY-RUN: hľadám odkazy s '/index' a chýbajúce lokálne súbory"
	@grep -RInE '\]\(((\.\.\/|\.\/)+)[^)#]+/index(\.md)?\)' $(DOCS_DIR) --include "*.md" --include "*.mdx" || echo "  ✓ nič nenašiel"
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
	$(NPM) run build || { echo "❌ Build failed"; exit 1; }

check-links-full:
	@echo ">>> FULL CHECK: kontrolujem odkazy v docs + configu + témach"
	@$(MAKE) check-links
	@grep -RIn "to: '/docs" docusaurus.config.ts || true
	@node scripts/check_config_paths.js || true

fix-links:
	@echo ">>> Opravujem odkazy …/index -> …/"
	@$(FIND_MD) -print0 | xargs -0 $(SED_INPLACE) \
	  -e 's#\]\(\.\.\/index\)#](../)#g' \
	  -e 's#\]\(\.\.\/\.\.\/index\)#](../../)#g'

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

# Bezpečné kopírovanie buildu – vždy do /docs a len ak je toozaj git repo
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
	cd $(WORKTREE_DIR) && git commit -m "Deploy $$(date -u +'%Y-%m-%d %H:%M:%S UTC')" || echo "⚠️ Žiadne zmeny na commit."
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
	@echo "  • Chceš PUSH bez spustenia CI? použi tag v správe: [noactions]"
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
#
# -------------------------
# 🧩 KNIFES generator (CSV → MD)
# -------------------------

## knifes-gen: CSV -> MD (prehľady + chýbajúce Kxxx súbory)
knifes-gen:
	@if [ ! -f "$(SCRIPTS_DIR)/build_knifes.mjs" ]; then \
		echo "❌ Chýba $(SCRIPTS_DIR)/build_knifes.mjs – skopíruj scripts/ do koreňa repozitára."; exit 1; \
	fi
	@if [ ! -f "$(DATA_CSV)" ]; then \
		echo "❌ Chýba CSV '$(DATA_CSV)'. Ulož export z Calc/Excel alebo použi: make knifes-gen csv=<path>"; \
		echo "   Príklad: make knifes-gen csv=data/KNIFE-OVERVIEW-ONLY.csv"; exit 1; \
	fi
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(DATA_CSV)"; fi; \
	node "$(SCRIPTS_DIR)/build_knifes.mjs" --csv "$$CSV" --root .

## knife-new: založí skeleton KNIFE
## Použitie: make knife-new id=K062 title="My Topic"
knife-new:
	@if [ -z "$(id)" ]; then echo "Použi: make knife-new id=K062 title='Názov'"; exit 1; fi
	@if [ ! -f "$(SCRIPTS_DIR)/new_knife.mjs" ]; then \
		echo "❌ Chýba $(SCRIPTS_DIR)/new_knife.mjs – skopíruj scripts/ do koreňa repozitára."; exit 1; \
	fi
	@FOLDER="docs/sk/KNIFES/$$(echo $(id) | tr 'A-Z' 'a-z')-*"; \
	if compgen -G "$$FOLDER" > /dev/null; then \
		echo "❌ KNIFE priečinok pre $(id) už existuje ($$FOLDER). Ukončujem."; exit 1; \
	fi
	@TITLE="$(title)"; if [ -z "$$TITLE" ]; then TITLE="New Topic"; fi; \
	node "$(SCRIPTS_DIR)/new_knife.mjs" "$(id)" "$$TITLE"

## Kombinované príkazy
dev-gen: knifes-gen dev
build-gen: knifes-gen build

# -------------------------
# 🧪 KNIFES verify (consistency checks)
# -------------------------

## knife-verify: skontroluje CSV + docs (duplicitné ID, prázdne Short Title, kolízie slugov)
knife-verify:
	@echo "🔎 Kontrolujem KNIFES CSV a docs..."
	@if [ ! -f "$(DATA_CSV)" ]; then \
		echo "❌ Chýba CSV '$(DATA_CSV)'"; exit 1; \
	fi
	@# Duplicitné ID v CSV
	@echo "→ Duplicitné ID v CSV:"
	@cut -d',' -f1 "$(DATA_CSV)" | grep -E '^K[0-9]{3}' | sort | uniq -d || echo "  ✓ nič nenašiel"
	@# Prázdne Short Title
	@echo "→ Prázdne Short Title v CSV:"
	@awk -F',' 'NR>1 && $$3=="" {print $$1}' "$(DATA_CSV)" || echo "  ✓ nič nenašiel"
	@# Kolízie slugov v docs/sk/KNIFES
	@echo "→ Kolízie slugov v docs/sk/KNIFES:"
	@find docs/sk/KNIFES -type f -name "*.md" -exec grep -H "^slug:" {} \; | cut -d':' -f2- | sort | uniq -d || echo "  ✓ nič nenašiel"
	@echo "✅ knife-verify hotovo."


## Len suchý plán generovania (nič sa nezapisuje)
gen-dry:
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(DATA_CSV)"; fi; \
	node "$(SCRIPTS_DIR)/build_knifes.mjs" --csv "$$CSV" --root . --dry-run

## Dry-verify priamo cez generátor
dry-verify:
	@CSV="$(csv)"; if [ -z "$$CSV" ]; then CSV="$(DATA_CSV)"; fi; \
	node "$(SCRIPTS_DIR)/build_knifes.mjs" --csv "$$CSV" --root . --dry-verify