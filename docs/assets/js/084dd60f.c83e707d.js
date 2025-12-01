"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[15251],{

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

/***/ 38613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/UTM_Generator_Template_with_Formula-a46eabf48b78960311ce2305b2c71800.xlsx");

/***/ }),

/***/ 84382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_and_gtm_getting_started_ga_4_utm_md_084_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000064-ga-4-gtn-utm-ga-4-and-gtm-getting-started-ga-4-utm-md-084.json
const site_docs_sk_knifes_k_000064_ga_4_gtn_utm_ga_4_and_gtm_getting_started_ga_4_utm_md_084_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-08","title":"Getting Started with GA4 & UTM","description":"-","source":"@site/docs/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/GettingStarted_GA4_UTM.md","sourceDirName":"sk/knifes/K000064-ga4-gtn-utm/GA4andGTM","slug":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-08","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-08","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000064-ga4-gtn-utm-08","guid":"764e0ca3-9ca6-42a6-a2c9-fb80c7ee9f24","dao":"knife","title":"Getting Started with GA4 & UTM","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Google Analytics: Account vs Property vs Stream","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-06"},"next":{"title":"Getting Started with GA4 + GTM","permalink":"/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/K000064-ga4-gtn-utm-07"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000064-ga4-gtn-utm/GA4andGTM/GettingStarted_GA4_UTM.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000064-ga4-gtn-utm-08',
	guid: '764e0ca3-9ca6-42a6-a2c9-fb80c7ee9f24',
	dao: 'knife',
	title: 'Getting Started with GA4 & UTM',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '-',
	type: '-',
	priority: 'no',
	tags: [
		'KNIFE'
	],
	locale: 'sk',
	created: '2025-09-24',
	modified: '-',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
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
const contentTitle = 'Getting Started with GA4 & UTM';

const assets = {

};



const toc = [{
  "value": "🔎 Čo je UTM?",
  "id": "-čo-je-utm",
  "level": 2
}, {
  "value": "🧩 Základné parametre UTM",
  "id": "-základné-parametre-utm",
  "level": 2
}, {
  "value": "📌 Príklad URL s UTM",
  "id": "-príklad-url-s-utm",
  "level": 2
}, {
  "value": "📊 Kde to uvidíte v GA4",
  "id": "-kde-to-uvidíte-v-ga4",
  "level": 2
}, {
  "value": "✅ Mini šablóna pre UTM",
  "id": "-mini-šablóna-pre-utm",
  "level": 2
}, {
  "value": "Generátor UTM",
  "id": "generátor-utm",
  "level": 3
}, {
  "value": "🚀 Odporúčaný postup",
  "id": "-odporúčaný-postup",
  "level": 2
}, {
  "value": "✨ Tip",
  "id": "-tip",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "getting-started-with-ga4--utm",
        children: "Getting Started with GA4 & UTM"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "764e0ca3-9ca6-42a6-a2c9-fb80c7ee9f24"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-je-utm",
      children: "🔎 Čo je UTM?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["UTM = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Urchin Tracking Module"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Sú to krátke parametre, ktoré pridávate na koniec URL adresy, aby Google Analytics (GA4) vedel, odkiaľ návštevník prišiel."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 Samotné UTM nefunguje, ak na webe ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nie je nasadené GA4"
      }), " (cez kód alebo Google Tag Manager)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-základné-parametre-utm",
      children: "🧩 Základné parametre UTM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý UTM odkaz môže obsahovať viac parametrov. Najčastejšie sú:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Účel"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Príklad hodnoty"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "utm_source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "zdroj návštevy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "linkedin"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "facebook"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "newsletter"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "utm_medium"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "typ kanála alebo formát"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "post"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cpc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "email"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "utm_campaign"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "názov kampane"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "summer2025"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "webinar_ai"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "utm_content"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rozlíšenie varianty (voliteľné)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "button1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "image_banner"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "utm_term"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "hľadaný výraz (hlavne pre PPC)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ai_course"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "systemthinking"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-príklad-url-s-utm",
      children: "📌 Príklad URL s UTM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bez UTM:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "https://systemthinking.sk\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "S UTM:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "https://systemthinking.sk/?utm_source=linkedin&utm_medium=post&utm_campaign=august2025&utm_content=button1\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kde-to-uvidíte-v-ga4",
      children: "📊 Kde to uvidíte v GA4"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otvorte ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Reports → Acquisition → Traffic acquisition"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nastavte dimenzie ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Session source / medium"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uvidíte rozdelenie návštev podľa zdrojov (", (0,jsx_runtime.jsx)(_components.code, {
          children: "linkedin / post"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "facebook / cpc"
        }), ", atď.)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-mini-šablóna-pre-utm",
      children: "✅ Mini šablóna pre UTM"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Môžete si pripraviť jednoduchú tabuľku (napr. v Exceli/Calcu) a len dopĺňať hodnoty:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Base URL"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "utm_source"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "utm_medium"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "utm_campaign"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "utm_content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vygenerovaný link"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://systemthinking.sk",
              children: "https://systemthinking.sk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "linkedin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "post"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "august2025"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "button1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://systemthinking.sk/?utm_source=linkedin&utm_medium=post&utm_campaign=august2025&utm_content=button1",
              children: "https://systemthinking.sk/?utm_source=linkedin&utm_medium=post&utm_campaign=august2025&utm_content=button1"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generátor-utm",
      children: "Generátor UTM"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(38613)/* ["default"] */ .A) + "",
          children: "UTM_Generator_Template_with_Formula.xlsx"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          target: "_blank",
          "data-noBrokenLinkCheck": true,
          href: (__webpack_require__(96487)/* ["default"] */ .A) + "",
          children: "UTM_Generator_Template_Examples.xlsx"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-odporúčaný-postup",
      children: "🚀 Odporúčaný postup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Najprv ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nasadiť GA4"
        }), " na stránku (cez GTM alebo priamo)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potom začať zdieľať odkazy s UTM parametrami."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V GA4 kontrolovať, čo návštevníci z daných odkazov robia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tip",
      children: "✨ Tip"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak nechcete UTM vyrábať ručne, použite oficiálny nástroj:", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://ga-dev-tools.web.app/campaign-url-builder/",
        children: "Google Campaign URL Builder"
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



/***/ }),

/***/ 96487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/UTM_Generator_Template_Examples-07e9f9c2b7f6ff7995d5f5e871e16565.xlsx");

/***/ })

}]);