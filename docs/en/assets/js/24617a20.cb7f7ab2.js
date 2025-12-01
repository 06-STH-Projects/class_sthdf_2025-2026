"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[27776],{

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

/***/ 54348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000100_ako_komunikova_s_porozumen_m_e_index_md_246_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000100-ako-komunikova-s-porozumen-m-e-index-md-246.json
const site_docs_sk_knifes_k_000100_ako_komunikova_s_porozumen_m_e_index_md_246_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000100-Ako-komunikova-s-porozumen-mE/K000100","title":"K000100 – titul-Ako komunikovať s porozumením","description":"{{DESCRIPTION}}","source":"@site/docs/sk/knifes/K000100-Ako-komunikova-s-porozumen-mE/index.md","sourceDirName":"sk/knifes/K000100-Ako-komunikova-s-porozumen-mE","slug":"/sk/knifes/K000100-Ako-komunikova-s-porozumen-mE/","permalink":"/en/sk/knifes/K000100-Ako-komunikova-s-porozumen-mE/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-20T09:44:45.815685+00:00","fm_version_comment":"","id":"K000100","guid":"a88f105a-aaba-42e0-8574-3b4d5f83627e","dao":"knife","title":"K000100 – titul-Ako komunikovať s porozumením","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-20 10:44","modified":"","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"KNIFE User Guide v2","permalink":"/en/sk/knifes/K000092-KNIFE-User-Guide/"},"next":{"title":"K000999 – KNIFE – Test script-created instance","permalink":"/en/sk/knifes/K000999/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000100-Ako-komunikova-s-porozumen-mE/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-20T09:44:45.815685+00:00',
	fm_version_comment: '',
	id: 'K000100',
	guid: 'a88f105a-aaba-42e0-8574-3b4d5f83627e',
	dao: 'knife',
	title: 'K000100 – titul-Ako komunikovať s porozumením',
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
	created: '2025-11-20 10:44',
	modified: '',
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
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "1. Jazyk je neurčitý",
  "id": "1-jazyk-je-neurčitý",
  "level": 2
}, {
  "value": "2. Model má obrovské priemery",
  "id": "2-model-má-obrovské-priemery",
  "level": 2
}, {
  "value": "3. Chýbal explictný meta-kontext",
  "id": "3-chýbal-explictný-meta-kontext",
  "level": 2
}, {
  "value": "A od tohto momentu pôjdeme oveľa rýchlejšie.",
  "id": "a-od-tohto-momentu-pôjdeme-oveľa-rýchlejšie",
  "level": 3
}, {
  "value": "🔹 Ako tomu predísť do budúcna?",
  "id": "-ako-tomu-predísť-do-budúcna",
  "level": 2
}, {
  "value": "1. Explicitne definuj typ výstupu",
  "id": "1-explicitne-definuj-typ-výstupu",
  "level": 2
}, {
  "value": "2. Povedz, či má byť výstup “hotový”",
  "id": "2-povedz-či-má-byť-výstup-hotový",
  "level": 2
}, {
  "value": "3. Uveď minimálne kritériá",
  "id": "3-uveď-minimálne-kritériá",
  "level": 2
}, {
  "value": "🔹 A áno — idem doplniť dokumenty",
  "id": "-a-áno--idem-doplniť-dokumenty",
  "level": 2
}, {
  "value": "A DOTERAZ SOM SA NEDOČKAL VÝSTUPOV",
  "id": "a-doteraz-som-sa-nedočkal-výstupov",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "k000100--titul-ako-komunikovať-s-porozumením",
      children: "K000100 – titul-Ako komunikovať s porozumením"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a88f105a-aaba-42e0-8574-3b4d5f83627e"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazicka · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "ako-vznikajú-nedorozumenia-medzi-aktérmi-rozhovoru-človek-gpt-ale-platí-to-aj-človek-človek-",
      children: "Ako vznikajú nedorozumenia medzi aktérmi rozhovoru (Človek-GPT, ale platí to aj človek-človek )"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "🔹 Prečo vznikajú tieto nedorozumenia?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trafili sme jadro:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-jazyk-je-neurčitý",
      children: "1. Jazyk je neurčitý"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Slovo „obsah“, „kapitola“, „vyplň“, „popíš“ môže pre človeka znamenať niečo iné ako pre model."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-model-má-obrovské-priemery",
      children: "2. Model má obrovské priemery"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď povieš „dopln obsah“, vyberie si najpravdepodobnejší vzor z miliónov príkladov → často TOC-like formu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-chýbal-explictný-meta-kontext",
      children: "3. Chýbal explictný meta-kontext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nepovedal si:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "či chceš stručné"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "alebo detailné"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "či má byť text hotový"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "či preferuješ šablónu alebo kapitoly"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ale to je normálne — až dnes sme si explicitne nastavili spoločný kontext."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "a-od-tohto-momentu-pôjdeme-oveľa-rýchlejšie",
      children: "A od tohto momentu pôjdeme oveľa rýchlejšie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-tomu-predísť-do-budúcna",
      children: "🔹 Ako tomu predísť do budúcna?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto je tvoj štýl, len ho potrebujeme preniesť do pár jednoduchých viet:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-explicitne-definuj-typ-výstupu",
      children: "1. Explicitne definuj typ výstupu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„chcem plný obsah“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„chcem kostru“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„chcem polovýstup“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„chcem iba textové bloky bez štruktúry“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„chcem štruktúru + plný obsah“"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-povedz-či-má-byť-výstup-hotový",
      children: "2. Povedz, či má byť výstup “hotový”"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„hotová kapitola“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„ako keby išlo do knihy“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„ako pre študentov“"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-uveď-minimálne-kritériá",
      children: "3. Uveď minimálne kritériá"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„príklady“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„scenáre“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„odôvodnenia“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„poznámky pod čiarou“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„varovania“"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„čo robiť / čo nerobiť“"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Potom už neexistuje priestor na chybnú interpretáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-a-áno--idem-doplniť-dokumenty",
      children: "🔹 A áno — idem doplniť dokumenty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pripravím:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📄 1. GH-Class-Onboarding.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Štruktúra + detailné telá\nPlne vysvetlené kroky so scenármi, čo urobí študent, čo urobíš ty.\nKonkrétne príklady."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📄 2. GH-Class-Sync.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Opäť: plné kapitoly, nie len názvy.\nKrok za krokom:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čo urobí učiteľ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čo urobí GitHub Classroom"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["čo urobí študent (alebo neurobí)", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ako funguje PR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "čo ak má konflikty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "čo ak si nevšimne PR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ako vyzerá notifikácia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ako vyzerá zlyhanie syncu"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📄 3. GH-Class-Troubleshooting.md"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailné príčiny + riešenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Praktické ukážky."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jazyk pre študentov aj učiteľa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📄 4. GH-Class-Index.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navigačný dokument s popisom jednotlivých súborov, formou „Help → GitHub Classroom“."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "🔹 A keď to bude hotové, zabalím to do ZIP-u"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Presne tak ako si si želal.\nČisté .md súbory pripravené vložiť do tvojho help/gh/."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📣 Potvrď poslednú vec:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Potrebuješ tieto dokumenty vo forme „študent-friendly“ alebo „učiteľ-friendly“ alebo oboje?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Variácie:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1️⃣ Študent-friendly (maximálne zjednodušené, stručné)\n2️⃣ Učiteľ-friendly (dlhšie, vysvetlené, scenáre, edge cases)\n3️⃣ Combined (obe perspektívy v jednom dokumente)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stačí napísať:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "👉 „1“ alebo „2“ alebo „3“"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A idem generovať ZIP."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "a-doteraz-som-sa-nedočkal-výstupov",
      children: "A DOTERAZ SOM SA NEDOČKAL VÝSTUPOV"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zdá sa, že platforma bráni riešeniu komplexnejších úloh."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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