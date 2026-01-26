"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[63617],{

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

/***/ 96517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_017_sdlc_01_business_index_md_16a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-017-sdlc-01-business-index-md-16a.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_017_sdlc_01_business_index_md_16a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/business/index","title":"01 business","description":"Biznis kontext projektu FiitCase (PR017): obaly na mobily s FIIT identitou – cieľ, zákazník, hodnota, financie, riziká.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/01-business/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/01-business","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/business/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/business/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sdlc","permalink":"/en/docs/tags/sdlc"},{"inline":true,"label":"business","permalink":"/en/docs/tags/business"},{"inline":true,"label":"PR017","permalink":"/en/docs/tags/pr-017"},{"inline":true,"label":"FiitCase","permalink":"/en/docs/tags/fiit-case"},{"inline":true,"label":"FIIT","permalink":"/en/docs/tags/fiit"},{"inline":true,"label":"merch","permalink":"/en/docs/tags/merch"},{"inline":true,"label":"ecommerce","permalink":"/en/docs/tags/ecommerce"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.027846+00:00","fm_version_comment":"","guid":"f14fce52-9834-4ab0-8513-db88199d5208","dao":"class_sthdf_dashboard","title":"01 business","description":"Biznis kontext projektu FiitCase (PR017): obaly na mobily s FIIT identitou – cieľ, zákazník, hodnota, financie, riziká.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"sdlc","type":"section","priority":"high","tags":["sdlc","business","PR017","FiitCase","FIIT","merch","ecommerce"],"locale":"sk","created":"2025-11-28 16:54","modified":"2026-01-20 12:00","status":"draft","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/"},"next":{"title":"notes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/01-business/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.027846+00:00',
	fm_version_comment: '',
	guid: 'f14fce52-9834-4ab0-8513-db88199d5208',
	dao: 'class_sthdf_dashboard',
	title: '01 business',
	description: 'Biznis kontext projektu FiitCase (PR017): obaly na mobily s FIIT identitou – cieľ, zákazník, hodnota, financie, riziká.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'sdlc',
	type: 'section',
	priority: 'high',
	tags: [
		'sdlc',
		'business',
		'PR017',
		'FiitCase',
		'FIIT',
		'merch',
		'ecommerce'
	],
	locale: 'sk',
	created: '2025-11-28 16:54',
	modified: '2026-01-20 12:00',
	status: 'draft',
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
const contentTitle = '01-Business (PR017 – FiitCase)';

const assets = {

};



const toc = [{
  "value": "Prečo to robíme",
  "id": "prečo-to-robíme",
  "level": 2
}, {
  "value": "Biznis cieľ (v našom scope)",
  "id": "biznis-cieľ-v-našom-scope",
  "level": 2
}, {
  "value": "Hlavný problém (čo si nesmieme klamať)",
  "id": "hlavný-problém-čo-si-nesmieme-klamať",
  "level": 2
}, {
  "value": "Riziká",
  "id": "riziká",
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
        id: "01-business-pr017--fiitcase",
        children: "01-Business (PR017 – FiitCase)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FiitCase je študentský projekt zameraný na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "marketingový merch pre STU"
      }), ": obaly na mobil s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "STU identitou (logo / tematické varianty)"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "udržateľné balenie"
      }), " a možnosť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vrátiť použitý obal na recykláciu"
      }), " (zberné miesto napr. na FIIT)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prečo-to-robíme",
      children: "Prečo to robíme"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STU komunita chce praktický merch, ktorý ľudia reálne používajú každý deň."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obal na mobil má vysokú viditeľnosť → podporuje školskú identitu a “patrím k STU”."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Udržateľný prístup (balenie + zber) dáva projektu zmysel aj mimo “len ďalší merch”."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "biznis-cieľ-v-našom-scope",
      children: "Biznis cieľ (v našom scope)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dodať funkčný produktový koncept + prototypy (3D návrh a vytlačené kusy),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ukázať, že vieme zvládnuť celý lifecycle: dizajn → výroba → balenie → distribúcia → zber."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hlavný-problém-čo-si-nesmieme-klamať",
      children: "Hlavný problém (čo si nesmieme klamať)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Obal je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "komodita"
      }), ". Ak je jediná výhoda “je tam STU logo”, je to slabé. Aby to fungovalo ako merch, musíme vyhrať aspoň v dvoch bodoch:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dizajn"
        }), " (vyzerá to profesionálne, nie lacno),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "kvalita a fit"
        }), " (sedí na telefón, chráni, neškriabe),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "dostupnosť"
        }), " (na fakulte/eventoch),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "udržateľnosť"
        }), " (balenie bez zbytočného plastu + reálny zber/recyklácia)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "riziká",
      children: "Riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STU identita/brand:"
        }), " nesprávne použitie loga = stopka alebo reputačný problém."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Greenwashing:"
        }), " “zber” bez jasného procesu čo sa s tým stane = hanba, nie benefit."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/top-level-architecture/",
        children: "Next"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/",
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