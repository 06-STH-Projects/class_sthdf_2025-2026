---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000064-ga4-gtn-utm-09"
guid: "b993aa83-e659-40e6-aaa9-8c63be8302d9"
dao: "knife"
title: "Google Account vs Google Workspace"
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
#sidebar_label: "Google Account vs Google Workspace"
---
# Google Account vs Google Workspace

<!-- fm-visible: start -->
> **GUID:** `b993aa83-e659-40e6-aaa9-8c63be8302d9`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

**Author:** Roman Kazička  
**Date:** 2025-08-21  
**Context:** Firemný e-mail `roman.kazicka@systemthinking.xyz` bez Google Workspace (solo use)

---

## 🔑 Firemný účet s vlastnou doménou vs Workspace

- Google ti umožní použiť **firemnú adresu** (napr. `roman.kazicka@systemthinking.xyz`) ako **login do Google služieb** bez toho, aby si mal Google Workspace.  
  - Pri zakladaní účtu vyberieš možnosť **„Na osobné použitie“**.  
  - Vtedy je to **osobný Google účet**, ktorý má login na vlastnej doméne.  
  - Funguje vo všetkých službách (Analytics, Tag Manager, Ads, YouTube, Drive).  
  - Účet patrí **individuálne tebe**, nie organizácii.

- Google Workspace je platená služba, kde sa firemná doména pripojí do **admin konzoly** a každý používateľ má svoj účet spravovaný firmou.  
  - Účty sú vlastníctvom organizácie.  
  - Výhodné pri tímoch a väčšom počte používateľov.  
  - Zahŕňa Gmail na vlastnej doméne, firemný Drive a správu prístupov.

➡️ **Záver:**  
Na solo použitie nepotrebuješ Workspace. Stačí vytvoriť **osobný Google účet s loginom `roman.kazicka@systemthinking.xyz`** a použiť ho na všetky Google služby.  

---

## 🗂️ Diagram vzťahov

```plaintext
Google Account (Identita)
│
├── roman.kazicka@systemthinking.xyz   ← Osobný Google účet s vlastnou doménou
│   │
│   ├── Google služby (Analytics, Tag Manager, Ads, YouTube, Drive, ...)
│   │
│   └── Pridaní používatelia (napr. osobný Gmail ako záložný admin)
│
└── Google Workspace (ak by bol použitý)
    ├── Centrálna správa účtov
    ├── Firemný Gmail a Drive
    └── Účty vlastnené organizáciou
```

---

## 📊 Porovnanie: Osobný Google účet vs Workspace

| Kritérium | Osobný Google účet (aj s vlastnou doménou) | Google Workspace (firemný účet) |
|-----------|--------------------------------------------|----------------------------------|
| **Cena** | ✅ Zadarmo | 💲 cca 5–12 €/mesačne / používateľ |
| **Identita** | Účet patrí konkrétnej osobe (napr. `roman.kazicka@systemthinking.xyz`) | Účty spravuje firma (napr. `meno@systemthinking.xyz`), vlastnené organizáciou |
| **Použitie služieb (GA4, GTM, Ads, Drive, YouTube...)** | Funguje rovnako – žiadne obmedzenie | Funguje rovnako – navyše možnosť firemného vlastníctva |
| **Gmail s doménou** | ❌ Nie (musíš používať vlastného mail providera) | ✅ Áno, Gmail priamo pre @systemthinking.xyz |
| **Drive/Docs** | Len individuálny priestor | Firemný Drive, zdieľané priečinky, centrálna správa |
| **Správa používateľov** | Nie je – každý účet si spravuje vlastník sám | Centrálna admin konzola (pridávanie/mazanie účtov, nastavenie hesiel, 2FA, prístupové politiky) |
| **Bezpečnosť** | Individuálne nastavenia | Firemné politiky (povinná 2FA, kontrola zariadení, audity) |
| **Škálovanie (viac ľudí)** | Nevhodné | Optimálne pre tímy |
| **Vlastníctvo účtov** | Účet patrí osobe | Účty patria firme |
| **Typické použitie** | Freelance, solo projekty | Firmy, školy, agentúry |

---

## 🎯 Odporúčanie
- Pre aktuálne potreby → stačí **Osobný Google účet** s `roman.kazicka@systemthinking.xyz`.  
- Workspace zvažuj iba v prípade väčšieho tímu a potreby centralizovanej správy.
