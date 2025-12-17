---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.005535+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "325e43a3-0f9f-4d6d-9354-227aa5780279"


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

## 4. Návrh Systému a Architektúra (Sparx EA)
Pre lepšie pochopenie štruktúry a funkčnosti systému som v nástroji Sparx Enterprise Architect vytvorila logický a fyzický model. Tieto diagramy pomohli definovať komponenty, ich zodpovednosti a vzájomné prepojenia ešte pred samotnou implementáciou.

**Celý model si môžete stiahnuť a otvoriť priamo v Enterprise Architect:**
*   **[Stiahnuť Sparx EA model (MiskaPrePsa.qea)](MiskaPrePsa.qea)**

---

### Fyzický Model
Fyzický model zobrazuje konkrétne hardvérové komponenty, z ktorých sa systém skladá, a ich prepojenie. Identifikuje hlavné časti ako Arduino, senzor, ovládač motora (MOSFET) a samotnú pumpu.

<img src="../obrazky/fyzicky_model.png" alt="Fyzický model komponentov" width="700">
*Obr.: Fyzický model hardvérových komponentov a ich prepojení.*

### Logický Model (Štruktúra Kódu)
Logický model sa zameriava na softvérovú architektúru. Definuje hlavné triedy a ich metódy, ako napríklad `MiskaController`, `PumpaController` a `SenzorHladiny`, a ukazuje, ako spolu komunikujú.

<img src="../obrazky/logicky_model.png" alt="Logický model a štruktúra kódu" width="700">
*Obr.: Logický model definujúci štruktúru softvéru.*


- Pridaj high-level diagram alebo popis architektúry.

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
