---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.922730+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "7fe78eb4-4cc0-4427-bd26-273a01380af8"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "slides"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "{{DESCRIPTION}}"


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: ""

# Priorita (low/medium/high) – voliteľné
priority: ""

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: []


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2025-11-28 16:54"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2025-11-28 16:54"

# Stav dokumentu – default "backlog"
status: "backlog"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Roman Kazicka"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ""

# URL pôvodného repozitára
origin_repo_url: ""

# Commit pôvodu
origin_commit: ""

# Branch pôvodu
origin_branch: ""

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: "CAA"

# Pôvodný autor
origin_author: "Roman Kazicka"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

[🏠 Domov](../../../index.md) · [⬅️ Nahor](../)
# PRJ006 — Presentation

## Headline
**2025-PRJ-006-ST_005-ST_023-Woodies**


Woodies je projekt zameraný na návrh drevených hlavolamov ako digitálneho produktu. V CAD prostredí Onshape sme vytvorili 3 modely hlavolamov - knot burr, cube puzzle a tangram, vrátane zostáv, výkresov a exportov do STEP/PDF pripravených pre výrobu. Projekt sme ukončili vo fáze návrhu a dokumentácie, pričom prototypovanie sme overili len jednoducho.


## Obsah
- [01-Business](../sdlc/01-business/index.md)
- [02-Top Level Architecture](../sdlc/02-top-level-architecture/index.md)
- [03-Solution Architecture](../sdlc/03-solution-architecture/index.md)
- [04-Analysis](../sdlc/04-analysis/index.md)
- [05-Design](../sdlc/05-design/index.md)
- [06-Implementation](../sdlc/06-implementation/index.md)
- [07-Testing & Verification](../sdlc/07-testing-verification/index.md)
- [08-Operation](../sdlc/08-operation/index.md)
- [09-Change Management](../sdlc/09-Change-Management/index.md)


## 01-Business
## 1. Vízia a misia

### Vízia
Stať sa rozpoznateľnou značkou digitálne navrhnutých drevených hlavolamov, ktoré spájajú remeselný charakter dreva s moderným parametrickým dizajnom pripraveným pre CNC.

### Misia
Navrhovať estetické, funkčné a opakovateľne vyrobiteľné drevené hlavolamy, ktoré:
- rozvíjajú priestorové a logické myslenie,
- sú navrhnuté s dôrazom na tolerancie a „prácu“ dreva,
- umožňujú personalizáciu ako je gravírovanie či varianty obtiažnosti,
- majú pripravenú dokumentáciu


## 2. Problém a príležitosť

### Problém
Trh s hlavolamami je bohatý, no:
- kvalitné drevené hlavolamy bývajú drahé,
- lacné varianty trpia zlým spracovaním a toleranciami,
- mnoho návrhov nie je „CNC-friendly“ a nie je parametrických

### Príležitosť
Woodies bude kombinovať výrobu s digitálnym produktom ako sú CAD modely

Týmto sa dá:
- rýchlo iterovať dizajn,
- vytvoriť knižnicu produktov,
- ponúknuť B2C aj B2B bez potreby vlastnej výroby.

## 3. Cieľové segmenty

### 3.1 B2C
- zberatelia mechanických hlavolamov
- zákazníci hľadajúci originálny darček
- rodičia/učitelia

### 3.2 B2B
- prevádzkovatelia escape roomov - rekvizity, puzzle komponenty
- školy / krúžky

## 4. Konkurenčný kontext a diferenciácia

### Existujúci trh
- Handmade výrobky – variabilná kvalita, často bez výrobnej dokumentácie
- Masová výroba  – tlak na cenu, slabé tolerancie/finishing
- Prémiové puzzle box – vysoká cena, tradičný prístup

### Diferenciácia Woodies
- zameranie na digitálny návrh a opakovateľnosť,
- „design system“ pre puzzle 

## 5. Produktové portfólio

Podľa analýzy v `analysis.md` je vhodné pokryť aspoň 3 typy, aby sa ukázali rozdielne výrobky.

1. **Interlocking Knot Burr puzzle** – prelínajúci sa hlavolam z viacerých dielov so zárezmi, vhodný na ukážku skladania a potreby presnosti.
2. **3D Assembly Cube puzzle** – skladačka do výsledného objemu kocky z viacerých rôznych dielov, vhodná na priestorové uvažovanie.
3. **Tangram puzzle** – geometrická skladačka zo 7 dielikov + podstava/rám, vhodná na jednoduchú výrobu a škálovanie.

## 6. Riziká

- Neodhadnuté tolerancie → dizajn nevhodný pre drevo 
- Slabá diferenciácia → mnoho „podobných“ puzzle na trhu
- Autorské práva pri inšpirácii tradičnými puzzle 

## 02-Top Level Architecture
# Woodies – Top Level Architecture

## 1. Kontext systému (čo je „systém“ v našom projekte)

V projekte Woodies je produkt primárne **digitálny artefakt**: CAD model + výkresy + dokumentácia.  
Top-level architektúra preto opisuje **tok práce, dáta a komponenty** potrebné na návrh.

![Systémový kontext](../images/context_diagram_tla.png)

### 1.1 Zainteresované strany
- **Designer/CAD Engineer**: tvorí modely, parametre, zostavy.
- **Reviewer**: kontrola konzistencie, DFM pravidlá.
- **CNC dielňa**: konzument výkresov, DXF, CAM nastavení.
- **Zákazník**: konzument montážneho manuálu, vizualizácií.


## 2. Architektúrne ciele a kvalitatívne atribúty

### 2.1 Ciele
- Opakovateľný proces tvorby puzzle dizajnov
- Parametrizácia
- Konzistentná dokumentácia

### 2.2 Kvalitatívne atribúty
- **Maintainability:** zmena parametrov nevyžaduje redizajn.
- **Reusability:** diely/komponenty použiteľné naprieč puzzle.
- **Verifiability:** kontrola kolízií, montážnych krokov v CAD.
- **Manufacturability:** dizajn rešpektuje vyrobné obmedzenia.

## 3. Top-level komponenty - moduly systému

### 3.1 Návrhový pipeline
![Návrhový pipeline Woodies](../images/pipeline_diagram_tla.png)
1. **Research & Requirements**
   - definícia typu puzzle 
   - ciele obtiažnosti, počet dielov, požiadavky na toleranciu

2. **Parametrický CAD model**
   - skice s parametrami 
   - diely → zostavenie
   - kontrola kolízií

3. **Príprava pre výrobu**
   - výkresy s toleranciami
   - exporty 
   - poznámky k nástrojom

4. **Dokumentácia produktu**
   - BOM - zoznam dielov, materiál, rozmery
   - montážny manuál
   - render/vizualizácie

5. **Verifikácia**
   - CAD interference check
   - kontrola pravidiel: min. hrúbky, rádiusy, vôľa

## 4. Dátová architektúra - artefakty
![Dátová architektúra](../images/data_diagram_tla.png)

- **CAD zdroje:** `.f3d`, `.sldprt`, `.FCStd`
- **Neutral CAD:** `.step` / `.iges`
- **2D výkresy:** `.pdf`, `.dxf`
- **Dokumenty:** `.md` 
- **Vizualizácie:** `.png`, `.jpg`


## 5. Rozhrania medzi komponentmi
![Rozhrania komponentov](../images/interface_diagram_tla.png)
- **Requirements → CAD:** parametre, počet dielov, cieľový rozmer.
- **CAD → DFM:** výkresy, tolerancie, exporty.
- **CAD/DFM → Dokumentácia:** BOM, explodované pohľady
- **Verifikácia → Change management:** bug reports, revízie parametrov.


## 03-Solution Architecture
## 1. Kontext riešenia
V projekte **Woodies** je „riešenie“ chápané ako **digitálny systém** pre návrh drevených hlavolamov – od analýzy a požiadaviek až po finálne CAD výstupy pripravené pre výrobu. 

Solution architektúra sa nezameriava na výrobnú linku, logistiku alebo predaj, ale na:
- návrhový proces
- nástroje
- dátové artefakty
- kontrolné mechanizmy
- schopnosť riešenie rozširovať

---

## 2. Cieľ solution architektúry
Cieľom architektúry je definovať, **ako bude Woodies systematicky vytvárať a spravovať návrhy puzzle**, aby boli:

- konzistentné
- parametrické
- overiteľné
- exportovateľné do univerzálnych formátov
- pripravené na ďalšie rozšírenie portfólia

---

## 3. Rozsah riešenia 

### V riešení - in-scope
- CAD modelovanie dielov a zostáv v **Onshape**
- generovanie **Drawings** - 2D výkresy
- exporty: **STEP** , **PDF** - výkresy
- základná verifikácia - kontrola parametrov
- verzovanie výstupov

### Mimo riešenia - out-of-scope
- reálna CNC výroba, CAM toolpaths, výber nástrojov a materiálu
- fyzické testovanie, brúsenie, povrchové úpravy
- e-shop / platobná brána / marketingová automatizácia

---

## 4. Architektonické komponenty riešenia

### 4.1 CAD komponent - Onshape ako „source of truth“
- **Part Studios**: návrh jednotlivých dielov
- **Assemblies**: virtuálne skladanie hlavolamov, kontrola logiky montáže
- **Drawings**: výkresy dielov
---

### 4.2 Dokumentačný komponent (projektové artefakty)
- `analysis.md`, `design.md`, `implementation.md`
- zoznam dielov, počty, poznámky

**Úloha:** preniesť návrh do zrozumiteľnej formy pre hodnotenie aj hypotetické použitie.

---

### 4.3 Exportný komponent - deliverables
- **STEP**: neutrálny 3D formát kompatibilný s CAD/CAM
- **PDF**: výkresy
- **DXF**: profily pre 2D rezanie napr. tangram

**Úloha:** vytvoriť „release balík“, ktorý je použiteľný mimo Onshape.

---

### 4.4 Verifikačný komponent
Bez fyzického prototypovania sa spoliehame na CAD a procesnú kontrolu:

- interference/collision kontrola v assembly
- kontrola parametričnosti
- kontrola konzistencie dokumentácie

**Úloha:** minimalizovať riziko, že návrh bude v praxi nefunkčný alebo nevyrobiteľný.

---

### 4.5 Zmena a verzovanie - change management
- jasné pomenovanie dielov a revízií
- „release“ balíky pre každú verziu puzzle

**Úloha:** umožniť bezpečné iterácie návrhu (najmä pri zmenách tolerancií a geometrie).

---

## 5. Hlavný tok riešenia - end-to-end workflow
1. **Input**: doménová analýza a výber puzzle (burr, cube, tangram)
2. **Požiadavky**: rozmery, počet dielov, cieľová obtiažnosť, CNC obmedzenia
3. **CAD návrh**: diely v Part Studios
4. **Zostava**: assemblies a kontrola skladania
5. **Výkresy**: drawings pre diely/zostavy
6. **Verifikácia**: kontrolné kroky pred exportom
7. **Export**: STEP + PDF (+ DXF podľa typu)
8. **Release balík**: dokumentácia, BOM, montážny postup, verzia

---

## 6. Architektonické rozhodnutia

### ADR1: Onshape ako hlavná platforma
Onshape sme zvolili kvôli jednoduchému zdieľaniu, dostupnosti a podpore kompletného CAD procesu - modely, zostavy, výkresy.

### ADR2: STEP ako hlavný 3D export
STEP je najvhodnejší neutrálny formát pre ďalšie spracovanie - CNC/CAM alebo kontrola v inom CAD.

### ADR3: Výkresy ako PDF z Drawings
PDF výkresy zvyšujú dôveryhodnosť návrhu a umožňujú jednoznačne komunikovať rozmery a tolerancie.

### ADR4: Riešenie musí byť rozšíriteľné
Architektúra je navrhnutá tak, aby sa dali pridávať ďalšie puzzle bez zmeny procesu – iba sa doplní nový „puzzle balík“ - CAD + docs + exporty.

---

## 7. Rozšíriteľnosť: priestor pre ďalšie puzzle
Architektúra počíta s doplnením napríklad:

- **Puzzle box**: drážky, posuvné mechanizmy, vyššie nároky na tolerancie
- **Snake cube**: modulárne diely a skladacia sekvencia
- **Ring and string**: kombinácia drevo + šnúra
- **Gear puzzle**: vyššie požiadavky na presnosť a kompatibilitu zubov

Každé nové puzzle by malo mať:
- vlastný CAD set - parts + assembly
- drawings
- exporty

---

## 8. Výstupy solution architektúry - deliverables

Pre hodnotenie projektu by riešenie malo obsahovať minimálne:
- Onshape návrhy: **knot burr**, **cube puzzle**, **tangram**
- výkresy PDF pre vybrané diely a zostavy
- exporty STEP - diely + zostavy
- dokumentáciu

---

## 9. Záver
Solution architektúra Woodies definuje „ako“ tvoríme digitálne návrhy drevených hlavolamov tak, aby boli konzistentné, overiteľné a pripravené pre CNC. Architektúra stojí na Onshape ako zdroji pravdy, na štandardizovaných výstupoch STEP, PDF a na krokoch, ktoré nahrádzajú fyzické prototypovanie. Zároveň je navrhnutá tak, aby sa portfólio puzzle dalo priebežne rozširovať bez zmeny základného procesu.

## 04-Analysis
# 1. Úvod
Drevené hlavolamy majú dlhú históriu siahajúcu stáročia späť. Od tradičných čínskych puzzle zamkov (Chinese puzzle locks) cez európske interlocking puzzles až po moderné 3D burr puzzles. I v ére digitalizácie sa stále tešia obľube, či už ako štýlový doplnok kancelárie alebo ako spôsob potrénovania logického myslenia, pri ktorom sa človek môže odpojiť od počítača.

## 1.1 Prečo drevo ?

__Výhody dreva ako materiálu__

| Výhoda      | Popis      |
| :-------------: | :-------------: |
| Príjemný dotyk| Teplé, prirodzené, unikátne vzory|
| Obnoviteľný zdroj  | Biodegradovateľný |
|Krásna textura	|Prírodná kresba, možnosť moridlovania|
|Dlhá životnosť	|Pri správnej úprave vydrží desiatky rokov|
|Opraviteľnosť	|Dá sa brúsiť, opravovať|

__Nevýhody dreva v spojení s návrhom riešenia__
| Problém      | Riešenie      |
| :-------------: | :-------------: |
|Vlhkosť - drevo "pracuje"	|Správna tolerancia (±0.2-0.5mm), stabilizované drevo|
|Variabilita materiálu	|Výber kvalitného dreva, homogénne časti bez sukov|
|Náročnejšia výroba	|CNC automatizácia, parametrický dizajn pre opakovateľnosť|

# 2. Rozbor druhov hlavolamov

## 2.1  Sekvenčné objavovanie - Sequential Discovery Puzzles Sekvenčné objavovanie
__Princíp:__ 

Hlavolamy založené na postupnom otváraní jednotlivých častí. Každá správna séria krokov odhalí ďalšíu časť mechanizmu.

__Príklady:__

a.) Puzzle Box ako Japonský Himitsu-Bako [1]

4-54 krokov na otvorenie. Skladá sa z pohyblivých panelov v presnej sekvencii.
Tradične z Japonska, konrkétne z Hakone. Náročnosťou sa pohybuje od stredne náročných po ťažké.

b.) Trick Lock Boxes

Podobné puzzle boxom, avšak sú postavené na množstve skrytých západok, prípadne magnetov.Používané historicky na ukladanie cenností. Pričom ich obtiažnosť sa líši.


Oba tieto typy hlavolamou sú vhodné pre výrobu s použitím CNC, keďže vyžadujú presné tolerancie. Zároveň to umožní opakovateľnú výrobu, za pomoci jedného návrhu.

## 2.2 Prelínajúce sa - Interlocking Puzzles 
Typ logických hračiek, ktoré sa skladajú z viacerých častí, pevne do seba zapadajúcich tak, že vytvárajú jeden celok. Typickým príkladom sú drevené alebo kovové 3D hlavolamy, ktoré sa musia rozobrať a následne znovu zložiť do pôvodného tvaru.

Cieľom týchto puzzle je pochopiť vzájomné vzťahy medzi jednotlivými dielmi – často je možné ich rozobrať len špecifickým postupom alebo v určitom poradí. Patria medzi najstaršie druhy mechanických hlavolamov a rozvíjajú priestorové myslenie, trpezlivosť a jemnú motoriku. Niektoré moderné verzie sa vyrábajú z kovu, plastu či pomocou 3D tlače a sú obľúbené medzi zberateľmi aj milovníkmi logických hier.

__Príklady:__

a. Burr puzzles [2]

Klasické prelamovacie hlavolamy zložené z viacerých (zvyčajne šiestich až dvanástich) drevenných prútov, ktoré sú do seba vzájomne prepletené tak, že vytvárajú jeden kompaktný celok. Najznámejším variantom je „Six-Piece Burr“, ktorý vznikol v 18. storočí a dodnes patrí medzi najpopulárnejšie mechanické skladačky. Úlohou riešiteľa je rozobrať a následne opäť zložiť hlavolam, pričom niektoré verzie majú tisíce možných variácií a vyžadujú vysokú dávku trpezlivosti a priestorového uvažovania. Náročnosť týchto puzzle sa pohybuje od strednej až po veľmi ťažkú.

b. 3D assembly puzzle 

Predstavujú trojrozmerné skladačky, ktoré sa skladájú z nepravidelných dielikov tvoriacich určitý tvar – najčastejšie kocku alebo iný geometrický objekt. Typickým príkladom je Soma Cube, ktorú v roku 1933 vymyslel dánsky vedec Piet Hein. Hlavolam sa skladá zo siedmich dielikov, z ktorých treba poskladať kocku s rozmermi 3×3×3. Okrem zábavnej stránky majú tieto puzzle aj vzdelávací rozmer, pretože rozvíjajú priestorovú predstavivosť a logické myslenie.

c. Pyramid puzzles 

Trojrozmerné hlavolamy v tvare pyramídy, teda s tetrahedrálnou štruktúrou. Hoci sú menej rozšírené než klasické kockové hlavolamy, zaujmú svojím netradičným tvarom a vizuálnym efektom. Úlohou býva správne zostaviť alebo rozobrať jednotlivé diely pyramídy, čo si vyžaduje precízne uvažovanie o priestorových vzťahoch medzi dielikmi.


## 2.3  Disentanglement puzzles (uvoľňovacie hlavolamy)

Hlavolamy, kde je cieľom **uvoľniť alebo oddeliť** časť bez násilia.
- Môžu byť z kombinácie dreva a šnúrky alebo kovu.  
- Príklad: **Lanové alebo krúžkové hlavolamy**

a. Horseshoe puzzles (podkovové hlavolamy) 

Pozostávajú z dvoch podkôv spojených reťazou alebo krúžkom. Úlohou je uvoľniť kovový (alebo drevený) krúžok z medzi podkôv, čo vyžaduje presné manipulovanie a pochopenie geometrie pohybu.

b. Ring and string puzzles 

Kombinujú drevené časti, šnúrky a krúžky. Cieľom býva dostať krúžok cez spleť uzlov, otvorov a slučiek. Hoci vyzerajú jednoducho, často ide o veľmi záludné logické úlohy, ktoré testujú trpezlivosť a priestorovú predstavivosť.

c. Cast puzzles (liate alebo kovové hlavolamy) 

Majú aj drevenné varianty, pri ktorých je potrebné oddeliť prepojené časti alebo ich znovu spojiť. Základom je pochopiť mechanizmus spojenia – niekedy ide o skrutkovanie, posúvanie alebo pretáčanie dielikov v správnom poradí.

## 2.4 Assembly puzzles (skladačky)

Úlohou je **zostaviť jednotlivé kúsky** do určitého tvaru alebo obrázka.
- Príklad: **Tangram**, **Pentomino**, alebo geometrické skladačky  
- Rozvíjajú priestorovú predstavivosť a logické myslenie.

a. Tangram 

Staroveká čínska geometrická skladačka pozostávajúca zo siedmich plochých dielikov (tzv. tans): piatich trojuholníkov rôznych veľkostí, jedného štvorca a jedného rovnobežníka. Cieľom je z týchto dielikov vytvoriť rôzne tvary – zvieratá, postavy, písmená či abstraktné obrazy – bez toho, aby sa dieliky prekrývali. Tangram rozvíja predstavivosť, logické myslenie a schopnosť vnímať tvary a proporcie.

b. Pentomino 

Hlavolam tvorený dvanástimi dielikmi, pričom každý dielik pozostáva z piatich štvorcov spojených hranou v rôznych konfiguráciách. Z týchto dielov sa dajú skladať rôzne obdĺžniky (napr. 6×10, 5×12) alebo iné tvary podľa zadania. Hlavolam sa preslávil aj vo výučbe matematiky, pretože rozvíja kombinatorické myslenie a priestorovú orientáciu.

# 3 Populárne hlavolami

## 3.1 TOP 10 hlavolamou
Na získanie top 10 najpopulárnejších drevenných hlavolamou sme použili stránky Etsy a Amazon, kde sme si vyfiltrovali jednotlivé údaje.

|Rank |Produkt	|Priemerná cena	|Predajnosť	|Náročnosť výroby|
|:--|:-------------|:-------------:|-------------:|-------------:|
|1|	Burr Puzzle (6-piece)	|€18-35	|Vysoká	|Stredná|
|2|	Tower of Hanoi|	€15-40	|Vysoká	|Nízka-Stredná|
|3|	Soma Cube	|€20-45|	Stredná-Vysoká	|Stredná
|4|	Puzzle Box |€30-150	|Stredná	|Vysoká
|5|	Tangram Set	|€12-25	|Vysoká	|Nízka
|6|	Snake Cube	|€15-30	|Stredná|	Stredná
|7|	Pentominoes	|€18-35	|Stredná|	Nízka-Stredná
|8|	Educational Blocks	|€25-60	|Vysoká	|Nízka
|9|	Gear Puzzles	|€20-50	|Stredná	|Stredná-Vysoká
|10|Sliding Block (Klotski)	|€15-35	|Stredná	|Stredná

Cenové rozpätie je veľmi široké, keďže produkty s vyššou komplexitou (3D mechanické, väčšie skladačky, prémiové značky) stoja výrazne viac. Cenové údaje sú skôr orientačné na zákalde momentálne dostupných údajov, tie sa môžu sa líšiť podľa predajcu, krajiny, dopravy.

## 3.2 Trendy
#### Hybridné Digitálno-fyzické
- QR kódy na puzzle vedúce k online výzvam  
- AR (Augmented Reality) hints cez aplikáciu  
- Príklad: *"Puzzle with AR instructions"* [3]

#### Dizajn s prihľadnutím na ekológiu
- FSC certifikované drevo  
- Minimal waste dizajn  
- Balenie z recyklovaného materiálu  

#### Personalizácia
- Laser-gravírované mená, logá  
- Custom difficulty levels  

#### Escape Room Props
- Puzzle komponenty pre escape rooms  
- B2B trh - predaj prevádzkovateľom
- Vysoké marže

### ZDROJE
[1] Hodson, D. (2010). The Secret opening Japanese Puzzle Box. Self-published.
URL: https://www.karakuri.gr.jp/en/ (Karakuri Creation Group)

[2]Cutler, B. (1978). "The Six-Piece Burr." Journal of Recreational Mathematics, 10(4), 241-250.
Stewart, C. (1999). Puzzle Craft. Self-published.
URL: http://www.johnrausch.com/PuzzlingWorld/chap03.html

[3]"SCRY Puzzle" (2024) - AR-enabled wooden puzzle
URL: https://www.kickstarter.com/discover/categories/puzzles

## 5 Initial Design
# Prvotný návrh skladačiek
Už pri prvotnom návrhu sme si stanovili ako ciel navrhnúť
a nadizajnovať tri rôzne typy skladačiek, ktoré by predstavovali rôznu obtiažnosť návrhu, dizajnu, modelovania a skladania.

Vybrali sme si tak burr puzzle, tiež známy ako prelínajúce sa puzzle. Následne skladačku v tvare kocky a v neposlednom rade tanagram.

## 1. Burr puzzle

Troj dielna skladačka pozostávajúca z dvoch céčkových a jedného dielu pripomínajúceho O.
![ Burr puzzle](../images/photos/burr_puzzle_photo.jpg)
## 2. Cube puzzle
Skladačka zo šiestich rôznych dielikov, do tvaru kocky.
![ cube puzzle](../images/photos/cube_puzzle_photo.jpg)
## 3. Tanagram
Dvojposchodový tanagram s podstavcom.
![ Tanagram puzzle](../images/photos/tanagram_puzzle_photo.jpg)

## 05-Design
# Vizualizácia vytvorených CAD modelov
V tejto časti vizuálne prezentujeme jednotlivé modely,
ktoré boli vytvorené v nástroji one-shape a sú bližšie popísané
v dokumente implementation.md 

## 1. Knot Burr puzzle - Interlocking puzzle - prelínajúce sa puzzle
Na Knot Burr puzzle sme zvolili 3 dielnu skladačku, ktorá sa skladá z
dvoch častí pripomínajúcich písmeno C, na ktoré referujeme ako C-shaped part
a jednej časti pripomínajíucej hranaté O teda O-shaped part.

Ide o pomerné jednoduchú skladačku, ktorá slúžila ako skvelý spôsob ako sa oboznámiť
s pracovnými postupmi a jednotlivými nástrojmi, ktoré One-shape ponúka.

### 1.1 jednoduchá vizualizácia
C-shaped part - screenshot
![ C-shaped part](../images/burr_puzzle/cshaped.png)

O-shaped part - screenshot
![O-shaped part](../images/burr_puzzle/oshaped.png)

Finálna skladačka - assembly
![Finálna skladačka](../images/burr_puzzle/assembly.png)

### 1.2 Nákres dielov
Jednoduchý nákres modelu, v prostredí drawings-studio.
![Nákres](../images/burr_puzzle/burr_drawing.png)

[Pre lepšie zobrazenie si pozrite](../drawings/burr_drawing.pdf)


## 2. Cube puzzle
Skladačka do výsledného objemu, v našom prípade sa jedná o kocku, tá sa
skladá zo 6 rôznych dielov, pričom nemá len jedno správne riešnie. Predstavuje
tak komplexnejšiu skladačku nie len z pohľadu návrhu ale i trénovania logického
myslenia u samotného skladateľa.

Zároveň nám tento typ sladačky pomohol prehĺbiť nadobudnuté znalosti s jednotlivými
nástrojmi.

### 2.1 jednoduchá vizualizácia

Diel 1 - screenshot
![ part1_L](../images/cube_puzzle/part1_L.png)

Diel 2 - screenshot
![ part2_T](../images/cube_puzzle/part2_T.png)

Diel 3 - screenshot
![ part3_rect](../images/cube_puzzle/part3_rect.png)

Diel 4 - screenshot

![ part4_stp](../images/cube_puzzle/part4_stp.png)

Diel 5 - screenshot

![part5_twirl](../images/cube_puzzle/part5_twirl.png)

Diel 6 - screenshot

![ part6_tt](../images/cube_puzzle/part6_tt.png)

Finálna skladačka

![assemblycube](../images/cube_puzzle/assemblycube.png)

### 2.2 Nákres dielov
Jednoduchý nákres modelu, v prostredí drawings-studio.

![Nákres](../images/cube_puzzle/tdrawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/t_drawing.pdf)

![Nákres](../images/cube_puzzle/step_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/step_drawing1.pdf)

![Nákres](../images/cube_puzzle/twirl_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/twirl_drawing.pdf)

![Nákres](../images/cube_puzzle/t_drawing_single.png)
[Pre lepšie zobrazenie si pozrite](../drawings/cubet.pdf)

![Nákres](../images/cube_puzzle/rect_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/cube_point.pdf)

![Nákres](../images/cube_puzzle/l_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/cube_l.pdf)


## 3 Tanagram puzzle
Ako poslednú skladačku sme sa rozhodli namodelovať tanagram,
ktorý sa skladá z podstavca a siedmich častí, ktoré je nutné zložiť do podstavca tak,
aby vyplnili plne vrstvu, na ktorej sa nachádzajú, neprekrývali sa v ramci vrstvy a 
zároveň netrčali vyššie ako sú hrany podstavca. 

Konkrétne skladačkú tvoria nasledovné tvary:
- 2x malý trojuholník 
- 1x stredný trojuholník
- 2x veľký trojuholník
- 1x kosoštvorec 
- 1x štvorec
- 1x podstava

### 3.1 jednoduchá vizualizácia

Trojhoulníkové diely - líšia sa len veľkosťou - screenshot
![ part1_t](../images/tanagram/triangle.png)

Štvorcový diel - screenshot
![ part2_square](../images/tanagram/square.png)

Kosoštvorcový diel - screenshot
![ part3_rhombus](../images/tanagram/rhombus.png)

Podstava - screenshot
![ plate](../images/tanagram/plate.png)

Finálna skladačka
![ assembly_tan](../images/tanagram/assembly_tan.png)

### 3.2 Nákres dielov

Jednoduchý nákres modelu, v prostredí drawings-studio.

![Nákres](../images/tanagram/small_medium_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/small_medium_triangle_drawing.pdf)

![Nákres](../images/tanagram/larget_square_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/larget_square_drawing.pdf)

![Nákres](../images/tanagram/rhombus_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/rhombus_drawing.pdf)

![Nákres](../images/tanagram/plate_drawing.png)
[Pre lepšie zobrazenie si pozrite](../drawings/case_drawing.pdf)

## 06-Implementation
# Modelovanie a implementácia (CAD) – Woodies

V tejto časti popisujeme, ako sme pristúpili k **modelovaniu a implementácii** našich drevených hlavolamov v digitálnej forme. Implementácia v našom kontexte znamená:

- vytvorenie **3D CAD modelov** jednotlivých dielov,
- zostavenie dielov do funkčných **assemblies**,
- vytvorenie **2D výkresov - Drawings**,
- export do **neutrálneho formátu STEP** pre ďalšie spracovanie.

---

## 1. Použitý modelovací nástroj: Onshape

Ako CAD platformu sme zvolili **Onshape**, najmä z dôvodu:
- dostupnosti cez web, bez nutnosti inštalácie s podporou kooperácie pri práci v tíme
- podpory parametrického modelovania,
- možnosti tvorby zostáv- Assemblies, ktorá slúžia ako forma overenia návrhu, či jednotlivé diely do seba
zapadnú a výkresov - Drawings
- jednoduchého exportu do štandardných formátov ako je STEP, PDF a pod.

Onshape sme používali ako *“single source of truth”* pre CAD návrhy – teda primárny zdroj, z ktorého následne generujeme výkresy a exporty.

---

## 2. Prehľad vytvorených hlavolamov

V aktuálnej iterácii projektu sme pripravili tri základné hlavolamy:

### 2.1 Knot Burr puzzle - Interlocking puzzle
- **Typ:** interlocking - prelínajúci sa hlavolam  
- **Charakteristika:** skladá sa z viacerých „prútov“ alebo dielov, ktoré do seba zapadajú pomocou zárezov.  
- **Dôvod výberu:** burr puzzle je populárny, vhodný pre CNC a zároveň dobre demonštruje potrebu správnych tolerancií a montážneho poradia.

**Poznámka k štruktúre:**  
Knot burr puzzle má typicky viac samostatných častí, niektoré varianty aj 6+, pričom jednotlivé diely môžu byť:
- identické - rovnaký diel opakovaný viackrát,
- alebo podobné, no s rozdielnymi zárezmi/pozíciami.

Z hľadiska dokumentácie je preto dôležité mať jasné pomenovanie dielov.

---

### 2.2 Cube puzzle
- **Typ:** Skladačka do výsledného objemu, v našom prípade sa jedná o kocku  
- **Charakteristika:** skladá sa z dielov, ktoré sa kombinujú do finálneho tvaru.  
- **Dôvod výberu:**  Kocka ako puzzle je dobrá na ukážku:
  - modulárnej tvorby dielov
  - viacerých možných skladacích postupov
  - rôzneho počtu dielov

**Rozdiel oproti burr:**  
Kým burr je často o „kľúčovom diele“ a presnej sekvencii rozoberania, cube puzzle je často viac o:
- priestorovom plánovaní
- kombinatorike
- variabilite skladania


### 2.3 Tangram puzzle
- **Typ:** Geometrická skladačka
- **Charakteristika:**  Pozostáva zo viacer=zch základných dielikov tzv. tans, ktoré sa skladajú do rôznych siluet a tvarov bez prekrývania. V našom návrhu ide o drevenú sadu určenú na presné vyrezanie a následné skladanie v rámci rámčeka, tak aby dieli nepresahovali výšku rámčeka.
- **Dôvod výberu:** Tangram je vhodný doplnok k predchádzajúcim hlavolamom, pretože:
reprezentuje ploché puzzle:
  - iný typ uvažovania než burr/cube,
  - umožňuje jednoduchú výrobu a veľmi dobrú škálovateľnosť - ľahké zmeny veľkosti celej sady
  - ponúka priestor na variabilitu výstupov - mnoho možných výsledných tvarov
  - je vhodný na edukatívne využitie - tvarová predstavivosť, skladanie podľa predlohy

---

## 3. Proces modelovania v Onshape

### 3.1 Modelovanie dielov - Part Studios
Pre každý hlavolam sme najprv vytvorili samostatné diely v **Part Studio**, čo je interface one-shape, určený priamo na modelovanie dielov. Pri modelovaní sme sa snažili dodržiavať základné princípy návrhu pre výrobu:

- jednoduché a čitateľné modely - skice a prvky, ktoré sa dajú upravovať
- konzistentné rozmery, napr. jednotkový rozmer/“modul” pre cube puzzle
- geometrie vhodné pre výrobu - minimalizácia nevyrobiteľných detailov, rozumné prechody

### 3.2 Zostavenie (Assemblies)
Po vymodelovaní dielov sme vytvorili **Assembly**, kde sme overili, že:
- diely do seba pri skladaní logicky zapadajú,
- neobjavujú sa neželané kolízie v základnom zloženom stave,
- vieme definovať “cieľový” výsledný tvar (napr. kocka pri cube puzzle),
- vieme popísať základný montážny postup (čo je dôležité aj pre manuál).

Assemblies v Onshape nám slúžili ako virtuálny ekvivalent “skúšobného skladania” bez fyzickej výroby.

---

## 4. Technické výkresy (Drawings)

Pre kľúčové diely sme pripravili **Drawings** v Onshape, ktoré slúžia ako základ pre výrobnú dokumentáciu a na možnosť prezentácie návrhov pred samotnou výrobou.


### 4.1 Obsah výkresov
Do výkresov sa typicky dopĺňa:
- hlavné rozmery dielu,
- prípadné tolerancie,
- označenie dielu a revízia.


---

## 5. Exporty: STEP súbory

Ako hlavný neutrál pre 3D export sme zvolili **STEP (.step/.stp)**, pretože:
- je široko podporovaný naprieč CAD/CAM nástrojmi,
- je vhodný na odovzdanie podkladov pre CNC prípravu,
- zachováva presnú geometriu na rozdiel od trojuholníkovej siete ako STL.

Pre každý hlavolam sme exportovali:
- **STEP pre jednotlivé diely** na jednoduchšie spracovanie,
- **STEP pre zostavu** pre prehľad finálneho tvaru a kontrolu.

---

## 6. Štruktúra projektu a pripravenosť na ďalšie puzzle

Aby sa projekt dal rozširovať napr. pridať puzzle box, tangram, ring-and-string a pod., navrhujeme udržiavať jednotnú štruktúru artefaktov pre každý hlavolam:

- **CAD (Onshape)**  
  - Part Studios - diely  
  - Assemblies - zostavy  
  - Drawings - výkresy

- **Exporty**  
  - STEP - parts + assembly  
  - PDF výkresy  


Takto vieme do budúcna pridať ďalší hlavolam bez zmeny celého procesu – iba doplníme nový balík súborov.
---

## 7. Záver

Použitím Onshape sme vytvorili konzistentný a rozšíriteľný návrhový proces. Aktuálne máme pripravené dva hlavolamy (knot burr puzzle a cube puzzle) s rozdielnym počtom častí, pričom pre oba existujú:
- 3D CAD modely dielov,
- zostavy (assemblies),
- technické výkresy (drawings),
- exporty do STEP formátu.


## 07-Prototyping
# Prvotné prototypovanie

Po dokončení návrhov v CAD prostredí **Onshape** sme sa rozhodli urobiť aj krátku praktickú verifikáciu formou **jednoduchých fyzických prototypov**. Cieľom nebolo vytvoriť finálny produkt, ale rýchlo a lacno overiť, či náš návrh dáva zmysel z pohľadu:

- základného tvarového riešenia dielov
- skladateľnosti a intuitívnosti skladania
- pochopenia montážnej sekvencie
- identifikácie problémových miest, ktoré v CAD nemusia byť zrejmé

---

## Prečo sme prototypovali až po CAD návrhu
Najskôr sme návrhy spracovali digitálne modely dielov a assemblies. Prototypovanie následne slúžilo ako doplnkový krok, ktorý nám umožnil konfrontovať „ideálny“ CAD návrh s realitou manipulácie a skladania.

Tento postup bol výhodný, pretože:
- v CAD sme vedeli rýchlo iterovať geometriu
- v assembly sme vedeli overiť základné kolízie
- prototyp nám ukázal praktické aspekty skladania - ergonómia, poradie krokov

---

## Použitý materiál: kartón

Prototypy sme vytvorili z **kartónu**, keďže ide o materiál, ktorý je:
- **jednoducho dostupný**
- **nízkonákladový**
- **rýchlo spracovateľný** bez špeciálnych nástrojov
- vhodný na rýchle „proof of concept“ overenie tvarov

Kartónové prototypy sme teda použili ako **rýchlu a lacnú verziu prototypovania**, ktorá nám umožnila spraviť prvú spätnú väzbu na návrh bez toho, aby sme museli riešiť drevo, CNC alebo presné tolerancie.

---

## Čo nám prototypovanie ukázalo
Prototypovanie z kartónu nám pomohlo:
- lepšie pochopiť, či je návrh skladateľný aj mimo CAD prostredia
- potvrdiť, že náš návrhový proces - CAD → assembly → dokumentácia má zmysel.

Zároveň sa ukázalo, že aj keď kartón umožní rýchlo overiť geometriu, **nedokáže plnohodnotne simulovať správanie dreva** - trenie, pevnosť, presnosť spojov.

---

## Ako by sme pokračovali
Na základe toho, že sme návrhy overili aspoň na jednoduchých prototypoch, ďalší logický krok by bol:

- prejsť na výrobu dielov z dreva
- doladiť tolerancie podľa reálneho správania materiálu
- spraviť finálne prototypy a iterovať návrh

Týmto smerom sa však náš projekt už nezaoberal, keďže našim cieľom bolo ukončiť prácu vo fáze **návrhu a digitálnej dokumentácie**, pripravenej
na ďalšie spracovanie.

## Jednoduché prototypy

### Tanagram puzzle
![ Tanagram puzzle](../images/photos/prototypes/tanagram_base_prototype.jpg)

![ Tanagram puzzle](../images/photos/prototypes/tanagram_prototype.jpg)

![ Tanagram puzzle](../images/photos/prototypes/tanagram_assembly_prototype.jpg)

### Burr puzzle
![ Burr puzzle](../images/photos/prototypes/burr_puzzle_prototype.jpg)

### Cube puzzle
![ Cube puzzle](../images/photos/prototypes/cube_prototype.jpg)

![ Cube puzzle](../images/photos/prototypes/cube_prototype_assembly.jpg)

