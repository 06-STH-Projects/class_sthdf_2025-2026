---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.997126+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "e4d80e9f-e7b3-4c88-8f4b-f0ebd4cbb14b"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "05 design"

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

# 05-Design

- [Prototypy / dizajn](./prototype.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)

### Value stream 
Základný value stream nášho systému, zobrazenie dát o včelích úľoch.
![Value stream](../../images/value_stream.png)


### Zmena stavu včelstva a odoslanie notifikácie na základe frekvencie
![Zmena stavu včelstva](../../images/stav_vcelstva_diagram.png)

### Odosielanie notifikácií
![Odosielanie notifikácií](../../images/alerts.png)

### Štruktúra GEO dát v prezentačnej webovej aplikácií
Vo webovej aplikácií budeme mať mapu, kde si bude môcť verejnosť pozrieť kde sa nachádzajú monitorované včelie úle, preto potrebujeme štruktúru dát ako budeme tieto GEO dáta ukladať.

![GEO databáza](../../images/diagram_geojson.png)

### Device DB - prezentačný web
Štruktúra objektu Device v databáze prezentačného webu, Device predstavuje jeden včelí úľ, ktorý je zobrazený na interaktívnej mape. Nie sú to namerané dáta, tie sú uložené v platforme Thingbsoard, ktorá má vlastnú databázu.
![GEO databáza](../../images/databaza.png)

## Wireframes

### Prezentačný web
![Wireframe](../../images/wireframe_homepage.png)
![Wireframe](../../images/wireframe_mapa.png)
![Wireframe](../../images/wireframe_about_project1.png)
![Wireframe](../../images/wireframe_about_projet2.png)
![Wireframe](../../images/wireframe_about.png)

### Návrh dashboardov s dátami
![Wireframe](../../images/Dashboard-súkromný.png)








