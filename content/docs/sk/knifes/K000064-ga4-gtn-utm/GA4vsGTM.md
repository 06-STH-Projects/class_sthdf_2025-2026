---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000064-ga4-gtn-utm-02"
guid: "555e883c-7833-44e2-b77b-6dcb4da50a2a"
dao: "knife"
title: "GA4 a GTM – logický model a nastavenie"
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
#sidebar_label: "GA4 a GTM – logický model a nastavenie"
---
# GA4 a GTM – logický model a nastavenie

<!-- fm-visible: start -->
> **GUID:** `555e883c-7833-44e2-b77b-6dcb4da50a2a`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## Hierarchia GA4

GA4 je postavené na nasledujúcej štruktúre:

1. **Účet (Account)**  
   – najvyššia organizačná jednotka (napr. *SystemThinking*).

2. **Vlastníctvo (Property)**  
   – samostatný dátový kontajner (napr. *LetItGrow.dev*).  
   – má vlastné nastavenia: časové pásmo, menu, konverzie, publika, prístup.

3. **Dátové streamy (Data Streams)**  
   – zdroj dát (napr. `Web – letitgrow.dev`).  
   – každý stream má svoje **Measurement ID (G-XXXXXX)**.  
   – väčšinou stačí **1 stream = 1 doména**.

4. **Eventy a parametre**  
   – všetko sa v GA4 meria ako event (`page_view`, `scroll`, `click`, `file_download`).

5. **Metriky a dimenzie**  
   – metriky = číselné hodnoty (počet návštev, čas strávený, kliky),  
   – dimenzie = kvalitatívne hodnoty (názov stránky, krajina, zariadenie).  
   – z eventov + dimenzií sa skladajú reporty.

---

## Koľko metrík potrebujem na jednu doménu?

- GA4 ti už automaticky meria základné metriky:  
  - počet návštevníkov (Users),  
  - počet návštev (Sessions),  
  - počet zobrazení stránky (Page views),  
  - najnavštevovanejšie stránky (`page_location`, `page_title`).  

👉 Ak chceš vedieť, čo je **najpopulárnejšie na doméne LetItGrow.dev**, stačí zapnúť **Enhanced Measurement** a používať dimenzie `Page title` alebo `Page path`.  
Nemusíš manuálne pridávať metriku do každej vetvy.

Vlastné metriky/eventy pridávaš len vtedy, keď chceš merať špecifické akcie (klik na tlačidlo, stiahnutie PDF, odoslanie formulára).

---

## Kedy do stratégie vstupuje Google Tag Management - GTM?

- **GA4 bez GTM**  
  - vložíš priamo `gtag.js` do webu,  
  - meriaš len základné eventy.

- **GA4 s GTM (Google Tag Manager)**  
  - do webu vložíš len GTM kontajner,  
  - všetko ostatné (GA4, Ads, custom eventy) riadiš cez GTM,  
  - máš plnú kontrolu a flexibilitu.

---

## Logický model GTM

1. **GTM Account (Účet)** – firma alebo organizácia (napr. *SystemThinking*).  
2. **GTM Container (Kontajner)** – zvyčajne 1 web (napr. *LetItGrow.dev*).  
3. **Tags (Tagy)** – kódy, ktoré sa spúšťajú (GA4 event, Ads, custom script).  
4. **Triggers (Spúšťače)** – určujú kedy sa tag spustí (page_view, klik, formulár).  
5. **Variables (Premenné)** – parametre, ktoré sa odovzdajú tagom (napr. názov stránky).

---

## Väzby GA4 ↔ GTM

- V GA4 máš **Property → Data Stream** s Measurement ID `G-XXXXXXX`.  
- V GTM vytvoríš **GA4 Configuration tag** a vložíš tam toto ID.  
- Všetky eventy posiela GTM cez tento config.  

👉 Zjednodušený model:

## Google Account (Identita / Login)
│
├── Google Analytics Account (GA4)
│   │
│   ├── Property (napr. SystemThinking.sk)
│   │   │
│   │   ├── Data Stream: Web
│   │   ├── Data Stream: iOS App
│   │   └── Data Stream: Android App
│   │
│   └── Property: ďalší projekt
│
└── Iné Google služby (Tag Manager, Ads, YouTube, Drive…)

## Vysvetlenie vrstiev:
1.	Google Account (identita)
- login, ktorý drží vlastníctvo GTM účtu (rovnako ako pri GA4).
2.	Tag Manager Account
- organizačná jednotka v GTM (môžeš mať viac účtov, ale väčšinou stačí jeden pre firmu/projekt).
3.	Container (kontajner)
- zodpovedá jednej platforme (napr. web, iOS, Android).
- každý Container má vlastný kód (GTM-XXXXXX), ktorý vložíš do webu alebo appky.
4.	Tagy, Triggery, Premenné
- konfigurácie v rámci kontajnera, ktoré definujú, čo sa meria a kedy.

### Príklad
GA4 Account
 └─ Property: LetItGrow.dev
     └─ Data Stream (Web) → Measurement ID

## Google Account (Identita / Login)
│
└── Google Tag Manager Account
    │
    ├── Container: Web (napr. systemthinking.sk)
    │   ├── Tagy
    │   ├── Triggery
    │   └── Premenné
    │
    ├── Container: iOS App
    └── Container: Android App

## 🔑 Vysvetlenie vrstiev:
1.	Google Account (identita)
- login, ktorý drží vlastníctvo GTM účtu (rovnako ako pri GA4).
2.	Tag Manager Account
- organizačná jednotka v GTM (môžeš mať viac účtov, ale väčšinou stačí jeden pre firmu/projekt).
3.	Container (kontajner)
- zodpovedá jednej platforme (napr. web, iOS, Android).
- každý Container má vlastný kód (GTM-XXXXXX), ktorý vložíš do webu alebo appky.
4.	Tagy, Triggery, Premenné
-  konfigurácie v rámci kontajnera, ktoré definujú, čo sa meria a kedy.

⸻

### Príklad
GTM Account
 └─ Container: LetItGrow.dev
     ├─ Tags (GA4 Config, Custom Events, Ads…)
     ├─ Triggers (kedy sa spustia)
     └─ Variables (aké dáta sa odovzdajú)

##  Praktické odporúčania

- Stačí 1 GTM Account pre celú organizáciu.
- Pre každý web/projekt vytvor samostatný Container.
- V GA4 si drž jedno vlastníctvo na doménu, a doň môžeš mať viac streamov (web, app).
- Firemné projekty (KNIFE, STHDF, LetItGrow.dev) – daj každému svoj Property a Web Stream.
