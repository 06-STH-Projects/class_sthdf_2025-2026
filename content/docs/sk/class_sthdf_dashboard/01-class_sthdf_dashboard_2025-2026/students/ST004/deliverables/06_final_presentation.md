# 📦 Final Presentation

## 🔖 Stav projektu
Projekt je vo fáze **funkčného MVP prototypu**:
- hardvér beží na ESP32-C6 DevKit,
- FW obsahuje základné moduly:
  - Baud Detection,
  - Bridge Mode,
  - terminálové menu,
- prototyp bol testovaný na viacerých UART zariadeniach (ESP, STM32, Arduino).

Čo funguje:
- detekcia baud rate,
- transparentný bridge,
- menu ovládanie cez USB terminál.

Čo zatiaľ nie:
- vizuálne rozšírenia (TFT displej + SD logovanie) sú vo fáze návrhu.

---

## 🧩 Výstupy podľa SDLC / V-modelu

### 1) Business požiadavky
- zrýchliť debug proces,
- odstrániť manuálne nastavovanie baud a RX/TX,
- poskytnúť praktický lab nástroj.

### 2) Top Level Architecture
- PC → USB → ESP32-C6 → UART zariadenia.

### 3) Solution Architecture
- modulárny firmware:
  - Baud Detector,
  - Bridge Engine,
  - Menu UI,
  - (rozšíriteľný Display/Logger).

### 4) Analysis
- existujúce USB-TTL adaptéry sú „hlúpe“,
- embedded vývoj potrebuje lepšie nástroje.

### 5) Design
- definované FW moduly a UX terminálu,
- koncept displeja a SD logovania ako rozšírenie.

### 6) Implementation
- breadboard prototyp,
- prvá FW verzia implementovaná v ESP-IDF.

### 7) Verification & Testing
- test na viacerých UART zariadeniach,
- potvrdená funkčnosť autodetekcie a bridge módu.

### 8) Operation
- prototyp je dnes použiteľný v lab prostredí aj ako demonštračný nástroj.

---

## 🏆 Finálny produkt

### Čo tím reálne dodal
- funkčný USB-to-UART diagnostický nástroj (MVP),
- dokumentáciu použitia a projektovej architektúry,
- prezentáciu a demo ukážku.

### Ako to vyzerá
- breadboard prototyp,
- terminálová obrazovka s menu,
- logy z Baud Detection a Bridge módu.
---

## 🧭 Porovnanie s Project Summary

### Plánované:
- inteligentný USB-UART nástroj s autodetekciou a UI,
- dokumentácia a demonštračný prototyp.

### Dodané:
- MVP prototyp s funkčnou autodetekciou a bridge módmi,
- UX menu implementované,
- rozšírenia (displej, logovanie) pripravené pre ďalšiu iteráciu.

➡️ **Projekt splnil cieľ v MVP úrovni a má jasný priestor na rozšírenie vo verzii 2.0.**

---
## Navigácia
- [↩️ Späť](../index.md)
