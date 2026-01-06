"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[65189],{

/***/ 3844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/suciastky-8080681996bcfe88d65623574f834c0e.jpg");

/***/ }),

/***/ 17447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model_stl_01-7f056ec27233c7b8cabab9cf9c0cba6f.png");

/***/ }),

/***/ 18520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/bigpic-dd4923a47c4e8f1d0cf745543fb854db.png");

/***/ }),

/***/ 27658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/prototyp_02-767a5acf88e54928cb97dd2f97f5efd3.jpg");

/***/ }),

/***/ 28131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_version_01-2a635c8d1932451502bfbe3963bb9a71.png");

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

/***/ 31768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/wrapper01-eddf78436638897ebf72c60a3f5dc9f1.jpg");

/***/ }),

/***/ 36249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/krezba02-cd93ac060367c1d464f4acec1b3934fc.jpg");

/***/ }),

/***/ 39635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_version_stl-b72e623ebb9f93d37d3abe5c619ca8cd.png");

/***/ }),

/***/ 50412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model_stl_02-65d2f2a3d524509640fd67ecb9d9cf3c.png");

/***/ }),

/***/ 55547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/prdct-c30b868b733f7eb6623ce2db238daec5.png");

/***/ }),

/***/ 69675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_028_sdlc_03_solution_architecture_index_md_dc6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-028-sdlc-03-solution-architecture-index-md-dc6.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_028_sdlc_03_solution_architecture_index_md_dc6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/solution-architecture/index","title":"03 solution architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/03-solution-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/solution-architecture/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/solution-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.035536+00:00","fm_version_comment":"","guid":"1a3e753d-a30e-4b63-9de4-b1bb90c72a76","dao":"class_sthdf_dashboard","title":"03 solution architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"02 top level architecture","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/top-level-architecture/"},"next":{"title":"design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/solution-architecture/design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/03-solution-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.035536+00:00',
	fm_version_comment: '',
	guid: '1a3e753d-a30e-4b63-9de4-b1bb90c72a76',
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
const contentTitle = '03 – Solution Architecture';

const assets = {

};



const toc = [{
  "value": "1️⃣ Ciele riešenia (Solution Goals)",
  "id": "1️⃣-ciele-riešenia-solution-goals",
  "level": 2
}, {
  "value": "2️⃣ Rozsah riešenia",
  "id": "2️⃣-rozsah-riešenia",
  "level": 2
}, {
  "value": "V scope",
  "id": "v-scope",
  "level": 3
}, {
  "value": "Out of scope",
  "id": "out-of-scope",
  "level": 3
}, {
  "value": "3️⃣ Prehľad modulov (Solution Building Blocks)",
  "id": "3️⃣-prehľad-modulov-solution-building-blocks",
  "level": 2
}, {
  "value": "3.1 Mechanický modul",
  "id": "31-mechanický-modul",
  "level": 3
}, {
  "value": "3.2 Pohonný modul",
  "id": "32-pohonný-modul",
  "level": 3
}, {
  "value": "3.3 Elektronický modul",
  "id": "33-elektronický-modul",
  "level": 3
}, {
  "value": "3.4 Ovládanie a indikácia (UI modul)",
  "id": "34-ovládanie-a-indikácia-ui-modul",
  "level": 3
}, {
  "value": "4️⃣ Vývoj produktu",
  "id": "4️⃣-vývoj-produktu",
  "level": 2
}, {
  "value": "Tu je zoznam súčiastok čo sme si napísali:",
  "id": "tu-je-zoznam-súčiastok-čo-sme-si-napísali",
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
        id: "03--solution-architecture",
        children: "03 – Solution Architecture"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento dokument popisuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "konkrétne riešenie prototypu FightWrap Winder"
      }), " na úrovni hlavných modulov, ich rozhraní a tokov (mechanika, elektronika, ovládanie). Nejde o výrobné výkresy – cieľom je mať jasne pomenované komponenty, zodpovednosti a väzby."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-ciele-riešenia-solution-goals",
      children: "1️⃣ Ciele riešenia (Solution Goals)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatizovať navíjanie bandáže pomocou jednoduchého elektromechanického riešenia."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zabezpečiť jednoduché ovládanie (spustenie/zastavenie) bez potreby zložitého UI."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navrhnúť modulárnu konštrukciu vhodnú na prototypovanie (3D tlač, dostupné diely)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-rozsah-riešenia",
      children: "2️⃣ Rozsah riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "v-scope",
      children: "V scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mechanická konštrukcia + navíjací mechanizmus"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Motor + prenos sily (spojka/prevod)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájanie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ovládacie tlačidlo + LED indikácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "out-of-scope",
      children: "Out of scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mobilná aplikácia, cloud, telemetria"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pokročilé režimy, automatická detekcia typu bandáže"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priemyselná certifikácia / masová výroba"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-prehľad-modulov-solution-building-blocks",
      children: "3️⃣ Prehľad modulov (Solution Building Blocks)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-mechanický-modul",
      children: "3.1 Mechanický modul"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zodpovednosť:"
      }), " drží bandáž a umožňuje jej navíjanie."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navíjacia oska (spool)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Držiak bandáže / vedenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nosná konštrukcia (3D tlač)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Krytovanie (ochrana prstov)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-pohonný-modul",
      children: "3.2 Pohonný modul"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zodpovednosť:"
      }), " vytvára rotáciu a prenáša krútiaci moment na osku."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DC motor (príp. motor s prevodovkou)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spojka / prevod (podľa dostupnosti)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uchytenie motora do rámu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-elektronický-modul",
      children: "3.3 Elektronický modul"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zodpovednosť:"
      }), " napájanie a spínanie motora."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájací vstup (USB / batéria)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spínanie motora (napr. tranzistor / driver modul)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ochrany (základné: poistka alebo ochrana proti skratu – podľa možností)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-ovládanie-a-indikácia-ui-modul",
      children: "3.4 Ovládanie a indikácia (UI modul)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Zodpovednosť:"
      }), " jednoduché ovládanie a informovanie používateľa."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tlačidlo START/STOP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED indikácia (napájanie / beží / chyba – voliteľné)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-vývoj-produktu",
      children: "4️⃣ Vývoj produktu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Počiatočný návrh bol vypracovaný pomocou skíc v zošite. Nasledujúce obrázky dokumentujú základné koncepty mechanického usporiadania a tokov energie v prototypu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(80110)/* ["default"] */ .A) + "",
        width: "4032",
        height: "3024"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(36249)/* ["default"] */ .A) + "",
        width: "3024",
        height: "4032"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento návrh sme neskôr preniesli do 3D formatu pomocou Fusion360\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(17447)/* ["default"] */ .A) + "",
        width: "1967",
        height: "995"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["No a už len vytlačili, a prvá verzia nášho produktu bola na svete.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(31768)/* ["default"] */ .A) + "",
        width: "3024",
        height: "4032"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Neskôr sme sa rozhodli tento náš produkt posunúť ďalej, aby bol zaujímavejší a tak sme sa rozhodli ho obohatiť o motorček na samonavýjanie. Tak sme sa snažili vymyslieť ako by to asi išlo a čo by sme nato potrebovali."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tu-je-zoznam-súčiastok-čo-sme-si-napísali",
      children: "Tu je zoznam súčiastok čo sme si napísali:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Komponent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Množstvo"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parametre"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Modul"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Motor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DC motor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12V, 100–500 RPM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pohonný"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spojka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flex spojka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D5–8mm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pohonný"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Batéria"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Li-Ion 18650 / akumulátor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elektronika"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tlačidlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Momentálne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dióda"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1N4007"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ochrana motora"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elektronika"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Konektory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JST / DuPont"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "podľa potreby"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elektronika"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Následne navrhli nový model\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(50412)/* ["default"] */ .A) + "",
        width: "935",
        height: "525"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Súčiastky sme sa snažili zohnať kde sa dalo, dokonca sme rozoberali aj stare eci čo sme našli doma. Kupodivu mali to čo sme potrebovali.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(3844)/* ["default"] */ .A) + "",
        width: "4640",
        height: "3472"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tvorba dalšieho prototypu prebiehala v low-budget forme. Cielom bolo spraviť PoC (Proof of Concept), tak ako sa to robí v reálnom podnikaní pred tým ako sa plne spustí do projektu.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(94997)/* ["default"] */ .A) + "",
        width: "3024",
        height: "4032"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(27658)/* ["default"] */ .A) + "",
        width: "3024",
        height: "4032"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finalna verzia produktu v stl formate:\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(39635)/* ["default"] */ .A) + "",
        width: "1765",
        height: "983"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(18520)/* ["default"] */ .A) + "",
        width: "1472",
        height: "958"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(28131)/* ["default"] */ .A) + "",
        width: "1332",
        height: "814"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "business process viewpoint",
        src: (__webpack_require__(55547)/* ["default"] */ .A) + "",
        width: "1536",
        height: "1024"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/solution-architecture/design",
          children: "Solution design"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/",
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



/***/ }),

/***/ 80110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/krezba01-800b9eb7e3d3bd13ba3d735aaaeebadf.jpg");

/***/ }),

/***/ 94997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/prototyp_01-883f1a62f0f18f34dbccd5d9849bd04a.jpg");

/***/ })

}]);