"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[94386],{

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

/***/ 35915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000064_ga_4_gtn_utm_google_account_md_cc7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000064-ga-4-gtn-utm-google-account-md-cc7.json
const site_docs_sk_knifes_k_000064_ga_4_gtn_utm_google_account_md_cc7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-03","title":"Google Account vs Google Workspace","description":"-","source":"@site/docs/sk/knifes/K000064-ga4-gtn-utm/GoogleAccount.md","sourceDirName":"sk/knifes/K000064-ga4-gtn-utm","slug":"/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-03","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-03","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000064-ga4-gtn-utm-03","guid":"d770f029-a5d4-4c3d-b82d-a8952f4913bf","dao":"knife","title":"Google Account vs Google Workspace","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":"","sidebar_label":"Google Account vs Google Workspace"},"sidebar":"tutorialSidebar","previous":{"title":"GA4 a GTM – logický model a nastavenie","permalink":"/en/sk/knifes/K000064-ga4-gtn-utm/K000064-ga4-gtn-utm-02"},"next":{"title":"K000065 – MAKEFILE for KNIFE Ecosystem for Mac,Windows, Linux","permalink":"/en/sk/knifes/K000065-makefile-for-knife-ecosystem-for-mac-windows-linux/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000064-ga4-gtn-utm/GoogleAccount.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000064-ga4-gtn-utm-03',
	guid: 'd770f029-a5d4-4c3d-b82d-a8952f4913bf',
	dao: 'knife',
	title: 'Google Account vs Google Workspace',
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
	fm_reserved2: '',
	sidebar_label: 'Google Account vs Google Workspace'
};
const contentTitle = 'Google Account vs Google Workspace';

const assets = {

};



const toc = [{
  "value": "🔑 Firemný účet s vlastnou doménou vs Workspace",
  "id": "-firemný-účet-s-vlastnou-doménou-vs-workspace",
  "level": 2
}, {
  "value": "🗂️ Diagram vzťahov",
  "id": "️-diagram-vzťahov",
  "level": 2
}, {
  "value": "Google Accounts Flowchart",
  "id": "google-accounts-flowchart",
  "level": 2
}, {
  "value": "📊 Decision Flowchart",
  "id": "-decision-flowchart",
  "level": 2
}, {
  "value": "Google Accounts Flowchart",
  "id": "google-accounts-flowchart-1",
  "level": 2
}, {
  "value": "📊 Decision Flowchart",
  "id": "-decision-flowchart-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "google-account-vs-google-workspace",
        children: "Google Account vs Google Workspace"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d770f029-a5d4-4c3d-b82d-a8952f4913bf"
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
      id: "-firemný-účet-s-vlastnou-doménou-vs-workspace",
      children: "🔑 Firemný účet s vlastnou doménou vs Workspace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Google ti umožní použiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "firemnú adresu"
        }), " (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "roman.kazicka@systemthinking.xyz"
        }), ") ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "login do Google služieb"
        }), " bez toho, aby si mal Google Workspace.", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pri zakladaní účtu vyberieš možnosť ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "„Na osobné použitie“"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Vtedy je to ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "osobný Google účet"
            }), ", ktorý má login na vlastnej doméne."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {}), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "UPOZORNENIE"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Preni sa do INKOGNITO reýimu, aby sa to dal použiť vlastný účet"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Funguje vo všetkých službách (Analytics, Tag Manager, Ads, YouTube, Drive)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Účet patrí ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "individuálne tebe"
          }), ", nie organizácii."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Google Workspace je platená služba, kde sa firemná doména pripojí do ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "admin konzoly"
          }), " a každý používateľ má svoj účet spravovaný firmou."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Účty sú vlastníctvom organizácie."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Výhodné pri tímoch a väčšom počte používateľov."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zahŕňa Gmail na vlastnej doméne, firemný Drive a správu prístupov."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➡️ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Záver:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Na solo použitie nepotrebuješ Workspace. Stačí vytvoriť ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["osobný Google účet s loginom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "roman.kazicka@systemthinking.xyz"
        })]
      }), " a použiť ho na všetky Google služby."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-diagram-vzťahov",
      children: "🗂️ Diagram vzťahov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Google Account (Identita)\n│\n├── ", (0,jsx_runtime.jsx)(_components.a, {
        href: "mailto:roman.kazicka@systemthinking.xyz",
        children: "roman.kazicka@systemthinking.xyz"
      }), "   ← Osobný Google účet s vlastnou doménou\n│   │\n│   ├── Google služby (Analytics, Tag Manager, Ads, YouTube, Drive, ...)\n│   │\n│   └── Pridaní používatelia (napr. osobný Gmail ako záložný admin)\n│\n└── Google Workspace (ak by bol použitý)\n├── Centrálna správa účtov\n├── Firemný Gmail a Drive\n└── Účty vlastnené organizáciou"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "📊 Porovnanie: Osobný Google účet vs Workspace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kritérium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Osobný Google účet (aj s vlastnou doménou)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Google Workspace (firemný účet)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cena"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Zadarmo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "💲 cca 5–12 €/mesačne / používateľ"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Identita"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Účet patrí konkrétnej osobe (napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "roman.kazicka@systemthinking.xyz"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Účty spravuje firma (napr. ", (0,jsx_runtime.jsx)(_components.code, {
              children: "meno@systemthinking.xyz"
            }), "), vlastnené organizáciou"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Použitie služieb (GA4, GTM, Ads, Drive, YouTube...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Funguje rovnako – žiadne obmedzenie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Funguje rovnako – navyše možnosť firemného vlastníctva"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Gmail s doménou"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Nie (musíš používať vlastného mail providera)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Áno, Gmail priamo pre @systemthinking.xyz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Drive/Docs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Len individuálny priestor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firemný Drive, zdieľané priečinky, centrálna správa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Správa používateľov"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nie je – každý účet si spravuje vlastník sám"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centrálna admin konzola (pridávanie/mazanie účtov, nastavenie hesiel, 2FA, prístupové politiky)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bezpečnosť"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Individuálne nastavenia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firemné politiky (povinná 2FA, kontrola zariadení, audity)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Škálovanie (viac ľudí)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nevhodné"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimálne pre tímy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Vlastníctvo účtov"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Účet patrí osobe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Účty patria firme"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typické použitie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freelance, solo projekty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Firmy, školy, agentúry"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-accounts-flowchart",
      children: "Google Accounts Flowchart"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " Roman Kazička", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-08-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Rozdelenie použitia osobného a firemného Google účtu"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-decision-flowchart",
      children: "📊 Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "google-accounts-flowchart-1",
      children: "Google Accounts Flowchart"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Author:"
      }), " Roman Kazička", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Date:"
      }), " 2025-08-21", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context:"
      }), " Rozdelenie použitia osobného a firemného Google účtu"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-decision-flowchart-1",
      children: "📊 Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-plaintext",
        children: "                 [Potrebujem účet pre...]\n                           │\n        ┌──────────────────┼──────────────────┐\n        │                  │                  │\n   Osobné veci        Firemné služby     Neviem / zmiešané\n (Android, Fotky,    (Analytics, Ads,     (napr. Drive,\n  YouTube, rodina)    GTM, GitHub CI,      projekty)\n                        KNIFE, projekty)\n        │                  │                  │\n        ▼                  ▼                  ▼\n Použi účet:         Použi účet:          Pýtaj sa:\n systemthinking.xyz  roman.kazicka@       \"Je to bližšie\n @google.com         systemthinking.xyz   k OSOBNÉMU alebo\n                                          FIREMNÉMU?\"\n                                          │\n                                          ▼\n                          Rozdeľ podľa účelu (NEmiešaj)\n\n[GA4 vs GTM- Koncepčný diagram](./img/ga4_gtm_parallel_links.png)\n"
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