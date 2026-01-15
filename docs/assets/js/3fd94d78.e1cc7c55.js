"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[95364],{

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

/***/ 92838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_05_pitch_presentation_md_3fd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-05-pitch-presentation-md-3fd.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_05_pitch_presentation_md_3fd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/pitch_presentation","title":"🎤 Pitch Presentation","description":"1. Problém","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/05_pitch_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/pitch_presentation","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/pitch_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"🎤 Pitch Presentation"},"sidebar":"tutorialSidebar","previous":{"title":"📦 Project Outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-outcomes"},"next":{"title":"📦 PFinal Presentation","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/final_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/05_pitch_presentation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '🎤 Pitch Presentation'
};
const contentTitle = 'Pitch Presentation — LED Piano Trainer';

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
  "value": "Pre koho?",
  "id": "pre-koho",
  "level": 3
}, {
  "value": "Aká hodnota?",
  "id": "aká-hodnota",
  "level": 3
}, {
  "value": "4. Biznis model (hypoteticky)",
  "id": "4-biznis-model-hypoteticky",
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
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pitch-presentation--led-piano-trainer",
        children: "Pitch Presentation — LED Piano Trainer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problém",
      children: "1. Problém"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Učenie hry na klavíri je pre začiatočníkov náročné:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čítanie nôt je komplikované,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "motivácia detí rýchlo klesá,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "klasické metódy učenia sú málo vizuálne,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rodičia a učitelia hľadajú jednoduchšie spôsoby, ako deti zaujať."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " veľa detí prestane hrať ešte skôr, ako sa naučia základné pesničky."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-riešenie",
      children: "2. Riešenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LED Piano Trainer"
      }), " – 3D tlačená svetelná nadstavba pre klavír, ktorá:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rozsvieti presne ten kláves, ktorý má dieťa stlačiť,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["mení učenie na ", (0,jsx_runtime.jsx)(_components.em, {
          children: "rytmickú hru"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "funguje s lacnými MIDI klávesnicami,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "využíva Raspberry Pi Pico a MicroPython,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "umožňuje prehrať akúkoľvek skladbu (napr. z YouTube transkripcie)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Namiesto čítania nôt → dieťa nasleduje svetlá."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hodnota",
      children: "3. Hodnota"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-koho",
      children: "Pre koho?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deti a úplní začiatočníci,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rodičia hľadajúci dostupnú edukačnú pomôcku,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "učitelia hudby,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hobby hráči milujúci vizuálne učenie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "aká-hodnota",
      children: "Aká hodnota?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchlejšie učenie → okamžitá vizuálna spätná väzba,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vyššia motivácia → gamifikácia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "univerzálne riešenie → LED bar funguje na akomkoľvek 25-key keyboarde,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nízka cena → dostupné pre rodiny aj školy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-biznis-model-hypoteticky",
      children: "4. Biznis model (hypoteticky)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Možné modely monetizácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DIY kit"
        }), " — balík 3D modelov + návod + firmware (nízke náklady)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predaj hotového produktu"
        }), " — 3D tlačený LED bar + kontrolér."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Premium aplikácia"
        }), " — knižnica skladieb, vlastné lekcie, gamifikácia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Partnerstvá s hudobnými školami"
        }), " — multilicencia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Freemium"
        }), " — základ zadarmo, platené doplnky (sound packs, lekcie)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najrealistickejší štart: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DIY kit + open-source komunita"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tím",
      children: "5. Tím"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Samuel Kohút"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systémový dizajnér, hardware developer, firmware developer,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skúsenosti s embedded systémami, 3D tlačou a Python/Pico,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "schopnosť pokryť celý proces od návrhu → implementácie → testovania → prezentácie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prečo ja?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problém osobne poznám (cieľová skupina v rodine)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viem spojiť softvér, hardvér a edukáciu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projekt je už vo funkčnom prototypovom štádiu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-call-to-action",
      children: "6. Call to action"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čo potrebujem:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback"
        }), " na dizajn, použiteľnosť a potenciál produktu,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["prípadne ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mentorstvá"
        }), " v oblasti edukačných pomôcok,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "odporúčania pre ďalšie kroky k reálnemu produktu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nežiadam financie – aktuálne potrebujem ", (0,jsx_runtime.jsx)(_components.em, {
        children: "odborné smerovanie a podporu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/",
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