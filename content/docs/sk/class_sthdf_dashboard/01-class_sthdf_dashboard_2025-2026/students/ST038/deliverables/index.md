<!-- FM:INJECT FROM FM-Core.md -->
<!-- TEMPLATE-KIND: sthdf/student-deliverables -->
<!-- TEMPLATE-VERSION: v1.0 (2025-11-10) -->
<!-- GEN-NOTE: new_item_instance.py inserts FM above, keeps USER-HEADER as user-editable, BODY as scaffold, NAV as standard -->

<!-- USER-HEADER:BEGIN -->
# Študentské deliverables

Tento súbor je môj študentský rozcestník k povinným výstupom v rámci predmetu **STHDF**.  
Projekt, na ktorom som počas semestra pracoval, je **TShirt Print System** – funkčné MVP pre predaj tričiek s katalógom produktov, košíkom, objednávkovým systémom, admin rozhraním a generovaním PDF faktúr.

Nižšie sú odkazy na jednotlivé deliverables (A1–A4, prezentácie a reflexia), ktoré nadväzujú na môj projekt a finálnu prezentáciu.

> Repozitár projektu: *doplním link na GitHub*  
> Demo / ukážka: *doplním link (ak je k dispozícii)*  
<!-- USER-HEADER:END -->

<!-- BODY:BEGIN -->
Nižšie nájdeš rýchle odkazy na všetky povinné výstupy. Odkazy sú **relatívne**, takže štruktúru môžeš neskôr presúvať.
---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

fm_build: "2025-11-24T15:50:07.128617+00:00"

fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

guid: "0e21ccbe-3914-4b5b-a26a-fdf9f0c9067c"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "sthdf"

title: "2025_ST_038 – TShirt Print System – Reflexia"

description: "Reflexia po dokončení projektu TShirt Print System v rámci predmetu STHDF."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Dominik Pallo"

authors:
  - "Dominik Pallo"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "reflection"
type: "personal"
priority: "medium"

tags:
  - "reflection"
  - "sthdf"
  - "project"
  - "tshirt-print"


# 🌍 LOCALIZATION -----------------------------------------------------

locale: "sk"


# 🕒 LIFECYCLE --------------------------------------------------------

created: "2025-11-24 16:50"
modified: "2025-11-24 16:50"

status: "completed"
privacy: "public"


# ⚖ IP ---------------------------------------------------------------

rights_holder_content: "Dominik Pallo"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"

origin_system: "CAA"
origin_author: "Dominik Pallo"

fm_reserved1: ""
fm_reserved2: ""
---

<!-- STHDF_INSTANCE_ID: 2025_ST_038 -->

# 🧠 9. Reflexia a spätná väzba

## 1. Čo bolo pre teba v tomto predmete/úlohe najľahšie?
Najľahšie pre mňa bolo prejsť z nápadu do reálnej implementácie.  
Som zvyknutý pracovať s modernými webovými technológiami, takže časť vývoja (Next.js, React, API, DB) mi išla prirodzene.  
Tiež ma bavilo robiť praktické veci – UI, UX, admin panel, faktúry – pretože som videl okamžitý progres.

---

## 2. Čo bolo najťažšie a prečo?
Najťažší bol **komplexný návrh celého systému v jednom človeku**.  
Musel som si rozdeliť úlohy tak, aby som všetko stihol: analýzu, návrh, vývoj, testovanie, dokumentáciu aj prezentáciu.

Tiež bolo výzvou:
- dávať pozor na konzistentnosť dátového modelu,
- navrhnúť admin rozhranie tak, aby dávalo zmysel,
- prepojiť objednávky a faktúry logickým spôsobom.

Najväčšia výzva bol **časový manažment** — pretože som robil všetko sám a chcel som dodať skutočne funkčné MVP, nie len „prototyp“.

---

## 3. Čo nové si sa naučil?
Projekt mi priniesol veľa nových skúseností:

- naučil som sa navrhovať systém tak, aby bol **modulárny a udržateľný**,  
- precvičil som si **kompletné SDLC** od requirements až po operation,  
- zlepšil som sa v prepojení API, DB, ORM v reálnom projekte,  
- pochopil som dôležitosť **jednoduchého UX** pri objednávkovom procese,  
- naučil som sa efektívnejšie robiť dokumentáciu v KNIFE štruktúre.

Tiež som získal skúsenosť s generovaním PDF faktúr a implementáciou admin modu od základu.

---

## 4. Ako by si postupoval inak, keby si mal začať odznova?
- Viac času by som venoval úvodnej analýze a dátovému modelu, aby sa predišlo mini-zmenám počas vývoja.
- Skôr by som si pripravil vizuálny návrh (wireframe), aby bol front-end konzistentnejší.
- Robil by som menšie iterácie, s testovaním po každej.
- Hneď od začiatku by som pripravil možnosť škálovania (multi-tenant).
- V rámci repo by som si oddelil dokumentáciu ešte striktnejšie od kódu.

Ale celkovo som spokojný s postupom aj finálnym výsledkom.

---

## 5. Ako to súvisí s tvojím projektom alebo budúcou praxou?
Tento projekt veľmi dobre zapadá do toho, čo chcem robiť profesionálne:

- webové aplikácie pre reálnych používateľov,  
- projekty s e-commerce funkciami,  
- systémy so správou obsahu a dashboardami,  
- fullstack vývoj, kde mám kontrolu nad návrhom aj implementáciou,  
- práca s databázou, API a komponentovým UI.

V budúcnosti chcem riešiť podobné produkty pre menšie firmy alebo ako SaaS služby.  
TShirt Print System je dobrý základ pre ďalší startupový experiment.

---

## 6. Akú jednu vetu by si chcel, aby si z tohto zapamätali tvoji spolužiaci?
**„Začni jednoducho, ale vybuduj to tak, aby to mohlo rásť.“**

---

## 7. Čo by si odporučil na zlepšenie predmetu?
- Kratšie a jasnejšie zadania — nie všetci študenti chápu KNIFE štruktúru na prvýkrát. Detailnejšie informácie. 
- Možnosť dostať spätnú väzbu v polovici semestra, aby mohli lepšie smerovať projekt.  
- Mierne zjednodušiť dokumentačnú časť.
- Viac zapájať a fyzicky skúšať technológie, ktoré sú k dispozícii.

Ale celkovo hodnotím predmet **pozitívne**, lebo núti študenta vytvoriť niečo reálne použiteľné, nielen teoretickú prácu.

---

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


