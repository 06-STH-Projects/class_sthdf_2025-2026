"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[6498],{

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

/***/ 41511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ 48952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_010_sdlc_03_solution_architecture_design_md_752_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-010-sdlc-03-solution-architecture-design-md-752.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_010_sdlc_03_solution_architecture_design_md_752_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/solution-architecture/design","title":"design","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/03-solution-architecture/design.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/solution-architecture/design","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/solution-architecture/design","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.023187+00:00","fm_version_comment":"","guid":"68a03276-9a6d-4526-a133-c54a5ea7d050","dao":"class_sthdf_dashboard","title":"design","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"03 solution architecture","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/solution-architecture/"},"next":{"title":"04 analysis","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/analysis/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ010/sdlc/03-solution-architecture/design.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.023187+00:00',
	fm_version_comment: '',
	guid: '68a03276-9a6d-4526-a133-c54a5ea7d050',
	dao: 'class_sthdf_dashboard',
	title: 'design',
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
	created: '2025-11-28 16:54',
	modified: '2025-11-28 16:54',
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
const contentTitle = undefined;

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytvorenie laserových šablón (použitý SW: Inkscape)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Drawings",
        src: (__webpack_require__(41511)/* ["default"] */ .A) + "",
        width: "440",
        height: "320"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PRJ010 / 03-solution-architecture / design.md"
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