---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.001493+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "77cc4f87-7a11-4545-b160-74489d38cc08"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "slides"

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

# PRJ005 — Presentation

--- Headline ---
## Headline
**2025-PRJ-005-ST_005-ST_005-Nazov projektu**

<figure>
  <img src="../sdlc/obrazky/inspiracia.jpg" alt="Vizuálna inšpirácia" width="500" />
  <figcaption>Obr. 1: Požadovaný vizuálny štýl a inšpirácia pre projekt.</figcaption>
</figure>

## Téma Projektu
Vývoj a výroba funkčného prototypu inteligentnej misky pre psa, ktorá automaticky deteguje nízku hladinu vody a zabezpečí jej doplnenie. Projekt spája hardvér (mikrokontrolér Arduino a senzory), softvér (programovanie v C++), 3D modelovanie a 3D tlač do jedného funkčného celku.

--- Headline ---

--- introduction ---
## Introduction
**2025-PRJ-005-ST_005-ST_005-Nazov projektu**

Strucny text o projekte (zhrnutie zadania + prinos).
--- introduction ---

--- obsah ---
## Obsah
- [01-Business](../sdlc/01-business/index.md)
- [02-Top Level Architecture](../sdlc/02-top-level-architecture/index.md)
- [03-Solution Architecture](../sdlc/03-solution-architecture/index.md)
- [04-Analysis](../sdlc/04-analysis/index.md)
- [05-Design](../sdlc/05-design/index.md)
- [06-Implementation](../sdlc/06-implementation/index.md)
- [07-Testing & Verification](../sdlc/07-testing-verification/index.md)
- [08-Operation](../sdlc/08-operation/index.md)
- [09-Change Management](../sdlc/09-Change-Management/index.md)
--- obsah ---

## 01-Business

<figure>
  <img src="../sdlc/obrazky/nakresy.jpg" alt="Vizuálna inšpirácia" width="500" />
  <figcaption>Obr. 2 a 3: Moje vlastné počiatočné nákresy a detailnejšie rozpracovanie dizajnu.</figcaption>
</figure>

## 02-Top Level Architecture

### Fyzický Model
Fyzický model zobrazuje konkrétne hardvérové komponenty, z ktorých sa systém skladá, a ich prepojenie. Identifikuje hlavné časti ako Arduino, senzor, ovládač motora (MOSFET) a samotnú pumpu.

<figure>
  <img src="../sdlc/obrazky/fyzicky_model.png" alt="Fyzický model komponentov" width="700" />
  <figcaption>Obr.: Fyzický model hardvérových komponentov a ich prepojení.</figcaption>
</figure>

### Logický Model (Štruktúra Kódu)
Logický model sa zameriava na softvérovú architektúru. Definuje hlavné triedy a ich metódy, ako napríklad `MiskaController`, `PumpaController` a `SenzorHladiny`, a ukazuje, ako spolu komunikujú.

<figure>
  <img src="../sdlc/obrazky/logicky_model.png" alt="Logický model a štruktúra kódu" width="700" />
  <figcaption>Obr.: Logický model definujúci štruktúru softvéru.</figcaption>
</figure>

## 03-Solution Architecture

### 5.1. Prvé Experimenty a Prototypovanie
Práca začala experimentovaním s hardvérom. Prvotný plán bol použiť ultrazvukový senzor na meranie hladiny vody. Zostavila som testovací obvod s Arduinom a senzorom na breadboarde, aby som overila jeho funkčnosť.

<figure>
  <img src="../sdlc/obrazky/prototyp-na-stole.jpg" alt="Vizuálna inšpirácia" width="500" />
  <figcaption>Obr. 4: Testovacie prostredie – Arduino, breadboard, ultrazvukový senzor a ďalšie komponenty.</figcaption>
</figure>

## 04-Analysis
## 05-Design
## 06-Implementation
# 06-Implementation

### 5.3. Finálny Kód
S novým hardvérovým návrhom som finalizovala aj kód pre Arduino. Kód neustále monitoruje analógový pin pripojený k sondám. Ak hodnota klesne pod prahovú úroveň (voda chýba), aktivuje pin, ktorý spína čerpadlo.

```cpp
// Definovanie pinov
constexpr int testPin = A0;      // Vstupny pin na citanie stavu vodivosti
constexpr int controlPWM = 3;    // Vystupny pin na ovladanie cerpadla

void setup() {
  pinMode(testPin, INPUT);
  pinMode(controlPWM, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  static int sensorValue = 0, u = 0;
  sensorValue = analogRead(testPin);

  // Ak je hodnota nízka (pod 60), voda chýba -> aktivuj cerpadlo
  if (sensorValue < 60) {
    u = 255;
  } else {
    u = 0;
  }
  analogWrite(controlPWM, u);
  delay(500);
}
```
## 07-Testing & Verification
## 08-Operation
## 09-Change Management

[🏠 Domov](../../../index.md) · [⬅️ Nahor](../)
