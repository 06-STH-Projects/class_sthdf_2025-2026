"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[25041],{

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

/***/ 54608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_06_implementation_index_md_ee8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-025-sdlc-06-implementation-index-md-ee8.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_06_implementation_index_md_ee8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/index","title":"06 implementation","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/06-implementation/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/06-implementation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.962893+00:00","fm_version_comment":"","guid":"8699500f-a0f4-412d-ab1d-06be16b6676c","dao":"class_sthdf_dashboard","title":"06 implementation","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"prototype","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/prototype"},"next":{"title":"code links","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/code-links"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/06-implementation/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.962893+00:00',
	fm_version_comment: '',
	guid: '8699500f-a0f4-412d-ab1d-06be16b6676c',
	dao: 'class_sthdf_dashboard',
	title: '06 implementation',
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
const contentTitle = '06-Implementation';

const assets = {

};



const toc = [{
  "value": "GitHub Repozitáre",
  "id": "github-repozitáre",
  "level": 2
}, {
  "value": "Prehľad",
  "id": "prehľad",
  "level": 2
}, {
  "value": "1. Arduino Firmware",
  "id": "1-arduino-firmware",
  "level": 2
}, {
  "value": "Technológie",
  "id": "technológie",
  "level": 3
}, {
  "value": "Štruktúra kódu",
  "id": "štruktúra-kódu",
  "level": 3
}, {
  "value": "Kľúčové funkcie",
  "id": "kľúčové-funkcie",
  "level": 3
}, {
  "value": "<code>setup()</code>",
  "id": "setup",
  "level": 4
}, {
  "value": "<code>loop()</code>",
  "id": "loop",
  "level": 4
}, {
  "value": "<code>calibrate()</code>",
  "id": "calibrate",
  "level": 4
}, {
  "value": "Detekčné algoritmy (zjednodušená logika)",
  "id": "detekčné-algoritmy-zjednodušená-logika",
  "level": 4
}, {
  "value": "<code>startAlert(reason, text)</code>",
  "id": "startalertreason-text",
  "level": 4
}, {
  "value": "<code>stopAlert()</code>",
  "id": "stopalert",
  "level": 4
}, {
  "value": "<code>playAlertSound()</code>",
  "id": "playalertsound",
  "level": 4
}, {
  "value": "<code>updateDisplay()</code>",
  "id": "updatedisplay",
  "level": 4
}, {
  "value": "Serial komunikácia",
  "id": "serial-komunikácia",
  "level": 3
}, {
  "value": "Optimalizácie",
  "id": "optimalizácie",
  "level": 3
}, {
  "value": "2. Web Dashboard",
  "id": "2-web-dashboard",
  "level": 2
}, {
  "value": "Technológie",
  "id": "technológie-1",
  "level": 3
}, {
  "value": "Štruktúra aplikácie",
  "id": "štruktúra-aplikácie",
  "level": 3
}, {
  "value": "1. Landing Page (Domovská stránka)",
  "id": "1-landing-page-domovská-stránka",
  "level": 4
}, {
  "value": "2. Dashboard (<code>/dashboard</code>)",
  "id": "2-dashboard-dashboard",
  "level": 4
}, {
  "value": "Web Serial API integrácia",
  "id": "web-serial-api-integrácia",
  "level": 3
}, {
  "value": "State Management (Zustand)",
  "id": "state-management-zustand",
  "level": 3
}, {
  "value": "3D Vizualizácia (Three.js)",
  "id": "3d-vizualizácia-threejs",
  "level": 3
}, {
  "value": "Vývoj",
  "id": "vývoj",
  "level": 3
}, {
  "value": "Features",
  "id": "features",
  "level": 3
}, {
  "value": "Linky na kód",
  "id": "linky-na-kód",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "06-implementation",
        children: "06-Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-repozitáre",
      children: "GitHub Repozitáre"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Firmware:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/paulintheclub/nodyne-firmware",
          children: "Firmware implementation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Dashboard:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/paulintheclub/nodyne-web",
          children: "Web Dashboard implementation"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prehľad",
      children: "Prehľad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém Nodyne sa skladá z dvoch hlavných komponentov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arduino Firmware"
        }), " - Beží na M5StickC Plus 2 zariadení"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Dashboard"
        }), " - Next.js aplikácia pre vizualizáciu a monitoring"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-arduino-firmware",
      children: "1. Arduino Firmware"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technológie",
      children: "Technológie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platforma:"
        }), " M5StickC Plus 2 (ESP32-PICO-V3-02)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Framework:"
        }), " Arduino (C++)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IDE:"
        }), " Arduino IDE / PlatformIO"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knižnice:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "M5StickCPlus2.h"
            }), " - Hardvérová abstrakcia"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Štandardné Arduino knižnice"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "štruktúra-kódu",
      children: "Štruktúra kódu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hlavné konštanty (Detekčné prahy):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong Nod: 25° / 500ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Micro Nods: 15° / 12°/s / 3 kývnutia / 8s okno"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow Drift: 12° / 3s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Freeze: 1.5° / 10s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Side Tilt: 25° / 500ms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Globálne premenné:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kalibračné: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baselineRoll"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baselinePitch"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stav: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isAlerting"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alertReason"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Buffer: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "micronods[10]"
        }), " (kruhový buffer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Štatistiky: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxRollDiff"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "avgMovement"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kľúčové-funkcie",
      children: "Kľúčové funkcie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "setup",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "setup()"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inicializácia hardvéru, Serial (115200 baud), IMU, displeja, reproduktora. Welcome screen + automatická kalibrácia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "loop",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "loop()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čítanie IMU (akcelerometer + gyroskop)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Výpočet roll/pitch (", (0,jsx_runtime.jsx)(_components.code, {
          children: "atan2()"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výpočet rozdielov oproti baseline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5 detekčných algoritmov paralelne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kontrola prebudenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Update displeja"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Telemetria cez Serial"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spracovanie príkazov z dashboardu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tlačidlá: A (kalibrácia), B (stop/štatistiky)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "calibrate",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "calibrate()"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modrá obrazovka + inštrukcie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pauza 2s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50 vzoriek (20ms interval)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Priemer → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baselineRoll/Pitch"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vynulovanie počítadiel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zvukové potvrdenie (800→1200→1500 Hz)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detekčné-algoritmy-zjednodušená-logika",
      children: "Detekčné algoritmy (zjednodušená logika)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Strong Nod:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF rollDiff > 25° po dobu > 500ms → Alert"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Micro Nods:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF 3+ rýchle kývnutia (>15°, >12°/s) za 8s → Alert"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Slow Drift:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF rollDiff 12-25° po dobu > 3s → Alert"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Freeze:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF pohyb < 1.5° po dobu > 10s → Alert"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Side Tilt:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF pitchDiff > 25° po dobu > 500ms → Alert"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "startalertreason-text",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "startAlert(reason, text)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zapne červenú LED, zobrazí červenú obrazovku, odošle JSON alert do dashboardu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stopalert",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stopAlert()"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vypne alarm, LED, zvuk, vynuluje timery."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "playalertsound",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "playAlertSound()"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Striedavé tóny 1000Hz/1500Hz každých 300ms."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "updatedisplay",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "updateDisplay()"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vykreslí monitoring obrazovku:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Header: Názov + batéria (CHG indikátor)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stav: Monitoring (zelená) / ALERT (červená)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metriky: Fwd, Side, Nods, Move"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Warning level: Alert / Warning / HIGH RISK"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 progress bary (rollDiff, pitchDiff)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Návod: \"A", ":Cal", " B", ":Stop", "/Stats\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serial-komunikácia",
      children: "Serial komunikácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Telemetria (JSON):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"type\": \"telemetry\",\n  \"rollDiff\": 12.5,\n  \"pitchDiff\": 3.2,\n  \"movement\": 2.1,\n  \"micronods\": 1,\n  \"isAlerting\": false,\n  \"battery\": 85,\n  \"charging\": false\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Príkazy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "CALIBRATE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STOP_ALERT"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RESET_STATS"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PING"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Alert:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"type\": \"alert\",\n  \"reason\": 1,\n  \"reasonText\": \"Strong Nod\"\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimalizácie",
      children: "Optimalizácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "EMA Filter:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "avgMovement = avgMovement × 0.95 + movement × 0.05"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kruhový buffer:"
      }), " Mikrokývnutia v poli ", (0,jsx_runtime.jsx)(_components.code, {
        children: "micronods[10]"
      }), " s časovými značkami."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kompilácia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Board: M5StickC Plus 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upload Speed: 115200"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flash: ~120KB"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-web-dashboard",
      children: "2. Web Dashboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technológie-1",
      children: "Technológie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next.js 16"
        }), " - React framework s App Router"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "React 19"
        }), " - UI knižnica"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TypeScript"
        }), " - Typová bezpečnosť"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three.js"
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "@react-three/fiber"
        }), " - 3D vizualizácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tailwind CSS"
        }), " - Styling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zustand"
        }), " - State management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Serial API"
        }), " - Komunikácia so zariadením"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "štruktúra-aplikácie",
      children: "Štruktúra aplikácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2 hlavné stránky:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-landing-page-domovská-stránka",
      children: "1. Landing Page (Domovská stránka)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prezentácia produktu Nodyne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prehľad 5 detekčných funkcií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vizualizácia dát a výsledkov testov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sekcia recenzií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kontaktný formulár"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "2-dashboard-dashboard",
      children: ["2. Dashboard (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/dashboard"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real-time monitoring interface s hlavnými komponentmi:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SerialConnectButton:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripojenie k zariadeniu cez Web Serial API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatická detekcia M5StickC Plus 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Konfigurácia: 115200 baud"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stav pripojenia (Connected/Disconnected)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HeadVisualizer (3D):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Načítanie GLTF 3D modelu hlavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time rotácia podľa roll/pitch hodnôt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamické osvetlenie pri alarmoch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimalizované pre výkon"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DeviceStatusCard:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Status pripojenia zariadenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batéria (%), indikátor nabíjania (CHG)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Posledná aktualizácia (timestamp)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "AlertPanel:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazenie aktívnych upozornení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typ alarmu (Strong Nod, Micro Nods, atď.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vizuálne zvýraznenie"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tlačidlo \"Stop Alert\" → posiela ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STOP_ALERT"
        }), " príkaz"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TelemetryPanel:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Roll/Pitch aktuálne hodnoty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RollDiff/PitchDiff (rozdiel od baseline)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Movement (celkový pohyb)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Micronods count"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress bary pre vizualizáciu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "HistoryTable:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Časová os udalostí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Typy: Alert, Calibration, System"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Timestamp, dôvod, detaily"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "web-serial-api-integrácia",
      children: "Web Serial API integrácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Komunikácia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvorenie sériového portu v prehliadači"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čítanie JSON správ z Arduino"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parsing typov: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "telemetry"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alert"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stats"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "response"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Odosielanie príkazov: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CALIBRATE"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STOP_ALERT"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GET_STATS"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parsovanie dát:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const data = JSON.parse(line);\nif (data.type === 'telemetry') {\n  store.setRoll(data.roll);\n  store.setPitch(data.pitch);\n  store.setBattery(data.battery);\n}\nif (data.type === 'alert') {\n  store.setAlerting(true, data.reason, data.reasonText);\n  // Zvukové upozornenie v prehliadači\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "state-management-zustand",
      children: "State Management (Zustand)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Store obsahuje:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "serialPort"
        }), " - Referencia na sériový port"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isConnected"
        }), " - Boolean stavu pripojenia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "roll"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pitch"
        }), " - Aktuálne uhly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "rollDiff"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pitchDiff"
        }), " - Rozdiely od baseline"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "movement"
        }), " - Celkový pohyb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "micronods"
        }), " - Počet zaznamenaných kývnutí"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isAlerting"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "alertReason"
        }), " - Stav alarmu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "battery"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "charging"
        }), " - Stav batérie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "history[]"
        }), " - Pole udalostí (timestamp, type, reason)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Akcie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "connectSerial()"
        }), " - Otvorenie sériového portu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "disconnectSerial()"
        }), " - Uzavretie portu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sendCommand(cmd)"
        }), " - Odoslanie príkazu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "addHistoryEvent(event)"
        }), " - Pridanie do histórie"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3d-vizualizácia-threejs",
      children: "3D Vizualizácia (Three.js)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementácia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použitie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@react-three/fiber"
        }), " (React wrapper pre Three.js)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "@react-three/drei"
        }), " - Helpers (OrbitControls, useGLTF)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GLTF model hlavy načítaný z ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/models/head.glb"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rotácia aplikovaná na model: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rotation={[pitch * DEG2RAD, roll * DEG2RAD, 0]}"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ambient light + Point light (červené pri alerte)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fallback loading screen počas načítavania modelu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimalizácie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lazy loading 3D modelu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "60 FPS target s throttling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suspend pri neaktívnej karte"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vývoj",
      children: "Vývoj"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Skripty:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install          # Inštalácia závislostí\nnpm run dev          # Dev server (localhost:3000)\nnpm run build        # Production build\nnpm start            # Production server\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Požiadavky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Node.js >= 18"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prehliadač s Web Serial API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB pripojenie k M5StickC Plus 2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "features",
      children: "Features"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time telemetria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D vizualizácia hlavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web Serial API integrácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "História udalostí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vizuálne upozornenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dark mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TypeScript type safety"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linky-na-kód",
      children: "Linky na kód"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/code-links",
          children: "Arduino Firmware + Web Dashboard"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/",
        children: "⬅️ Design"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
        children: "⬅️ Projekt"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/testing-verification/",
        children: "➡️ Testing"
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