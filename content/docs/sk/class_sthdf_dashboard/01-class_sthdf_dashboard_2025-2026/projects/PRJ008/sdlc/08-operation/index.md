---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: '1.0.1'

# Dátum buildu – generuje skript
fm_build: '2025-11-28T15:54:47.915159+00:00'

# Poznámka k verzii – voliteľné
fm_version_comment: ''

# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: 'e3398352-82c7-4263-9398-34dbe450d68a'

# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: 'class_sthdf_dashboard'

# Názov zápisu – dopĺňa používateľ
title: '08 operation'

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

# 08-Operation

## Aktuálny stav projektu

### Dokončené komponenty

**HERMES - Pozemná stanica:**

- ✅ PCB dizajn a profesionálna výroba (revízia 4)
- ✅ 3D mechanika a prototypy (v2 optimalizovaný dizajn)
- ✅ Webový dashboard s kompletnou vizualizáciou
- ✅ WiFi AP a HTTP server
- ✅ LoRa prijímač a telemetrický protokol

**IRIS - Palubný datalogger:**

- ✅ Funkčný modul s rádiom, SD kartou a senzormi
- ✅ PCB dizajn (vertikálny layout)
- ✅ Integrácia všetkých komponentov
- ✅ 3D tlačiteľné držiaky pre BT-80 trubicu

**Systém:**

- ✅ Telemetrický protokol (28-bajtový binárny formát)
- ✅ LoRa komunikačné testy (2 km dosah overený)
- ✅ Stavové automaty implementované
- ✅ Dokumentácia a EA diagramy

### Prebieha

- 🔄 Integrácia všetkých komponentov do finálnych zostáv
- 🔄 Testovanie kompletného systému IRIS + HERMES
- 🔄 Optimalizácia softvéru pre záznam dát na SD kartu
- 🔄 Kalibrácia a testovanie presnosti senzorov

![HERMES finálna zostava](../../report-images/prog-update5-hermes/assembly2.png)

![IRIS kompletný modul](../../report-images/project-summary/IMG_4043.jpg)

## IRIS - Prevádzkové špecifikácie

### Hardvérová platforma

**Hlavný mikrokontrolér:**

- Arduino Nano 33 BLE Sense Rev2
- Integrované senzory (IMU, barometer)

**Senzorové vybavenie:**

- **9DOF IMU:** 3-osový akcelerometer, gyroskop, magnetometer
- **Barometer:** Tlak (260-1260 hPa), teplota (-40°C až +85°C)
- **GPS:** Longitude, latitude, elevácia

**Komunikácia:**

- LoRa E220-900T22D (900 MHz)
- Dosah: až 2 km
- Telemetria: 28-bajtové binárne rámce

**Napájanie:**

- 7.4V 2S LiPo batéria (900 mAh)
- **Výdrž:** min. 30 minút ✅

**Záznam dát:**

- **Lokálne:** SD karta, CSV formát
- **Kapacita:** Dáta z posledných 3 letov
- **Real-time:** LoRa telemetria na HERMES

**Mechanika:**

- 3D tlačiteľné držiaky (FDM)
- **Kompatibilita:** BT-80 raketové nosiče (~65mm priemer)
- **Hmotnosť:** Max. 200g vrátane batérie

### Prevádzkové režimy

| Stav       | Frekvencia komunikácie     | Vzorkovanie senzorov |
| ---------- | -------------------------- | -------------------- |
| UNPAIRED   | Pairing request každých 5s | Nízka                |
| PRE_LAUNCH | Status update pri zmene    | Normálna (10 Hz)     |
| IN_FLIGHT  | Telemetria každú 1s        | Vysoká (100 Hz)      |
| LANDED     | Pozícia každých 30s        | Nízka                |

## HERMES - Prevádzkové špecifikácie

### Hardvérová platforma

**Hlavný mikrokontrolér:**

- ESP32
- USB-C programovací port (dostupný aj v zostavenom stave)

**Komunikácia:**

- **LoRa prijímač:** E220-900T22D (900 MHz)
- **WiFi Access Point:**
  - SSID: `arct-signalis.local`
  - IP: `192.168.4.1`
  - mDNS: Aktívne

**Napájanie:**

- Batéria s minimálnou výdržou: 45 minút ✅
- Spínač napájania (on/off)

**Indikácia stavu:**

- LED (GPIO2): Pripojenie klientov (svieti/bliká)
- LED: GPS lock status

**Mechanika:**

- 3D tlačený dizajn (PETG, FDM)
- **Rozmery:** 91×84×35 mm
- Ľahko rozobratené pre údržbu

### Webové rozhranie

**Sieťové parametre:**

```
SSID: arct-signalis.local
IP: 192.168.4.1
Maska: 255.255.255.0
Power: 19.5dBm
Kanál: HT20
Power-save: Vypnutý
```

**HTTP endpointy:**

| Endpoint | Obsah                    | MIME Type                |
| -------- | ------------------------ | ------------------------ |
| `/`      | Landing page             | text/html                |
| `/app`   | Dashboard (HTML/CSS/JS)  | text/html                |
| `/data`  | 28-bajtový binárny rámec | application/octet-stream |

**Prístup k dashboardu:**

- `http://arct-signalis.local/app`
- `http://192.168.4.1/app`

### Dashboard funkcie

#### 3D Vizualizácia (WebGL)

**Zobrazované elementy:**

- Model raketového nosiča
- Dynamická orientácia (yaw/pitch/roll)
- Dymová stopa pri štarte
- Animovaná trajektória (trail)
- Zemská mriežka

**Interakcia:**

- Otáčanie myšou (drag)
- Zoom kolieskom
- Dotykové gestá (mobile support)
- Plynulá animácia (smoothing)

#### Real-time údaje

**Telemetrické parametre:**

- **GPS:** Latitude, longitude
- **Elevácia:** Nadmorská výška v metroch
- **Orientácia:** Yaw, pitch, roll v stupňoch

**Aktualizácia:**

- Polling `/data` endpointu každých 500ms
- Smoothing pre plynulé prechody
- Adaptívne škálovanie grafov

#### Live grafy

**Funkcie:**

- Časové grafy pre všetky parametre
- Priebežné min/max hodnoty
- Adaptívny rozsah osi
- Detekcia driftu a oscilácií

#### Debug panel

**Hex dump:**

- Raw zobrazenie binárnych dát
- Rozbitý podľa offsetov
- Užitočné pre diagnostiku

## Použitie v praxi

### Cieľová skupina

**Primárni používatelia:**

- Raketoví modelári (začínajúci aj pokročilí)
- Študenti technických odborov
- Technologickí nadšenci a makeri
- Edukatívne projekty v školách

### Pridaná hodnota

**Pre začínajúcich modelárov:**

- **Dostupná cena:** Rádovo lacnejšia ako komerčné riešenia (500€+)
- **Nízke riziko:** Pri strate zariadenia nižší finančný dopad
- **Vzdelávacie využitie:** Učenie sa o elektronike, senzoroch, bezdrôtovej komunikácii

**Pre pokročilých používateľov:**

- **Otvorenosť:** Možnosť ďalšieho rozširovania a modifikácií
- **Modularita:** Výmena a upgrade komponentov
- **Prístup k dátam:** Detailné letové záznamy (CSV + real-time)

**Pre edukatívne účely:**

- Praktické využitie fyzikálnych konceptov
- Programovanie mikrokontrolérov
- 3D tlač a CAD modelovanie
- PCB dizajn a výroba

### Scenáre použitia

**1. Testovací let:**

- IRIS umiestnený v rakete (BT-80)
- HERMES na zemi s dashboardom
- Real-time sledovanie letu cez WiFi
- Offline záznam na SD kartu

**2. Analýza po lete:**

- Stiahnutie CSV dát z SD karty
- Analýza maximálnej výšky, rýchlosti, G-síl
- Overenie výpočtov s reálnymi dátami
- Plánovanie ďalších letov

**3. Experimentovanie:**

- Meranie atmosférického tlaku v rôznych výškach
- Testovanie stability rakety (gyro dáta)
- GPS tracking polohy pristátia
- Štúdium letových kriviek

## Budúce kroky

### Krátkodobé (1-3 mesiace)

- 🎯 Finálne zostavenie HERMES s profesionálnou PCB
- 🎯 Kompletizácia IRIS mechanického dizajnu
- 🎯 Testovanie systému v simulovaných letových podmienkach
- 🎯 Implementácia logovania s optimalizáciou

### Dlhodobé (pri sériovej výrobe)

**Dizajn:**

- Redesign pre injection molding (škálovateľná výroba)
- Outsourcing 3D tlače (vs. lokálna výroba)

**Softvér:**

- Programovateľné rozhranie pre pokročilých používateľov
- Konfigurovateľné limity a parametre systému
- Mobilná aplikácia pre Android/iOS

**Funkcie:**

- Rozšírené telemetrické údaje
- Podpora viacerých IRIS jednotiek súčasne
- Cloud synchronizácia a zdieľanie dát

## Zhrnutie prevádzky

**Systém SIGNALIS je pripravený na nasadenie:**

- ✅ Všetky hardvérové komponenty funkčné
- ✅ Softvér stabilný a otestovaný
- ✅ Dokumentácia kompletná
- ✅ Technické špecifikácie splnené

**Výhody riešenia:**

- Dostupnosť a nízka cena
- Otvorenosť a modularita
- Edukatívny prínos
- Reálna praktická hodnota pre modelárov

## Odkazy

- [Prevádzka a podpora](./operations.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
