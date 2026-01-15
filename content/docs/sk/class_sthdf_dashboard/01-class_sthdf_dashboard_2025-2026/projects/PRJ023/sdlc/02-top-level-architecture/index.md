---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.975367+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "1a80b244-1df9-4323-a422-dd30f174eb44"


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

# 02-Top Level Architecture


### Fyzické komponenty
Projekt pozostáva z nasledujúcich hardvérových prvkov:

- ESP32 DevKit
  - Hlavný mikrokontrolér s integrovaným Wi-Fi modulom
  - GPIO piny na pripojenie periférií
  - I²C zbernica pre komunikáciu so senzormi a displejom
  - Napájanie cez USB (5V)


- Senzor AHTX0
  - Meranie teploty a vlhkosti
  - Komunikácia cez I²C


- Senzor ENS160
  - Meranie TVOC, eCO₂
  - Výpočet Air Quality Index (AQI)
  - Komunikácia cez I²C


- OLED displej (SSD1306)
  - Zobrazenie aktuálnych hodnôt priamo na zariadení


- Kryt (drevený)
  - Otvory pre prúdenie vzduchu (presné merania)
  - Otvor na napájanie senzora

---

### Hardvérová architektúra
Zariadenie je postavené na I²C zbernici, ktorá spája ESP32 s oboma senzormi a voliteľným OLED displejom.

- ESP32 je centrálny uzol, ktorý:
  - číta dáta zo senzorov,
  - zobrazuje ich na displeji,
  - odosiela ich cez Wi-Fi na server.


- Napájanie je riešené cez USB kábel (5V), ktorý napája ESP32 aj senzory.

<figure>
  <img src="../../images/hardware_architecture.png" alt="hardware architecture" width="700" />
  <figcaption>Obr.:  Diagram zobrazujúci fyzické komponenty</figcaption>
</figure>

---

### Systémová architektúra

Architektúra riešenia zahŕňa:
- ESP32 firmware (Arduino IDE):
  - Zber dát zo senzorov
  - Lokálne zobrazenie na OLED
  - Odosielanie dát cez HTTP POST na server

- Python server:
  - REST API na príjem dát
  - Ukladanie dát do SQLite databázy
  - Webová aplikácia na vizualizáciu (grafy, tabuľky)

- Používateľské rozhranie:
  - Responzívny web (PC & mobil)
  - Možnosť filtrovania dát podľa času a senzora
<figure>
  <img src="../../images/component_architecture.png" alt="component architecture" width="700" />
  <figcaption>Obr.:  Diagram zobrazujúci softvérové a systémové komponenty</figcaption>
</figure>

---

### Tok dát

1. Senzory → ESP32: meranie teploty, vlhkosti, TVOC, eCO₂, AQI
2. ESP32 → Server: odosielanie dát cez HTTP POST (JSON)
3. Server → SQLite: ukladanie dát do databázy
4. Web UI → Používateľ: vizualizácia dát (aktuálne hodnoty + historické grafy)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
