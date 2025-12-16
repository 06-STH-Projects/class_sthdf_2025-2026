---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.042890+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "90ac0ece-a138-4c4c-906e-28d530898302"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "backlog"

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

PRJ021 / 04-analysis / backlog.md

# Analysis

## Problem Analysis
Cieľom projektu je vytvoriť externé zariadenie, ktoré rozšíri funkcionalitu
bežného televízora bez Smart TV podpory o moderné multimediálne služby.
Riešenie musí byť cenovo dostupné, kompaktné a vhodné na domáce použitie.

## Functional Requirements
- zariadenie musí umožniť pripojenie k televízoru prostredníctvom HDMI,
- systém musí poskytovať používateľské rozhranie Android TV alebo jeho funkčný ekvivalent,
- zariadenie musí podporovať prehrávanie multimediálneho obsahu,
- systém musí umožniť spustenie operačného systému Windows pomocou dualboot riešenia,
- používateľ musí mať prístup k vstupno-výstupným rozhraniam základovej dosky.

## Non-Functional Requirements
- tichá prevádzka zariadenia,
- nízka spotreba energie,
- zabezpečené dostatočné chladenie komponentov,
- estetické vyhotovenie vhodné do domácnosti,

## Hardware Constraints
- použitie Mini-ITX základovej dosky s integrovaným procesorom,
- použitie 2.5" SSD disku ako hlavného úložiska,
- použitie samostatného napájacieho zdroja,
- obmedzený výkon hardvérových komponentov.

## Software Constraints
- neoficiálna podpora Android TV na x86 platforme,
- obmedzená dostupnosť ovládačov v prostredí Android,
- nutnosť manuálnej konfigurácie dualboot riešenia.
