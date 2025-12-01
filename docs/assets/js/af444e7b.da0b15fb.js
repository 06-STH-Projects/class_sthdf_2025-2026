"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[58800],{

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

/***/ 67207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_github_classroom_class_room_projects_md_af4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-github-classroom-class-room-projects-md-af4.json
const site_docs_sk_help_howto_github_classroom_class_room_projects_md_af4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/github-classroom/ClassRoomProjects","title":"Ako pracovať s projektmi v GitHub Classroom (Group Assignments)","description":"Tento návod vysvetľuje, ako vytvárať a spravovať projektové repozitáre pre predmet STHDF pomocou funkcie Group Assignment v GitHub Classroom.","source":"@site/docs/sk/help/howto/github-classroom/ClassRoomProjects.md","sourceDirName":"sk/help/howto/github-classroom","slug":"/sk/help/howto/github-classroom/ClassRoomProjects","permalink":"/sk/help/howto/github-classroom/ClassRoomProjects","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Classroom – Onboarding pre študentov","permalink":"/sk/help/howto/github-classroom/ClassRoomOnboarding"},"next":{"title":"GitHub Classroom – Role a práca asistentov","permalink":"/sk/help/howto/github-classroom/GH-Class-Assistants"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/github-classroom/ClassRoomProjects.md


const frontMatter = {};
const contentTitle = 'Ako pracovať s projektmi v GitHub Classroom (Group Assignments)';

const assets = {

};



const toc = [{
  "value": "🎯 Ciele",
  "id": "-ciele",
  "level": 2
}, {
  "value": "🧩 Prečo Group Assignment",
  "id": "-prečo-group-assignment",
  "level": 2
}, {
  "value": "🏗️ Krok 1 — Vytvorenie názvov projektov",
  "id": "️-krok-1--vytvorenie-názvov-projektov",
  "level": 2
}, {
  "value": "🏛️ Krok 2 — Tvorba Group Assignmentu",
  "id": "️-krok-2--tvorba-group-assignmentu",
  "level": 2
}, {
  "value": "👥 Krok 3 — Vytvorenie skupín (tímov)",
  "id": "-krok-3--vytvorenie-skupín-tímov",
  "level": 2
}, {
  "value": "🚀 Krok 4 — Študentský onboarding",
  "id": "-krok-4--študentský-onboarding",
  "level": 2
}, {
  "value": "🔐 Otázky &amp; odpovede",
  "id": "-otázky--odpovede",
  "level": 2
}, {
  "value": "❓ Môže viac študentov vybrať ten istý projekt?",
  "id": "-môže-viac-študentov-vybrať-ten-istý-projekt",
  "level": 3
}, {
  "value": "❓ Dá sa tým zabrániť?",
  "id": "-dá-sa-tým-zabrániť",
  "level": 3
}, {
  "value": "❓ Môžem vytvoriť prázdny projekt bez študenta?",
  "id": "-môžem-vytvoriť-prázdny-projekt-bez-študenta",
  "level": 3
}, {
  "value": "❓ Čo ak sa dvaja mylne pridajú do iného projektu?",
  "id": "-čo-ak-sa-dvaja-mylne-pridajú-do-iného-projektu",
  "level": 3
}, {
  "value": "🏁 Krok 5 — Unifikácia názvov (ak treba)",
  "id": "-krok-5--unifikácia-názvov-ak-treba",
  "level": 2
}, {
  "value": "📘 Doporučený workflow pre školský rok",
  "id": "-doporučený-workflow-pre-školský-rok",
  "level": 2
}, {
  "value": "💬 Small Talk Moment",
  "id": "-small-talk-moment",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    br: "br",
    code: "code",
    em: "em",
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
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ako-pracovať-s-projektmi-v-github-classroom-group-assignments",
        children: "Ako pracovať s projektmi v GitHub Classroom (Group Assignments)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento návod vysvetľuje, ako vytvárať a spravovať ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "projektové repozitáre"
      }), " pre predmet STHDF pomocou funkcie ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Group Assignment"
      }), " v GitHub Classroom."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Používa sa pre situácie, kde ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "viac študentov pracuje na jednom projekte"
      }), " → teda ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1 projekt = 1 repozitár = N študentov"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ciele",
      children: "🎯 Ciele"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripraviť projekty s pevnými názvami (PRJ_001–PRJ_030)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Umožniť študentom, aby si vybrali svoj projekt pri vstupe do assignmentu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvoriť pre každý projekt ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jediný repozitár"
        }), ", ktorý môžu používať viacerí členovia tímu."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zabezpečiť konzistenciu názvov projektových repozitárov pre celý semester."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-prečo-group-assignment",
      children: "🧩 Prečo Group Assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GitHub Classroom podporuje dva režimy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Individual Assignment"
        }), " – 1 študent → 1 repo"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Group Assignment"
        }), " – 1 projekt → N študentov → 1 repo"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pre semestrálne tímy používame ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Group Assignment"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-krok-1--vytvorenie-názvov-projektov",
      children: "🏗️ Krok 1 — Vytvorenie názvov projektov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Priprav si zoznam projektových identifikátorov:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PRJ_001\nPRJ_002\nPRJ_003\n...\nPRJ_030\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tieto názvy budú predstavovať ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "projektové tímy"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Každý tím = jeden budúci projektový repozitár."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-krok-2--tvorba-group-assignmentu",
      children: "🏛️ Krok 2 — Tvorba Group Assignmentu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otvor GitHub Classroom."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyber svoju triedu (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "STHDF_2025_2026"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Klikni ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "New Assignment"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyber typ: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Group Assignment"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zadaj prefix názvu repozitára, napr.:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2025_PRJ\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tak vzniknú repozitáre:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2025_PRJ-PRJ_001\n2025_PRJ-PRJ_002\n...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-krok-3--vytvorenie-skupín-tímov",
      children: "👥 Krok 3 — Vytvorenie skupín (tímov)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V časti ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Groups"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vyber ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Create groups manually"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pridaj skupiny podľa vopred definovaných názvov:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PRJ_001"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PRJ_002"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "…"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PRJ_030"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Nastav parametre:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Group size:"
            }), " minimálne 1, maximálne 5 (alebo podľa predmetu)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Allow existing groups to be reused?"
            }), " → ", (0,jsx_runtime.jsx)(_components.em, {
              children: "Yes"
            }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "(študenti sa môžu pridávať aj neskôr)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-krok-4--študentský-onboarding",
      children: "🚀 Krok 4 — Študentský onboarding"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Študent uvidí:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Link na assignment."
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Po kliknutí sa ho Classroom opýta:\n", (0,jsx_runtime.jsx)(_components.em, {
          children: "„Vyber si skupinu (projekt)“"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazia sa názvy PRJ_001–PRJ_030."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Študent si vyberie svoj projekt → Classroom ho pridá do tímu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Až po výbere tímu sa vytvorí repozitár."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-otázky--odpovede",
      children: "🔐 Otázky & odpovede"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-môže-viac-študentov-vybrať-ten-istý-projekt",
      children: "❓ Môže viac študentov vybrať ten istý projekt?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Áno. O tom je Group Assignment."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-dá-sa-tým-zabrániť",
      children: "❓ Dá sa tým zabrániť?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Áno — nastavíš limit ", (0,jsx_runtime.jsx)(_components.em, {
        children: "maximum group size"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-môžem-vytvoriť-prázdny-projekt-bez-študenta",
      children: "❓ Môžem vytvoriť prázdny projekt bez študenta?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nie. GitHub vytvára repozitár až pri prihlásení prvého člena."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-čo-ak-sa-dvaja-mylne-pridajú-do-iného-projektu",
      children: "❓ Čo ak sa dvaja mylne pridajú do iného projektu?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Učiteľ môže:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "študenta odobrať zo skupiny,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "alebo ho presunúť do inej skupiny."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-krok-5--unifikácia-názvov-ak-treba",
      children: "🏁 Krok 5 — Unifikácia názvov (ak treba)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Študenti ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nemôžu premenovať"
      }), " projektový repozitár, ale učiteľ ÁNO."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak by bolo treba, môžeš po nástupe všetkých študentov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skontrolovať názvy,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "upraviť skupiny,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "alebo premenovať repozitáre priamo v GitHube."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto však väčšinou netreba — prefix + pevné názvy skupín stačia."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-doporučený-workflow-pre-školský-rok",
      children: "📘 Doporučený workflow pre školský rok"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Individual assignment → študenti získajú svoje „osobné“ repozitáre."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Group assignment → vytvoria sa projektové tímy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Oba assignmenty vložíme do help sekcie triedy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po onboardingu začína tímová práca."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-small-talk-moment",
      children: "💬 Small Talk Moment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["„GitHub Classroom je ako sedenie v školskej lavici.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Najprv každý sedí sám… a potom príde projekt a zrazu všetci sedia spolu.“ 😄"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak chceš, pripravím aj verziu pre EN."
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