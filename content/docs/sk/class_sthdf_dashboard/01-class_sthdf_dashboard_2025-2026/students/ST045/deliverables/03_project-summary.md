---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📝 Project Summary

## 🔖 Identifikácia
## 1️⃣ Názov projektu
- **Názov projektu:** `PRJ_025_ST_045_Nodyne`
- **Plný názov:** Nodyne: Systém detekcie spánku
- **Stručný popis:** Cenovo dostupné nositeľné zariadenie na detekciu spánku vodiča pomocou monitorovania polohy hlavy v reálnom čase s okamžitým zvukovým upozornením. Zariadenie deteguje 5 rôznych vzorov nástupu spánku a môže zachraňovať životy predchádzaním dopravným nehodám spôsobeným ospalosťou.

## 2️⃣ Členovia tímu

| ST ID  | Meno          | Rola v tíme           | Kompetencie                                                      |
|--------|---------------|-----------------------|------------------------------------------------------------------|
| ST045  | Pavlo Spirin  | Vývojár / Dizajnér    | Embedded systémy (Arduino, ESP32), IMU senzory, Web development, Kalibrácia a testovanie, UI/UX dashboardov |

**Poznámka:** Solo projekt

## 3️⃣ Motivácia tímu
- **Prečo som si vybral tento projekt?**
  - Až 20% dopravných nehôd je spôsobených ospalosťou vodiča. Väčšina existujúcich riešení je príliš drahá (>500€) alebo invazívna (kamery sledujúce oči).
  - Chcel som dokázať, že je možné vytvoriť účinné a cenovo dostupné riešenie (~35€) pomocou dostupných komponentov a open-source technológií.

- **Aký osobný alebo profesný zmysel má pre mňa riešenie tejto témy?**
  - Praktická aplikácia znalostí z embedded systémov a IoT v reálnom probléme, ktorý má dopad na bezpečnosť ľudí
  - Skúsenosť s kompletným vývojovým cyklom od návrhu cez implementáciu až po testovanie v reálnych podmienkach
  - Kombinácia hardvéru (M5StickC Plus 2) a softvéru (Arduino firmvér + webový dashboard)

- **Prečo je projekt dôležitý?**
  - **Zachraňuje životy** - včasná detekcia spánku môže predísť smrteľným nehodám
  - **Cenová dostupnosť** - umožňuje prístup k technológii širokej skupine vodičov
  - **Nenápadnosť** - nositeľné zariadenie nevyžaduje úpravy vozidla

- **Aký problém rieši?**
  - Detekcia viacerých vzorov nástupu spánku (mikrokývnutia, pomalé kĺzanie, silné prikývnutie, zamrznutie, bočný náklon)
  - Upozornenie vodiča **skôr**, než stratí kontrolu nad vozidlom (odozva \<1 sekunda)
  - Alternatíva k drahým komerčným systémom

## 4️⃣ Cieľ a pridaná hodnota projektu

**Finálny cieľ:**
- Vytvoriť funkčné MVP nositeľného zariadenia na detekciu spánku s viacerými detekčnými algoritmami, upozorneniami v reálnom čase a webovým dashboardom na monitorovanie

**Merateľné kritériá úspešnosti:**
- Spoľahlivá detekcia 5 odlišných vzorov ospalosti s minimálnymi falošnými poplachmi
- Čas odozvy pod 1 sekundu od detekcie nástupu spánku po upozornenie
- Výdrž batérie postačujúca na 5+ hodinové jazdné relácie
- Intuitívny kalibračný proces dokončiteľný za 3 sekúndy
- Webový dashboard funkčný pre produktové demonštrácie
- Validácia v reálnych jazdných podmienkach

**Pridaná hodnota:**
- **Pre vodičov:** Bezpečnejšia jazda, prevencia nehôd, nízka cena
- **Pre komunitu:** Open-source projekt, ktorý môže byť ďalej rozvinutý
- **Pre vzdelávanie:** Príklad praktickej aplikácie IoT technológií

## 5️⃣ Popis riešenia

**Hardvérová platforma:**
- **M5StickC Plus 2** - kompaktné zariadenie založené na ESP32 (~30€)
  - Vstavaný IMU senzor (MPU6886) - akcelerometer + gyroskop
  - 1.14" farebný TFT displej (135×240 px)
  - Reproduktor pre zvukové upozornenia
  - RGB LED indikátor
  - Nabíjateľná batéria (200mAh)
  - Rozmery: 48×24×14 mm, hmotnosť ~20g
- **Uchytenie:** Elastická športová čelenka (podobne ako čelovka)

**Softvérové riešenie:**
- **Arduino firmvér** (C++)
  - 5 nezávislých detekčných algoritmov
  - Kalibračný systém (50 vzoriek, 3 sekundy)
  - Exponenciálny kĺzavý priemer (EMA) pre filtrovanie šumu
  - Systém upozornení (audio + LED + displej)
  - JSON komunikačný protokol (10Hz)

- **Webový dashboard** (HTML/CSS/JavaScript)
  - Web Serial API pre komunikáciu cez USB
  - 3D vizualizácia hlavy (Three.js)
  - Real-time telemetria a grafy
  - Vzdialené príkazy (kalibrácia, reset, stop alarm)
  - Štatistiky relácie

**Technológie:**
- Arduino IDE, M5StickCPlus2 Library
- Web Serial API, Three.js
- IMU AHRS (Attitude and Heading Reference System)

## 6️⃣ Projektový plán

**Odhadovaný čas na prácu:** ~120 hodín celkom (~15 hodín/týždeň počas 8 týždňov)

**Predpokladaný stav v čase prezentácie:** **Funkčný MVP produkt s dokončeným testovaním v reálnych podmienkach**

**Hlavné míľniky:**
- **Fáza 1: Prototypovanie (Týždne 1-3)** - 60 hodín
  - Nastavenie M5StickC Plus 2, prvé čítanie IMU senzora
  - Implementácia základných detekčných algoritmov (silné prikývnutie, mikrokývnutia)
  - Systém upozornení (audio + LED)
  - Implementácia pokročilých algoritmov (pomalé kĺzanie, zamrznutie, bočný náklon)
  - Kalibračný systém

- **Fáza 2: Webové rozhranie (Týždne 4-5)** - 30 hodín
  - Web Serial API integrácia
  - JSON komunikačný protokol
  - Základná HTML/CSS štruktúra dashboardu
  - 3D vizualizácia hlavy pomocou Three.js
  - Real-time grafy a telemetria
  - Vzdialené príkazy

- **Fáza 3: Testovanie a optimalizácia (Týždne 6-7)** - 20 hodín
  - Domáce testovanie všetkých funkcií
  - Ladenie citlivosti detekčných prahov
  - Dokumentácia projektu
  - Zaobstaranie elastickej čelenky

- **Fáza 4: Testovanie v reálnom vozidle (Týždeň 8)** - 10 hodín
  - Testovanie počas skutočnej jazdy (>2 hodiny)
  - Rôzne podmienky
  - Finálna optimalizácia prahov
  - Vyhodnotenie výsledkov

## 7️⃣ Zákazník a hodnoty

**Primárni zákazníci (B2C):**
- **Vodiči kamiónov na dlhé trasy** - profesionálni dopravcovia, medzinárodná doprava
- **Doručovatelia** - DHL, Amazon, poštové služby (denné dlhé trasy)
- **Vodiči na nočné smeny** - zdravotníci, záchranári, security, nočné služby
- **Osobná doprava** - jednotlivci jazdící na dlhé vzdialenosti alebo cez noc

**Sekundárni zákazníci:**
- Železničná doprava (strojvodcovia)
- Operátori ťažkej techniky (bagre, žeriavy)

**Čo im to prinesie:**
- **Bezpečnosť** - prevencia nehôd, ochrana života
- **Úspora nákladov** - cenovo dostupné riešenie (~35€ vs 500-1000€)
- **Pohodlie** - jednoduché použitie, nenápadné, bez inštalácie do vozidla
- **Nezávislosť** - funguje v akomkoľvek vozidle bez úprav
- **Dlhodobá hodnota** - nabíjateľná batéria, opakovane použiteľné

## 8️⃣ Očakávané výstupy

**Dokumentácia:**
- KNIFE článok - [Detekcia spánku vodiča pomocou IMU senzora](./02_knowledge-contribution.md)
- SDLC dokumentácia:
  - Business requirements
  - Top-level architecture
  - Solution architecture
  - Analysis
  - Design
  - Implementation details
  - Testing & verification
  - Operation manual
  - Change Management log
- Demo webový dashboard dostupný cez Web Serial API
- Technická špecifikácia detekčných algoritmov
- Video demonštrácia fungovania

**Artefakty:**
- Funkčný prototyp Nodyne zariadenia
- Arduino firmvér (open-source)
- Webový dashboard (HTML/CSS/JavaScript)
- 3D vizualizácia hlavy v reálnom čase
- Kalibračný nástroj
- Telemetria a štatistiky relácií
- Kompletný zdrojový kód: [PRJ025 - Implementation](../../../projects/PRJ025/sdlc/06-implementation/index.md)
  

## 📚 Kontext

**KNIFE príspevky:**
- [Detekcia spánku vodiča pomocou IMU senzora v nositeľných zariadeniach](./02_knowledge-contribution.md)

**Literatúra a inšpirácie:**
- NHTSA - Driver Drowsiness Detection Research
- Sleep Foundation - Microsleep and Road Safety
- M5Stack dokumentácia a community projekty
- AHRS (Attitude and Heading Reference System) implementácie
- Web Serial API špecifikácia (W3C)

**Technické zdroje:**
- M5StickC Plus 2 Documentation
- MPU6886 IMU Sensor Datasheet
- Arduino Reference
- Three.js Documentation

**Projekt dokumentácia:**
- [PRJ025 - Nodyne systém detekcie spánku](../../../projects/PRJ025/index.md)

## 🧭 Riziká a závislosti

**Riziká projektu:**
- ~~**Hardvérová dostupnosť** - M5StickC Plus 2 môže byť vypredaný~~ - **Vyriešené:** Zariadenie zakúpené
- ~~**Presnosť IMU senzora** - šum z vibrácií vozidla môže spôsobiť falošné alarmy~~ - **Vyriešené:** EMA filtrovanie implementované a otestované
- ~~**Výdrž batérie** - nedostatočná pre dlhé cesty~~ - **Vyriešené:** 5-8 hodín prevádzky potvrdené testovaním
- **Pohodlie uchytenia** - elastická čelenka môže byť po dlhej dobe nepohodlná (potreba ďalšej optimalizácie dizajnu)
- **Prijatie používateľmi** - vodiči môžu odmietnuť nosiť zariadenie na hlave

**Technické riziká:**
- ~~**Kalibrácia** - zložitý proces pre používateľa~~ - **Vyriešené:** 3-sekundová kalibrácia s vizuálnou spätnou väzbou
- ~~**Falošné pozitíva** - príliš veľa nesprávnych alarmov~~ - **Vyriešené:** Prahy optimalizované na základe reálnych testov

**Závislosti:**
- M5StickC Plus 2 hardvér - zakúpený a otestovaný
- M5StickCPlus2 Arduino Library - stabilná verzia
- Web Serial API - podporované v Chromium prehliadačoch
- Elastická čelenka - zaobstaraná
- USB-C kábel na nabíjanie - súčasť balenia

## 9️⃣ Reflexia a ďalšie kroky

**Čo sa naučím:**
- Práca s IMU senzormi, kalibrácia a filtrovanie šumu
- Vývoj kompletného embedded systému od hardvéru po firmvér
- Web development s moderným stack (Next.js, Three.js, Web Serial API)
- Testovanie a optimalizácia parametrov v reálnych podmienkach
- Štruktúrovaný prístup k vývoju pomocou SDLC a Lemontree metodológie

**Plánované vylepšenia:**
- **Konfigurovateľné profily citlivosti** (prísny/normálny/uvoľnený) pre rôzne jazdné podmienky
- **Vibračný modul** (M5StickC Vibration HAT) pre haptickú spätnú väzbu
- **Zvýšenie hlasitosti alarmu** (M5StickCPLUS Speaker 2 Hat s 3.2W reproduktorom)
- **Bluetooth pripojenie** k mobilnej aplikácii pre monitoring spolucestujúcim
- **Predĺženie výdrže batérie** na 12+ hodín optimalizáciou spotreby energie
- **3D tlačený kryt** optimalizovaný na pohodlie a uchytenie na čelenke

---

## Navigácia
- [↩️ Späť](../index.md)
- [📊 Projekt PRJ025](../../../projects/PRJ025/index.md)
- [📚 KNIFE článok](./02_knowledge-contribution.md)
