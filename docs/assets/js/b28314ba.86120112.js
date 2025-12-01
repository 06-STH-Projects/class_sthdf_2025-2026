"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[12608],{

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

/***/ 76417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_index_md_b28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-index-md-b28.json
const site_docs_sk_help_howto_index_md_b28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/index","title":"🆘 HOWTO – Praktické návody (SK)","description":"Táto sekcia združuje krátke návody typu HOWTO – krok za krokom, zamerané na konkrétnu úlohu alebo nástroj.","source":"@site/docs/sk/help/howto/index.md","sourceDirName":"sk/help/howto","slug":"/sk/help/howto/","permalink":"/sk/help/howto/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Docusaurus – inštalácia a základné príkazy","permalink":"/sk/help/docusaurus"},"next":{"title":"ActivePresenter","permalink":"/sk/help/howto/ActivePresenter/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/index.md


const frontMatter = {};
const contentTitle = '🆘 HOWTO – Praktické návody (SK)';

const assets = {

};



const toc = [{
  "value": "🔧 Dostupné návody",
  "id": "-dostupné-návody",
  "level": 2
}, {
  "value": "🧭 Navigácia",
  "id": "-navigácia",
  "level": 2
}, {
  "value": "🔧 Dostupné návody",
  "id": "-dostupné-návody-1",
  "level": 2
}, {
  "value": "🎓 Návody k nástrojom",
  "id": "-návody-k-nástrojom",
  "level": 3
}, {
  "value": "🧩 Generátory KNIFE / STHDF / 7Ds / SDLC / Q12 / Thesis",
  "id": "-generátory-knife--sthdf--7ds--sdlc--q12--thesis",
  "level": 3
}, {
  "value": "🧭 Navigácia",
  "id": "-navigácia-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "-howto--praktické-návody-sk",
        children: "🆘 HOWTO – Praktické návody (SK)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Táto sekcia združuje krátke ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "návody typu HOWTO"
      }), " – krok za krokom, zamerané na konkrétnu úlohu alebo nástroj."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-dostupné-návody",
      children: "🔧 Dostupné návody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎥 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./ActivePresenter/",
          children: "ActivePresenter – HTML5 návod"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏫 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "./github-classroom/",
          children: "GitHub Classroom – onboarding študentov"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-navigácia",
      children: "🧭 Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏠 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/",
          children: "Späť na HELP (SK)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔼 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/",
          children: "Späť na KNIFE Overview"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Poznámka: Ďalšie návody (napr. VS Code, Git, Docusaurus…) sem môžeš pridávať ako nové podpriečinky s vlastným ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-howto--praktické-návody-sk-1",
      children: "🆘 HOWTO – Praktické návody (SK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Táto sekcia združuje krátke ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "návody typu HOWTO"
      }), " – krok za krokom, zamerané na konkrétnu úlohu alebo nástroj."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-dostupné-návody-1",
      children: "🔧 Dostupné návody"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-návody-k-nástrojom",
      children: "🎓 Návody k nástrojom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎥 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/ActivePresenter/",
          children: "ActivePresenter – HTML5 návod"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏫 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/github-classroom/",
          children: "GitHub Classroom – onboarding študentov"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-generátory-knife--sthdf--7ds--sdlc--q12--thesis",
      children: "🧩 Generátory KNIFE / STHDF / 7Ds / SDLC / Q12 / Thesis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔪 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-knife",
          children: "Vytvorenie nového KNIFE zápisu"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎓 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-sthdf",
          children: "Vytvorenie nového STHDF stromu (študent/projekt)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🌱 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-7ds",
          children: "Vytvorenie novej 7Ds inštancie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚙️ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-sdlc",
          children: "Vytvorenie novej SDLC inštancie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔢 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-q12",
          children: "Vytvorenie novej Q12 inštancie"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📄 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/howto/new-thesis",
          children: "Vytvorenie novej Thesis šablóny"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-navigácia-1",
      children: "🧭 Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏠 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/help/",
          children: "Späť na HELP (SK)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔼 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/",
          children: "Späť na KNIFE Overview"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Poznámka: Ďalšie návody (napr. VS Code, Git, Docusaurus…) sem môžeš pridávať ako nové podpriečinky alebo súbory s vlastným ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), "."]
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