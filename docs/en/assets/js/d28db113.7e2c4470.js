"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[26730],{

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

/***/ 52167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_045_deliverables_07_reflexia_md_d28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-045-deliverables-07-reflexia-md-d28.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_045_deliverables_07_reflexia_md_d28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/reflexia","title":"reflexia","description":"Reflexia a spätná väzba","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables/07_reflexia.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/reflexia","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/reflexia","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"Nodyne: Systém detekcie spánku","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation"},"next":{"title":"ST046","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST046/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables/07_reflexia.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Reflexia a spätná väzba",
  "id": "reflexia-a-spätná-väzba",
  "level": 2
}, {
  "value": "1. Čo bolo pre teba v tomto predmet/úlohe najľahšie?",
  "id": "1-čo-bolo-pre-teba-v-tomto-predmetúlohe-najľahšie",
  "level": 3
}, {
  "value": "2. Čo bolo najťažšie a prečo?",
  "id": "2-čo-bolo-najťažšie-a-prečo",
  "level": 3
}, {
  "value": "3. Čo nové si sa naučil?",
  "id": "3-čo-nové-si-sa-naučil",
  "level": 3
}, {
  "value": "4. Ako by si postupoval inak, keby si mal začať odznova?",
  "id": "4-ako-by-si-postupoval-inak-keby-si-mal-začať-odznova",
  "level": 3
}, {
  "value": "5. Ako to súvisí s tvojím projektom alebo budúcou praxou?",
  "id": "5-ako-to-súvisí-s-tvojím-projektom-alebo-budúcou-praxou",
  "level": 3
}, {
  "value": "6. Akú jednu vetu by si chcel, aby si z tohto zapamätali tvoji spolužiaci?",
  "id": "6-akú-jednu-vetu-by-si-chcel-aby-si-z-tohto-zapamätali-tvoji-spolužiaci",
  "level": 3
}, {
  "value": "7. Čo by si doporučil na zlepšenie predmetu?",
  "id": "7-čo-by-si-doporučil-na-zlepšenie-predmetu",
  "level": 3
}, {
  "value": "Celkové zhodnotenie projektu",
  "id": "celkové-zhodnotenie-projektu",
  "level": 2
}, {
  "value": "Čo sa podarilo",
  "id": "čo-sa-podarilo",
  "level": 3
}, {
  "value": "Osobný rast",
  "id": "osobný-rast",
  "level": 3
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "reflexia-a-spätná-väzba",
      children: "Reflexia a spätná väzba"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-čo-bolo-pre-teba-v-tomto-predmetúlohe-najľahšie",
      children: "1. Čo bolo pre teba v tomto predmet/úlohe najľahšie?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementácia firmvéru a základných detekčných algoritmov."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Práca s M5StickC Plus 2 a Arduino bola pre mňa prirodzená, pretože už mám skúsenosti s embedded systémami. Prvé algoritmy (silné prikývnutie, mikrokývnutia) boli relatívne jednoduché - čítal som IMU senzor, analyzoval pitch/roll a spúšťal alarm pri prekročení prahov."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Taktiež integrácia Web Serial API bola priamočiara - dokumentácia je jasná a už som predtým pracoval s podobnými technológiami."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-čo-bolo-najťažšie-a-prečo",
      children: "2. Čo bolo najťažšie a prečo?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kalibrácia a eliminácia falošných poplachov."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najväčšia výzva bola optimalizácia detekčných prahov tak, aby zariadenie správne rozlíšilo medzi:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normálnymi pohybmi hlavy"
        }), " počas jazdy (zatáčanie, kontrola zrkadiel)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Skutočným zaspávaním"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vibrácie vozidla a nerovnosti cesty spôsobovali šum v IMU dátach. Musel som:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implementovať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential Moving Average (EMA)"
        }), " filtrovanie"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovať rôzne prahy v reálnych jazdných podmienkach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pridať kalibračný systém pre individuálnu polohu hlavy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prečo to bolo ťažké:"
      }), " Teoretické nastavenia nefungovali v praxi. Potreboval som reálne dáta z dlhých jazdných testov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-čo-nové-si-sa-naučil",
      children: "3. Čo nové si sa naučil?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technické:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Práca s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IMU senzormi"
        }), " (akcelerometer + gyroskop) a ich kalibrácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signal processing"
        }), " - filtrovanie šumu pomocou EMA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "AHRS (Attitude and Heading Reference System)"
        }), " - výpočet orientácie v 3D priestore"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Serial API"
        }), " - komunikácia medzi prehliadačom a zariadením cez USB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Three.js"
        }), " - 3D vizualizácia v reálnom čase"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metodologické:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dôležitosť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skorého testovania v reálnych podmienkach"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "User experience design"
        }), " - kalibrácia musí byť jednoduchá (3 sekundy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SDLC proces"
        }), " - kompletný vývojový cyklus od business požiadaviek po operation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-ako-by-si-postupoval-inak-keby-si-mal-začať-odznova",
      children: "4. Ako by si postupoval inak, keby si mal začať odznova?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zmenil by som toto:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zaobstarať čelenku skôr"
          }), " - v prvých týždňoch som testoval zariadenie rukou. Keby som mal čelenku od začiatku, mohol som skôr odhaliť problémy s vibráciami."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Viac času na testovanie batérie"
          }), " - zistil som výdrž 5-8 hodín až v neskorých fázach. Mal by som to testovať priebežne."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vlastný 3D tlačený kryt od začiatku"
          }), " - M5StickC Plus 2 je funkčné, ale nie optimálne na nosenie."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Zapojiť testerov skôr"
          }), " - testoval som väčšinou sám. Viacerí testeri s rôznymi jazdnými štýlmi by pomohli rýchlejšie optimalizovať prahy."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-ako-to-súvisí-s-tvojím-projektom-alebo-budúcou-praxou",
      children: "5. Ako to súvisí s tvojím projektom alebo budúcou praxou?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Silná relevancia:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre budúcu prax:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Naučil som sa kompletný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "product development lifecycle"
        }), " od nápadu cez prototyp až po validáciu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Získal som skúsenosti s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "IoT a embedded systémami"
        }), ", ktoré sú kľúčové pre moju kariéru"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pochopil som dôležitosť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "user testing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre projekt Nodyne:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Projekt môže pokračovať ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "open-source riešenie"
        }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "komercializácia"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Môže to byť základ pre ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "startup"
        }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "partnerstvá s logistickými firmami"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pre ostatné projekty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Metódy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "signal processingu"
        }), " môžem použiť v iných wearable zariadeniach"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skúsenosti s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Web Serial API"
        }), " môžem aplikovať na iné IoT dashboardy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-akú-jednu-vetu-by-si-chcel-aby-si-z-tohto-zapamätali-tvoji-spolužiaci",
      children: "6. Akú jednu vetu by si chcel, aby si z tohto zapamätali tvoji spolužiaci?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "\"Testuj skoro, testuj často, a testuj v reálnych podmienkach - teória a prax sú dve rôzne veci.\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Domáce testy ukázali, že algoritmy fungujú perfektne. Ale až po testovaní v reálnom vozidle som zistil problémy s vibráciami a falošnými poplachmi. Keby som čakal do konca projektu, nemohol by som stihnúť optimalizáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-čo-by-si-doporučil-na-zlepšenie-predmetu",
      children: "7. Čo by si doporučil na zlepšenie predmetu?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Návrhy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ukázať case studies, kde sa veci nepodarili na prvý pokus. Vidieť proces iterácie je cenné."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Organizovať stretnutia, kde študenti prezentujú projekty navzájom a dávajú feedback."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Mať 2-3 checkpointy počas semestra s feedbackom od vyučujúceho."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pozvať bývalých študentov, ktorí pokračovali v projektoch alebo založili startupy."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "celkové-zhodnotenie-projektu",
      children: "Celkové zhodnotenie projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-sa-podarilo",
      children: "Čo sa podarilo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "100% dokončenie MVP"
        }), " - všetky plánované funkcie implementované"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dodržanie časového plánu"
        }), " - 8 týždňov bez odchýlky"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world validácia"
        }), " - testované v skutočnom vozidle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kvalitná dokumentácia"
        }), " - kompletná SDLC, KNIFE článok"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open-source projekt"
        }), " - dostupný na GitHub"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "osobný-rast",
      children: "Osobný rast"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zlepšil som schopnosti v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "embedded systémoch"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "signal processingu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Naučil som sa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "komplexnú projektovú metodológiu"
        }), " (SDLC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Získal som praktické skúsenosti s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "produktovým vývojom"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pochopil som dôležitosť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "user experience"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "real-world testing"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/",
          children: "↩️ Späť"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
          children: "📊 Projekt PRJ025"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/project-summary",
          children: "📝 Project Summary"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation",
          children: "🎤 Final Presentation"
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