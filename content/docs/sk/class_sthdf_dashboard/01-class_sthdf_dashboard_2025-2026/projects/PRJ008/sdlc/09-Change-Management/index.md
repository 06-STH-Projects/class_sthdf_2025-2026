---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: '1.0.1'

# Dátum buildu – generuje skript
fm_build: '2025-11-28T15:54:47.912565+00:00'

# Poznámka k verzii – voliteľné
fm_version_comment: ''

# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: '61b5ea32-30e5-459c-90d5-06a9ca203ccf'

# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: 'class_sthdf_dashboard'

# Názov zápisu – dopĺňa používateľ
title: '09 Change Management'

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

# 09-Change Management

## Evolúcia projektu

Projekt SIGNALIS prešiel viacerými iteráciami a zmenami počas vývoja. Tento dokument zachytáva kľúčové zmeny, redesigny, riziká a získané poznatky.

## HERMES PCB - Iteračný vývoj

### Iterácia 1: CNC prototyp (október 2025)

**Charakteristika:**

- Jednovrstvová doska
- CNC frézovanie (lokálna výroba)
- Základný dizajn bez solder masky

**Identifikované problémy:**

- ❌ Nedostatočná šírka spojov → úbytok napätia, prehrievanie
- ❌ Chyba v rozmeroch dier (4mm namiesto 2mm)
- ❌ Chýbajúca solder maska a silkscreen

**Záver:**
Ako prvotný prototyp poslúžil výborne pre overenie konceptu a rýchle testovanie.

### Iterácia 2: Vylepšená CNC doska (november 2025)

**Vylepšenia:**

- ✅ Rozšírené vodivé spoje (eliminácia voltage drop)
- ✅ Opravené rozmery dier (2mm)
- ✅ Pridaná solder maska (UV živica)
- ✅ Pridaný silkscreen (laserovo vytvrdovaná živica)

**Nové problémy:**

- ⚠️ Pri šmirgľovaní odstránená medená vrstva z niektorých pinov
- ⚠️ Nerovnomerná hrúbka silkscreenu
- ⚠️ Manuálne opravy potrebné (prepojovací káblik)

**Záver:**
Dosiahol cieľ rýchleho prototypovania. Posunutie pozícií komponentov na zmenšenie rozmerov a odoslanie do profesionálnej výroby.

### Iterácia 3 a 4: Profesionálna výroba (december 2025)

**Hlavné zmeny:**

- ✅ Oddelenie analógových a digitálnych signálov
- ✅ Pridaný obvod merania napätia batérie
- ✅ Pridaný obvod regulácie napätia
- ✅ Profesionálna kvalita (solder maska, silkscreen, via)
- ✅ Oprava všetkých známych nedostatkov

**Výsledok:**
Finálna revízia PCB pripravená na produkčné nasadenie.

![HERMES PCB finál](../../report-images/prog-update5-hermes/actualfront.jpg)

## HERMES 3D dizajn - Iterácie

### Dizajn v1 (november 2025)

**Parametre:**

- Rozmery: 85×100×45 mm
- Materiál: PETG (BambuLab P1S)

**Problémy:**

- ❌ Veľké množstvo supports → ťažko odstrániteľné, viditeľné stopy
- ❌ Text na stranách → deformácie pri tlači
- ❌ Zbytočne veľké rozmery

![Prvotný dizajn s problémami](../../report-images/prog-update3-hermes/printed_initial_bad1.png)

**Záver:**
Overenie dimenzií úspešné, ale potrebný kompletný redesign.

### Dizajn v2 (november 2025) - Finálny

**Vylepšenia:**

- ✅ Menšie rozmery: 91×84×35 mm (vs. 85×100×45 mm)
- ✅ Ľahko tlačiteľný **bez supports**
- ✅ Optimalizovaný pre FDM tlač
- ✅ Reprodukovateľný dizajn
- ✅ Všetky komponenty presne zapadajú

![Finálny optimalizovaný dizajn](../../report-images/prog-update3-hermes/hermes_v2-1.PNG)

![Vytlačený finálny prototyp](../../report-images/prog-update3-hermes/final1.png)

**Výsledok:**
Dizajn pripravený na sériovú výrobu, ľahko reprodukovateľný na hocijakej 3D tlačiarni.

## IRIS PCB - Redesign

### Stacked Layout (október 2025) - Zahodnuté

**Koncept:**

- Dva horizontálne boardy nad sebou
- Prepojené konektormi
- Kompaktné riešenie

**Kritický problém:**

- ❌ SMA konektor pre anténu → zostava sa **nezmestila** do BT-80 trubice (~65mm priemer)
- ❌ LoRa rádio príliš dlhé → nemožné presunúť

![Stacked layout problém](../../report-images/prog-update1-iris/fit.png)

**Rozhodnutie:**
Kompletný redesign na vertikálne rozloženie.

### Vertikálny Layout (december 2025) - Finálny

**Riešenie:**

- Jedna PCB s vertikálnym rozložením komponentov
- Zmestí sa do BT-80 priestoru
- SMA konektor bez interferencie

![Finálny vertikálny dizajn](../../report-images/prog-update1-iris/iris2.png)

![Overenie v držiaku](../../report-images/prog-update1-iris/fit1.jpeg)

**Identifikované nedostatky (pre budúcu iteráciu):**

- ⚠️ Chýbajúci obvod regulácie napätia (7.4V → 5V/3.3V)
- ⚠️ Optimalizácia umiestnenia konektorov
- ⚠️ Zlepšenie mechanickej stability

**Výsledok:**
Dizajn spĺňa všetky požiadavky a je pripravený na použitie.

## Riziká a ich manažment

### Identifikované riziká

#### 1. Príliš ambiciózny rozsah projektu

**Riziko:**
Nepodarí sa dokončiť všetky stanovené ciele v stanovenom čase.

**Mitigácia:**

- ✅ **Iteratívny vývojový proces:** Rýchle prototypovanie a testovanie
- ✅ **MVP prístup:** Focus na core funkcionalitu najprv
- ✅ **Paralelný vývoj:** Členovia pracovali na rôznych komponentoch súčasne

**Výsledok:**
Úspešné dokončenie všetkých kľúčových komponentov do januára 2026.

#### 2. Dlhé dodacie lehoty komponentov

**Riziko:**
Objednávky zo zahraničia (Čína) trvajú 2-4 týždne, spomaľuje iteratívny vývoj.

**Mitigácia:**

- ✅ **Skoré objednávanie:** Plánovanie vopred a objednávanie s rezervou
- ✅ **Paralelný vývoj:** Práca na softvéri počas čakania na hardvér
- ✅ **Lokálna výroba:** CNC prototypovanie pre rýchle testovanie

**Výsledok:**
Žiadne významné oneskorenia kvôli dodacím lehotám.

#### 3. Závislosť na hardvérovom vybavení

**Riziko:**
Potreba špecializovaného vybavenia (spájkovačky, 3D tlačiarne, frézy, mikroskop) u jedného člena tímu.

**Mitigácia:**

- ✅ **Pravidelné stretnutia:** Približne každý týždeň u člena s vybavením
- ✅ **Plánovanie:** Koordinácia prác vyžadujúcich špeciálne vybavenie
- ✅ **Workshop:** Tréning všetkých členov na prácu s vybavením

**Výsledok:**
Efektívna práca tímu, všetci členovia získali zručnosti.

## Získané poznatky

### Praktické zručnosti

**3D tlač a CAD modelovanie:**

- ✅ Práca s 3D tlačiarňami (BambuLab P1S)
- ✅ CAD modelovanie v Autodesk Fusion
- ✅ Príprava modelov na tlač (slicing)
- ✅ Optimalizácia dizajnu pre FDM tlač (supports, orientácia)

**CNC frézovanie:**

- ✅ Programovanie CNC fréz
- ✅ Práca s rôznymi typmi vrtákov a fréz
- ✅ Výroba PCB (vyrezávanie spojov, vŕtanie, vyrezávanie obrysu)

**Spájkovanie:**

- ✅ Klasické THT (through-hole) spájkovanie
- ✅ SMD (surface mount) spájkovanie (0603, 0805, 1206)
- ✅ Hot air reflow spájkovanie
- ✅ Teplovzdušné odspájkovanie komponentov
- ✅ Práca s mikroskopom

**Elektronika a senzory:**

- ✅ Implementácia fyzikálnych konceptov do softvéru
- ✅ Kalibrácia senzorov (IMU, barometer, GPS)
- ✅ Práca s LoRa komunikáciou
- ✅ Binárne protokoly a sériová komunikácia

### Enterprise Architect

**Modelovanie systémov:**

- ✅ Stavové automaty (IRIS, HERMES)
- ✅ Sekvenčné diagramy (user interaction)
- ✅ Deployment diagramy (hardware architecture)
- ✅ LemonTree pre verzionovanie EA modelov (collaborative work)

![Stavový diagram IRIS](../../report-images/ea/IrisStateMachine.jpg)

![Stavový diagram HERMES](../../report-images/ea/HermesStateMachine.jpg)

**Výhody:**

- Lepšie pochopenie systému
- Digitálne dvojča (digital twin)
- Komunikácia v tíme

**Nevýhody:**

- Zložitý nástroj na naučenie
- Potreba ďalšieho štúdia

## Budúce rozšírenia

### Krátkodobé (1-3 mesiace)

**Hardvér:**

- Finálne zostavenie HERMES s profesionálnou PCB
- Dokončenie IRIS mechanického dizajnu
- IRIS PCB iterácia 2 (s reguláciou napätia)

**Testovanie:**

- Testovanie v simulovaných letových podmienkach
- Kalibrácia senzorov
- Optimalizácia vzorkovacej frekvencie

**Softvér:**

- Implementácia logovania s optimalizáciou
- Rozšírenie telemetrického protokolu
- Mobilná aplikácia (Android/iOS)

### Dlhodobé (sériová výroba)

**Dizajn:**

- **Injection molding:** Redesign pre škálovateľnú výrobu plastových dielov
- **Outsourcing 3D tlače:** Lokálna výroba nie je škálovateľná
- **Miniaturizácia:** Zmenšenie rozmerov pre menšie rakety

**Softvér:**

- **Programovateľné rozhranie:** API pre pokročilých používateľov
- **Konfigurovateľné parametre:** Limity, vzorkovanie, kalibrácia
- **Cloud integrácia:** Synchronizácia a zdieľanie dát

**Features:**

- Podpora viacerých IRIS jednotiek súčasne
- Rozšírené telemetrické údaje (video, dodatočné senzory)
- Machine learning pre predikciu letových kriviek

## Míľniky projektu

### Hlavné míľniky - Dosiahnuté

| Míľnik                         | Dátum       | Stav         |
| ------------------------------ | ----------- | ------------ |
| **M01** - Infrastructure setup | 5.10.2025   | ✅ Dokončené |
| **M02** - About Me prezentácie | 30.10.2025  | ✅ Dokončené |
| **M03** - Projektový súhrn     | 27.11.2025  | ✅ Dokončené |
| **M04** - Status update        | 18.12.2025  | ✅ Dokončené |
| **Finálna prezentácia**        | Január 2026 | ✅ Dokončené |

### Dodané výstupy

**Hardvér:**

- ✅ Prototyp IRIS (funkčný)
- ✅ Prototyp HERMES (funkčný)
- ✅ PCB dizajny (KiCad projekty)
- ✅ 3D modely (Fusion 360)

**Softvér:**

- ✅ IRIS firmware (Arduino C++)
- ✅ HERMES firmware (ESP32 C++)
- ✅ Web Dashboard (HTML/CSS/JS)

**Dokumentácia:**

- ✅ KNIFE články (progress updates)
- ✅ EA diagramy (stavové automaty, deployment)
- ✅ PCB výrobné procesy
- ✅ Popis problémov a riešení

## Reflexia

### Prínos projektu

Pre každého člena tímu mal tento projekt **výrazný prínos** a umožnil naučiť sa množstvo nových praktických zručností.

**Technické zručnosti:**

- Hardvérový vývoj (PCB, 3D tlač, CNC)
- SMD spájkovanie a hot air reflow
- Práca so senzormi a mikroskopom
- Firmware programovanie (Arduino, ESP32)
- Webový vývoj (WebGL, Canvas API)

**Teoretické poznatky:**

- Praktické overenie fyzikálnych zákonov
- Implementácia konceptov do softvéru
- Enterprise Architect modelovanie
- Stavové automaty a sekvenčné diagramy

**Soft skills:**

- Tímová práca a koordinácia
- Iteratívny vývojový proces
- Riešenie problémov (trial and error)
- Dokumentácia a prezentovanie

### Ďalší rozvoj

Z hľadiska ďalšieho rozvoja je projekt v súčasnosti **plne funkčný**. Existuje však priestor na rozvoj mimo samotného prototypu.

**Pre sériovú výrobu:**

- Prepracovanie dizajnu (injection molding)
- Outsourcing 3D tlače (škálovateľnosť)
- Certifikácia (CE, FCC pre rádiové zariadenia)

**Pre pokročilých používateľov:**

- Programovateľné rozhranie
- Konfigurovateľné limity a parametre
- Možnosť rozšírenia o vlastné senzory

**Záver:**
Projekt SIGNALIS úspešne dosiahol všetky stanovené ciele a poskytol tímu cenné praktické skúsenosti v oblasti hardvérového a softvérového vývoja.

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
