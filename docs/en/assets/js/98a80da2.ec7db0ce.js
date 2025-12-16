"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[56994],{

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

/***/ 52208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_031_deliverables_02_knowledge_contribution_md_98a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-031-deliverables-02-knowledge-contribution-md-98a.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_031_deliverables_02_knowledge_contribution_md_98a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST031/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST031/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/knowledge-contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📚 Knowledge Contribution"},"sidebar":"tutorialSidebar","previous":{"title":"🙋 About Me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST031/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '📚 Knowledge Contribution'
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
  "value": "Ako funguje meranie:",
  "id": "ako-funguje-meranie",
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
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SmartPot: Inteligentný samozavlažovací kvetináč so senzorom vlhkosti"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot spája 3D tlač a jednoduchú elektroniku, aby uľahčil starostlivosť o rastliny každému používateľovi, od začiatočníkov až po nadšencov. Umožňuje presné meranie vlhkosti a poskytuje jasnú vizuálnu informáciu o tom, či rastlina potrebuje vodu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot rieši najčastejší problém pri pestovaní rastlín, a tým je nesprávne zalievanie. Či už ide o zabúdanie, prelievanie alebo neodhadnutie množstva vody, rastlina bez správnej vlhkosti trpí."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Správne množstvo vody je pri rastinách zásadné:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "príliš veľa vody"
        }), " = hniloba koreňov, plesne, postupné odumieranie rastlín,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "príliš málo vody"
        }), " = vädnutie, žltnutie, spomalený rast."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot umožní používateľovi:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoducho sledovať vlhkosť pôdy v reálnom čase,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "predchádzať prelievaniu či podlievaniu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "získať jasný vizuálny indikátor (percento + smajlík),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zjednodušiť a zefektívniť starostlivosť o rastliny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot tak znižuje riziko poškodenia rastliny a pomáha udržiavať optimálne podmienky aj tým, ktorí starostlivosť občas zanedbajú."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot kombinuje 3D tlač s jednoduchou elektronikou a meraním vlhkosti pôdy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardvérové-prvky",
      children: "Hardvérové prvky:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D tlačený kvetináč so vstavaným zásobníkom vody"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "analógový senzor vlhkosti, ktorý meria množstvo vody v pôde"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arduino Nano pre spracovanie údajov zo senzora"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OLED displey na vizuálnu signalizáciu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-funguje-meranie",
      children: "Ako funguje meranie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzor vlhkosti pôdy detekuje obsah vody v pôde a odošle analógový signál do Arduino Nano."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arduino prepočíta nameranú hodnotu na zrozumiteľnú škálu 0-100%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OLED displej zobrazí úroveň vlhkosti spolu s indikátorom smajlíka:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Vlhkosť"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Emoji"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stav"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "> 60 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "😊 (štasný smajlík)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pôda má dostatok vody"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "30–60 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "😐(neutrálny smajlík)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pôda začína vysychať"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "< 30 %"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "😟 (smutný smajlík)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pôda je suchá, je čas rastlinu poliať"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot tak používateľovi poskytuje okamžitú spätnú väzbu bez nutnosti jeho odhadu alebo kontroly vlhkosti pôdy rukou."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Použitie je jednoduché aj pre úplnych začiatočníkov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zasaď rastlinu do kvetináča."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vlož senzor vlhkosti do pôdy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cez bočný otvor doplň vodu do vstavaného zásobníka."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sleduj OLED displej. Zobrazuje vlhkosť aj celkovú náladu rastliny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľ tak okamžite vie, či rastlina potrebuje zálievku."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zasaď rastlinu do kvetináča."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zasuň vlhkostný senzor do pôdy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Naplň zásobník vodou."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sleduj displej, a ak je to potrebné, rastlinu zalej."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot vznikol ako praktické riešenie skutočného problému, nakoľko jeden z členov tímu si opakovane nevedel ustrážiť správnu zálievku rastlín, čo viedlo k ich postupnému odumieraniu. Z tejto situácie vznikol preto nápad spojiť technológie, dizajn a moderné výrobné postupy, ako je 3D tlač, do jedného funkčného produktu, ktorý výrazne uľahčí starostlivosť o rastliny každému používateľovi."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výsledkom je inteligentný kvetináč, ktorý kombinuje 3D tlač, jednoduchú elektroniku a prehľadnú vizuálnu spätnú väzbu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Samotný 3D model bol navrhnutý tak, aby:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obsahoval oddelený zásobník vody integrovaný priamo v tele kvetináča,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "umožnil jednoduché a pohodlné dopĺňanie vody,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mal minimalistický dizajn vhodný do interiériu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poskytoval priestor pre integráciu elektronických komponentov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kľúčovým prvkom projektu je vlhkostný senzor, ktorý priebežne monitoruje stav pôdy. Takéto meranie nahrádza subjektívny ľudský odhad, objektívnymi a presnými údajmi. Používateľ tak získa istotu, že rastlina dostáva presne toľko vody, koľko potrebuje."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OLED displej poskytuje rýchlu a prehľadnú signalizáciu, zobrazuje percentuálnu vlhkosť aj jednoduchú vizualizáciu v podobe smajlíka. Vďaka tomu je SmartPot intuitívny aj pre ľudí, ktorí nemajú so starostlivosťou o rastliny žiadne skúsenosti."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt je navrhnutý tak, aby ho bolo možné v budúcnosti ďalej rozšíriť. Možné doplnky zahŕňajú automatickú zálievku, bezdrôtovú komunikáciu alebo napojenie na mobilnú aplikáciu, čím by sa SmartPot mohol posunúť na úroveň plnohodnotného smart home riešenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot tak predstavuje moderný, estetický a technicky premyslený spôsob, ako sprístupniť starostlivosť o rastliny úplne každému – spoľahlivo, jednoducho a bez starostí."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre 3D tlač samotného kvetináča je ideálny PETG, ktorý je odolný voči vlhkosti."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Na displeji je možné zobrazovať aj doplnkové informácie, ako je dátum alebo čas."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pri prototypovaní je potrebné zaobstarať breadboard a dostatočné množstvo jumper káblov, aby bolo možné jednoducho testovať a meniť zapojenie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot prináša používateľom praktické, jednduché a cenovo dostupné riešenie, ktoré pomáha udržať rastliny v ideálnych podmienkach. Automatizuje kontrolu vlhkosti, eliminuje intuitívne odhadovanie používateľom a znižuje riziko poškodenia rastliny nesprávnym zalievaním."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " Smart home, 3D tlač, IoT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " Projektové riešenie / Praktický návod"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " smart pot, moisture senzor, 3D print, self-watering, arduino, IoT plant care"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jednotlivé časti projektu sú popísané na nasledujúcom odkaze:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides",
        children: "⬅️ Projekt"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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