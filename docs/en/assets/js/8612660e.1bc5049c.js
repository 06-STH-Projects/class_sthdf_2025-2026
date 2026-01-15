"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[45733],{

/***/ 2211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-05-0f3cf5f838007183b974b421f218710d.png");

/***/ }),

/***/ 3495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-01-73b9251af8111b6b6c58a0ee9a8755be.png");

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

/***/ 39995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Check_bill-01-7e28b0dc5c1d706f1880883e52506e52.png");

/***/ }),

/***/ 43103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000084_ako_aktivovat_na_githube_edu_benefity_ghedu_benefits_usage_md_861_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000084-ako-aktivovat-na-githube-edu-benefity-ghedu-benefits-usage-md-861.json
const site_docs_sk_knifes_k_000084_ako_aktivovat_na_githube_edu_benefity_ghedu_benefits_usage_md_861_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_02","title":"KNIFE – K000084_02","description":"-","source":"@site/docs/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/GHEDU_Benefits_Usage.md","sourceDirName":"sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity","slug":"/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_02","permalink":"/en/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_02","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"-","permalink":"/en/docs/tags"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000084_02","guid":"280b3b24-c7e8-4aa9-a870-838c461f8b10","dao":"knife","title":"KNIFE – K000084_02","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"deliverable","type":"knife","priority":"no","tags":["-"],"locale":"sk","created":"2025-09-26","modified":"2025-09-26","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Educational content. Use at your own risk.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000084 – Ako aktivovať na GitHube EDU benefity","permalink":"/en/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/"},"next":{"title":"KNIFE – K000084_01","permalink":"/en/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_01"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/GHEDU_Benefits_Usage.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000084_02',
	guid: '280b3b24-c7e8-4aa9-a870-838c461f8b10',
	dao: 'knife',
	title: 'KNIFE – K000084_02',
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
const contentTitle = 'GitHub Education Faculty Benefits – Usage Scenario';

const assets = {

};



const toc = [{
  "value": "✅ Status",
  "id": "-status",
  "level": 2
}, {
  "value": "1. Aktivácia Team plánu pre organizácie",
  "id": "1-aktivácia-team-plánu-pre-organizácie",
  "level": 2
}, {
  "value": "Kontrola aktivácie",
  "id": "kontrola-aktivácie",
  "level": 3
}, {
  "value": "Vidno, že poplatky za používanie nejaké sa priebežne počítajú, ale mne sa nebudú účtovať, lebo benefity.",
  "id": "vidno-že-poplatky-za-používanie-nejaké-sa-priebežne-počítajú-ale-mne-sa-nebudú-účtovať-lebo-benefity",
  "level": 2
}, {
  "value": "2. Aktivácia Copilot Pro kupónu",
  "id": "2-aktivácia-copilot-pro-kupónu",
  "level": 2
}, {
  "value": "Získané vlastnosti",
  "id": "získané-vlastnosti",
  "level": 2
}, {
  "value": "3. Kontrola statusu",
  "id": "3-kontrola-statusu",
  "level": 2
}, {
  "value": "🎉 Výhody po aktivácii",
  "id": "-výhody-po-aktivácii",
  "level": 2
}, {
  "value": "📌 Ďaľšie informácie",
  "id": "-ďaľšie-informácie",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
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
        id: "github-education-faculty-benefits--usage-scenario",
        children: "GitHub Education Faculty Benefits – Usage Scenario"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "280b3b24-c7e8-4aa9-a870-838c461f8b10"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento návod popisuje, čo robiť po schválení GitHub Education Faculty Benefits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-status",
      children: "✅ Status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Schválené: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "August 26, 2025"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Platnosť do: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "August 26, 2027"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Typ: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Faculty"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-aktivácia-team-plánu-pre-organizácie",
      children: "1. Aktivácia Team plánu pre organizácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prejdi do svojej organizácie (", (0,jsx_runtime.jsx)(_components.code, {
            children: "SystemThinking"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "STHDF-2025-2026"
          }), ", ...)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["V menu klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Settings → Billing"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Nájdeš tam možnosť ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Upgrade to Team for free via GitHub Education"
          }), ".\n", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://education.github.com/globalcampus/teacher",
            children: "https://education.github.com/globalcampus/teacher"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Aktivuj – odteraz má organizácia ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "GitHub Team plan zadarmo"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Upgrade to GitHubH Team",
        src: (__webpack_require__(53036)/* ["default"] */ .A) + "",
        width: "2584",
        height: "1970"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kontrola-aktivácie",
      children: "Kontrola aktivácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Na screenshote je vidno 0€/mesiac, inak by tam bolo 4€/mesiac"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Step 2 - Kontrola aktivácie",
        src: (__webpack_require__(39995)/* ["default"] */ .A) + "",
        width: "2568",
        height: "1842"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Využitie podľa repozitárov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Step 3 - Kontrola aktivácie 2",
        src: (__webpack_require__(78016)/* ["default"] */ .A) + "",
        width: "1718",
        height: "762"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vidno-že-poplatky-za-používanie-nejaké-sa-priebežne-počítajú-ale-mne-sa-nebudú-účtovať-lebo-benefity",
      children: "Vidno, že poplatky za používanie nejaké sa priebežne počítajú, ale mne sa nebudú účtovať, lebo benefity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-aktivácia-copilot-pro-kupónu",
      children: "2. Aktivácia Copilot Pro kupónu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Vráť sa do ", (0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/settings/education/benefits",
            children: "Education Benefits"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Klikni na odkaz „To redeem your Copilot Pro coupon, please sign up via this link“."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Vráť sa a nájdi linku na Copilot coupon ",
        src: (__webpack_require__(73500)/* ["default"] */ .A) + "",
        width: "2556",
        height: "1718"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Upgrade to Copilot Team."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Upgrade to Copilot",
        src: (__webpack_require__(53036)/* ["default"] */ .A) + "",
        width: "2584",
        height: "1970"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - step 01"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-01",
        src: (__webpack_require__(3495)/* ["default"] */ .A) + "",
        width: "2552",
        height: "1620"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - step 02"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-02",
        src: (__webpack_require__(52812)/* ["default"] */ .A) + "",
        width: "2570",
        height: "1948"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - Step 03"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-03",
        src: (__webpack_require__(64437)/* ["default"] */ .A) + "",
        width: "1778",
        height: "1762"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - Step 04"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-04",
        src: (__webpack_require__(96026)/* ["default"] */ .A) + "",
        width: "1362",
        height: "490"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - Step 05"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-05",
        src: (__webpack_require__(2211)/* ["default"] */ .A) + "",
        width: "1430",
        height: "2596"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - Step 06"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-06",
        src: (__webpack_require__(61476)/* ["default"] */ .A) + "",
        width: "2570",
        height: "2530"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot - Step 07"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-07",
        src: (__webpack_require__(52890)/* ["default"] */ .A) + "",
        width: "2564",
        height: "1960"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "získané-vlastnosti",
      children: "Získané vlastnosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/settings/copilot/features",
        children: "https://github.com/settings/copilot/features"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kontrola-statusu",
      children: "3. Kontrola statusu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prejdi na ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/settings/education/benefits",
          children: "https://github.com/settings/education/benefits"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Mal by svietiť zelený status ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Approved"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-výhody-po-aktivácii",
      children: "🎉 Výhody po aktivácii"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Team plan pre organizácie zdarma (private repo, Actions minutes, Pages builds)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot Pro pre teba a možnosť kupónov pre študentov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partnerské benefity (JetBrains, Canva EDU, DigitalOcean credits ...)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ďaľšie-informácie",
      children: "📌 Ďaľšie informácie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://docs.github.com/en/copilot",
        children: "https://docs.github.com/en/copilot"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Copilot-08-Documentation",
        src: (__webpack_require__(99419)/* ["default"] */ .A) + "",
        width: "2588",
        height: "1726"
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



/***/ }),

/***/ 52812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-02-7ce39cd69a206604ca1fc370e91e3c2b.png");

/***/ }),

/***/ 52890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-07-VSC-1e5be76c3550745dd98ef59b22880f4a.png");

/***/ }),

/***/ 53036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GH-UpgradeToGHTEAM-101fa174bcff82618f8312c74baf0d5c.png");

/***/ }),

/***/ 61476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-05-IDE-2c44353dc8fa63f0f45b482161982cb1.png");

/***/ }),

/***/ 64437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-03-ea368ca0f69cbb0925c01e23257effac.png");

/***/ }),

/***/ 73500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GH-Benefits-Details-3469f675f56179ff89147bc559fc15a5.png");

/***/ }),

/***/ 78016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Check_bill-02-d00d91862c2e0028f1ba8454efdf63b9.png");

/***/ }),

/***/ 96026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-04-adf0d5e6312500cf36fb88d2dafb117e.png");

/***/ }),

/***/ 99419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Copilot-08-Documentation-feeda6a18665e7bcc8d24336c901edd2.png");

/***/ })

}]);