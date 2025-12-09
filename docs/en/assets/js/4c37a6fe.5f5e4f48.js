"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[97436],{

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

/***/ 75384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_01_business_index_md_4c3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-004-sdlc-01-business-index-md-4c3.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_01_business_index_md_4c3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/business/index","title":"USBCAPS – business context","description":"Bezpečnostný USB-TTL most, ktorý izoluje PC, automatizuje UART a poskytuje bezdrôtový terminál","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/01-business/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/01-business","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/business/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/business/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/en/docs/tags/knife"},{"inline":true,"label":"sdlc","permalink":"/en/docs/tags/sdlc"},{"inline":true,"label":"case-study","permalink":"/en/docs/tags/case-study"},{"inline":true,"label":"IoT","permalink":"/en/docs/tags/io-t"},{"inline":true,"label":"security","permalink":"/en/docs/tags/security"},{"inline":true,"label":"embedded","permalink":"/en/docs/tags/embedded"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.008144+00:00","fm_version_comment":"Initial project metadata entry","guid":"33931486-ba78-44ee-ac0a-114498a5c3e2","dao":"class_sthdf_dashboard","title":"USBCAPS – business context","description":"Bezpečnostný USB-TTL most, ktorý izoluje PC, automatizuje UART a poskytuje bezdrôtový terminál","author":"Roman Kazicka","authors":["Roman Kazicka","STxxx Team USBCAPS"],"category":"IoT / Cybersecurity","type":"case-study","priority":"high","tags":["knife","sdlc","case-study","IoT","security","embedded"],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-12-02 19:40","status":"active","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"usb_caps_repo","origin_repo_url":"https://usbcaps.org","origin_commit":"","origin_branch":"main","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/"},"next":{"title":"notes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/01-business/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.008144+00:00',
	fm_version_comment: 'Initial project metadata entry',
	guid: '33931486-ba78-44ee-ac0a-114498a5c3e2',
	dao: 'class_sthdf_dashboard',
	title: 'USBCAPS – business context',
	description: 'Bezpečnostný USB-TTL most, ktorý izoluje PC, automatizuje UART a poskytuje bezdrôtový terminál',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka',
		'STxxx Team USBCAPS'
	],
	category: 'IoT / Cybersecurity',
	type: 'case-study',
	priority: 'high',
	tags: [
		'knife',
		'sdlc',
		'case-study',
		'IoT',
		'security',
		'embedded'
	],
	locale: 'sk',
	created: '2025-11-28 16:54',
	modified: '2025-12-02 19:40',
	status: 'active',
	privacy: 'public',
	rights_holder_content: 'Roman Kazicka',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazicka',
	origin_repo: 'usb_caps_repo',
	origin_repo_url: 'https://usbcaps.org',
	origin_commit: '',
	origin_branch: 'main',
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Business poznámky – SerialyTTY';

const assets = {

};



const toc = [{
  "value": "🎯 Hodnota projektu",
  "id": "-hodnota-projektu",
  "level": 2
}, {
  "value": "👥 Zákaznícke segmenty",
  "id": "-zákaznícke-segmenty",
  "level": 2
}, {
  "value": "💡 Trhová výhoda",
  "id": "-trhová-výhoda",
  "level": 2
}, {
  "value": "📌 Biznis use-cases",
  "id": "-biznis-use-cases",
  "level": 2
}, {
  "value": "🚀 Možný vývoj produktu",
  "id": "-možný-vývoj-produktu",
  "level": 2
}, {
  "value": "🧭 Učenie a dopad",
  "id": "-učenie-a-dopad",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "business-poznámky--serialytty",
        children: "Business poznámky – SerialyTTY"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota-projektu",
      children: "🎯 Hodnota projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SerialyTTY rieši reálny problém embedded vývoja:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bežné USB-TTL adaptéry sú „hlúpe“,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vývojári strácajú čas hľadaním baud rate a riešením RX/TX,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "laboratóriá potrebujú nástroj, ktorý učí porozumieť protokolom, nie len prepájať vodiče."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt prináša:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchlejší debug,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vyššiu produktivitu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lepšiu výučbu embedded architektúry."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-zákaznícke-segmenty",
      children: "👥 Zákaznícke segmenty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "univerzitné laby a IoT kurzy,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "embedded vývojári,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "servisné a diagnostické tímy."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-trhová-výhoda",
      children: "💡 Trhová výhoda"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SerialyTTY kombinuje diagnostiku, autodetekciu, menu UI a rozšíriteľnosť –\ntoto bežné USB-TTL adaptéry neponúkajú."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-biznis-use-cases",
      children: "📌 Biznis use-cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výukový hardware kit,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "diagnostický nástroj pre servis,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "open-source core + rozšírené moduly (TFT, SD logovanie)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-možný-vývoj-produktu",
      children: "🚀 Možný vývoj produktu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "verzia 2.0 s web UI,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "modul protokolovej analýzy,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "integrácia do výuky FIIT/STU ako lab nástroj."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-učenie-a-dopad",
      children: "🧭 Učenie a dopad"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt ukazuje, ako vyzerá:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "návrh HW/FW architektúry,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "praktické IoT riešenie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prototypovanie a iterovanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre FIIT / lab prostredie má hodnotu ako:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "výukový artefakt,"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "open-source príklad embedded dizajnu,"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "praktický komunitný nástroj."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/business/notes",
            children: "Business poznámky"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/",
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