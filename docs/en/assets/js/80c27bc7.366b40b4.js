"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[19901],{

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

/***/ 31348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_01_about_me_md_80c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-01-about-me-md-80c.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_01_about_me_md_80c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me","title":"2025_ST_038 – STHDF – Študent 038 (script)","description":"DESCRIPTION","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T15:50:07.130106+00:00","fm_version_comment":"","guid":"33bf8f36-a806-48b5-92fa-24694a2b22cf","dao":"sthdf","title":"2025_ST_038 – STHDF – Študent 038 (script)","description":"DESCRIPTION","author":"Dominik Pallo","authors":["Dominik Pallo"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 16:50","modified":"2025-11-24 16:50","status":"backlog","privacy":"public","rights_holder_content":"Dominik Pallo","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Dominik Pallo","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Dominik Pallo","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"index","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/"},"next":{"title":"knowledge-contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T15:50:07.130106+00:00',
	fm_version_comment: '',
	guid: '33bf8f36-a806-48b5-92fa-24694a2b22cf',
	dao: 'sthdf',
	title: '2025_ST_038 – STHDF – Študent 038 (script)',
	description: 'DESCRIPTION',
	author: 'Dominik Pallo',
	authors: [
		'Dominik Pallo'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-24 16:50',
	modified: '2025-11-24 16:50',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Dominik Pallo',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Dominik Pallo',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Dominik Pallo',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "🔖 Základné informácie",
  "id": "-základné-informácie",
  "level": 2
}, {
  "value": "🎯 Profesijné záujmy",
  "id": "-profesijné-záujmy",
  "level": 2
}, {
  "value": "💡 Moje hobby / záujmy",
  "id": "-moje-hobby--záujmy",
  "level": 2
}, {
  "value": "🚀 Očakávania od predmetu",
  "id": "-očakávania-od-predmetu",
  "level": 2
}, {
  "value": "🚀 Čo viem ponúknuť",
  "id": "-čo-viem-ponúknuť",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "🙋 About Me"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-základné-informácie",
      children: "🔖 Základné informácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meno a priezvisko"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študentský GitHub profil (link)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kontaktný e-mail"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-profesijné-záujmy",
      children: "🎯 Profesijné záujmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Oblasti, ktoré ma bavia (IT, dizajn, podnikanie, …)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Aké skúsenosti by som chcel získať"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-moje-hobby--záujmy",
      children: "💡 Moje hobby / záujmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Šport, hudba, varenie, cestovanie …"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čokoľvek, čo odhaľuje „ľudskú stránku“"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-očakávania-od-predmetu",
      children: "🚀 Očakávania od predmetu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo chcem dosiahnuť v rámci kurzu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo očakávam od spolupráce s tímom a komunitou"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-viem-ponúknuť",
      children: "🚀 Čo viem ponúknuť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo chcem ponúknuť v rámci kurzu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/",
          children: "↩️ Späť"
        })
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