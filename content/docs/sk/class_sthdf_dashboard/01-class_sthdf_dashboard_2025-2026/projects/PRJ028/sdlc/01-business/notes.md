---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.034433+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "5cc97029-12fb-4a99-9b95-628cbcdbef22"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "notes"

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

PRJ028 / 01-business / notes.md

# BUSINESS DOCUMENTATION

## 1. Business Case
Automatické navíjanie bandáží v mnohých oblastiach – šport, medicína, fyzioterapia či výroba. Ručné navíjanie je časovo náročné, nepraktické. Cieľom projektu je vytvoriť kompaktné a spoľahlivé zariadenie, ktoré proces výrazne urýchli a zjednoduší. 

![business process viewpoint](../../images/business_process.png)

## 2. Motivácia a prínos projektu
Projekt prináša používateľom:
- úsporu času,
- pohodlné používanie po tréningu alebo počas práce,
- možnosť komercializácie produktu v budúcnosti.

## 3. Market & Competitor Overview
Športové kluby, fyzioterapeuti, medicínske zariadenia aj logistické prevádzky môžu z tohto produktu priamo profitovať. Automatický navijak im ušetrí čas, zjednoduší prácu a pomôže udržiavať poriadok vo vybavení. Pri väčších objemoch používaných bandáží výrazne znižuje manuálnu záťaž, zrýchľuje prípravu aj upratovanie, a zároveň zabezpečuje rovnomerné, profesionálne navinutie každého kusu.

Aktuálne sa na trhu nachádzajú prevažne jednoduché ručné navíjacie mechanizmy, ktoré sú pomalé a vyžadujú fyzickú námahu. Automatické alebo motorické riešenia sú veľmi obmedzené alebo úplne chýbajú, čo vytvára jasnú trhovú príležitosť pre cenovo dostupný a praktický elektrický navijak.

## 4. Stakeholder Analysis
| Stakeholder | Typ | Očakávania |
|------------|------|-------------|
| Autori projektu | Internal | Dokončenie prototypu, technická realizácia |
| Športovci | End-user | Rýchle a spoľahlivé navíjanie |
| Tréneri a fyzioterapeuti | End-user | Úspora času, organizácia vybavenia |
| Servis/výroba | Operational | Jednoduchá údržba, lacné diely |
| Potenciálni investori | Business | Nízke náklady, trhový potenciál |

## 6. Product Vision Statement
**„Urobiť navíjanie bandáží rýchlym, bezproblémovým a konzistentným pomocou kompaktného elektrického zariadenia.”**

## 7. High-Level Business Requirements
1. Zariadenie musí navinúť bandáž automaticky.
2. Produkt musí byť prenosný a ľahký.
3. Napájanie pomocou batérie.
4. Jednoduché ovládanie (1–2 tlačidlá).
5. Bezpečný mechanizmus pre prsty a textílie.

## 8. Success Metrics / KPIs
- Čas navíjania < 30 sekúnd    
- Výdrž batérie min. 20 navinutí  
- Poruchovosť max. 2 %  
- Spokojnosť používateľov > 8/10  

## 9. Risks & Constraints

### Riziká 
- Rôzne hrúbky bandáží môžu komplikovať proces  
- Mechanické opotrebovanie  
- Potreba bezpečnostných prvkov  

### Obmedzenia
- Obmedzený rozpočet  
- Prototypové materiály a 3D tlač  
- Limitované možnosti výroby  

## 10. Out-of-Scope
- Mobilná aplikácia  
- Automatická detekcia typu bandáže  
- Inteligentné senzory  
- Hromadná výroba  
- Pokročilé UI/UX alebo displeje  