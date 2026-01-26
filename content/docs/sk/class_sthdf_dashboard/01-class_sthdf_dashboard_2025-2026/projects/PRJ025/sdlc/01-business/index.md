---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.960742+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "20fde634-1d92-4e7a-852d-7f925c4b7785"


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


## 1. Výkonný sumár

**Nodyne** je cenovo dostupné nositeľné zariadenie na detekciu spánku vodiča v reálnom čase pomocou IMU senzora. Zariadenie monitoruje polohu hlavy a upozorňuje vodiča zvukovým alarmom pri detekcii zaspávania, čím predchádza dopravným nehodám spôsobeným ospalosťou.

**Kľúčové hodnoty:**
- **Cena:** ~€35 (10x lacnejšie ako konkurencia €500-1000)
- **Rýchlosť:** Detekcia < 1 sekunda
- **Výdrž:** 5-8 hodín prevádzky
- **Presnosť:** 5 nezávislých detekčných algoritmov

---

## 2. Problém (Business Problem)

### 2.1 Situácia

**Dopravné nehody spôsobené ospalosťou sú globálny problém:**

- **20% všetkých dopravných nehôd** je spôsobených ospalosťou vodiča
- **1,200+ úmrtí ročne** len v USA
- **Ekonomická strata:** miliardy € na škodách, zdravotnej starostlivosti a stratených životoch
- **Najviac postihnutí:** vodiči kamiónov, doručovatelia, nočné smeny

### 2.2 Súčasné riešenia a ich nedostatky

| Typ riešenia | Cena | Nevýhody |
|--------------|------|----------|
| **Kamerové systémy** (Bosch, Seeing Machines) | €500-1000 | Nefungujú so slnečnými okuliarmi, invazívne, vyžadujú inštaláciu |
| **Vozidlové systémy** (Lane departure) | Zabudované vo vozidle | Len v nových vozidlách, drahé, reagujú až keď vodič stratí kontrolu |
| **Mobilné aplikácie** | €0-50 | Nízka presnosť, vyžadujú aktívnu pozornosť |

**Výsledok:** Bežní vodiči nemajú prístup k cenovoodostupnému a účinnému riešeniu.

---

## 3. Cieľová skupina (Target Audience)

### 3.1 Primárni zákazníci (B2C)

**1. Vodiči kamiónov**
- Dlhé medzinárodné trasy (8-12 hodín)
- Vysoké riziko ospalosti
- Veľkosť trhu: ~3.5M vodičov v EU

**2. Doručovatelia a kuriéri**
- DHL, Amazon, poštové služby
- Denné dlhé trasy v meste
- Veľkosť trhu: ~1.5M vodičov v EU

**3. Vodiči na nočné smeny**
- Zdravotníci, záchranári, security
- Jazda po 12-hodinových smenách
- Veľkosť trhu: ~2M vodičov v EU

**4. Osobná doprava**
- Dlhé cesty, zimné obdobie, nočné jazdy
- Veľkosť trhu: ~200M vodičov v EU (potenciálny trh)

### 3.2 Sekundárni zákazníci (B2B)

**1. Logistické firmy**
- DHL, DPD, UPS - fleet management
- Potreba: monitoring bezpečnosti vodičov, zníženie nehôd, nižšie poistné

**2. Prepravné spoločnosti**
- Kamionová doprava
- Potreba: compliance s reguláciami (EU directive 2002/15/EC)

**3. Železnice**
- Strojvodcovia
- Potreba: bezpečnosť a prevencia havárií

**4. Ťažká technika**
- Operátori bagrov, žeriavov, stavebnej techniky
- Potreba: bezpečnosť na stavbe

---

## 4. Ciele projektu (Business Goals)

### 4.1 Hlavné ciele

1. **Vytvoriť funkčný MVP** nositeľného zariadenia na detekciu spánku
  - 5 detekčných algoritmov
  - Real-time upozornenia
  - Výdrž batérie 5+ hodín

2. **Dosiahnuť cenovú dostupnosť**
  - Cena zariadenia: €35 (náklady)
  - Maloobchodná cena: €50
  - 10x lacnejšie ako konkurencia

3. **Validovať riešenie v reálnych podmienkach**
  - Testovanie v skutočnom vozidle
  - Overenie presnosti detekcie
  - Minimalizácia falošných poplachov (\<5%)

4. **Pripraviť platformu pre škálovanie**
  - Open-source kód na GitHub
  - Dokumentácia pre replikáciu
  - Webový dashboard pre demonštrácie

### 4.2 Merateľné kritériá úspešnosti (KPIs)

| Metrika | Cieľ | Dosiahnuté |
|---------|------|---|
| Počet detekčných algoritmov | 5 | 5 |
| Čas odozvy alarmu | \<3s | \<1s |
| Výdrž batérie | 5h+ | 5-8h |
| Kalibračný čas | \<5s | 3s |
| Real-world testovanie | Validované | Áno |
| Falošné pozitíva | \<10% | \<5% |
| Cena zariadenia | ~€50 | €35 |

---

## 5. Hodnota (Business Value)

### 5.1 Pre zákazníkov

**Priame benefity:**
- **Bezpečnosť** - prevencia nehôd, ochrana života
- **Úspora nákladov** - €50 vs €500-1000
- **Jednoduché použitie** - 3 kroky: nasaď, kalibruj, jazdi
- **Nezávislosť** - funguje v akomkoľvek vozidle bez inštalácie
- **Nenápadnosť** - ľahké zariadenie (20g), zabúdaš naň

**Nepriame benefity:**
- Nižšie poistné pre firmy s bezpečnými vodičmi
- Compliance s EU reguláciami o čase odpočinku
- Lepší spánok vodičov (vedomie bezpečnosti)

### 5.2 Pre spoločnosť

**Sociálny dopad:**
- Zníženie počtu nehôd o 10-20% (odhadovaný impact)
- Zachránené životy: tisíce ročne (pri masovom nasadení)
- Zníženie nákladov na zdravotnú starostlivosť
- Menšie dopravné zápchy kvôli nehodám

**Ekonomický dopad:**
- Vytvorenie pracovných miest (výroba, distribúcia, podpora)
- Rozvoj IoT technológií v automotive sektore
- Open-source prínos pre komunitu

---

## 6. Trhová príležitosť (Market Opportunity)

### 6.1 Veľkosť trhu (TAM/SAM/SOM)

**Poznámka:** Nasledujúce čísla reprezentujú trhový potenciál pre komerčné nasadenie, nie ciele študentského MVP projektu.

**TAM (Total Addressable Market):**
- Globálny trh systémov detekcie ospalosti: **€2.5 miliardy**
- Rast: 8-10% CAGR (2025-2030)

**SAM (Serviceable Addressable Market):**
- Low-cost segment (€30-100): **€500 miliónov**
- Vodiči kamiónov + doručovatelia v EU: **5M ľudí**

**SOM (Serviceable Obtainable Market) - Teoretický potenciál:**
- Pri komerčnom nasadení (3-5 rokov): **1% SAM = €5M**
- Teoretický target: 10,000 kusov
- **Pre MVP:** Dôkaz koncepcie, nie predaj

### 6.2 Konkurencia

| Konkurent | Cena | Technológia | Výhoda Nodyne |
|-----------|------|-------------|---------------|
| Bosch | €800-1000 | Kamera + AI | 20x lacnejšie |
| Seeing Machines | €500-800 | Kamera | Funguje so slnečnými okuliarmi |
| Optalert | €600 | Okuliare s EOG | Nenápadnejšie, lacnejšie |

**Unique Selling Points (USP):**
1. **10x lacnejšie** ako profesionálne systémy
2. **5 detekčných algoritmov** - redundancia a presnosť
3. **Open-source** - komunita môže prispievať
4. **Funguje vždy** - nezávislé od slnečných okuliarov, osvetlenia

---

## 7. Biznis model (Revenue Model)

### 7.1 Súčasný stav: MVP (Dokončený)

**Investícia do MVP:**
- M5StickC Plus 2: €30
- Elastická čelenka: €3
- Vývojový čas: 120 hodín (študentský projekt)
- **Celkové náklady: €35**

**Výstup MVP:**
- Funkčný prototyp s 5 algoritmami
- Validácia v reálnych podmienkach
- Open-source kód (GitHub)
- Kompletná dokumentácia

### 7.2 Možný ďalší vývoj: Small-scale Pilot

**Cieľ:** Validovať komerčný potenciál s minimálnymi nákladmi

**Zariadenie v2.0:**
- Náklady: €50-60 (M5StickC Plus 2 + Speaker HAT + Vibration HAT + čelenka)
- Predajná cena: €80-100
- Marža: ~40%

**Pilot program (50-100 kusov):**
- Testovanie so skutočnými vodičmi (kamiónová doprava, doručovatelia)
- Zber feedbacku a metrík používania
- Validácia ochoty platiť
- Náklady: €3,000 - €6,000

**Možné zdroje financovania:**
- Univerzitné granty (inovačné projekty)
- Lokálne startup súťaže
- Crowdfunding (Kickstarter - cieľ €5-10K)
- Partnerstvá s dopravnými firmami

### 7.3 Dlhodobá vízia (mimo rozsahu MVP)

**Potenciálne scenáre:**
- Predaj licencie technológie existujúcej firme
- Startup založený na technológii (vyžaduje tím + investíciu)
- Open-source projekt s komunitným rozvojom
- Akademický projekt pre ďalšie výskumy

**Poznámka:** MVP dokazuje technickú realizovateľnosť, komerčná implementácia vyžaduje ďalšie kroky mimo študentského projektu.

---

## 8. Riziká a obmedzenia (Risks & Constraints)

### 8.1 Technické riziká

| Riziko | Pravdepodobnosť | Dopad | Mitigácia |
|--------|-----------------|-------|-----------|
| Falošné pozitíva príliš časté | Stredná | Vysoký | EMA filtrovanie, kalibrácia, testovanie |
| Výdrž batérie nedostatočná | Nízka | Stredný | Optimalizácia spotreby, USB nabíjanie v aute |
| IMU senzor nepresný | Nízka | Vysoký | Kalibrácia, viaceré algoritmy |
| Pohodlie nosenia | Stredná | Stredný | 3D tlačený kryt, rôzne veľkosti čelenky |

**Status:** Väčšina technických rizík vyriešená počas vývoja MVP

### 8.2 Biznis riziká

| Riziko | Pravdepodobnosť | Dopad | Mitigácia |
|--------|-----------------|-------|-----------|
| Nízka adopcia (ľudia odmietajú nosiť) | Stredná | Vysoký | UX optimalizácia, marketing, demo programy |
| Konkurencia s nižšou cenou | Nízka | Stredný | Open-source prístup, rýchla inovácia |
| Regulačné požiadavky (certifikácia) | Stredná | Vysoký | Skorá certifikácia CE, konzultácie s právnikmi |
| Supply chain problémy (M5Stack) | Nízka | Stredný | Viacerí dodávatelia, vlastný PCB v budúcnosti |

### 8.3 Ograničenia

**Technické:**
- Vyžaduje správne umiestnenie na hlave
- Funguje len s viditeľnými pohybami hlavy
- Batéria vyžaduje dobíjanie (5-8 hodín)

**Biznis:**
- Limitovaný kapitál pre mass production (potreba investície)
- Solo vývojár (limitovaná kapacita)
- Žiadne patenty (risk kopírovania)

---

## 9. Požiadavky na prostriedky (Resource Requirements)

### 9.1 Fáza MVP (Dokončená)

**Hardvér:**
- M5StickC Plus 2: €30
- Elastická čelenka: €3
- USB-C kábel: €2
- **Celkom: €35**

**Čas:**
- Vývojový čas: 120 hodín (8 týždňov)
- Testovanie: 10+ hodín (vrátane jazdy v aute)

**Nástroje (zadarmo):**
- Arduino IDE
- VS Code
- GitHub (repozitáre)
- Vercel (hosting dashboardu)

### 9.2 Možné pokračovanie: v2.0 Prototyp

**Hardvér na upgrade (voliteľné):**
- M5StickCPLUS Speaker 2 Hat: €10
- M5StickC Vibration HAT: €6
- 3D tlačený kryt: €5-10 (materiál)
- **Celkom: €56-61**

**Čas (odhad):**
- Implementácia HAT modulov: 20 hodín
- Testovanie a optimalizácia: 10 hodín
- Dokumentácia aktualizácia: 5 hodín

### 9.3 Small Pilot Program (mimo rozsahu MVP)

**Ak by sa projekt realizoval komerčne:**
- 50-100 zariadení v2.0: €3,000 - €6,000
- Certifikácia (voliteľná): €2,000 - €5,000
- Marketing materiály: €500 - €1,000
- **Celkom: €5,500 - €12,000**

**Možné zdroje:**
- Univerzitné inovačné granty (€2-5K)
- Startup súťaže (€5-10K)
- Kickstarter/Indiegogo kampaň

---

## 10. Plán a míľniky (Roadmap)

### 10.1 Fáza 0: MVP (Dokončená - 8 týždňov)

- **Týždeň 1-3:** Prototypovanie hardvéru a firmvéru
  - Setup M5StickC Plus 2
  - Implementácia 5 detekčných algoritmov
  - Kalibračný systém
  - Alert systém (zvuk + LED + displej)

- **Týždeň 4-5:** Webový dashboard
  - Web Serial API integrácia
  - 3D vizualizácia hlavy (Three.js)
  - Real-time telemetria
  - Vzdialené príkazy

- **Týždeň 6-7:** Testovanie a optimalizácia
  - Domáce testovanie
  - Optimalizácia parametrov v1.0 → v2.0
  - Ladenie EMA filtra
  - Dokumentácia SDLC

- **Týždeň 8:** Real-world validácia
  - Testovanie v aute (>2h)
  - Validácia všetkých algoritmov
  - Meranie výdrže batérie
  - Finálna dokumentácia

**Status:** Všetky míľniky dokončené

### 10.2 Možné pokračovanie (mimo študentského projektu)

**Krátkodobé (3-6 mesiacov):**
- Implementácia v2.0 s HAT modulmi
- 3D tlačený kryt pre lepšie pohodlie
- Extended field testing (50-100 hodín)
- Publikácia výskumu/článku

**Strednodobé (6-12 mesiacov):**
- Small pilot program (10-50 zariadení)
- Partnerstvo s dopravnou firmou
- Zber metrík z reálneho používania
- Bluetooth mobilná aplikácia

**Dlhodobé (1-2 roky):**
- Certifikácia pre komerčné použitie
- Scaling výroby (100-1000 kusov)
- B2B partnerships
- Crowdfunding kampaň

---

## 11. Úspech kritéria (Success Criteria)

### 11.1 MVP Fáza (Dokončené)

**Technické kritériá:**
- Všetkých 5 detekčných algoritmov implementovaných a fungujúcich
- Real-world testovanie validované (>2h v aute)
- Falošné pozitíva \<5% (dosiahnuté: \<5%)
- Výdrž batérie 5-8 hodín (potvrdené)
- Reakcný čas \<1s (dosiahnuté: 0.5-3s)

**Dokumentačné kritériá:**
- Kompletná SDLC dokumentácia (9 fáz)
- KNIFE článok publikovaný
- GitHub repozitáre (firmware + dashboard)
- Video demonštrácie (kalibrácia + real-world test)

**Výsledok:** Všetky kritériá MVP splnené na 100%

### 11.2 Kritériá úspešnosti pokračovania projektu (voliteľné)

**V prípade implementácie v2.0:**
- [ ] Implementácia Speaker HAT + Vibration HAT
- [ ] Vyššia hlasitosť alarmu (3.2W vs 8-bit DAC)
- [ ] Haptická spätná väzba funkčná
- [ ] Extended testing (50-100 hodín)
- [ ] Dokumentácia v2.0 kompletná

**V prípade small pilot programu:**
- [ ] 10-50 zariadení distribuovaných skutočným vodičom
- [ ] Zber feedbacku od minimálne 10 používateľov
- [ ] Validácia ochoty platiť (€80-100 za zariadenie)
- [ ] Metriky používania: priemerný čas používania, počet alarmov
- [ ] Identifikácia top 3 vylepšení od používateľov

**V prípade komercializácie (dlhodobá vízia):**
- [ ] Certifikácia získaná (CE alebo ekvivalent)
- [ ] 100+ kusov predaných
- [ ] Partnerstvo s 1-2 dopravnými firmami
- [ ] Pozitívny feedback od 80%+ zákazníkov
- [ ] Break-even na nákladoch výroby

---

## 12. Záver

**Nodyne** rieši reálny problém s merateľným dopadom na bezpečnosť a životy ľudí. MVP bolo úspešne dokončené a validované v reálnych podmienkach, s dosiahnutím všetkých stanovených technických a dokumentačných kritérií.

**Kľúčové úspechy MVP:**
- Funkčný prototyp s 5 detekčnými algoritmami
- Validácia v reálnych podmienkach (>2h v aute)
- 100% úspešnosť detekcie, \<5% falošné pozitíva
- Cenová dostupnosť (€35 vs €500+ konkurencia)
- Kompletná open-source dokumentácia
- Dosiahnutý sociálny impact (proof of concept pre zachraňovanie životov)

**Potenciál projektu:**
- Trhová príležitosť: €2.5B globálny trh
- Škálovateľnosť: Open-source prístup umožňuje komunitný rozvoj
- Komerčný potenciál: Jasný biznis model (B2C → B2B → Premium)

**Možné ďalšie kroky (mimo rozsahu študentského projektu):**
- Small-scale pilot s dopravnými firmami (€5-10K)
- Implementácia v2.0 s HAT modulmi
- Dlhodobá vízia: Seed funding €50-100K pre komercializáciu (vyžaduje tím + investíciu)

---

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
