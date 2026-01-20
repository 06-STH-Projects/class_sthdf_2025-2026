---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
title: 9. Reflexia a spätná väzba
---

# Reflexia a spätná väzba

## 1. Čo bolo pre mňa v tomto predmete/úlohe najľahšie?
Najľahšie bolo vymyslieť koncept a celkový smer projektu.  
Hneď ako som si spomenul na svoj starý nápad s LED klavírom, vedel som, že je to téma, ktorá ma baví, dáva zmysel a dá sa urobiť v domácich podmienkach bez špeciálneho laboratória.  
Aj samotné programovanie Raspberry Pi Pico a LED pásu bolo intuitívne vďaka MicroPythonu a dostupným knižniciam.

---

## 2. Čo bolo najťažšie a prečo?
Najťažšie bolo rozhodovanie *ako* celý LED systém fyzicky implementovať a čo je technicky realistické:

- Pôvodne som chcel LED schovať **do vnútra klávesov**, ale po rozobratí keyboardu som zistil, že:
  - čierne klávesy sú úplne neprístupné,
  - materiál klávesov by svetlo neprepustil,
  - rozmiestnenie mechaník znemožňuje vložiť svetlo pod každý kláves.

- Ďalšou výzvou bolo zladiť **odlišný rozostup LED pásu vs. rozostup klávesov**.  
  Musel som preto LED pás ohýbať a vytvoriť vlastné 3D boxy pre každý kláves.

- Softvér mal tiež svoje limity: plná real-time MIDI komunikácia je náročnejšia, a preto som projekt rozdelil na 2 paralelné „tracky“.

Najťažšie však bolo nájsť **kompromis medzi ambíciou a realitou** – teda vyrobiť prototyp, ktorý funguje, dá sa demonštrovať, ale nezahltí projekt v zbytočných technických problémoch.

---

## 3. Čo nové som sa naučil?
- Prácu s **WS2812B LED pásmi**, ich napájaním a riadením.  
- Využívanie **PIO** na Raspberry Pi Pico a rozdiel medzi MicroPython interpretérmi.  
- Ako navrhovať a iterovať **3D modely** (steny, difúzia svetla, presné rozmery).  
- Ako prepojiť **transkripciu YouTube → MIDI → LED** do jedného pipeline.  
- Rozhodovanie o architektúre pri embedded projektoch (minimalizácia záťaže, modularita).  
- Riešenie hardvérových chýb rýchlou iteráciou (chybný počet boxov, chýbajúci posledný box atď.).

Získal som praktické skúsenosti, ktoré bežne pri softvérových projektoch nemám.

---

## 4. Ako by som postupoval inak, keby som mal začať odznova?
Urobil by som pár vecí inak:

### ✔️ Skôr by som kúpil MIDI keyboard  
Rozobranie keyboardu mi veľmi pomohlo pochopiť problém a bolo jasné, že „interné LED“ sú slepá ulička.

### ✔️ Začal by som okamžite s 3D prototypovaním  
Toto mi nakoniec najviac zrýchlilo vývoj.

### ✔️ Viac by som plánoval ohľadom rozsahu LED vs. klávesov  
Od začiatku by som rátal s tým, že LED sa musia ohýbať alebo umiestniť v boxoch.

---

## 5. Ako to súvisí s mojím projektom alebo budúcou praxou?
Tento projekt presne zapadá do:

- **embedded systémov**  
- **UX/učenia sa s technológiou**  
- **rýchlej prototypizácie**  
- **system thinking** (hardvér + softvér + používateľ + dokumentácia)

V budúcnosti sa chcem venovať vývoju softvéru, ale tento projekt mi ukázal, aké dôležité je vedieť komunikovať medzi hardvérom a softvérom a ako navrhovať systém, ktorý musí fungovať ako celok.

Je to presne ten typ projektu, ktorý ukazuje, že aj jeden človek dokáže vybudovať kompletný systém, ak si správne zvolí rozsah a architektúru.

---

## 6. Akú jednu vetu by som chcel, aby si z tohto zapamätali moji spolužiaci?
**„Ak niečo nefunguje, neznamená to, že to je zlý nápad - len to potrebuje inú cestu.“**

---

## 7. Čo by som doporučil na zlepšenie predmetu?
- Viac ukázať reálne projekty z minulých rokov, aby študenti videli rôzne prístupy.  
- Lepšie konzultovať zámer, priebeh predmetu a čo presne sa očakáva od študenta.
- A jeden veľký plus: predmet podporuje kreativitu. Odporúčam zachovať tento voľný priestor.

---

## Navigácia
- [↩️ Späť](../index.md)
