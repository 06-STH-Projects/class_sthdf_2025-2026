"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[17183],{

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

/***/ 80142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_sthdf_2025_st_010_students_deliverables_03_project_summary_md_f51_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-sthdf-2025-st-010-students-deliverables-03-project-summary-md-f51.json
const site_docs_sk_sthdf_2025_st_010_students_deliverables_03_project_summary_md_f51_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/sthdf/ST_010/students/deliverables/project-summary","title":"03 project summary","description":"{{DESCRIPTION}}","source":"@site/docs/sk/sthdf/2025_ST_010/students/deliverables/03_project-summary.md","sourceDirName":"sk/sthdf/2025_ST_010/students/deliverables","slug":"/sk/sthdf/ST_010/students/deliverables/project-summary","permalink":"/en/sk/sthdf/ST_010/students/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T19:46:59.266674+00:00","fm_version_comment":"","guid":"03c4cb7f-3998-4521-bfed-70cd629e2ac5","dao":"sthdf","title":"03 project summary","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 20:46","modified":"2025-11-24 20:46","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"02 knowledge contribution","permalink":"/en/sk/sthdf/ST_010/students/deliverables/knowledge-contribution"},"next":{"title":"04 project outcomes","permalink":"/en/sk/sthdf/ST_010/students/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/sthdf/2025_ST_010/students/deliverables/03_project-summary.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T19:46:59.266674+00:00',
	fm_version_comment: '',
	guid: '03c4cb7f-3998-4521-bfed-70cd629e2ac5',
	dao: 'sthdf',
	title: '03 project summary',
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
	created: '2025-11-24 20:46',
	modified: '2025-11-24 20:46',
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Jasný, výstižný, inšpiratívny – ako by sa mal objaviť na plagáte.)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Názov projektu:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PRJ_XXX_<Názov>_<ST_XXX>_<ST_XXX>"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stručný popis:"
        }), " 2–3 vety"]
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
            children: "ST001"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Lead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "koordinácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ST002"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "implementácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ST003"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI/UX"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-motivácia-tímu",
      children: "3️⃣ Motivácia tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prečo ste si vybrali tento projekt?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aký osobný alebo profesný zmysel má pre vás riešenie tejto témy?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prečo je projekt dôležitý"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aký problém rieši"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-cieľ-a-pridaná-hodnota-projektu",
      children: "4️⃣ Cieľ a pridaná hodnota projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aký je finálny cieľ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ako spoznáme, že projekt je úspešný"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-popis-riešenia",
      children: "5️⃣ Popis riešenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stručne opíšte architektúru, nástroje a technológie, ktoré použijete."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zamerajte sa na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“čo”"
        }), " riešite, nie ešte “ako”."]
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
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[ ]"
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
          href: "/en/sk/sthdf/ST_010/students/",
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