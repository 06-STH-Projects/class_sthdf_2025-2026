"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[89059],{

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

/***/ 34513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_034_deliverables_03_project_summary_md_500_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-034-deliverables-03-project-summary-md-500.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_034_deliverables_03_project_summary_md_500_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/project-summary","title":"📝 Project Summary","description":"🔖 Identifikácia","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST034/deliverables/03_project-summary.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST034/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/project-summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📝 Project Summary"},"sidebar":"tutorialSidebar","previous":{"title":"📚 Knowledge Contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/knowledge-contribution"},"next":{"title":"📦 Project Outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST034/deliverables/03_project-summary.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '📝 Project Summary'
};
const contentTitle = '📝 Project Summary';

const assets = {

};



const toc = [{
  "value": "🔖 Identifikácia",
  "id": "-identifikácia",
  "level": 2
}, {
  "value": "1️⃣ Názov projektu",
  "id": "1️⃣-názov-projektu",
  "level": 2
}, {
  "value": "2️⃣ Členovia tímu",
  "id": "2️⃣-členovia-tímu",
  "level": 2
}, {
  "value": "3️⃣ Motivácia tímu",
  "id": "3️⃣-motivácia-tímu",
  "level": 2
}, {
  "value": "4️⃣ Cieľ a pridaná hodnota projektu",
  "id": "4️⃣-cieľ-a-pridaná-hodnota-projektu",
  "level": 2
}, {
  "value": "5️⃣ Popis riešenia",
  "id": "5️⃣-popis-riešenia",
  "level": 2
}, {
  "value": "6️⃣ Projektový plán",
  "id": "6️⃣-projektový-plán",
  "level": 2
}, {
  "value": "📅 Milníky a výstupy",
  "id": "-milníky-a-výstupy",
  "level": 3
}, {
  "value": "7️⃣ Zákazník a hodnoty",
  "id": "7️⃣-zákazník-a-hodnoty",
  "level": 2
}, {
  "value": "8️⃣ Očakávané výstupy",
  "id": "8️⃣-očakávané-výstupy",
  "level": 2
}, {
  "value": "📚 Kontext",
  "id": "-kontext",
  "level": 2
}, {
  "value": "🧭 Riziká a závislosti",
  "id": "-riziká-a-závislosti",
  "level": 2
}, {
  "value": "9️⃣ Reflexia a ďalšie kroky",
  "id": "9️⃣-reflexia-a-ďalšie-kroky",
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
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
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
        id: "-project-summary",
        children: "📝 Project Summary"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-identifikácia",
      children: "🔖 Identifikácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-názov-projektu",
      children: "1️⃣ Názov projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Názov projektu:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PRJ_028_FightWrap Winder_<ST_037>_<ST_034>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stručný popis:"
        }), " FightWrap Winder je kompaktné elektrické zariadenie určené na rýchle a jednoduché navíjanie tréningových bandáží. Cieľom projektu je vytvoriť prototyp, ktorý ušetrí čas a uľahčí prácu športovcom a trénerom po tréningu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-členovia-tímu",
      children: "2️⃣ Členovia tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "ST ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meno"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rola v tíme"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kompetencie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ST037"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Oliver Ondruš"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Lead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "koordinácia tímu, 3D modelovanie, návrh mechaniky"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ST034"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Patrik Minarovič"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dokumentácia, technické riešenie, elektronika"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-motivácia-tímu",
      children: "3️⃣ Motivácia tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Navíjanie bandáží po tréningu je únavný, nudný a časovo náročný proces, ktorý zbytočne zdržiava športovcov aj trénerov. V praxi ho každý odkladá alebo robí narýchlo, čo vedie k neporiadku a nepríjemnej povinnosti po tréningu.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vybrali sme si túto tému, pretože ide o reálny problém, s ktorým sa stretávame aj my sami. Tento projekt dokáže ušetriť čas, zjednodušiť rutinú údržbu výstroja a spríjemniť život ľuďom, ktorí trénujú pravidelne."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-cieľ-a-pridaná-hodnota-projektu",
      children: "4️⃣ Cieľ a pridaná hodnota projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cieľ projektu:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vytvoriť funkčný prototyp motorického navíjaka na bandáže, ktorý zabezpečí rýchle, pohodlné a bezproblémové navíjanie bez potreby manuálnej práce."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ako spoznáme úspech projektu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prototyp dokáže navinúť bandáž"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "používanie je jednoduché"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zariadenie je dostatočne silné na navinutie bežnej športovej bandáže"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-popis-riešenia",
      children: "5️⃣ Popis riešenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zariadenie bude pozostávať z ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "malého elektrického motora"
      }), ", ktorý roztočí osku a navinie bandáž bez manuálneho sťahovania alebo točenia rukou.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Použijeme základné elektronické komponenty (DC motor, vypínač, napájanie) a 3D tlačené súčiastky. Riešenie bude modulárne a pripravené na budúce rozšírenia, napríklad variabilná rýchlosť alebo senzor zastavenia."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zameriavame sa hlavne na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatizáciu navíjania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zníženie času, ktorý strávia športovci po tréningu prácou,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduché a spoľahlivé používanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-projektový-plán",
      children: "6️⃣ Projektový plán"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Odhadovaný čas na prácu: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "x hodín / týždeň"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Predpokladaný stav v čase prezentácie: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "MVP / prototyp / dokumentácia / funkčný produkt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hlavné míľniky:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Príprava"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Implementácia"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Testovanie"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "Prezentácia"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-milníky-a-výstupy",
      children: "📅 Milníky a výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do januára dodáme:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          className: "contains-task-list",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              checked: true,
              disabled: true
            }), " ", "prototyp"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "prezentáciu"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            className: "task-list-item",
            children: [(0,jsx_runtime.jsx)(_components.input, {
              type: "checkbox",
              disabled: true
            }), " ", "dokumentáciu"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-zákazník-a-hodnoty",
      children: "7️⃣ Zákazník a hodnoty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kto by mohol byť používateľom projektu?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo mu to prinesie?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8️⃣-očakávané-výstupy",
      children: "8️⃣ Očakávané výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokumentácia: (napr. README, KNIFE článok, demo stránka...)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Artefakty: (napr. prototyp, appka, vizualizácia...)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kontext",
      children: "📚 Kontext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE príspevky, literatúra, inšpirácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-riziká-a-závislosti",
      children: "🧭 Riziká a závislosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riziká projektu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Na čom závisí"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9️⃣-reflexia-a-ďalšie-kroky",
      children: "9️⃣ Reflexia a ďalšie kroky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Čo očakávate, že sa naučíte?", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Ako by sa projekt mohol rozvíjať ďalej?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/",
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