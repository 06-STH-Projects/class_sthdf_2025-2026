"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[18982],{

/***/ 1031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-data-flow-0819a7d59b87d1765ccd8cc6d9f31712.png");

/***/ }),

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

/***/ 31207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-firmware-architecture-edcc2153b0de3dbc7c7d5aecd6d5d0cd.png");

/***/ }),

/***/ 79904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_03_solution_architecture_index_md_692_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-025-sdlc-03-solution-architecture-index-md-692.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_03_solution_architecture_index_md_692_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/solution-architecture/index","title":"03 solution architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/03-solution-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/solution-architecture/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/solution-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.962067+00:00","fm_version_comment":"","guid":"a9f31e76-7314-4324-b6e1-7407f15f066d","dao":"class_sthdf_dashboard","title":"03 solution architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"02 top level architecture","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/top-level-architecture/"},"next":{"title":"design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/solution-architecture/design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/03-solution-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.962067+00:00',
	fm_version_comment: '',
	guid: 'a9f31e76-7314-4324-b6e1-7407f15f066d',
	dao: 'class_sthdf_dashboard',
	title: '03 solution architecture',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-28 16:54',
	modified: '2025-11-28 16:54',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = '03-Solution Architecture';

const assets = {

};



const toc = [{
  "value": "Firmware Architecture",
  "id": "firmware-architecture",
  "level": 2
}, {
  "value": "Data Flow Diagram",
  "id": "data-flow-diagram",
  "level": 2
}, {
  "value": "Detekčné algoritmy (Detail)",
  "id": "detekčné-algoritmy-detail",
  "level": 2
}, {
  "value": "1. Strong Nod (Silné prikývnutie)",
  "id": "1-strong-nod-silné-prikývnutie",
  "level": 3
}, {
  "value": "2. Micro Nods (Mikrokývnutia)",
  "id": "2-micro-nods-mikrokývnutia",
  "level": 3
}, {
  "value": "3. Slow Drift (Pomalé kĺzanie)",
  "id": "3-slow-drift-pomalé-kĺzanie",
  "level": 3
}, {
  "value": "4. Freeze (Zamrznutie)",
  "id": "4-freeze-zamrznutie",
  "level": 3
}, {
  "value": "5. Side Tilt (Bočný náklon)",
  "id": "5-side-tilt-bočný-náklon",
  "level": 3
}, {
  "value": "Kalibračný systém",
  "id": "kalibračný-systém",
  "level": 2
}, {
  "value": "Účel",
  "id": "účel",
  "level": 3
}, {
  "value": "Proces kalibrácie",
  "id": "proces-kalibrácie",
  "level": 3
}, {
  "value": "Použitie baseline v detekčných algoritmoch",
  "id": "použitie-baseline-v-detekčných-algoritmoch",
  "level": 3
}, {
  "value": "Alert System",
  "id": "alert-system",
  "level": 2
}, {
  "value": "Aktivácia alarmu",
  "id": "aktivácia-alarmu",
  "level": 3
}, {
  "value": "Detekcia prebudenia a zastavenie alarmu",
  "id": "detekcia-prebudenia-a-zastavenie-alarmu",
  "level": 3
}, {
  "value": "Telemetria a komunikačný protokol",
  "id": "telemetria-a-komunikačný-protokol",
  "level": 2
}, {
  "value": "Real-time telemetria",
  "id": "real-time-telemetria",
  "level": 3
}, {
  "value": "Alert notifikácie",
  "id": "alert-notifikácie",
  "level": 3
}, {
  "value": "Príkazy z dashboardu",
  "id": "príkazy-z-dashboardu",
  "level": 3
}, {
  "value": "Hlavný riadiaci cyklus",
  "id": "hlavný-riadiaci-cyklus",
  "level": 2
}, {
  "value": "Filtrovanie šumu (EMA)",
  "id": "filtrovanie-šumu-ema",
  "level": 2
}, {
  "value": "Výkonnostné charakteristiky",
  "id": "výkonnostné-charakteristiky",
  "level": 2
}, {
  "value": "Validácia a testovanie algoritmov",
  "id": "validácia-a-testovanie-algoritmov",
  "level": 2
}, {
  "value": "Unit testy (laboratórne prostredie)",
  "id": "unit-testy-laboratórne-prostredie",
  "level": 3
}, {
  "value": "Integračné testovanie (reálne podmienky)",
  "id": "integračné-testovanie-reálne-podmienky",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "03-solution-architecture",
        children: "03-Solution Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "firmware-architecture",
      children: "Firmware Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Firmware Architecture",
        src: (__webpack_require__(31207)/* ["default"] */ .A) + "",
        width: "1592",
        height: "698"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Firmware Architecture - Modulárna štruktúra Arduino kódu"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "data-flow-diagram",
      children: "Data Flow Diagram"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Data Flow Diagram",
        src: (__webpack_require__(1031)/* ["default"] */ .A) + "",
        width: "1131",
        height: "602"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Data Flow - Tok dát od IMU senzora po výstupy"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "detekčné-algoritmy-detail",
      children: "Detekčné algoritmy (Detail)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-strong-nod-silné-prikývnutie",
      children: "1. Strong Nod (Silné prikývnutie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Deteguje prudký náklon hlavy dopredu, typický pri zaspávaní za volantom."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp fungovania:"
      }), "\nAlgoritmus nepretržite monitoruje uhol náklonu hlavy (roll) a porovnáva ho s baseline hodnotou získanou počas kalibrácie. Ak hlava vodíča klesne dopredu o viac ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "25 stupňov"
      }), " a táto poloha pretrváva viac ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "500 milisekúnd"
      }), ", systém vyhodnotí situáciu ako nebezpečnú a spustí alarm."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prahové hodnoty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálny uhol náklonu: 25°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálna doba trvania: 500 ms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logika detekcie:"
      }), "\nKeď sa rozdiel medzi aktuálnym a baseline uhlom hlavy prekročí stanovenú hranicu, spustí sa vnútorný časovač. Ak hlava zostane v tejto polohe dlhšie ako polovicu sekundy, aktivuje sa výstražný systém s dôvodom \"Strong Nod\". V prípade, že vodič hlavu zdvihne skôr (uhol klesne pod 25°), časovač sa vynuluje a detekcia začína odznova."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-micro-nods-mikrokývnutia",
      children: "2. Micro Nods (Mikrokývnutia)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Zachytáva opakované rýchle mikrokývnutia hlavou, ktoré sú indikátorom mikrospánkov (microsleep episodes)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp fungovania:"
      }), "\nTento algoritmus sleduje nie jednu dlhú udalosť, ale sériu krátkych rýchlych pohybov. Používa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kruhový buffer"
      }), " pre uloženie posledných 10 kývnutí s ich časovými značkami a amplitúdami. Algoritmus vyhodnocuje nielen uhol náklonu (viac ako 15°), ale aj ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rýchlosť pohybu"
      }), " (viac ako 12°/s)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prahové hodnoty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálny uhol kývnutia: 15°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálna rýchlosť: 12°/s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počet kývnutí na alarm: 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Časové okno: 8 sekúnd"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logika detekcie:"
      }), "\nPri každom cykle sa vypočíta rýchlosť zmeny uhla roll. Ak je detegovaný rýchly pohyb s dostatočnou amplitúdou a vodič sa predtým nachádzal v normálnej pozícii (rollDiff < 7.5°), kývnutie sa zaznamená do bufferu s časovou značkou. Následne sa spočítajú všetky kývnutia v posledných 8 sekundách. Ak ich počet dosiahne alebo prekročí 3, spustí sa alarm s dôvodom \"Micro Nods\"."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Detekcia normálnej pozície:"
      }), "\nSystém si pamätá, či sa hlava vrátila do normálnej polohy medzi kývnutiami, čím zabezpečuje, že sa nezapočítajú kontinuálne pomalé pohyby."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-slow-drift-pomalé-kĺzanie",
      children: "3. Slow Drift (Pomalé kĺzanie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Deteguje postupné klesanie hlavy spôsobené ochablnutím svalov krku pri únave."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp fungovania:"
      }), "\nNa rozdiel od Strong Nod, ktorý deteguje prudký pád, Slow Drift zachytáva menej dramatický, ale rovnako nebezpečný stav. Hlava vodíča sa nachádza v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prechodnom pásme"
      }), " medzi normálnou polohou a úplným spánkom (12-25°). Tento stav je typický pre postupné zaspávanie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prahové hodnoty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dolná hranica uhla: 12°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Horná hranica uhla: 25°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálna doba trvania: 3 sekundy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logika detekcie:"
      }), "\nAk sa uhol hlavy dostane do definovaného rozsahu, začne sa merať čas. V prípade, že hlava zostane v tomto \"twilight zone\" viac ako 3 sekundy, systém vyhodnotí stav ako nebezpečný a aktivuje alarm. Ak hlava klesne pod 12° alebo stúpne nad 25°, časovač sa resetuje (pod 12° znamená normálnu polohu, nad 25° už zachytí Strong Nod algoritmus)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-freeze-zamrznutie",
      children: "4. Freeze (Zamrznutie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Identifikuje úplnú absenciu prirodzených mikropohybov hlavy, čo indikuje hlboký spánok."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp fungovania:"
      }), "\nAj pri bdelom stave človek neustále vykonáva nevedomé mikropohyby hlavou. Tento algoritmus vypočítava celkovú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "veľkosť pohybu"
      }), " hlavy pomocou euklidovskej vzdialenosti medzi aktuálnymi a predchádzajúcimi hodnotami roll a pitch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prahové hodnoty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálny detegovaný pohyb: 1.5°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maximálna doba bez pohybu: 10 sekúnd"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logika detekcie:"
      }), "\nV každom cykle sa vypočíta celkový pohyb hlavy vo všetkých osiach. Ak je tento pohyb väčší ako 1.5°, aktualizuje sa časová značka posledného pohybu. Ak však prejde viac ako 10 sekúnd bez akéhokoľvek pohybu presahujúceho tento prah, systém predpokladá hlboký spánok a aktivuje alarm s dôvodom \"No Movement\"."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Význam:"
      }), "\nTento algoritmus je dôležitý najmä v prípadoch, keď vodič zaspal v relatívne rovnej polohe a ostatné algoritmy by nemuseli reagovať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-side-tilt-bočný-náklon",
      children: "5. Side Tilt (Bočný náklon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Zachytáva padanie hlavy na rameno, charakteristické pre bočný spánok."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp fungovania:"
      }), "\nZatiaľ čo predchádzajúce algoritmy sledovali primárne roll (náklon dopredu/dozadu), Side Tilt sa zameriava na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pitch"
      }), " (bočný náklon). Vypočíta sa absolútna hodnota rozdielu medzi aktuálnym pitch a baseline pitch z kalibrácie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prahové hodnoty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálny uhol bočného náklonu: 25°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimálna doba trvania: 500 ms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logika detekcie:"
      }), "\nAk hlava vodíča klesne na jednu zo strán o viac ako 25° a tento stav pretrváva dlhšie ako pol sekundy, aktivuje sa alarm. Časovač sa vynuluje, ak sa hlava vráti do vzpriamenejšej polohy (pitchDiff < 25°)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Význam:"
      }), "\nTento typ detekcie je kritický, pretože bočný spánok je veľmi častý u vodičov na dlhých trasách a môže byť menej zreteľný ako pád hlavy dopredu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kalibračný-systém",
      children: "Kalibračný systém"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "účel",
      children: "Účel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každý vodič má individuálnu polohu sedenia, výšku sedadla a prirodzený uhol držania hlavy. Kalibračný systém vytvára ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "personalizovanú baseline"
      }), " (referenčnú polohu), ktorá slúži ako východiskový bod pre všetky detekčné algoritmy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "proces-kalibrácie",
      children: "Proces kalibrácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spôsoby spustenia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automaticky pri štarte zariadenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manuálne stlačením tlačidla A na zariadení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Príkazom z web dashboardu cez sériový port"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kroky kalibrácie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zobrazenie inštrukcií:"
          }), " Na displeji sa zobrazí modrá obrazovka s textom \"CALIBRATING - Sit normally\", ktorá informuje vodiča, aby sa usadil do svojej bežnej jazdeckej polohy."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stabilizačná pauza:"
          }), " Systém počká 2 sekundy, aby sa vodič mohol pohodlne usadiť a nájsť svoju prirodzenú polohu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zber vzoriek:"
          }), " Počas nasledujúcich ~1 sekundy sa odoberie ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "50 vzoriek"
          }), " IMU dát v intervale 20 milisekúnd. Pre každú vzorku sa vypočítajú uhly roll a pitch pomocou arkustangens transformácie akcelerometrických dát."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Výpočet baseline:"
          }), " Z nazbieraných vzoriek sa vypočíta aritmetický priemer pre obe osi:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Baseline Roll (náklon dopredu/dozadu)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Baseline Pitch (bočný náklon)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reset stavov:"
          }), " Vynulujú sa všetky počítadlá, timery a buffery (napr. buffer mikrokývnutí)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Potvrdenie:"
          }), " Systém označí kalibráciu ako dokončenú a zobrazí \"READY!\" na displeji so zelenou farbou."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "použitie-baseline-v-detekčných-algoritmoch",
      children: "Použitie baseline v detekčných algoritmoch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po úspešnej kalibrácii systém v každom cykle vypočíta ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rozdiely"
      }), " medzi aktuálnymi hodnotami a baseline:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "rollDiff"
        }), " = baseline Roll - aktuálny Roll (kladná hodnota znamená náklon dopredu)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pitchDiff"
        }), " = |aktuálny Pitch - baseline Pitch| (absolútna hodnota bočného náklonu)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto rozdiely potom vstupujú do všetkých piatich detekčných algoritmov ako hlavné meracie veličiny."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alert-system",
      children: "Alert System"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aktivácia-alarmu",
      children: "Aktivácia alarmu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď ktorýkoľvek z piatich detekčných algoritmov identifikuje nebezpečný stav, systém okamžite aktivuje multi-modálny výstražný systém pozostávajúci z troch synchronizovaných komponentov:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Vizuálne upozornenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Displej sa okamžite zmení na červenú farbu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazí sa textový dôvod alarmu (napr. \"Strong Nod\", \"Micro Nods\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB LED na zariadení sa rozsvieti na plnú intenzitu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Zvukové upozornenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktivuje sa integrovaný reproduktor/buzzer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prehrávajú sa striedavé tóny s frekvenciami 1000 Hz a 1500 Hz"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tóny sa menia každých 300 milisekúnd, čím vytvárajú dôrazný, ale nie neprimerane rušivý vzor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trvanie každého tónu je 250 ms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Telemetrická notifikácia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Do web dashboardu sa odošle JSON správa s typom \"alert\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Správa obsahuje dôvod (1-5), textový popis a časovú značku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dashboard môže zobraziť vlastné UI upozornenie alebo zaznamenať udalosť do histórie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detekcia-prebudenia-a-zastavenie-alarmu",
      children: "Detekcia prebudenia a zastavenie alarmu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém nebeží neobmedzene - monitoruje, či sa vodič prebral:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Podmienky pre zastavenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hlava vodiča sa musí vrátiť do polohy blízkej baseline (rollDiff < 12.5° a pitchDiff < 12.5°)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Táto poloha musí trvať nepretržite viac ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1 sekundu"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Logika:"
      }), "\nAk je alarm aktívny a vodič sa vráti do bezpečnej polohy, spustí sa časovač. Ak zostane v tejto polohe dostatočne dlho, systém vyhodnotí, že vodič je opäť pri vedomí, a automaticky alarm vypne. LED sa zhasne, displej sa vráti k normálnemu zobrazeniu metrík a zvuk sa zastaví."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Manuálne zastavenie:"
      }), "\nVodič môže alarm kedykoľvek zastaviť:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stlačením tlačidla B na zariadení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Príkazom STOP_ALERT z web dashboardu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "telemetria-a-komunikačný-protokol",
      children: "Telemetria a komunikačný protokol"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-time-telemetria",
      children: "Real-time telemetria"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zariadenie nepretržite posiela telemetrické dáta cez USB sériový port rýchlosťou ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10 správ za sekundu"
      }), " (interval 100 ms). Dáta sú vo formáte ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JSON"
      }), " pre jednoduchú integráciu s web dashboardom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Obsah telemetrickej správy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Časová značka (timestamp)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktuálne uhly (roll, pitch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozdiely oproti baseline (rollDiff, pitchDiff)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Celková veľkosť pohybu (movement)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počet zaznamenaných mikrokývnutí v aktuálnom okne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stav alarmu (aktívny/neaktívny) a dôvod"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stav batérie a nabíjania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Štatistické údaje (maximálny rollDiff, priemerný movement)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Príklad štruktúry:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"type\": \"telemetry\",\n  \"timestamp\": ...,\n  \"rollDiff\": 12.34,\n  \"pitchDiff\": 5.67,\n  \"movement\": 2.13,\n  \"micronods\": 2,\n  \"isAlerting\": false,\n  \"battery\": 85,\n  ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alert-notifikácie",
      children: "Alert notifikácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď sa aktivuje alarm, okamžite sa odošle špeciálna správa typu \"alert\" s presným dôvodom a časovou značkou. Dashboard ju môže použiť na zobrazenie pop-up upozornenia alebo záznam do histórie udalostí."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "príkazy-z-dashboardu",
      children: "Príkazy z dashboardu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web dashboard môže zariadeniu posielať textové príkazy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Príkaz"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Účel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CALIBRATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spustí proces kalibrácie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "STOP_ALERT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zastaví aktívny alarm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RESET_STATS"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vynuluje počítadlá štatistík"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hlavný-riadiaci-cyklus",
      children: "Hlavný riadiaci cyklus"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celý systém beží v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nekonečnej slučke"
      }), " s frekvenciou približne ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20 Hz"
      }), " (50 ms na jeden cyklus). Každý cyklus vykonáva tieto kroky v presnom poradí:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fáza 1: Vstup a spracovanie dát"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktualizácia hardvéru (tlačidlá, USB, batéria)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čítanie IMU senzora cez I2C zbernice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výpočet orientačných uhlov roll a pitch pomocou AHRS algoritmu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výpočet rozdielov oproti baseline (rollDiff, pitchDiff)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výpočet odvodených veličín (rýchlosť zmeny roll, celkový pohyb)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fáza 2: Detekcia"
      }), "\n6. Spustenie algoritmu Strong Nod\n7. Spustenie algoritmu Micro Nods\n8. Spustenie algoritmu Slow Drift\n9. Spustenie algoritmu Freeze\n10. Spustenie algoritmu Side Tilt\n11. Kontrola podmienok pre automatické zastavenie alarmu"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Fáza 3: Výstupy a údržba"
      }), "\n12. Aktualizácia štatistických hodnot (max, avg)\n13. Vykreslenie aktuálneho stavu na displej\n14. Odoslanie telemetrie cez Serial (každých 100ms)\n15. Prehrávanie zvukového alarmu (ak je aktívny)\n16. Spracovanie príkazov z web dashboardu\n17. Obsluha manuálnych tlačidiel A a B\n18. Časová pauza 50ms pred ďalším cyklom"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "filtrovanie-šumu-ema",
      children: "Filtrovanie šumu (EMA)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vozidlo generuje neustále vibrácie z motora, cesty a závesov. Tieto vibrácie by mohli spôsobovať ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "falošné pozitíva"
      }), " v detekcii pohybu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      }), " Použitie ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exponential Moving Average (EMA)"
      }), " filtra na priemerný pohyb:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vzorec:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "avgMovement = avgMovement × 0.95 + movement × 0.05"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp:"
      }), " Nová hodnota pohybu prispieva len 5% k priemeru, zatiaľ čo historická hodnota má váhu 95%. Tým sa vyhladia náhodné skoky spôsobené vibráciami, ale zachovajú sa skutočné trendy v pohybe hlavy."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Benefit:"
      }), " Redukcia falošných alarmov bez straty citlivosti na skutočné zaspávanie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "výkonnostné-charakteristiky",
      children: "Výkonnostné charakteristiky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Poznámka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frekvencia hlavného cyklu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 ms na jeden cyklus"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vzorkovanie IMU senzora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interná frekvencia MPU6886"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frekvencia telemetrie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 Hz"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Správa každých 100 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Počet kalibračných vzoriek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Odobraté za ~1 sekundu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Čas kalibrácie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1 sekunda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 vzoriek × 20 ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Veľkosť bufferu mikrokývnutí"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kruhový buffer pre históriu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maximálne oneskorenie alarmu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<500 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Najrýchlejší algoritmus (Strong Nod)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimálne oneskorenie alarmu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Nod a Side Tilt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Priemerná spotreba energie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80 mA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pri aktívnom meraní a displej"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Výdrž na batériu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8 hodín"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Závislé od frekvencie alarmov"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "validácia-a-testovanie-algoritmov",
      children: "Validácia a testovanie algoritmov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unit-testy-laboratórne-prostredie",
      children: "Unit testy (laboratórne prostredie)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý algoritmus bol individuálne otestovaný simulovaním špecifických pohybových vzorov:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Strong Nod Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulovaný náklon >25° trvajúci >500ms → Alarm aktivovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Náklon <25° → Žiadny alarm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Náklon >25° trvajúci <500ms → Žiadny alarm (časovač sa resetuje)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Micro Nods Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Séria 3 rýchlych kývnutí (>15°, >12°/s) v priebehu 8s → Alarm aktivovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iba 2 kývnutia → Žiadny alarm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pomalé kývnutia (<12°/s) → Nezapočítajú sa do bufferu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Slow Drift Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Postupné klesanie hlavy do pásma 12-25° na >3s → Alarm aktivovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rýchly prechod cez toto pásmo → Žiadny alarm (časovač sa nestihne naplniť)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Freeze Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Úplná absencia pohybu >1.5° po dobu 10s → Alarm aktivovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pravidelné mikropohyby >1.5° → Časovač sa neustále resetuje"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Side Tilt Detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bočný náklon >25° trvajúci >500ms → Alarm aktivovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bočný náklon <25° → Žiadny alarm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integračné-testovanie-reálne-podmienky",
      children: "Integračné testovanie (reálne podmienky)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testové prostredie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vozidlo: Osobný automobil na mestských a prímestských cestách"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trvanie: Viac ako 2 hodiny kontinuálneho testovania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podmienky: Rôzne typy ciest (asfalt, štrkové cesty, rýchlostné obchvaty)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Úspešnosť detekcie:"
        }), " 100% pri simulovaných zaspávaniach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Falošné pozitíva:"
        }), " <5% (primárne na veľmi hrboľatých cestách)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Falošné negatíva:"
        }), " 0% (všetky simulované udalosti boli zachytené)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reakcný čas:"
        }), " 500-3000 ms v závislosti od typu algoritmu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stabilita systému:"
        }), " Žiadne pády, žiadne reštarty"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Závery z testovania:"
      }), "\nSystém je pripravený na nasadenie v reálnom prostredí s vysokou spoľahlivosťou detekcie a minimálnou mierou falošných poplachov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
        children: "⬅️ Projekt"
      })]
    })]
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