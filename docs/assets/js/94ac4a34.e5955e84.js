"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[24424],{

/***/ 2269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/context_diagram_tla-2ec90aae1d53a98c4fb3094c5e7a475d.png");

/***/ }),

/***/ 9882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/data_diagram_tla-efc1cb0b62bfd8d436fb2ee3eed21b20.png");

/***/ }),

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

/***/ 31337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/interface_diagram_tla-b36fc5aedcf4daf4df32f8a3fa88a04c.png");

/***/ }),

/***/ 45648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pipeline_diagram_tla-0f4c7f927d00d1e37dc5e76ef4426c18.png");

/***/ }),

/***/ 71743:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_02_top_level_architecture_index_md_94a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-006-sdlc-02-top-level-architecture-index-md-94a.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_02_top_level_architecture_index_md_94a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/top-level-architecture/index","title":"02 top level architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/02-top-level-architecture/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/02-top-level-architecture","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/top-level-architecture/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/top-level-architecture/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.926867+00:00","fm_version_comment":"","guid":"7e6e1081-9eda-4055-bec7-391d88506020","dao":"class_sthdf_dashboard","title":"02 top level architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"notes","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/business/notes"},"next":{"title":"03 solution architecture","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/solution-architecture/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/02-top-level-architecture/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.926867+00:00',
	fm_version_comment: '',
	guid: '7e6e1081-9eda-4055-bec7-391d88506020',
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
const contentTitle = '02-Top Level Architecture';

const assets = {

};



const toc = [{
  "value": "1. Kontext systému (čo je „systém“ v našom projekte)",
  "id": "1-kontext-systému-čo-je-systém-v-našom-projekte",
  "level": 2
}, {
  "value": "1.1 Zainteresované strany",
  "id": "11-zainteresované-strany",
  "level": 3
}, {
  "value": "2. Architektúrne ciele a kvalitatívne atribúty",
  "id": "2-architektúrne-ciele-a-kvalitatívne-atribúty",
  "level": 2
}, {
  "value": "2.1 Ciele",
  "id": "21-ciele",
  "level": 3
}, {
  "value": "2.2 Kvalitatívne atribúty",
  "id": "22-kvalitatívne-atribúty",
  "level": 3
}, {
  "value": "3. Top-level komponenty - moduly systému",
  "id": "3-top-level-komponenty---moduly-systému",
  "level": 2
}, {
  "value": "3.1 Návrhový pipeline",
  "id": "31-návrhový-pipeline",
  "level": 3
}, {
  "value": "4. Dátová architektúra - artefakty",
  "id": "4-dátová-architektúra---artefakty",
  "level": 2
}, {
  "value": "5. Rozhrania medzi komponentmi",
  "id": "5-rozhrania-medzi-komponentmi",
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
    img: "img",
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
        id: "02-top-level-architecture",
        children: "02-Top Level Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "woodies--top-level-architecture",
      children: "Woodies – Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kontext-systému-čo-je-systém-v-našom-projekte",
      children: "1. Kontext systému (čo je „systém“ v našom projekte)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V projekte Woodies je produkt primárne ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "digitálny artefakt"
      }), ": CAD model + výkresy + dokumentácia.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Top-level architektúra preto opisuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tok práce, dáta a komponenty"
      }), " potrebné na návrh."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Systémový kontext",
        src: (__webpack_require__(2269)/* ["default"] */ .A) + "",
        width: "3064",
        height: "3600"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-zainteresované-strany",
      children: "1.1 Zainteresované strany"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Designer/CAD Engineer"
        }), ": tvorí modely, parametre, zostavy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reviewer"
        }), ": kontrola konzistencie, DFM pravidlá."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CNC dielňa"
        }), ": konzument výkresov, DXF, CAM nastavení."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zákazník"
        }), ": konzument montážneho manuálu, vizualizácií."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-architektúrne-ciele-a-kvalitatívne-atribúty",
      children: "2. Architektúrne ciele a kvalitatívne atribúty"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-ciele",
      children: "2.1 Ciele"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Opakovateľný proces tvorby puzzle dizajnov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parametrizácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Konzistentná dokumentácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-kvalitatívne-atribúty",
      children: "2.2 Kvalitatívne atribúty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maintainability:"
        }), " zmena parametrov nevyžaduje redizajn."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reusability:"
        }), " diely/komponenty použiteľné naprieč puzzle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verifiability:"
        }), " kontrola kolízií, montážnych krokov v CAD."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Manufacturability:"
        }), " dizajn rešpektuje vyrobné obmedzenia."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-top-level-komponenty---moduly-systému",
      children: "3. Top-level komponenty - moduly systému"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-návrhový-pipeline",
      children: "3.1 Návrhový pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Návrhový pipeline Woodies",
        src: (__webpack_require__(45648)/* ["default"] */ .A) + "",
        width: "8192",
        height: "1079"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Research & Requirements"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "definícia typu puzzle"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ciele obtiažnosti, počet dielov, požiadavky na toleranciu"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Parametrický CAD model"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "skice s parametrami"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "diely → zostavenie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "kontrola kolízií"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Príprava pre výrobu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "výkresy s toleranciami"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "exporty"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "poznámky k nástrojom"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dokumentácia produktu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BOM - zoznam dielov, materiál, rozmery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "montážny manuál"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "render/vizualizácie"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verifikácia"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "CAD interference check"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "kontrola pravidiel: min. hrúbky, rádiusy, vôľa"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-dátová-architektúra---artefakty",
      children: "4. Dátová architektúra - artefakty"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Dátová architektúra",
        src: (__webpack_require__(9882)/* ["default"] */ .A) + "",
        width: "2065",
        height: "6135"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAD zdroje:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".f3d"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".sldprt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".FCStd"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Neutral CAD:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".step"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".iges"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2D výkresy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".pdf"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dxf"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dokumenty:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".md"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vizualizácie:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".png"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".jpg"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-rozhrania-medzi-komponentmi",
      children: "5. Rozhrania medzi komponentmi"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Rozhrania komponentov",
        src: (__webpack_require__(31337)/* ["default"] */ .A) + "",
        width: "3358",
        height: "3305"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Requirements → CAD:"
        }), " parametre, počet dielov, cieľový rozmer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAD → DFM:"
        }), " výkresy, tolerancie, exporty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAD/DFM → Dokumentácia:"
        }), " BOM, explodované pohľady"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verifikácia → Change management:"
        }), " bug reports, revízie parametrov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/",
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