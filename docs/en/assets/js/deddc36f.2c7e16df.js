"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[43156],{

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

/***/ 94354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_github_classroom_gh_class_troubleshooting_md_ded_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-github-classroom-gh-class-troubleshooting-md-ded.json
const site_docs_sk_help_howto_github_classroom_gh_class_troubleshooting_md_ded_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/github-classroom/GH-Class-Troubleshooting","title":"Troubleshooting (SK)","description":"1. Študent nevidí assignment","source":"@site/docs/sk/help/howto/github-classroom/GH-Class-Troubleshooting.md","sourceDirName":"sk/help/howto/github-classroom","slug":"/sk/help/howto/github-classroom/GH-Class-Troubleshooting","permalink":"/en/sk/help/howto/github-classroom/GH-Class-Troubleshooting","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Classroom – Sync Assignment (aktualizácia šablóny)","permalink":"/en/sk/help/howto/github-classroom/GH-Class-Sync"},"next":{"title":"Ako aktualizovať templaty v GitHub Classroom","permalink":"/en/sk/help/howto/github-classroom/GitHub-Class-Update"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/github-classroom/GH-Class-Troubleshooting.md


const frontMatter = {};
const contentTitle = 'Troubleshooting (SK)';

const assets = {

};



const toc = [{
  "value": "1. Študent nevidí assignment",
  "id": "1-študent-nevidí-assignment",
  "level": 2
}, {
  "value": "2. Sync nevytvára PR",
  "id": "2-sync-nevytvára-pr",
  "level": 2
}, {
  "value": "3. Konflikty v PR",
  "id": "3-konflikty-v-pr",
  "level": 2
}, {
  "value": "4. Študent nemôže pushnúť",
  "id": "4-študent-nemôže-pushnúť",
  "level": 2
}, {
  "value": "5. Študent pracuje pod iným účtom",
  "id": "5-študent-pracuje-pod-iným-účtom",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "troubleshooting-sk",
        children: "Troubleshooting (SK)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-študent-nevidí-assignment",
      children: "1. Študent nevidí assignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nemá GitHub účet"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Je prihlásený nesprávnym účtom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefix nebol zadaný pri vytváraní assignmentu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-sync-nevytvára-pr",
      children: "2. Sync nevytvára PR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template neobsahuje nové zmeny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assignment bol vytvorený z nesprávneho templatu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-konflikty-v-pr",
      children: "3. Konflikty v PR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študent menil tie isté súbory, ktoré aktualizoval učiteľ"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riešenie: manuálne vyriešiť konflikt, potvrdiť merge"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-študent-nemôže-pushnúť",
      children: "4. Študent nemôže pushnúť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chýba ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git pull"
        }), " pred push"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lokálne zmeny sú v konfliktnom stave"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upstream URL je zle nastavené"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-študent-pracuje-pod-iným-účtom",
      children: "5. Študent pracuje pod iným účtom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overiť Settings → Emails → Primary email"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Odhlásiť sa a prihlásiť správnym GitHub účtom"
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