---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "REF-UAT-001"
guid: "63773bd8-2732-4e66-8aee-00deb8db06a1"
dao: "knife"
title: "REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT"
description: ""
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "governance"
type: "user-guide"
priority: "top"
tags: ["GIT","UAT","Workflow"]
locale: "sk"
created: "2025-10-05"
modified: "-"
status: "inprogress"
privacy: "public"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Educational purposes only."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: ""
author_id: ""
author_did: ""
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "Presun zmien z FIX do UAT"
sidebar_label: "REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT"
---

# 🧭 Postup pre presun zmien z vetvy **FIX** do **UAT**

<!-- fm-visible: start -->
> **GUID:** `63773bd8-2732-4e66-8aee-00deb8db06a1`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

Tento postup popisuje odporúčaný spôsob, ako presunúť stabilizované zmeny z pracovnej vetvy `fix/*` do testovacej vetvy `UAT`.  
Cieľom je zachovať transparentnosť, možnosť spätnej kontroly a zamedziť nechceným zmenám v produkcii.

---

## 🧩 1. Overenie lokálneho stavu

Pred akoukoľvek akciou sa uisti, že máš všetky zmeny uložené a commitnuté:

```bash
git status
git add .
git commit -m "fix: final UAT preparation"
```

Ak hlási `nothing to commit, working tree clean`, všetko je pripravené.

---

## 🧭 2. Vytvorenie vetvy UAT (ak ešte neexistuje)

Over existenciu vetvy:

```bash
git branch
```

Ak `UAT` chýba, vytvor ju z aktuálneho `main` (alebo `develop` podľa procesu):

```bash
git checkout main
git pull origin main
git checkout -b UAT
git push -u origin UAT
```

---

## 🔀 3. Vytvorenie Pull Requestu z FIX → UAT

1. Prejdi na GitHub repozitár.  
2. Klikni na **Compare & pull request**.  
3. Nastav:
   - **Base branch:** `UAT`
   - **Compare branch:** `fix/fm-stabilize` (alebo tvoja aktuálna fix vetva)
4. Vyplň popis (napr. *„Synchronizácia FM a CSV, testované – pripravené pre UAT.“*).
5. Klikni **Create pull request**.

---

## 🧪 4. Overenie a test v UAT

Po merge do `UAT`:

```bash
git checkout UAT
git pull origin UAT
make verify
make knifes-gen-dry
```

✅ Over, že:
- sa všetky KNIFE súbory generujú správne,
- CSV zodpovedá realite,
- nevznikli nové GUIDy bez dôvodu.

---

## 🚀 5. Príprava na merge do MAIN (produkcia)

Keď je `UAT` overený:

```bash
git checkout main
git pull origin main
git merge --no-ff UAT -m "merge: verified UAT → main"
git push origin main
```

---

## 🧾 6. Poznámky a odporúčania

- `FIX` = technické úpravy a ladenie  
- `UAT` = testovanie a validácia  
- `MAIN` = produkčný obsah

Každá vetva má svoj účel – nikdy nerob úpravy priamo v `UAT` alebo `MAIN`.  
Ak potrebuješ opraviť drobnosti, vytvor novú `fix/*` vetvu a znova ju pošli cez PR.

---

## 📦 7. Odporúčané príkazy pre opakovanie

```bash
make csv-guid-sync-dry
make knifes-csv-scan
make knifes-gen-dry
```

Tieto príkazy pomáhajú overiť, že všetky KNIFE majú správne GUID, FM a väzby pred prenosom.

---

> 💡 **Tip:** Ak chceš dať študentom tento proces ako cvičenie, pridaj ho do `docs/sk/ref/UAT-Promotion-Guide.md`  
> alebo ako úlohu v `GitDocs-Lab` template s parametrom `branch: fix → UAT`.