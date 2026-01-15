"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[93611],{

/***/ 4147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/lemontree_4-23bdfcbb35a9f5273e3b5b07cdd4df60.png");

/***/ }),

/***/ 4188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/lemontree_3-4842e5d18eaee0777c153433486107a2.png");

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

/***/ 33605:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/lemontree_2-b8df5a8da00ad2543d4f10e781181534.png");

/***/ }),

/***/ 61806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/lemontree_1-b85c575702e0a3cfb7940e4ddf1bb513.png");

/***/ }),

/***/ 87171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_09_change_management_lemontree_md_090_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-09-change-management-lemontree-md-090.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_09_change_management_lemontree_md_090_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/lemontree","title":"lemontree","description":"🏠 Domov · ⬅️ Nahor","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/09-Change-Management/lemontree.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/09-Change-Management","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/lemontree","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/lemontree","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"09 Change Management","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/Change-Management/"},"next":{"title":"PRJ024","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ024/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/09-Change-Management/lemontree.md


const frontMatter = {};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "EA &amp; Lemontree",
  "id": "ea--lemontree",
  "level": 2
}, {
  "value": "Obr. 1 — Porovnanie dvoch verzií modelu komponentov",
  "id": "obr-1--porovnanie-dvoch-verzií-modelu-komponentov",
  "level": 3
}, {
  "value": "Obr. 2 — Porovnanie dvoch verzií Use Case diagramu",
  "id": "obr-2--porovnanie-dvoch-verzií-use-case-diagramu",
  "level": 3
}, {
  "value": "Obr. 3 — Porovnanie modulov v hierarchii komponentov",
  "id": "obr-3--porovnanie-modulov-v-hierarchii-komponentov",
  "level": 3
}, {
  "value": "Obr. 4 — Zlúčenie rozdielov medzi dvoma verziami modelu",
  "id": "obr-4--zlúčenie-rozdielov-medzi-dvoma-verziami-modelu",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ea--lemontree",
      children: "EA & Lemontree"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tieto obrázky zobrazujú proces porovnávania a zlúčenia modelov v nástroji Lemontree, ktorý sa používa na správu verzovania modelov vytvorených v Enterprise Architect (EA). Lemontree umožňuje identifikovať rozdiely medzi dvoma verziami modelu, vizualizovať zmeny a vykonať ich zlúčenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "obr-1--porovnanie-dvoch-verzií-modelu-komponentov",
      children: "Obr. 1 — Porovnanie dvoch verzií modelu komponentov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Porovnanie dvoch verzií modelu komponentov. V hornej časti sú zobrazené rozdiely v štruktúre modelu (ľavá verzia vs pravá verzia). V strede je vizualizovaný diagram komponentov, kde sú zmenené prvky zvýraznené. V spodnej časti sú detailné vlastnosti vybraného prvku s označením, čo sa zmenilo."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MD (repo docs /projects/PRJ023/images):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "lemontree_1 — md",
        src: (__webpack_require__(61806)/* ["default"] */ .A) + "",
        width: "1913",
        height: "1031"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pages (Docusaurus static):"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_023/images/lemontree_1.png",
        alt: "lemontree_1 — pages"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "obr-2--porovnanie-dvoch-verzií-use-case-diagramu",
      children: "Obr. 2 — Porovnanie dvoch verzií Use Case diagramu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Porovnanie dvoch verzií Use Case diagramu. Lemontree zvýrazňuje zmenené prvky (napr. názvy prípadov použitia) a umožňuje kontrolu rozdielov v atribútoch. V spodnej časti sú zobrazené konkrétne zmeny v názvoch a vlastnostiach."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MD (repo docs /projects/PRJ023/images):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "lemontree_2 — md",
        src: (__webpack_require__(33605)/* ["default"] */ .A) + "",
        width: "1916",
        height: "1031"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pages (Docusaurus static):"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_023/images/lemontree_2.png",
        alt: "lemontree_2 — pages"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "obr-3--porovnanie-modulov-v-hierarchii-komponentov",
      children: "Obr. 3 — Porovnanie modulov v hierarchii komponentov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Porovnanie modulov v hierarchii komponentov. Lemontree zobrazuje rozdiely v štruktúre modulov a ich vlastnostiach. V spodnej časti sú detailné zmeny atribútov (napr. názvy, typy)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MD (repo docs /projects/PRJ023/images):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "lemontree_3 — md",
        src: (__webpack_require__(4188)/* ["default"] */ .A) + "",
        width: "1916",
        height: "1029"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pages (Docusaurus static):"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_023/images/lemontree_3.png",
        alt: "lemontree_3 — pages"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "obr-4--zlúčenie-rozdielov-medzi-dvoma-verziami-modelu",
      children: "Obr. 4 — Zlúčenie rozdielov medzi dvoma verziami modelu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zlúčenie rozdielov medzi dvoma verziami modelu. V hornej časti sú zobrazené tri stĺpce: pôvodná verzia, upravená verzia a cieľová verzia po zlúčení. V strede je vizualizovaný Use Case diagram s vyznačenými zmenami. V spodnej časti sú detailné informácie o zlúčených vlastnostiach."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "MD (repo docs /projects/PRJ023/images):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "lemontree_4 — md",
        src: (__webpack_require__(4147)/* ["default"] */ .A) + "",
        width: "1915",
        height: "1026"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pages (Docusaurus static):"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_023/images/lemontree_4.png",
        alt: "lemontree_4 — pages"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
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