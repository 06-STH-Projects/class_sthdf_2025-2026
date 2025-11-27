---
# 🧩 Versioning
# Verzia formátu FM
fm_version: "1.0.1"
# Dátum buildu / generovania
fm_build: "2025-11-09"
# Poznámka k verzii alebo zmene
fm_version_comment: ""

# 🆔 Identity
# Jedinečné identifikátory entity
# systémové ID (napr. KNIFE_K000001)
id: "K000090"
# globálne unikátne ID (UUID4)
guid: "ea330316-5451-4251-be58-caf1c163e86a"

# 🧭 Context
# Typ entity (knife, q12, sdlc, 7ds, thesei…)
dao: "knife"
# Názov / titul príspevku
title: "K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max"
# Krátky popis účelu alebo kontextu
description: ""

# 👥 Authorship
# Hlavný autor
author: "romankazicka"
# Zoznam autorov alebo prispievateľov
authors: []

# 🗂 Classification
# Nadradená téma
category: ""
# Typ príspevku (case, guide, tutorial…)
type: ""
# Význam (low, medium, high)
priority: ""
# Kľúčové tagy / heslá
tags: []

# 🌍 Localization & Routing
# Jazyk (sk/en)
locale: "sk"
# alternatívna URL / trvalý link
#slug: ""

# 🕒 Lifecycle
# Dátum vytvorenia
created: "2025-11-11"
# Dátum poslednej úpravy
modified: ""
# Stav (backlog, draft, inprogress, done)
status: "backlog"
# Viditeľnosť (public, private, internal)
privacy: "public"

# ⚖️ Intellectual Property
# Vlastník obsahu (autor)
rights_holder_content: ""
# Systémový držiteľ práv
rights_holder_system: "CAA / KNIFE / LetItGrow"
# Typ licencie
license: "CC-BY-NC-SA-4.0"
# Disclaimer
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
# Copyrightový podpis
copyright: "© 2025 <autor>"

# 🔗 Provenance (Origin)
# Audit pôvodu zápisu
# -------------------------------------------------------------------
# origin_repo ............. názov repozitára, kde zápis vznikol
origin_repo: ""
# origin_repo_url ......... URL zdroja
origin_repo_url: ""
# origin_commit ........... commit hash
origin_commit: ""
# origin_branch ........... branch / vetva
origin_branch: ""
# origin_system ........... nadradený rámec (CAA, STHDF, LetItGrow…)
origin_system: "CAA"
# origin_author ........... pôvodný autor zápisu
origin_author: ""
# origin_imported_from .... zdroj, ak importované
origin_imported_from: ""
# origin_import_date ...... dátum importu
origin_import_date: ""
# -------------------------------------------------------------------

# 🧱 Reserved / Future use
fm_reserved1: ""
fm_reserved2: ""
sidebar_label: "K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max"
---

<!-- body:start -->

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
# VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max

<!-- fm-visible: start -->
> **GUID:** `ea330316-5451-4251-be58-caf1c163e86a`
> **Status:** `backlog` · **Author:** romankazicka · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->


<!-- body:start -->
# K000090 – VMware Fusion NAT/DHCP Resurrection – macOS Sequoia & M2 Max

## 🧩 Kontext

Po prechode na **macOS Sequoia** (M2 Max) prestal VMware Fusion správne vytvárať NAT/DHCP adaptéry (`vmnet1`, `vmnet8`).  
Všetky virtuálne stroje stratili konektivitu.  
Nové politiky Apple a zmeny po odkúpení **VMware firmou Broadcom** (nové licencie, sťahovanie) situáciu ešte sťažili.  
Najnovšiu verziu Fusion už **nebolo možné stiahnuť priamo z oficiálneho portálu**, museli sme ju získať z *technického mirroru*.  

## Inštalácia VMWARE Fusion (Free)
 Ak sa nechceš trápiť s Broadcom portálom:
Použi oficiálne zrkadlo s podpisom (od VMware ešte pred akvizíciou):
👉 https://www.techspot.com/downloads/2755-vmware-fusion-mac.html

Tu je VMware Fusion 13.5.2 (Universal) – beží na Intel aj M1/M2, a po spustení
len zvolíš “Use for personal use” → Continue without license.


## 🔍 Diagnostika

```
sudo /Applications/VMware\ Fusion.app/Contents/Library/vmnet-cli --status
```
Výstup:
```
DHCP service on vmnet1 is running
Hostonly virtual adapter on vmnet1 is disabled
DHCP service on vmnet8 is running
NAT service on vmnet8 is running
Hostonly virtual adapter on vmnet8 is disabled
```
Niektoré služby bežali, ale **adaptéry boli vypnuté**.  
`ifconfig` potvrdil, že `vmnet8` a `vmnet1` neexistujú v systéme.  

## 🛠️ Obnova NAT/DHCP

Rekonfigurácia všetkých sietí:
```bash
sudo /Applications/VMware\ Fusion.app/Contents/Library/vmnet-cli --configure
```
Po rekonfigurácii sa obnovili súbory v:
```
/Library/Preferences/VMware Fusion/networking
/Library/Preferences/VMware Fusion/dhcpd.conf
```
Reštart služieb:
```bash
sudo /Applications/VMware\ Fusion.app/Contents/Library/vmnet-cli --stop
sudo /Applications/VMware\ Fusion.app/Contents/Library/vmnet-cli --start
```
Overenie, že `vmnet8` má pridelený IP rozsah 192.168.223.0/24 a DHCP funguje.

## 🌐 Testovanie konektivity

Po pripojení VM k NAT sa objavila IP adresa z rozsahu 223.x.  
`ping 8.8.8.8` bol úspešný – internet prístup obnovený.  
Pri bridge pripojení však dochádzalo k prerušeniam – `ping` potvrdil občasný timeout.  

## 🖥️ Problém s čiernou obrazovkou

Po niekoľkých reštartoch Fusion VM začal zobrazenie úplne černieť pri RDP.  
Riešenie:
- v **Display settings VM** → aktivovať „Use Retina display for virtual machine“  
- zmeniť farebnú hĺbku z **16 bit** na **32 bit**  
- vypnúť „Accelerate 3D graphics“ (dočasne)

RDP sa po týchto zmenách správal stabilne, bez zamŕzania.  

## 💡 Lessons Learned

- Broadcom prebral VMware a zmenil prístup k licenciám – **Fusion Player Free** už nie je otvorene dostupný.  
- Zálohovať pred updatom:  
  ```
  /Library/Preferences/VMware Fusion/
  ```
- Ak po update zmiznú adaptér `vmnet8` alebo `vmnet1`, ich ručné znovuvytvorenie cez `vmnet-cli --configure` je bezpečné a funkčné.  
- RDP problém bol spôsobený kombináciou *Retina off* + *low bit-depth*, nie chybným Fusion buildom.  
- 🧠 Odporúčanie: pred každým macOS upgrade → zálohovať Fusion nastavenia a testovať NAT cez dummy VM.  

## ✅ Záver

Po dvoch dňoch hľadania a kombinovania riešení sme dokázali obnoviť plnú funkcionalitu NAT/DHCP aj obrazový výstup vo Fusion.  
Zdanlivo jednoduchý problém ukázal, ako veľmi sa zmenila architektúra správy sietí po príchode Sequoie a ako krehká je kompatibilita s uzavretými ovládačmi Broadcom VMware.

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---