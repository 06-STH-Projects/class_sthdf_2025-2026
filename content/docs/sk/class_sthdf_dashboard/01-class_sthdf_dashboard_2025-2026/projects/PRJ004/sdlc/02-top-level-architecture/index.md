---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.011099+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "bce3f66a-6bb9-4e0a-9810-5c8ad6f3aa65"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "02 top level architecture"

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

# 02 – Top Level Architecture

## 🔭 High-level pohľad

SerialyTTY funguje ako **inteligentný USB-to-UART most**, ktorý prepája počítač s cieľovým embedded zariadením a pridáva automatizáciu a diagnostiku.

- **Host (PC / notebook)**  
  - komunikuje cez natívny USB CDC port ESP32-C6,
  - používa bežný sériový terminál.

- **ESP32-C6 (jadro logiky)**  
  - prijíma UART dáta z PC aj z cieľového zariadenia,
  - poskytuje funkcie:
    - automatická detekcia baud rate,
    - Bridge mód s počítaním RX/TX,
    - terminálové menu,
    - voliteľné vizualizačné a logovacie funkcie.

- **User Interface Layer**  
  - sériový terminál (ANSI menu) pre kontrolu a prepínanie režimov,
  - voliteľný TFT displej zobrazujúci stav, štatistiky a diagnostiku.

- **Storage / Logging (voliteľné)**  
  - SD karta (FAT16/FAT32) s logovaním UART dát, časovými pečiatkami a udalosťami.

- **Cieľové zariadenie (embedded board)**  
  - napr. Arduino, STM32, ESP32, senzory alebo priemyselné moduly,
  - prepojené cez UART TX/RX/GND.

---

## 📌 Architektúrna myšlienka

Počítač vidí SerialyTTY ako obyčajný USB-TTL most,  
ale ESP32-C6 medzi tým pridáva **inteligenciu, UI a diagnostiku**,  
čo bežné adaptéry neponúkajú.


## 🏗️ Architecture Overview

### System Components
```
┌─────────────────────────────────────────────────────────┐
│                   USB-TTL Bridge (ESP32-C6)             │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌──────────────────────────────────────────────────┐   │
│  │           Hardware Detection Module              │   │
│  │  • I2C Scanner (Display Detection)               │   │
│  │  • GPIO Detection (SD Card)                      │   │
│  └──────────────────────────────────────────────────┘   │
│                           ▼                              │
│  ┌──────────────────────────────────────────────────┐   │
│  │          State Machine & Bridge Mode             │   │
│  │  • BOOTING → WAITING → ANALYZING                │   │
│  │  → FOUND_SPEED → RUNNING → BRIDGE_MODE          │   │
│  └──────────────────────────────────────────────────┘   │
│          ▲                   ▼                    ▲       │
│  ┌───────┴──────────┐  ┌────────────┐  ┌────────┴───┐   │
│  │  Baud Detector   │  │  UART1     │  │  BLE UART  │   │
│  │  (GPIO Timing)   │  │  (Bridge)  │  │  (Nordic)  │   │
│  └──────────────────┘  └────────────┘  └────────────┘   │
│          ▼                                        ▼       │
│  ┌─────────────────────────────────────────────────┐    │
│  │    Display Manager (ILI9341 TFT - Optional)    │    │
│  │  • Boot, Menu, Analyzing, Bridge screens       │    │
│  └─────────────────────────────────────────────────┘    │
│          ▼                                               │
│  ┌─────────────────────────────────────────────────┐    │
│  │    SD Logger (FAT Filesystem - Optional)        │    │
│  │  • Timestamped logs with hex dumps              │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
│  ┌─────────────────────────────────────────────────┐    │
│  │    Menu System & Communication Tester           │    │
│  │  • Interactive terminal interface               │    │
│  └─────────────────────────────────────────────────┘    │
│                                                           │
└─────────────────────────────────────────────────────────┘
```

### Key Modules

| Module | File | Purpose |
|--------|------|---------|
| **Baud Detector** | `baud_detector.cpp` | GPIO interrupt-based baud rate detection |
| **UART Bridge** | `bridge_mode.cpp` | Transparent serial passthrough |
| **Display Manager** | `display_manager.cpp` | TFT control and screen management |
| **SD Logger** | `sd_logger.cpp` | SD card initialization and logging |
| **Menu System** | `menu_system.cpp` | Terminal-based interactive menu |
| **Hardware Detector** | `hardware_detector.cpp` | Peripheral scanning and detection |
| **BLE Manager** | `bluetooth_manager.cpp` | Bluetooth Low Energy stub |
| **Comm Tester** | `comm_tester.cpp` | Communication testing utilities |

---

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
