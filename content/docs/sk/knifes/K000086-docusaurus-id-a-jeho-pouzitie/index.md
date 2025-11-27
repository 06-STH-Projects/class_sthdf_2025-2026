---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000086"
guid: "9e070810-b93a-46e3-89cc-ea0ec118e9df"
dao: "knife"
title: "K000086 – Docusaurus-ID-a-jeho-pouzitie"
description: ""
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: ""
type: ""
priority: "no"
tags: []
locale: "sk"
created: "2025-10-22"
modified: "2025-10-22T08:50:00Z"
status: "backlog"
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
author_id: ""
author_did: ""
fm_reserved1: ""
fm_reserved2: ""
sidebar_label: "K000086 – Docusaurus-ID-a-jeho-pouzitie"
---

# Docusaurus-ID-a-jeho-pouzitie

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
<!-- fm-visible: start -->
> **GUID:** `9e070810-b93a-46e3-89cc-ea0ec118e9df`
> **Status:** `backlog` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## Čo je `id` v Docusauruse

Každý dokument v Docusauruse má **interný identifikátor (`id`)**, ktorý slúži ako trvalý odkaz na daný obsah. Tento `id`:
- určuje jednoznačne dokument v rámci celej lokalizácie (napr. `sk/knifes/K000001`),
- používa sa v konfiguráciách ako `sidebars.ts`, `link` komponenty, alebo `redirects`,
- umožňuje stabilný routing aj po zmene názvu alebo presune súboru.

Ak dokument **nemá explicitne definované `id` vo Front Matter**, Docusaurus ho automaticky odvodení zo štruktúry priečinka a názvu súboru (napr. `sk/knifes/moja-tema/index.md` → `sk/knifes/moja-tema`).

---

## Prečo je dôležité mať unikátne `id`

Ak sa v projekte vyskytnú dve rovnaké `id`, Docusaurus nedokáže jednoznačne rozlíšiť, ktorý dokument sa má zobraziť — build potom skončí chybou:

```
The docs plugin found docs sharing the same id: "sk/knifes/KXXXXXXX"
```

---

## Najlepšie praktiky

1. Každý KNIFE má mať svoj vlastný `id` vo formáte `K000XXX` podľa CSV indexu.
2. Nepoužívaj rovnaké `id` medzi jazykmi (napr. SK a EN), ak dokumenty majú rôzny obsah.
3. Ak potrebuješ dokument z procesu alebo šablóny, môžeš použiť dočasné `id` ako `TMP-KNIFE-YYYYMMDD-XXX`.
4. Pre systémové dokumenty (napr. home, overview) možno použiť špeciálne `id` ako `KNIFE_HOME`, `KNIFE_OVERVIEW`.

---

## Ako sa `id` používa v sidebaroch

V súbore `publishing/docusaurus/sidebars.ts` sa dokumenty referencujú práve podľa `id`.  
Príklad:

```ts
{
  type: 'doc',
  id: 'sk/knifes/K000088-docusaurus-id-a-jeho-pouzitie',
  label: 'Docusaurus ID a jeho použitie'
}
```

Ak v sidebaroch použiješ `id`, nemusíš sa obávať o presné cesty k súborom — Docusaurus si ich vyrieši sám.

---

## Záver

`id` je ako DNA každého dokumentu v Docusauruse.  
Zaručuje stabilitu odkazov, jednoznačnosť v build procese a možnosť bezpečne reorganizovať dokumentáciu bez straty navigácie.