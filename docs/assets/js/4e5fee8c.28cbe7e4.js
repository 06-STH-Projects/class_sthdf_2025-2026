"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[31426],{

/***/ 26949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zakladova_doska-26de84be6850f6812e0b888999580c6e.png");

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

/***/ 30877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_021_sdlc_05_design_prototype_md_4e5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-021-sdlc-05-design-prototype-md-4e5.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_021_sdlc_05_design_prototype_md_4e5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/design/prototype","title":"prototype","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/05-design/prototype.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/05-design","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/design/prototype","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/design/prototype","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.040623+00:00","fm_version_comment":"","guid":"258d6000-bcb3-4a72-9215-622f9f0e14ab","dao":"class_sthdf_dashboard","title":"prototype","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"05 design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/design/"},"next":{"title":"06 implementation","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/implementation/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/05-design/prototype.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.040623+00:00',
	fm_version_comment: '',
	guid: '258d6000-bcb3-4a72-9215-622f9f0e14ab',
	dao: 'class_sthdf_dashboard',
	title: 'prototype',
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
const contentTitle = 'System Design';

const assets = {

};



const toc = [{
  "value": "Overall Design Concept",
  "id": "overall-design-concept",
  "level": 2
}, {
  "value": "Hardware Design",
  "id": "hardware-design",
  "level": 2
}, {
  "value": "Case Design",
  "id": "case-design",
  "level": 2
}, {
  "value": "Cooling Design",
  "id": "cooling-design",
  "level": 2
}, {
  "value": "Software Design",
  "id": "software-design",
  "level": 2
}, {
  "value": "Design Tools",
  "id": "design-tools",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "PRJ021 / 05-design / prototype.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "system-design",
        children: "System Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overall-design-concept",
      children: "Overall Design Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém je navrhnutý ako kompaktné externé zariadenie umiestnené v drevenom púzdre.\nNávrh kladie dôraz na jednoduchú výrobu, dobrú ventiláciu a prístupnosť portov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hardware-design",
      children: "Hardware Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardvérová časť pozostáva z Mini-ITX základovej dosky s integrovaným procesorom,\n2.5\" SSD disku a napájacieho zdroja."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na nasledujúcom obrázku je zobrazená základová doska ASRock J4105B-ITX\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Základová doska",
        src: (__webpack_require__(26949)/* ["default"] */ .A) + "",
        width: "1009",
        height: "931"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Napájaci zdroj bol vybraný Seasonic SS-300TFX\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Napájací zdroj",
        src: (__webpack_require__(38438)/* ["default"] */ .A) + "",
        width: "776",
        height: "674"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenty sú rozmiestnené tak, aby bol zabezpečený prirodzený airflow\na zároveň jednoduchý prístup k vstupno-výstupným rozhraniam."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "case-design",
      children: "Case Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Púzdro zariadenia je vyrobené z preglejky a navrhnuté ako viacvrstvová konštrukcia.\nMedzery medzi jednotlivými vrstvami podporujú cirkuláciu vzduchu\na pomáhajú odvádzať teplo z vnútra zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cooling-design",
      children: "Cooling Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chladenie zariadenia je založené na pasívnom chladení procesora\na prirodzenej ventilácii púzdra.\nOdvod teplého vzduchu je podporený napájacím zdrojom,\nktorý aktívne odvádza teplý vzduch smerom von zo skrinky."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "software-design",
      children: "Software Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Primárnym operačným systémom zariadenia je Android TV alebo Android s TV rozhraním.\nZariadenie zároveň podporuje operačný systém Windows,\nktorý je dostupný prostredníctvom dualboot riešenia.\nVýber operačného systému prebieha pri štarte zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "design-tools",
      children: "Design Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Návrh mechanickej konštrukcie zariadenia bol vytvorený v nástroji Fusion 360.\nV rámci návrhu bol spracovaný 3D model púzdra a technické výkresy (drawings) jednotlivých dielov potrebné pre výrobu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na ďalších dvoch obrázkoch je zobrazený výsledný 3D model púzdra aj jeho technický výkres s popisom\nexterierových rozmerov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "3D model púzdra",
        src: (__webpack_require__(96774)/* ["default"] */ .A) + "",
        width: "1049",
        height: "679"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Technický výkres",
        src: (__webpack_require__(32012)/* ["default"] */ .A) + "",
        width: "1584",
        height: "1119"
      })
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



/***/ }),

/***/ 32012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/schema-a8e4dffd3624eabefa50afb97ca26c88.png");

/***/ }),

/***/ 38438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zdroj-89239b57c24745742a510f937b125939.png");

/***/ }),

/***/ 96774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model-dc6e6fcdb854b183aaa721a9f8603e8b.png");

/***/ })

}]);