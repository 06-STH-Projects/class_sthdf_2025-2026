"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[14761],{

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

/***/ 97825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_vs_gtm_md_b6f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000064-ga-4-gtn-utm-ga-4-vs-gtm-md-b6f.json
const site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_vs_gtm_md_b6f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-02","title":"GA4 a GTM – logický model a nastavenie","description":"-","source":"@site/docs/sk/knifes/K000064-ga4-gtn-utm/GA4vsGTM.md","sourceDirName":"sk/knifes/K000064-ga4-gtn-utm","slug":"/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-02","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-02","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000064-ga4-gtn-utm-02","guid":"555e883c-7833-44e2-b77b-6dcb4da50a2a","dao":"knife","title":"GA4 a GTM – logický model a nastavenie","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started with GA4 + GTM","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/GA4andGTMandUTM/K000064-ga4-gtn-utm-13"},"next":{"title":"Google Account vs Google Workspace","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-03"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000064-ga4-gtn-utm/GA4vsGTM.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000064-ga4-gtn-utm-02',
	guid: '555e883c-7833-44e2-b77b-6dcb4da50a2a',
	dao: 'knife',
	title: 'GA4 a GTM – logický model a nastavenie',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '-',
	type: '-',
	priority: 'no',
	tags: [
		'KNIFE'
	],
	locale: 'sk',
	created: '2025-09-24',
	modified: '-',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '-',
	author_did: '-',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'GA4 a GTM – logický model a nastavenie';

const assets = {

};



const toc = [{
  "value": "Hierarchia GA4",
  "id": "hierarchia-ga4",
  "level": 2
}, {
  "value": "Koľko metrík potrebujem na jednu doménu?",
  "id": "koľko-metrík-potrebujem-na-jednu-doménu",
  "level": 2
}, {
  "value": "Kedy do stratégie vstupuje Google Tag Management - GTM?",
  "id": "kedy-do-stratégie-vstupuje-google-tag-management---gtm",
  "level": 2
}, {
  "value": "Logický model GTM",
  "id": "logický-model-gtm",
  "level": 2
}, {
  "value": "Väzby GA4 ↔ GTM",
  "id": "väzby-ga4--gtm",
  "level": 2
}, {
  "value": "Google Account (Identita / Login)",
  "id": "google-account-identita--login",
  "level": 2
}, {
  "value": "Vysvetlenie vrstiev:",
  "id": "vysvetlenie-vrstiev",
  "level": 2
}, {
  "value": "Príklad",
  "id": "príklad",
  "level": 3
}, {
  "value": "Google Account (Identita / Login)",
  "id": "google-account-identita--login-1",
  "level": 2
}, {
  "value": "🔑 Vysvetlenie vrstiev:",
  "id": "-vysvetlenie-vrstiev",
  "level": 2
}, {
  "value": "Príklad",
  "id": "príklad-1",
  "level": 3
}, {
  "value": "Praktické odporúčania",
  "id": "praktické-odporúčania",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ga4-a-gtm--logický-model-a-nastavenie",
        children: "GA4 a GTM – logický model a nastavenie"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "555e883c-7833-44e2-b77b-6dcb4da50a2a"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inprogress"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hierarchia-ga4",
      children: "Hierarchia GA4"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GA4 je postavené na nasledujúcej štruktúre:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Účet (Account)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– najvyššia organizačná jednotka (napr. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "SystemThinking"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vlastníctvo (Property)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– samostatný dátový kontajner (napr. ", (0,jsx_runtime.jsx)(_components.em, {
            children: "LetItGrow.dev"
          }), ").", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– má vlastné nastavenia: časové pásmo, menu, konverzie, publika, prístup."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Dátové streamy (Data Streams)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– zdroj dát (napr. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Web – letitgrow.dev"
          }), ").", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– každý stream má svoje ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Measurement ID (G-XXXXXX)"
          }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– väčšinou stačí ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "1 stream = 1 doména"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Eventy a parametre"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– všetko sa v GA4 meria ako event (", (0,jsx_runtime.jsx)(_components.code, {
            children: "page_view"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "scroll"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "click"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file_download"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Metriky a dimenzie"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– metriky = číselné hodnoty (počet návštev, čas strávený, kliky),", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– dimenzie = kvalitatívne hodnoty (názov stránky, krajina, zariadenie).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "– z eventov + dimenzií sa skladajú reporty."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "koľko-metrík-potrebujem-na-jednu-doménu",
      children: "Koľko metrík potrebujem na jednu doménu?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GA4 ti už automaticky meria základné metriky:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "počet návštevníkov (Users),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "počet návštev (Sessions),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "počet zobrazení stránky (Page views),"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["najnavštevovanejšie stránky (", (0,jsx_runtime.jsx)(_components.code, {
              children: "page_location"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "page_title"
            }), ")."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 Ak chceš vedieť, čo je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "najpopulárnejšie na doméne LetItGrow.dev"
      }), ", stačí zapnúť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Enhanced Measurement"
      }), " a používať dimenzie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Page title"
      }), " alebo ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Page path"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Nemusíš manuálne pridávať metriku do každej vetvy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vlastné metriky/eventy pridávaš len vtedy, keď chceš merať špecifické akcie (klik na tlačidlo, stiahnutie PDF, odoslanie formulára)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kedy-do-stratégie-vstupuje-google-tag-management---gtm",
      children: "Kedy do stratégie vstupuje Google Tag Management - GTM?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GA4 bez GTM"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["vložíš priamo ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gtag.js"
            }), " do webu,"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "meriaš len základné eventy."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "GA4 s GTM (Google Tag Manager)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "do webu vložíš len GTM kontajner,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "všetko ostatné (GA4, Ads, custom eventy) riadiš cez GTM,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "máš plnú kontrolu a flexibilitu."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "logický-model-gtm",
      children: "Logický model GTM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GTM Account (Účet)"
        }), " – firma alebo organizácia (napr. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "SystemThinking"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GTM Container (Kontajner)"
        }), " – zvyčajne 1 web (napr. ", (0,jsx_runtime.jsx)(_components.em, {
          children: "LetItGrow.dev"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tags (Tagy)"
        }), " – kódy, ktoré sa spúšťajú (GA4 event, Ads, custom script)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Triggers (Spúšťače)"
        }), " – určujú kedy sa tag spustí (page_view, klik, formulár)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variables (Premenné)"
        }), " – parametre, ktoré sa odovzdajú tagom (napr. názov stránky)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "väzby-ga4--gtm",
      children: "Väzby GA4 ↔ GTM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V GA4 máš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Property → Data Stream"
        }), " s Measurement ID ", (0,jsx_runtime.jsx)(_components.code, {
          children: "G-XXXXXXX"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V GTM vytvoríš ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "GA4 Configuration tag"
        }), " a vložíš tam toto ID."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetky eventy posiela GTM cez tento config."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "👉 Zjednodušený model:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-account-identita--login",
      children: "Google Account (Identita / Login)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "│\n├── Google Analytics Account (GA4)\n│   │\n│   ├── Property (napr. SystemThinking.sk)\n│   │   │\n│   │   ├── Data Stream: Web\n│   │   ├── Data Stream: iOS App\n│   │   └── Data Stream: Android App\n│   │\n│   └── Property: ďalší projekt\n│\n└── Iné Google služby (Tag Manager, Ads, YouTube, Drive…)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vysvetlenie-vrstiev",
      children: "Vysvetlenie vrstiev:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Account (identita)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "login, ktorý drží vlastníctvo GTM účtu (rovnako ako pri GA4)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag Manager Account"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "organizačná jednotka v GTM (môžeš mať viac účtov, ale väčšinou stačí jeden pre firmu/projekt)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container (kontajner)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zodpovedá jednej platforme (napr. web, iOS, Android)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "každý Container má vlastný kód (GTM-XXXXXX), ktorý vložíš do webu alebo appky."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagy, Triggery, Premenné"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konfigurácie v rámci kontajnera, ktoré definujú, čo sa meria a kedy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "príklad",
      children: "Príklad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GA4 Account\n└─ Property: LetItGrow.dev\n└─ Data Stream (Web) → Measurement ID"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-account-identita--login-1",
      children: "Google Account (Identita / Login)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "│\n└── Google Tag Manager Account\n│\n├── Container: Web (napr. systemthinking.sk)\n│   ├── Tagy\n│   ├── Triggery\n│   └── Premenné\n│\n├── Container: iOS App\n└── Container: Android App"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-vysvetlenie-vrstiev",
      children: "🔑 Vysvetlenie vrstiev:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google Account (identita)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "login, ktorý drží vlastníctvo GTM účtu (rovnako ako pri GA4)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tag Manager Account"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "organizačná jednotka v GTM (môžeš mať viac účtov, ale väčšinou stačí jeden pre firmu/projekt)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Container (kontajner)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zodpovedá jednej platforme (napr. web, iOS, Android)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "každý Container má vlastný kód (GTM-XXXXXX), ktorý vložíš do webu alebo appky."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tagy, Triggery, Premenné"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konfigurácie v rámci kontajnera, ktoré definujú, čo sa meria a kedy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "⸻"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "príklad-1",
      children: "Príklad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GTM Account\n└─ Container: LetItGrow.dev\n├─ Tags (GA4 Config, Custom Events, Ads…)\n├─ Triggers (kedy sa spustia)\n└─ Variables (aké dáta sa odovzdajú)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "praktické-odporúčania",
      children: "Praktické odporúčania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stačí 1 GTM Account pre celú organizáciu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre každý web/projekt vytvor samostatný Container."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V GA4 si drž jedno vlastníctvo na doménu, a doň môžeš mať viac streamov (web, app)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Firemné projekty (KNIFE, STHDF, LetItGrow.dev) – daj každému svoj Property a Web Stream."
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