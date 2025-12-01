"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[73221],{

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

/***/ 77836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_github_classroom_gh_class_sync_md_296_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-github-classroom-gh-class-sync-md-296.json
const site_docs_sk_help_howto_github_classroom_gh_class_sync_md_296_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/github-classroom/GH-Class-Sync","title":"GitHub Classroom – Sync Assignment (aktualizácia šablóny)","description":"Tento dokument vysvetľuje, čo sa stane, keď v template repozitári urobíš zmeny a chceš ich dostať do už existujúcich študentských repozitárov cez funkciu Sync assignment.","source":"@site/docs/sk/help/howto/github-classroom/GH-Class-Sync.md","sourceDirName":"sk/help/howto/github-classroom","slug":"/sk/help/howto/github-classroom/GH-Class-Sync","permalink":"/sk/help/howto/github-classroom/GH-Class-Sync","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GitHub Classroom – Sync Assignment (aktualizácia šablóny)"},"sidebar":"tutorialSidebar","previous":{"title":"GH-Class-Sync — Ako synchronizovať assignmenty v GitHub Classroom","permalink":"/sk/help/howto/github-classroom/GH-Class-Sync-B"},"next":{"title":"Troubleshooting (SK)","permalink":"/sk/help/howto/github-classroom/GH-Class-Troubleshooting"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/github-classroom/GH-Class-Sync.md


const frontMatter = {
	title: 'GitHub Classroom – Sync Assignment (aktualizácia šablóny)'
};
const contentTitle = 'GitHub Classroom – Sync Assignment';

const assets = {

};



const toc = [{
  "value": "1. Kedy vôbec riešiť Sync",
  "id": "1-kedy-vôbec-riešiť-sync",
  "level": 2
}, {
  "value": "2. Ako technicky funguje Sync assignment",
  "id": "2-ako-technicky-funguje-sync-assignment",
  "level": 2
}, {
  "value": "3. Kto čo robí (učiteľ vs študent)",
  "id": "3-kto-čo-robí-učiteľ-vs-študent",
  "level": 2
}, {
  "value": "Učiteľ",
  "id": "učiteľ",
  "level": 3
}, {
  "value": "Študent",
  "id": "študent",
  "level": 3
}, {
  "value": "4. Odporúčaný proces pri väčších zmenách",
  "id": "4-odporúčaný-proces-pri-väčších-zmenách",
  "level": 2
}, {
  "value": "5. Komunikácia so študentmi pred Sync",
  "id": "5-komunikácia-so-študentmi-pred-sync",
  "level": 2
}, {
  "value": "6. Bezpečnostná brzda",
  "id": "6-bezpečnostná-brzda",
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
        id: "github-classroom--sync-assignment",
        children: "GitHub Classroom – Sync Assignment"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento dokument vysvetľuje, čo sa stane, keď v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "template repozitári"
      }), " urobíš zmeny a chceš ich dostať do už existujúcich študentských repozitárov cez funkciu ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sync assignment"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-kedy-vôbec-riešiť-sync",
      children: "1. Kedy vôbec riešiť Sync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklady, kedy Sync dáva zmysel:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["pridal si do template nový súbor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "help/ClassRoomOnboarding.md"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opravil si zásadnú chybu v štruktúre priečinkov,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "doplnil si README alebo KNIFE prehľad, ktorý má mať každý študent."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Situácie, kedy Sync NEpoužívať (alebo len veľmi opatrne):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keď by zmeny v template prepisovali súbory, ktoré študenti aktívne používajú,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "keď si nie si istý, kam GitHub Classroom zmeny aplikuje (hlavne pri konfliktných súboroch)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-ako-technicky-funguje-sync-assignment",
      children: "2. Ako technicky funguje Sync assignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zjednodušený model:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Template repo = „zlatý vzor“."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Každý študentský repo vznikol ako kópia template v čase assignmentu."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sync assignment"
        }), " sa pokúsi zosúladiť nové zmeny z template do študentských repozitárov."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dôležité:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "presné správanie sa môže meniť s verziami GitHub Classroom,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["typicky platí:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "nové súbory → pridajú sa,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "zmenené súbory → môžu sa prepísať / merge-nuť podľa pravidiel ClassRoomu."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Preto odporúčanie: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pred prvým ostrým použitím"
      }), " urob test na 1–2 testovacích študentoch / sandbox triede."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-kto-čo-robí-učiteľ-vs-študent",
      children: "3. Kto čo robí (učiteľ vs študent)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "učiteľ",
      children: "Učiteľ"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Urobí zmeny v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "template repozitári"
        }), " (commit + push)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V GitHub Classroome:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "otvorí assignment,"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["nájde tlačidlo ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sync assignment"
            }), " (názov sa môže meniť),"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "spustí sync."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sleduje stav syncu / logy ak sú k dispozícii."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "študent",
      children: "Študent"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po synce:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vo svojom repozitári si stiahne novú verziu (git pull, alebo cez web UI),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "môže vidieť nové súbory alebo zmeny,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pri konflikte sa musí prispôsobiť – buď ručne vyrieši konflikty (pokročilejší študent), alebo potrebuje pomoc asistenta/učiteľa."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-odporúčaný-proces-pri-väčších-zmenách",
      children: "4. Odporúčaný proces pri väčších zmenách"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Priprav si testovací assignment"
        }), " (sandbox) s 1–2 testovacími „študentmi“."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Urob zmeny v template."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spusti Sync len na sandbox triede."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Skontroluj:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "čo sa presne zmenilo v študentskom repozitári,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "či nedošlo k prepisu obsahu, ktorý by študenti už menili."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Až potom sprav zmeny v ostrej triede."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-komunikácia-so-študentmi-pred-sync",
      children: "5. Komunikácia so študentmi pred Sync"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Odporúčaný text (prispôsob si podľa potreby):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Milí študenti,\nv najbližších dňoch upravím šablónu vášho repozitára (pridám nové HELP a dokumenty).\nProsím:\n1. Pred zmenou si commitnite a pushnite všetky svoje zmeny.\n2. Po mojom oznámení si urobte git pull (alebo si repo znova otvoríte cez web) a skontrolujte nové súbory.\nAk by niečo prestalo fungovať, ozvite sa čo najskôr cez Issues alebo e-mail.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-bezpečnostná-brzda",
      children: "6. Bezpečnostná brzda"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak si ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nie si istý"
        }), ", radšej Sync nepouži a:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "zmeny z template pošli študentom ako manuálny návod (napr. „pridajte tento súbor“),"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "alebo nechaj zmeny len pre ďalší ročník / budúce assignmenty."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["💬 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Small Talk Moment:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Sync assignment je ako aktualizácia softvéru v aute – super, kým ti počas jazdy nepreblikne palubovka. Preto najprv test na parkovisku. 🚗"]
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