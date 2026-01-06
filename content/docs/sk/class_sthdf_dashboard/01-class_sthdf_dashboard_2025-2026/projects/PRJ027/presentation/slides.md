---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.057749+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "33cbe355-43ad-438b-887c-b2b425f1ac5f"


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

# PRJ027 — Presentation

--- Headline ---
## Headline
**2025-PRJ-027-ST_009-ST_012-SmartPotOne**
<figure>
  <img src="/sthdf_2025/PRJ_027/images/Product.png" alt="SmartPotOne" width="500" />
  <figcaption>Obr. 1: Product</figcaption>
</figure>

## Téma Projektu
Vývoj a výroba funkcného prototypu inteligentného kvetináča (SmartPot One), ktorý automaticky deteguje nízku vlhkosť pôdy a nedostatek svetla, a podľa toho spúšťa automatické zavlažovanie a doplnkové LED osvetlenie. Projekt spája hardvér (mikrokontrolér STM32, senzory vlhkosti a svetla, vodná pumpa), softvér (programovanie v C++), 3D modelovanie a 3D tlač do jedného funkcného celku. --- Headline ---

--- introduction ---
## Introduction
**2025-PRJ-027-ST_009-ST_012-SmartPotOne**

SmartPot One je riešenie pre zaneprázdnených ľudí a technických nadšencov, ktorí si chcú udržať rastliny bez potreby manuálneho zalievania. Projekt kombinuje senzory, mikrokontrolér STM32, senzor vlhkosti pôdy, svetelný senzor a malú vodnu pumpu v jednom 3D tlačenom kvetináči, ktorý dokáže udržať rastlinu pri živote bez manuálneho zásahu. Výsledkom je funkcný prototyp schopný automaticky riadiť polievanie a osvetlenie na základe parametrov prostredia.
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
Problém: Ľudia zabúdajú zalievať rastliny.
Riešenie: SmartPot One automaticky deteguje vlhkosť pôdy a svetlo, spúšťa pumpu a LED.
Cieľ: Zaneprázdnení ľudia, tech nadšenci.
Pridaná hodnota: Automácia, monitorovanie.

## 02-Top Level Architecture
**Fyzické komponenty:**
- STM32 DevKit
- Senzor vlhkosti pôdy
- Svetelný senzor LDR
- Vodná pumpa 5V
- LED pásik
- 3D tlačený kvetináč s nádržou

**Logická štruktúra:**
```
Setup() → Inicializácia pinov
Loop() → Čítaj senzory → Porovnaj prahy → Spusti pumpu/LED → Čakaj 600s → Opakuj
```

<figure>
  <img src="/sthdf_2025/PRJ_027/images/schema.png" alt="Schema zapojenia" width="700" />
  <figcaption>Obr.: Logický model definujúci štruktúru softvéru.</figcaption>
</figure>


## 03-Solution Architecture
**Prvé testy:** Breadboard s STM32, senzory testované jednotlivo.

**Dizajn iterácie:**
1. Jednoduchý kontajner na pôdu
2. Kompartmenty: voda, elektronika, senzory
3. Finálny dizajn

**Výstup:** 3D model kvetináča s integrovanými priestormi.

## 04-Analysis

**Požiadavky:**
- Automatické zavlažovanie pri nízke vlhkosti
- Monitorovanie vlhkosti a svetla
- LED osvetlenie pri nedostatku svetla
- Výdrž nádrže min. 2 týždne
- Bezpečnosť
## 05-Design

<figure>
  <img src="/sthdf_2025/PRJ_027/images/drawing.jpg" alt="Drawing" width="700" />
  <figcaption>Obr.: plan</figcaption>
</figure>

<figure>
  <img src="/sthdf_2025/PRJ_027/images/3dModel.png" alt="3D model" width="700" />
  <figcaption>Obr.: 3D model</figcaption>
</figure>


## 06-Implementation

**3D tlač:** modeling, post-processing .

**HW montáž:** Senzory zapájané, MOSFET na pumpu, LED pripojena.

<figure>
  <img src="/sthdf_2025/PRJ_027/images/impl.jpg" alt="HW test" width="700" />
  <figcaption>Obr.: Implementacia</figcaption>
</figure>

**Softvér (C++ + Arduino IDE):**
```cpp

int moisture = readSensorMedian(GPIO34);
int light = readSensorMedian(GPIO35);

if (moisture > 2800) {
  digitalWrite(GPIO12, HIGH);
  delay(5000);
  digitalWrite(GPIO12, LOW);   
}

if (light > 2500) {
  digitalWrite(GPIO14, HIGH); 
} else {
  digitalWrite(GPIO14, LOW); 
}

delay(60000);
```

---

## 07-Testing & Verification
## 08-Operation
## 09-Change Management

Príklad pre merge v LemonTree

<figure>
  <img src="/sthdf_2025/PRJ_027/images/lemonTree.png" alt="HW test" width="1900" />
  <figcaption>Obr.: LemonTree</figcaption>
</figure>
