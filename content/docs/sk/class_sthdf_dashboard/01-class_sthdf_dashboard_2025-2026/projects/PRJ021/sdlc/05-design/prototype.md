---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.040623+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "258d6000-bcb3-4a72-9215-622f9f0e14ab"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "prototype"

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

PRJ021 / 05-design / prototype.md

# System Design

## Overall Design Concept
Systém je navrhnutý ako kompaktné externé zariadenie umiestnené v drevenom púzdre.
Návrh kladie dôraz na jednoduchú výrobu, dobrú ventiláciu a prístupnosť portov.

## Hardware Design
Hardvérová časť pozostáva z Mini-ITX základovej dosky s integrovaným procesorom,
2.5" SSD disku a napájacieho zdroja.

Na nasledujúcom obrázku je zobrazená základová doska ASRock J4105B-ITX
![Základová doska](../../images/zakladova_doska.png)

Napájaci zdroj bol vybraný Seasonic SS-300TFX
![Napájací zdroj](../../images/zdroj.png)

Komponenty sú rozmiestnené tak, aby bol zabezpečený prirodzený airflow
a zároveň jednoduchý prístup k vstupno-výstupným rozhraniam.

## Case Design
Púzdro zariadenia je vyrobené z preglejky a navrhnuté ako viacvrstvová konštrukcia.
Medzery medzi jednotlivými vrstvami podporujú cirkuláciu vzduchu
a pomáhajú odvádzať teplo z vnútra zariadenia.

## Cooling Design
Chladenie zariadenia je založené na pasívnom chladení procesora
a prirodzenej ventilácii púzdra.
Odvod teplého vzduchu je podporený napájacím zdrojom,
ktorý aktívne odvádza teplý vzduch smerom von zo skrinky.

## Software Design
Primárnym operačným systémom zariadenia je Android TV alebo Android s TV rozhraním.
Zariadenie zároveň podporuje operačný systém Windows,
ktorý je dostupný prostredníctvom dualboot riešenia.
Výber operačného systému prebieha pri štarte zariadenia.

## Design Tools
Návrh mechanickej konštrukcie zariadenia bol vytvorený v nástroji Fusion 360.
V rámci návrhu bol spracovaný 3D model púzdra a technické výkresy (drawings) jednotlivých dielov potrebné pre výrobu.

Na ďalších dvoch obrázkoch je zobrazený výsledný 3D model púzdra aj jeho technický výkres s popisom 
exterierových rozmerov.

![3D model púzdra](../../images/model.png)

![Technický výkres](../../images/schema.png)

