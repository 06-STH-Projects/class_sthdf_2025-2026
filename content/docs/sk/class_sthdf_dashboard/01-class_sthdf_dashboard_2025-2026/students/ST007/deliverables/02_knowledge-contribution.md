---
fm_version: 1.0.1
fm_version_comment: ''
locale: sk
fm_build: '2025-12-09T21:04:48Z'
title: 📚 Knowledge Contribution
---

# 📚 Knowledge Contribution

## 🔖 Názov a stručný popis
- **GitHub Auto-Update pre Embedded Systémy**
- Automatická aktualizácia aplikácie z GitHub repozitára pri každom boote zariadenia
- Eliminuje potrebu fyzického prístupu k zariadeniu pre nasadenie nových verzií kódu

## 🎯 Čo rieši (účel, cieľ)
- **Problém**: Embedded zariadenia (Raspberry Pi) vyžadujú fyzický prístup alebo SSH pre update kódu
- **Riešenie**: Automatický git pull pri každom štarte systému
- **Benefit**: Continuous deployment bez manuálneho zásahu
- **Use case**: IoT zariadenia, displeje, kiosky, weather stations

## 🧩 Ako to rieši (princíp)
- **Systemd service** spúšťa bash script pri boote
- **Bash script** vykoná `git fetch` a `git reset --hard origin/main`
- **SSH autentifikácia** cez SSH kľúč (bez hesla)
- **Fail-safe**: Ak git pull zlyhá, spustí poslednú lokálnu verziu
- **Logging**: Každý update sa loguje do `update.log`

## 🧪 Ako to použiť (aplikácia)

### Predpoklady
- Raspberry Pi s Git
- GitHub repozitár
- SSH prístup do Pi

### Setup (5 krokov)
1. **Vygeneruj SSH kľúč na Pi**
```bash
   ssh-keygen -t ed25519 -C "project-name"
   cat ~/.ssh/id_ed25519.pub  # skopíruj
```

2. **Pridaj SSH kľúč do GitHubu**
   - GitHub → Settings → SSH keys → Add new

3. **Vytvor update script** (`update_and_run.sh`)
```bash
   #!/bin/bash
   REPO_URL="git@github.com:user/repo.git"
   APP_DIR="/home/user/app"
   
   if [ ! -d "$APP_DIR/.git" ]; then
       git clone "$REPO_URL" "$APP_DIR"
   else
       cd "$APP_DIR"
       git fetch origin
       git reset --hard origin/main
   fi
   
   python3 main.py
```

4. **Vytvor systemd service** (`/etc/systemd/system/app.service`)
```ini
   [Unit]
   Description=Auto-updating Application
   After=network-online.target
   
   [Service]
   Type=simple
   User=user
   ExecStart=/home/user/app/update_and_run.sh
   Restart=on-failure
   
   [Install]
   WantedBy=multi-user.target
```

5. **Aktivuj service**
```bash
   sudo systemctl enable app.service
   sudo systemctl start app.service
```

---

## ⚡ Rýchly návod (Top)
```bash
# 1. SSH kľúč
ssh-keygen -t ed25519
cat ~/.ssh/id_ed25519.pub  # → GitHub

# 2. Update script
nano update_and_run.sh
# [vložiť script vyššie]
chmod +x update_and_run.sh

# 3. Systemd service
sudo nano /etc/systemd/system/app.service
# [vložiť config vyššie]

# 4. Enable & start
sudo systemctl enable app.service
sudo systemctl start app.service

# 5. Push do GitHub → automatický update pri ďalšom boote
```

## 📜 Detailný článok

### Prečo Git Auto-Update?

**Tradičný prístup:**
- SSH do zariadenia → `git pull` → restart služby
- Problém: Desiatky zariadení = desiatky SSH spojení
- Riziko: Ľudská chyba, zabudnuté zariadenia

**Auto-update prístup:**
- Push do GitHub → zariadenia sa automaticky updatujú pri reštarte
- Zero-touch deployment
- Všetky zariadenia vždy na najnovšej verzii

### Ako to funguje pod kapotou

1. **Boot sequence**
```
   Power On → Systemd → network-online.target → app.service
```

2. **Git operations**
   - `git fetch origin` - stiahne zmeny bez merge
   - `git reset --hard origin/main` - prepíše lokálne zmeny
   - Prečo `reset` a nie `pull`? → Žiadne merge konflikty

3. **SSH autentifikácia**
   - SSH kľúč v `~/.ssh/id_ed25519`
   - GitHub pozná verejný kľúč
   - Bezpečné, bez hesla

### Edge cases

**Čo ak nie je internet pri boote?**
- Systemd: `After=network-online.target` → čaká na sieť
- Ak timeout, spustí poslednú lokálnu verziu

**Čo ak GitHub spadne?**
- Git fetch zlyhá → pokračuje s lokálnou verziou
- Aplikácia beží aj bez update

**Čo ak sú konflikty?**
- `git reset --hard` → prepíše všetko
- Nikdy neupravuj kód lokálne na Pi!

## 💡 Tipy a poznámky

### Best Practices
- ✅ Používaj `main` branch pre production
- ✅ Testuj zmeny lokálne pred push
- ✅ Verzionuj pomocou Git tags (`v1.0.0`)
- ✅ Loguj update operations do súboru
- ✅ Používaj `Restart=on-failure` v systemd

### Anti-patterns
- ❌ Neupravuj súbory lokálne na Pi (git reset ich prepíše)
- ❌ Nedávaj heslá do repo (použij environment variables)
- ❌ Netestuj priamo na production zariadení

### Security
- SSH kľúč je read-only (GitHub deploy key)
- Neposkytuje write prístup do repo
- Ak Pi je kompromitované, útočník nemôže meniť kód

### Monitoring
```bash
# Check update log
cat ~/app/update.log

# Check service status
systemctl status app.service

# Manual update test
cd ~/app && git pull
```

## ✅ Hodnota / Zhrnutie

### Prínosy
- 🚀 **Continuous Deployment** - Push to production okamžite
- 🔄 **Zero-touch Updates** - Žiadny manuálny zásah
- 📊 **Škálovateľnosť** - 1 zariadenie = 100 zariadení
- 🛡️ **Bezpečnosť** - SSH kľúče, žiadne heslá
- 📝 **Audit Trail** - Git história všetkých zmien

### Kedy použiť
- ✅ IoT zariadenia v teréne
- ✅ Digital signage / kiosky
- ✅ Embedded dashboardy
- ✅ Weather stations
- ✅ Smart home controllers

### Kedy nepoužiť
- ❌ Kritické systémy (medicína, aerospace)
- ❌ Zariadenia bez stabilného internetu
- ❌ Prostredie s prísnou change control

### ROI
- **Pred**: 10 zariadení × 5 min update = 50 min
- **Po**: 1× git push = 1 min
- **Úspora**: 98% času

## 🗂️ Taxonómia KNIFE
- **Kategória:** IT / DevOps / Embedded Systems
- **Typ:** Technický návod, Best Practice
- **Tagy:** `raspberry-pi`, `git`, `automation`, `continuous-deployment`, `systemd`, `embedded`, `iot`, `auto-update`, `devops`

## 🌍 Referencie
- [Systemd Service Documentation](https://www.freedesktop.org/software/systemd/man/systemd.service.html)
- [GitHub SSH Key Setup](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- [Git Reset vs Pull](https://stackoverflow.com/questions/3639342/whats-the-difference-between-git-reset-and-git-checkout)
- [Raspberry Pi Systemd Services](https://www.raspberrypi.com/documentation/computers/using_linux.html#the-systemd-daemon)

## Navigácia
- [↩️ Späť](../index.md)
