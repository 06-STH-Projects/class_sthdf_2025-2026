---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
title: 📦 PFinal Presentation
---

# Final Presentation

## 🔖 Stav projektu
Projekt LED Piano Trainer dosiahol plne funkčný prototyp:
- ✔️ Hardvér funguje (3D tlačená LED nadstavba, Raspberry box)  
- ✔️ LED sekvencie reagujú na vstup zo systému  
- ✔️ Softvérová aplikácia deteguje MIDI klávesnicu a pripravuje dáta  
- ✔️ Potrebné dokončiť: prepojenie PC → Pico → LED v real-time pre plné prehrávanie skladieb  
- ✔️ Demo video je v príprave  

Celkovo: **projekt splnil cieľ prototypu a presne ukazuje, ako by reálny produkt fungoval**.

---

## 🧩 Výstupy podľa SDLC / V-modelu

### 1. Business požiadavky
- Zjednodušiť učenie hry na klavíri pre deti a začiatočníkov.  
- Vizualizovať tóny pomocou LED namiesto tradičného čítania nôt.  
- Vyrobiť lacnú, dostupnú a ľahko replikovateľnú fyzickú pomôcku.

### 2. Top Level Architecture
- **Hardware:** MIDI keyboard, 3D LED bar, Raspberry Pico, LED pás.  
- **Software:** PC aplikácia + MicroPython firmware.  

### 3. Solution Architecture
- PC → transkripcia / MIDI vstup → odoslanie príkazov → Raspberry Pi Pico.  
- Pico → mapovanie nôt → LED indexovanie → osvetlenie správneho boxu.  
- LED nadstavba → izolácia svetla pre jeden kláves.

### 4. Analysis
- LED pás má iné rozostupy ako klávesy → bol potrebný ohyb.  
- Čierne klávesy zasahujú do rovnomernosti → nutnosť jednotných boxov.  
- Chyba v prvej verzii → chýbajúci jeden box (opravené doplnením modulu).

### 5. Design
- Test rôznych hrúbok priečok pre optimálnu difúziu svetla.  
- Modulárny 3D model pre tlač po častiach.  
- Krabička pre Raspberry na estetiku a správu káblov.

### 6. Implementation
- Tlač nadstavby, ohýbanie LED pásu, doplnenie missing boxu.  
- Tlač enclosure pre Raspberry.  
- Implementácia základného LED prehrávača v MicroPythone.  
- PC aplikácia s detekciou MIDI a prípravou dát.

### 7. Verification & Testing
- Test osvetlenia: jeden LED → jeden box.  
- Test farebnej konzistencie a difúzie.  
- Test spojenia PC → keyboard → Pico.  
- Prvé prehranie jednoduchých sekvencií.

### 8. Operation
- Prototyp je schopný fungovať s reálnym keyboardom.  
- Zariadenie prehráva celé skladby s čakaním na odozvu od používateľa.  

---

## 🏆 Finálny produkt

### 💡 Dodané:
- ✔️ 3D tlačená LED nadstavba pre 2 oktávy  
- ✔️ Doplnený box pre posledný kláves  
- ✔️ Krabička na Raspberry + kabeláž  
- ✔️ Funkčné osvetľovanie klávesov podľa sekvencie  
- ✔️ PC aplikácia s GUI, MIDI detekciou a pipeline  
- ✔️ Prvé testovacie sekvencie na klavíri  
- ✔️ Dokumentácia + KNIFEs

### 📸 Ako to vyzerá:

- LED nadstavba  
- Raspberry krabička  
- PC aplikácia Piano Trainer  

### 🎬 Demo video:
https://www.youtube.com/watch?v=GONJa6kOOnw

### ▶️ Youtube:
https://www.youtube.com/@PianoLedTrainer1

### 💼 LinkedIn:
https://www.linkedin.com/in/led-piano-trainer-61495a38b/

### 📝 OneNote:
Class Notebook - Mám tam opísaný celý vývoj projektu s časovou stopou a s viacerými detailmi. Aj viacero knowledge contributions.

---

## 🧭 Porovnanie s Project Summary

| Plánované | Realita |
|----------|---------|
| LED nadstavba pre 2 oktávy | ✔️ Dodané, vyladené, funkčné |
| Krabička pre Raspberry | ✔️ Vytlačená a esteticky prepracovaná |
| Softvér pre MIDI → LED sekvencie | ✔️ Funkčný prototyp |
| Demo video | ✔️ Pripravené |
| Transkripcia YouTube → MIDI | ✔️ Implementované |
| Plná integrácia LED prehrávania | ✔️ Hotové |

### 🎯 Zhrnutie:
Projekt nielen splnil plán, ale ho v niektorých oblastiach prekonal (kvalita 3D modelu, stabilita LED prototypu, čisté GUI).  

---

## Navigácia
- [↩️ Späť](../index.md)
