"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[40236],{

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

/***/ 69305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_github_classroom_gh_class_onboarding_students_md_321_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-github-classroom-gh-class-onboarding-students-md-321.json
const site_docs_sk_help_howto_github_classroom_gh_class_onboarding_students_md_321_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/github-classroom/GH-Class-Onboarding-Students","title":"Onboarding pre študentov (SK)","description":"1. Klikni na assignment","source":"@site/docs/sk/help/howto/github-classroom/GH-Class-Onboarding-Students.md","sourceDirName":"sk/help/howto/github-classroom","slug":"/sk/help/howto/github-classroom/GH-Class-Onboarding-Students","permalink":"/sk/help/howto/github-classroom/GH-Class-Onboarding-Students","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Classroom – Role a práca asistentov","permalink":"/sk/help/howto/github-classroom/GH-Class-Assistants"},"next":{"title":"Onboarding pre učiteľov (SK)","permalink":"/sk/help/howto/github-classroom/GH-Class-Onboarding-Teachers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/github-classroom/GH-Class-Onboarding-Students.md


const frontMatter = {};
const contentTitle = 'Onboarding pre študentov (SK)';

const assets = {

};



const toc = [{
  "value": "1. Klikni na assignment",
  "id": "1-klikni-na-assignment",
  "level": 2
}, {
  "value": "2. Over meno",
  "id": "2-over-meno",
  "level": 2
}, {
  "value": "3. GitHub ti vytvorí repozitár",
  "id": "3-github-ti-vytvorí-repozitár",
  "level": 2
}, {
  "value": "4. Klonuj repozitár",
  "id": "4-klonuj-repozitár",
  "level": 2
}, {
  "value": "5. Prvý commit",
  "id": "5-prvý-commit",
  "level": 2
}, {
  "value": "6. Sync PR",
  "id": "6-sync-pr",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "onboarding-pre-študentov-sk",
        children: "Onboarding pre študentov (SK)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-klikni-na-assignment",
      children: "1. Klikni na assignment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dostaneš link od učiteľa."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prihlás sa správnym GitHub účtom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-over-meno",
      children: "2. Over meno"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použi školské označenie (napr. ST-001)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-github-ti-vytvorí-repozitár",
      children: "3. GitHub ti vytvorí repozitár"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automaticky vznikne súkromná kópia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-klonuj-repozitár",
      children: "4. Klonuj repozitár"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git clone <url>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "ukážka-z-reálnych-aktivít",
      children: "Ukážka z reálnych aktivít"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-prvý-commit",
      children: "5. Prvý commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Doplň ", (0,jsx_runtime.jsx)(_components.em, {
          children: "AboutMe"
        }), " a pushni."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-sync-pr",
      children: "6. Sync PR"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Učiteľ pošle PR cez sync assignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tvoj PR otvor → resolve conflicts → merge."
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