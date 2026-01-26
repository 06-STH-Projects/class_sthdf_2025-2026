---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.946383+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# Unikátne UUID – generuje skript
guid: "98ab3b4e-7f74-4916-877a-590cd19edaff"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "class_sthdf_dashboard"
title: "slides"

description: "Prezentácia projektu zameraného na návrh, realizáciu a prevádzku malého serverového riešenia s dôrazom na efektivitu, automatizáciu a použitie repasovaného hardvéru."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Roman Kazicka"

authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "project"
type: "presentation"
priority: "medium"

tags:
  - sdlc
  - infrastructure
  - automation
  - ansible
  - homelab
  - intermediate


# 🌍 LOCALIZATION -----------------------------------------------------

locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

created: "2025-11-28 16:54"
modified: "2025-11-28 16:54"
status: "backlog"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

origin_system: "CAA"
origin_author: "Roman Kazicka"


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

[🏠 Domov](../../../index.md) · [⬅️ Nahor](../)

# PRJ014 — Presentation

---

## Headline
**2025-PRJ-014-ST_014-ST_014 – Efektívny server z dostupného hardvéru**

> Úvodný obrazok: schéma mini-servera / homelabu (TODO)

Projekt sa zameriava na návrh a realizáciu malého serverového riešenia s dôrazom na **nízke náklady**, **automatizáciu** a **dlhodobú udržateľnosť**. Praktický dôkaz, že aj repasovaný hardvér dokáže poskytovať profesionálne výsledky.

---

## Introduction
**2025-PRJ-014-ST_014-ST_014 – Efektívny server z dostupného hardvéru**

Cieľom projektu je ukázať, že:
- modernú infraštruktúru nie je nutné stavať na drahom novom hardvéri,
- automatizácia (Ansible) výrazne znižuje chybovosť a čas potrebný na správu,
- princípy SDLC sú použiteľné aj pri malých a osobných projektoch.

Projekt prepája **technické rozhodnutia**, **architektúru**, **implementáciu** a **prevádzku** do jedného konzistentného celku.

---

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

---

## 01-Business

### Motivácia
- Minimalizovať náklady na infraštruktúru
- Zvýšiť kontrolu nad dátami a službami
- Získať praktické skúsenosti so serverovou architektúrou

### Použitie repasovaného hardvéru
Projekt cielene počíta s **použitým / repasovaným počítačom** ako validnou voľbou.

**Konkrétny príklad:**
- Lenovo M720q Mini PC
- Intel i5-9400T (6 jadier)
- 16 GB DDR4 RAM
- 256 GB NVMe SSD
- Spotreba ~65 W
- Cena: ~170 €

➡️ Pomer **cena / výkon / spotreba** je výrazne lepší než pri novom hardvéri v rovnakej kategórii.

---

## 02-Top Level Architecture

### Prehľad
- 1× fyzický server (mini PC)
- Linux OS
- Docker / kontajnerové služby
- Automatizovaná konfigurácia

### Kľúčové vlastnosti
- nízka spotreba energie
- tichá prevádzka
- jednoduchá rozšíriteľnosť

---

## 03-Solution Architecture

### Softvérové vrstvy
- OS: Linux (server-oriented distro)
- Runtime: Docker
- Automatizácia: Ansible
- Monitoring a logging (voliteľné)

### Izolácia
- každá služba beží v samostatnom kontajneri
- jasne definované porty a volume mounty

---

## 04-Analysis

### Požiadavky
- stabilná prevádzka 24/7
- jednoduchý redeploy
- možnosť rýchlej obnovy systému

### Riziká
- zlyhanie disku
- ľudská chyba pri konfigurácii

➡️ Obe riešené pomocou automatizácie a záloh.

---

## 05-Design

### Architektonické rozhodnutia
- preferencia jednoduchosti pred komplexitou
- infraštruktúra ako kód
- opakovateľné deploymenty

### Prečo Ansible
- bez agentov
- čitateľné YAML playbooky
- ideálne pre malé aj stredné prostredia

---

## 06-Implementation

### Použitie Ansible (kľúčová časť projektu)

Ansible sa používa na:
- základnú konfiguráciu servera
- inštaláciu balíkov
- nastavenie Docker prostredia
- deployment služieb
- správu používateľov a SSH prístupov

#### Príklady automatizácie
- inicializácia nového servera jedným príkazom
- opätovné nasadenie systému po zlyhaní
- konzistentné prostredie medzi testom a produkciou

➡️ Výsledok: menej manuálnych zásahov, menej chýb, vyššia istota.

---

## 07-Testing & Verification

### Overovanie
- testovanie dostupnosti služieb
- kontrola kontajnerov po deployi
- validácia konfigurácie

### Prístup
- jednoduché sanity testy
- opakovateľné scenáre

---

## 08-Operation

### Prevádzka
- server beží autonómne
- aktualizácie riadené skriptami
- monitoring základných metrík

### Údržba
- minimálna manuálna interakcia
- rýchla obnova v prípade problému

---

## 09-Change Management

### Zmeny
- verzovanie konfigurácií
- dokumentované úpravy
- rollback možný vďaka automatizácii

### Budúci rozvoj
- rozšírenie o ďalšie služby
- lepší monitoring
- centralizovaný logging

---

**Záver:**  
Projekt ukazuje, že kombinácia **repasovaného hardvéru**, **dobrého návrhu** a **automatizácie pomocou Ansible** dokáže vytvoriť spoľahlivý a profesionálny serverový systém s minimálnymi nákladmi.
