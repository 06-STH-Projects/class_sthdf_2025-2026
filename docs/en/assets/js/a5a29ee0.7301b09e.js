"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[31953],{

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

/***/ 58833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_037_deliverables_01_about_me_md_a5a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-037-deliverables-01-about-me-md-a5a.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_037_deliverables_01_about_me_md_a5a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/about-me","title":"ST_037-about me","description":"DESCRIPTION","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/about-me","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/about-me","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.858527+00:00","fm_version_comment":"","guid":"4dd1c940-86a6-441f-8c73-81cd3cb1f5ab","dao":"class_sthdf_dashboard","title":"ST_037-about me","description":"DESCRIPTION","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Študentské deliverables","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/"},"next":{"title":"📚 Knowledge Contribution","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST037/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.858527+00:00',
	fm_version_comment: '',
	guid: '4dd1c940-86a6-441f-8c73-81cd3cb1f5ab',
	dao: 'class_sthdf_dashboard',
	title: 'ST_037-about me',
	description: 'DESCRIPTION',
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
const contentTitle = 'ST037 - 🙋‍♂️ About Me';

const assets = {

};



const toc = [{
  "value": "💼 Work Experience",
  "id": "-work-experience",
  "level": 2
}, {
  "value": "<strong>Data Engineer — Dell s.r.o.</strong>",
  "id": "data-engineer--dell-sro",
  "level": 3
}, {
  "value": "<strong>Barman / Barista — KC Dunaj – Únik</strong>",
  "id": "barman--barista--kc-dunaj--únik",
  "level": 3
}, {
  "value": "<strong>Barman / Barista / Čašník — Fontaine d’ior Trenčín</strong>",
  "id": "barman--barista--čašník--fontaine-dior-trenčín",
  "level": 3
}, {
  "value": "<strong>Hokejový brankár / Tréner brankárov — Zimný štadión Mariana Gáboríka</strong>",
  "id": "hokejový-brankár--tréner-brankárov--zimný-štadión-mariana-gáboríka",
  "level": 3
}, {
  "value": "🎓 Education",
  "id": "-education",
  "level": 2
}, {
  "value": "<strong>Slovenská technická univerzita v Bratislave — FIIT</strong>",
  "id": "slovenská-technická-univerzita-v-bratislave--fiit",
  "level": 3
}, {
  "value": "<strong>Slovenská technická univerzita v Bratislave — FIIT</strong>",
  "id": "slovenská-technická-univerzita-v-bratislave--fiit-1",
  "level": 3
}, {
  "value": "<strong>Piaristické gymnázium Jozefa Braneckého</strong>",
  "id": "piaristické-gymnázium-jozefa-braneckého",
  "level": 3
}, {
  "value": "🧠 Courses &amp; Certificates",
  "id": "-courses--certificates",
  "level": 2
}, {
  "value": "🌐 Languages",
  "id": "-languages",
  "level": 2
}, {
  "value": "🎨 Interests &amp; Hobbies",
  "id": "-interests--hobbies",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "st037---️-about-me",
        children: "ST037 - 🙋‍♂️ About Me"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ahojte!\nVolám sa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Oliver"
      }), " a momentálne sa venujem dátovému inžinierstvu a automatizácii. Veľmi rád by som sa naučil tvoriť ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3D objekty"
      }), " a pracovať s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "3D tlačou"
      }), ", aby som si vedel vyrábať vlastné pomôcky, ktoré mi uľahčia život."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Popri práci kreslím, trénujem ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "thajský box"
      }), " a hrám ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ľadový hokej"
      }), " ako brankár v amatérskej lige. Mojím cieľom je pretvoriť svoje 2D kresby do 3D podoby."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-work-experience",
      children: "💼 Work Experience"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-engineer--dell-sro",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Data Engineer — Dell s.r.o."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Bratislava, Slovak Republic / Február 2024 – Doteraz"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Návrh a vývoj SQL queries podľa požiadaviek procesov"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vývoj a skriptovanie ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Jira automatizácií"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vývoj a testovanie interného ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "RAG Chatbota"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skúsenosti s: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "AirFlow, Confluence, Python, SQL, GreenPlum, Teradata, PMC, MSSQL, Linux, Docker, Kubernetes, API"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barman--barista--kc-dunaj--únik",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Barman / Barista — KC Dunaj – Únik"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Bratislava, Slovak Republic / Apríl 2022 – Jún 2024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "barman--barista--čašník--fontaine-dior-trenčín",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Barman / Barista / Čašník — Fontaine d’ior Trenčín"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Trenčín, Slovak Republic / Január 2018 – Marec 2022"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hokejový-brankár--tréner-brankárov--zimný-štadión-mariana-gáboríka",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hokejový brankár / Tréner brankárov — Zimný štadión Mariana Gáboríka"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Trenčín, Slovak Republic / Jún 2018 – August 2018"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Návrh, výkon a vedenie tréningov brankárov na ľade aj mimo ľadu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vedenie strečingových a regeneračných cvičení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tvorba Hand-Eye koordinačných cvičení pre všetky vekové kategórie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-education",
      children: "🎓 Education"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slovenská-technická-univerzita-v-bratislave--fiit",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Slovenská technická univerzita v Bratislave — FIIT"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Intelligent Software Systems (Ing.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "2024 – Currently"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slovenská-technická-univerzita-v-bratislave--fiit-1",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Slovenská technická univerzita v Bratislave — FIIT"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Informatics (Bc.)"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "October 2021 – June 2024"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "piaristické-gymnázium-jozefa-braneckého",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Piaristické gymnázium Jozefa Braneckého"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Trenčín, Slovak Republic / 2016 – 2020"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-courses--certificates",
      children: "🧠 Courses & Certificates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prvá pomoc"
        }), " — V.A.J.A.K. (2018)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LEVELUP: Game Development Oriented C# Programming"
        }), " — hemisfera s.r.o. (2021)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google AI Essentials"
        }), " — Google (2025)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google Prompting Essentials"
        }), " — Google (2025)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-languages",
      children: "🌐 Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Slovak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proficiency (C2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "English"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upper-intermediate (B2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Russian"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intermediate (B1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elementary (A2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Japanese"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginner (A1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-interests--hobbies",
      children: "🎨 Interests & Hobbies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Painting, drawing, doodling, designing, custom clothing, martial arts, graffiti, mobility & conditioning training, skating, ice hockey, biking, basketball, cooking, bartending, latte art, gaming."
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