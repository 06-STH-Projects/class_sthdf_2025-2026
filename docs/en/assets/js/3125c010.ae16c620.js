"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[50066],{

/***/ 13860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GHEDU-HomePage-b249656f67d3285059f445d4e0094004.png");

/***/ }),

/***/ 17194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Link-GHE-Dashboard-a162867253d05c4e3059360ee8838b5d.png");

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

/***/ 47397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000084_ako_aktivovat_na_githube_edu_benefity_ghedu_faculty_benefits_md_312_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000084-ako-aktivovat-na-githube-edu-benefity-ghedu-faculty-benefits-md-312.json
const site_docs_sk_knifes_k_000084_ako_aktivovat_na_githube_edu_benefity_ghedu_faculty_benefits_md_312_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_01","title":"KNIFE – K000084_01","description":"-","source":"@site/docs/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/GHEDU_Faculty_Benefits.md","sourceDirName":"sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity","slug":"/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_01","permalink":"/en/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_01","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"-","permalink":"/en/docs/tags"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000084_01","guid":"86b73fab-96ed-432b-aeb6-e262b378aa27","dao":"knife","title":"KNIFE – K000084_01","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"deliverable","type":"knife","priority":"no","tags":["-"],"locale":"sk","created":"2025-09-26","modified":"2025-09-26","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Educational content. Use at your own risk.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"KNIFE – K000084_02","permalink":"/en/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/K000084_02"},"next":{"title":"titul-Ako komunikovať s porozumením","permalink":"/en/sk/knifes/Ako-komunikova-s-porozumen-mE/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000084-ako-aktivovat-na-githube-edu-benefity/GHEDU_Faculty_Benefits.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000084_01',
	guid: '86b73fab-96ed-432b-aeb6-e262b378aa27',
	dao: 'knife',
	title: 'KNIFE – K000084_01',
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
const contentTitle = 'Aktivácia GitHub Education Faculty Benefits';

const assets = {

};



const toc = [{
  "value": "1. Otvor portál GitHub Education",
  "id": "1-otvor-portál-github-education",
  "level": 2
}, {
  "value": "Linka na GItBenefit Dashboard",
  "id": "linka-na-gitbenefit-dashboard",
  "level": 3
}, {
  "value": "2. Vyber svoj status",
  "id": "2-vyber-svoj-status",
  "level": 2
}, {
  "value": "3. Vyplň žiadosť",
  "id": "3-vyplň-žiadosť",
  "level": 2
}, {
  "value": "4. Overenie identity",
  "id": "4-overenie-identity",
  "level": 2
}, {
  "value": "5. Aktivácia v organizácii",
  "id": "5-aktivácia-v-organizácii",
  "level": 2
}, {
  "value": "6. Kontrola",
  "id": "6-kontrola",
  "level": 2
}, {
  "value": "alt text",
  "id": "alt-text",
  "level": 2
}, {
  "value": "🎉 Hotovo!",
  "id": "-hotovo",
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
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "aktivácia-github-education-faculty-benefits",
        children: "Aktivácia GitHub Education Faculty Benefits"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "86b73fab-96ed-432b-aeb6-e262b378aa27"
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
      id: "1-otvor-portál-github-education",
      children: "1. Otvor portál GitHub Education"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["👉 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://education.github.com/benefits",
        children: "https://education.github.com/benefits"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Step 1 - GitHub Education homepage",
        src: (__webpack_require__(13860)/* ["default"] */ .A) + "",
        width: "2570",
        height: "1734"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "linka-na-gitbenefit-dashboard",
      children: "Linka na GItBenefit Dashboard"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Klikni ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Get benefits"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-vyber-svoj-status",
      children: "2. Vyber svoj status"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zvoľ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Teacher"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "img/step2.png",
        alt: "Step 2 – Choose Teacher"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-vyplň-žiadosť",
      children: "3. Vyplň žiadosť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prihlás sa svojím GitHub účtom."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zadaj univerzitný e-mail (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@stuba.sk"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prilož dôkaz (link na web univerzity, scan preukazu, syllabus)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "img/step3.png",
        alt: "Step 3 – Form"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-overenie-identity",
      children: "4. Overenie identity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub tím manuálne overí údaje (2–14 dní)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Dostaneš e-mail ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "“Your GitHub Education benefits are active”"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "img/step4.png",
        alt: "Step 4 – Email confirmation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-aktivácia-v-organizácii",
      children: "5. Aktivácia v organizácii"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Upgrade to Team for free (via GitHub Education)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Step 5 – Upgrade org plan",
        src: (__webpack_require__(17194)/* ["default"] */ .A) + "",
        width: "2548",
        height: "1732"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-kontrola",
      children: "6. Kontrola"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Billing & plans → GitHub Education"
        }), " vidíš svoj status."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V GitHub Classroom máš „Faculty verified“ badge."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://education.github.com/globalcampus/teacher",
          children: "https://education.github.com/globalcampus/teacher"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Step 6 – Welcome paged",
        src: (__webpack_require__(93817)/* ["default"] */ .A) + "",
        width: "2580",
        height: "2538"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Na tejto stránke sa dajú pridávť jednotlivé organizácie a im podriadené repozitáre do GitHubTeam."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "alt-text",
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "alt text",
        src: (__webpack_require__(56116)/* ["default"] */ .A) + "",
        width: "1008",
        height: "694"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hotovo",
      children: "🎉 Hotovo!"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Teraz máš:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Team plan pre organizácie zdarma"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copilot Pro kupóny"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vyššie limity Actions & Pages"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ďalšie partnerské benefity"
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

/***/ 56116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/UPdateOrganisationToGHTeam-eabc5e610337e2a09320245da27baf13.png");

/***/ }),

/***/ 93817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/WelcomePage-GHB-45d5584e1da0b4f9008343eb2ce322f4.png");

/***/ })

}]);