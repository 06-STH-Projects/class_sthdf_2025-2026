---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.039752+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "01a481f4-c146-4ae2-b78f-9f262988c627"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "test report"

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

PRJ021 / 07-testing-verification / test-report.md

# 07 – Testing & Verification (Test report & QA výstupy)

## Cieľ testovania
Cieľom testovania bolo overiť funkčnosť zariadenia Smart TV Box v reálnych podmienkach používania, najmä na televízoroch, ktoré nepodporujú Smart TV funkcionalitu. Testovanie sa zameriavalo na kompatibilitu, stabilitu systému Android TV a používateľský komfort.

## Testovacie prostredie
Zariadenie bolo testované na viacerých typoch starších televízorov rôznych výrobcov, ktoré disponujú HDMI vstupom, ale nemajú vlastný Smart TV operačný systém.  
Pripojenie k internetu bolo realizované výhradne pomocou káblového pripojenia cez rozhranie **RJ-45 (Ethernet)**, aby bola zabezpečená stabilita siete počas testovania.

![Android TV](../../images/android_tv.jpg)

## Scenáre testovania
Počas testovania boli vykonané nasledovné scenáre:
- spustenie zariadenia a boot operačného systému Android TV,
- inicializácia obrazu a zvuku po pripojení k televízoru,
- test funkčnosti sieťového pripojenia cez RJ-45,
- inštalácia a spustenie multimediálnych aplikácií,
- dlhodobejšie prehrávanie obsahu.

## Testované aplikácie
Funkčnosť zariadenia bola overená najmä pomocou bežne používaných streamovacích služieb:
- **YouTube** – prehrávanie videí v rôznych rozlíšeniach,
- **Netflix** – prehrávanie filmov a seriálov po prihlásení do používateľského účtu.

Aplikácie sa spúšťali korektne, bez pádov a bez viditeľného oneskorenia používateľského rozhrania.

## Výsledky testovania
- Zariadenie bolo úspešne rozpoznané všetkými testovanými televízormi.
- Obraz aj zvuk boli prenášané bez chýb cez HDMI rozhranie.
- Sieťové pripojenie cez RJ-45 bolo stabilné počas celého testovania.
- Multimediálne aplikácie fungovali spoľahlivo a bez výpadkov.
- Počas testovania nebolo zaznamenané prehrievanie zariadenia.

## Záver testovania
Na základe vykonaných testov je možné uvažovať, že Smart TV Box spĺňa požadované funkčné a kvalitatívne kritériá. Zariadenie je vhodné na bežné domáce používanie ako náhrada Smart TV funkcionality pre staršie televízory a spĺňa očakávania definované v návrhovej fáze projektu.