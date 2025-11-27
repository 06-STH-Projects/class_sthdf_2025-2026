---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-24T19:46:59.268190+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "43949005-606e-4e69-aeb3-c145771e5f23"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "sthdf"

# Názov zápisu – dopĺňa používateľ
title: "deliverables"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "{{DESCRIPTION}}"


# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Roman Kazicka"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: ""

# Priorita (low/medium/high) – voliteľné
priority: ""

# Tagy – odporúča sa 2–6 tagov.
# Typy tagov:
#   - rámce: knife, 7ds, sdlc, q12
#   - účel: tutorial, guide, pattern, case-study
#   - téma: git, backup, ai, communication
#   - úroveň: beginner, intermediate, advanced
tags: []


# 🌍 LOCALIZATION -----------------------------------------------------

# Jazyk dokumentu – doplní skript podľa štruktúry
locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

# Dátum vytvorenia – generuje skript
created: "2025-11-24 20:46"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2025-11-24 20:46"

# Stav dokumentu – default "backlog"
status: "backlog"

# Viditeľnosť – default "public"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

# Držiteľ práv k obsahu – dopĺňa skript
rights_holder_content: "Roman Kazicka"

# Systémový vlastník práv
rights_holder_system: "CAA / KNIFE / LetItGrow"

# Licencia
license: "CC-BY-NC-SA-4.0"

# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."

# Copyright
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

# Repozitár pôvodu
origin_repo: ""

# URL pôvodného repozitára
origin_repo_url: ""

# Commit pôvodu
origin_commit: ""

# Branch pôvodu
origin_branch: ""

# Systém pôvodu (CAA/KNIFE/STHDF…)
origin_system: "CAA"

# Pôvodný autor
origin_author: "Roman Kazicka"

# Importovaný zdroj
origin_imported_from: ""

# Dátum importu
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- SDLC_INSTANCE_ID: 2025_ST_010 -->

<!-- FM:INJECT FROM FM-Core.md -->
<!-- TEMPLATE-KIND: sthdf/student-deliverables -->
<!-- TEMPLATE-VERSION: v1.0 (2025-11-10) -->
<!-- GEN-NOTE: new_item_instance.py inserts FM above, keeps USER-HEADER as user-editable, BODY as scaffold, NAV as standard -->

<!-- USER-HEADER:BEGIN -->
# Študentské deliverables

Toto je študentský rozcestník k povinným výstupom. Text v tejto sekcii si **môže študent upraviť** (napr. krátky kontext, link na repo, poznámky).
<!-- USER-HEADER:END -->

<!-- BODY:BEGIN -->
Nižšie nájdeš rýchle odkazy na všetky povinné výstupy. Odkazy sú **relatívne**, takže štruktúru môžeš neskôr presúvať.

## Navigácia
- 🧑‍🎓 **A1 – About me:** [otvor](./01_about-me.md)
- 🧩 **A2 – Knowledge Contribution (KNIFE):** [otvor](./02_knowledge-contribution.md)
- 🧭 **A3 – Project Summary:** [otvor](./03_project-summary.md)
- 🏁 **A4 – Project Outcomes:** [otvor](./04_project-outcomes.md)
- 🎤 **05 – Pitch Presentation:** [otvor](./05_pitch_presentation.md)
- 🎬 **06 – Final Presentation:** [otvor](./06_final_presentation.md)
- 🪞 **07 – Reflexia:** [otvor](./07_reflexia.md)

> ℹ️ Poznámka k **A2 – Knowledge Contribution**: Toto deliverable je v systéme reprezentované ako **KNIFE** (štandardná šablóna KNIFE s vlastným FM a procesom). Tento index odkazuje na A2 súbor, ktorý smeruje na príslušný KNIFE podľa pokynov kurzu.
  
## Rýchly checklist
- [ ] A1 vyplnené  
- [ ] A2 (KNIFE) publikované / referencované  
- [ ] A3 schválené učiteľom  
- [ ] A4 doplnené o odkazy (repo, video, demo)  
- [ ] Pitch hotový (5–7 min)  
- [ ] Finálna prezentácia hotová (10–12 min)  
- [ ] Reflexia pridaná  

## Ako odovzdávať (mini-návod)
1. Otvor príslušnú stránku (A1–A4, 05–07) a **doplň obsah**.  
2. Pridaj odkazy na **repozitár, video a demo** (ak máš).  
3. Ulož zmeny, commitni a pushni:  
   ```bash
   git add .
   git commit -m "Update deliverables"
   git push
   ```
<!-- BODY:END -->

<!-- NAV:BEGIN -->
---

## Navigácia
- ↩️ [Späť na študenta](../index.md)  

<!-- NAV:END -->
