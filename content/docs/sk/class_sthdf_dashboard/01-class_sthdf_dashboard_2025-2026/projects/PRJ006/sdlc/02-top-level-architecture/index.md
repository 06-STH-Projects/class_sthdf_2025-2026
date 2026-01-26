---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.926867+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "7e6e1081-9eda-4055-bec7-391d88506020"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "02 top level architecture"

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

# 02-Top Level Architecture

# Woodies – Top Level Architecture

## 1. Kontext systému (čo je „systém“ v našom projekte)

V projekte Woodies je produkt primárne **digitálny artefakt**: CAD model + výkresy + dokumentácia.  
Top-level architektúra preto opisuje **tok práce, dáta a komponenty** potrebné na návrh.

![Systémový kontext](../../images/context_diagram_tla.png)

### 1.1 Zainteresované strany
- **Designer/CAD Engineer**: tvorí modely, parametre, zostavy.
- **Reviewer**: kontrola konzistencie, DFM pravidlá.
- **CNC dielňa**: konzument výkresov, DXF, CAM nastavení.
- **Zákazník**: konzument montážneho manuálu, vizualizácií.


## 2. Architektúrne ciele a kvalitatívne atribúty

### 2.1 Ciele
- Opakovateľný proces tvorby puzzle dizajnov
- Parametrizácia
- Konzistentná dokumentácia

### 2.2 Kvalitatívne atribúty
- **Maintainability:** zmena parametrov nevyžaduje redizajn.
- **Reusability:** diely/komponenty použiteľné naprieč puzzle.
- **Verifiability:** kontrola kolízií, montážnych krokov v CAD.
- **Manufacturability:** dizajn rešpektuje vyrobné obmedzenia.

## 3. Top-level komponenty - moduly systému

### 3.1 Návrhový pipeline
![Návrhový pipeline Woodies](../../images/pipeline_diagram_tla.png)
1. **Research & Requirements**
   - definícia typu puzzle 
   - ciele obtiažnosti, počet dielov, požiadavky na toleranciu

2. **Parametrický CAD model**
   - skice s parametrami 
   - diely → zostavenie
   - kontrola kolízií

3. **Príprava pre výrobu**
   - výkresy s toleranciami
   - exporty 
   - poznámky k nástrojom

4. **Dokumentácia produktu**
   - BOM - zoznam dielov, materiál, rozmery
   - montážny manuál
   - render/vizualizácie

5. **Verifikácia**
   - CAD interference check
   - kontrola pravidiel: min. hrúbky, rádiusy, vôľa

## 4. Dátová architektúra - artefakty
![Dátová architektúra](../../images/data_diagram_tla.png)

- **CAD zdroje:** `.f3d`, `.sldprt`, `.FCStd`
- **Neutral CAD:** `.step` / `.iges`
- **2D výkresy:** `.pdf`, `.dxf`
- **Dokumenty:** `.md` 
- **Vizualizácie:** `.png`, `.jpg`


## 5. Rozhrania medzi komponentmi
![Rozhrania komponentov](../../images/interface_diagram_tla.png)
- **Requirements → CAD:** parametre, počet dielov, cieľový rozmer.
- **CAD → DFM:** výkresy, tolerancie, exporty.
- **CAD/DFM → Dokumentácia:** BOM, explodované pohľady
- **Verifikácia → Change management:** bug reports, revízie parametrov.


**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
