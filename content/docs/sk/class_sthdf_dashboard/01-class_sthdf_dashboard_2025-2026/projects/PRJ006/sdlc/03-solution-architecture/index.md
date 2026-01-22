---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.925075+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "a1b9d4f3-6750-4610-8736-7d4166435610"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "03 solution architecture"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "{{DESCRIPTION}}"


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: ""

# Priorita (low/medium/high) – voliteľné
priority: ""

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: []


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2025-11-28 16:54"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2025-11-28 16:54"

# Stav dokumentu – default "backlog"
status: "backlog"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Roman Kazicka"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ""

# URL pôvodného repozitára
origin_repo_url: ""

# Commit pôvodu
origin_commit: ""

# Branch pôvodu
origin_branch: ""

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: "CAA"

# Pôvodný autor
origin_author: "Roman Kazicka"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

# 03-Solution Architecture

## 1. Kontext riešenia
V projekte **Woodies** je „riešenie“ chápané ako **digitálny systém** pre návrh drevených hlavolamov – od analýzy a požiadaviek až po finálne CAD výstupy pripravené pre výrobu. 

Solution architektúra sa nezameriava na výrobnú linku, logistiku alebo predaj, ale na:
- návrhový proces
- nástroje
- dátové artefakty
- kontrolné mechanizmy
- schopnosť riešenie rozširovať

---

## 2. Cieľ solution architektúry
Cieľom architektúry je definovať, **ako bude Woodies systematicky vytvárať a spravovať návrhy puzzle**, aby boli:

- konzistentné
- parametrické
- overiteľné
- exportovateľné do univerzálnych formátov
- pripravené na ďalšie rozšírenie portfólia

---

## 3. Rozsah riešenia 

### V riešení - in-scope
- CAD modelovanie dielov a zostáv v **Onshape**
- generovanie **Drawings** - 2D výkresy
- exporty: **STEP** , **PDF** - výkresy
- základná verifikácia - kontrola parametrov
- verzovanie výstupov

### Mimo riešenia - out-of-scope
- reálna CNC výroba, CAM toolpaths, výber nástrojov a materiálu
- fyzické testovanie, brúsenie, povrchové úpravy
- e-shop / platobná brána / marketingová automatizácia

---

## 4. Architektonické komponenty riešenia

### 4.1 CAD komponent - Onshape ako „source of truth“
- **Part Studios**: návrh jednotlivých dielov
- **Assemblies**: virtuálne skladanie hlavolamov, kontrola logiky montáže
- **Drawings**: výkresy dielov
---

### 4.2 Dokumentačný komponent (projektové artefakty)
- `analysis.md`, `design.md`, `implementation.md`
- zoznam dielov, počty, poznámky

**Úloha:** preniesť návrh do zrozumiteľnej formy pre hodnotenie aj hypotetické použitie.

---

### 4.3 Exportný komponent - deliverables
- **STEP**: neutrálny 3D formát kompatibilný s CAD/CAM
- **PDF**: výkresy
- **DXF**: profily pre 2D rezanie napr. tangram

**Úloha:** vytvoriť „release balík“, ktorý je použiteľný mimo Onshape.

---

### 4.4 Verifikačný komponent
Bez fyzického prototypovania sa spoliehame na CAD a procesnú kontrolu:

- interference/collision kontrola v assembly
- kontrola parametričnosti
- kontrola konzistencie dokumentácie

**Úloha:** minimalizovať riziko, že návrh bude v praxi nefunkčný alebo nevyrobiteľný.

---

### 4.5 Zmena a verzovanie - change management
- jasné pomenovanie dielov a revízií
- „release“ balíky pre každú verziu puzzle

**Úloha:** umožniť bezpečné iterácie návrhu (najmä pri zmenách tolerancií a geometrie).

---

## 5. Hlavný tok riešenia - end-to-end workflow
1. **Input**: doménová analýza a výber puzzle (burr, cube, tangram)
2. **Požiadavky**: rozmery, počet dielov, cieľová obtiažnosť, CNC obmedzenia
3. **CAD návrh**: diely v Part Studios
4. **Zostava**: assemblies a kontrola skladania
5. **Výkresy**: drawings pre diely/zostavy
6. **Verifikácia**: kontrolné kroky pred exportom
7. **Export**: STEP + PDF (+ DXF podľa typu)
8. **Release balík**: dokumentácia, BOM, montážny postup, verzia

---

## 6. Architektonické rozhodnutia

### ADR1: Onshape ako hlavná platforma
Onshape sme zvolili kvôli jednoduchému zdieľaniu, dostupnosti a podpore kompletného CAD procesu - modely, zostavy, výkresy.

### ADR2: STEP ako hlavný 3D export
STEP je najvhodnejší neutrálny formát pre ďalšie spracovanie - CNC/CAM alebo kontrola v inom CAD.

### ADR3: Výkresy ako PDF z Drawings
PDF výkresy zvyšujú dôveryhodnosť návrhu a umožňujú jednoznačne komunikovať rozmery a tolerancie.

### ADR4: Riešenie musí byť rozšíriteľné
Architektúra je navrhnutá tak, aby sa dali pridávať ďalšie puzzle bez zmeny procesu – iba sa doplní nový „puzzle balík“ - CAD + docs + exporty.

---

## 7. Rozšíriteľnosť: priestor pre ďalšie puzzle
Architektúra počíta s doplnením napríklad:

- **Puzzle box**: drážky, posuvné mechanizmy, vyššie nároky na tolerancie
- **Snake cube**: modulárne diely a skladacia sekvencia
- **Ring and string**: kombinácia drevo + šnúra
- **Gear puzzle**: vyššie požiadavky na presnosť a kompatibilitu zubov

Každé nové puzzle by malo mať:
- vlastný CAD set - parts + assembly
- drawings
- exporty

---

## 8. Výstupy solution architektúry - deliverables

Pre hodnotenie projektu by riešenie malo obsahovať minimálne:
- Onshape návrhy: **knot burr**, **cube puzzle**, **tangram**
- výkresy PDF pre vybrané diely a zostavy
- exporty STEP - diely + zostavy
- dokumentáciu

---

## 9. Záver
Solution architektúra Woodies definuje „ako“ tvoríme digitálne návrhy drevených hlavolamov tak, aby boli konzistentné, overiteľné a pripravené pre CNC. Architektúra stojí na Onshape ako zdroji pravdy, na štandardizovaných výstupoch STEP, PDF a na krokoch, ktoré nahrádzajú fyzické prototypovanie. Zároveň je navrhnutá tak, aby sa portfólio puzzle dalo priebežne rozširovať bez zmeny základného procesu.

- [Solution design](./design.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
