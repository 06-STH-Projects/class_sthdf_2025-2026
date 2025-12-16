---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.041168+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "163e314d-8e2a-4003-a39b-8f8d5afe4b8f"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "09 Change Management"

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

# 09 – Change Management (Change log / CR / Impact analysis)

## Pôvodný návrh
V pôvodnom návrhu projektu Smart TV Box sa počítalo s použitím **3D tlačeného držiaka pre 2.5" SSD disk**, ktorý mal byť:
- navrhnutý v CAD nástroji,
- vytlačený na 3D tlačiarni,
- pevne integrovaný do vnútorného priestoru dreveného púzdra.

Cieľom tohto riešenia bolo zlepšiť mechanickú stabilitu disku, vnútornú organizáciu komponentov a celkovú modularitu zariadenia.

## Identifikovaná zmena (Change Request)
Počas realizácie projektu bol identifikovaný časový limit, ktorý neumožnil dokončenie návrhu a výroby 3D tlačeného držiaka SSD disku v plánovanom rozsahu.

Z tohto dôvodu bolo rozhodnuté:
- neimplementovať 3D tlačený držiak SSD disku v aktuálnej verzii projektu,
- ponechať SSD disk umiestnený v púzdre bez dedikovaného držiaka.

## Analýza dopadu (Impact Analysis)
Dopad tejto zmeny na projekt bol vyhodnotený nasledovne:
- **Funkčnosť zariadenia** nebola ovplyvnená, SSD disk je plne funkčný.
- **Časový harmonogram projektu** bol dodržaný.
- **Bezpečnosť a stabilita** zariadenia ostala na akceptovateľnej úrovni pre školský projekt.
- **Estetika a modularita** vnútorného usporiadania môže byť mierne znížená.

## Záznam zmeny (Change log)
- **Zmena:** Neimplementovaný 3D tlačený držiak pre SSD disk  
- **Dôvod:** Nedostatok času na návrh a výrobu  
- **Stav:** Odložené / nerealizované  
- **Dátum rozhodnutia:** počas realizácie projektu  

## Potenciálne zlepšenia (Future Improvements)
Nerealizovaný 3D tlačený držiak SSD disku je možné považovať za:
- potenciálne rozšírenie projektu,
- vylepšenie budúcej verzie zariadenia,
- vhodnú úlohu pre ďalšiu iteráciu alebo nadväzujúci projekt.

Implementácia tohto prvku by mohla zvýšiť mechanickú odolnosť, servisovateľnosť a profesionálny charakter výsledného riešenia.

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
