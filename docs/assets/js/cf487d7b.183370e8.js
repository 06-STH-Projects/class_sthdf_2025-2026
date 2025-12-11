"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[14526],{

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

/***/ 33490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_index_md_cf4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-index-md-cf4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_index_md_cf4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST_INDEX","title":"ID generuje CLI / skript","description":"-----------------------------------------------------","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST_INDEX.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST_INDEX","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST_INDEX","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.764756+00:00","title":"ID generuje CLI / skript","fm_version_comment":"","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"9. Reflexia a spätná väzba","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST060/deliverables/reflexia"},"next":{"title":"CLASS STHDF Dashboard","permalink":"/sk/class_sthdf_dashboard/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST_INDEX.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.764756+00:00',
	title: 'ID generuje CLI / skript',
	fm_version_comment: '',
	locale: 'sk'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "fm_reserved1: &quot;&quot;\nfm_reserved2: &quot;&quot;",
  "id": "fm_reserved1-fm_reserved2-",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "id-generuje-cli--skript",
      children: "ID generuje CLI / skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "unikátne-uuid--generuje-skript",
      children: "Unikátne UUID – generuje skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "guid: \"f90b0a3e-a87a-4fe0-937b-f22571043f5c\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-context----------------------------------------------------------",
      children: "🧭 CONTEXT ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "dao--doména-knife-sdlc-q12-7ds-dopĺňa-skript",
      children: "DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dao: \"class_sthdf_dashboard\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "názov-zápisu--dopĺňa-používateľ",
      children: "Názov zápisu – dopĺňa používateľ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "title: \"ST INDEX\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "krátky-popis--dopĺňa-používateľ-voliteľné",
      children: "Krátky popis – dopĺňa používateľ (voliteľné)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description: \"DESCRIPTION\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-authorship-------------------------------------------------------",
      children: "👥 AUTHORSHIP ------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "hlavný-autor--z-globálneho-configu",
      children: "Hlavný autor – z globálneho configu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "author: \"Roman Kazicka\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "zoznam-autorov--generuje-skript",
      children: "Zoznam autorov – generuje skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "authors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Roman Kazicka\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-classification----------------------------------------------------",
      children: "🗂 CLASSIFICATION ---------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "nadradená-kategória--môže-doplniť-používateľ",
      children: "Nadradená kategória – môže doplniť používateľ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "category: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "typ-dokumentu-guide-case-tutorial--používateľ-voliteľné",
      children: "Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "priorita-lowmediumhigh--voliteľné",
      children: "Priorita (low/medium/high) – voliteľné"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "priority: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "tagy--odporúča-sa-26-tagov",
      children: "Tagy – odporúča sa 2–6 tagov."
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "typy-tagov",
      children: "Typy tagov:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "--rámce-knife-7ds-sdlc-q12",
      children: "- rámce: knife, 7ds, sdlc, q12"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "--účel-tutorial-guide-pattern-case-study",
      children: "- účel: tutorial, guide, pattern, case-study"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "--téma-git-backup-ai-communication",
      children: "- téma: git, backup, ai, communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "--úroveň-beginner-intermediate-advanced",
      children: "- úroveň: beginner, intermediate, advanced"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tags: []"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-localization------------------------------------------------------",
      children: "🌍 LOCALIZATION -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "jazyk-dokumentu--doplní-skript-podľa-štruktúry",
      children: "Jazyk dokumentu – doplní skript podľa štruktúry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "locale: \"sk\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-lifecycle---------------------------------------------------------",
      children: "🕒 LIFECYCLE --------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "dátum-vytvorenia--generuje-skript",
      children: "Dátum vytvorenia – generuje skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "created: \"2025-11-28 16:54\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "dátum-poslednej-úpravy--dopĺňa-človek",
      children: "Dátum poslednej úpravy – dopĺňa človek"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "modified: \"2025-11-28 16:54\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "stav-dokumentu--default-backlog",
      children: "Stav dokumentu – default \"backlog\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "status: \"backlog\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "viditeľnosť--default-public",
      children: "Viditeľnosť – default \"public\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "privacy: \"public\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-intellectual-property--------------------------------------------",
      children: "⚖ INTELLECTUAL PROPERTY -------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "držiteľ-práv-k-obsahu--dopĺňa-skript",
      children: "Držiteľ práv k obsahu – dopĺňa skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rights_holder_content: \"Roman Kazicka\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "systémový-vlastník-práv",
      children: "Systémový vlastník práv"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "rights_holder_system: \"CAA / KNIFE / LetItGrow\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "licencia",
      children: "Licencia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "license: \"CC-BY-NC-SA-4.0\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "disclaimer",
      children: "Disclaimer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "disclaimer: \"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "copyright",
      children: "Copyright"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "copyright: \"© 2025 Roman Kazicka\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-origin--provenance----------------------------------------------",
      children: "🔗 ORIGIN / PROVENANCE ---------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "repozitár-pôvodu",
      children: "Repozitár pôvodu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_repo: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "url-pôvodného-repozitára",
      children: "URL pôvodného repozitára"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_repo_url: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "commit-pôvodu",
      children: "Commit pôvodu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_commit: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "branch-pôvodu",
      children: "Branch pôvodu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_branch: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "systém-pôvodu-caaknifesthdf",
      children: "Systém pôvodu (CAA/KNIFE/STHDF…)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_system: \"CAA\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "pôvodný-autor",
      children: "Pôvodný autor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_author: \"Roman Kazicka\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "importovaný-zdroj",
      children: "Importovaný zdroj"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_imported_from: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "dátum-importu",
      children: "Dátum importu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "origin_import_date: \"\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-reserved----------------------------------------------------------",
      children: "🧱 RESERVED ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fm_reserved1-fm_reserved2-",
      children: "fm_reserved1: \"\"\nfm_reserved2: \"\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST001/",
          children: "ST001"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST002/",
          children: "ST002"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST003/",
          children: "ST003"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST004/",
          children: "ST004"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST005/",
          children: "ST005"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST006/",
          children: "ST006"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/",
          children: "ST007"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST008/",
          children: "ST008"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST009/",
          children: "ST009"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST010/",
          children: "ST010"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST011/",
          children: "ST011"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST012/",
          children: "ST012"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST013/",
          children: "ST013"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST014/",
          children: "ST014"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST015/",
          children: "ST015"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST016/",
          children: "ST016"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST017/",
          children: "ST017"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST018/",
          children: "ST018"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST019/",
          children: "ST019"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST020/",
          children: "ST020"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST021/",
          children: "ST021"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST022/",
          children: "ST022"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/",
          children: "ST023"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST024/",
          children: "ST024"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST025/",
          children: "ST025"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST026/",
          children: "ST026"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST027/",
          children: "ST027"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST028/",
          children: "ST028"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST029/",
          children: "ST029"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST030/",
          children: "ST030"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST031/",
          children: "ST031"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST032/",
          children: "ST032"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST033/",
          children: "ST033"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/",
          children: "ST034"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST035/",
          children: "ST035"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST036/",
          children: "ST036"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST037/",
          children: "ST037"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/",
          children: "ST038"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST039/",
          children: "ST039"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST040/",
          children: "ST040"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST041/",
          children: "ST041"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST042/",
          children: "ST042"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST043/",
          children: "ST043"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST044/",
          children: "ST044"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/",
          children: "ST045"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST046/",
          children: "ST046"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST047/",
          children: "ST047"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST048/",
          children: "ST048"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST049/",
          children: "ST049"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST050/",
          children: "ST050"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST051/",
          children: "ST051"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST052/",
          children: "ST052"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST053/",
          children: "ST053"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST054/",
          children: "ST054"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST055/",
          children: "ST055"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST056/",
          children: "ST056"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST057/",
          children: "ST057"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST058/",
          children: "ST058"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST059/",
          children: "ST059"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST060/",
          children: "ST060"
        })
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