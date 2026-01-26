---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.962893+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "8699500f-a0f4-412d-ab1d-06be16b6676c"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "06 implementation"

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

# 06-Implementation

## GitHub Repozitáre

- **Firmware:** [Firmware implementation](https://github.com/paulintheclub/nodyne-firmware)
- **Web Dashboard:** [Web Dashboard implementation](https://github.com/paulintheclub/nodyne-web)

---

## Prehľad

Systém Nodyne sa skladá z dvoch hlavných komponentov:
1. **Arduino Firmware** - Beží na M5StickC Plus 2 zariadení
2. **Web Dashboard** - Next.js aplikácia pre vizualizáciu a monitoring

---

## 1. Arduino Firmware

### Technológie
- **Platforma:** M5StickC Plus 2 (ESP32-PICO-V3-02)
- **Framework:** Arduino (C++)
- **IDE:** Arduino IDE / PlatformIO
- **Knižnice:**
  - `M5StickCPlus2.h` - Hardvérová abstrakcia
  - Štandardné Arduino knižnice

### Štruktúra kódu

**Hlavné konštanty (Detekčné prahy):**
- Strong Nod: 25° / 500ms
- Micro Nods: 15° / 12°/s / 3 kývnutia / 8s okno
- Slow Drift: 12° / 3s
- Freeze: 1.5° / 10s
- Side Tilt: 25° / 500ms

**Globálne premenné:**
- Kalibračné: `baselineRoll`, `baselinePitch`
- Stav: `isAlerting`, `alertReason`
- Buffer: `micronods[10]` (kruhový buffer)
- Štatistiky: `maxRollDiff`, `avgMovement`

### Kľúčové funkcie

#### `setup()`
Inicializácia hardvéru, Serial (115200 baud), IMU, displeja, reproduktora. Welcome screen + automatická kalibrácia.

#### `loop()`
1. Čítanie IMU (akcelerometer + gyroskop)
2. Výpočet roll/pitch (`atan2()`)
3. Výpočet rozdielov oproti baseline
4. 5 detekčných algoritmov paralelne
5. Kontrola prebudenia
6. Update displeja
7. Telemetria cez Serial
8. Spracovanie príkazov z dashboardu
9. Tlačidlá: A (kalibrácia), B (stop/štatistiky)

#### `calibrate()`
- Modrá obrazovka + inštrukcie
- Pauza 2s
- 50 vzoriek (20ms interval)
- Priemer → `baselineRoll/Pitch`
- Vynulovanie počítadiel
- Zvukové potvrdenie (800→1200→1500 Hz)

#### Detekčné algoritmy (zjednodušená logika)

**Strong Nod:** `IF rollDiff > 25° po dobu > 500ms → Alert`

**Micro Nods:** `IF 3+ rýchle kývnutia (>15°, >12°/s) za 8s → Alert`

**Slow Drift:** `IF rollDiff 12-25° po dobu > 3s → Alert`

**Freeze:** `IF pohyb < 1.5° po dobu > 10s → Alert`

**Side Tilt:** `IF pitchDiff > 25° po dobu > 500ms → Alert`

#### `startAlert(reason, text)`
Zapne červenú LED, zobrazí červenú obrazovku, odošle JSON alert do dashboardu.

#### `stopAlert()`
Vypne alarm, LED, zvuk, vynuluje timery.

#### `playAlertSound()`
Striedavé tóny 1000Hz/1500Hz každých 300ms.

#### `updateDisplay()`
Vykreslí monitoring obrazovku:
- Header: Názov + batéria (CHG indikátor)
- Stav: Monitoring (zelená) / ALERT (červená)
- Metriky: Fwd, Side, Nods, Move
- Warning level: Alert / Warning / HIGH RISK
- 2 progress bary (rollDiff, pitchDiff)
- Návod: "A:Cal B:Stop/Stats"

### Serial komunikácia

**Telemetria (JSON):**
```json
{
  "type": "telemetry",
  "rollDiff": 12.5,
  "pitchDiff": 3.2,
  "movement": 2.1,
  "micronods": 1,
  "isAlerting": false,
  "battery": 85,
  "charging": false
}
```

**Príkazy:**
- `CALIBRATE`, `STOP_ALERT`, `RESET_STATS`, `PING`

**Alert:**
```json
{
  "type": "alert",
  "reason": 1,
  "reasonText": "Strong Nod"
}
```

### Optimalizácie

**EMA Filter:** `avgMovement = avgMovement × 0.95 + movement × 0.05`

**Kruhový buffer:** Mikrokývnutia v poli `micronods[10]` s časovými značkami.

**Kompilácia:**
- Board: M5StickC Plus 2
- Upload Speed: 115200
- Flash: ~120KB

---

## 2. Web Dashboard

### Technológie
- **Next.js 16** - React framework s App Router
- **React 19** - UI knižnica
- **TypeScript** - Typová bezpečnosť
- **Three.js** + **@react-three/fiber** - 3D vizualizácia
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **Web Serial API** - Komunikácia so zariadením

### Štruktúra aplikácie

**2 hlavné stránky:**

#### 1. Landing Page (Domovská stránka)
- Prezentácia produktu Nodyne
- Prehľad 5 detekčných funkcií
- Vizualizácia dát a výsledkov testov
- Sekcia recenzií
- Kontaktný formulár

#### 2. Dashboard (`/dashboard`)
Real-time monitoring interface s hlavnými komponentmi:

**SerialConnectButton:**
- Pripojenie k zariadeniu cez Web Serial API
- Automatická detekcia M5StickC Plus 2
- Konfigurácia: 115200 baud
- Stav pripojenia (Connected/Disconnected)

**HeadVisualizer (3D):**
- Načítanie GLTF 3D modelu hlavy
- Real-time rotácia podľa roll/pitch hodnôt
- Dynamické osvetlenie pri alarmoch
- Optimalizované pre výkon

**DeviceStatusCard:**
- Status pripojenia zariadenia
- Batéria (%), indikátor nabíjania (CHG)
- Posledná aktualizácia (timestamp)

**AlertPanel:**
- Zobrazenie aktívnych upozornení
- Typ alarmu (Strong Nod, Micro Nods, atď.)
- Vizuálne zvýraznenie 
- Tlačidlo "Stop Alert" → posiela `STOP_ALERT` príkaz

**TelemetryPanel:**
- Roll/Pitch aktuálne hodnoty
- RollDiff/PitchDiff (rozdiel od baseline)
- Movement (celkový pohyb)
- Micronods count
- Progress bary pre vizualizáciu

**HistoryTable:**
- Časová os udalostí
- Typy: Alert, Calibration, System
- Timestamp, dôvod, detaily

### Web Serial API integrácia

**Komunikácia:**
- Otvorenie sériového portu v prehliadači
- Čítanie JSON správ z Arduino
- Parsing typov: `telemetry`, `alert`, `stats`, `response`
- Odosielanie príkazov: `CALIBRATE`, `STOP_ALERT`, `GET_STATS`

**Parsovanie dát:**
```typescript
const data = JSON.parse(line);
if (data.type === 'telemetry') {
  store.setRoll(data.roll);
  store.setPitch(data.pitch);
  store.setBattery(data.battery);
}
if (data.type === 'alert') {
  store.setAlerting(true, data.reason, data.reasonText);
  // Zvukové upozornenie v prehliadači
}
```

### State Management (Zustand)

**Store obsahuje:**
- `serialPort` - Referencia na sériový port
- `isConnected` - Boolean stavu pripojenia
- `roll`, `pitch` - Aktuálne uhly
- `rollDiff`, `pitchDiff` - Rozdiely od baseline
- `movement` - Celkový pohyb
- `micronods` - Počet zaznamenaných kývnutí
- `isAlerting`, `alertReason` - Stav alarmu
- `battery`, `charging` - Stav batérie
- `history[]` - Pole udalostí (timestamp, type, reason)

**Akcie:**
- `connectSerial()` - Otvorenie sériového portu
- `disconnectSerial()` - Uzavretie portu
- `sendCommand(cmd)` - Odoslanie príkazu
- `addHistoryEvent(event)` - Pridanie do histórie

### 3D Vizualizácia (Three.js)

**Implementácia:**
- Použitie `@react-three/fiber` (React wrapper pre Three.js)
- `@react-three/drei` - Helpers (OrbitControls, useGLTF)
- GLTF model hlavy načítaný z `/models/head.glb`
- Rotácia aplikovaná na model: `rotation={[pitch * DEG2RAD, roll * DEG2RAD, 0]}`
- Ambient light + Point light (červené pri alerte)
- Fallback loading screen počas načítavania modelu

**Optimalizácie:**
- Lazy loading 3D modelu
- 60 FPS target s throttling
- Suspend pri neaktívnej karte

### Vývoj

**Skripty:**
```bash
npm install          # Inštalácia závislostí
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm start            # Production server
```

**Požiadavky:**
- Node.js >= 18
- Prehliadač s Web Serial API
- USB pripojenie k M5StickC Plus 2

### Features

-  Real-time telemetria
-  3D vizualizácia hlavy
-  Web Serial API integrácia
-  História udalostí
-  Vizuálne upozornenia
-  Dark mode
-  TypeScript type safety

---

## Linky na kód

- [Arduino Firmware + Web Dashboard](./code-links.md)

---

**Navigation:** [⬅️ Design](../05-design/index.md) · [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md) · [➡️ Testing](../07-testing-verification/index.md)
