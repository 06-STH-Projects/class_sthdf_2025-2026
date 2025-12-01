"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[28056],{

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

/***/ 39009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_7_ds_01_7_ds_platobny_portal_index_md_36b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-7-ds-01-7-ds-platobny-portal-index-md-36b.json
const site_docs_sk_7_ds_01_7_ds_platobny_portal_index_md_36b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/7Ds/01-7ds_PlatobnyPortal/01-7ds_PlatobnyPortal","title":"01-7ds_PlatobnyPortal – 01-7Ds – Platobný portál","description":"{{DESCRIPTION}}","source":"@site/docs/sk/7Ds/01-7ds_PlatobnyPortal/index.md","sourceDirName":"sk/7Ds/01-7ds_PlatobnyPortal","slug":"/sk/7Ds/01-7ds_PlatobnyPortal/","permalink":"/en/sk/7Ds/01-7ds_PlatobnyPortal/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T17:01:36.698021+00:00","fm_version_comment":"","id":"01-7ds_PlatobnyPortal","guid":"44d8ce67-2cc2-4385-b320-6192f6a541e1","dao":"7ds","title":"01-7ds_PlatobnyPortal – 01-7Ds – Platobný portál","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 18:01","modified":"2025-11-24 18:01","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"🗂 KNIFE Overview – List","permalink":"/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST"},"next":{"title":"00.Navigations","permalink":"/en/sk/7Ds/01-7ds_PlatobnyPortal/Navigations/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/7Ds/01-7ds_PlatobnyPortal/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T17:01:36.698021+00:00',
	fm_version_comment: '',
	id: '01-7ds_PlatobnyPortal',
	guid: '44d8ce67-2cc2-4385-b320-6192f6a541e1',
	dao: '7ds',
	title: '01-7ds_PlatobnyPortal – 01-7Ds – Platobný portál',
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
	created: '2025-11-24 18:01',
	modified: '2025-11-24 18:01',
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
const contentTitle = '7Ds – Navigačný rozcestník';

const assets = {

};



const toc = [{
  "value": "📂 Hlavné disciplíny",
  "id": "-hlavné-disciplíny",
  "level": 2
}, {
  "value": "🧩 Doplnkové sekcie",
  "id": "-doplnkové-sekcie",
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
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "7ds--navigačný-rozcestník",
        children: "7Ds – Navigačný rozcestník"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento priečinok predstavuje základnú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kostru frameworku 7Ds"
      }), " –", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "od riadenia a motivácie až po poučenia a zdroje."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Každá disciplína má vlastný priečinok s ", (0,jsx_runtime.jsx)(_components.code, {
        children: "index.md"
      }), " a podpriečinkami pre jednotlivé oblasti.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Použi túto mapu ako hlavný navigačný prehľad celého SDLC / 7Ds cyklu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hlavné-disciplíny",
      children: "📂 Hlavné disciplíny"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disciplína"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D1-Management/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D1 – Management"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ciele, plány, rozhodnutia a evidencia práce."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D2-Motivation/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D2 – Motivation"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stakeholderi, dôvody, vízia a hnacia sila projektu."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D3-Analysis/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D3 – Analysis"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zdroje, analýzy, vstupy a východiská riešenia."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D4-Design/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D4 – Design"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Návrh architektúry, procesov, komponentov a vizuálov."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D5-Implementation/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D5 – Implementation"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Realizácia návrhu, vývoj a integrácia riešenia."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D6-Verification-Testing/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D6 – Verification & Testing"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overenie kvality a testovanie riešenia."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7️⃣"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D7-LessonLearned/",
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D7 – Lessons Learned"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Získané poznatky, odporúčania a spätná väzba."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-doplnkové-sekcie",
      children: "🧩 Doplnkové sekcie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/Navigations/",
          children: "00.Navigations"
        }), " – centrálna mapa s odkazmi naprieč dokumentáciou."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D1-Management/Strategy/Docusaurus-Guide/Guide_Intro",
          children: "Docusaurus Guide"
        }), " – odporúčania pre písanie dokumentácie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/7Ds/01-7ds_PlatobnyPortal/D7-LessonLearned/HowTo/",
          children: "HowTo a Troubleshooting"
        }), " – praktické mini-návody."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/7Ds/",
        children: "🏠 Home"
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