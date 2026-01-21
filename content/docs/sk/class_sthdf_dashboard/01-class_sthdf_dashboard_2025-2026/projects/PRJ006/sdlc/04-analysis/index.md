---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.926303+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "6def0c10-3e00-4567-8a3d-96d6f56d83f1"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "04 analysis"

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

# 04-Analysis
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

a.) Burr puzzles [2]

Klasické prelamovacie hlavolamy zložené z viacerých (zvyčajne šiestich až dvanástich) drevenných prútov, ktoré sú do seba vzájomne prepletené tak, že vytvárajú jeden kompaktný celok. Najznámejším variantom je „Six-Piece Burr“, ktorý vznikol v 18. storočí a dodnes patrí medzi najpopulárnejšie mechanické skladačky. Úlohou riešiteľa je rozobrať a následne opäť zložiť hlavolam, pričom niektoré verzie majú tisíce možných variácií a vyžadujú vysokú dávku trpezlivosti a priestorového uvažovania. Náročnosť týchto puzzle sa pohybuje od strednej až po veľmi ťažkú.

b.) 3D assembly puzzle 

Predstavujú trojrozmerné skladačky, ktoré sa skladájú z nepravidelných dielikov tvoriacich určitý tvar – najčastejšie kocku alebo iný geometrický objekt. Typickým príkladom je Soma Cube, ktorú v roku 1933 vymyslel dánsky vedec Piet Hein. Hlavolam sa skladá zo siedmich dielikov, z ktorých treba poskladať kocku s rozmermi 3×3×3. Okrem zábavnej stránky majú tieto puzzle aj vzdelávací rozmer, pretože rozvíjajú priestorovú predstavivosť a logické myslenie.

c.) Pyramid puzzles 

Trojrozmerné hlavolamy v tvare pyramídy, teda s tetrahedrálnou štruktúrou. Hoci sú menej rozšírené než klasické kockové hlavolamy, zaujmú svojím netradičným tvarom a vizuálnym efektom. Úlohou býva správne zostaviť alebo rozobrať jednotlivé diely pyramídy, čo si vyžaduje precízne uvažovanie o priestorových vzťahoch medzi dielikmi.


## 2.3  Disentanglement puzzles (uvoľňovacie hlavolamy)

Hlavolamy, kde je cieľom **uvoľniť alebo oddeliť** časť bez násilia.
- Môžu byť z kombinácie dreva a šnúrky alebo kovu.  
- Príklad: **Lanové alebo krúžkové hlavolamy**

a.) Horseshoe puzzles (podkovové hlavolamy) 

Pozostávajú z dvoch podkôv spojených reťazou alebo krúžkom. Úlohou je uvoľniť kovový (alebo drevený) krúžok z medzi podkôv, čo vyžaduje presné manipulovanie a pochopenie geometrie pohybu.

b.) Ring and string puzzles 

Kombinujú drevené časti, šnúrky a krúžky. Cieľom býva dostať krúžok cez spleť uzlov, otvorov a slučiek. Hoci vyzerajú jednoducho, často ide o veľmi záludné logické úlohy, ktoré testujú trpezlivosť a priestorovú predstavivosť.

c.) Cast puzzles (liate alebo kovové hlavolamy) 

Majú aj drevenné varianty, pri ktorých je potrebné oddeliť prepojené časti alebo ich znovu spojiť. Základom je pochopiť mechanizmus spojenia – niekedy ide o skrutkovanie, posúvanie alebo pretáčanie dielikov v správnom poradí.

## 2.4 Assembly puzzles (skladačky)

Úlohou je **zostaviť jednotlivé kúsky** do určitého tvaru alebo obrázka.
- Príklad: **Tangram**, **Pentomino**, alebo geometrické skladačky  
- Rozvíjajú priestorovú predstavivosť a logické myslenie.

a.) Tangram 

Staroveká čínska geometrická skladačka pozostávajúca zo siedmich plochých dielikov (tzv. tans): piatich trojuholníkov rôznych veľkostí, jedného štvorca a jedného rovnobežníka. Cieľom je z týchto dielikov vytvoriť rôzne tvary – zvieratá, postavy, písmená či abstraktné obrazy – bez toho, aby sa dieliky prekrývali. Tangram rozvíja predstavivosť, logické myslenie a schopnosť vnímať tvary a proporcie.

b.) Pentomino 

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

- [Backlog a analýzy](./backlog.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
