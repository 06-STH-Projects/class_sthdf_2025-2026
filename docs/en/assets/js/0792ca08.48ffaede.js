"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[49721],{

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

/***/ 96927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_01_business_index_md_079_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-006-sdlc-01-business-index-md-079.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_006_sdlc_01_business_index_md_079_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/business/index","title":"01 business","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/01-business/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/01-business","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/business/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/business/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.923623+00:00","fm_version_comment":"","guid":"043aa868-7e0c-4e46-895e-20ec289bb733","dao":"class_sthdf_dashboard","title":"01 business","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/"},"next":{"title":"notes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/01-business/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.923623+00:00',
	fm_version_comment: '',
	guid: '043aa868-7e0c-4e46-895e-20ec289bb733',
	dao: 'class_sthdf_dashboard',
	title: '01 business',
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
const contentTitle = '01-Business';

const assets = {

};



const toc = [{
  "value": "1. Vízia a misia",
  "id": "1-vízia-a-misia",
  "level": 2
}, {
  "value": "Vízia",
  "id": "vízia",
  "level": 3
}, {
  "value": "Misia",
  "id": "misia",
  "level": 3
}, {
  "value": "2. Problém a príležitosť",
  "id": "2-problém-a-príležitosť",
  "level": 2
}, {
  "value": "Problém",
  "id": "problém",
  "level": 3
}, {
  "value": "Príležitosť",
  "id": "príležitosť",
  "level": 3
}, {
  "value": "3. Cieľové segmenty",
  "id": "3-cieľové-segmenty",
  "level": 2
}, {
  "value": "3.1 B2C",
  "id": "31-b2c",
  "level": 3
}, {
  "value": "3.2 B2B",
  "id": "32-b2b",
  "level": 3
}, {
  "value": "4. Konkurenčný kontext a diferenciácia",
  "id": "4-konkurenčný-kontext-a-diferenciácia",
  "level": 2
}, {
  "value": "Existujúci trh",
  "id": "existujúci-trh",
  "level": 3
}, {
  "value": "Diferenciácia Woodies",
  "id": "diferenciácia-woodies",
  "level": 3
}, {
  "value": "5. Produktové portfólio",
  "id": "5-produktové-portfólio",
  "level": 2
}, {
  "value": "6. Riziká",
  "id": "6-riziká",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "01-business",
        children: "01-Business"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-vízia-a-misia",
      children: "1. Vízia a misia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vízia",
      children: "Vízia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stať sa rozpoznateľnou značkou digitálne navrhnutých drevených hlavolamov, ktoré spájajú remeselný charakter dreva s moderným parametrickým dizajnom pripraveným pre CNC."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "misia",
      children: "Misia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Navrhovať estetické, funkčné a opakovateľne vyrobiteľné drevené hlavolamy, ktoré:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rozvíjajú priestorové a logické myslenie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sú navrhnuté s dôrazom na tolerancie a „prácu“ dreva,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "umožňujú personalizáciu ako je gravírovanie či varianty obtiažnosti,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "majú pripravenú dokumentáciu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-problém-a-príležitosť",
      children: "2. Problém a príležitosť"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problém",
      children: "Problém"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Trh s hlavolamami je bohatý, no:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kvalitné drevené hlavolamy bývajú drahé,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lacné varianty trpia zlým spracovaním a toleranciami,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "mnoho návrhov nie je „CNC-friendly“ a nie je parametrických"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "príležitosť",
      children: "Príležitosť"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Woodies bude kombinovať výrobu s digitálnym produktom ako sú CAD modely"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Týmto sa dá:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchlo iterovať dizajn,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vytvoriť knižnicu produktov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ponúknuť B2C aj B2B bez potreby vlastnej výroby."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-cieľové-segmenty",
      children: "3. Cieľové segmenty"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-b2c",
      children: "3.1 B2C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zberatelia mechanických hlavolamov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zákazníci hľadajúci originálny darček"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rodičia/učitelia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-b2b",
      children: "3.2 B2B"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prevádzkovatelia escape roomov - rekvizity, puzzle komponenty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "školy / krúžky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-konkurenčný-kontext-a-diferenciácia",
      children: "4. Konkurenčný kontext a diferenciácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "existujúci-trh",
      children: "Existujúci trh"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handmade výrobky – variabilná kvalita, často bez výrobnej dokumentácie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Masová výroba  – tlak na cenu, slabé tolerancie/finishing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prémiové puzzle box – vysoká cena, tradičný prístup"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "diferenciácia-woodies",
      children: "Diferenciácia Woodies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zameranie na digitálny návrh a opakovateľnosť,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "„design system“ pre puzzle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-produktové-portfólio",
      children: "5. Produktové portfólio"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Podľa analýzy v ", (0,jsx_runtime.jsx)(_components.code, {
        children: "analysis.md"
      }), " je vhodné pokryť 3–4 typy, aby sa ukázali rozdielne výrobky"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interlocking (Burr)"
        }), " – 6-piece burr (klasika, stredná náročnosť výroby)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assembly (Soma Cube / Snake Cube)"
        }), " – edukatívne, dobré na parametrizáciu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequential discovery (Puzzle box – jednoduchší variant)"
        }), " – vyššia komplexita, ukážka tolerancií"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(voliteľné) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Disentanglement (ring & string)"
        }), " – jednoduchá výroba, zaujímavý user experience"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-riziká",
      children: "6. Riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Neodhadnuté tolerancie → dizajn nevhodný pre drevo"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Slabá diferenciácia → mnoho „podobných“ puzzle na trhu"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Autorské práva pri inšpirácii tradičnými puzzle"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.a, {
            href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/business/notes",
            children: "Business poznámky"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/",
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