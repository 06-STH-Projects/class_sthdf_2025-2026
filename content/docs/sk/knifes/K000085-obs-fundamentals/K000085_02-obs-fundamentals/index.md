---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000085_02"
guid: "44c57f49-30f3-468c-ab27-583972c5ee3a"
dao: "knife"
title: "K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén"
description: " Základy práce s OBS v kontexte tvorny multimediálneho obsahu"
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "howto"
type: "tutorial"
priority: "top"
tags: ["webinars","tutorials"]
locale: "en"
created: "2025-10-19"
modified: "YYYY-MM-DDTHH:MM:SSZ"
status: "inprogress"
privacy: "private"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Use at your own risk. Methods provided as-is; participation is voluntary and context-aware."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: "knifes_overview"
origin_repo_url: "https://github.com/KNIFE-Framework/knifes_overview"
origin_commit: ""
origin_system: ""
author_id: "RomanKazicka"
author_did: ""
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "HOBS-Fundamentals"
sidebar_label: "K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén"
---

# 🎥 OBS Fundamentals – Základy nahrávania a správy scén

<!-- fm-visible: start -->
> **GUID:** `44c57f49-30f3-468c-ab27-583972c5ee3a`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 1️⃣ Prečo OBS
Open‑source nástroj na nahrávanie, PiP, scény a stream. Stabilný, modulárny, scriptovateľný.

## 2️⃣ Kľúčové pojmy
- **Scene Collection** – balík scén (layouty)
- **Scene** – zostava zdrojov (Display, Camera, Audio, Image, Text)
- **Source** – vrstva v scéne
- **Filter** – maska, rozostrenie, farebná korekcia
- **Profile** – výstup (rozlíšenie, FPS, bitrate, codec)
- **Hotkeys** – klávesové skratky (prepínanie scén, Beep marker)
- **Transition** – prechod (Cut, Fade)
- **Marker/Beep** – zvuková záložka do timeline

## 3️⃣ Profily vs. Kolekcie (macOS umiestnenie)
- Profile: `~/Library/Application Support/obs-studio/basic/profiles`
- Scenes:  `~/Library/Application Support/obs-studio/basic/scenes`
> Hotkeys sú viazané na **Profile** (po importe kolekcie nastav `Q` → Beep).

## 4️⃣ Odporúčaný setup (SystemThinking 2025)
- **Profile:** `SystemThinking_2025` (1080p/30fps, H.264, ~8–10 Mbps, AAC 160 kbps)
- **Scene Collection:** `SystemThinking-LetItGrow-2025`
- **Scény:** Lecture (CamON/CamOFF), Demo (CamON/CamOFF), Reflection, Lab
- **PiP kamera:** ~480×480, **kruhová maska**
- **Marker:** `Q` → `beep.wav` (100 ms, 1 kHz)

## 5️⃣ Export / Import
- Export: *Scene Collection → Export* → `.json`
- Import: *Scene Collection → Import* → `.json`
- Po importe „prelinkuj“ kameru a monitory (Display1/Display2).

## 6️⃣ Best Practices
- Statické pozadie, logá PNG s alfa, zamknuté (🔒) zdroje.
- Peak na vstupe okolo −10 dB, bez clippingu.
- Studio Mode pred prechodom scény.
- Zálohy: export Profile + Scene Collection do Gitu.

## 7️⃣ OBS ↔ Active Presenter
- Beep → rýchly strih podľa špičiek.
- Titulky: YouTube/Whisper `.srt` (SK) → preklad (EN).
- Export: MP4 1080p/30fps.

**Diagram:** [OBS-Structure.drawio](./OBS-Structure.drawio)