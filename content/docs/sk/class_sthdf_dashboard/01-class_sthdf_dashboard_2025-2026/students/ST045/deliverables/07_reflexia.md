---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

## Reflexia a spätná väzba

### 1. Čo bolo pre teba v tomto predmet/úlohe najľahšie?

**Implementácia firmvéru a základných detekčných algoritmov.**

Práca s M5StickC Plus 2 a Arduino bola pre mňa prirodzená, pretože už mám skúsenosti s embedded systémami. Prvé algoritmy (silné prikývnutie, mikrokývnutia) boli relatívne jednoduché - čítal som IMU senzor, analyzoval pitch/roll a spúšťal alarm pri prekročení prahov.

Taktiež integrácia Web Serial API bola priamočiara - dokumentácia je jasná a už som predtým pracoval s podobnými technológiami.

---

### 2. Čo bolo najťažšie a prečo?

**Kalibrácia a eliminácia falošných poplachov.**

Najväčšia výzva bola optimalizácia detekčných prahov tak, aby zariadenie správne rozlíšilo medzi:
- **Normálnymi pohybmi hlavy** počas jazdy (zatáčanie, kontrola zrkadiel)
- **Skutočným zaspávaním**

Vibrácie vozidla a nerovnosti cesty spôsobovali šum v IMU dátach. Musel som:
1. Implementovať **Exponential Moving Average (EMA)** filtrovanie
2. Testovať rôzne prahy v reálnych jazdných podmienkach
3. Pridať kalibračný systém pre individuálnu polohu hlavy

**Prečo to bolo ťažké:** Teoretické nastavenia nefungovali v praxi. Potreboval som reálne dáta z dlhých jazdných testov.

---

### 3. Čo nové si sa naučil?

**Technické:**
- Práca s **IMU senzormi** (akcelerometer + gyroskop) a ich kalibrácia
- **Signal processing** - filtrovanie šumu pomocou EMA
- **AHRS (Attitude and Heading Reference System)** - výpočet orientácie v 3D priestore
- **Web Serial API** - komunikácia medzi prehliadačom a zariadením cez USB
- **Three.js** - 3D vizualizácia v reálnom čase

**Metodologické:**
- Dôležitosť **skorého testovania v reálnych podmienkach**
- **User experience design** - kalibrácia musí byť jednoduchá (3 sekundy)
- **SDLC proces** - kompletný vývojový cyklus od business požiadaviek po operation

---

### 4. Ako by si postupoval inak, keby si mal začať odznova?

**Zmenil by som toto:**

1. **Zaobstarať čelenku skôr** - v prvých týždňoch som testoval zariadenie rukou. Keby som mal čelenku od začiatku, mohol som skôr odhaliť problémy s vibráciami.

2. **Viac času na testovanie batérie** - zistil som výdrž 5-8 hodín až v neskorých fázach. Mal by som to testovať priebežne.

3. **Vlastný 3D tlačený kryt od začiatku** - M5StickC Plus 2 je funkčné, ale nie optimálne na nosenie.

4. **Zapojiť testerov skôr** - testoval som väčšinou sám. Viacerí testeri s rôznymi jazdnými štýlmi by pomohli rýchlejšie optimalizovať prahy.

---

### 5. Ako to súvisí s tvojím projektom alebo budúcou praxou?

**Silná relevancia:**

**Pre budúcu prax:**
- Naučil som sa kompletný **product development lifecycle** od nápadu cez prototyp až po validáciu
- Získal som skúsenosti s **IoT a embedded systémami**, ktoré sú kľúčové pre moju kariéru
- Pochopil som dôležitosť **user testing**

**Pre projekt Nodyne:**
- Projekt môže pokračovať ako **open-source riešenie** alebo **komercializácia**
- Môže to byť základ pre **startup** alebo **partnerstvá s logistickými firmami**

**Pre ostatné projekty:**
- Metódy **signal processingu** môžem použiť v iných wearable zariadeniach
- Skúsenosti s **Web Serial API** môžem aplikovať na iné IoT dashboardy

---

### 6. Akú jednu vetu by si chcel, aby si z tohto zapamätali tvoji spolužiaci?

**"Testuj skoro, testuj často, a testuj v reálnych podmienkach - teória a prax sú dve rôzne veci."**

Domáce testy ukázali, že algoritmy fungujú perfektne. Ale až po testovaní v reálnom vozidle som zistil problémy s vibráciami a falošnými poplachmi. Keby som čakal do konca projektu, nemohol by som stihnúť optimalizáciu.

---

### 7. Čo by si doporučil na zlepšenie predmetu?

**Návrhy:**

1. Ukázať case studies, kde sa veci nepodarili na prvý pokus. Vidieť proces iterácie je cenné.

2. Organizovať stretnutia, kde študenti prezentujú projekty navzájom a dávajú feedback.

3. Mať 2-3 checkpointy počas semestra s feedbackom od vyučujúceho.

4. Pozvať bývalých študentov, ktorí pokračovali v projektoch alebo založili startupy.

---

## Celkové zhodnotenie projektu

### Čo sa podarilo

- **100% dokončenie MVP** - všetky plánované funkcie implementované
- **Dodržanie časového plánu** - 8 týždňov bez odchýlky
- **Real-world validácia** - testované v skutočnom vozidle
- **Kvalitná dokumentácia** - kompletná SDLC, KNIFE článok
- **Open-source projekt** - dostupný na GitHub

### Osobný rast

- Zlepšil som schopnosti v **embedded systémoch** a **signal processingu**
- Naučil som sa **komplexnú projektovú metodológiu** (SDLC)
- Získal som praktické skúsenosti s **produktovým vývojom**
- Pochopil som dôležitosť **user experience** a **real-world testing**

---

## Navigácia
- [↩️ Späť](../index.md)
- [📊 Projekt PRJ025](../../../projects/PRJ025/index.md)
- [📝 Project Summary](./03_project-summary.md)
- [🎤 Final Presentation](./06_final_presentation.md)
