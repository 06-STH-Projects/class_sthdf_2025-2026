"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[96218],{

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

/***/ 98440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_08_operation_index_md_9f8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-08-operation-index-md-9f8.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_08_operation_index_md_9f8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/operation/index","title":"08 operation","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/08-operation/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/08-operation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/operation/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/operation/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.975903+00:00","fm_version_comment":"","guid":"a3bef719-a765-4fc3-9bd0-1ca7cfad89d7","dao":"class_sthdf_dashboard","title":"08 operation","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"test report","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/testing-verification/test-report"},"next":{"title":"operations","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/operation/operations"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/08-operation/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.975903+00:00',
	fm_version_comment: '',
	guid: 'a3bef719-a765-4fc3-9bd0-1ca7cfad89d7',
	dao: 'class_sthdf_dashboard',
	title: '08 operation',
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
const contentTitle = '08-Operation';

const assets = {

};



const toc = [{
  "value": "Bežná prevádzka",
  "id": "bežná-prevádzka",
  "level": 2
}, {
  "value": "Wi-Fi pripojenie",
  "id": "wi-fi-pripojenie",
  "level": 2
}, {
  "value": "Poznámka:",
  "id": "poznámka",
  "level": 4
}, {
  "value": "Signalizácia stavu (LED indikátor)",
  "id": "signalizácia-stavu-led-indikátor",
  "level": 2
}, {
  "value": "✅ Blikanie v intervale pripomínajúci „tlkot srdca“",
  "id": "-blikanie-v-intervale-pripomínajúci-tlkot-srdca",
  "level": 4
}, {
  "value": "⚠️ Blikanie v polsekundovom rovnomernom intervale",
  "id": "️-blikanie-v-polsekundovom-rovnomernom-intervale",
  "level": 4
}, {
  "value": "❌ Blikanie v sekundovom rovnomernom intervale",
  "id": "-blikanie-v-sekundovom-rovnomernom-intervale",
  "level": 4
}, {
  "value": "Odporúčania pre prevádzku",
  "id": "odporúčania-pre-prevádzku",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h4: "h4",
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
        id: "08-operation",
        children: "08-Operation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "bežná-prevádzka",
      children: "Bežná prevádzka"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie je navrhnuté tak, aby bolo plug & play:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Používateľ pripojí senzor cez micro-USB kábel."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Po zapnutí sa ESP32 automaticky inicializuje:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vykoná kontrolu senzorov,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "zobrazí stav na OLED displeji,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "začne merať teplotu, vlhkosť, TVOC, eCO₂ a AQI."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ak je dostupné Wi-Fi pripojenie, zariadenie začne periodicky odosielať dáta na server (napr. každých 5 minút)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "wi-fi-pripojenie",
      children: "Wi-Fi pripojenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre účely Proof of Concept (PoC) je pripojenie riešené jednoducho:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSID siete musí byť „Hotspot“."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heslo: „smvit12345“."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po pripojení zariadenie začne komunikovať so serverom cez HTTP protokol."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "poznámka",
      children: "Poznámka:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vo finálnom produkte by bol použitý sofistikovanejší prístup, napríklad:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konfigurácia cez webový setup alebo mobilnú aplikáciu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "podpora viacerých sietí."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "signalizácia-stavu-led-indikátor",
      children: "Signalizácia stavu (LED indikátor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie využíva modrú LED diódu na indikáciu stavu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-blikanie-v-intervale-pripomínajúci-tlkot-srdca",
      children: "✅ Blikanie v intervale pripomínajúci „tlkot srdca“"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetko beží v poriadku."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie meria a úspešne odosiela dáta na server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "️-blikanie-v-polsekundovom-rovnomernom-intervale",
      children: "⚠️ Blikanie v polsekundovom rovnomernom intervale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie sa nepripojilo na Wi-Fi."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meranie pokračuje, ale dáta sa neodosielajú na server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "-blikanie-v-sekundovom-rovnomernom-intervale",
      children: "❌ Blikanie v sekundovom rovnomernom intervale"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zariadenie je pripojené na Wi-Fi, ale nedokáže komunikovať so serverom."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Možné príčiny:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "výpadok servera,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "problém s lokálnou sieťou."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meranie pokračuje, dáta sa neodosielajú na server."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "odporúčania-pre-prevádzku",
      children: "Odporúčania pre prevádzku"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zariadenie umiestniť na miesto s dobrým prúdením vzduchu.\nVyhnúť sa priamemu slnečnému žiareniu (skreslenie teploty).\nPravidelne kontrolovať stav Wi-Fi a servera.\nV prípade dlhodobého výpadku siete použiť lokálne zobrazenie na OLED."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
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