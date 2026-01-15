"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[66743],{

/***/ 20798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pico_led_realita-4eee33c725b4038368685f558fe536aa.jpg");

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

/***/ 42922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/akai_register_product-dfb6cbab73e8b1392c3ad7f852936d06.png");

/***/ }),

/***/ 61065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pico_led_schema-7be962e019635496c479331dc2c8c4ad.png");

/***/ }),

/***/ 96837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_knifes_01_raspberry_led_set_up_md_5f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-knifes-01-raspberry-led-set-up-md-5f8.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_knifes_01_raspberry_led_set_up_md_5f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/Raspberry_LED_SetUp","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/01_Raspberry_LED_SetUp.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/Raspberry_LED_SetUp","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/Raspberry_LED_SetUp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"9. Reflexia a spätná väzba","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/reflexia"},"next":{"title":"📚 Knowledge Contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/Raspberry_Thonny_SetUp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/01_Raspberry_LED_SetUp.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = '📚 Knowledge Contribution';

const assets = {

};



const toc = [{
  "value": "🔖 Názov a stručný popis",
  "id": "-názov-a-stručný-popis",
  "level": 2
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "1️⃣ Čo budeš potrebovať",
  "id": "1️⃣-čo-budeš-potrebovať",
  "level": 3
}, {
  "value": "2️⃣ Postup zapojenia podľa schémy",
  "id": "2️⃣-postup-zapojenia-podľa-schémy",
  "level": 3
}, {
  "value": "3️⃣ Fyzická realizácia",
  "id": "3️⃣-fyzická-realizácia",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "🗂️ Taxonómia KNIFE",
  "id": "️-taxonómia-knife",
  "level": 2
}, {
  "value": "🌍 Referencie",
  "id": "-referencie",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
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
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardvérové zapojenie adresovateľného LED pásika k Raspberry Pi Pico"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento KNIFE popisuje, ako fyzicky prepojiť Raspberry Pi Pico s LED pásikom pomocou breadboardu a jumper káblov. Správne zapojenie je nevyhnutným prvým krokom pred samotným programovaním svetelných efektov."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Umožňuje bezpečné napájanie LED pásika priamo z mikrokontroléra cez USB."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zabezpečuje správne prepojenie dátového signálu pre ovládanie jednotlivých diód."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Poskytuje prehľadný vizuálny návod pre začiatočníkov v elektronike."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Napájanie:"
        }), " Využíva pin ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "VBUS (5V)"
        }), ", ktorý berie prúd priamo z USB vstupu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dáta:"
        }), " Využíva digitálny pin ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GP0"
        }), " na posielanie riadiacich príkazov."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spoločná zem:"
        }), " Prepojenie uzemnenia (GND) oboch komponentov pre uzavretie elektrického obvodu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento postup využiješ pri:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytváraní LED osvetlenia k PC,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vizualizácii dát (napr. indikátor stavu batérie alebo teploty),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prototypovaní akéhokoľvek projektu s adresovateľnými LED diódami (WS2812B / NeoPixel)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priprav si:"
        }), " Raspberry Pi Pico, breadboard, LED pásik a jumper káble."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Osadenie:"
        }), " Zatlač Raspberry Pi Pico do breadboardu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Napájanie (+5V):"
        }), " Prepoj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "červený"
        }), " kábel z pásika na pin č. 40 (VBUS)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zem (GND):"
        }), " Prepoj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "biely/čierny"
        }), " kábel z pásika na pin č. 38 (GND)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dáta (Data):"
        }), " Prepoj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zelený/modrý"
        }), " kábel z pásika na pin č. 1 (GP0)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hotovo:"
        }), " Pripoj USB kábel k počítaču."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1️⃣-čo-budeš-potrebovať",
      children: "1️⃣ Čo budeš potrebovať"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celý tento setup sa dá zaobstarať približne za ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "30 €"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi Pico:"
        }), " Cenovo najdostupnejší mikrokontrolér, ideálny pre túto architektúru."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Adresovateľný LED pásik:"
        }), " Napr. typ WS2812B."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breadboard:"
        }), " Na prepojenie bez potreby spájkovania."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jumper káble (M-M):"
        }), " \"Samec-samec\" kábliky na prepojenie komponentov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2️⃣-postup-zapojenia-podľa-schémy",
      children: "2️⃣ Postup zapojenia podľa schémy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre správnu funkčnosť postupuj presne podľa pinov na obrázku:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VBUS (Pin 40):"
        }), " Poskytuje 5V napájanie priamo z USB. Tu pripojíme napájací kábel LED pásika."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GND (Pin 38):"
        }), " Uzemnenie. Na Pico je ich viac, ale pin 38 je ideálne umiestnený pri VBUS."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GP0 (Pin 1):"
        }), " Dátový výstup, ktorý bude hovoriť každej LED dióde, akou farbou má svietiť."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Schéma zapojenia Pico + LED pásik",
        src: (__webpack_require__(61065)/* ["default"] */ .A) + "",
        width: "1411",
        height: "585"
      })
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/PRJ007/pico_led_schema.png",
      width: "600",
      alt: "Schéma zapojenia Pico + LED pásik"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3️⃣-fyzická-realizácia",
      children: "3️⃣ Fyzická realizácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri fyzickom zapájaní sa uisti, že sú jumper káble pevne zasunuté v breadboarde. Ak tvoj LED pásik nemá predpripravené konektory, budeš musieť na jeho konce pripájkovať piny alebo použiť svorkovnicu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Fyzické zapojenie Pico + LED pásik",
        src: (__webpack_require__(20798)/* ["default"] */ .A) + "",
        width: "4624",
        height: "2033"
      })
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/PRJ007/pico_led_realita.jpg",
      width: "600",
      alt: "Fyzické zapojenie Pico + LED pásik"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Akai – register product",
        src: (__webpack_require__(42922)/* ["default"] */ .A) + "",
        width: "827",
        height: "265"
      })
    }), "\n", (0,jsx_runtime.jsx)("img", {
      src: "/PRJ007/akai_register_product.png",
      width: "600",
      alt: "Akai – register product"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pozor na smer dát:"
        }), " LED pásiky sú smerové. Dáta (zelený kábel) musia ísť do vstupu označeného ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DIN"
        }), " alebo šípkou smerujúcou \"dovnútra\" pásika."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prúdový limit:"
        }), " Ak plánuješ svietiť na plný jas s viac ako 10-15 diódami, USB port počítača ich nemusí utiahnuť. Vtedy odporúčame znížiť jas v kóde alebo použiť externý zdroj."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Izolácia:"
        }), " Daj pozor, aby sa odizolované konce káblov v breadboarde navzájom nedotýkali."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po absolvovaní tohto návodu máš pripravený hardvér. Tvoje Raspberry Pi Pico je teraz elektricky prepojené s LED pásikom a pripravené na nahranie MicroPython kódu, ktorý rozsvieti tvoj projekt."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " IT / Hardware / IoT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " návod"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " raspberry pi pico, led strip, ws2812b, breadboard, setup"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.raspberrypi.com/documentation/microcontrollers/raspberry-pi-pico.html",
          children: "Raspberry Pi Pico Pinout dokumentácia"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.youtube.com/watch?v=MCBSYVftAWE&t",
          children: "How To Control WS2812B Individually Addressable LEDs using the Raspberry Pi Pico"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knowledge-contribution",
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



/***/ })

}]);