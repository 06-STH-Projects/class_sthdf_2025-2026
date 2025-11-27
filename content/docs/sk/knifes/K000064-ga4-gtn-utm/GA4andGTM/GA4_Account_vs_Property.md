---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000064-ga4-gtn-utm-06"
guid: "9c977a4c-1cdb-4106-8b0d-6c3ebb7e4331"
dao: "knife"
title: "Google Analytics: Account vs Property vs Stream"
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
#sidebar_label: "Google Analytics: Account vs Property vs Stream"
---
# Google Analytics: Account vs Property vs Stream

<!-- fm-visible: start -->
> **GUID:** `9c977a4c-1cdb-4106-8b0d-6c3ebb7e4331`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

**Author:** Roman Kazička  
**Date:** 2025-08-22  
**Context:** Rozhodovanie kedy založiť nový GA Account vs Property

---

## 🗂️ Hierarchia v GA4

```plaintext
Google Account (login) = identita
   │
   └── Google Analytics Account (organizačný rámec)
        │
        ├── Property 1 (napr. systemthinking.sk)
        │     ├── Data Stream: Web
        │     ├── Data Stream: iOS App
        │     └── Data Stream: Android App
        │
        ├── Property 2 (napr. blog.systemthinking.sk)
        │     └── Data Stream: Web
        │
        └── Property 3 (napr. interný projekt)
              └── Data Stream: Web
```

---

## 🔑 Kedy použiť **nový Account**

- **Iný majiteľ alebo firma**  
  - Napr. SystemThinking.sk a CurioBits.dev by mali mať oddelené účty.  
- **Rôzni klienti**  
  - Každý klient má vlastný Account, aby si nemiešal dáta.  
- **Právne/účtovné oddelenie**  
  - Iné GDPR povinnosti, iné krajiny, iná fakturácia (Google Ads).  
- **Potrebné úplné oddelenie prístupov**  
  - Účet má vlastných adminov, ktorí nemusia mať prístup do iných účtov.

---

## 🔑 Kedy použiť **novú Property** (v rámci jedného Accountu)

- Viacero webov/appiek v **tej istej firme**.  
  - Napr. `systemthinking.sk`, `blog.systemthinking.sk`, mobilná appka.  
- Spravuje ich ten istý tím a patria tej istej organizácii.  
- Potrebuješ mať spoločné prístupy, ale oddelené merania.  

---

## 🔑 Kedy použiť **nový Data Stream**

- Iný kanál v rámci jednej Property.  
  - Napr. Web + iOS + Android pre jednu aplikáciu.  
- Všetky streamy zdieľajú spoločný reporting, ale identifikujú sa samostatným Measurement ID.

---

## 🎯 Jednoduché pravidlo

- **Nový Account** → keď je iný **majiteľ / firma**  
- **Nová Property** → keď je iný **projekt v rámci tej istej firmy**  
- **Nový Data Stream** → keď je iný **kanál toho istého projektu**
