# Project Task Management – Minimal, GitHub-first

_Last updated: 20250810-123634_

## Goals
- Jedno miesto pre úlohy (**Issues**) + vizualizácia (**Projects**).
- Zachovať jednoduchosť (inbox → triáž → realizácia).
- Prenositeľné do ZenHub bez migrácie údajov.

## Structure
- **Repo:** `999-github-management` (centrálny inbox).
- **Project:** `CAA & Work Management Dashboard` (multi-view).
- **Labels (taxonomy):**
  - **Topics:** `KNIFE-K***`, `CAA-Core`, `GH-Admin`, `STH-Class`, `Infra`, `Docs`, `Automation`.
  - **Priority/State:** `urgent`, `high`, `medium`, `low`, `idea`, `research`, `blocked`.
- **Milestones:** `2025-Q3`, `2025-Q4`, `Semester-2025-2026-Part1`, `Release-v1.0`.

## Views (suggested)
- **Kanban:** Inbox → In Progress → Done.
- **Priorities:** filter `label:urgent` + due date.
- **KNIFE:** filter `label:KNIFE-*`.
- **Quarter planning:** filter `milestone:2025-Q3`.

## Daily Flow
1. Rýchly zápis → vytvor **Issue** s minimom (názov, popis, label).
2. Denná **triáž** → doplň milestone, prioritu, presuň na boarde.
3. Uzavretie úlohy = presun do **Done** (automaticky).

## Templates
V `.github/ISSUE_TEMPLATE/` použi:
- `task.md` – jednorazová úloha.
- `epic.md` – väčší celok (voliteľné, ak nepoužívaš ZenHub Epics).

## Moving 7Ds into language folders
Pre `knife_preview` (Docusaurus/MkDocs/Pages) maj:
```
docs/
  sk/
    7Ds/
      D1.md
      ...
    knife/
      KNIFE_Overview_List.md
      KNIFE_Overview_Details.md
  en/
    7Ds/   # (preklad neskôr)
    knife/ # (preklad neskôr)
```
> Ak sú 7Ds momentálne v roote, **presuň ich do `docs/sk/7Ds/`**. Preklady neskôr pridáš do `docs/en/7Ds/`.
