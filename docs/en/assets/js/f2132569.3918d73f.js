"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[51215],{

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

/***/ 95865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_00_project_summary_index_md_f21_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-00-project-summary-index-md-f21.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_00_project_summary_index_md_f21_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/project-summary/ESP32-AQI-2026","title":"Project Summary","description":"🏠 Domov · ⬅️ Nahor","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/00-project-summary/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/00-project-summary","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/project-summary/esp32-air-quality-monitor","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/project-summary/esp32-air-quality-monitor","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"ESP32","permalink":"/en/docs/tags/esp-32"},{"inline":true,"label":"Air Quality","permalink":"/en/docs/tags/air-quality"},{"inline":true,"label":"IoT","permalink":"/en/docs/tags/io-t"},{"inline":true,"label":"Flask","permalink":"/en/docs/tags/flask"},{"inline":true,"label":"SQLite","permalink":"/en/docs/tags/sq-lite"}],"version":"current","frontMatter":{"id":"ESP32-AQI-2026","guid":"93c67fba-2907-4ac9-bc49-f52188094082","dao":"knife","title":"Project Summary","author":"Peter Bartoš","category":"deliverable","type":"project-summary","priority":"high","tags":["ESP32","Air Quality","IoT","Flask","SQLite"],"slug":"esp32-air-quality-monitor","created":"2025-09-21","modified":"2026-01-13","status":"final","rights_holder_content":"Peter Bartoš","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/"},"next":{"title":"01 business","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/business/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/00-project-summary/index.md


const frontMatter = {
	id: 'ESP32-AQI-2026',
	guid: '93c67fba-2907-4ac9-bc49-f52188094082',
	dao: 'knife',
	title: 'Project Summary',
	author: 'Peter Bartoš',
	category: 'deliverable',
	type: 'project-summary',
	priority: 'high',
	tags: [
		'ESP32',
		'Air Quality',
		'IoT',
		'Flask',
		'SQLite'
	],
	slug: 'esp32-air-quality-monitor',
	created: '2025-09-21',
	modified: '2026-01-13',
	status: 'final',
	rights_holder_content: 'Peter Bartoš',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	locale: 'sk'
};
const contentTitle = 'Project Summary';

const assets = {

};



const toc = [{
  "value": "2025-PRJ-023-ST_023-ST_023-Air quality monitor",
  "id": "2025-prj-023-st_023-st_023-air-quality-monitor",
  "level": 2
}, {
  "value": "Team Members",
  "id": "team-members",
  "level": 2
}, {
  "value": "Purpose",
  "id": "purpose",
  "level": 2
}, {
  "value": "Individual Visions",
  "id": "individual-visions",
  "level": 2
}, {
  "value": "Team Vision",
  "id": "team-vision",
  "level": 2
}, {
  "value": "Team Mission",
  "id": "team-mission",
  "level": 2
}, {
  "value": "Strategy",
  "id": "strategy",
  "level": 2
}, {
  "value": "End Customer",
  "id": "end-customer",
  "level": 2
}, {
  "value": "Expected Effort",
  "id": "expected-effort",
  "level": 2
}, {
  "value": "Goals and Expectations",
  "id": "goals-and-expectations",
  "level": 2
}, {
  "value": "Solution Description",
  "id": "solution-description",
  "level": 2
}, {
  "value": "Project Roadmaps",
  "id": "project-roadmaps",
  "level": 2
}, {
  "value": "Reached Results",
  "id": "reached-results",
  "level": 2
}, {
  "value": "Experiences",
  "id": "experiences",
  "level": 2
}, {
  "value": "Positive Experiences",
  "id": "positive-experiences",
  "level": 2
}, {
  "value": "Potential for Improvements",
  "id": "potential-for-improvements",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "project-summary",
        children: "Project Summary"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2025-prj-023-st_023-st_023-air-quality-monitor",
      children: "2025-PRJ-023-ST_023-ST_023-Air quality monitor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ESP32 Air Quality Monitor – IoT riešenie na meranie kvality ovzdušia"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "team-members",
      children: "Team Members"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025_ST_020 Hlib Kokin"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Role: Analýza, 3D modelovanie, materializácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025_ST_003 Peter Bartoš"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Role: Vývoj hardvéru, firmware, dokumentácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2025_ST_011 Šimon Freivad"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Role: Vývoj servera, cicd, cloud manažment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "purpose",
      children: "Purpose"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je vytvoriť cenovo dostupné zariadenie na monitorovanie kvality ovzdušia (teplota, vlhkosť, TVOC, eCO₂, AQI) s lokálnym OLED displejom a vzdialeným prístupom cez webové rozhranie."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "individual-visions",
      children: "Individual Visions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naučiť sa IoT architektúru end-to-end (ESP32 → Flask Server API → SQLite → Web UI)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Získať skúsenosti s integráciou senzorov a optimalizáciou kódu pre obmedzený HW"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "team-vision",
      children: "Team Vision"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Poskytnúť jednoduché, spoľahlivé a estetické riešenie pre sledovanie kvality vzduchu v interiéri."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "team-mission",
      children: "Team Mission"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vyvinúť funkčný prototyp, ktorý bude:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "merať presné hodnoty,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zobrazovať ich lokálne aj online,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "byť ľahko rozšíriteľný."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "strategy",
      children: "Strategy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ESP32"
        }), " ako hlavný mikrokontrolér"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Senzory ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "AHTX0"
        }), " (teplota, vlhkosť) a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ENS160"
        }), " (TVOC, eCO₂, AQI)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Server: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Python Flask API + SQLite"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web UI: responzívne grafy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kryt: drevená krabička s otvormi pre prúdenie vzduchu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "end-customer",
      children: "End Customer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Domácnosti, kancelárie, školy, malé firmy – všetci, ktorí potrebujú sledovať kvalitu vzduchu v uzavretých priestoroch."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expected-effort",
      children: "Expected Effort"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Približne 40 hodín (hardvér, firmware, server, UI, testovanie, dokumentácia)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "goals-and-expectations",
      children: "Goals and Expectations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčný prototyp s meraním a vizualizáciou dát"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilné Wi-Fi pripojenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jednoduchá inštalácia a použitie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "solution-description",
      children: "Solution Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ESP32 číta dáta zo senzorov cez I²C, zobrazuje ich na OLED displeji a odosiela na Python Flask server cez HTTP(JSON). Server ukladá dáta do SQLite a poskytuje webové rozhranie s historickými grafmi."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-roadmaps",
      children: "Project Roadmaps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analýza a návrh"
        }), " – definícia požiadaviek, architektúry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementácia hardvéru"
        }), " – zapojenie ESP32 a senzorov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vývoj firmware"
        }), " – čítanie dát, Wi-Fi, HTTP komunikácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Server a UI"
        }), " – Flask API, databáza, webová vizualizácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testovanie"
        }), " – merania bez krytu a s krytom"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dokončenie dokumentácie"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "reached-results",
      children: "Reached Results"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčný prototyp s meraním teploty, vlhkosti, TVOC, eCO₂, AQI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Webová aplikácia s historickými grafmi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie v reálnych podmienkach (8 dní: 4 dni bez krytu, 4 dni s krytom)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "experiences",
      children: "Experiences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt ukázal dôležitosť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "správneho návrhu krytu (prietok vzduchu),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dôležitosť estetiky krytu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "optimalizácie kódu pre obmedzený HW,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iteratívneho testovania."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "positive-experiences",
      children: "Positive Experiences"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Úspešná integrácia senzorov a ESP32"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilná komunikácia so serverom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responzívne webové rozhranie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "potential-for-improvements",
      children: "Potential for Improvements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sofistikovanejšie Wi-Fi pripojenie (webový setup)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Presné uchytenie komponentov v krabičke (drážky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lepší prietok vzduchu (ventilačné otvory)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibrácia senzorov pre vyššiu presnosť (skreslenie kvôli krytom)"
      }), "\n"]
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