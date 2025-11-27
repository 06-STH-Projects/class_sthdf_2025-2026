---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000027"
guid: "3264251d-6fb5-41f2-b8eb-9b726c2542f2"
dao: "knife"
title: "K000027 – Git For Dummies – Central Concepts"
description: "Jednoduché vysvetlenie Git základov pre začiatočníkov v GitEA (organizácia, repozitár, working directory, atď.)"
author: "Roman Kazicka"
authors: ["Roman Kazička",""]
category: ""
type: ""
priority: "no"
tags: ["KNIFE","images"]
locale: "sk"
created: "2025-09-17"
modified: "2025-09-17"
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
#sidebar_label: "K000027 – Git For Dummies – Central Concepts"
date: "2025-09-17"
sidebar_position: "27"
sidebar_label: "K000027 – Git For Dummies – Central Concepts"
---

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
# KNIFE K000027 – Git For Dummies – Central Concepts

<!-- fm-visible: start -->
> **GUID:** `3264251d-6fb5-41f2-b8eb-9b726c2542f2`
> **Status:** `backlog` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 🎯 Čo rieši (účel, cieľ)

Aká je základná architektúra decentralizovaného verziovacieho systému na základe GIT?
Táto znalosť je veľmi dôležitá pre efektívnu a zmysluplnú prácu s rôznými implementáciami GIT workflow.
V tomto knife sa zameriame na GitHub a jeho implementáciu.

## 🧩 Ako to rieši (princíp)

Decentralizovaný systém predpokladá, že obsah servera sa nachádza u každého klienta. To vytvára predpoklady, že práca a obsah na klientovi ej absolútne nezávislý od servera.
V ľobovľnom okamihu je možné synchronizovať obsah na konkrétnom klientovi so serverom.
Predstavme si situáciu, že neznámi počet používateľov pracuje na obsahu, kotrý je na serveri.
Pri synchronizácií obsahov, vzniká niekoľko typických scenárov, ale výsledok je:

- Dokážeme cestovať v čase
- Máme chránenú svoju prácu v podobe lokálnych a serverových kópií
- Sme nezávislí na serveri a ostatných členov tímu (závisí od kontextu)
- 
## 🧪 Ako to použiť (aplikácia)

- V tomto Knife si vysvetlíme ako sa pracuje s GitHub serverom s využitím Sites, to je generovanie statickej HTML stánky priamo z obsahu servere (súbory v md formáte sa pretransformujú na html stránky).
- Perfektné je, že tento obsah nemusíme konzumovať cez technoické rozhranie GitHub poertálu, ale je možné vygenerovať statické HTML stránky, ktorým GitHub poskytne doménové meno
- Ak máme vlastnú doménu, môžeme namapovať svoju doménu na obsah na GitHube a tak máme vlastne web hosting
- Tento web hosting je pre široké spetrum použití v rámci Fee plánu za darmo.
- Páčil by sa Vám free hosting web stránky pre Vašu doménu.
- Navyše máte možnosť mať aj súkromie. Repozitáre sú PUBLIC a PRIVATE.
- Public repozitáre sú v cene - zadarmo
- Privátne stránky sú v cene 3€/mesiac.
- Detailenjšie o cenových plánoch je v KNIFE_066 [K000066-Porovnanie bizbis plánov GitHub](../K000066-porovnanie-biznis-planov-github/index.md)

---

## ⚡ Rýchly návod (Top)
- GitHub nie je len úložisko s možnosťou verziovania. Na to sú iné riešenia (Google drive, OneDrive, Sharepoint).
- Github je ucelený ekosystém pre vytváranie riešení pomocou obsahu na úložisku.
- Obsah môže byť akýkoľvek obsah v rôzných  formátoch. Zámerne nehovorím len o súboroch rôznych programovacích jazykoch. To je doména programátorov.
- Tento KNIFE je ale pre NIE technikov, NIE programátorov.
- Ak pracujete s akýmikoľvek súbormi, ktoré majú svoj vlastný životný cyklus, tak ste skvelý kandidát na používateľa Git worklow filozofie a bude Vám to na úžitok vo viacerých smeroch
  - zálohy mimo svojho počítača
  - možnosť kreatívneho prístupu pri práci bez obavy poškodenia chodivých verzií
  - možnosť tímovej spolupráce
  - v prípade individuálnej práce by nebolo potrebné ani vzdialený server
  - vysoká miera autonómnosti
  - poriadok v procese tvorby riešenia -vytváranie metadát o aktivitách nad danými súbormi
  - poriadok v súboroch - možnosť uchovávať, porovnávať rôzne verzie súborov (textových, pre binárne súbory jepotrebné dedikované aplikácie)

## 📜 Detailný článok

- Na obrázku sú niektoré základné komponenty GitHub riešenia.
- Pre poípsanie všetkých vlasností, pre rôzne prípady použitia doplníme priebežne.
- #TODO 20250925-1948-treba vysvetliť komponenty na obrázku.
![Koncept Github s využitím Sites](./img/GitHub-Sites-Concepts.png)
## 💡 Tipy a poznámky

## ✅ Hodnota / Zhrnutie