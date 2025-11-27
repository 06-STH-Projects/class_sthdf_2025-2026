---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000083_01"
guid: "48faadc5-190a-424f-8d25-6e99df7010b3"
dao: "knife"
title: "KNIFE – K000083_01"
description: "-"
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "deliverable"
type: "knife"
priority: "no"
tags: ["-"]
locale: "sk"
created: "2025-09-26"
modified: "2025-09-26"
status: "inprogress"
privacy: "public"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Educational content. Use at your own risk."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: ""
author_id: "-"
author_did: "-"
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "K000083_01 –"
---
# Analýza možností pre MacOS – inštalácia Node.js v22

<!-- fm-visible: start -->
> **GUID:** `48faadc5-190a-424f-8d25-6e99df7010b3`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

V prostredí MacOS existujú tri hlavné prístupy, ako spravovať verziu Node.js.  
Každý má svoje **výhody, nevýhody a odporúčané použitie**.

---

## 1. Homebrew (najjednoduchšie na Macu)

### Popis
Homebrew je balíčkový manažér pre MacOS. Inštalácia Node cez Homebrew je priama a známa väčšine používateľov.

### Výhody
- ✅ Jednoduché na inštaláciu a používanie.
- ✅ Jediný príkaz na update (`brew upgrade node@22`).
- ✅ Dobré pre používateľov, ktorí už používajú Homebrew na iné balíky.

### Nevýhody
- ❌ Spravuje Node globálne – ťažšie mať viacero verzií naraz.
- ❌ PATH konfigurácia sa líši medzi Apple Silicon (`/opt/homebrew`) a Intel (`/usr/local`).

### Odporúčanie
- Vhodné pre **študentov a začiatočníkov**, ktorí chcú rýchlo spustiť prostredie a nepotrebujú viacero Node verzií.

---

## 2. NVM (Node Version Manager)

### Popis
NVM je populárny správca Node verzií. Umožňuje mať na jednom systéme viac verzií Node a jednoducho medzi nimi prepínať.

### Výhody
- ✅ Flexibilné – môžeš mať Node 18, 20 aj 22 a prepínať podľa projektu.
- ✅ `.nvmrc` umožňuje automatické použitie správnej verzie v projekte (`nvm use`).
- ✅ Široko podporované v open-source projektoch.

### Nevýhody
- ❌ Inštalácia je o niečo komplikovanejšia (úprava `.zshrc`).
- ❌ Spúšťa sa cez shell skripty → mierne pomalší štart shellu.
- ❌ Nie je priamo v Homebrew (hoci existuje aj formula `brew install nvm`).

### Odporúčanie
- Vhodné pre **pokročilejších používateľov a maintainerov**, ktorí spravujú viacero projektov s rôznymi Node verziami.

---

## 3. Volta

### Popis
Volta je moderný správca verzií Node, ktorý inštaluje binárky priamo do PATH a rieši aj správu npm/yarn.

### Výhody
- ✅ Rýchlejšie ako NVM (žiadne shell skripty na štarte).
- ✅ Vie fixovať verziu Node per-projekt.
- ✅ Jednoduché príkazy: `volta install node@22`.

### Nevýhody
- ❌ Menej rozšírený než NVM, menšia komunita.
- ❌ Menšia kontrola nad detailami prostredia (niektorí maintaineri preferujú NVM).

### Odporúčanie
- Vhodné pre **vývojárov, ktorí chcú jednoduchosť a rýchlosť**, a nevadí im, že komunita je menšia.

---

## Zhrnutie porovnania

| Kritérium       | Homebrew         | NVM                       | Volta                   |
|-----------------|-----------------|---------------------------|-------------------------|
| Jednoduchosť    | ⭐⭐⭐⭐☆          | ⭐⭐⭐☆☆                    | ⭐⭐⭐⭐☆                  |
| Flexibilita     | ⭐⭐☆☆☆          | ⭐⭐⭐⭐⭐                    | ⭐⭐⭐⭐☆                  |
| Popularita      | ⭐⭐⭐⭐☆          | ⭐⭐⭐⭐⭐                    | ⭐⭐☆☆☆                  |
| Výkon           | ⭐⭐⭐⭐☆          | ⭐⭐☆☆☆                    | ⭐⭐⭐⭐⭐                  |
| Vhodné pre      | Študentov       | Maintainerov, power-userov | Praktikov, ktorí chcú rýchlosť |

---

## Odporúčanie pre tvoj projekt
- **Študenti**: Homebrew cesta – najjednoduchšie, menej chýb.
- **Ty ako maintainer**: NVM – dáva kontrolu a `.nvmrc` zabezpečí konzistenciu.
- **Alternatíva**: Volta – môže byť rýchlejšia a pohodlnejšia, ak nechceš riešiť overhead NVM.
