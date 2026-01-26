---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.960125+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "d0412535-be3e-4cad-8246-db5b5517b06b"


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

## Fáza 1: Domáce testovanie (Statické)

### Testové prostredie
- **Miesto:** Domáce prostredie
- **Podmienky:** Sedenie na stoličke, simulácia vodičskej polohy
- **Účel:** Kalibrácia detekčných prahov a časových okien
- **Trvanie:** 20 hodin testovania rôznych scenárov a oprava parametrov

### Počiatočné parametre (verzia 1.0)

Prvé nastavenie bolo zámerně **konzervativnejšie** (vyššie prahy, dlhšie časové okná) pre bezpečné testovanie:

```cpp
// 1. Strong Nod
const float SLEEP_ANGLE_THRESHOLD = 35.0°;   // Vyšší prah
const int SLEEP_TIME_THRESHOLD = 2000ms;      // Dlhšie čakanie

// 2. Micro Nods
const float MICRONOD_THRESHOLD = 20.0°;
const int MICRONOD_COUNT_ALERT = 3;
const int MICRONOD_TIME_WINDOW = 10000ms;     // Dlhšie okno
const float MICRONOD_SPEED_THRESHOLD = 15.0°/s;

// 3. Slow Drift
const float SLOW_DRIFT_THRESHOLD = 15.0°;
const int SLOW_DRIFT_TIME = 5000ms;           // Dlhšie čakanie

// 4. Freeze
const int NO_MOVEMENT_TIME = 15000ms;         // 15 sekúnd
const float MOVEMENT_THRESHOLD = 2.0°;

// 5. Side Tilt
const float SIDE_TILT_THRESHOLD = 30.0°;
const int SIDE_TILT_TIME = 3000ms;
```

### Zistenia z domáceho testovania

**Problémy:**
- Prahy boli **príliš vysoké** - Strong Nod vyžadoval extrémny náklon 35°
- Časové okná boli **príliš dlhé** - 2 sekundy na Strong Nod je nebezpečne dlho
- Freeze algoritmus reagoval **príliš pomaly** (15 sekúnd)
- **Falošné negatíva** - Niektoré nebezpečné stavy neboli zachytené

**Úspešné validácie:**
- Kalibračný systém fungoval správne (50 vzoriek, baseline výpočet)
- Display UI bol čitateľný a informatívny
- Serial komunikácia fungovala spoľahlivo
- Kruhový buffer pre mikrokývnutia fungoval správne

### Optimalizované parametre (verzia 2.0)

Na základe testovania boli parametre **sprísené** pre reálne použitie:

```cpp
// 1. Strong Nod
const float SLEEP_ANGLE_THRESHOLD = 25.0°;    // ↓ 10° (citlivejšie)
const int SLEEP_TIME_THRESHOLD = 500ms;       // ↓ 1500ms (4x rýchlejšie!)

// 2. Micro Nods
const float MICRONOD_THRESHOLD = 15.0°;       // ↓ 5°
const int MICRONOD_COUNT_ALERT = 3;           // Bez zmeny
const int MICRONOD_TIME_WINDOW = 8000ms;      // ↓ 2000ms
const float MICRONOD_SPEED_THRESHOLD = 12.0°/s; // ↓ 3°/s

// 3. Slow Drift
const float SLOW_DRIFT_THRESHOLD = 12.0°;     // ↓ 3°
const int SLOW_DRIFT_TIME = 3000ms;           // ↓ 2000ms

// 4. Freeze
const int NO_MOVEMENT_TIME = 10000ms;         // ↓ 5000ms (33% rýchlejšie)
const float MOVEMENT_THRESHOLD = 1.5°;        // ↓ 0.5°

// 5. Side Tilt
const float SIDE_TILT_THRESHOLD = 25.0°;      // ↓ 5°
const int SIDE_TILT_TIME = 500ms;             // ↓ 2500ms (6x rýchlejšie!)

// Wake-up
const int WAKE_TIME_THRESHOLD = 1000ms;       // Pridané
```

### Porovnanie parametrov

| Algoritmus | Parameter | V1.0 | V2.0 | Zmena |
|-----------|-----------|------|------|-------|
| Strong Nod | Uhol | 35° | 25° | **-29%** |
| Strong Nod | Čas | 2000ms | 500ms | **-75%** |
| Micro Nods | Uhol | 20° | 15° | **-25%** |
| Micro Nods | Rýchlosť | 15°/s | 12°/s | **-20%** |
| Slow Drift | Uhol | 15° | 12° | **-20%** |
| Slow Drift | Čas | 5000ms | 3000ms | **-40%** |
| Freeze | Čas | 15000ms | 10000ms | **-33%** |
| Freeze | Prah | 2.0° | 1.5° | **-25%** |
| Side Tilt | Uhol | 30° | 25° | **-17%** |
| Side Tilt | Čas | 3000ms | 500ms | **-83%** |

**Výsledok:** Systém je teraz **2-6x citlivejší a rýchlejší** v detekcii nebezpečných stavov.

---

## Fáza 2: Real-world testovanie (Dynamické)

### Testové prostredie
- **Miesto:** Osobné vozidlo na reálnych cestách
- **Podmienky:**
  - Mestské cesty (30-50 km/h)
  - Prímestské cesty (60-90 km/h)
  - Rôzne povrchy (asfalt, hrboľaté cesty)
- **Trvanie:** 10 hodin 
- **Zariadenie:** M5StickC Plus 2 pripevnený elastickou čelenkou na čelo

### Test setup

![Testovanie v aute](./images/testing-in-car.jpg)
*Nodyne počas testovania v reálnych podmienkach*

### Testové scenáre

#### 1. Normálna jazda (Baseline)
**Scenár:** Bdelá jazda s normálnymi pohybmi hlavy
**Výsledok:**
- Žiadne falošné pozitíva
- Metriky sa aktualizovali plynulo
- Batéria vydržala celé testovanie (5-8h výdrž potvrdená)

#### 2. Simulovaný Strong Nod
**Scenár:** Zámerné prudké naklonenie hlavy dopredu >25° na 1 sekundu
**Výsledok:**
- Alarm sa aktivoval po **~600ms** (limit 500ms + detekčná latencia)
- Červená obrazovka + 1000/1500Hz tón
- RGB LED sa rozsvetila
- JSON alert odoslaný do dashboardu

#### 3. Simulované Micro Nods
**Scenár:** Séria 3 rýchlych kývnutí (>15°, >12°/s) za 8 sekúnd
**Výsledok:**
- Po 3. kývnutí alarm okamžite
- Kruhový buffer správne zaznamenal všetky 3 kývnutia
- Časové okno 8s fungovalo správne (staršie kývnutia sa nezapočítali)

#### 4. Simulovaný Slow Drift
**Scenár:** Pomaly kĺzajúca hlava v rozsahu 12-25° na 4 sekundy
**Výsledok:**
- Alarm po ~3.2 sekundách
- Nereagoval na rýchle prechody cez toto pásmo

#### 5. Simulovaný Freeze
**Scenár:** Úplné zamrznutie hlavy na 12 sekúnd
**Výsledok:**
- Alarm po 10 sekundách
- Malé prirodzené mikropohyby (\<1.5°) neresetnuli časovač

#### 6. Simulovaný Side Tilt
**Scenár:** Bočné naklonenie hlavy >25° na rameno
**Výsledok:**
- Alarm po ~600ms
- Rýchla reakcia zabránila dlhšiemu spánku

#### 7. Hrboľaté cesty
**Scenár:** Jazda po hrboľatej ceste s veľkými vibráciami
**Výsledok:**
- EMA filter efektívne vyhladzoval šum
- 1 falošný poplach (Freeze) počas extrémnych vibrácií (~5% miera)
- Vozač manuálne vypol alarm tlačidlom B

### Výsledky merania

| Metrika | Cieľ | Dosiahnuté | Status |
|---------|------|------------|--------|
| Úspešnosť detekcie | >95% | **100%** | Prekročené |
| Falošné pozitíva | \<10% | **\<5%** | Prekročené |
| Reakcný čas | \<1s | **0.5-3s** | Splnené |
| Výdrž batérie | >5h | **5-8h** | Splnené |
| Stabilita systému | Bez pádov | **Žiadne pády** | Splnené |

### Video dokumentácia

- **Real-world test:** [YouTube - Nodyne Real-World Testing](https://youtu.be/x0nncwOG13A)

*Video ukazuje testovanie v reálnych jazdných podmienkach s funkčným zariadením.*

---

## Závery testovania

### Úspešné aspekty
1. **5 algoritmov funguje paralelne** - Žiadne konflikty, každý deteguje špecifický typ ospalosti
2. **Kalibračný systém** - 50 vzoriek poskytuje spoľahlivý baseline
3. **EMA filter** - Efektívne redukuje šum z vibrácií
4. **Serial komunikácia** - Stabilná, bez straty paketov
5. **Optimalizované prahy** - Verzia 2.0 je 2-6x citlivejšia než v1.0
6. **Battery life** - 5-8 hodín pokrýva väčšinu jázd

### Zistené problémy 
1. **Falošné pozitíva na hrboľatých cestách** - Freeze algoritmus občas reaguje na extrémne vibrácie
   - **Riešenie:** EMA filter pomohol znížiť z ~10% na \<5%
2. **Pohodlie čelenky** - Elastická čelenka môže byť nepohodlná na dlhých jazdách
   - **Riešenie:** Použitie mäkšieho materiálu v budúcich verziách


---

**Navigation:** [⬅️ Implementation](../06-implementation/index.md) · [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md) · [➡️ Operation](../08-operation/index.md)
