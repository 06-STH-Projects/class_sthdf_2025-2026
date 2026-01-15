"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[29955],{

/***/ 9891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/coffins_not_assambled-ff57f3a574f72cff0098e8d93b5b4d35.jpg");

/***/ }),

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

/***/ 35783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/coffins_performance-10ce3d26e158b1145a39383639417d75.jpg");

/***/ }),

/***/ 38001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_050_deliverables_03_project_summary_md_bf0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-050-deliverables-03-project-summary-md-bf0.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_050_deliverables_03_project_summary_md_bf0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/deliverables/project-summary","title":"📝 Project Summary","description":"🔖 Identifikácia","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST050/deliverables/03_project-summary.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST050/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/deliverables/project-summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📝 Project Summary"},"sidebar":"tutorialSidebar","previous":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/deliverables/knowledge-contribution"},"next":{"title":"📦 Project Outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST050/deliverables/03_project-summary.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '📝 Project Summary'
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
  "level": 2
}, {
  "value": "2️⃣ Členovia tímu",
  "id": "2️⃣-členovia-tímu",
  "level": 2
}, {
  "value": "3️⃣ Motivácia tímu",
  "id": "3️⃣-motivácia-tímu",
  "level": 2
}, {
  "value": "4️⃣ Cieľ a pridaná hodnota projektu",
  "id": "4️⃣-cieľ-a-pridaná-hodnota-projektu",
  "level": 2
}, {
  "value": "5️⃣ Popis riešenia",
  "id": "5️⃣-popis-riešenia",
  "level": 2
}, {
  "value": "6️⃣ Projektový plán",
  "id": "6️⃣-projektový-plán",
  "level": 2
}, {
  "value": "📅 Milníky a výstupy",
  "id": "-milníky-a-výstupy",
  "level": 3
}, {
  "value": "7️⃣ Zákazník a hodnoty",
  "id": "7️⃣-zákazník-a-hodnoty",
  "level": 2
}, {
  "value": "8️⃣ Očakávané výstupy",
  "id": "8️⃣-očakávané-výstupy",
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
  "value": "9️⃣ Reflexia a ďalšie kroky",
  "id": "9️⃣-reflexia-a-ďalšie-kroky",
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
    img: "img",
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
        id: "-project-summary",
        children: "📝 Project Summary"
      })
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
        }), " Laserové rakvy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stručný popis:"
        }), " Projekt sa zameriava na návrh a výrobu siedmich malých rakiev ako divadelných rekvizít pomocou laserového rezu a lacného materiálu – kartónu. Cieľom je vytvoriť vizuálne presvedčivé, ľahké a funkčné rekvizity pre potreby inscenácie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-členovia-tímu",
      children: "2️⃣ Členovia tímu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| ST050 | Matej Ševčík | Project Lead | koordinácia |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-motivácia-tímu",
      children: "3️⃣ Motivácia tímu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projekt som si vybral, pretože som potreboval vyrobiť rakvy ako rekvizity do divadelnej hry (ktorú som režíroval)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riešenie má pre mňa zmysel najmä praktický—učím sa pracovať s laserovým rezačom a vyrobiť pri tom produkt, ktorý využijem v osobnom projekte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Projekt je dôležitý, pretože umožňuje vytvoriť kvalitné rekvizity aj s obmedzeným rozpočtom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rieši problém rýchlej, estetickej a cenovo dostupnej výroby viacerých 3D objektov pre scénické použitie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-cieľ-a-pridaná-hodnota-projektu",
      children: "4️⃣ Cieľ a pridaná hodnota projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cieľ: Vyrobiť sedem malých rakiev z kartónu (cca 25 cm), ktoré budú pevné, vizuálne vierohodné a použiteľné počas predstavenia."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ako spoznáme, že projekt je úspešný: Rakvy vyzerajú na scéne dobre a plnia svoj účel"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-popis-riešenia",
      children: "5️⃣ Popis riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt používa jednoduchú architektúru:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "laser-cut šablóna pre materiál hrúbky ~3 mm,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dostupný kartón ako primárny materiál,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Herkules lepidlo na montáž"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zameriavame sa na efektívnu výrobu viacerých rovnakých kusov z lacného materiálu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-projektový-plán",
      children: "6️⃣ Projektový plán"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Odhadovaný čas na prácu: 2 hodiny / týždeň"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predpokladaný stav v čase prezentácie: funkčný produkt"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hlavné míľniky:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[ 25.11.2025 ] Príprava"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[ 01.12.2025 ] Implementácia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[ 05.12.2025 ] Testovanie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "[ 14.01.2026 ] Prezentácia"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt zabral približne 4 týždne"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Príprava"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Porovnávanie prístupov (3d tlač vs laser cutting)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Cenový odhad"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hľadanie materiálu a vhodného modelu"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(60506)/* ["default"] */ .A) + "",
        width: "321",
        height: "298"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementácia"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vytvorenie 3D modelu pre rezačku"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vyrezanie 7 rakiev na laserovej rezačke vo FabLabe"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Poskladanie, zlepenie rakiev (s pomocou backstage teamu študentského divadla)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Not yet assembled components",
        src: (__webpack_require__(9891)/* ["default"] */ .A) + "",
        width: "440",
        height: "587"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testovanie"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Odskúšanie rakiev na divadelnej skúške"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Využitie rakiev na premiére (17.12.2025, Teatro Colorato)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Coffins during the performance",
        src: (__webpack_require__(35783)/* ["default"] */ .A) + "",
        width: "440",
        height: "293"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dokumentácia"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zhotovenie dokumentácie a prezentácie"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-milníky-a-výstupy",
      children: "📅 Milníky a výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do prezentácie dodáme:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prototyp"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prezentáciu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "dokumentáciu"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-zákazník-a-hodnoty",
      children: "7️⃣ Zákazník a hodnoty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Používateľ:"
        }), " študentské divadlo Actofkaa"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prínos:"
        }), " rekvizity do aktuálnej a potenciálne aj budúcich inscenácií"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8️⃣-očakávané-výstupy",
      children: "8️⃣ Očakávané výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokumentácia: fotodokumentácia postupu, záznam z inscenácie, readme"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Artefakty: ukážka 1 z rakiev"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kontext",
      children: "📚 Kontext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE: článok o výrobe malých rakiev"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inšpirácie: laser-cut dizajny rakiev pre 3 mm materiál, opis rakiev v scenári"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-riziká-a-závislosti",
      children: "🧭 Riziká a závislosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vysoká cena"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vlhkosť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rakvy sa môžu poškodiť"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9️⃣-reflexia-a-ďalšie-kroky",
      children: "9️⃣ Reflexia a ďalšie kroky"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Čo očakávate, že sa naučíte?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "práce s laserovým rezačom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "adaptácia dizajnu na materiál,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchla výroba reálnych rekvizít pre divadelnú produkciu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchý projektový manažment (od návrhu po dodanie)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ako by sa projekt mohol rozvíjať ďalej?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvoriť aj ďalšie rekvizity týmto spôsobom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vyvinúť vlastné laser-cut šablóny,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "experimentovať s inými materiálmi (preglejka, MDF, EVA pena),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentáciu rozšíriť na plnohodnotný návod pre iné divadelné súbory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/",
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



/***/ }),

/***/ 60506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/coffin_inspiration-2b2d76bbae17ec073bb202b06797705f.png");

/***/ })

}]);