"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[45970],{

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

/***/ 66683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_005_deliverables_03_project_summary_md_45d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-005-deliverables-03-project-summary-md-45d.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_005_deliverables_03_project_summary_md_45d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/deliverables/project-summary","title":"📝 Project Summary","description":"🔖 Identifikácia","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST005/deliverables/03_project-summary.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST005/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/deliverables/project-summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📚 Knowledge Contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/deliverables/knowledge-contribution"},"next":{"title":"📦 Project Outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST005/deliverables/03_project-summary.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
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
  "level": 3
}, {
  "value": "2️⃣ Členovia tímu",
  "id": "2️⃣-členovia-tímu",
  "level": 3
}, {
  "value": "3️⃣ Motivácia tímu",
  "id": "3️⃣-motivácia-tímu",
  "level": 3
}, {
  "value": "Prečo sme si vybrali tento projekt?",
  "id": "prečo-sme-si-vybrali-tento-projekt",
  "level": 4
}, {
  "value": "Aký osobný alebo profesný zmysel má pre nás riešenie tejto témy?",
  "id": "aký-osobný-alebo-profesný-zmysel-má-pre-nás-riešenie-tejto-témy",
  "level": 4
}, {
  "value": "Prečo je projekt dôležitý / aký problém rieši?",
  "id": "prečo-je-projekt-dôležitý--aký-problém-rieši",
  "level": 4
}, {
  "value": "4️⃣ Cieľ a pridaná hodnota projektu",
  "id": "4️⃣-cieľ-a-pridaná-hodnota-projektu",
  "level": 3
}, {
  "value": "Finálny cieľ",
  "id": "finálny-cieľ",
  "level": 4
}, {
  "value": "Ako spoznáme, že projekt je úspešný?",
  "id": "ako-spoznáme-že-projekt-je-úspešný",
  "level": 4
}, {
  "value": "5️⃣ Popis riešenia (high-level)",
  "id": "5️⃣-popis-riešenia-high-level",
  "level": 3
}, {
  "value": "6️⃣ Projektový plán",
  "id": "6️⃣-projektový-plán",
  "level": 3
}, {
  "value": "Hlavné míľniky",
  "id": "hlavné-míľniky",
  "level": 4
}, {
  "value": "📅 Milníky a výstupy",
  "id": "-milníky-a-výstupy",
  "level": 4
}, {
  "value": "7️⃣ Zákazník a hodnoty",
  "id": "7️⃣-zákazník-a-hodnoty",
  "level": 3
}, {
  "value": "Kto by mohol byť používateľom projektu?",
  "id": "kto-by-mohol-byť-používateľom-projektu",
  "level": 4
}, {
  "value": "Čo mu to prinesie?",
  "id": "čo-mu-to-prinesie",
  "level": 4
}, {
  "value": "8️⃣ Očakávané výstupy",
  "id": "8️⃣-očakávané-výstupy",
  "level": 3
}, {
  "value": "Dokumentácia",
  "id": "dokumentácia",
  "level": 4
}, {
  "value": "Artefakty",
  "id": "artefakty",
  "level": 4
}, {
  "value": "📚 Kontext",
  "id": "-kontext",
  "level": 4
}, {
  "value": "🧭 Riziká a závislosti",
  "id": "-riziká-a-závislosti",
  "level": 3
}, {
  "value": "Riziká projektu",
  "id": "riziká-projektu",
  "level": 4
}, {
  "value": "Závislosti",
  "id": "závislosti",
  "level": 4
}, {
  "value": "9️⃣ Reflexia a ďalšie kroky",
  "id": "9️⃣-reflexia-a-ďalšie-kroky",
  "level": 3
}, {
  "value": "Čo očakávame, že sa naučíme?",
  "id": "čo-očakávame-že-sa-naučíme",
  "level": 4
}, {
  "value": "Ako by sa projekt mohol rozvíjať ďalej?",
  "id": "ako-by-sa-projekt-mohol-rozvíjať-ďalej",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
        id: "-project-summary",
        children: "📝 Project Summary"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-identifikácia",
      children: "🔖 Identifikácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1️⃣-názov-projektu",
      children: "1️⃣ Názov projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Názov projektu:"
      }), " Woodies", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "2025_PRJ_006"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stručný popis:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Woodies je projekt zameraný na návrh drevených hlavolamov ako digitálneho produktu. V Onshape sme vytvorili viacero CAD modelov - knot burr puzzle, cube puzzle, tangram - zostavy, výkresy a exporty do STEP/PDF formátu pripraviteľné pre CNC. Pokúsili sme sa aj o prvý fyzický prototyp, no nepodarilo sa nám vytvoriť plne funkčný produkt, pretože návrh bol v praxi náročnejší z časového hľadiska ako sme pôvodne odhadovali."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: " 2025_ST_005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Viktória Bordácsová"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAD Engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drawings,  plánovanie, komunikácia, dokumentácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: " 2025_ST_023"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lukáš Lechman"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CAD Engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Onshape modelovanie, návrh dielov, assemblies, exporty"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3️⃣-motivácia-tímu",
      children: "3️⃣ Motivácia tímu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prečo-sme-si-vybrali-tento-projekt",
      children: "Prečo sme si vybrali tento projekt?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drevené hlavolamy sú zaujímavé spojenie remesla, matematiky a mechaniky. Chceli sme overiť, či vieme pristúpiť k takémuto produktu „IT spôsobom“ – systematicky, s procesom, dokumentáciou a opakovateľným návrhom."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "aký-osobný-alebo-profesný-zmysel-má-pre-nás-riešenie-tejto-témy",
      children: "Aký osobný alebo profesný zmysel má pre nás riešenie tejto témy?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt nám umožnil precvičiť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "system thinking - procesy, artefakty, spätné väzby, riziká"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "návrh digitálneho produktu pomocou CAD modelov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dôslednosť v dokumentovaní výkresy, exporty, verifikácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prečo-je-projekt-dôležitý--aký-problém-rieši",
      children: "Prečo je projekt dôležitý / aký problém rieši?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riešime problém, že veľa „hobby“ návrhov puzzle nie je:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konzistentne zdokumentovaných"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripravených pre CNC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overiteľných bez fyzického prototypu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4️⃣-cieľ-a-pridaná-hodnota-projektu",
      children: "4️⃣ Cieľ a pridaná hodnota projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "finálny-cieľ",
      children: "Finálny cieľ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vytvoriť návrhový systém a portfólio drevených hlavolamov ako digitálneho balíka:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAD modely v Onshape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zostavy assemblies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výkresy a exporty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STEP exporty pre možné CNC spracovanie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentácia k návrhu a procesu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ako-spoznáme-že-projekt-je-úspešný",
      children: "Ako spoznáme, že projekt je úspešný?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt považujeme za úspešný, ak:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "máme 3 pripravené hlavolamy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ku každému existujú výkresy a exporty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "máme popísaný workflow a architektúru riešenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vieme ukázať, čo sme sa naučili z pokusu o prototyp"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5️⃣-popis-riešenia-high-level",
      children: "5️⃣ Popis riešenia (high-level)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riešenie je digitálny návrhový proces postavený na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Onshape"
        }), " ako hlavnom CAD nástroji - Part Studios, Assemblies, Drawings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["exportoch ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP"
        }), "  a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentácii a architektúre - analysis, design, implementation, testing, solution architecture"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "štruktúre, ktorá umožní ľahko pridať ďalšie puzzle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zameriavame sa na „čo“ dodávame: konzistentné návrhy pripravené na výrobu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6️⃣-projektový-plán",
      children: "6️⃣ Projektový plán"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Odhadovaný čas na prácu:"
      }), " ~ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "20"
      }), " hodín / týždeň"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Predpokladaný stav v čase prezentácie:"
      }), " dokumentácia + CAD prototypy digitálne, čiastočný fyzický pokus"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hlavné-míľniky",
      children: "Hlavné míľniky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Príprava"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "doménová analýza typov puzzle, trendov a materiálu dreva"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "výber vhodných kandidátov"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementácia"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Onshape modelovanie dielov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "assemblies a vizualizácie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "drawings a exporty"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testovanie / verifikácia"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "kontrola skladania v assembly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "kontrola konzistencie dokumentácie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pokus o fyzický prototyp"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prezentácia"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ukážky modelov a výkresov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vysvetlenie workflow a architektúry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "reflexia prototypu a návrhových rizík"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-milníky-a-výstupy",
      children: "📅 Milníky a výstupy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Do januára dodáme:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentáciu - md súbory projektu + KNIFE článok"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vizualizácie a výkresy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STEP exporty -diely aj zostavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prezentáciu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7️⃣-zákazník-a-hodnoty",
      children: "7️⃣ Zákazník a hodnoty"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "kto-by-mohol-byť-používateľom-projektu",
      children: "Kto by mohol byť používateľom projektu?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hobby zberatelia a puzzle nadšenci"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "školy a krúžky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CNC dielne alebo makers - výroba podľa digitálnych podkladov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "escape room prevádzkovatelia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "čo-mu-to-prinesie",
      children: "Čo mu to prinesie?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripravené návrhy na výrobu alebo ďalší vývoj"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jasné výkresy a dokumentáciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opakovateľný a rozšíriteľný návrhový proces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8️⃣-očakávané-výstupy",
      children: "8️⃣ Očakávané výstupy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dokumentácia",
      children: "Dokumentácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "analysis.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "design.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "testing_verification.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "top_level_architecture.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "solution_architecture.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "knowledge_contribution.md"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vizualizačný dokument - screenshots + odkazy na drawings"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "artefakty",
      children: "Artefakty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Onshape CAD modely:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Knot Burr puzzle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cube puzzle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tangram puzzle"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["exporty:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "STEP"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "PDF drawings"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-kontext",
      children: "📚 Kontext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inšpirácie a zdroje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Karakuri puzzle box: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.karakuri.gr.jp/en/",
          children: "https://www.karakuri.gr.jp/en/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Burr puzzles (Puzzling World): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.johnrausch.com/PuzzlingWorld/chap03.html",
          children: "http://www.johnrausch.com/PuzzlingWorld/chap03.html"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kickstarter puzzles (trendy): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kickstarter.com/discover/categories/puzzles",
          children: "https://www.kickstarter.com/discover/categories/puzzles"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-riziká-a-závislosti",
      children: "🧭 Riziká a závislosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "riziká-projektu",
      children: "Riziká projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bez fyzickej výroby je overenie „fit and feel“ obmedzené trenie, povrch, vlhkosť dreva."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tolerancie pri dreve sú kritické – malá odchýlka spôsobí nefunkčné skladanie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Návrh môže byť v praxi výrazne náročnejší, než sa zdá v CAD"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "závislosti",
      children: "Závislosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dostupnosť Onshape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kvalita vstupných modelov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "časová náročnosť tvorby výkresov a dokumentácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9️⃣-reflexia-a-ďalšie-kroky",
      children: "9️⃣ Reflexia a ďalšie kroky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "čo-očakávame-že-sa-naučíme",
      children: "Čo očakávame, že sa naučíme?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako premeniť nápad na štruktúrovaný návrhový proces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako dokumentovať digitálny produkt tak, aby bol pochopiteľný aj mimo tímu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako robiť verifikáciu návrhu bez prototypovania"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ako-by-sa-projekt-mohol-rozvíjať-ďalej",
      children: "Ako by sa projekt mohol rozvíjať ďalej?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "doplnenie ďalších puzzle typov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zavedenie parametrických variantov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reálne prototypovanie s iteráciou tolerancií"
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