# Getting Started with GA4 & UTM

## 🔎 Čo je UTM?
UTM = **Urchin Tracking Module**  
Sú to krátke parametre, ktoré pridávate na koniec URL adresy, aby Google Analytics (GA4) vedel, odkiaľ návštevník prišiel.

👉 Samotné UTM nefunguje, ak na webe **nie je nasadené GA4** (cez kód alebo Google Tag Manager).

---

## 🧩 Základné parametre UTM
Každý UTM odkaz môže obsahovať viac parametrov. Najčastejšie sú:

| Parameter         | Účel                                | Príklad hodnoty |
|-------------------|-------------------------------------|-----------------|
| `utm_source`      | zdroj návštevy                     | `linkedin`, `facebook`, `newsletter` |
| `utm_medium`      | typ kanála alebo formát             | `post`, `cpc`, `email` |
| `utm_campaign`    | názov kampane                       | `summer2025`, `webinar_ai` |
| `utm_content`     | rozlíšenie varianty (voliteľné)     | `button1`, `image_banner` |
| `utm_term`        | hľadaný výraz (hlavne pre PPC)      | `ai_course`, `systemthinking` |

---

## 📌 Príklad URL s UTM
- **Bez UTM:**  
  ```
  https://systemthinking.sk
  ```

- **S UTM:**  
  ```
  https://systemthinking.sk/?utm_source=linkedin&utm_medium=post&utm_campaign=august2025&utm_content=button1
  ```

---

## 📊 Kde to uvidíte v GA4
1. Otvorte **Reports → Acquisition → Traffic acquisition**.  
2. Nastavte dimenzie `Session source / medium`.  
3. Uvidíte rozdelenie návštev podľa zdrojov (`linkedin / post`, `facebook / cpc`, atď.).

---

## ✅ Mini šablóna pre UTM
Môžete si pripraviť jednoduchú tabuľku (napr. v Exceli/Calcu) a len dopĺňať hodnoty:

| Base URL | utm_source | utm_medium | utm_campaign | utm_content | Vygenerovaný link |
|----------|------------|------------|--------------|-------------|-------------------|
| https://systemthinking.sk | linkedin | post | august2025 | button1 | https://systemthinking.sk/?utm_source=linkedin&utm_medium=post&utm_campaign=august2025&utm_content=button1 |


### Generátor UTM 
1. [UTM_Generator_Template_with_Formula.xlsx](./UTM_Generator_Template_with_Formula.xlsx)
2. [UTM_Generator_Template_Examples.xlsx](./UTM_Generator_Template_Examples.xlsx)
---

## 🚀 Odporúčaný postup
1. Najprv **nasadiť GA4** na stránku (cez GTM alebo priamo).  
2. Potom začať zdieľať odkazy s UTM parametrami.  
3. V GA4 kontrolovať, čo návštevníci z daných odkazov robia.  

---

## ✨ Tip
Ak nechcete UTM vyrábať ručne, použite oficiálny nástroj:  
[Google Campaign URL Builder](https://ga-dev-tools.web.app/campaign-url-builder/)
