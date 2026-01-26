"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[84320],{

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

/***/ 84457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_037_deliverables_02_knowledge_contribution_md_707_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-037-deliverables-02-knowledge-contribution-md-707.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_037_deliverables_02_knowledge_contribution_md_707_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/knowledge-contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"🙋 About Me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = '📚 Knowledge Contribution';

const assets = {

};



const toc = [{
  "value": "🔖 Názov a stručný popis",
  "id": "-názov-a-stručný-popis",
  "level": 2
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "Hardvérové prvky:",
  "id": "hardvérové-prvky",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "🗂️ Taxonómia KNIFE",
  "id": "️-taxonómia-knife",
  "level": 2
}, {
  "value": "🌍 Referencie",
  "id": "-referencie",
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
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "FightWrap Winder: Automatický navíjak na športové bandáže pre bojové športy"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FightWrap Winder je kompaktné elektronické zariadenie navrhnuté na rýchle a pohodlné navíjanie tréningových bandáží používaných v bojových športoch (box, MMA, kickbox, muay thai). Kombinuje jednoduchú mechaniku, základnú elektroniku a 3D tlačené komponenty, aby výrazne znížil čas a námahu potrebnú po tréningu alebo po skladaní nepodvojnej bandáže z práčky."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FightWrap Winder rieši bežný, no často prehliadaný problém športovcov – ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "únavné a časovo náročné ručné otravné navíjanie bandáží"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V praxi:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bandáže si po tréningu navíjajú všetci veľmi neochotne alebo narýchlo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zle navinuté bandáže sa zamotávajú pri opätovnom použití"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "športovci strácajú čas a motiváciu venovať sa údržbe výstroja."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cieľom projektu je:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatizovať proces navíjania bandáží"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ušetriť čas športovcom aj trénerom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zjednodušiť rutinnú činnosť po tréningu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zvýšiť poriadok a komfort pri starostlivosti o výstroj"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "využiť dieru na trhu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FightWrap Winder prináša praktické riešenie reálneho problému, s ktorým sa stretávajú aktívni športovci takmer denne."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FightWrap Winder funguje na princípe ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "elektrického pohonu osi"
      }), ", na ktorú sa bandáž navinie bez potreby manuálneho točenia a naťahovania či naprávania."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardvérové-prvky",
      children: "Hardvérové prvky:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DC elektromotor s dostatočným krútiacim momentom  (200RPM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "otočná os / držiak bandáže"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vypínač pre jednoduché ovládanie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napájanie klasickými 2x AA batériami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D tlačené telo a mechanické súčiastky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Použitie FightWrap Winder je intuitívne a nevyžaduje žiadne technické znalosti:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bandáž sa povedie cez vrchné 2 otvory k stredovej osy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Používateľ upevní koniec bandáže na otočnú os."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Držaním vypínača sa aktivuje motor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Motor plynule otáča os a bandáž sa rovnomerne navíja."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po úplnom navinutí používateľ pustí tlačidlo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytiahne uchytávaciu os a následne bandáž."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie je vhodné pre individuálnych športovcov, trénerov aj športové kluby."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upevni bandáž na os."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zapni navíjak."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počkaj, kým sa bandáž navinie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vypni zariadenie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytiahni os."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zloženú bandáž môžeš odložiť."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FightWrap Winder vznikol ako reakcia na každodennú skúsenosť členov tímu s bojovými športmi. Po intenzívnom tréningu je navíjanie bandáží poslednou činnosťou, na ktorú má športovec energiu alebo chuť. Tento opakujúci sa problém sa stal impulzom pre vytvorenie jednoduchého, ale efektívneho technického riešenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt spája základné princípy mechaniky, elektroniky a digitálnej výroby. Telo zariadenia je navrhnuté pre 3D tlač, čo umožňuje rýchle prototypovanie, úpravy dizajnu a nízke výrobné náklady. Elektronická časť je úmyselne jednoduchá, aby bolo zariadenie spoľahlivé a ľahko opraviteľné."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FightWrap Winder je koncipovaný ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MVP prototyp"
      }), ", ktorý je možné v budúcnosti rozšíriť o:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reguláciu rýchlosti navíjania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatické zastavenie po navinutí,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dobíjateľný zdroj zo siete,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kompaktnejší alebo cestovný dizajn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt demonštruje, ako môže aj malý technický zásah výrazne zlepšiť každodennú rutinu používateľa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre 3D tlač je vhodný PLA alebo PETG v závislosti od požadovanej pevnosti."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Motor by mal mať dostatočný krútiaci moment, aby zvládol aj dlhšie bandáže."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Konštrukcia by mala umožňovať jednoduché čistenie a výmenu bandáže."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pri testovaní je vhodné použiť rôzne typy a dĺžky bandáží."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "FightWrap Winder prináša praktickú automatizáciu jednoduchej, no otravnej činnosti. Znižuje čas potrebný na údržbu výstroja, zvyšuje komfort športovcov a podporuje poriadok po tréningu. Projekt ukazuje, že aj malé technické riešenia môžu mať veľký dopad na každodenný život používateľa."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " Športová technika, Automatizácia, 3D tlač"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " Projektové riešenie / Funkčný prototyp"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " fight wrap, bandáže, navíjak, bojové športy, DC motor, 3D print, automatizácia"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jednotlivé časti projektu sú spracované v rámci projektovej dokumentácie a prezentácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/presentation/slides",
        children: "⬅️ Projekt"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/",
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