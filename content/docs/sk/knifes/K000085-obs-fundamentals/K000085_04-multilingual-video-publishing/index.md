---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000085_04"
guid: "bcadd10f-a1fa-4797-8eda-565d63d4443b"
dao: "knife"
title: "K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing"
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
sidebar_label: "K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing"
---

# 🌍 Multilingual Video Publishing – SK originál, EN titulky a EN voice

<!-- fm-visible: start -->
> **GUID:** `bcadd10f-a1fa-4797-8eda-565d63d4443b`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

## 1️⃣ Ciele
- Jeden **SK originál** → viacjazyčné výstupy bez duplicitného strihu.
- Automatizovateľný **preklad titulkov** a voliteľný **anglický voiceover**.

## 2️⃣ Varianty riešenia
- **A) YouTube auto-captions → export `.srt` → preklad (EN) → upload späť**
- **B) Whisper CLI:** 
  - `--task transcribe` (SK `.srt`)
  - `--task translate` (EN `.srt`)
- **C) TTS Voiceover (EN):**
  - ElevenLabs / OpenAI TTS API → vygeneruj EN audio → vlož do AP → export `video_en.mp4`

## 3️⃣ Odporúčaný workflow
1. OBS → MP4 (SK)
2. AP → strih + export SK `.srt` (alebo Whisper/YouTube)
3. Preklad `.srt` → EN (`translate_subs.py` / API)
4. Voliteľne: vygeneruj **EN voice** → nahradiť/zmixovať v AP
5. Publikuj:
   - YouTube: SK video + SK/EN titulky
   - GitHub: `index.md` s FM, odkazy na `.srt` a MP4

## 4️⃣ Štruktúra úložiska
```
videos/2025/K0061-WEB01/
  original_sk.mp4
  subtitles_sk.srt
  subtitles_en.srt
  voice_en.wav        # voliteľné
  video_en.mp4        # voliteľné
  index.md            # frontmatter + popis
```

## 5️⃣ Frontmatter (príklad)
```yaml
id: "K0064-WEB01"
language: "sk"
translated: ["en"]
record_date: "2025-10-19"
outputs:
  mp4_sk: "videos/2025/K0064-WEB01/original_sk.mp4"
  srt_sk: "videos/2025/K0064-WEB01/subtitles_sk.srt"
  srt_en: "videos/2025/K0064-WEB01/subtitles_en.srt"
  mp4_en: "videos/2025/K0064-WEB01/video_en.mp4"
  voice_en: "videos/2025/K0064-WEB01/voice_en.wav"
```

## 6️⃣ Best Practices
- Terminológiu drž v CSV/Glossary (SK→EN) – konzistentnosť medzi videami.
- Segmentuj dlhé videá podľa markerov – jednoduchšie titulky a preklady.
- Uchovávaj verzie `.srt` (v Gite) – kontrola zmien.

**Diagram:** [Multilingual-Publishing.drawio](./Multilingual-Publishing.drawio)