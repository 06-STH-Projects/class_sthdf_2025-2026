# 📦 Project Outcomes

## 🔖 Stav projektu
Na aktuálnom stave:
- funguje základný prototyp s ESP32 s modulom,  
- FW obsahuje:
  - automatickú detekciu baud rate,
  - automatický RX/TX soft-swap,
  - Wi-Fi/Bluetooth terminál,
- PC komunikuje bezdrôtovo – čím je izolovaný od možného USB Killer útoku.

---

## 🧩 Výstupy podľa SDLC / V-modelu

### 1. Business požiadavky
- ochrana PC pred USB Killer hrozbami cez nepriamu komunikáciu,
- jednoduchší workflow s UART (žiadne manuálne rx/tx, baud rate).

### 2. Top Level Architecture
- PC → USB-UART → ESP32 → UART cieľové zariadenie + Wi-Fi/BLE ako bezdrôtový most pre terminál.

### 3. Solution Architecture
- ESP32 firmware rieši automatizáciu,
- WebSocket + BT SPP poskytujú prístup z ľubovoľného zariadenia,
- HW modul zjednocuje ochranu a diagnostiku.

### 4. Analysis
- identifikované problémy reálnych USB-TTL adaptérov (žiadna izolácia, manuálne nastavenia),
- definovaný bezpečnostný risk model USB Killer.

### 5. Design
- návrh PCB layoutu,
- modulárna FW architektúra (detekcia -> routing -> terminál).

### 6. Implementation
- breadboard verzia + prvá FW iterácia,

### 7. Verification & Testing
- testované na viacerých zariadeniach: ESP32, Arduino Nano, STM32,
- testovaný remote-terminal access cez mobil.

### 8. Operation
- prototyp je funkčný a demonštrovatelný pre výučbu alebo lab. prostredie,

---

## 🏆 Finálny produkt

Tím reálne dodal:
- funkčný USB-TTL prototyp s FW inteligenciou a Wi-Fi/BLE terminálom,
- dokumentovaný návrh HW a koncept PCB,
- KNIFE článok s popisom technológie a use-cases.

Ako to vyzerá:
- breadboard prototyp + schéma zapojenia,
- screenshot web-terminálu,
- ukážky UART logov cez Wi-Fi a BT.

---

## 🧭 Porovnanie s Project Summary

**Čo sme plánovali:**
- inteligentný USB-TTL adaptér s auto baud, auto RX/TX a bezdrôtovým terminálom,
- prototyp plus dokumentácia.

**Čo sme dodali:**
- prototyp je funkčný, FW implementovaný v základnej verzii,
- web-terminal je dostupný, ale potrebuje optimalizáciu,
- PCB návrh je vo verzii konceptu (next iteration).

➡️ **Rozdiel:**  
Implementácia je v MVP stave


---
## Navigácia
- [↩️ Späť](../index.md)
