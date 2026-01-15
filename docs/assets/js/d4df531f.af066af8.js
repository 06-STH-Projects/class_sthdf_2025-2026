"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[2228],{

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

/***/ 42092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_07_reflexia_md_d4d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-07-reflexia-md-d4d.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_07_reflexia_md_d4d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/reflexia","title":"9. Reflexia a spätná väzba","description":"1. Čo bolo pre mňa v tomto predmete/úlohe najľahšie?","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/07_reflexia.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/reflexia","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/reflexia","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"9. Reflexia a spätná väzba"},"sidebar":"tutorialSidebar","previous":{"title":"📦 PFinal Presentation","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/final_presentation"},"next":{"title":"📚 Knowledge Contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/Raspberry_LED_SetUp"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/07_reflexia.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '9. Reflexia a spätná väzba'
};
const contentTitle = 'Reflexia a spätná väzba';

const assets = {

};



const toc = [{
  "value": "1. Čo bolo pre mňa v tomto predmete/úlohe najľahšie?",
  "id": "1-čo-bolo-pre-mňa-v-tomto-predmeteúlohe-najľahšie",
  "level": 2
}, {
  "value": "2. Čo bolo najťažšie a prečo?",
  "id": "2-čo-bolo-najťažšie-a-prečo",
  "level": 2
}, {
  "value": "3. Čo nové som sa naučil?",
  "id": "3-čo-nové-som-sa-naučil",
  "level": 2
}, {
  "value": "4. Ako by som postupoval inak, keby som mal začať odznova?",
  "id": "4-ako-by-som-postupoval-inak-keby-som-mal-začať-odznova",
  "level": 2
}, {
  "value": "✔️ Skôr by som kúpil MIDI keyboard",
  "id": "️-skôr-by-som-kúpil-midi-keyboard",
  "level": 3
}, {
  "value": "✔️ Začal by som okamžite s 3D prototypovaním",
  "id": "️-začal-by-som-okamžite-s-3d-prototypovaním",
  "level": 3
}, {
  "value": "✔️ Viac by som plánoval ohľadom rozsahu LED vs. klávesov",
  "id": "️-viac-by-som-plánoval-ohľadom-rozsahu-led-vs-klávesov",
  "level": 3
}, {
  "value": "5. Ako to súvisí s mojím projektom alebo budúcou praxou?",
  "id": "5-ako-to-súvisí-s-mojím-projektom-alebo-budúcou-praxou",
  "level": 2
}, {
  "value": "6. Akú jednu vetu by som chcel, aby si z tohto zapamätali moji spolužiaci?",
  "id": "6-akú-jednu-vetu-by-som-chcel-aby-si-z-tohto-zapamätali-moji-spolužiaci",
  "level": 2
}, {
  "value": "7. Čo by som doporučil na zlepšenie predmetu?",
  "id": "7-čo-by-som-doporučil-na-zlepšenie-predmetu",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "reflexia-a-spätná-väzba",
        children: "Reflexia a spätná väzba"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-čo-bolo-pre-mňa-v-tomto-predmeteúlohe-najľahšie",
      children: "1. Čo bolo pre mňa v tomto predmete/úlohe najľahšie?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najľahšie bolo vymyslieť koncept a celkový smer projektu.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Hneď ako som si spomenul na svoj starý nápad s LED klavírom, vedel som, že je to téma, ktorá ma baví, dáva zmysel a dá sa urobiť v domácich podmienkach bez špeciálneho laboratória.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Aj samotné programovanie Raspberry Pi Pico a LED pásu bolo intuitívne vďaka MicroPythonu a dostupným knižniciam."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-čo-bolo-najťažšie-a-prečo",
      children: "2. Čo bolo najťažšie a prečo?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najťažšie bolo rozhodovanie ", (0,jsx_runtime.jsx)(_components.em, {
        children: "ako"
      }), " celý LED systém fyzicky implementovať a čo je technicky realistické:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pôvodne som chcel LED schovať ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "do vnútra klávesov"
          }), ", ale po rozobratí keyboardu som zistil, že:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "čierne klávesy sú úplne neprístupné,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "materiál klávesov by svetlo neprepustil,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "rozmiestnenie mechaník znemožňuje vložiť svetlo pod každý kláves."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Ďalšou výzvou bolo zladiť ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "odlišný rozostup LED pásu vs. rozostup klávesov"
          }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Musel som preto LED pás ohýbať a vytvoriť vlastné 3D boxy pre každý kláves."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Softvér mal tiež svoje limity: plná real-time MIDI komunikácia je náročnejšia, a preto som projekt rozdelil na 2 paralelné „tracky“."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Najťažšie však bolo nájsť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kompromis medzi ambíciou a realitou"
      }), " – teda vyrobiť prototyp, ktorý funguje, dá sa demonštrovať, ale nezahltí projekt v zbytočných technických problémoch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-čo-nové-som-sa-naučil",
      children: "3. Čo nové som sa naučil?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prácu s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "WS2812B LED pásmi"
        }), ", ich napájaním a riadením."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Využívanie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PIO"
        }), " na Raspberry Pi Pico a rozdiel medzi MicroPython interpretérmi."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ako navrhovať a iterovať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D modely"
        }), " (steny, difúzia svetla, presné rozmery)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ako prepojiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transkripciu YouTube → MIDI → LED"
        }), " do jedného pipeline."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozhodovanie o architektúre pri embedded projektoch (minimalizácia záťaže, modularita)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riešenie hardvérových chýb rýchlou iteráciou (chybný počet boxov, chýbajúci posledný box atď.)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Získal som praktické skúsenosti, ktoré bežne pri softvérových projektoch nemám."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-ako-by-som-postupoval-inak-keby-som-mal-začať-odznova",
      children: "4. Ako by som postupoval inak, keby som mal začať odznova?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Urobil by som pár vecí inak:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-skôr-by-som-kúpil-midi-keyboard",
      children: "✔️ Skôr by som kúpil MIDI keyboard"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rozobranie keyboardu mi veľmi pomohlo pochopiť problém a bolo jasné, že „interné LED“ sú slepá ulička."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-začal-by-som-okamžite-s-3d-prototypovaním",
      children: "✔️ Začal by som okamžite s 3D prototypovaním"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto mi nakoniec najviac zrýchlilo vývoj."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "️-viac-by-som-plánoval-ohľadom-rozsahu-led-vs-klávesov",
      children: "✔️ Viac by som plánoval ohľadom rozsahu LED vs. klávesov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Od začiatku by som rátal s tým, že LED sa musia ohýbať alebo umiestniť v boxoch."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-ako-to-súvisí-s-mojím-projektom-alebo-budúcou-praxou",
      children: "5. Ako to súvisí s mojím projektom alebo budúcou praxou?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento projekt presne zapadá do:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "embedded systémov"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "UX/učenia sa s technológiou"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "rýchlej prototypizácie"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "system thinking"
        }), " (hardvér + softvér + používateľ + dokumentácia)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V budúcnosti sa chcem venovať vývoju softvéru, ale tento projekt mi ukázal, aké dôležité je vedieť komunikovať medzi hardvérom a softvérom a ako navrhovať systém, ktorý musí fungovať ako celok."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je to presne ten typ projektu, ktorý ukazuje, že aj jeden človek dokáže vybudovať kompletný systém, ak si správne zvolí rozsah a architektúru."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-akú-jednu-vetu-by-som-chcel-aby-si-z-tohto-zapamätali-moji-spolužiaci",
      children: "6. Akú jednu vetu by som chcel, aby si z tohto zapamätali moji spolužiaci?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "„Ak niečo nefunguje, neznamená to, že to je zlý nápad - len to potrebuje inú cestu.“"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-čo-by-som-doporučil-na-zlepšenie-predmetu",
      children: "7. Čo by som doporučil na zlepšenie predmetu?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viac ukázať reálne projekty z minulých rokov, aby študenti videli rôzne prístupy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lepšie konzultovať zámer, priebeh predmetu a čo presne sa očakáva od študenta."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A jeden veľký plus: predmet podporuje kreativitu. Odporúčam zachovať tento voľný priestor."
      }), "\n"]
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



/***/ })

}]);