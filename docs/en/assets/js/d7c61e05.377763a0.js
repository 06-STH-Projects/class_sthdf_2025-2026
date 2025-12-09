"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[32600],{

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

/***/ 32622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_05_pitch_presentation_md_d7c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-05-pitch-presentation-md-d7c.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_05_pitch_presentation_md_d7c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/pitch_presentation","title":"pitch_presentation","description":"-----------------------------------------------------","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/05_pitch_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/pitch_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/pitch_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T15:50:07.128234+00:00","fm_version_comment":"","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"project-outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-outcomes"},"next":{"title":"final_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/final_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/05_pitch_presentation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T15:50:07.128234+00:00',
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
  "value": "1. Problém",
  "id": "1-problém",
  "level": 2
}, {
  "value": "2. Riešenie",
  "id": "2-riešenie",
  "level": 2
}, {
  "value": "Pre zákazníka:",
  "id": "pre-zákazníka",
  "level": 3
}, {
  "value": "Pre predávajúceho:",
  "id": "pre-predávajúceho",
  "level": 3
}, {
  "value": "3. Hodnota",
  "id": "3-hodnota",
  "level": 2
}, {
  "value": "🎯 Pre podniky a tvorcov merchu:",
  "id": "-pre-podniky-a-tvorcov-merchu",
  "level": 3
}, {
  "value": "🎯 Pre zákazníkov:",
  "id": "-pre-zákazníkov",
  "level": 3
}, {
  "value": "🎯 Pre širší trh:",
  "id": "-pre-širší-trh",
  "level": 3
}, {
  "value": "4. Biznis model (hypotéza)",
  "id": "4-biznis-model-hypotéza",
  "level": 2
}, {
  "value": "Monetizácia môže fungovať tromi spôsobmi:",
  "id": "monetizácia-môže-fungovať-tromi-spôsobmi",
  "level": 3
}, {
  "value": "5. Tím",
  "id": "5-tím",
  "level": 2
}, {
  "value": "6. Call to action",
  "id": "6-call-to-action",
  "level": 2
}, {
  "value": "Čo potrebujem od „investora“ (aj hypoteticky):",
  "id": "čo-potrebujem-od-investora-aj-hypoteticky",
  "level": 3
}, {
  "value": "⏱️ Časovanie",
  "id": "️-časovanie",
  "level": 2
}, {
  "value": "📊 Podklady",
  "id": "-podklady",
  "level": 2
}, {
  "value": "🧭 Tipy",
  "id": "-tipy",
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
    children: [(0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guid: \"6b8c0759-8d22-4f32-a73e-9edb580c4b1b\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-context----------------------------------------------------------",
      children: "🧭 CONTEXT ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dao: \"sthdf\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "title: \"2025_ST_038 – TShirt Print System – Pitch Presentation\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description: \"Investorsky zameraný pitch prezentujúci projekt TShirt Print System.\""
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
      children: "category: \"pitch\"\ntype: \"presentation\"\npriority: \"high\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tags:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sthdf\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"pitch\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"tshirt-print\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"startup\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"presentation\""
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
      id: "-pitch-presentation",
      children: "🎤 Pitch Presentation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problém",
      children: "1. Problém"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Malé podniky, značky, športové kluby a tvorcovia merchu stále riešia objednávky tričiek cez:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instagram správy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "e-maily"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Excel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ručné prepisovanie údajov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento proces je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "chaotický, nepresný, zdĺhavý"
      }), " a pri väčšom množstve objednávok neudržateľný."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➡️ Chýba im ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jednoduchý systém"
      }), ", ktorý zvládne objednávky, varianty tričiek, faktúry a prehľad zákazníkov na jednom mieste."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-riešenie",
      children: "2. Riešenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vyvinul som ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TShirt Print System"
      }), " – jednoduchý, rýchly a funkčný webový systém, ktorý umožňuje:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-zákazníka",
      children: "Pre zákazníka:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vybrať si tričko (typ, veľkosť, farbu),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoducho ho objednať cez prehľadný checkout,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dostať jasné potvrdenie a stav objednávky."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-predávajúceho",
      children: "Pre predávajúceho:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spravovať objednávky v admin zóne,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zobrazovať detail objednávky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "meniť stav (prijatá → výroba → odoslaná),"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["generovať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF faktúry jedným klikom"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sledovať základné štatistiky predaja."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➡️ Jednoduché, funkčné ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MVP pripravené pre reálne použitie"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hodnota",
      children: "3. Hodnota"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-pre-podniky-a-tvorcov-merchu",
      children: "🎯 Pre podniky a tvorcov merchu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "menej chýb v objednávkach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "menej manuálnej administratívy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatické faktúry"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "celý proces na jednom mieste"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "profesionálna prezentácia produktu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-pre-zákazníkov",
      children: "🎯 Pre zákazníkov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchla a čistá objednávka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výber variantov bez písania správ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prehľad o objednávke"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-pre-širší-trh",
      children: "🎯 Pre širší trh:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použiteľné pre malé značky, tímy, komunity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vhodné pre B2B aj B2C"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ideálne pre lokálne podniky bez IT podpory"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-biznis-model-hypotéza",
      children: "4. Biznis model (hypotéza)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monetizácia-môže-fungovať-tromi-spôsobmi",
      children: "Monetizácia môže fungovať tromi spôsobmi:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SaaS model"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "9–19 € mesačne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hosting + správa + admin modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatické faktúry, štatistiky, neobmedzené produkty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Provízny model"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3–5 % z každej objednávky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vhodné pre malé značky, ktoré nechcú mesačný poplatok"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Jednorazové nasadenie"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "150–300 € za custom branding a nastavenie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➡️ Projekt je rozšíriteľný do plnohodnotnej platformy pre merch tvorcov."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tím",
      children: "5. Tím"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pracoval som ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "samostatne"
      }), " a pokryl som všetky oblasti projektu:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analýza a dizajn"
        }), " – návrh UX, tokov a architektúry"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend"
        }), " – Next.js, React"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend"
        }), " – API, databáza, auth systém"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DB"
        }), " – PostgreSQL, Prisma ORM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing"
        }), " – manuálne aj funkčné testy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fakturačný modul"
        }), " – PDF generovanie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment"
        }), " – Vercel + Railway"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dokumentácia a prezentácia"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Som zodpovedný za celý proces ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "od nápadu po hotový produkt"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-call-to-action",
      children: "6. Call to action"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-potrebujem-od-investora-aj-hypoteticky",
      children: "Čo potrebujem od „investora“ (aj hypoteticky):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "feedback"
        }), " k ďalšiemu rozvoju systému"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "čas"
        }), " na rozšírenie o pokročilé funkcie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["voliteľne – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "podporu"
        }), " pri integrácii platobnej brány alebo marketingu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["v prípade reálneho startupu:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "1 000 – 5 000 € pre infraštruktúru a vývoj"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "kontakt na malé podniky / tvorcov merchu"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➡️ Projekt má potenciál prerásť z MVP na plnohodnotný SaaS produkt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "️-štruktúra-pitchu",
      children: "🛠️ Štruktúra pitchu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), " – chaos v objednávkach a fakturácii"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Riešenie"
        }), " – jednoduchý systém TShirt Print System"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trh / Kontext"
        }), " – malé podniky, kluby, merch creators"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tím"
        }), " – jeden človek, fullstack realizácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výzva"
        }), " – priestor na rozšírenie podľa needs používateľov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-časovanie",
      children: "⏱️ Časovanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prezentácia: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "5–7 minút"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Q&A: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2–3 minúty"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-podklady",
      children: "📊 Podklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "4–5 vizuálnych slajdov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1 krátka ukážka adminu alebo objednávkového procesu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logická a čistá storytellingová línia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy",
      children: "🧭 Tipy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Menej textu → viac ukážok a príbehu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jasné CTA na konci"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vysvetliť dopad riešenia na reálne podniky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/",
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