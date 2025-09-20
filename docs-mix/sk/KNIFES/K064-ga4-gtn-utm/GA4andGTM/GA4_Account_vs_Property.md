# Google Analytics: Account vs Property vs Stream

**Author:** Roman Kazička  
**Date:** 2025-08-22  
**Context:** Rozhodovanie kedy založiť nový GA Account vs Property

---

## 🗂️ Hierarchia v GA4

```plaintext
Google Account (login) = identita
   │
   └── Google Analytics Account (organizačný rámec)
        │
        ├── Property 1 (napr. systemthinking.sk)
        │     ├── Data Stream: Web
        │     ├── Data Stream: iOS App
        │     └── Data Stream: Android App
        │
        ├── Property 2 (napr. blog.systemthinking.sk)
        │     └── Data Stream: Web
        │
        └── Property 3 (napr. interný projekt)
              └── Data Stream: Web
```

---

## 🔑 Kedy použiť **nový Account**

- **Iný majiteľ alebo firma**  
  - Napr. SystemThinking.sk a CurioBits.dev by mali mať oddelené účty.  
- **Rôzni klienti**  
  - Každý klient má vlastný Account, aby si nemiešal dáta.  
- **Právne/účtovné oddelenie**  
  - Iné GDPR povinnosti, iné krajiny, iná fakturácia (Google Ads).  
- **Potrebné úplné oddelenie prístupov**  
  - Účet má vlastných adminov, ktorí nemusia mať prístup do iných účtov.

---

## 🔑 Kedy použiť **novú Property** (v rámci jedného Accountu)

- Viacero webov/appiek v **tej istej firme**.  
  - Napr. `systemthinking.sk`, `blog.systemthinking.sk`, mobilná appka.  
- Spravuje ich ten istý tím a patria tej istej organizácii.  
- Potrebuješ mať spoločné prístupy, ale oddelené merania.  

---

## 🔑 Kedy použiť **nový Data Stream**

- Iný kanál v rámci jednej Property.  
  - Napr. Web + iOS + Android pre jednu aplikáciu.  
- Všetky streamy zdieľajú spoločný reporting, ale identifikujú sa samostatným Measurement ID.

---

## 🎯 Jednoduché pravidlo

- **Nový Account** → keď je iný **majiteľ / firma**  
- **Nová Property** → keď je iný **projekt v rámci tej istej firmy**  
- **Nový Data Stream** → keď je iný **kanál toho istého projektu**
