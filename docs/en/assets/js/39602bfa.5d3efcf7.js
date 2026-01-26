"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[76522],{

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

/***/ 84558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_031_deliverables_03_project_summary_md_396_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-031-deliverables-03-project-summary-md-396.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_031_deliverables_03_project_summary_md_396_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/project-summary","title":"📝 Project Summary","description":"🔖 Identifikácia","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST031/deliverables/03_project-summary.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST031/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/project-summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/project-summary","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/knowledge-contribution"},"next":{"title":"📦 Project Outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/project-outcomes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST031/deliverables/03_project-summary.md


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
    li: "li",
    ol: "ol",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-názov-projektu",
      children: "1️⃣ Názov projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Názov projektu:"
        }), " 2025_PRJ_012 – SmartPot"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stručný popis:"
        }), " SmartPot spája 3D tlač a jednoduchú elektroniku, aby uľahčil starostlivosť o rastliny každému používateľovi, od začiatočníkov až po nadšencov. Umožňuje presné meranie vlhkosti a poskytuje jasnú vizuálnu informáciu o tom, či rastlina potrebuje vodu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "2025_ST_031"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Miroslava"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Project Lead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zapojenie elektroniky a testovanie, programovanie, dokumentovanie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2025_ST_039"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "návrh 3D modelu a návrh zapojenia senzorov, 3D model, EA modelovanie"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-motivácia-tímu",
      children: "3️⃣ Motivácia tímu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dodanie plne funkčného produktu, ktorý je spoľahlivý, intuitívny a dokáže reálne pomôcť pri starostlivosti o rastliny, najmä pre používateľov, ktorí zabúdajú zalievať alebo prelievajú rastliny."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-cieľ-a-pridaná-hodnota-projektu",
      children: "4️⃣ Cieľ a pridaná hodnota projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vytvoriť lacný a ľahko použiteľný inteligentný kvetináč, ktorý kombinuje 3D tlač, elektroniku a jednoduchý softvér, a tým výrazne uľahčí každodennú starostlivosť o rastliny."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-popis-riešenia",
      children: "5️⃣ Popis riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot je inteligentný samozavlažovací kvetináč, ktorý kombinuje 3D tlačený kvetináč so vstavaným zásobníkom vody, vlhkostný senzor, Arduino Nano a OLED displej. Senzor meria vlhkosť pôdy v reálnom čase a Arduino spracováva namerané údaje, ktoré sa následne zobrazujú na displeji formou percentuálneho ukazovateľa a smajlíka."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento systém umožňuje používateľovi okamžite vidieť, či rastlina potrebuje zálievku, a tým znižuje riziko prelievania alebo vysychania. SmartPot tak poskytuje praktické, intuitívne a spoľahlivé riešenie pre každodennú starostlivosť o rastliny."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-projektový-plán",
      children: "6️⃣ Projektový plán"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Celkový projekt si vyžiadal približne 4 týždne práce, rozdelenej do štyroch fáz:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Návrh 3D modelu a prepojenia (0.5 týždňa)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Papierové skice kvetináča, zásobníka vody a miesta pre elektroniku."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Náčrt základnej logiky prepojenia Arduina, dispela a senzora."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Návrh modelu vo Fusion, zapojenie komponentov a programovanie (2 týždne)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vytvorenie 3D modelov vo Fusion 360"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zapojenie senzora a OLED displeja na breadboarde."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Programovanie základnej funkcionality na Arduino Nano: čítanie vlhkosti, prepočet na percentá, zobrazenie na displeji s vizuálnym indikátorom."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D tlač, implementácia senzorov a testovanie (1 týždeň)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vytlačenie kvetináča vo FabLabe."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prepojenie a integrácia elektroniky do 3D tlačeného modelu."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Testovanie senzora a displeja priamo na rastline."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finalizácia a dokumentácia (0,5 týždňa)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dokončenie dokumentácie vrátane náčrtov, fotografií a popisu architektúry."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každá fáza bola realizovaná postupne, pričom sme pri iteráciách kombinovali testovanie 3D modelu, elektroniky a softvéru, aby sme dosiahli plne funkčný a stabilný prototyp SmartPot."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-milníky-a-výstupy",
      children: "📅 Milníky a výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytvoriť plne funkčný prototyp SmartPot."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zabezpečiť spoľahlivé meranie vlhkosti pôdy senzorom."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OLED displej musí prehľadne zobrazovať aktuálnu vlhkosť a vizuálne indikovať stav rastliny (smajkík + percento)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produkt má byť intuitívny, použiteľný a praktický pre domácich používateľov bez predchádzajúcich skúseností so starostlivosťou o rastliny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-zákazník-a-hodnoty",
      children: "7️⃣ Zákazník a hodnoty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľová skupina sú všetci používatelia, ktorí majú problémy s pravidelným polievaním rastlín, napríklad študenti, zaneprázdnení ľudia alebo začiatočníci, ktorí často zabúdajú zalievať rastliny alebo ich jednoducho prelievajú. Alebo jednoducho ktokoľvek, kto chce vidieť, akú \"náladu\" má práve ich rastlina."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8️⃣-očakávané-výstupy",
      children: "8️⃣ Očakávané výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokumentácia: README, KNIFE článok"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Artefakty: 3D kvetináč, prototyp senzoru"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kontext",
      children: "📚 Kontext"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-riziká-a-závislosti",
      children: "🧭 Riziká a závislosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9️⃣-reflexia-a-ďalšie-kroky",
      children: "9️⃣ Reflexia a ďalšie kroky"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/",
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