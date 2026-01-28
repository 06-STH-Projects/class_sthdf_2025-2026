---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: '1.0.1'

# Dátum buildu – generuje skript
fm_build: '2025-11-28T15:54:47.912927+00:00'

# Poznámka k verzii – voliteľné
fm_version_comment: ''

# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: '45da0d63-a9c0-48bd-9a19-e27953474170'

# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: 'class_sthdf_dashboard'

# Názov zápisu – dopĺňa používateľ
title: '03 solution architecture'

# Krátky popis – dopĺňa používateľ (voliteľné)
description: '{{DESCRIPTION}}'

# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: 'Roman Kazicka'

# Zoznam autorov – generuje skript
authors:
  - 'Roman Kazicka'

# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ''

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: ''

# Priorita (low/medium/high) – voliteľné
priority: ''

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: []

# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: 'sk'

# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: '2025-11-28 16:54'

# Dátum poslednej úpravy – dopĺňa človek
modified: '2025-11-28 16:54'

# Stav dokumentu – default "backlog"
status: 'backlog'

# Viditeľnosť – default "public"
privacy: 'public'

# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: 'Roman Kazicka'

# Systémový vlastník práv
rights_holder_system: 'CAA / KNIFE / LetItGrow'

# Licencia
license: 'CC-BY-NC-SA-4.0'

# Disclaimer
disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.'

# Copyright
copyright: '© 2025 Roman Kazicka'

# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ''

# URL pôvodného repozitára
origin_repo_url: ''

# Commit pôvodu
origin_commit: ''

# Branch pôvodu
origin_branch: ''

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: 'CAA'

# Pôvodný autor
origin_author: 'Roman Kazicka'

# Importovaný zdroj
origin_imported_from: ''

# Dátum importu
origin_import_date: ''

# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ''
fm_reserved2: ''
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

# 03-Solution Architecture

## Komunikačný protokol

Komunikačný protokol medzi raketou (IRIS) a pozemnou stanicou (HERMES) využíva LoRa moduly pre bezdrôtovú komunikáciu na dlhé vzdialenosti. Protokol je navrhnutý pre poloduplexnú komunikáciu, kde raketa primárne odosiela dáta a príležitostne prijíma príkazy.

### Základné princípy

**Kľúčové charakteristiky:**

- **Poloduplexná komunikácia**: LoRa moduly nemôžu prijímať a vysielať súčasne
- **Polling-based prístup**: Raketa pravidelne posiela telemetriu a čaká na ACK s možným príkazom
- **Retry mechanizmus**: Každý paket sa po nepotvrdení opakuje 3x, potom sa zahodí
- **CRC validácia**: Hardvérová detekcia chýb zapnutá na LoRa module
- **RSSI reporting**: Každý paket obsahuje informáciu o sile signálu
- **Priorita**: Maximálna vzdialenosť pred šírkou pásma (vysoký spreading factor)

**Architektúra protokolu:**

1. **Polling**: Raketa pravidelne posiela telemetriu a čaká na ACK s možným príkazom
2. **Events**: Pri špeciálnych udalostiach (štart, apogee, pristátie) posiela dedikované pakety
3. **Commands**: Pozemná stanica môže odpovedať príkazmi (GET_STATUS, CALIBRATE)

### Stavový automat IRIS (raketa)

**Stavy a prechody:**

| Stav           | Popis                            | Frekvencia komunikácie                 |
| -------------- | -------------------------------- | -------------------------------------- |
| **UNPAIRED**   | Hľadá pozemnú stanicu            | Pairing request každých 5s             |
| **PAIRING**    | Čaká na potvrdenie (30s timeout) | –                                      |
| **PRE_LAUNCH** | Na zemi, monitoring senzorov     | Status update pri zmene                |
| **IN_FLIGHT**  | Aktívny let                      | Telemetria každú 1s, GPS každých 500ms |
| **APOGEE**     | Dosiahnutý vrchol, voľný pád     | –                                      |
| **LANDED**     | Na zemi po pristátí              | Pozícia každých 30s                    |
| **ERROR**      | Chyba komunikácie/senzorov       | –                                      |

![Stavový diagram IRIS](../../report-images/ea/IrisStateMachine.jpg)

Diagram zobrazuje stavový automat zariadenia IRIS. V rámci svojho kódu využíva stavový automat, ktorý vykonáva akcie na základe zaznamenaných hodnôt senzorov a prijatých správ.

### Stavový automat HERMES (pozemná stanica)

**Stavy a prechody:**

| Stav          | Popis                      | Akcia                     |
| ------------- | -------------------------- | ------------------------- |
| **LISTENING** | Čaká na pairing request    | Odosiela pairing ACK      |
| **PAIRED**    | Pripojená k rakete         | Prijíma status updates    |
| **TRACKING**  | Sleduje let rakety         | Loguje telemetriu         |
| **IDLE**      | Žiadna aktívna komunikácia | Timeout po 60s neaktivity |

![Stavový diagram HERMES](../../report-images/ea/HermesStateMachine.jpg)

Diagram zobrazuje stavy zariadenia HERMES a prechody medzi nimi. Stavy sa menia na základe spárovania so zariadením IRIS a používateľských akcií.

### Sekvenčný diagram interakcie používateľa

![Sekvenčný diagram interakcie](../../report-images/ea/HermesUserInteractionSequenceDiagram.jpg)

Tento diagram znázorňuje, ako podrobne prebiehajú možné interakcie medzi používateľom a zariadením HERMES, vrátane pripojenia cez WiFi, prístupu k dashboardu a prijímania telemetrických dát.

## Webová aplikácia - HERMES Dashboard

Webový dashboard je postavený na mikrokontroléri **ESP32**, ktorý preberá úlohu LoRa prijímača, WiFi Access Pointu, HTTP servera a real-time distribútora telemetrických dát.

### WiFi infraštruktúra

**Konfigurácia Access Pointu:**

- **SSID**: `arct-signalis.local`
- **IP adresa**: `192.168.4.1`
- **Maska**: `255.255.255.0`
- **mDNS**: Aktívne

**Optimalizované nastavenia pre stabilitu:**

- Vypnutý power-save režim (`WIFI_PS_NONE`)
- Pevne nastavená šírka kanála: HT20
- Zvýšený vysielací výkon: 19.5dBm
- Beacon interval: 100 ms

**LED indikácia (GPIO2):**

- Svieti trvalo → Aspoň jeden klient je pripojený
- Bliká → Žiadny klient nie je pripojený

### HTTP endpointy

Zariadenie poskytuje tri kľúčové endpointy:

| Endpoint | Popis                 | Obsah                                       |
| -------- | --------------------- | ------------------------------------------- |
| `/`      | Landing page          | Úvodná stránka s tlačidlom "Open dashboard" |
| `/app`   | Hlavný dashboard      | Kompletné webové rozhranie (HTML/CSS/JS)    |
| `/data`  | Telemetrický endpoint | 28-bajtový binárny rámec                    |

**Prístup k dashboardu:**

- `http://arct-signalis.local/app`
- `http://192.168.4.1/app`

### Telemetrický protokol - 28-bajtový binárny rámec

Telemetrické dáta prichádzajú cez LoRa v binárnom formáte, ktorý ESP32 bez úprav zabalí do HTTP odpovede. UI ho dekóduje a vizualizuje v reálnom čase.

**Štruktúra rámca:**

| Offset | Typ          | Hodnota       | Popis             |
| -----: | ------------ | ------------- | ----------------- |
|      0 | `u8`         | `0x03`        | Typ správy        |
|    4–7 | `float32 LE` | longitude     | Geografická dĺžka |
|   8–11 | `float32 LE` | latitude      | Geografická šírka |
|  12–15 | `float32 LE` | elevation (m) | Nadmorská výška   |
|  16–19 | `float32 LE` | roll          | Náklon (os X)     |
|  20–23 | `float32 LE` | pitch         | Náklon (os Y)     |
|  24–27 | `float32 LE` | yaw           | Otočenie (os Z)   |

**Príklad dekódovaných dát:**

```
0004: xx xx xx xx  | lon  = 17.107700
0008: xx xx xx xx  | lat  = 48.148600
000c: xx xx xx xx  | elev = 534.2 m
0010: xx xx xx xx  | roll = -2.1°
0014: xx xx xx xx  | pitch = 14.7°
0018: xx xx xx xx  | yaw  = 87.3°
```

### Dashboard Features

**Implementácia:**

- Čisté HTML/CSS/JavaScript
- **Žiadne externé knižnice** alebo frameworky
- Plne funkčné na ESP32 bez závislostí

**Komponenty dashboardu:**

#### 3D Vizualizácia (WebGL)

- **Model nosiča** s dynamickou orientáciou podľa yaw/pitch/roll
- **Animovaná stopa** (trail) trajektórie letu
- **Dymové častice** pri štarte
- **Zemská mriežka** pre orientáciu v priestore

**Interaktívna kamera:**

- Otáčanie myšou
- Zoom kolieskom
- Dotykové gestá (drag, pinch)
- Smoothing pre plynulú animáciu aj pri kolísajúcej frekvencii paketov

#### Pravý panel - Real-time údaje

**Číselné hodnoty:**

- GPS súradnice (latitude, longitude)
- Elevácia v metroch
- Orientácia (yaw, pitch, roll) v stupňoch

**Hex dump:**

- Raw zobrazenie prijatých dát
- Rozbitý podľa offsetov pre jednoduchú kontrolu

#### Live grafy

**Časové grafy pre všetky parametre:**

- Priebežné min/max hodnoty
- Adaptívny rozsah osi
- Detekcia driftu, oscilácií a náhlych zmien

**Účel:**

- Odhalenie problémov so senzormi
- Sledovanie kurzovej stability
- Analýza výškového profilu

### Stavové logy ESP32

**Diagnostika:**

- Pripojenia/odpojenia klientov (MAC adresy)
- Stav pamäte (`ESP.getFreeHeap()` každých 5 sekúnd)
- LED indikátor pripojenia

## Softvérová architektúra

### IRIS Firmware

**Hlavné komponenty:**

- Stavový automat pre riadenie letových fáz
- Integrácia senzorov (IMU, barometer, GPS)
- LoRa komunikačný modul
- SD karta logging (CSV formát)
- Časovanie pre polling a event-driven správy

### HERMES Firmware

**Hlavné komponenty:**

- WiFi AP management
- HTTP server s routingom
- LoRa prijímač a dekódovanie rámcov
- Real-time distribúcia dát
- Stavový automat pre pairing a tracking

### Webový Dashboard (Frontend)

**Technológie:**

- Vanilla JavaScript (bez závislostí)
- WebGL pre 3D vizualizáciu
- Canvas API pre grafy
- Fetch API pre polling `/data` endpointu

**Optimalizácie:**

- Smoothing pre plynulú animáciu
- Adaptívne škálovanie grafov
- Minimálna veľkosť pre rýchle načítanie z ESP32

## Zhrnutie architektúry

Systém SIGNALIS využíva **stavový automat** na oboch stranách komunikačného kanála, čo zabezpečuje spoľahlivé prechody medzi režimami (pairing, tracking, idle). **Polling-based protokol s retry mechanizmom** garantuje doručenie dôležitých telemetrických dát aj v náročných podmienkach.

**Webový dashboard** bez externých závislostí umožňuje vizualizáciu priamo z ESP32 mikrokontroléra, čo znižuje náklady a komplexitu systému. **28-bajtový binárny rámec** minimalizuje bandwidth a umožňuje efektívny prenos dát cez LoRa.

## Odkazy

- [Solution design](./design.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
