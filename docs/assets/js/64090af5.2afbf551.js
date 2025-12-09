"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[66502],{

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

/***/ 86124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_06_implementation_index_md_640_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-004-sdlc-06-implementation-index-md-640.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_06_implementation_index_md_640_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/implementation/index","title":"06 implementation","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/06-implementation/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/06-implementation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/implementation/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/implementation/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.010285+00:00","fm_version_comment":"","guid":"55171669-83b0-4f30-9f38-b63febdca625","dao":"class_sthdf_dashboard","title":"06 implementation","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"prototype","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/design/prototype"},"next":{"title":"code links","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/implementation/code-links"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/06-implementation/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.010285+00:00',
	fm_version_comment: '',
	guid: '55171669-83b0-4f30-9f38-b63febdca625',
	dao: 'class_sthdf_dashboard',
	title: '06 implementation',
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
const contentTitle = '06-Implementation';

const assets = {

};



const toc = [{
  "value": "🛠 Použité technológie",
  "id": "-použité-technológie",
  "level": 2
}, {
  "value": "📂 Štruktúra projektu (stručne)",
  "id": "-štruktúra-projektu-stručne",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "06-implementation",
        children: "06-Implementation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🌐 Repozitar: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/thenisvan/SerialyTTY",
          children: "GitHub"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🌐 Web: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://thenisvan.github.io/SerialyTTY/",
          children: "Web Stranka"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-použité-technológie",
      children: "🛠 Použité technológie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PlatformIO + ESP-IDF"
        }), " – build a flash firmvéru pre ESP32-C6"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C / C++"
        }), " – implementácia firmware modulov (Baud Detect, Bridge, Menu)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VS Code / seriový monitor"
        }), " – terminál a debug počas vývoja"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-štruktúra-projektu-stručne",
      children: "📂 Štruktúra projektu (stručne)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "📁 SerialyTTY/\n├── 📄 README.md                    (This file)\n├── 📄 USER_GUIDE.md                Complete usage manual\n├── 📄 API_DOCUMENTATION.md         Developer API reference\n├── 📄 FAQ_TROUBLESHOOTING.md       Common issues and solutions\n├── 📄 BUILD_GUIDE.md               Detailed build instructions\n├── 📄 LINUX_SETUP.md               Linux-specific setup\n├── 📄 PHASE_3_4_COMPLETE.md        Implementation details\n├── 📄 INTEGRATION_TEST_PLAN.md     Testing procedures\n├── 📁 include/                     Header files (public API)\n├── 📁 src/                         Source code (implementations)\n├── 📄 platformio.ini               Build configuration\n├── 📄 CMakeLists.txt               CMake build config\n└── 📄 sdkconfig.esp32c6            ESP-IDF configuration\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/implementation/code-links",
          children: "Odkazy na kód / repozitáre"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/",
        children: "⬅️ Projekt"
      })]
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