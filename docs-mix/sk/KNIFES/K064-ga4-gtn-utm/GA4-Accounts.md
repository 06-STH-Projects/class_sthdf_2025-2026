# GA4 Account Setup Checklist

**Author:** Roman Kazička  
**Date:** 2025-08-21  
**Context:** Firemný e-mail `roman.kazicka@systemthinking.xyz` bez Google Workspace (solo use)

---

## ✅ Workflow – Založenie nového GA4 účtu

1. **Prihlásenie**
   - Otvor [https://analytics.google.com/](https://analytics.google.com/)
   - Prihlás sa s účtom `roman.kazicka@systemthinking.xyz`  
   - Ak sa predvolene otvorí osobný Gmail, vpravo hore zvoľ → „Pridať ďalší účet“

2. **Vytvorenie účtu v GA**
   - Admin (⚙️ dole vľavo) → Stĺpec **Účet** → „Vytvoriť účet“
   - Názov účtu: `SystemThinking.sk`
   - Nastavenia zdieľania dát: nechaj default

3. **Vytvorenie Property**
   - Názov property: `SystemThinking GA4`
   - Časové pásmo: Europe/Bratislava  
   - Mena: EUR
   - (voliteľné) Info o firme

4. **Nastavenie prístupu**
   - Admin → „Správa prístupu k účtu“
   - Pridaj si osobný Gmail ako záložného admina
   - Over si, že `roman.kazicka@systemthinking.xyz` je hlavný vlastník

5. **Dátový stream**
   - Property → Dátové streamy → Web
   - URL: `https://systemthinking.sk`
   - GA vygeneruje Measurement ID (G-XXXXXXX)
   - Tento ID vlož do webu cez `gtag.js` alebo cez Google Tag Manager

---

## 🗂️ Diagram vzťahov

```plaintext
Google Account (Identita)
│
├── roman.kazicka@systemthinking.xyz   ← Tvoj Google účet
│   │
│   ├── Google Analytics Account (GA4) ← organizačná jednotka v GA
│   │   │
│   │   ├── Property: SystemThinking.sk (GA4 Property)
│   │   │   │
│   │   │   ├── Data Stream: Web (https://systemthinking.sk)
│   │   │   ├── Data Stream: iOS App (voliteľné)
│   │   │   └── Data Stream: Android App (voliteľné)
│   │   │
│   │   └── Property: Ďalší projekt (ak potrebuješ)
│   │
│   └── Google Ads / Google Tag Manager (prepájateľné služby)
│
└── Iný Google Account (napr. osobný Gmail)
    └── môže mať prístup do rovnakého GA účtu (ako admin/editor)
