"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[73704],{

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

/***/ 84372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_006_deliverables_05_pitch_presentation_md_f59_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-006-deliverables-05-pitch-presentation-md-f59.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_006_deliverables_05_pitch_presentation_md_f59_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/deliverables/pitch_presentation","title":"🎤 Pitch Presentation","description":"1. Problém","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST006/deliverables/05_pitch_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST006/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/deliverables/pitch_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/deliverables/pitch_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📦 Project Outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/deliverables/project-outcomes"},"next":{"title":"📦 PFinal Presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/deliverables/final_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST006/deliverables/05_pitch_presentation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = '🎤 Pitch Presentation';

const assets = {

};



const toc = [{
  "value": "1. Problém",
  "id": "1-problém",
  "level": 2
}, {
  "value": "2. Riešenie",
  "id": "2-riešenie",
  "level": 2
}, {
  "value": "3. Hodnota",
  "id": "3-hodnota",
  "level": 2
}, {
  "value": "4. Biznis model",
  "id": "4-biznis-model",
  "level": 2
}, {
  "value": "5. Tím",
  "id": "5-tím",
  "level": 2
}, {
  "value": "6. Call to action",
  "id": "6-call-to-action",
  "level": 2
}, {
  "value": "🛠️ Štruktúra pitchu",
  "id": "️-štruktúra-pitchu",
  "level": 2
}, {
  "value": "⏱️ Časovanie",
  "id": "️-časovanie",
  "level": 2
}, {
  "value": "📊 Podklady",
  "id": "-podklady",
  "level": 2
}, {
  "value": "🧭 Tipy",
  "id": "-tipy",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-pitch-presentation",
        children: "🎤 Pitch Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problém",
      children: "1. Problém"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aký problém riešime"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-riešenie",
      children: "2. Riešenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čo ponúkame"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hodnota",
      children: "3. Hodnota"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kto z toho profituje a ako"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-biznis-model",
      children: "4. Biznis model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako by sme to monetizovali (aj v hypotéze)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tím",
      children: "5. Tím"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prečo sme my tí správni ľudia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-call-to-action",
      children: "6. Call to action"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čo potrebujeme od investorov (čas, peniaze, feedback)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-štruktúra-pitchu",
      children: "🛠️ Štruktúra pitchu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), " – aký problém riešime?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Riešenie"
        }), " – čo sme vyvinuli?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trh / Kontext"
        }), " – pre koho to je, aký má dopad?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tím"
        }), " – kto sme, aké máme roly?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výzva"
        }), " – čo potrebujeme (čas, ľudí, investíciu)?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-časovanie",
      children: "⏱️ Časovanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Max 5–7 minút na prezentáciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2–3 minúty Q&A"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-podklady",
      children: "📊 Podklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3–5 slajdov (stručné, vizuálne)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 demo / ukážka výsledku"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy",
      children: "🧭 Tipy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Menej textu, viac vizualizácií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jedna hlavná myšlienka na slide"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/",
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