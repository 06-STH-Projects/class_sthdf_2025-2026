---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📚 Knowledge Contribution


## 🔖 Názov a stručný popis
**SmartPot: Inteligentný samozavlažovací kvetináč so senzorom vlhkosti**

SmartPot spája 3D tlač a jednoduchú elektroniku, aby uľahčil starostlivosť o rastliny každému používateľovi, od začiatočníkov až po nadšencov. Umožňuje presné meranie vlhkosti a poskytuje jasnú vizuálnu informáciu o tom, či rastlina potrebuje vodu. 


## 🎯 Čo rieši (účel, cieľ)
SmartPot rieši najčastejší problém pri pestovaní rastlín, a tým je nesprávne zalievanie. Či už ide o zabúdanie, prelievanie alebo neodhadnutie množstva vody, rastlina bez správnej vlhkosti trpí.

Správne množstvo vody je pri rastinách zásadné:
- **príliš veľa vody** = hniloba koreňov, plesne, postupné odumieranie rastlín,
- **príliš málo vody** = vädnutie, žltnutie, spomalený rast.

SmartPot umožní používateľovi:
- jednoducho sledovať vlhkosť pôdy v reálnom čase,
- predchádzať prelievaniu či podlievaniu,
- získať jasný vizuálny indikátor (percento + smajlík),
- zjednodušiť a zefektívniť starostlivosť o rastliny.

SmartPot tak znižuje riziko poškodenia rastliny a pomáha udržiavať optimálne podmienky aj tým, ktorí starostlivosť občas zanedbajú.

## 🧩 Ako to rieši (princíp)
SmartPot kombinuje 3D tlač s jednoduchou elektronikou a meraním vlhkosti pôdy.

### Hardvérové prvky:
- 3D tlačený kvetináč so vstavaným zásobníkom vody
- analógový senzor vlhkosti, ktorý meria množstvo vody v pôde
- Arduino Nano pre spracovanie údajov zo senzora
- OLED displey na vizuálnu signalizáciu

### Ako funguje meranie:

1. Senzor vlhkosti pôdy detekuje obsah vody v pôde a odošle analógový signál do Arduino Nano.
2. Arduino prepočíta nameranú hodnotu na zrozumiteľnú škálu 0-100%
3. OLED displej zobrazí úroveň vlhkosti spolu s indikátorom smajlíka:

| Vlhkosť | Emoji | Stav |
|--------|--------|-------|
| > 60 % | 😊 (štasný smajlík)| pôda má dostatok vody |
| 30–60 % | 😐(neutrálny smajlík) | pôda začína vysychať |
| < 30 % | 😟 (smutný smajlík) | pôda je suchá, je čas rastlinu poliať |

SmartPot tak používateľovi poskytuje okamžitú spätnú väzbu bez nutnosti jeho odhadu alebo kontroly vlhkosti pôdy rukou.

## 🧪 Ako to použiť (aplikácia)
Použitie je jednoduché aj pre úplnych začiatočníkov:
1. Zasaď rastlinu do kvetináča.
2. Vlož senzor vlhkosti do pôdy.
3. Cez bočný otvor doplň vodu do vstavaného zásobníka.
4. Sleduj OLED displej. Zobrazuje vlhkosť aj celkovú náladu rastliny.

Používateľ tak okamžite vie, či rastlina potrebuje zálievku.
---
## ⚡ Rýchly návod (Top)
1. Zasaď rastlinu do kvetináča.
2. Zasuň vlhkostný senzor do pôdy.
3. Naplň zásobník vodou.
4. Sleduj displej, a ak je to potrebné, rastlinu zalej.

## 📜 Detailný článok
SmartPot vznikol ako praktické riešenie skutočného problému, nakoľko jeden z členov tímu si opakovane nevedel ustrážiť správnu zálievku rastlín, čo viedlo k ich postupnému odumieraniu. Z tejto situácie vznikol preto nápad spojiť technológie, dizajn a moderné výrobné postupy, ako je 3D tlač, do jedného funkčného produktu, ktorý výrazne uľahčí starostlivosť o rastliny každému používateľovi.

Výsledkom je inteligentný kvetináč, ktorý kombinuje 3D tlač, jednoduchú elektroniku a prehľadnú vizuálnu spätnú väzbu.  

Samotný 3D model bol navrhnutý tak, aby:
- obsahoval oddelený zásobník vody integrovaný priamo v tele kvetináča,
- umožnil jednoduché a pohodlné dopĺňanie vody,
- mal minimalistický dizajn vhodný do interiériu,
- poskytoval priestor pre integráciu elektronických komponentov.


Kľúčovým prvkom projektu je vlhkostný senzor, ktorý priebežne monitoruje stav pôdy. Takéto meranie nahrádza subjektívny ľudský odhad, objektívnymi a presnými údajmi. Používateľ tak získa istotu, že rastlina dostáva presne toľko vody, koľko potrebuje.

OLED displej poskytuje rýchlu a prehľadnú signalizáciu, zobrazuje percentuálnu vlhkosť aj jednoduchú vizualizáciu v podobe smajlíka. Vďaka tomu je SmartPot intuitívny aj pre ľudí, ktorí nemajú so starostlivosťou o rastliny žiadne skúsenosti.

Projekt je navrhnutý tak, aby ho bolo možné v budúcnosti ďalej rozšíriť. Možné doplnky zahŕňajú automatickú zálievku, bezdrôtovú komunikáciu alebo napojenie na mobilnú aplikáciu, čím by sa SmartPot mohol posunúť na úroveň plnohodnotného smart home riešenia.

SmartPot tak predstavuje moderný, estetický a technicky premyslený spôsob, ako sprístupniť starostlivosť o rastliny úplne každému – spoľahlivo, jednoducho a bez starostí.

## 💡 Tipy a poznámky
- Pre 3D tlač samotného kvetináča je ideálny PETG, ktorý je odolný voči vlhkosti.
- Na displeji je možné zobrazovať aj doplnkové informácie, ako je dátum alebo čas.
- Pri prototypovaní je potrebné zaobstarať breadboard a dostatočné množstvo jumper káblov, aby bolo možné jednoducho testovať a meniť zapojenie.

## ✅ Hodnota / Zhrnutie
SmartPot prináša používateľom praktické, jednduché a cenovo dostupné riešenie, ktoré pomáha udržať rastliny v ideálnych podmienkach. Automatizuje kontrolu vlhkosti, eliminuje intuitívne odhadovanie používateľom a znižuje riziko poškodenia rastliny nesprávnym zalievaním.

## 🗂️ Taxonómia KNIFE
- **Kategória:** Smart home, 3D tlač, IoT
- **Typ:** Projektové riešenie / Praktický návod
- **Tagy:** smart pot, moisture senzor, 3D print, self-watering, arduino, IoT plant care

## 🌍 Referencie
Jednotlivé časti projektu sú popísané na nasledujúcom odkaze:

**Navigation:** [⬅️ Projekt](/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides)


## Navigácia
- [↩️ Späť](../index.md)