"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[10656],{

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

/***/ 46351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_active_presenter_index_md_108_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-active-presenter-index-md-108.json
const site_docs_sk_help_howto_active_presenter_index_md_108_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/ActivePresenter/help-howto-activepresenter-sk","title":"ActivePresenter – HTML5 návod","description":"Tento návod je integrovaný priamo na stránke pomocou HTML5 výstupu z ActivePresenter.","source":"@site/docs/sk/help/howto/ActivePresenter/index.md","sourceDirName":"sk/help/howto/ActivePresenter","slug":"/sk/help/howto/ActivePresenter/","permalink":"/en/sk/help/howto/ActivePresenter/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"id":"help-howto-activepresenter-sk","title":"ActivePresenter – HTML5 návod","sidebar_label":"ActivePresenter"},"sidebar":"tutorialSidebar","previous":{"title":"🆘 HOWTO – Praktické návody (SK)","permalink":"/en/sk/help/howto/"},"next":{"title":"🧰 Operations skripty (Windows / macOS / Linux)","permalink":"/en/sk/help/howto/Operations/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/ActivePresenter/index.md


const frontMatter = {
	id: 'help-howto-activepresenter-sk',
	title: 'ActivePresenter – HTML5 návod',
	sidebar_label: 'ActivePresenter'
};
const contentTitle = '🎥 ActivePresenter – HTML5 návod';

const assets = {

};



const toc = [{
  "value": "1. Embedded návod (HTML5)",
  "id": "1-embedded-návod-html5",
  "level": 2
}, {
  "value": "2. Otvoriť návod v novom okne",
  "id": "2-otvoriť-návod-v-novom-okne",
  "level": 2
}, {
  "value": "🧭 Navigácia",
  "id": "-navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-activepresenter--html5-návod",
        children: "🎥 ActivePresenter – HTML5 návod"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento návod je integrovaný priamo na stránke pomocou HTML5 výstupu z ActivePresenter."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-embedded-návod-html5",
      children: "1. Embedded návod (HTML5)"
    }), "\n", (0,jsx_runtime.jsx)("iframe", {
      src: "/assets/topics/001-GH-StudentsOnboarding/HTML5/index.html",
      width: "100%",
      height: "800",
      loading: "lazy",
      title: "ActivePresenter – HTML5 návod"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-otvoriť-návod-v-novom-okne",
      children: "2. Otvoriť návod v novom okne"
    }), "\n", (0,jsx_runtime.jsx)("a", {
      href: "/assets/topics/001-GH-StudentsOnboarding/HTML5/index.html",
      target: "_blank",
      rel: "noreferrer noopener",
      children: (0,jsx_runtime.jsx)(_components.p, {
        children: "🔗 Otvoriť HTML5 návod v novom okne"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-navigácia",
      children: "🧭 Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔼 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/help/howto/",
          children: "Späť na HOWTO"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏠 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/help/",
          children: "Späť na HELP (SK)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🗺️ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/",
          children: "Späť na KNIFE Overview"
        })]
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