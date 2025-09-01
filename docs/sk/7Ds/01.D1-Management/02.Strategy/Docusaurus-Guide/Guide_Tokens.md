# Token Management
Details about how to manage tokens, security practices, and usage examples.

# Git Worktree Deploy Guide

## 1. Úvod

Tento návod popisuje proces nasadenia statických stránok (napr. Docusaurus, MkDocs) na GitHub Pages pomocou `git worktree`. Tento prístup umožňuje mať samostatnú deploy vetvu bez narušenia hlavného vývojového stromu.

---

## 2. Prečo `git worktree`

* **Bezpečné oddelenie** – obsah pre produkciu je v samostatnom priečinku.
* **Priamy push na vetvu** – obchádza GitHub Actions a šetrí minúty v free programe.
* **Rýchlejšie opakovanie** – nie je nutné opakovane klonovať repozitár.

---

## 3. Premenné v Makefile

Príklad nastavení:

```makefile
DEPLOY_BRANCH=gh-pages-docusaurus
WORKTREE_DIR=../gh-pages-docusaurus
BUILD_DIR=build
```

* **DEPLOY\_BRANCH** – vetva, na ktorú sa nasadzuje.
* **WORKTREE\_DIR** – priečinok, kde sa pripojí deploy vetva.
* **BUILD\_DIR** – priečinok s výsledkom buildu.

> **Pozor:** TABy v Makefile musia byť skutočné tabulátory, nie medzery.

---

## 4. Makefile ciele

### 4.1 Inicializácia worktree

```makefile
init-worktree:
	git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH) || git branch $(DEPLOY_BRANCH) && git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH)
```

* Pridá nový worktree alebo vytvorí vetvu, ak neexistuje.

### 4.2 Kontrola worktree

```makefile
check-worktree:
	@if ! git worktree list | grep -q "$(WORKTREE_DIR)"; then \
		echo "⚠️  Worktree pre $(DEPLOY_BRANCH) neexistuje. Vytváram..."; \
		git fetch origin || true; \
		if git ls-remote --exit-code --heads origin $(DEPLOY_BRANCH) >/dev/null 2>&1; then \
			git worktree add -B $(DEPLOY_BRANCH) $(WORKTREE_DIR) origin/$(DEPLOY_BRANCH); \
		else \
			echo "ℹ️  Vetva $(DEPLOY_BRANCH) na remote neexistuje, zakladám lokálne…"; \
			git branch -f $(DEPLOY_BRANCH) || true; \
			git worktree add $(WORKTREE_DIR) $(DEPLOY_BRANCH); \
			cd $(WORKTREE_DIR) && git commit --allow-empty -m "init $(DEPLOY_BRANCH)" && git push -u origin $(DEPLOY_BRANCH); \
		fi; \
	fi
	@echo "✅ Worktree OK: $(WORKTREE_DIR) → $(DEPLOY_BRANCH)"
```

* Overí existenciu worktree, prípadne ho vytvorí.

### 4.3 Kopírovanie buildu

```makefile
copy-build:
	rsync -av --delete $(BUILD_DIR)/ $(WORKTREE_DIR)/
```

* Synchronizuje obsah `build/` do priečinka worktree.

### 4.4 Commit a push

```makefile
commit-deploy:
	cd $(WORKTREE_DIR) && git add . && git commit -m "Manual Docusaurus deploy" || echo "⚠️  Žiadne zmeny na commit."
	cd $(WORKTREE_DIR) && git push origin $(DEPLOY_BRANCH)
```

* Commitne a pushne zmeny na remote.

### 4.5 Úplný deploy

```makefile
full-deploy: check-worktree push-main build copy-build commit-deploy
	@echo "🎉 Full deploy úspešný → $(DEPLOY_BRANCH)"
```

* Prebehne celý proces od kontroly až po nasadenie.

---

## 5. Najčastejšie problémy

1. **`fatal: not a git repository`** – priečinok worktree je poškodený alebo neexistuje.
2. **`Žiadne zmeny na commit`** – v build priečinku nie sú nové súbory.
3. **Chýbajúci TAB v Makefile** – spôsobuje chybu pri behu.

---

## 6. Odporúčanie pre študentov

* Ak nechcú riešiť worktree, môžu použiť **default GitHub Pages deploy** cez Actions.
* Worktree deploy odporúčame, keď chcú rýchlosť a úplnú kontrolu nad obsahom.

---

## 7. Poznámka k jazykovým mutáciám

* Pri default Pages deploy jazykové mutácie fungujú, ale build musí byť nakonfigurovaný tak, aby výsledná štruktúra adresárov obsahovala všetky jazyky v jednej publikovanej vetve.
