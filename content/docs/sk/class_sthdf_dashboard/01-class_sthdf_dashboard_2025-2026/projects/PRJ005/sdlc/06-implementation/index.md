---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:48.004708+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "4aa130a0-d138-4db2-8437-fc0883ecf1f2"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "06 implementation"

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
created: "2025-11-28 16:54"

# Dátum poslednej úpravy – dopĺňa človek
modified: "2025-11-28 16:54"

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

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

# 06-Implementation

### 5.3. Finálny Kód
S novým hardvérovým návrhom som finalizovala aj kód pre Arduino. Kód neustále monitoruje analógový pin pripojený k sondám. Ak hodnota klesne pod prahovú úroveň (voda chýba), aktivuje pin, ktorý spína čerpadlo.

```cpp
// Definovanie pinov
constexpr int testPin = A0;      // Vstupny pin na citanie stavu vodivosti
constexpr int controlPWM = 3;    // Vystupny pin na ovladanie cerpadla

void setup() {
  pinMode(testPin, INPUT);
  pinMode(controlPWM, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  static int sensorValue = 0, u = 0;
  sensorValue = analogRead(testPin);

  // Ak je hodnota nízka (pod 60), voda chýba -> aktivuj cerpadlo
  if (sensorValue < 60) {
    u = 255;
  } else {
    u = 0;
  }
  analogWrite(controlPWM, u);
  delay(500);
}
```
### 5.4. 3D Modelovanie a Príprava na Tlač
Na základe nákresov a finálnych rozmerov elektroniky som vytvorila detailný 3D model misky. Model sa skladá z troch častí: vnútornej misky, vonkajšieho dekoratívneho plášťa a spodného krytu, ktorý chráni elektroniku.

<figure>
  <img src="../obrazky/3d-model-rozpad.png" alt="Vizuálna inšpirácia" width="500" />
  <figcaption>Obr. 6: Explodovaný pohľad na jednotlivé časti 3D modelu.</figcaption>
</figure>

<figure>
  <img src="../obrazky/3d-model-pohlady.png" alt="Vizuálna inšpirácia" width="500" />
  <figcaption>Obr. 7: Finálny 3D model z rôznych uhlov pohľadu pripravený na 3D tlač.</figcaption>
</figure>

### 5.5. Výsledný Produkt
Po vytlačení všetkých častí a finálnej montáži elektroniky vznikol plne funkčný prototyp, ktorý spĺňa všetky pôvodné požiadavky.

<figure>
  <img src="../obrazky/finalny-produkt.jpg" alt="Vizuálna inšpirácia" width="500" />
  <figcaption>Obr. 8: Finálny produkt – funkčná automatická miska pripravená na použitie. (Sem vlož fotku reálneho produktu)</figcaption>
</figure>


- [Odkazy na kód / repozitáre](./code-links.md)

**Navigation:** [⬆️ SDLC](../index.md) · [⬅️ Projekt](../../index.md)
