"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[30299],{

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

/***/ 76910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_naming_convention_pre_domeny_md_b1d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000067-github-deployment-strategie-k-000067-naming-convention-pre-domeny-md-b1d.json
const site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_naming_convention_pre_domeny_md_b1d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000067-github-deployment-strategie/K000067-02","title":"Naming Convention pre Subdomény","description":"-","source":"@site/docs/sk/knifes/K000067-github-deployment-strategie/K000067_NamingConventionPreDomeny.md","sourceDirName":"sk/knifes/K000067-github-deployment-strategie","slug":"/sk/knifes/K000067-github-deployment-strategie/K000067-02","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/K000067-02","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000067-02","guid":"cc334b31-6f4f-4dbd-b5f2-c3c2e8c9bc83","dao":"knife","title":"Naming Convention pre Subdomény","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000067 – GitHub Deployment stratégie","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/"},"next":{"title":"GitHub Deployment Strategie - Pre Zvedavých","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/K000067-github-deployment-strategie"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000067-github-deployment-strategie/K000067_NamingConventionPreDomeny.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000067-02',
	guid: 'cc334b31-6f4f-4dbd-b5f2-c3c2e8c9bc83',
	dao: 'knife',
	title: 'Naming Convention pre Subdomény',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '-',
	type: '-',
	priority: 'no',
	tags: [
		'KNIFE'
	],
	locale: 'sk',
	created: '2025-09-24',
	modified: '-',
	status: 'inprogress',
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
	author_id: '-',
	author_did: '-',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Naming Convention pre Subdomény';

const assets = {

};



const toc = [{
  "value": "Povolené znaky",
  "id": "povolené-znaky",
  "level": 2
}, {
  "value": "Štruktúra",
  "id": "štruktúra",
  "level": 2
}, {
  "value": "Typy subdomén",
  "id": "typy-subdomén",
  "level": 2
}, {
  "value": "Rok/identifikátor",
  "id": "rokidentifikátor",
  "level": 2
}, {
  "value": "Príklady",
  "id": "príklady",
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
        id: "naming-convention-pre-subdomény",
        children: "Naming Convention pre Subdomény"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cc334b31-6f4f-4dbd-b5f2-c3c2e8c9bc83"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Táto dokumentácia popisuje konvenciu pomenovania subdomén používaných v rámci našich projektov a nasadení. Dodržiavanie jednotnej štruktúry a pravidiel zabezpečuje konzistenciu, lepšiu orientáciu a správu domén."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "povolené-znaky",
      children: "Povolené znaky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Malé písmená (a-z)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Číslice (0-9)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pomlčka (-)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nie sú povolené medzery, veľké písmená ani špeciálne znaky."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "štruktúra",
      children: "Štruktúra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Subdoména je tvorená z viacerých častí oddelených pomlčkami, podľa nasledujúceho vzoru:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<typ>-<rok/identifikator>-<popis>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kde:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<typ>"
        }), " označuje druh subdomény (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "test"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "prod"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<rok/identifikator>"
        }), " je rok alebo iný relevantný identifikátor nasadenia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<popis>"
        }), " krátky opis alebo názov projektu/služby"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typy-subdomén",
      children: "Typy subdomén"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev"
        }), " – vývojové prostredie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test"
        }), " – testovacie prostredie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prod"
        }), " – produkčné prostredie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "stage"
        }), " – staging prostredie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "demo"
        }), " – demo alebo ukážkové prostredie"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rokidentifikátor",
      children: "Rok/identifikátor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Používame štvormiestny formát roka, napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2024"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Alternatívne môže byť použitý iný identifikátor, napr. číslo sprintu, verzia alebo kód projektu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "príklady",
      children: "Príklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "dev-2024-novyprojekt"
        }), " – vývojová subdoména pre projekt \"novyprojekt\" v roku 2024"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "prod-2023-ecommerce"
        }), " – produkčná subdoména pre e-commerce projekt z roku 2023"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test-45-beta"
        }), " – testovacia subdoména pre beta verziu s identifikátorom 45"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "stage-2024-intranet"
        }), " – staging prostredie pre intranet v roku 2024"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "demo-2023-prezentacia"
        }), " – demo prostredie pre prezentáciu z roku 2023"]
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