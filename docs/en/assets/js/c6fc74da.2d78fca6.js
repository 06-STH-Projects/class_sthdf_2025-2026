"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[3921],{

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

/***/ 85818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_028_deliverables_01_about_me_md_c6f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-028-deliverables-01-about-me-md-c6f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_028_deliverables_01_about_me_md_c6f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/deliverables/about-me","title":"🙋 About Me","description":"🔖 Základné informácie","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST028/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST028/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/deliverables/about-me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/deliverables/about-me","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"🙋 About Me"},"sidebar":"tutorialSidebar","previous":{"title":"Študentské deliverables","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/deliverables/"},"next":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST028/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '🙋 About Me'
};
const contentTitle = '🙋 About Me';

const assets = {

};



const toc = [{
  "value": "🔖 Základné informácie",
  "id": "-základné-informácie",
  "level": 2
}, {
  "value": "🎯 Profesijné záujmy",
  "id": "-profesijné-záujmy",
  "level": 2
}, {
  "value": "💡 Moje hobby / záujmy",
  "id": "-moje-hobby--záujmy",
  "level": 2
}, {
  "value": "🚀 Očakávania od predmetu",
  "id": "-očakávania-od-predmetu",
  "level": 2
}, {
  "value": "🚀 Čo viem ponúknuť",
  "id": "-čo-viem-ponúknuť",
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
    li: "li",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-about-me",
        children: "🙋 About Me"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-základné-informácie",
      children: "🔖 Základné informácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sebastián Marcin"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študentský GitHub profil (link) "
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:xmarcin@stuba.sk",
          children: "xmarcin@stuba.sk"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-profesijné-záujmy",
      children: "🎯 Profesijné záujmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zaujímam sa o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vývoj softvéru, backendové technológie, cloudové riešenia"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "umelú inteligenciu"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rád pracujem s technológiami ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Python, Flask, Docker, SQL, Vue.js"
        }), " a zaujímam sa o ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "efektívny návrh a nasadzovanie aplikácií"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chcem získať viac skúseností v oblasti ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vývoja a integrácie backendových systémov"
        }), ", DevOps a moderných AI riešení."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-moje-hobby--záujmy",
      children: "💡 Moje hobby / záujmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vo voľnom čase sa venujem ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "športu"
        }), ", najmä ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "boxu a silovému tréningu"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rád ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cestujem, spoznávam nové miesta a kultúry"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Baví ma ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hudba, technológie a experimentovanie s novými projektmi"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-očakávania-od-predmetu",
      children: "🚀 Očakávania od predmetu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Chcem si ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zlepšiť tímovú spoluprácu"
        }), ", naučiť sa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "efektívne riadiť projekt od návrhu po nasadenie"
        }), " a získať nové skúsenosti s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reálnymi problémami z praxe"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Očakávam, že práca v tíme mi pomôže ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zlepšiť komunikačné schopnosti"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rozvíjať technické aj mäkké zručnosti"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-viem-ponúknuť",
      children: "🚀 Čo viem ponúknuť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mám skúsenosti s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "backend vývojom"
        }), " (Python, Flask, FastAPI, Docker) a databázami (", (0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL, MariaDB, MongoDB"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Rozumiem princípom ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "version controlu (GIT)"
        }), " a vývoju v tíme."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Som ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zodpovedný, samostatný a spoľahlivý"
        }), ", no zároveň rád spolupracujem a pomáham ostatným."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Viem ponúknuť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "praktický prístup k riešeniu problémov"
        }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "chuť neustále sa zlepšovať"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/",
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