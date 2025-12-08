---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-24T15:50:07.127712+00:00"

fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

guid: "8e573805-b739-4082-b38a-cbe306f9d01a"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "sthdf"

title: "2025_ST_038 – TShirt Print System – Project Summary"

description: "Finálne zhrnutie kompletného projektu TShirt Print System."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Dominik Pallo"

authors:
  - "Dominik Pallo"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "IT / E-commerce"
type: "project-summary"
priority: "high"

tags:
  - "sthdf"
  - "project"
  - "tshirt-print"
  - "ecommerce"
  - "webapp"


# 🌍 LOCALIZATION -----------------------------------------------------

locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

created: "2025-11-24 16:50"
modified: "2025-11-24 16:50"
status: "completed"
privacy: "public"


# ⚖ IP ---------------------------------------------------------------

rights_holder_content: "Dominik Pallo"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"


origin_system: "CAA"
origin_author: "Dominik Pallo"

fm_reserved1: ""
fm_reserved2: ""
---

<!-- STHDF_INSTANCE_ID: 2025_ST_038 -->

# 📝 Project Summary

## 🔖 Identifikácia

## 1️⃣ Názov projektu
- **Názov projektu:** `PRJ_112_TShirtPrintSystem_ST038`
- **Stručný popis:**  
  TShirt Print System je plne funkčný webový systém určený pre objednávanie potlače tričiek. Zákazníci si môžu vybrať produkt, zvoliť varianty a odoslať objednávku. Admin rozhranie umožňuje spravovať produkty, sledovať objednávky, generovať faktúry a analyzovať základné metriky predaja.

---

## 2️⃣ Členovia tímu

Keďže som pracoval samostatne:

| ST ID | Meno           | Rola v tíme | Kompetencie |
|-------|----------------|-------------|-------------|
| ST038 | Dominik Pallo | Fullstack vývoj, analýza, dizajn, testovanie, dokumentácia | Návrh architektúry, frontend, backend, DB, UX, plánovanie, verzovanie |

---

## 3️⃣ Motivácia projektu

- Chcel som vytvoriť **reálny produkt**, ktorý rieši konkrétny problém pri predaji tričiek a merchu.  
- Projekt je dôležitý, pretože mnohé malé podniky, kaviarne, športové tímy alebo tvorcovia merchu nemajú digitálny systém – všetko riešia cez Instagram, správy alebo Excel.  
- Mojou motiváciou bolo postaviť funkčné, jednoduché a použiteľné MVP namiesto teoretickej úlohy.  
- Projekt rieši prehľadnosť objednávok, minimalizáciu ručného prepisovania a zjednodušenie komunikácie medzi zákazníkom a predávajúcim.

---

## 4️⃣ Cieľ a pridaná hodnota projektu

### 🎯 Cieľ:
Vytvoriť plne funkčný e-commerce mini-systém, ktorý umožní rýchlu a jednoduchú objednávku tričiek a jednoduchú správu objednávok cez admin rozhranie.

### 🏆 Projekt bol úspešný, pretože:
- obsahuje celý objednávkový proces,
- admin má možnosť meniť stav objednávky a generovať faktúry,
- databáza aj API sú stabilné a rozšíriteľné,
- front-end je responzívny a použiteľný aj pre bežného používateľa.

---

## 5️⃣ Popis riešenia

Projekt pozostáva z dvoch častí:

### 👕 **Customer stránka**
Umožňuje:
- prezerať katalóg tričiek,
- vybrať veľkosť, farbu, typ trička,
- pridať produkt do košíka,
- dokončiť objednávku cez checkout.

### 🛠️ **Admin stránka**
Poskytuje:
- prehľad všetkých objednávok (vrátane filtrovania podľa stavu),
- detail objednávky,
- prepojenie objednávky a faktúry,
- generovanie PDF faktúr,
- správu produktov a variantov,
- základné štatistiky (počet objednávok, tržby, najpredávanejšie položky).

### 🧱 Použité technológie:

- **Frontend:** Next.js, React  
- **Backend:** Next.js API Routes  
- **DB:** PostgreSQL + Prisma ORM  
- **Autentifikácia:** NextAuth (email + heslo pre admina)  
- **PDF faktúry:** `pdfkit`  
- **Štruktúra projektu:** Clean modular architecture  
- **Deployment:** Vercel / Railway (podľa výkladu)  

---

## 6️⃣ Projektový plán

### 🔄 Realizácia prebehla v týchto fázach:
- ✔ Analýza problému a návrh dátového modelu  
- ✔ Návrh UI pre zákazníka aj admina  
- ✔ Implementácia API a databázových tabuliek  
- ✔ Implementácia objednávkového procesu  
- ✔ Implementácia admin rozhrania  
- ✔ Fakturácia a generovanie PDF  
- ✔ Testovanie a ladenie  
- ✔ Finalizácia + dokumentácia

### 📅 Stav k prezentácii
- **Hotové MVP** obsahujúce všetky základné funkcie  
- **Admin zone** vrátane správy objednávok  
- **Faktúry** generované automaticky  
- Kompletná dokumentácia projektu

---

## 7️⃣ Zákazník a hodnoty

### 👤 Potenciálni používatelia:
- malé podniky a tvorcovia merchu,
- kaviarne a lokálne značky,
- športové kluby,
- školy, tábory, eventy.

### 🎁 Hodnota pre používateľa:
- rýchly spôsob objednávania,
- minimalizácia ručného prepisovania,
- jasný prehľad objednávok a faktúr,
- príjemné a intuitívne rozhranie.

---

## 8️⃣ Očakávané výstupy (dodané)

- ✔ Hotové MVP  
- ✔ Frontend aj backend aplikácie  
- ✔ Databázový model  
- ✔ Admin dashboard  
- ✔ Fakturačný modul  
- ✔ Projektová dokumentácia (KNIFE + README)  
- ✔ Prezentácia  

---

## 📚 Kontext

Projekt čerpá z:
- zásad e-commerce riešení,  
- mojich skúseností s UX/UI,  
- praktických problémov reálnych malých obchodov,  
- architektonických princípov modulárnych aplikácií.

---

## 🧭 Riziká a závislosti

### Riešené riziká:
- oneskorený vývoj → vyriešené rozdelením úloh na menšie časti,  
- integrácia DB → vyriešené použitím Prisma,  
- návrh UI → vytvorený jednoduchý a jasný dizajn.

### Závislosti:
- DB hosting,  
- e-mailové notifikácie,  
- budúce integrácie (platobná brána).

---

## 9️⃣ Reflexia a ďalšie kroky

### Čo som sa naučil:
- návrh modulárnej architektúry,
- tvorbu API,
- prácu s databázou a ORM,
- manažment celého projektu od nápadu po dodanie,
- UX a optimalizáciu objednávkového procesu.

### Možné rozšírenia:
- podpora ďalších produktov (mikiny, doplnky),
- platobná brána,
- systém skladových zásob,
- multi-tenant riešenie pre viac predajcov,
- mobilná verzia s PWA.

---

## Navigácia
- [↩️ Späť](../index.md)
