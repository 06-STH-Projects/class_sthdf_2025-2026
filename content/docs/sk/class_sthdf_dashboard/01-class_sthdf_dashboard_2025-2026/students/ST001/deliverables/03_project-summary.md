---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
title: 📝 Project Summary
---

# 📝 Project Summary

## 🔖 Identifikácia
## 1️⃣ Názov projektu

- **Názov projektu:** **2025_PRJ_016-Smartclock**
- **Stručný popis:** Jednoduché „always-on“ riešenie postavené na **Raspberry Pi (Zero W 2)** a **3.5" LCD (320×480)**, ktoré po štarte automaticky zobrazí dashboard s vybranými informáciami priamo na lokálnom displeji. Súčasťou je aj **3D tlačený pop-in obal** pre jednoduchú fyzickú integráciu.

## 2️⃣ Členovia tímu

| ST ID | Meno | Rola v tíme| Kompetencie | 
|-------|------|------|-------------|
| ST024 | Ákos | Project Lead | koordinácia |
| ST001 | Gabriel | Developer | implementácia |
| ST025 | Lukáš | Designer | UI/UX |

## 3️⃣ Motivácia tímu
- Chceli sme spraviť **praktický, rýchlo použiteľný HW/SW prototyp**, ktorý je jednoduchý na nasadenie a demonštruje „product-like“ výsledok.
- Projekt má zmysel ako **stolový/mini-dashboard** (čas, status, základné metriky) bez potreby ďalšieho monitora.
- Je to dobrá príležitosť spojiť:
  - prácu s **Raspberry Pi OS + periférie (LCD driver)**,
  - vývoj **Python aplikácie s UI**,
  - **mechanický návrh** a tolerancie pri 3D tlači.
- Riešime problém „chcem mať stále viditeľnú informáciu“ – bez odomykania telefónu, zapínania PC alebo otvárania aplikácií.

## 4️⃣ Cieľ a pridaná hodnota projektu
- **Finálny cieľ:** funkčný SmartClock prototyp, ktorý po zapnutí Raspberry Pi automaticky nabootuje a zobrazí dashboard na LCD displeji.
- **Pridaná hodnota:**
  - rýchle a lokálne riešenie (bez cloudu ako nutnej podmienky),
  - jednoduchá architektúra a rozšíriteľnosť cez „screens“,
  - fyzicky použiteľný kus hardvéru v obale (nie len kód).
- **Ako spoznáme, že projekt je úspešný:**
  - zariadenie po štarte **automaticky spustí aplikáciu** a zobrazuje UI,
  - obrazovky sa **cyklicky aktualizujú** bez pádu (stabilita),
  - výsledok je **reprodukovateľný** podľa návodu (inštalácia + závislosti),
  - obal je „pop-in“ a zariadenie je **mechanicky použiteľné** (porty dostupné, vetranie, drží to).

## 5️⃣ Popis riešenia
### Architektúra (čo riešime)
Riešenie je rozdelené na dve vrstvy:

**HW vrstva**
- Raspberry Pi Zero W 2  
- 3.5" LCD (320×480) s rezistívnym touch (aktuálne primárne ako displej)  
- microSD karta, napájanie, pin spájač  
- 3D tlačený pop-in obal (vetranie, výrezy na porty, fixácia displeja)

**SW vrstva**
- Raspberry Pi OS  
- Driver displeja (LCD-show)  
- Python aplikácia:
  - získava dáta (napr. čas, systémové metriky),
  - renderuje UI (texty/ikony),
  - posiela vykreslený frame na displej,
  - beží v update loope a pravidelne refreshuje obraz.

**Repo štruktúra (high-level)**
- `main.py` – hlavný spúšťací skript
- `screens/` – jednotlivé obrazovky UI
- `assets/1x/` – grafické assety
- `requirements.txt` – Python závislosti

## 6️⃣ Projektový plán
- Odhadovaný čas na prácu: _x hodín / týždeň_  
- Predpokladaný stav v čase prezentácie: _MVP / prototyp / dokumentácia / funkčný produkt_  
- Hlavné míľniky:  
  - [x] Príprava  
  - [x] Implementácia  
  - [ ] Testovanie  
  - [x] Prezentácia 
###  📅 Milníky a výstupy
- **Do januára dodáme:**  
  - [x] prototyp  
  - [x] prezentáciu  
  - [ ] dokumentáciu  

## 7️⃣ Zákazník a hodnoty
- **Potenciálny používateľ:**
  - ja ako študent (domáce použitie – stolový „always-on“ dashboard),
  - pracovník v office (na pracovnom stole / v lab-e),
  - meeting room „status display“ (voliteľné rozšírenie).

- **Čo mu to prinesie:**
  - stále viditeľný prehľad informácií na jednom mieste,
  - jednoduché nasadenie (Raspberry Pi + skript),
  - možnosť rozšírenia o ďalšie obrazovky (napr. počasie, kalendár, upozornenia – podľa budúceho smerovania).
  
## 8️⃣ Očakávané výstupy
**Dokumentácia**
- README: požiadavky, inštalácia, spustenie
- stručný návod: príprava microSD cez Raspberry Pi Imager + inštalácia LCD drivera + Python deps
- architektonické diagramy (deployment/component/sequence) + krátky popis

**Artefakty**
- funkčný HW prototyp (Raspberry Pi + LCD)
- Python aplikácia (repo + screens + assets)
- 3D obal
- fotky finálneho zariadenia


## 📚 Kontext
- Raspberry Pi Imager / Raspberry Pi OS (príprava systému)
- LCD driver riešený cez **LCD-show** (Waveshare)
- Inšpirácie / referencie: LCDWiki, LCD-show návody, praktiky okolo kiosk/autostart režimu na RPi  
- Repo: `https://github.com/drizzle021/rpiclock`

## 🧭 Riziká a závislosti
**Riziká**
- kompatibilita a stabilita drivera (rôzne verzie RPi OS, kernel/overlay)
- dlhodobý beh (memory leak, render loop výkon, zamrznutie)
- napájanie / SD karta (korupcia pri nekorektnom vypnutí)
- mechanické tolerancie 3D tlače (fit displeja, prístup k portom, vetranie)

**Závislosti**
- dostupnosť HW (Raspberry Pi Zero W 2, LCD)
- LCD-show projekt/skripty a kompatibilita s OS
- Python knižnice uvedené v `requirements.txt`
- 3D tlač a materiál (presnosť, deformácie)

## 9️⃣ Reflexia a ďalšie kroky
**Čo očakávame, že sa naučíme**
- end-to-end prototypovanie: OS → driver → aplikácia → UI → fyzický produkt
- návrh jednoduchého UI pre low-res display + optimalizácia renderovania
- mechanický návrh a iterácie obalu (tolerancie, airflow, porty)

**Ako sa projekt môže rozvíjať ďalej**
- viac obrazoviek (napr. kalendár, športové zápasy, notifikácie, QR, status buildov)
- konfigurovateľnosť (YAML/JSON konfigurácia, výber „screens“)
- auto-start + „kiosk“ režim ako štandardný setup
- lepšie UX (animácie, prechody, dotykové ovládanie, jas/uspávanie)
- balíček pre jednoduchú inštaláciu (setup script / image)

---

## Navigácia
- [↩️ Späť](../index.md)
- Zamerajte sa na **“čo”** riešite, nie ešte “ako”.

## 6️⃣ Projektový plán
- Odhadovaný čas na prácu: _x hodín / týždeň_  
- Predpokladaný stav v čase prezentácie: _MVP / prototyp / dokumentácia / funkčný produkt_  
- Hlavné míľniky:  
  - [ ] Príprava  
  - [ ] Implementácia  
  - [ ] Testovanie  
  - [ ] Prezentácia
###  📅 Milníky a výstupy
- **Do januára dodáme:**  
  - [ ] prototyp  
  - [ ] prezentáciu  
  - [ ] dokumentáciu  

## 7️⃣ Zákazník a hodnoty
- Kto by mohol byť používateľom projektu?  
- Čo mu to prinesie?
  
## 8️⃣ Očakávané výstupy
- Dokumentácia: (napr. README, KNIFE článok, demo stránka...)  
- Artefakty: (napr. prototyp, appka, vizualizácia...)



## 📚 Kontext
- KNIFE príspevky, literatúra, inšpirácie  

## 🧭 Riziká a závislosti
- Riziká projektu  
- Na čom závisí  

## 9️⃣ Reflexia a ďalšie kroky
Čo očakávate, že sa naučíte?  
Ako by sa projekt mohol rozvíjať ďalej?


---

## Navigácia
- [↩️ Späť](../index.md)
