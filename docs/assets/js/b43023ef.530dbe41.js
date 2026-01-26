"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[31864],{

/***/ 1552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/boot-sequence-7b50af91946494bf9664756e1e1df378.png");

/***/ }),

/***/ 19873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/component-hierarchy-65fa2d6cd395933e9944f68c8af3f226.png");

/***/ }),

/***/ 21879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/color-pallete-aa6dc73df38c0264d45746ac1993e370.png");

/***/ }),

/***/ 22859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/service-dependecies-6b22adcc9d44b8713f959467bf6ff521.png");

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

/***/ 35423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/data-flow-5b9415cbf888ae27c0e8b7ea28cec4d6.png");

/***/ }),

/***/ 49410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/photo2-eb6205b6739d29e3746952c8ae19acf5.jpg");

/***/ }),

/***/ 53708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/weather-data-processing-flow-24126004b51ad6ed12689f680e6d050f.png");

/***/ }),

/***/ 54099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system-state-8e5b6996ae73b7582146665e95f3b6cd.png");

/***/ }),

/***/ 62079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/photo3-290103e56f175534eeb939ee0b8ce41b.jpg");

/***/ }),

/***/ 66582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_001_presentation_slides_md_b43_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-001-presentation-slides-md-b43.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_001_presentation_slides_md_b43_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.928823+00:00","fm_version_comment":"","guid":"91011f44-6c78-4e08-952c-e61dd3b1e01f","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"René Bukovina","authors":["René Bukovina","Silvia Kuchtová"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2026-01-15 19:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 René Bukovina, Silvia Kuchtová","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ001","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.928823+00:00',
	fm_version_comment: '',
	guid: '91011f44-6c78-4e08-952c-e61dd3b1e01f',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: '{{DESCRIPTION}}',
	author: 'René Bukovina',
	authors: [
		'René Bukovina',
		'Silvia Kuchtová'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-28 16:54',
	modified: '2026-01-15 19:54',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 René Bukovina, Silvia Kuchtová',
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
const contentTitle = 'PRJ001 — Presentation';

const assets = {

};



const toc = [{
  "value": "Headline",
  "id": "headline",
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
  "value": "02-Top Level Architecture",
  "id": "02-top-level-architecture",
  "level": 2
}, {
  "value": "03-Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "Boot Sequence Flow",
  "id": "boot-sequence-flow",
  "level": 3
}, {
  "value": "Application Architecture",
  "id": "application-architecture",
  "level": 3
}, {
  "value": "Data Flow Diagram",
  "id": "data-flow-diagram",
  "level": 3
}, {
  "value": "System State Diagram",
  "id": "system-state-diagram",
  "level": 3
}, {
  "value": "04-Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "Funkčné požiadavky:",
  "id": "funkčné-požiadavky",
  "level": 3
}, {
  "value": "Nefunkčné požiadavky:",
  "id": "nefunkčné-požiadavky",
  "level": 3
}, {
  "value": "Risk Assessment",
  "id": "risk-assessment",
  "level": 3
}, {
  "value": "05-Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "UI Component Hierarchy",
  "id": "ui-component-hierarchy",
  "level": 3
}, {
  "value": "Color Palette",
  "id": "color-palette",
  "level": 3
}, {
  "value": "Data Model Schema",
  "id": "data-model-schema",
  "level": 3
}, {
  "value": "06-Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "Project Structure",
  "id": "project-structure",
  "level": 3
}, {
  "value": "Application Flow",
  "id": "application-flow",
  "level": 3
}, {
  "value": "Weather Data Processing Pipeline",
  "id": "weather-data-processing-pipeline",
  "level": 3
}, {
  "value": "Systemd Service Dependencies",
  "id": "systemd-service-dependencies",
  "level": 3
}, {
  "value": "Key Files and Configuration",
  "id": "key-files-and-configuration",
  "level": 3
}, {
  "value": "APIs Used",
  "id": "apis-used",
  "level": 3
}, {
  "value": "07-Testing &amp; Verification",
  "id": "07-testing--verification",
  "level": 2
}, {
  "value": "Test Coverage Overview",
  "id": "test-coverage-overview",
  "level": 3
}, {
  "value": "Test Cases Matrix",
  "id": "test-cases-matrix",
  "level": 3
}, {
  "value": "Performance Metrics",
  "id": "performance-metrics",
  "level": 3
}, {
  "value": "Boot Performance",
  "id": "boot-performance",
  "level": 4
}, {
  "value": "Runtime Performance",
  "id": "runtime-performance",
  "level": 4
}, {
  "value": "Response Times",
  "id": "response-times",
  "level": 4
}, {
  "value": "Known Issues and Resolutions",
  "id": "known-issues-and-resolutions",
  "level": 3
}, {
  "value": "08-Operation",
  "id": "08-operation",
  "level": 2
}, {
  "value": "Deployment Process",
  "id": "deployment-process",
  "level": 3
}, {
  "value": "1. Príprava hardvéru (10 min)",
  "id": "1-príprava-hardvéru-10-min",
  "level": 4
}, {
  "value": "2. Inštalácia OS (20 min)",
  "id": "2-inštalácia-os-20-min",
  "level": 4
}, {
  "value": "3. Inštalácia LCD drivera (15 min + reboot)",
  "id": "3-inštalácia-lcd-drivera-15-min--reboot",
  "level": 4
}, {
  "value": "4. Konfigurácia X11 (10 min)",
  "id": "4-konfigurácia-x11-10-min",
  "level": 4
}, {
  "value": "5. Inštalácia dependencií (10 min)",
  "id": "5-inštalácia-dependencií-10-min",
  "level": 4
}, {
  "value": "6. Setup GitHub (15 min)",
  "id": "6-setup-github-15-min",
  "level": 4
}, {
  "value": "7. Vytvorenie systemd services (20 min)",
  "id": "7-vytvorenie-systemd-services-20-min",
  "level": 4
}, {
  "value": "8. Finálny reboot a test (10 min)",
  "id": "8-finálny-reboot-a-test-10-min",
  "level": 4
}, {
  "value": "System Monitoring",
  "id": "system-monitoring",
  "level": 3
}, {
  "value": "Health Checks",
  "id": "health-checks",
  "level": 4
}, {
  "value": "Logging",
  "id": "logging",
  "level": 4
}, {
  "value": "Maintenance Tasks",
  "id": "maintenance-tasks",
  "level": 4
}, {
  "value": "Maintenance Schedule",
  "id": "maintenance-schedule",
  "level": 3
}, {
  "value": "09-Change Management",
  "id": "09-change-management",
  "level": 2
}, {
  "value": "Version Control Strategy",
  "id": "version-control-strategy",
  "level": 3
}, {
  "value": "Release History",
  "id": "release-history",
  "level": 3
}, {
  "value": "Future Roadmap",
  "id": "future-roadmap",
  "level": 3
}, {
  "value": "Phase 1 - Current (v1.0) ✅",
  "id": "phase-1---current-v10-",
  "level": 4
}, {
  "value": "Phase 2 - Q1 2025 (v1.1-1.2) 📅",
  "id": "phase-2---q1-2025-v11-12-",
  "level": 4
}, {
  "value": "Phase 3 - Q2 2025 (v1.3-1.4) 📅",
  "id": "phase-3---q2-2025-v13-14-",
  "level": 4
}, {
  "value": "Phase 4 - Q3 2025 (v2.0) 🎯",
  "id": "phase-4---q3-2025-v20-",
  "level": 4
}, {
  "value": "Enhancement Backlog Priority",
  "id": "enhancement-backlog-priority",
  "level": 3
}, {
  "value": "Záverečné zhodnotenie",
  "id": "záverečné-zhodnotenie",
  "level": 2
}, {
  "value": "Splnené ciele",
  "id": "splnené-ciele",
  "level": 3
}, {
  "value": "Úspešne implementované funkcie",
  "id": "úspešne-implementované-funkcie",
  "level": 3
}, {
  "value": "Nedokončené úlohy",
  "id": "nedokončené-úlohy",
  "level": 3
}, {
  "value": "Technické metriky projektu",
  "id": "technické-metriky-projektu",
  "level": 3
}, {
  "value": "Code Statistics",
  "id": "code-statistics",
  "level": 4
}, {
  "value": "Performance",
  "id": "performance",
  "level": 4
}, {
  "value": "Reliability",
  "id": "reliability",
  "level": 4
}, {
  "value": "User Experience",
  "id": "user-experience",
  "level": 4
}, {
  "value": "Naučené lekcie",
  "id": "naučené-lekcie",
  "level": 3
}, {
  "value": "Porovnanie s podobnými projektmi",
  "id": "porovnanie-s-podobnými-projektmi",
  "level": 3
}, {
  "value": "Finálne hodnotenie",
  "id": "finálne-hodnotenie",
  "level": 3
}, {
  "value": "Záverečné slovo",
  "id": "záverečné-slovo",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "prj001--presentation",
        children: "PRJ001 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headline",
      children: "Headline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-001-ST_007-ST_022-Revia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Weather Station Display",
        src: (__webpack_require__(78669)/* ["default"] */ .A) + "",
        width: "3000",
        height: "3000"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kompaktná počasová stanica postavená na Raspberry Pi Zero 2 W s 4\" touchscreen displejom, zobrazujúca aktuálne počasie, 5-dňovú predpoveď a trendy teploty/vlhkosti s automatickou aktualizáciou z open-source API."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-001-ST_007-ST_022-Revia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je vytvoriť kompaktnú, vizuálne atraktívnu počasovú stanicu využívajúcu Raspberry Pi Zero 2 W a Waveshare 4\" LCD displej. Systém automaticky deteguje polohu používateľa, zobrazuje aktuálne meteorologické údaje a predpoveď počasia prostredníctvom Open-Meteo API. Aplikácia beží fullscreen s touchscreen ovládaním, automatickým rotovaním obrazoviek a podporou manuálneho vyhľadávania miest. Riešenie zahŕňa automatické aktualizácie z GitHub repozitára pri každom štarte, čím sa eliminuje potreba fyzického prístupu k zariadeniu pri zmenách kódu. Projekt prináša praktické riešenie pre vizualizáciu počasia s nízkou spotrebou energie a možnosťou nasadenia kdekoľvek s WiFi pripojením."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#01-business",
          children: "Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#02-top-level-architecture",
          children: "Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#03-solution-architecture",
          children: "Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#04-analysis",
          children: "Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#05-design",
          children: "Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#06-implementation",
          children: "Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#07-testing--verification",
          children: "Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#08-operation",
          children: "Operation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#09-change-management",
          children: "Change Management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#z%C3%A1vere%C4%8Dn%C3%A9-zhodnotenie",
          children: "Záverečné zhodnotenie"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01-Business"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problém:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potreba jednoduchého prístupu k presným meteorologickým údajom bez závislosti na mobilných zariadeniach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Existujúce komerčné riešenia sú buď drahé alebo závislé od proprietárnych služieb s mesačnými poplatkami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chýbajú open-source alternatívy s moderným UI a touchscreen ovládaním"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Standalone počasová stanica s automatickou detekciou polohy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Využitie bezplatného Open-Meteo API bez limitov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatické aktualizácie z GitHub repozitára"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nízke náklady (~50-70€ hardvér)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hodnota:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nezávislosť od komerčných služieb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plne customizovateľné riešenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vzdelávací projekt pre embedded systémy a Python GUI development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možnosť rozšírenia o vlastné senzory (teplota, vlhkosť, tlak)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "drawing",
        src: (__webpack_require__(79908)/* ["default"] */ .A) + "",
        width: "2194",
        height: "1494"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02-Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Top-level-architektura",
        src: (__webpack_require__(73014)/* ["default"] */ .A) + "",
        width: "6320",
        height: "2928"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hlavné komponenty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware Layer"
        }), ": Raspberry Pi Zero 2 W + Waveshare LCD + Touchscreen"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS Layer"
        }), ": Raspberry Pi OS (Debian 12) s X11 window system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Application Layer"
        }), ": Python aplikácia s Tkinter GUI framework"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Layer"
        }), ": Open-Meteo API, IP geolocation, Geocoding API"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update Layer"
        }), ": GitHub repository pre continuous deployment"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03-Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "boot-sequence-flow",
      children: "Boot Sequence Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "bootseq",
        src: (__webpack_require__(1552)/* ["default"] */ .A) + "",
        width: "6432",
        height: "5524"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-architecture",
      children: "Application Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "appflow",
        src: (__webpack_require__(86239)/* ["default"] */ .A) + "",
        width: "3945",
        height: "10770"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-flow-diagram",
      children: "Data Flow Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "dataflow",
        src: (__webpack_require__(35423)/* ["default"] */ .A) + "",
        width: "10380",
        height: "2097"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-state-diagram",
      children: "System State Diagram"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "systemstate",
        src: (__webpack_require__(54099)/* ["default"] */ .A) + "",
        width: "2546",
        height: "6908"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technologies Stack:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language"
        }), ": Python 3.11"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUI Framework"
        }), ": Tkinter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTP Client"
        }), ": requests library"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Display Driver"
        }), ": X11 + fbdev"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Control"
        }), ": Git + GitHub"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process Management"
        }), ": systemd"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boot Manager"
        }), ": startx"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04-Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "funkčné-požiadavky",
      children: "Funkčné požiadavky:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "functionalreq",
        src: (__webpack_require__(99210)/* ["default"] */ .A) + "",
        width: "4529",
        height: "2325"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Detailné požiadavky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-001"
        }), ": Zobrazenie aktuálneho počasia (teplota, vlhkosť, vietor, tlak, pocitová teplota)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-002"
        }), ": 5-dňová predpoveď s max/min teplotami a pravdepodobnosťou zrážok"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-003"
        }), ": Grafy teploty a vlhkosti za 24h s vizuálnymi trendmi"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-004"
        }), ": Automatická detekcia polohy pri štarte pomocou IP geolokácie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-005"
        }), ": Manuálne vyhľadávanie miest s fullscreen klávesnicou"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-006"
        }), ": Automatické rotovanie stránok každých 10 sekúnd"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-007"
        }), ": Touchscreen navigácia pomocou tlačidiel ◀ ▶ 🔍"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-008"
        }), ": Virtuálna QWERTY klávesnica s číslicami, Space, Backspace, Clear"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-009"
        }), ": Automatická aktualizácia aplikácie z GitHub pri každom boote"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "FR-010"
        }), ": Pravidelná aktualizácia počasia každých 10 minút"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nefunkčné-požiadavky",
      children: "Nefunkčné požiadavky:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "nonfunctionalreq",
        src: (__webpack_require__(80242)/* ["default"] */ .A) + "",
        width: "4981",
        height: "2728"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "risk-assessment",
      children: "Risk Assessment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "riskassessment",
        src: (__webpack_require__(79345)/* ["default"] */ .A) + "",
        width: "7108",
        height: "1088"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05-Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ui-component-hierarchy",
      children: "UI Component Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "uihierarchy",
        src: (__webpack_require__(19873)/* ["default"] */ .A) + "",
        width: "9576",
        height: "3236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "color-palette",
      children: "Color Palette"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "palette",
        src: (__webpack_require__(21879)/* ["default"] */ .A) + "",
        width: "4438",
        height: "2588"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-model-schema",
      children: "Data Model Schema"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "datamodel",
        src: (__webpack_require__(19873)/* ["default"] */ .A) + "",
        width: "9576",
        height: "3236"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06-Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-structure",
      children: "Project Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Project Structure",
        src: (__webpack_require__(73554)/* ["default"] */ .A) + "",
        width: "6565",
        height: "2960"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-flow",
      children: "Application Flow"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Application Flow",
        src: (__webpack_require__(86239)/* ["default"] */ .A) + "",
        width: "3945",
        height: "10770"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weather-data-processing-pipeline",
      children: "Weather Data Processing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Weather Data Processing Pipeline",
        src: (__webpack_require__(53708)/* ["default"] */ .A) + "",
        width: "8521",
        height: "4856"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "systemd-service-dependencies",
      children: "Systemd Service Dependencies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Systemd Service Dependencies",
        src: (__webpack_require__(22859)/* ["default"] */ .A) + "",
        width: "2052",
        height: "5752"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-files-and-configuration",
      children: "Key Files and Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Main Application"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "weather_display.py"
      }), " - 450+ lines)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GUI creation with Tkinter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weather API integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Location detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graph rendering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auto-rotate logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtual keyboard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Update Script"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "update_and_run.sh"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "#!/bin/bash\nREPO_URL=\"git@github.com:username/weather-pi-display.git\"\nAPP_DIR=\"/home/revia/weather-app\"\nLOG_FILE=\"$APP_DIR/update.log\"\n\necho \"$(date): Starting update...\" >> \"$LOG_FILE\"\n\nif [ ! -d \"$APP_DIR/.git\" ]; then\n    git clone \"$REPO_URL\" \"$APP_DIR\"\nelse\n    cd \"$APP_DIR\"\n    git fetch origin\n    git reset --hard origin/main\nfi\n\npython3 weather_display.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Display Configuration"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/boot/firmware/config.txt"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "dtparam=spi=on\ndtoverlay=waveshare35a:rotate=270\nhdmi_force_hotplug=1\nhdmi_group=2\nhdmi_mode=87\nhdmi_cvt=480 320 60 6 0 0 0\nframebuffer_width=480\nframebuffer_height=320\ndisable_overscan=1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Touchscreen Calibration"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/X11/xorg.conf.d/99-calibration.conf"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "Section \"InputClass\"\n    Identifier \"calibration\"\n    MatchProduct \"ADS7846 Touchscreen\"\n    Option \"Calibration\" \"160 3723 3896 181\"\n    Option \"SwapAxes\" \"1\"\n    Option \"InvertX\" \"1\"\n    Option \"InvertY\" \"1\"\nEndSection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "apis-used",
      children: "APIs Used"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Endpoint"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Authentication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rate Limit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open-Meteo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "api.open-meteo.com/v1/forecast"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current weather + Forecast data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No API Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "IP Geolocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ip-api.com/json/"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic location detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No API Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45 req/min (Free)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Geocoding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "geocoding-api.open-meteo.com"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "City search functionality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No API Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "github.com/user/repo.git"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code updates via Git"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSH Key"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Authenticated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-testing--verification",
      children: "07-Testing & Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-coverage-overview",
      children: "Test Coverage Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Total Tests: 14"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Passed: 11 (78.6%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Partial: 2 (14.3%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Issue: 1 (7.1%)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "test-cases-matrix",
      children: "Test Cases Matrix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kategória"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Očakávaný výsledok"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Poznámka"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-001"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System boot do GUI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI zobrazené < 60s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~45s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Touchscreen kalibrácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presné dotykové vstupy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverzné osi fungujú"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatická detekcia polohy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Správne mesto zobrazené"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IP geolocation OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-004"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Získanie aktuálneho počasia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dáta zobrazené správne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-Meteo API"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-005"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-dňová predpoveď"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 dní zobrazených"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max/Min/Rain OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-006"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24h grafy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grafy vykreslené"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smooth curves"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-rotate stránok"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepnutie každých 10s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop funguje"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-008"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manuálna navigácia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tlačidlá fungujú"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "◀ ▶ responsive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-009"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vyhľadávanie mesta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Klávesnica + search funguje"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QWERTY layout"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-010"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git auto-pull pri boote"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nová verzia stiahnutá"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub sync OK"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WiFi výpadok"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zobrazí posledné dáta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chýba offline mód"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API nedostupné"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chýba user feedback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-013"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Responzívnosť UI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Akcia < 200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average 100ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TC-014"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ikony počasia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Všetky ikony zobrazené"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Issue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Niektoré štvorčeky"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-metrics",
      children: "Performance Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "boot-performance",
      children: "Boot Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Fáza"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čas"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kumulatívne"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power On → Kernel Boot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel Boot → Systemd Services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~15s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systemd Services → X11 Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "35s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "X11 Start → App Running"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "45s"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "runtime-performance",
      children: "Runtime Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-40%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RAM Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80MB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power Consumption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5W"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "response-times",
      children: "Response Times"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operácia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čas"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "200-500ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI Interaction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 100ms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Touch Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 200ms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "known-issues-and-resolutions",
      children: "Known Issues and Resolutions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problém"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Severity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "#1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Emoji ikony zobrazené ako štvorčeky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nahradiť ASCII symbolmi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Ready to implement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "#2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pri výpadku WiFi aplikácia nereaguje"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 MEDIUM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offline mód s cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📅 Future enhancement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "#3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pri zlyhaní API nejasná chyba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 LOW"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-friendly errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📅 Future enhancement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-operation",
      children: "08-Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "deployment-process",
      children: "Deployment Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Deployment Steps (30 krokov, ~2 hodiny):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1-príprava-hardvéru-10-min",
      children: "1. Príprava hardvéru (10 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripojenie Waveshare LCD na GPIO pins"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vloženie SD karty do Raspberry Pi"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2-inštalácia-os-20-min",
      children: "2. Inštalácia OS (20 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flash Raspberry Pi OS 64-bit pomocou Raspberry Pi Imager"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boot systému"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SSH pripojenie: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh revia@<ip-address>"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3-inštalácia-lcd-drivera-15-min--reboot",
      children: "3. Inštalácia LCD drivera (15 min + reboot)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "git clone https://github.com/waveshare/LCD-show.git"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "cd LCD-show/"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "chmod +x LCD4-show"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo ./LCD4-show"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatický reboot"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4-konfigurácia-x11-10-min",
      children: "4. Konfigurácia X11 (10 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sudo nano /boot/firmware/config.txt"
        }), " - pridať LCD konfiguráciu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvorenie Xorg configs v ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/X11/xorg.conf.d/"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo apt-get install xserver-xorg-video-fbdev"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "5-inštalácia-dependencií-10-min",
      children: "5. Inštalácia dependencií (10 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "14",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo apt-get update"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo apt-get install python3-tk python3-pil python3-requests git"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "pip3 install requests pillow --break-system-packages"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "6-setup-github-15-min",
      children: "6. Setup GitHub (15 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh-keygen -t ed25519 -C \"weather-pi\""
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "cat ~/.ssh/id_ed25519.pub"
        }), " - kopírovať"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pridať SSH key do GitHub (Settings → SSH keys)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh -T git@github.com"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "7-vytvorenie-systemd-services-20-min",
      children: "7. Vytvorenie systemd services (20 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "21",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvorenie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/systemd/system/startx@revia.service"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvorenie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/systemd/system/weather-display.service"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo systemctl enable startx@revia"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo systemctl enable weather-display"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "8-finálny-reboot-a-test-10-min",
      children: "8. Finálny reboot a test (10 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "25",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "sudo reboot"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vizuálna kontrola displeja"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test touchscreen navigácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overenie auto-update funkcionality"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kontrola logov: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "journalctl -u weather-display.service"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Deployment dokončený"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-monitoring",
      children: "System Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "health-checks",
      children: "Health Checks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frekvencia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Service Status"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "systemctl status weather-display.service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Týždenne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Display Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vizuálna inšpekcia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network Connectivity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ping -c 3 8.8.8.8"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "curl api.open-meteo.com"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Týždenne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disk Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "df -h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesačne"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "logging",
      children: "Logging"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Log Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Location"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systemd Journal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "journalctl -u weather-display.service"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update Log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "~/weather-app/update.log"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Git pull history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Xorg Logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "~/.local/share/xorg/Xorg.0.log"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display server logs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "maintenance-tasks",
      children: "Maintenance Tasks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Frekvencia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-update from GitHub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatické pri boote"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weather data refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Každých 10 min"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatické v aplikácii"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check service logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Týždenne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "journalctl -u weather-display.service"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verify display function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Týždenne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vizuálna kontrola"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS package updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesačne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sudo apt update && sudo apt upgrade"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Review error logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mesačne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "journalctl -p err"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SD card health check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kvartálne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sudo smartctl -a /dev/mmcblk0"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backup configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kvartálne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Záloha konfig súborov"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintenance-schedule",
      children: "Maintenance Schedule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Časové obdobie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Aktivita"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Denne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-update from GitHub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Automatické"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Denne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Weather data refresh"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Automatické"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Týždenne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check service logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📋 Manuálne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Týždenne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify display function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📋 Manuálne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mesačne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS package updates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📋 Manuálne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mesačne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Review error logs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📋 Manuálne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kvartálne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SD card health check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📋 Manuálne"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Kvartálne"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backup configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📋 Manuálne"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-change-management",
      children: "09-Change Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "version-control-strategy",
      children: "Version Control Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Branch Strategy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " - Production-ready code"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feature/*"
        }), " - Nové funkcie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "bugfix/*"
        }), " - Opravy chýb"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Git Workflow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "v0.1.0 (Initial) → v0.2.0 (Forecast) → feature/graphs → v0.3.0 (Merge)\n→ v0.4.0 (Navigation) → feature/location → v0.5.0 (Merge)\n→ v0.6.0 (Layout) → v1.0.0 (Production)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "release-history",
      children: "Release History"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Version"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Date"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Changes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v0.1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-XX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initial setup, basic weather display"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v0.2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-XX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added 5-day forecast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v0.3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-XX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added temperature & humidity graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v0.4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-XX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-rotate pages, touch navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v0.5.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-XX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Location detection + manual search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v0.6.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-XX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combined weather + forecast page"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Released"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v1.0.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2025-01-15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production ready release"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🟡 Current"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "v1.1.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fix emoji icons, offline mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "📅 Planned"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "future-roadmap",
      children: "Future Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-1---current-v10-",
      children: "Phase 1 - Current (v1.0) ✅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Základná funkcionalita"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-rotate stránok (10s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Location detection (IP-based)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ GitHub auto-update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-2---q1-2025-v11-12-",
      children: "Phase 2 - Q1 2025 (v1.1-1.2) 📅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🟡 Fix emoji ikony → ASCII fallback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🟡 Offline mód → Cache posledných dát"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 BME280 sensor integration → Lokálne merania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Local vs API comparison → Porovnanie dát"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-3---q2-2025-v13-14-",
      children: "Phase 3 - Q2 2025 (v1.3-1.4) 📅"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Historical data → SQLite databáza"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Weekly/monthly trends → Dlhodobé grafy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Multiple locations → Swipe medzi mestami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Weather alerts → Push notifikácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Sun/Moon data → Východ/západ slnka"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "phase-4---q3-2025-v20-",
      children: "Phase 4 - Q3 2025 (v2.0) 🎯"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Web interface → Remote konfigurácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 MQTT/Home Assistant → Smart home integrácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Air quality index → Kvalita ovzdušia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📋 Pollen count → Alergény"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📋 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom enclosure → 3D tlačený obal"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "enhancement-backlog-priority",
      children: "Enhancement Backlog Priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Improvements (Priorita: HIGH)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fix Emoji Icons - ASCII fallback ⚡"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offline Mode - Cache last data ⚡"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BME280 Sensor - Local measurements 🔧"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comparison View - API vs Sensor 🔧"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 3: Features (Priorita: MEDIUM)"
      }), "\n5. SQLite Database - Historical storage 📊\n6. Trend Analysis - Weekly/Monthly graphs 📊\n7. Multi-location - Swipe between cities 🌍\n8. Weather Alerts - Push notifications 🔔\n9. Sun/Moon Data - Sunrise/sunset times ☀️🌙"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 4: Integration (Priorita: LOW)"
      }), "\n10. Web Dashboard - Remote config 🌐\n11. MQTT Support - Home Assistant 🏠\n12. AQI Display - Air quality index 💨\n13. Pollen Count - Allergy info 🌸\n14. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3D Printed Case - Custom enclosure"
      }), " 📦"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "záverečné-zhodnotenie",
      children: "Záverečné zhodnotenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Obrazovka1",
        src: (__webpack_require__(78669)/* ["default"] */ .A) + "",
        width: "3000",
        height: "3000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Obrazovka2",
        src: (__webpack_require__(49410)/* ["default"] */ .A) + "",
        width: "3000",
        height: "3000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Obrazovka3",
        src: (__webpack_require__(62079)/* ["default"] */ .A) + "",
        width: "3000",
        height: "3000"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "splnené-ciele",
      children: "Splnené ciele"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware Integration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Raspberry Pi Zero 2 W"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Waveshare 4inch LCD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Touchscreen calibrated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-boot to GUI"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Software Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Python + Tkinter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Open-Meteo API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ GitHub auto-update"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Multi-page UI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Virtual keyboard"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Experience:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Intuitive navigation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-rotate pages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Manual controls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Location detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ City search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "System Reliability:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Systemd services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Auto-restart"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Boot time 45s"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "úspešne-implementované-funkcie",
      children: "Úspešne implementované funkcie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardware Setup"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi Zero 2 W plne funkčný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Waveshare 4\" LCD (480x320) s SPI komunikáciou"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibrovaný touchscreen s inverznou osou X/Y"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatický štart do X11 GUI bez login promptu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Features"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazenie aktuálneho počasia (teplota, vlhkosť, vietor, tlak)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5-dňová predpoveď s max/min teplotami a pravdepodobnosťou dažďa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grafy teploty a vlhkosti za posledných 24 hodín"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatická detekcia polohy cez IP geolokáciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manuálne vyhľadávanie miest s fullscreen klávesnicou"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "User Interface"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2 hlavné stránky s automatickým rotovaním každých 10 sekúnd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Touchscreen navigácia pomocou tlačidiel (◀ ▶ 🔍)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Virtuálna QWERTY klávesnica s číslicami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Responzívne ovládanie (< 100ms reakcia)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimalizovaný layout pre 480x320px displej"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "System Architecture"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub auto-update pri každom štarte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systemd services pre automatický štart"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pravidelná aktualizácia počasia každých 10 minút"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graceful restart pri páde aplikácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nízka spotreba energie (~1.5W)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nedokončené-úlohy",
      children: "Nedokončené úlohy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fyzický obal"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stav"
        }), ": Nerealizované"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dôvod"
        }), ": Časové obmedzenie projektu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dopad"
        }), ": Displej a Raspberry Pi sú exponované, nie sú chránené pred poškodením"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Riešenie"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dočasné: Použitie existujúceho obalu alebo kartónovej krabice"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dlhodobé: Návrh a 3D tlač custom obalu v Phase 4"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Emoji ikony"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stav"
        }), ": Čiastočne funkčné"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), ": Niektoré emoji sa zobrazujú ako štvorčeky kvôli chýbajúcim fontom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priorita"
        }), ": LOW"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fix ready"
        }), ": Nahradenie ASCII/Unicode symbolmi pripravené"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["⚠️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Offline mode"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stav"
        }), ": Chýba"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), ": Pri výpadku WiFi aplikácia nemá graceful degradation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priorita"
        }), ": MEDIUM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plánované"
        }), ": Phase 2 (v1.1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "technické-metriky-projektu",
      children: "Technické metriky projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-statistics",
      children: "Code Statistics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Python Lines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "450+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25+"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 main class"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Integrations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "performance",
      children: "Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boot time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Target: <60s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU idle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-15%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU active"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30-40%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Acceptable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power consumption"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.5W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Very low"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reliability",
      children: "Reliability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Uptime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99.9%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "API Success rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "99%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Reliable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-restart"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Enabled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Needs improvement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "user-experience",
      children: "User Experience"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hodnota"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Status"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Optimized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-rotate interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Good pace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Touch response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Responsive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UI response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Fast"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "naučené-lekcie",
      children: "Naučené lekcie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo fungovalo dobre:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open-source API"
        }), " - Open-Meteo poskytuje unlimited requests a kvalitné dáta"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub auto-update"
        }), " - Eliminuje potrebu fyzického prístupu pre updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Systemd services"
        }), " - Robustný spôsob pre auto-start a watchdog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tkinter GUI"
        }), " - Jednoduchý framework, ideálny pre embedded displeje"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IP geolocation"
        }), " - Automatická detekcia polohy funguje spoľahlivo"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výzvy a riešenia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LCD driver compatibility"
        }), " - 64-bit OS vyžadovalo manuálnu konfiguráciu framebuffer"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Touchscreen calibration"
        }), " - Potrebné inverzia osí X/Y pre správnu funkciu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Font rendering"
        }), " - Emoji ikony nefungujú, nutné použiť ASCII alternatívy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "X11 permissions"
        }), " - Potrebné správne nastavenie DISPLAY a XAUTHORITY"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Boot timing"
        }), " - Sleep 10s v systemd service pre stabilný štart"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "porovnanie-s-podobnými-projektmi",
      children: "Porovnanie s podobnými projektmi"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tento projekt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Magic Mirror²"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weather Pi"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Komerčné stanice"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cena"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50-70€"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~80-150€"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40-60€"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100-300€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Displej"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4\" touchscreen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Veľký monitor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malý LCD/OLED"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proprietary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Open-source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API limity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Žiadne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Závisí"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Závisí"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Platené"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Auto-update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ GitHub"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ NPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ OTA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Touch UI"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Plná podpora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Limitovaná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Customizácia"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Python kód"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ JS moduly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Config"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Offline mód"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⚠️ Chýba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Cache"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finálne-hodnotenie",
      children: "Finálne hodnotenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plusy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Plne funkčná počasová stanica s profesionálnym UI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Automatická aktualizácia z GitHub repozitára"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Nízke náklady (~50-70€) a žiadne mesačné poplatky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Open-source riešenie s možnosťou customizácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Spoľahlivý embedded systém s auto-restart"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Jednoduché ovládanie cez touchscreen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Kvalitné dáta z Open-Meteo API"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mínusy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Chýbajúci fyzický obal (ochranný kryt)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Niektoré emoji ikony nefungujú"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Žiadny offline mód pri výpadku WiFi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "⚠️ Limitovaný error handling pre API failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Odporúčania pre budúcnosť:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priorita 1"
        }), ": Vytvoriť 3D tlačený obal pre ochranu hardvéru"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priorita 2"
        }), ": Implementovať offline mód s cachovaním posledných dát"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priorita 3"
        }), ": Pridať BME280 senzor pre lokálne merania"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priorita 4"
        }), ": Rozšíriť o historické dáta a trendy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "záverečné-slovo",
      children: "Záverečné slovo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt Raspberry Pi Weather Station úspešne demonštruje možnosti embedded systémov a open-source ekosystému. Napriek tomu, že niektoré funkcie neboli dokončené (fyzický obal, offline mód), systém poskytuje plne funkčné a spoľahlivé riešenie pre zobrazovanie meteorologických údajov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najväčšou pridanou hodnotou projektu je:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nezávislosť"
        }), " od komerčných služieb a mesačných poplatkov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibilita"
        }), " vďaka open-source prístupu a GitHub auto-update"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vzdelávací potenciál"
        }), " pre prácu s embedded systémami, Python GUI, a API integráciou"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rozšíriteľnosť"
        }), " o vlastné senzory, integrácie, a funkcie"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt je pripravený na produkčné nasadenie s vedomím, že budúce verzie môžu pridať chýbajúce funkcie a vylepšenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Repository"
      }), ": ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/SpiKee49/weather-pi",
        children: "https://github.com/SpiKee49/weather-pi"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
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



/***/ }),

/***/ 73014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/top-level-403ef3dece546aa30ca815a30e9271b5.png");

/***/ }),

/***/ 73554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/project struct-f20d730bb561eb08864cf6c8dafb0177.png");

/***/ }),

/***/ 78669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/photo1-2b4fcab75bea564d89c8e5f5a99b3995.jpg");

/***/ }),

/***/ 79345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/risk-assesment-bb06600bfbc9ab88f66ffaffc45ff931.png");

/***/ }),

/***/ 79908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/drawing-c565d59f972e4d16a83af76b35302d4d.jpg");

/***/ }),

/***/ 80242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/non-functiona-req-7c368159d641c18ff358f646427ad664.png");

/***/ }),

/***/ 86239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/application-flow-e2cbabd8dc5974f8c7073c902a544cae.png");

/***/ }),

/***/ 99210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/functional-requirements-e9839a0838343ab413a2b839d6e6d3ae.png");

/***/ })

}]);