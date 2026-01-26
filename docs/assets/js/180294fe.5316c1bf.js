"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[78014],{

/***/ 2215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/piano_trainer_setup-cf0cc79532a23c353e47846cd88751e0.png");

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

/***/ 39106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ledbar_v1-441115f4c690cbc31d7f2e4db7ee87d6.png");

/***/ }),

/***/ 42685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/box_model-5ac00ca3d1de7a9c9d444498762a754b.png");

/***/ }),

/***/ 49811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zahradny_system-428484b21585ac31f34ac7c28d3baae3.jpg");

/***/ }),

/***/ 55142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/led_Piano_nakres-0b1ab685253f497441b27af4c0777df0.jpg");

/***/ }),

/***/ 55922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/SekvencakFirstDraft-80d147c6ebf9aaa8d384370664575465.png");

/***/ }),

/***/ 65892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Led_holder_model-0c78d949973cf0d6f63107d0da547866.png");

/***/ }),

/***/ 66235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/psie_napady-f8c186ab8bcd57bba788f16736c99218.png");

/***/ }),

/***/ 67149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pico_led_schema-7be962e019635496c479331dc2c8c4ad.png");

/***/ }),

/***/ 67835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_007_presentation_slides_md_180_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-007-presentation-slides-md-180.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_007_presentation_slides_md_180_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation/slides","title":"slides","description":"{{LED Piano Trainer Presentation}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.922730+00:00","fm_version_comment":"","guid":"7fe78eb4-4cc0-4427-bd26-273a01380af8","dao":"class_sthdf_dashboard","title":"slides","description":"{{LED Piano Trainer Presentation}}","author":"Samuel Kohút","authors":["Roman Kazicka"],"category":"","type":"Presentation","priority":"high","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2026-01-14 17:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2026 Samuel Kohút","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ007","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.922730+00:00',
	fm_version_comment: '',
	guid: '7fe78eb4-4cc0-4427-bd26-273a01380af8',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: '{{LED Piano Trainer Presentation}}',
	author: 'Samuel Kohút',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: 'Presentation',
	priority: 'high',
	tags: [],
	locale: 'sk',
	created: '2025-11-28 16:54',
	modified: '2026-01-14 17:54',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2026 Samuel Kohút',
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
const contentTitle = '🎹 LED Piano Trainer';

const assets = {

};



const toc = [{
  "value": "Svetelná pomôcka na učenie hry na klavíri",
  "id": "svetelná-pomôcka-na-učenie-hry-na-klavíri",
  "level": 3
}, {
  "value": "💡 Ako to celé začalo",
  "id": "-ako-to-celé-začalo",
  "level": 2
}, {
  "value": "🎨 Od nápadu k riešeniu (LED Piano)",
  "id": "-od-nápadu-k-riešeniu-led-piano",
  "level": 2
}, {
  "value": "🚀 Ciele a Architektúra",
  "id": "-ciele-a-architektúra",
  "level": 2
}, {
  "value": "1. Business &amp; Účel",
  "id": "1-business--účel",
  "level": 3
}, {
  "value": "2. Top Level a Solution Architektúra",
  "id": "2-top-level-a-solution-architektúra",
  "level": 3
}, {
  "value": "🛠️ Hardvérové komponenty",
  "id": "️-hardvérové-komponenty",
  "level": 4
}, {
  "value": "💻 Softvérové nástroje",
  "id": "-softvérové-nástroje",
  "level": 4
}, {
  "value": "💻 Infraštruktúra",
  "id": "-infraštruktúra",
  "level": 4
}, {
  "value": "3. Solution Architektúra",
  "id": "3-solution-architektúra",
  "level": 3
}, {
  "value": "🔄 Komunikačný a dátový tok (Data Pipeline)",
  "id": "-komunikačný-a-dátový-tok-data-pipeline",
  "level": 4
}, {
  "value": "🔌 Fyzická schéma zapojenia",
  "id": "-fyzická-schéma-zapojenia",
  "level": 4
}, {
  "value": "🔍 4. Analýza",
  "id": "-4-analýza",
  "level": 2
}, {
  "value": "5. Design a 3D Tlač",
  "id": "5-design-a-3d-tlač",
  "level": 2
}, {
  "value": "💻 6. Implementácia a Softvér",
  "id": "-6-implementácia-a-softvér",
  "level": 2
}, {
  "value": "✅ Testovanie a Prevádzka",
  "id": "-testovanie-a-prevádzka",
  "level": 2
}, {
  "value": "🏆 Zhrnutie a Výsledky",
  "id": "-zhrnutie-a-výsledky",
  "level": 2
}, {
  "value": "🧑‍🎓 Viac informácií",
  "id": "-viac-informácií",
  "level": 2
}, {
  "value": "🧠 Reflexia",
  "id": "-reflexia",
  "level": 2
}, {
  "value": "Máte nejaké otázky?",
  "id": "máte-nejaké-otázky",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
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
  }, {Details} = _components;
  if (!Details) _missingMdxReference("Details", true);
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/",
        children: "🏠 Domov"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-led-piano-trainer",
        children: "🎹 LED Piano Trainer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "svetelná-pomôcka-na-učenie-hry-na-klavíri",
      children: "Svetelná pomôcka na učenie hry na klavíri"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ID Projektu:"
      }), " STHDF-LEDPIANO", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Autor:"
      }), " Samuel Kohút"]
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/piano_trainer_setup.png",
        width: "400",
        alt: "Finálny produkt"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "#🖼️ GitHub náhľad (bez Sites)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Finálny produkt",
        src: (__webpack_require__(2215)/* ["default"] */ .A) + "",
        width: "2048",
        height: "1537"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-celé-začalo",
      children: "💡 Ako to celé začalo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Moje prvé úvahy smerovali k zjednodušeniu života v záhrade alebo tréningu psa. Premýšľal som nad automatickým trénovačom psov, automatickým robotom pre sypanie granúl, automatickými dverami do klietky pre psa a automatickým pumpovacím systémamom, ktorý by púšťal dažďovú vodu do ostatných nádob alebo len do odpadoveho miesta."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Pomôcky pre psa (Nákres)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Záhradný systém (Nákres)"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/psie_napady.png",
                width: "400",
                alt: "Pomôcky pre psa (nákres)"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "Pomôcky pre psa (nákres)",
              src: (__webpack_require__(66235)/* ["default"] */ .A) + "",
              width: "1671",
              height: "2044"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/zahradny_system.jpg",
                width: "400",
                alt: "Záhradný systém (nákres)"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "Záhradný systém (nákres)",
              src: (__webpack_require__(49811)/* ["default"] */ .A) + "",
              width: "4624",
              height: "3472"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém:"
        }), " Testovanie a implementovanie by vyžadovalo dochádzanie 10 hodín (Snina vs. Bratislava). To bolo počas semestra nereálne."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rozhodnutie:"
        }), " Vydať sa smerom k nápadu, ktorý môžem plne vyvinúť a testovať v domácich \"lab\" podmienkach na stole."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-od-nápadu-k-riešeniu-led-piano",
      children: "🎨 Od nápadu k riešeniu (LED Piano)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spomenul som si na svoj starý nápad. Pomôcka, ktorá ti ukáže, čo máš hrať na klavíri pomocou svetiel."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "LED Piano (nákres)"
          })
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsx)(_components.tr, {
          children: (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/led_Piano_nakres.jpg",
                width: "400",
                alt: "LED Piano (nákres)"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "LED Piano (nákres)",
              src: (__webpack_require__(55142)/* ["default"] */ .A) + "",
              width: "4624",
              height: "3472"
            })]
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Základný princíp"
      }), " bol, že LED diódy sa zasvetia na konkrétnu farbu podľa typu ackcie, čo má používateľ vykonať:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zelená:"
        }), " = Stlač"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modrá:"
        }), " = Drž"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Červená:"
        }), " = Chyba"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementácia:"
      }), " Rozhodovanie medzi rozobratím klávesnice a externou lištou."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ciele-a-architektúra",
      children: "🚀 Ciele a Architektúra"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-business--účel",
      children: "1. Business & Účel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cieľ:"
      }), " Vytvoriť fyzickú pomôcku, ktorá premení učenie klavíra na vizuálnu rytmickú hru. Zjednodušiť tak učenie hry na klavíri pre deti a začiatočníkov."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cieľová skupina:"
        }), " Deti, úplní začiatočníci a učitelia hudby hľadajúci motivačné a interaktívne pomôcky."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Business Hodnota:"
        }), " Odstránenie bariéry čítania zložitých nôt v začiatkoch a možnosť vyrobenia dostupnej a replikovateľnej fyzickej pomôcky."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-top-level-a-solution-architektúra",
      children: "2. Top Level a Solution Architektúra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "LED Piano Trainer"
      }), " predstavuje malý, ale kompletný systém, ktorý demonštruje princípy systémového myslenia. Skladá sa z navzájom prepojených vrstiev (hardvér, softvér a ľudská interakcia), ktoré spolu tvoria fungujúci ekosystém. Každá vrstva závisí od ostatných a celkové správanie vyplýva z ich vzájomnej spolupráce, nie z ktorejkoľvek samostatnej časti."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph Human_Interaction [Ľudská vrstva]\n        User[Používateľ]\n    end\n\n    subgraph Software_Layer [Softvérová vrstva - PC]\n        App[Piano Trainer App]\n        Transcription[AI Transkripcia]\n    end\n\n    subgraph Hardware_Layer [Hardvérová vrstva]\n        Pico[Raspberry Pi Pico]\n        LED[3D LED Nadstavba]\n        Keyboard[MIDI Keyboard]\n    end\n\n    User -->|Sleduje svetlo| LED\n    User -->|Stláča klávesy| Keyboard\n    Keyboard -->|MIDI signál| App\n    App -->|Validácia stlačenia| User\n    App -->|Príkazy Serial| Pico\n    Pico -->|Ovláda| LED\n    Transcription -->|Generuje noty| App\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "️-hardvérové-komponenty",
      children: "🛠️ Hardvérové komponenty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Komponent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Popis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Účel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Raspberry Pi Pico"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mikrokontrolérová doska"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Riadi LED diódy a spracúva hlavnú logiku."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Breadboard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Prototypová doska"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Umožňuje prepájanie komponentov bez spájkovania."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "LED diódy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Adresovateľný pás"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vizuálne indikátory pre jednotlivé klávesy klavíra."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jumper káble"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Konektory M-M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Prepájajú piny Pico dosky s LED pásom a napájaním."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Napájanie / USB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "5V USB zdroj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Napája Pico a celý LED okruh."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-softvérové-nástroje",
      children: "💻 Softvérové nástroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Nástroj"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Popis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Účel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Python"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Programovací jazyk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Jazyk pre vytvorenie interaktívnej aplikácie na riadenie celého flowu hrania na takomto klavíri."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MicroPython"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Programovací jazyk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Jazyk pre Pico, ktorý definuje logiku ovládania LED."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thonny IDE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Vývojové prostredie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Používa sa na písanie, ladenie a nahrávanie kódu."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-infraštruktúra",
      children: "💻 Infraštruktúra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Nástroj"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Popis"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Účel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub Repozitár"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Verziovací systém"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Bezpečné ukladanie súborov projektu a dokumentácie."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OneNote"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Dokumentačný nástroj"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Sledovanie progresu, inžiniersky denník a reflexia."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-solution-architektúra",
      children: "3. Solution Architektúra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solution architektúra sa zameriava na tok dát a fyzické prepojenie, ktoré umožňuje transformáciu YouTube videa na svetelný signál."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-komunikačný-a-dátový-tok-data-pipeline",
      children: "🔄 Komunikačný a dátový tok (Data Pipeline)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém využíva distribuovanú logiku, kde sa náročné operácie vykonávajú na PC a real-time operácie na mikrokontroléri:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spracovanie dát (PC):"
        }), " Python aplikácia konvertuje zdroj (YouTube link/MIDI) na sekvenciu nôt. Využíva AI knižnice na transkripciu zvuku."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protokol (Serial):"
        }), " PC posiela serializované príkazy cez USB do Pico."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mapovanie (Pico):"
        }), " Firmvér prijme MIDI notu a podľa mapy (Key-to-LED) určí index na LED páse."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Svetelný výstup (Hardware):"
        }), " Cez PIO driver rozsvieti konkrétnu WS2812B diódu s presným časovaním."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu je zjednodušený pohľad na komunikáciu medzi jednotlivými časťami:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "sequenceDiagram\n    participant YT as YouTube / MIDI File\n    participant PC as Python App (PC)roman\n    participant Pico as Raspberry Pi Pico\n    participant LED as LED Pás\n\n    YT->>PC: Zdrojové dáta (Audio/MIDI)\n    Note over PC: AI Transkripcia (Basic Pitch)\n    PC->>PC: Mapovanie nôt na LED Index\n    PC->>Pico: Príkaz (Index, Farba)\n    Pico->>LED: Svietenie (Vizualizácia tónu)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu je pvotný pohľaď a ako sa časom menil na finálnu detailnejšiu verziu:"
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/SekvencakFirstDraft.png",
        width: "600",
        alt: "Sekvenčák – prvý draft"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/LemonTreePorovnanieSekvencakov.png",
        width: "1200",
        alt: "LemonTree porovnanie sekvenčákov"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Sekvenčák – prvý draft",
          src: (__webpack_require__(55922)/* ["default"] */ .A) + "",
          width: "682",
          height: "530"
        })
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "LemonTree porovnanie sekvenčákov",
          src: (__webpack_require__(84324)/* ["default"] */ .A) + "",
          width: "1577",
          height: "621"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-fyzická-schéma-zapojenia",
      children: "🔌 Fyzická schéma zapojenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu vidíme, ako Raspberry Pi Pico slúži ako most medzi digitálnym príkazom a elektrickým signálom pre LED pás."
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/pico_led_schema.png",
        width: "500",
        alt: "Detailná schéma zapojenia"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Detailná schéma zapojenia",
          src: (__webpack_require__(67149)/* ["default"] */ .A) + "",
          width: "1411",
          height: "585"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Najdôležitejšie technické aspekty zapojenia (Podrobnejšie v Knife):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Napájanie:"
        }), " Pico aj LED pás sú napájané spoločne z 5V VBUS linky (USB). To zjednodušuje kabeláž."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dátová linka:"
        }), " Použitý je Pin GP0 s rezistorom na ochranu dátového vstupu LED pásu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Izolácia:"
        }), " 3D tlačená nadstavba zabezpečuje fyzickú izoláciu svetla, aby každá LED osvetľovala práve jeden „box“ prislúchajúci klávesu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-4-analýza",
      children: "🔍 4. Analýza"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po hĺbkovej analýze fyzického MIDI keyboardu (rozobratie) som identifikoval technologické stopky:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nepriehľadný materiál:"
        }), " Klávesy sú z materiálu, ktorý svetlo nepohlcuje, ale blokuje."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mechanické obmedzenie:"
        }), " Čierne klávesy majú mechaniku, ktorá neumožňuje vedenie káblov bez deštrukcie nástroja."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verdikt:"
        }), " Architektonická zmena z vnútorného svietenia na externú LED nadstavbu, ktorá sa položí/pripevní na piano."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/rozobrate_piano.png",
        width: "600",
        alt: "Rozobraté MIDI piano"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Rozobraté MIDI piano",
          src: (__webpack_require__(75682)/* ["default"] */ .A) + "",
          width: "2048",
          height: "649"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    Start((Idea: LED v klávesoch)) --> Inspect[Rozobratie piana]\n    Inspect --> Problem1{Materiál?}\n    Inspect --> Problem2{Priestor?}\n    \n    Problem1 -- Nepriehľadný --> Reject[ZAMIETNUTÉ]\n    Problem2 -- Nedostatok miesta --> Reject\n    \n    Reject --> Pivot((Riešenie: Externá nadstavba))\n    Pivot --> Design[3D Modelovanie boxov]\n    Design --> Success[Finálny produkt]\n    \n    style Reject fill:#f96,stroke:#333,stroke-width:2px\n    style Success fill:#9f9,stroke:#333,stroke-width:4px\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-design-a-3d-tlač",
      children: "5. Design a 3D Tlač"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Design musel vyriešiť nesúlad viacerých vecí. Najprv sa musela vyriešiť správna izolácia svetla. Hrúbka priečok musela byť optimalizovaná aby sa zamedzilo presvitaniu do susedných boxov a zároveň presvítaniu hlavnej steny. Ďalším problémom bol nesúlad medzi rozostupom LED diód a samotnej šírke klávesov. Modulárna lišta teda musela byť navrhnutá tak, aby sa LED pás v každom boxe mierne ohol. Tým by sa dído vycentrovala presne na stred klávesu."
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/ledbar_experiments.png",
        width: "300",
        alt: "Experimentovanie s hrúbkou priečok"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Experimentovanie s hrúbkou priečok",
          src: (__webpack_require__(93937)/* ["default"] */ .A) + "",
          width: "2040",
          height: "1536"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vzhľadom na tieto obmedzenia a experimenty vznikla finálna verzia boxu pre jednu oktávu + krabička pre ochranu mikrokontroléra a kabeláže."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Finálna lišta pre LED pás"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Finálna krabička pre mikrokontrolér"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/Led_holder_model.png",
                width: "400",
                alt: "Finálna lišta pre LED pás"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "Finálna lišta pre LED pás",
              src: (__webpack_require__(65892)/* ["default"] */ .A) + "",
              width: "2761",
              height: "1288"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/box_model.png",
                width: "400",
                alt: "Finálna krabička pre mikrokontrolér"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "Finálna krabička pre mikrokontrolér",
              src: (__webpack_require__(42685)/* ["default"] */ .A) + "",
              width: "3510",
              height: "1973"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-6-implementácia-a-softvér",
      children: "💻 6. Implementácia a Softvér"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Softvér nie je len prehrávač, je to orchestračný nástroj. Vývoj prebiehal v troch evolučných vlnách. To ukazuje postupné vylepšovanie UX a robustnosti systému:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MVP (First Draft):"
        }), " Iba základné tlačidlá, testovanie sériového spojenia a statického svietenia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Beta (Experimentálne):"
        }), " Pridanie MIDI detekcie a integrácia AI transkripcie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gold (Finálne):"
        }), " Moderné GUI, podpora YouTube linkov, vizualizácia konzoly a dynamické mapovanie portov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vyvinul som komplexnú desktopovú aplikáciu \"Piano Trainer\" v Pythone, ktorá slúži ako riadiace centrum."
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/all_versions_app.png",
        width: "700",
        alt: "App – všetky verzie"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "App – všetky verzie",
          src: (__webpack_require__(76377)/* ["default"] */ .A) + "",
          width: "3855",
          height: "2672"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vlastnosti:"
        }), " Detekcia MIDI zariadení, správa portov, AI transkripcia nôt z YouTube a komplexný prehrávač MIDI súborov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-testovanie-a-prevádzka",
      children: "✅ Testovanie a Prevádzka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém bol testovaný na latenciu a presnosť mapovania nôt na jednotlivé LED boxy."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=GONJa6kOOnw",
        children: "LED Piano Showcase"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "YouTube demonštrácia LED reakcií na prehrávané tóny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/ledbar_v1.png",
        width: "600",
        alt: "Demo"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Demo",
          src: (__webpack_require__(39106)/* ["default"] */ .A) + "",
          width: "1920",
          height: "789"
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výsledok:"
        }), " Systém úspešne čaká na vstup používateľa (stlačenie klávesu), kým pokračuje v skladbe."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PS:"
        }), " Schválené aj mladšou sesternicou a bratrancom"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-zhrnutie-a-výsledky",
      children: "🏆 Zhrnutie a Výsledky"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt splnil a v mnohom prekonal pôvodné očakávania."
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "LED Lišta na klavíri"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Vyvinutá aplikácia"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/ledbar_final.png",
                width: "400",
                alt: "LED lišta na klavíri"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "LED lišta na klavíri",
              src: (__webpack_require__(77085)/* ["default"] */ .A) + "",
              width: "1920",
              height: "818"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)("figure", {
              children: (0,jsx_runtime.jsx)("img", {
                src: "/sthdf_2025/PRJ_007/images/app_final.png",
                width: "300",
                alt: "Vyvinutá aplikácia"
              })
            }), (0,jsx_runtime.jsx)("br", {}), (0,jsx_runtime.jsx)(_components.img, {
              alt: "Vyvinutá aplikácia",
              src: (__webpack_require__(68620)/* ["default"] */ .A) + "",
              width: "886",
              height: "743"
            })]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Plne funkčný hardvér:"
        }), " 3D tlačená lišta + riadiaca jednotka."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Kompletný softvér:"
        }), " Pipeline od YouTube linku až po rozsvietenie LED."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dokumentácia:"
        }), " Vytvorené detailné Knowledge Contributions (KNIFES) pre každý krok."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/piano_trainer_setup.png",
        width: "800",
        alt: "Finálny produkt"
      })
    }), "\n", (0,jsx_runtime.jsxs)(Details, {
      children: [(0,jsx_runtime.jsx)("summary", {
        children: "🖼️ GitHub náhľad (bez Sites)"
      }), (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.img, {
          alt: "Finálny produkt",
          src: (__webpack_require__(2215)/* ["default"] */ .A) + "",
          width: "2048",
          height: "1537"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-viac-informácií",
      children: "🧑‍🎓 Viac informácií"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎥 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "YouTube:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.youtube.com/@PianoLedTrainer1",
          children: "Pozrieť videá projektu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["💼 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "LinkedIn:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.linkedin.com/in/led-piano-trainer-61495a38b/",
          children: "Profil projektu LED Piano Trainer"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📂 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/Samuel-Kohut/SMVIT-PON_15_Kohut",
          children: "Zdrojové kódy, 3D modely a technická dokumentácia."
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📝 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OneNote"
        }), " (Class Notebook):  Mám tam opísaný celý vývoj projektu s časovou stopou a s viacerými detailmi. Aj viacero knowledge contributions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-reflexia",
      children: "🧠 Reflexia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ponaučenie:"
        }), " Mechanické kompromisy sú pri fyzických produktoch nevyhnutné."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Odkaz:"
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "\"Ak niečo nefunguje, neznamená to, že to je zlý nápad - len to potrebuje inú cestu.\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-ďakujem-za-pozornosť",
      children: "🎹 Ďakujem za pozornosť!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "máte-nejaké-otázky",
      children: "Máte nejaké otázky?"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/",
        children: "🏠 Späť na domovskú stránku"
      })
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
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}



/***/ }),

/***/ 68620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/app_final-356c1ac0868517a9d4d69032f477dce2.png");

/***/ }),

/***/ 75682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/rozobrate_piano-3942fd93ee9c3ab072b7c2224fdc960b.png");

/***/ }),

/***/ 76377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/all_versions_app-c10ebdd3fd01cbf380a77cdb96fbafc9.png");

/***/ }),

/***/ 77085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ledbar_final-52c4cdaba0856616ece6f8bc94610f58.png");

/***/ }),

/***/ 84324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/LemonTreePorovnanieSekvencakov-44ada123cebd1df158771811d72131f6.png");

/***/ }),

/***/ 93937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ledbar_experiments-5184f6ec90b743ccea6bbe396fab18c3.png");

/***/ })

}]);