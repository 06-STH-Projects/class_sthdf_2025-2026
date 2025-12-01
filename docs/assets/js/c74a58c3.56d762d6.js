"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[48857],{

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

/***/ 35504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_q_12_index_md_c74_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-q-12-index-md-c74.json
const site_docs_sk_q_12_index_md_c74_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/q12/INDEX_Q12_SK","title":"Q12 (SK)","description":"","source":"@site/docs/sk/q12/index.md","sourceDirName":"sk/q12","slug":"/sk/q12/","permalink":"/sk/q12/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/docs/tags/knife"},{"inline":true,"label":"q12","permalink":"/docs/tags/q-12"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-05T09:52:55Z","fm_version_comment":"","id":"INDEX_Q12_SK","guid":"0c5f1d35-1e4f-4b2d-a9a4-9b6d3a7f1234","dao":"q12","title":"Q12 (SK)","description":"","author":"Roman Kazička","authors":["{{AUTHOR}}"],"category":"","type":"","priority":"","tags":["knife","q12"],"locale":"sk","created":"2025-11-05T09:52:55Z","modified":"","status":"draft","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"CAA/KNIFE","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"03.Technologies","permalink":"/sk/q12/Q12_Sample_001/ProductServiceLifeCycle/Maintenance/Technologies/"},"next":{"title":"01-class_sthdf_dashboard_2025-2026 – 01-class_sthdf_dashboard – rok 2025-2026","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/q12/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-05T09:52:55Z',
	fm_version_comment: '',
	id: 'INDEX_Q12_SK',
	guid: '0c5f1d35-1e4f-4b2d-a9a4-9b6d3a7f1234',
	dao: 'q12',
	title: 'Q12 (SK)',
	description: '',
	author: 'Roman Kazička',
	authors: [
		'{{AUTHOR}}'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'knife',
		'q12'
	],
	locale: 'sk',
	created: '2025-11-05T09:52:55Z',
	modified: '',
	status: 'draft',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: 'CAA/KNIFE',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Q12 (SK) – Navigačná stránka pre Q12 položky';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "q12-sk--navigačná-stránka-pre-q12-položky",
        children: "Q12 (SK) – Navigačná stránka pre Q12 položky"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0C5F1D35-1E4F-4B2D-A9A4-9B6D3A7F1234"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SK\n(Tu sa budú pridávať linky na nové vznikajúce Q12 zápisy a checklisty.)"
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