"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[64850],{

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

/***/ 75022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_023_deliverables_01_about_me_md_5ab_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-023-deliverables-01-about-me-md-5ab.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_023_deliverables_01_about_me_md_5ab_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/about-me","title":"about-me","description":"ABOUT ME - LUKÁŠ LECHMAN","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/about-me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/about-me","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:47Z"},"sidebar":"tutorialSidebar","previous":{"title":"Študentské deliverables","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/"},"next":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:47Z'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "ABOUT ME - LUKÁŠ LECHMAN\nKto Som\nŠtudent informatiky na Fakulte informatiky a informačných technológií STU v Bratislave (FIIT STU) v 2. ročníku inžinierského štúdia. Po rokoch práce výhradne so softvérom a kódom som hľadal spôsob, ako spojiť digitálne zručnosti s niečím hmatateľným som sa rozhodol preskúmať svet drevorezby a digitálnej fabrikácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skúsenosti\n🐍 Python - automatizácia, skripty, spracovanie dát\n💻 JavaScript/TypeScript - webový vývoj\n☕ Java - objektové programovanie\n🗄️ SQL - databázy, data modeling\n🔧 Git/GitHub - version control\nPrečo Woodies?\nPo rokoch sedenia pred obrazovkou som dostal únavu z čisto digitálneho sveta. Všetko čo som vytvoril existovalo iba v počítači - repozitáre na GitHube, webové stránky, backend API."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prečo drevo a hlavolamy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drevo má dušu , je príjemné na dotyk, každý kus je jedinečný, ide o kontrast k sterilným plastom a obrazovkám. Hlavolamy predstavujú logické výzvy, ktoré ako programátori milujeme. Puzzle sú \"algoritmy\" ktoré možno držať v rukách."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CAD/CAM workflow je podobný softvérovému vývoju, kde sa prechádza rôznymi štádiami vývoja: design → testovanie → iterovanie zmien → produkcia, no výstup je fyzický. Zároveň je v ére digitálnej závislosti niečo, čo rozvíja myslenie bez obrazovky, vzácne a ciely na rôzne vekové skupiny."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Týmto projektom chcem dokázať, že IT zručnosti sa dajú aplikovať ďaleko za rámec webových appiek. CAD je programovanie v 3D. CNC je \"kompiler\" ktorý mení kód na fyzický produkt."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čo Chcem Dosiahnuť v Projekte"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z hľadiska technológíí :\nNaučiť sa CAD modeling - OnShape\nPochopiť CAM workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z hľadiska produktu:\nVytvoriť niekoľko open-source dizajnov drevených hlavolamov\nProduction-ready CAD súbory\nMožno 1-2 fyzické prototypy (ak získame prístup k CNC prípadne inej vhodnej technológií)\nMoje Silné Stránky Pre Tento Projekt\n🧠 Logické myslenie\n📊 Systematický prístup - viem rozbiť problém na časti\n⏰ Time management - viem si naplánovať prácu, dodržať deadlines\n🎯 Self-learning - zvyknutý učiť sa nové technológie z dokumentácie, tutoriálov\n🎨 Kreativita - rád experimentujem s novými nápadmi\n🛠️ Hands-on prístup - neobávam sa nových nástrojov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/",
          children: "↩️ Späť"
        })
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