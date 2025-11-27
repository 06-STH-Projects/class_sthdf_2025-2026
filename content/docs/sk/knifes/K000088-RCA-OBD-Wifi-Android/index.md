---
# 🧩 Versioning
fm_version: "1.0.1"
fm_build: "2025-11-07"
fm_version_comment: ""

# 🆔 Identity
id: "K000088"
guid: "eb2e1db1-04e1-47df-b143-29b1113c2ca0"

# 🧭 Context
dao: "knife"
title: "K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)"
description: "Ako diagnostikovať závadu v aute keď sa nedá naštartovať a servis je ďaleko? OBDII môže byť pomôcka"

# 👥 Authorship
author: "Roman Kazička"
authors: ["Roman Kazička"]

# 🗂 Classification
category: "Diagnostic"
type: "RCA-Root Cause Analysis"
priority: ""
tags: ["knife"]

# 🌍 Localization & Routing
locale: "sk"

# 🕒 Lifecycle
created: "2025-11-07"
modified: ""
status: "inprogress"
privacy: "public"

# ⚖️ Intellectual Property
rights_holder_content: "Roman Kazička"
rights_holder_system: "CAA / KNIFE / LetItGrow"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička"

# 🔗 Provenance (Origin)
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: "mix"

# 🧱 Reserved / Future use
fm_reserved1: ""
fm_reserved2: ""
sidebar_label: "K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)"
---

# RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)
> KNIFE K000088 created by Roman Kazička on 2025-11-07  
> GUID: eb2e1db1-04e1-47df-b143-29b1113c2ca0

---
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
<!-- User-facing content template (MD). No FM at top. -->


## 🎯 Čo rieši (účel, cieľ)

Používateľ úspešne pingá Wi-Fi adaptér **Mobilly OBD-II WiFi (192.168.0.10)**,  
ale aplikácie (Car Scanner, ELM327 Identifier, Torque) hlásia *„Failed to connect to vehicle“* alebo *„Unable to connect“*.  
Cieľom je určiť, či ide o **problém Android OS (softvérový)** alebo **adaptéra (hardvérový klon)**.

## 🧩 Testovací protokol

### 1️⃣ Sieťová konektivita
| Test | Postup | Výsledok |
|------|--------|----------|
| Ping test | Použi **PingTools → Ping 192.168.0.10** | ✅ odpovede 2–4 ms – Wi-Fi vrstva funkčná |
| ELM327 Identifier | Spusť scan verzií 1.0–2.3 | ❌ „Unable to connect“ – nekomunikuje ELM čip |

**Záver:** Android komunikuje s IP vrstvou, ale adaptér neodpovedá na OBD príkazy.

---

### 2️⃣ Android-špecifické nastavenia
| Nastavenie | Možná príčina | Odporúčané riešenie |
|-------------|---------------|----------------------|
| **Mobilné dáta** zapnuté | Android presmeruje TCP na 4G | 🔴 vypnúť počas testu |
| **Automatické prepínanie sietí** („Switch to mobile data“) | Wi-Fi bez internetu sa zahodí | vypnúť |
| **Private MAC / Randomized MAC** | adaptér nevie MAC rozpoznať | nastaviť „Použiť pôvodnú MAC“ |
| **Povolenie lokálnej siete** (Android 13+) | appka blokovaná | povoliť Car Scanner prístup k „lokálnej sieti“ |
| **Úspora batérie** | ukončí sockety po 10 s | pridať Car Scanner do výnimiek |

---

### 3️⃣ Krížový test
| Test | Interpretácia |
|------|----------------|
| Pripoj adaptér k **iPhone / staršiemu Androidu (8–9)** | Ak tam funguje → problém Android OS |
| Skús **Bluetooth adaptér (VGate iCar2 BT)** | Ak funguje → Wi-Fi časť chybná |
| Použi **port scanner (1–40000)** | Ak žiadny otvorený port → falošný klon |

---

### 4️⃣ Korelačná tabuľka výsledkov

| Ping | Port otvorený | Car Scanner pripojenie | Root Cause |
|------|----------------|------------------------|-------------|
| ❌ | ❌ | ❌ | Adaptér úplne nefunkčný |
| ✅ | ❌ | ❌ | Wi-Fi živé, OBD čip mŕtvy (falošný klon) |
| ✅ | ✅ | ❌ | Android blokuje socket / port |
| ✅ | ✅ | ✅ | OK – adaptér aj OS v poriadku |

---

## 🧠 Interpretácia
Výsledky ukazujú scenár **✅ Ping, ❌ Port, ❌ ELM komunikácia**,  
čo potvrdzuje **falošný ELM327 v2.1 klon** – Wi-Fi len vysiela, ale OBD časť neodpovedá.  

---

## 🧰 Odporúčané riešenia
| Úroveň | Riešenie |
|--------|-----------|
| 🔹 Krátkodobé | použiť Bluetooth verziu (Car Scanner → Bluetooth 4.0) |
| 🔹 Dlhodobé | vymeniť za **VGate iCar2 BT** alebo **OBDLink LX/MX+** |
| 🔹 Overenie OS | vypnúť mobilné dáta, zapnúť „zachovať Wi-Fi bez internetu“, povoliť prístup k lokálnej sieti |

---

## 📚 Použité nástroje
- Car Scanner ELM OBD2  
- ELM327 Identifier  
- PingTools Network Utilities  
- Android 11 Settings (Network, Battery, Permissions)

---

## 🧾 Záver RCA
Wi-Fi komunikácia funguje, OS Android paket prenáša,  
ale ELM327-firmvér v zariadení *Mobilly OBD-II WiFi* neodpovedá.  
Príčina: **hardvérový klon bez plnohodnotného OBD čipu**.  
Odporúčanie: **reklamácia a náhrada za certifikovaný adaptér (VGate / OBDLink / UniCarScan)**.

---

---
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---