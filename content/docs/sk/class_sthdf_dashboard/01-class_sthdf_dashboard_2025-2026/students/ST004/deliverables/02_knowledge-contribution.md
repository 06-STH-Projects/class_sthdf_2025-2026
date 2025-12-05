
# 📚 Knowledge Contribution

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis
- **Téma, ktorou prispievam:**  
  USBCAPS – pokročilý USB-TTL prevodník s BLE ochranou proti USB Killer útokom a inteligentnou automatizáciou sériovej komunikácie. :contentReference[oaicite:0]{index=0}  

- **Prečo je dôležitá:**  
  USB Killer zariadenia dokážu fyzicky zničiť počítače, notebooky a laboratórne vybavenie vysokonapäťovými pulzmi cez USB port. Väčšina zariadení nemá žiadnu ochranu. USBCAPS oddelí počítač od rizikového zariadenia pomocou bezdrôtovej BLE vrstvy (100 % elektrická izolácia) a zároveň zjednoduší prácu s UART (auto baud, auto RX/TX, Wi-Fi/Bluetooth terminál). :contentReference[oaicite:1]{index=1}  


## 🎯 Čo rieši (účel, cieľ)

- Eliminuje riziko fyzického poškodenia PC / notebooku pri práci s neznámymi alebo potenciálne škodlivými USB zariadeniami (USB Killer, experimentálne prototypy, neznáme dosky). :contentReference[oaicite:2]{index=2}  
- Odstraňuje typické „troubleshooting“ problémy pri UART komunikácii:
  - neznáma prenosová rýchlosť,
  - prehodené RX/TX piny,
  - rozdielne logické úrovne (3,3 V / 5 V). :contentReference[oaicite:3]{index=3}  
- Umožňuje pohodlný bezdrôtový prístup k sériovému terminálu (Wi-Fi / Bluetooth) z ľubovoľného zariadenia – mobil, tablet, notebook. :contentReference[oaicite:4]{index=4}  
- Cieľom je vytvoriť **bezpečný, inteligentný a prenosný USB-TTL nástroj**, vhodný pre:
  - IoT vývoj,
  - univerzitné laboratóriá,
  - servisné a diagnostické práce,
  - demonštráciu kyber-fyzických hrozieb (USB Killer).


## 🧩 Ako to rieši (princíp)

- **BLE ochranná vrstva (100 % elektrická izolácia)**  
  - PC komunikuje len s USB-UART čipom (CP2102/CH340),  
  - ten je prepojený s ESP32, ktoré ďalej komunikuje s cieľovým zariadením bezdrôtovo (BLE 5.0 / Wi-Fi),  
  - USB port host systému nie je nikdy priamo spojený s potenciálne škodlivým hardvérom → USB Killer impulzy sa nedostanú do PC. :contentReference[oaicite:5]{index=5}  

- **Auto Baud Detection**  
  - ESP32 prechádza štandardné rýchlosti 300–115200 baud,  
  - krátko počúva prichádzajúce dáta, sleduje rámcové chyby / znak typu LF (0x0A) alebo vzor 0x55,  
  - pri korektných dátach rýchlosť „uzamkne“ a ďalej používa. :contentReference[oaicite:6]{index=6}  

- **Auto RX/TX Pin Detection (softvérový swap)**  
  - po zistení baud rate pošle testovací príkaz (napr. „AT\r\n“) alebo čaká na dáta,  
  - ak nič nepríde, ESP32 softvérovo prehodí mapovanie GPIO (RX/TX) a test zopakuje,  
  - tým odpadá manuálne riešenie prehodených pinov na breadboarde / kábloch. :contentReference[oaicite:7]{index=7}  

- **Bezdrôtový terminál (Wi-Fi + Bluetooth)**  
  - Wi-Fi režim: ESP32 v AP móde + jednoduchý webserver + WebSocket terminál prístupný cez prehliadač,  
  - Bluetooth režim: „Bluetooth Serial“ (SPP) – funguje ako klasický sériový port pre mobil / PC. :contentReference[oaicite:8]{index=8}  

- **Duálna napäťová úroveň a kompatibilita**  
  - vstup 5 V z USB, regulované 3,3 V (AMS1117),  
  - dostupné 3,3 V aj 5 V pre napájanie cieľového zariadenia,  
  - voliteľný level-shifter pre bezpečnú komunikáciu s 5 V logikou (Arduino, niektoré senzory). :contentReference[oaicite:9]{index=9}  


## 🧪 Ako to použiť (aplikácia)

Typické scenáre:

- **IoT / embedded vývoj**  
  - pripojenie k ESP32/STM32/Arduino doskám bez rizika zničenia notebooku,  
  - rýchle ladenie sériového výstupu bez riešenia baud rate a RX/TX.  

- **Univerzitné a školské laboratóriá**  
  - bezpečné prostredie pre študentov – aj keď niekto pripojí USB Killer, poškodí maximálne testovaný modul, nie PC,  
  - demonštrácia reálnej hrozby USB Killer a princípov ochrany v rámci predmetov kyberbezpečnosti. :contentReference[oaicite:10]{index=10}  

- **Servis, diagnostika a field work**  
  - pripojenie k priemyselným zariadeniam, senzorom a modulom v teréne,  
  - možnosť stáť pri zariadení a mať notebook bezpečne bokom (komunikácia cez BLE/Wi-Fi).  

---

## ⚡ Rýchly návod (Top)

1. **Zapojenie**
   - Pripoj USBCAPS do PC / notebooku cez USB-C alebo microUSB.  
   - USB-UART driver (CP2102 / CH340) sa nainštaluje automaticky alebo z oficiálnych driverov. :contentReference[oaicite:11]{index=11}  

2. **Pripojenie k cieľovému zariadeniu**
   - Prepoj TX/RX a GND medzi USBCAPS a cieľovou doskou (Arduino, ESP, senzor…).  
   - Zvoľ napájanie 3,3 V alebo 5 V podľa potreby cieľového zariadenia. :contentReference[oaicite:12]{index=12}  

3. **Spustenie bezdrôtového terminálu**
   - Wi-Fi:  
     - pripoj sa na Wi-Fi AP, ktoré vytvorí USBCAPS (SSID uvedené v dokumentácii),  
     - otvor IP adresu v prehliadači → zobrazí sa web-terminál (WebSocket).  
   - Bluetooth:  
     - spáruj zariadenie „USBCAPS“ cez Bluetooth,  
     - použi akúkoľvek BT Serial / terminal app. :contentReference[oaicite:13]{index=13}  

4. **Používanie**
   - USBCAPS automaticky nájde baud rate a nastaví RX/TX,  
   - hneď vidíš sériový výstup, môžeš posielať príkazy, logovať dáta, testovať AT príkazy.  

5. **Bezpečnosť**
   - PC je chránené galvanickou izoláciou cez BLE vrstvu – USB Killer impulzy sa nedostanú do host systému. :contentReference[oaicite:14]{index=14}  


## 📜 Detailný článok

### 1. Kontext: USB Killer ako reálna hrozba

- V roku 2019 študent zničil desiatky počítačov a ďalších zariadení s USB Killer zariadením, škoda presiahla 58 000 USD. :contentReference[oaicite:15]{index=15}  
- USB Killer funguje tak, že:
  - z USB portu berie energiu,
  - nabíja kondenzátory,
  - následne opakovane vypúšťa vysokonapäťové impulzy späť do portu.  
- Výsledok: poškodené základné dosky, USB radiče, monitory a iné periférie. Bežné zariadenia nemajú voči tomuto typu útoku žiadnu ochranu. :contentReference[oaicite:16]{index=16}  

USBCAPS na túto situáciu reaguje tým, že **PC nikdy nepríde do priameho elektrického kontaktu s cieľovým zariadením**.

---

### 2. Technická architektúra a dizajn

- **MCU:** ESP32-WROOM-32 (dual-core, Wi-Fi + Bluetooth 5.0, viac UART portov). :contentReference[oaicite:17]{index=17}  
- **USB-UART bridge:** CP2102 alebo CH340 – klasický a lacný spôsob, ako spraviť z USB virtuálny COM port.  
- **Napájanie:** 5 V z USB → regulátor AMS1117-3.3 → 3,3 V logika + dostupné 3,3 V / 5 V výstupy. :contentReference[oaicite:18]{index=18}  
- **Logické úrovne:** voliteľný level-shifter (BSS138), ak je cieľové zariadenie 5 V.  
- **Komunikácia:**
  - PC ⟷ USB-UART ⟷ ESP32 ⟷ cieľové zariadenie (UART),
  - plus BLE 5.0 a/alebo Wi-Fi web terminál. :contentReference[oaicite:19]{index=19}  

Architektúra je navrhnutá tak, aby sa dala jednoducho rozšíriť o:
- OLED displej (baud rate, IP adresa, stav pripojenia),  
- prepínač manuálneho / automatického režimu,  
- ďalšie protokoly (I²C, SPI, jednoduchý logický analyzátor). :contentReference[oaicite:20]{index=20}  

---

### 3. Implementačný roadmap (od prototypu k produkcii)

Podľa návrhu projektu a webu sa projekt delí na 5 fáz: :contentReference[oaicite:21]{index=21}  

1. **Breadboard prototyp**
   - ESP32 + USB-UART modul + regulátor napätia,  
   - test základnej USB-TTL funkcionality a sériovej komunikácie.  

2. **Firmware implementácia**
   - moduly:
     - auto detekcia baud rate,  
     - auto RX/TX swap,  
     - Wi-Fi / BLE komunikácia,  
     - bezpečnostné prvky (šifrovanie, pairing, prípadné autentizačné vrstvy).  

3. **Webová aplikácia**
   - WebSocket pre real-time prenos UART dát,  
   - responzívny dizajn (mobil, tablet, notebook).  

4. **PCB dizajn**
   - vlastná doska pre kompaktné riešenie,  
   - zohľadnenie ESD, EMC a odolnosti (napr. automotive grade komponenty).  

5. **Finálne zostavenie a testovanie**
   - testovanie funkcií (USB, Wi-Fi, BLE, napájanie, auto-funkcie).


## 💡 Tipy a poznámky

- Pri práci s neznámymi USB zariadeniami (najmä v školskom prostredí) používaj USBCAPS ako **medzivrstvu** – nikdy nepripájaj neznáme USB priamo do notebooku.  
- V dokumentácii k projektu sa oplatí mať hotový **"incident demo scénar"** – krátka ukážka, ako USB Killer dokáže poškodiť bežný PC a ako to USBCAPS eliminuje. :contentReference[oaicite:22]{index=22}  
- Auto baud / auto RX-TX výrazne šetria čas pri rýchlom testovaní – netreba riešiť, aký baud má daný senzor alebo či sú piny správne. :contentReference[oaicite:23]{index=23}  
- Pre KNIFE/knowledge base je dobré doplniť:
  - príklad kódu pre ESP32 (Arduino / ESP-IDF),  


## ✅ Hodnota / Zhrnutie

USBCAPS prináša:

- kombináciu **hardvérovej bezpečnosti** (ochrana pred USB Killer) a **softvérovej inteligencie** (auto baud, auto RX/TX),  
- bezdrôtový, pohodlný prístup k UART terminálu z ľubovoľného zariadenia,  
- jasný **roadmap od študentského prototypu k produkčnému zariadeniu**,  
- priamu aplikovateľnosť v:
  - výuke (FIIT, IoT, bezpečnosť),  
  - interných projektoch,  
  - reálnych IoT / embedded nasadeniach.  

Je to konkrétny príklad, ako študentský projekt dokáže riešiť reálnu bezpečnostnú hrozbu a zároveň zlepšiť každodenný vývojársky workflow. :contentReference[oaicite:25]{index=25}  


## 🗂️ Taxonómia KNIFE

- **Kategória:**  
  - IT, IoT, Embedded Systems, Cybersecurity, Hardware  

- **Typ:**  
  - návod + prípadová štúdia (projekt / prototyp)  

- **Tagy:**  
  - `USB Killer`, `USB bezpečnosť`, `USB-TTL prevodník`, `ESP32`, `BLE`, `Wi-Fi`, `UART`, `auto baud`, `auto RX/TX`, `IoT`, `laboratórna bezpečnosť`, `FIIT STU`, `SMVIT`, `USBCAPS`  


## 🌍 Referencie

- USBCAPS – oficiálna stránka projektu:  
  - https://usbcaps.org :contentReference[oaicite:26]{index=26}  
- Projektový návrh „USB-TTL Prevodník s Automatickou Detekciou a Bezdrôtovým Terminálom“ (interný dokument, SMVIT / FIIT STU). :contentReference[oaicite:27]{index=27}  
- US Department of Justice – prípad USB Killer incidentu (2019), citované na stránke USBCAPS. :contentReference[oaicite:28]{index=28}  

- 🌐 Web: [usbcaps.org](https://usbcaps.org)
- 💙 Patreon: [patreonl](https://patreon.com/USBCAPS)
- 📷 LinkedIn: [linkedin](https://www.linkedin.com/company/usbcaps)
- 📷 YouTube: [YouTube](https://www.youtube.com/@usbcaps)

## Navigácia
- [↩️ Späť](../index.md)
