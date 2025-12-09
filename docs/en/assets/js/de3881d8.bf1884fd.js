"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[19638],{

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

/***/ 61355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_013_sdlc_02_project_phases_index_md_de3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-013-sdlc-02-project-phases-index-md-de3.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_013_sdlc_02_project_phases_index_md_de3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/project-phases/index","title":"02 top level architecture","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/02-project-phases/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/02-project-phases","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/project-phases/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/project-phases/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.957782+00:00","fm_version_comment":"","guid":"ad916cb1-01e5-4d47-8144-f1d620455ac5","dao":"class_sthdf_dashboard","title":"02 top level architecture","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"notes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/business-plan/notes"},"next":{"title":"02 top level architecture","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/top-level-architecture/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/02-project-phases/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.957782+00:00',
	fm_version_comment: '',
	guid: 'ad916cb1-01e5-4d47-8144-f1d620455ac5',
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
const contentTitle = '02-Project phases';

const assets = {

};



const toc = [{
  "value": "Prehľad fáz",
  "id": "prehľad-fáz",
  "level": 2
}, {
  "value": "Fáza 1 — Držkábel",
  "id": "fáza-1--držkábel",
  "level": 2
}, {
  "value": "Fáza 2 — Apka",
  "id": "fáza-2--apka",
  "level": 2
}, {
  "value": "Fáza 3 — Feedback od používateľov",
  "id": "fáza-3--feedback-od-používateľov",
  "level": 2
}, {
  "value": "Fáza 4 — Na tom budeme robiť",
  "id": "fáza-4--na-tom-budeme-robiť",
  "level": 2
}, {
  "value": "Milníky a timeline (náčrt)",
  "id": "milníky-a-timeline-náčrt",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
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
        id: "02-project-phases",
        children: "02-Project phases"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/",
        children: "⬅️ Projekt"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prehľad-fáz",
      children: "Prehľad fáz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fáza 1: Držkábel (fyzický produkt, validácia trhu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fáza 2: Apka (MVP ergonomika + pripomienky + pomodoro)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fáza 3: Feedback (kvalitatívne/kvantitatívne dáta, prioritizácia)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fáza 4: Rozširovanie (integrácie, senzory, doplnky)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fáza-1--držkábel",
      children: "Fáza 1 — Držkábel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výroba a balenie; pilotný predaj a logistika"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zber spätnej väzby (photos/video, recenzie, dotazníky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Iterácie dizajnu podľa reálneho používania"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fáza-2--apka",
      children: "Fáza 2 — Apka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MVP: onboarding s telesnými údajmi + základné ergonomické odporúčania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripomienky sedenie/státie, prestávky; pomodoro timer"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základný profil a checklist nastavenia setupu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fáza-3--feedback-od-používateľov",
      children: "Fáza 3 — Feedback od používateľov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Metodika: rozhovory, ankety, telemetry v app (aktivácia/retencia)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cieľ: identifikovať top pain‑points a „aha“ momenty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výstup: zoradený backlog + jasné learningy na iterácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fáza-4--na-tom-budeme-robiť",
      children: "Fáza 4 — Na tom budeme robiť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Roadmapa podľa dát; rozšírenia:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrácie: standing desk, svetlá"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Senzory: vzduch/CO₂, svetlo, hluk"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ďalšie doplnky: organizéry, držiaky, cable sleeves"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "milníky-a-timeline-náčrt",
      children: "Milníky a timeline (náčrt)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M1: Prvé predaje Držkábel + 20+ spät. väzieb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M2: MVP app (onboarding + ergonomika + pripomienky + pomodoro)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M3: 30‑dňová retencia > X %, NPS > Y"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M4: Integrácie/senzory – prvé piloty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/",
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