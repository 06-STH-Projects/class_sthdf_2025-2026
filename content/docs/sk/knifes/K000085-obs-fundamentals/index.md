---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000085"
guid: "2c1bdac4-6f59-49d9-9840-3f353ef9b9f7"
dao: "knife"
title: "K000085 – OBS Fundamentals – Základy nahrávania a správy scén"
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
sidebar_label: "K000085 – OBS Fundamentals – Základy nahrávania a správy scén"
---

# 🎥 OBS Fundamentals – Základy nahrávania a správy scén

<!-- nav:knifes -->
> [⬅ KNIFES – Prehľad](../knifes_overview/KNIFE_Overview_Blog.md) • [Zoznam](../knifes_overview/KNIFE_Overview_List.md) • [Detaily](../knifes_overview/KNIFE_Overview_Details.md)
---
<!-- fm-visible: start -->
> **GUID:** `2c1bdac4-6f59-49d9-9840-3f353ef9b9f7`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 1️⃣ Čo je OBS Studio
Open-source nástroj na nahrávanie, PiP, scény a stream.

## 2️⃣ Kľúčové pojmy
- **Scene Collection** (projekt layouts)
- **Scene** (zostava zdrojov)
- **Source** (vrstva: obrazovka, kamera, audio, text, logo)
- **Filter** (maska, rozostrenie, farby)
- **Profile** (výstup: rozlíšenie, codec, bitrate)
- **Hotkeys** (prepínanie, marker Beep)
- **Transition** (Fade, Cut)
- **Bookmark/Marker** (záložka, „Beep“)

## 3️⃣ Profile vs. Scene Collection (macOS)
- Profile: `~/Library/Application Support/obs-studio/basic/profiles`
- Scenes:  `~/Library/Application Support/obs-studio/basic/scenes`
- Hotkeys sú viazané na **Profile**.

## 4️⃣ Odporúčaný režim
- Profile: `SystemThinking_2025` (1080p/30fps, H.264, AAC)
- Scene Collection: `SystemThinking-LetItGrow-2025`
- Scény: Lecture, Reflection, Demo, Lab (CamON/CamOFF varianty)
- Hotkey: `Q` → Beep (marker)
- Výstup: MP4, 48kHz, 160kbps
- Úložisko: `~/Documents/SystemThinking-LetItGrow-2025/`

## 5️⃣ Export/Import scén
- Export: **Scene Collection → Export** → `.json`
- Import: **Scene Collection → Import** → `.json`
> Po importe „prelinkuj“ kameru a monitory.

## 6️⃣ Best Practices
- statické pozadie, PiP 480×480 (kruhová maska), -10 dB peak na vstupe,
- marker `Q` → `beep.wav`,
- duplikuj scény na CamON/CamOFF,
- exportuj MP4 1080p/30fps,
- zálohuj Profile & Scenes v Gite.

## 7️⃣ OBS ↔ Active Presenter
- Beep → strih podľa špičiek v audio stope,
- titulky `.srt` (YouTube/Whisper),
- kvízy v AP,
- publikácia: YouTube + GitHub dashboard.

## 8️⃣ Ďalšie kroky
- KNIFE K0061 – Video Workflow
- KNIFE K0063 – Active Presenter Essentials
- KNIFE K0064 – Multilingual Video Publishing

[Diagram OBS štruktúry](./OBS-Structure.drawio)