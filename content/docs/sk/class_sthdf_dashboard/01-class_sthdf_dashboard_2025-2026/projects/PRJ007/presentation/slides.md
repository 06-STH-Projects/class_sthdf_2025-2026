---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.922730+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""

# 🆔 IDENTITY --------------------------------------------------------

# ID generuje CLI / skript

# Unikátne UUID – generuje skript
guid: "7fe78eb4-4cc0-4427-bd26-273a01380af8"


# 🧭 CONTEXT ---------------------------------------------------------

# DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript
dao: "class_sthdf_dashboard"

# Názov zápisu – dopĺňa používateľ
title: "slides"

# Krátky popis – dopĺňa používateľ (voliteľné)
description: "{{LED Piano Trainer Presentation}}"

# 👥 AUTHORSHIP ------------------------------------------------------

# Hlavný autor – z globálneho configu
author: "Samuel Kohút"

# Zoznam autorov – generuje skript
authors:
  - "Roman Kazicka"

# 🗂 CLASSIFICATION ---------------------------------------------------

# Nadradená kategória – môže doplniť používateľ
category: ""

# Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)
type: "Presentation"

# Priorita (low/medium/high) – voliteľné
priority: "high"

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
modified: "2026-01-14 17:54"

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
copyright: "© 2026 Samuel Kohút"


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

[🏠 Domov](../index.md)

# 🎹 LED Piano Trainer
### Svetelná pomôcka na učenie hry na klavíri

**ID Projektu:** STHDF-LEDPIANO  
**Autor:** Samuel Kohút


Finálny produkt

<figure>
  <img src="/sthdf_2025/PRJ_007/images/piano_trainer_setup.png" width="400" alt="Finálny produkt" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Finálny produkt](./images/piano_trainer_setup.png)

---

## 💡 Ako to celé začalo

Moje prvé úvahy smerovali k zjednodušeniu života v záhrade alebo tréningu psa. Premýšľal som nad automatickým trénovačom psov, automatickým robotom pre sypanie granúl, automatickými dverami do klietky pre psa a automatickým pumpovacím systémamom, ktorý by púšťal dažďovú vodu do ostatných nádob alebo len do odpadoveho miesta.

| Pomôcky pre psa (Nákres) | Záhradný systém (Nákres) |
|:---:|:---:|
| <img src="/sthdf_2025/PRJ_007/images/psie_napady.png" width="400" alt="Pomôcky pre psa (Nákres)" /> | <img src="/sthdf_2025/PRJ_007/images/zahradny_system.jpg" width="400" alt="Záhradný systém (Nákres)" /> |

<!-- GitHub preview (repo-relative) -->
![Pomôcky pre psa (Nákres)](./images/psie_napady.png)
![Záhradný systém (Nákres)](./images/zahradny_system.jpg)

*   **Problém:** Testovanie a implementovanie by vyžadovalo dochádzanie 10 hodín (Snina vs. Bratislava). To bolo počas semestra nereálne.
*   **Rozhodnutie:** Vydať sa smerom k nápadu, ktorý môžem plne vyvinúť a testovať v domácich "lab" podmienkach na stole.

---

## 🎨 Od nápadu k riešeniu (LED Piano)

Spomenul som si na svoj starý nápad. Pomôcka, ktorá ti ukáže, čo máš hrať na klavíri pomocou svetiel.

| LED Piano (nákres) |
|:---:|
| <img src="/sthdf_2025/PRJ_007/images/led_Piano_nakres.jpg" width="400" alt="LED Piano (nákres)" /> |

<!-- GitHub preview (repo-relative) -->
![LED Piano (nákres)](./images/led_Piano_nakres.jpg)

**Základný princíp** bol, že LED diódy sa zasvetia na konkrétnu farbu podľa typu ackcie, čo má používateľ vykonať:
  1.  **Zelená:** = Stlač
  2.  **Modrá:** = Drž
  3.  **Červená:** = Chyba  

**Implementácia:** Rozhodovanie medzi rozobratím klávesnice a externou lištou.


---

## 🚀 Ciele a Architektúra

### 1. Business & Účel
**Cieľ:** Vytvoriť fyzickú pomôcku, ktorá premení učenie klavíra na vizuálnu rytmickú hru. Zjednodušiť tak učenie hry na klavíri pre deti a začiatočníkov.
*   **Cieľová skupina:** Deti, úplní začiatočníci a učitelia hudby hľadajúci motivačné a interaktívne pomôcky.
*   **Business Hodnota:** Odstránenie bariéry čítania zložitých nôt v začiatkoch a možnosť vyrobenia dostupnej a replikovateľnej fyzickej pomôcky.

---

### 2. Top Level a Solution Architektúra
**LED Piano Trainer** predstavuje malý, ale kompletný systém, ktorý demonštruje princípy systémového myslenia. Skladá sa z navzájom prepojených vrstiev (hardvér, softvér a ľudská interakcia), ktoré spolu tvoria fungujúci ekosystém. Každá vrstva závisí od ostatných a celkové správanie vyplýva z ich vzájomnej spolupráce, nie z ktorejkoľvek samostatnej časti.

```mermaid
graph TD
    subgraph Human_Interaction [Ľudská vrstva]
        User[Používateľ]
    end

    subgraph Software_Layer [Softvérová vrstva - PC]
        App[Piano Trainer App]
        Transcription[AI Transkripcia]
    end

    subgraph Hardware_Layer [Hardvérová vrstva]
        Pico[Raspberry Pi Pico]
        LED[3D LED Nadstavba]
        Keyboard[MIDI Keyboard]
    end

    User -->|Sleduje svetlo| LED
    User -->|Stláča klávesy| Keyboard
    Keyboard -->|MIDI signál| App
    App -->|Validácia stlačenia| User
    App -->|Príkazy Serial| Pico
    Pico -->|Ovláda| LED
    Transcription -->|Generuje noty| App
```

#### 🛠️ Hardvérové komponenty
| Komponent | Popis | Účel |
| :--- | :--- | :--- |
| **Raspberry Pi Pico** | Mikrokontrolérová doska | Riadi LED diódy a spracúva hlavnú logiku. |
| **Breadboard** | Prototypová doska | Umožňuje prepájanie komponentov bez spájkovania. |
| **LED diódy** | Adresovateľný pás | Vizuálne indikátory pre jednotlivé klávesy klavíra. |
| **Jumper káble** | Konektory M-M | Prepájajú piny Pico dosky s LED pásom a napájaním. |
| **Napájanie / USB** | 5V USB zdroj | Napája Pico a celý LED okruh. |

#### 💻 Softvérové nástroje
| Nástroj | Popis | Účel |
| :--- | :--- | :--- |
| **Python** | Programovací jazyk | Jazyk pre vytvorenie interaktívnej aplikácie na riadenie celého flowu hrania na takomto klavíri. |
| **MicroPython** | Programovací jazyk | Jazyk pre Pico, ktorý definuje logiku ovládania LED. |
| **Thonny IDE** | Vývojové prostredie | Používa sa na písanie, ladenie a nahrávanie kódu. |

#### 💻 Infraštruktúra
| Nástroj | Popis | Účel |
| :--- | :--- | :--- |
| **GitHub Repozitár** | Verziovací systém | Bezpečné ukladanie súborov projektu a dokumentácie. |
| **OneNote** | Dokumentačný nástroj | Sledovanie progresu, inžiniersky denník a reflexia. |

---

### 3. Solution Architektúra

Solution architektúra sa zameriava na tok dát a fyzické prepojenie, ktoré umožňuje transformáciu YouTube videa na svetelný signál.

#### 🔄 Komunikačný a dátový tok (Data Pipeline)
Systém využíva distribuovanú logiku, kde sa náročné operácie vykonávajú na PC a real-time operácie na mikrokontroléri:
1.  **Spracovanie dát (PC):** Python aplikácia konvertuje zdroj (YouTube link/MIDI) na sekvenciu nôt. Využíva AI knižnice na transkripciu zvuku.
2.  **Protokol (Serial):** PC posiela serializované príkazy cez USB do Pico.
3.  **Mapovanie (Pico):** Firmvér prijme MIDI notu a podľa mapy (Key-to-LED) určí index na LED páse.
4.  **Svetelný výstup (Hardware):** Cez PIO driver rozsvieti konkrétnu WS2812B diódu s presným časovaním.

Tu je zjednodušený pohľad na komunikáciu medzi jednotlivými časťami:

```mermaid
sequenceDiagram
    participant YT as YouTube / MIDI File
    participant PC as Python App (PC)
    participant Pico as Raspberry Pi Pico
    participant LED as LED Pás

    YT->>PC: Zdrojové dáta (Audio/MIDI)
    Note over PC: AI Transkripcia (Basic Pitch)
    PC->>PC: Mapovanie nôt na LED Index
    PC->>Pico: Príkaz (Index, Farba)
    Pico->>LED: Svietenie (Vizualizácia tónu)
```

Tu je pvotný pohľaď a ako sa časom menil na finálnu detailnejšiu verziu:

Pôvodný sekvencák (first draft)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/SekvencakFirstDraft.png" width="600" alt="Pôvodný sekvencák (first draft)" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Pôvodný sekvencák (first draft)](./images/SekvencakFirstDraft.png)

Porovnanie sekvencákov (LemonTree)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/LemonTreePorovnanieSekvencakov.png" width="1200" alt="Porovnanie sekvencákov (LemonTree)" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Porovnanie sekvencákov (LemonTree)](./images/LemonTreePorovnanieSekvencakov.png)

#### 🔌 Fyzická schéma zapojenia
Tu vidíme, ako Raspberry Pi Pico slúži ako most medzi digitálnym príkazom a elektrickým signálom pre LED pás.

Schéma zapojenia Pico → LED pás

<figure>
  <img src="/sthdf_2025/PRJ_007/images/pico_led_schema.png" width="500" alt="Schéma zapojenia Pico → LED pás" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Schéma zapojenia Pico → LED pás](./images/pico_led_schema.png)

**Najdôležitejšie technické aspekty zapojenia (Podrobnejšie v Knife):**
- **Napájanie:** Pico aj LED pás sú napájané spoločne z 5V VBUS linky (USB). To zjednodušuje kabeláž.
- **Dátová linka:** Použitý je Pin GP0 s rezistorom na ochranu dátového vstupu LED pásu.
- **Izolácia:** 3D tlačená nadstavba zabezpečuje fyzickú izoláciu svetla, aby každá LED osvetľovala práve jeden „box“ prislúchajúci klávesu.

---

## 🔍 4. Analýza

Po hĺbkovej analýze fyzického MIDI keyboardu (rozobratie) som identifikoval technologické stopky:
*   **Nepriehľadný materiál:** Klávesy sú z materiálu, ktorý svetlo nepohlcuje, ale blokuje.
*   **Mechanické obmedzenie:** Čierne klávesy majú mechaniku, ktorá neumožňuje vedenie káblov bez deštrukcie nástroja.
*   **Verdikt:** Architektonická zmena z vnútorného svietenia na externú LED nadstavbu, ktorá sa položí/pripevní na piano.

Rozobraté MIDI piano (analýza mechaniky a materiálu)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/rozobrate_piano.png" width="600" alt="Rozobraté MIDI piano" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Rozobraté MIDI piano](./images/rozobrate_piano.png)

  
  
```mermaid
graph LR
    Start((Idea: LED v klávesoch)) --> Inspect[Rozobratie piana]
    Inspect --> Problem1{Materiál?}
    Inspect --> Problem2{Priestor?}
    
    Problem1 -- Nepriehľadný --> Reject[ZAMIETNUTÉ]
    Problem2 -- Nedostatok miesta --> Reject
    
    Reject --> Pivot((Riešenie: Externá nadstavba))
    Pivot --> Design[3D Modelovanie boxov]
    Design --> Success[Finálny produkt]
    
    style Reject fill:#f96,stroke:#333,stroke-width:2px
    style Success fill:#9f9,stroke:#333,stroke-width:4px
```

---

## 5. Design a 3D Tlač

Design musel vyriešiť nesúlad viacerých vecí. Najprv sa musela vyriešiť správna izolácia svetla. Hrúbka priečok musela byť optimalizovaná aby sa zamedzilo presvitaniu do susedných boxov a zároveň presvítaniu hlavnej steny. Ďalším problémom bol nesúlad medzi rozostupom LED diód a samotnej šírke klávesov. Modulárna lišta teda musela byť navrhnutá tak, aby sa LED pás v každom boxe mierne ohol. Tým by sa dído vycentrovala presne na stred klávesu.

Experimentovanie s hrúbkou priečok (izolácia svetla)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/ledbar_experiments.png" width="300" alt="Experimentovanie s hrúbkou priečok" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Experimentovanie s hrúbkou priečok](./images/ledbar_experiments.png)

Vzhľadom na tieto obmedzenia a experimenty vznikla finálna verzia boxu pre jednu oktávu + krabička pre ochranu mikrokontroléra a kabeláže.

| Finálna lišta pre LED pás | Finálna krabička pre mikrokontrolér  |
|:---:|:---:|
| <img src="/sthdf_2025/PRJ_007/images/Led_holder_model.png" width="400" alt="Finálna lišta pre LED pás" /> | <img src="/sthdf_2025/PRJ_007/images/box_model.png" width="400" alt="Finálna krabička pre mikrokontrolér" /> |

<!-- GitHub preview (repo-relative) -->
![Finálna lišta pre LED pás](./images/Led_holder_model.png)
![Finálna krabička pre mikrokontrolér](./images/box_model.png)

---

## 💻 6. Implementácia a Softvér

Softvér nie je len prehrávač, je to orchestračný nástroj. Vývoj prebiehal v troch evolučných vlnách. To ukazuje postupné vylepšovanie UX a robustnosti systému:

1.  **MVP (First Draft):** Iba základné tlačidlá, testovanie sériového spojenia a statického svietenia.
2.  **Beta (Experimentálne):** Pridanie MIDI detekcie a integrácia AI transkripcie.
3.  **Gold (Finálne):** Moderné GUI, podpora YouTube linkov, vizualizácia konzoly a dynamické mapovanie portov.

Vyvinul som komplexnú desktopovú aplikáciu "Piano Trainer" v Pythone, ktorá slúži ako riadiace centrum.

Aplikácia – vývojové verzie (MVP → Beta → Gold)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/all_versions_app.png" width="700" alt="App All versions" />
</figure>
<!-- GitHub preview (repo-relative) -->
![App All versions](./images/all_versions_app.png)


*   **Vlastnosti:** Detekcia MIDI zariadení, správa portov, AI transkripcia nôt z YouTube a komplexný prehrávač MIDI súborov.

---

## ✅ Testovanie a Prevádzka

Systém bol testovaný na latenciu a presnosť mapovania nôt na jednotlivé LED boxy.


[LED Piano Showcase](https://www.youtube.com/watch?v=GONJa6kOOnw)

> YouTube demonštrácia LED reakcií na prehrávané tóny.

Demo (LED lišta – prvá verzia)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/ledbar_v1.png" width="600" alt="Demo" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Demo](./images/ledbar_v1.png)

*   **Výsledok:** Systém úspešne čaká na vstup používateľa (stlačenie klávesu), kým pokračuje v skladbe.
*   **PS:** Schválené aj mladšou sesternicou a bratrancom
---

## 🏆 Zhrnutie a Výsledky

Projekt splnil a v mnohom prekonal pôvodné očakávania.



| LED Lišta na klavíri | Vyvinutá aplikácia |
|:---:|:---:|
| <img src="/sthdf_2025/PRJ_007/images/ledbar_final.png" width="400" alt="LED Lišta na klavíri" /> | <img src="/sthdf_2025/PRJ_007/images/app_final.png" width="300" alt="Vyvinutá aplikácia" /> |

<!-- GitHub preview (repo-relative) -->
![LED Lišta na klavíri](./images/ledbar_final.png)
![Vyvinutá aplikácia](./images/app_final.png)

*   ✅ **Plne funkčný hardvér:** 3D tlačená lišta + riadiaca jednotka.
*   ✅ **Kompletný softvér:** Pipeline od YouTube linku až po rozsvietenie LED.
*   ✅ **Dokumentácia:** Vytvorené detailné Knowledge Contributions (KNIFES) pre každý krok.

Finálny setup (piano trainer)

<figure>
  <img src="/sthdf_2025/PRJ_007/images/piano_trainer_setup.png" width="800" alt="Finálny setup" />
</figure>
<!-- GitHub preview (repo-relative) -->
![Finálny setup](./images/piano_trainer_setup.png)

---

## 🧑‍🎓 Viac informácií

*   🎥 **YouTube:** [Pozrieť videá projektu](https://www.youtube.com/@PianoLedTrainer1)
*   💼 **LinkedIn:** [Profil projektu LED Piano Trainer](https://www.linkedin.com/in/led-piano-trainer-61495a38b/)
*   📂 **GitHub:** [Zdrojové kódy, 3D modely a technická dokumentácia.](https://github.com/Samuel-Kohut/SMVIT-PON_15_Kohut) 
* 📝 **OneNote** (Class Notebook):  Mám tam opísaný celý vývoj projektu s časovou stopou a s viacerými detailmi. Aj viacero knowledge contributions.

---

## 🧠 Reflexia

*   **Ponaučenie:** Mechanické kompromisy sú pri fyzických produktoch nevyhnutné.
*   **Odkaz:** *"Ak niečo nefunguje, neznamená to, že to je zlý nápad - len to potrebuje inú cestu."*

---

# 🎹 Ďakujem za pozornosť!
### Máte nejaké otázky?

---
[🏠 Späť na domovskú stránku](../index.md)