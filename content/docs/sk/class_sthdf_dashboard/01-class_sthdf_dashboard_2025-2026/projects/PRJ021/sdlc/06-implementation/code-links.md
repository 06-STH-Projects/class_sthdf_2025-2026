---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.042029+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "64f177b3-eb4e-4e29-8b8e-0b5dec1dcd36"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "code links"

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

PRJ021 / 06-implementation / code-links.md

# Implementation Overview

## Hardware Implementation
Implementácia hardvérovej časti zahŕňa montáž základovej dosky,
SSD disku a napájacieho zdroja do navrhnutého dreveného púzdra.
Jednotlivé časti púzdra boli vyrezané z preglejky podľa technických výkresov
vytvorených v nástroji Fusion 360 a následne zlepené do finálnej konštrukcie.

Na nasledujúcich obrázkoch je znazornený vzhľad dreveného púzdra
vyrezaného z preglejky, ale pred umiestnením hardvérových komponentov.

![Púzdro 1](../../images/puzdro1.jpg)

![Púzdro 2](../../images/puzdro2.jpg)

![Púzdro 3](../../images/puzdro3.jpg)

Po umiestnení hardvérových komponentov, zariadenie vyzeralo následovne:

![Hardvér 1](../../images/hardver1.jpg)

![Hardvér 2](../../images/hardver2.jpg)

![Hardvér 3](../../images/hardver3.jpg)

## Software Implementation
Na SSD disk bol nainštalovaný operačný systém Android TV alebo Android s TV rozhraním
ako primárne používateľské prostredie.
Zároveň bol nainštalovaný operačný systém Windows,
pričom oba systémy sú dostupné prostredníctvom dualboot riešenia:

![Dualboot](../../images/dualboot.jpg)

## Current State
V aktuálnej fáze projektu je zariadenie zostavené po hardvérovej stránke
a pripravené na ďalšie testovanie softvéru, stability a teplotného správania.
