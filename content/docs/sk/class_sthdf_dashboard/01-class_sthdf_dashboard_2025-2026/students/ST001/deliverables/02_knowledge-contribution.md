---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis
- **Téma:** Smart hodiny / info-display s Raspberry Pi a 3,5" LCD  
- **Stručný popis:**  
  Praktický prehľad, ako použiť rôzne typy **Raspberry Pi** na malé “smart displeje” – napr. hodiny, počasie, športové výsledky – a čo pri tom riešiť po **HW stránke** (Pi modely, displej) a pri **3D tlači krytu**.

---

## 🎯 Čo rieši (účel, cieľ)

- Jednoduchý spôsob, ako z **malého počítača** urobiť:
  - stolové **smart hodiny**,
  - informačný panel (čas, dátum, počasie, kalendár, šport),
  - mini dashboard (KPI, status buildov, status IoT senzorov).  

- Cieľ: ukázať, **ktoré Raspberry Pi modely** sa na to hodia, ako ich prepojiť s **3,5" LCD** a ako k tomu navrhnúť **3D tlačený kryt**.

---

## 🧩 Ako to rieši (princíp)

### Typy Raspberry Pi a použitie

- **Raspberry Pi Zero 2 W**  
  - veľmi malé (cca 65×30 mm), Wi-Fi, BT, 4-jadrový ARM, 512 MB RAM, nízka spotreba – ideálne na **malé hodiny/info panel**.  

- **Raspberry Pi 4 / 5**  
  - silnejší CPU, viac RAM, USB3, klasický HDMI – vhodné, keď treba pripojiť **väčší monitor**, viac služieb alebo docker kontajnerov.  

- **Raspberry Pi Pico**  
  - mikrokontrolér, veľmi nízka spotreba, ale bez HDMI – hodí sa skôr na jednoduché senzory / malé displeje, nie na plnohodnotný grafický LCD s OS.  

### Displej

- 3,5" TFT LCD pre Raspberry Pi (SPI, typicky 320×480 px), vo forme **HAT** priamo na 40-pin GPIO.  
- Komunikácia cez **SPI**, napájanie z 5 V / 3,3 V pinov, driver (napr. ILI9xxx) rieši kreslenie grafiky.

### 3D tlačený kryt

- Dvojdielny kryt: **spodok** (držanie Pi + stĺpiky na skrutky) + **vrch** (výrez na displej, rámik).  
- Hrúbky stien typicky **2–2,5 mm**, ponechať aspoň **0,5 mm medzeru** okolo komponentov kvôli toleranciám tlače.  
- Plast (PLA/PETG) dobre izoluje, ale treba malé **vetracie otvory** kvôli teplu Pi.

---

## 🧪 Ako to použiť (aplikácia)

### Typický scenár – smart hodiny / info panel

1. **Vybrať model Pi**
   - Zero 2 W → malý, nenápadný stolový displej.  
   - Pi 4 / 5 → väčší dashboard na TV/monitor.

2. **Pripojiť 3,5" LCD**
   - nasadiť HAT na 40-pin GPIO podľa dokumentácie výrobcu,  
   - v OS zapnúť SPI a nainštalovať driver pre daný modul.

3. **Navrhnúť a vytlačiť kryt**
   - v CAD modele zohľadniť:
     - rozmery Pi + LCD,  
     - výrezy pre napájanie, prípadne HDMI/USB,  
     - sklon displeja (napr. 20–30°).  

4. **Softvér**
   - Raspberry Pi OS + Python (alebo iný jazyk),
   - čítanie dát z API (počasie, kalendár, šport, notifikácie),
   - kreslenie na displej cez framebuffer alebo knižnicu pre daný driver.

---

## ⚡ Rýchly návod (Top)

- Zvoliť **Raspberry Pi Zero 2 W** pre malý stolový displej.  
- Pripojiť **3,5" SPI LCD HAT** na 40-pin GPIO.  
- Nainštalovať Raspberry Pi OS, zapnúť SPI, nainštalovať driver pre LCD.  
- V CAD navrhnúť **dvojdielny kryt**:
  - steny ~2 mm,  
  - vetracie otvory,  
  - výrez pre displej a porty.  
- Vytlačiť z PLA/PETG, zmontovať a spustiť vlastnú appku (hodiny + informácie).

---

## 📜 Detailný článok

- Raspberry Pi rodina umožňuje od mikrokontrolérov (Pico) cez malé SBC (Zero 2 W) až po výkonné dosky (Pi 4/5) pokryť väčšinu **embedded / IoT / dashboard** scenárov.  
- Pre smart hodiny / info panel je vhodná kombinácia:
  - **Pi Zero 2 W** – malý, úsporný, Wi-Fi na API,  
  - **3,5" TFT LCD HAT** – kompaktný displej bez káblov,  
  - **3D tlačený kryt** – prispôsobený dizajn (stojan, uhol, otvory).  

- Pri návrhu krytu sa oplatí postupovať **“PCB first”**:
  1. namodelovať Pi a LCD podľa datasheetov (rozmery, porty),  
  2. okolo toho vytvoriť obal so správnou hrúbkou stien,  
  3. pridať stĺpiky, diery na skrutky a vetracie otvory.  

---

## 💡 Tipy a poznámky

- Najprv vytlačiť **testovací prototyp** (lacný filament, hrubšia vrstva), až potom finálny kryt.  
- Použiť stránku **pinout.xyz** pri práci s GPIO (displeje, senzory, HATy).  
- Pre častejšie skrutkovanie krytu sú praktické **mosadzné závitové vložky** (heat-set inserts).  

---

## ✅ Hodnota / Zhrnutie

Tento príspevok dáva krátky návod, ako:

- vybrať vhodný **typ Raspberry Pi** pre malý informačný displej,  
- pripojiť **3,5" LCD HAT** cez GPIO,  
- navrhnúť a vytlačiť **3D kryt**, ktorý to celé spraví použiteľným ako smart hodiny / info panel na stole.

Je to opakovateľný pattern pre rôzne projekty – od športových info panelov cez kancelárske dashboardy až po domáce IoT zobrazenia.

---

## 🗂️ Taxonómia KNIFE
- **Kategória:** IT / HW / IoT / 3D tlač  
- **Typ:** návod / praktický how-to  
- **Tagy:** `raspberry-pi`, `raspberry-pi-zero-2-w`, `raspberry-pi-4`, `raspberry-pi-pico`, `smart-clock`, `info-display`, `3d-tlac`, `enclosure`, `tft-lcd`, `iot`

---

## 🌍 Referencie

- [Raspberry Pi – oficiálne produkty](https://www.raspberrypi.com/products/)  
- [Raspberry Pi Zero 2 W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/)  
- [GPIO pinout pre Raspberry Pi – pinout.xyz](https://pinout.xyz)  
- Príklady 3,5" TFT LCD HAT modulov pre Raspberry Pi (Waveshare, LCDwiki, atď.)  
- Články o návrhu 3D tlačených krytov pre elektroniku (Sculpteo, AllAboutCircuits, blogy 3D tlačiarní)

---

## Navigácia
- [↩️ Späť](../index.md)
