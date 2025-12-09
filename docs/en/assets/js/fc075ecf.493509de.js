"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[80440],{

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

/***/ 73020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_03_solution_architecture_index_md_fc0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-004-sdlc-03-solution-architecture-index-md-fc0.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_03_solution_architecture_index_md_fc0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/index","title":"03 solution architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/03-solution-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/03-solution-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.009437+00:00","fm_version_comment":"","guid":"7adc57cb-f1a6-46ba-818c-ef9860e20d56","dao":"class_sthdf_dashboard","title":"03 solution architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka","Denis Ivan","Danylo Bashmakov"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"02 top level architecture","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/top-level-architecture/"},"next":{"title":"design","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/design"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/03-solution-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.009437+00:00',
	fm_version_comment: '',
	guid: '7adc57cb-f1a6-46ba-818c-ef9860e20d56',
	dao: 'class_sthdf_dashboard',
	title: '03 solution architecture',
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
const contentTitle = '03 – Solution Architecture';

const assets = {

};



const toc = [{
  "value": "🧠 Čo riešenie obsahuje",
  "id": "-čo-riešenie-obsahuje",
  "level": 2
}, {
  "value": "🔧 Hardware Layer",
  "id": "-hardware-layer",
  "level": 2
}, {
  "value": "🔁 Firmware Layer",
  "id": "-firmware-layer",
  "level": 2
}, {
  "value": "💬 User Interface Layer",
  "id": "-user-interface-layer",
  "level": 2
}, {
  "value": "📌 Architektonická myšlienka",
  "id": "-architektonická-myšlienka",
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
        id: "03--solution-architecture",
        children: "03 – Solution Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-riešenie-obsahuje",
      children: "🧠 Čo riešenie obsahuje"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SerialyTTY je rozdelený do troch hlavných architektonických vrstiev:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware Layer (fyzická konektivita a voliteľná vizualizácia)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Firmware Layer (analýza, automatizácia, bridge logika)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "User Interface Layer (ovládanie a diagnostika)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hardware-layer",
      children: "🔧 Hardware Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Komponenty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ESP32-C6 DevKit (USB + Wi-Fi/BLE + viac UARTov),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UART konektor (TX/RX/GND),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "voliteľne TFT displej (SPI) a SD karta (FAT32)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Úloha HW:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poskytuje fyzické rozhranie k cieľovému UART zariadeniu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "voliteľne vizualizuje stav a loguje dáta."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-firmware-layer",
      children: "🔁 Firmware Layer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hlavné moduly:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Baud Detector"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "meria bitovú periódu na RX a určuje správny baud."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Bridge Engine"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "prepája dáta medzi USB CDC a cieľovým UARTom,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "počíta prenesené dáta a vie ukončiť bridge späť do menu."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Menu UI"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "umožňuje prepínať režimy (", (0,jsx_runtime.jsx)(_components.code, {
            children: "Detect"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Bridge"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Info"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Settings"
          }), ") cez terminál."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Display Manager (voliteľný)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "zobrazuje rýchlosť, RX/TX štatistiky a stav."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "SD Logger (voliteľný)"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "zapisuje UART dáta do súborov s časovými pečiatkami."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Architektúra FW je modulárna, čo umožňuje pridávať režimy bez prepisovania jadra."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-user-interface-layer",
      children: "💬 User Interface Layer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Terminálové menu (ANSI)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "umožňuje ovládať režimy a spúšťať detekciu,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "funguje v každom bežnom sériovom monitore."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Voliteľná vizualizácia na TFT\tdisplayi"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "živý stav, baud, počet dátových rámcov."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-architektonická-myšlienka",
      children: "📌 Architektonická myšlienka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zatiaľ čo pre PC sa SerialyTTY správa ako obyčajný USB-TTL adaptér,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "vnútri ESP32-C6 vykonáva ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "analýzu, riadenie a diagnostiku"
      }), ",", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "čím prináša hodnotu nad rámec klasických USB-UART káblov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/design",
          children: "Solution design"
        })
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