---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.996049+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "1e0bc8ea-1ee3-4c08-b7f8-69eae36abeb4"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "01 business"

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

# 01-Business

- [Business poznámky](./notes.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)

### Názov projektu: Inteligentné monitorovanie včelích úľov pomocou IoT

## Včelie úle kedysi
![Včelí úľ kedysi](../../images/beehive.jpg)

## Včelie úle dnes 
![Včelí úľ dnes](../../images/actual.png)



## Project Summary
Navrhovaný systém slúži na inteligentné monitorovanie stavu včelích úľov prostredníctvom siete IoT senzorov, ktoré priebežne zhromažďujú údaje o vnútorných a vonkajších podmienkach úľa, ako sú teplota, vlhkosť, aktivita včelstva a ďalšie relevantné parametre. Získané dáta sú spracovávané v reálnom čase a následne prezentované používateľovi prostredníctvom prehľadného a interaktívneho používateľského rozhrania.

Súčasťou riešenia je inteligentný notifikačný modul, ktorý na základe analyzovaných meraní automaticky identifikuje neštandardné alebo potenciálne rizikové situácie. V prípade detekcie anomálií systém bezodkladne informuje používateľa, čím umožňuje včasnú reakciu a podporuje efektívnejšiu starostlivosť o včelstvá.
## Základný opis fungovania systému
Systém funguje na princípe kontinuálneho zberu dát z fyzických senzorov umiestnených vo včelích úľoch. Tieto senzory monitorujú vybrané environmentálne a behaviorálne parametre včelstva a odosielajú namerané hodnoty do centrálneho softvérového systému.

Centrálna časť systému zabezpečuje spracovanie, ukladanie a vyhodnocovanie prijatých dát. Používateľ má k dispozícii webové rozhranie, prostredníctvom ktorého môže sledovať aktuálny stav jednotlivých úľov, historický vývoj meraných hodnôt a prehľadné vizualizácie trendov. 

## Projektový tím

- **Členovia:**
    - Adam Grík – Vývoj softvéru
    - Maximilián Strečanský – Vývoj hardvéru
  

## Hlavné ciele projektu

- Navrhnúť a implementovať hardvérové zariadenie pre monitorovanie vybraných parametrov včelích úľov, založené na princípoch internetu vecí (IoT).
- Implementovať, alebo prispôsobiť existujúcu IoT platformu zabezpečujúcu zber, prenos, ukladanie a základné spracovanie dát zo senzorov umiestnených vo včelích úľoch.
- Navrhnúť a implementovať prezentačnú webovú aplikáciu, ktorá umožní používateľovi prehľadné zobrazenie aktuálnych aj historických dát, ako aj sledovanie stavu jednotlivých úľov.

## Zámer projektu a pridaná hodnota
Zámerom projektu je poskytnúť včelárom možnosť kontinuálneho a vzdialeného monitorovania stavu včelích úľov prostredníctvom IoT riešenia. Systém má umožniť včasnú identifikáciu výnimočných stavov včelstva na základe analýzy jeho aktivity a automaticky o nich informovať používateľa.

Navrhované riešenie prispieva k efektívnejšej starostlivosti o včelstvá a k zníženiu rizika chorobnosti včiel prostredníctvom včasného upozornenia na neštandardné situácie. Zároveň znižuje potrebu manuálnych kontrol úľov a zvyšuje dostupnosť relevantných informácií pre včelára aj pri vzdialenom prístupe.

## Rozsah projektu


- **V rozsahu projektu:**
  - Implementácia prototypu hardvérového zariadenia určeného na monitorovanie včelieho úľa.
  - Zber a spracovanie základných monitorovaných hodnôt, konkrétne teploty, vlhkosti a detekcie prevrátenia úľa.
  - Základná integrácia hardvérového zariadenia so softvérovou časťou systému a vizualizácia nameraných dát v prezentačnej aplikácii.
  
- **Mimo rozsahu projektu:**
  - Implementácia produkčného alebo certifikovaného hardvérového riešenia.
  - Monitorovanie rozšírených alebo špecializovaných parametrov včelstva.
  - Testovanie systému v reálnych prevádzkových podmienkach.


