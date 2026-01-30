---
# 🧩 Versioning – systém dopĺňa automaticky
fm_version: "1.0.1"

# Dátum buildu – generuje skript
fm_build: "2025-11-28T15:54:47.946383+00:00"

# Poznámka k verzii – voliteľné
fm_version_comment: ""


# 🆔 IDENTITY --------------------------------------------------------

# Unikátne UUID – generuje skript
guid: "98ab3b4e-7f74-4916-877a-590cd19edaff"


# 🧭 CONTEXT ---------------------------------------------------------

dao: "class_sthdf_dashboard"
title: "slides"

description: "Prezentácia projektu zameraného na návrh, realizáciu a prevádzku malého serverového riešenia s dôrazom na efektivitu, automatizáciu a použitie repasovaného hardvéru."


# 👥 AUTHORSHIP ------------------------------------------------------

author: "Roman Kazicka"

authors:
  - "Roman Kazicka"


# 🗂 CLASSIFICATION ---------------------------------------------------

category: "project"
type: "presentation"
priority: "medium"

tags:
  - sdlc
  - infrastructure
  - automation
  - ansible
  - homelab
  - intermediate


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

origin_system: "CAA"
origin_author: "Roman Kazicka"


# 🧱 RESERVED ---------------------------------------------------------

fm_reserved1: ""
fm_reserved2: ""
---

<!-- class_sthdf_dashboard_INSTANCE_ID: 01-class_sthdf_dashboard_2025-2026 -->

[🏠 Domov](../../../index.md) · [⬅️ Nahor](../)

# PRJ014 — Presentation

---

## Headline
**2025-PRJ-014-ST_014-ST_014 – Efektívny server z dostupného hardvéru**

Projekt sa zameriava na návrh a realizáciu malého serverového riešenia s dôrazom na **nízke náklady**, **automatizáciu** a **dlhodobú udržateľnosť**. Praktický dôkaz, že aj repasovaný hardvér dokáže poskytovať profesionálne výsledky.

![PRJ014 – Server setup](/sthdf_2025/PRJ_014/images/hero.jpg)

![System overview diagram](/sthdf_2025/PRJ_014/images/system-overview.png)

---

## Introduction
**2025-PRJ-014-ST_014-ST_014 – Efektívny server z dostupného hardvéru**

Motiváciou projektu je dokázať, že moderný „homelab“ alebo malý server nemusí stáť stovky až tisíce eur, aby bol použiteľný 24/7 a zároveň udržiavateľný. Repasovaný mini PC vie ponúknuť výborný pomer cena/výkon/spotreba a pri správnom návrhu aj stabilnú prevádzku.

Druhým pilierom je automatizácia správy: konfigurácie sú verzované a nasadenie je opakovateľné. Ansible (ako prístup Infrastructure-as-Code) znižuje riziko manuálnych chýb, skracuje čas potrebný na správu a uľahčuje obnovu systému po zlyhaní alebo neúspešnej zmene.

Dokument je štruktúrovaný podľa SDLC (Business → Architektúra → Analýza → Implementácia → Prevádzka), aby bolo vidieť nielen výsledok, ale aj rozhodnutia, trade-offy a spôsob práce počas semestra.

![Scope diagram](/sthdf_2025/PRJ_014/images/scope.png)

---

## Obsah
- [01-Business](../sdlc/01-business/index.md)
- [02-Top Level Architecture](../sdlc/02-top-level-architecture/index.md)
- [03-Solution Architecture](../sdlc/03-solution-architecture/index.md)
- [04-Analysis](../sdlc/04-analysis/index.md)
- [05-Design](../sdlc/05-design/index.md)
- [06-Implementation](../sdlc/06-implementation/index.md)
- [07-Testing & Verification](../sdlc/07-testing-verification/index.md)
- [08-Operation](../sdlc/08-operation/index.md)
- [09-Change Management](../sdlc/09-Change-Management/index.md)

---

## 01-Business

### Príbeh a motivácia
Tento projekt vznikol z veľmi praktickej potreby: mať doma platformu, na ktorej vieme bezpečne a dlhodobo prevádzkovať vlastné služby, archivovať médiá a mať kontrolu nad dátami aj dostupnosťou. Zároveň sme chceli, aby výsledok nebol „one-off“ experiment, ale reprodukovateľný systém, ktorý sa dá vysvetliť, odovzdať ďalšiemu technicky zdatnému človeku a časom aj pretaviť do edukačného obsahu (napr. online kurz).

Dôležitá motivácia je aj „content removal risk“: pri streamovacích službách sa obsah mení, licencie končia a skladby/seriály môžu z knižnice zmiznúť bez kontroly používateľa. Homelab prístup nám dáva možnosť budovať vlastný archív (hudba/filmy/fotky) a doplniť ho službami ako DNS filtering, fotogaléria, media server či osobný cloud, bez závislosti od tretích strán.

### Problém, ktorý riešime
Pri pevnom rozpočte a požiadavke na 24/7 prevádzku je kľúčová otázka: ktorý prístup dáva najlepší pomer cena/výkon a zároveň sa dá rozumne spravovať? Tento problém sa dá rámcovať ako voľba medzi viacerými uzlami (SBC klaster) a jedným výkonnejším hostom s virtualizáciou/kontajnermi.

### Zvažované alternatívy
Počas návrhu sme porovnávali tri realistické možnosti:

1) Raspberry Pi klaster (4× uzol)  
Hlavná výhoda je nízka spotreba, ale v našom prípade bol dealbreaker vyšší celkový náklad pri relatívne nízkom výkone a slabších možnostiach storage/IO pre „seriózne“ služby.

2) Custom built server  
Ponúka flexibilitu a upgrade path, ale typicky znamená najvyšší vstupný náklad aj spotrebu, väčšie rozmery a viac hluku. Z pohľadu homelabu je to riešenie skôr pre ľudí, ktorí presne vedia, čo chcú skladať a prečo, a sú ochotní zaplatiť za výkon aj prevádzku.

3) Použitý/refurbished business PC (zvolená cesta)  
Použité office/enterprise mini PC (napr. trieda Lenovo ThinkCentre Tiny) sú dostupné na sekundárnom trhu a často ponúkajú veľmi dobrý pomer cena/výkon pri malej spotrebe a kompaktných rozmeroch.  
V našom prípade to bol najlepší kompromis: dostatočný výkon pre viac služieb naraz, jednoduchšia správa a zároveň rozumné náklady (pričom výber sa dá prispôsobiť rozpočtu—existujú aj lacnejšie, stále použiteľné kusy).

### Prečo Proxmox VE (a ako je to použité)
Ako platformu sme zvolili Proxmox VE, pretože umožňuje oddeliť služby cez virtualizáciu a kontajnery a tým znížiť riziko „jedna zlá zmena rozbije všetko“. Proxmox VE kombinuje KVM pre VM a LXC pre ľahké kontajnery, čo je vhodné presne pre homelab scenár: izolácia + dobrá efektivita.

V implementácii sme použili najmä LXC kontajnery a jednu VM pre Docker služby (kvôli pohodlnému baleniu a deploymentu), pričom vstup z internetu/LAN je riešený cez Nginx reverse proxy. V Business časti služby spomíname len rámcovo (napr. DNS filtering, osobný cloud, media server, foto knižnica); detaily rozoberáme v architektúre a implementácii.

### Hodnota (Value proposition)
**Výsledok** je homelab platforma, ktorá cieli na:
- výkon na euro (refurbished host + virtualizácia),
- učenie sa prenositeľných zručností (Proxmox, izolácia služieb, automatizácia),
- súkromie a vlastníctvo dát,
- stabilný media archív (bez rizika, že obsah „zmizne“ u poskytovateľa).

![Business value diagram](/sthdf_2025/PRJ_014/images/business-value.png)

### Rozsah a cieľová skupina
Cieľový „zákazník“ je technicky zdatná osoba, ktorá vie pracovať s Proxmoxom a automatizáciou (Ansible) a chce systém, ktorý sa dá prevádzkovať 24/7 bez neustáleho ručného opravovania. Dlhodobá vízia je použiť túto dokumentáciu aj ako základ pre edukáciu (a potenciálne monetizáciu formou kurzov).

### Rozhodnutie v skratke (porovnanie)
| Možnosť | Plusy | Mínusy | Kedy dáva zmysel |
|---|---|---|---|
| Raspberry Pi klaster (4×) | Nízka spotreba, zaujímavé učenie sa „distributed“ prístupu | Vyšší náklad pri nižšom výkone, viac uzlov = viac správy, slabší storage/IO podľa konfigurácie | Keď je cieľ hlavne experimentovanie a minimalizácia spotreby |
| Custom built server | Maximálny výkon, flexibilita, veľa možností rozšírenia | Najvyšší vstupný náklad, vyššia spotreba, väčší/hlučnejší, vyššia zložitosť návrhu | Keď presne vieme, čo skladáme, a potrebujeme špecifický výkon/rozšírenia |
| Použitý business PC (zvolené) | Veľmi dobrý pomer cena/výkon, kompaktný, tichý, vhodný pre Proxmox, jednoduchšia správa | Môže mať limity v rozšírení (RAM/storage), závisí od konkrétneho kusu | Keď chceme „best performance per euro“ pre homelab a stabilnú 24/7 prevádzku |

### Nákladový rámec (konkrétna konfigurácia)
- Host (použitý mini PC): ~180 €
- Dátový disk: 4TB HDD ~114 €
- Prevádzka: nízka spotreba, približne ~50 € / rok (orientačne, podľa ceny elektriny a reálneho odberu)

Poznámka: Výber hosta je adaptovateľný podľa rozpočtu—na sekundárnom trhu sa dajú nájsť aj lacnejšie, stále dobré zariadenia (napr. ~70–80 €), len s inými kompromismi (výkon, RAM, možnosti rozšírenia).


---

## 02-Top Level Architecture

### One‑sentence pitch
Jedno repasované PC prevádzkuje celý homelab cez Proxmox VE a automatizáciu tak, aby bol systém jednoduchý na správu, ľahko rozšíriteľný a vhodný pre 24/7 prevádzku.

![Top level architecture - Proxmox overview](/sthdf_2025/PRJ_014/images/tla-proxmox-overview.png)

### Proxmox UI (management view)
Screenshot z Proxmox VE rozhrania nám slúži ako dôkaz, že celý homelab je spravovaný z jedného miesta (LXC kontajnery, VM, storage a snapshoty).

![Proxmox VE UI screenshot](/sthdf_2025/PRJ_014/images/proxmox-ui.png)

### Čo vidí používateľ
Z pohľadu používateľa ide o sadu „domácich služieb“, ktoré fungujú spoľahlivo a sú dostupné cez jednotný vstup (URL/doména) bez toho, aby bolo potrebné riešiť, kde presne bežia.
Typicky ide o kategórie ako:
- Média a archív (streamovanie a správa knižnice)
- Fotky a zálohy (privátna knižnica a synchronizácia)
- Osobný cloud a súbory
- Dev služby (napr. self-hosted git)

### Ako to funguje (high level)
- Máme jeden fyzický host (repasované business PC), na ktorom beží Proxmox VE.
- Väčšinu služieb prevádzkujeme v LXC kontajneroch (izolácia a jednoduchá údržba).
- Pre Docker služby používame jednu samostatnú VM (oddelenie vrstiev a jednoduchší deployment).
- Nginx beží vo vlastnom LXC a slúži ako jednotná „brána“ pre prístup k službám (reverse proxy a routing).

### Sieť a dáta (zrozumiteľne)
- AdGuard je určený pre domácu sieť (home-only) a zlepšuje komfort aj súkromie pri používaní internetu.
- Dáta (média a archív) držíme na HDD spravovanom cez Proxmox storage, aby boli služby oddelené od systémového disku a aby bol archív škálovateľný.
- Zálohovanie robíme cez Proxmox snapshots, aby bola obnova po chybe alebo zlej zmene rýchla a predvídateľná.

### Prečo je to „business‑friendly“
Architektúra je postavená tak, aby sa dala vysvetliť a zopakovať: jeden host, jasné oddelenie služieb, jednotný vstup cez reverse proxy a jednoduchý príbeh okolo hodnoty (výkon/€, súkromie, archív, učenie sa).
To znižuje bariéru pre technicky zdatných používateľov a zároveň vytvára dobrý základ pre budúce „productized“ vysvetlenie (návody, workshop, kurz).


---

## 03-Solution Architecture

### Prehľad riešenia (z pohľadu služieb)
Naša architektúra je postavená tak, aby používateľ videl „jednu domácu platformu“, nie množstvo oddelených serverov. Jednotlivé aplikácie sú oddelené do samostatných jednotiek, aby sa dali aktualizovať, migrovať alebo obnoviť bez toho, aby sme rozbili zvyšok systému.

![Services map](/sthdf_2025/PRJ_014/images/solution-services-map.png)

### Vstupný bod a smerovanie (Ingress)
Všetky prístupy k službám riešime cez jeden vstupný bod: Nginx reverse proxy beží vo vlastnom LXC a funguje ako „router“ pre webové aplikácie. V praxi to znamená:
- Jeden konzistentný spôsob prístupu (URL/domény) pre všetky služby.
- Jedno miesto, kde riešime sieťové nastavenia (routing, základné security nastavenia, HTTPS podľa potreby).
- Menej chaosu v portoch a jednoduchšia údržba.

![Ingress diagram](/sthdf_2025/PRJ_014/images/solution-ingress.png)

### Logické vrstvy (jednoducho)
Riešenie rozdeľujeme do troch vrstiev:
- Edge/Networking: Nginx reverse proxy (plus sieťové „utility“ ako AdGuard pre domácu sieť).
- Aplikačná vrstva: služby ako Nextcloud, Jellyfin, Navidrome, Immich, Gitea a ďalšie bežia oddelene (primárne v LXC; niektoré v Docker VM).
- Dáta: systém je na SSD, médiá a archív na HDD (spravované cez Proxmox storage), aby sme oddelili „OS/runtime“ od veľkých dát.

### Izolácia a jednoduchosť správy
Hlavná myšlienka je izolácia bez zbytočnej komplexity:
- Samostatné prostredie pre služby znižuje riziko, že jedna zmena ovplyvní celý server.
- Keď niečo zlyhá, vieme obnoviť konkrétnu časť (kontajner/VM) bez kompletnej reinstalácie hosta.
- Konfigurácie a nasadenie riešime automatizáciou (detailne v implementácii), takže systém je opakovateľný.

### Zálohy a obnova (high level)
Pre rýchlu obnovu používame Proxmox snapshots, ktoré nám pomáhajú vrátiť sa do funkčného stavu po neúspešnej zmene alebo chybe. Prakticky to podporuje našu „24/7 homelab“ ambíciu: servisné zásahy majú byť rýchle a predvídateľné.

![Backup and restore overview](/sthdf_2025/PRJ_014/images/solution-backup-restore.png)


---

## 04-Analysis

### Predpoklady a obmedzenia
- Prevádzkujeme to ako domáci homelab na jednom fyzickom hoste (single host).
- Systém má bežať 24/7, ale nejde o enterprise prostredie s multi-site infraštruktúrou.
- Služby sú určené primárne pre domácu sieť; externý prístup je riešený cez jeden vstupný bod (reverse proxy).

### Požiadavky (čo potrebujeme)
Počas analýzy sme si stanovili tieto hlavné požiadavky:
- Výkon: dostatočná rezerva na viac služieb naraz a plynulé používanie.
- Vstupná cena: hardvér musí byť dostupný bez „serverového“ rozpočtu.
- Náklady v čase: nízke prevádzkové náklady (energia, údržba, čas).
- Jednoduchosť: systém musí byť zrozumiteľný, spravovateľný a ľahko obnoviteľný.

### Ako hodnotíme (kritériá)
Pri rozhodovaní sme vyhodnocovali každú alternatívu cez rovnaké otázky:
- Aký výkon dostaneme za peniaze (a aká je rezerva do budúcna)?
- Aká je reálna zložitosť správy (počet komponentov, počet miest kde sa dá niečo pokaziť)?
- Ako rýchlo vieme systém obnoviť po probléme (napr. snapshot/restore, jednoduchý redeploy)?
- Aké sú typické prevádzkové riziká pre domáce 24/7 (najmä výpadky a poruchy)?

Tento spôsob hodnotenia zodpovedá bežnému porovnávaniu prístupov v self-hostingu naprieč nákladmi, výkonom a udržiavateľnosťou. 

![Analysis trade-offs](/sthdf_2025/PRJ_014/images/analysis-tradeoffs.png)

### Riziká, ktoré nás zaujímali
- Výpadok internetu: lokálne služby majú fungovať aj bez internetu (napr. prehrávanie médií v LAN), externý prístup je “best effort”.
- Porucha disku: preto kladieme dôraz na jednoduchú obnovu cez Proxmox snapshots a separáciu systémovej a dátovej vrstvy (SSD vs HDD) na úrovni návrhu.


---

## 05-Design

### Dizajnové princípy
Pri návrhu sme sa držali princípov, ktoré udržiavajú homelab dlhodobo použiteľný a zrozumiteľný aj pre technicky zdatných ľudí mimo tímu:

- Jednoduchosť pred komplexitou: radšej stabilný, dobre pochopený systém než zbytočne „enterprise“ riešenie.
- Izolácia služieb: každá funkčná oblasť má vlastný priestor, aby sa zmeny a chyby nešírili naprieč celým prostredím.
- Opakovateľnosť: konfigurácia a nasadenie majú byť predvídateľné (pripravené pre automatizáciu).
- Obnoviteľnosť: preferujeme návrh, kde vieme rýchlo vrátiť systém do funkčného stavu (napr. snapshot/restore).

### Ako sme rozdelili služby
Služby sme rozdelili do viacerých LXC kontajnerov podľa „focus area“, aby boli hranice jasné (napr. networking, hudba/médiá, finance, security).  
Ak je služba prirodzenejšie alebo jednoduchšie nasaditeľná cez Docker, používame ju v samostatnej Docker VM (pravidlo palca: LXC default, Docker VM keď je to vhodnejšie pre danú aplikáciu).

### Prístup zvonka vs lokálne
Pre služby vystavené na internet odporúčame používať vlastnú doménu (jednoznačné URL, jednoduchšia správa a „profesionálnejší“ dojem).  
Pre lokálne služby preferujeme lokálny DNS naming a prístup len v rámci domácej siete, aby sme minimalizovali zbytočnú expozíciu.

![Design decision flow](/sthdf_2025/PRJ_014/images/design-decision-flow.png)

---

## 06-Implementation

### Ako sme to nasadili (prakticky)
Implementáciu sme postavili tak, aby sa celý homelab dal nasadiť a spravovať ako jeden konzistentný systém, nie ako množstvo ručných „výnimiek“. Základ tvorí Proxmox VE, ktorý nám umožňuje kombinovať LXC kontajnery a VM podľa toho, čo je pre danú službu najpraktickejšie. 

### Rozdelenie na LXC a Docker VM
Väčšinu služieb sme prevádzkovali v samostatných LXC kontajneroch, rozdelených podľa funkčnej oblasti (napr. networking, médiá, cloud, dev). Pre služby, ktoré sa najlepšie distribuujú a udržiavajú cez Docker, sme použili jednu dedikovanú VM, kde beží Docker stack.

### Networking a publikovanie služieb
Nginx reverse proxy beží v samostatnom LXC a slúži ako jednotný vstupný bod pre webové služby. Prístupové pravidlá sme držali jednoduché: služby pre domácnosť sú dostupné primárne v LAN, a internet-exposed služby dávajú zmysel riešiť cez vlastnú doménu (čitateľné URL a jednoduchšia správa certifikátov).

### Storage a obnova
Systémové komponenty bežia na SSD, veľké dáta (média, archív) sú na HDD spravovanom cez Proxmox storage. Na rýchlu obnovu po chybe alebo neúspešnej zmene sme používali Proxmox snapshots, aby sa prostredie dalo vrátiť do funkčného stavu bez „ručného debugovania“ každého detailu.

### Automatizácia (Ansible)
Konfigurácie a opakované úkony sme smerovali do automatizácie, aby boli zmeny predvídateľné a opakovateľné. V praxi to znamená, že keď je potrebné prostredie obnoviť alebo preniesť na iný host, postup je rovnaký a minimalizuje sa riziko ľudskej chyby. 


---

## 07-Testing & Verification

### Čo sme overovali
V tejto fáze sme sa sústredili na to, aby riešenie nebolo len „nasadené“, ale aby bolo aj stabilné a použiteľné v bežnej prevádzke. Overovali sme hlavne:
- Dostupnosť služieb z pohľadu používateľa (web UI, klienti, streamovanie).
- Správne smerovanie cez Nginx reverse proxy (jednotný vstup a routing).
- Stav Proxmox prostredia (LXC/VM bežia, majú zdroje a sú spravovateľné).
- Funkčnosť snapshotov a schopnosť návratu do funkčného stavu po zmene.

### Ako prebiehalo testovanie (jednoducho)
- Sanity check po nasadení: či sa služby spustia a sú použiteľné v LAN.
- Regresný check po zmene: po úpravách konfigurácie sme overili, že sa nezhoršila dostupnosť ostatných služieb.
- Obnova: otestovali sme, že snapshoty dávajú zmysel ako „rýchla poistka“ proti zlej zmene.

---

---

## 08-Operation

### Prevádzka v praxi
Riešenie sme navrhli tak, aby bolo „low-touch“: má bežať 24/7 a vyžadovať len minimálne zásahy. Centrálna správa cez Proxmox nám umožňuje mať prehľad o stave LXC/VM, zdrojoch a úložiskách na jednom mieste. 

### Aktualizácie a údržba
- Aktualizácie riešime kontrolovane: radšej menšie, pravidelné zmeny než veľké skoky, ktoré sa ťažko debugujú.
- Pri zmene, ktorá môže ovplyvniť dostupnosť služieb, pracujeme s princípom „najprv snapshot, potom zmena“.
- Všetko držíme jednoduché: jeden host, jasné hranice služieb a jeden vstupný bod (reverse proxy).

### Monitoring (základný režim)
V rámci prevádzky nám stačí základný prehľad:
- či sú LXC/VM „up“,
- či služby reagujú pre používateľa,
- či máme dostatok miesta na disku (SSD aj HDD).

### Zálohy a rýchla obnova
Pre bežnú prevádzku je kľúčové, že sa vieme rýchlo vrátiť do funkčného stavu. Preto používame Proxmox snapshots ako jednoduchú a rýchlu poistku pred zmenami a ako základ obnovy po probléme.

![Proxmox overview - resources and uptime](/sthdf_2025/PRJ_014/images/operation-proxmox-overview.png)

---

## 09-Change Management

### Cieľ
Cieľom change managementu je robiť zmeny kontrolovane: minimalizovať výpadky, vedieť zmenu vysvetliť a v prípade problému sa rýchlo vrátiť späť do funkčného stavu. Pri single-host homelabe je tento proces dôležitý, lebo zlyhanie alebo zlá zmena môže ovplyvniť viac služieb naraz. 

### Pravidlá zmien (jednoducho)
- Zmeny robíme po malých krokoch; preferujeme krátke iterácie pred veľkými “big bang” úpravami.
- Každá zmena má mať jasný účel, očakávaný výsledok a plán návratu späť (rollback).
- Internet-exposed služby meníme opatrnejšie než LAN-only služby (vyššie riziko dopadu).

### Proces (ľahko opakovateľný)
1. Návrh zmeny: čo meníme, prečo a aký je dopad (ktoré služby sa môžu dotknúť).
2. Príprava: plán testu + plán rollbacku; pri väčších zmenách je vhodné určiť krátke „maintenance okno“.
3. Ochrana pred zmenou: snapshot pred zásahom (LXC/VM podľa toho, čo meníme). 
4. Realizácia: aplikovanie zmeny (ideálne automatizovane cez infra-as-code prístup).
5. Overenie: krátky sanity check (UI dostupnosť, routing cez reverse proxy, základné funkcie).
6. Stabilizácia: ak je všetko OK, zmena sa považuje za prijatú; ak nie, rollback.

### Rollback a obnova
Rollback riešime prioritne cez Proxmox snapshots, pretože umožňujú rýchly návrat k poslednému funkčnému stavu bez zdĺhavého manuálneho debugovania. Tento prístup dobre funguje v kombinácii s virtualizáciou a kontajnermi, kde je možné obnovovať konkrétne jednotky (VM/LXC) nezávisle od zvyšku systému. 

### Dokumentácia a zodpovednosť
- Zmenu evidujeme stručne: dátum, čo sa zmenilo, výsledok, a či bol potrebný rollback.
- Konfigurácie držíme opakovateľne, aby sa dali nasadiť znova bez ručného “tweakovania” (princíp idempotentných konfigurácií). 

---

### Future Roadmap

#### Phase 1 - Current (v1.0) ✅
- ✅ Proxmox VE ako základ platformy (jeden host, centrálna správa). [file:2]
- ✅ Izolácia služieb cez LXC a jedna VM pre Docker podľa potreby. [file:2]
- ✅ Nginx reverse proxy v samostatnom LXC ako jednotný vstupný bod.
- ✅ Proxmox snapshots ako primárny rollback mechanizmus pri zmenách. [file:2]

#### Phase 2 - Near-term (v1.1) 📅
- 🟡 Štandardizovať „service template“: domény/názvoslovie, základné storage mounty, základné health-checky.
- 🟡 Základný monitoring dostupnosti: „je služba up“ + notifikácie pri výpadku.
- 📋 Zjednotiť proces aktualizácií: pravidelné okno, snapshot pred zmenou, sanity check po zmene.

#### Phase 3 - Mid-term (v1.2-1.3) 📅
- 📋 Off-site backup pre kritické dáta (oddelené od hosta pre prípad poruchy disku).
- 📋 Lepšia segmentácia prístupu: jasné pravidlá LAN-only vs internet-exposed a audit existujúcich služieb.
- 📋 Zjednodušiť onboarding novej služby: automatizované nasadenie + dokumentovaný postup.

#### Phase 4 - Long-term (v2.0) 🎯
- 📋 Vyššia odolnosť single-host modelu: plán migrácie na nový host pri upgrade, automatizovaná obnova zo snapshotov a konfigurácií. [file:2]
- 📋 Rozšíriteľnosť: pripravené miesto pre druhý uzol alebo cold-standby (bez toho, aby sa menila architektúra služieb).

### Enhancement Backlog Priority

**Phase 2: Improvements (Priorita: HIGH)**
1. Monitoring + alerting - základná dostupnosť služieb ⚡
2. Štandard pre zmeny - snapshot + sanity check ⚡
3. Service templates - menej ručných výnimiek 🔧

**Phase 3: Reliability (Priorita: MEDIUM)**
4. Off-site backup - ochrana pred poruchou disku 📦
5. Access rules - audit externých služieb 🔒
6. Onboarding workflow - rýchle pridanie novej služby 🔧

**Phase 4: Resilience (Priorita: LOW)**
7. Upgrade/migration plan - výmena hosta bez chaosu 🧩
8. Cold-standby option - jednoduchá forma redundancy 🛟


### Learned Lessons

#### Čo fungovalo dobre ✅
1. **Centralizovaná správa** v jednom rozhraní výrazne znižuje prevádzkovú zložitosť oproti roztrúseným zariadeniam. [file:2]
2. LXC kontajnery sú vhodné ako default pre Linux služby, lebo sú „ľahké“ a prirodzene podporujú izoláciu. [file:2]
3. Automatizácia konfigurácie znižuje riziko ľudskej chyby a zlepšuje opakovateľnosť nasadenia. [file:2]
4. Proxmox snapshots sú praktický rollback mechanizmus, ktorý dáva pri domácich zmenách veľkú istotu. [file:2]

#### Čo by sme spravili inak ⚠️
1. Skôr by sme zaviedli jednotné „defaulty“ (domény, naming, storage štruktúra), aby sa systém časom nerozchádzal.
2. Viac by sme formalizovali kritické zmeny (kto, kedy, čo, rollback), aby bol proces ľahšie odovzdateľný.
3. Prioritu by dostal plán na poruchu disku (zálohy mimo hosta), nie až po rozšírení funkcionalít.


### Final Thoughts

Z pohľadu používateľa je najväčší prínos v tom, že služby pôsobia ako jedna konzistentná platforma, nie ako „zbierka serverov“.  
Z pohľadu prevádzky je kľúčová jednoduchosť: centrálna správa, izolácia služieb a schopnosť obnovy cez snapshoty. [file:2]  
Ak by sa projekt prezentoval biznis publiku, odporúčam ukázať 2 dôkazy: Proxmox UI (bežiace LXC/VM, storage, snapshoty) a jeden diagram architektúry.
