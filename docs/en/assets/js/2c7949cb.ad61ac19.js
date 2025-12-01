"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[41044],{

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

/***/ 34681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_new_sthdf_md_2c7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-new-sthdf-md-2c7.json
const site_docs_sk_help_howto_new_sthdf_md_2c7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/new-sthdf","title":"HOWTO – Nová STHDF inštancia","description":"1. Predpoklady","source":"@site/docs/sk/help/howto/new-sthdf.md","sourceDirName":"sk/help/howto","slug":"/sk/help/howto/new-sthdf","permalink":"/en/sk/help/howto/new-sthdf","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"HOWTO – Nová STHDF inštancia"},"sidebar":"tutorialSidebar","previous":{"title":"⚙️ HOWTO – Vytvorenie novej SDLC inštancie","permalink":"/en/sk/help/howto/new-sdlc"},"next":{"title":"📄 HOWTO – Vytvorenie novej Thesis šablóny","permalink":"/en/sk/help/howto/new-thesis"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/new-sthdf.md


const frontMatter = {
	title: 'HOWTO – Nová STHDF inštancia'
};
const contentTitle = 'HOWTO – Ako vytvoriť novú STHDF inštanciu';

const assets = {

};



const toc = [{
  "value": "1. Predpoklady",
  "id": "1-predpoklady",
  "level": 2
}, {
  "value": "2. Najjednoduchší spôsob – Makefile",
  "id": "2-najjednoduchší-spôsob--makefile",
  "level": 2
}, {
  "value": "3. Python CLI (macOS / Linux)",
  "id": "3-python-cli-macos--linux",
  "level": 2
}, {
  "value": "4. Python CLI (Windows / MSYS2)",
  "id": "4-python-cli-windows--msys2",
  "level": 2
}, {
  "value": "5. Čo znamenajú parametre",
  "id": "5-čo-znamenajú-parametre",
  "level": 2
}, {
  "value": "<code>--type sthdf</code>",
  "id": "--type-sthdf",
  "level": 3
}, {
  "value": "<code>--config config/sthdf/sthdf_instance_config.yml</code>",
  "id": "--config-configsthdfsthdf_instance_configyml",
  "level": 3
}, {
  "value": "<code>--id STHDF_2025_ST_001</code>",
  "id": "--id-sthdf_2025_st_001",
  "level": 3
}, {
  "value": "<code>--name &quot;STHDF 2025 ST 001&quot;</code>",
  "id": "--name-sthdf-2025-st-001",
  "level": 3
}, {
  "value": "<code>--title &quot;STHDF 2025 ST 001&quot;</code>",
  "id": "--title-sthdf-2025-st-001",
  "level": 3
}, {
  "value": "<code>--exists error</code>",
  "id": "--exists-error",
  "level": 3
}, {
  "value": "6. Štruktúra po vygenerovaní",
  "id": "6-štruktúra-po-vygenerovaní",
  "level": 2
}, {
  "value": "7. Čo doplniť ručne",
  "id": "7-čo-doplniť-ručne",
  "level": 2
}, {
  "value": "8. Overenie",
  "id": "8-overenie",
  "level": 2
}, {
  "value": "9. Tip",
  "id": "9-tip",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "howto--ako-vytvoriť-novú-sthdf-inštanciu",
        children: "HOWTO – Ako vytvoriť novú STHDF inštanciu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-predpoklady",
      children: "1. Predpoklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pripravený class‑template repozitár,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Makefile so zakomponovaným targetom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sthdf-new"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["funkčný generátor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_item_instance.py"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["existujúca štruktúra ", (0,jsx_runtime.jsx)(_components.code, {
          children: "content/docs/sk/sthdf/"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-najjednoduchší-spôsob--makefile",
      children: "2. Najjednoduchší spôsob – Makefile"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používame v kurze ako hlavný spôsob."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "make sthdf-new ID=STHDF_2025_ST_001 NAME=\"STHDF 2025 ST 001\" LOCALE=sk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výsledkom je automatické vytvorenie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vetvy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "projects"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF_2025_ST_001 – projekty"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vetvy ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "students"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF_2025_ST_001 – študenti"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["základných súborov (", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), ") so správne vyplneným Front Matter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nová-sthdf-inštancia-z-cli",
      children: "Nová STHDF inštancia z CLI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Spúšťaj z rootu repozitára ", (0,jsx_runtime.jsx)(_components.code, {
          children: "knifes_overview-03"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-python-cli-macos--linux",
      children: "3. Python CLI (macOS / Linux)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python3 core/scripts/tools/new_item_instance.py \\\n  --type sthdf \\\n  --config config/sthdf/sthdf_instance_config.yml \\\n  --id STHDF_2025_ST_001 \\\n  --name \"STHDF 2025 ST 001\" \\\n  --title \"STHDF 2025 ST 001\" \\\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-python-cli-windows--msys2",
      children: "4. Python CLI (Windows / MSYS2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "python core/scripts/tools/new_item_instance.py ^\n  --type sthdf ^\n  --config config/sthdf/sthdf_instance_config.yml ^\n  --id STHDF_2025_ST_001 ^\n  --name \"STHDF 2025 ST 001\" ^\n  --title \"STHDF 2025 ST 001\" ^\n  --exists error\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "🔁 ID aj názov si doplň podľa konkrétneho študenta."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-čo-znamenajú-parametre",
      children: "5. Čo znamenajú parametre"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--type-sthdf",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--type sthdf"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Generujeme ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "celú STHDF inštanciu"
      }), ": root + projects + students."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--config-configsthdfsthdf_instance_configyml",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--config config/sthdf/sthdf_instance_config.yml"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nastavenia šablón, cieľových priečinkov a metadát."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--id-sthdf_2025_st_001",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--id STHDF_2025_ST_001"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Identifikátor študenta/inštancie.\nŠtandardný formát:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STHDF_<ROK>_ST_<PORADOVÉ_ČÍSLO>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklady:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF_2025_ST_001"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF_2025_ST_023"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--name-sthdf-2025-st-001",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--name \"STHDF 2025 ST 001\""
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Technické meno inštancie (použije sa pri tvorbe názvov priečinkov a ako fallback pre title).", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Odporúčame držať ho v rovnakom formáte ako ID alebo ľudsky čitateľný variant ID."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--title-sthdf-2025-st-001",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--title \"STHDF 2025 ST 001\""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ľudský názov pre UI. V kombinácii s ID sa používa ako základ pre titulky a nadpisy.\nPoužíva sa ako základ pre automatické vytvorenie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF 2025 ST 001 – projekty"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF 2025 ST 001 – študenti"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "--exists-error",
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--exists error"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Politika pri existujúcich súboroch."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "error"
        }), " – bezpečná voľba, nič neprepíše (ak niečo existuje, skript skončí chybou),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "replace"
        }), " – prepíše existujúce súbory,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "skip"
        }), " – preskočí generovanie, ak cieľ existuje,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "merge"
        }), " – rezerva pre budúce scenáre (aktuálne sa bežne nepoužíva v kurze)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-štruktúra-po-vygenerovaní",
      children: "6. Štruktúra po vygenerovaní"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "content/docs/sk/sthdf/2025/STHDF_2025_ST_001/\n├── projects/\n│   └── index.md   → title: \"STHDF 2025 ST 001 – projekty\"\n└── students/\n    └── index.md   → title: \"STHDF 2025 ST 001 – študenti\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-čo-doplniť-ručne",
      children: "7. Čo doplniť ručne"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"About me\" (A1),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Knowledge Contribution (A2 → môže ísť aj do KNIFE),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project Summary,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project Outcomes."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-overenie",
      children: "8. Overenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po vygenerovaní spusti:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "make dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skontroluj:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "či sa obe vetvy zobrazujú v sidebare,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["či majú správne titulky (", (0,jsx_runtime.jsx)(_components.code, {
          children: "… – projekty"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "… – študenti"
        }), "),"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "či build prebieha bez chýb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-tip",
      children: "9. Tip"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak študent robí viac projektov, pod ", (0,jsx_runtime.jsx)(_components.code, {
        children: "projects/"
      }), " môže vytvoriť ďalšie podpriečinky podľa potreby. Generátor mu garantuje jednotný úvodný základ."]
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