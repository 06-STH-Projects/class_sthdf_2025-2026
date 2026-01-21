---
fm_version: 1.0.1
fm_build: '2025-11-24T15:50:07.130400+00:00'
fm_version_comment: ''
locale: sk
---

-----------------------------------------------------

guid: "99814b1c-cf02-4840-a715-3ad8f4b9d34a"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "sthdf"

title: "2025_ST_038 – TShirt Print System – Project Outcomes"

description: "Finálny prehľad výstupov projektu TShirt Print System podľa SDLC a KNIFE metodiky."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Dominik Pallo"

authors:
  - "Dominik Pallo"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "IT / E-commerce / SDLC"
type: "project-outcomes"
priority: "high"

tags:
  - "sthdf"
  - "project"
  - "outcomes"
  - "sdlc"
  - "tshirt-print"


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

# 📦 Project Outcomes

## 🔖 Stav projektu

Projekt **TShirt Print System** je úspešne dokončený ako funkčné MVP.  
Všetky kľúčové časti systému sú implementované, nasadené a otestované:

### ✔ Čo funguje:
- Katalóg tričiek s variantmi a náhľadmi  
- Košík + kompletný checkout proces  
- Ukladanie objednávok do databázy  
- Admin zóna (objednávky, detail objednávky, zmena stavu)  
- Generovanie PDF faktúr  
- Základné štatistiky (počet objednávok, tržby, top produkty)  
- Autentifikácia administrátora  
- Responzívny frontend pre mobil a desktop  

### ❗ Čo nebolo súčasťou MVP:
- Platobná brána  
- Skladový systém  
- Multi-tenant režim pre viacerých predajcov  
- Pokročilá personalizácia dizajnov  

---

# 🧩 Výstupy podľa SDLC / V-modelu

## 1️⃣ Business požiadavky
- Vytvoriť jednoduchý systém na objednávanie tričiek  
- Zjednodušiť proces pre zákazníka (výber → košík → objednávka)  
- Umožniť adminovi spravovať objednávky, faktúry a produkty  
- Minimalizovať ručnú administratívu  
- Systém má byť jednoduchý na používanie a ľahko rozšíriteľný  

**Status:** ✔ kompletne naplnené

---

## 2️⃣ Top Level Architecture  
**Hotová architektúra:**
- Frontend aj backend v rámci Next.js monorepa  
- PostgreSQL databáza (Railway)  
- Prisma ORM vrstva  
- API Routes pre komunikáciu FE ↔ BE  
- Admin modul v rámci samostatného route segmentu  
- Moduly:
  - Catalog  
  - Orders  
  - Admin  
  - Invoices  
  - Auth  

**Status:** ✔ implementované a funkčné

---

## 3️⃣ Solution Architecture  

### Hlavné komponenty:
- **Frontend** – React / Next.js 14 App Router  
- **Backend** – API Routes (REST štýl)  
- **Databáza** – PostgreSQL  
- **ORM** – Prisma (modely: Product, Variant, Order, OrderItem, Invoice, User)  
- **Auth** – NextAuth (credentials provider)  
- **PDF Engine** – pdfkit  

### Integrácia modulov:
- Objednávka → vytvorí sa Order + OrderItems  
- Pri potvrdení → automaticky sa vytvorí Invoice  
- Admin môže meniť stav (pending, paid, shipped…)  
- Faktúry sú generované na požiadanie  

**Status:** ✔ finálne použité v projekte

---

## 4️⃣ Analysis  

### Analyzované oblasti:
- UX flow pre zákazníka (čo najmenej krokov)  
- Najčastejšie varianty tričiek (veľkosť, farba, typ)  
- Spôsob ukladania údajov  
- Validácia vstupov  
- Minimalizácia bariér pri objednávke (bez registrácie)  

**Status:** ✔ analýza integrovaná do návrhu aj implementácie

---

## 5️⃣ Design  

### Hotové návrhy:
- UI pre zákazníka (jednoduché, čisté, bez rušivých prvkov)  
- UI pre admina (tabuľky, filtre, detail objednávky)  
- Farby a typografia v minimalistickom „merch“ štýle  
- Responzívny layout  
- Informačná architektúra katalógu  

**Status:** ✔ dizajn zrealizovaný a implementovaný  

---

## 6️⃣ Implementation  

### Implementované moduly:
- **Katalóg produktov**  
- **Košík** (Persistované v localStorage)  
- **Checkout** + validácia  
- **Objednávky** (DB zápis, emailový súhrn voliteľne)  
- **Admin** (objednávky, faktúry, štatistiky)  
- **Faktúry** – generovanie PDF  
- **Autentifikácia admina**  

### Technológie:
- Next.js  
- React  
- Prisma  
- PostgreSQL  
- pdfkit  
- Tailwind CSS  

**Status:** ✔ kompletná implementácia MVP

---

## 7️⃣ Verification & Testing  

### Testovanie zahŕňalo:
- Funkčné testy objednávkového procesu  
- Testy API endpointov  
- Testy databázových operácií  
- Testy faktúr (PDF rendering)  
- UX testovanie – 3–5 používateľov  
- Mobilné zariadenia (iOS/Android)

### Záver testovania:
- Základné tokové scenáre bez chýb  
- Admin rozhranie stabilné  
- PDF faktúry generované správne  

**Status:** ✔ testovanie dokončené

---

## 8️⃣ Operation  

### Deployment:
- **Frontend + Backend:** Vercel  
- **Databáza:** Railway PostgreSQL  
- **Udržiavateľnosť:**  
  - modulárna architektúra  
  - čisté API endpointy  
  - jednoduché pridávanie nových produktov alebo modulov  

### Reálny beh:
- Systém pripravený na používanie malou značkou alebo merch creatorom  

**Status:** ✔ systém pripravený na prevádzku  

---

# 🏆 Finálny produkt

## 🔧 Reálne dodané:
- Plne funkčný TShirt Print System  
- Admin dashboard  
- Objednávky s detailmi  
- Fakturačný modul  
- PDF export  
- UX/UI frontendu aj adminu  
- Kompletný KNIFE balík dokumentácie  
- README + technická dokumentácia  

## 📸 Ako to vyzerá (screeny — doplníš neskôr)
*(Stačí doplniť obrázky z prostredia frontendu a adminu.)*

## 📂 Repo link
- **GitHub projekt:** https://github.com/DominikP123  
- (Doplň konkrétny repozitár projektu ak máš nový)

---

# 🧭 Porovnanie s Project Summary

| Plánované v Project Summary | Reálne dodané |
|-----------------------------|---------------|
| MVP s objednávkami         | ✔ hotové |
| Admin dashboard             | ✔ hotové |
| Faktúry                     | ✔ hotové |
| Štatistiky                  | ✔ základné hotové |
| Deployment                  | ✔ hotový |
| Dizajn + UX                 | ✔ implementované |
| Dokumentácia                | ✔ dokončená |

### Celkové zhodnotenie:
Projekt bol naplnený **nad rámec pôvodného plánu**.  
MVP je stabilné, funkčné a pripravené na ďalší vývoj.

---

## Navigácia
- [↩️ Späť](../index.md)
