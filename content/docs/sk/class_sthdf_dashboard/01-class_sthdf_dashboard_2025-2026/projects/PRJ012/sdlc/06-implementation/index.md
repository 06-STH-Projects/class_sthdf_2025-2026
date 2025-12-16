---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.986461+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "cafba725-a893-42af-b7c6-b788d925923b"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "06 implementation"

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

# 06-Implementation
## Project Roadmap
1. **Úvodný koncept**  
   - Pôvodná myšlienka bola vytvoriť iba samozavlažovací kvetináč pomocou 3D tlače.  
   - Po diskusii s kolegom však vznikla myšlienka projekt rozšíriť o elektronickú časť, ktorá bude vedieť sledovať vlhkosť pôdy.

2. **Papierové návrhy**  
   - Ručný náčrt tvaru kvetináča, zásobníka vody a umiestnenia elektroniky.  
   - Náčrt zapojenia senzora, Arduina a displeja.  
   - Tieto náčrty tvorili prvú verziu architektúry pred spracovaním v EA.

3. **Modelovanie architektúry v Enterprise Architect (EA)**  
   - **Business Layer** – definovanie potrieb používateľa a základného procesu.  
   - **System Layer (Top Level Architecture)** – návrh architektúry: senzor → Arduino → displej → používateľ.  
   - **Technology Layer** – technická schéma zapojenia + komponenty použité pre prototyp.

4. **3D modelovanie kvetináča**  
   - Kompletný návrh vo Fusion 360.  
   - Export modelu a príprava pre 3D tlač.

5. **3D tlač prototypu**  
   - Tlač prebehla vo FabLabe.  
   - Priebežné úpravy a drobné iterácie podľa potreby.

6. **Zostavenie HW a programovania (paralelne s 3D tlačou)**  
   - Provný prototyp predstavoval prepojenie vlhkostného senzora, OLED displeja a Arduina na breadboarde.  
   - Programovanie základnej funkcionality:  
     - čítanie vlhkosti,  
     - prepočet na percentá,  
     - zobrazenie na displeji,  
     - smajlík podľa stavu pôdy.  

7. **Integrácia HW s vytlačeným 3D modelom**  
   - Druhý prototyp predstavoval zapojenie komponentov bez breadboardu do finálneho 3D tela.  
   - Umiestnenie senzora do rastliny a testovanie v reálnych podmienkach.  
   - Finálna úprava kódu.

8. **Testovanie a ladenie**  
   - Test reakcií displeja pri rôznych úrovniach vlhkosti.  
   - Kontrola kompatibility 3D modelu s elektronikou.

9. **Finalizácia projektu**  
   - Dokončenie dokumentácie.  
   - Pridanie fotografií prototypu.  

## Dosiahnuté ciele
Dosiahli sme všetky ciele, ktoré sme si na začiatku projektu stanovili. Máme plne funkčný prototyp SmartPot, ktorý spoľahlivo meria vlhkosť pôdy a prehľadne zobrazuje namerané dáta na OLED displeji. Systém poskytuje intuitívny vizuálny indikátor, takže používateľ okamžite vie, či rastlina potrebuje zálievku.

## Skúsenosti
Počas práce na projekte sme zaznamenali niekoľko zaujímavých skúseností. 3D model kvetináča sme museli niekoľkokrát upravovať, pretože pôvodné rozmery nezodpovedali reálnej tlači. Pri zapájaní elektroniky sme narazili na problémy, napríklad nedostatok jumper káblov a komplikácie s knižnicou pre OLED displej. Výrobca uvádzal podporu určitej knižnice, ktorá však nefungovala, takže sme museli nájsť alternatívne riešenie.


### Pozitívne skúsenosti
Pozitívne skúsenosti zahŕňajú výbornú tímovú spoluprácu, keďže všetko prebiehalo hladko a bez akýchkoľvek nedorozumení. Tiež sme si mohli prakticky vyskúšať zapojenie a programovanie Arduino Nano spolu s integráciou senzora a displeja, čo sme si chceli už dlhšie vyskúšať. Okrem toho sme získali praktické skúsenosti aj so samotnou 3D tlačou a doladením prototypu.


### Možné vylepšenia
Do budúcnosti vidíme niekoľko možností, ako prototyp vylepšiť. Mohli by sme pridať automatickú pumpu, ktorá by sama dopĺňala vodu zo zásobníka alebo integrovať Bluetooth či Wi-Fi pre odosielanie upozornení priamo do telefónu používateľa. Ďalšou možnosťou je pridať zvukový indikátor, ktorý by upozorňoval, že pôda je suchá, čím by sa zvýšila interaktivita a použiteľnosť zariadenia.

## Project Status
Všetky stanovené ciele sme úspešne splnili. Máme funkčný prototyp SmartPot, ktorý spoľahlivo meria vlhkosť pôdy a zobrazuje výsledky na OLED displeji. Systém je stabilný a plne použiteľný.

## Finálny produkt
Projekt priniesol plne funkčný SmartPot, ktorý obsahuje 3D tlačený kvetináč so vstavaným zásobníkom vody, vlhkostný senzor a displej, ktorý poskytuje okamžitú vizuálnu spätnú väzbu. Meranie vlhkosti je presné a používateľ je notifikovaný o stave pôdy jednoduchým vizuálnym indikátorom na displeji (percento + smajlík). 

![finalny produkt](../../images/kvetinac_so_senzorom.png)


- [Odkazy na kód / repozitáre](./code-links.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
