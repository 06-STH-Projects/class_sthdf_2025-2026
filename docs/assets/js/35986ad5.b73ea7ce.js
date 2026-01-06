"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[10214],{

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

/***/ 55991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_021_sdlc_03_solution_architecture_design_md_359_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-021-sdlc-03-solution-architecture-design-md-359.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_021_sdlc_03_solution_architecture_design_md_359_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/solution-architecture/design","title":"design","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/03-solution-architecture/design.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/solution-architecture/design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/solution-architecture/design","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.041748+00:00","fm_version_comment":"","guid":"a5b4026b-c2a6-4fd4-9aed-2fa5d3330d29","dao":"class_sthdf_dashboard","title":"design","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"03 solution architecture","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/solution-architecture/"},"next":{"title":"04 analysis","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/analysis/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/03-solution-architecture/design.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.041748+00:00',
	fm_version_comment: '',
	guid: 'a5b4026b-c2a6-4fd4-9aed-2fa5d3330d29',
	dao: 'class_sthdf_dashboard',
	title: 'design',
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
const contentTitle = 'Solution Design';

const assets = {

};



const toc = [{
  "value": "Hardware Design",
  "id": "hardware-design",
  "level": 2
}, {
  "value": "Case Construction",
  "id": "case-construction",
  "level": 2
}, {
  "value": "Cooling Concept",
  "id": "cooling-concept",
  "level": 2
}, {
  "value": "Software Architecture",
  "id": "software-architecture",
  "level": 2
}, {
  "value": "Design Decisions",
  "id": "design-decisions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "PRJ021 / 03-solution-architecture / design.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "solution-design",
        children: "Solution Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hardware-design",
      children: "Hardware Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie je postavené na Mini-ITX základovej doske s integrovaným procesorom a operačnou pamäťou.\nAko úložisko slúži 2.5\" SSD disk, na ktorom je nainštalovaný operačný systém a používateľské dáta.\nNapájanie zabezpečuje samostatný elektrický zdroj."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-construction",
      children: "Case Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardvérové komponenty sú umiestnené do dreveného púzdra vyrobeného z preglejky.\nPúzdro je navrhnuté ako viacvrstvová konštrukcia s medzerami medzi jednotlivými vrstvami,\nčo umožňuje prirodzenú cirkuláciu vzduchu a zlepšuje odvádzanie tepla."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cooling-concept",
      children: "Cooling Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Základná doska disponuje pasívnym chladením procesora.\nKonštrukcia púzdra je navrhnutá ako viacvrstvová s medzerami medzi jednotlivými drevenými úrovňami,\nčo podporuje prirodzenú cirkuláciu vzduchu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Odvod teplého vzduchu z vnútra púzdra je zabezpečený napájacím zdrojom,\nktorý je umiestnený v skrinke a aktívne odvádza teplý vzduch smerom von zo zariadenia.\nTýmto spôsobom je zabezpečený základný airflow bez potreby dodatočných chladiacich ventilátorov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "software-architecture",
      children: "Software Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na zariadení je nainštalovaný operačný systém Android TV alebo Android s TV rozhraním,\nktorý je spúšťaný priamo z SSD disku a slúži ako primárne používateľské prostredie\npre multimediálne využitie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie zároveň podporuje operačný systém Windows,\nktorý je nainštalovaný na rovnakom SSD disku a je dostupný prostredníctvom dualboot riešenia.\nPoužívateľ si pri štarte zariadenia môže zvoliť, ktorý operačný systém bude spustený."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "design-decisions",
      children: "Design Decisions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použitie dreveného púzdra z dôvodu jednoduchosti výroby a estetiky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "využitie existujúcich PC komponentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dôraz na nízku spotrebu energie a tichú prevádzku."
      }), "\n"]
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