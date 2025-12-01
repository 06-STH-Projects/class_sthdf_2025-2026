"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[46578],{

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

/***/ 66587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000066_porovnanie_biznis_planov_github_index_md_6cd_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000066-porovnanie-biznis-planov-github-index-md-6cd.json
const site_docs_sk_knifes_k_000066_porovnanie_biznis_planov_github_index_md_6cd_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000066-porovnanie-biznis-planov-github/K000066","title":"K000066 – Porovnanie biznis plánov GitHub","description":"Aká sú štartovacie náklady na profesionálny ekosystém v rámci GitHub?","source":"@site/docs/sk/knifes/K000066-porovnanie-biznis-planov-github/index.md","sourceDirName":"sk/knifes/K000066-porovnanie-biznis-planov-github","slug":"/sk/knifes/K000066-porovnanie-biznis-planov-github/","permalink":"/en/sk/knifes/K000066-porovnanie-biznis-planov-github/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/docs/tags/knife"}],"version":"current","sidebarPosition":66,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000066","guid":"a2c536d5-d18f-4d80-a2bd-9ef502904b9a","dao":"knife","title":"K000066 – Porovnanie biznis plánov GitHub","description":"Aká sú štartovacie náklady na profesionálny ekosystém v rámci GitHub?","author":"Roman Kazicka","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-17","modified":"2025-09-17","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","date":"2025-09-17","sidebar_position":66,"sidebar_label":"K000066 – Porovnanie biznis plánov GitHub"},"sidebar":"tutorialSidebar","previous":{"title":"K000065 – MAKEFILE for KNIFE Ecosystem for Mac,Windows, Linux","permalink":"/en/sk/knifes/K000065-makefile-for-knife-ecosystem-for-mac-windows-linux/"},"next":{"title":"K000067 – GitHub Deployment stratégie","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000066-porovnanie-biznis-planov-github/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000066',
	guid: 'a2c536d5-d18f-4d80-a2bd-9ef502904b9a',
	dao: 'knife',
	title: 'K000066 – Porovnanie biznis plánov GitHub',
	description: 'Aká sú štartovacie náklady na profesionálny ekosystém v rámci GitHub?',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazička',
		''
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [
		'KNIFE'
	],
	locale: 'sk',
	created: '2025-09-17',
	modified: '2025-09-17',
	status: 'backlog',
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
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	date: '2025-09-17',
	sidebar_position: '66',
	sidebar_label: 'K000066 – Porovnanie biznis plánov GitHub'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
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
  "value": "GitHub plány a hodnota Education Benefit",
  "id": "github-plány-a-hodnota-education-benefit",
  "level": 2
}, {
  "value": "Hodnota GitHub Education (Faculty Pack)",
  "id": "hodnota-github-education-faculty-pack",
  "level": 2
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
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
    hr: "hr",
    li: "li",
    p: "p",
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
      id: "knife-k000066--porovnanie-biznis-plánov-github",
      children: "KNIFE K000066 – Porovnanie biznis plánov GitHub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a2c536d5-d18f-4d80-a2bd-9ef502904b9a"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S akými nákladmi by som mal počítať, ak by som si chcel vybudovať ekosystém na GitHube?"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Podľa kontextu mojej sitácie, počtu členov v tíme, zdrojov sa na stránkach GitHub zistiť cena za rôzne plány."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "github-plány-a-hodnota-education-benefit",
      children: "GitHub plány a hodnota Education Benefit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Plan / Účet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cena (2025)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Hlavné funkcie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pre koho je to vhodné?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Edu ekvivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Free"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Neobmedzené public & private repos, základné Issues, 500 MB Codespaces, 2,000 Actions min./mes."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hobby, individuáli, začínajúci startup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pro (Personal)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$4 / mesiac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Všetko z Free + rozšírené PR reviews, viac Actions (3,000), 15 GB Codespaces, email support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profesionáli, freelanceri"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Učiteľ/študent účet = Pro zadarmo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Team (Org)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$4 / user / mesiac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Privátne repo pre organizácie, role-based access, code owners, required reviewers, security alerts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startupy, menšie firmy, univerzitné tímy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Edu org = Teams zadarmo"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enterprise"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$21 / user / mesiac"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Všetko z Team + advanced security, compliance, SSO, insights, premium support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Väčšie firmy, banky, enterprise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hodnota-github-education-faculty-pack",
      children: "Hodnota GitHub Education (Faculty Pack)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Osobný účet (Pro)"
        }), ": $4 × 36 mesiacov = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$144 úspora"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Organizácia (Teams, 60 ľudí)"
        }), ": 60 × $4 × 12 mesiacov = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$2,880/rok"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ 3 roky = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$8,640 úspora"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Celkovo (učiteľ + trieda 60 študentov, 3 roky)"
        }), " ≈ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "$8,784 USD"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre študentov: môžeš im ukázať, že bežne stojí Pro $4/mes., Teams $4/user, ale oni to majú zadarmo → pochopia hodnotu benefitov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre startupy: môžeš ukázať, že Team stojí len $4/user → „profesionálny vstup“ je lacný a škálovateľný."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pri marketingu: zvýrazni, že Edu ti umožnilo trénovať s profesionálnymi nástrojmi v prostredí, ktoré startupy používajú komerčne."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak máš nápad, dá sa začať s minimálnymi nákladmi. Kúpiš si doménu za pár euro a hostin máš aj vo free pláne, pre public repozitáre.\nAk chceš mať súkromný repozitár s prástupom cez Sites, potrebuješ 4€/mesiac/user"
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