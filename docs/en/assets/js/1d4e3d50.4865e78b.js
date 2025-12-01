"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[78883],{

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

/***/ 37101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_knifes_overview_knife_overview_list_md_1d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-knifes-overview-knife-overview-list-md-1d4.json
const site_docs_sk_knifes_knifes_overview_knife_overview_list_md_1d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST","title":"🗂 KNIFE Overview – List","description":"{{DESCRIPTION}}","source":"@site/docs/sk/knifes/knifes_overview/KNIFE_Overview_List.md","sourceDirName":"sk/knifes/knifes_overview","slug":"/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST","permalink":"/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"{{FM_BUILD}}","fm_version_comment":"","id":"KNIFE_OVERVIEW_LIST","guid":"a6fd23f5-af23-4c0c-987c-9d286113be3c","dao":"{{DAO}}","title":"🗂 KNIFE Overview – List","description":"{{DESCRIPTION}}","author":"Roman Kazička","authors":["Roman Kazička"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-30","modified":"","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazička","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"📊 KNIFE Overview – Details","permalink":"/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS"},"next":{"title":"01-7ds_PlatobnyPortal – 01-7Ds – Platobný portál","permalink":"/en/sk/7Ds/01-7ds_PlatobnyPortal/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/knifes_overview/KNIFE_Overview_List.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '{{FM_BUILD}}',
	fm_version_comment: '',
	id: 'KNIFE_OVERVIEW_LIST',
	guid: 'a6fd23f5-af23-4c0c-987c-9d286113be3c',
	dao: '{{DAO}}',
	title: '🗂 KNIFE Overview – List',
	description: '{{DESCRIPTION}}',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička'
	],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-30',
	modified: '',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: 'Roman Kazička',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = '🗂 KNIFE Overview – List';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
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
        id: "-knife-overview--list",
        children: "🗂 KNIFE Overview – List"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a6fd23f5-af23-4c0c-987c-9d286113be3c"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
        children: "📰 Blog"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "🗂 List"
        })
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
        children: "📊 Details"
      }), " | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/knifes/",
        children: "↩️ KNIFES"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REF-UAT-001"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000026-knife-framework-pre-vyvoj-a-ucenie-sa-libreoffice-python/",
          children: "REF-UAT-001 – Postup pre presun zmien z vetvy FIX do UAT"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · top"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K1000999"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K1000999/",
          children: "K1000999 – KNIFE – Test script-created instance"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000999"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000999/",
          children: "K000999 – KNIFE – Test script-created instance"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000100"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000100-Ako-komunikova-s-porozumen-mE/",
          children: "K000100 – titul-Ako komunikovať s porozumením"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000092"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000092-KNIFE-User-Guide/",
          children: "K000092 – KNIFE User Guide v2"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000091"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000091-Zrodenie-git-sveta/",
          children: "K000091 – Krátka história Git – Linus Torvalds"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000090"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000090-VMWARE-Fusion-NAT2DHCP/",
          children: "K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000089"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000089-SmartGit-Nastavenie/",
          children: "K000089 – Kedy SSh a kedy HTTPS?"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Inprogress"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000088"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000088-RCA-OBD-Wifi-Android/",
          children: "K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000087"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000087-GitHub-Create-release/",
          children: "K000087 – GitHub-Create Release"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "draft"
        }), " · -"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000086"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000086-docusaurus-id-a-jeho-pouzitie/",
          children: "K000086 – Docusaurus-ID-a-jeho-pouzitie"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000084"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000084-ako-aktivovat-na-githube-edu-benefity/",
          children: "K000084 – Ako aktivovať na GitHube EDU benefity"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000083"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000083-aktualizacia-komponentov-pre-docusaurus/",
          children: "K000083 – Aktualizácia komponentov pre Docusaurus"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000082"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000082-ako-urobit-text-v-md-atraktivnejsi-emoji/",
          children: "K000082 – Ako urobiť text v MD atraktívnejší (emoji)"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000081"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000081-transparentna-stabilna-infrastruktura-pre-sites/",
          children: "K000081 – Transparentná -Stabilná infraštruktúra pre Sites"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000080"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000080-docusaurus-vs-github-pages-package-json/",
          children: "K000080 – Docusaurus-vs-github-pages-package-json"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000079"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000079-co-znamena-slovo-ze-je-nieco-idempotentne/",
          children: "K000079 – Čo znamená slovo že je niečo idempotentné?"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000078"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000078-language-as-a-bridge-ai-ako-most-medzi-jazykmi/",
          children: "K000078 – Language as a Bridge (AI ako most medzi jazykmi)"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000077"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000077-knife047-7s-cycle-of-meaningful-knowledge/",
          children: "K000077 – KNIFE047 – 7S Cycle of Meaningful Knowledge"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000076"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000076-caa-context-aware-approach-casy-context-aware-systems-caso-context-aware-solution/",
          children: "K000076 – CAA- Context Aware Approach, CASY-Context Aware Systems, CASo-Context Aware Solution"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000075"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000075-lean-canvas/",
          children: "K000075 – Lean canvas"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000074"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000074-sdlc-solution-development-life-cycle/",
          children: "K000074 – SDLC-Solution Development Life Cycle"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000073"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000073-q12-twelve-quadrants-for-starting-business/",
          children: "K000073 – Q12- Twelve quadrants for starting business"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000072"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000072-apv-assets-perspectives-views-keep-your-aseests-in-order/",
          children: "K000072 – APV-Assets-Perspectives-Views, Keep Your Aseests in Order"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000071"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000071-7ds-seven-disciplines-for-successful-solutions/",
          children: "K000071 – 7Ds-Seven Disciplines for successful solutions"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000070"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000070-ea-fundamentals/",
          children: "K000070 – EA Fundamentals"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000069"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000069-kto-ma-pochvali-ak-sa-nepochvalim-sam/",
          children: "K000069 – Kto ma pochváli, ak sa nepochválim sám?"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000068"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000068-kruhovy-portret-v-gimp/",
          children: "K000068 – Kruhový portrét v GIMP"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000067"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000067-github-deployment-strategie/",
          children: "K000067 – GitHub Deployment stratégie"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000066"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000066-porovnanie-biznis-planov-github/",
          children: "K000066 – Porovnanie biznis plánov GitHub"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000065"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000065-makefile-for-knife-ecosystem-for-mac-windows-linux/",
          children: "K000065 – MAKEFILE for KNIFE Ecosystem for Mac,Windows, Linux"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000064"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000064-ga4-gtn-utm/",
          children: "K000064 – GA4, GTN, UTM"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000063"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000063-automaticke-generovanie-knifes/",
          children: "K000063 – Automatické generovanie KNIFES"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000062"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000062-docusaurus-slugy-a-routing/",
          children: "K000062 – Docusaurus slugy a routing"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000061"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000061-passkey-ako-bezpecnostny-koncept/",
          children: "K000061 – Passkey ako bezpečnostný koncept"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000060"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000060-export-draw-io-diagramu-do-a4-png/",
          children: "K000060 – Export Draw.io diagramu do A4 PNG"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000059"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000059-stem-a-makerspace-ako-metodika-vzdelavania/",
          children: "K000059 – STEM a Makerspace ako metodika vzdelávania"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000058"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000058-ai-agent-na-monitoroavanie-nakladov-opengpt-od-pociatku-komunikacie/",
          children: "K000058 – AI Agent na monitoroavanie nákladov OpenGPT od počiatku komunikácie"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000057"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000057-ai-agent-na-monitoroavanie-nakladov-opengpt/",
          children: "K000057 – AI Agent na monitoroavanie nákladov OpenGPT"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000056"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000056-central-panel-for-git-sdlc-git-management-makefile/",
          children: "K000056 – Central Panel for GIT – SDLC Git Management Makefile"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000055"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000055-ako-obnovit-stav-z-minulosti/",
          children: "K000055 – Ako obnoviť stav z minulosti?"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000054"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000054-docusaurus-advanced-deployment-pipeline/",
          children: "K000054 – Docusaurus Advanced Deployment Pipeline"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000053"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000053-framework-for-project-management-in-github/",
          children: "K000053 – Framework for Project Management in GitHUB"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000052"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000052-github-lms-framework/",
          children: "K000052 – GitHub LMS Framework"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000051"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000051-google-analytics-fundamentals/",
          children: "K000051 – Google analytics – Fundamentals"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000050"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000050-open-gpt-vytvaranie-prompt-instructions/",
          children: "K000050 – Open GPT, vytváranie prompt instructions"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000049"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000049-knife049-vyhladavac-nad-opengpt-historiou/",
          children: "K000049 – KNIFE049 – Vyhľadávač nad OpenGPT históriou"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000048"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000048-ai-agent-in-opengpt/",
          children: "K000048 – AI – Agent in OpenGPT"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000047"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000047-knife047-7s-cycle-of-meaningful-knowledge/",
          children: "K000047 – KNIFE047 – 7S Cycle of Meaningful Knowledge"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000046"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000046-thunderbird-archive-export/",
          children: "K000046 – Thunderbird – Archive-export"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000045"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000045-zakladne-informacie-o-esg/",
          children: "K000045 – Základné informácie o ESG"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000044"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000044-onedrive-backup-to-external-disk-on-qnap/",
          children: "K000044 – OneDrive backup to external disk on QNAP"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000043"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000043-kontrola-odpovede-studentov-pomocou-api-na-ai/",
          children: "K000043 – Kontrola odpovedé študentov pomocou API na AI"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000042"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000042-singlepageapplication-webabased-desktop-app/",
          children: "K000042 – SinglePageApplication – Webabased desktop app"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000041"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000041-github-education-framework/",
          children: "K000041 – GitHUB Education Framework"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000040"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000040-migracia-joomla-github-mkdocs/",
          children: "K000040 – Migracia Joomla -->GitHUB MkDocs"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000039"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000039-sementicke-a-kontextove-vyhladavanie-nad-github/",
          children: "K000039 – Sementicke a kontextove vyhladavanie nad GitHUB"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000038"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000038-ako-si-vyrobit-automaticke-nastavovanie-ssl/",
          children: "K000038 – Ako si vyrobit automaticke nastavovanie SSL"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "done"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000037"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000037-context-aware-solutions-paradigma-solution/",
          children: "K000037 – Context Aware Solutions / paradigma, solution"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000036"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000036-pracovno-financny-ekosystem/",
          children: "K000036 – Pracovno, finančný ekosystém"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000035"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000035-context-aware-solutions-paradigma-solution/",
          children: "K000035 – Context Aware Solutions / paradigma, solution"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000034"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000034-pracovno-financny-ekosystem/",
          children: "K000034 – Pracovno, finančný ekosystém"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000033"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000033-smalltalk-ako-nastroj-flowu-a-kontextu/",
          children: "K000033 – Smalltalk ako nástroj flowu a kontextu"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000032"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000032-enterprise-document-integrated-sdlc/",
          children: "K000032 – Enterprise Document-integrated SDLC"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000031"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000031-document-as-code-framework/",
          children: "K000031 – Document-as-Code framework"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000030"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000030-pribeh-poznania-sdlc/",
          children: "K000030 – Príbeh poznania SDLC"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000029"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000029-prostredie-vyvojove-python-pre-lo/",
          children: "K000029 – Prostredie vývojové python pre LO"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000028"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000028-context-aware-system-ontology-approach/",
          children: "K000028 – Context Aware System Ontology, Approach"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000027"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000027-git-for-dummies-central-concepts/",
          children: "K000027 – Git For Dummies – Central Concepts"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000025"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000025-kategorizacia-terno-podla-sdlc-a-7d/",
          children: "K000025 – Kategorizácia TERNO podľa SDLC a 7D"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000024"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000024-onenote-ako-zdroj-metadat-pre-ai/",
          children: "K000024 – OneNote ako zdroj metadát pre AI"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000023"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000023-ai-interakcie-casova-os-a-emocie/",
          children: "K000023 – AI interakcie – časová os a emócie"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000022"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000022-terno-terapeuticke-formy-ucenia/",
          children: "K000022 – TERNO – terapeutické formy učenia"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000021"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000021-princip-udrzatelnosti-v-architekture/",
          children: "K000021 – Princíp udržateľnosti v architektúre"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000020"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000020-libreoffice-ako-komunitna-platforma/",
          children: "K000020 – LibreOffice ako komunitná platforma"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000019"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000019-bazi-vypocty-algoritmus-hodiny-kalendar/",
          children: "K000019 – BaZi výpočty – algoritmus, hodiny, kalendár"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000017"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000017-ai-powered-terno-planner/",
          children: "K000017 – AI-powered TERNO Planner"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000016"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000016-helper-skript-pre-lo-symbolic-link/",
          children: "K000016 – Helper skript pre LO symbolic link"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000015"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000015-libreoffice-basic-python-migracia/",
          children: "K000015 – LibreOffice Basic → Python migrácia"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000014"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000014-manazer-kniznic-pre-lo-basic/",
          children: "K000014 – Manažér knižníc pre LO Basic"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000013"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000013-readonlycontrol-v-ea-workflow-add-in/",
          children: "K000013 – ReadOnlyControl v EA – Workflow Add-In"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000012"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000012-ea-workflow-add-in-pokrocile-sablony/",
          children: "K000012 – EA Workflow Add-In – pokročilé šablóny"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000011"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000011-main-xba-sablona-pre-lo-basic/",
          children: "K000011 – Main.xba šablóna pre LO Basic"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000010"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000010-openai-klient-vlastna-ai-komunikacia/",
          children: "K000010 – OpenAI klient – vlastná AI komunikácia"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000009"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000009-linkedin-post-engine-ai-automatizacia/",
          children: "K000009 – LinkedIn post engine – AI automatizácia"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000008"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000008-dcmm-a-dao-hodnota-leadershipu/",
          children: "K000008 – DCMM a DAO – hodnota leadershipu"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000007"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000007-helper-skript-na-obrazky-v-markdown/",
          children: "K000007 – Helper skript na obrázky v Markdown"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000006"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000006-timova-sprava-prav-v-gitea/",
          children: "K000006 – Tímová správa práv v Gitea"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000005"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000005-bazi-pre-racionalne-duse/",
          children: "K000005 – BaZi pre racionálne duše"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000004"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000004-docker-pre-studentov-k12/",
          children: "K000004 – Docker pre študentov (K12)"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000003"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000003-libreoffice-python-integracia/",
          children: "K000003 – LibreOffice + Python integrácia"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000002"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000002-git-workflow-pre-ea-modely/",
          children: "K000002 – Git workflow pre EA modely"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "inprogress"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "K000001"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../K000001-ea-modelovanie-a-motivacia/",
          children: "K000001 – EA modelovanie a motivácia"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "done"
        }), " · no"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ako komunikovať s porozumenímE_index"
        }), " · ", (0,jsx_runtime.jsx)(_components.a, {
          href: "../Ako-komunikova-s-porozumen-mE/",
          children: "titul-Ako komunikovať s porozumením"
        }), " · ", (0,jsx_runtime.jsx)(_components.em, {
          children: "backlog"
        }), " · -"]
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