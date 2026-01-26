"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[61869],{

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

/***/ 74398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_023_deliverables_04_project_outcomes_md_8fb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-023-deliverables-04-project-outcomes-md-8fb.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_023_deliverables_04_project_outcomes_md_8fb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/project-outcomes","title":"project-outcomes","description":"---","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables/04_project-outcomes.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/project-outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/project-outcomes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:47Z"},"sidebar":"tutorialSidebar","previous":{"title":"📝 Project Summary","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/project-summary"},"next":{"title":"pitch_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/pitch_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables/04_project-outcomes.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:47Z'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "fm_version: 1.0.1\nfm_version_comment: &#39;&#39;\nlocale: sk\nfm_build: &#39;2025-12-09T21:04:48Z&#39;",
  "id": "fm_version-101fm_version_comment-locale-skfm_build-2025-12-09t210448z",
  "level": 2
}, {
  "value": "🔖 Stav projektu",
  "id": "-stav-projektu",
  "level": 2
}, {
  "value": "Čo funguje",
  "id": "čo-funguje",
  "level": 3
}, {
  "value": "Čo nefunguje / čo sa nepodarilo",
  "id": "čo-nefunguje--čo-sa-nepodarilo",
  "level": 3
}, {
  "value": "🏆 Finálny produkt",
  "id": "-finálny-produkt",
  "level": 2
}, {
  "value": "Dodané artefakty",
  "id": "dodané-artefakty",
  "level": 3
}, {
  "value": "Ako to vyzerá (screenshoty / demo / repo link)",
  "id": "ako-to-vyzerá-screenshoty--demo--repo-link",
  "level": 3
}, {
  "value": "🧭 Porovnanie s Project Summary",
  "id": "-porovnanie-s-project-summary",
  "level": 2
}, {
  "value": "Čo sme plánovali",
  "id": "čo-sme-plánovali",
  "level": 3
}, {
  "value": "Čo sme naozaj dodali",
  "id": "čo-sme-naozaj-dodali",
  "level": 3
}, {
  "value": "Čo sme sa naučili - kľúčové ponaučenia",
  "id": "čo-sme-sa-naučili---kľúčové-ponaučenia",
  "level": 3
}, {
  "value": "Záver",
  "id": "záver",
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
    children: [(0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fm_version-101fm_version_comment-locale-skfm_build-2025-12-09t210448z",
      children: "fm_version: 1.0.1\nfm_version_comment: ''\nlocale: sk\nfm_build: '2025-12-09T21:04:48Z'"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-project-outcomes",
      children: "📦 Project Outcomes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-stav-projektu",
      children: "🔖 Stav projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt je ukončený vo fáze ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "digitálneho návrhu"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-funguje",
      children: "Čo funguje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Máme pripravené ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "návrhy troch drevených hlavolamov"
        }), " v CAD prostredí ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Onshape"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre hlavolamy sme vytvorili:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3D modely dielov"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "zostavy - assemblies"
            }), " pre kontrolu skladania"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "výkresy - Drawings"
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "exporty do STEP"
            }), " , pre ďalšie spracovanie a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PDF"
            }), " výkresy"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Máme spracovanú projektovú dokumentáciu a najmä ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "silný KNIFE/knowledge contribution"
        }), ", ktorý popisuje opakovateľný postup návrhu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-nefunguje--čo-sa-nepodarilo",
      children: "Čo nefunguje / čo sa nepodarilo"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nepodarilo sa nám dokončiť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reálne fyzické prototypy"
        }), " tak, aby vznikol plne funkčný hlavolam."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hlavný dôvod: návrh a realizácia boli v praxi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "náročnejšie, než sme očakávali"
        }), " – najmä kvôli:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "toleranciám a presnosti spojov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "náročnosti skladania a montážnej sekvencii"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "rozdielu medzi CAD „ideálnym stavom“ a fyzickou realitou"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-finálny-produkt",
      children: "🏆 Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dodané-artefakty",
      children: "Dodané artefakty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dodali sme návrhy a plány troch hlavolamov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Knot Burr puzzle"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cube puzzle"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Tangram puzzle"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ku každému hlavolamu sme odovzdali:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D modely - Onshape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "assembly - kontrola skladania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "drawings - výkresy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["exporty ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP"
        }), " - diely aj zostavy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["exporty ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF"
        }), " výkresy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-to-vyzerá-screenshoty--demo--repo-link",
      children: "Ako to vyzerá (screenshoty / demo / repo link)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Screenshoty a vizualizácie:"
        }), " nachádzajú sa v časti „Project images/*."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výkresy :"
        }), " dostupné v priečinku ", (0,jsx_runtime.jsx)(_components.code, {
          children: "drawings/"
        }), " linkované priamo v dokumentácii."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-porovnanie-s-project-summary",
      children: "🧭 Porovnanie s Project Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-sme-plánovali",
      children: "Čo sme plánovali"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navrhnúť portfólio hlavolamov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripraviť CAD modely, výkresy a exporty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pokúsiť sa o prototyp a overiť funkčnosť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripraviť dokumentáciu a knowledge contribution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-sme-naozaj-dodali",
      children: "Čo sme naozaj dodali"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Splnené:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "3 digitálne návrhy hlavolamov"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "drawings + STEP exporty + dokumentácia"
        }), " k návrhovému procesu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["silný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "knowledge contribution"
        }), ", opakovateľný workflow a poučenia z návrhu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nesplnené:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "funkčné fyzické prototypy"
        }), " – nepodarilo sa nám ich dotiahnuť do funkčného stavu v časovom a technickom rámci projektu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-sme-sa-naučili---kľúčové-ponaučenia",
      children: "Čo sme sa naučili - kľúčové ponaučenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["CAD návrh je iba časť úspechu – pri dreve sú kritické ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tolerancie, materiálová variabilita a montážna sekvencia"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„Jednoduchý hlavolam“ v CAD môže byť v praxi výrazne zložitejší."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mať dobrý systém je veľká výhoda aj vtedy, keď fyzická realizácia nevyjde."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "záver",
      children: "Záver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Aj keď sme nedodali fyzicky funkčný prototyp, projekt splnil jadro cieľa: vytvorili sme ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kvalitné digitálne návrhy"
      }), ", dokumentáciu a zdieľateľné výstupy. Zároveň sme získali praktické skúsenosti a vytvorili hodnotný ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knowledge contribution"
      }), ", ktorý umožňuje projekt ďalej rozširovať a v budúcnosti pokračovať prototypovaním s iteráciou tolerancií."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/",
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