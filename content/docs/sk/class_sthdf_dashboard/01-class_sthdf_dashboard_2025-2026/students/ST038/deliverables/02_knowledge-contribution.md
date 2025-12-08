---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-24T15:50:07.128943+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "29f89c29-5401-49e4-a771-6654d0b17417"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "sthdf"

# Názov zápisu – dopĺňa používateľ
title: "2025_ST_038 – TShirt Print System – Knowledge Contribution"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "Návrh a princípy webového systému na objednávanie potlače tričiek pre ľudí a malé/stredné podniky."


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Dominik Pallo"

# Zoznam autorov – generuje skript
authors:
  - "Dominik Pallo"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: "IT / E-commerce"

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: "knowledge-contribution"

# Priorita (low/medium/high) – voliteľné
priority: "medium"

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags:
  - "sthdf"
  - "knife"
  - "web-app"
  - "e-commerce"
  - "tshirt-print"
  - "sme"


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2025-11-24 16:50"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2025-11-24 16:50"

# Stav dokumentu – default "backlog"
status: "backlog"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Dominik Pallo"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Dominik Pallo"


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
origin_author: "Dominik Pallo"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- STHDF_INSTANCE_ID: 2025_ST_038 -->

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis
- **Téma:** TShirt Print System – jednoduchý webový systém na objednávanie potlače tričiek pre ľudí a malé/stredné podniky.  
- **Prečo je dôležitá:**  
  - Malé firmy, kluby a tvorcovia merchu často riešia objednávky cez chaty, e-maily a Excel – čo je chaotické, ťažko dohľadateľné a neškáluje.  
  - Cieľom je mať **jedno miesto**, kde zákazník pohodlne objedná tričko a predávajúci má **prehľad o objednávkach, faktúrach a zákazníkoch**.  

---

## 🎯 Čo rieši (účel, cieľ)

- **Pre zákazníka:**
  - Jednoduchý výber trička (typ, veľkosť, farba, dizajn).
  - Jasný objednávkový proces (bez e-mailovej ping-pong komunikácie).
  - Transparentná cena a prehľad stavu objednávky.

- **Pre predávajúceho (tvorcu merchu / malý podnik):**
  - Centralizovaný prehľad všetkých objednávok na jednom mieste.
  - Napojenie na fakturáciu (prehľad faktúr, export do účtovníctva / PDF).
  - Základný prehľad o zákazníkoch (história objednávok, najpredávanejšie produkty).
  - Menej manuálnej administratívy, viac času na tvorbu a biznis.

- **Hlavný cieľ:**  
  Vytvoriť **ľahko použiteľný „mini e-shop“ špecificky pre merch a potlač tričiek**, ktorý je zrozumiteľný pre bežného človeka aj pre malé/stredné podniky bez vlastného IT oddelenia.

---

## 🧩 Ako to rieši (princíp)

- **Dve základné role:**
  - `Customer` – koncový používateľ, ktorý si vyberá a objednáva tričká.
  - `Seller` / `Admin` – prevádzkovateľ systému, ktorý spravuje produkty, objednávky a faktúry.

- **Kľúčové moduly:**
  1. **Katalóg produktov:**  
     - Typy tričiek (pánske, dámske, unisex, kids).  
     - Varianty (veľkosť, farba, prípadne typ materiálu).  
     - Priestor pre vizualizáciu dizajnu (náhľad potlače).
  2. **Objednávkový proces (checkout):**  
     - Košík, rekapitulácia, kontaktné údaje, spôsob platby/dodania.  
     - Potvrdenie objednávky (e-mail / prehľad v systéme).
  3. **Backoffice pre predávajúceho:**  
     - Zoznam objednávok (filter podľa stavu – nové, zaplatené, odoslané, stornované).  
     - Základná správa faktúr (generovanie údajov, export, prepojenie na objednávku).  
     - Jednoduchá štatistika (počet objednávok, celkové tržby, top produkty).

- **Princíp návrhu:**
  - **Modulárny systém** – každý blok (katalóg, objednávky, faktúry) sa dá ďalej rozširovať.  
  - **Jednoduché UI** – radšej menej funkcií, ale použiteľných, ako komplexný ERP.  
  - Pripravenosť na **napojenie na externé služby** (platobná brána, sklad, účtovný systém).

---

## 🧪 Ako to použiť (aplikácia)

Príklady scenárov:

- **Malá kaviareň / lokálny brand:**  
  - Predaj vlastných tričiek s logom kaviarne.  
  - Kaviareň si nepotrebuje riešiť plnohodnotný e-shop – stačí jednoduchý systém, kde zákazníci z Instagramu prekliknú na objednávkovú stránku.

- **Športový klub / tréner:**  
  - Merch pre členov (tričičká, mikiny, dresy).  
  - Tréner vidí, kto si čo objednal, a vie jednoducho vygenerovať podklady pre výrobu a fakturáciu.

- **Študentská komunita / event:**  
  - Objednávky tričiek pre účastníkov akcie.  
  - Namiesto zbierania veľkostí v Google Forme a ručného prepisovania je všetko v jednom systéme.

---

## ⚡ Rýchly návod (Top)

1. **Ako zákazník:**
   - Vyberiem si tričko (typ, veľkosť, farbu, dizajn).
   - Pridám do košíka a vyplním údaje.
   - Potvrdím objednávku a sledujem stav (napr. „prijatá“, „vo výrobe“, „odoslaná“).

2. **Ako predávajúci:**
   - Prihlásim sa do administrácie.
   - V sekcii „Objednávky“ vidím nové objednávky – môžem meniť ich stav.
   - V sekcii „Faktúry“ vygenerujem faktúru alebo exportujem údaje.
   - Podľa potreby dopĺňam nové produkty / varianty tričiek.

---

## 📜 Detailný článok

### 1. Problém: chaos v objednávkach a faktúrach
Mnoho malých značiek a tvorcov merchu rieši objednávky cez DM na Instagrame, Messenger, e-mail či formuláre.  
Výsledok:
- neprehľadná komunikácia,
- duplicitné alebo chýbajúce informácie,
- ručné prepisovanie údajov do faktúr,
- žiadny prehľad o histórii zákazníkov.

### 2. Koncept riešenia: špecializovaný mini e-shop
Namiesto generického e-shopu vzniká **špecializovaný systém pre tričká**:
- jednoduchý katalóg,
- minimum krokov pri objednávke,
- prepojenie objednávky ↔ faktúry ↔ zákazníka.

### 3. Architektonický pohľad (high-level)
- **Frontend:** webová aplikácia pre zákazníkov + jednoduchý admin pre predávajúceho.
- **Backend API:** správa produktov, objednávok, používateľov, faktúr.
- **Databáza:** tabuľky pre produkty, varianty, objednávky, položky objednávok, zákazníkov, faktúry.
- **Integrácie (budúcnosť):** platobná brána, externý fakturačný systém, export do CSV.

### 4. UX princípy
- Jednoduchá navigácia: _Vyber tričko → Vyplň údaje → Potvrď_.  
- Žiadne zbytočné polia (len to, čo je nutné na výrobu a doručenie).  
- Zrozumiteľné stavy objednávok (bez „IT slovníka“).  

---

## 💡 Tipy a poznámky

- **Začni jednoduchým MVP:**  
  Najskôr len tričká, pár variantov, manuálna fakturácia – postupne pridávať automatizáciu podľa reálnych potrieb.
- **Nehraj sa na všeobecný e-shop:**  
  Čím špecializovanejší flow pre tričká, tým lepšia použiteľnosť pre cieľovú skupinu.
- **Mysli na škálovanie:**  
  Už pri návrhu dátového modelu myslieť na to, že neskôr môže pribudnúť: mikina, doplnky, iné typy merchu.
- **Prepojenie s realitou:**  
  Vývoj konzultovať s reálnymi používateľmi (napr. malé značky, ktoré už dnes predávajú merch).

---

## ✅ Hodnota / Zhrnutie

- TShirt Print System rieši **konkrétny problém** malých značiek, klubov a tvorcov – chaos v objednávkach a faktúrach.
- Prináša **jedno miesto**, kde sú produkty, objednávky, zákazníci a faktúry prepojené.
- Je navrhnutý tak, aby bol:
  - jednoduchý na používanie,
  - rozšíriteľný z technického pohľadu,
  - použiteľný aj mimo školského prostredia (reálny produktový základ).

---

## 🗂️ Taxonómia KNIFE

- **Kategória:** IT, E-commerce, Startup  
- **Typ:** návod + prípadová štúdia (knowledge contribution z reálneho projektu)  
- **Tagy:** tshirt-print, web-app, e-commerce, sme, sthdf, knife  

---

## 🌍 Referencie

- Vlastné skúsenosti z práce na projekte TShirt Print System.  
- Pozorovanie procesov malých značiek a tvorcov merchu (komunikácia cez chaty, e-maily, formuláre).  
- Inšpirácia štruktúrou klasických e-shopov, ale zjednodušená na use-case merch/tričká.  

---

## Navigácia
- [↩️ Späť](../index.md)
