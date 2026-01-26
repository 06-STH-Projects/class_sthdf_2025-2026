"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[48909],{

/***/ 11077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/architecture-v2-f5d255fad2877daad378be47c5fe6c03.png");

/***/ }),

/***/ 15991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-display-main-c4f6ec396a179b9fef2e8c4187f3a0a7.png");

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

/***/ 33091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-device-front-ec156f82abe72cf2e4851ce9c68ddd63.png");

/***/ }),

/***/ 33401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-image-title-b667a0ddb4c4d34d209872926b3eff23.png");

/***/ }),

/***/ 44655:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-top-level-architecture-1c00603fa07ef6324734c22aac84981b.png");

/***/ }),

/***/ 51902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/lemontree-1849868515515ff4f6a00379a98c4a09.png");

/***/ }),

/***/ 53761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dashboard-full-5a4cb6908bb8b7ff1ed3b18baa54bb21.png");

/***/ }),

/***/ 61334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_045_deliverables_06_final_presentation_md_fe4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-045-deliverables-06-final-presentation-md-fe4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_045_deliverables_06_final_presentation_md_fe4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation","title":"Nodyne: Systém detekcie spánku","description":"2025-PRJ-025-ST_045-Nodyne","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables/06_final_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"🎤 Pitch Presentation - Nodyne","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/pitch_presentation"},"next":{"title":"reflexia","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/reflexia"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables/06_final_presentation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = 'Nodyne: Systém detekcie spánku';

const assets = {

};



const toc = [{
  "value": "Slide 1: Úvod",
  "id": "slide-1-úvod",
  "level": 2
}, {
  "value": "Nodyne: Systém detekcie spánku",
  "id": "nodyne-systém-detekcie-spánku-1",
  "level": 3
}, {
  "value": "Slide 2: Technológia",
  "id": "slide-2-technológia",
  "level": 2
}, {
  "value": "Hardware",
  "id": "hardware",
  "level": 3
}, {
  "value": "Software",
  "id": "software",
  "level": 3
}, {
  "value": "Slide 3: 5 Detekčných Algoritmov",
  "id": "slide-3-5-detekčných-algoritmov",
  "level": 2
}, {
  "value": "1. Strong Nod (Silné kývnutie)",
  "id": "1-strong-nod-silné-kývnutie",
  "level": 3
}, {
  "value": "2. Micro Nods (Mikrokývnutia)",
  "id": "2-micro-nods-mikrokývnutia",
  "level": 3
}, {
  "value": "3. Slow Drift (Pomalé klesanie)",
  "id": "3-slow-drift-pomalé-klesanie",
  "level": 3
}, {
  "value": "4. Freeze (Zamrznutie)",
  "id": "4-freeze-zamrznutie",
  "level": 3
}, {
  "value": "5. Side Tilt (Bočný náklon)",
  "id": "5-side-tilt-bočný-náklon",
  "level": 3
}, {
  "value": "Slide 4: UI/UX Design",
  "id": "slide-4-uiux-design",
  "level": 2
}, {
  "value": "6 Obrazoviek systému",
  "id": "6-obrazoviek-systému",
  "level": 3
}, {
  "value": "Slide 5: Implementation",
  "id": "slide-5-implementation",
  "level": 2
}, {
  "value": "Arduino Firmware",
  "id": "arduino-firmware",
  "level": 3
}, {
  "value": "Web Dashboard",
  "id": "web-dashboard",
  "level": 3
}, {
  "value": "Slide 6: Testing &amp; Optimization",
  "id": "slide-6-testing--optimization",
  "level": 2
}, {
  "value": "Fáza 1: Domáce testovanie",
  "id": "fáza-1-domáce-testovanie",
  "level": 3
}, {
  "value": "Fáza 2: Optimalizácia",
  "id": "fáza-2-optimalizácia",
  "level": 3
}, {
  "value": "Slide 7: Real-World Testing",
  "id": "slide-7-real-world-testing",
  "level": 2
}, {
  "value": "Testovanie v aute (2+ hodiny)",
  "id": "testovanie-v-aute-2-hodiny",
  "level": 3
}, {
  "value": "Výsledky",
  "id": "výsledky",
  "level": 3
}, {
  "value": "Slide 8: Change Management (Lemontree)",
  "id": "slide-8-change-management-lemontree",
  "level": 2
}, {
  "value": "Súčasný stav (v1.0)",
  "id": "súčasný-stav-v10",
  "level": 3
}, {
  "value": "Navrhované zmeny (v2.0)",
  "id": "navrhované-zmeny-v20",
  "level": 3
}, {
  "value": "Slide 9: Key Features &amp; Benefits",
  "id": "slide-9-key-features--benefits",
  "level": 2
}, {
  "value": "Kľúčové vlastnosti",
  "id": "kľúčové-vlastnosti",
  "level": 3
}, {
  "value": "Výhody",
  "id": "výhody",
  "level": 3
}, {
  "value": "Side 10: Ako to vyzerá",
  "id": "side-10-ako-to-vyzerá",
  "level": 2
}, {
  "value": "Zariadenie",
  "id": "zariadenie",
  "level": 3
}, {
  "value": "Webový Dashboard",
  "id": "webový-dashboard",
  "level": 3
}, {
  "value": "Video Demonštrácie",
  "id": "video-demonštrácie",
  "level": 2
}, {
  "value": "Quick Start Guide (Návod)",
  "id": "quick-start-guide-návod",
  "level": 3
}, {
  "value": "Real-World Test",
  "id": "real-world-test",
  "level": 3
}, {
  "value": "Slide 10: Záver",
  "id": "slide-10-záver",
  "level": 2
}, {
  "value": "Zhrnutie",
  "id": "zhrnutie",
  "level": 3
}, {
  "value": "Čo ďalej?",
  "id": "čo-ďalej",
  "level": 3
}, {
  "value": "Ďakujem za pozornosť!",
  "id": "ďakujem-za-pozornosť",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "nodyne-systém-detekcie-spánku",
        children: "Nodyne: Systém detekcie spánku"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-025-ST_045-Nodyne"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Autor:"
      }), " Pavlo Spirin (ST045)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-1-úvod",
      children: "Slide 1: Úvod"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nodyne-systém-detekcie-spánku-1",
      children: "Nodyne: Systém detekcie spánku"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problém:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ospalosť za volantom je jednou z hlavných príčin dopravných nehôd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existujúce riešenia sú drahé (€500+) alebo nepresné"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inteligentné wearable zariadenie na čele vodiča"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5 detekčných algoritmov pre rôzne typy ospalosti"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cenovo dostupné riešenie (€35)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Nodyne zariadenie",
        src: (__webpack_require__(33401)/* ["default"] */ .A) + "",
        width: "1376",
        height: "768"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-2-technológia",
      children: "Slide 2: Technológia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardware",
      children: "Hardware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "M5StickC Plus 2"
        }), " (ESP32, 200mAh batéria, 5-8h výdrž)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MPU6886 IMU senzor"
        }), " (6-axis akcelerometer + gyroskop)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1.14\" TFT displej"
        }), " (135×240px)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elastická čelenka"
        }), " (umiestnenie na čelo)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software",
      children: "Software"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arduino Firmware"
        }), " (C++, 5 detekčných algoritmov)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Dashboard"
        }), " (Next.js 16 + React 19 + Three.js)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time telemetria"
        }), " cez Serial"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Top-Level Architecture",
        src: (__webpack_require__(44655)/* ["default"] */ .A) + "",
        width: "1179",
        height: "726"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-3-5-detekčných-algoritmov",
      children: "Slide 3: 5 Detekčných Algoritmov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-strong-nod-silné-kývnutie",
      children: "1. Strong Nod (Silné kývnutie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detekcia: Hlava klesne >25° na >500ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie: Hlboký spánok, strata vedomia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-micro-nods-mikrokývnutia",
      children: "2. Micro Nods (Mikrokývnutia)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detekcia: 3+ rýchle kývnutia (>15°, >12°/s) za 8s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie: Mikrospánky, skorá fáza ospalosti"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-slow-drift-pomalé-klesanie",
      children: "3. Slow Drift (Pomalé klesanie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detekcia: Hlava pomaly klesá v rozsahu 12-25° >3s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie: Postupná strata pozornosti"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-freeze-zamrznutie",
      children: "4. Freeze (Zamrznutie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detekcia: Žiadny pohyb (<1.5°) po dobu >10s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie: Úplná strata vedomia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-side-tilt-bočný-náklon",
      children: "5. Side Tilt (Bočný náklon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detekcia: Hlava sa nakloní >25° do strany >500ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie: Zaspávanie s hlavou na ramene"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-4-uiux-design",
      children: "Slide 4: UI/UX Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-obrazoviek-systému",
      children: "6 Obrazoviek systému"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Welcome Screen"
        }), " - Branding pri zapnutí"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Calibration Screen"
        }), " - Automatická kalibrácia (3s)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ready Screen"
        }), " - Potvrdenie pripravenosti"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitoring Screen"
        }), " - Real-time metriky (Fwd, Side, Nods, Move)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alert Screen"
        }), " - Červená obrazovka + zvuk pri alerte"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Statistics Screen"
        }), " - Štatistiky z jazdy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "M5Stick UI",
        src: (__webpack_require__(88785)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-5-implementation",
      children: "Slide 5: Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "arduino-firmware",
      children: "Arduino Firmware"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kalibračný systém:"
        }), " 50 vzoriek baseline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "EMA filter:"
        }), " Redukcia šumu z vibrácií"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hlavné funkcie:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "calibrate()"
            }), " - automatická kalibrácia"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "startAlert()"
            }), " - multi-modálny alarm (zvuk + LED + displej)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "updateDisplay()"
            }), " - real-time UI update"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serial komunikácia:"
        }), " JSON telemetria"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web-dashboard",
      children: "Web Dashboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next.js 16 + React 19 + TypeScript"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3D vizualizácia hlavy"
        }), " (Three.js + react-three/fiber)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Serial API"
        }), " - pripojenie k zariadeniu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Komponenty:"
        }), " HeadVisualizer, TelemetryPanel, AlertPanel, HistoryTable\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Dashboard UI",
          src: (__webpack_require__(53761)/* ["default"] */ .A) + "",
          width: "1862",
          height: "965"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Firmware: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/paulintheclub/nodyne-firmware",
          children: "github.com/paulintheclub/nodyne-firmware"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dashboard: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/paulintheclub/nodyne-web",
          children: "github.com/paulintheclub/nodyne-web"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-6-testing--optimization",
      children: "Slide 6: Testing & Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fáza-1-domáce-testovanie",
      children: "Fáza 1: Domáce testovanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Počiatočné parametre:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong Nod: 35° / 2000ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Micro Nods: 20° / 15°/s / 10s okno"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Freeze: 15 sekúnd"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problémy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Príliš vysoké prahy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Príliš dlhé časové okná"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Falošné negatíva"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fáza-2-optimalizácia",
      children: "Fáza 2: Optimalizácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimalizované parametre:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Strong Nod: 25° / 500ms (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "4x rýchlejšie!"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Micro Nods: 15° / 12°/s / 8s okno"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Freeze: 10 sekúnd (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "33% rýchlejšie"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Systém je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2-6x citlivejší a rýchlejší"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-7-real-world-testing",
      children: "Slide 7: Real-World Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testovanie-v-aute-2-hodiny",
      children: "Testovanie v aute (2+ hodiny)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testové podmienky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mestské cesty (30-50 km/h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prímestské cesty (60-90 km/h)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hrboľaté cesty (vibrácie)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výsledky",
      children: "Výsledky"
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
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/x0nncwOG13A",
        children: "YouTube - Real-World Testing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Testovanie v aute",
        src: (__webpack_require__(97194)/* ["default"] */ .A) + "",
        width: "5245",
        height: "3823"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-8-change-management-lemontree",
      children: "Slide 8: Change Management (Lemontree)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "súčasný-stav-v10",
      children: "Súčasný stav (v1.0)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zistené obmedzenia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nízka hlasitosť alarmu (8-bit DAC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chýbajúce haptické upozornenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodič môže ignorovať zvukový alarm"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Lemontree Conflict",
        src: (__webpack_require__(51902)/* ["default"] */ .A) + "",
        width: "1916",
        height: "993"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navrhované-zmeny-v20",
      children: "Navrhované zmeny (v2.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CR-001:"
      }), " M5StickCPLUS Speaker 2 Hat"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3.2W reproduktor (výrazne hlasnejší)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastaviteľná hlasitosť"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CR-002:"
      }), " M5StickC Vibration HAT"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Haptická spätná väzba (vibrácie na čele)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nemožné ignorovať"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Náklady:"
      }), " +€16 | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čas:"
      }), " 1-2 týždne"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Updated Architecture",
        src: (__webpack_require__(11077)/* ["default"] */ .A) + "",
        width: "1626",
        height: "804"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-9-key-features--benefits",
      children: "Slide 9: Key Features & Benefits"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kľúčové-vlastnosti",
      children: "Kľúčové vlastnosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5 detekčných algoritmov"
        }), " - komplexná detekcia ospalosti"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time monitoring"
        }), " - okamžitá reakcia na nebezpečné stavy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-modálny alarm"
        }), " - zvuk + LED + displej + dashboard"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Dashboard"
        }), " - 3D vizualizácia, telemetria, história"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cenovo dostupné"
        }), " - €35(vs. €500+ komerčné riešenia)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open-source"
        }), " - GitHub firmware + dashboard"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výhody",
      children: "Výhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bezpečnosť:"
        }), " Zníženie rizika nehôd o >50%"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jednoduché použitie:"
        }), " 3-sekundová kalibrácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dlhá výdrž:"
        }), " 5-8 hodín nepretržitého používania"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Presnosť:"
        }), " 100% úspešnosť detekcie, <5% falošné pozitíva"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "side-10-ako-to-vyzerá",
      children: "Side 10: Ako to vyzerá"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zariadenie",
      children: "Zariadenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Nodyne zariadenie",
        src: (__webpack_require__(33091)/* ["default"] */ .A) + "",
        width: "800",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "M5StickC Plus 2 na elastickej čelenke"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Zariadenie na hlave",
        src: (__webpack_require__(78297)/* ["default"] */ .A) + "",
        width: "864",
        height: "957"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Nosenie zariadenia počas jazdy"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Displej zariadenia",
        src: (__webpack_require__(15991)/* ["default"] */ .A) + "",
        width: "800",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Displej zobrazujúci telemetriu"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "webový-dashboard",
      children: "Webový Dashboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Dashboard",
        src: (__webpack_require__(53761)/* ["default"] */ .A) + "",
        width: "1862",
        height: "965"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Kompletný dashboard s 3D vizualizáciou"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "3D Model hlavy",
        src: (__webpack_require__(84728)/* ["default"] */ .A) + "",
        width: "1834",
        height: "848"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Real-time 3D vizualizácia orientácie hlavy"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Metriky",
        src: (__webpack_require__(69007)/* ["default"] */ .A) + "",
        width: "1221",
        height: "851"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Live metriky: roll, pitch, pohyb, mikrokývnutia"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "video-demonštrácie",
      children: "Video Demonštrácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-start-guide-návod",
      children: "Quick Start Guide (Návod)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/abc9rMlaIgM",
        children: "Nodyne - Quick Start Guide"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ako zapnúť zariadenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibrácia (3 sekundy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ako používať"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-test",
      children: "Real-World Test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Video:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/x0nncwOG13A",
        children: "Nodyne - Testovanie v Meste a na Diaľnici"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie v reálnych podmienkach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetky 5 detekčných režimov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dashboard v akcii"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "slide-10-záver",
      children: "Slide 10: Záver"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zhrnutie",
      children: "Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodyne"
      }), " je inteligentný systém na detekciu ospalosti vodiča s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 algoritmami"
      }), ", ktorý dosahuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "100% úspešnosť detekcie"
      }), " pri ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "<5% falošných pozitívach"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-ďalej",
      children: "Čo ďalej?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementácia v2.0"
        }), " (Speaker + Vibration HAT)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adaptívne prahy"
        }), " - učenie z jazdného štýlu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bluetooth podpora"
        }), " - bezdrôtové pripojenie"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ďakujem-za-pozornosť",
      children: "Ďakujem za pozornosť!"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Otázky?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/",
          children: "↩️ Späť"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
          children: "📊 Projekt PRJ025"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/project-summary",
          children: "📝 Project Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/project-outcomes",
          children: "📦 Project Outcomes"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/pitch_presentation",
          children: "🎤 Pitch Presentation"
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



/***/ }),

/***/ 69007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dashboard-metrics-f9394e23395e8bc55a9fb00399cbf3a9.png");

/***/ }),

/***/ 78297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-on-head-838e2616c26160ed0e60850b87317c14.png");

/***/ }),

/***/ 84728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dashboard-3d-head-f807ac79675cef5df5fd837ccc58c392.png");

/***/ }),

/***/ 88785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ui-screen-monitoring-01068e0bba91168bd8e5d0aaed83c90f.png");

/***/ }),

/***/ 97194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/testing-in-car-19f4636a2e83620d1f3c4ab0fbcbeb31.jpg");

/***/ })

}]);