"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[96862],{

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

/***/ 33170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_06_final_presentation_md_c42_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-06-final-presentation-md-c42.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_06_final_presentation_md_c42_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/final_presentation","title":"📦 PFinal Presentation","description":"🔖 Stav projektu","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/06_final_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/final_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/final_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📦 PFinal Presentation"},"sidebar":"tutorialSidebar","previous":{"title":"🎤 Pitch Presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/pitch_presentation"},"next":{"title":"9. Reflexia a spätná väzba","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/reflexia"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/06_final_presentation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '📦 PFinal Presentation'
};
const contentTitle = 'Final Presentation';

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
  "value": "💡 Dodané:",
  "id": "-dodané",
  "level": 3
}, {
  "value": "📸 Ako to vyzerá:",
  "id": "-ako-to-vyzerá",
  "level": 3
}, {
  "value": "🎬 Demo video:",
  "id": "-demo-video",
  "level": 3
}, {
  "value": "▶️ Youtube:",
  "id": "️-youtube",
  "level": 3
}, {
  "value": "💼 LinkedIn:",
  "id": "-linkedin",
  "level": 3
}, {
  "value": "📝 OneNote:",
  "id": "-onenote",
  "level": 3
}, {
  "value": "🧭 Porovnanie s Project Summary",
  "id": "-porovnanie-s-project-summary",
  "level": 2
}, {
  "value": "🎯 Zhrnutie:",
  "id": "-zhrnutie",
  "level": 3
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
        id: "final-presentation",
        children: "Final Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-stav-projektu",
      children: "🔖 Stav projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt LED Piano Trainer dosiahol plne funkčný prototyp:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Hardvér funguje (3D tlačená LED nadstavba, Raspberry box)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ LED sekvencie reagujú na vstup zo systému"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Softvérová aplikácia deteguje MIDI klávesnicu a pripravuje dáta"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Potrebné dokončiť: prepojenie PC → Pico → LED v real-time pre plné prehrávanie skladieb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Demo video je v príprave"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celkovo: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "projekt splnil cieľ prototypu a presne ukazuje, ako by reálny produkt fungoval"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-výstupy-podľa-sdlc--v-modelu",
      children: "🧩 Výstupy podľa SDLC / V-modelu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-business-požiadavky",
      children: "1. Business požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zjednodušiť učenie hry na klavíri pre deti a začiatočníkov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vizualizovať tóny pomocou LED namiesto tradičného čítania nôt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyrobiť lacnú, dostupnú a ľahko replikovateľnú fyzickú pomôcku."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-top-level-architecture",
      children: "2. Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware:"
        }), " MIDI keyboard, 3D LED bar, Raspberry Pico, LED pás."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Software:"
        }), " PC aplikácia + MicroPython firmware."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-solution-architecture",
      children: "3. Solution Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC → transkripcia / MIDI vstup → odoslanie príkazov → Raspberry Pi Pico."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pico → mapovanie nôt → LED indexovanie → osvetlenie správneho boxu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED nadstavba → izolácia svetla pre jeden kláves."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-analysis",
      children: "4. Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED pás má iné rozostupy ako klávesy → bol potrebný ohyb."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čierne klávesy zasahujú do rovnomernosti → nutnosť jednotných boxov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chyba v prvej verzii → chýbajúci jeden box (opravené doplnením modulu)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-design",
      children: "5. Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test rôznych hrúbok priečok pre optimálnu difúziu svetla."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modulárny 3D model pre tlač po častiach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Krabička pre Raspberry na estetiku a správu káblov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-implementation",
      children: "6. Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tlač nadstavby, ohýbanie LED pásu, doplnenie missing boxu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tlač enclosure pre Raspberry."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementácia základného LED prehrávača v MicroPythone."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC aplikácia s detekciou MIDI a prípravou dát."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-verification--testing",
      children: "7. Verification & Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test osvetlenia: jeden LED → jeden box."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test farebnej konzistencie a difúzie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test spojenia PC → keyboard → Pico."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prvé prehranie jednoduchých sekvencií."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-operation",
      children: "8. Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prototyp je schopný fungovať s reálnym keyboardom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie prehráva celé skladby s čakaním na odozvu od používateľa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-dodané",
      children: "💡 Dodané:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ 3D tlačená LED nadstavba pre 2 oktávy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Doplnený box pre posledný kláves"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Krabička na Raspberry + kabeláž"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Funkčné osvetľovanie klávesov podľa sekvencie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ PC aplikácia s GUI, MIDI detekciou a pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Prvé testovacie sekvencie na klavíri"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔️ Dokumentácia + KNIFEs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-ako-to-vyzerá",
      children: "📸 Ako to vyzerá:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED nadstavba"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry krabička"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PC aplikácia Piano Trainer"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-demo-video",
      children: "🎬 Demo video:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=GONJa6kOOnw",
        children: "https://www.youtube.com/watch?v=GONJa6kOOnw"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-youtube",
      children: "▶️ Youtube:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.youtube.com/@PianoLedTrainer1",
        children: "https://www.youtube.com/@PianoLedTrainer1"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-linkedin",
      children: "💼 LinkedIn:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.linkedin.com/in/led-piano-trainer-61495a38b/",
        children: "https://www.linkedin.com/in/led-piano-trainer-61495a38b/"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-onenote",
      children: "📝 OneNote:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Class Notebook - Mám tam opísaný celý vývoj projektu s časovou stopou a s viacerými detailmi. Aj viacero knowledge contributions."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-porovnanie-s-project-summary",
      children: "🧭 Porovnanie s Project Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Plánované"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Realita"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LED nadstavba pre 2 oktávy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️ Dodané, vyladené, funkčné"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Krabička pre Raspberry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️ Vytlačená a esteticky prepracovaná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Softvér pre MIDI → LED sekvencie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️ Funkčný prototyp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Demo video"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️ Pripravené"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Transkripcia YouTube → MIDI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️ Implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Plná integrácia LED prehrávania"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔️ Hotové"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-zhrnutie",
      children: "🎯 Zhrnutie:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt nielen splnil plán, ale ho v niektorých oblastiach prekonal (kvalita 3D modelu, stabilita LED prototypu, čisté GUI)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/",
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