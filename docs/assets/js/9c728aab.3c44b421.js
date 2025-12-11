"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[46640],{

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

/***/ 81666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_04_project_outcomes_md_9c7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-04-project-outcomes-md-9c7.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_04_project_outcomes_md_9c7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-outcomes","title":"🧭 CONTEXT ---------------------------------------------------------","description":"-----------------------------------------------------","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/04_project-outcomes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-outcomes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T15:50:07.130400+00:00","title":"🧭 CONTEXT ---------------------------------------------------------","fm_version_comment":"","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"🧭 CONTEXT ---------------------------------------------------------","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-summary"},"next":{"title":"🧭 CONTEXT ---------------------------------------------------------","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/pitch_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/04_project-outcomes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T15:50:07.130400+00:00',
	title: '🧭 CONTEXT ---------------------------------------------------------',
	fm_version_comment: '',
	locale: 'sk'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "fm_reserved1: &quot;&quot;\nfm_reserved2: &quot;&quot;",
  "id": "fm_reserved1-fm_reserved2-",
  "level": 2
}, {
  "value": "🔖 Stav projektu",
  "id": "-stav-projektu",
  "level": 2
}, {
  "value": "✔ Čo funguje:",
  "id": "-čo-funguje",
  "level": 3
}, {
  "value": "❗ Čo nebolo súčasťou MVP:",
  "id": "-čo-nebolo-súčasťou-mvp",
  "level": 3
}, {
  "value": "1️⃣ Business požiadavky",
  "id": "1️⃣-business-požiadavky",
  "level": 2
}, {
  "value": "2️⃣ Top Level Architecture",
  "id": "2️⃣-top-level-architecture",
  "level": 2
}, {
  "value": "3️⃣ Solution Architecture",
  "id": "3️⃣-solution-architecture",
  "level": 2
}, {
  "value": "Hlavné komponenty:",
  "id": "hlavné-komponenty",
  "level": 3
}, {
  "value": "Integrácia modulov:",
  "id": "integrácia-modulov",
  "level": 3
}, {
  "value": "4️⃣ Analysis",
  "id": "4️⃣-analysis",
  "level": 2
}, {
  "value": "Analyzované oblasti:",
  "id": "analyzované-oblasti",
  "level": 3
}, {
  "value": "5️⃣ Design",
  "id": "5️⃣-design",
  "level": 2
}, {
  "value": "Hotové návrhy:",
  "id": "hotové-návrhy",
  "level": 3
}, {
  "value": "6️⃣ Implementation",
  "id": "6️⃣-implementation",
  "level": 2
}, {
  "value": "Implementované moduly:",
  "id": "implementované-moduly",
  "level": 3
}, {
  "value": "Technológie:",
  "id": "technológie",
  "level": 3
}, {
  "value": "7️⃣ Verification &amp; Testing",
  "id": "7️⃣-verification--testing",
  "level": 2
}, {
  "value": "Testovanie zahŕňalo:",
  "id": "testovanie-zahŕňalo",
  "level": 3
}, {
  "value": "Záver testovania:",
  "id": "záver-testovania",
  "level": 3
}, {
  "value": "8️⃣ Operation",
  "id": "8️⃣-operation",
  "level": 2
}, {
  "value": "Deployment:",
  "id": "deployment",
  "level": 3
}, {
  "value": "Reálny beh:",
  "id": "reálny-beh",
  "level": 3
}, {
  "value": "🔧 Reálne dodané:",
  "id": "-reálne-dodané",
  "level": 2
}, {
  "value": "📸 Ako to vyzerá (screeny — doplníš neskôr)",
  "id": "-ako-to-vyzerá-screeny--doplníš-neskôr",
  "level": 2
}, {
  "value": "📂 Repo link",
  "id": "-repo-link",
  "level": 2
}, {
  "value": "Celkové zhodnotenie:",
  "id": "celkové-zhodnotenie",
  "level": 3
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guid: \"99814b1c-cf02-4840-a715-3ad8f4b9d34a\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-context----------------------------------------------------------",
      children: "🧭 CONTEXT ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dao: \"sthdf\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "title: \"2025_ST_038 – TShirt Print System – Project Outcomes\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description: \"Finálny prehľad výstupov projektu TShirt Print System podľa SDLC a KNIFE metodiky.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-authorship-------------------------------------------------------",
      children: "👥 AUTHORSHIP ------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "author: \"Dominik Pallo\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "authors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Dominik Pallo\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-classification----------------------------------------------------",
      children: "🗂 CLASSIFICATION ---------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "category: \"IT / E-commerce / SDLC\"\ntype: \"project-outcomes\"\npriority: \"high\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tags:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sthdf\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"project\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"outcomes\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sdlc\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"tshirt-print\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-localization------------------------------------------------------",
      children: "🌍 LOCALIZATION -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "locale: \"sk\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-lifecycle---------------------------------------------------------",
      children: "🕒 LIFECYCLE --------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "created: \"2025-11-24 16:50\"\nmodified: \"2025-11-24 16:50\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "status: \"completed\"\nprivacy: \"public\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-ip----------------------------------------------------------------",
      children: "⚖ IP ---------------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rights_holder_content: \"Dominik Pallo\"\nrights_holder_system: \"CAA / KNIFE / LetItGrow\"\nlicense: \"CC-BY-NC-SA-4.0\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_system: \"CAA\"\norigin_author: \"Dominik Pallo\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fm_reserved1-fm_reserved2-",
      children: "fm_reserved1: \"\"\nfm_reserved2: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-project-outcomes",
      children: "📦 Project Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-stav-projektu",
      children: "🔖 Stav projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TShirt Print System"
      }), " je úspešne dokončený ako funkčné MVP.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Všetky kľúčové časti systému sú implementované, nasadené a otestované:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-čo-funguje",
      children: "✔ Čo funguje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Katalóg tričiek s variantmi a náhľadmi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Košík + kompletný checkout proces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ukladanie objednávok do databázy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin zóna (objednávky, detail objednávky, zmena stavu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generovanie PDF faktúr"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základné štatistiky (počet objednávok, tržby, top produkty)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Autentifikácia administrátora"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responzívny frontend pre mobil a desktop"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-čo-nebolo-súčasťou-mvp",
      children: "❗ Čo nebolo súčasťou MVP:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Platobná brána"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skladový systém"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-tenant režim pre viacerých predajcov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pokročilá personalizácia dizajnov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-výstupy-podľa-sdlc--v-modelu",
      children: "🧩 Výstupy podľa SDLC / V-modelu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-business-požiadavky",
      children: "1️⃣ Business požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytvoriť jednoduchý systém na objednávanie tričiek"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zjednodušiť proces pre zákazníka (výber → košík → objednávka)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Umožniť adminovi spravovať objednávky, faktúry a produkty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimalizovať ručnú administratívu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém má byť jednoduchý na používanie a ľahko rozšíriteľný"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ kompletne naplnené"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-top-level-architecture",
      children: "2️⃣ Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hotová architektúra:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frontend aj backend v rámci Next.js monorepa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL databáza (Railway)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prisma ORM vrstva"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "API Routes pre komunikáciu FE ↔ BE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin modul v rámci samostatného route segmentu"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Moduly:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Catalog"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Orders"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Admin"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Invoices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Auth"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ implementované a funkčné"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-solution-architecture",
      children: "3️⃣ Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hlavné-komponenty",
      children: "Hlavné komponenty:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend"
        }), " – React / Next.js 14 App Router"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend"
        }), " – API Routes (REST štýl)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databáza"
        }), " – PostgreSQL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ORM"
        }), " – Prisma (modely: Product, Variant, Order, OrderItem, Invoice, User)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auth"
        }), " – NextAuth (credentials provider)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF Engine"
        }), " – pdfkit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integrácia-modulov",
      children: "Integrácia modulov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objednávka → vytvorí sa Order + OrderItems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pri potvrdení → automaticky sa vytvorí Invoice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin môže meniť stav (pending, paid, shipped…)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Faktúry sú generované na požiadanie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ finálne použité v projekte"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-analysis",
      children: "4️⃣ Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analyzované-oblasti",
      children: "Analyzované oblasti:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UX flow pre zákazníka (čo najmenej krokov)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Najčastejšie varianty tričiek (veľkosť, farba, typ)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spôsob ukladania údajov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validácia vstupov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimalizácia bariér pri objednávke (bez registrácie)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ analýza integrovaná do návrhu aj implementácie"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-design",
      children: "5️⃣ Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hotové-návrhy",
      children: "Hotové návrhy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI pre zákazníka (jednoduché, čisté, bez rušivých prvkov)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI pre admina (tabuľky, filtre, detail objednávky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Farby a typografia v minimalistickom „merch“ štýle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responzívny layout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Informačná architektúra katalógu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ dizajn zrealizovaný a implementovaný"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-implementation",
      children: "6️⃣ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementované-moduly",
      children: "Implementované moduly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Katalóg produktov"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Košík"
        }), " (Persistované v localStorage)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Checkout"
        }), " + validácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Objednávky"
        }), " (DB zápis, emailový súhrn voliteľne)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admin"
        }), " (objednávky, faktúry, štatistiky)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faktúry"
        }), " – generovanie PDF"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Autentifikácia admina"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technológie",
      children: "Technológie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Next.js"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "React"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prisma"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PostgreSQL"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pdfkit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tailwind CSS"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ kompletná implementácia MVP"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-verification--testing",
      children: "7️⃣ Verification & Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testovanie-zahŕňalo",
      children: "Testovanie zahŕňalo:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčné testy objednávkového procesu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testy API endpointov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testy databázových operácií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testy faktúr (PDF rendering)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UX testovanie – 3–5 používateľov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mobilné zariadenia (iOS/Android)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "záver-testovania",
      children: "Záver testovania:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základné tokové scenáre bez chýb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin rozhranie stabilné"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PDF faktúry generované správne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ testovanie dokončené"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8️⃣-operation",
      children: "8️⃣ Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment",
      children: "Deployment:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend + Backend:"
        }), " Vercel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databáza:"
        }), " Railway PostgreSQL"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Udržiavateľnosť:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "modulárna architektúra"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "čisté API endpointy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "jednoduché pridávanie nových produktov alebo modulov"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reálny-beh",
      children: "Reálny beh:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém pripravený na používanie malou značkou alebo merch creatorom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " ✔ systém pripravený na prevádzku"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-reálne-dodané",
      children: "🔧 Reálne dodané:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plne funkčný TShirt Print System"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Admin dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Objednávky s detailmi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fakturačný modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PDF export"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UX/UI frontendu aj adminu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompletný KNIFE balík dokumentácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "README + technická dokumentácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-vyzerá-screeny--doplníš-neskôr",
      children: "📸 Ako to vyzerá (screeny — doplníš neskôr)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "(Stačí doplniť obrázky z prostredia frontendu a adminu.)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-repo-link",
      children: "📂 Repo link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub projekt:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/DominikP123",
          children: "https://github.com/DominikP123"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(Doplň konkrétny repozitár projektu ak máš nový)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-porovnanie-s-project-summary",
      children: "🧭 Porovnanie s Project Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Plánované v Project Summary"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reálne dodané"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MVP s objednávkami"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ hotové"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Admin dashboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ hotové"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Faktúry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ hotové"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Štatistiky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ základné hotové"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ hotový"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dizajn + UX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ implementované"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dokumentácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✔ dokončená"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "celkové-zhodnotenie",
      children: "Celkové zhodnotenie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt bol naplnený ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nad rámec pôvodného plánu"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "MVP je stabilné, funkčné a pripravené na ďalší vývoj."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/",
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