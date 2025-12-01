"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[15756],{

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

/***/ 85879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_accounts_md_37a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000064-ga-4-gtn-utm-ga-4-accounts-md-37a.json
const site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_accounts_md_37a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-01","title":"GA4 Account Setup Checklist","description":"-","source":"@site/docs/sk/knifes/K000064-ga4-gtn-utm/GA4-Accounts.md","sourceDirName":"sk/knifes/K000064-ga4-gtn-utm","slug":"/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-01","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-01","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000064-ga4-gtn-utm-01","guid":"c1d2b5f6-69c3-4e7d-957a-865abace0561","dao":"knife","title":"GA4 Account Setup Checklist","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000064 – GA4, GTN, UTM","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/"},"next":{"title":"GA4 Guides2","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000064-ga4-gtn-utm/GA4-Accounts.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000064-ga4-gtn-utm-01',
	guid: 'c1d2b5f6-69c3-4e7d-957a-865abace0561',
	dao: 'knife',
	title: 'GA4 Account Setup Checklist',
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
const contentTitle = 'GA4 Account Setup Checklist';

const assets = {

};



const toc = [{
  "value": "✅ Workflow – Založenie nového GA4 účtu",
  "id": "-workflow--založenie-nového-ga4-účtu",
  "level": 2
}, {
  "value": "🗂️ Diagram vzťahov",
  "id": "️-diagram-vzťahov",
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
    header: "header",
    hr: "hr",
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
        id: "ga4-account-setup-checklist",
        children: "GA4 Account Setup Checklist"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c1d2b5f6-69c3-4e7d-957a-865abace0561"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " Roman Kazička", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-08-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Firemný e-mail ", (0,jsx_runtime.jsx)(_components.code, {
        children: "roman.kazicka@systemthinking.xyz"
      }), " bez Google Workspace (solo use)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-workflow--založenie-nového-ga4-účtu",
      children: "✅ Workflow – Založenie nového GA4 účtu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prihlásenie"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Otvor ", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://analytics.google.com/",
              children: "https://analytics.google.com/"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Prihlás sa s účtom ", (0,jsx_runtime.jsx)(_components.code, {
              children: "roman.kazicka@systemthinking.xyz"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ak sa predvolene otvorí osobný Gmail, vpravo hore zvoľ → „Pridať ďalší účet“"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Vytvorenie účtu v GA"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Admin (⚙️ dole vľavo) → Stĺpec ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Účet"
            }), " → „Vytvoriť účet“"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Názov účtu: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SystemThinking.sk"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nastavenia zdieľania dát: nechaj default"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Vytvorenie Property"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Názov property: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SystemThinking GA4"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Časové pásmo: Europe/Bratislava"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Mena: EUR"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "(voliteľné) Info o firme"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Nastavenie prístupu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Admin → „Správa prístupu k účtu“"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pridaj si osobný Gmail ako záložného admina"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Over si, že ", (0,jsx_runtime.jsx)(_components.code, {
              children: "roman.kazicka@systemthinking.xyz"
            }), " je hlavný vlastník"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dátový stream"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Property → Dátové streamy → Web"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["URL: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://systemthinking.sk"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GA vygeneruje Measurement ID (G-XXXXXXX)"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Tento ID vlož do webu cez ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gtag.js"
            }), " alebo cez Google Tag Manager"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-diagram-vzťahov",
      children: "🗂️ Diagram vzťahov"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "Google Account (Identita)\n│\n├── roman.kazicka@systemthinking.xyz   ← Tvoj Google účet\n│   │\n│   ├── Google Analytics Account (GA4) ← organizačná jednotka v GA\n│   │   │\n│   │   ├── Property: SystemThinking.sk (GA4 Property)\n│   │   │   │\n│   │   │   ├── Data Stream: Web (https://systemthinking.sk)\n│   │   │   ├── Data Stream: iOS App (voliteľné)\n│   │   │   └── Data Stream: Android App (voliteľné)\n│   │   │\n│   │   └── Property: Ďalší projekt (ak potrebuješ)\n│   │\n│   └── Google Ads / Google Tag Manager (prepájateľné služby)\n│\n└── Iný Google Account (napr. osobný Gmail)\n    └── môže mať prístup do rovnakého GA účtu (ako admin/editor)\n"
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



/***/ })

}]);