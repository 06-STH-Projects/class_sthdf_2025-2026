---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: '1.0.1'

# Dátum buildu – generuje skript
fm_build: '2025-11-28T15:54:47.911159+00:00'

# Poznámka k verzii – voliteľné
fm_version_comment: ''

# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: '7f85b3fa-afdd-4c21-979b-c5dff3152cca'

# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: 'class_sthdf_dashboard'

# Názov zápisu – dopĺňa používateľ
title: '01 business'

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

# 01-Business

## Popis projektu SIGNALIS

**ID projektu:** 2025_PRJ_008
**Názov projektu:** SIGNALIS

SIGNALIS je systém určený na komunikáciu, zber a vizualizáciu údajov z raketových letov. Produkt sa skladá z dvoch hlavných komponentov:

- **IRIS** – palubný komponent umiestnený v rakete, ktorý zaznamenáva a spracúva telemetrické údaje zo senzorov (výška, teplota, tlak, orientácia, GPS pozícia a ďalšie fyzikálne veličiny)
- **HERMES** – základná stanica, ktorá tieto telemetrické dáta prijíma bezdrôtovou LoRa komunikáciou a umožňuje ich real-time vizualizáciu a ďalšiu analýzu

## Motivácia

Začínajúci raketoví modelári si často vopred navrhnú raketu a vypočítajú jej letovú dráhu. Na overenie týchto výpočtov alebo na podrobnejšiu analýzu skutočných letov sa používajú pokročilé meracie zariadenia.

Tieto systémy sú však pomerne drahé (napr. okolo 500 €) a pre začínajúcich modelárov predstavujú značné finančné riziko. V prípade neúspešného letu môže dôjsť k strate zariadenia, čo môže viesť k výraznému finančnému zaťaženiu a odradeniu od ďalšieho experimentovania.

Práve preto prichádzame s riešením v podobe rádovo lacnejšej a dostupnejšej alternatívy, ktorá umožní aj začínajúcim nadšencom bezpečne testovať a analyzovať lety ich rakiet. Dodatočne, vďaka pokročilým senzorom, ktoré naše riešenie ponúka, môže byť systém využitý aj na meranie atmosférického tlaku, teploty a ďalších fyzikálnych veličín.

Tento projekt sme si vybrali, nakoľko nás zaujíma tematika modelových rakiet a jej prepojenie s modernými informačnými systémami. Zároveň vnímame, že súčasný trh s elektronikou pre tieto zariadenia je výrazne predražený, a naším cieľom je túto medzeru zaplniť.

## Cieľ a pridaná hodnota

Finálnym cieľom projektu je vytvorenie dvoch plne funkčných komponentov (IRIS a HERMES), ktoré budú schopné spoľahlivo zaznamenávať potrebné údaje a komunikovať medzi sebou na vzdialenosť minimálne 2 km.

**Pridaná hodnota:**

- **Nízka cena** v porovnaní s existujúcimi komerčnými riešeniami (500€+)
- **Otvorenosť** a možnosť ďalšieho rozširovania
- **Edukatívny prínos** pre začínajúcich raketových modelárov
- **Prístup k detailným letovým dátam** bez vysokých vstupných nákladov
- **Možnosť experimentovania** s modernými senzormi a bezdrôtovou komunikáciou

## Zákazník a hodnoty

**Cieľoví zákazníci:**

- Raketoví modelári
- Študenti technických odborov
- Technologickí nadšenci s záujmom o elektroniku a senzoriku

**Hodnota pre zákazníka:**

- Dostupnosť a nízka cena
- Spoľahlivosť merania
- Modularita systému
- Možnosť ďalšieho vývoja podľa individuálnych potrieb
- Vzdelávacie využitie v oblasti elektroniky, senzoriky a bezdrôtovej komunikácie

## Tímová štruktúra

**ARC Team** – zohratý tím študentov FIIT STU s bohatými skúsenosťami so spoločnou prácou na rôznych projektoch.

| ID          | Meno             | Pozícia                                                             | Kontakt                                                                                 |
| ----------- | ---------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 2025_ST_015 | Adam Hladík      | LoRa, rádio komunikácia, vedúci developer                           | [GitHub](https://github.com/Hladikes), [Email](mailto:adi.hladik@gmail.com)             |
| 2025_ST_033 | Dominik Mifkovič | Board prototyper, PCB dizajnér, dátový analytik                     | [GitHub](https://github.com/dominikmifkovic), [Email](mailto:dominikmifkovic@gmail.com) |
| 2025_ST_044 | Ján Sližik       | Softvérový inžinier, marketing, EA expert                           | [GitHub](https://github.com/Mushishy), [Email](mailto:xslizik@stuba.sk)                 |
| 2025_ST_053 | UR               | Tímový vedúci, projektový manažér, mechanický inžinier, CAD modelár |

## Projektový plán a míľniky

**Odhadovaný čas na prácu:** priemerne 14 hodín týždenne na každého člena tímu

**Hlavné míľniky:**

- **M01 (5.10.2025)** – Príprava a infrastructure setup ✅
- **M02 (30.10.2025)** – Individuálne "About Me" prezentácie ✅
- **M03 (27.11.2025)** – Projektový súhrn a prezentácia ✅
- **M04 (18.12.2025)** – Aktualizácia stavu projektu ✅
- **Finálna prezentácia (január 2026)** ✅

**Predpokladaný stav v čase prezentácie MVP:** funkčný produkt ✅

## Očakávané výstupy

- Dokumentácia v podobe KNIFE článkov
- Popisy výrobných procesov (PCB dizajn, 3D tlač, CNC frézovanie)
- Popisy vzniknutých problémov a ich riešení
- Enterprise Architect diagramy (stavové automaty, deployment diagramy)
- Komponent IRIS (vrátane PCB, 3D tlačených komponentov a softvéru)
- Komponent HERMES (vrátane PCB, 3D tlačených komponentov a softvéru)

## Riziká a závislosti

**Identifikované riziká:**

- **Príliš ambiciózny rozsah projektu** – Mitigácia: iteratívny vývojový proces, MVP prístup
- **Dlhé dodacie lehoty komponentov** (objednávky zo zahraničia, Čína) – Mitigácia: skoré objednávanie, paralelný vývoj
- **Závislosť na hardvérovom vybavení** (spájkovačky, 3D tlačiarne, frézy) – Mitigácia: pravidelné stretnutia u člena tímu s vybavením (približne každý týždeň)

## Odkazy

- [Business poznámky](./notes.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
