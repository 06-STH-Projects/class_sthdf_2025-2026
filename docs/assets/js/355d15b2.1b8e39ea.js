"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[31790],{

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

/***/ 80298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_004_deliverables_04_project_outcomes_md_355_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-004-deliverables-04-project-outcomes-md-355.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_004_deliverables_04_project_outcomes_md_355_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/project-outcomes","title":"📦 Project Outcomes","description":"🔖 Stav projektu","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables/04_project-outcomes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/project-outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/project-outcomes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📦 Project Outcomes"},"sidebar":"tutorialSidebar","previous":{"title":"📝 Project Summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/project-summary"},"next":{"title":"🎤 Pitch Presentation – SerialyTTY UART Tool","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/pitch_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables/04_project-outcomes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '📦 Project Outcomes'
};
const contentTitle = '📦 Project Outcomes';

const assets = {

};



const toc = [{
  "value": "🔖 Stav projektu",
  "id": "-stav-projektu",
  "level": 2
}, {
  "value": "🧩 Výstupy podľa SDLC / V-modelu",
  "id": "-výstupy-podľa-sdlc--v-modelu",
  "level": 2
}, {
  "value": "1. Business požiadavky",
  "id": "1-business-požiadavky",
  "level": 3
}, {
  "value": "2. Top Level Architecture",
  "id": "2-top-level-architecture",
  "level": 3
}, {
  "value": "3. Solution Architecture",
  "id": "3-solution-architecture",
  "level": 3
}, {
  "value": "4. Analysis",
  "id": "4-analysis",
  "level": 3
}, {
  "value": "5. Design",
  "id": "5-design",
  "level": 3
}, {
  "value": "6. Implementation",
  "id": "6-implementation",
  "level": 3
}, {
  "value": "7. Verification &amp; Testing",
  "id": "7-verification--testing",
  "level": 3
}, {
  "value": "8. Operation",
  "id": "8-operation",
  "level": 3
}, {
  "value": "🏆 Finálny produkt",
  "id": "-finálny-produkt",
  "level": 2
}, {
  "value": "🧭 Porovnanie s Project Summary",
  "id": "-porovnanie-s-project-summary",
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
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "-project-outcomes",
        children: "📦 Project Outcomes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-stav-projektu",
      children: "🔖 Stav projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "funguje základný prototyp na ESP32-C6,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["FW obsahuje:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "automatickú detekciu baud rate,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "bridge mód,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "terminálové menu,"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prototyp je použiteľný na debug a výuku."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-výstupy-podľa-sdlc--v-modelu",
      children: "🧩 Výstupy podľa SDLC / V-modelu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-business-požiadavky",
      children: "1. Business požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchle debugovanie sériovej linky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchší workflow bez ručného nastavovania baud/rx-tx."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-top-level-architecture",
      children: "2. Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC → USB → ESP32-C6 → UART cieľového zariadenia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-solution-architecture",
      children: "3. Solution Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "modulárny firmware (Baud Detect, Bridge, Menu),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "voliteľné TFT/SD prvky pre vizualizáciu a logovanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-analysis",
      children: "4. Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bežné USB-TTL adaptéry neponúkajú automatizáciu ani diagnostiku,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vzdelávací aj praktický nástroj má vysokú hodnotu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-design",
      children: "5. Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "návrh FW modulov a koncept HW zapojenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "definované rozšírenia (TFT, SD)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-implementation",
      children: "6. Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "breadboard prototyp + prvá FW iterácia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-verification--testing",
      children: "7. Verification & Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "test na viacerých UART zariadeniach (ESP, STM32, Arduino),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "test Bridge a detect funkcie cez sériový terminál."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-operation",
      children: "8. Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prototyp je demonštrateľný a použiteľný v lab prostredí."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tím dodal:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "funkčný USB-to-TTL most s automatickou detekciou a bridge módom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentáciu riešenia a demonštračný prototyp."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-porovnanie-s-project-summary",
      children: "🧭 Porovnanie s Project Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plánované:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inteligentný USB-TTL nástroj s autodetekciou a použiteľným UI."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reálne dodané:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "funkčné MVP prototyp so základným menu a detekciou,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rozšírenia (displej, logovanie) sú pripravené pre ďalšiu iteráciu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➡️ Projekt je v stave MVP, pripravený na rozširovanie."
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