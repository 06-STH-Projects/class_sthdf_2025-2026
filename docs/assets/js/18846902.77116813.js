"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[81441],{

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

/***/ 40893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_03_project_summary_md_188_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-03-project-summary-md-188.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_03_project_summary_md_188_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-summary","title":"🧭 CONTEXT ---------------------------------------------------------","description":"-----------------------------------------------------","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/03_project-summary.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T15:50:07.127712+00:00","title":"🧭 CONTEXT ---------------------------------------------------------","fm_version_comment":"","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"ID generuje CLI / skript","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution"},"next":{"title":"🧭 CONTEXT ---------------------------------------------------------","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/03_project-summary.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T15:50:07.127712+00:00',
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
  "value": "🔖 Identifikácia",
  "id": "-identifikácia",
  "level": 2
}, {
  "value": "1️⃣ Názov projektu",
  "id": "1️⃣-názov-projektu",
  "level": 2
}, {
  "value": "2️⃣ Členovia tímu",
  "id": "2️⃣-členovia-tímu",
  "level": 2
}, {
  "value": "3️⃣ Motivácia projektu",
  "id": "3️⃣-motivácia-projektu",
  "level": 2
}, {
  "value": "4️⃣ Cieľ a pridaná hodnota projektu",
  "id": "4️⃣-cieľ-a-pridaná-hodnota-projektu",
  "level": 2
}, {
  "value": "🎯 Cieľ:",
  "id": "-cieľ",
  "level": 3
}, {
  "value": "🏆 Projekt bol úspešný, pretože:",
  "id": "-projekt-bol-úspešný-pretože",
  "level": 3
}, {
  "value": "5️⃣ Popis riešenia",
  "id": "5️⃣-popis-riešenia",
  "level": 2
}, {
  "value": "👕 <strong>Customer stránka</strong>",
  "id": "-customer-stránka",
  "level": 3
}, {
  "value": "🛠️ <strong>Admin stránka</strong>",
  "id": "️-admin-stránka",
  "level": 3
}, {
  "value": "🧱 Použité technológie:",
  "id": "-použité-technológie",
  "level": 3
}, {
  "value": "6️⃣ Projektový plán",
  "id": "6️⃣-projektový-plán",
  "level": 2
}, {
  "value": "🔄 Realizácia prebehla v týchto fázach:",
  "id": "-realizácia-prebehla-v-týchto-fázach",
  "level": 3
}, {
  "value": "📅 Stav k prezentácii",
  "id": "-stav-k-prezentácii",
  "level": 3
}, {
  "value": "7️⃣ Zákazník a hodnoty",
  "id": "7️⃣-zákazník-a-hodnoty",
  "level": 2
}, {
  "value": "👤 Potenciálni používatelia:",
  "id": "-potenciálni-používatelia",
  "level": 3
}, {
  "value": "🎁 Hodnota pre používateľa:",
  "id": "-hodnota-pre-používateľa",
  "level": 3
}, {
  "value": "8️⃣ Očakávané výstupy (dodané)",
  "id": "8️⃣-očakávané-výstupy-dodané",
  "level": 2
}, {
  "value": "📚 Kontext",
  "id": "-kontext",
  "level": 2
}, {
  "value": "🧭 Riziká a závislosti",
  "id": "-riziká-a-závislosti",
  "level": 2
}, {
  "value": "Riešené riziká:",
  "id": "riešené-riziká",
  "level": 3
}, {
  "value": "Závislosti:",
  "id": "závislosti",
  "level": 3
}, {
  "value": "9️⃣ Reflexia a ďalšie kroky",
  "id": "9️⃣-reflexia-a-ďalšie-kroky",
  "level": 2
}, {
  "value": "Čo som sa naučil:",
  "id": "čo-som-sa-naučil",
  "level": 3
}, {
  "value": "Možné rozšírenia:",
  "id": "možné-rozšírenia",
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
    code: "code",
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
      children: "guid: \"8e573805-b739-4082-b38a-cbe306f9d01a\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-context----------------------------------------------------------",
      children: "🧭 CONTEXT ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dao: \"sthdf\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "title: \"2025_ST_038 – TShirt Print System – Project Summary\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description: \"Finálne zhrnutie kompletného projektu TShirt Print System.\""
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
      children: "category: \"IT / E-commerce\"\ntype: \"project-summary\"\npriority: \"high\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tags:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sthdf\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"project\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"tshirt-print\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"ecommerce\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"webapp\""
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
      children: "created: \"2025-11-24 16:50\"\nmodified: \"2025-11-24 16:50\"\nstatus: \"completed\"\nprivacy: \"public\""
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
      id: "-project-summary",
      children: "📝 Project Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-identifikácia",
      children: "🔖 Identifikácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-názov-projektu",
      children: "1️⃣ Názov projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Názov projektu:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PRJ_112_TShirtPrintSystem_ST038"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stručný popis:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "TShirt Print System je plne funkčný webový systém určený pre objednávanie potlače tričiek. Zákazníci si môžu vybrať produkt, zvoliť varianty a odoslať objednávku. Admin rozhranie umožňuje spravovať produkty, sledovať objednávky, generovať faktúry a analyzovať základné metriky predaja."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-členovia-tímu",
      children: "2️⃣ Členovia tímu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keďže som pracoval samostatne:"
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
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ST038"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dominik Pallo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fullstack vývoj, analýza, dizajn, testovanie, dokumentácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Návrh architektúry, frontend, backend, DB, UX, plánovanie, verzovanie"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-motivácia-projektu",
      children: "3️⃣ Motivácia projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chcel som vytvoriť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reálny produkt"
        }), ", ktorý rieši konkrétny problém pri predaji tričiek a merchu."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projekt je dôležitý, pretože mnohé malé podniky, kaviarne, športové tímy alebo tvorcovia merchu nemajú digitálny systém – všetko riešia cez Instagram, správy alebo Excel."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mojou motiváciou bolo postaviť funkčné, jednoduché a použiteľné MVP namiesto teoretickej úlohy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projekt rieši prehľadnosť objednávok, minimalizáciu ručného prepisovania a zjednodušenie komunikácie medzi zákazníkom a predávajúcim."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-cieľ-a-pridaná-hodnota-projektu",
      children: "4️⃣ Cieľ a pridaná hodnota projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-cieľ",
      children: "🎯 Cieľ:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vytvoriť plne funkčný e-commerce mini-systém, ktorý umožní rýchlu a jednoduchú objednávku tričiek a jednoduchú správu objednávok cez admin rozhranie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-projekt-bol-úspešný-pretože",
      children: "🏆 Projekt bol úspešný, pretože:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obsahuje celý objednávkový proces,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "admin má možnosť meniť stav objednávky a generovať faktúry,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "databáza aj API sú stabilné a rozšíriteľné,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "front-end je responzívny a použiteľný aj pre bežného používateľa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-popis-riešenia",
      children: "5️⃣ Popis riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt pozostáva z dvoch častí:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "-customer-stránka",
      children: ["👕 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Customer stránka"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Umožňuje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prezerať katalóg tričiek,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vybrať veľkosť, farbu, typ trička,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pridať produkt do košíka,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokončiť objednávku cez checkout."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "️-admin-stránka",
      children: ["🛠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Admin stránka"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Poskytuje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prehľad všetkých objednávok (vrátane filtrovania podľa stavu),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "detail objednávky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prepojenie objednávky a faktúry,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "generovanie PDF faktúr,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "správu produktov a variantov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "základné štatistiky (počet objednávok, tržby, najpredávanejšie položky)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-použité-technológie",
      children: "🧱 Použité technológie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend:"
        }), " Next.js, React"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend:"
        }), " Next.js API Routes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DB:"
        }), " PostgreSQL + Prisma ORM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Autentifikácia:"
        }), " NextAuth (email + heslo pre admina)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF faktúry:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdfkit"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Štruktúra projektu:"
        }), " Clean modular architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment:"
        }), " Vercel / Railway (podľa výkladu)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-projektový-plán",
      children: "6️⃣ Projektový plán"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-realizácia-prebehla-v-týchto-fázach",
      children: "🔄 Realizácia prebehla v týchto fázach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Analýza problému a návrh dátového modelu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Návrh UI pre zákazníka aj admina"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Implementácia API a databázových tabuliek"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Implementácia objednávkového procesu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Implementácia admin rozhrania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Fakturácia a generovanie PDF"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Testovanie a ladenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Finalizácia + dokumentácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-stav-k-prezentácii",
      children: "📅 Stav k prezentácii"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hotové MVP"
        }), " obsahujúce všetky základné funkcie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Admin zone"
        }), " vrátane správy objednávok"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Faktúry"
        }), " generované automaticky"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompletná dokumentácia projektu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-zákazník-a-hodnoty",
      children: "7️⃣ Zákazník a hodnoty"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-potenciálni-používatelia",
      children: "👤 Potenciálni používatelia:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "malé podniky a tvorcovia merchu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kaviarne a lokálne značky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "športové kluby,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "školy, tábory, eventy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-hodnota-pre-používateľa",
      children: "🎁 Hodnota pre používateľa:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchly spôsob objednávania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimalizácia ručného prepisovania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jasný prehľad objednávok a faktúr,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "príjemné a intuitívne rozhranie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8️⃣-očakávané-výstupy-dodané",
      children: "8️⃣ Očakávané výstupy (dodané)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Hotové MVP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Frontend aj backend aplikácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Databázový model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Admin dashboard"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Fakturačný modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Projektová dokumentácia (KNIFE + README)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✔ Prezentácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kontext",
      children: "📚 Kontext"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt čerpá z:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zásad e-commerce riešení,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mojich skúseností s UX/UI,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "praktických problémov reálnych malých obchodov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "architektonických princípov modulárnych aplikácií."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-riziká-a-závislosti",
      children: "🧭 Riziká a závislosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riešené-riziká",
      children: "Riešené riziká:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "oneskorený vývoj → vyriešené rozdelením úloh na menšie časti,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "integrácia DB → vyriešené použitím Prisma,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "návrh UI → vytvorený jednoduchý a jasný dizajn."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "závislosti",
      children: "Závislosti:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DB hosting,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "e-mailové notifikácie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "budúce integrácie (platobná brána)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9️⃣-reflexia-a-ďalšie-kroky",
      children: "9️⃣ Reflexia a ďalšie kroky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-som-sa-naučil",
      children: "Čo som sa naučil:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "návrh modulárnej architektúry,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tvorbu API,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prácu s databázou a ORM,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manažment celého projektu od nápadu po dodanie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UX a optimalizáciu objednávkového procesu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "možné-rozšírenia",
      children: "Možné rozšírenia:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "podpora ďalších produktov (mikiny, doplnky),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "platobná brána,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systém skladových zásob,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-tenant riešenie pre viac predajcov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mobilná verzia s PWA."
      }), "\n"]
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