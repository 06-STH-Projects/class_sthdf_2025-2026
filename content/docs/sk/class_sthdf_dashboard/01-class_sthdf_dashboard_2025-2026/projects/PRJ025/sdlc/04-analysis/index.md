---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.963185+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "8c2b73ff-1a7e-41bc-a2fa-509c6dd9a1d9"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "04 analysis"

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

# 04-Analysis

## Funkčné požiadavky

| ID | Požiadavka | Priorita | Status |
|----|-----------|----------|--------|
| FR-01 | Kalibrácia baseline polohy hlavy | Vysoká | Implementované |
| FR-02 | Detekcia silného náklonu hlavy (Strong Nod) | Vysoká | Implementované |
| FR-03 | Detekcia mikrokývnutí (Micro Nods) | Vysoká | Implementované |
| FR-04 | Detekcia pomalého klesania hlavy (Slow Drift) | Stredná | Implementované |
| FR-05 | Detekcia zamrznutia (Freeze) | Stredná | Implementované |
| FR-06 | Detekcia bočného náklonu (Side Tilt) | Stredná | Implementované |
| FR-07 | Multi-modálny alarm (zvuk + LED + displej) | Vysoká | Implementované |
| FR-08 | Automatické zastavenie alarmu | Stredná | Implementované |
| FR-09 | Real-time telemetria | Stredná | Implementované |
| FR-10 | Web dashboard s vizualizáciou | Nízka | Implementované |

---

## Nefunkčné požiadavky

| ID | Požiadavka | Cieľ | Výsledok |
|----|-----------|------|-----|
| NFR-01 | Reakcný čas alarmu | \<1s | 0.5-3s |
| NFR-02 | Presnosť detekcie | >95% | 100% |
| NFR-03 | Falošné pozitíva | \<10% | \<5% |
| NFR-04 | Výdrž batérie | >5h | 5-8h |
| NFR-05 | Cena zariadenia | \<€50 | €35 |
| NFR-06 | Hmotnosť | \<100g | ~25g |
| NFR-07 | Použiteľnosť | Jednoduchá kalibrácia | 3 sekundy |

---

## Use Cases

### UC-01: Štart jazdy
**Aktor:** Vodič
**Scenár:**
1. Vodič nasadí zariadenie na čelo pomocou elastickej čelenky
2. Zapne napájanie dlhým stlačením power tlačidla
3. Systém automaticky spustí kalibráciu (zobrazí "CALIBRATING")
4. Vodič sedí normálne 3 sekundy
5. Zobrazí sa "READY" so zelenou farbou - vodič môže začať jazdiť

### UC-02: Detekcia silného náklonu (Strong Nod)
**Aktor:** Vodič, Systém
**Scenár:**
1. Vodič jazdí 2 hodiny na diaľnici
2. Začína byť unavený, hlava prudko klesá dopredu >25°
3. Systém deteguje stav po 500ms
4. Aktivuje sa alarm (1000Hz/1500Hz tón + červená LED + "Strong Nod" na displeji)
5. Vodič sa prebudí, zdvihne hlavu
6. Po 1 sekunde v normálnej polohe sa alarm automaticky vypne
7. Vodič pokračuje v jazde alebo sa rozhodne pre prestávku

### UC-03: Detekcia mikrospánkov (Micro Nods)
**Aktor:** Vodič, Systém
**Scenár:**
1. Vodič jazdí v noci, je veľmi unavený
2. Hlava začína robiť rýchle malé kývnutia (>15°, >12°/s)
3. Systém zaznamená 1. kývnutie do bufferu
4. Počas nasledujúcich 6 sekúnd deteguje ešte 2 rýchle kývnutia
5. Po 3. kývnutí sa okamžite aktivuje alarm "Micro Nods"
6. Vodič sa preberie a uvedomí si, že má mikrospánky
7. Rozhodne sa zastaviť na odpočinok

### UC-04: Manuálna rekalibrácia počas jazdy
**Aktor:** Vodič
**Scenár:**
1. Vodič počas jazdy upraví polohu sedadla alebo volantu
2. Zariadenie začína hlásať falošné alarmy kvôli zmenenej polohe
3. Vodič na chvíľu zastaví vozidlo
4. Stlačí tlačidlo A na zariadení
5. Systém spustí kalibráciu (3s)
6. Vodič sedí v novej normálnej polohe
7. Po dokončení kalibrácie pokračuje v jazde bez falošných alarmov


### UC-05: Dlhá cesta s prestávkami
**Aktor:** Vodič
**Scenár:**
1. Vodič začína 6 hodinovú cestu s plánovanými prestávkami
2. Po 2 hodinách jazdy sa aktivuje alarm (Slow Drift)
3. Vodič sa rozhodne pre 15 minútovú prestávku
4. Vypne zariadenie (dlhé stlačenie power)
5. Po prestávke zariadenie opäť zapne
6. Systém automaticky spustí kalibráciu (vodič je odpočinutý, iná poloha)
7. Pokračuje v jazde ďalšie 4 hodiny s ešte jednou prestávkou

### UC-06: Reakcia na falošný poplach
**Aktor:** Vodič
**Scenár:**
1. Vodič jazdí po hrboľatej ceste
2. Vibrácie spôsobia dočasný alarm (Freeze - systém detegoval nedostatok pohybu)
3. Vodič je ale plne pri vedomí
4. Rýchlo stlačí tlačidlo B na zariadení
5. Alarm sa okamžite vypne
6. Vodič pokračuje v jazde
7. EMA filter postupne adaptuje na vibrácie

---

## Analýza obmedzení

**Hardvérové:**
- IMU senzor MPU6886 má šum ±1° → Riešené EMA filtrom
- Batéria 200mAh limituje výdrž → 5-8h je dostatočné pre väčšinu jázd
- Displej 1.14" je malý → Zobrazujú sa len kľúčové informácie

**Softvérové:**
- Arduino má obmedzené 8MB Flash → Kód optimalizovaný na 120KB
- Loop frequency 20Hz je nižšia než IMU 50Hz → Stačí na detekciu
- Buffer pre micronods je 10 položiek → Pokrýva 8s okno

**Používateľské:**
- Zariadenie na čele môže byť nepohodlné → Elastická čelenka to zmierňuje
- Nutná kalibrácia pri každom štarte → Proces trvá len 3s
- USB kábel je potrebný pre dashboard → Možné použiť aj samostatne

---

**Navigation:** [⬅️ Solution Architecture](../03-solution-architecture/design.md) · [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md) · [➡️ Design](../05-design/index.md)
