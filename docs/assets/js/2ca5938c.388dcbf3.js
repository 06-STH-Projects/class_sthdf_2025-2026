"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[9879],{

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

/***/ 55376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_github_classroom_gh_class_onboarding_teachers_md_2ca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-github-classroom-gh-class-onboarding-teachers-md-2ca.json
const site_docs_sk_help_howto_github_classroom_gh_class_onboarding_teachers_md_2ca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/github-classroom/GH-Class-Onboarding-Teachers","title":"Onboarding pre učiteľov (SK)","description":"1. Vytvorenie assignmentu","source":"@site/docs/sk/help/howto/github-classroom/GH-Class-Onboarding-Teachers.md","sourceDirName":"sk/help/howto/github-classroom","slug":"/sk/help/howto/github-classroom/GH-Class-Onboarding-Teachers","permalink":"/sk/help/howto/github-classroom/GH-Class-Onboarding-Teachers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Onboarding pre študentov (SK)","permalink":"/sk/help/howto/github-classroom/GH-Class-Onboarding-Students"},"next":{"title":"GitHub Classroom – Onboarding študentov","permalink":"/sk/help/howto/github-classroom/GH-Class-Onboarding"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/github-classroom/GH-Class-Onboarding-Teachers.md


const frontMatter = {};
const contentTitle = 'Onboarding pre učiteľov (SK)';

const assets = {

};



const toc = [{
  "value": "1. Vytvorenie assignmentu",
  "id": "1-vytvorenie-assignmentu",
  "level": 2
}, {
  "value": "2. Prefixy a mená",
  "id": "2-prefixy-a-mená",
  "level": 2
}, {
  "value": "3. Ako funguje workflow",
  "id": "3-ako-funguje-workflow",
  "level": 2
}, {
  "value": "4. Sync assignmentu (učiteľský pohľad)",
  "id": "4-sync-assignmentu-učiteľský-pohľad",
  "level": 2
}, {
  "value": "5. Správa triedy",
  "id": "5-správa-triedy",
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
        id: "onboarding-pre-učiteľov-sk",
        children: "Onboarding pre učiteľov (SK)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-vytvorenie-assignmentu",
      children: "1. Vytvorenie assignmentu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Priprav si template repozitár."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor GitHub Classroom → Create Assignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyber template."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zadaj prefix v tvare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025_ST-"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Student dostane repozitár automaticky."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-prefixy-a-mená",
      children: "2. Prefixy a mená"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prefix musí byť konzistentný: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025_ST-001"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2025_ST-002"
        }), ", ..."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak študent zvolí nesprávny účet, nevidí assignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "POZOR- PREFIX sa nastavuje cez malé písmená pod názvom projektu. Ak si nedáš pozor, neuvidíš."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-ako-funguje-workflow",
      children: "3. Ako funguje workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Učiteľ vytvorí assignment."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študent klikne → GitHub Classroom vytvorí repozitár."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Každý repozitár je súkromný."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sync assignment aktualizuje iba existujúce repozitáre."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-sync-assignmentu-učiteľský-pohľad",
      children: "4. Sync assignmentu (učiteľský pohľad)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vždy robíš sync z Classroom → template → študenti."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sync vytvorí PR do študentských repozitárov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študent PR vyrieši a merge-ne."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-správa-triedy",
      children: "5. Správa triedy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môžeš premenovať repozitáre."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môžeš pridávať asistenta."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Môžeš pridávať ďalšie assignmenty."
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