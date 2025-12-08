---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.010567+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "8f2b594e-f4b1-4f50-9de6-9fd9599aa1dd"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "04 analysis"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "{{DESCRIPTION}}"


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"
  - "Denis Ivan"
  - "Danylo Bashmakov"


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

# 04 – Analysis

## 🔍 Čo bolo potrebné analyzovať

Aby sme vedeli navrhnúť užitočný USB-to-UART nástroj, museli sme pochopiť:

1) **Ako embedded vývojári reálne pracujú so sériovou komunikáciou**  
   - často nepoznajú baud rate cieľového zariadenia,
   - debugging stojí čas, kým nájde správne nastavenia.

2) **Aké limity majú bežné USB-TTL adaptéry**  
   - neposkytujú diagnostiku ani spätnú väzbu,
   - nevedia indikovať, čo sa deje na linke,
   - neumožňujú jednoduché prepínanie režimov.

3) **Čo je potrebné vo výuke a lab prostredí**  
   - vizualizácia, štatistiky a možnosť záznamu dát,
   - jednoducho pochopiteľné UI.

---

## 🔍 Kľúčové zistenia

- Problém nie je len „prepojenie drôtov“, ale **nedostatok inteligencie a diagnostiky**.
- Riešenie musí kombinovať:
  → analýzu komunikácie,  
  → jednoduché UI,  
  → možnosť rozširovania o vizualizáciu/logovanie.
- ESP32-C6 sa ukázalo ako vhodný kandidát kvôli:
  → natívnemu USB CDC,  
  → výkonu na spracovanie analýzy,  
  → rozšíriteľnosti o displej a SD modul.

---

## 📌 Rozhodovacie body

- PC by malo vidieť zariadenie ako obyčajný USB-TTL adaptér,  
  zatiaľ čo inteligencia beží v ESP32-C6.
- Architektúra má byť modulárna — režimy sa pridávajú bez prepisovania jadra.
- UI má byť jednoduché (menu cez terminál), voliteľne vizualizácia na displeji.

---
- [Backlog a analýzy](./backlog.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
