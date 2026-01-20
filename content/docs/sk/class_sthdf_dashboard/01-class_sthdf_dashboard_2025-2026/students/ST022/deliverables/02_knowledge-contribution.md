---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:47Z'
title: 📚 Knowledge Contribution
---

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis
- **Touchscreen Kalibrácia pre Raspberry Pi LCD displeje**
- Riešenie problémov s inverznou osou, offset-om a nepresným dotykom
- Praktický návod pre Waveshare a podobné SPI LCD displeje

## 🎯 Čo rieši (účel, cieľ)
- **Problém**: Touchscreen reaguje na zlých pozíciách (offset, inverzné osi)
- **Symptómy**: Klik vpravo reaguje vľavo, klik hore reaguje dole
- **Riešenie**: X11 konfigurácia s kalibračnými hodnotami
- **Výsledok**: Presný 1:1 mapping touch → obrazovka

## 🧩 Ako to rieši (princíp)
- **X11 Input Device** spracováva touch eventy
- **Evdev driver** číta surové dáta z `/dev/input/event0`
- **Kalibračné hodnoty** transformujú súradnice
- **Inverzia osí** (SwapAxes, InvertX, InvertY) opraví orientáciu
- **Xorg config** aplikuje nastavenia pri štarte X servera

### Touch Pipeline
```
Hardware Touch → /dev/input/event0 → Evdev Driver → 
X11 Input System → Calibration Transform → Application
```

## 🧪 Ako to použiť (aplikácia)

### Diagnostika problému
1. **Test či touchscreen funguje**
```bash
   sudo apt-get install evtest
   sudo evtest /dev/input/event0
   # Touch displej → mali by sa objaviť eventy
```

2. **Identifikuj driver**
```bash
   xinput list
   # Hľadaj názov touchscreen zariadenia
```

### Kalibrácia (3 kroky)

**1. Nainštaluj kalibračný nástroj**
```bash
sudo apt-get install xinput-calibrator
```

**2. Spusti kalibráciu**
```bash
DISPLAY=:0 xinput_calibrator
# Klikni na 4 krížiky na displeji
```

**3. Aplikuj hodnoty**
```bash
sudo nano /etc/X11/xorg.conf.d/99-calibration.conf
```

Vlož output z calibrator:
```ini
Section "InputClass"
    Identifier "calibration"
    MatchProduct "ADS7846 Touchscreen"
    Option "Calibration" "160 3723 3896 181"
    Option "SwapAxes" "1"
    Option "InvertX" "1"
    Option "InvertY" "1"
EndSection
```

**4. Reštartuj X server**
```bash
sudo systemctl restart lightdm
# alebo reboot
```

---

## ⚡ Rýchly návod (Top)

### Ak touch nefunguje vôbec
```bash
# 1. Check hardware
sudo evtest /dev/input/event0
# Touch → vidíš eventy? Ak nie → HW problém

# 2. Install evdev driver
sudo apt-get install xserver-xorg-input-evdev

# 3. Create config
sudo nano /etc/X11/xorg.conf.d/10-evdev.conf
```
```ini
Section "InputClass"
    Identifier "evdev touchscreen catchall"
    MatchIsTouchscreen "on"
    MatchDevicePath "/dev/input/event*"
    Driver "evdev"
EndSection
```

### Ak touch funguje, ale je nepresný
```bash
# 1. Calibrate
sudo apt-get install xinput-calibrator
DISPLAY=:0 xinput_calibrator

# 2. Copy output
sudo nano /etc/X11/xorg.conf.d/99-calibration.conf
# [paste output]

# 3. Reboot
sudo reboot
```

### Ak sú osi prehodené
Pridaj do `/etc/X11/xorg.conf.d/99-calibration.conf`:
```ini
Option "SwapAxes" "1"        # Prehodí X ↔ Y
Option "InvertX" "1"         # Zrkadlí X os
Option "InvertY" "1"         # Zrkadlí Y os
```

## 📜 Detailný článok

### Ako funguje touchscreen kalibrácia

**Raw coordinates** (čo touchscreen vidí):
- Min X: 160, Max X: 3723
- Min Y: 181, Max Y: 3896

**Screen coordinates** (čo chceme):
- X: 0-480 pixels
- Y: 0-320 pixels

**Transformation matrix:**
```
screen_x = (raw_x - min_x) / (max_x - min_x) * screen_width
screen_y = (raw_y - min_y) / (max_y - min_y) * screen_height
```

### Čo znamenajú kalibračné hodnoty

`Option "Calibration" "160 3723 3896 181"`
```
[min_x] [max_x] [min_y] [max_y]
 160     3723    3896    181
```

- **min_x, max_x** - horizontálny rozsah raw hodnôt
- **min_y, max_y** - vertikálny rozsah raw hodnôt
- Ak sú prehodené → displej je rotovaný

### Rotation options

| Rotácia | SwapAxes | InvertX | InvertY |
|---------|----------|---------|---------|
| 0° | 0 | 0 | 0 |
| 90° | 1 | 0 | 1 |
| 180° | 0 | 1 | 1 |
| 270° | 1 | 1 | 0 |

### Typické problémy

**1. Touch offset (mimo cieľa)**
- ✅ Riešenie: Znovu kalibrovať s `xinput_calibrator`

**2. Invertované osi (hore/dole prehodené)**
- ✅ Riešenie: Pridať `Option "InvertY" "1"`

**3. Swapnuté osi (X a Y zamenené)**
- ✅ Riešenie: Pridať `Option "SwapAxes" "1"`

**4. Touch nereaguje vôbec**
- ✅ Check: `ls /dev/input/event*` - existuje?
- ✅ Check: `evtest /dev/input/event0` - eventy?
- ✅ Fix: Install `xserver-xorg-input-evdev`

## 💡 Tipy a poznámky

### Debugging

**1. Check ak X11 vidí touchscreen**
```bash
DISPLAY=:0 xinput list
# Hľadaj "Touchscreen" v zozname
```

**2. Live test zmien (bez restartu)**
```bash
xinput set-prop "Device Name" "Property" value
# Príklad:
xinput set-prop "ADS7846 Touchscreen" "Coordinate Transformation Matrix" -1 0 1 0 -1 1 0 0 1
```

**3. Check aktuálne properties**
```bash
xinput list-props "ADS7846 Touchscreen"
```

### Best Practices
- ✅ Vždy najprv test s `evtest` - overí HW
- ✅ Backup working config pred zmenami
- ✅ Použij `99-calibration.conf` - načíta sa ako posledný
- ✅ Match by product name, nie event number
- ✅ Test kalibráciu na všetkých 4 rohoch displeja

### Common Mistakes
- ❌ Konfigurácia v `/boot/config.txt` namiesto Xorg
- ❌ Použitie `event0` hardcoded - môže sa zmeniť
- ❌ Zabudnutie na reštart X servera
- ❌ Konflikty medzi libinput a evdev driverom

### Driver priority
```
evdev (preferovaný pre staršie displeje)
    ↓
libinput (moderný, ale niekedy problematický pre SPI displeje)
```

Ak máš problémy s libinput:
```bash
sudo apt-get install xserver-xorg-input-evdev
# Explicitne špecifikuj evdev v config
```

## ✅ Hodnota / Zhrnutie

### Prínosy
- 🎯 **Presnosť** - 1:1 mapping touch → click
- 🔧 **Customizácia** - Full kontrola nad transformáciou
- 🐛 **Debugging** - evtest pre hardware test
- 📝 **Persistence** - Config prežije reboot
- 🔄 **Flexibility** - Live zmeny bez reštartu

### Kedy použiť
- ✅ Waveshare LCD displeje
- ✅ Generic SPI touchscreens
- ✅ Rotované displeje
- ✅ Multi-touch kalibrácia
- ✅ Custom embedded projekty

### Typické use cases
- 📊 Kiosk displeje
- 🌦️ Weather stations
- 🎮 Retro gaming cabinets
- 🏭 Industrial HMI
- 📺 Digital signage

### Time to fix
- **Bez tohto návodu**: 2-4 hodiny trial & error
- **S týmto návodom**: 15-30 minút
- **ROI**: 80% úspora času

## 🗂️ Taxonómia KNIFE
- **Kategória:** IT / Hardware / Embedded Systems
- **Typ:** Technický návod, Troubleshooting Guide
- **Tagy:** `raspberry-pi`, `touchscreen`, `calibration`, `x11`, `xorg`, `evdev`, `waveshare`, `lcd`, `input-devices`, `embedded`

## 🌍 Referencie
- [Xorg Evdev Documentation](https://www.x.org/wiki/Development/Documentation/InputDeviceDrivers/)
- [Waveshare LCD Wiki](https://www.waveshare.com/wiki/4inch_RPi_LCD_(A))
- [xinput_calibrator GitHub](https://github.com/tias/xinput_calibrator)
- [Linux Input Subsystem](https://www.kernel.org/doc/html/latest/input/input.html)
- [Xorg InputClass](https://www.x.org/archive/X11R7.5/doc/man/man5/xorg.conf.5.html#sect7)

## Navigácia
- [↩️ Späť](../index.md)
