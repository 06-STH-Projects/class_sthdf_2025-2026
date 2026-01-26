"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[58129],{

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

/***/ 55398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_022_deliverables_02_knowledge_contribution_md_302_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-022-deliverables-02-knowledge-contribution-md-302.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_022_deliverables_02_knowledge_contribution_md_302_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST022/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST022/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/deliverables/knowledge-contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:47Z"},"sidebar":"tutorialSidebar","previous":{"title":"about-me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST022/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:47Z'
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
  "value": "Touch Pipeline",
  "id": "touch-pipeline",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Diagnostika problému",
  "id": "diagnostika-problému",
  "level": 3
}, {
  "value": "Kalibrácia (3 kroky)",
  "id": "kalibrácia-3-kroky",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "Ak touch nefunguje vôbec",
  "id": "ak-touch-nefunguje-vôbec",
  "level": 3
}, {
  "value": "Ak touch funguje, ale je nepresný",
  "id": "ak-touch-funguje-ale-je-nepresný",
  "level": 3
}, {
  "value": "Ak sú osi prehodené",
  "id": "ak-sú-osi-prehodené",
  "level": 3
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Ako funguje touchscreen kalibrácia",
  "id": "ako-funguje-touchscreen-kalibrácia",
  "level": 3
}, {
  "value": "Čo znamenajú kalibračné hodnoty",
  "id": "čo-znamenajú-kalibračné-hodnoty",
  "level": 3
}, {
  "value": "Rotation options",
  "id": "rotation-options",
  "level": 3
}, {
  "value": "Typické problémy",
  "id": "typické-problémy",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "Debugging",
  "id": "debugging",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 3
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 3
}, {
  "value": "Driver priority",
  "id": "driver-priority",
  "level": 3
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "Prínosy",
  "id": "prínosy",
  "level": 3
}, {
  "value": "Kedy použiť",
  "id": "kedy-použiť",
  "level": 3
}, {
  "value": "Typické use cases",
  "id": "typické-use-cases",
  "level": 3
}, {
  "value": "Time to fix",
  "id": "time-to-fix",
  "level": 3
}, {
  "value": "🗂️ Taxonómia KNIFE",
  "id": "️-taxonómia-knife",
  "level": 2
}, {
  "value": "🌍 Referencie",
  "id": "-referencie",
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
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
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
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Touchscreen Kalibrácia pre Raspberry Pi LCD displeje"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riešenie problémov s inverznou osou, offset-om a nepresným dotykom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Praktický návod pre Waveshare a podobné SPI LCD displeje"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), ": Touchscreen reaguje na zlých pozíciách (offset, inverzné osi)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symptómy"
        }), ": Klik vpravo reaguje vľavo, klik hore reaguje dole"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Riešenie"
        }), ": X11 konfigurácia s kalibračnými hodnotami"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výsledok"
        }), ": Presný 1:1 mapping touch → obrazovka"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "X11 Input Device"
        }), " spracováva touch eventy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evdev driver"
        }), " číta surové dáta z ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/dev/input/event0"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kalibračné hodnoty"
        }), " transformujú súradnice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverzia osí"
        }), " (SwapAxes, InvertX, InvertY) opraví orientáciu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Xorg config"
        }), " aplikuje nastavenia pri štarte X servera"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "touch-pipeline",
      children: "Touch Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hardware Touch → /dev/input/event0 → Evdev Driver → \nX11 Input System → Calibration Transform → Application\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diagnostika-problému",
      children: "Diagnostika problému"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Test či touchscreen funguje"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "   sudo apt-get install evtest\n   sudo evtest /dev/input/event0\n   # Touch displej → mali by sa objaviť eventy\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Identifikuj driver"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "   xinput list\n   # Hľadaj názov touchscreen zariadenia\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kalibrácia-3-kroky",
      children: "Kalibrácia (3 kroky)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Nainštaluj kalibračný nástroj"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt-get install xinput-calibrator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Spusti kalibráciu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "DISPLAY=:0 xinput_calibrator\n# Klikni na 4 krížiky na displeji\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Aplikuj hodnoty"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo nano /etc/X11/xorg.conf.d/99-calibration.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vlož output z calibrator:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "Section \"InputClass\"\n    Identifier \"calibration\"\n    MatchProduct \"ADS7846 Touchscreen\"\n    Option \"Calibration\" \"160 3723 3896 181\"\n    Option \"SwapAxes\" \"1\"\n    Option \"InvertX\" \"1\"\n    Option \"InvertY\" \"1\"\nEndSection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Reštartuj X server"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo systemctl restart lightdm\n# alebo reboot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ak-touch-nefunguje-vôbec",
      children: "Ak touch nefunguje vôbec"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Check hardware\nsudo evtest /dev/input/event0\n# Touch → vidíš eventy? Ak nie → HW problém\n\n# 2. Install evdev driver\nsudo apt-get install xserver-xorg-input-evdev\n\n# 3. Create config\nsudo nano /etc/X11/xorg.conf.d/10-evdev.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "Section \"InputClass\"\n    Identifier \"evdev touchscreen catchall\"\n    MatchIsTouchscreen \"on\"\n    MatchDevicePath \"/dev/input/event*\"\n    Driver \"evdev\"\nEndSection\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ak-touch-funguje-ale-je-nepresný",
      children: "Ak touch funguje, ale je nepresný"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. Calibrate\nsudo apt-get install xinput-calibrator\nDISPLAY=:0 xinput_calibrator\n\n# 2. Copy output\nsudo nano /etc/X11/xorg.conf.d/99-calibration.conf\n# [paste output]\n\n# 3. Reboot\nsudo reboot\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ak-sú-osi-prehodené",
      children: "Ak sú osi prehodené"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pridaj do ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/etc/X11/xorg.conf.d/99-calibration.conf"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "Option \"SwapAxes\" \"1\"        # Prehodí X ↔ Y\nOption \"InvertX\" \"1\"         # Zrkadlí X os\nOption \"InvertY\" \"1\"         # Zrkadlí Y os\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-funguje-touchscreen-kalibrácia",
      children: "Ako funguje touchscreen kalibrácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Raw coordinates"
      }), " (čo touchscreen vidí):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Min X: 160, Max X: 3723"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Min Y: 181, Max Y: 3896"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Screen coordinates"
      }), " (čo chceme):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "X: 0-480 pixels"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Y: 0-320 pixels"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transformation matrix:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "screen_x = (raw_x - min_x) / (max_x - min_x) * screen_width\nscreen_y = (raw_y - min_y) / (max_y - min_y) * screen_height\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-znamenajú-kalibračné-hodnoty",
      children: "Čo znamenajú kalibračné hodnoty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Option \"Calibration\" \"160 3723 3896 181\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[min_x] [max_x] [min_y] [max_y]\n 160     3723    3896    181\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "min_x, max_x"
        }), " - horizontálny rozsah raw hodnôt"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "min_y, max_y"
        }), " - vertikálny rozsah raw hodnôt"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak sú prehodené → displej je rotovaný"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rotation-options",
      children: "Rotation options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rotácia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SwapAxes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "InvertX"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "InvertY"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "90°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "180°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "270°"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typické-problémy",
      children: "Typické problémy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Touch offset (mimo cieľa)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Riešenie: Znovu kalibrovať s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "xinput_calibrator"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Invertované osi (hore/dole prehodené)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Riešenie: Pridať ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Option \"InvertY\" \"1\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Swapnuté osi (X a Y zamenené)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Riešenie: Pridať ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Option \"SwapAxes\" \"1\""
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Touch nereaguje vôbec"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Check: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ls /dev/input/event*"
        }), " - existuje?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Check: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evtest /dev/input/event0"
        }), " - eventy?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Fix: Install ", (0,jsx_runtime.jsx)(_components.code, {
          children: "xserver-xorg-input-evdev"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugging",
      children: "Debugging"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Check ak X11 vidí touchscreen"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "DISPLAY=:0 xinput list\n# Hľadaj \"Touchscreen\" v zozname\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Live test zmien (bez restartu)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "xinput set-prop \"Device Name\" \"Property\" value\n# Príklad:\nxinput set-prop \"ADS7846 Touchscreen\" \"Coordinate Transformation Matrix\" -1 0 1 0 -1 1 0 0 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Check aktuálne properties"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "xinput list-props \"ADS7846 Touchscreen\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Vždy najprv test s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evtest"
        }), " - overí HW"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Backup working config pred zmenami"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Použij ", (0,jsx_runtime.jsx)(_components.code, {
          children: "99-calibration.conf"
        }), " - načíta sa ako posledný"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Match by product name, nie event number"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Test kalibráciu na všetkých 4 rohoch displeja"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Konfigurácia v ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/boot/config.txt"
        }), " namiesto Xorg"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Použitie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "event0"
        }), " hardcoded - môže sa zmeniť"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Zabudnutie na reštart X servera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Konflikty medzi libinput a evdev driverom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "driver-priority",
      children: "Driver priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "evdev (preferovaný pre staršie displeje)\n    ↓\nlibinput (moderný, ale niekedy problematický pre SPI displeje)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak máš problémy s libinput:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt-get install xserver-xorg-input-evdev\n# Explicitne špecifikuj evdev v config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prínosy",
      children: "Prínosy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎯 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Presnosť"
        }), " - 1:1 mapping touch → click"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔧 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Customizácia"
        }), " - Full kontrola nad transformáciou"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🐛 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Debugging"
        }), " - evtest pre hardware test"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📝 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistence"
        }), " - Config prežije reboot"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔄 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Flexibility"
        }), " - Live zmeny bez reštartu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kedy-použiť",
      children: "Kedy použiť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Waveshare LCD displeje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Generic SPI touchscreens"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Rotované displeje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Multi-touch kalibrácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Custom embedded projekty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typické-use-cases",
      children: "Typické use cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📊 Kiosk displeje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🌦️ Weather stations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🎮 Retro gaming cabinets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🏭 Industrial HMI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "📺 Digital signage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "time-to-fix",
      children: "Time to fix"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bez tohto návodu"
        }), ": 2-4 hodiny trial & error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S týmto návodom"
        }), ": 15-30 minút"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROI"
        }), ": 80% úspora času"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " IT / Hardware / Embedded Systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " Technický návod, Troubleshooting Guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raspberry-pi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "touchscreen"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calibration"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x11"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "xorg"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "evdev"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "waveshare"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lcd"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "input-devices"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "embedded"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.x.org/wiki/Development/Documentation/InputDeviceDrivers/",
          children: "Xorg Evdev Documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.waveshare.com/wiki/4inch_RPi_LCD_(A)",
          children: "Waveshare LCD Wiki"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/tias/xinput_calibrator",
          children: "xinput_calibrator GitHub"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kernel.org/doc/html/latest/input/input.html",
          children: "Linux Input Subsystem"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.x.org/archive/X11R7.5/doc/man/man5/xorg.conf.5.html#sect7",
          children: "Xorg InputClass"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/",
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