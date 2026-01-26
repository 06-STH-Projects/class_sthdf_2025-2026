"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[91018],{

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

/***/ 33716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/testing-in-car-19f4636a2e83620d1f3c4ab0fbcbeb31.jpg");

/***/ }),

/***/ 60041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_07_testing_verification_index_md_f20_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-025-sdlc-07-testing-verification-index-md-f20.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_07_testing_verification_index_md_f20_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/testing-verification/index","title":"07 testing verification","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/07-testing-verification/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/07-testing-verification","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/testing-verification/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/testing-verification/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.960125+00:00","fm_version_comment":"","guid":"d0412535-be3e-4cad-8246-db5b5517b06b","dao":"class_sthdf_dashboard","title":"07 testing verification","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"code links","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/code-links"},"next":{"title":"test report","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/testing-verification/test-report"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/07-testing-verification/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.960125+00:00',
	fm_version_comment: '',
	guid: 'd0412535-be3e-4cad-8246-db5b5517b06b',
	dao: 'class_sthdf_dashboard',
	title: '07 testing verification',
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
const contentTitle = '07-Testing & Verification';

const assets = {

};



const toc = [{
  "value": "Fáza 1: Domáce testovanie (Statické)",
  "id": "fáza-1-domáce-testovanie-statické",
  "level": 2
}, {
  "value": "Testové prostredie",
  "id": "testové-prostredie",
  "level": 3
}, {
  "value": "Počiatočné parametre (verzia 1.0)",
  "id": "počiatočné-parametre-verzia-10",
  "level": 3
}, {
  "value": "Zistenia z domáceho testovania",
  "id": "zistenia-z-domáceho-testovania",
  "level": 3
}, {
  "value": "Optimalizované parametre (verzia 2.0)",
  "id": "optimalizované-parametre-verzia-20",
  "level": 3
}, {
  "value": "Porovnanie parametrov",
  "id": "porovnanie-parametrov",
  "level": 3
}, {
  "value": "Fáza 2: Real-world testovanie (Dynamické)",
  "id": "fáza-2-real-world-testovanie-dynamické",
  "level": 2
}, {
  "value": "Testové prostredie",
  "id": "testové-prostredie-1",
  "level": 3
}, {
  "value": "Test setup",
  "id": "test-setup",
  "level": 3
}, {
  "value": "Testové scenáre",
  "id": "testové-scenáre",
  "level": 3
}, {
  "value": "1. Normálna jazda (Baseline)",
  "id": "1-normálna-jazda-baseline",
  "level": 4
}, {
  "value": "2. Simulovaný Strong Nod",
  "id": "2-simulovaný-strong-nod",
  "level": 4
}, {
  "value": "3. Simulované Micro Nods",
  "id": "3-simulované-micro-nods",
  "level": 4
}, {
  "value": "4. Simulovaný Slow Drift",
  "id": "4-simulovaný-slow-drift",
  "level": 4
}, {
  "value": "5. Simulovaný Freeze",
  "id": "5-simulovaný-freeze",
  "level": 4
}, {
  "value": "6. Simulovaný Side Tilt",
  "id": "6-simulovaný-side-tilt",
  "level": 4
}, {
  "value": "7. Hrboľaté cesty",
  "id": "7-hrboľaté-cesty",
  "level": 4
}, {
  "value": "Výsledky merania",
  "id": "výsledky-merania",
  "level": 3
}, {
  "value": "Video dokumentácia",
  "id": "video-dokumentácia",
  "level": 3
}, {
  "value": "Závery testovania",
  "id": "závery-testovania",
  "level": 2
}, {
  "value": "Úspešné aspekty",
  "id": "úspešné-aspekty",
  "level": 3
}, {
  "value": "Zistené problémy",
  "id": "zistené-problémy",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "07-testing--verification",
        children: "07-Testing & Verification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fáza-1-domáce-testovanie-statické",
      children: "Fáza 1: Domáce testovanie (Statické)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testové-prostredie",
      children: "Testové prostredie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Miesto:"
        }), " Domáce prostredie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Podmienky:"
        }), " Sedenie na stoličke, simulácia vodičskej polohy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Účel:"
        }), " Kalibrácia detekčných prahov a časových okien"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trvanie:"
        }), " 20 hodin testovania rôznych scenárov a oprava parametrov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "počiatočné-parametre-verzia-10",
      children: "Počiatočné parametre (verzia 1.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prvé nastavenie bolo zámerně ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "konzervativnejšie"
      }), " (vyššie prahy, dlhšie časové okná) pre bezpečné testovanie:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// 1. Strong Nod\nconst float SLEEP_ANGLE_THRESHOLD = 35.0°;   // Vyšší prah\nconst int SLEEP_TIME_THRESHOLD = 2000ms;      // Dlhšie čakanie\n\n// 2. Micro Nods\nconst float MICRONOD_THRESHOLD = 20.0°;\nconst int MICRONOD_COUNT_ALERT = 3;\nconst int MICRONOD_TIME_WINDOW = 10000ms;     // Dlhšie okno\nconst float MICRONOD_SPEED_THRESHOLD = 15.0°/s;\n\n// 3. Slow Drift\nconst float SLOW_DRIFT_THRESHOLD = 15.0°;\nconst int SLOW_DRIFT_TIME = 5000ms;           // Dlhšie čakanie\n\n// 4. Freeze\nconst int NO_MOVEMENT_TIME = 15000ms;         // 15 sekúnd\nconst float MOVEMENT_THRESHOLD = 2.0°;\n\n// 5. Side Tilt\nconst float SIDE_TILT_THRESHOLD = 30.0°;\nconst int SIDE_TILT_TIME = 3000ms;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zistenia-z-domáceho-testovania",
      children: "Zistenia z domáceho testovania"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problémy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prahy boli ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "príliš vysoké"
        }), " - Strong Nod vyžadoval extrémny náklon 35°"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Časové okná boli ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "príliš dlhé"
        }), " - 2 sekundy na Strong Nod je nebezpečne dlho"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Freeze algoritmus reagoval ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "príliš pomaly"
        }), " (15 sekúnd)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Falošné negatíva"
        }), " - Niektoré nebezpečné stavy neboli zachytené"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Úspešné validácie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibračný systém fungoval správne (50 vzoriek, baseline výpočet)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Display UI bol čitateľný a informatívny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serial komunikácia fungovala spoľahlivo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kruhový buffer pre mikrokývnutia fungoval správne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimalizované-parametre-verzia-20",
      children: "Optimalizované parametre (verzia 2.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na základe testovania boli parametre ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sprísené"
      }), " pre reálne použitie:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// 1. Strong Nod\nconst float SLEEP_ANGLE_THRESHOLD = 25.0°;    // ↓ 10° (citlivejšie)\nconst int SLEEP_TIME_THRESHOLD = 500ms;       // ↓ 1500ms (4x rýchlejšie!)\n\n// 2. Micro Nods\nconst float MICRONOD_THRESHOLD = 15.0°;       // ↓ 5°\nconst int MICRONOD_COUNT_ALERT = 3;           // Bez zmeny\nconst int MICRONOD_TIME_WINDOW = 8000ms;      // ↓ 2000ms\nconst float MICRONOD_SPEED_THRESHOLD = 12.0°/s; // ↓ 3°/s\n\n// 3. Slow Drift\nconst float SLOW_DRIFT_THRESHOLD = 12.0°;     // ↓ 3°\nconst int SLOW_DRIFT_TIME = 3000ms;           // ↓ 2000ms\n\n// 4. Freeze\nconst int NO_MOVEMENT_TIME = 10000ms;         // ↓ 5000ms (33% rýchlejšie)\nconst float MOVEMENT_THRESHOLD = 1.5°;        // ↓ 0.5°\n\n// 5. Side Tilt\nconst float SIDE_TILT_THRESHOLD = 25.0°;      // ↓ 5°\nconst int SIDE_TILT_TIME = 500ms;             // ↓ 2500ms (6x rýchlejšie!)\n\n// Wake-up\nconst int WAKE_TIME_THRESHOLD = 1000ms;       // Pridané\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "porovnanie-parametrov",
      children: "Porovnanie parametrov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algoritmus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V1.0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "V2.0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zmena"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Nod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uhol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-29%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strong Nod"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-75%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micro Nods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uhol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-25%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Micro Nods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rýchlosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15°/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12°/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-20%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uhol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-20%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slow Drift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-40%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-33%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prah"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-25%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side Tilt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uhol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-17%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Side Tilt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3000ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-83%"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Systém je teraz ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2-6x citlivejší a rýchlejší"
      }), " v detekcii nebezpečných stavov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fáza-2-real-world-testovanie-dynamické",
      children: "Fáza 2: Real-world testovanie (Dynamické)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testové-prostredie-1",
      children: "Testové prostredie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Miesto:"
        }), " Osobné vozidlo na reálnych cestách"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Podmienky:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mestské cesty (30-50 km/h)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prímestské cesty (60-90 km/h)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rôzne povrchy (asfalt, hrboľaté cesty)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trvanie:"
        }), " 10 hodin"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zariadenie:"
        }), " M5StickC Plus 2 pripevnený elastickou čelenkou na čelo"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-setup",
      children: "Test setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Testovanie v aute",
        src: (__webpack_require__(33716)/* ["default"] */ .A) + "",
        width: "5245",
        height: "3823"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Nodyne počas testovania v reálnych podmienkach"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testové-scenáre",
      children: "Testové scenáre"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-normálna-jazda-baseline",
      children: "1. Normálna jazda (Baseline)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Bdelá jazda s normálnymi pohybmi hlavy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Žiadne falošné pozitíva"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metriky sa aktualizovali plynulo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batéria vydržala celé testovanie (5-8h výdrž potvrdená)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-simulovaný-strong-nod",
      children: "2. Simulovaný Strong Nod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Zámerné prudké naklonenie hlavy dopredu >25° na 1 sekundu\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alarm sa aktivoval po ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "~600ms"
        }), " (limit 500ms + detekčná latencia)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Červená obrazovka + 1000/1500Hz tón"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB LED sa rozsvetila"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON alert odoslaný do dashboardu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-simulované-micro-nods",
      children: "3. Simulované Micro Nods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Séria 3 rýchlych kývnutí (>15°, >12°/s) za 8 sekúnd\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po 3. kývnutí alarm okamžite"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kruhový buffer správne zaznamenal všetky 3 kývnutia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Časové okno 8s fungovalo správne (staršie kývnutia sa nezapočítali)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-simulovaný-slow-drift",
      children: "4. Simulovaný Slow Drift"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Pomaly kĺzajúca hlava v rozsahu 12-25° na 4 sekundy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alarm po ~3.2 sekundách"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nereagoval na rýchle prechody cez toto pásmo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "5-simulovaný-freeze",
      children: "5. Simulovaný Freeze"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Úplné zamrznutie hlavy na 12 sekúnd\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alarm po 10 sekundách"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Malé prirodzené mikropohyby (<1.5°) neresetnuli časovač"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "6-simulovaný-side-tilt",
      children: "6. Simulovaný Side Tilt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Bočné naklonenie hlavy >25° na rameno\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alarm po ~600ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rýchla reakcia zabránila dlhšiemu spánku"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "7-hrboľaté-cesty",
      children: "7. Hrboľaté cesty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Jazda po hrboľatej ceste s veľkými vibráciami\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EMA filter efektívne vyhladzoval šum"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 falošný poplach (Freeze) počas extrémnych vibrácií (~5% miera)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vozač manuálne vypol alarm tlačidlom B"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výsledky-merania",
      children: "Výsledky merania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cieľ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dosiahnuté"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Úspešnosť detekcie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">95%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "100%"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prekročené"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Falošné pozitíva"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "<5%"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prekročené"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reakcný čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0.5-3s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splnené"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Výdrž batérie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: ">5h"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5-8h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splnené"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stabilita systému"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bez pádov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Žiadne pády"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Splnené"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "video-dokumentácia",
      children: "Video dokumentácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world test:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://youtu.be/x0nncwOG13A",
          children: "YouTube - Nodyne Real-World Testing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Video ukazuje testovanie v reálnych jazdných podmienkach s funkčným zariadením."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "závery-testovania",
      children: "Závery testovania"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "úspešné-aspekty",
      children: "Úspešné aspekty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5 algoritmov funguje paralelne"
        }), " - Žiadne konflikty, každý deteguje špecifický typ ospalosti"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kalibračný systém"
        }), " - 50 vzoriek poskytuje spoľahlivý baseline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EMA filter"
        }), " - Efektívne redukuje šum z vibrácií"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serial komunikácia"
        }), " - Stabilná, bez straty paketov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimalizované prahy"
        }), " - Verzia 2.0 je 2-6x citlivejšia než v1.0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Battery life"
        }), " - 5-8 hodín pokrýva väčšinu jázd"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zistené-problémy",
      children: "Zistené problémy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Falošné pozitíva na hrboľatých cestách"
        }), " - Freeze algoritmus občas reaguje na extrémne vibrácie", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Riešenie:"
            }), " EMA filter pomohol znížiť z ~10% na <5%"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pohodlie čelenky"
        }), " - Elastická čelenka môže byť nepohodlná na dlhých jazdách", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Riešenie:"
            }), " Použitie mäkšieho materiálu v budúcich verziách"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/",
        children: "⬅️ Implementation"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
        children: "⬅️ Projekt"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/operation/",
        children: "➡️ Operation"
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