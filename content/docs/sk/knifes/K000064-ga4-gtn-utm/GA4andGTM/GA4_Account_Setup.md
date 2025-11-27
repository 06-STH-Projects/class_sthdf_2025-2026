---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000064-ga4-gtn-utm-05"
guid: "6e70607a-6f8a-42b5-be62-f99d801e9e21"
dao: "knife"
title: "GA4 Account Setup Checklist"
description: "-"
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "-"
type: "-"
priority: "no"
tags: ["KNIFE"]
locale: "sk"
created: "2025-09-24"
modified: "-"
status: "inprogress"
privacy: "public"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: ""
author_id: "-"
author_did: "-"
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "GA4 Account Setup Checklist"
---
# GA4 Account Setup Checklist

<!-- fm-visible: start -->
> **GUID:** `6e70607a-6f8a-42b5-be62-f99d801e9e21`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

**Author:** Roman Kazička  
**Date:** 2025-08-21  
**Context:** Zakladanie Google Analytics 4 účtu pre doménu SystemThinking.sk

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

## 🗂️ Diagram GA4 vzťahov

```plaintext
Google Account (Identita)
│
├── Google Analytics Account (GA4) ← organizačná jednotka v GA
│   │
│   ├── Property: SystemThinking.sk (GA4 Property)
│   │   │
│   │   │   ├── Data Stream: Web (https://systemthinking.sk)
│   │   │   ├── Data Stream: iOS App (voliteľné)
│   │   │   └── Data Stream: Android App (voliteľné)
│   │   │
│   │   └── Property: Ďalší projekt (ak potrebuješ)
│
└── Iný Google Account (napr. osobný Gmail)
    └── môže mať prístup do rovnakého GA účtu (ako admin/editor)
```

---

## 🎯 Odporúčanie
- Hlavný účet pre GA4 → `roman.kazicka@systemthinking.xyz`  
- Pridaj osobný Gmail ako záložného admina pre istotu  
- Použi Tag Manager pre jednoduchšiu správu meracích kódov
