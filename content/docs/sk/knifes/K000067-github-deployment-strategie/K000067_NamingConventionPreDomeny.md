---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000067-02"
guid: "cc334b31-6f4f-4dbd-b5f2-c3c2e8c9bc83"
dao: "knife"
title: "Naming Convention pre Subdomény"
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
#sidebar_label: "Naming Convention pre Subdomény"
---
# Naming Convention pre Subdomény

<!-- fm-visible: start -->
> **GUID:** `cc334b31-6f4f-4dbd-b5f2-c3c2e8c9bc83`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

Táto dokumentácia popisuje konvenciu pomenovania subdomén používaných v rámci našich projektov a nasadení. Dodržiavanie jednotnej štruktúry a pravidiel zabezpečuje konzistenciu, lepšiu orientáciu a správu domén.

## Povolené znaky

- Malé písmená (a-z)
- Číslice (0-9)
- Pomlčka (-)

Nie sú povolené medzery, veľké písmená ani špeciálne znaky.

## Štruktúra

Subdoména je tvorená z viacerých častí oddelených pomlčkami, podľa nasledujúceho vzoru:

```
<typ>-<rok/identifikator>-<popis>
```

Kde:

- `<typ>` označuje druh subdomény (napr. `dev`, `test`, `prod`)
- `<rok/identifikator>` je rok alebo iný relevantný identifikátor nasadenia
- `<popis>` krátky opis alebo názov projektu/služby

## Typy subdomén

- `dev` – vývojové prostredie
- `test` – testovacie prostredie
- `prod` – produkčné prostredie
- `stage` – staging prostredie
- `demo` – demo alebo ukážkové prostredie

## Rok/identifikátor

- Používame štvormiestny formát roka, napr. `2024`
- Alternatívne môže byť použitý iný identifikátor, napr. číslo sprintu, verzia alebo kód projektu

## Príklady

- `dev-2024-novyprojekt` – vývojová subdoména pre projekt "novyprojekt" v roku 2024
- `prod-2023-ecommerce` – produkčná subdoména pre e-commerce projekt z roku 2023
- `test-45-beta` – testovacia subdoména pre beta verziu s identifikátorom 45
- `stage-2024-intranet` – staging prostredie pre intranet v roku 2024
- `demo-2023-prezentacia` – demo prostredie pre prezentáciu z roku 2023
