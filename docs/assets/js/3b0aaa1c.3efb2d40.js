"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[29383],{

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

/***/ 86049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_04_analysis_index_md_3b0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-004-sdlc-04-analysis-index-md-3b0.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_04_analysis_index_md_3b0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/analysis/index","title":"04 analysis","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/04-analysis/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/04-analysis","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/analysis/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.010567+00:00","fm_version_comment":"","guid":"8f2b594e-f4b1-4f50-9de6-9fd9599aa1dd","dao":"class_sthdf_dashboard","title":"04 analysis","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka","Denis Ivan","Danylo Bashmakov"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"design","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/design"},"next":{"title":"backlog","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/analysis/backlog"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/04-analysis/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.010567+00:00',
	fm_version_comment: '',
	guid: '8f2b594e-f4b1-4f50-9de6-9fd9599aa1dd',
	dao: 'class_sthdf_dashboard',
	title: '04 analysis',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka',
		'Denis Ivan',
		'Danylo Bashmakov'
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
const contentTitle = '04 – Analysis';

const assets = {

};



const toc = [{
  "value": "🔍 Čo bolo potrebné analyzovať",
  "id": "-čo-bolo-potrebné-analyzovať",
  "level": 2
}, {
  "value": "🔍 Kľúčové zistenia",
  "id": "-kľúčové-zistenia",
  "level": 2
}, {
  "value": "📌 Rozhodovacie body",
  "id": "-rozhodovacie-body",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "04--analysis",
        children: "04 – Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-bolo-potrebné-analyzovať",
      children: "🔍 Čo bolo potrebné analyzovať"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aby sme vedeli navrhnúť užitočný USB-to-UART nástroj, museli sme pochopiť:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ako embedded vývojári reálne pracujú so sériovou komunikáciou"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "často nepoznajú baud rate cieľového zariadenia,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "debugging stojí čas, kým nájde správne nastavenia."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Aké limity majú bežné USB-TTL adaptéry"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "neposkytujú diagnostiku ani spätnú väzbu,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "nevedia indikovať, čo sa deje na linke,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "neumožňujú jednoduché prepínanie režimov."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Čo je potrebné vo výuke a lab prostredí"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vizualizácia, štatistiky a možnosť záznamu dát,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "jednoducho pochopiteľné UI."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kľúčové-zistenia",
      children: "🔍 Kľúčové zistenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Problém nie je len „prepojenie drôtov“, ale ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nedostatok inteligencie a diagnostiky"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Riešenie musí kombinovať:\n→ analýzu komunikácie,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ jednoduché UI,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ možnosť rozširovania o vizualizáciu/logovanie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ESP32-C6 sa ukázalo ako vhodný kandidát kvôli:\n→ natívnemu USB CDC,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ výkonu na spracovanie analýzy,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "→ rozšíriteľnosti o displej a SD modul."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rozhodovacie-body",
      children: "📌 Rozhodovacie body"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PC by malo vidieť zariadenie ako obyčajný USB-TTL adaptér,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "zatiaľ čo inteligencia beží v ESP32-C6."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Architektúra má byť modulárna — režimy sa pridávajú bez prepisovania jadra."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI má byť jednoduché (menu cez terminál), voliteľne vizualizácia na displeji."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/analysis/backlog",
          children: "Backlog a analýzy"
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