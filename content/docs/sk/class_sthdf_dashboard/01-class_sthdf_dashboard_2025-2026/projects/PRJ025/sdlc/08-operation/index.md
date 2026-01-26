---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.964278+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "ee30609b-e436-4627-bd01-2c48fe9ff96c"


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


## 1. Deployment - Nasadenie systému

### 1.1 Inštalácia Firmware na M5StickC Plus 2

**Príprava vývojového prostredia:**

1. **Nainštaluj Arduino IDE** - stiahni z [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. **Nastav M5StickC Plus 2** - postupuj podľa video návodu:
   - [M5Stack Arduino IDE Setup in 5 minutes](https://www.youtube.com/watch?v=U2es-l4z2Zg)
   - Pridaj URL board managera pre ESP32
   - Nainštaluj M5StickCPlus2 knižnicu

**Načítanie kódu projektu Nodyne:**

3. **Klonuj repozitár** firmware z GitHub:
   - [Nodyne Firmware Repository](https://github.com/paulintheclub/nodyne-firmware)
4. **Skompiluj a nahraj** firmvér do M5StickC Plus 2 cez Arduino IDE
   - Pripoj zariadenie cez USB-C kábel
   - Vyber správny port a board (M5StickC Plus 2)
   - Klikni na "Upload"

**Systémové požiadavky:**
- Arduino IDE 2.0 alebo novší
- USB-C kábel
- M5StickCPlus2 knižnica nainštalovaná cez Library Manager
- ESP32 board support (inštalovateľný cez Board Manager)

---

### 1.2 Nasadenie Web Dashboard

**Lokálne spustenie:**

1. **Klonuj repozitár** dashboardu:
   - [Nodyne Web Dashboard Repository](https://github.com/paulintheclub/nodyne-web)
2. **Nainštaluj závislosti:**
   ```bash
   npm install
   ```
3. **Spusti vývojový server:**
   ```bash
   npm run dev
   ```
4. **Otvor v prehliadači:**
   - [http://localhost:3000](http://localhost:3000)

**Produkčné nasadenie (Vercel):**

1. **Pripoj GitHub repozitár** k Vercel účtu
2. **Importuj projekt** do Vercel
3. **Deploy** - Vercel automaticky zbuilduje a nasadí aplikáciu
4. **Získaj produkčnú URL** (napr. `https://nodyne-web.vercel.app/`)

**Systémové požiadavky:**
- Node.js 18 alebo novší
- Chromium-based prehliadač (Chrome, Edge, Opera) pre Web Serial API
- USB pripojenie k M5StickC Plus 2 zariadeniu

---

### 1.3 Pripojenie zariadenia k počítaču

1. **Pripoj M5StickC Plus 2** cez USB-C kábel
2. **Zapni zariadenie** dlhým stlačením power tlačidla
3. **Počkaj na automatickú kalibráciu** (3 sekundy)
4. **Zariadenie je pripravené** - zobrazí sa monitorovacia obrazovka

---

## 2. User Manual - Používateľská príručka

### 2.1 Quick Start Guide

**Live Demo:**
- Webový dashboard: [https://nodyne-web.vercel.app/](https://nodyne-web.vercel.app/)
- Vyžaduje pripojené zariadenie cez USB a Chromium prehliadač

**Video demonštrácie:**
- **Úvod a kalibrácia:** [YouTube - Nodyne Intro & Calibration](https://www.youtube.com/watch?v=abc9rMlaIgM)
- **Real-world test (jazda v aute):** [YouTube - Real-World Testing](https://youtu.be/x0nncwOG13A)

**Krok za krokom:**

1. **Priprav zariadenie:**
   - Uisti sa, že batéria je nabitá (min. 20%)
   - Nasaď zariadenie na čelo pomocou elastickej čelenky

2. **Zapni zariadenie:**
   - Dlhé stlačenie power tlačidla (2 sekundy)
   - Zobrazí sa úvodná obrazovka "NODYNE"

3. **Kalibrácia:**
   - Systém automaticky spustí kalibráciu (modrá obrazovka)
   - Seď normálne a pozeraj sa dopredu 3 sekundy
   - Po kalibrácii sa zobrazí zelená obrazovka "READY"

4. **Začni jazdu:**
   - Monitorovacia obrazovka sa zobrazí automaticky
   - Zariadenie sleduje pohyb hlavy v reálnom čase

5. **Pri alerte:**
   - Červená obrazovka + zvukový alarm
   - Vráť hlavu do normálnej polohy alebo stlač tlačidlo B na zastavenie

---

### 2.2 Kalibrácia zariadenia

**Kedy kalibrovať:**
- Pri každom zapnutí zariadenia (automaticky)
- Po zmene polohy sedadla/volantu (manuálne tlačidlom A)
- Pri falošných alarmoch (manuálne tlačidlom A)

**Ako kalibrovať:**
1. Stlač tlačidlo **A** na zariadení
2. Zobrazí sa modrá obrazovka "CALIBRATING"
3. Seď normálne vo vodičskej pozícii
4. Pozeraj sa dopredu 3 sekundy
5. Po dokončení znie zvukový signál (800→1200→1500 Hz)
6. Systém sa prepne na monitorovaciu obrazovku

---

### 2.3 Interpretácia displeja a indikátorov

Detailný popis všetkých obrazoviek a ich významu nájdeš v sekcii **[Design - UI/UX zariadenia](../05-design/index.md)**.

**Rýchly prehľad stavov:**
- **Zelená** - Normálny monitoring
- **Žltá** - Varovný stav (blízko prahu)
- **Červená** - Aktívny alarm (ospalosť detegovaná)
- **Modrá** - Kalibrácia alebo štatistiky

**Indikátory na displeji:**
- **CHG** - Zariadenie sa nabíja
- **Ikona batérie** - Úroveň nabitia (%)
- **Fwd/Side** - Náklon hlavy dopredu/do strany
- **Nods** - Počet zaznamenaných kývnutí
- **Move** - Celkový pohyb hlavy

---

### 2.4 Pripojenie k Web Dashboard

1. **Otvor dashboard** v Chromium prehliadači:
   - Lokálne: `http://localhost:3000/dashboard`
   - Online: `https://nodyne-web.vercel.app/dashboard`

2. **Pripoj zariadenie:**
   - Klikni na tlačidlo **"Connect Device"**
   - Vyber správny sériový port (M5StickC Plus 2)
   - Potvrď pripojenie

3. **Real-time monitoring:**
   - 3D vizualizácia hlavy sa začne hýbať podľa tvojho náklonu
   - Telemetria sa aktualizuje každých 100ms
   - História alarmov sa zobrazuje v tabuľke

**Príkazy z dashboardu:**
- **Calibrate** - Spusti kalibráciu na zariadení
- **Stop Alert** - Zastaví aktívny alarm
- **Get Stats** - Zobrazí štatistiky z jazdy

---

### 2.5 Používanie tlačidiel

**Tlačidlo A (ľavé):**
- **1x stlačenie** - Spustí manuálnu kalibráciu
- Použij pri zmene polohy sedadla alebo falošných alarmoch

**Tlačidlo B (pravé):**
- **Pri alarme:** Zastaví alarm
- **Pri monitoringu:** Zobrazí štatistiky (2 sekundy)

**Power tlačidlo (strana):**
- **Dlhé stlačenie (2s)** - Zapne/vypne zariadenie

---

## 3. Maintenance - Údržba zariadenia

### 3.1 Nabíjanie batérie

**Špecifikácie:**
- Batéria: 200mAh Li-Po
- Nabíjanie: USB-C (5V, 500mA)
- Čas nabíjania: ~45-60 minút (0% → 100%)
- Výdrž: 5-8 hodín nepretržitého používania

**Ako nabíjať:**
1. Pripoj USB-C kábel k zariadeniu
2. Na displeji sa zobrazí indikátor **"CHG"**
3. Zelená LED bliká počas nabíjania
4. Po dokončení LED prestane blikať

**Odporúčania:**
- Nenechávaj batériu úplne vybitú (\<5%)
- Nabíjaj pred dlhými cestami
- Skladuj zariadenie s batériou na ~50%

---

### 3.2 Čistenie zariadenia

**Displej:**
- Použi jemnú handričku z mikrovlákna
- Pri väčšom znečistení použit trochu isopropylalkoholu (70%)
- Netlač príliš silno na displej

**Telo zariadenia:**
- Utri suchou handričkou
- Pri väčšom znečistení použij vlhkú handričku (nie mokrú!)
- Nenárážaj zariadenie do vody

**Elastická čelenka:**
- Prať v teplej vode s jemným mydlom
- Nechaj voľne schnúť (nie v sušičke)
- Vymeň pri opotrebovaní

---

### 3.3 Skladovanie

**Krátkodobé skladovanie (týždne):**
- Vypni zariadenie
- Uisti sa, že batéria je nabitá na 50-70%
- Skladuj na suchom mieste pri izbovej teplote

**Dlhodobé skladovanie (mesiace):**
- Nabite batériu na 50%
- Skladuj v chladnom suchom mieste (15-25°C)
- Raz za 2-3 mesiace zapni a nabite na 50%

**Čo sa vyhýbať:**
- Vysoké teploty (>40°C) - poškodenie batérie
- Priame slnečné svetlo - farebná degradácia displeja
- Vlhkosť - môže poškodiť elektroniku

---

## 4. Updates & Versioning - Aktualizácie

### 4.1 Aktualizácia Firmware

**Kedy aktualizovať:**
- Nové detekčné algoritmy
- Optimalizácia parametrov
- Oprava chýb

**Ako aktualizovať:**
1. **Stiahni najnovšiu verziu** z [GitHub Firmware repo](https://github.com/paulintheclub/nodyne-firmware)
2. **Otvor firmware v Arduino IDE**
3. **Pripoj zariadenie** cez USB-C
4. **Nahraj nový kód** (Upload)
5. **Zariadenie sa automaticky reštartuje**

**História verzií:**
- **v1.0** - Počiatočná verzia s konzervatívnymi parametrami (testovanie doma)
- **v2.0** - Optimalizované parametre (2-6x citlivejšie, testované v aute)

---

### 4.2 Aktualizácia Web Dashboard

**Lokálne nasadenie:**
1. **Pull najnovšie zmeny** z GitHub:
   ```bash
   git pull origin main
   ```
2. **Nainštaluj nové závislosti** (ak nejaké):
   ```bash
   npm install
   ```
3. **Reštartuj dev server:**
   ```bash
   npm run dev
   ```

**Produkčné nasadenie (Vercel):**
1. **Push zmeny do GitHub** repozitára
2. **Vercel automaticky redeployuje** aplikáciu
3. **Skontroluj deployment status** na Vercel dashboarde

---

**Navigation:** [⬅️ Testing](../07-testing-verification/index.md) · [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
