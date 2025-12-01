"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[44909],{

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

/***/ 57988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_sthdf_2025_st_010_students_deliverables_index_md_52a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-sthdf-2025-st-010-students-deliverables-index-md-52a.json
const site_docs_sk_sthdf_2025_st_010_students_deliverables_index_md_52a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/sthdf/ST_010/students/deliverables/index","title":"deliverables","description":"{{DESCRIPTION}}","source":"@site/docs/sk/sthdf/2025_ST_010/students/deliverables/index.md","sourceDirName":"sk/sthdf/2025_ST_010/students/deliverables","slug":"/sk/sthdf/ST_010/students/deliverables/","permalink":"/sk/sthdf/ST_010/students/deliverables/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T19:46:59.268190+00:00","fm_version_comment":"","guid":"43949005-606e-4e69-aeb3-c145771e5f23","dao":"sthdf","title":"deliverables","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-24 20:46","modified":"2025-11-24 20:46","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"students","permalink":"/sk/sthdf/ST_010/students/"},"next":{"title":"01 about me","permalink":"/sk/sthdf/ST_010/students/deliverables/about-me"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/sthdf/2025_ST_010/students/deliverables/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T19:46:59.268190+00:00',
	fm_version_comment: '',
	guid: '43949005-606e-4e69-aeb3-c145771e5f23',
	dao: 'sthdf',
	title: 'deliverables',
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
	created: '2025-11-24 20:46',
	modified: '2025-11-24 20:46',
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
const contentTitle = 'Študentské deliverables';

const assets = {

};



const toc = [{
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}, {
  "value": "Rýchly checklist",
  "id": "rýchly-checklist",
  "level": 2
}, {
  "value": "Ako odovzdávať (mini-návod)",
  "id": "ako-odovzdávať-mini-návod",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia-1",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "študentské-deliverables",
        children: "Študentské deliverables"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Toto je študentský rozcestník k povinným výstupom. Text v tejto sekcii si ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "môže študent upraviť"
      }), " (napr. krátky kontext, link na repo, poznámky)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nižšie nájdeš rýchle odkazy na všetky povinné výstupy. Odkazy sú ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relatívne"
      }), ", takže štruktúru môžeš neskôr presúvať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧑‍🎓 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A1 – About me:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/about-me",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧩 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A2 – Knowledge Contribution (KNIFE):"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/knowledge-contribution",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🧭 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A3 – Project Summary:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/project-summary",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🏁 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A4 – Project Outcomes:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/project-outcomes",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎤 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "05 – Pitch Presentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/pitch_presentation",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🎬 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "06 – Final Presentation:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/final_presentation",
          children: "otvor"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🪞 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "07 – Reflexia:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/deliverables/reflexia",
          children: "otvor"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["ℹ️ Poznámka k ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A2 – Knowledge Contribution"
        }), ": Toto deliverable je v systéme reprezentované ako ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "KNIFE"
        }), " (štandardná šablóna KNIFE s vlastným FM a procesom). Tento index odkazuje na A2 súbor, ktorý smeruje na príslušný KNIFE podľa pokynov kurzu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rýchly-checklist",
      children: "Rýchly checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A1 vyplnené"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A2 (KNIFE) publikované / referencované"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A3 schválené učiteľom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "A4 doplnené o odkazy (repo, video, demo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pitch hotový (5–7 min)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Finálna prezentácia hotová (10–12 min)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Reflexia pridaná"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ako-odovzdávať-mini-návod",
      children: "Ako odovzdávať (mini-návod)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otvor príslušnú stránku (A1–A4, 05–07) a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "doplň obsah"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pridaj odkazy na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "repozitár, video a demo"
        }), " (ak máš)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ulož zmeny, commitni a pushni:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "git add .\ngit commit -m \"Update deliverables\"\ngit push\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia-1",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["↩️ ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/sthdf/ST_010/students/",
          children: "Späť na študenta"
        })]
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