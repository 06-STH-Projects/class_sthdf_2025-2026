"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[69047],{

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

/***/ 90071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_sthdf_2025_st_010_students_index_md_3ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-sthdf-2025-st-010-students-index-md-3ba.json
const site_docs_sk_sthdf_2025_st_010_students_index_md_3ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/sthdf/ST_010/students/index","title":"students","description":"{{DESCRIPTION}}","source":"@site/docs/sk/sthdf/2025_ST_010/students/index.md","sourceDirName":"sk/sthdf/2025_ST_010/students","slug":"/sk/sthdf/ST_010/students/","permalink":"/sk/sthdf/ST_010/students/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T19:46:59.266206+00:00","fm_version_comment":"","guid":"291bd1af-aede-4019-9e83-c1c8bcc968cb","dao":"sthdf","title":"students","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 20:46","modified":"2025-11-24 20:46","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"impact analysis","permalink":"/sk/sthdf/ST_010/projects/sdlc/ChangeManagement/impact-analysis"},"next":{"title":"deliverables","permalink":"/sk/sthdf/ST_010/students/deliverables/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/sthdf/2025_ST_010/students/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T19:46:59.266206+00:00',
	fm_version_comment: '',
	guid: '291bd1af-aede-4019-9e83-c1c8bcc968cb',
	dao: 'sthdf',
	title: 'students',
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
const contentTitle = '👥 Študenti – Dashboard';

const assets = {

};



const toc = [{
  "value": "🔗 Navigácia",
  "id": "-navigácia",
  "level": 2
}, {
  "value": "ℹ️ Poznámka",
  "id": "ℹ️-poznámka",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "-študenti--dashboard",
        children: "👥 Študenti – Dashboard"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V tejto sekcii sa nachádzajú študentské deliverables."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-navigácia",
      children: "🔗 Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "01 – About Me"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/about-me",
            children: "01 – About Me"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "02 – Knowledge Contribution (A2)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/knowledge-contribution",
            children: "02 – Knowledge Contribution (A2)"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "03 – Project Summary"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/project-summary",
            children: "03 – Project Summary"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "04 – Project Outcomes"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/project-outcomes",
            children: "04 – Project Outcomes"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "05 – Pitch Presentation"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/pitch_presentation",
            children: "05 – Pitch Presentation"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "06 – Final Presentation"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/final_presentation",
            children: "06 – Final Presentation"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "07 – Reflexia"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ ", (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/sthdf/ST_010/students/deliverables/reflexia",
            children: "07 – Reflexia"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ℹ️-poznámka",
      children: "ℹ️ Poznámka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento súbor je súčasťou ", (0,jsx_runtime.jsx)(_components.em, {
        children: "defaultného template"
      }), " a zabezpečuje stabilitu sidebaru aj navigácie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/",
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