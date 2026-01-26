---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📝 Project Summary

## 🔖 Identifikácia

### 1️⃣ Názov projektu
**Názov projektu:** Woodies   
2025_PRJ_006 

**Stručný popis:**  
Woodies je projekt zameraný na návrh drevených hlavolamov ako digitálneho produktu. V Onshape sme vytvorili viacero CAD modelov - knot burr puzzle, cube puzzle, tangram - zostavy, výkresy a exporty do STEP/PDF formátu pripraviteľné pre CNC. Pokúsili sme sa aj o prvý fyzický prototyp, no nepodarilo sa nám vytvoriť plne funkčný produkt, pretože návrh bol v praxi náročnejší z časového hľadiska ako sme pôvodne odhadovali.

---

### 2️⃣ Členovia tímu
| ST ID | Meno | Rola v tíme | Kompetencie |
|---|---|---|---|
|  2025_ST_005 | Viktória Bordácsová | CAD Engineer | Drawings,  plánovanie, komunikácia, dokumentácia |
|  2025_ST_023 | Lukáš Lechman| CAD Engineer | Onshape modelovanie, návrh dielov, assemblies, exporty |

---

### 3️⃣ Motivácia tímu

#### Prečo sme si vybrali tento projekt?
Drevené hlavolamy sú zaujímavé spojenie remesla, matematiky a mechaniky. Chceli sme overiť, či vieme pristúpiť k takémuto produktu „IT spôsobom“ – systematicky, s procesom, dokumentáciou a opakovateľným návrhom.

#### Aký osobný alebo profesný zmysel má pre nás riešenie tejto témy?
Projekt nám umožnil precvičiť:
- system thinking - procesy, artefakty, spätné väzby, riziká
- návrh digitálneho produktu pomocou CAD modelov
- dôslednosť v dokumentovaní výkresy, exporty, verifikácia

#### Prečo je projekt dôležitý / aký problém rieši?
Riešime problém, že veľa „hobby“ návrhov puzzle nie je:
- konzistentne zdokumentovaných
- pripravených pre CNC
- overiteľných bez fyzického prototypu

---

### 4️⃣ Cieľ a pridaná hodnota projektu

#### Finálny cieľ
Vytvoriť návrhový systém a portfólio drevených hlavolamov ako digitálneho balíka:
- CAD modely v Onshape
- zostavy assemblies
- výkresy a exporty
- STEP exporty pre možné CNC spracovanie
- dokumentácia k návrhu a procesu

#### Ako spoznáme, že projekt je úspešný?
Projekt považujeme za úspešný, ak:
- máme 3 pripravené hlavolamy
- ku každému existujú výkresy a exporty
- máme popísaný workflow a architektúru riešenia
- vieme ukázať, čo sme sa naučili z pokusu o prototyp

---

### 5️⃣ Popis riešenia (high-level)
Riešenie je digitálny návrhový proces postavený na:
- **Onshape** ako hlavnom CAD nástroji - Part Studios, Assemblies, Drawings
- exportoch **STEP**  a **PDF**
- dokumentácii a architektúre - analysis, design, implementation, testing, solution architecture
- štruktúre, ktorá umožní ľahko pridať ďalšie puzzle

Zameriavame sa na „čo“ dodávame: konzistentné návrhy pripravené na výrobu.

---

### 6️⃣ Projektový plán

**Odhadovaný čas na prácu:** ~ `20` hodín / týždeň 

**Predpokladaný stav v čase prezentácie:** dokumentácia + CAD prototypy digitálne, čiastočný fyzický pokus

#### Hlavné míľniky
- **Príprava**
  - doménová analýza typov puzzle, trendov a materiálu dreva
  - výber vhodných kandidátov
- **Implementácia**
  - Onshape modelovanie dielov
  - assemblies a vizualizácie
  - drawings a exporty
- **Testovanie / verifikácia**
  - kontrola skladania v assembly
  - kontrola konzistencie dokumentácie
  - pokus o fyzický prototyp
- **Prezentácia**
  - ukážky modelov a výkresov
  - vysvetlenie workflow a architektúry
  - reflexia prototypu a návrhových rizík

#### 📅 Milníky a výstupy
**Do januára dodáme:**
- dokumentáciu - md súbory projektu + KNIFE článok
- vizualizácie a výkresy
- STEP exporty -diely aj zostavy
- prezentáciu

---

### 7️⃣ Zákazník a hodnoty

#### Kto by mohol byť používateľom projektu?
- hobby zberatelia a puzzle nadšenci 
- školy a krúžky
- CNC dielne alebo makers - výroba podľa digitálnych podkladov
- escape room prevádzkovatelia

#### Čo mu to prinesie?
- pripravené návrhy na výrobu alebo ďalší vývoj
- jasné výkresy a dokumentáciu
- opakovateľný a rozšíriteľný návrhový proces

---

### 8️⃣ Očakávané výstupy

#### Dokumentácia
- `analysis.md`, `design.md`, `implementation.md`, `testing_verification.md`
- `top_level_architecture.md`
- `solution_architecture.md`
- `knowledge_contribution.md`
- vizualizačný dokument - screenshots + odkazy na drawings

#### Artefakty
- Onshape CAD modely:
  - Knot Burr puzzle
  - Cube puzzle
  - Tangram puzzle
- exporty:
  - STEP
  - PDF drawings

#### 📚 Kontext
Inšpirácie a zdroje:
- Karakuri puzzle box: https://www.karakuri.gr.jp/en/
- Burr puzzles (Puzzling World): http://www.johnrausch.com/PuzzlingWorld/chap03.html
- Kickstarter puzzles (trendy): https://www.kickstarter.com/discover/categories/puzzles

---

### 🧭 Riziká a závislosti

#### Riziká projektu
- Bez fyzickej výroby je overenie „fit and feel“ obmedzené trenie, povrch, vlhkosť dreva.
- Tolerancie pri dreve sú kritické – malá odchýlka spôsobí nefunkčné skladanie.
- Návrh môže byť v praxi výrazne náročnejší, než sa zdá v CAD

#### Závislosti
- dostupnosť Onshape
- kvalita vstupných modelov
- časová náročnosť tvorby výkresov a dokumentácie

---

### 9️⃣ Reflexia a ďalšie kroky

#### Čo očakávame, že sa naučíme?
- ako premeniť nápad na štruktúrovaný návrhový proces
- ako dokumentovať digitálny produkt tak, aby bol pochopiteľný aj mimo tímu
- ako robiť verifikáciu návrhu bez prototypovania

#### Ako by sa projekt mohol rozvíjať ďalej?
- doplnenie ďalších puzzle typov
- zavedenie parametrických variantov
- reálne prototypovanie s iteráciou tolerancií


