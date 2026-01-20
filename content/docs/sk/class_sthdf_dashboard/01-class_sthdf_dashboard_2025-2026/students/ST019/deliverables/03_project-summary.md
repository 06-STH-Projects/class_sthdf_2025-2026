---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---
## `STHDF-LEDPIAN` Project summary  

**ID projektu:** STHDF-LEDPIANO  
**Názov projektu:** Svetelná pomôcka na učenie hry na klavíri  
**Názov výrobku:** LED Piano Trainer  

### Členovia tímu
- **Samuel Kohút** – systémový dizajnér, vývojár hardvéru & firmvéru, dokumentácia  

Rola: end-to-end zodpovednosť za koncept, implementáciu, testovanie a dokumentáciu.

### Účel
Vytvoriť **fyzickú pomôcku na učenie pre klavírnych začiatočníkov**, ktorá používa 3D-tlačený LED pás nad klávesmi na ukázanie, ktorý kláves stlačiť. Precvičovanie by malo pôsobiť viac ako **rytmická hra**, než čítanie nôt, a projekt má spojiť moje softvérové zručnosti s reálnym hardvérom a nástrojmi makerspacu.

### Individuálne vízie
- Vytvoriť niečo užitočné pre moju **mladšiu sesternicu**, aby bolo učenie klavíra zábavnejšie.  
- Skombinovať **embedded programovanie (Raspberry Pi Pico), 3D tlač a systémové myslenie** do jedného koherentného projektu.  
- Zanechať po sebe **replikovateľnú, dobre zdokumentovanú zostavu**, ktorú môžu ostatní znovu postaviť alebo rozšíriť.

### Vízia tímu
Aj keď ide o jednočlenný projekt, vízia je:
- Mať **plne funkčný demo setup** (MIDI klavír + LED lišta + riadiaca krabička).  
- Udržiavať jasnú **dokumentáciu a znalostné príspevky** (GitHub + OneNote).  
- Poskytnúť **krátke demo video a finálnu prezentáciu**, ktoré ukážu skutočnú hodnotu pre učenie, nie len blikanie LED.

### Misia tímu
- Navrhnúť a vytlačiť **modulárnu LED nadstavbu**, ktorá sedí nad klávesmi a osvetlí presne jeden box na kláves.  
- Implementovať firmvér na Raspberry Pi Pico, ktorý bude ovládať WS2812B LED pás podľa dát skladby.  
- Experimentovať s PC pipeline (YouTube → audio → MIDI → noty → LED).  
- Zhodnotiť, nakoľko systém podporuje učenie a čo by bolo potrebné, aby sa z neho stal „skutočný“ výrobok.

### Stratégia
- Použiť **jednoduchý a bezpečný hardvérový návrh**: žiadne zásahy do klavíra.  
- Použiť **adresovateľné LED WS2812B** pre jednoduché zapojenie a farebné ovládanie každého klávesu.  
- Udržať firmvér na Pico jednoduchý a náročné spracovanie (MIDI, transkripcia, spracovanie skladieb) posunúť na **laptop**.  
- Iterovať v malých krokoch: blikacie testy → mapovanie klávesov → jednoduché melódie → funkcionality na precvičovanie.  
- Dokumentovať všetky dôležité kroky textom a fotkami v **OneNote** a **GitHube**.

### Koncový zákazník
- **Primárny:** úplní začiatočníci na klavíri (deti, študenti), ktorí uprednostňujú vizuálnu a hravú formu učenia.  
- **Sekundárny:** rodičia a učitelia hudby hľadajúci motivačnú tréningovú pomôcku.

### Očakávaná náročnosť
- Hardvérový dizajn, 3D tlač, kabeláž: **15–25 hodín**  
- Firmvér (MicroPython na Pico), mapovanie, melódie: **10–20 hodín**  
- Dokumentácia, znalostné príspevky, demo, prezentácia: **25–35 hodín**

### Ciele a očakávania
- Funkčný prototyp pre **dve oktávy** na AKAI LPK25, s jednou LED pre každý klávesový box.  
- Aspoň **2–3 skladby z Youtube piano coverov** prehrateľné ako LED sekvencie.  
- Kompletný **GitHub repozitár** so schémami zapojenia, 3D modelmi, inštrukciami a ukážkovým kódom.  
- Krátke **demo video** použité vo finálnej prezentácii.  
- Reflexia, ako projekt ilustruje **systémové myslenie** (hardvér, softvér, používateľ, dokumentácia, ekosystém).

### Popis riešenia

**Hardvér**
- AKAI LPK25 MIDI keyboard (25 klávesov, dve oktávy).  
- WS2812B adresovateľný LED pás vedený cez **3D-tlačenú svetelnú lištu** (jeden svetelný box na kláves).  
- Raspberry Pi Pico WH ako riadiaca jednotka.  
- Breadboard, kábliky, odpory a **3D-tlačená krabička** na elektroniku a napájanie.

**Firmvér**
- MicroPython kód s PIO Neopixel driverom.  
- Mapovanie z indexu klávesu / MIDI noty na index LED.  
- Prehrávač skladieb, ktorý rozsvieti noty v sekvencii s kontrolou tempa, s možnosťou neskoršej podpory akordov.

**PC Pipeline (plánované)**
- Konverzia piano coverov (napr. z YouTube) do MIDI.  
- Vyčistenie a prispôsobenie skladieb pre rozsah LPK25.  
- Odosielanie note eventov cez USB serial do Pico pomocou jednoduchého textového protokolu.

### Projektový plán

#### Fáza 1 – Plánovanie a výskum (HOTOVÉ)
- Definované ciele, rozsah a cieľoví používatelia.  
- Analýza možností umiestnenia LED: zamietnuté interné LED, zvolená externá lišta.

#### Fáza 2 – Infraštruktúra (HOTOVÉ)
- Nastavenie Raspberry Pi Pico s MicroPythonom.  
- Overenie ovládania LED pásu a vytvorenie tutorialov ako znalostných príspevkov.

#### Fáza 3 – Hardvér a 3D tlač (HOTOVÉ / DOLAĎUJE SA)
- Vytlačené testovacie diely s rôznou hrúbkou stien na optimalizáciu difúzie svetla.  
- Vytlačená LED lišta pre dve oktávy + extra box pre posledný kláves.  
- Ohnutý a prispôsobený LED pás tak, aby sedel jeden LED na každý box.  
- Vytlačená krabička pre Pico a kabeláž.

#### Fáza 4 – Firmvér & Interakcia (PREBIEHA)
- Finalizácia mapovania kláves → LED.  
- Implementácia jednoduchého prehrávania melódií a kontroly tempa.

#### Fáza 5 – Integrácia & Vyhodnotenie (PLÁNOVANÉ)
- Prototyp PC pipeline na odosielanie note eventov.  
- Testovanie s reálnymi používateľmi a získanie spätnej väzby.

#### Fáza 6 – Finalizácia (PLÁNOVANÉ)
- Vyleštenie kódu a dokumentácie.  
- Nahratie demo videa a príprava finálnej prezentácie.

### Dosiahnuté výsledky
- Funkčná hardvérová platforma: Raspberry Pi Pico + WS2812B pás + napájanie + MIDI klavír.  
- Plne funkčná **3D-tlačená LED nadstavba** a krabička na elektroniku, upevnená na klavíri.  
- LED dokážu svietiť v jednotlivých boxoch s dobrou difúziou a zarovnaním.  
- GitHub a OneNote obsahujú úvodnú dokumentáciu, fotky a setup tutoriály.

### Skúsenosti
- Naučil som sa, že skutočné výrobky vyžadujú **mechanické kompromisy** (napr. zrieknutie sa interných LED po otvorení klavíra).  
- Vidno, že nástroje makerspacu (3D tlač, fyzické experimenty) sú kľúčové pre iteráciu dizajnu.  
- Lepšie som pochopil potrebu plánovať **celý systém** – kabeláž, mechaniku, kód, interakciu a dokumentáciu.

### Knifes
- Nastavenie Raspberry Pi so svetelným LED pásom  
- Nastavenie Raspberry Pi s Thonny prostredím  
- Nastavenie AKAI MIDI klávesnice  
- Nastavenie brand účtu na YouTube (nie je súčasťou verejného repozitára)
- Nastavenie brand účtu na LinkedIne (nie je súčasťou verejného repozitára)

### Pozitívne skúsenosti
- Vidieť prvú plne osvetlenú LED lištu na klavíri bol obrovský motivačný moment – projekt pôsobil reálne.  
- Páči sa mi, že toto môže skutočne pomôcť mojej rodine, nielen splniť predmet.  
- Veľmi dobrý súlad medzi **ekosystémom kurzu** (GitHub, OneNote, KNIFES) a tým, ako prirodzene pracujem ako vývojár.

### Potenciál na zlepšenie
- Pridať **practice mode**, kde LED čakajú, kým hráč stlačí správny kláves, s farbami pre správne/nesprávne noty.  
- Pridať jednoduché **konfiguračné UI** na výber skladieb a tempa.  
- Zlepšiť prenosnosť tak, aby LED lišta + box fungovali aj na iných 25- alebo 37-klávesových klavíroch.  
- Pretvoriť projekt na **zdokumentovanú open-source stavebnicu** pre študentov, učiteľov alebo makerspace centrá.

## Navigácia
- [↩️ Späť](../index.md)

---
