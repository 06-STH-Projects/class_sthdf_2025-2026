"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[3372],{

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

/***/ 63460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_04_analysis_index_md_da5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-04-analysis-index-md-da5.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_04_analysis_index_md_da5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/analysis/index","title":"04 analysis","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/04-analysis/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/04-analysis","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/analysis/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.974837+00:00","fm_version_comment":"","guid":"d4020c52-ae1f-4a76-856b-a97d451b0087","dao":"class_sthdf_dashboard","title":"04 analysis","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/solution-architecture/design"},"next":{"title":"backlog","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/analysis/backlog"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/04-analysis/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.974837+00:00',
	fm_version_comment: '',
	guid: 'd4020c52-ae1f-4a76-856b-a97d451b0087',
	dao: 'class_sthdf_dashboard',
	title: '04 analysis',
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
const contentTitle = '04-Analysis';

const assets = {

};



const toc = [{
  "value": "Analýza problému",
  "id": "analýza-problému",
  "level": 2
}, {
  "value": "Diagram požiadaviek",
  "id": "diagram-požiadaviek",
  "level": 2
}, {
  "value": "Funkčné požiadavky",
  "id": "funkčné-požiadavky",
  "level": 2
}, {
  "value": "Nefunkčné požiadavky",
  "id": "nefunkčné-požiadavky",
  "level": 2
}, {
  "value": "Hardvérové obmedzenia",
  "id": "hardvérové-obmedzenia",
  "level": 2
}, {
  "value": "Softvérové obmedzenia",
  "id": "softvérové-obmedzenia",
  "level": 2
}, {
  "value": "Cenová analýza",
  "id": "cenová-analýza",
  "level": 2
}, {
  "value": "Identifikované riziká",
  "id": "identifikované-riziká",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "04-analysis",
        children: "04-Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analýza-problému",
      children: "Analýza problému"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je vytvoriť zariadenie na monitorovanie kvality ovzdušia, ktoré bude:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cenovo dostupné,\n-- jednoduché na inštaláciu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poskytne používateľovi prehľadné dáta v reálnom čase aj historické trendy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riešenie musí byť vhodné pre domáce prostredie, kancelárie, školy a malé firmy.\nProblém, ktorý riešime:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nedostatočné vetranie vedie k zvýšenej koncentrácii CO₂ a TVOC, čo znižuje komfort, zdravie a produktivitu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existujúce riešenia sú drahé, komplikované alebo viazané na uzavreté ekosystémy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "diagram-požiadaviek",
      children: "Diagram požiadaviek"
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/requirements.png",
        alt: "požiadavky",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Diagram požiadaviek."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "funkčné-požiadavky",
      children: "Funkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zariadenie musí merať:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "teplotu, vlhkosť, TVOC, eCO₂ a odvodený AQI."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Musí umožniť:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pripojenie k Wi-Fi a odosielanie dát na server."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Systém musí poskytovať:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "webové rozhranie (desktop & mobil) na vizualizáciu dát."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Podpora:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "historických grafov a aktuálnych hodnôt."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Možnosť:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "exportu dát (napr. CSV)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nefunkčné-požiadavky",
      children: "Nefunkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilné pripojenie k Wi-Fi."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jednoduchá konfigurácia (plug & play)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responzívne a intuitívne UI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bezpečná komunikácia (napr. HTTPS)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nízká spotreba energie (ESP32 + senzory)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hardvérové-obmedzenia",
      children: "Hardvérové obmedzenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie ESP32 ako hlavného mikrokontroléra."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzory AHTX0 a ENS160 (I²C)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájanie cez USB (5V)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obmedzený výpočtový výkon ESP32."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompaktné púzdro s otvormi pre prúdenie vzduchu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "softvérové-obmedzenia",
      children: "Softvérové obmedzenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Firmware v Arduino IDE (C++)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Komunikácia cez HTTP/JSON."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Server postavený na Python Flask + SQLite."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obmedzená pamäť ESP32 → nutná optimalizácia kódu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spracovanie dát na strane servera (agregácie, grafy)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cenová-analýza",
      children: "Cenová analýza"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzor CO₂ (priame meranie): ~90 € → príliš drahé."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzor ENS160 + AHT21 (eCO₂, TVOC, teplota, vlhkosť): 9,90 €."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ESP32 DevKit: 7,30 €."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Káble a príslušenstvo: 3,40 € (balenie 120 ks)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Celková cena riešenia: približne 20 € (bez krytu)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "identifikované-riziká",
      children: "Identifikované riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Presnosť meraní závislá od kalibrácie senzorov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možné výpadky Wi-Fi → nutnosť lokálneho zobrazenia na OLED."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obmedzený priestor v púzdre → potreba premysleného dizajnu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
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