"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[31018],{

/***/ 1626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wireframe_about-c28a8f930d0e611a61e8127ba5b84616.png");

/***/ }),

/***/ 2127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/stav_vcelstva_diagram-9aec6aaf87039344970edbe38796536f.png");

/***/ }),

/***/ 13959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wireframe_about_projet2-4b1ca0335fa731623bdc633ff1c2e53b.png");

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

/***/ 33556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/databaza-953bf54dbe272dd763f941ea7d561491.png");

/***/ }),

/***/ 37033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wireframe_homepage-bfef3a3c8dee21f30c964e7cf6234d59.png");

/***/ }),

/***/ 38774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_002_sdlc_05_design_index_md_991_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-002-sdlc-05-design-index-md-991.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_002_sdlc_05_design_index_md_991_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/design/index","title":"05 design","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/05-design/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/05-design","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/design/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/design/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.997126+00:00","fm_version_comment":"","guid":"e4d80e9f-e7b3-4c88-8f4b-f0ebd4cbb14b","dao":"class_sthdf_dashboard","title":"05 design","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"backlog","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/analysis/backlog"},"next":{"title":"prototype","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/design/prototype"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/05-design/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.997126+00:00',
	fm_version_comment: '',
	guid: 'e4d80e9f-e7b3-4c88-8f4b-f0ebd4cbb14b',
	dao: 'class_sthdf_dashboard',
	title: '05 design',
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
const contentTitle = '05-Design';

const assets = {

};



const toc = [{
  "value": "Value stream",
  "id": "value-stream",
  "level": 3
}, {
  "value": "Zmena stavu včelstva a odoslanie notifikácie na základe frekvencie",
  "id": "zmena-stavu-včelstva-a-odoslanie-notifikácie-na-základe-frekvencie",
  "level": 3
}, {
  "value": "Odosielanie notifikácií",
  "id": "odosielanie-notifikácií",
  "level": 3
}, {
  "value": "Štruktúra GEO dát v prezentačnej webovej aplikácií",
  "id": "štruktúra-geo-dát-v-prezentačnej-webovej-aplikácií",
  "level": 3
}, {
  "value": "Device DB - prezentačný web",
  "id": "device-db---prezentačný-web",
  "level": 3
}, {
  "value": "Wireframes",
  "id": "wireframes",
  "level": 2
}, {
  "value": "Prezentačný web",
  "id": "prezentačný-web",
  "level": 3
}, {
  "value": "Návrh dashboardov s dátami",
  "id": "návrh-dashboardov-s-dátami",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "05-design",
        children: "05-Design"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/design/prototype",
          children: "Prototypy / dizajn"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/",
        children: "⬅️ Projekt"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value-stream",
      children: "Value stream"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Základný value stream nášho systému, zobrazenie dát o včelích úľoch.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Value stream",
        src: (__webpack_require__(54994)/* ["default"] */ .A) + "",
        width: "1131",
        height: "453"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zmena-stavu-včelstva-a-odoslanie-notifikácie-na-základe-frekvencie",
      children: "Zmena stavu včelstva a odoslanie notifikácie na základe frekvencie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Zmena stavu včelstva",
        src: (__webpack_require__(2127)/* ["default"] */ .A) + "",
        width: "505",
        height: "815"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odosielanie-notifikácií",
      children: "Odosielanie notifikácií"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Odosielanie notifikácií",
        src: (__webpack_require__(45733)/* ["default"] */ .A) + "",
        width: "751",
        height: "421"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "štruktúra-geo-dát-v-prezentačnej-webovej-aplikácií",
      children: "Štruktúra GEO dát v prezentačnej webovej aplikácií"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vo webovej aplikácií budeme mať mapu, kde si bude môcť verejnosť pozrieť kde sa nachádzajú monitorované včelie úle, preto potrebujeme štruktúru dát ako budeme tieto GEO dáta ukladať."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "GEO databáza",
        src: (__webpack_require__(72461)/* ["default"] */ .A) + "",
        width: "405",
        height: "366"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "device-db---prezentačný-web",
      children: "Device DB - prezentačný web"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Štruktúra objektu Device v databáze prezentačného webu, Device predstavuje jeden včelí úľ, ktorý je zobrazený na interaktívnej mape. Nie sú to namerané dáta, tie sú uložené v platforme Thingbsoard, ktorá má vlastnú databázu.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "GEO databáza",
        src: (__webpack_require__(33556)/* ["default"] */ .A) + "",
        width: "221",
        height: "191"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wireframes",
      children: "Wireframes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prezentačný-web",
      children: "Prezentačný web"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Wireframe",
        src: (__webpack_require__(37033)/* ["default"] */ .A) + "",
        width: "1280",
        height: "800"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Wireframe",
        src: (__webpack_require__(73230)/* ["default"] */ .A) + "",
        width: "1280",
        height: "800"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Wireframe",
        src: (__webpack_require__(83776)/* ["default"] */ .A) + "",
        width: "1280",
        height: "800"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Wireframe",
        src: (__webpack_require__(13959)/* ["default"] */ .A) + "",
        width: "1280",
        height: "800"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Wireframe",
        src: (__webpack_require__(1626)/* ["default"] */ .A) + "",
        width: "1280",
        height: "800"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "návrh-dashboardov-s-dátami",
      children: "Návrh dashboardov s dátami"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Wireframe",
        src: (__webpack_require__(94062)/* ["default"] */ .A) + "",
        width: "1358",
        height: "2284"
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

/***/ 45733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/alerts-e3b5d7d4f4d5e32744ddb5568a1c53a2.png");

/***/ }),

/***/ 54994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/value_stream-68ae3ced7b3f24740e4d4568e3134cc7.png");

/***/ }),

/***/ 72461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/diagram_geojson-c75aee3c0d80c6491601dbd2a0776a47.png");

/***/ }),

/***/ 73230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wireframe_mapa-7e3a89902525202937e9d5209ec6337f.png");

/***/ }),

/***/ 83776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wireframe_about_project1-13b3d8b7bd9a101498a9684cbdefd2f3.png");

/***/ }),

/***/ 94062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Dashboard-súkromný-eb0695d797e0752dfe151b29a5a35435.png");

/***/ })

}]);