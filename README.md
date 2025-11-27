# Repository Title

> Tento repozitár je súčasťou KNIFE/CAS ekosystému.


#Rýchla navigácia



[01-Zoznam hrubý ](/docs/sk/knifes/overview.md)

[02-Zoznam s detailami- tabuľka ](/docs/sk/knifes/knife_overview/KNIFE_Overview_List.md)

[03-Zoznam s detailami -blog](/docs/sk/knifes/knife_overview/KNIFE_Overview_Details.md)


## 🧾 Popis
Sem pridaj stručný opis účelu repozitára.

## 📁 Štruktúra
- `docs/` – dokumentácia
- `src/` – zdrojový kód (ak existuje)
- `tags.yaml` – metadáta
- `meta.json` – pre AI, API alebo Pages

## 🔗 Prepojenia
Tento repozitár je súčasťou organizácie XYZ a patrí do vrstvy ABC.

---

*Generované podľa KNIFE štandardov v rámci inicializácie projektu.*
    -----------------------------------------------

    
# 🧪 Šablóna projektu – Dev/Prod Branch Model

Tento repozitár slúži ako **template** pre nové projekty, ktoré budú používať jednoduchý, ale efektívny vývojový model postavený na dvoch hlavných vetvách (`branches`):

---

## 🌳 Branch štruktúra

| Branch | Účel | Viditeľnosť | Kto ho používa |
|--------|------|--------------|----------------|
| `main` | **Produkčné prostredie** – hotový obsah pripravený na publikovanie alebo zdieľanie. | Verejný (napr. GitHub Pages) | Všetci |
| `dev`  | **Vývojové prostredie** – experimenty, testovanie, úpravy. Obsah nemusí byť stabilný. | Zvyčajne privátny | Autori, študenti, tím |

---

## 🔄 Odporúčaný workflow

1. 🔧 **Pracuj v `dev` branche**  
   Všetky zmeny, nové stránky, alebo úpravy najprv rob v `dev`.

2. 🧪 **Testuj a kontroluj**  
   Pred publikovaním si všetko otestuj (napr. lokálne v MkDocs alebo Pages).

3. 🔀 **Zlúč (`merge`) `dev` → `main`**  
   Ak je obsah pripravený, sprav merge do `main` (viď nižšie).

4. 🌐 **Publikuj z `main`**  
   V prípade GitHub Pages alebo iných nástrojov sa zverejňuje iba obsah `main`.

---

## 🔀 Ako spraviť merge `dev` → `main`

Existujú 2 hlavné možnosti:

### 🟢 A) Cez GitHub rozhranie (odporúčané pre začiatočníkov)

1. Na GitHube prepnite vetvu na `dev`.
2. Kliknite na **"Compare & pull request"**.
3. Skontrolujte rozdiely a kliknite **"Create pull request"**.
4. Po revízii kliknite na **"Merge pull request"** a potom **"Confirm merge"**.

➡️ Týmto sa obsah z `dev` prenesie do `main`.

---

### 🧑‍💻 B) Cez príkazový riadok (pre pokročilých)
---


### Vytvorenie novej vetvy `dev` zo `main`:

```
git checkout main
git checkout -b dev
git push -u origin dev
```
# Uisti sa, že máš aktuálne dáta
git fetch origin

```
```
# Prepnúť sa na hlavný branch
```
git checkout main
```
# Zlúčiť zmeny z dev do main
git merge origin/dev
```
# Pushnúť na server
git push origin main
```
# KNIFE Overview

Krátky popis repozitára a odkaz na web.

- 🌐 Web: https://knife-framework.github.io/knifes_overview/
- 📚 Dokumentácia: `/docs/sk`
- ⚙️ Build/Deploy: pozri **[Makefile-README.md](./Makefile-README.md)**

## Rýchly štart

```

make dev          # lokálny náhľad
make check-links  # rýchla kontrola odkazov
make mode         # zistí, či ideš Worktree alebo Actions

```

## License

This repository uses a **dual license**:

- **Code and scripts**: [MIT License](./LICENSE)  
- **Educational content and documentation (`.md` files, methodologies, notes)**: [CC-BY 4.0 License](./LICENSE-DOCS)  

This means you are free to use and adapt the code with minimal restrictions, and you may freely
share and remix the educational content as long as you provide proper attribution.
