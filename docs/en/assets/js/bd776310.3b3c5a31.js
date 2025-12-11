"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[62849],{

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

/***/ 65551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_004_deliverables_02_knowledge_contribution_md_bd7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-004-deliverables-02-knowledge-contribution-md-bd7.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_004_deliverables_02_knowledge_contribution_md_bd7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/knowledge-contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📚 Knowledge Contribution"},"sidebar":"tutorialSidebar","previous":{"title":"🙋 About Me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST004/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '📚 Knowledge Contribution'
};
const contentTitle = '📚 Knowledge Contribution';

const assets = {

};



const toc = [{
  "value": "🔖 Názov a stručný popis",
  "id": "-názov-a-stručný-popis",
  "level": 2
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "⚡ Rýchly návod",
  "id": "-rýchly-návod",
  "level": 2
}, {
  "value": "💡 Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "🗂️ Taxonómia",
  "id": "️-taxonómia",
  "level": 2
}, {
  "value": "🌍 Referencia",
  "id": "-referencia",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Téma:"
        }), " SerialyTTY – inteligentný USB-to-TTL most na báze ESP32-C6."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prečo je dôležitá:"
        }), " bežné USB-TTL adaptéry neposkytujú auto-detekciu baud rate, diagnostiku ani logovanie. SerialyTTY prináša inteligentnú analýzu UART, menu systém, voliteľný TFT displej a SD logovanie, čo výrazne zlepšuje debugovanie a výuku embedded systémov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automaticky zistí baud rate neznámeho zariadenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "funguje ako transparentný USB-TTL bridge so štatistikami,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poskytuje vizuálnu spätnú väzbu a voliteľné logovanie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "slúži ako samostatný diagnostický a výukový nástroj."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ESP32-C6"
        }), " s natívnym USB a viac UARTmi,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "modul Baud Detection meria periody signálu na RX,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bridge Mode"
        }), " smeruje dáta medzi USB ↔ UART,"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "terminálové menu (Detect, Bridge, Info, Settings),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "voliteľný TFT displej a SD logovanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ladenie sériovej komunikácie neznámych zariadení,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výuka embedded vývoja (stavové automaty, ISR→task),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "diagnostika v teréne bez potreby externého softvéru."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod",
      children: "⚡ Rýchly návod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Flashni firmware cez PlatformIO."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor seriový monitor na 115200 baud."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Stlač ", (0,jsx_runtime.jsx)(_components.code, {
          children: "D"
        }), " pre auto-detect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prepni na Bridge (", (0,jsx_runtime.jsx)(_components.code, {
          children: "B"
        }), ") a používaj ako USB-TTL nástroj."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "💡 Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SerialyTTY spája USB-TTL bridge, inteligentnú detekciu, UI menu a voliteľnú vizualizáciu/logovanie. Je otvorený, rozšíriteľný a vhodný ako lab nástroj aj výukový projekt."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia",
      children: "🗂️ Taxonómia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " Embedded Systems / IoT Tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " návod + prípadová štúdia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SerialyTTY"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UART"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baud detection"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ESP32-C6"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bridge"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencia",
      children: "🌍 Referencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://thenisvan.github.io/SerialyTTY/",
            children: "https://thenisvan.github.io/SerialyTTY/"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "USBCAPS – oficiálna stránka projektu:"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "https://usbcaps.org",
            children: "https://usbcaps.org"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Projektový návrh USB-TTL Prevodník s Automatickou Detekciou a Bezdrôtovým Terminálom (interný dokument, SMVIT / FIIT STU)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "US Department of Justice – prípad USB Killer incidentu (2019), citované na stránke USBCAPS."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["🌐 Web: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://usbcaps.org",
            children: "usbcaps.org"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["💙 Patreon: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://patreon.com/USBCAPS",
            children: "patreonl"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["📷 LinkedIn: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.linkedin.com/company/usbcaps",
            children: "linkedin"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["📷 YouTube: ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://www.youtube.com/@usbcaps",
            children: "YouTube"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/",
          children: "↩️ Späť"
        })
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