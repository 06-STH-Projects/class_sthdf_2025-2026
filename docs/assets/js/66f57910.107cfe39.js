"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[70419],{

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

/***/ 89689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_index_md_66f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-index-md-66f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_index_md_66f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ_INDEX","title":"PRJ INDEX","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ_INDEX.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ_INDEX","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ_INDEX","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.761055+00:00","fm_version_comment":"","guid":"6c096e20-bab6-433d-a905-71117383b941","dao":"class_sthdf_dashboard","title":"PRJ INDEX","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"09 Change Management","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ030/sdlc/Change-Management/"},"next":{"title":"ST001","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ_INDEX.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.761055+00:00',
	fm_version_comment: '',
	guid: '6c096e20-bab6-433d-a905-71117383b941',
	dao: 'class_sthdf_dashboard',
	title: 'PRJ INDEX',
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
const contentTitle = 'Prehľad semestrálnych projektov s školsom roku 2025-2026';

const assets = {

};



const toc = [{
  "value": "PRJ001 — Introduction",
  "id": "prj001--introduction",
  "level": 2
}, {
  "value": "PRJ002 — Introduction",
  "id": "prj002--introduction",
  "level": 2
}, {
  "value": "PRJ003 — Introduction",
  "id": "prj003--introduction",
  "level": 2
}, {
  "value": "PRJ004 — Introduction",
  "id": "prj004--introduction",
  "level": 2
}, {
  "value": "PRJ005 — Introduction",
  "id": "prj005--introduction",
  "level": 2
}, {
  "value": "PRJ006 — Introduction",
  "id": "prj006--introduction",
  "level": 2
}, {
  "value": "PRJ007 — Introduction",
  "id": "prj007--introduction",
  "level": 2
}, {
  "value": "PRJ008 — Introduction",
  "id": "prj008--introduction",
  "level": 2
}, {
  "value": "PRJ009 — Introduction",
  "id": "prj009--introduction",
  "level": 2
}, {
  "value": "PRJ010 — Introduction",
  "id": "prj010--introduction",
  "level": 2
}, {
  "value": "PRJ011 — Introduction",
  "id": "prj011--introduction",
  "level": 2
}, {
  "value": "PRJ012 — Introduction",
  "id": "prj012--introduction",
  "level": 2
}, {
  "value": "PRJ013 — Introduction",
  "id": "prj013--introduction",
  "level": 2
}, {
  "value": "PRJ014 — Introduction",
  "id": "prj014--introduction",
  "level": 2
}, {
  "value": "PRJ015 — Introduction",
  "id": "prj015--introduction",
  "level": 2
}, {
  "value": "PRJ016 — Introduction",
  "id": "prj016--introduction",
  "level": 2
}, {
  "value": "PRJ017 — Introduction",
  "id": "prj017--introduction",
  "level": 2
}, {
  "value": "PRJ018 — Introduction",
  "id": "prj018--introduction",
  "level": 2
}, {
  "value": "PRJ019 — Introduction",
  "id": "prj019--introduction",
  "level": 2
}, {
  "value": "PRJ020 — Introduction",
  "id": "prj020--introduction",
  "level": 2
}, {
  "value": "PRJ021 — Introduction",
  "id": "prj021--introduction",
  "level": 2
}, {
  "value": "PRJ022 — Introduction",
  "id": "prj022--introduction",
  "level": 2
}, {
  "value": "PRJ023 — Introduction",
  "id": "prj023--introduction",
  "level": 2
}, {
  "value": "PRJ024 — Introduction",
  "id": "prj024--introduction",
  "level": 2
}, {
  "value": "PRJ025 — Introduction",
  "id": "prj025--introduction",
  "level": 2
}, {
  "value": "PRJ026 — Introduction",
  "id": "prj026--introduction",
  "level": 2
}, {
  "value": "PRJ027 — Introduction",
  "id": "prj027--introduction",
  "level": 2
}, {
  "value": "PRJ028 — Introduction",
  "id": "prj028--introduction",
  "level": 2
}, {
  "value": "PRJ029 — Introduction",
  "id": "prj029--introduction",
  "level": 2
}, {
  "value": "PRJ030 — Introduction",
  "id": "prj030--introduction",
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
        id: "prehľad-semestrálnych-projektov-s-školsom-roku-2025-2026",
        children: "Prehľad semestrálnych projektov s školsom roku 2025-2026"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/",
          children: "PRJ001"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/",
          children: "PRJ002"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ003/",
          children: "PRJ003"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/",
          children: "PRJ004"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ005/",
          children: "PRJ005"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/",
          children: "PRJ006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/",
          children: "PRJ007"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ008/",
          children: "PRJ008"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ009/",
          children: "PRJ009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/",
          children: "PRJ010"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/",
          children: "PRJ011"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/",
          children: "PRJ012"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/",
          children: "PRJ013"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/",
          children: "PRJ014"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ015/",
          children: "PRJ015"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/",
          children: "PRJ016"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/",
          children: "PRJ017"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ018/",
          children: "PRJ018"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/",
          children: "PRJ019"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/",
          children: "PRJ020"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/",
          children: "PRJ021"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ022/",
          children: "PRJ022"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
          children: "PRJ023"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ024/",
          children: "PRJ024"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
          children: "PRJ025"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ026/",
          children: "PRJ026"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ027/",
          children: "PRJ027"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/",
          children: "PRJ028"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ029/",
          children: "PRJ029"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ030/",
          children: "PRJ030"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj001--introduction",
      children: "PRJ001 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-001-ST_001-ST_001-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ001/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj002--introduction",
      children: "PRJ002 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-002-ST_002-ST_002-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ002/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj003--introduction",
      children: "PRJ003 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-003-ST_003-ST_003-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ003/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj004--introduction",
      children: "PRJ004 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-004-ST_004-ST_004-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ004/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj005--introduction",
      children: "PRJ005 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-005-ST_005-ST_005-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ005/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj006--introduction",
      children: "PRJ006 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-006-ST_006-ST_006-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ006/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj007--introduction",
      children: "PRJ007 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-007-ST_007-ST_007-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ007/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj008--introduction",
      children: "PRJ008 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-008-ST_008-ST_008-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ008/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj009--introduction",
      children: "PRJ009 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-009-ST_009-ST_009-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ009/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj010--introduction",
      children: "PRJ010 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-010-ST_010-ST_010-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ010/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj011--introduction",
      children: "PRJ011 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-011-ST_011-ST_011-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ011/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj012--introduction",
      children: "PRJ012 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-012-ST_012-ST_012-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj013--introduction",
      children: "PRJ013 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-013-ST_013-ST_013-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj014--introduction",
      children: "PRJ014 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-014-ST_014-ST_014-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj015--introduction",
      children: "PRJ015 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-015-ST_015-ST_015-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ015/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj016--introduction",
      children: "PRJ016 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-016-ST_016-ST_016-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ016/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj017--introduction",
      children: "PRJ017 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-017-ST_017-ST_017-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ017/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj018--introduction",
      children: "PRJ018 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-018-ST_018-ST_018-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ018/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj019--introduction",
      children: "PRJ019 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-019-ST_019-ST_019-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj020--introduction",
      children: "PRJ020 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-020-ST_020-ST_020-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj021--introduction",
      children: "PRJ021 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-021-ST_021-ST_021-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ021/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj022--introduction",
      children: "PRJ022 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-022-ST_022-ST_022-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ022/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj023--introduction",
      children: "PRJ023 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-023-ST_023-ST_023-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj024--introduction",
      children: "PRJ024 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-024-ST_024-ST_024-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ024/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj025--introduction",
      children: "PRJ025 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-025-ST_025-ST_025-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj026--introduction",
      children: "PRJ026 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-026-ST_026-ST_026-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ026/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj027--introduction",
      children: "PRJ027 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-027-ST_027-ST_027-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ027/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj028--introduction",
      children: "PRJ028 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-028-ST_028-ST_028-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ028/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj029--introduction",
      children: "PRJ029 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-029-ST_029-ST_029-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ029/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prj030--introduction",
      children: "PRJ030 — Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-030-ST_030-ST_030-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strucny text o projekte (zhrnutie zadania + prinos)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ030/presentation/slides",
        children: "Prezentacia"
      }), "\n--- introduction ---"]
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