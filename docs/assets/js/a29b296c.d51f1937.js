"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[20681],{

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

/***/ 82985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_001_deliverables_02_knowledge_contribution_md_a29_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-001-deliverables-02-knowledge-contribution-md-a29.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_001_deliverables_02_knowledge_contribution_md_a29_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST001/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST001/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/deliverables/knowledge-contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"📚 Knowledge Contribution"},"sidebar":"tutorialSidebar","previous":{"title":"🙋 About Me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST001/deliverables/02_knowledge-contribution.md


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
  "value": "Typy Raspberry Pi a použitie",
  "id": "typy-raspberry-pi-a-použitie",
  "level": 3
}, {
  "value": "Displej",
  "id": "displej",
  "level": 3
}, {
  "value": "3D tlačený kryt",
  "id": "3d-tlačený-kryt",
  "level": 3
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Typický scenár – smart hodiny / info panel",
  "id": "typický-scenár--smart-hodiny--info-panel",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
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
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        }), " Smart hodiny / info-display s Raspberry Pi a 3,5\" LCD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stručný popis:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Praktický prehľad, ako použiť rôzne typy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi"
        }), " na malé “smart displeje” – napr. hodiny, počasie, športové výsledky – a čo pri tom riešiť po ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HW stránke"
        }), " (Pi modely, displej) a pri ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D tlači krytu"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Jednoduchý spôsob, ako z ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "malého počítača"
          }), " urobiť:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["stolové ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "smart hodiny"
            }), ","]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "informačný panel (čas, dátum, počasie, kalendár, šport),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "mini dashboard (KPI, status buildov, status IoT senzorov)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Cieľ: ukázať, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ktoré Raspberry Pi modely"
          }), " sa na to hodia, ako ich prepojiť s ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3,5\" LCD"
          }), " a ako k tomu navrhnúť ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D tlačený kryt"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typy-raspberry-pi-a-použitie",
      children: "Typy Raspberry Pi a použitie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Raspberry Pi Zero 2 W"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["veľmi malé (cca 65×30 mm), Wi-Fi, BT, 4-jadrový ARM, 512 MB RAM, nízka spotreba – ideálne na ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "malé hodiny/info panel"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Raspberry Pi 4 / 5"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["silnejší CPU, viac RAM, USB3, klasický HDMI – vhodné, keď treba pripojiť ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "väčší monitor"
            }), ", viac služieb alebo docker kontajnerov."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Raspberry Pi Pico"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "mikrokontrolér, veľmi nízka spotreba, ale bez HDMI – hodí sa skôr na jednoduché senzory / malé displeje, nie na plnohodnotný grafický LCD s OS."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "displej",
      children: "Displej"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["3,5\" TFT LCD pre Raspberry Pi (SPI, typicky 320×480 px), vo forme ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HAT"
        }), " priamo na 40-pin GPIO."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Komunikácia cez ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SPI"
        }), ", napájanie z 5 V / 3,3 V pinov, driver (napr. ILI9xxx) rieši kreslenie grafiky."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3d-tlačený-kryt",
      children: "3D tlačený kryt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dvojdielny kryt: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "spodok"
        }), " (držanie Pi + stĺpiky na skrutky) + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vrch"
        }), " (výrez na displej, rámik)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hrúbky stien typicky ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2–2,5 mm"
        }), ", ponechať aspoň ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "0,5 mm medzeru"
        }), " okolo komponentov kvôli toleranciám tlače."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Plast (PLA/PETG) dobre izoluje, ale treba malé ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vetracie otvory"
        }), " kvôli teplu Pi."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typický-scenár--smart-hodiny--info-panel",
      children: "Typický scenár – smart hodiny / info panel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Vybrať model Pi"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Zero 2 W → malý, nenápadný stolový displej."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pi 4 / 5 → väčší dashboard na TV/monitor."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pripojiť 3,5\" LCD"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "nasadiť HAT na 40-pin GPIO podľa dokumentácie výrobcu,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v OS zapnúť SPI a nainštalovať driver pre daný modul."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Navrhnúť a vytlačiť kryt"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["v CAD modele zohľadniť:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "rozmery Pi + LCD,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "výrezy pre napájanie, prípadne HDMI/USB,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "sklon displeja (napr. 20–30°)."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Softvér"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Raspberry Pi OS + Python (alebo iný jazyk),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "čítanie dát z API (počasie, kalendár, šport, notifikácie),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "kreslenie na displej cez framebuffer alebo knižnicu pre daný driver."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zvoliť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi Zero 2 W"
        }), " pre malý stolový displej."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pripojiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3,5\" SPI LCD HAT"
        }), " na 40-pin GPIO."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nainštalovať Raspberry Pi OS, zapnúť SPI, nainštalovať driver pre LCD."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V CAD navrhnúť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "dvojdielny kryt"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "steny ~2 mm,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vetracie otvory,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "výrez pre displej a porty."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytlačiť z PLA/PETG, zmontovať a spustiť vlastnú appku (hodiny + informácie)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Raspberry Pi rodina umožňuje od mikrokontrolérov (Pico) cez malé SBC (Zero 2 W) až po výkonné dosky (Pi 4/5) pokryť väčšinu ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "embedded / IoT / dashboard"
          }), " scenárov."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Pre smart hodiny / info panel je vhodná kombinácia:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Pi Zero 2 W"
            }), " – malý, úsporný, Wi-Fi na API,"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "3,5\" TFT LCD HAT"
            }), " – kompaktný displej bez káblov,"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "3D tlačený kryt"
            }), " – prispôsobený dizajn (stojan, uhol, otvory)."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Pri návrhu krytu sa oplatí postupovať ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "“PCB first”"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "namodelovať Pi a LCD podľa datasheetov (rozmery, porty),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "okolo toho vytvoriť obal so správnou hrúbkou stien,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pridať stĺpiky, diery na skrutky a vetracie otvory."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Najprv vytlačiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "testovací prototyp"
        }), " (lacný filament, hrubšia vrstva), až potom finálny kryt."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použiť stránku ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pinout.xyz"
        }), " pri práci s GPIO (displeje, senzory, HATy)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre častejšie skrutkovanie krytu sú praktické ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "mosadzné závitové vložky"
        }), " (heat-set inserts)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento príspevok dáva krátky návod, ako:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vybrať vhodný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "typ Raspberry Pi"
        }), " pre malý informačný displej,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pripojiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3,5\" LCD HAT"
        }), " cez GPIO,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["navrhnúť a vytlačiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3D kryt"
        }), ", ktorý to celé spraví použiteľným ako smart hodiny / info panel na stole."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Je to opakovateľný pattern pre rôzne projekty – od športových info panelov cez kancelárske dashboardy až po domáce IoT zobrazenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " IT / HW / IoT / 3D tlač"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " návod / praktický how-to"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raspberry-pi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raspberry-pi-zero-2-w"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raspberry-pi-4"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raspberry-pi-pico"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "smart-clock"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "info-display"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3d-tlac"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enclosure"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tft-lcd"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iot"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.raspberrypi.com/products/",
          children: "Raspberry Pi – oficiálne produkty"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/",
          children: "Raspberry Pi Zero 2 W"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://pinout.xyz",
          children: "GPIO pinout pre Raspberry Pi – pinout.xyz"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Príklady 3,5\" TFT LCD HAT modulov pre Raspberry Pi (Waveshare, LCDwiki, atď.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Články o návrhu 3D tlačených krytov pre elektroniku (Sculpteo, AllAboutCircuits, blogy 3D tlačiarní)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/",
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