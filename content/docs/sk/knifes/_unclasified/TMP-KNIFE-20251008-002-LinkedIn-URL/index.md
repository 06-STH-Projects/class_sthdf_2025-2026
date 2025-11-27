---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "TMP-KNIFE-20251008-002-TMP-KNIFE-20251008-002-LinkedIn-URL"
guid: "b4c6f7e2-63a8-45e9-b3de-4b9c74c119f9"
dao: "LetItGrow-FieldNotes"
title: "TMP-KNIFE-20251008-002-TMP-KNIFE-20251008-002-LinkedIn-URL – Ako LinkedIn skracuje odkazy a čo s tým"
description: "Pozorovanie a riešenie správania LinkedInu, ktorý automaticky prepisuje všetky odkazy na lnkd.in – a ako si zachovať vlastný brand pomocou vlastného presmerovania (napr. /go/ alebo bit.ly)."
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "Seeds"
type: ""
priority: "middle"
tags: []
locale: "en"
created: "2025-10-08"
modified: ""
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
author_id: ""
author_did: ""
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "Ako LinkedIn skracuje odkazy a čo s tým"
short_title: "LinkedIn a skracovanie URL"
sidebar_label: "TMP-KNIFE-20251008-002-TMP-KNIFE-20251008-002-LinkedIn-URL – Ako LinkedIn skracuje odkazy a čo s tým"
---

# 🔗 Ako LinkedIn skracuje odkazy a čo s tým

<!-- fm-visible: start -->
> **GUID:** `b4c6f7e2-63a8-45e9-b3de-4b9c74c119f9`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

LinkedIn automaticky prepisuje všetky externé odkazy na **lnkd.in**.  
Robí to kvôli bezpečnosti, meraniu kliknutí a ochrane pred škodlivými linkami.  
No pre tvorcu obsahu to znamená, že *stráca vlastnú značku v URL*.

---

## 🧭 Kontext
Z pozorovania:
- LinkedIn prepíše každý externý link na formát `lnkd.in/...`.
- Po kliknutí sa používateľ na pár sekúnd ocitne na stránke LinkedInu (redirect).
- Potom sa presmeruje na cieľový web.
- Aj UTM parametre sa zachovajú, ale vizuálna „identita odkazu“ sa stratí.

---

## 💡 Možné riešenia

1. **Použiť vlastné `/go/` presmerovania**  
   Napr. `letitgrow.dev/go/emma` → krátky HTML súbor s meta redirectom.  
   Výhoda: cieľ možno neskôr meniť, odkaz ostáva.

2. **Nechať v texte vlastnú doménu**  
   Aj keď LinkedIn link prepíše, čitateľ vidí `letitgrow.dev` –  
   stačí napísať URL ako čistý text, nie ako klikateľný odkaz.

3. **Link v prvom komentári**  
   Post zostane vizuálne čistý a LinkedIn ho neprelinkuje cez lnkd.in.

4. **Použiť „link preview kartu“**  
   Ak vložíš len *jeden odkaz* a necháš ho načítať,  
   zobrazí sa karta s tvojou doménou — pôsobí profesionálne.

5. **QR alebo link sticker v obrázku**  
   Funguje aj pri vizuálnych postoch; zachováš značku a smerovanie.

---

## 🪴 Budúce zaradenie
Téma patrí do kategórie:
- `KNIFE_GitHub_and_Marketing`
- alebo `KNIFE_LinkedIn_BestPractices`

---

## 🔗 Referencie
- [LinkedIn Link Shim info (lnkd.in)](https://www.linkedin.com/help/linkedin/answer/a1339113)
- [LetItGrow.dev/go/emma](https://letitgrow.dev/go/emma)
- [SystemThinking.sk](https://systemthinking.sk)