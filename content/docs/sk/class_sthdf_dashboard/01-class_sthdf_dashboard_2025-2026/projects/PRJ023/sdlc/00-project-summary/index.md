---
id: "ESP32-AQI-2026"
guid: "93c67fba-2907-4ac9-bc49-f52188094082"
dao: "knife"
title: "Project Summary"
author: "Peter Bartoš"
category: "deliverable"
type: "project-summary"
priority: "high"
tags: ["ESP32", "Air Quality", "IoT", "Flask", "SQLite"]
slug: "esp32-air-quality-monitor"
created: "2025-09-21"
modified: "2026-01-13"
status: "final"

# ⚖️ IP rights
rights_holder_content: "Peter Bartoš"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
locale: "sk"
---

[🏠 Domov](../../index.md) · [⬅️ Nahor](../index.md)

# Project Summary

## 2025-PRJ-023-ST_023-ST_023-Air quality monitor
ESP32 Air Quality Monitor – IoT riešenie na meranie kvality ovzdušia

---

## Team Members
- **2025_ST_020 Hlib Kokin**  
Role: Analýza, 3D modelovanie, materializácia
- **2025_ST_003 Peter Bartoš**  
Role: Vývoj hardvéru, firmware, dokumentácia
- **2025_ST_011 Šimon Freivad**  
Role: Vývoj servera, cicd, cloud manažment
---

## Purpose
Cieľom projektu je vytvoriť cenovo dostupné zariadenie na monitorovanie kvality ovzdušia (teplota, vlhkosť, TVOC, eCO₂, AQI) s lokálnym OLED displejom a vzdialeným prístupom cez webové rozhranie.

---

## Individual Visions
- Naučiť sa IoT architektúru end-to-end (ESP32 → Flask Server API → SQLite → Web UI)
- Získať skúsenosti s integráciou senzorov a optimalizáciou kódu pre obmedzený HW

---

## Team Vision
Poskytnúť jednoduché, spoľahlivé a estetické riešenie pre sledovanie kvality vzduchu v interiéri.

---

## Team Mission
Vyvinúť funkčný prototyp, ktorý bude:
- merať presné hodnoty,
- zobrazovať ich lokálne aj online,
- byť ľahko rozšíriteľný.

---

## Strategy
- Použiť **ESP32** ako hlavný mikrokontrolér
- Senzory **AHTX0** (teplota, vlhkosť) a **ENS160** (TVOC, eCO₂, AQI)
- Server: **Python Flask API + SQLite**
- Web UI: responzívne grafy
- Kryt: drevená krabička s otvormi pre prúdenie vzduchu

---

## End Customer
Domácnosti, kancelárie, školy, malé firmy – všetci, ktorí potrebujú sledovať kvalitu vzduchu v uzavretých priestoroch.

---

## Expected Effort
Približne 40 hodín (hardvér, firmware, server, UI, testovanie, dokumentácia).

---

## Goals and Expectations
- Funkčný prototyp s meraním a vizualizáciou dát
- Stabilné Wi-Fi pripojenie
- Jednoduchá inštalácia a použitie

---

## Solution Description
ESP32 číta dáta zo senzorov cez I²C, zobrazuje ich na OLED displeji a odosiela na Python Flask server cez HTTP(JSON). Server ukladá dáta do SQLite a poskytuje webové rozhranie s historickými grafmi.

---

## Project Roadmaps
1. **Analýza a návrh** – definícia požiadaviek, architektúry
2. **Implementácia hardvéru** – zapojenie ESP32 a senzorov
3. **Vývoj firmware** – čítanie dát, Wi-Fi, HTTP komunikácia
4. **Server a UI** – Flask API, databáza, webová vizualizácia
5. **Testovanie** – merania bez krytu a s krytom
6. **Dokončenie dokumentácie**

---

## Reached Results
- Funkčný prototyp s meraním teploty, vlhkosti, TVOC, eCO₂, AQI
- Webová aplikácia s historickými grafmi
- Testovanie v reálnych podmienkach (8 dní: 4 dni bez krytu, 4 dni s krytom)

---

## Experiences
Projekt ukázal dôležitosť:
- správneho návrhu krytu (prietok vzduchu),
- dôležitosť estetiky krytu,
- optimalizácie kódu pre obmedzený HW,
- iteratívneho testovania.

---

## Positive Experiences
- Úspešná integrácia senzorov a ESP32
- Stabilná komunikácia so serverom
- Responzívne webové rozhranie

---

## Potential for Improvements
- Sofistikovanejšie Wi-Fi pripojenie (webový setup)
- Presné uchytenie komponentov v krabičke (drážky)
- Lepší prietok vzduchu (ventilačné otvory)
- Kalibrácia senzorov pre vyššiu presnosť (skreslenie kvôli krytom)

---

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
