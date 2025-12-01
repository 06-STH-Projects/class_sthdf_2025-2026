"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[91583],{

/***/ 25243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_os_install_index_md_151_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-os-install-index-md-151.json
const site_docs_sk_help_os_install_index_md_151_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/os-install/index","title":"Inštalácia podľa operačného systému","description":"V tejto sekcii nájdeš krátke a rýchle návody, ako pripraviť prostredie na prácu s KNIFE, STHDF a Docusaurom na Windows, macOS a Linuxe.","source":"@site/docs/sk/help/os-install/index.md","sourceDirName":"sk/help/os-install","slug":"/sk/help/os-install/","permalink":"/en/sk/help/os-install/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Inštalácia podľa operačného systému"},"sidebar":"tutorialSidebar","previous":{"title":"index","permalink":"/en/sk/help/knifes/tools/"},"next":{"title":"Inštalácia na Linux","permalink":"/en/sk/help/os-install/linux"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/os-install/index.md


const frontMatter = {
	title: 'Inštalácia podľa operačného systému'
};
const contentTitle = 'Inštalácia nástrojov podľa operačného systému';

const assets = {

};



const toc = [{
  "value": "Prečo je to oddelené?",
  "id": "prečo-je-to-oddelené",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "inštalácia-nástrojov-podľa-operačného-systému",
        children: "Inštalácia nástrojov podľa operačného systému"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V tejto sekcii nájdeš krátke a rýchle návody, ako pripraviť prostredie na prácu s KNIFE, STHDF a Docusaurom na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "macOS"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linuxe"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vyber si svoj operačný systém:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/help/os-install/windows-msys2",
          children: "Windows (MSYS2)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/help/os-install/macos",
          children: "macOS"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/help/os-install/linux",
          children: "Linux"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prečo-je-to-oddelené",
      children: "Prečo je to oddelené?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý operačný systém má iné balíčky, iné cesty a iné odporúčané nástroje."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aby sme sa vyhli chaosu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Windows používa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MSYS2"
        }), " (stabilné prostredie + make + Python)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["macOS používa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Homebrew"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux používa natívne balíčkovacie systémy (apt, pacman…)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľ je:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Jednotné príkazy pre študentov na všetkých platformách."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💬 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Small Talk Moment:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "„Keď Makefile funguje na Windows, macOS aj Linuxe, znamená to, že sme už veľmi blízko nirvány vývoja.“ 😄"]
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



/***/ }),

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


/***/ })

}]);