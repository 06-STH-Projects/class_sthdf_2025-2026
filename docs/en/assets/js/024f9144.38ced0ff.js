"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[71829],{

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

/***/ 44483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_sdlc_index_md_024_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-sdlc-index-md-024.json
const site_docs_sk_sdlc_index_md_024_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/sdlc/SK_SDLC_HOME","title":"SDLC – Framework (SK)","description":"Slovenská domovská stránka pre SDLC vrstvu v KNIFE/CAA ekosystéme.","source":"@site/docs/sk/sdlc/index.md","sourceDirName":"sk/sdlc","slug":"/sk/sdlc/","permalink":"/en/sk/sdlc/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-18T00:00:00Z","fm_version_comment":"SDLC – hlavný prehľad (SK)","id":"SK_SDLC_HOME","guid":"00000000-0000-0000-0000-000000sd1c01","dao":"sdlc","title":"SDLC – Framework (SK)","description":"Slovenská domovská stránka pre SDLC vrstvu v KNIFE/CAA ekosystéme.","author":"Roman Kazička","authors":["Roman Kazička"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-18","modified":"","status":"draft","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"CAA","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","slug":"/sk/sdlc/","sidebar_position":20},"sidebar":"tutorialSidebar","previous":{"title":"7ds (SK)","permalink":"/en/sk/7Ds/"},"next":{"title":"sdlc_PlatobnyPortal – SDLC – Platobný portál (script)","permalink":"/en/sk/sdlc/sdlc_PlatobnyPortal/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/sdlc/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-18T00:00:00Z',
	fm_version_comment: 'SDLC – hlavný prehľad (SK)',
	id: 'SK_SDLC_HOME',
	guid: '00000000-0000-0000-0000-000000sd1c01',
	dao: 'sdlc',
	title: 'SDLC – Framework (SK)',
	description: 'Slovenská domovská stránka pre SDLC vrstvu v KNIFE/CAA ekosystéme.',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-18',
	modified: '',
	status: 'draft',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: 'CAA',
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	slug: '/sk/sdlc/',
	sidebar_position: 20
};
const contentTitle = 'SDLC – Framework (SK)';

const assets = {

};



const toc = [{
  "value": "🔗 Navigácia v rámci SDLC (SK)",
  "id": "-navigácia-v-rámci-sdlc-sk",
  "level": 2
}, {
  "value": "🧭 Späť na vyššie úrovne",
  "id": "-späť-na-vyššie-úrovne",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
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
        id: "sdlc--framework-sk",
        children: "SDLC – Framework (SK)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "00000000-0000-0000-0000-000000sd1c01"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "draft"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto je hlavná stránka SDLC vrstvy v rámci KNIFE / CAA ekosystému."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu postupne prepájame:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["predmet ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STHDF – System Thinking in IT & Digital Fabrication"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q12"
        }), " otázky a hodnotiaci rámec,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SDLC artefakty"
        }), " (od požiadaviek po zmenové riadenie),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE príspevky"
        }), ", ktoré rozvíjajú jednotlivé časti životného cyklu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-navigácia-v-rámci-sdlc-sk",
      children: "🔗 Navigácia v rámci SDLC (SK)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["🧱 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integračný SDLC prehľad"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["📚 ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "STHDF – konkrétne SDLC inštancie (projekty)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ generované v rámci ", (0,jsx_runtime.jsx)(_components.code, {
            children: "content/docs/sk/sthdf/.../sdlc/"
          }), " (študentské projekty)"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-späť-na-vyššie-úrovne",
      children: "🧭 Späť na vyššie úrovne"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔪 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/",
          children: "KNIFE – Prehľad (SK)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎯 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/q12/",
          children: "Q12 – Framework (SK)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏫 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/sthdf/",
          children: "STHDF – Framework (SK)"
        })]
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