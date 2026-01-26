---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.020064+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "4a8162d8-c591-4356-a880-748728b55880"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "slides"

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

[🏠 Domov](../../../index.md) · [⬅️ Nahor](../)
# PRJ010 — Presentation

## Headline
**2025-PRJ-010-ST_010-ST_010-Laserové rakvy**

![Vizuálna inšpirácia](../../../projects/PRJ010/pictures/coffin_closeup.jpg)

## Introduction
**2025-PRJ-010-ST_010-ST_010-Laserové rakvy**

V projekte sme navrhli a vyrobili sedem malých rakiev ako divadelných rekvizít pomocou laserového rezu a lacného materiálu – kartónu. Cieľom je vytvoriť vizuálne presvedčivé, ľahké a funkčné rekvizity pre potreby inscenácie.

## Obsah
- [01-Business](../sdlc/01-business/index.md)
- [02-Top Level Architecture](../sdlc/02-top-level-architecture/index.md)
- [03-Solution Architecture](../sdlc/03-solution-architecture/index.md)
- [04-Analysis](../sdlc/04-analysis/index.md)
- [05-Design](../sdlc/05-design/index.md)
- [06-Implementation](../sdlc/06-implementation/index.md)
- [07-Testing & Verification](../sdlc/07-testing-verification/index.md)
- [08-Operation](../sdlc/08-operation/index.md)
- [09-Change Management](../sdlc/09-Change-Management/index.md)

## 01-Business

* Vytvoriť 7 kusov malých, vizuálne presvedčivých a ľahkých rakiev pre divadelnú hru.
* Dodržať nízky rozpočet a termín premiéry.

## 02-Top Level Architecture

* Rekvizita rozdelená na laserom rezané diely z kartónu (telo, veko, bočné steny).
* Jednoduchá 3D konštrukcia skladaná lepením.

## 03-Solution Architecture

* Použitý materiál: 3 mm kartón.
* Nástroj: laserový rezač (nízky výkon, vysoká rýchlosť).
* Montáž: Herkules lepidlo, spevnenie zapadajúcimi zúbkami

## 04-Analysis

* Porovnanie rôznych modelov na internete
* Prieskum ohľadom dostupných materiálov

![Inspiration](../../../projects/PRJ010/pictures/coffin_inspiration.png)

## 05-Design

* Vytvorenie laserových šablón (použitý SW: Inkscape)

![Drawings](../pictures/nakres.jpg)
![Drawings](../../../projects/PRJ010/pictures/coffin_draft.png)

## 06-Implementation

* Vyrezanie všetkých dielov laserom.
* Zlepenie jednotlivých rakiev.

![Drawings](../../../projects/PRJ010/pictures/coffins_not_assambled.jpg)

## 07-Testing & Verification

* Test pevnosti počas skúšok.
* Úpravy lepenia a spevnenie rohov podľa potreby.

## 08-Operation

* Rakvy úspešne použité počas generálky a premiéry.
* Jednoduché skladovanie a opätovné použitie.

![Drawings](../../../projects/PRJ010/pictures/coffins_performance.jpg)

## 09-Change Management

* Drobné úpravy boli potrebné (spevnenie 1 z rakiev lepiacou páskou po páde, pilníkovanie hrán 1 z komponentov)
