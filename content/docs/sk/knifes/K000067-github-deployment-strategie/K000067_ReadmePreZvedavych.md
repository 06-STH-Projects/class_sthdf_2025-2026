---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000067-github-deployment-strategie"
guid: "c0804116-d26d-40ed-991c-e1aaeb6734d4"
dao: "knife"
title: "GitHub Deployment Strategie - Pre Zvedavých"
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
#sidebar_label: "GitHub Deployment Strategie - Pre Zvedavých"
---
# GitHub Deployment Strategie - Pre Zvedavých

<!-- fm-visible: start -->
> **GUID:** `c0804116-d26d-40ed-991c-e1aaeb6734d4`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

Tento návod je určený pre študentov, ktorí chcú rýchlo a jednoducho nasadiť svoj projekt pomocou GitHubu.

## 3 kroky pre Branch Deploy (predvolené pre triedu)

1. **Vytvorte vetvu**  
   Vytvorte novú vetvu vo vašom repozitári, napríklad `deploy`.

2. **Pushnite zmeny**  
   Nahrajte svoje zmeny do tejto vetvy pomocou príkazu:
   ```
   git push origin deploy
   ```

3. **Skontrolujte nasadenie**  
   Po pushnutí zmeny sa automaticky spustí nasadenie a vaša stránka bude dostupná na GitHub Pages.

## 🔎 Porovnanie možností (jednoduché vysvetlenie)

|                     | 🌿 Branch Deploy          | ⚙️ Actions Deploy             | 🌐 Vlastná doména             |
|---------------------|--------------------------|------------------------------|------------------------------|
| **Jednoduchosť**     | 👍 Veľmi jednoduché       | 🤓 Trochu zložitejšie         | 😎 Nastavenie domény          |
| **Spoľahlivosť**     | ✅ Spoľahlivé             | ✅ Veľmi spoľahlivé           | ⚠️ Závisí od domény           |
| **Pre koho sa hodí** | 🧑‍🎓 Začiatočníci         | 👩‍💻 Pokročilejší používatelia | 🏠 Projekty s vlastnou značkou |
| **Vlastná doména**   | ❌ Nie                   | ❌ Nie                       | ✅ Áno                       |

---

## Pre zvedavých: Actions Deploy

Ak chcete mať väčšiu kontrolu nad nasadením, môžete použiť GitHub Actions. Tento spôsob umožňuje automatizovať nasadenie podľa vlastných potrieb a spúšťať ho napríklad pri každom pushi do hlavnej vetvy.

---

## Poznámka o vlastnej doméne (len pre projekty)

Ak máte projekt, ktorý chcete nasadiť na vlastnú doménu, môžete si ju nastaviť cez GitHub Pages v nastaveniach repozitára. Pre triedové projekty to nie je potrebné. Pri výbere názvu domény dodrž [naming konvenciu](./K000067_NamingConventionPreDomeny.md) – nepoužívaj podtržník (`_`), iba písmená, čísla a pomlčky.
