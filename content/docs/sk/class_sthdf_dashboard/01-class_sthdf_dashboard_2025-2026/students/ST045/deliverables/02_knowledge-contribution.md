---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📚 Knowledge Contribution


## Názov a stručný popis
**Nodyne: Systém detekcie spánku**

- **Téma:** Využitie IMU senzora (akcelerometer + gyroskop) v kompaktnom nositeľnom zariadení na detekciu nástupu spánku u vodičov monitorovaním polohy hlavy v reálnom čase
- **Prečo je dôležitá:** Až 20% dopravných nehôd je spôsobených ospalosťou vodiča. Včasná detekcia a upozornenie môže zachrániť životy a predísť tragédiám na cestách.


## Čo rieši (účel, cieľ)

**Problém:**
- Dopravné nehody spôsobené zaspaním vodiča za volantom
- Mnohé komerčné systémy sú príliš drahé (>500€) alebo vyžadujú inštaláciu do vozidla
- Kamery sledujúce oči sú invazívne a nefungujú pri slnečných okuliaroch
- Vodiči často ignorujú prvé príznaky únavy
- Nehody sa stávajú v priebehu niekoľkých sekúnd po zaspávaní

**Cieľ:**
- Vytvoriť cenovo dostupné (~35€) nositeľné zariadenie na detekciu spánku
- Detegovať viaceré vzory nástupu spánku **skôr**, než vodič stratí kontrolu
- Okamžite upozorniť vodiča zvukovým alarmom
- Zariadenie musí byť nenápadné, pohodlné a neinvazívne
- Fungovať nezávisle bez potreby pripojenia k vozidlu


## Ako to rieši (princíp)

**Kľúčový princíp:** Monitoring polohy a pohybu hlavy pomocou **IMU senzora** (Inertial Measurement Unit) umiestneného na čele vodiča.

**Hardvér:**
- **M5StickC Plus 2** - kompaktné zariadenie s IMU senzorom (MPU6886), displejom, reproduktorom, LED, batériou
- **Uchytenie:** Elastická čelenka na hlave (podobne ako čelovka)
- **Rozmer:** 48×24×14 mm, hmotnosť ~20g

**IMU senzor poskytuje:**
- **Roll** (bočný náklon hlavy)
- **Pitch** (náklon dopredu/dozadu)
- **Intenzita pohybu** (mikrovibracie)

**5 Detekčných algoritmov:**

1. **Silné prikývnutie** - Hlava klesne dopredu >25° na >500 milisekúnd
2. **Mikrokývnutia** - 3+ rýchle malé naklony (>15°) za 8 sekúnd
3. **Pomalé kĺzanie** - Postupný náklon dopredu (12-25°) po dobu >3 sekúnd
4. **Zamrznutie** - Absencia mikropohybov >10 sekúnd (vodič nehýbe hlavou)
5. **Bočný náklon** - Hlava padá na rameno >25° po dobu >500 milisekúnd

**Systém upozornení:**
- **Zvukový alarm:** Striedavý tón 1000Hz/1500Hz (prebudí vodiča)
- **LED indikátor:** Červené blikanie
- **Displej:** Zobrazí dôvod alarmu ("STRONG NOD", "MICRO NODS", atď.)


## Ako to použiť (aplikácia)

**Primárne použitie:**
- **Vodiči na dlhé trasy** - kamionisti, medzinárodná doprava
- **Doručovatelia** - DHL, Amazon, poštové služby
- **Nočné smeny** - zdravotníci, záchranári, security
- **Osobná doprava** - dlhé cesty cez noc, zimné obdobie (únava)

**Sekundárne použitie:**
- **Železničná doprava** - strojvodcovia
- **Ťažká technika** - operátori bagrov, žeriavov

---
## Rýchly návod (Top)

### 1. Hardvér
**Potrebné komponenty:**
- M5StickC Plus 2 (~30€)
- Elastická športová čelenka (~3€)
- USB-C kábel na nabíjanie

### 2. Inštalácia firmvéru

**Príprava vývojového prostredia:**
1. **Nainštaluj Arduino IDE** - stiahni z [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software)
2. **Nastav M5StickC Plus 2** - postupuj podľa video návodu:
   - [M5Stack Arduino IDE Setup in 5 minutes](https://www.youtube.com/watch?v=U2es-l4z2Zg)
   - Pridaj URL board managera pre ESP32
   - Nainštaluj M5StickCPlus2 knižnicu

**Načítanie kódu projektu Nodyne:**
3. **Prejdi na dokumentáciu projektu** s kompletným kódom:
   - [Nodyne - Implementácia](../../projects/PRJ025/sdlc/06-implementation/index.md)
   - Všetok zdrojový kód firmvéru vrátane detekčných algoritmov, kalibrácie a komunikačného protokolu
4. **Skompiluj a nahraj** firmvér do M5StickC Plus 2 cez Arduino IDE

### 3. Použitie
1. **Nasaď čelenku** s M5StickC Plus 2 na čelo
2. **Zapni zariadenie** - tlačidlo ON z hornej časti zariadenia
3. **Kalibrácia** - pozeraj rovno 3 sekundy (zobrazí "CALIBRATED")
4. **Jazda** - zariadenie monitoruje hlavu a upozorní pri detekcii spánku

### 4. Údržba
- **Nabíjanie:** USB-C, 1-2 hodiny
- **Výdrž batérie:** 5-8 hodín kontinuálneho používania
- **Čistenie:** Utrite čelenku po každom použití

## Detailný článok

> Kompletná dokumentácia projektu: [PRJ025 - Nodyne systém detekcie spánku](../../projects/PRJ025/index.md)

### Prečo monitorovať hlavu, nie oči?

**Tradičné systémy sledujú oči:**
- Kamera + AI detekcia zatvorených očí
- Problém: nefunguje so slnečnými okuliarmi
- Problém: invazívne (vodič cíti "sledovanie")
- Náklady: 500-1000€

**Nodyne monitoruje hlavu:**
- IMU senzor deteguje náklon hlavy
- Funguje aj so slnečnými okuliarmi
- Nenápadné (vodič zabúda, že má zariadenie)
- Náklady: ~35€

### Veda za detekciou

Pri zaspávaní dochádza k typickým fyziologickým zmenám:

**Fáza 1: Mikrokývnutia (micro-sleep)**
- Hlava rýchlo klesá a dvíha sa (reflexy)
- Trvanie: 1-5 sekúnd
- Algoritmus: detekuje 3+ rýchle naklony

**Fáza 2: Postupné kĺzanie**
- Svaly krku ochabujú
- Hlava pomaly klesá dopredu
- Trvanie: 3-15 sekúnd
- Algoritmus: náklon 12-25° po dobu >3s

**Fáza 3: Silné prikývnutie alebo bočný náklon**
- Vodič úplne zaspáva
- Hlava prudko klesne dopredu alebo na stranu
- Kritická fáza: **STRATA KONTROLY**
- Algoritmus: náklon >25° okamžite spustí alarm

**Fáza 4: Zamrznutie**
- Vodič sedí nehybne (hlboký spánok)
- Absencia mikropohybov
- Algoritmus: žiadny pohyb >10 sekúnd

### Implementácia v projekte Nodyne

Projekt Nodyne obsahuje kompletnú implementáciu systému detekcie spánku vrátane:

**Kľúčové komponenty firmvéru:**
- **Kalibračný systém** - priemerovanie 50 vzoriek IMU dát (3 sekundy)
- **5 detekčných algoritmov** - silné prikývnutie, mikrokývnutia, pomalé kĺzanie, zamrznutie, bočný náklon
- **Filtrovanie šumu** - Exponential Moving Average (EMA) pre vyhladenie pohybu
- **Systém upozornení** - striedavý zvukový alarm + LED + displej
- **Komunikačný protokol** - JSON telemetria pre webový dashboard

**Kompletný zdrojový kód a detailná implementácia:**
- [Nodyne - Implementácia (06-implementation)](../../projects/PRJ025/sdlc/06-implementation/index.md)
- Obsahuje všetok firmvér, algoritmy, prahy a komunikačný protokol

**Technické detaily architektúry:**
- [Nodyne - Solution Architecture](../../projects/PRJ025/sdlc/03-solution-architecture/index.md)
- [Nodyne - Projekt (hlavná dokumentácia)](../../projects/PRJ025/index.md)

### Webový dashboard (demonštračný nástroj)

**Účel:**
- Vizualizácia fungovania pre prezentácie
- Zber spätnej väzby od testerov
- Kalibrácia a ladenie prahov

**Funkcie:**
- 3D model hlavy zobrazujúci orientáciu v reálnom čase
- Grafy roll/pitch úhlov
- Štatistiky: počet alarmov, max. náklon, priemerný pohyb
- Vzdialené príkazy: kalibrácia, reset, zastavenie alarmu

**Technológia:** Web Serial API (komunikácia cez USB bez inštalácie softvéru)

**Poznámka:** Dashboard je **sekundárna funkcia** - zariadenie funguje úplne samostatne bez pripojenia k dashboardu.

### Testovanie a validácia

**Domáce testovanie:**
- Simulácia kývnutí hlavou v sede
- Overenie všetkých 5 detekčných režimov
- Ladenie prahov citlivosti
- **Výsledok:** 100% detekcia simulovaných vzorkov spánku

**Testovanie v reálnych podmienkach vozidla:**
- Jazda na dlhé vzdialenosti (>2 hodiny)
- Testovanie v rôznych podmienkach
- Meranie falošných pozitív (nesprávne alarmy)
- Optimalizácia prahov na základe reálnych dát
- **Výsledok:** Zariadenie funguje správne, všetky detekčné režimy validované v reálnej jazde

### Obmedzenia a budúce vylepšenia

**Súčasné obmedzenia:**
- Vyžaduje správne umiestnenie na hlave (čelo)
- Batéria vydrží 5-8 hodín (potrebné dobíjanie)
- Nemôže detegovať únavu bez pohybu hlavy
- Falošné pozitívy pri extrémnych nerovnostiach cesty

**Plánované vylepšenia:**
- Konfigurovateľné profily citlivosti (prísny/normálny/uvoľnený)
- Vibračný modul
- Zvýšenie hlasitosti alarmu 
- Bluetooth pripojenie k mobilnej aplikácii
- Predĺženie výdrže batérie na 12+ hodín
- 3D tlačený kryt optimalizovaný na pohodlie

## ✅ Hodnota / Zhrnutie

**Detekcia spánku pomocou IMU senzora je:**
- **Cenovo dostupná** (~35€ vs 500-1000€ komerčné systémy)
- **Nenápadná** (malé zariadenie, nie kamera)
- **Nezávislá** (funguje bez pripojenia k vozidlu)
- **Spoľahlivá** (5 rôznych detekčných algoritmov)
- **Rýchla** (odozva \<1 sekunda)

**Reálny dopad:**
Projekt Nodyne dokázal, že je možné vytvoriť funkčný prototyp detekcie spánku za **1,5 mesiaca** a **~35€**. Zariadenie úspešne deteguje všetky typické vzory nástupu spánku a má potenciál zachraňovať životy.

**Kľúčové poznatky:**
1. IMU senzory sú dostatočne presné pre detekciu polohy hlavy
2. M5StickC Plus 2 je ideálna platforma pre nositeľné prototypy
3. Viaceré detekčné algoritmy znižujú falošné negatívy
4. Kalibrácia je kritická pre presnosť merania
5. Web dashboard je užitočný pre vývoj a testovanie, ale nie nevyhnutný pre fungovanie


## 🗂️ Taxonómia KNIFE
- **Kategória:** IT, IoT, Bezpečnosť, Embedded systémy, Zdravie
- **Typ:** Prípadová štúdia, Návod, Technická dokumentácia
- **Tagy:** IMU senzor, detekcia spánku, M5StickC Plus 2, nositeľné zariadenia, bezpečnosť na cestách, Arduino, ESP32, akcelerometer, gyroskop, driver drowsiness, Nodyne


## 🌍 Referencie
- [Driver Drowsiness Detection - NHTSA](https://www.nhtsa.gov/risky-driving/drowsy-driving)
- [M5StickC Plus 2 Documentation](https://docs.m5stack.com/en/core/M5StickC%20PLUS2)
- [MPU6886 IMU Sensor Datasheet](https://m5stack.oss-cn-shenzhen.aliyuncs.com/resource/docs/datasheet/core/MPU-6886-000193%2Bv1.1_GHIC_en.pdf)
- [Arduino Reference](https://www.arduino.cc/reference/en/)
- [Microsleep and Road Safety - Sleep Foundation](https://www.sleepfoundation.org/sleep-disorders/microsleep)
- [AHRS (Attitude and Heading Reference System)](https://en.wikipedia.org/wiki/Attitude_and_heading_reference_system)

## Navigácia
- [↩️ Späť](../index.md)
