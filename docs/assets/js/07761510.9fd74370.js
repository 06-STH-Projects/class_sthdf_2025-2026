"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[52250],{

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

/***/ 67219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000083_aktualizacia_komponentov_pre_docusaurus_contributing_md_077_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000083-aktualizacia-komponentov-pre-docusaurus-contributing-md-077.json
const site_docs_sk_knifes_k_000083_aktualizacia_komponentov_pre_docusaurus_contributing_md_077_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_04","title":"KNIFE – K000083_04","description":"-","source":"@site/docs/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/CONTRIBUTING.md","sourceDirName":"sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus","slug":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_04","permalink":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_04","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"-","permalink":"/docs/tags"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000083_04","guid":"ea4135ce-9848-4fef-918a-a9fbccba35d3","dao":"knife","title":"KNIFE – K000083_04","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"deliverable","type":"knife","priority":"no","tags":["-"],"locale":"sk","created":"2025-09-26","modified":"2025-09-26","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Educational content. Use at your own risk.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"KNIFE – K000083_01","permalink":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_01"},"next":{"title":"KNIFE – K000083_02","permalink":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_02"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/CONTRIBUTING.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000083_04',
	guid: 'ea4135ce-9848-4fef-918a-a9fbccba35d3',
	dao: 'knife',
	title: 'KNIFE – K000083_04',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: 'deliverable',
	type: 'knife',
	priority: 'no',
	tags: [
		'-'
	],
	locale: 'sk',
	created: '2025-09-26',
	modified: '2025-09-26',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Educational content. Use at your own risk.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '-',
	author_did: '-',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Contributing Guide';

const assets = {

};



const toc = [{
  "value": "Verzia Node",
  "id": "verzia-node",
  "level": 2
}, {
  "value": "Inštalácia závislostí",
  "id": "inštalácia-závislostí",
  "level": 2
}, {
  "value": "Development",
  "id": "development",
  "level": 2
}, {
  "value": "Build",
  "id": "build",
  "level": 2
}, {
  "value": "Pravidlá (študenti)",
  "id": "pravidlá-študenti",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
        id: "contributing-guide",
        children: "Contributing Guide"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ea4135ce-9848-4fef-918a-a9fbccba35d3"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inprogress"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento projekt používa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Node.js v22 (LTS)"
      }), " a Docusaurus 3.\nAktualizácie balíkov vykonáva len maintainer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verzia-node",
      children: "Verzia Node"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Verzia je zafixovaná v súbore ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".nvmrc"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak používaš ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nvm"
        }), ", stačí ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nvm use"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak používaš Homebrew, maj v PATH ", (0,jsx_runtime.jsx)(_components.code, {
          children: "node@22"
        }), " binárky."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inštalácia-závislostí",
      children: "Inštalácia závislostí"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm ci\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "development",
      children: "Development"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "make dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "build",
      children: "Build"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm run build\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pravidlá-študenti",
      children: "Pravidlá (študenti)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Neupravuj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " ani ", (0,jsx_runtime.jsx)(_components.code, {
          children: "package-lock.json"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Nespúšťaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm i"
        }), " bez pokynu učiteľa."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Používaj Node v22 (", (0,jsx_runtime.jsx)(_components.code, {
          children: "nvm use"
        }), " / Homebrew PATH)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Používaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "npm ci"
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