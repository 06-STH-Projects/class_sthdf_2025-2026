"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[4043],{

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

/***/ 59074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_01_about_me_md_cf4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-019-deliverables-01-about-me-md-cf4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_019_deliverables_01_about_me_md_cf4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/about-me","title":"🙋 About Me","description":"Ahoj, volám sa Samuel Kohút a momentálne končím inžinierske štúdium v odbore Inteligentné softvérové systémy (ISS) na Fakulte informatiky a informačných technológií STU v Bratislave. Už mám ukončený bakalársky titul v oblasti informatiky a som v záverečnom 5. ročníku štúdia.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/about-me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/about-me","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z","title":"🙋 About Me"},"sidebar":"tutorialSidebar","previous":{"title":"Študentské deliverables","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/"},"next":{"title":"Knowledge Contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST019/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z',
	title: '🙋 About Me'
};
const contentTitle = 'About Me';

const assets = {

};



const toc = [{
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "about-me",
        children: "About Me"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ahoj, volám sa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Samuel Kohút"
      }), " a momentálne končím inžinierske štúdium v odbore ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inteligentné softvérové systémy (ISS)"
      }), " na Fakulte informatiky a informačných technológií STU v Bratislave. Už mám ukončený bakalársky titul v oblasti informatiky a som v záverečnom 5. ročníku štúdia."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💻 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Skúsenosti a pozadie"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pracoval som na rôznych akademických aj osobných projektoch. Od dátových štruktúr, webových aplikácií a hier až po riešenia založené na umelej inteligencii, ako sú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "rozpoznávanie tváre"
        }), " či ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reinforcement learning v Atari hrách"
        }), " (moja diplomová práca)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Profesionálne mám viac než 2,5 roka skúseností ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Java backend developer"
        }), ", kde sa venujem vývoju webových aplikácií. Predtým som 2 roky pracoval v logistickom sektore v supermarkete Metro."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mojou technickou silnou stránkou je ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "programovanie"
        }), ", riešenie problémov a tvorba praktických softvérových systémov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🎹 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktuálny projekt"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na predmet Systems Thinking pracujem na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LED Piano Trainer"
      }), ". Tento projekt využíva Raspberry Pi Pico a LED diódy na gamifikáciu procesu učenia pre začiatočníkov na klavíri. Namiesto tradičných nôt sa rozsvietia LED diódy, ktoré ukazujú, ktoré klávesy treba stlačiť, čím sa učenie podobá skôr na hranie hry."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🚀 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Záujmy a ciele"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Baví ma ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "backend programovanie, webový vývoj a tvorba projektov, ktoré riešia reálne problémy"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hoci som pracoval veľa s umelou inteligenciou, nevidím v nej svoju dlhodobú budúcnosť — viac ma baví programovanie, tvorba systémov a skúmanie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "gamifikačných konceptov"
        }), ", ktoré robia učenie zábavnejším."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dlhodobo sa vidím ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skúsený vývojár"
        }), ", či už pracujúci na zmysluplných projektoch alebo vyvíjajúc niečo vlastné."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["🎯 ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zaujímavosti"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Narodil som sa v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Snine"
        }), ", malom meste na východe Slovenska."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vo voľnom čase sa venujem ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "lezeniu, hraniu hier, sledovaniu YouTube, anime a čítaniu mangy"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mám rád hudbu, aj keď som nikdy na nič nehral. O to viac ma teší projekt LED piano, keďže ho chcem neskôr zdieľať s mladšími členmi rodiny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/",
          children: "↩️ Späť"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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