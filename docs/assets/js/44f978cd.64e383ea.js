"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[92664],{

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

/***/ 86089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_kvetinacu-241c5656e0e04cb926e5de1b6feddc25.jpg");

/***/ }),

/***/ 87529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_012_sdlc_03_solution_architecture_index_md_44f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-012-sdlc-03-solution-architecture-index-md-44f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_012_sdlc_03_solution_architecture_index_md_44f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/solution-architecture/index","title":"03 solution architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/03-solution-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/solution-architecture/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/solution-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.985656+00:00","fm_version_comment":"","guid":"a5903b37-8ce4-4292-8e13-a31f7df5a4fb","dao":"class_sthdf_dashboard","title":"03 solution architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"02 top level architecture","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/top-level-architecture/"},"next":{"title":"design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/solution-architecture/design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/03-solution-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.985656+00:00',
	fm_version_comment: '',
	guid: 'a5903b37-8ce4-4292-8e13-a31f7df5a4fb',
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
  "value": "Pôvodný náčrt kvetináču",
  "id": "pôvodný-náčrt-kvetináču",
  "level": 3
}, {
  "value": "Návrh 3D modelov vo Fusion 360",
  "id": "návrh-3d-modelov-vo-fusion-360",
  "level": 3
}, {
  "value": "Vytlačený 3D model",
  "id": "vytlačený-3d-model",
  "level": 3
}, {
  "value": "Zoznam komponentov",
  "id": "zoznam-komponentov",
  "level": 3
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
  "value": "Schéma zapojenia (Circuit Diagram)",
  "id": "schéma-zapojenia-circuit-diagram",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
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
        id: "03-solution-architecture",
        children: "03-Solution Architecture"
      })
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vytlačený-3d-model",
      children: "Vytlačený 3D model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "casti kvetinacu",
        src: (__webpack_require__(34613)/* ["default"] */ .A) + "",
        width: "1730",
        height: "1298"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "spojeny kvetinac",
        src: (__webpack_require__(65686)/* ["default"] */ .A) + "",
        width: "1697",
        height: "1273"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "vyuzitie kvetinacu",
        src: (__webpack_require__(48869)/* ["default"] */ .A) + "",
        width: "1277",
        height: "1703"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zoznam-komponentov",
      children: "Zoznam komponentov"
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
      id: "schéma-zapojenia-circuit-diagram",
      children: "Schéma zapojenia (Circuit Diagram)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Návrh"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na nasledujúcom obrzáku je náš rukou nakreslený náčrť, ako by sme si zapojenie s Arduinom predstavovali.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "navrh zapojenia",
        src: (__webpack_require__(94586)/* ["default"] */ .A) + "",
        width: "1602",
        height: "1202"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledné zapojenie"
      })
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/solution-architecture/design",
          children: "Solution design"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/",
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

/***/ 94586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/navrh_zapojenia-d278da508e1402b5719e4bf6e2836792.jpg");

/***/ })

}]);