"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[28527],{

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

/***/ 94451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_02_top_level_architecture_index_md_cf8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-004-sdlc-02-top-level-architecture-index-md-cf8.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_004_sdlc_02_top_level_architecture_index_md_cf8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/top-level-architecture/index","title":"02 top level architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/02-top-level-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/02-top-level-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/top-level-architecture/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/top-level-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.011099+00:00","fm_version_comment":"","guid":"bce3f66a-6bb9-4e0a-9810-5c8ad6f3aa65","dao":"class_sthdf_dashboard","title":"02 top level architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/business/notes"},"next":{"title":"03 solution architecture","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/solution-architecture/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ004/sdlc/02-top-level-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.011099+00:00',
	fm_version_comment: '',
	guid: 'bce3f66a-6bb9-4e0a-9810-5c8ad6f3aa65',
	dao: 'class_sthdf_dashboard',
	title: '02 top level architecture',
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
const contentTitle = '02 – Top Level Architecture';

const assets = {

};



const toc = [{
  "value": "🔭 High-level pohľad",
  "id": "-high-level-pohľad",
  "level": 2
}, {
  "value": "📌 Architektúrna myšlienka",
  "id": "-architektúrna-myšlienka",
  "level": 2
}, {
  "value": "🏗️ Architecture Overview",
  "id": "️-architecture-overview",
  "level": 2
}, {
  "value": "System Components",
  "id": "system-components",
  "level": 3
}, {
  "value": "Key Modules",
  "id": "key-modules",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
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
        id: "02--top-level-architecture",
        children: "02 – Top Level Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-high-level-pohľad",
      children: "🔭 High-level pohľad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SerialyTTY funguje ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inteligentný USB-to-UART most"
      }), ", ktorý prepája počítač s cieľovým embedded zariadením a pridáva automatizáciu a diagnostiku."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Host (PC / notebook)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "komunikuje cez natívny USB CDC port ESP32-C6,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "používa bežný sériový terminál."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "ESP32-C6 (jadro logiky)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prijíma UART dáta z PC aj z cieľového zariadenia,"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["poskytuje funkcie:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "automatická detekcia baud rate,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Bridge mód s počítaním RX/TX,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "terminálové menu,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "voliteľné vizualizačné a logovacie funkcie."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "User Interface Layer"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "sériový terminál (ANSI menu) pre kontrolu a prepínanie režimov,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "voliteľný TFT displej zobrazujúci stav, štatistiky a diagnostiku."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Storage / Logging (voliteľné)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "SD karta (FAT16/FAT32) s logovaním UART dát, časovými pečiatkami a udalosťami."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Cieľové zariadenie (embedded board)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "napr. Arduino, STM32, ESP32, senzory alebo priemyselné moduly,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prepojené cez UART TX/RX/GND."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-architektúrna-myšlienka",
      children: "📌 Architektúrna myšlienka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Počítač vidí SerialyTTY ako obyčajný USB-TTL most,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "ale ESP32-C6 medzi tým pridáva ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inteligenciu, UI a diagnostiku"
      }), ",", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "čo bežné adaptéry neponúkajú."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-architecture-overview",
      children: "🏗️ Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-components",
      children: "System Components"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────┐\n│                   USB-TTL Bridge (ESP32-C6)             │\n├─────────────────────────────────────────────────────────┤\n│                                                           │\n│  ┌──────────────────────────────────────────────────┐   │\n│  │           Hardware Detection Module              │   │\n│  │  • I2C Scanner (Display Detection)               │   │\n│  │  • GPIO Detection (SD Card)                      │   │\n│  └──────────────────────────────────────────────────┘   │\n│                           ▼                              │\n│  ┌──────────────────────────────────────────────────┐   │\n│  │          State Machine & Bridge Mode             │   │\n│  │  • BOOTING → WAITING → ANALYZING                │   │\n│  │  → FOUND_SPEED → RUNNING → BRIDGE_MODE          │   │\n│  └──────────────────────────────────────────────────┘   │\n│          ▲                   ▼                    ▲       │\n│  ┌───────┴──────────┐  ┌────────────┐  ┌────────┴───┐   │\n│  │  Baud Detector   │  │  UART1     │  │  BLE UART  │   │\n│  │  (GPIO Timing)   │  │  (Bridge)  │  │  (Nordic)  │   │\n│  └──────────────────┘  └────────────┘  └────────────┘   │\n│          ▼                                        ▼       │\n│  ┌─────────────────────────────────────────────────┐    │\n│  │    Display Manager (ILI9341 TFT - Optional)    │    │\n│  │  • Boot, Menu, Analyzing, Bridge screens       │    │\n│  └─────────────────────────────────────────────────┘    │\n│          ▼                                               │\n│  ┌─────────────────────────────────────────────────┐    │\n│  │    SD Logger (FAT Filesystem - Optional)        │    │\n│  │  • Timestamped logs with hex dumps              │    │\n│  └─────────────────────────────────────────────────┘    │\n│                                                           │\n│  ┌─────────────────────────────────────────────────┐    │\n│  │    Menu System & Communication Tester           │    │\n│  │  • Interactive terminal interface               │    │\n│  └─────────────────────────────────────────────────┘    │\n│                                                           │\n└─────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-modules",
      children: "Key Modules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Module"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Baud Detector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "baud_detector.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GPIO interrupt-based baud rate detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UART Bridge"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bridge_mode.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent serial passthrough"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Display Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "display_manager.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TFT control and screen management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SD Logger"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sd_logger.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SD card initialization and logging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Menu System"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "menu_system.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminal-based interactive menu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hardware Detector"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hardware_detector.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peripheral scanning and detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "BLE Manager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bluetooth_manager.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bluetooth Low Energy stub"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Comm Tester"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "comm_tester.cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Communication testing utilities"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
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