---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.009437+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "7adc57cb-f1a6-46ba-818c-ef9860e20d56"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "03 solution architecture"

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

# 03 – Solution Architecture

## 🧠 Čo riešenie obsahuje

SerialyTTY je rozdelený do troch hlavných architektonických vrstiev:

1. **Hardware Layer (fyzická konektivita a voliteľná vizualizácia)**
2. **Firmware Layer (analýza, automatizácia, bridge logika)**
3. **User Interface Layer (ovládanie a diagnostika)**

---

## 🔧 Hardware Layer

**Komponenty:**
- ESP32-C6 DevKit (USB + Wi-Fi/BLE + viac UARTov),
- UART konektor (TX/RX/GND),
- voliteľne TFT displej (SPI) a SD karta (FAT32).

**Úloha HW:**
- poskytuje fyzické rozhranie k cieľovému UART zariadeniu,
- voliteľne vizualizuje stav a loguje dáta.

---

## 🔁 Firmware Layer

**Hlavné moduly:**

- **Baud Detector**  
  meria bitovú periódu na RX a určuje správny baud.

- **Bridge Engine**  
  prepája dáta medzi USB CDC a cieľovým UARTom,  
  počíta prenesené dáta a vie ukončiť bridge späť do menu.

- **Menu UI**  
  umožňuje prepínať režimy (`Detect`, `Bridge`, `Info`, `Settings`) cez terminál.

- **Display Manager (voliteľný)**  
  zobrazuje rýchlosť, RX/TX štatistiky a stav.

- **SD Logger (voliteľný)**  
  zapisuje UART dáta do súborov s časovými pečiatkami.

Architektúra FW je modulárna, čo umožňuje pridávať režimy bez prepisovania jadra.

---

## 💬 User Interface Layer

- **Terminálové menu (ANSI)**  
  - umožňuje ovládať režimy a spúšťať detekciu,
  - funguje v každom bežnom sériovom monitore.

- **Voliteľná vizualizácia na TFT	displayi**  
  - živý stav, baud, počet dátových rámcov.

---

## 📌 Architektonická myšlienka

Zatiaľ čo pre PC sa SerialyTTY správa ako obyčajný USB-TTL adaptér,  
vnútri ESP32-C6 vykonáva **analýzu, riadenie a diagnostiku**,  
čím prináša hodnotu nad rámec klasických USB-UART káblov.

---
- [Solution design](./design.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
