---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.971682+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "fd293983-f394-4be3-908c-8d010d997610"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "07 testing verification"

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

# 07-Testing & Verification

## Metodika testovania

Na overenie presnosti meraní sme vykonali dlhodobý test v reálnych podmienkach:

- Trvanie: 8 dní
- Miesto: internátna izba (stabilné prostredie)
- Rozdelenie testu:
  - 4 dni senzor bez krytu (voľný prístup vzduchu)
  - 4 dni senzor v drevenej krabičke (obmedzený prietok vzduchu)

Cieľom bolo zistiť, ako púzdro ovplyvňuje presnosť meraní teploty, vlhkosti a kvality vzduchu (CO₂, TVOC).

---

### Výsledky bez krytu

<figure>
  <img src="../../images/data_before.png" alt="data before" width="700" />
  <figcaption>Obr.:  Hodnoty teploty a vlhkosti sú pomerne presné a stabilné. Hodnoty oxidu uhličitého (eCO₂) sú primerané, bez výrazných odchýlok.</figcaption>
</figure>
  

#### Pozorovania:

- Teplota: stabilná, zodpovedá reálnym podmienkam.
- Vlhkosť: presná, bez výrazných výkyvov.
- eCO₂: hodnoty primerané, korelujú s počtom osôb v miestnosti.

---

### Výsledky s krytom

<figure>
  <img src="../../images/data_after.png" alt="data after" width="700" />
  <figcaption>Obr.:  Hodnoty teploty sú značne zvýšené (v priemere o +4 °C). Vlhkosť ostáva rovnaká. Hodnoty eCO₂ sú zvýšené (v priemere o +300 ppm).</figcaption>
</figure>


#### Pozorovania:

- Teplota: zvýšená o 4 °C v priemere → dôvodom je nedostatočné odvetranie krabičky.
- Vlhkosť: prakticky nezmenená.
- eCO₂: zvýšené hodnoty o ~300 ppm, čo naznačuje slabú výmenu vzduchu.


## Analýza dopadu

- Krabička nedodáva senzoru dostatočnú výmenu vzduchu.
- Zariadenie sa mierne prehrieva, čo skresľuje merania teploty.
- Nedostatočný prietok vzduchu spôsobuje vyššie koncentrácie CO₂ a TVOC v púzdre.
- Presnosť meraní je ovplyvnená najmä pri dlhodobom uzavretí senzora.


## Odporúčania na zlepšenie

- Pridať ventilačné otvory alebo mriežky na zabezpečenie prúdenia vzduchu.
- Optimalizovať vnútorné usporiadanie komponentov, aby sa minimalizovalo prehrievanie.
- Použiť materiál s lepšou tepelnou vodivosťou alebo implementovať pasívne chladenie.
- Kalibrácia senzorov po vložení do púzdra.

<!-- - [Test report a QA výstupy](./test-report.md) -->

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
