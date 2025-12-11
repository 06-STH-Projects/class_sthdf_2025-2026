"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[19901],{

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

/***/ 31348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_01_about_me_md_80c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-01-about-me-md-80c.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_01_about_me_md_80c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me","title":"ID generuje CLI / skript","description":"-----------------------------------------------------","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T15:50:07.130106+00:00","title":"ID generuje CLI / skript","fm_version_comment":"","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"Študentské deliverables","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/"},"next":{"title":"ID generuje CLI / skript","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T15:50:07.130106+00:00',
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
}, {
  "value": "🔖 Základné informácie",
  "id": "-základné-informácie",
  "level": 2
}, {
  "value": "🎯 Profesijné záujmy",
  "id": "-profesijné-záujmy",
  "level": 2
}, {
  "value": "💡 Moje hobby / záujmy",
  "id": "-moje-hobby--záujmy",
  "level": 2
}, {
  "value": "🚀 Očakávania od predmetu",
  "id": "-očakávania-od-predmetu",
  "level": 2
}, {
  "value": "🚀 Čo viem ponúknuť",
  "id": "-čo-viem-ponúknuť",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
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
      children: "guid: \"33bf8f36-a806-48b5-92fa-24694a2b22cf\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-context----------------------------------------------------------",
      children: "🧭 CONTEXT ---------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "dao--doména-knife-sdlc-q12-7ds-dopĺňa-skript",
      children: "DAO / doména (knife, sdlc, q12, 7ds...) dopĺňa skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "dao: \"sthdf\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "názov-zápisu--dopĺňa-používateľ",
      children: "Názov zápisu – dopĺňa používateľ"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "title: \"2025_ST_038 – STHDF – Študent 038 (script)\""
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
      children: "author: \"Dominik Pallo\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "zoznam-autorov--generuje-skript",
      children: "Zoznam autorov – generuje skript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "authors:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Dominik Pallo\""
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
      children: "created: \"2025-11-24 16:50\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "dátum-poslednej-úpravy--dopĺňa-človek",
      children: "Dátum poslednej úpravy – dopĺňa človek"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "modified: \"2025-11-24 16:50\""
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
      children: "rights_holder_content: \"Dominik Pallo\""
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
      children: "copyright: \"© 2025 Dominik Pallo\""
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
      children: "origin_author: \"Dominik Pallo\""
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "🙋 About Me"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-základné-informácie",
      children: "🔖 Základné informácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Meno a priezvisko "
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študentský GitHub profil (link) "
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kontaktný e-mail "
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-profesijné-záujmy",
      children: "🎯 Profesijné záujmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Oblasti, ktoré ma bavia (IT, dizajn, podnikanie, …) "
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aké skúsenosti by som chcel získať "
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-moje-hobby--záujmy",
      children: "💡 Moje hobby / záujmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Šport, hudba, varenie, cestovanie … "
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čokoľvek, čo odhaľuje „ľudskú stránku“ "
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-očakávania-od-predmetu",
      children: "🚀 Očakávania od predmetu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo chcem dosiahnuť v rámci kurzu "
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo očakávam od spolupráce s tímom a komunitou "
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-viem-ponúknuť",
      children: "🚀 Čo viem ponúknuť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čo chcem ponúknuť v rámci kurzu "
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/",
          children: "↩️ Späť"
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