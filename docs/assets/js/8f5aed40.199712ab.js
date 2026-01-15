"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[51580],{

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

/***/ 43483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_09_change_management_index_md_8f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-09-change-management-index-md-8f5.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_09_change_management_index_md_8f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/index","title":"09 Change Management","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/09-Change-Management/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/09-Change-Management","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.973487+00:00","fm_version_comment":"","guid":"2da44edb-2671-4777-b840-369f5638dda0","dao":"class_sthdf_dashboard","title":"09 Change Management","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"operations","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/operation/operations"},"next":{"title":"lemontree","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/lemontree"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/09-Change-Management/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.973487+00:00',
	fm_version_comment: '',
	guid: '2da44edb-2671-4777-b840-369f5638dda0',
	dao: 'class_sthdf_dashboard',
	title: '09 Change Management',
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
const contentTitle = '09-Change Management';

const assets = {

};



const toc = [{
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
  "value": "EA &amp; LemonTree",
  "id": "ea--lemontree",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h4: "h4",
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
        id: "09-change-management",
        children: "09-Change Management"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ea--lemontree",
      children: "EA & LemonTree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto obrázky zobrazujú proces porovnávania a zlúčenia modelov v nástroji LemonTree, ktorý sa používa na správu verzovania modelov vytvorených v Enterprise Architect (EA). LemonTree umožňuje identifikovať rozdiely medzi dvoma verziami modelu, vizualizovať zmeny a vykonať ich zlúčenie."
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/lemontree_1.png",
        alt: "lemontree",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.: Porovnanie dvoch verzií modelu komponentov. V hornej časti sú zobrazené rozdiely v štruktúre modelu (ľavá verzia vs pravá verzia). V strede je vizualizovaný diagram komponentov, kde sú zmenené prvky zvýraznené. V spodnej časti sú detailné vlastnosti vybraného prvku s označením, čo sa zmenilo."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/lemontree_2.png",
        alt: "lemontree",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.: Porovnanie dvoch verzií Use Case diagramu. LemonTree zvýrazňuje zmenené prvky (napr. názvy prípadov použitia) a umožňuje kontrolu rozdielov v atribútoch. V spodnej časti sú zobrazené konkrétne zmeny v názvoch a vlastnostiach."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/lemontree_3.png",
        alt: "lemontree",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.: Porovnanie modulov v hierarchii komponentov. LemonTree zobrazuje rozdiely v štruktúre modulov a ich vlastnostiach. V spodnej časti sú detailné zmeny atribútov (napr. názvy, typy)."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/lemontree_4.png",
        alt: "lemontree",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.: Zlúčenie rozdielov medzi dvoma verziami modelu. V hornej časti sú zobrazené tri stĺpce: pôvodná verzia, upravená verzia a cieľová verzia po zlúčení. V strede je vizualizovaný Use Case diagram s vyznačenými zmenami. V spodnej časti sú detailné informácie o zlúčených vlastnostiach."
      })]
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