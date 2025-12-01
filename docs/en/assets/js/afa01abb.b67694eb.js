"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[72203],{

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

/***/ 80643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_sdlc_sdlc_platobny_portal_index_md_afa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-sdlc-sdlc-platobny-portal-index-md-afa.json
const site_docs_sk_sdlc_sdlc_platobny_portal_index_md_afa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/sdlc/sdlc_PlatobnyPortal/sdlc_PlatobnyPortal","title":"sdlc_PlatobnyPortal – SDLC – Platobný portál (script)","description":"{{DESCRIPTION}}","source":"@site/docs/sk/sdlc/sdlc_PlatobnyPortal/index.md","sourceDirName":"sk/sdlc/sdlc_PlatobnyPortal","slug":"/sk/sdlc/sdlc_PlatobnyPortal/","permalink":"/en/sk/sdlc/sdlc_PlatobnyPortal/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T19:50:22.750816+00:00","fm_version_comment":"","id":"sdlc_PlatobnyPortal","guid":"addb2a77-fe8c-4e2a-b662-e76c0563e11b","dao":"sdlc","title":"sdlc_PlatobnyPortal – SDLC – Platobný portál (script)","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 20:50","modified":"2025-11-24 20:50","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"SDLC – Framework (SK)","permalink":"/en/sk/sdlc/"},"next":{"title":"01 business","permalink":"/en/sk/sdlc/sdlc_PlatobnyPortal/business/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/sdlc/sdlc_PlatobnyPortal/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T19:50:22.750816+00:00',
	fm_version_comment: '',
	id: 'sdlc_PlatobnyPortal',
	guid: 'addb2a77-fe8c-4e2a-b662-e76c0563e11b',
	dao: 'sdlc',
	title: 'sdlc_PlatobnyPortal – SDLC – Platobný portál (script)',
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
	created: '2025-11-24 20:50',
	modified: '2025-11-24 20:50',
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
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/business/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "01-Business"
        })
      }), " – Zachytenie potrieb, cieľov a očakávaní používateľov."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/top-level-architecture/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "02-Top Level Architecture"
        })
      }), " – koncepty, analýza uskutočniteľnosti, rizík a alternatív riešenia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/solution-architecture/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "03-Solution Architecture"
        })
      }), " – Návrh architektúry, dátového modelu a UI/UX."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["4️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/analysis/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "04-Analysis"
        })
      }), " – Analýsa kontextov, riešenia návrhu."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["5️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/design/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "05-Design"
        })
      }), " – Návrhy riešenia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["6️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/implementation/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "06-Implementation"
        })
      }), " – Implementácia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["7️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/testing-verification/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "07-Testing & Verification"
        })
      }), " Overenie kvality – test cases, QA checklist, výsledky– Údržba a drobné vylepšenia po nasadení."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["8️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/operation/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "08-Operation"
        })
      }), " – Nasadenie a prevádzka."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["9️⃣ ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/sdlc_PlatobnyPortal/Change-Management/",
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "09-Change Management"
        })
      }), " – Riadenie zmien – Change Log, Impact Analysis, CR."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/sdlc/",
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