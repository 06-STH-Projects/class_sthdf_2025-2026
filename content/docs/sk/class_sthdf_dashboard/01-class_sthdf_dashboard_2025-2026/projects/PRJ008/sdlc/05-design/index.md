---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: '1.0.1'

# Dátum buildu – generuje skript
fm_build: '2025-11-28T15:54:47.912177+00:00'

# Poznámka k verzii – voliteľné
fm_version_comment: ''

# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: 'cf0a1d80-6055-4c55-a303-efef3d4827f7'

# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: 'class_sthdf_dashboard'

# Názov zápisu – dopĺňa používateľ
title: '05 design'

# Krátky popis – dopĺňa používateľ (voliteľné)
description: '{{DESCRIPTION}}'

# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: 'Roman Kazicka'

# Zoznam autorov – generuje skript
authors:
  - 'Roman Kazicka'

# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ''

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: ''

# Priorita (low/medium/high) – voliteľné
priority: ''

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: []

# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: 'sk'

# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: '2025-11-28 16:54'

# Dátum poslednej úpravy – dopĺňa človek
modified: '2025-11-28 16:54'

# Stav dokumentu – default "backlog"
status: 'backlog'

# Viditeľnosť – default "public"
privacy: 'public'

# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: 'Roman Kazicka'

# Systémový vlastník práv
rights_holder_system: 'CAA / KNIFE / LetItGrow'

# Licencia
license: 'CC-BY-NC-SA-4.0'

# Disclaimer
disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.'

# Copyright
copyright: '© 2025 Roman Kazicka'

# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ''

# URL pôvodného repozitára
origin_repo_url: ''

# Commit pôvodu
origin_commit: ''

# Branch pôvodu
origin_branch: ''

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: 'CAA'

# Pôvodný autor
origin_author: 'Roman Kazicka'

# Importovaný zdroj
origin_imported_from: ''

# Dátum importu
origin_import_date: ''

# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ''
fm_reserved2: ''
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

# 05-Design

## Iteratívny dizajnový proces

Fáza dizajnu projektu SIGNALIS zahŕňala viacnásobné iterácie PCB dosiek a 3D mechanických návrhov pre oba komponenty (HERMES aj IRIS). Proces bol charakteristický rýchlym prototypovaním, testovaním a zlepšovaním na základe získaných poznatkov.

## HERMES - PCB dizajn

### Iterácia 1: CNC prototyp

Na základe prvotných konceptov bola vytvorená prvá PCB verzia HERMES komponentu. PCB bola navrhnutá pre uľahčenie tvorby ďalších prototypov, nakoľko pre efektívne testovanie musel každý člen mať svoj vlastný komponent. Manuálne káblovanie sa ukázalo ako časovo náročné a vo veľkom množstve nerealizovateľné.

**Návrh v KiCad:**

![PCB Layout v1](../../report-images/prog-update1-hermes/pcb-layout.png)

**Prehľad dosky:**

![PCB Preview 1](../../report-images/prog-update1-hermes/pcb-preview1.png)

![PCB Preview 2](../../report-images/prog-update1-hermes/pcb-preview2.png)

**Charakteristika:**

- Jednovrstvová doska
- Jednoduchá konštrukcia pre ľahkú výrobu
- Nízka cena
- Výroba na CNC fréze (bez outsourcingu)

**Výrobný proces:**

Programovanie CNC frézy:

![CNC programovanie](../../report-images/prog-update1-hermes/cnc-program-static.png)

**Vykonávané operácie:**

1. **Vyrezávanie vodivých ciest** (traces) - odstránenie medenej vrstvy
2. **Vŕtanie dier** - pre montážne otvory a súčiastky
3. **Vyrezávanie obrysu** - oddelenie dosky z FR-4 materiálu

**Výsledná doska:**

![Vyrobená PCB](../../report-images/prog-update1-hermes/pcb-self-produced1.png)

![Osadená PCB](../../report-images/prog-update1-hermes/pcb-self-produced-assembled.png)

**Zhodnotenie:**
Samotná doska fungovala veľmi dobre. Produkčná kvalita zaostávala za profesionálnou výrobou, ale pre momentálne účely bola viac ako dostatočná.

### Iterácia 2: Vylepšená CNC doska s Solder Mask a Silkscreen

Doska z iterácie 1 bola v priebehu týždňa testovaná a používaná. Ukázali sa nasledujúce nedostatky:

**Identifikované problémy:**

- **Nedostatočná šírka spojov** (traces) → spôsobovala úbytok napätia a prehrievanie medených vodičov
- **Chyba v rozmeroch dier** → 4mm namiesto 2mm (zadaný polomer namiesto priemeru)

**Vylepšenia:**

Rozšírenie vodivých spojov:

![PCB Layout v2](../../report-images/prog-update2-hermes/pcb-layout.png)

![PCB Preview v2](../../report-images/prog-update2-hermes/pcb-preview1.png)

**Aplikácia Solder Mask:**

Proces:

1. Nanesenie tenkej vrstvy živice na dosku
2. Vytvrdenie UV lampou

![Živica pred vytvrdzovaním](../../report-images/prog-update2-hermes/pcb-zivica.png)

![UV vytvrdzovanie](../../report-images/prog-update2-hermes/pcb-curing.png)

3. Vyrezanie živice z kontaktných plôšok pomocou "pružne uloženej V frézy" (spring loaded V bit)

**Aplikácia Silkscreen:**

Proces:

1. Nanesenie živice na dosku
2. Selektívne vytvrdzovanie laserom na vytvorenie tvarov a textu
3. Zotretie zvyšku živice alkoholovými utierkami

![Silkscreen aplikácia](../../report-images/prog-update2-hermes/pcb-silkscreen.png)

**Finálna doska v2:**

![Dokončená PCB v2](../../report-images/prog-update2-hermes/pcb-final.png)

**Problémy:**

- Pri šmirgľovaní bola omylom odstránená medená vrstva z niektorých pinov → riešené manuálnym prepojením káblikmi
- Nerovnomerná hrúbka silkscreenu → nerovnomerné vytvrdzovanie

**Záver:**
Vývoj dosky dosiahol svoj cieľ – otestovať funkcionalitu s možnosťou rýchleho prototypovania a iterovania. Doska bola poslednýkrát aktualizovaná (posunutie pozícií komponentov na zmenšenie rozmerov) a odoslaná na profesionálnu výrobu.

![PCB odoslaná do výroby](../../report-images/prog-update2-hermes/pcb-ordered.png)

### Iterácia 3 a 4: Profesionálna výroba

V rámci finalizácie komponentu HERMES bola vyvinutá druhá hlavná (celkovo štvrtá) revízia plošnej dosky.

**Schéma a návrh:**

![Schéma v4](../../report-images/prog-update5-hermes/v4-schema.png)

![PCB Front v4](../../report-images/prog-update5-hermes/pcbfront.png)

![PCB Back v4](../../report-images/prog-update5-hermes/pcbback.png)

**Profesionálne vyrobená doska:**

![Skutočná doska - predná strana](../../report-images/prog-update5-hermes/actualfront.jpg)

![Skutočná doska - zadná strana](../../report-images/prog-update5-hermes/actualback.jpg)

**Vylepšenia v tejto revízii:**

- Oddelenie analógových a digitálnych signálov
- Pridanie obvodu na meranie napätia batérie
- Pridanie obvodu regulácie napätia
- Oprava ďalších drobných nedostatkov

**Osadenie SMD komponentov:**

![Osadená doska 1](../../report-images/prog-update5-hermes/soldered1.png)

![Osadená doska 2](../../report-images/prog-update5-hermes/soldered2.png)

Na spájkovanie SMD komponentov bolo použité **spájkovanie pomocou horúceho vzduchu** (hot air reflow), čo bolo pre mnohých členov tímu prvou možnosťou si túto techniku vyskúšať v reálnom projekte.

## HERMES - 3D mechanický dizajn

### Prvotný návrh (v1)

Keďže už bolo k dispozícii osadenie plošnej dosky a jej konkrétne rozmery, začal sa v CAD softvéri **Autodesk Fusion** modelovať základný 3D model komponentu.

**Návrh v1:**

![3D model v1 - pohľad 1](../../report-images/prog-update3-hermes/hermes_v1-1.png)

![3D model v1 - pohľad 2](../../report-images/prog-update3-hermes/hermes_v1-2.png)

![3D model v1 - pohľad 3](../../report-images/prog-update3-hermes/hermes_v1-3.png)

**Výrobná technika:**

- FDM 3D tlač na tlačiarni **BambuLab P1S**
- Materiál: **PETG**

**Vytlačený prototyp v1:**

![Vytlačený v1](../../report-images/prog-update3-hermes/printed_initial.png)

![Problémy v1 - detail 1](../../report-images/prog-update3-hermes/printed_initial_bad1.png)

![Problémy v1 - detail 2](../../report-images/prog-update3-hermes/printed_initial_bad2.png)

**Identifikované problémy:**

- **Veľké množstvo supports** (podpier) → ťažko odstrániteľné, zanechali viditeľné stopy
- **Zlé umiestnenie textu** na stranách → deformácie pri tlači
- **Zbytočne veľké rozmery** → 85×100×45 mm

**Záver v1:**
Ako prvotný prototyp na overenie dimenzií poslúžil fajn, ale bolo potrebné navrhnúť niečo lepšie.

### Finálny návrh (v2)

Po viacerých prototypoch (metóda pokus-omyl) bol vyvinutý finálny optimalizovaný návrh.

**Návrh v2:**

![3D model v2 - pohľad 1](../../report-images/prog-update3-hermes/hermes_v2-1.PNG)

![3D model v2 - pohľad 2](../../report-images/prog-update3-hermes/hermes_v2-2.PNG)

![3D model v2 - pohľad 3](../../report-images/prog-update3-hermes/hermes_v2-3.PNG)

![3D model v2 - pohľad 4](../../report-images/prog-update3-hermes/hermes_v2-4.PNG)

**Vylepšenia:**

- **Menšie rozmery:** 91×84×35 mm (oproti 85×100×45 mm)
- **Ľahko tlačiteľný bez podpor** → žiadne supports potrebné
- **Optimalizovaný pre FDM tlač**
- **Ľahko reprodukovateľný** na hocijakej 3D tlačiarni

**Vytlačený finálny prototyp:**

![Finálny prototyp 1](../../report-images/prog-update3-hermes/final1.png)

![Finálny prototyp 2](../../report-images/prog-update3-hermes/final2.png)

![Finálny prototyp 3](../../report-images/prog-update3-hermes/final3.png)

**Zhodnotenie:**
Vďaka podrobnému procesu testovania a iterovania je možné s istotou povedať, že z hľadiska rozmerov všetko sedí podľa očakávaní, prototyp je ľahko reprodukovateľný a plošná doska je funkčná.

## IRIS - PCB dizajn

### Prvotný koncept: Stacked Layout (zahodnutý)

Prvotný návrh obsahoval horizontálny layout dvoch dosiek umiestnených nad sebou (tzv. **stacked layout**) a prepojených konektormi.

**PCB návrhy:**

![IRIS Top Board](../../report-images/prog-update1-iris/iris-tb.png)

![IRIS Bottom Board](../../report-images/prog-update1-iris/iris-bb.png)

**Testovanie konceptu:**
Pred odoslaním do výroby boli vyfrézované tvary dosiek na overenie layoutu.

![Stacked test 1](../../report-images/prog-update1-iris/stacked1.png)

![Stacked test 2](../../report-images/prog-update1-iris/stacked2.png)

**Problém:**
Koncept fungoval výborne, **ale SMA konektor pre anténu** spôsobil, že sa zostava už **nezmestila do BT-80 trubice** (priemer ~65mm).

![Priestorové testovanie](../../report-images/prog-update1-iris/fit.png)

**Záver:**
Keďže samotné LoRa rádio je veľmi veľké (resp. dlhé), nebolo možné ho efektívne presunúť. Tento prístup nefungoval a bolo potrebné nájsť alternatívne riešenie.

### Finálny dizajn: Vertikálny Layout

Ako alternatíva bol navrhnutý nový návrh PCB dosky s **vertikálnym rozložením**.

**Návrh finálnej dosky:**

![IRIS PCB finálny dizajn - strana 1](../../report-images/prog-update1-iris/iris2.png)

![IRIS PCB finálny dizajn - strana 2](../../report-images/prog-update1-iris/iris1.png)

**Mechanický držiak:**

Počas čakania na dodanie dosiek (približne 3 týždne) bol navrhnutý držiak pre dosku, pomocou ktorého bude doska umiestnená v budúcej rakete.

![3D návrh držiaka IRIS](../../report-images/prog-update1-iris/design.png)

**Overenie finálneho dizajnu:**

Po obdržaní profesionálne vyrobených PCB bol dizajn overený:

![Dodaná IRIS PCB 1](../../report-images/prog-update1-iris/delivered1.jpeg)

![Dodaná IRIS PCB 2](../../report-images/prog-update1-iris/delivered2.jpeg)

**Test priestoru v držiaku:**

![Priestorové testovanie 1](../../report-images/prog-update1-iris/fit1.jpeg)

![Priestorové testovanie 2](../../report-images/prog-update1-iris/fit2.jpeg)

**Výsledok:**
Tento dizajn **spĺňa všetky požiadavky**:

- ✅ Zmestí sa do priestorových obmedzení BT-80 trubice
- ✅ Funguje správne
- ✅ Vertikálne rozloženie vyriešilo problém so SMA konektorom

**Identifikované nedostatky:**

- Chýbajúci obvod na reguláciu vstupného napätia (7.4V → 5V/3.3V)
- Tieto problémy budú vyriešené v ďalšej iterácii

## Finálne zostavenie HERMES

Po obdržaní profesionálnej plošnej dosky bola nainštalovaná do vytlačeného krytu spolu s ostatnými súčiastkami:

![Zostavenie HERMES 1](../../report-images/prog-update5-hermes/assembly1.png)

![Zostavenie HERMES 2](../../report-images/prog-update5-hermes/assembly2.png)

**Komponenty finálnej zostavy:**

- Profesionálne vyrobená PCB (revízia 4)
- 3D tlačený kryt (v2 dizajn)
- Batéria
- Tlačidlo zapnutia/vypnutia
- LoRa anténa
- LED indikátory

## Zhrnutie dizajnovej fázy

**HERMES dizajn:**

- 4 iterácie PCB (2x CNC prototypy, 2x profesionálna výroba)
- 2 iterácie 3D mechaniky (v1 → v2 optimalizácia)
- Finálne rozmery: 91×84×35 mm

**IRIS dizajn:**

- 2 hlavné koncepty (stacked → vertikálny layout)
- 1 profesionálna PCB výroba
- 3D tlačiteľný držiak pre montáž do rakety

**Kľúčové poznatky:**

- Iteratívny proces je kľúčový pre úspech
- Rýchle CNC prototypovanie umožnilo rýchlu validáciu
- Priestorové obmedzenia vyžadujú podrobné testovanie pred finálnou výrobou
- 3D tlač musí brať ohľad na výrobné obmedzenia (supports, orientácia)

## Odkazy

- [Prototypy / dizajn](./prototype.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
