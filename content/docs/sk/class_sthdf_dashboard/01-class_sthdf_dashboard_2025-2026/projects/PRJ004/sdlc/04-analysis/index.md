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
Aby sme vedeli navrhnúť bezpečný USB-TTL most, museli sme pochopiť:

1) **Aké riziko predstavuje USB Killer útok**
   - PC môže byť fyzicky zničený cez USB port
   - väčšina laboratórnych USB-TTL adaptérov nemá žiadnu ochranu

2) **Ako sa reálne používa UART v praxi**
   - vývojári často nevedia baud rate cieľového zariadenia
   - RX/TX bývajú prehodené, čo vedie k nefunkčnému debug procesu
   - prístup k zariadeniu býva fyzicky obmedzený (kabeláž, vzdialenosť)

3) **Aké limity majú existujúce USB-TTL adaptéry**
   - neponúkajú bezdrôtový prístup
   - vyžadujú manuálne nastavovanie
   - neizolujú PC od cieľového HW

## 🔍 Kľúčové zistenia
- Skutočný problém nie je len debugovanie UART, ale **bezpečnostné riziko a produktivita**.
- Riešenie musí byť kombinácia:
  → ochrana host systému  
  → automatizácia nastavení  
  → bezdrôtová práca
- ESP32 sa ukázalo ako ideálny kandidát kvôli:
  → Wi-Fi + Bluetooth konektivite  
  → viacerým UART portom  
  → dostatočnému výkonu na spracovanie logiky

## 📌 Rozhodovacie body / architektonické dôvody
- USB-UART bridge má zostať "hlúpy" → ESP32 bude inteligentná vrstva
- komunikácia s PC bude nepriamou cestou cez wireless → PC je izolovaný
- riešenie nesmie byť len FW → musí obsahovať aj HW návrh


- [Backlog a analýzy](./backlog.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
