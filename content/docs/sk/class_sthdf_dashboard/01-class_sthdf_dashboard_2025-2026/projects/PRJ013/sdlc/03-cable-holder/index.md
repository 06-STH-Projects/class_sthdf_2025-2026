---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.956194+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "2856c105-3340-4c9c-a437-205306fbc9b6"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "03 solution architecture"

description: "Stručné predstavenie – profesionálne skúsenosti, vzdelanie, zručnosti a osobný profil."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Roman Kazicka"

authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "profile"
type: "case"
priority: "medium"

tags:
  - profile
  - about-me
  - career
  - skills
  - ai


# 🌍 LOCALIZATION -----------------------------------------------------

locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

created: "2025-11-28 16:54"
modified: "2025-11-28 16:54"
status: "backlog"
privacy: "public"


# ⚖ INTELLECTUAL PROPERTY -------------------------------------------

rights_holder_content: "Roman Kazicka"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazicka"


# 🔗 ORIGIN / PROVENANCE ---------------------------------------------

origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_branch: ""
origin_system: "CAA"
origin_author: "Roman Kazicka"
origin_imported_from: ""
origin_import_date: ""


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

# 03-Cable holder — Držkábel

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)

## Ako sme vyvíjali
- Otestovali sme viaceré komerčné držáky – nič nevyhovovalo (slabá fixácia, ostré hrany, zlý „return“, neestetika)
- Navrhli sme vlastný 3D model: plynulý pohyb kábla, jednoduché založenie, istý návrat, stabilita
- Iterácie podľa reálneho používania; cieľ: jednoduché, spoľahlivé, ľahko vyrábateľné riešenie

## Zlé príklady (čo nechceme)
![](../../src/bad-cableholder.png)
![](../../src/bad-cableholder2.png)
![](../../src/bad-cableholder3.png)
![](../../src/bad-cableholder4.png)

## Náš návrh
![](../../src/cableholder-2.png)
![](../../src/cableholder.jpeg)
![](../../src/cableholder.png)

## 3D model (STL)
- [Stiahnuť model STL](../../src/cableholder.stl)

## Poznámky k validácii
- Testované s rôznymi povrchmi stola a priemerom kábla
- Zber foto/video feedbacku, priebežné úpravy geometrie

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
