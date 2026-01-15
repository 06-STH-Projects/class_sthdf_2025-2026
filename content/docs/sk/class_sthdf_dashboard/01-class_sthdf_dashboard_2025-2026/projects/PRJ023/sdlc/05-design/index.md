---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.973210+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "500bce71-465f-474d-86ef-7976e6718a11"


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

## Návrh púzdra
Projekt počíta s kompaktným púzdrom, ktoré:
- chráni elektroniku pred mechanickým poškodením,
- umožňuje optimálny prietok vzduchu pre presné merania,
- poskytuje otvory pre napájanie a prípadné uchytenie senzora.

<figure>
  <img src="../../images/skica.png" alt="skica" width="700" />
  <figcaption>Obr.:  Počiatočný náčrt drevenej krabičky, ktorá zakrýva hardvér. Návrh obsahuje otvory pre prúdenie vzduchu a prístup k napájaniu.</figcaption>
</figure>


## 3D Model púzdra

Pre lepšiu vizualizáciu bol vytvorený 3D model krabičky, ktorý:
- definuje presné rozmery pre ESP32 a senzory,
- obsahuje drážky na uchytenie komponentov,
- zohľadňuje ventilačné otvory pre minimalizáciu skreslenia meraní.

<figure>
  <img src="../../images/3d_dizajn.png" alt="3d dizajn" width="700" />
  <figcaption>Obr.:  3D model drevenej krabičky s otvormi pre prúdenie vzduchu a presnými drážkami na uchytenie ESP32 a senzorov.</figcaption>
</figure>


## Návrh kabeláže

Prepojenie medzi ESP32 a senzormi je realizované cez I²C zbernicu:
- SDA (GPIO21) a SCL (GPIO22) sú spoločné pre oba senzory a OLED displej.
- Napájanie senzorov je riešené cez VIN a GND.
- Kabeláž je navrhnutá tak, aby bola prehľadná, minimalizovala rušenie a umožnila jednoduchú údržbu.


<figure>
  <img src="../../images/wiring.png" alt="kabeláž" width="700" />
  <figcaption>Obr.:  Schéma zapojenia medzi ESP32, senzormi AHTX0 a ENS160 a voliteľným OLED displejom.</figcaption>
</figure>


## Server API
Server poskytuje REST API pre komunikáciu s ESP32 a webovým rozhraním:

- **GET /health** – stav servera (uptime, verzia)  
- **POST /send-data** – prijme najnovšie merania zo senzora (JSON payload)  
- **GET /read-data** – vráti dáta pre používateľa a dátum/interval, query parametre: user_id, date (napr. 2026-01-13)

## Databázová schéma

Databáza SQLite obsahuje dve hlavné tabuľky:

#### users (väzba používateľ ↔ zariadenie)

| Stĺpec        | Typ     | Popis                                  |
|---------------|---------|----------------------------------------|
| id            | INTEGER | Primárny kľúč                         |
| serial_number | TEXT    | Jedinečný identifikátor zariadenia    |

#### sensor_realtime (posledné merania na používateľa/zariadenie)

| Stĺpec      | Typ     | Popis                                  |
|-------------|---------|----------------------------------------|
| id          | INTEGER | Primárny kľúč                         |
| user_id     | INTEGER | FK na users.id                        |
| temperature | REAL    | Teplota v °C                          |
| humidity    | REAL    | Relatívna vlhkosť v %                 |
| aqi         | INTEGER | Index kvality vzduchu                 |
| co2         | REAL    | eCO₂ v ppm                            |
| tvoc        | REAL    | TVOC                                  |
| timestamp   | INTEGER | Unix čas merania  


## Dizajnové princípy

Modularita: jednoduchá výmena senzorov alebo ESP32.

Ergonómia: kompaktné rozmery, estetický vzhľad vhodný do interiéru.

Presnosť: ventilačné otvory pre správny prietok vzduchu.

Bezpečnosť: izolácia elektroniky od vlhkosti a prachu.

<!-- - [Prototypy / dizajn](./prototype.md) -->

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
