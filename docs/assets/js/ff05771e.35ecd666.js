"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[46018],{

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

/***/ 57996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000086_docusaurus_id_a_jeho_pouzitie_index_md_ff0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000086-docusaurus-id-a-jeho-pouzitie-index-md-ff0.json
const site_docs_sk_knifes_k_000086_docusaurus_id_a_jeho_pouzitie_index_md_ff0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/K000086","title":"K000086 – Docusaurus-ID-a-jeho-pouzitie","description":"","source":"@site/docs/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/index.md","sourceDirName":"sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie","slug":"/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/","permalink":"/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000086","guid":"9e070810-b93a-46e3-89cc-ea0ec118e9df","dao":"knife","title":"K000086 – Docusaurus-ID-a-jeho-pouzitie","description":"","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":[],"locale":"sk","created":"2025-10-22","modified":"2025-10-22T08:50:00Z","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000086 – Docusaurus-ID-a-jeho-pouzitie"},"sidebar":"tutorialSidebar","previous":{"title":"K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/"},"next":{"title":"KNIFE – Prehľad","permalink":"/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_TEMPLATE_MD_5ACC"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000086',
	guid: '9e070810-b93a-46e3-89cc-ea0ec118e9df',
	dao: 'knife',
	title: 'K000086 – Docusaurus-ID-a-jeho-pouzitie',
	description: '',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [],
	locale: 'sk',
	created: '2025-10-22',
	modified: '2025-10-22T08:50:00Z',
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
	sidebar_label: 'K000086 – Docusaurus-ID-a-jeho-pouzitie'
};
const contentTitle = 'Docusaurus-ID-a-jeho-pouzitie';

const assets = {

};



const toc = [{
  "value": "Čo je <code>id</code> v Docusauruse",
  "id": "čo-je-id-v-docusauruse",
  "level": 2
}, {
  "value": "Prečo je dôležité mať unikátne <code>id</code>",
  "id": "prečo-je-dôležité-mať-unikátne-id",
  "level": 2
}, {
  "value": "Najlepšie praktiky",
  "id": "najlepšie-praktiky",
  "level": 2
}, {
  "value": "Ako sa <code>id</code> používa v sidebaroch",
  "id": "ako-sa-id-používa-v-sidebaroch",
  "level": 2
}, {
  "value": "Záver",
  "id": "záver",
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
        id: "docusaurus-id-a-jeho-pouzitie",
        children: "Docusaurus-ID-a-jeho-pouzitie"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "9e070810-b93a-46e3-89cc-ea0ec118e9df"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "čo-je-id-v-docusauruse",
      children: ["Čo je ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " v Docusauruse"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každý dokument v Docusauruse má ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["interný identifikátor (", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), ")"]
      }), ", ktorý slúži ako trvalý odkaz na daný obsah. Tento ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["určuje jednoznačne dokument v rámci celej lokalizácie (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sk/knifes/K000001"
        }), "),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["používa sa v konfiguráciách ako ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sidebars.ts"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "link"
        }), " komponenty, alebo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "redirects"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "umožňuje stabilný routing aj po zmene názvu alebo presune súboru."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak dokument ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["nemá explicitne definované ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " vo Front Matter"]
      }), ", Docusaurus ho automaticky odvodení zo štruktúry priečinka a názvu súboru (napr. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sk/knifes/moja-tema/index.md"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sk/knifes/moja-tema"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "prečo-je-dôležité-mať-unikátne-id",
      children: ["Prečo je dôležité mať unikátne ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak sa v projekte vyskytnú dve rovnaké ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ", Docusaurus nedokáže jednoznačne rozlíšiť, ktorý dokument sa má zobraziť — build potom skončí chybou:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "The docs plugin found docs sharing the same id: \"sk/knifes/KXXXXXXX\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "najlepšie-praktiky",
      children: "Najlepšie praktiky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Každý KNIFE má mať svoj vlastný ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " vo formáte ", (0,jsx_runtime.jsx)(_components.code, {
          children: "K000XXX"
        }), " podľa CSV indexu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nepoužívaj rovnaké ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " medzi jazykmi (napr. SK a EN), ak dokumenty majú rôzny obsah."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak potrebuješ dokument z procesu alebo šablóny, môžeš použiť dočasné ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " ako ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TMP-KNIFE-YYYYMMDD-XXX"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre systémové dokumenty (napr. home, overview) možno použiť špeciálne ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id"
        }), " ako ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KNIFE_HOME"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KNIFE_OVERVIEW"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "ako-sa-id-používa-v-sidebaroch",
      children: ["Ako sa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " používa v sidebaroch"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V súbore ", (0,jsx_runtime.jsx)(_components.code, {
        children: "publishing/docusaurus/sidebars.ts"
      }), " sa dokumenty referencujú práve podľa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Príklad:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "{\n  type: 'doc',\n  id: 'sk/knifes/K000088-docusaurus-id-a-jeho-pouzitie',\n  label: 'Docusaurus ID a jeho použitie'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak v sidebaroch použiješ ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ", nemusíš sa obávať o presné cesty k súborom — Docusaurus si ich vyrieši sám."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "záver",
      children: "Záver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), " je ako DNA každého dokumentu v Docusauruse.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Zaručuje stabilitu odkazov, jednoznačnosť v build procese a možnosť bezpečne reorganizovať dokumentáciu bez straty navigácie."]
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