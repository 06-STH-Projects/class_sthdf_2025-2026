"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[61354],{

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

/***/ 92852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_05_design_index_md_f18_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-05-design-index-md-f18.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_05_design_index_md_f18_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/design/index","title":"05 design","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/05-design/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/05-design","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/design/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/design/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.973210+00:00","fm_version_comment":"","guid":"500bce71-465f-474d-86ef-7976e6718a11","dao":"class_sthdf_dashboard","title":"05 design","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"backlog","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/analysis/backlog"},"next":{"title":"prototype","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/design/prototype"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/05-design/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.973210+00:00',
	fm_version_comment: '',
	guid: '500bce71-465f-474d-86ef-7976e6718a11',
	dao: 'class_sthdf_dashboard',
	title: '05 design',
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
const contentTitle = '05-Design';

const assets = {

};



const toc = [{
  "value": "Návrh púzdra",
  "id": "návrh-púzdra",
  "level": 2
}, {
  "value": "3D Model púzdra",
  "id": "3d-model-púzdra",
  "level": 2
}, {
  "value": "Návrh kabeláže",
  "id": "návrh-kabeláže",
  "level": 2
}, {
  "value": "Server API",
  "id": "server-api",
  "level": 2
}, {
  "value": "Databázová schéma",
  "id": "databázová-schéma",
  "level": 2
}, {
  "value": "users (väzba používateľ ↔ zariadenie)",
  "id": "users-väzba-používateľ--zariadenie",
  "level": 4
}, {
  "value": "sensor_realtime (posledné merania na používateľa/zariadenie)",
  "id": "sensor_realtime-posledné-merania-na-používateľazariadenie",
  "level": 4
}, {
  "value": "Dizajnové princípy",
  "id": "dizajnové-princípy",
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
        id: "05-design",
        children: "05-Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "návrh-púzdra",
      children: "Návrh púzdra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt počíta s kompaktným púzdrom, ktoré:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "chráni elektroniku pred mechanickým poškodením,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "umožňuje optimálny prietok vzduchu pre presné merania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poskytuje otvory pre napájanie a prípadné uchytenie senzora."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/skica.png",
        alt: "skica",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Počiatočný náčrt drevenej krabičky, ktorá zakrýva hardvér. Návrh obsahuje otvory pre prúdenie vzduchu a prístup k napájaniu."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3d-model-púzdra",
      children: "3D Model púzdra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pre lepšiu vizualizáciu bol vytvorený 3D model krabičky, ktorý:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "definuje presné rozmery pre ESP32 a senzory,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "obsahuje drážky na uchytenie komponentov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zohľadňuje ventilačné otvory pre minimalizáciu skreslenia meraní."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/3d_dizajn.png",
        alt: "3d dizajn",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  3D model drevenej krabičky s otvormi pre prúdenie vzduchu a presnými drážkami na uchytenie ESP32 a senzorov."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "návrh-kabeláže",
      children: "Návrh kabeláže"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prepojenie medzi ESP32 a senzormi je realizované cez I²C zbernicu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SDA (GPIO21) a SCL (GPIO22) sú spoločné pre oba senzory a OLED displej."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájanie senzorov je riešené cez VIN a GND."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kabeláž je navrhnutá tak, aby bola prehľadná, minimalizovala rušenie a umožnila jednoduchú údržbu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/wiring.png",
        alt: "kabeláž",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Schéma zapojenia medzi ESP32, senzormi AHTX0 a ENS160 a voliteľným OLED displejom."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "server-api",
      children: "Server API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Server poskytuje REST API pre komunikáciu s ESP32 a webovým rozhraním:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GET /health"
        }), " – stav servera (uptime, verzia)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "POST /send-data"
        }), " – prijme najnovšie merania zo senzora (JSON payload)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GET /read-data"
        }), " – vráti dáta pre používateľa a dátum/interval, query parametre: user_id, date (napr. 2026-01-13)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "databázová-schéma",
      children: "Databázová schéma"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Databáza SQLite obsahuje dve hlavné tabuľky:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "users-väzba-používateľ--zariadenie",
      children: "users (väzba používateľ ↔ zariadenie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stĺpec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primárny kľúč"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "serial_number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TEXT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jedinečný identifikátor zariadenia"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "sensor_realtime-posledné-merania-na-používateľazariadenie",
      children: "sensor_realtime (posledné merania na používateľa/zariadenie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stĺpec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Popis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primárny kľúč"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "user_id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FK na users.id"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "temperature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teplota v °C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "humidity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relatívna vlhkosť v %"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "aqi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index kvality vzduchu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "co2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eCO₂ v ppm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tvoc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TVOC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "timestamp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INTEGER"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix čas merania"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dizajnové-princípy",
      children: "Dizajnové princípy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modularita: jednoduchá výmena senzorov alebo ESP32."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ergonómia: kompaktné rozmery, estetický vzhľad vhodný do interiéru."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Presnosť: ventilačné otvory pre správny prietok vzduchu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bezpečnosť: izolácia elektroniky od vlhkosti a prachu."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
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