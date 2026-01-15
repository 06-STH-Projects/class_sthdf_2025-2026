"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[23752],{

/***/ 9643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/requirements-684b09ffecdfbb35090d925470c0c38f.bmp");

/***/ }),

/***/ 16393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/breadboard-f0be43e8cb79ad1b5d995e4b5bcad2c3.png");

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

/***/ 32981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zapojenie_breadboard-e9e5e6d05737e50d69b34704990f13aa.jpg");

/***/ }),

/***/ 34613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kvetinac_casti-b9dee38e8be44697a312c8a679e20857.jpg");

/***/ }),

/***/ 36980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/insert-1733a9ac00e22e228495877cf232d196.png");

/***/ }),

/***/ 45363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/arduino-50823942d251c0009a213fd22222a539.png");

/***/ }),

/***/ 48869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kvetinac_s_kvetom-4e2620ab420d6397179fbfaca2d3113e.png");

/***/ }),

/***/ 60010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zapojenie-1393c3ad28e4cb7b4f8c4e4203eab14d.png");

/***/ }),

/***/ 65686:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kvetinac_cely-72fe5b3a0dcf592bf108cc4f84b62097.jpg");

/***/ }),

/***/ 68444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/jumper_kable-b13ac0e154d3e66237e59f5e423ec7ec.png");

/***/ }),

/***/ 73439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/senzor_vlhkosti-b8f456ed49ccd5577fe5d7a3c95f339d.png");

/***/ }),

/***/ 73993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/business_process_viewpoint-9769115c6dc709b42d99f4895fb36939.bmp");

/***/ }),

/***/ 86089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_kvetinacu-241c5656e0e04cb926e5de1b6feddc25.jpg");

/***/ }),

/***/ 87714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zapojenie_bez_breadboardu-8a746eff4c1e3f618e7c19eef6c2071a.jpg");

/***/ }),

/***/ 93666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pot-bf38c9abbdb12dcb661963d5c8295ea9.png");

/***/ }),

/***/ 94357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kvetinac_so_senzorom-30b4f696c4afa330e197f88726c292c0.png");

/***/ }),

/***/ 94586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_zapojenia-d278da508e1402b5719e4bf6e2836792.jpg");

/***/ }),

/***/ 99100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/system-98689dc3f7bdefa084ad6de6dc9aa9fa.bmp");

/***/ }),

/***/ 99808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_012_presentation_slides_md_6d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-012-presentation-slides-md-6d4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_012_presentation_slides_md_6d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.983300+00:00","fm_version_comment":"","guid":"7fdce06f-1d41-4477-9a43-dc01c83240d9","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ012","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/"},"next":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.983300+00:00',
	fm_version_comment: '',
	guid: '7fdce06f-1d41-4477-9a43-dc01c83240d9',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: '{{DESCRIPTION}}',
	slug: '/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides',
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
const contentTitle = 'PRJ012 — Presentation';

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
  "value": "Requirements",
  "id": "requirements",
  "level": 3
}, {
  "value": "Business Process",
  "id": "business-process",
  "level": 3
}, {
  "value": "02-Top Level Architecture",
  "id": "02-top-level-architecture",
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
  "value": "03-Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "Použité komponenty",
  "id": "použité-komponenty",
  "level": 3
}, {
  "value": "04-Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "Project Roadmap",
  "id": "project-roadmap",
  "level": 3
}, {
  "value": "05-Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "Schéma zapojenia",
  "id": "schéma-zapojenia",
  "level": 3
}, {
  "value": "Pôvodný náčrt kvetináču",
  "id": "pôvodný-náčrt-kvetináču",
  "level": 3
}, {
  "value": "Návrh 3D modelov vo Fusion 360",
  "id": "návrh-3d-modelov-vo-fusion-360",
  "level": 3
}, {
  "value": "06-Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "Zapojenie elektroniky",
  "id": "zapojenie-elektroniky",
  "level": 3
}, {
  "value": "Zapojenie senzora vlhkosti s Arduino Nano",
  "id": "zapojenie-senzora-vlhkosti-s-arduino-nano",
  "level": 4
}, {
  "value": "Zapojenie OLED displeja (I2C) s Arduino Nano",
  "id": "zapojenie-oled-displeja-i2c-s-arduino-nano",
  "level": 4
}, {
  "value": "Výsledná schéma zapojenia",
  "id": "výsledná-schéma-zapojenia",
  "level": 3
}, {
  "value": "Vytlačený 3D model",
  "id": "vytlačený-3d-model",
  "level": 3
}, {
  "value": "Finálny produkt",
  "id": "finálny-produkt",
  "level": 3
}, {
  "value": "Možné vylepšenia v budúcnsosti",
  "id": "možné-vylepšenia-v-budúcnsosti",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj012--presentation",
        children: "PRJ012 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- Headline ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headline",
      children: "Headline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-012-ST_012-ST_012-SmartPot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "finalny produkt",
        src: (__webpack_require__(94357)/* ["default"] */ .A) + "",
        width: "1282",
        height: "1709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot spája 3D tlač a jednoduchú elektroniku, aby uľahčil starostlivosť o rastliny každému používateľovi, od začiatočníkov až po nadšencov. Umožňuje presné meranie vlhkosti a poskytuje jasnú vizuálnu informáciu o tom, či rastlina potrebuje vodu.\n--- Headline ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-012-ST_012-ST_012-SmartPot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot je inteligentný samozavlažovací kvetináč, ktorý kombinuje 3D tlačený kvetináč so vstavaným zásobníkom vody, vlhkostný senzor, Arduino Nano a OLED displej. Senzor meria vlhkosť pôdy v reálnom čase a Arduino spracováva namerané údaje, ktoré sa následne zobrazujú na displeji formou percentuálneho ukazovateľa a smajlíka."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento systém umožňuje používateľovi okamžite vidieť, či rastlina potrebuje zálievku, a tým znižuje riziko prelievania alebo vysychania. SmartPot tak poskytuje praktické, intuitívne a spoľahlivé riešenie pre každodennú starostlivosť o rastliny."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- obsah ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/business/",
          children: "01-Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/top-level-architecture/",
          children: "02-Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/solution-architecture/",
          children: "03-Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/implementation/",
          children: "06-Implementation"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- obsah ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01-Business"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "requirements",
      children: "Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "requirements",
        src: (__webpack_require__(9643)/* ["default"] */ .A) + "",
        width: "743",
        height: "731"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "business-process",
      children: "Business Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(73993)/* ["default"] */ .A) + "",
        width: "1229",
        height: "411"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02-Top Level Architecture"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nasledujúci diagram zobrazuje hlavné komponenty systému a ich prepojenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(99100)/* ["default"] */ .A) + "",
        width: "678",
        height: "488"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03-Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SmartPot je kombináciou viacerých komponentov. Vlhkostný senzor meria pôdu v reálnom čase, Arduino spracováva údaje a OLED displej ich zobrazuje percentuálne a pomocou smajlíka."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "použité-komponenty",
      children: "Použité komponenty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Komponent"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Množstvo"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arduino Nano"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OLED displej (I2C, 1.3″)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Senzor vlhkosti pôdy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jumper káble (M–F, M–M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cca 30 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Breadboard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "USB kábel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3D tlačený kvetináč (PETG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3D tlačené vnútro do kvetináča (PETG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 ks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Arduino Nano",
        src: (__webpack_require__(45363)/* ["default"] */ .A) + "",
        width: "501",
        height: "367"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://techfun.sk/produkt/arduino-nano-klon-s-usb-c/",
        children: "Arduino Nano"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Senzor vlhkosti",
        src: (__webpack_require__(73439)/* ["default"] */ .A) + "",
        width: "940",
        height: "573"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://techfun.sk/produkt/senzor-vlhkosti-pody/",
        children: "Senzor vlhkosti"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Jumper kable",
        src: (__webpack_require__(68444)/* ["default"] */ .A) + "",
        width: "405",
        height: "381"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://techfun.sk/produkt/kabliky-40-kusov-20-cm-m-f/",
        children: "Jumper kable"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Breadboard",
        src: (__webpack_require__(16393)/* ["default"] */ .A) + "",
        width: "1133",
        height: "757"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://techfun.sk/produkt/nepajive-kontaktne-pole-830-bodov-transparentne/",
        children: "Breadboard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04-Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-roadmap",
      children: "Project Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Úvodný koncept"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pôvodná myšlienka bola vytvoriť iba samozavlažovací kvetináč pomocou 3D tlače."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Po diskusii s kolegom však vznikla myšlienka projekt rozšíriť o elektronickú časť, ktorá bude vedieť sledovať vlhkosť pôdy."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Papierové návrhy"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ručný náčrt tvaru kvetináča, zásobníka vody a umiestnenia elektroniky."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Náčrt zapojenia senzora, Arduina a displeja."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tieto náčrty tvorili prvú verziu architektúry pred spracovaním v EA."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Modelovanie architektúry v Enterprise Architect (EA)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Business Layer"
            }), " – definovanie potrieb používateľa a základného procesu."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "System Layer (Top Level Architecture)"
            }), " – návrh architektúry: senzor → Arduino → displej → používateľ."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Technology Layer"
            }), " – technická schéma zapojenia + komponenty použité pre prototyp."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D modelovanie kvetináča"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kompletný návrh vo Fusion 360."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Export modelu a príprava pre 3D tlač."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D tlač prototypu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tlač prebehla vo FabLabe."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Priebežné úpravy a drobné iterácie podľa potreby."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Zostavenie HW a programovania (paralelne s 3D tlačou)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provný prototyp predstavoval prepojenie vlhkostného senzora, OLED displeja a Arduina na breadboarde."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Programovanie základnej funkcionality:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "čítanie vlhkosti,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "prepočet na percentá,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "zobrazenie na displeji,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "smajlík podľa stavu pôdy."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrácia HW s vytlačeným 3D modelom"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Druhý prototyp predstavoval zapojenie komponentov bez breadboardu do finálneho 3D tela."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Umiestnenie senzora do rastliny a testovanie v reálnych podmienkach."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Finálna úprava kódu."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Testovanie a ladenie"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test reakcií displeja pri rôznych úrovniach vlhkosti."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kontrola kompatibility 3D modelu s elektronikou."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finalizácia projektu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dokončenie dokumentácie."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pridanie fotografií prototypu."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05-Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "schéma-zapojenia",
      children: "Schéma zapojenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na nasledujúcom obrzáku je náš rukou nakreslený náčrť, ako by sme si zapojenie s Arduinom predstavovali.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "navrh zapojenia",
        src: (__webpack_require__(94586)/* ["default"] */ .A) + "",
        width: "1602",
        height: "1202"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pôvodný-náčrt-kvetináču",
      children: "Pôvodný náčrt kvetináču"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "navrh kvetinacu",
        src: (__webpack_require__(86089)/* ["default"] */ .A) + "",
        width: "1565",
        height: "1174"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "návrh-3d-modelov-vo-fusion-360",
      children: "Návrh 3D modelov vo Fusion 360"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "kvetinac",
        src: (__webpack_require__(93666)/* ["default"] */ .A) + "",
        width: "2042",
        height: "993"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "zasobnik",
        src: (__webpack_require__(36980)/* ["default"] */ .A) + "",
        width: "2040",
        height: "1011"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06-Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zapojenie-elektroniky",
      children: "Zapojenie elektroniky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zapojenie-senzora-vlhkosti-s-arduino-nano",
      children: "Zapojenie senzora vlhkosti s Arduino Nano"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "VCC → VIN (Arduino Nano)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GND → GND (Arduino Nano)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "A0 → A0 (Arduino Nano)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "zapojenie-oled-displeja-i2c-s-arduino-nano",
      children: "Zapojenie OLED displeja (I2C) s Arduino Nano"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "VCC → VIN (Arduino Nano)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GND → GND (Arduino Nano)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "SDA → A4 (Arduino Nano)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "SCL → A5 (Arduino Nano)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výsledná-schéma-zapojenia",
      children: "Výsledná schéma zapojenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na obrázku nižšie je zobrazená schéma zapojenia Arduina so senzorom a OLED displejom.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "schéma zapojenia",
        src: (__webpack_require__(60010)/* ["default"] */ .A) + "",
        width: "1503",
        height: "687"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Takto vyzeral prvotný prototyp zapojenia v breadboarde:\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "zapojenie v breadboarde",
        src: (__webpack_require__(32981)/* ["default"] */ .A) + "",
        width: "1130",
        height: "848"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A takto vyzeralo finálne zapojenie bez breadboardu:\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "zapojenie bez breadboardu",
        src: (__webpack_require__(87714)/* ["default"] */ .A) + "",
        width: "1683",
        height: "1263"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vytlačený-3d-model",
      children: "Vytlačený 3D model"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vytlačený kvetináč pozostával z dvoch častí, samotného kvetináča a vnútra, ktoré oddeľuje kvet od zásobníka vody.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "casti kvetinacu",
        src: (__webpack_require__(34613)/* ["default"] */ .A) + "",
        width: "1730",
        height: "1298"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na nasledujúcich obrázkoch je možné vidieť už spojené časti kvetináču.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "spojeny kvetinac",
        src: (__webpack_require__(65686)/* ["default"] */ .A) + "",
        width: "1697",
        height: "1273"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "vyuzitie kvetinacu",
        src: (__webpack_require__(48869)/* ["default"] */ .A) + "",
        width: "1277",
        height: "1703"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finálny-produkt",
      children: "Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt priniesol plne funkčný SmartPot, ktorý obsahuje 3D tlačený kvetináč so vstavaným zásobníkom vody, vlhkostný senzor a displej, ktorý poskytuje okamžitú vizuálnu spätnú väzbu. Meranie vlhkosti je presné a používateľ je notifikovaný o stave pôdy jednoduchým vizuálnym indikátorom na displeji (percento + smajlík)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "finalny produkt",
        src: (__webpack_require__(94357)/* ["default"] */ .A) + "",
        width: "1282",
        height: "1709"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "možné-vylepšenia-v-budúcnsosti",
      children: "Možné vylepšenia v budúcnsosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do budúcnosti vidíme niekoľko možností, ako prototyp vylepšiť. Mohli by sme pridať automatickú pumpu, ktorá by sama dopĺňala vodu zo zásobníka alebo integrovať Bluetooth či Wi-Fi pre odosielanie upozornení priamo do telefónu používateľa. Ďalšou možnosťou je pridať zvukový indikátor, ktorý by upozorňoval, že pôda je suchá, čím by sa zvýšila interaktivita a použiteľnosť zariadenia."
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