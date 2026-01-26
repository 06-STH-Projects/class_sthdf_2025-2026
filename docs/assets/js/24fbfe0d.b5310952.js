"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[44642],{

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

/***/ 50039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_04_analysis_index_md_24f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-025-sdlc-04-analysis-index-md-24f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_04_analysis_index_md_24f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/analysis/index","title":"04 analysis","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/04-analysis/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/04-analysis","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/analysis/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.963185+00:00","fm_version_comment":"","guid":"8c2b73ff-1a7e-41bc-a2fa-509c6dd9a1d9","dao":"class_sthdf_dashboard","title":"04 analysis","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/solution-architecture/design"},"next":{"title":"backlog","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/analysis/backlog"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/04-analysis/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.963185+00:00',
	fm_version_comment: '',
	guid: '8c2b73ff-1a7e-41bc-a2fa-509c6dd9a1d9',
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
  "value": "Funkčné požiadavky",
  "id": "funkčné-požiadavky",
  "level": 2
}, {
  "value": "Nefunkčné požiadavky",
  "id": "nefunkčné-požiadavky",
  "level": 2
}, {
  "value": "Use Cases",
  "id": "use-cases",
  "level": 2
}, {
  "value": "UC-01: Štart jazdy",
  "id": "uc-01-štart-jazdy",
  "level": 3
}, {
  "value": "UC-02: Detekcia silného náklonu (Strong Nod)",
  "id": "uc-02-detekcia-silného-náklonu-strong-nod",
  "level": 3
}, {
  "value": "UC-03: Detekcia mikrospánkov (Micro Nods)",
  "id": "uc-03-detekcia-mikrospánkov-micro-nods",
  "level": 3
}, {
  "value": "UC-04: Manuálna rekalibrácia počas jazdy",
  "id": "uc-04-manuálna-rekalibrácia-počas-jazdy",
  "level": 3
}, {
  "value": "UC-05: Dlhá cesta s prestávkami",
  "id": "uc-05-dlhá-cesta-s-prestávkami",
  "level": 3
}, {
  "value": "UC-06: Reakcia na falošný poplach",
  "id": "uc-06-reakcia-na-falošný-poplach",
  "level": 3
}, {
  "value": "Analýza obmedzení",
  "id": "analýza-obmedzení",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "04-analysis",
        children: "04-Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "funkčné-požiadavky",
      children: "Funkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Požiadavka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Priorita"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kalibrácia baseline polohy hlavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detekcia silného náklonu hlavy (Strong Nod)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detekcia mikrokývnutí (Micro Nods)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detekcia pomalého klesania hlavy (Slow Drift)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detekcia zamrznutia (Freeze)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detekcia bočného náklonu (Side Tilt)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-modálny alarm (zvuk + LED + displej)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-08"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatické zastavenie alarmu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-09"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time telemetria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FR-10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web dashboard s vizualizáciou"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementované"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nefunkčné-požiadavky",
      children: "Nefunkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Požiadavka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cieľ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Výsledok"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-01"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reakcný čas alarmu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5-3s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-02"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presnosť detekcie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-03"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falošné pozitíva"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-04"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Výdrž batérie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">5h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-05"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cena zariadenia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<€50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€35"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-06"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hmotnosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100g"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~25g"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFR-07"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Použiteľnosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jednoduchá kalibrácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 sekundy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "use-cases",
      children: "Use Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-01-štart-jazdy",
      children: "UC-01: Štart jazdy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktor:"
      }), " Vodič\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič nasadí zariadenie na čelo pomocou elastickej čelenky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zapne napájanie dlhým stlačením power tlačidla"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém automaticky spustí kalibráciu (zobrazí \"CALIBRATING\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič sedí normálne 3 sekundy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazí sa \"READY\" so zelenou farbou - vodič môže začať jazdiť"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-02-detekcia-silného-náklonu-strong-nod",
      children: "UC-02: Detekcia silného náklonu (Strong Nod)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktor:"
      }), " Vodič, Systém\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič jazdí 2 hodiny na diaľnici"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Začína byť unavený, hlava prudko klesá dopredu >25°"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém deteguje stav po 500ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktivuje sa alarm (1000Hz/1500Hz tón + červená LED + \"Strong Nod\" na displeji)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič sa prebudí, zdvihne hlavu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po 1 sekunde v normálnej polohe sa alarm automaticky vypne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič pokračuje v jazde alebo sa rozhodne pre prestávku"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-03-detekcia-mikrospánkov-micro-nods",
      children: "UC-03: Detekcia mikrospánkov (Micro Nods)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktor:"
      }), " Vodič, Systém\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič jazdí v noci, je veľmi unavený"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hlava začína robiť rýchle malé kývnutia (>15°, >12°/s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém zaznamená 1. kývnutie do bufferu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počas nasledujúcich 6 sekúnd deteguje ešte 2 rýchle kývnutia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po 3. kývnutí sa okamžite aktivuje alarm \"Micro Nods\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič sa preberie a uvedomí si, že má mikrospánky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozhodne sa zastaviť na odpočinok"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-04-manuálna-rekalibrácia-počas-jazdy",
      children: "UC-04: Manuálna rekalibrácia počas jazdy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktor:"
      }), " Vodič\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič počas jazdy upraví polohu sedadla alebo volantu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie začína hlásať falošné alarmy kvôli zmenenej polohe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič na chvíľu zastaví vozidlo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stlačí tlačidlo A na zariadení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém spustí kalibráciu (3s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič sedí v novej normálnej polohe"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po dokončení kalibrácie pokračuje v jazde bez falošných alarmov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-05-dlhá-cesta-s-prestávkami",
      children: "UC-05: Dlhá cesta s prestávkami"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktor:"
      }), " Vodič\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič začína 6 hodinovú cestu s plánovanými prestávkami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po 2 hodinách jazdy sa aktivuje alarm (Slow Drift)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič sa rozhodne pre 15 minútovú prestávku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vypne zariadenie (dlhé stlačenie power)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po prestávke zariadenie opäť zapne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém automaticky spustí kalibráciu (vodič je odpočinutý, iná poloha)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pokračuje v jazde ďalšie 4 hodiny s ešte jednou prestávkou"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-06-reakcia-na-falošný-poplach",
      children: "UC-06: Reakcia na falošný poplach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktor:"
      }), " Vodič\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič jazdí po hrboľatej ceste"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vibrácie spôsobia dočasný alarm (Freeze - systém detegoval nedostatok pohybu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič je ale plne pri vedomí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rýchlo stlačí tlačidlo B na zariadení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alarm sa okamžite vypne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič pokračuje v jazde"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EMA filter postupne adaptuje na vibrácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analýza-obmedzení",
      children: "Analýza obmedzení"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardvérové:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU senzor MPU6886 má šum ±1° → Riešené EMA filtrom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batéria 200mAh limituje výdrž → 5-8h je dostatočné pre väčšinu jázd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Displej 1.14\" je malý → Zobrazujú sa len kľúčové informácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Softvérové:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arduino má obmedzené 8MB Flash → Kód optimalizovaný na 120KB"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loop frequency 20Hz je nižšia než IMU 50Hz → Stačí na detekciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Buffer pre micronods je 10 položiek → Pokrýva 8s okno"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Používateľské:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie na čele môže byť nepohodlné → Elastická čelenka to zmierňuje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nutná kalibrácia pri každom štarte → Proces trvá len 3s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB kábel je potrebný pre dashboard → Možné použiť aj samostatne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/solution-architecture/design",
        children: "⬅️ Solution Architecture"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
        children: "⬅️ Projekt"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/",
        children: "➡️ Design"
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