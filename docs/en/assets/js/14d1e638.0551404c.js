"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[12881],{

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

/***/ 96417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_024_deliverables_04_project_outcomes_md_14d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-024-deliverables-04-project-outcomes-md-14d.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_024_deliverables_04_project_outcomes_md_14d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/deliverables/project-outcomes","title":"📦 Project Outcomes","description":"🔖 Stav projektu","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST024/deliverables/04_project-outcomes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST024/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/deliverables/project-outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/deliverables/project-outcomes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:47Z","title":"📦 Project Outcomes"},"sidebar":"tutorialSidebar","previous":{"title":"📝 Project Summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/deliverables/project-summary"},"next":{"title":"🎤 Pitch Presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/deliverables/pitch_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST024/deliverables/04_project-outcomes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:47Z',
	title: '📦 Project Outcomes'
};
const contentTitle = '📦 Project Outcomes';

const assets = {

};



const toc = [{
  "value": "🔖 Stav projektu",
  "id": "-stav-projektu",
  "level": 2
}, {
  "value": "🧩 Výstupy podľa SDLC / V-modelu",
  "id": "-výstupy-podľa-sdlc--v-modelu",
  "level": 2
}, {
  "value": "🏆 Finálny produkt",
  "id": "-finálny-produkt",
  "level": 2
}, {
  "value": "🧭 Porovnanie s Project Summary",
  "id": "-porovnanie-s-project-summary",
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
    hr: "hr",
    li: "li",
    ol: "ol",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-project-outcomes",
        children: "📦 Project Outcomes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-stav-projektu",
      children: "🔖 Stav projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Čo funguje:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Funkčný HW prototyp: ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Raspberry Pi Zero W 2 + 3.5\" LCD (320×480)"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Nainštalovaný a funkčný ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "driver displeja"
            }), " (LCD-show) – obraz sa korektne zobrazuje."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Beží ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Python aplikácia"
            }), " (repo ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rpiclock"
            }), "), ktorá vykresľuje UI na lokálny displej."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Základná štruktúra projektu je hotová (", (0,jsx_runtime.jsx)(_components.code, {
              children: "main.py"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "screens/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "assets/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "requirements.txt"
            }), ")."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Hotový ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3D tlačený pop-in obal"
            }), " – displej a doska sú mechanicky integrované (fit, porty, vetranie)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Čo ešte nie je úplne dotiahnuté / otvorené body:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Systematické ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "dlhodobé testovanie stability"
            }), " (dlhý beh, reštarty, edge cases)."]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Voliteľné: vylepšenia UX (viac obrazoviek, prechody, dotykové ovládanie, konfigurácia)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-výstupy-podľa-sdlc--v-modelu",
      children: "🧩 Výstupy podľa SDLC / V-modelu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Business požiadavky"
        }), " – Always-on stolový dashboard (domov/office), ktorý po zapnutí zobrazí vybrané informácie na lokálnom LCD; jednoduché nasadenie a možnosť rozšírenia o ďalšie obrazovky."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Top Level Architecture"
        }), " – HW: Raspberry Pi Zero W 2 + 3.5\" LCD + napájanie + microSD + 3D obal; SW: Raspberry Pi OS + LCD driver + Python app."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Solution Architecture"
        }), " – Python app (main + screens + assets) v update loope renderuje UI a posiela frame na displej; závislosti v ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), "; driver riešený cez LCD-show."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Analysis"
        }), " – Overenie kompatibility LCD (320×480), výber drivera (LCD-show), rozdelenie appky na obrazovky; návrh mechaniky (fit, porty, vetranie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Design"
        }), " – Návrh UI/UX pre nízke rozlíšenie (layout, ikony) + návrh 3D pop-in obalu (tolerancie, výrezy, mriežkovanie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Implementation"
        }), " – (", (0,jsx_runtime.jsx)(_components.code, {
          children: "main.py"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "screens/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assets/"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requirements.txt"
        }), ") + pripravený RPi OS a nainštalovaný LCD driver."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification & Testing"
        }), " – Základné otestovanie: displej zobrazuje, appka beží a renderuje; otvorené: dlhodobý beh, reboot scenáre, výkon, opakovateľnosť inštalácie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operation"
        }), " – Aktuálne spúšťanie na RPi (manuálne/po boote podľa setupu); ďalší krok: autostart/service (systemd) + konfigurácia (refresh rate, výber screens)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Čo tím reálne dodal:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "funkčný HW prototyp (RPi + LCD),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "bežiacu Python aplikáciu na zobrazovanie dashboardu,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3D tlačený pop-in obal pre fyzickú integráciu,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "diagramy architektúry (deployment/component/sequence) v dokumentácii projektu."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ako to vyzerá:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "fotky finálneho zariadenia sú v prezentácií projektu,"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["aplikácia repo link: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "https://github.com/drizzle021/rpiclock"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-porovnanie-s-project-summary",
      children: "🧭 Porovnanie s Project Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Plánovali sme:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prototyp HW + SW dashboard,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "mechanický obal,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "aspoň MVP pripravené na prezentáciu"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dodali sme:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prototyp HW + SW je hotový a prezentovateľný,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "obal je hotový a funkčný,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "prezentácia/prototyp dodané,"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/",
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