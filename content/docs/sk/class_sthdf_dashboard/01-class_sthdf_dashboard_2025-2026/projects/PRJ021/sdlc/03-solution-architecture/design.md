---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.041748+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "a5b4026b-c2a6-4fd4-9aed-2fa5d3330d29"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "design"

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

PRJ021 / 03-solution-architecture / design.md

# Solution Design

## Hardware Design
Zariadenie je postavené na Mini-ITX základovej doske s integrovaným procesorom a operačnou pamäťou.
Ako úložisko slúži 2.5" SSD disk, na ktorom je nainštalovaný operačný systém a používateľské dáta.
Napájanie zabezpečuje samostatný elektrický zdroj.

## Case Construction
Hardvérové komponenty sú umiestnené do dreveného púzdra vyrobeného z preglejky.
Púzdro je navrhnuté ako viacvrstvová konštrukcia s medzerami medzi jednotlivými vrstvami,
čo umožňuje prirodzenú cirkuláciu vzduchu a zlepšuje odvádzanie tepla.

## Cooling Concept
Základná doska disponuje pasívnym chladením procesora.
Konštrukcia púzdra je navrhnutá ako viacvrstvová s medzerami medzi jednotlivými drevenými úrovňami,
čo podporuje prirodzenú cirkuláciu vzduchu.

Odvod teplého vzduchu z vnútra púzdra je zabezpečený napájacím zdrojom,
ktorý je umiestnený v skrinke a aktívne odvádza teplý vzduch smerom von zo zariadenia.
Týmto spôsobom je zabezpečený základný airflow bez potreby dodatočných chladiacich ventilátorov.

## Software Architecture
Na zariadení je nainštalovaný operačný systém Android TV alebo Android s TV rozhraním,
ktorý je spúšťaný priamo z SSD disku a slúži ako primárne používateľské prostredie
pre multimediálne využitie.

Zariadenie zároveň podporuje operačný systém Windows,
ktorý je nainštalovaný na rovnakom SSD disku a je dostupný prostredníctvom dualboot riešenia.
Používateľ si pri štarte zariadenia môže zvoliť, ktorý operačný systém bude spustený.


## Design Decisions
- použitie dreveného púzdra z dôvodu jednoduchosti výroby a estetiky,
- využitie existujúcich PC komponentov,
- dôraz na nízku spotrebu energie a tichú prevádzku.