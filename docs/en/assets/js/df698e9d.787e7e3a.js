"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[37832],{

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

/***/ 46236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/business_process-1104806cc4ce93136a91d0e3518baf61.png");

/***/ }),

/***/ 60099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_028_sdlc_01_business_notes_md_df6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-028-sdlc-01-business-notes-md-df6.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_028_sdlc_01_business_notes_md_df6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/business/notes","title":"notes","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/01-business/notes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/01-business","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/business/notes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/business/notes","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.034433+00:00","fm_version_comment":"","guid":"5cc97029-12fb-4a99-9b95-628cbcdbef22","dao":"class_sthdf_dashboard","title":"notes","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"01 business","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/business/"},"next":{"title":"02 top level architecture","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/top-level-architecture/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/01-business/notes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.034433+00:00',
	fm_version_comment: '',
	guid: '5cc97029-12fb-4a99-9b95-628cbcdbef22',
	dao: 'class_sthdf_dashboard',
	title: 'notes',
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
const contentTitle = 'BUSINESS DOCUMENTATION';

const assets = {

};



const toc = [{
  "value": "1. Business Case",
  "id": "1-business-case",
  "level": 2
}, {
  "value": "2. Motivácia a prínos projektu",
  "id": "2-motivácia-a-prínos-projektu",
  "level": 2
}, {
  "value": "3. Market &amp; Competitor Overview",
  "id": "3-market--competitor-overview",
  "level": 2
}, {
  "value": "4. Stakeholder Analysis",
  "id": "4-stakeholder-analysis",
  "level": 2
}, {
  "value": "6. Product Vision Statement",
  "id": "6-product-vision-statement",
  "level": 2
}, {
  "value": "7. High-Level Business Requirements",
  "id": "7-high-level-business-requirements",
  "level": 2
}, {
  "value": "8. Success Metrics / KPIs",
  "id": "8-success-metrics--kpis",
  "level": 2
}, {
  "value": "9. Risks &amp; Constraints",
  "id": "9-risks--constraints",
  "level": 2
}, {
  "value": "Riziká",
  "id": "riziká",
  "level": 3
}, {
  "value": "Obmedzenia",
  "id": "obmedzenia",
  "level": 3
}, {
  "value": "10. Out-of-Scope",
  "id": "10-out-of-scope",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "PRJ028 / 01-business / notes.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "business-documentation",
        children: "BUSINESS DOCUMENTATION"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-business-case",
      children: "1. Business Case"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Automatické navíjanie bandáží v mnohých oblastiach – šport, medicína, fyzioterapia či výroba. Ručné navíjanie je časovo náročné, nepraktické. Cieľom projektu je vytvoriť kompaktné a spoľahlivé zariadenie, ktoré proces výrazne urýchli a zjednoduší."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(46236)/* ["default"] */ .A) + "",
        width: "1513",
        height: "432"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-motivácia-a-prínos-projektu",
      children: "2. Motivácia a prínos projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt prináša používateľom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "úsporu času,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pohodlné používanie po tréningu alebo počas práce,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "možnosť komercializácie produktu v budúcnosti."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-market--competitor-overview",
      children: "3. Market & Competitor Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Športové kluby, fyzioterapeuti, medicínske zariadenia aj logistické prevádzky môžu z tohto produktu priamo profitovať. Automatický navijak im ušetrí čas, zjednoduší prácu a pomôže udržiavať poriadok vo vybavení. Pri väčších objemoch používaných bandáží výrazne znižuje manuálnu záťaž, zrýchľuje prípravu aj upratovanie, a zároveň zabezpečuje rovnomerné, profesionálne navinutie každého kusu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aktuálne sa na trhu nachádzajú prevažne jednoduché ručné navíjacie mechanizmy, ktoré sú pomalé a vyžadujú fyzickú námahu. Automatické alebo motorické riešenia sú veľmi obmedzené alebo úplne chýbajú, čo vytvára jasnú trhovú príležitosť pre cenovo dostupný a praktický elektrický navijak."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-stakeholder-analysis",
      children: "4. Stakeholder Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stakeholder"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Očakávania"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Autori projektu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dokončenie prototypu, technická realizácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Športovci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rýchle a spoľahlivé navíjanie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tréneri a fyzioterapeuti"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End-user"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Úspora času, organizácia vybavenia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Servis/výroba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jednoduchá údržba, lacné diely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Potenciálni investori"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Business"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízke náklady, trhový potenciál"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-product-vision-statement",
      children: "6. Product Vision Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "„Urobiť navíjanie bandáží rýchlym, bezproblémovým a konzistentným pomocou kompaktného elektrického zariadenia.”"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-high-level-business-requirements",
      children: "7. High-Level Business Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie musí navinúť bandáž automaticky."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produkt musí byť prenosný a ľahký."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájanie pomocou batérie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jednoduché ovládanie (1–2 tlačidlá)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bezpečný mechanizmus pre prsty a textílie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-success-metrics--kpis",
      children: "8. Success Metrics / KPIs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čas navíjania < 30 sekúnd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výdrž batérie min. 20 navinutí"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poruchovosť max. 2 %"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spokojnosť používateľov > 8/10"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-risks--constraints",
      children: "9. Risks & Constraints"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riziká",
      children: "Riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rôzne hrúbky bandáží môžu komplikovať proces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mechanické opotrebovanie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potreba bezpečnostných prvkov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "obmedzenia",
      children: "Obmedzenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obmedzený rozpočet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prototypové materiály a 3D tlač"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limitované možnosti výroby"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-out-of-scope",
      children: "10. Out-of-Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mobilná aplikácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatická detekcia typu bandáže"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inteligentné senzory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hromadná výroba"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pokročilé UI/UX alebo displeje"
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