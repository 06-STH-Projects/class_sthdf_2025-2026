"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[20342],{

/***/ 10420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/drawing-014dcf7cf442b822d62cc1462399d174.jpg");

/***/ }),

/***/ 10975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/deployment_diagram-7f0a7fbb61a40bea65d2718950ef9ff9.jpg");

/***/ }),

/***/ 13039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model_bottom-bfbeca15872222f7ab0b78f602eb23f5.png");

/***/ }),

/***/ 13141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/component_diagram-dab2f8ad158b2845002f122434218984.jpg");

/***/ }),

/***/ 23859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model_side-6e324a002bcad3567e7a26c0924f58b7.png");

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

/***/ 31704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_on_1-c9a2baaace1fb2e6a40574828ed2d6b5.jpg");

/***/ }),

/***/ 33676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/parameters_cover-ee8beb803eb095d83926d91423350f29.png");

/***/ }),

/***/ 40535:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/sequence-3d927e1c04953dbf7b4279ebfc7280bf.jpg");

/***/ }),

/***/ 47150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_5-ccd6fc96a85afd965c93d9f55ecab2b0.jpg");

/***/ }),

/***/ 50776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_3-078756417b8d9ec04b205512f41878e2.jpg");

/***/ }),

/***/ 52394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_on_3-6c4e9a868ea6775f852450e584dae307.jpg");

/***/ }),

/***/ 58037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_2-6a5abe97a6b64e2b33442129fa2c2b86.jpg");

/***/ }),

/***/ 58813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_016_presentation_slides_md_50c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-016-presentation-slides-md-50c.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_016_presentation_slides_md_50c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation/slides","title":"SmartClock","description":"1. Prehľad projektu","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"PRJ016","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation/slides.md


const frontMatter = {};
const contentTitle = 'SmartClock';

const assets = {

};



const toc = [{
  "value": "1. Prehľad projektu",
  "id": "1-prehľad-projektu",
  "level": 2
}, {
  "value": "2. Obsah repozitára",
  "id": "2-obsah-repozitára",
  "level": 2
}, {
  "value": "3. Hardvér a fyzická integrácia",
  "id": "3-hardvér-a-fyzická-integrácia",
  "level": 2
}, {
  "value": "3.1 Použitý hardvér",
  "id": "31-použitý-hardvér",
  "level": 3
}, {
  "value": "3.2 Mechanická časť",
  "id": "32-mechanická-časť",
  "level": 3
}, {
  "value": "Ručný nákres prototypu na papier",
  "id": "ručný-nákres-prototypu-na-papier",
  "level": 4
}, {
  "value": "Nákres",
  "id": "nákres",
  "level": 4
}, {
  "value": "Model obalu v softvére",
  "id": "model-obalu-v-softvére",
  "level": 4
}, {
  "value": "4. Softvér a architektúra riešenia",
  "id": "4-softvér-a-architektúra-riešenia",
  "level": 2
}, {
  "value": "4.1 Softvérové vrstvy",
  "id": "41-softvérové-vrstvy",
  "level": 3
}, {
  "value": "4.2 Diagramy",
  "id": "42-diagramy",
  "level": 3
}, {
  "value": "5. Inštalácia a spustenie",
  "id": "5-inštalácia-a-spustenie",
  "level": 2
}, {
  "value": "5.1 Príprava microSD (Raspberry Pi Imager)",
  "id": "51-príprava-microsd-raspberry-pi-imager",
  "level": 3
}, {
  "value": "5.2 Inštalácia driveru displeja",
  "id": "52-inštalácia-driveru-displeja",
  "level": 3
}, {
  "value": "6. Finálny produkt",
  "id": "6-finálny-produkt",
  "level": 2
}, {
  "value": "Vypnutý displej",
  "id": "vypnutý-displej",
  "level": 3
}, {
  "value": "Fungujúci SmartClock",
  "id": "fungujúci-smartclock",
  "level": 3
}, {
  "value": "7. Záver",
  "id": "7-záver",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "smartclock",
        children: "SmartClock"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-prehľad-projektu",
      children: "1. Prehľad projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cieľom projektu je zostaviť jednoduché riešenie postavené na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Raspberry Pi"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LCD displeji"
      }), ", ktoré po spustení vykresľuje vybrané informácie priamo na lokálny displej."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riešenie je rozdelené na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HW vrstvu"
        }), ": Raspberry Pi + 3.5\" LCD displej"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SW vrstvu"
        }), ": Raspberry Pi OS + driver displeja + Python script"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Displej 320×480, kompatibilný s rôznymi verziami Raspberry Pi.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Ovládač sme riešili cez projekt LCD-show (", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/waveshareteam/LCD-show",
          children: "https://github.com/waveshareteam/LCD-show"
        }), "),", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Referencie: LCDWiki / LCD-show / Raspberry Pi Imager."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-obsah-repozitára",
      children: "2. Obsah repozitára"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Aktuálna štruktúra repozitára (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/drizzle021/rpiclock",
        children: "https://github.com/drizzle021/rpiclock"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "main.py"
        }), " – hlavný Python skript"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), " – Závislosti projektu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "screens/"
        }), " – skript jednotlivých obrazoviek aplikácie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "assets/1x/"
        }), " – grafické assets (ikony, obrázky…)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hardvér-a-fyzická-integrácia",
      children: "3. Hardvér a fyzická integrácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-použitý-hardvér",
      children: "3.1 Použitý hardvér"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry zero W 2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3.5\" LCD s dotykovou vrstvou (rezistívny touch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spájač na piny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "microSD karta"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájanie (USB adaptér)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-mechanická-časť",
      children: "3.2 Mechanická časť"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V projekte používame aj jednoduchý mechanický 3D vytlačený pop-in obal."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ručný-nákres-prototypu-na-papier",
      children: "Ručný nákres prototypu na papier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(10420)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nákres",
      children: "Nákres"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Mechanical drawing",
        src: (__webpack_require__(33676)/* ["default"] */ .A) + "",
        width: "1239",
        height: "874"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Parametre boli navrhnuté tak, aby sme mohli náš displej ľahko vtlačiť do vytlačeného obalu tak, že tam zapadne a bude držať. Časť okolo displeja bola navrhnutá aby držala displej pevne, zatiaľ čo časť obalu okolo dosky je mriežkovaná kvôli vetraniu, takisto boli vyrezané diery na potrebné porty."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "model-obalu-v-softvére",
      children: "Model obalu v softvére"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(97189)/* ["default"] */ .A) + "",
        width: "1914",
        height: "960"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(23859)/* ["default"] */ .A) + "",
        width: "1917",
        height: "957"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(13039)/* ["default"] */ .A) + "",
        width: "1918",
        height: "962"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-softvér-a-architektúra-riešenia",
      children: "4. Softvér a architektúra riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-softvérové-vrstvy",
      children: "4.1 Softvérové vrstvy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi OS"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Driver displeja"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python aplikácia"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "získa dáta (čas, systémové metriky, …)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vykreslí UI (texty/ikony)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pošle frame na displej"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "cyklicky opakuje aktualizáciu"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-diagramy",
      children: "4.2 Diagramy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Diagramy sú exportované z Enterprise Architect."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Deployment diagram"
          }), " (HW/SW nasadenie)"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            alt: "Deployment",
            src: (__webpack_require__(10975)/* ["default"] */ .A) + "",
            width: "1734",
            height: "1459"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Component diagram"
          }), " (softvérové komponenty)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Components",
            src: (__webpack_require__(13141)/* ["default"] */ .A) + "",
            width: "968",
            height: "536"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sequence diagram"
          }), " (runtime update loop)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Sequence",
            src: (__webpack_require__(40535)/* ["default"] */ .A) + "",
            width: "1150",
            height: "834"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Activity diagram"
          }), " (inštalačný postup)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TB\n  PC[PC/Mac/Linux] --> IMAGER[Raspberry Pi Imager]\n  IMAGER --> SD[microSD s Raspberry Pi OS]\n  SD --> BOOT[Vložiť do dosky]\n  BOOT --> DRIVER[Inštalácia LCD-show]\n  DRIVER --> REBOOT[Reboot]\n  REBOOT --> VENV[python venv + pip deps]\n  VENV --> RUN[Spustenie main.py]\n  RUN --> OK[Dashboard na displeji]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-inštalácia-a-spustenie",
      children: "5. Inštalácia a spustenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-príprava-microsd-raspberry-pi-imager",
      children: "5.1 Príprava microSD (Raspberry Pi Imager)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na prípravu OS používame Raspberry Pi Imager (", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.raspberrypi.com/software",
        children: "https://www.raspberrypi.com/software"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyber Raspberry Pi OS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zapíš image na microSD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vlož kartu do Raspberry Pi a nabootuj"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Imager",
        src: (__webpack_require__(69367)/* ["default"] */ .A) + "",
        width: "671",
        height: "476"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-inštalácia-driveru-displeja",
      children: "5.2 Inštalácia driveru displeja"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt update\nsudo apt install -y git\ngit clone https://github.com/waveshareteam/LCD-show.git\ncd LCD-show\nsudo ./LCD35-show\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-finálny-produkt",
      children: "6. Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vypnutý-displej",
      children: "Vypnutý displej"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(90698)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(58037)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(50776)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(73611)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(47150)/* ["default"] */ .A) + "",
        width: "3000",
        height: "4000"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fungujúci-smartclock",
      children: "Fungujúci SmartClock"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(31704)/* ["default"] */ .A) + "",
        width: "4000",
        height: "3000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(64551)/* ["default"] */ .A) + "",
        width: "4000",
        height: "3000"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(52394)/* ["default"] */ .A) + "",
        width: "480",
        height: "320"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-záver",
      children: "7. Záver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SmartClock"
      }), " ukazuje praktický spôsob, ako na Raspberry Pi vytvoriť lokálny „dashboard“ bez potreby externého monitora. Kombinácia Raspberry Pi, displeja a jednoduchého skriptu umožňuje vykresľovať informácie v reálnom čase priamo na zariadení a riešenie je zároveň rozšíriteľné o ďalšie obrazovky alebo vstupy (dotykové ovládanie)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z pohľadu architektúry sme si overili celý reťazec od fyzickej integrácie (osadenie displeja, obal, prístup k portom a vetranie) až po softvérovú časť (inštalácia driveru, závislosti vykresľovanie UI). Výsledkom je funkčný prototyp, pri ktorom sme sa naučili: prácu s HW perifériou, nasadenie na konkrétnu platformu a UI vykresľovanie na displej."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Možné zlepšenia do budúcna:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatické spúšťanie aplikácie po spustení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konfigurovateľné obrazovky (config)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "doplnenie externých dát (notifikácie)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "využitie dotyku na prepínanie obrazoviek / interakciu"
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

/***/ 64551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_on_2-da3b92e7dffbea8f0026f65d58d2194b.jpg");

/***/ }),

/***/ 69367:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/imager-449e7b15435fce30dd54c8601d9b068a.png");

/***/ }),

/***/ 73611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_4-63e2fed8c7f1f942938b61355100e17c.jpg");

/***/ }),

/***/ 90698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/final_1-daa5f9bd5c5e074572c842e4d0e9d7b4.jpg");

/***/ }),

/***/ 97189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/model_top-66a996ae07bed129d4402b82d918be22.png");

/***/ })

}]);