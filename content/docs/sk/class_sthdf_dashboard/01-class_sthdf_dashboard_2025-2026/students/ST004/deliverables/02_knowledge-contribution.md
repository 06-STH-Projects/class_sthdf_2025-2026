---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
title: 📚 Knowledge Contribution
---

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis
- **Téma:** SerialyTTY – inteligentný USB-to-TTL most na báze ESP32-C6.
- **Prečo je dôležitá:** bežné USB-TTL adaptéry neposkytujú auto-detekciu baud rate, diagnostiku ani logovanie. SerialyTTY prináša inteligentnú analýzu UART, menu systém, voliteľný TFT displej a SD logovanie, čo výrazne zlepšuje debugovanie a výuku embedded systémov.

## 🎯 Čo rieši (účel, cieľ)
- automaticky zistí baud rate neznámeho zariadenia,
- funguje ako transparentný USB-TTL bridge so štatistikami,
- poskytuje vizuálnu spätnú väzbu a voliteľné logovanie,
- slúži ako samostatný diagnostický a výukový nástroj.

## 🧩 Ako to rieši (princíp)
- **ESP32-C6** s natívnym USB a viac UARTmi,
- modul Baud Detection meria periody signálu na RX,
- **Bridge Mode** smeruje dáta medzi USB ↔ UART,
- terminálové menu (Detect, Bridge, Info, Settings),
- voliteľný TFT displej a SD logovanie.

## 🧪 Ako to použiť (aplikácia)
- ladenie sériovej komunikácie neznámych zariadení,
- výuka embedded vývoja (stavové automaty, ISR→task),
- diagnostika v teréne bez potreby externého softvéru.

## ⚡ Rýchly návod
1. Flashni firmware cez PlatformIO.
2. Otvor seriový monitor na 115200 baud.
3. Stlač `D` pre auto-detect.
4. Prepni na Bridge (`B`) a používaj ako USB-TTL nástroj.

## 💡 Hodnota / Zhrnutie
SerialyTTY spája USB-TTL bridge, inteligentnú detekciu, UI menu a voliteľnú vizualizáciu/logovanie. Je otvorený, rozšíriteľný a vhodný ako lab nástroj aj výukový projekt.

## 🗂️ Taxonómia
- **Kategória:** Embedded Systems / IoT Tools
- **Typ:** návod + prípadová štúdia
- **Tagy:** `SerialyTTY`, `UART`, `baud detection`, `ESP32-C6`, `bridge`

## 🌍 Referencia
- https://thenisvan.github.io/SerialyTTY/
- USBCAPS – oficiálna stránka projektu:  
- https://usbcaps.org
- Projektový návrh USB-TTL Prevodník s Automatickou Detekciou a Bezdrôtovým Terminálom (interný dokument, SMVIT / FIIT STU).
- US Department of Justice – prípad USB Killer incidentu (2019), citované na stránke USBCAPS.

- 🌐 Web: [usbcaps.org](https://usbcaps.org)
- 💙 Patreon: [patreonl](https://patreon.com/USBCAPS)
- 📷 LinkedIn: [linkedin](https://www.linkedin.com/company/usbcaps)
- 📷 YouTube: [YouTube](https://www.youtube.com/@usbcaps)

## Navigácia
- [↩️ Späť](../index.md)

