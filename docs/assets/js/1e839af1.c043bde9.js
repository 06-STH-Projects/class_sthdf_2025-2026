"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[90999],{

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

/***/ 99575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000079_co_znamena_slovo_ze_je_nieco_idempotentne_index_md_1e8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000079-co-znamena-slovo-ze-je-nieco-idempotentne-index-md-1e8.json
const site_docs_sk_knifes_k_000079_co_znamena_slovo_ze_je_nieco_idempotentne_index_md_1e8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne/K000079","title":"K000079 – Čo znamená slovo že je niečo idempotentné?","description":"Dosť často sa začalo používať slovo idempotentná operácia. Ako to ale vzniklo? Prečo to vzniklo?","source":"@site/docs/sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne/index.md","sourceDirName":"sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne","slug":"/sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne/","permalink":"/sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/docs/tags/knife"}],"version":"current","sidebarPosition":79,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000079","guid":"d668f12d-7a40-4940-998f-13dba8edeb2b","dao":"knife","title":"K000079 – Čo znamená slovo že je niečo idempotentné?","description":"Dosť často sa začalo používať slovo idempotentná operácia. Ako to ale vzniklo? Prečo to vzniklo?","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-17","modified":"2025-09-17","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","date":"2025-09-17","sidebar_position":79,"sidebar_label":"K000079 – Čo znamená slovo že je niečo idempotentné?"},"sidebar":"tutorialSidebar","previous":{"title":"K000078 – Language as a Bridge (AI ako most medzi jazykmi)","permalink":"/sk/knifes/K000078-language-as-a-bridge-ai-ako-most-medzi-jazykmi/"},"next":{"title":"K000080 – Docusaurus-vs-github-pages-package-json","permalink":"/sk/knifes/K000080-docusaurus-vs-github-pages-package-json/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000079-co-znamena-slovo-ze-je-nieco-idempotentne/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000079',
	guid: 'd668f12d-7a40-4940-998f-13dba8edeb2b',
	dao: 'knife',
	title: 'K000079 – Čo znamená slovo že je niečo idempotentné?',
	description: 'Dosť často sa začalo používať slovo idempotentná operácia. Ako to ale vzniklo? Prečo to vzniklo?',
	author: 'Roman Kazička',
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
	sidebar_position: '79',
	sidebar_label: 'K000079 – Čo znamená slovo že je niečo idempotentné?'
};
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "knife-k000079--čo-znamená-slovo-že-je-niečo-idempotentné",
      children: "KNIFE K000079 – Čo znamená slovo že je niečo idempotentné?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "d668f12d-7a40-4940-998f-13dba8edeb2b"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Idempotentnosť rieši istotu, že keď niečo urobím viackrát, výsledok zostane rovnaký. V praxi je to garancia stability – opakovanie operácie neprinesie novú zmenu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Slovo pochádza z matematiky 19. storočia (Benjamin Peirce, 1870). Latinské ", (0,jsx_runtime.jsx)(_components.em, {
        children: "idem"
      }), " znamená „to isté“ a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "potent"
      }), " znamená „moc, schopnosť“. Teda „moc udržať to isté“. V matematike: f(f(x)) = f(x)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP GET požiadavka je idempotentná – opakované volanie vráti stále ten istý výsledok a nemení stav servera."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Databázový UPDATE na konkrétnu hodnotu (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UPDATE user SET status = 'active'"
        }), ") je idempotentný, lebo opakované spustenie nemení výsledok."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DevOps deploymenty by mali byť idempotentné: ak nasadíš tú istú verziu znova, systém zostane v rovnakom stave."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak si nie si istý, či tvoja operácia je idempotentná, spýtaj sa: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Čo sa stane, ak ju zopakujem?"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pojem idempotentnosť má korene v matematike a informatike. V matematike sa používa na označenie operácií, ktoré pri opakovanom použití nemenia výsledok (napr. absolútna hodnota, logická negácia pri dvoch aplikáciách). V informatike je idempotentnosť kľúčová pre robustnosť systémov: ak HTTP požiadavka, databázová operácia alebo automatizovaný deployment zlyhá, môžeme ju bezpečne zopakovať bez obáv z nežiaduceho efektu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z pohľadu epistemológie (teória poznania) je idempotentnosť symbolom stabilného poznania: opakovaným overovaním nedochádza k zmene výsledku, iba sa utvrdzujeme v správnosti. V praxi je to základ dôveryhodných systémov – vieme, že opakované kroky nevedú k chaosu, ale k stabilite."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pojem idempotentnosť je mimo IT zriedkavý, ale princíp je univerzálny."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obrazný príklad: Usmievať sa na niekoho viackrát – stále je to úsmev, nemení sa na niečo iné."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Idempotentnosť je o stabilite a dôveryhodnosti. Vytvára istotu, že výsledok zostáva nemenný, nech sa operácia zopakuje akokoľvek veľakrát. Tento KNIFE je aj symbolom našej práce: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "opakujeme procesy, ale každý cyklus nás utvrdzuje v tom, že sme na správnej ceste."
      })]
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