---
# 🧩 Versioning
fm_version: "1.0.1"
fm_build: "2025-11-07"
fm_version_comment: ""

# 🆔 Identity
id: "K000089"
guid: "8d84e744-939c-4b00-8369-0493275c5d4c"

# 🧭 Context
dao: "knife"
title: "K000089 – Kedy SSh a kedy HTTPS?"
description: ""

# 👥 Authorship
author: "Roman Kazička"
authors: ["Roman Kazička"]

# 🗂 Classification
category: ""
type: ""
priority: ""
tags: ["knife"]

# 🌍 Localization & Routing
locale: "sk"

# 🕒 Lifecycle
created: "2025-11-07"
modified: ""
status: "Inprogress"
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
sidebar_label: "K000089 – Kedy SSh a kedy HTTPS?"
---

# Kedy SSh a kedy HTTPS?
> KNIFE K000089 created by Roman Kazička on 2025-11-07  
> GUID: 8d84e744-939c-4b00-8369-0493275c5d4c

---
<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
<!-- User-facing content template (MD). No FM at top. -->

# K000089 — SmartGit + GitHub: HTTPS vs SSH (rozhodnutie, setup, best practices)

## Prečo tento KNIFE
Pri integrácii SmartGit ↔ GitHub potrebujeme zvoliť prístupový režim. **HTTPS (PAT token)** je najjednoduchší pre jednotlivcov a študentov; **SSH** je ideál pre automatizácie, servery a profesionálne tímy. Tento KNIFE dáva jasné **rozhodnutie**, **2 rýchle setupy** a **best practices**.

---

## Rozhodovacia tabuľka

| Scenár | Odporúčané | Prečo |
|---|---|---|
| Bežná práca v SmartGit / LemonTree / EA | **HTTPS (PAT)** | jednoduché nastavenie, dobré UX v GUI, ľahká rotácia práv |
| GitHub Classroom (študenti) | **HTTPS (PAT)** | najmenšie riziko chýb, minimum podpory |
| CI/CD, servery, NAS/QNAP backup, skripty | **SSH** | bez hesiel/tokens v skriptoch, agent, stabilita |
| VM/ARM testy bez browser loginov | **SSH** | lokálna identita cez kľúč, bez OAuth flow |
| Multi-account (work/personal) v jednom stroji | **SSH s `~/.ssh/config`** | oddelenie identít, host aliasy |

---

## Rýchle odpovede

- **Je HTTPS bezpečné?** Áno, s PAT a správnym scope je to štandard.  
- **Je SSH bezpečnejšie?** Pri správnej správe kľúčov (passphrase + agent) je veľmi bezpečné a lepšie pre automaty.  
- **Môžem mať oboje?** Áno. SmartGit zvládne viac účtov (jeden HTTPS, iný SSH).  
- **ARM/VM špecifiká?** Na W11 ARM sa zídu SSH kľúče (menej závislosti na browser/OAuth). Poznámky na konci.

---

## Setup A — HTTPS (PAT) v SmartGit (2 min)

1. GitHub → **Settings → Developer settings → Personal access tokens (Fine-grained)** → vytvor PAT (repo + read:org podľa potreby).  
2. SmartGit → **Preferences → Hosting Providers → Add → GitHub** → vlož token.  
3. Hotovo. Clone/push/pull pôjde cez `https://github.com/...` a token v credential cache.

**Kedy použiť:** jednotlivci, študenti, rýchly štart, GUI-only.

---

## Setup B — SSH v SmartGit (GUI, 5 min)

> Vhodné, keď chceš SSH bez terminalu, s **interným SSH klientom SmartGit**.

1. SmartGit → **Preferences → Authentication → SSH**  
   - **SSH client:** `SmartGit internal`  
   - **Generate Key…** → Typ `ed25519` (alebo `rsa`), nastav **passphrase** → uloží sa do `…\AppData\Roaming\syntevo\SmartGit\ssh\`  
2. **Copy Public Key** → vlož do GitHub: **Settings → SSH and GPG keys → New SSH key**.  
3. Otestuj v SmartGit: **Test** (alebo clone SSH URL `git@github.com:owner/repo.git`).  
4. (Voliteľné) **Enable SSH Agent** v SmartGit, aby si nemusel zadávať passphrase pri každom pushi.

**Pozor:** Interný SSH klient si spravuje vlastný `ssh` priečinok oddelene od systémového `~/.ssh`.

---

## Setup C — SSH s OpenSSH (terminál, 5–7 min)

> Vhodné, keď chceš jednotnú identitu pre SmartGit, VS Code, Git Bash, CI skripty.

1. **Vytvor kľúče** (PowerShell):
   ```powershell
   ssh-keygen -t ed25519 -C "tvoj_email@domain.tld"
   # uložiť do: C:\Users\<user>\.ssh\id_ed25519
   # nastav passphrase
   ```
2. **Spusť agent a nahraj kľúč**:
   ```powershell
   Start-Service ssh-agent
   ssh-add $env:USERPROFILE\.ssh\id_ed25519
   ```
3. **Pridaj public key na GitHub**:
   - skopíruj obsah `id_ed25519.pub` → GitHub **Settings → SSH and GPG keys → New SSH key**.
4. **~/.ssh/config** (ak máš viac účtov/orgov):
   ```sshconfig
   Host github.com
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_ed25519
     AddKeysToAgent yes
     IdentitiesOnly yes

   # príklad pre pracovný alias:
   Host github-work
     HostName github.com
     User git
     IdentityFile ~/.ssh/id_ed25519_work
     AddKeysToAgent yes
     IdentitiesOnly yes
   ```
5. **Test**:
   ```powershell
   ssh -T git@github.com
   # očakávané: "Hi <username>! You've successfully authenticated…"
   ```
6. **SmartGit** → Preferences → Authentication → **SSH client: OpenSSH**.

---

## Tipy a best practices

- **Typ kľúča:** uprednostni `ed25519`; ak infra vyžaduje, použi `rsa -b 4096`.  
- **Passphrase:** vždy nastav, ulož si do password managera.  
- **Agent:** povoliť `ssh-agent` (Windows služba) alebo **SmartGit internal agent**.  
- **Rotácia:** pri odchode člena tímu zruš jeho public key v GitHube (Settings → SSH keys).  
- **CI/CD:** nepoužívaj osobné PAT; použi **deploy keys** (repo-level SSH public key) alebo GitHub App.  
- **Multi-account:** používaj `~/.ssh/config` + **Host aliasy** (`github-work`), v `origin` URL potom `git@github-work:org/repo.git`.  
- **LemonTree/EA:** protokol (SSH/HTTPS) je nezávislý od integrácie – vyber podľa kontextu vyššie.

---

## Poznámky k Windows 11 ARM (VM)

- Pri ARM emulácii sa môžu **líšiť registry pohľady** (x86 vs x64). Pre SmartGit/LemonTree to **neovplyvňuje protokol (SSH/HTTPS)**, ale môže ovplyvniť _detekciu_ aplikácie.  
- **SSH** je v ARM VM často praktickejší (menej závislosti na browser OAuth).  
- Ak LemonTree „nevidí“ SmartGit, pomôže **bridge kľúč** do `HKLM\SOFTWARE\syntevo\SmartGit` (viď samostatný KNIFE RCA).

---

## Troubleshooting (quick)

- **`Permission denied (publickey)`** → chýba key na GitHube, alebo SmartGit používa iný SSH klient než kde je kľúč. Zjednoť na OpenSSH alebo skopíruj key aj do SmartGit `ssh/`.  
- **Pýta passphrase stále dokola** → nie je spustený agent (`Start-Service ssh-agent`, potom `ssh-add …`).  
- **HTTPS pýta login** → použije sa PAT (nie GitHub password). Skontroluj scope a expiraciu.  
- **Kolegovia/študenti** → pre nich drž HTTPS (PAT). SSH zaveď len tam, kde ho vedia spravovať.

---

## Mini check-list (výučba)

- [ ] Študentské repozitáre: **HTTPS (PAT)**  
- [ ] Učiteľ/CI/NAS: **SSH (OpenSSH)**  
- [ ] `~/.ssh/config` pre viac účtov  
- [ ] Agent beží, kľúč nahratý  
- [ ] Dokumentované rotačné pravidlá (odvolanie kľúčov/PAT)
