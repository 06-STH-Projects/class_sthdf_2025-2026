"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[74899],{

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

/***/ 97574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000083_aktualizacia_komponentov_pre_docusaurus_analyza_moznosti_pre_mac_os_md_b28_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000083-aktualizacia-komponentov-pre-docusaurus-analyza-moznosti-pre-mac-os-md-b28.json
const site_docs_sk_knifes_k_000083_aktualizacia_komponentov_pre_docusaurus_analyza_moznosti_pre_mac_os_md_b28_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_01","title":"KNIFE – K000083_01","description":"-","source":"@site/docs/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/AnalyzaMoznostiPreMacOS.md","sourceDirName":"sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus","slug":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_01","permalink":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_01","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"-","permalink":"/docs/tags"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000083_01","guid":"48faadc5-190a-424f-8d25-6e99df7010b3","dao":"knife","title":"KNIFE – K000083_01","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"deliverable","type":"knife","priority":"no","tags":["-"],"locale":"sk","created":"2025-09-26","modified":"2025-09-26","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Educational content. Use at your own risk.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000083 – Aktualizácia komponentov pre Docusaurus","permalink":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/"},"next":{"title":"KNIFE – K000083_04","permalink":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_04"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/AnalyzaMoznostiPreMacOS.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000083_01',
	guid: '48faadc5-190a-424f-8d25-6e99df7010b3',
	dao: 'knife',
	title: 'KNIFE – K000083_01',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: 'deliverable',
	type: 'knife',
	priority: 'no',
	tags: [
		'-'
	],
	locale: 'sk',
	created: '2025-09-26',
	modified: '2025-09-26',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Educational content. Use at your own risk.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '-',
	author_did: '-',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'Analýza možností pre MacOS – inštalácia Node.js v22';

const assets = {

};



const toc = [{
  "value": "1. Homebrew (najjednoduchšie na Macu)",
  "id": "1-homebrew-najjednoduchšie-na-macu",
  "level": 2
}, {
  "value": "Popis",
  "id": "popis",
  "level": 3
}, {
  "value": "Výhody",
  "id": "výhody",
  "level": 3
}, {
  "value": "Nevýhody",
  "id": "nevýhody",
  "level": 3
}, {
  "value": "Odporúčanie",
  "id": "odporúčanie",
  "level": 3
}, {
  "value": "2. NVM (Node Version Manager)",
  "id": "2-nvm-node-version-manager",
  "level": 2
}, {
  "value": "Popis",
  "id": "popis-1",
  "level": 3
}, {
  "value": "Výhody",
  "id": "výhody-1",
  "level": 3
}, {
  "value": "Nevýhody",
  "id": "nevýhody-1",
  "level": 3
}, {
  "value": "Odporúčanie",
  "id": "odporúčanie-1",
  "level": 3
}, {
  "value": "3. Volta",
  "id": "3-volta",
  "level": 2
}, {
  "value": "Popis",
  "id": "popis-2",
  "level": 3
}, {
  "value": "Výhody",
  "id": "výhody-2",
  "level": 3
}, {
  "value": "Nevýhody",
  "id": "nevýhody-2",
  "level": 3
}, {
  "value": "Odporúčanie",
  "id": "odporúčanie-2",
  "level": 3
}, {
  "value": "Zhrnutie porovnania",
  "id": "zhrnutie-porovnania",
  "level": 2
}, {
  "value": "Odporúčanie pre tvoj projekt",
  "id": "odporúčanie-pre-tvoj-projekt",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "analýza-možností-pre-macos--inštalácia-nodejs-v22",
        children: "Analýza možností pre MacOS – inštalácia Node.js v22"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "48faadc5-190a-424f-8d25-6e99df7010b3"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inprogress"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V prostredí MacOS existujú tri hlavné prístupy, ako spravovať verziu Node.js.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Každý má svoje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "výhody, nevýhody a odporúčané použitie"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-homebrew-najjednoduchšie-na-macu",
      children: "1. Homebrew (najjednoduchšie na Macu)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "popis",
      children: "Popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Homebrew je balíčkový manažér pre MacOS. Inštalácia Node cez Homebrew je priama a známa väčšine používateľov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výhody",
      children: "Výhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Jednoduché na inštaláciu a používanie."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Jediný príkaz na update (", (0,jsx_runtime.jsx)(_components.code, {
          children: "brew upgrade node@22"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Dobré pre používateľov, ktorí už používajú Homebrew na iné balíky."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nevýhody",
      children: "Nevýhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Spravuje Node globálne – ťažšie mať viacero verzií naraz."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ PATH konfigurácia sa líši medzi Apple Silicon (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/opt/homebrew"
        }), ") a Intel (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/usr/local"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odporúčanie",
      children: "Odporúčanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vhodné pre ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "študentov a začiatočníkov"
        }), ", ktorí chcú rýchlo spustiť prostredie a nepotrebujú viacero Node verzií."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-nvm-node-version-manager",
      children: "2. NVM (Node Version Manager)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "popis-1",
      children: "Popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVM je populárny správca Node verzií. Umožňuje mať na jednom systéme viac verzií Node a jednoducho medzi nimi prepínať."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výhody-1",
      children: "Výhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Flexibilné – môžeš mať Node 18, 20 aj 22 a prepínať podľa projektu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".nvmrc"
        }), " umožňuje automatické použitie správnej verzie v projekte (", (0,jsx_runtime.jsx)(_components.code, {
          children: "nvm use"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Široko podporované v open-source projektoch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nevýhody-1",
      children: "Nevýhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Inštalácia je o niečo komplikovanejšia (úprava ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".zshrc"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Spúšťa sa cez shell skripty → mierne pomalší štart shellu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["❌ Nie je priamo v Homebrew (hoci existuje aj formula ", (0,jsx_runtime.jsx)(_components.code, {
          children: "brew install nvm"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odporúčanie-1",
      children: "Odporúčanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vhodné pre ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "pokročilejších používateľov a maintainerov"
        }), ", ktorí spravujú viacero projektov s rôznymi Node verziami."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-volta",
      children: "3. Volta"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "popis-2",
      children: "Popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Volta je moderný správca verzií Node, ktorý inštaluje binárky priamo do PATH a rieši aj správu npm/yarn."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výhody-2",
      children: "Výhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Rýchlejšie ako NVM (žiadne shell skripty na štarte)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Vie fixovať verziu Node per-projekt."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Jednoduché príkazy: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volta install node@22"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nevýhody-2",
      children: "Nevýhody"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Menej rozšírený než NVM, menšia komunita."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Menšia kontrola nad detailami prostredia (niektorí maintaineri preferujú NVM)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "odporúčanie-2",
      children: "Odporúčanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vhodné pre ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "vývojárov, ktorí chcú jednoduchosť a rýchlosť"
        }), ", a nevadí im, že komunita je menšia."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "zhrnutie-porovnania",
      children: "Zhrnutie porovnania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Kritérium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Homebrew"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NVM"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Volta"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Jednoduchosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexibilita"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐⭐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Popularita"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐⭐"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐☆☆☆"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Výkon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐☆☆☆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⭐⭐⭐⭐⭐"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vhodné pre"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Študentov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maintainerov, power-userov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Praktikov, ktorí chcú rýchlosť"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "odporúčanie-pre-tvoj-projekt",
      children: "Odporúčanie pre tvoj projekt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Študenti"
        }), ": Homebrew cesta – najjednoduchšie, menej chýb."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ty ako maintainer"
        }), ": NVM – dáva kontrolu a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".nvmrc"
        }), " zabezpečí konzistenciu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternatíva"
        }), ": Volta – môže byť rýchlejšia a pohodlnejšia, ak nechceš riešiť overhead NVM."]
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