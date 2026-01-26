"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[51004],{

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

/***/ 95922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_04_analysis_index_md_587_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-006-sdlc-04-analysis-index-md-587.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_04_analysis_index_md_587_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/analysis/index","title":"04 analysis","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/04-analysis/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/04-analysis","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/analysis/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.926303+00:00","fm_version_comment":"","guid":"6def0c10-3e00-4567-8a3d-96d6f56d83f1","dao":"class_sthdf_dashboard","title":"04 analysis","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"design","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/design"},"next":{"title":"backlog","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/analysis/backlog"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/04-analysis/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.926303+00:00',
	fm_version_comment: '',
	guid: '6def0c10-3e00-4567-8a3d-96d6f56d83f1',
	dao: 'class_sthdf_dashboard',
	title: '04 analysis',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-28 16:54',
	modified: '2025-11-28 16:54',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = '04-Analysis';

const assets = {

};



const toc = [{
  "value": "1.1 Prečo drevo ?",
  "id": "11-prečo-drevo-",
  "level": 2
}, {
  "value": "2.1  Sekvenčné objavovanie - Sequential Discovery Puzzles Sekvenčné objavovanie",
  "id": "21--sekvenčné-objavovanie---sequential-discovery-puzzles-sekvenčné-objavovanie",
  "level": 2
}, {
  "value": "2.2 Prelínajúce sa - Interlocking Puzzles",
  "id": "22-prelínajúce-sa---interlocking-puzzles",
  "level": 2
}, {
  "value": "2.3  Disentanglement puzzles (uvoľňovacie hlavolamy)",
  "id": "23--disentanglement-puzzles-uvoľňovacie-hlavolamy",
  "level": 2
}, {
  "value": "2.4 Assembly puzzles (skladačky)",
  "id": "24-assembly-puzzles-skladačky",
  "level": 2
}, {
  "value": "3.1 TOP 10 hlavolamou",
  "id": "31-top-10-hlavolamou",
  "level": 2
}, {
  "value": "3.2 Trendy",
  "id": "32-trendy",
  "level": 2
}, {
  "value": "Hybridné Digitálno-fyzické",
  "id": "hybridné-digitálno-fyzické",
  "level": 4
}, {
  "value": "Dizajn s prihľadnutím na ekológiu",
  "id": "dizajn-s-prihľadnutím-na-ekológiu",
  "level": 4
}, {
  "value": "Personalizácia",
  "id": "personalizácia",
  "level": 4
}, {
  "value": "Escape Room Props",
  "id": "escape-room-props",
  "level": 4
}, {
  "value": "ZDROJE",
  "id": "zdroje",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "04-analysis",
        children: "04-Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "1-úvod",
      children: "1. Úvod"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drevené hlavolamy majú dlhú históriu siahajúcu stáročia späť. Od tradičných čínskych puzzle zamkov (Chinese puzzle locks) cez európske interlocking puzzles až po moderné 3D burr puzzles. I v ére digitalizácie sa stále tešia obľube, či už ako štýlový doplnok kancelárie alebo ako spôsob potrénovania logického myslenia, pri ktorom sa človek môže odpojiť od počítača."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-prečo-drevo-",
      children: "1.1 Prečo drevo ?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výhody dreva ako materiálu"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Výhoda"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Príjemný dotyk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Teplé, prirodzené, unikátne vzory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Obnoviteľný zdroj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Biodegradovateľný"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Krásna textura"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Prírodná kresba, možnosť moridlovania"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Dlhá životnosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Pri správnej úprave vydrží desiatky rokov"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Opraviteľnosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Dá sa brúsiť, opravovať"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nevýhody dreva v spojení s návrhom riešenia"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Problém"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Riešenie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Vlhkosť - drevo \"pracuje\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Správna tolerancia (±0.2-0.5mm), stabilizované drevo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Variabilita materiálu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Výber kvalitného dreva, homogénne časti bez sukov"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Náročnejšia výroba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "CNC automatizácia, parametrický dizajn pre opakovateľnosť"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "2-rozbor-druhov-hlavolamov",
      children: "2. Rozbor druhov hlavolamov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21--sekvenčné-objavovanie---sequential-discovery-puzzles-sekvenčné-objavovanie",
      children: "2.1  Sekvenčné objavovanie - Sequential Discovery Puzzles Sekvenčné objavovanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Princíp:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hlavolamy založené na postupnom otváraní jednotlivých častí. Každá správna séria krokov odhalí ďalšíu časť mechanizmu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Príklady:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a.) Puzzle Box ako Japonský Himitsu-Bako [1]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4-54 krokov na otvorenie. Skladá sa z pohyblivých panelov v presnej sekvencii.\nTradične z Japonska, konrkétne z Hakone. Náročnosťou sa pohybuje od stredne náročných po ťažké."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b.) Trick Lock Boxes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podobné puzzle boxom, avšak sú postavené na množstve skrytých západok, prípadne magnetov.Používané historicky na ukladanie cenností. Pričom ich obtiažnosť sa líši."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Oba tieto typy hlavolamou sú vhodné pre výrobu s použitím CNC, keďže vyžadujú presné tolerancie. Zároveň to umožní opakovateľnú výrobu, za pomoci jedného návrhu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-prelínajúce-sa---interlocking-puzzles",
      children: "2.2 Prelínajúce sa - Interlocking Puzzles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typ logických hračiek, ktoré sa skladajú z viacerých častí, pevne do seba zapadajúcich tak, že vytvárajú jeden celok. Typickým príkladom sú drevené alebo kovové 3D hlavolamy, ktoré sa musia rozobrať a následne znovu zložiť do pôvodného tvaru."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom týchto puzzle je pochopiť vzájomné vzťahy medzi jednotlivými dielmi – často je možné ich rozobrať len špecifickým postupom alebo v určitom poradí. Patria medzi najstaršie druhy mechanických hlavolamov a rozvíjajú priestorové myslenie, trpezlivosť a jemnú motoriku. Niektoré moderné verzie sa vyrábajú z kovu, plastu či pomocou 3D tlače a sú obľúbené medzi zberateľmi aj milovníkmi logických hier."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Príklady:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a.) Burr puzzles [2]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Klasické prelamovacie hlavolamy zložené z viacerých (zvyčajne šiestich až dvanástich) drevenných prútov, ktoré sú do seba vzájomne prepletené tak, že vytvárajú jeden kompaktný celok. Najznámejším variantom je „Six-Piece Burr“, ktorý vznikol v 18. storočí a dodnes patrí medzi najpopulárnejšie mechanické skladačky. Úlohou riešiteľa je rozobrať a následne opäť zložiť hlavolam, pričom niektoré verzie majú tisíce možných variácií a vyžadujú vysokú dávku trpezlivosti a priestorového uvažovania. Náročnosť týchto puzzle sa pohybuje od strednej až po veľmi ťažkú."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b.) 3D assembly puzzle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Predstavujú trojrozmerné skladačky, ktoré sa skladájú z nepravidelných dielikov tvoriacich určitý tvar – najčastejšie kocku alebo iný geometrický objekt. Typickým príkladom je Soma Cube, ktorú v roku 1933 vymyslel dánsky vedec Piet Hein. Hlavolam sa skladá zo siedmich dielikov, z ktorých treba poskladať kocku s rozmermi 3×3×3. Okrem zábavnej stránky majú tieto puzzle aj vzdelávací rozmer, pretože rozvíjajú priestorovú predstavivosť a logické myslenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "c.) Pyramid puzzles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trojrozmerné hlavolamy v tvare pyramídy, teda s tetrahedrálnou štruktúrou. Hoci sú menej rozšírené než klasické kockové hlavolamy, zaujmú svojím netradičným tvarom a vizuálnym efektom. Úlohou býva správne zostaviť alebo rozobrať jednotlivé diely pyramídy, čo si vyžaduje precízne uvažovanie o priestorových vzťahoch medzi dielikmi."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23--disentanglement-puzzles-uvoľňovacie-hlavolamy",
      children: "2.3  Disentanglement puzzles (uvoľňovacie hlavolamy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Hlavolamy, kde je cieľom ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "uvoľniť alebo oddeliť"
      }), " časť bez násilia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môžu byť z kombinácie dreva a šnúrky alebo kovu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Príklad: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Lanové alebo krúžkové hlavolamy"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a.) Horseshoe puzzles (podkovové hlavolamy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pozostávajú z dvoch podkôv spojených reťazou alebo krúžkom. Úlohou je uvoľniť kovový (alebo drevený) krúžok z medzi podkôv, čo vyžaduje presné manipulovanie a pochopenie geometrie pohybu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b.) Ring and string puzzles"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kombinujú drevené časti, šnúrky a krúžky. Cieľom býva dostať krúžok cez spleť uzlov, otvorov a slučiek. Hoci vyzerajú jednoducho, často ide o veľmi záludné logické úlohy, ktoré testujú trpezlivosť a priestorovú predstavivosť."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "c.) Cast puzzles (liate alebo kovové hlavolamy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Majú aj drevenné varianty, pri ktorých je potrebné oddeliť prepojené časti alebo ich znovu spojiť. Základom je pochopiť mechanizmus spojenia – niekedy ide o skrutkovanie, posúvanie alebo pretáčanie dielikov v správnom poradí."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-assembly-puzzles-skladačky",
      children: "2.4 Assembly puzzles (skladačky)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Úlohou je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zostaviť jednotlivé kúsky"
      }), " do určitého tvaru alebo obrázka."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Príklad: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tangram"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pentomino"
        }), ", alebo geometrické skladačky"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozvíjajú priestorovú predstavivosť a logické myslenie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "a.) Tangram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Staroveká čínska geometrická skladačka pozostávajúca zo siedmich plochých dielikov (tzv. tans): piatich trojuholníkov rôznych veľkostí, jedného štvorca a jedného rovnobežníka. Cieľom je z týchto dielikov vytvoriť rôzne tvary – zvieratá, postavy, písmená či abstraktné obrazy – bez toho, aby sa dieliky prekrývali. Tangram rozvíja predstavivosť, logické myslenie a schopnosť vnímať tvary a proporcie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "b.) Pentomino"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hlavolam tvorený dvanástimi dielikmi, pričom každý dielik pozostáva z piatich štvorcov spojených hranou v rôznych konfiguráciách. Z týchto dielov sa dajú skladať rôzne obdĺžniky (napr. 6×10, 5×12) alebo iné tvary podľa zadania. Hlavolam sa preslávil aj vo výučbe matematiky, pretože rozvíja kombinatorické myslenie a priestorovú orientáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "3-populárne-hlavolami",
      children: "3 Populárne hlavolami"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-top-10-hlavolamou",
      children: "3.1 TOP 10 hlavolamou"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na získanie top 10 najpopulárnejších drevenných hlavolamou sme použili stránky Etsy a Amazon, kde sme si vyfiltrovali jednotlivé údaje."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Rank"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Produkt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Priemerná cena"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Predajnosť"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Náročnosť výroby"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Burr Puzzle (6-piece)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€18-35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tower of Hanoi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€15-40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Nízka-Stredná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Soma Cube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€20-45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná-Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Puzzle Box"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€30-150"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Vysoká"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Tangram Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€12-25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Nízka"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Snake Cube"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€15-30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Pentominoes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€18-35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Nízka-Stredná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Educational Blocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€25-60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Vysoká"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Nízka"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Gear Puzzles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€20-50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná-Vysoká"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sliding Block (Klotski)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "€15-35"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: "Stredná"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cenové rozpätie je veľmi široké, keďže produkty s vyššou komplexitou (3D mechanické, väčšie skladačky, prémiové značky) stoja výrazne viac. Cenové údaje sú skôr orientačné na zákalde momentálne dostupných údajov, tie sa môžu sa líšiť podľa predajcu, krajiny, dopravy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-trendy",
      children: "3.2 Trendy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "hybridné-digitálno-fyzické",
      children: "Hybridné Digitálno-fyzické"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QR kódy na puzzle vedúce k online výzvam"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AR (Augmented Reality) hints cez aplikáciu"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Príklad: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Puzzle with AR instructions\""
        }), " [3]"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dizajn-s-prihľadnutím-na-ekológiu",
      children: "Dizajn s prihľadnutím na ekológiu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "FSC certifikované drevo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimal waste dizajn"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Balenie z recyklovaného materiálu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "personalizácia",
      children: "Personalizácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Laser-gravírované mená, logá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom difficulty levels"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "escape-room-props",
      children: "Escape Room Props"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Puzzle komponenty pre escape rooms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B2B trh - predaj prevádzkovateľom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vysoké marže"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zdroje",
      children: "ZDROJE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[1] Hodson, D. (2010). The Secret opening Japanese Puzzle Box. Self-published.\nURL: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.karakuri.gr.jp/en/",
        children: "https://www.karakuri.gr.jp/en/"
      }), " (Karakuri Creation Group)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[2]Cutler, B. (1978). \"The Six-Piece Burr.\" Journal of Recreational Mathematics, 10(4), 241-250.\nStewart, C. (1999). Puzzle Craft. Self-published.\nURL: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.johnrausch.com/PuzzlingWorld/chap03.html",
        children: "http://www.johnrausch.com/PuzzlingWorld/chap03.html"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["[3]\"SCRY Puzzle\" (2024) - AR-enabled wooden puzzle\nURL: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.kickstarter.com/discover/categories/puzzles",
        children: "https://www.kickstarter.com/discover/categories/puzzles"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/analysis/backlog",
          children: "Backlog a analýzy"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/",
        children: "⬅️ Projekt"
      })]
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