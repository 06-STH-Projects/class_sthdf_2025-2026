---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000085_03"
guid: "29137d69-fb85-41f5-8f98-69c2da54208a"
dao: "knife"
title: "K000085_03 – OBS Fundamentals – Active Presenter Essential"
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
sidebar_label: "K000085_03 – OBS Fundamentals – Active Presenter Essential"
---

# 🧰 Active Presenter Essentials – Strih, titulky, kvízy, export

<!-- fm-visible: start -->
> **GUID:** `29137d69-fb85-41f5-8f98-69c2da54208a`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 1️⃣ Čo s AP riešim
- rýchly strih podľa **markerov (Beep)**,
- titulky (SK), zvýraznenia, šípky,
- interaktívne **Question Slides** (Takeaways),
- export do **MP4** (YouTube) a/alebo **HTML5** (interaktívne).

## 2️⃣ Typický postup
1. *New Project → Blank* → **Insert → Video → From File** (OBS MP4)
2. **Timeline:** nájdi **špičky** (Beep) → `Split` na kapitoly
3. **Annotations:** titulky, tvary, zvýraznenia
4. **Interaction:** Question Slide (MCQ, TF)
5. **Export:** 
   - MP4 (1080p, 30fps, AAC 160 kbps) – pre YouTube
   - alebo HTML5 (ak potrebujem interakciu)

## 3️⃣ Titulky (SK) a preklad (EN)
- V AP: *Annotations → Subtitle* alebo import `.srt`
- Alternatíva: **Whisper** vygeneruje `.srt` (SK) → preklad (EN)
- Export `.srt` priložím k videu (YouTube / GitHub assets).

## 4️⃣ Šablóna pre kvízy (Takeaway)
- 1–3 otázky na konci kapitoly
- formát: MCQ/True-False, max 20–40 s
- logika: fixovať vedomosti, nie známkovať

## 5️⃣ Export presety
- MP4 FullHD, 30 fps, bitrate 8–10 Mbps, AAC 160 kbps
- Fade in/out 300–500 ms
- Vodoznak (logo) voliteľne vpravo hore

## 6️⃣ Evidencia
- Ukladaj `.approj` spolu s finálnym MP4 a `.srt`
- Pre KNIFE vyplň frontmatter (id, dĺžka, tagy, väzby)

**Diagram:** [AP-Workflow.drawio](./AP-Workflow.drawio)