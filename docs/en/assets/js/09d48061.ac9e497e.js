"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[56893],{

/***/ 28453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }),

/***/ 61029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_03_project_summary_md_09d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-03-project-summary-md-09d.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_03_project_summary_md_09d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-summary","title":"project-summary","description":"STHDF-LEDPIANO Project summary","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/03_project-summary.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knowledge-contribution"},"next":{"title":"Project Outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/03_project-summary.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "STHDF-LEDPIANO Project summary",
  "id": "sthdf-ledpiano-project-summary",
  "level": 2
}, {
  "value": "Členovia tímu",
  "id": "členovia-tímu",
  "level": 3
}, {
  "value": "Účel",
  "id": "účel",
  "level": 3
}, {
  "value": "Individuálne vízie",
  "id": "individuálne-vízie",
  "level": 3
}, {
  "value": "Vízia tímu",
  "id": "vízia-tímu",
  "level": 3
}, {
  "value": "Misia tímu",
  "id": "misia-tímu",
  "level": 3
}, {
  "value": "Stratégia",
  "id": "stratégia",
  "level": 3
}, {
  "value": "Koncový zákazník",
  "id": "koncový-zákazník",
  "level": 3
}, {
  "value": "Očakávaná náročnosť",
  "id": "očakávaná-náročnosť",
  "level": 3
}, {
  "value": "Ciele a očakávania",
  "id": "ciele-a-očakávania",
  "level": 3
}, {
  "value": "Popis riešenia",
  "id": "popis-riešenia",
  "level": 3
}, {
  "value": "Projektový plán",
  "id": "projektový-plán",
  "level": 3
}, {
  "value": "Fáza 1 – Plánovanie a výskum (HOTOVÉ)",
  "id": "fáza-1--plánovanie-a-výskum-hotové",
  "level": 4
}, {
  "value": "Fáza 2 – Infraštruktúra (HOTOVÉ)",
  "id": "fáza-2--infraštruktúra-hotové",
  "level": 4
}, {
  "value": "Fáza 3 – Hardvér a 3D tlač (HOTOVÉ / DOLAĎUJE SA)",
  "id": "fáza-3--hardvér-a-3d-tlač-hotové--dolaďuje-sa",
  "level": 4
}, {
  "value": "Fáza 4 – Firmvér &amp; Interakcia (PREBIEHA)",
  "id": "fáza-4--firmvér--interakcia-prebieha",
  "level": 4
}, {
  "value": "Fáza 5 – Integrácia &amp; Vyhodnotenie (PLÁNOVANÉ)",
  "id": "fáza-5--integrácia--vyhodnotenie-plánované",
  "level": 4
}, {
  "value": "Fáza 6 – Finalizácia (PLÁNOVANÉ)",
  "id": "fáza-6--finalizácia-plánované",
  "level": 4
}, {
  "value": "Dosiahnuté výsledky",
  "id": "dosiahnuté-výsledky",
  "level": 3
}, {
  "value": "Skúsenosti",
  "id": "skúsenosti",
  "level": 3
}, {
  "value": "Knifes",
  "id": "knifes",
  "level": 3
}, {
  "value": "Pozitívne skúsenosti",
  "id": "pozitívne-skúsenosti",
  "level": 3
}, {
  "value": "Potenciál na zlepšenie",
  "id": "potenciál-na-zlepšenie",
  "level": 3
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "sthdf-ledpiano-project-summary",
      children: "STHDF-LEDPIANO Project summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ID projektu:"
      }), " STHDF-LEDPIANO", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Názov projektu:"
      }), " Svetelná pomôcka na učenie hry na klavíri", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Názov výrobku:"
      }), " LED Piano Trainer"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "členovia-tímu",
      children: "Členovia tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Samuel Kohút"
        }), " – systémový dizajnér, vývojár hardvéru & firmvéru, dokumentácia"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rola: end-to-end zodpovednosť za koncept, implementáciu, testovanie a dokumentáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "účel",
      children: "Účel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vytvoriť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fyzickú pomôcku na učenie pre klavírnych začiatočníkov"
      }), ", ktorá používa 3D-tlačený LED pás nad klávesmi na ukázanie, ktorý kláves stlačiť. Precvičovanie by malo pôsobiť viac ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rytmická hra"
      }), ", než čítanie nôt, a projekt má spojiť moje softvérové zručnosti s reálnym hardvérom a nástrojmi makerspacu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "individuálne-vízie",
      children: "Individuálne vízie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvoriť niečo užitočné pre moju ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mladšiu sesternicu"
        }), ", aby bolo učenie klavíra zábavnejšie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skombinovať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "embedded programovanie (Raspberry Pi Pico), 3D tlač a systémové myslenie"
        }), " do jedného koherentného projektu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zanechať po sebe ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "replikovateľnú, dobre zdokumentovanú zostavu"
        }), ", ktorú môžu ostatní znovu postaviť alebo rozšíriť."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vízia-tímu",
      children: "Vízia tímu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aj keď ide o jednočlenný projekt, vízia je:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "plne funkčný demo setup"
        }), " (MIDI klavír + LED lišta + riadiaca krabička)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Udržiavať jasnú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dokumentáciu a znalostné príspevky"
        }), " (GitHub + OneNote)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Poskytnúť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "krátke demo video a finálnu prezentáciu"
        }), ", ktoré ukážu skutočnú hodnotu pre učenie, nie len blikanie LED."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "misia-tímu",
      children: "Misia tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Navrhnúť a vytlačiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "modulárnu LED nadstavbu"
        }), ", ktorá sedí nad klávesmi a osvetlí presne jeden box na kláves."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementovať firmvér na Raspberry Pi Pico, ktorý bude ovládať WS2812B LED pás podľa dát skladby."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Experimentovať s PC pipeline (YouTube → audio → MIDI → noty → LED)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zhodnotiť, nakoľko systém podporuje učenie a čo by bolo potrebné, aby sa z neho stal „skutočný“ výrobok."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stratégia",
      children: "Stratégia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jednoduchý a bezpečný hardvérový návrh"
        }), ": žiadne zásahy do klavíra."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "adresovateľné LED WS2812B"
        }), " pre jednoduché zapojenie a farebné ovládanie každého klávesu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Udržať firmvér na Pico jednoduchý a náročné spracovanie (MIDI, transkripcia, spracovanie skladieb) posunúť na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "laptop"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterovať v malých krokoch: blikacie testy → mapovanie klávesov → jednoduché melódie → funkcionality na precvičovanie."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dokumentovať všetky dôležité kroky textom a fotkami v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OneNote"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHube"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "koncový-zákazník",
      children: "Koncový zákazník"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Primárny:"
        }), " úplní začiatočníci na klavíri (deti, študenti), ktorí uprednostňujú vizuálnu a hravú formu učenia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sekundárny:"
        }), " rodičia a učitelia hudby hľadajúci motivačnú tréningovú pomôcku."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "očakávaná-náročnosť",
      children: "Očakávaná náročnosť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hardvérový dizajn, 3D tlač, kabeláž: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "15–25 hodín"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Firmvér (MicroPython na Pico), mapovanie, melódie: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "10–20 hodín"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dokumentácia, znalostné príspevky, demo, prezentácia: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "25–35 hodín"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ciele-a-očakávania",
      children: "Ciele a očakávania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Funkčný prototyp pre ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dve oktávy"
        }), " na AKAI LPK25, s jednou LED pre každý klávesový box."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Aspoň ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2–3 skladby z Youtube piano coverov"
        }), " prehrateľné ako LED sekvencie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kompletný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub repozitár"
        }), " so schémami zapojenia, 3D modelmi, inštrukciami a ukážkovým kódom."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Krátke ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "demo video"
        }), " použité vo finálnej prezentácii."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reflexia, ako projekt ilustruje ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "systémové myslenie"
        }), " (hardvér, softvér, používateľ, dokumentácia, ekosystém)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "popis-riešenia",
      children: "Popis riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardvér"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AKAI LPK25 MIDI keyboard (25 klávesov, dve oktávy)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["WS2812B adresovateľný LED pás vedený cez ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D-tlačenú svetelnú lištu"
        }), " (jeden svetelný box na kláves)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi Pico WH ako riadiaca jednotka."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Breadboard, kábliky, odpory a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D-tlačená krabička"
        }), " na elektroniku a napájanie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Firmvér"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MicroPython kód s PIO Neopixel driverom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mapovanie z indexu klávesu / MIDI noty na index LED."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prehrávač skladieb, ktorý rozsvieti noty v sekvencii s kontrolou tempa, s možnosťou neskoršej podpory akordov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "PC Pipeline (plánované)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Konverzia piano coverov (napr. z YouTube) do MIDI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyčistenie a prispôsobenie skladieb pre rozsah LPK25."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Odosielanie note eventov cez USB serial do Pico pomocou jednoduchého textového protokolu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "projektový-plán",
      children: "Projektový plán"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fáza-1--plánovanie-a-výskum-hotové",
      children: "Fáza 1 – Plánovanie a výskum (HOTOVÉ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Definované ciele, rozsah a cieľoví používatelia."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analýza možností umiestnenia LED: zamietnuté interné LED, zvolená externá lišta."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fáza-2--infraštruktúra-hotové",
      children: "Fáza 2 – Infraštruktúra (HOTOVÉ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie Raspberry Pi Pico s MicroPythonom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overenie ovládania LED pásu a vytvorenie tutorialov ako znalostných príspevkov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fáza-3--hardvér-a-3d-tlač-hotové--dolaďuje-sa",
      children: "Fáza 3 – Hardvér a 3D tlač (HOTOVÉ / DOLAĎUJE SA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytlačené testovacie diely s rôznou hrúbkou stien na optimalizáciu difúzie svetla."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytlačená LED lišta pre dve oktávy + extra box pre posledný kláves."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ohnutý a prispôsobený LED pás tak, aby sedel jeden LED na každý box."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytlačená krabička pre Pico a kabeláž."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fáza-4--firmvér--interakcia-prebieha",
      children: "Fáza 4 – Firmvér & Interakcia (PREBIEHA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Finalizácia mapovania kláves → LED."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementácia jednoduchého prehrávania melódií a kontroly tempa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fáza-5--integrácia--vyhodnotenie-plánované",
      children: "Fáza 5 – Integrácia & Vyhodnotenie (PLÁNOVANÉ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prototyp PC pipeline na odosielanie note eventov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie s reálnymi používateľmi a získanie spätnej väzby."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fáza-6--finalizácia-plánované",
      children: "Fáza 6 – Finalizácia (PLÁNOVANÉ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyleštenie kódu a dokumentácie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nahratie demo videa a príprava finálnej prezentácie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dosiahnuté-výsledky",
      children: "Dosiahnuté výsledky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčná hardvérová platforma: Raspberry Pi Pico + WS2812B pás + napájanie + MIDI klavír."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plne funkčná ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D-tlačená LED nadstavba"
        }), " a krabička na elektroniku, upevnená na klavíri."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED dokážu svietiť v jednotlivých boxoch s dobrou difúziou a zarovnaním."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub a OneNote obsahujú úvodnú dokumentáciu, fotky a setup tutoriály."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "skúsenosti",
      children: "Skúsenosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Naučil som sa, že skutočné výrobky vyžadujú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mechanické kompromisy"
        }), " (napr. zrieknutie sa interných LED po otvorení klavíra)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vidno, že nástroje makerspacu (3D tlač, fyzické experimenty) sú kľúčové pre iteráciu dizajnu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Lepšie som pochopil potrebu plánovať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "celý systém"
        }), " – kabeláž, mechaniku, kód, interakciu a dokumentáciu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "knifes",
      children: "Knifes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie Raspberry Pi so svetelným LED pásom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie Raspberry Pi s Thonny prostredím"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie AKAI MIDI klávesnice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie brand účtu na YouTube (nie je súčasťou verejného repozitára)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie brand účtu na LinkedIne (nie je súčasťou verejného repozitára)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pozitívne-skúsenosti",
      children: "Pozitívne skúsenosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vidieť prvú plne osvetlenú LED lištu na klavíri bol obrovský motivačný moment – projekt pôsobil reálne."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Páči sa mi, že toto môže skutočne pomôcť mojej rodine, nielen splniť predmet."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Veľmi dobrý súlad medzi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ekosystémom kurzu"
        }), " (GitHub, OneNote, KNIFES) a tým, ako prirodzene pracujem ako vývojár."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "potenciál-na-zlepšenie",
      children: "Potenciál na zlepšenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pridať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "practice mode"
        }), ", kde LED čakajú, kým hráč stlačí správny kláves, s farbami pre správne/nesprávne noty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pridať jednoduché ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "konfiguračné UI"
        }), " na výber skladieb a tempa."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zlepšiť prenosnosť tak, aby LED lišta + box fungovali aj na iných 25- alebo 37-klávesových klavíroch."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pretvoriť projekt na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zdokumentovanú open-source stavebnicu"
        }), " pre študentov, učiteľov alebo makerspace centrá."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/",
          children: "↩️ Späť"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ })

}]);