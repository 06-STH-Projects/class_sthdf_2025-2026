---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
---

# 📝 Project Summary

### 🔖 Identifikácia

**1️⃣ Názov projektu**
**Názov projektu:** PRJ-019-ST_019-ST_019-Smart_Retro_Display
**Stručný popis:** Inteligentné stolové zariadenie kombinujúce estetiku retro televízora s modernými funkciami IoT terminálu. Slúži na zobrazovanie informácií v reálnom čase, ovládanie smart domácnosti a ako platforma pre digitálne umenie.

**2️⃣ Členovia tímu**

| ST ID | Meno | Rola v tíme | Kompetencie |
| --- | --- | --- | --- |
| ST036 | Ľubomír Novotný | Project Lead | Koordinácia, systémová architektúra, Implementácia firmware (ESP32), API integrácia |
| ST018 | Richard Kello | Developer | UI/UX dizajn, 3D modelovanie krytu |

**3️⃣ Motivácia tímu**

* **Prečo tento projekt:** Spája vášeň pre retro dizajn s modernými technológiami embedded systémov.
* **Zmysel:** Profesne ide o skvelú príležitosť na precvičenie full-stack vývoja (od HW návrhu cez firmware až po UI).
* **Dôležitosť:** Projekt bojuje proti "digitálnej únave" z mobilných telefónov tým, že ponúka dedikované, jednoúčelové rozhranie pre dôležité informácie.

**4️⃣ Cieľ a pridaná hodnota projektu**

* **Finálny cieľ:** Funkčný prototyp smart displeja s vlastným operačným prostredím, ktorý je plne prispôsobiteľný.
* **Úspech projektu:** Ak zariadenie dokáže stabilne bežať 7 dní bez reštartu, plynule zobrazovať dáta z API a reagovať na dotyk/tlačidlá.

**5️⃣ Popis riešenia**

* **Čo riešime:** Interaktívny informačný panel postavený na čipe **ESP32**, ktorý využíva Wi-Fi na získavanie dát. Zobrazovanie prebieha na **dotykovom LCD**, pričom mechanická konštrukcia je realizovaná **3D tlačou**.
* **Technológie:** C++/Arduino (PlatformIO), LVGL (grafika), JSON/HTTP (komunikácia), Fusion 360 (CAD dizajn).

**6️⃣ Projektový plán**

* **Odhadovaný čas:** 8–10 hodín / týždeň.
* **Stav v čase prezentácie:** Plne funkčný hardvérový prototyp s implementovanými základnými modulmi (Počasie, Notifikácie).
* **Hlavné míľniky:**
1. **Príprava:** Výber komponentov, návrh schém a 3D modelu.
2. **Implementácia:** Programovanie základnej logiky a grafického rozhrania.
3. **Testovanie:** Ladenie stability Wi-Fi a odozvy dotyku.
4. **Prezentácia:** Finálna montáž a dokumentácia.



**📅 Milníky a výstupy (Január)**

* [x] Funkčný hardvérový prototyp
* [x] Technická prezentácia projektu
* [x] Kompletná dokumentácia v Markdown formáte

**7️⃣ Zákazník a hodnoty**

* **Používateľ:** Nadšenci do smart domácností, domáci kutilovia (DIY), ľudia hľadajúci štýlový doplnok do kancelárie.
* **Prínos:** Okamžitý prehľad o počasí/čase bez rozptyľovania telefónom a estetický zážitok z retro vizuálu.

**8️⃣ Očakávané výstupy**

* **Dokumentácia:** README.md (GitHub), KNIFE článok (Knowledge Contribution).
* **Artefakty:** Zdrojový kód (Firmware), STL súbory pre 3D tlač, funkčné zariadenie.

**📚 Kontext**

* Inšpirácia: Retro televízory z 70. rokov, open-source projekty na báze LVGL, Home Assistant panely.

**🧭 Riziká a závislosti**

* **Riziká:** Obmedzená pamäť RAM na ESP32 pri spracovaní veľkých obrázkov, zmena štruktúry bezplatných API (napr. počasie).
* **Závislosti:** Dostupnosť stabilného Wi-Fi pripojenia, kvalita 3D tlače.

**9️⃣ Reflexia a ďalšie kroky**

* **Čo sa naučím:** Efektívna správa zdrojov v embedded systémoch, práca s grafickými knižnicami, dizajn pre 3D tlač.
* **Budúci rozvoj:** Integrácia hlasového ovládania, pridanie akumulátora pre prenosnosť, podpora protokolu MQTT pre hlbšiu integráciu so Smart Home.

---

## Navigácia
- [↩️ Späť](../index.md)
