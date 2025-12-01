"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[90969],{

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

/***/ 45825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_index_md_dff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-index-md-dff.json
const site_docs_sk_knifes_index_md_dff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/SK_KNIFES_HOME","title":"SK_KNIFES_HOME – KNIFES (SK)","description":"Úvod do KNIFES sekcie.","source":"@site/docs/sk/knifes/index.md","sourceDirName":"sk/knifes","slug":"/sk/knifes/","permalink":"/en/sk/knifes/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-28T00:00:00Z","fm_version_comment":"Stabilné ID/slug pre navigáciu (hub + SK + EN)","id":"SK_KNIFES_HOME","guid":"fae1ca43-0ec4-4fea-9306-4490f5d3e13d","dao":"knife","title":"SK_KNIFES_HOME – KNIFES (SK)","description":"Úvod do KNIFES sekcie.","author":"Roman Kazička","authors":["Roman Kazička"],"category":"","type":"","priority":"no","tags":[],"locale":"sk","created":"2025-10-28","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"draft","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_position":1,"sidebar_label":"SK_KNIFES_HOME – KNIFES (SK)"},"sidebar":"tutorialSidebar","previous":{"title":"K000001 – EA modelovanie a motivácia","permalink":"/en/sk/knifes/K000001-ea-modelovanie-a-motivacia/"},"next":{"title":"K000002 – Git workflow pre EA modely","permalink":"/en/sk/knifes/K000002-git-workflow-pre-ea-modely/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-28T00:00:00Z',
	fm_version_comment: 'Stabilné ID/slug pre navigáciu (hub + SK + EN)',
	id: 'SK_KNIFES_HOME',
	guid: 'fae1ca43-0ec4-4fea-9306-4490f5d3e13d',
	dao: 'knife',
	title: 'SK_KNIFES_HOME – KNIFES (SK)',
	description: 'Úvod do KNIFES sekcie.',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička'
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [],
	locale: 'sk',
	created: '2025-10-28',
	modified: 'YYYY-MM-DDTHH:MM:SSZ',
	status: 'draft',
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
	sidebar_position: 1,
	sidebar_label: 'SK_KNIFES_HOME – KNIFES (SK)'
};
const contentTitle = 'KNIFES (SK)';

const assets = {

};



const toc = [{
  "value": "📊 Prehľady KNIFE príspevkov",
  "id": "-prehľady-knife-príspevkov",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "knifes-sk",
        children: "KNIFES (SK)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rozcestník KNIFE príspevkov."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-prehľady-knife-príspevkov",
      children: "📊 Prehľady KNIFE príspevkov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu nájdeš rýchle odkazy na prehľady všetkých KNIFE záznamov podľa rôznych pohľadov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📰 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "Blogový prehľad"
        }), " — zoradený podľa ID s dátumom vytvorenia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🗂️ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznamový prehľad"
        }), " — stručný zoznam so statusom a prioritou."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📈 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detailný prehľad"
        }), " — tabuľka s ID, dátumom, statusom a prioritou."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["📚 ", (0,jsx_runtime.jsxs)(_components.em, {
        children: ["Pre návrat na hlavnú stránku dokumentácie klikni na ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/",
          children: "🧭 Hub"
        })]
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