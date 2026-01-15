"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[42988],{

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

/***/ 33005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/akai_serial_number-55c5975fc1e0eddf3ce54ca824f63f5f.png");

/***/ }),

/***/ 35151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_knifes_03_akai_midi_set_up_md_b72_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-knifes-03-akai-midi-set-up-md-b72.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_knifes_03_akai_midi_set_up_md_b72_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/AKAI_MIDI_SetUp","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/03_AKAI_MIDI_SetUp.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/AKAI_MIDI_SetUp","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/AKAI_MIDI_SetUp","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/Raspberry_Thonny_SetUp"},"next":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/How_To_Use_LED_Piano_Trainer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knifes/03_AKAI_MIDI_SetUp.md


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
  "value": "1️⃣ Otvor oficiálnu stránku AKAI",
  "id": "1️⃣-otvor-oficiálnu-stránku-akai",
  "level": 3
}, {
  "value": "2️⃣ Vytvorenie účtu",
  "id": "2️⃣-vytvorenie-účtu",
  "level": 3
}, {
  "value": "3️⃣ Registrácia MIDI klávesnice",
  "id": "3️⃣-registrácia-midi-klávesnice",
  "level": 3
}, {
  "value": "4️⃣ Stiahnutie softvéru",
  "id": "4️⃣-stiahnutie-softvéru",
  "level": 3
}, {
  "value": "5️⃣ Prvé spustenie softvéru",
  "id": "5️⃣-prvé-spustenie-softvéru",
  "level": 3
}, {
  "value": "6️⃣ Odporúčané nastavenia",
  "id": "6️⃣-odporúčané-nastavenia",
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
    br: "br",
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
        children: "Nastavenie AKAI MIDI klávesnice – registrácia, softvér a prvé spustenie"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento KNIFE popisuje proces vytvorenia účtu na oficiálnej stránke AKAI, registráciu MIDI klávesnice a stiahnutie potrebného softvéru.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Je dôležitý, pretože bez registrácie nezískame prístup k ovládačom, nástrojom a softvéru, ktorý umožňuje naplno využiť MIDI zariadenie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Umožňuje používateľovi zaregistrovať svoj AKAI produkt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sprístupňuje softvér, ktorý je súčasťou klávesnice (napr. Hype, MPC Beats)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zabezpečuje, že klávesnica bude okamžite pripravená na použitie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytvorí sa účet na AKAI stránke."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produkt sa zaregistruje pomocou sériového čísla."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Získame prístup k softvéru, ktorý následne aktivujeme po prihlásení."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento postup použiješ pri:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prvom nastavovaní AKAI klávesnice,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inštalácii softvéru na tvorbu zvukov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "príprave MIDI zariadenia na hranie aj na experimentovanie so zvukmi."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prejdi na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.akaipro.com/download",
            children: "https://www.akaipro.com/download"
          })
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytvor si účet alebo sa prihlás."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Register New Product"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "AKAI – Register New Product",
        src: (__webpack_require__(42922)/* ["default"] */ .A) + "",
        width: "827",
        height: "265"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/akai_register_product.png",
        width: "600",
        alt: "AKAI – Register New Product"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Odpíš sériové číslo zo spodnej strany klávesnice."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po registrácii si stiahni softvér dostupný pre tvoje zariadenie."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nainštaluj EXE, prihlás sa a pripoj klávesnicu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Aktivuj odporúčaný softvér (napr. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hype"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokonči sťahovanie zvukových balíkov a môžeš hrať."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1️⃣-otvor-oficiálnu-stránku-akai",
      children: "1️⃣ Otvor oficiálnu stránku AKAI"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prejdime na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➡️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.akaipro.com/download",
          children: "https://www.akaipro.com/download"
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu sa nachádza všetok oficiálny softvér pre tvoju klávesnicu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2️⃣-vytvorenie-účtu",
      children: "2️⃣ Vytvorenie účtu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sign Up / Create Account"
      }), ", vyplň údaje a potvrď registráciu.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Ak už účet máš, jednoducho sa prihlás."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3️⃣-registrácia-midi-klávesnice",
      children: "3️⃣ Registrácia MIDI klávesnice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po prihlásení prejdime do sekcie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➡️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Register New Product"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zobrazí sa formulár, do ktorého zadáš sériové číslo.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Zospodu klávesnice nájdeš štítok so sériovým kódom — treba ho opísať presne."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "AKAI – Sériové číslo zariadenia",
        src: (__webpack_require__(33005)/* ["default"] */ .A) + "",
        width: "301",
        height: "136"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/akai_serial_number.png",
        width: "600",
        alt: "AKAI – Sériové číslo zariadenia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po potvrdení sa produkt uloží do účtu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4️⃣-stiahnutie-softvéru",
      children: "4️⃣ Stiahnutie softvéru"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po registrácii sa ti zobrazí zoznam softvéru pripraveného na stiahnutie:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "AKAI – Dostupné downloady softvéru",
        src: (__webpack_require__(78452)/* ["default"] */ .A) + "",
        width: "1364",
        height: "900"
      })
    }), "\n", (0,jsx_runtime.jsx)("figure", {
      children: (0,jsx_runtime.jsx)("img", {
        src: "/sthdf_2025/PRJ_007/images/akai_software_downloads.png",
        width: "600",
        alt: "AKAI – Dostupné downloady softvéru"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typické možnosti:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hype"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "MPC Beats"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Mini Grand"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stiahni EXE a spusti inštalátor."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5️⃣-prvé-spustenie-softvéru",
      children: "5️⃣ Prvé spustenie softvéru"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po nainštalovaní aplikácie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prihlás sa vytvoreným účtom,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripoj klávesnicu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "potvrď aktiváciu softvéru."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Softvér ti ponúkne zoznam nástrojov, ktoré môžeš nainštalovať.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Ak nechceš produkovať hudbu, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zvukové banky nemusíš vyberať"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6️⃣-odporúčané-nastavenia",
      children: "6️⃣ Odporúčané nastavenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najlepšia voľba pre rýchly štart:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🎧 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hype"
      }), " – má prirodzené zvuky, kvalitné predvoľby a je ideálny pre začiatočníkov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po potvrdení prebehne sťahovanie a inštalácia."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "USB kábel, ktorý prenáša dáta"
        }), ", nielen napájanie."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak registrácia zlyhá, skontroluj, či je sériové číslo opísané presne."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nástroje môžu mať veľkosť niekoľko GB — sťahovanie môže chvíľu trvať."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po inštalácii si sprav test – stlač kláves a over, či softvér reaguje."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento KNIFE zjednodušuje celý proces nastavenia MIDI klávesnice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvorenie účtu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "registrácia zariadenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stiahnutie a aktivácia softvéru,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripravenie klávesnice na hranie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po absolvovaní postupov má používateľ plne funkčnú AKAI klávesnicu so softvérom pripraveným na ďalšiu prácu."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " IT / Hudobná technológia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " Návod"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " akai, midi, setup, klávesy, registrácia, hype, mpc beats"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Oficiálna stránka AKAI: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.akaipro.com/download",
          children: "https://www.akaipro.com/download"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knowledge-contribution",
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

/***/ 42922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/akai_register_product-dfb6cbab73e8b1392c3ad7f852936d06.png");

/***/ }),

/***/ 78452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/akai_software_downloads-ddce9c69bb4eeb9c807098fe58ff6298.png");

/***/ })

}]);