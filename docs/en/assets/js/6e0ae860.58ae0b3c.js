"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[84356],{

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

/***/ 31231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_029_deliverables_05_pitch_presentation_md_6e0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-029-deliverables-05-pitch-presentation-md-6e0.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_029_deliverables_05_pitch_presentation_md_6e0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/deliverables/pitch_presentation","title":"🎤 Pitch Presentation","description":"1. Problém","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST029/deliverables/05_pitch_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST029/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/deliverables/pitch_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/deliverables/pitch_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📦 Project Outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/deliverables/project-outcomes"},"next":{"title":"📦 PFinal Presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/deliverables/final_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST029/deliverables/05_pitch_presentation.md


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
  "value": "4. Biznis model (hypotéza)",
  "id": "4-biznis-model-hypotéza",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-pitch-presentation",
        children: "🎤 Pitch Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problém",
      children: "1. Problém"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Boxerské a tréningové rukavice po cvičení ostávajú vlhké a schnú veľmi pomaly.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "To vedie k:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nepríjemnému zápachu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "množeniu baktérií,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchlejšiemu opotrebovaniu rukavíc,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "potrebe ich častej výmeny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Športovci nemajú jednoduchý, lacný a prenosný spôsob, ako rukavice efektívne vysušiť."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-riešenie",
      children: "2. Riešenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vyvinuli sme ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kompaktný 3D-tlačený sušič rukavíc"
      }), " napájaný cez ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "USB ventilátor"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ponúkame:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ľahký a lacný prototyp vyrobený 3D tlačou,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "univerzálne napájanie cez USB (PC, powerbanka, nabíjačka),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchlejšie sušenie (30–90 minút),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchú a bezpečnú obsluhu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hodnota",
      children: "3. Hodnota"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z nášho riešenia profitujú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Športovci"
        }), " (box, MMA, kickbox) – rukavice bez zápachu, dlhšia životnosť,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gyms a tréningové centrá"
        }), " – menej reklamácií a viac hygieny,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rekreační športovci"
        }), " – žiadna starosť so schnutím doma."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hodnoty:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Znižujeme výdavky na nové rukavice,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zlepšujeme hygienu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zjednodušujeme starostlivosť o športové vybavenie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-biznis-model-hypotéza",
      children: "4. Biznis model (hypotéza)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Možnosti monetizácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predaj hotového produktu"
        }), " (nízka výrobná cena, vysoká marža),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predaj 3D modelu (STL)"
        }), " pre domácu výrobu,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom verzie"
        }), " pre športové kluby s logom,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Upgrade príslušenstvo"
        }), " (výkonnejší ventilátor, dvojitá verzia atď.)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cieľová cena produktu: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "10–15 €"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Výrobná cena prototypu: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pod 3 €"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tím",
      children: "5. Tím"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sme tím, ktorý kombinuje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Projektový manažment"
        }), " – koordinácia, plánovanie, komunikácia,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technické riešenie"
        }), " – 3D modelovanie, tlač, elektronika,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dizajn"
        }), " – tvarovanie korpusu, užívateľská jednoduchosť."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prečo my?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vieme rýchlo prototypovať,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozumieme problému z pohľadu používateľa,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokážeme projekt škálovať a ďalej zlepšovať."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-call-to-action",
      children: "6. Call to action"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Potrebujeme:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⭐ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Feedback"
        }), " na dizajn a funkčnosť,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎯 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Čas"
        }), " na testovanie v reálnom prostredí (fitness centrá),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["💡 Prípadne ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "malú investíciu"
        }), " do materiálu na ďalšie verzie prototypu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "️-štruktúra-pitchu",
      children: "🛠️ Štruktúra pitchu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), " – aký problém riešime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Riešenie"
        }), " – čo ponúkame"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trh / Kontext"
        }), " – kto z toho profituje"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tím"
        }), " – prečo sme my tí správni ľudia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výzva"
        }), " – čo potrebujeme od publika"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "️-časovanie",
      children: "⏱️ Časovanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5–7 minút"
        }), " prezentácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2–3 minúty"
        }), " Q&A"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-podklady",
      children: "📊 Podklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3–5 slajdov (minimum textu, vizuálne prvky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 krátka ukážka prototypu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-tipy",
      children: "🧭 Tipy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Každý slide = jedna jasná myšlienka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čím menej textu, tým lepšie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ukážka (demo) je silnejšia ako opis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/",
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