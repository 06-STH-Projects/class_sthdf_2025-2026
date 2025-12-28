---
fm_version: 1.1.0
fm_version_comment: 'Aligned with SerialyTTY (Production Ready, BLE + Display + SD Logging)'
locale: sk
fm_build: '2025-12-15T00:00:00Z'
title: 📦 Final Presentation — SerialyTTY
---

# 📦 Final Presentation — SerialyTTY

## 🔖 Stav projektu
Projekt je vo fáze **production-ready riešenia (v1.1.0)**:
- platforma: **ESP32-C6** (USB-to-TTL bridge zariadenie),
- jadro: **Auto Baud Detection + Transparent Bridge**,
- rozšírenia: **BLE ovládanie**, **TFT displej (LVGL + ILI9341)**, **SD logovanie (FAT32)**,
- režimy: Menu / Bridge / Detect / Test + konfigurácia za behu.

Čo funguje (kľúčové):
- autodetekcia baud rate (9600–115200),
- transparentný bridge s prepínaním režimu cez escape sekvenciu,
- BLE remote control (NUS) + streamovanie dát v bridge režime,
- auto-detekcia pripojeného hardvéru (displej/SD) a “graceful degradation”,
- logovanie na SD: timestampované súbory + hexdump formát.

---

## 🧩 Výstupy podľa SDLC / V-modelu

### 1) Business požiadavky
- výrazne zrýchliť debug UART zariadení s neznámym baudom,
- odstrániť manuálne nastavovanie a “pokus-omyl” pri pripojení,
- pridať **monitoring, logovanie a bezdrôtové ovládanie** pre lab aj field.

### 2) Top Level Architecture
- PC → USB → ESP32-C6 → UART zariadenie  
- voliteľne: BLE klient (mobil/PC) → BLE → ESP32-C6

### 3) Solution Architecture
Modulárny firmware:
- Baud Detection (GPIO timing analýza),
- Bridge Engine (bidirectional passthrough, nízka latencia),
- Menu/UI (ANSI terminal + viac režimov),
- BLE Control (Nordic UART Service, príkazový protokol),
- Display UI (LVGL obrazovky: boot/menu/analyzing/bridge),
- Logger (SD FAT32, štruktúrované logy + hexdump).

### 4) Analysis
- bežné USB-TTL adaptéry neriešia neznámy baud ani workflow okolo diagnostiky,
- embedded prax vyžaduje: rýchle prepínanie režimov, audit trail (logy), prehľad (UI) a remote.

### 5) Design
- jasne oddelené moduly (bridge/detect/ui/ble/logging),
- návrh “optional peripherals”: zariadenie funguje aj bez TFT/SD,
- jednotný command model (USB terminal aj BLE príkazy).

### 6) Implementation
- implementácia na ESP32-C6,
- integrované rozhrania: USB terminál, BLE NUS, LVGL UI, SD (FAT).

### 7) Verification & Testing
- overená funkčnosť autodetekcie + bridge režimu,
- overená interoperabilita s BLE terminal aplikáciami (napr. nRF Connect),
- testované logovanie a formátovanie dát (hexdump).

### 8) Operation
- nástroj je použiteľný v lab prostredí aj v teréne:
  - rýchle pripojenie,
  - okamžitý prehľad (displej/menu),
  - logy pre spätnú analýzu,
  - remote ovládanie cez BLE.

---

## 🏆 Finálny produkt

### Čo tím reálne dodal
- profesionálny USB-to-TTL bridge s autodetekciou baud,
- BLE remote control + streaming UART dát,
- TFT UI (LVGL) so stavmi a štatistikami,
- SD logovanie s časovou pečiatkou a hexdump výstupom,
- dokumentáciu a projektové materiály.

### Ako to vyzerá (demo flow)
- Boot → auto-detekcia HW (TFT/SD) → Menu,
- Detect: analýza a zistenie baud,
- Bridge: transparentný prenos + escape sekvencia pre návrat,
- BLE: príkazy S/B/M/D/R/I/H + možnosť sledovať dáta bez kábla.

---

## 🧭 Porovnanie s Project Summary

### Plánované:
- “smart” USB-UART nástroj s autodetekciou a UI,
- logovanie a rozšírenia,
- komfortné ovládanie (lokálne aj vzdialené).

### Dodané:
- production-ready riešenie s autodetekciou + bridge,
- BLE control (NUS) + streaming,
- TFT UI (LVGL + ILI9341),
- SD logging (FAT32) s timestampmi a hexdump formátom,
- auto-detekcia periférií + graceful degradation.

➡️ **Projekt splnil cieľ nad rámec MVP (funkcie UI/BLE/Logging sú už integrované).**
Link na web: [web-full](https://knifes.usbcaps.org/sk/social-media-content/case-study)
---
## Navigácia
- [↩️ Späť](../index.md)
