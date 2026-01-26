"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[20534],{

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

/***/ 90768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_03_solution_architecture_index_md_0f7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-006-sdlc-03-solution-architecture-index-md-0f7.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_03_solution_architecture_index_md_0f7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/index","title":"03 solution architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/03-solution-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.925075+00:00","fm_version_comment":"","guid":"a1b9d4f3-6750-4610-8736-7d4166435610","dao":"class_sthdf_dashboard","title":"03 solution architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"02 top level architecture","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/top-level-architecture/"},"next":{"title":"design","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/03-solution-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.925075+00:00',
	fm_version_comment: '',
	guid: 'a1b9d4f3-6750-4610-8736-7d4166435610',
	dao: 'class_sthdf_dashboard',
	title: '03 solution architecture',
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
const contentTitle = '03-Solution Architecture';

const assets = {

};



const toc = [{
  "value": "1. Kontext riešenia",
  "id": "1-kontext-riešenia",
  "level": 2
}, {
  "value": "2. Cieľ solution architektúry",
  "id": "2-cieľ-solution-architektúry",
  "level": 2
}, {
  "value": "3. Rozsah riešenia",
  "id": "3-rozsah-riešenia",
  "level": 2
}, {
  "value": "V riešení - in-scope",
  "id": "v-riešení---in-scope",
  "level": 3
}, {
  "value": "Mimo riešenia - out-of-scope",
  "id": "mimo-riešenia---out-of-scope",
  "level": 3
}, {
  "value": "4. Architektonické komponenty riešenia",
  "id": "4-architektonické-komponenty-riešenia",
  "level": 2
}, {
  "value": "4.1 CAD komponent - Onshape ako „source of truth“",
  "id": "41-cad-komponent---onshape-ako-source-of-truth",
  "level": 3
}, {
  "value": "4.2 Dokumentačný komponent (projektové artefakty)",
  "id": "42-dokumentačný-komponent-projektové-artefakty",
  "level": 3
}, {
  "value": "4.3 Exportný komponent - deliverables",
  "id": "43-exportný-komponent---deliverables",
  "level": 3
}, {
  "value": "4.4 Verifikačný komponent",
  "id": "44-verifikačný-komponent",
  "level": 3
}, {
  "value": "4.5 Zmena a verzovanie - change management",
  "id": "45-zmena-a-verzovanie---change-management",
  "level": 3
}, {
  "value": "5. Hlavný tok riešenia - end-to-end workflow",
  "id": "5-hlavný-tok-riešenia---end-to-end-workflow",
  "level": 2
}, {
  "value": "6. Architektonické rozhodnutia",
  "id": "6-architektonické-rozhodnutia",
  "level": 2
}, {
  "value": "ADR1: Onshape ako hlavná platforma",
  "id": "adr1-onshape-ako-hlavná-platforma",
  "level": 3
}, {
  "value": "ADR2: STEP ako hlavný 3D export",
  "id": "adr2-step-ako-hlavný-3d-export",
  "level": 3
}, {
  "value": "ADR3: Výkresy ako PDF z Drawings",
  "id": "adr3-výkresy-ako-pdf-z-drawings",
  "level": 3
}, {
  "value": "ADR4: Riešenie musí byť rozšíriteľné",
  "id": "adr4-riešenie-musí-byť-rozšíriteľné",
  "level": 3
}, {
  "value": "7. Rozšíriteľnosť: priestor pre ďalšie puzzle",
  "id": "7-rozšíriteľnosť-priestor-pre-ďalšie-puzzle",
  "level": 2
}, {
  "value": "8. Výstupy solution architektúry - deliverables",
  "id": "8-výstupy-solution-architektúry---deliverables",
  "level": 2
}, {
  "value": "9. Záver",
  "id": "9-záver",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "03-solution-architecture",
        children: "03-Solution Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kontext-riešenia",
      children: "1. Kontext riešenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V projekte ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Woodies"
      }), " je „riešenie“ chápané ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "digitálny systém"
      }), " pre návrh drevených hlavolamov – od analýzy a požiadaviek až po finálne CAD výstupy pripravené pre výrobu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solution architektúra sa nezameriava na výrobnú linku, logistiku alebo predaj, ale na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "návrhový proces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nástroje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dátové artefakty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrolné mechanizmy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "schopnosť riešenie rozširovať"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-cieľ-solution-architektúry",
      children: "2. Cieľ solution architektúry"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cieľom architektúry je definovať, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ako bude Woodies systematicky vytvárať a spravovať návrhy puzzle"
      }), ", aby boli:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konzistentné"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "parametrické"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overiteľné"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exportovateľné do univerzálnych formátov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripravené na ďalšie rozšírenie portfólia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-rozsah-riešenia",
      children: "3. Rozsah riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "v-riešení---in-scope",
      children: "V riešení - in-scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CAD modelovanie dielov a zostáv v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Onshape"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["generovanie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Drawings"
        }), " - 2D výkresy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["exporty: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP"
        }), " , ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF"
        }), " - výkresy"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "základná verifikácia - kontrola parametrov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "verzovanie výstupov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mimo-riešenia---out-of-scope",
      children: "Mimo riešenia - out-of-scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reálna CNC výroba, CAM toolpaths, výber nástrojov a materiálu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fyzické testovanie, brúsenie, povrchové úpravy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "e-shop / platobná brána / marketingová automatizácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-architektonické-komponenty-riešenia",
      children: "4. Architektonické komponenty riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-cad-komponent---onshape-ako-source-of-truth",
      children: "4.1 CAD komponent - Onshape ako „source of truth“"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Part Studios"
        }), ": návrh jednotlivých dielov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assemblies"
        }), ": virtuálne skladanie hlavolamov, kontrola logiky montáže"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drawings"
        }), ": výkresy dielov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-dokumentačný-komponent-projektové-artefakty",
      children: "4.2 Dokumentačný komponent (projektové artefakty)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "analysis.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "design.md"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "implementation.md"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zoznam dielov, počty, poznámky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Úloha:"
      }), " preniesť návrh do zrozumiteľnej formy pre hodnotenie aj hypotetické použitie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-exportný-komponent---deliverables",
      children: "4.3 Exportný komponent - deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP"
        }), ": neutrálny 3D formát kompatibilný s CAD/CAM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF"
        }), ": výkresy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DXF"
        }), ": profily pre 2D rezanie napr. tangram"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Úloha:"
      }), " vytvoriť „release balík“, ktorý je použiteľný mimo Onshape."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-verifikačný-komponent",
      children: "4.4 Verifikačný komponent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bez fyzického prototypovania sa spoliehame na CAD a procesnú kontrolu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "interference/collision kontrola v assembly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrola parametričnosti"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrola konzistencie dokumentácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Úloha:"
      }), " minimalizovať riziko, že návrh bude v praxi nefunkčný alebo nevyrobiteľný."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-zmena-a-verzovanie---change-management",
      children: "4.5 Zmena a verzovanie - change management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jasné pomenovanie dielov a revízií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„release“ balíky pre každú verziu puzzle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Úloha:"
      }), " umožniť bezpečné iterácie návrhu (najmä pri zmenách tolerancií a geometrie)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-hlavný-tok-riešenia---end-to-end-workflow",
      children: "5. Hlavný tok riešenia - end-to-end workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input"
        }), ": doménová analýza a výber puzzle (burr, cube, tangram)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Požiadavky"
        }), ": rozmery, počet dielov, cieľová obtiažnosť, CNC obmedzenia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAD návrh"
        }), ": diely v Part Studios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zostava"
        }), ": assemblies a kontrola skladania"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výkresy"
        }), ": drawings pre diely/zostavy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verifikácia"
        }), ": kontrolné kroky pred exportom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Export"
        }), ": STEP + PDF (+ DXF podľa typu)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Release balík"
        }), ": dokumentácia, BOM, montážny postup, verzia"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-architektonické-rozhodnutia",
      children: "6. Architektonické rozhodnutia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adr1-onshape-ako-hlavná-platforma",
      children: "ADR1: Onshape ako hlavná platforma"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Onshape sme zvolili kvôli jednoduchému zdieľaniu, dostupnosti a podpore kompletného CAD procesu - modely, zostavy, výkresy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adr2-step-ako-hlavný-3d-export",
      children: "ADR2: STEP ako hlavný 3D export"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "STEP je najvhodnejší neutrálny formát pre ďalšie spracovanie - CNC/CAM alebo kontrola v inom CAD."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adr3-výkresy-ako-pdf-z-drawings",
      children: "ADR3: Výkresy ako PDF z Drawings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PDF výkresy zvyšujú dôveryhodnosť návrhu a umožňujú jednoznačne komunikovať rozmery a tolerancie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "adr4-riešenie-musí-byť-rozšíriteľné",
      children: "ADR4: Riešenie musí byť rozšíriteľné"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architektúra je navrhnutá tak, aby sa dali pridávať ďalšie puzzle bez zmeny procesu – iba sa doplní nový „puzzle balík“ - CAD + docs + exporty."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-rozšíriteľnosť-priestor-pre-ďalšie-puzzle",
      children: "7. Rozšíriteľnosť: priestor pre ďalšie puzzle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architektúra počíta s doplnením napríklad:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Puzzle box"
        }), ": drážky, posuvné mechanizmy, vyššie nároky na tolerancie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snake cube"
        }), ": modulárne diely a skladacia sekvencia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ring and string"
        }), ": kombinácia drevo + šnúra"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gear puzzle"
        }), ": vyššie požiadavky na presnosť a kompatibilitu zubov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každé nové puzzle by malo mať:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vlastný CAD set - parts + assembly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "drawings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exporty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-výstupy-solution-architektúry---deliverables",
      children: "8. Výstupy solution architektúry - deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre hodnotenie projektu by riešenie malo obsahovať minimálne:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Onshape návrhy: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "knot burr"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cube puzzle"
        }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tangram"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výkresy PDF pre vybrané diely a zostavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exporty STEP - diely + zostavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentáciu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-záver",
      children: "9. Záver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solution architektúra Woodies definuje „ako“ tvoríme digitálne návrhy drevených hlavolamov tak, aby boli konzistentné, overiteľné a pripravené pre CNC. Architektúra stojí na Onshape ako zdroji pravdy, na štandardizovaných výstupoch STEP, PDF a na krokoch, ktoré nahrádzajú fyzické prototypovanie. Zároveň je navrhnutá tak, aby sa portfólio puzzle dalo priebežne rozširovať bez zmeny základného procesu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/design",
          children: "Solution design"
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