"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[62667],{

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

/***/ 85032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000086_docusaurus_id_a_jeho_pouzitie_index_template_md_754_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000086-docusaurus-id-a-jeho-pouzitie-index-template-md-754.json
const site_docs_sk_knifes_k_000086_docusaurus_id_a_jeho_pouzitie_index_template_md_754_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_TEMPLATE_MD_5ACC","title":"KNIFE – Prehľad","description":"","source":"@site/docs/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/index.template.md","sourceDirName":"sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie","slug":"/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_TEMPLATE_MD_5ACC","permalink":"/en/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_TEMPLATE_MD_5ACC","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","guid":"eaf8f7a0-8039-44e8-9c1d-adb95d3cd0d6","dao":"knife","title":"KNIFE – Prehľad","description":"","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":[],"locale":"en","created":"2025-09-24","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","id":"K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_TEMPLATE_MD_5ACC"},"sidebar":"tutorialSidebar","previous":{"title":"K000086 – Docusaurus-ID-a-jeho-pouzitie","permalink":"/en/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/"},"next":{"title":"KNIFE – Prehľad","permalink":"/en/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_USER_TEMPLATE_MD_F4AE"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/index.template.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	guid: 'eaf8f7a0-8039-44e8-9c1d-adb95d3cd0d6',
	dao: 'knife',
	title: 'KNIFE – Prehľad',
	description: '',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [],
	locale: 'en',
	created: '2025-09-24',
	modified: 'YYYY-MM-DDTHH:MM:SSZ',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	id: 'K000086_DOCUSAURUS_ID_A_JEHO_POUZITIE_INDEX_TEMPLATE_MD_5ACC'
};
const contentTitle = 'KNIFE – Prehľad';

const assets = {

};



const toc = [{
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Context",
  "id": "context",
  "level": 2
}, {
  "value": "Steps",
  "id": "steps",
  "level": 2
}, {
  "value": "Resources",
  "id": "resources",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
        id: "knife--prehľad",
        children: "KNIFE – Prehľad"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "eaf8f7a0-8039-44e8-9c1d-adb95d3cd0d6"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Doplň stručný popis."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "context",
      children: "Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Prečo vzniklo, komu pomáha."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "steps",
      children: "Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "krok 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "krok 2"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resources",
      children: "Resources"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "odkazy, obrázky"
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