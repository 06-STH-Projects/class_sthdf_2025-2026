"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[59805],{

/***/ 8061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zariadenieTycka-c11ba97d40c36a1ae40294e2c1fd44a3.jpg");

/***/ }),

/***/ 10089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/spotreba-15756f8b09a14147cded7771bafba9fc.png");

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

/***/ 31809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GUIparkinglot-83fdbd831c15fb77237140573d7d7aca.png");

/***/ }),

/***/ 40031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/LoraBrana-5a25010326fd85a4e91b279bd424fb9c.png");

/***/ }),

/***/ 52955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_011_presentation_slides_md_f50_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-011-presentation-slides-md-f50.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_011_presentation_slides_md_f50_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.089477+00:00","fm_version_comment":"","guid":"85026093-04f4-4833-921f-447e195c6ea8","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ011","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.089477+00:00',
	fm_version_comment: '',
	guid: '85026093-04f4-4833-921f-447e195c6ea8',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
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
const contentTitle = 'PRJ011 — Presentation';

const assets = {

};



const toc = [{
  "value": "Headline",
  "id": "headline",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Obsah",
  "id": "obsah",
  "level": 2
}, {
  "value": "01-Business",
  "id": "01-business",
  "level": 2
}, {
  "value": "02-Top Level Architecture",
  "id": "02-top-level-architecture",
  "level": 2
}, {
  "value": "03-Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "04-Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "05-Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "06-Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "07-Testing &amp; Verification",
  "id": "07-testing--verification",
  "level": 2
}, {
  "value": "08-Operation",
  "id": "08-operation",
  "level": 2
}, {
  "value": "09-Change Management",
  "id": "09-change-management",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
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
        id: "prj011--presentation",
        children: "PRJ011 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- Headline ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headline",
      children: "Headline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-011-ST_011-ST_011-ParkSense"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- Headline ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(8061)/* ["default"] */ .A) + "",
        width: "1580",
        height: "2922"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-011-ST_011-ST_011-ParkSense"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V projekte sa zamieravame na zvýšenie efektivity parkovacích priestorov v snahe znížiť emisie spôsobené automobilmi, ktorých vodiči hľadajú vhodné parkovacie miesto. Navrhli a implementovali sme smart parkovací systém, ktorý reflektuje stav parkoviska v reálnom čase pomocou webovej aplikácie a API."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- obsah ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/business/",
          children: "01-Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/top-level-architecture/",
          children: "02-Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/solution-architecture/",
          children: "03-Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/analysis/",
          children: "04-Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/design/",
          children: "05-Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/implementation/",
          children: "06-Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/testing-verification/",
          children: "07-Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/operation/",
          children: "08-Operation"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/sdlc/Change-Management/",
          children: "09-Change Management"
        }), "\n--- obsah ---"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01-Business"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvoriť cost-effective riešenie pre optimalizáciu parkovacieho procesu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sústrediť sa na spoľahlivosť a jednoduchosť prevádzky riešenia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "priblížiť riešenie bližšie ku koncovým použiívateľom pomocou webového rozhrania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "využiť bezdrôtové technológie s nízkoou spotrebou energie a ďalekým komunikačným dosahom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02-Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "koncové zariadenia komunikujú s LoRa bránou, ktorá cez IP sieť preposiela komunikáciu sieťovému serveru,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sieťový server komunikáciu overuje a zasiela aplikačnému serveru na spracovanie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aplikačný server obsluhuje webovú aplikáciu, ktorá je hlavným bodom interakcie s používateľom."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(86884)/* ["default"] */ .A) + "",
        width: "1410",
        height: "1890"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03-Solution Architecture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["koncové zariadenie pozostávajúce z:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TTGO LoRa T3,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vodeodolného ultrazvukového sensora,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "batérie (nevyžaduje elektrickú sieť),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vlastného kódu, ktorý optimalizuje životnosť batérie."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(87138)/* ["default"] */ .A) + "",
        width: "1844",
        height: "1508"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["LoRa brána pozostávajúca z:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RaspBerry Pi 4B,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "IMST iC880A-SPI koncentrátoru,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "napájaná zo siete."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(40031)/* ["default"] */ .A) + "",
        width: "480",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04-Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "porovnanie rôznych bezdôtových technológií ako LoRaWAN, Bluetooth Low Energy, ZigBee a iné,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zvolenie komponentov a softvérového stacku riešenia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05-Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["intuitívne prostredie webovej aplikácie,\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Inspiration",
            src: (__webpack_require__(31809)/* ["default"] */ .A) + "",
            width: "1070",
            height: "670"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["login stránka,\n", (0,jsx_runtime.jsx)(_components.img, {
            alt: "Inspiration",
            src: (__webpack_require__(58063)/* ["default"] */ .A) + "",
            width: "2553",
            height: "1220"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06-Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nastavenie sieťového serveru (tenant, registrácia zariadení),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aplikačný server (implementácia aplikácie),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spustenie koncového zariadenia (poskladanie komponentov, injekcia kódu)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(96899)/* ["default"] */ .A) + "",
        width: "1413",
        height: "1212"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-testing--verification",
      children: "07-Testing & Verification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overenie pokrytia LoRa bránou,"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(75604)/* ["default"] */ .A) + "",
        width: "520",
        height: "945"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spotreba energie koncového zariadenia,"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Inspiration",
        src: (__webpack_require__(10089)/* ["default"] */ .A) + "",
        width: "1533",
        height: "260"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "korektný prenos a spracovanie údajov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-operation",
      children: "08-Operation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "riešenie zatiaľ nie je produkčne nasadné, ale len podrobne otestované,"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-change-management",
      children: "09-Change Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zmena vadného senzoru,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zmena LMIC-node knižnice za inú, ktorá korektne implementuje hlboký spánok."
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



/***/ }),

/***/ 58063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Login_final-e6208985b2a130179a99fc02fe0440e0.png");

/***/ }),

/***/ 75604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/pokrytie-3b2213e9f8073c34ce676e1660c144f7.png");

/***/ }),

/***/ 86884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/architektura-a8670ef09eaa5b1472658e03a9acb657.png");

/***/ }),

/***/ 87138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/zariadenieKrabica-c6988b22a2452094e7189eaa2427572f.jpg");

/***/ }),

/***/ 96899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/statemachine-d542c03c0584884131be565f19b0f79d.png");

/***/ })

}]);