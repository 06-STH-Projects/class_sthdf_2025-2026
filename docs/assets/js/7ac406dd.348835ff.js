"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[98456],{

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

/***/ 88324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_037_deliverables_04_project_outcomes_md_7ac_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-037-deliverables-04-project-outcomes-md-7ac.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_037_deliverables_04_project_outcomes_md_7ac_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/project-outcomes","title":"📦 Project Outcomes","description":"🔖 Stav projektu","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables/04_project-outcomes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/project-outcomes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/project-outcomes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📦 Project Outcomes"},"sidebar":"tutorialSidebar","previous":{"title":"📝 Project Summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/project-summary"},"next":{"title":"🎤 Pitch Presentation","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/pitch_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables/04_project-outcomes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
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
        id: "-project-outcomes",
        children: "📦 Project Outcomes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-stav-projektu",
      children: "🔖 Stav projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FightWrap Winder"
      }), " sa nachádza vo fáze rozpracovaného prototypu s jasne definovaným ďalším smerovaním vývoja. Aktuálne sa tím sústreďuje na prechod z manuálnej verzie k plne funkčnému elektrickému riešeniu a na optimalizáciu mechanickej konštrukcie pre praktické používanie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Momentálne máme hotové:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Manuálnu verziu navíjaka"
        }), " bez elektronických súčiastok, overujúcu základný princíp navíjania."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Zosumarizované a odsúhlasené technológie a komponenty"
        }), " potrebné pre elektronickú verziu (motor, napájanie, ovládanie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Navrhnutý a otestovaný mechanizmus"
        }), ", ktorý umožňuje integráciu elektronických súčiastok do tela zariadenia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dohodnuté 2 spolupráce"
        }), " s klubmi thajského boxu v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trenčíne"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Trnave"
        }), ", ktoré budú slúžiť ako testovacie prevádzky po dokončení funkčného prototypu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt má jasnú spätnú väzbu z reálneho prostredia a potenciál ďalšieho rozvoja."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-výstupy-podľa-sdlc--v-modelu",
      children: "🧩 Výstupy podľa SDLC / V-modelu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Business požiadavky"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identifikovaný problém časovo náročného navíjania bandáží po tréningu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Definovaný cieľ: rýchle, jednoduché a spoľahlivé navíjanie bez manuálnej námahy"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Top Level Architecture"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Základná architektúra zariadenia: motor → rotačná os → mechanický držiak bandáže"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Oddelenie mechanickej a elektronickej časti"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Solution Architecture"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Použitie DC motora napájaného batériou alebo adaptérom"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Jednoduché ovládanie pomocou vypínača"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3D tlačené telo zariadenia"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Analysis"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Analýza rôznych typov bandáží (dĺžka, materiál, hmotnosť)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Overenie potrebného krútiaceho momentu motora"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ergonomické a bezpečnostné požiadavky"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Design"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Návrh mechanickej konštrukcie navíjaka"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dizajn tela optimalizovaný pre 3D tlač"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Príprava priestoru pre elektronické komponenty"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implementation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Výroba manuálneho prototypu"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3D tlač jednotlivých súčiastok"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Príprava komponentov pre elektrickú verziu"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verification & Testing"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Funkčné testovanie manuálneho navíjania"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Overenie kompatibility s rôznymi bandážami"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Plánované testovanie elektronickej verzie v kluboch"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Operation"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zariadenie určené pre každodenné použitie v športových kluboch"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Jednoduchá obsluha bez potreby technických znalostí"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo tím reálne dodal:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Funkčný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "manuálny prototyp FightWrap Winder"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overený mechanický princíp navíjania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Návrh riešenia pre elektronickú verziu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripravené testovacie prostredie v spolupracujúcich kluboch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ako to vyzerá:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fyzický prototyp vytvorený pomocou 3D tlače"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripravené STL modely a technická dokumentácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elektronická verzia je v štádiu prípravy implementácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-porovnanie-s-project-summary",
      children: "🧭 Porovnanie s Project Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Plánovali sme:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvoriť motorický navíjak na bandáže,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zjednodušiť rutinnú činnosť po tréningu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dodať funkčný prototyp."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reálne sme dodali:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "manuálnu verziu zariadenia overujúcu funkčný princíp,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "technický návrh a architektúru elektronickej verzie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mechanizmus a model pripravený na integráciu elektroniky,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nadviazané spolupráce s reálnymi používateľmi."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt naplnil svoje základné ciele a vytvoril pevný základ pre dokončenie plne funkčného elektrického prototypu a jeho reálne nasadenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/",
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