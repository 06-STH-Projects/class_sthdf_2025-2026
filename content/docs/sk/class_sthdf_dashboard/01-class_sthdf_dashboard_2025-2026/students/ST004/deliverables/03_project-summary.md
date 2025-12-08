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
| 1 | Bc. Ivan Denis | Project Lead | koordinácia, systémový návrh |
| 2 | Bc. Špánik Ondrej | Developer | firmware, web terminál, ESP32 |
| 3 | Bc. Danylo Bashmakov | Hardware Designer | PCB, napájanie, ochranné obvody |

---

## 3️⃣ Motivácia tímu
- Chceme vytvoriť praktický nástroj, ktorý rieši problémy bežných USB-TTL adaptérov.  
- Projekt má využitie vo výuke (debug, stavové automaty, ISR→task dizajn).  
- SerialyTTY nás motivoval ako referenčný open-source, ale chceme ho rozšíriť o vlastné prvky a integráciu.

---

## 4️⃣ Cieľ a pridaná hodnota projektu
- **Cieľ:** vytvoriť kompaktný USB-to-TTL most, ktorý automatizuje sériovú diagnostiku.  
- **Úspech meriame podľa toho, či:**
  - dokáže zistiť baud rate neznámeho zariadenia,
  - vie prepnúť do bridge módu,
  - je použiteľný v labáku aj v teréne.

---

## 5️⃣ Popis riešenia
Riešenie pozostáva z:
- **HW vrstva:** ESP32-C6 DevKit + UART IO + voliteľný TFT/SD modul.  
- **FW vrstva:** Baud Detection, Bridge Mode, menu systém, štatistiky.  
- **UI vrstva:** textové menu cez sériový terminál (neskôr obrazovka/logovanie).

---

## 6️⃣ Projektový plán
- Odhadovaný čas: **4–5 h/týždeň na člena tímu**  
- Stav pri prezentácii: **fungujúci prototyp s menu a detekciou baud rate**

### 📅 Milníky
- [x] návrh riešenia  
- [x] základná FW implementácia  
- [x] rozšírenie o vizualizáciu/logovanie  
- [x] demo a dokumentácia

---

## 7️⃣ Zákazník a hodnota
Používatelia:
- vývojári IoT/embedded systémov,
- univerzitné laboratóriá a študenti,
- servis a diagnostika v teréne.

Hodnota:
- rýchle debugovanie UART,
- výukový príklad architektúry,
- praktický lab nástroj.

---

## 8️⃣ Očakávané výstupy
- Dokumentácia: README, KNIFE článok, návod
- Artefakty: funkčný prototyp, firmware, demo video

---

## 📚 Kontext
- SerialyTTY dokumentácia  
- ESP-IDF ako FW základ  
- bežné USB-TTL adaptéry a ich limity

---

## 🧭 Riziká a závislosti
**Riziká:**
- obmedzenia hardvéru (TFT/SD dostupnosť),
- FW komplexita (ISR → task synchronization),
- časová náročnosť na testovanie.

**Závislosti:**
- ESP32-C6 moduly,
- laboratórne vybavenie,
- čas tímu.
---

## Navigácia
- [↩️ Späť](../index.md)
