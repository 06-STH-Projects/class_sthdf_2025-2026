---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:47Z'
title: 📝 Project Summary
---

# 📝 Project Summary

## 🔖 Identifikácia
## 1️⃣ Názov projektu
*(Jasný, výstižný, inšpiratívny – ako by sa mal objaviť na plagáte.)*
- **Názov projektu:** `PRJ011_ParkSense_ST049_ST052`
- **Stručný popis:** Cieľom projektu je prepojiť technlógiu LoRaWAN so smart infraštruktúrou mesta a uľahčiť navigovanie vodičov na parkovisku.

## 2️⃣ Členovia tímu

| ST ID |      Meno      |  Rola v tíme |  Kompetencie  | 
|-------|----------------|--------------|---------------|
| ST049 | Samuel Sventek | Project Lead | koordinácia   |
| ST052 | Matej Šplhák   | Developer    | implementácia |


## 3️⃣ Motivácia tímu
- Nápad vznikol po mnohých prípadoch, kedy sme bezcielne blúdili po parkovisku, na ktorom by mali niekde byť voľné miesta, ale nevedeli sme ich nájsť;
- Práca s hardvérom, implementácia sieťových protokolov;
- Projekt má zmysel pre vodičov a prevádzkovateľov parkovísk; 
- Projekt by mohol uľahčiť proces hľadania voľného miesta vodičom na parkoviskách;

## 4️⃣ Cieľ a pridaná hodnota projektu

- Cieľom je navrhnúť a implementovať smart parkovací systém so senzorickými zariadeniami;  
- Úspešnosť projektu bude posudzovaná podľa kompletnosti implementácie a následnom testovaní;  

## 5️⃣ Popis riešenia
- Systém sa bude skladať zo senzorického zariadenia (Lilygo), LoRa brány (RPi4B), sieťového serveru ChirpStack a webovej aplikácie. Senzorické zariadenie zbiera údaje o obsadenosti parkovacieho miesta a následne ich pomocou LoRaWAN preposiela cez LoRa bránu na sieťový server ChirpStack a ten údaje preposiela webovej aplikácii na vyhodnotenie.

## 6️⃣ Projektový plán
- Odhadovaný čas na prácu: 2h/týždeň
- Predpokladaný stav v čase prezentácie: MVP  
- Hlavné míľniky:  
  - [x] Príprava  
  - [x] Implementácia  
  - [x] Testovanie  
  - [x] Prezentácia
 
###  📅 Milníky a výstupy
- **Do januára dodáme:**  
  - [x] prototyp  
  - [x] prezentáciu  
  - [x] dokumentáciu  

## 7️⃣ Zákazník a hodnoty
- Projekt by mal slúžiť najmä vodičom a prevádzkovateľom parkovísk;
- Projekt by mohol uľahčiť proces hľadania voľného miesta vodičom na parkoviskách;
  
## 8️⃣ Očakávané výstupy
- Dokumentácia: README
- Artefakty: prototyp, appka, vizualizácia



## 📚 Kontext
- Jhonattan J. Barriga et al. “A Smart Parking Solution Architecture Based
  on LoRaWAN and Kubernetes”. In: Applied Sciences 10.13 (2020). issn:
  2076-3417. doi: 10.3390/app10134674. url:
  https://www.mdpi.com/2076-3417/10/13/4674.
- Priyanka Chaudhari et al. “Smart Infrastructure Monitoring using
  LoRaWAN Technology”. In: 2021 International Conference on System,
  Computation, Automation and Networking (ICSCAN). 2021, s. 1–6. doi:
  10.1109/ICSCAN53069.2021.9526490.

## 🧭 Riziká a závislosti
- Rizikom môže byť nedostatok času a zlé poveternostné podmienky počas testovania;
- Projekt závisí na kvalite implementácie a nízkou spotrebou koncových zariadení;

## 9️⃣ Reflexia a ďalšie kroky
Očakávame, že sa počas práce na projekte dozvieme viac o LoRa technológii a hardvéri;
Projekt by mohol byť rozšírený napríklad o automatické navádzanie vodiča na voľné parkovacie miesto;



---

## Navigácia
- [↩️ Späť](../index.md)
