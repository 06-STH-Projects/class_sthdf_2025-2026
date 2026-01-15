"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[31218],{

/***/ 958:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/puzdro1-7c3edca0a9b294fcf79e6a6a9de871cb.jpg");

/***/ }),

/***/ 3549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hardver2-c2420836034b2be9614eda9d21ef2fd7.jpg");

/***/ }),

/***/ 26949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zakladova_doska-26de84be6850f6812e0b888999580c6e.png");

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

/***/ 29111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/android_tv-d8e9ed158af9d2b8a65b2ae5b3d1fb9b.jpg");

/***/ }),

/***/ 29185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final-be78c94d3cd4bf8f5334c47e65b100c2.jpg");

/***/ }),

/***/ 35283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dualboot-20c06599b968fc1fa7484f7b92ba39cc.jpg");

/***/ }),

/***/ 38438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zdroj-89239b57c24745742a510f937b125939.png");

/***/ }),

/***/ 46165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_021_presentation_slides_md_4ea_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-021-presentation-slides-md-4ea.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_021_presentation_slides_md_4ea_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.039028+00:00","fm_version_comment":"","guid":"281570ba-e351-4ee3-82f6-97e8f45d7ff5","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ021","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.039028+00:00',
	fm_version_comment: '',
	guid: '281570ba-e351-4ee3-82f6-97e8f45d7ff5',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
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
const contentTitle = 'PRJ021 — Presentation';

const assets = {

};



const toc = [{
  "value": "Bc. Oliver Hofer",
  "id": "bc-oliver-hofer",
  "level": 2
}, {
  "value": "Bc. Oleksandr Lypovetskyi",
  "id": "bc-oleksandr-lypovetskyi",
  "level": 2
}, {
  "value": "Stručný popis projektu:",
  "id": "stručný-popis-projektu",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Obsah",
  "id": "obsah",
  "level": 2
}, {
  "value": "01-Business",
  "id": "01-business",
  "level": 2
}, {
  "value": "Business Context",
  "id": "business-context",
  "level": 3
}, {
  "value": "Problem Statement",
  "id": "problem-statement",
  "level": 3
}, {
  "value": "Project Goal",
  "id": "project-goal",
  "level": 3
}, {
  "value": "Target Users",
  "id": "target-users",
  "level": 3
}, {
  "value": "Value Proposition",
  "id": "value-proposition",
  "level": 3
}, {
  "value": "Constraints",
  "id": "constraints",
  "level": 3
}, {
  "value": "02-Top Level Architecture",
  "id": "02-top-level-architecture",
  "level": 2
}, {
  "value": "System Description",
  "id": "system-description",
  "level": 3
}, {
  "value": "Main Components",
  "id": "main-components",
  "level": 3
}, {
  "value": "External Interfaces",
  "id": "external-interfaces",
  "level": 3
}, {
  "value": "User Interaction",
  "id": "user-interaction",
  "level": 3
}, {
  "value": "03-Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "Hardware Design",
  "id": "hardware-design",
  "level": 3
}, {
  "value": "Case Construction",
  "id": "case-construction",
  "level": 3
}, {
  "value": "Cooling Concept",
  "id": "cooling-concept",
  "level": 3
}, {
  "value": "Software Architecture",
  "id": "software-architecture",
  "level": 3
}, {
  "value": "Design Decisions",
  "id": "design-decisions",
  "level": 3
}, {
  "value": "04-Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "Problem Analysis",
  "id": "problem-analysis",
  "level": 3
}, {
  "value": "Functional Requirements",
  "id": "functional-requirements",
  "level": 3
}, {
  "value": "Non-Functional Requirements",
  "id": "non-functional-requirements",
  "level": 3
}, {
  "value": "Hardware Constraints",
  "id": "hardware-constraints",
  "level": 3
}, {
  "value": "Software Constraints",
  "id": "software-constraints",
  "level": 3
}, {
  "value": "05-Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "Overall Design Concept",
  "id": "overall-design-concept",
  "level": 3
}, {
  "value": "Hardware Design",
  "id": "hardware-design-1",
  "level": 3
}, {
  "value": "Case Design",
  "id": "case-design",
  "level": 3
}, {
  "value": "Cooling Design",
  "id": "cooling-design",
  "level": 3
}, {
  "value": "Software Design",
  "id": "software-design",
  "level": 3
}, {
  "value": "Design Tools",
  "id": "design-tools",
  "level": 3
}, {
  "value": "06-Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "Hardware Implementation",
  "id": "hardware-implementation",
  "level": 3
}, {
  "value": "Software Implementation",
  "id": "software-implementation",
  "level": 3
}, {
  "value": "Current State",
  "id": "current-state",
  "level": 3
}, {
  "value": "07-Testing &amp; Verification",
  "id": "07-testing--verification",
  "level": 2
}, {
  "value": "Cieľ testovania",
  "id": "cieľ-testovania",
  "level": 3
}, {
  "value": "Testovacie prostredie",
  "id": "testovacie-prostredie",
  "level": 3
}, {
  "value": "Scenáre testovania",
  "id": "scenáre-testovania",
  "level": 3
}, {
  "value": "Testované aplikácie",
  "id": "testované-aplikácie",
  "level": 3
}, {
  "value": "Výsledky testovania",
  "id": "výsledky-testovania",
  "level": 3
}, {
  "value": "Záver testovania",
  "id": "záver-testovania",
  "level": 3
}, {
  "value": "08-Operation",
  "id": "08-operation",
  "level": 2
}, {
  "value": "System Startup",
  "id": "system-startup",
  "level": 3
}, {
  "value": "Normal Operation",
  "id": "normal-operation",
  "level": 3
}, {
  "value": "Maintenance",
  "id": "maintenance",
  "level": 3
}, {
  "value": "Safety Considerations",
  "id": "safety-considerations",
  "level": 3
}, {
  "value": "09-Change Management",
  "id": "09-change-management",
  "level": 2
}, {
  "value": "Pôvodný návrh",
  "id": "pôvodný-návrh",
  "level": 3
}, {
  "value": "Identifikovaná zmena (Change Request)",
  "id": "identifikovaná-zmena-change-request",
  "level": 3
}, {
  "value": "Analýza dopadu (Impact Analysis)",
  "id": "analýza-dopadu-impact-analysis",
  "level": 3
}, {
  "value": "Záznam zmeny (Change log)",
  "id": "záznam-zmeny-change-log",
  "level": 3
}, {
  "value": "Potenciálne zlepšenia (Future Improvements)",
  "id": "potenciálne-zlepšenia-future-improvements",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj021--presentation",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "PRJ021 — Presentation"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "2025-prj-021-st_021-st_021-smart-tv-box",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-021-ST_021-ST_021-Smart TV Box"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bc-oliver-hofer",
      children: "Bc. Oliver Hofer"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bc-oleksandr-lypovetskyi",
      children: "Bc. Oleksandr Lypovetskyi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Final",
        src: (__webpack_require__(29185)/* ["default"] */ .A) + "",
        width: "3807",
        height: "2855"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "stručný-popis-projektu",
      children: "Stručný popis projektu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt Smart TV Box sa zameriava na návrh a realizáciu externého zariadenia,\nktoré rozširuje funkcionalitu starších televízorov o Smart TV vlastnosti\nprostredníctvom operačného systému Android TV."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-021-ST_021-ST_021-Smart TV Box"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je navrhnúť a implementovať kompaktný Smart TV Box založený\nna PC hardvéri, ktorý umožní používateľom starších televízorov využívať\nmoderné multimediálne služby.\nRiešenie kombinuje vlastnú hardvérovú zostavu, drevené púzdro navrhnuté v\nnástroji Fusion 360 a podporu operačných systémov Android TV a Windows\nprostredníctvom dualboot konfigurácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/business/",
          children: "01-Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/top-level-architecture/",
          children: "02-Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/solution-architecture/",
          children: "03-Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/analysis/",
          children: "04-Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/design/",
          children: "05-Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/implementation/",
          children: "06-Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/testing-verification/",
          children: "07-Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/operation/",
          children: "08-Operation"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/sdlc/Change-Management/",
          children: "09-Change Management"
        }), "\n--- obsah ---"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01-Business"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "business-context",
      children: "Business Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-statement",
      children: "Problem Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mnoho používateľov stále vlastní staršie televízory, ktoré nedisponujú Smart TV funkcionalitou.\nTieto zariadenia síce poskytujú kvalitný obraz, avšak neumožňujú používanie moderných aplikácií\nako YouTube, Netflix alebo streamovacie služby bez dodatočného hardvéru."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-goal",
      children: "Project Goal"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu Smart TV Box je vytvoriť zariadenie, ktoré umožní rozšíriť funkcionalitu\nbežného televízora o Smart TV vlastnosti pomocou externého zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "target-users",
      children: "Target Users"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "používatelia starších televízorov bez Smart TV podpory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "technicky zdatní používatelia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "domácnosti hľadajúce lacnejšiu alternatívu ku komerčným riešeniam"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "value-proposition",
      children: "Value Proposition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt ponúka:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lacnú alternatívu ku komerčným Smart TV Boxom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "možnosť využitia existujúceho hardvéru,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "flexibilné a rozšíriteľné riešenie založené na Android platforme."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constraints",
      children: "Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obmedzený výkon použitých komponentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DIY charakter riešenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "neoficiálna podpora operačného systému Android TV."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02-Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-description",
      children: "System Description"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Smart TV Box je externé zariadenie, ktoré sa pripája k televízoru prostredníctvom HDMI rozhrania\na poskytuje používateľovi rozhranie operačného systému Android TV alebo jeho funkčného ekvivalentu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "main-components",
      children: "Main Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém pozostáva z nasledujúcich hlavných častí:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "hardvérová jednotka (základná doska, SSD, napájanie),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "operačný systém Android,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "používateľské vstupné zariadenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zobrazovacie zariadenie (televízor)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "external-interfaces",
      children: "External Interfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HDMI výstup pre obraz a zvuk,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB porty pre vstupné zariadenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ethernet rozhranie pre pripojenie na internet,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "napájací vstup."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "user-interaction",
      children: "User Interaction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľ interaguje so systémom prostredníctvom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "diaľkového ovládača,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "klávesnice alebo myši,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "grafického používateľského rozhrania Android TV."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03-Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardware-design",
      children: "Hardware Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie je postavené na Mini-ITX základovej doske s integrovaným procesorom a operačnou pamäťou.\nAko úložisko slúži 2.5\" SSD disk, na ktorom je nainštalovaný operačný systém a používateľské dáta.\nNapájanie zabezpečuje samostatný elektrický zdroj."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-construction",
      children: "Case Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardvérové komponenty sú umiestnené do dreveného púzdra vyrobeného z preglejky.\nPúzdro je navrhnuté ako viacvrstvová konštrukcia s medzerami medzi jednotlivými vrstvami,\nčo umožňuje prirodzenú cirkuláciu vzduchu a zlepšuje odvádzanie tepla."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cooling-concept",
      children: "Cooling Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Základná doska disponuje pasívnym chladením procesora.\nKonštrukcia púzdra je navrhnutá ako viacvrstvová s medzerami medzi jednotlivými drevenými úrovňami,\nčo podporuje prirodzenú cirkuláciu vzduchu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Odvod teplého vzduchu z vnútra púzdra je zabezpečený napájacím zdrojom,\nktorý je umiestnený v skrinke a aktívne odvádza teplý vzduch smerom von zo zariadenia.\nTýmto spôsobom je zabezpečený základný airflow bez potreby dodatočných chladiacich ventilátorov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software-architecture",
      children: "Software Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na zariadení je nainštalovaný operačný systém Android TV alebo Android s TV rozhraním,\nktorý je spúšťaný priamo z SSD disku a slúži ako primárne používateľské prostredie\npre multimediálne využitie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie zároveň podporuje operačný systém Windows,\nktorý je nainštalovaný na rovnakom SSD disku a je dostupný prostredníctvom dualboot riešenia.\nPoužívateľ si pri štarte zariadenia môže zvoliť, ktorý operačný systém bude spustený."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-decisions",
      children: "Design Decisions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použitie dreveného púzdra z dôvodu jednoduchosti výroby a estetiky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "využitie existujúcich PC komponentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dôraz na nízku spotrebu energie a tichú prevádzku."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04-Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-analysis",
      children: "Problem Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je vytvoriť externé zariadenie, ktoré rozšíri funkcionalitu\nbežného televízora bez Smart TV podpory o moderné multimediálne služby.\nRiešenie musí byť cenovo dostupné, kompaktné a vhodné na domáce použitie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "functional-requirements",
      children: "Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zariadenie musí umožniť pripojenie k televízoru prostredníctvom HDMI,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systém musí poskytovať používateľské rozhranie Android TV alebo jeho funkčný ekvivalent,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zariadenie musí podporovať prehrávanie multimediálneho obsahu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "systém musí umožniť spustenie operačného systému Windows pomocou dualboot riešenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "používateľ musí mať prístup k vstupno-výstupným rozhraniam základovej dosky."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "non-functional-requirements",
      children: "Non-Functional Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tichá prevádzka zariadenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nízka spotreba energie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zabezpečené dostatočné chladenie komponentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "estetické vyhotovenie vhodné do domácnosti,"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardware-constraints",
      children: "Hardware Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použitie Mini-ITX základovej dosky s integrovaným procesorom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použitie 2.5\" SSD disku ako hlavného úložiska,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "použitie samostatného napájacieho zdroja,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obmedzený výkon hardvérových komponentov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software-constraints",
      children: "Software Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "neoficiálna podpora Android TV na x86 platforme,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obmedzená dostupnosť ovládačov v prostredí Android,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nutnosť manuálnej konfigurácie dualboot riešenia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05-Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overall-design-concept",
      children: "Overall Design Concept"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém je navrhnutý ako kompaktné externé zariadenie umiestnené v drevenom púzdre.\nNávrh kladie dôraz na jednoduchú výrobu, dobrú ventiláciu a prístupnosť portov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardware-design-1",
      children: "Hardware Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hardvérová časť pozostáva z Mini-ITX základovej dosky s integrovaným procesorom,\n2.5\" SSD disku a napájacieho zdroja."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na nasledujúcom obrázku je zobrazená základová doska ASRock J4105B-ITX\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Základová doska",
        src: (__webpack_require__(26949)/* ["default"] */ .A) + "",
        width: "1009",
        height: "931"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Napájaci zdroj bol vybraný Seasonic SS-300TFX\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Napájací zdroj",
        src: (__webpack_require__(38438)/* ["default"] */ .A) + "",
        width: "776",
        height: "674"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Komponenty sú rozmiestnené tak, aby bol zabezpečený prirodzený airflow\na zároveň jednoduchý prístup k vstupno-výstupným rozhraniam."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "case-design",
      children: "Case Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Púzdro zariadenia je vyrobené z preglejky a navrhnuté ako viacvrstvová konštrukcia.\nMedzery medzi jednotlivými vrstvami podporujú cirkuláciu vzduchu\na pomáhajú odvádzať teplo z vnútra zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cooling-design",
      children: "Cooling Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chladenie zariadenia je založené na pasívnom chladení procesora\na prirodzenej ventilácii púzdra.\nOdvod teplého vzduchu je podporený napájacím zdrojom,\nktorý aktívne odvádza teplý vzduch smerom von zo skrinky."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software-design",
      children: "Software Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Primárnym operačným systémom zariadenia je Android TV alebo Android s TV rozhraním.\nZariadenie zároveň podporuje operačný systém Windows,\nktorý je dostupný prostredníctvom dualboot riešenia.\nVýber operačného systému prebieha pri štarte zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "design-tools",
      children: "Design Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Návrh mechanickej konštrukcie zariadenia bol vytvorený v nástroji Fusion 360.\nV rámci návrhu bol spracovaný 3D model púzdra a technické výkresy (drawings) jednotlivých dielov potrebné pre výrobu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na ďalších dvoch obrázkoch je zobrazený výsledný 3D model púzdra aj jeho technický výkres s popisom\nexterierových rozmerov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "3D model púzdra",
        src: (__webpack_require__(96774)/* ["default"] */ .A) + "",
        width: "1049",
        height: "679"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06-Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardware-implementation",
      children: "Hardware Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementácia hardvérovej časti zahŕňa montáž základovej dosky,\nSSD disku a napájacieho zdroja do navrhnutého dreveného púzdra.\nJednotlivé časti púzdra boli vyrezané z preglejky podľa technických výkresov\nvytvorených v nástroji Fusion 360 a následne zlepené do finálnej konštrukcie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na nasledujúcich obrázkoch je znazornený vzhľad dreveného púzdra\nvyrezaného z preglejky, ale pred umiestnením hardvérových komponentov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Púzdro 1",
        src: (__webpack_require__(958)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Púzdro 2",
        src: (__webpack_require__(92457)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Púzdro 3",
        src: (__webpack_require__(94668)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po umiestnení hardvérových komponentov, zariadenie vyzeralo následovne:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hardvér 1",
        src: (__webpack_require__(93650)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hardvér 2",
        src: (__webpack_require__(3549)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Hardvér 3",
        src: (__webpack_require__(52416)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "software-implementation",
      children: "Software Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na SSD disk bol nainštalovaný operačný systém Android TV alebo Android s TV rozhraním\nako primárne používateľské prostredie.\nZároveň bol nainštalovaný operačný systém Windows,\npričom oba systémy sú dostupné prostredníctvom dualboot riešenia:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Dualboot",
        src: (__webpack_require__(35283)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "current-state",
      children: "Current State"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V aktuálnej fáze projektu je zariadenie zostavené po hardvérovej stránke\na pripravené na ďalšie testovanie softvéru, stability a teplotného správania."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-testing--verification",
      children: "07-Testing & Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cieľ-testovania",
      children: "Cieľ testovania"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom testovania bolo overiť funkčnosť zariadenia Smart TV Box v reálnych podmienkach používania, najmä na televízoroch, ktoré nepodporujú Smart TV funkcionalitu. Testovanie sa zameriavalo na kompatibilitu, stabilitu systému Android TV a používateľský komfort."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testovacie-prostredie",
      children: "Testovacie prostredie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zariadenie bolo testované na viacerých typoch starších televízorov rôznych výrobcov, ktoré disponujú HDMI vstupom, ale nemajú vlastný Smart TV operačný systém.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Pripojenie k internetu bolo realizované výhradne pomocou káblového pripojenia cez rozhranie ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "RJ-45 (Ethernet)"
      }), ", aby bola zabezpečená stabilita siete počas testovania."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Android TV",
        src: (__webpack_require__(29111)/* ["default"] */ .A) + "",
        width: "3897",
        height: "2922"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenáre-testovania",
      children: "Scenáre testovania"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Počas testovania boli vykonané nasledovné scenáre:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spustenie zariadenia a boot operačného systému Android TV,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inicializácia obrazu a zvuku po pripojení k televízoru,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "test funkčnosti sieťového pripojenia cez RJ-45,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inštalácia a spustenie multimediálnych aplikácií,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dlhodobejšie prehrávanie obsahu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testované-aplikácie",
      children: "Testované aplikácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Funkčnosť zariadenia bola overená najmä pomocou bežne používaných streamovacích služieb:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "YouTube"
        }), " – prehrávanie videí v rôznych rozlíšeniach,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Netflix"
        }), " – prehrávanie filmov a seriálov po prihlásení do používateľského účtu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aplikácie sa spúšťali korektne, bez pádov a bez viditeľného oneskorenia používateľského rozhrania."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výsledky-testovania",
      children: "Výsledky testovania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie bolo úspešne rozpoznané všetkými testovanými televízormi."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obraz aj zvuk boli prenášané bez chýb cez HDMI rozhranie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sieťové pripojenie cez RJ-45 bolo stabilné počas celého testovania."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multimediálne aplikácie fungovali spoľahlivo a bez výpadkov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počas testovania nebolo zaznamenané prehrievanie zariadenia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "záver-testovania",
      children: "Záver testovania"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na základe vykonaných testov je možné uvažovať, že Smart TV Box spĺňa požadované funkčné a kvalitatívne kritériá. Zariadenie je vhodné na bežné domáce používanie ako náhrada Smart TV funkcionality pre staršie televízory a spĺňa očakávania definované v návrhovej fáze projektu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-operation",
      children: "08-Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-startup",
      children: "System Startup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po pripojení zariadenia k elektrickej sieti a televízoru prostredníctvom HDMI\nje možné Smart TV Box zapnúť pomocou napájacieho tlačidla alebo pripojeného zdroja.\nPri štarte zariadenia má používateľ možnosť zvoliť operačný systém\n(Android TV alebo Windows) prostredníctvom dualboot menu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "normal-operation",
      children: "Normal Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po spustení operačného systému Android TV môže používateľ:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "používať multimediálne aplikácie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prehrávať video a audio obsah,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pristupovať k internetovým službám."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ovládanie zariadenia je možné pomocou:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "klávesnice alebo myši pripojenej cez USB,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "diaľkového ovládača kompatibilného s Android TV."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintenance",
      children: "Maintenance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie nevyžaduje pravidelnú údržbu.\nOdporúča sa však:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "občasná kontrola vnútorného priestoru púzdra,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "odstránenie prípadného prachu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrola správneho odvádzania tepla."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safety-considerations",
      children: "Safety Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zariadenie by malo byť umiestnené na dobre vetranom mieste,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nesmie byť zakryté predmetmi brániacimi prúdeniu vzduchu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "počas prevádzky by nemalo byť vystavené vlhkosti."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-change-management",
      children: "09-Change Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pôvodný-návrh",
      children: "Pôvodný návrh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V pôvodnom návrhu projektu Smart TV Box sa počítalo s použitím ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3D tlačeného držiaka pre 2.5\" SSD disk"
      }), ", ktorý mal byť:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navrhnutý v CAD nástroji,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytlačený na 3D tlačiarni,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pevne integrovaný do vnútorného priestoru dreveného púzdra."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom tohto riešenia bolo zlepšiť mechanickú stabilitu disku, vnútornú organizáciu komponentov a celkovú modularitu zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "identifikovaná-zmena-change-request",
      children: "Identifikovaná zmena (Change Request)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Počas realizácie projektu bol identifikovaný časový limit, ktorý neumožnil dokončenie návrhu a výroby 3D tlačeného držiaka SSD disku v plánovanom rozsahu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z tohto dôvodu bolo rozhodnuté:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "neimplementovať 3D tlačený držiak SSD disku v aktuálnej verzii projektu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ponechať SSD disk umiestnený v púzdre bez dedikovaného držiaka."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analýza-dopadu-impact-analysis",
      children: "Analýza dopadu (Impact Analysis)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dopad tejto zmeny na projekt bol vyhodnotený nasledovne:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Funkčnosť zariadenia"
        }), " nebola ovplyvnená, SSD disk je plne funkčný."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Časový harmonogram projektu"
        }), " bol dodržaný."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bezpečnosť a stabilita"
        }), " zariadenia ostala na akceptovateľnej úrovni pre školský projekt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Estetika a modularita"
        }), " vnútorného usporiadania môže byť mierne znížená."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "záznam-zmeny-change-log",
      children: "Záznam zmeny (Change log)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zmena:"
        }), " Neimplementovaný 3D tlačený držiak pre SSD disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dôvod:"
        }), " Nedostatok času na návrh a výrobu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stav:"
        }), " Odložené / nerealizované"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dátum rozhodnutia:"
        }), " počas realizácie projektu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "potenciálne-zlepšenia-future-improvements",
      children: "Potenciálne zlepšenia (Future Improvements)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nerealizovaný 3D tlačený držiak SSD disku je možné považovať za:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "potenciálne rozšírenie projektu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vylepšenie budúcej verzie zariadenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vhodnú úlohu pre ďalšiu iteráciu alebo nadväzujúci projekt."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implementácia tohto prvku by mohla zvýšiť mechanickú odolnosť, servisovateľnosť a profesionálny charakter výsledného riešenia."
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

/***/ 52416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hardver3-2cc779ece8f5f2abf8c43699ecd019c8.jpg");

/***/ }),

/***/ 92457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/puzdro2-7aa72d701a02edcc811c662f05a29bad.jpg");

/***/ }),

/***/ 93650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/hardver1-8814c68bb734ce79aebb571507c91309.jpg");

/***/ }),

/***/ 94668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/puzdro3-fe39a4af79ab3b9433bffe45e895012b.jpg");

/***/ }),

/***/ 96774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model-dc6e6fcdb854b183aaa721a9f8603e8b.png");

/***/ })

}]);