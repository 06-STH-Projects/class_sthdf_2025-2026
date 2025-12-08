---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.010285+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "55171669-83b0-4f30-9f38-b63febdca625"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "06 implementation"

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

# 06-Implementation

- 🌐 Repozitar: [GitHub](https://github.com/thenisvan/SerialyTTY)
- 🌐 Web: [Web Stranka](https://thenisvan.github.io/SerialyTTY/)

## 🛠 Použité technológie
- **PlatformIO + ESP-IDF** – build a flash firmvéru pre ESP32-C6
- **C / C++** – implementácia firmware modulov (Baud Detect, Bridge, Menu)
- **VS Code / seriový monitor** – terminál a debug počas vývoja

## 📂 Štruktúra projektu (stručne)
```
📁 SerialyTTY/
├── 📄 README.md                    (This file)
├── 📄 USER_GUIDE.md                Complete usage manual
├── 📄 API_DOCUMENTATION.md         Developer API reference
├── 📄 FAQ_TROUBLESHOOTING.md       Common issues and solutions
├── 📄 BUILD_GUIDE.md               Detailed build instructions
├── 📄 LINUX_SETUP.md               Linux-specific setup
├── 📄 PHASE_3_4_COMPLETE.md        Implementation details
├── 📄 INTEGRATION_TEST_PLAN.md     Testing procedures
├── 📁 include/                     Header files (public API)
├── 📁 src/                         Source code (implementations)
├── 📄 platformio.ini               Build configuration
├── 📄 CMakeLists.txt               CMake build config
└── 📄 sdkconfig.esp32c6            ESP-IDF configuration
```
  
- [Odkazy na kód / repozitáre](./code-links.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
