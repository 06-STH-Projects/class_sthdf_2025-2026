"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[7096],{

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

/***/ 54368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_sthdf_2025_st_010_projects_sdlc_index_md_88d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-sthdf-2025-st-010-projects-sdlc-index-md-88d.json
const site_docs_sk_sthdf_2025_st_010_projects_sdlc_index_md_88d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/sthdf/ST_010/projects/sdlc/index","title":"sdlc","description":"{{DESCRIPTION}}","source":"@site/docs/sk/sthdf/2025_ST_010/projects/sdlc/index.md","sourceDirName":"sk/sthdf/2025_ST_010/projects/sdlc","slug":"/sk/sthdf/ST_010/projects/sdlc/","permalink":"/en/sk/sthdf/ST_010/projects/sdlc/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T19:46:59.271794+00:00","fm_version_comment":"","guid":"68cad82c-1700-494b-a27f-9cf21d7d966c","dao":"sthdf","title":"sdlc","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 20:46","modified":"2025-11-24 20:46","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"03.Technologies","permalink":"/en/sk/sthdf/ST_010/projects/q12/ProductServiceLifeCycle/Maintenance/Technologies/"},"next":{"title":"01 Requirements","permalink":"/en/sk/sthdf/ST_010/projects/sdlc/Requirements/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/sthdf/2025_ST_010/projects/sdlc/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T19:46:59.271794+00:00',
	fm_version_comment: '',
	guid: '68cad82c-1700-494b-a27f-9cf21d7d966c',
	dao: 'sthdf',
	title: 'sdlc',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-24 20:46',
	modified: '2025-11-24 20:46',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = '🧭 Project Summary – SDLC v9 (Full Lifecycle)';

const assets = {

};



const toc = [{
  "value": "📂 Etapy SDLC",
  "id": "-etapy-sdlc",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-project-summary--sdlc-v9-full-lifecycle",
        children: "🧭 Project Summary – SDLC v9 (Full Lifecycle)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento priečinok obsahuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "9 etáp SDLC"
      }), " – od požiadaviek po riadenie zmien.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Každá fáza má vlastný ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.md"
      }), " so stručným opisom a úlohami."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-etapy-sdlc",
      children: "📂 Etapy SDLC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Requirements/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements"
        })
      }), " – Zachytenie potrieb, cieľov a očakávaní používateľov.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "2️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Analysis/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis"
        })
      }), " – Analýza uskutočniteľnosti, rizík a alternatív riešenia.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "3️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Design/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Design"
        })
      }), " – Návrh architektúry, dátového modelu a UI/UX.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "4️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Implementation/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation"
        })
      }), " – Realizácia návrhu – kód, konfigurácia, build pipeline.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "5️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Testing/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing"
        })
      }), " – Overenie kvality – test cases, QA checklist, výsledky.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "6️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Deployment/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment"
        })
      }), " – Nasadenie riešenia, demo alebo prezentácia MVP.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "7️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Maintenance/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintenance"
        })
      }), " – Údržba a drobné vylepšenia po nasadení.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "8️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/Documentation/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation"
        })
      }), " – Používateľská a technická dokumentácia.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "9️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/sdlc/ChangeManagement/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Change Management"
        })
      }), " – Riadenie zmien – Change Log, Impact Analysis, CR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sthdf/ST_010/projects/",
        children: "🏠 Home"
      }), " · Otvor niektorú z podpriečinkov ↑"]
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