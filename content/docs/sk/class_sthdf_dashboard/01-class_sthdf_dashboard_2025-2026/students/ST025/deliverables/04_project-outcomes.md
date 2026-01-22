---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:47Z'
---

# 📦 Project Outcomes

## 🔖 Stav projektu
- **Čo funguje:**
  - Funkčný HW prototyp: **Raspberry Pi Zero W 2 + 3.5" LCD (320×480)**.
  - Nainštalovaný a funkčný **driver displeja** (LCD-show) – obraz sa korektne zobrazuje.
  - Beží **Python aplikácia** (repo `rpiclock`), ktorá vykresľuje UI na lokálny displej.
  - Základná štruktúra projektu je hotová (`main.py`, `screens/`, `assets/`, `requirements.txt`).
  - Hotový **3D tlačený pop-in obal** – displej a doska sú mechanicky integrované (fit, porty, vetranie).
- **Čo ešte nie je úplne dotiahnuté / otvorené body:**
  - Systematické **dlhodobé testovanie stability** (dlhý beh, reštarty, edge cases).
  - Voliteľné: vylepšenia UX (viac obrazoviek, prechody, dotykové ovládanie, konfigurácia).

## 🧩 Výstupy podľa SDLC / V-modelu
1. **Business požiadavky** – Always-on stolový dashboard (domov/office), ktorý po zapnutí zobrazí vybrané informácie na lokálnom LCD; jednoduché nasadenie a možnosť rozšírenia o ďalšie obrazovky.  
2. **Top Level Architecture** – HW: Raspberry Pi Zero W 2 + 3.5" LCD + napájanie + microSD + 3D obal; SW: Raspberry Pi OS + LCD driver + Python app.  
3. **Solution Architecture** – Python app (main + screens + assets) v update loope renderuje UI a posiela frame na displej; závislosti v `requirements.txt`; driver riešený cez LCD-show.  
4. **Analysis** – Overenie kompatibility LCD (320×480), výber drivera (LCD-show), rozdelenie appky na obrazovky; návrh mechaniky (fit, porty, vetranie).
5. **Design** – Návrh UI/UX pre nízke rozlíšenie (layout, ikony) + návrh 3D pop-in obalu (tolerancie, výrezy, mriežkovanie).  
6. **Implementation** – (`main.py`, `screens/`, `assets/`, `requirements.txt`) + pripravený RPi OS a nainštalovaný LCD driver.  
7. **Verification & Testing** – Základné otestovanie: displej zobrazuje, appka beží a renderuje; otvorené: dlhodobý beh, reboot scenáre, výkon, opakovateľnosť inštalácie.  
8. **Operation** – Aktuálne spúšťanie na RPi (manuálne/po boote podľa setupu); ďalší krok: autostart/service (systemd) + konfigurácia (refresh rate, výber screens).  

## 🏆 Finálny produkt
- **Čo tím reálne dodal:**
  - funkčný HW prototyp (RPi + LCD),
  - bežiacu Python aplikáciu na zobrazovanie dashboardu,
  - 3D tlačený pop-in obal pre fyzickú integráciu,
  - diagramy architektúry (deployment/component/sequence) v dokumentácii projektu.
- **Ako to vyzerá:**
  - fotky finálneho zariadenia sú v prezentácií projektu,
  - aplikácia repo link: `https://github.com/drizzle021/rpiclock` 

## 🧭 Porovnanie s Project Summary
- **Plánovali sme:**
  - prototyp HW + SW dashboard,
  - mechanický obal,
  - aspoň MVP pripravené na prezentáciu
- **Dodali sme:**
  - prototyp HW + SW je hotový a prezentovateľný,
  - obal je hotový a funkčný,
  - prezentácia/prototyp dodané,

---
## Navigácia
- [↩️ Späť](../index.md)
