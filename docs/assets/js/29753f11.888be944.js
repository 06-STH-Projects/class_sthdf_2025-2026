"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[98049],{

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

/***/ 66315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_index_md_297_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-index-md-297.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_index_md_297_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/index","title":"Študentské deliverables","description":"Tento súbor je môj študentský rozcestník k povinným výstupom v rámci predmetu STHDF.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"Študentské deliverables"},"sidebar":"tutorialSidebar","previous":{"title":"ST038","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/"},"next":{"title":"2025_ST_038 – STHDF – Študent 038 (script)","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: 'Študentské deliverables'
};
const contentTitle = 'Študentské deliverables';

const assets = {

};



const toc = [{
  "value": "Nižšie nájdeš rýchle odkazy na všetky povinné výstupy. Odkazy sú <strong>relatívne</strong>, takže štruktúru môžeš neskôr presúvať.",
  "id": "nižšie-nájdeš-rýchle-odkazy-na-všetky-povinné-výstupy-odkazy-sú-relatívne-takže-štruktúru-môžeš-neskôr-presúvať",
  "level": 2
}, {
  "value": "fm_reserved1: &quot;&quot;\nfm_reserved2: &quot;&quot;",
  "id": "fm_reserved1-fm_reserved2-",
  "level": 2
}, {
  "value": "1. Čo bolo pre teba v tomto predmete/úlohe najľahšie?",
  "id": "1-čo-bolo-pre-teba-v-tomto-predmeteúlohe-najľahšie",
  "level": 2
}, {
  "value": "2. Čo bolo najťažšie a prečo?",
  "id": "2-čo-bolo-najťažšie-a-prečo",
  "level": 2
}, {
  "value": "3. Čo nové si sa naučil?",
  "id": "3-čo-nové-si-sa-naučil",
  "level": 2
}, {
  "value": "4. Ako by si postupoval inak, keby si mal začať odznova?",
  "id": "4-ako-by-si-postupoval-inak-keby-si-mal-začať-odznova",
  "level": 2
}, {
  "value": "5. Ako to súvisí s tvojím projektom alebo budúcou praxou?",
  "id": "5-ako-to-súvisí-s-tvojím-projektom-alebo-budúcou-praxou",
  "level": 2
}, {
  "value": "6. Akú jednu vetu by si chcel, aby si z tohto zapamätali tvoji spolužiaci?",
  "id": "6-akú-jednu-vetu-by-si-chcel-aby-si-z-tohto-zapamätali-tvoji-spolužiaci",
  "level": 2
}, {
  "value": "7. Čo by si odporučil na zlepšenie predmetu?",
  "id": "7-čo-by-si-odporučil-na-zlepšenie-predmetu",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}, {
  "value": "Rýchly checklist",
  "id": "rýchly-checklist",
  "level": 2
}, {
  "value": "Ako odovzdávať (mini-návod)",
  "id": "ako-odovzdávať-mini-návod",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "študentské-deliverables",
        children: "Študentské deliverables"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento súbor je môj študentský rozcestník k povinným výstupom v rámci predmetu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STHDF"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Projekt, na ktorom som počas semestra pracoval, je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "TShirt Print System"
      }), " – funkčné MVP pre predaj tričiek s katalógom produktov, košíkom, objednávkovým systémom, admin rozhraním a generovaním PDF faktúr."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nižšie sú odkazy na jednotlivé deliverables (A1–A4, prezentácie a reflexia), ktoré nadväzujú na môj projekt a finálnu prezentáciu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Repozitár projektu: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "doplním link na GitHub"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Demo / ukážka: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "doplním link (ak je k dispozícii)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "nižšie-nájdeš-rýchle-odkazy-na-všetky-povinné-výstupy-odkazy-sú-relatívne-takže-štruktúru-môžeš-neskôr-presúvať",
      children: ["Nižšie nájdeš rýchle odkazy na všetky povinné výstupy. Odkazy sú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relatívne"
      }), ", takže štruktúru môžeš neskôr presúvať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-versioning--systém-dopĺňa-automaticky",
      children: "🧩 Versioning – systém dopĺňa automaticky"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fm_version: \"1.0.1\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fm_build: \"2025-11-24T15:50:07.128617+00:00\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "fm_version_comment: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-identity---------------------------------------------------------",
      children: "🆔 IDENTITY --------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guid: \"0e21ccbe-3914-4b5b-a26a-fdf9f0c9067c\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-context----------------------------------------------------------",
      children: "🧭 CONTEXT ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dao: \"sthdf\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "title: \"2025_ST_038 – TShirt Print System – Reflexia\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description: \"Reflexia po dokončení projektu TShirt Print System v rámci predmetu STHDF.\""
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
      children: "category: \"reflection\"\ntype: \"personal\"\npriority: \"medium\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tags:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"reflection\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sthdf\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"project\""
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
      id: "-9-reflexia-a-spätná-väzba",
      children: "🧠 9. Reflexia a spätná väzba"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-čo-bolo-pre-teba-v-tomto-predmeteúlohe-najľahšie",
      children: "1. Čo bolo pre teba v tomto predmete/úlohe najľahšie?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najľahšie pre mňa bolo prejsť z nápadu do reálnej implementácie.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Som zvyknutý pracovať s modernými webovými technológiami, takže časť vývoja (Next.js, React, API, DB) mi išla prirodzene.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Tiež ma bavilo robiť praktické veci – UI, UX, admin panel, faktúry – pretože som videl okamžitý progres."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-čo-bolo-najťažšie-a-prečo",
      children: "2. Čo bolo najťažšie a prečo?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najťažší bol ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "komplexný návrh celého systému v jednom človeku"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Musel som si rozdeliť úlohy tak, aby som všetko stihol: analýzu, návrh, vývoj, testovanie, dokumentáciu aj prezentáciu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiež bolo výzvou:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dávať pozor na konzistentnosť dátového modelu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navrhnúť admin rozhranie tak, aby dávalo zmysel,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prepojiť objednávky a faktúry logickým spôsobom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najväčšia výzva bol ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "časový manažment"
      }), " — pretože som robil všetko sám a chcel som dodať skutočne funkčné MVP, nie len „prototyp“."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-čo-nové-si-sa-naučil",
      children: "3. Čo nové si sa naučil?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt mi priniesol veľa nových skúseností:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["naučil som sa navrhovať systém tak, aby bol ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "modulárny a udržateľný"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["precvičil som si ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kompletné SDLC"
        }), " od requirements až po operation,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zlepšil som sa v prepojení API, DB, ORM v reálnom projekte,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pochopil som dôležitosť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jednoduchého UX"
        }), " pri objednávkovom procese,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "naučil som sa efektívnejšie robiť dokumentáciu v KNIFE štruktúre."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tiež som získal skúsenosť s generovaním PDF faktúr a implementáciou admin modu od základu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-ako-by-si-postupoval-inak-keby-si-mal-začať-odznova",
      children: "4. Ako by si postupoval inak, keby si mal začať odznova?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viac času by som venoval úvodnej analýze a dátovému modelu, aby sa predišlo mini-zmenám počas vývoja."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skôr by som si pripravil vizuálny návrh (wireframe), aby bol front-end konzistentnejší."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robil by som menšie iterácie, s testovaním po každej."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hneď od začiatku by som pripravil možnosť škálovania (multi-tenant)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V rámci repo by som si oddelil dokumentáciu ešte striktnejšie od kódu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ale celkovo som spokojný s postupom aj finálnym výsledkom."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-ako-to-súvisí-s-tvojím-projektom-alebo-budúcou-praxou",
      children: "5. Ako to súvisí s tvojím projektom alebo budúcou praxou?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento projekt veľmi dobre zapadá do toho, čo chcem robiť profesionálne:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "webové aplikácie pre reálnych používateľov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "projekty s e-commerce funkciami,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systémy so správou obsahu a dashboardami,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fullstack vývoj, kde mám kontrolu nad návrhom aj implementáciou,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "práca s databázou, API a komponentovým UI."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V budúcnosti chcem riešiť podobné produkty pre menšie firmy alebo ako SaaS služby.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "TShirt Print System je dobrý základ pre ďalší startupový experiment."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-akú-jednu-vetu-by-si-chcel-aby-si-z-tohto-zapamätali-tvoji-spolužiaci",
      children: "6. Akú jednu vetu by si chcel, aby si z tohto zapamätali tvoji spolužiaci?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "„Začni jednoducho, ale vybuduj to tak, aby to mohlo rásť.“"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-čo-by-si-odporučil-na-zlepšenie-predmetu",
      children: "7. Čo by si odporučil na zlepšenie predmetu?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kratšie a jasnejšie zadania — nie všetci študenti chápu KNIFE štruktúru na prvýkrát. Detailnejšie informácie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možnosť dostať spätnú väzbu v polovici semestra, aby mohli lepšie smerovať projekt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mierne zjednodušiť dokumentačnú časť."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viac zapájať a fyzicky skúšať technológie, ktoré sú k dispozícii."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ale celkovo hodnotím predmet ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pozitívne"
      }), ", lebo núti študenta vytvoriť niečo reálne použiteľné, nielen teoretickú prácu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧑‍🎓 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A1 – About me:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A2 – Knowledge Contribution (KNIFE):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧭 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A3 – Project Summary:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-summary",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏁 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A4 – Project Outcomes:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-outcomes",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎤 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "05 – Pitch Presentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/pitch_presentation",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎬 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "06 – Final Presentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/final_presentation",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🪞 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "07 – Reflexia:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/reflexia",
          children: "otvor"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ℹ️ Poznámka k ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A2 – Knowledge Contribution"
        }), ": Toto deliverable je v systéme reprezentované ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " (štandardná šablóna KNIFE s vlastným FM a procesom). Tento index odkazuje na A2 súbor, ktorý smeruje na príslušný KNIFE podľa pokynov kurzu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rýchly-checklist",
      children: "Rýchly checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A1 vyplnené"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A2 (KNIFE) publikované / referencované"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A3 schválené učiteľom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A4 doplnené o odkazy (repo, video, demo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pitch hotový (5–7 min)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Finálna prezentácia hotová (10–12 min)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Reflexia pridaná"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ako-odovzdávať-mini-návod",
      children: "Ako odovzdávať (mini-návod)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otvor príslušnú stránku (A1–A4, 05–07) a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "doplň obsah"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pridaj odkazy na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repozitár, video a demo"
        }), " (ak máš)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ulož zmeny, commitni a pushni:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git add .\ngit commit -m \"Update deliverables\"\ngit push\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia-1",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["↩️ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/",
          children: "Späť na študenta"
        })]
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