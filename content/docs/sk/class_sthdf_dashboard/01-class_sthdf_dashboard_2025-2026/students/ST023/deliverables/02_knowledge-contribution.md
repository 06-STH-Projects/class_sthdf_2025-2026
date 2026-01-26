---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis

### Téma, ktorou prispievam
**Ako systematicky navrhovať drevené hlavolamy ako digitálny produkt v Onshape – od analýzy po exporty**

### Prečo je dôležitá
Pri drevených hlavolamoch je kľúčová **presnosť dielov, tolerancie a montážna logika**. Ak návrh nie je konzistentný a „výrobne čitateľný“, výsledok, aj hypoteticky bude:
- ťažko vyrobiteľný na CNC
- zle skladateľný
- ťažko dokumentovateľný a opakovateľný

Tento prístup spája **systémové myslenie** - proces, artefakty, stakeholderi s praktickým CAD workflow v **Onshape**.

---

## 🎯 Čo rieši (účel, cieľ)
Rieši otázku:

> Ako navrhnúť a odovzdať drevený hlavolam ako digitálny balík tak, aby bol zrozumiteľný, overiteľný a pripravený pre CNC – aj bez fyzickej výroby?

Konkrétne cieľom je mať:
- jasnú klasifikáciu typov hlavolamov a výber vhodných kandidátov
- jednotný návrhový proces
- CAD modely + assembly
- výkresy PDF a 3D exporty STEP
- možnosť jednoducho dopĺňať ďalšie puzzle do portfólia.

---

## 🧩 Ako to rieši princíp
Princíp riešenia je postavený na troch pilieroch:

### 1 Doménová analýza → výber puzzle typov
Z analýzy typov hlavolamov vyplýva, že pre CAD-only projekt je vhodné kombinovať viac mechaník:
- **Interlocking** napr. burr – demonštruje tolerancie a blokovanie dielov,
- **3D assembly** napr. cube puzzle – demonštruje modulárnosť a viacero riešení,
- **2D assembly** tangram – demonštruje jednoduchú vyrobiteľnosť a škálovanie.

### 2 Onshape ako „single source of truth“
Onshape sa používa ako hlavné miesto, kde existuje:
- Part Studios - diely
- Assemblies - zostavy
- Drawings - výkresy

Výstupy PDF a STEP sa generujú priamo z tohto zdroja.

### 3 Digitálny release balík

Každý hlavolam sa dá odovzdať ako konzistentný balík:
- **STEP** - diely + zostava
- **PDF výkresy** - kľúčové diely
- dokumentácia
- priestor na ďalšie verzie a rozšírenie

---

## 🧪 Ako to použiť
Tento prístup bol aplikovaný v projekte Woodies:

### Navrhnuté puzzle v Onshape
- **Knot Burr puzzle** interlocking – viac dielov, dôraz na zárezy a presnosť skladania
- **Cube puzzle** 3D assembly – 6 rôznych dielov, viacero možných riešení
- **Tangram puzzle** assembly – 7 dielikov + podstava/rám, dôraz na rovinu a výšku rámika

### Výstupy
- vytvorené **Drawings**  výkresy pre kľúčové diely
- exportované **STEP súbory** diely aj zostavy
- doplnené vizualizácie a screenshots pre prezentáciu návrhov

---

## ⚡ Rýchly návod
1. **Vyber puzzle typy**
2. V Onshape vytvor **Part Studio** pre diely.
3. Vytvor **Assembly** a skontroluj, že diely sa dajú zložiť.
4. Pre kľúčové diely vytvor **Drawings** a doplň základné kvóty a tolerancie, ak treba.
5. Exportuj:
   - **STEP** pre parts a assembly
   - **PDF** drawings
   - voliteľne **DXF** pre 2D rezanie napr. tangram.
6. Skompletizuj to ako jeden balik.

---

## 📜 Detailný článok

### 1 Typológia hlavolamov a dopad na návrh
Základné kategórie:
- **Sequential discovery**: puzzle boxy – vysoké nároky na tolerancie a sekvenciu krokov
- **Interlocking**: burr – presnosť zárezov, montážne poradie
- **Disentanglement**: šnúra a krúžky – jednoduchšie diely, dôležitá geometria pohybu
- **Assembly**: tangram, pentomino, cube – modulárnosť, veľa riešení

Z pohľadu CAD návrhu je kritické pochopiť, *kde vzniká funkčný kontakt medzi dielmi* - zárezy, styčné plochy, drážky.

### 2 Prečo je drevo špecifické
Drevo „pracuje“ a mení rozmery s vlhkosťou, preto:
- dizajn musí počítať s vôľami, typicky rádovo desatiny mm
- príliš tesné spoje môžu viesť k zaseknutiu
- príliš voľné spoje znižujú kvalitu a pocit z puzzle

### 3 Onshape workflow - čo sa v praxi osvedčilo
**Part Studios**
- modelovať diely čisto a prehľadne - jednoduché skice, jasné rozmery
- držať konzistentnú hrúbku a „modul“ tam, kde to dáva zmysel - cube puzzle, tangram dieliky

**Assemblies**
- skladanie v assembly je virtuálna náhrada prototypovania
- pomáha odhaliť kolízie a nelogické poradie skladania.

**Drawings**
- výkres je forma „kontraktu“: jednoznačne popisuje rozmery a kritické miesta
- je dobrý aj pre hodnotenie projektu

**STEP export**
- STEP slúži ako neutrálny 3D export do iných CAD/CAM systémov
- vhodné exportovať diely aj zostavu

### 4 Rozšíriteľnosť portfólia
Aby sa dali pridávať ďalšie puzzle, napr. puzzle box, ring-and-string, snake cube je vhodné mať:
- jednotný naming dielov
- opakujúcu sa štruktúru výstupov
- minimálny checklist pred exportom

---

## 💡 Tipy a poznámky
- **STEP je dobrý default** pre 3D export. PDF drawings sú často ešte dôležitejšie pre „CNC-ready“ prezentáciu.
- Pri puzzle, ktoré sú **ploché**, sa často oplatí doplniť aj **DXF**
- V projekte bez výroby má veľkú hodnotu:
  - assembly kontrola
  - konzistentná dokumentácia
  - jasný proces a „release“ balík.

---

## ✅ Hodnota / Zhrnutie
Tento prístup poskytuje praktický a opakovateľný spôsob, ako:
- z doménovej analýzy drevených hlavolamov vybrať vhodné puzzle pre CAD
- navrhnúť ich v Onshape
- odovzdať ich ako profesionálny digitálny balík - Drawings + STEP
- a pripraviť systém tak, aby sa portfólio dalo ďalej rozširovať

---

## 🗂️ Taxonómia KNIFE
**Kategória:** IT, Startup, CAD/Engineering, System Thinking  
**Typ:** návod + prípadová štúdia, praktická aplikácia v projekte
**Tagy:** wood puzzles, Onshape, CAD, STEP, drawings, CNC-ready, system thinking, interlocking, tangram, cube puzzle, burr puzzle

---

## 🌍 Referencie
- Karakuri Creation Group (puzzle box, sequential discovery): https://www.karakuri.gr.jp/en/  
- John Rausch – Puzzling World (burr puzzles, mechanické skladačky): http://www.johnrausch.com/PuzzlingWorld/chap03.html  
- Kickstarter – puzzles (trendy hybrid digitálno-fyzické): https://www.kickstarter.com/discover/categories/puzzles  
- Vstupná analýza projektu `analysis.md` – typológia, top 10, trendy a materiálové aspekty