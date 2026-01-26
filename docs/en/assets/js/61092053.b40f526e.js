"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[1391],{

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

/***/ 40235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_presentation_slides_md_610_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-presentation-slides-md-610.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_presentation_slides_md_610_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation/slides","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.971362+00:00","fm_version_comment":"","guid":"5dbb47e5-dac3-4468-b7f4-d6793079ef66","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ023","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/"},"next":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.971362+00:00',
	fm_version_comment: '',
	guid: '5dbb47e5-dac3-4468-b7f4-d6793079ef66',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
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
const contentTitle = 'PRJ023 — Presentation';

const assets = {

};



const toc = [{
  "value": "Project Summary 🗂️ [zobraziť]",
  "id": "project-summary-️-zobraziť",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Obsah",
  "id": "obsah",
  "level": 2
}, {
  "value": "01-Business",
  "id": "01-business",
  "level": 2
}, {
  "value": "Problém",
  "id": "problém",
  "level": 4
}, {
  "value": "Cieľ projektu",
  "id": "cieľ-projektu",
  "level": 4
}, {
  "value": "Cieľoví používatelia",
  "id": "cieľoví-používatelia",
  "level": 4
}, {
  "value": "Hodnota projektu",
  "id": "hodnota-projektu",
  "level": 4
}, {
  "value": "Obmedzenia",
  "id": "obmedzenia",
  "level": 4
}, {
  "value": "Použitia",
  "id": "použitia",
  "level": 4
}, {
  "value": "02-Top Level Architecture",
  "id": "02-top-level-architecture",
  "level": 2
}, {
  "value": "Fyzické komponenty",
  "id": "fyzické-komponenty",
  "level": 4
}, {
  "value": "Hardware architektúra",
  "id": "hardware-architektúra",
  "level": 4
}, {
  "value": "System architektúra",
  "id": "system-architektúra",
  "level": 4
}, {
  "value": "03-Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "Vývojový diagram",
  "id": "vývojový-diagram",
  "level": 4
}, {
  "value": "04-Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "Analýza problému",
  "id": "analýza-problému",
  "level": 4
}, {
  "value": "Funkčné požiadavky",
  "id": "funkčné-požiadavky",
  "level": 4
}, {
  "value": "Nefunkčné požiadavky",
  "id": "nefunkčné-požiadavky",
  "level": 4
}, {
  "value": "Hardvérové obmedzenia",
  "id": "hardvérové-obmedzenia",
  "level": 4
}, {
  "value": "Softvérové obmedzenia",
  "id": "softvérové-obmedzenia",
  "level": 4
}, {
  "value": "Cenová analýza",
  "id": "cenová-analýza",
  "level": 4
}, {
  "value": "05-Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "Server API",
  "id": "server-api",
  "level": 3
}, {
  "value": "Databázová schéma",
  "id": "databázová-schéma",
  "level": 3
}, {
  "value": "users (väzba používateľ ↔ zariadenie)",
  "id": "users-väzba-používateľ--zariadenie",
  "level": 4
}, {
  "value": "sensor_realtime (posledné merania na používateľa/zariadenie)",
  "id": "sensor_realtime-posledné-merania-na-používateľazariadenie",
  "level": 4
}, {
  "value": "06-Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "Úryvok kódu senzora:",
  "id": "úryvok-kódu-senzora",
  "level": 4
}, {
  "value": "Úryvok kódu servera:",
  "id": "úryvok-kódu-servera",
  "level": 4
}, {
  "value": "Zapojenie hardvéru a prototypovanie",
  "id": "zapojenie-hardvéru-a-prototypovanie",
  "level": 4
}, {
  "value": "Vloženie hardvéru do krabičky z dreva",
  "id": "vloženie-hardvéru-do-krabičky-z-dreva",
  "level": 4
}, {
  "value": "07-Testing &amp; Verification",
  "id": "07-testing--verification",
  "level": 2
}, {
  "value": "Bez krytu",
  "id": "bez-krytu",
  "level": 4
}, {
  "value": "S krytom",
  "id": "s-krytom",
  "level": 4
}, {
  "value": "Výsledky",
  "id": "výsledky",
  "level": 4
}, {
  "value": "08-Operation",
  "id": "08-operation",
  "level": 2
}, {
  "value": "Bežná prevádzka",
  "id": "bežná-prevádzka",
  "level": 4
}, {
  "value": "WiFi",
  "id": "wifi",
  "level": 4
}, {
  "value": "Signály",
  "id": "signály",
  "level": 4
}, {
  "value": "Modrá LEDka bliká v intervale pripomínajúci tlkot srdca",
  "id": "modrá-ledka-bliká-v-intervale-pripomínajúci-tlkot-srdca",
  "level": 5
}, {
  "value": "Modrá LEDka bliká v pol sekundovom rovnomernom intervale",
  "id": "modrá-ledka-bliká-v-pol-sekundovom-rovnomernom-intervale",
  "level": 5
}, {
  "value": "Modrá LEDka bliká v sekundovom rovnomernom intervale",
  "id": "modrá-ledka-bliká-v-sekundovom-rovnomernom-intervale",
  "level": 5
}, {
  "value": "09-Change Management",
  "id": "09-change-management",
  "level": 2
}, {
  "value": "Pôvodný návrh",
  "id": "pôvodný-návrh",
  "level": 4
}, {
  "value": "Realizácia",
  "id": "realizácia",
  "level": 4
}, {
  "value": "Potenciálne zlepšenia",
  "id": "potenciálne-zlepšenia",
  "level": 4
}, {
  "value": "10-Lemontree 🗂️ [zobraziť]",
  "id": "10-lemontree-️-zobraziť",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    li: "li",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj023--presentation",
        children: "PRJ023 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-023-ST_023-ST_023-Air quality monitor"
      })
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/intro.png",
        alt: "clickbait",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Model senzoru kvality ovzdušia"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "project-summary-️-zobraziť",
      children: ["Project Summary ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/project-summary/esp32-air-quality-monitor",
        children: "🗂️ [zobraziť]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento projekt je kompletné riešenie na meranie kvality ovzdušia pomocou syntézy mikrontroléra a senzorov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-023-ST_023-ST_023-Air quality monito"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt rieši meranie kvality ovzdušia pomocou mikrokontroléra ESP32 a senzorov AHTX0 a ENS160, pričom údaje o teplote, vlhkosti, TVOC, eCO₂ a odvodenom AQI sú zobrazované na OLED displeji a odosielané na server. Server ich ukladá do databázy a poskytuje responzívne webové rozhranie na sledovanie aktuálnych hodnôt aj historických trendov. Prínosom je dostupné, cenovo efektívne riešenie pre monitoring kvality vzduchu s možnosťou vzdialeného prístupu k dátam."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/project-summary/esp32-air-quality-monitor",
          children: "00-Project Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/business/",
          children: "01-Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/top-level-architecture/",
          children: "02-Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/solution-architecture/",
          children: "03-Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/analysis/",
          children: "04-Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/design/",
          children: "05-Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/implementation/",
          children: "06-Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/testing-verification/",
          children: "07-Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/operation/",
          children: "08-Operation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/",
          children: "09-Change Management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/lemontree",
          children: "10-Lemontree"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01-Business"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problém",
      children: "Problém"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zvýšená koncentrácia CO₂ a TVOC v interiéroch znižuje komfort, zdravie a produktivitu, pričom dostupné riešenia sú drahé alebo komplikované."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cieľ-projektu",
      children: "Cieľ projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vyvinúť cenovo dostupné zariadenie na meranie kvality ovzdušia s lokálnym displejom a vzdialeným prístupom cez webové rozhranie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cieľoví-používatelia",
      children: "Cieľoví používatelia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Domácnosti, kancelárie, školy, malé firmy – všetci, ktorí potrebujú sledovať kvalitu vzduchu v uzavretých priestoroch."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hodnota-projektu",
      children: "Hodnota projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Dostupnosť: nízke náklady, jednoduchá inštalácia", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Prehľadnosť: OLED displej + webová aplikácia"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "obmedzenia",
      children: "Obmedzenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Výkon a pamäť ESP32", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Stabilita Wi-Fi pripojenia", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Presnosť senzorov závislá od kalibrácie"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "použitia",
      children: "Použitia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Monitorovanie kvality vzduchu v domácnosti", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Riadenie ventilácie v kancelárii podľa CO₂"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02-Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "fyzické-komponenty",
      children: "Fyzické komponenty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ESP32 DevKit (mikrokontrolér, Wi-Fi modul, GPIO piny, I²C zbernica, displej, napájanie)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzorový modul: AHTX0 (meranie teploty & vlhkosti)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzorový modul: ENS160 (meranie TVOC, eCO₂, výpočet AQI)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drevený kryt (otvor pre prúdenie vzduchu, otvor na napájanie)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hardware-architektúra",
      children: "Hardware architektúra"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/hardware_architecture.png",
        alt: "hardware architecture",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Diagram zobrazujúci fyzické komponenty"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "system-architektúra",
      children: "System architektúra"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/component_architecture.png",
        alt: "component architecture",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Diagram zobrazujúci softvérové a systémové komponenty"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03-Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ESP32 so senzormi (I²C) vykresľuje merania na displej a zároveň ich posiela cez Wi‑Fi v JSON formáte na REST server, ktorý ich validuje, ukladá do SQLite a sprístupňuje ich vo webovom dashboarde."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vývojový-diagram",
      children: "Vývojový diagram"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/flow_chart.png",
        alt: "flow chart",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Diagram vizualizuje tok riešenia. Mikrokontrolér číta senzorové dáta a vykresľuje na displej. Zároveň ich zasiela v intervaloch cez sieť na server, kde sa ukladajú do databázy. Dáta si môže používa hocikedy prezrieť z PC alebo mobilu."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04-Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "analýza-problému",
      children: "Analýza problému"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je vytvoriť zariadenie na monitorovanie kvality ovzdušia, ktoré bude cenovo dostupné, jednoduché na inštaláciu a poskytne používateľovi prehľadné dáta v reálnom čase aj historické trendy. Riešenie musí byť vhodné pre domáce aj kancelárske prostredie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "funkčné-požiadavky",
      children: "Funkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zariadenie musí merať teplotu, vlhkosť, TVOC, eCO₂ a odvodený AQI,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "musí umožniť pripojenie k Wi‑Fi a odosielanie dát na server,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systém musí poskytovať webové rozhranie (desktop & mobil) na vizualizáciu dát,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "musí podporovať historické grafy a aktuálne hodnoty,"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nefunkčné-požiadavky",
      children: "Nefunkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stabilné pripojenie k Wi‑Fi,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchá konfigurácia (plug & play),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "responzívne a intuitívne UI,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bezpečná komunikácia (napr. HTTPS)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hardvérové-obmedzenia",
      children: "Hardvérové obmedzenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použitie ESP32 ako hlavného mikrokontroléra,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "senzory AHTX0 a ENS160 (I²C),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napájanie cez USB (5V),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obmedzený výpočtový výkon ESP32."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "softvérové-obmedzenia",
      children: "Softvérové obmedzenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "firmware v Arduino IDE (C++),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "komunikácia cez HTTP/JSON,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "server postavený na Python Flask + SQLite,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obmedzená pamäť ESP32 → optimalizácia kódu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nutnosť spracovania dát na strane servera (agregácie, grafy)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "cenová-analýza",
      children: "Cenová analýza"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzor CO₂ príliš drahý: 90€"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzor ENS160+AHT21 (eCO₂): 9.90€"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ESP32: 7.30€"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Káble: 3.40€ (počet 120ks)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05-Design"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/skica.png",
        alt: "skica",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Náčrť drevenej krabičky, ktorá zakrýva hardvér."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/3d_dizajn.png",
        alt: "3d dizajn",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  3D model drevenej krabičky."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/wiring.png",
        alt: "kabeláž",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Návrh kabeláže medzi mikrokontrolérom a senzorom."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "server-api",
      children: "Server API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GET /health"
        }), " – stav servera (uptime, verzia)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "POST /send-data"
        }), " – prijme najnovšie merania zo senzora (JSON payload)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GET /read-data"
        }), " – vráti dáta pre používateľa a dátum/interval", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Query parametre: user_id, date (napr. 2026-01-13)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "databázová-schéma",
      children: "Databázová schéma"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "users-väzba-používateľ--zariadenie",
      children: "users (väzba používateľ ↔ zariadenie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stĺpec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primárny kľúč"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "serial_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jedinečný identifikátor zariadenia"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sensor_realtime-posledné-merania-na-používateľazariadenie",
      children: "sensor_realtime (posledné merania na používateľa/zariadenie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stĺpec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primárny kľúč"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "user_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK na users.id"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teplota v °C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "humidity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relatívna vlhkosť v %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aqi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index kvality vzduchu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "co2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eCO₂ v ppm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tvoc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TVOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix čas merania"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06-Implementation"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/package.png",
        alt: "balík",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Balík s hardvérom."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/esp32.png",
        alt: "balík mikrokontroléra",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Balík s ESP32."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/sensor.png",
        alt: "balík senzora",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Balík s ENS160+AHT21."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "úryvok-kódu-senzora",
      children: "Úryvok kódu senzora:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ino",
        children: "// Reading the sensor data\nvoid readSensorData(unsigned long currentMillis) {\n  // --- Read AHT21 ---\n  sensors_event_t hmd, temp;\n  aht.getEvent(&hmd, &temp);\n  float temperature = temp.temperature;\n  float humidity = hmd.relative_humidity;\n  // --- Print AHT21 results ---\n  Serial.print(\"Temp: \"); Serial.print(temperature); Serial.print(\" °C, \");\n  Serial.print(\"Humidity: \"); Serial.print(humidity); Serial.println(\" %\");\n  // --- Read ENS160 ---\n  int aqi; // air quality index (1-5)\n  int co2; // estimated CO2 (ppm)\n  int tvoc; // total VOC [Volatile Organic Compounds] (ppb)\n  if( ens.checkDataStatus() ) {\n    aqi = ens.getAQI();\n    co2 = ens.getECO2();\n    tvoc = ens.getTVOC();\n    // --- Print ENS160 results ---\n    Serial.print(\"Air Quality Index (1-5): \"); Serial.print(aqi); Serial.print(\", \");\n    Serial.print(\"eCO2: \"); Serial.print(co2); Serial.print(\" ppm, \");\n    Serial.print(\"TVOC: \"); Serial.print(tvoc); Serial.println(\" ppb\");\n  }\n  else {\n    Serial.print(\"Failed to read air quality data!\");\n  }\n  // Displaying message to display\n  displayMessage(\n    \"Temperature: \" + String(temperature) + \"C\\nHumidity:    \" + String(humidity) +\n    \"%\\nAQI:         \" + String(aqi) + \"index\\nCO2:         \" + String(co2) + \n    \"ppm\\nTVOC:        \" + String(tvoc) + \"mg/m3\"\n  );\n  // Every 5 minutes also send to server\n  if (currentMillis - lastSendTime >= SEND_INTERVAL) {\n    Serial.println(\"Sending sensor data to server...\");\n    lastSendTime = currentMillis;\n    sendDataToServer(temperature, humidity, aqi, co2, tvoc);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "úryvok-kódu-servera",
      children: "Úryvok kódu servera:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.route('/send-data/', methods=['POST'])\ndef receive_data():\n    \"\"\"Receive data endpoint.\"\"\"\n    try:\n        # If no JSON is provided\n        request_json = request.json\n        if not request_json:\n            return fill_json_response(status=STATUS_OK, error=\"No JSON provided\")\n        # Convert JSON to dictionary\n        request_dict = dict(request_json)\n        # Validate JSON schema\n        valid, missing_key = validate_received_data_schema(data=request_dict)\n        if not valid:\n            return fill_json_response(status=STATUS_BAD, error=f\"Missing key: {missing_key}\")\n        # Save to database\n        write_data(data=request_dict)\n        # Return success\n        return fill_json_response(status=STATUS_ADD, error=None)\n    # Handle errors\n    except (ValueError, RuntimeError) as error:\n        print(\"Error:\", error)\n        return fill_json_response(status=STATUS_ERROR, error=\"Internal server error\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Server je hostovaný na platforme ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zapojenie-hardvéru-a-prototypovanie",
      children: "Zapojenie hardvéru a prototypovanie"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/esp32_wired.jpg",
        alt: "zapojený mikrokontrolér",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Zapojený ESP32."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/sensor_wired.jpg",
        alt: "zapojený senzor",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Zapojený senzor ENS160+AHT21."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vloženie-hardvéru-do-krabičky-z-dreva",
      children: "Vloženie hardvéru do krabičky z dreva"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/final_1.jpg",
        alt: "box 1",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Otvor na vzduch."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/final_2.jpg",
        alt: "box 2",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Otvor na display."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/final_3.jpg",
        alt: "box 3",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Otvor na napájanie."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-testing--verification",
      children: "07-Testing & Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nechali sme na internáte bežať senzor 8 dní. 4 dni bol senzor bez krytu, 4 dni v krabičke."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bez-krytu",
      children: "Bez krytu"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/data_before.png",
        alt: "data before",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Hodnoty teploty a vlhkosti sú pomerne presné. Hodnoty oxidu uhličitého primerané."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "s-krytom",
      children: "S krytom"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/data_after.png",
        alt: "data after",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Hodnoty teploty sú značne zvýšené (v priemere o 4 stupne). Vlhkosť rovnaká. Oxid uhličitý zvýšený (v priemere o hodnotu 300)."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "výsledky",
      children: "Výsledky"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Krabička nedodáva senzoru dostatočnú výmenu vzduchu. Zariadenie\nsa prehrieva a skresľuje výsledky. Taktiež skresľuje aj častice v ovzduší a oxid uhličitý kvôli slabej výmene vzduchu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-operation",
      children: "08-Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "bežná-prevádzka",
      children: "Bežná prevádzka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľ zapojí senzor (micro-usb). Senzor sa sám naštartuje a vypisuje na obrazovku jeho stav. Automaticky začína merať a pri prístupe na wifi aj zasielať dáta na server."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "wifi",
      children: "WiFi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak používateľ chce, aby sa zariadenie pripojilo na sieť, tak musí zdieľať pripojenie s určitými podmienkami. Meno siete musí byť \"Hotspot\" a heslo \"smvit12345\". Pre finálny produkt by bol použitý sofistikovanejší prístup ako pre POC."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "signály",
      children: "Signály"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "modrá-ledka-bliká-v-intervale-pripomínajúci-tlkot-srdca",
      children: "Modrá LEDka bliká v intervale pripomínajúci tlkot srdca"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Všetko beží v poriadku. Zariadenie meria a úšpešne zasiela dáta na server."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "modrá-ledka-bliká-v-pol-sekundovom-rovnomernom-intervale",
      children: "Modrá LEDka bliká v pol sekundovom rovnomernom intervale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie signalizuje, že sa mu nepodarilo pripojiť na WiFi. Zariadenie ďalej funguje a meria, ale nezasiela dáta na server."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "modrá-ledka-bliká-v-sekundovom-rovnomernom-intervale",
      children: "Modrá LEDka bliká v sekundovom rovnomernom intervale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie signalizuje, že je na WiFi pripojené, ale nevie dopytovať server (výpadok buď servera alebo lokálnej siete WiFi). Zariadenie ďalej funguje a meria, ale nezasiela dáta na server."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-change-management",
      children: "09-Change Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pôvodný-návrh",
      children: "Pôvodný návrh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V pôvodnom návrhu projektu Air Quality Monitor sa počítalo s kompletnou implementáciou merania kvality ovzdušia, prenosu dát na server a vizualizácie v prehľadnom webovom rozhraní. Zariadenie malo byť umiestnené v kompaktnom drevenom púzdre, ktoré zabezpečí ochranu elektroniky a jednoduchú manipuláciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "realizácia",
      children: "Realizácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Všetky plánované funkcie boli implementované:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "meranie teploty, vlhkosti, TVOC, eCO₂ a odvodeného AQI,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prenos dát cez Wi-Fi na Flask server,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ukladanie dát do SQLite,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "webové rozhranie s historickými grafmi a aktuálnymi hodnotami,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "voliteľný OLED displej pre lokálne zobrazenie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "potenciálne-zlepšenia",
      children: "Potenciálne zlepšenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre ďalšiu verziu projektu boli identifikované možnosti vylepšenia:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Sofistikovanejšie Wi-Fi pripájanie\n(konfigurácia cez webový portál alebo mobilnú aplikáciu)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Lepšie uchopenie hardvéru v krabičke (presne vybudované drážky pre ESP32 a senzory, aby boli pevne uchytené a odolné voči pohybu)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Optimalizovaný prietok vzduchu (ventilačné otvory alebo mriežky, aby sa zabránilo skresleniu meraní spôsobenému uzavretým priestorom)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementácia týchto vylepšení by zvýšila presnosť meraní, mechanickú stabilitu a profesionálny vzhľad zariadenia."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "10-lemontree-️-zobraziť",
      children: ["10-Lemontree ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/lemontree",
        children: "🗂️ [zobraziť]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nasledujúce obrázky zobrazujú proces porovnávania a zlúčenia modelov v nástroji Lemontree, ktorý sa používa na správu verzovania modelov vytvorených v Enterprise Architect (EA). Lemontree umožňuje identifikovať rozdiely medzi dvoma verziami modelu, vizualizovať zmeny a vykonať ich zlúčenie."
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/lemontree_3.png",
        alt: "lemontree",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.: Porovnanie modulov v hierarchii komponentov. Lemontree zobrazuje rozdiely v štruktúre modulov a ich vlastnostiach. V spodnej časti sú detailné zmeny atribútov (napr. názvy, typy)."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../images/lemontree_4.png",
        alt: "lemontree",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.: Zlúčenie rozdielov medzi dvoma verziami modelu. V hornej časti sú zobrazené tri stĺpce: pôvodná verzia, upravená verzia a cieľová verzia po zlúčení. V strede je vizualizovaný Use Case diagram s vyznačenými zmenami. V spodnej časti sú detailné informácie o zlúčených vlastnostiach."
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