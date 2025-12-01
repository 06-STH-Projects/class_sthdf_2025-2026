"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[83066],{

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

/***/ 46945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000091_zrodenie_git_sveta_index_md_031_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000091-zrodenie-git-sveta-index-md-031.json
const site_docs_sk_knifes_k_000091_zrodenie_git_sveta_index_md_031_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000091-Zrodenie-git-sveta/K000091","title":"K000091 – Krátka história Git – Linus Torvalds","description":"","source":"@site/docs/sk/knifes/K000091-Zrodenie-git-sveta/index.md","sourceDirName":"sk/knifes/K000091-Zrodenie-git-sveta","slug":"/sk/knifes/K000091-Zrodenie-git-sveta/","permalink":"/sk/knifes/K000091-Zrodenie-git-sveta/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-09","fm_version_comment":"","id":"K000091","guid":"29e6bd9c-4ae5-46fa-9b8d-609dba1aef2f","dao":"knife","title":"K000091 – Krátka história Git – Linus Torvalds","description":"","author":"romankazicka","authors":[],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-11","modified":"","status":"backlog","privacy":"public","rights_holder_content":"","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 <autor>","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000091 – Krátka história Git – Linus Torvalds"},"sidebar":"tutorialSidebar","previous":{"title":"K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max","permalink":"/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/"},"next":{"title":"KNIFE User Guide v2","permalink":"/sk/knifes/K000092-KNIFE-User-Guide/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000091-Zrodenie-git-sveta/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-09',
	fm_version_comment: '',
	id: 'K000091',
	guid: '29e6bd9c-4ae5-46fa-9b8d-609dba1aef2f',
	dao: 'knife',
	title: 'K000091 – Krátka história Git – Linus Torvalds',
	description: '',
	author: 'romankazicka',
	authors: [],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-11',
	modified: '',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: '',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 <autor>',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: '',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_label: 'K000091 – Krátka história Git – Linus Torvalds'
};
const contentTitle = 'Krátka história Git – Linus Torvalds';

const assets = {

};



const toc = [{
  "value": "1. Chaos pred Gitom",
  "id": "1-chaos-pred-gitom",
  "level": 2
}, {
  "value": "2. Bitka o kernel (2005)",
  "id": "2-bitka-o-kernel-2005",
  "level": 2
}, {
  "value": "3. Zrod filozofie",
  "id": "3-zrod-filozofie",
  "level": 2
}, {
  "value": "4. Od kernelu po GitHub",
  "id": "4-od-kernelu-po-github",
  "level": 2
}, {
  "value": "5. Git dnes",
  "id": "5-git-dnes",
  "level": 2
}, {
  "value": "6. Lekcia pre študentov SDLC",
  "id": "6-lekcia-pre-študentov-sdlc",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "krátka-história-git--linus-torvalds",
        children: "Krátka história Git – Linus Torvalds"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "29e6bd9c-4ae5-46fa-9b8d-609dba1aef2f"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " romankazicka · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "k000091-krátka-história-git--linus-torvalds",
      children: "K000091-Krátka história Git – Linus Torvalds"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-chaos-pred-gitom",
      children: "1. Chaos pred Gitom"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V začiatkoch open-source vývoja sa používali centralizované systémy ako CVS a SVN. Každý commit musel prejsť centrálnym serverom – vývojári sa bili o prístupové práva a merge bol nočnou morou.\nA Linus Torvalds?\nGénius, ktorý si jedného dňa povedal:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "„Nebudem čakať, kým mi niekto napíše lepší verzionovací systém — napíšem si ho sám.“\n…a o pár víkendov neskôr vznikol Git. 🤯"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "💡 Fun fact:\nKeď sa ho pýtali, prečo ho nazval „Git“, odpovedal:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“Because I’m an egotistical bastard, and I name all my projects after myself. First Linux, now Git.”\n(v britskom slangu git = „debil“ alebo „trucovitý človek“) 😂"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "💬 Small Talk Moment:\n„Git ťa najprv poníži, potom ťa osvieti. A až keď spravíš svoj prvý úspešný rebase bez straty dát, stávaš sa zasväteným.“ 🧙‍♂️✨"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-bitka-o-kernel-2005",
      children: "2. Bitka o kernel (2005)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Linus Torvalds spravoval Linux Kernel pomocou proprietárneho nástroja ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BitKeeper"
      }), ". Keď licencia padla, rozhodol sa napísať vlastný systém. Za ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "desať dní"
      }), " vytvoril prvú verziu Gitu — rýchlu, bezpečnú a plne distribuovanú."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-zrod-filozofie",
      children: "3. Zrod filozofie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git nebol len technický nástroj. Bol to manifest: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "„Verím vývojárom. Každý z vás má právo mať celý svet kódu vo svojich rukách.“"
      }), "\nKaždý klon repozitára je úplná kópia histórie — nie odbočka, ale nový vesmír."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-od-kernelu-po-github",
      children: "4. Od kernelu po GitHub"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["O pár rokov neskôr prišiel ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub (2008)"
      }), ". Kombinácia Git + sociálne funkcie zmenila svet vývoja. „Forkni, oprav, pošli pull request.“ — jednoduché, elegantné a demokratické."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-git-dnes",
      children: "5. Git dnes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git sa stal štandardom. Vznikli varianty ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitLab"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bitbucket"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gitea"
      }), ", a dokonca školské frameworky ako ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GitHub Classroom"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Z kedysi “chaotického kernel hacku” sa stal ekosystém pre firmy, univerzity aj vedcov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-lekcia-pre-študentov-sdlc",
      children: "6. Lekcia pre študentov SDLC"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git je viac než nástroj. Je to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filozofia dôvery, decentralizácie a zodpovednosti"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Každý commit je malý podpis – „toto som urobil ja a stojím si za tým.“"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💬 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Small Talk Moment:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "„Linus nechcel vytvoriť kult, len nástroj. Ale keď máš dobrý commit, ľudia ho merge-nú.“ 😄"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
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