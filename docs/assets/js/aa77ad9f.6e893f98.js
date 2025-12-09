"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[68701],{

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

/***/ 58303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_004_deliverables_07_reflexia_md_aa7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-004-deliverables-07-reflexia-md-aa7.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_004_deliverables_07_reflexia_md_aa7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/reflexia","title":"reflexia","description":"9. Reflexia a spätná väzba","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables/07_reflexia.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/reflexia","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/reflexia","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📦 Final Presentation","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/final_presentation"},"next":{"title":"index","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables/07_reflexia.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "9. Reflexia a spätná väzba",
  "id": "9-reflexia-a-spätná-väzba",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "9-reflexia-a-spätná-väzba",
      children: "9. Reflexia a spätná väzba"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Najľahšie:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Navrhnúť logiku riešenia – jasne sme vedeli, čo chceme, a koncept nám dával zmysel."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Najťažšie:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Zladiť firmware architektúru a testovanie tak, aby všetko fungovalo spoľahlivo. Praktická implementácia zabrala viac času než sme očakávali."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Čo som sa naučil:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Ako navrhovať modulárny embedded firmware (detect → bridge → UI), ako testovať UART protokoly a ako dokumentovať riešenie."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ako by som postupoval inak:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Začal by som skôr s testovaním jednotlivých modulov a venoval viac času UX terminálu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prepojenie do praxe:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Tento typ nástroja sa reálne používa v embedded vývoji a je dobrým príkladom, ako prepájať HW, FW a diagnostiku."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Jedna veta odkaz pre spolužiakov:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "„Aj jednoduchý nástroj vie mať veľký dopad, ak rieši reálny problém.“"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Odporúčanie pre zlepšenie predmetu:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Viac času na testovanie prototypov v labáku a možnosť konzultovať dizajn so skúseným embedded vývojárom."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/",
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