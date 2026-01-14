---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.975903+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "a3bef719-a765-4fc3-9bd0-1ca7cfad89d7"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "08 operation"

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

# 08-Operation

## Bežná prevádzka
Zariadenie je navrhnuté tak, aby bolo plug & play:
- Používateľ pripojí senzor cez micro-USB kábel.
- Po zapnutí sa ESP32 automaticky inicializuje:
  - vykoná kontrolu senzorov,
  - zobrazí stav na OLED displeji,
  - začne merať teplotu, vlhkosť, TVOC, eCO₂ a AQI.


- Ak je dostupné Wi-Fi pripojenie, zariadenie začne periodicky odosielať dáta na server (napr. každých 5 minút).


## Wi-Fi pripojenie
Pre účely Proof of Concept (PoC) je pripojenie riešené jednoducho:
- SSID siete musí byť „Hotspot“.
- Heslo: „smvit12345“.
- Po pripojení zariadenie začne komunikovať so serverom cez HTTP protokol.

#### Poznámka:
Vo finálnom produkte by bol použitý sofistikovanejší prístup, napríklad:
- konfigurácia cez webový setup alebo mobilnú aplikáciu,
- podpora viacerých sietí.

## Signalizácia stavu (LED indikátor)

Zariadenie využíva modrú LED diódu na indikáciu stavu:
#### ✅ Blikanie v intervale pripomínajúci „tlkot srdca“
- Všetko beží v poriadku.
- Zariadenie meria a úspešne odosiela dáta na server.

#### ⚠️ Blikanie v polsekundovom rovnomernom intervale
- Zariadenie sa nepripojilo na Wi-Fi.
- Meranie pokračuje, ale dáta sa neodosielajú na server.

#### ❌ Blikanie v sekundovom rovnomernom intervale
- Zariadenie je pripojené na Wi-Fi, ale nedokáže komunikovať so serverom.
- Možné príčiny:
  - výpadok servera,
  - problém s lokálnou sieťou.
- Meranie pokračuje, dáta sa neodosielajú na server.


## Odporúčania pre prevádzku

Zariadenie umiestniť na miesto s dobrým prúdením vzduchu.
Vyhnúť sa priamemu slnečnému žiareniu (skreslenie teploty).
Pravidelne kontrolovať stav Wi-Fi a servera.
V prípade dlhodobého výpadku siete použiť lokálne zobrazenie na OLED.

<!-- - [Prevádzka a podpora](./operations.md) -->

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
