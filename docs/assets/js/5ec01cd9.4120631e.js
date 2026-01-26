"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[52105],{

/***/ 22472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/app_final-356c1ac0868517a9d4d69032f477dce2.png");

/***/ }),

/***/ 25253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ledbar_experiments-5184f6ec90b743ccea6bbe396fab18c3.png");

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

/***/ 30745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ledbar_final-52c4cdaba0856616ece6f8bc94610f58.png");

/***/ }),

/***/ 41482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/app_first_draft-c69b84fb60fc34c04b12b65d951f6d6c.png");

/***/ }),

/***/ 63264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/raspberry_box-89e93b4f6ee4f65aecb192a3774e7de1.png");

/***/ }),

/***/ 66200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_04_project_outcomes_md_5ec_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-04-project-outcomes-md-5ec.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_04_project_outcomes_md_5ec_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-outcomes","title":"Project Outcomes","description":"Dosiahnuté výsledky","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/04_project-outcomes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-outcomes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"project-summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/project-summary"},"next":{"title":"Pitch Presentation — LED Piano Trainer","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/pitch_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/04_project-outcomes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = 'Project Outcomes';

const assets = {

};



const toc = [{
  "value": "Dosiahnuté výsledky",
  "id": "dosiahnuté-výsledky",
  "level": 2
}, {
  "value": "Knifes",
  "id": "knifes",
  "level": 2
}, {
  "value": "🏆 Finálny produkt",
  "id": "-finálny-produkt",
  "level": 2
}, {
  "value": "🔧 Hardvérový výsledok",
  "id": "-hardvérový-výsledok",
  "level": 3
}, {
  "value": "Počiatočné experimenty s hrúbkou a ohýbaním",
  "id": "počiatočné-experimenty-s-hrúbkou-a-ohýbaním",
  "level": 4
}, {
  "value": "Prvá verzia (chybná – chýbajúci posledný box)",
  "id": "prvá-verzia-chybná--chýbajúci-posledný-box",
  "level": 4
}, {
  "value": "Opravená finálna verzia s doplneným boxom",
  "id": "opravená-finálna-verzia-s-doplneným-boxom",
  "level": 4
}, {
  "value": "3D tlačená krabička pre Raspberry + káble",
  "id": "3d-tlačená-krabička-pre-raspberry--káble",
  "level": 4
}, {
  "value": "💻 Softvérový výsledok",
  "id": "-softvérový-výsledok",
  "level": 3
}, {
  "value": "Piano Trainer App Prvotné",
  "id": "piano-trainer-app-prvotné",
  "level": 4
}, {
  "value": "Piano Trainer App Experimentálne",
  "id": "piano-trainer-app-experimentálne",
  "level": 4
}, {
  "value": "Piano Trainer App Finálne",
  "id": "piano-trainer-app-finálne",
  "level": 4
}, {
  "value": "🎬 Demo video",
  "id": "-demo-video",
  "level": 3
}, {
  "value": "📦 Celkový dodaný produkt",
  "id": "-celkový-dodaný-produkt",
  "level": 3
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "project-outcomes",
        children: "Project Outcomes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dosiahnuté-výsledky",
      children: "Dosiahnuté výsledky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčná hardvérová platforma: Raspberry Pi Pico + WS2812B pás + napájanie + MIDI klavír."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plne funkčná ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D-tlačená LED nadstavba"
        }), " a krabička na elektroniku, upevnená na klavíri."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LED dokážu svietiť v jednotlivých boxoch s dobrou difúziou a zarovnaním."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub a OneNote obsahujú úvodnú dokumentáciu, fotky, setup tutoriály a celkový vývoj projektu od jeho počiatkov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knifes",
      children: "Knifes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie Raspberry Pi so svetelným LED pásom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie Raspberry Pi s Thonny prostredím"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie AKAI MIDI klávesnice"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie brand účtu na YouTube (nie je súčasťou verejného repozitára)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie brand účtu na LinkedIne (nie je súčasťou verejného repozitára)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nastavenie nášho prodktu pre správne použitie !!!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-hardvérový-výsledok",
      children: "🔧 Hardvérový výsledok"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po sérii experimentov s hrúbkou priečok a ohýbaním LED pásu vznikla plne funkčná svetelná nadstavba, ktorá rovnomerne osvetľuje jednotlivé klávesy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "počiatočné-experimenty-s-hrúbkou-a-ohýbaním",
      children: "Počiatočné experimenty s hrúbkou a ohýbaním"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/ledbar_experiments.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "LED bar experiments",
        src: (__webpack_require__(25253)/* ["default"] */ .A) + "",
        width: "2040",
        height: "1536"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prvá-verzia-chybná--chýbajúci-posledný-box",
      children: "Prvá verzia (chybná – chýbajúci posledný box)"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/ledbar_v1.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "LED bar v1",
        src: (__webpack_require__(99670)/* ["default"] */ .A) + "",
        width: "1920",
        height: "789"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "opravená-finálna-verzia-s-doplneným-boxom",
      children: "Opravená finálna verzia s doplneným boxom"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/ledbar_final.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "LED bar final",
        src: (__webpack_require__(30745)/* ["default"] */ .A) + "",
        width: "1920",
        height: "818"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3d-tlačená-krabička-pre-raspberry--káble",
      children: "3D tlačená krabička pre Raspberry + káble"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/raspberry_box.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Raspberry box",
        src: (__webpack_require__(63264)/* ["default"] */ .A) + "",
        width: "2040",
        height: "1282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-softvérový-výsledok",
      children: "💻 Softvérový výsledok"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finálna verzia PC aplikácie obsahuje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MIDI detekciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prepojenie s Pico"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "generovanie LED sekvencií z MIDI alebo automatickej transkripcie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "piano-trainer-app-prvotné",
      children: "Piano Trainer App Prvotné"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/app_first_draft.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "App first draft",
        src: (__webpack_require__(41482)/* ["default"] */ .A) + "",
        width: "827",
        height: "604"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "piano-trainer-app-experimentálne",
      children: "Piano Trainer App Experimentálne"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/piano_trainer_app.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Piano trainer app",
        src: (__webpack_require__(75677)/* ["default"] */ .A) + "",
        width: "864",
        height: "644"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "piano-trainer-app-finálne",
      children: "Piano Trainer App Finálne"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/sthdf_2025/PRJ_007/images/app_final.png",
      width: "600"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "App final",
        src: (__webpack_require__(22472)/* ["default"] */ .A) + "",
        width: "886",
        height: "743"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-demo-video",
      children: "🎬 Demo video"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.youtube.com/watch?v=GONJa6kOOnw",
        children: "LED Piano Showcase"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "YouTube demonštrácia LED reakcií na prehrávané tóny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-celkový-dodaný-produkt",
      children: "📦 Celkový dodaný produkt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["3D tlačená LED nadstavba → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kompletne funkčná"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Krabička pre Raspberry → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hotová"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prepojenie keyboard → PC → Pico → LED → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "funguje"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PC aplikácia → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "funkčný prototyp (demo-ready)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Firmware pre Pico → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stabilný základ"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🟣 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Projekt prekročil pôvodné očakávania v kvalite hardvéru a estetickom prevedení. Softvér existuje ako funkčný prototyp pripravený na ďalší rozvoj."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/",
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



/***/ }),

/***/ 75677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/piano_trainer_app-b82107265c4d8a53b3fef6d32e07a5ba.png");

/***/ }),

/***/ 99670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ledbar_v1-441115f4c690cbc31d7f2e4db7ee87d6.png");

/***/ })

}]);