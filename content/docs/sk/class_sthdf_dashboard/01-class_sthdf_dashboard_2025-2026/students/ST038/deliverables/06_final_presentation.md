---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

fm_build: "2025-11-24T15:50:07.129743+00:00"

fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

guid: "811192bb-8da1-4e5d-82be-1cfbcad39db7"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "sthdf"

title: "2025_ST_038 – TShirt Print System – Final Presentation"

description: "Finálna prezentácia hotového projektu TShirt Print System."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Dominik Pallo"

authors:
  - "Dominik Pallo"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "presentation"
type: "final"
priority: "high"

tags:
  - "sthdf"
  - "project"
  - "final"
  - "tshirt-print"
  - "presentation"


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

# 📦 Final Presentation

## 🔖 Stav projektu
Projekt **TShirt Print System** je dokončený ako funkčné MVP a pripravený na použitie v reálnej praxi.  
Fungujú všetky kľúčové funkcie:

### ✔ Funkčné
- katalog tričiek s variantmi  
- výber produktu, košík, checkout  
- objednávkový systém s uložením do DB  
- admin rozhranie (prehľad objednávok, detaily, zmena stavu)  
- generovanie PDF faktúr  
- jednoduché štatistiky (počet objednávok, tržby)  
- autentifikácia admina  
- responzívny dizajn

### ❗ Nebolo súčasťou MVP
- platobná brána  
- skladové hospodárstvo  
- multi-tenant verzia  
- vlastné dizajny nahrávané zákazníkom

---

# 🧩 Výstupy podľa SDLC / V-modelu

## 1️⃣ Business požiadavky
- Zjednodušiť predaj tričiek pre malé podniky a tvorcov merchu  
- Online objednávkový proces  
- Admin rozhranie na spracovanie objednávok  
- Automatizované faktúry  
- Jednoduchosť, rýchlosť, minimum krokov  

**Status:** ✔ splnené

---

## 2️⃣ Top Level Architecture
- Next.js aplikácia (frontend + backend v jednom)  
- PostgreSQL databáza cez Prisma ORM  
- Admin modul oddelený od zákazníckej časti  
- API Routes pre komunikáciu FE ↔ BE  
- PDF generátor faktúr  

**Status:** ✔ implementované

---

## 3️⃣ Solution Architecture
### Komponenty:
- **Frontend:** Next.js, React, Tailwind  
- **Backend:** API Routes, modular routing  
- **ORM:** Prisma  
- **DB:** PostgreSQL (Railway)  
- **Auth:** NextAuth  
- **PDF:** pdfkit  
- **Deployment:** Vercel (app), Railway (DB)

### Toky:
- Zákazník → objednávka → DB zápis  
- Admin → zmena stavu → uloženie  
- Admin → generovanie faktúry → PDF  

**Status:** ✔ plne funkčné

---

## 4️⃣ Analysis
Analyzoval som:
- UX flow pre zákazníka
- najčastejšie varianty tričiek
- štruktúru objednávky a faktúry
- validácie a potrebné polia
- administratívne kroky predávajúceho

**Status:** ✔ odrazené v implementácii

---

## 5️⃣ Design
Hotové dizajny:
- minimalistický UI pre zákazníka  
- jednoduchý, tabuľkový admin panel  
- mobilná aj desktop verzia  
- UX založené na rýchlosti, nie vizuálnej preťaženosti  

**Status:** ✔ nasadené do praxe

---

## 6️⃣ Implementation
### Implementované moduly:
- produkty + varianty  
- košík (localStorage)  
- checkout  
- objednávky + orderItems  
- admin panel  
- faktúry  
- autentifikácia admina  
- štatistiky  

### Použité technológie:
- Next.js  
- React  
- Tailwind CSS  
- Prisma  
- PostgreSQL  
- pdfkit  
- NextAuth  

**Status:** ✔ dokončené

---

## 7️⃣ Verification & Testing
### Testovanie:
- manuálne testy celého flow  
- testovanie API endpointov  
- testovanie DB operácií  
- testovanie PDF výstupov  
- testovanie na mobilných zariadeniach  
- UX mikrotest so 4 používateľmi  

### Výsledok:
- systém je stabilný  
- základné scenáre fungujú bez chýb  

**Status:** ✔ validované

---

## 8️⃣ Operation
- frontend a backend nasadený na Vercel  
- databáza beží na Railway  
- projekt je modulárny a pripravený na ďalší rozvoj  
- prvé reálne testovanie možné okamžite

**Status:** ✔ plne pripravený na prevádzku

---

# 🏆 Finálny produkt

## 🔧 Čo som reálne dodal
- funkčné MVP systému TShirt Print System  
- admin dashboard  
- objednávkový modul  
- fakturačný systém  
- nasadený live web + databáza  
- plná dokumentácia (SDLC, KNIFE, README)  
- pitch deck a prezentácia

## 📸 Ako to vyzerá

## 🔗 Repo link
- GitHub profil: **https://github.com/DominikP123**  
- Repozitár projektu:  
  `https://github.com/06-STH-Projects/2025-2026-sthdf-templateless-DominikP123`

---

# 🧭 Porovnanie s Project Summary

| Plánované | Dodané |
|----------|--------|
| katalóg + košík | ✔ hotové |
| checkout + DB | ✔ hotové |
| admin rozhranie | ✔ hotové |
| faktúry | ✔ hotové |
| dizajn | ✔ hotový |
| deployment | ✔ hotový |
| dokumentácia | ✔ kompletná |
| štatistiky | ✔ základná verzia |

### Záver:
Projekt bol **dodržaný**, všetky plánované body boli implementované a MVP je použiteľné ako funkčný produkt.

---

## Navigácia
- [↩️ Späť](../index.md)
