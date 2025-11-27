---
fm_version: "1.0.1"
fm_build: "2025-10-12T10:35:00Z"
fm_version_comment: "Added field fm_version_comment to document reasons for FM updates"
id: "K000083_04"
guid: "ea4135ce-9848-4fef-918a-a9fbccba35d3"
dao: "knife"
title: "KNIFE – K000083_04"
description: "-"
author: "Roman Kazička"
authors: ["Roman Kazička",""]
category: "deliverable"
type: "knife"
priority: "no"
tags: ["-"]
locale: "sk"
created: "2025-09-26"
modified: "2025-09-26"
status: "inprogress"
privacy: "public"
rights_holder_content: "Roman Kazička"
rights_holder_system: "Roman Kazička (CAA/KNIFE/LetItGrow)"
license: "CC-BY-NC-SA-4.0"
disclaimer: "Educational content. Use at your own risk."
copyright: "© 2025 Roman Kazička / SystemThinking"
origin_repo: ""
origin_repo_url: ""
origin_commit: ""
origin_system: ""
author_id: "-"
author_did: "-"
fm_reserved1: ""
fm_reserved2: ""
#sidebar_label: "K000083_04 –"
---
# Contributing Guide

<!-- fm-visible: start -->
> **GUID:** `ea4135ce-9848-4fef-918a-a9fbccba35d3`
> **Status:** `inprogress` · **Author:** Roman Kazička · **License:** CC-BY-NC-SA-4.0
<!-- fm-visible: end -->

Tento projekt používa **Node.js v22 (LTS)** a Docusaurus 3.
Aktualizácie balíkov vykonáva len maintainer.

## Verzia Node
- Verzia je zafixovaná v súbore `.nvmrc`.
- Ak používaš `nvm`, stačí `nvm use`.
- Ak používaš Homebrew, maj v PATH `node@22` binárky.

## Inštalácia závislostí
```bash
npm ci
```

## Development
```bash
make dev
```

## Build
```bash
npm run build
```

## Pravidlá (študenti)
- ❌ Neupravuj `package.json` ani `package-lock.json`.
- ❌ Nespúšťaj `npm i` bez pokynu učiteľa.
- ✅ Používaj Node v22 (`nvm use` / Homebrew PATH).
- ✅ Používaj `npm ci`.
