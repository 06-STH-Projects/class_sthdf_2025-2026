# 📝 Project Summary

## 🔖 Identifikácia

## 1️⃣ Názov projektu
- **Názov projektu:** `PRJ_USBCAPS_USB_TTL_SAFETY_BRIDGE_ST004_PRJ_004`
- **Stručný popis:**  
  USBCAPS je inteligentný USB-TTL most s bezdrôtovou izoláciou (Wi-Fi/BLE), ktorý chráni počítače pred USB Killer útokmi a zároveň automatizuje sériovú komunikáciu (auto-baud, auto RX/TX). Cieľom je vytvoriť bezpečný, prenosný a univerzitne použiteľný nástroj pre IoT vývoj a kybernetickú edukáciu.

---

## 2️⃣ Členovia tímu

| ST ID | Meno | Rola v tíme | Kompetencie |
|------|------|--------------|-------------|
| ST001 | Bc. Ivan Denis | Project Lead | koordinácia, systémový návrh |
| ST002 | Bc. Špánik Ondrej | Developer | firmware, web terminál, ESP32 |
| ST003 | Bc. Danylo Bashmakov | Hardware Designer | PCB, napájanie, ochranné obvody |

---

## 3️⃣ Motivácia tímu
- Chceme riešiť reálny problém v prostredí vývoja – riziko fyzického zničenia PC pri práci s neznámymi USB zariadeniami (USB Killer, prototypy).  
- Projekt má význam pre kyberbezpečnosť, embedded vývoj aj výučbu — študenti aj vývojári môžu bezpečne testovať zariadenia bez rizika poškodenia hardvéru.  
- Fascinovala nás možnosť spojiť bezpečnosť, IoT a inteligentnú automatizáciu v jednom zariadení.  

---

## 4️⃣ Cieľ a pridaná hodnota projektu
- **Cieľ:** vytvoriť hardvérovo-softvérový USB-TTL nástroj, ktorý izoluje počítač od rizikového zariadenia a zároveň zjednodušuje sériovú prácu.  
- **Úspech meriame takto:**  
  - počítač je fyzicky chránený (žiadny priamy USB kontakt),  
  - projekt umožňuje bezdrôtový IEC terminál,  
  - zariadenie funguje s auto-baud a auto-RX/TX,  
  - prototyp je demonštrovateľný na prezentácii a použiteľný v laboch.

---

## 5️⃣ Popis riešenia
Projekt pozostáva z troch častí:
- **HW modul:** ESP32 + USB-UART bridge + ochranné obvody + voliteľný level-shifter (3,3 V / 5 V).  
- **FW modul:** auto-baud detection, auto RX/TX swap, Wi-Fi/Bluetooth bridge, WebSocket servis.  
- **UI vrstva:** webový terminál prehliadateľný na mobile / PC a BT serial podpora.

Riešime bezpečné pripojenie medzi počítačom a embedded zariadením, pri zachovaní pohodlného sériového prístupu.

---

## 6️⃣ Projektový plán
- Odhadovaný čas: **4-5h týždenne na člena tímu**  
- Predpokladaný stav pri prezentácii: **prototyp s funkčným terminálom a FW**  

### 📅 Milníky a výstupy
- [x] Návrh riešenia  
- [x] Firmware (auto-baud + BLE/Wi-Fi)  
- [ ] PCB návrh  
- [ ] Testovanie a demo prezentácia

**Do januára dodáme:**
- [x] funkčný prototyp  
- [ ] prezentáciu riešenia  
- [ ] technickú dokumentáciu

---

Hodnota:
- bezpečnosť (proti USB Killer hrozbám),  
- jednoduchší workflow (žiadne riešenie baud rate / RX-TX),  
- vzdialený prístup,  
- použiteľnosť ako výukový materiál.

---

## 8️⃣ Očakávané výstupy
- Dokumentácia:
  - README, KNIFE článok, dizajnový popis, návod na použitie  
- Artefakty:
  - prototyp dosky, firmware, webový terminál, demonštračné video

---

## 📚 Kontext
- USBCAPS projektová dokumentácia  
- web https://usbcaps.org  
- existujúce USB-TTL adaptéry (CH340, CP2102) a ich limity  
- USB Killer incident (2019) ako kontext hrozby  

---

## 🧭 Riziká a závislosti
**Riziká:**
- výpadky BLE/Wi-Fi stability,  
- oneskorenie vo FW implementácii auto-detekcie,  
- neočakávané problémy pri PCB návrhu.

**Závislosti:**
- komponenty (ESP32, USB-UART),  
- prístup do laboratória / meracie zariadenia,  
- čas tímu.

---

## Navigácia
- [↩️ Späť](../index.md)
