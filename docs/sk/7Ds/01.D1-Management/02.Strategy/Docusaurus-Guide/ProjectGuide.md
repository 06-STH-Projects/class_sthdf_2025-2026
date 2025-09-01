# Project Guide - Docusaurus static HTML

---

## 1. Introduction

Welcome to the project guide.
This document provides an overview of the purpose, scope, and structure of the repository.

### Purpose

The goal of this repository is to serve as a knowledge base and framework for creating, managing, and deploying Docusaurus-based documentation projects.

### Scope

* Multilingual documentation (SK/EN)
* Support for default and custom deployment methods
* Guides and automation scripts for easier use by students and collaborators

### Structure

* `docs/` — Documentation content
* `src/` — Source files for custom components and pages
* `static/` — Static assets like images and files
* `Makefile` — Commands for build and deployment

---

## 2. Deployment Guide

This guide explains how to deploy the documentation site to GitHub Pages.

### Default Deployment

1. Run the build command:

   ```bash
   npm run build
   ```
2. Deploy to GitHub Pages:

   ```bash
   GIT_USER=YourGitHubUsername npm run deploy
   ```

   This will use the default Docusaurus deploy script and push to the `gh-pages` branch.

### Worktree Deployment (Manual)

This method avoids GitHub Actions usage and pushes directly from your local machine:

1. Create or reset the worktree for the `gh-pages` branch.
2. Copy the build output into the worktree.
3. Commit and push.

### Notes

* Ensure your `GIT_USER` environment variable is set before deploying.
* For private repositories, use a personal access token with `repo` scope.

---

## 3. Troubleshooting

### Problem: `not a git repository`

**Cause:** The deployment directory is missing a `.git` folder.
**Solution:** Recreate the worktree or clone the repository again.

### Problem: `Invalid username or token`

**Cause:** GitHub no longer supports password authentication.
**Solution:** Use SSH or a personal access token.
Example:

```bash
git remote set-url origin https://<username>@github.com/<org>/<repo>.git
```

### Problem: Missing language completeness

**Cause:** Some Docusaurus configurations enforce 100% translation coverage.
**Solution:** Disable strict mode in `docusaurus.config.js` by setting:

```javascript
i18n: {
  defaultLocale: 'sk',
  locales: ['sk', 'en'],
  localeConfigs: {
    en: { label: 'English' },
    sk: { label: 'Slovensky' }
  }
}
```

### General Tips

* Test your build locally with:

```bash
npm run serve
```

* Keep dependencies updated.
