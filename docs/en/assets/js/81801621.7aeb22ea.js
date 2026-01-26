"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[81620],{

/***/ 26195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-concept-art-415f04bb634bddc68f50800158230a6a.jpg");

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

/***/ 40268:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-fiitcase3-15113ffc1d143feda32198e8194f7e2f.jpg");

/***/ }),

/***/ 73930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-packaging-878914f549d788a2b7a35206c1c864ab.png");

/***/ }),

/***/ 74522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-fiitcase1-114addd18d4cb189a4bf509ae010c4d3.png");

/***/ }),

/***/ 79281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/05-fiitcase2-d701ac23c3ccb6c01fa44a8f08cba943.png");

/***/ }),

/***/ 85760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_017_sdlc_05_design_prototype_md_818_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-017-sdlc-05-design-prototype-md-818.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_017_sdlc_05_design_prototype_md_818_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/design/prototype","title":"prototype","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/05-design/prototype.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/05-design","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/design/prototype","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/design/prototype","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.028598+00:00","fm_version_comment":"","guid":"041e4865-162d-4e35-9aa4-f4eadd9a41b1","dao":"class_sthdf_dashboard","title":"prototype","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"05 design","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/design/"},"next":{"title":"06 implementation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/implementation/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/05-design/prototype.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.028598+00:00',
	fm_version_comment: '',
	guid: '041e4865-162d-4e35-9aa4-f4eadd9a41b1',
	dao: 'class_sthdf_dashboard',
	title: 'prototype',
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
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "1) Vizuálny smer (STU merch)",
  "id": "1-vizuálny-smer-stu-merch",
  "level": 2
}, {
  "value": "2) Produktový dizajn",
  "id": "2-produktový-dizajn",
  "level": 2
}, {
  "value": "3) Sustainable balenie + info o vrátení",
  "id": "3-sustainable-balenie--info-o-vrátení",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "PRJ017 / 05-design / prototype.md"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Táto časť sumarizuje, ako sme navrhli vzhľad obalov ako STU merch a ako sme riešili praktické aspekty (fit, výrezy, ochrana). Vizuálne ukážky sú doplnené prototypovaním a výrobou."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-vizuálny-smer-stu-merch",
      children: "1) Vizuálny smer (STU merch)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cieľ bol jednoduchý: aby obal pôsobil ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "oficiálny merch STU"
      }), " – čistý, čitateľný, bez preplácaných prvkov a s konzistentným umiestnením loga."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "FiitCase – prehľad variantov (render)",
        src: (__webpack_require__(74522)/* ["default"] */ .A) + "",
        width: "512",
        height: "512"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo je na dizajne dôležité:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STU logo je malé, ale jasne čitateľné a vždy na rovnakom mieste (konzistentná identita)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Varianty farieb pokrývajú “basic” (čierna/biela) aj “hero” (gradient/živé farby) pre marketingový efekt."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dizajn je použiteľný na viac modelov telefónov (rôzne výrezy na kamery)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-produktový-dizajn",
      children: "2) Produktový dizajn"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Okrem vzhľadu musí obal:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sedieť na konkrétny model telefónu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mať presné výrezy (kamera/porty/tlačidlá),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mať bezpečné hrany (neškrabe telefón ani ruku),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mať minimálnu ochranu rohov (aspoň základná)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "FiitCase – Concept Art",
        src: (__webpack_require__(26195)/* ["default"] */ .A) + "",
        width: "3024",
        height: "4032"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "FiitCase1",
        src: (__webpack_require__(79281)/* ["default"] */ .A) + "",
        width: "512",
        height: "512"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "FiitCase2",
        src: (__webpack_require__(40268)/* ["default"] */ .A) + "",
        width: "512",
        height: "512"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-sustainable-balenie--info-o-vrátení",
      children: "3) Sustainable balenie + info o vrátení"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Balenie musí byť jednoduché a udržateľné a zároveň má komunikovať:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čo je to za produkt,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako sa oň starať,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ako vrátiť použitý obal (waste collection)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "FiitCase - Packaging",
        src: (__webpack_require__(73930)/* ["default"] */ .A) + "",
        width: "1544",
        height: "988"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/implementation/",
        children: "Next"
      })
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