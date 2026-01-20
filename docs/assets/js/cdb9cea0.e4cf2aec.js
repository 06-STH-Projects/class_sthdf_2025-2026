"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[56338],{

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

/***/ 82252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_about_md_cdb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-about-md-cdb.json
const site_docs_sk_about_md_cdb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/about","title":"O projekte KNIFE Overview","description":"KNIFE je projekt na podpporu znalostných pracovníkov.","source":"@site/docs/sk/about.md","sourceDirName":"sk","slug":"/sk/about","permalink":"/sk/about","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"O projekte KNIFE Overview"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/about.md


const frontMatter = {
	title: 'O projekte KNIFE Overview'
};
const contentTitle = 'O projekte KNIFE Overview - Knowledge In Friendly Examples';

const assets = {

};



const toc = [{
  "value": "Systémové myslenie v IT a digitálna fabrikácia",
  "id": "systémové-myslenie-v-it-a-digitálna-fabrikácia",
  "level": 2
}, {
  "value": "Čo je jeho úlohou",
  "id": "čo-je-jeho-úlohou",
  "level": 2
}, {
  "value": "Pre koho je určený",
  "id": "pre-koho-je-určený",
  "level": 2
}, {
  "value": "Ako pokračovať",
  "id": "ako-pokračovať",
  "level": 2
}, {
  "value": "Class 2025-2026 - Navigation",
  "id": "class-2025-2026---navigation",
  "level": 2
}, {
  "value": "Students",
  "id": "students",
  "level": 3
}, {
  "value": "Projects",
  "id": "projects",
  "level": 3
}, {
  "value": "Best students Project in the year 2025-2026.",
  "id": "best-students-project-in-the-year-2025-2026",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "o-projekte-knife-overview---knowledge-in-friendly-examples",
        children: "O projekte KNIFE Overview - Knowledge In Friendly Examples"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "KNIFE je projekt na podpporu znalostných pracovníkov.\n\"Dokumentácia sa NEVYTVÁRA až j epráca hotová. Je to ilúzia, sebaklam.\nKnowledge, poznanie vzniká ako produkt našich každodenných aktivít.\nBolo by prínosom, keby sme dokázali v každom okamihu našich aktivít zachytávať vzbinkajúce poznanie.\nDokumentácia - ako fotografia v čase do našeho poznanie by sa generovalo z jedného zdroja pravdy (SSOT-Single Source Of truth)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Detaily o tomto projekte o zmene paradigmy spravovania znalostí a tvorby dokumentácie v rámci SDLC sú tu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://knifes.systemthinking.sk/sk/help",
        children: "KNIFE-Knowledge in Friendly Examples- projekt na správu a zdieľanie znalostí"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento repozitár (pre triedu STHDF) slúži ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "centrálny prehľad"
      }), " (overview)\nna prácu študentov počas školského roka 2025-2026 v rámci predmetu"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "systémové-myslenie-v-it-a-digitálna-fabrikácia",
      children: "Systémové myslenie v IT a digitálna fabrikácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "čo-je-jeho-úlohou",
      children: "Čo je jeho úlohou"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["byť ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stabilným rozcestníkom"
        }), " k jednotlivým KNIFE témam,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["obsahovať ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "návody a postupy"
        }), ", ktoré platia dlhodobo (nie len pre jednu triedu),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["slúžiť ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "platforma"
        }), " pre:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["predmet ", (0,jsx_runtime.jsx)(_components.em, {
              children: "System Thinking in IT & Digital Fabrication (STHDF)"
            }), ","]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ďalšie kurzy a projekty, ktoré využívajú KNIFE rámec."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pre-koho-je-určený",
      children: "Pre koho je určený"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["študentom, ktorí chcú:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "pochopiť štruktúru KNIFE,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vedieť, ako si vytvoriť vlastný príspevok,"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "učiteľov a mentorov,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["kohokoľvek, kto chce ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "transparentne zaznamenávať svoje poznanie"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ako-pokračovať",
      children: "Ako pokračovať"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "class-2025-2026---navigation",
          children: "Class 2025-2026 - Navigation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "students",
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST_INDEX",
            children: "Students"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "projects",
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ_INDEX",
            children: "Projects"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.h3, {
          id: "best-students-project-in-the-year-2025-2026",
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/class-sthdf/showcase/",
            children: "Best students Project in the year 2025-2026"
          }), "."]
        }), "\n"]
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