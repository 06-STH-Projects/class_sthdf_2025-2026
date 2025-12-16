"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[50296],{

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

/***/ 82349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_02_knowledge_contribution_md_abc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-038-deliverables-02-knowledge-contribution-md-abc.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_038_deliverables_02_knowledge_contribution_md_abc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution","title":"ID generuje CLI / skript","description":"-----------------------------------------------------","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-24T15:50:07.128943+00:00","title":"ID generuje CLI / skript","fm_version_comment":"","locale":"sk"},"sidebar":"tutorialSidebar","previous":{"title":"2025_ST_038 – STHDF – Študent 038 (script)","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/about-me"},"next":{"title":"🧭 CONTEXT ---------------------------------------------------------","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST038/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST038/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-24T15:50:07.128943+00:00',
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
  "value": "🔖 Názov a stručný popis",
  "id": "-názov-a-stručný-popis",
  "level": 2
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "1. Problém: chaos v objednávkach a faktúrach",
  "id": "1-problém-chaos-v-objednávkach-a-faktúrach",
  "level": 3
}, {
  "value": "2. Koncept riešenia: špecializovaný mini e-shop",
  "id": "2-koncept-riešenia-špecializovaný-mini-e-shop",
  "level": 3
}, {
  "value": "3. Architektonický pohľad (high-level)",
  "id": "3-architektonický-pohľad-high-level",
  "level": 3
}, {
  "value": "4. UX princípy",
  "id": "4-ux-princípy",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "🗂️ Taxonómia KNIFE",
  "id": "️-taxonómia-knife",
  "level": 2
}, {
  "value": "🌍 Referencie",
  "id": "-referencie",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
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
      children: "guid: \"29f89c29-5401-49e4-a771-6654d0b17417\""
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
      children: "title: \"2025_ST_038 – TShirt Print System – Knowledge Contribution\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "krátky-popis--dopĺňa-používateľ-voliteľné",
      children: "Krátky popis – dopĺňa používateľ (voliteľné)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "description: \"Návrh a princípy webového systému na objednávanie potlače tričiek pre ľudí a malé/stredné podniky.\""
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
      children: "category: \"IT / E-commerce\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "typ-dokumentu-guide-case-tutorial--používateľ-voliteľné",
      children: "Typ dokumentu (guide, case, tutorial...) – používateľ (voliteľné)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type: \"knowledge-contribution\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "priorita-lowmediumhigh--voliteľné",
      children: "Priorita (low/medium/high) – voliteľné"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "priority: \"medium\""
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
      children: "tags:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sthdf\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"knife\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"web-app\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"e-commerce\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"tshirt-print\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"sme\""
      }), "\n"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "-knowledge-contribution",
      children: "📚 Knowledge Contribution"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Téma:"
        }), " TShirt Print System – jednoduchý webový systém na objednávanie potlače tričiek pre ľudí a malé/stredné podniky."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prečo je dôležitá:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Malé firmy, kluby a tvorcovia merchu často riešia objednávky cez chaty, e-maily a Excel – čo je chaotické, ťažko dohľadateľné a neškáluje."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Cieľom je mať ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "jedno miesto"
            }), ", kde zákazník pohodlne objedná tričko a predávajúci má ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "prehľad o objednávkach, faktúrach a zákazníkoch"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre zákazníka:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Jednoduchý výber trička (typ, veľkosť, farba, dizajn)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Jasný objednávkový proces (bez e-mailovej ping-pong komunikácie)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Transparentná cena a prehľad stavu objednávky."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pre predávajúceho (tvorcu merchu / malý podnik):"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Centralizovaný prehľad všetkých objednávok na jednom mieste."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Napojenie na fakturáciu (prehľad faktúr, export do účtovníctva / PDF)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Základný prehľad o zákazníkoch (história objednávok, najpredávanejšie produkty)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Menej manuálnej administratívy, viac času na tvorbu a biznis."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Hlavný cieľ:"
          }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vytvoriť ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "ľahko použiteľný „mini e-shop“ špecificky pre merch a potlač tričiek"
          }), ", ktorý je zrozumiteľný pre bežného človeka aj pre malé/stredné podniky bez vlastného IT oddelenia."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Dve základné role:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Customer"
            }), " – koncový používateľ, ktorý si vyberá a objednáva tričká."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Seller"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Admin"
            }), " – prevádzkovateľ systému, ktorý spravuje produkty, objednávky a faktúry."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Kľúčové moduly:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Katalóg produktov:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Typy tričiek (pánske, dámske, unisex, kids)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Varianty (veľkosť, farba, prípadne typ materiálu)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Priestor pre vizualizáciu dizajnu (náhľad potlače)."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Objednávkový proces (checkout):"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Košík, rekapitulácia, kontaktné údaje, spôsob platby/dodania."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Potvrdenie objednávky (e-mail / prehľad v systéme)."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Backoffice pre predávajúceho:"
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Zoznam objednávok (filter podľa stavu – nové, zaplatené, odoslané, stornované)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Základná správa faktúr (generovanie údajov, export, prepojenie na objednávku)."
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Jednoduchá štatistika (počet objednávok, celkové tržby, top produkty)."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Princíp návrhu:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Modulárny systém"
            }), " – každý blok (katalóg, objednávky, faktúry) sa dá ďalej rozširovať."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Jednoduché UI"
            }), " – radšej menej funkcií, ale použiteľných, ako komplexný ERP."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Pripravenosť na ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "napojenie na externé služby"
            }), " (platobná brána, sklad, účtovný systém)."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Príklady scenárov:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Malá kaviareň / lokálny brand:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Predaj vlastných tričiek s logom kaviarne."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kaviareň si nepotrebuje riešiť plnohodnotný e-shop – stačí jednoduchý systém, kde zákazníci z Instagramu prekliknú na objednávkovú stránku."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Športový klub / tréner:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merch pre členov (tričičká, mikiny, dresy)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tréner vidí, kto si čo objednal, a vie jednoducho vygenerovať podklady pre výrobu a fakturáciu."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Študentská komunita / event:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Objednávky tričiek pre účastníkov akcie."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Namiesto zbierania veľkostí v Google Forme a ručného prepisovania je všetko v jednom systéme."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ako zákazník:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vyberiem si tričko (typ, veľkosť, farbu, dizajn)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pridám do košíka a vyplním údaje."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Potvrdím objednávku a sledujem stav (napr. „prijatá“, „vo výrobe“, „odoslaná“)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ako predávajúci:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prihlásim sa do administrácie."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "V sekcii „Objednávky“ vidím nové objednávky – môžem meniť ich stav."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "V sekcii „Faktúry“ vygenerujem faktúru alebo exportujem údaje."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Podľa potreby dopĺňam nové produkty / varianty tričiek."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-problém-chaos-v-objednávkach-a-faktúrach",
      children: "1. Problém: chaos v objednávkach a faktúrach"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Mnoho malých značiek a tvorcov merchu rieši objednávky cez DM na Instagrame, Messenger, e-mail či formuláre.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Výsledok:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "neprehľadná komunikácia,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "duplicitné alebo chýbajúce informácie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ručné prepisovanie údajov do faktúr,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "žiadny prehľad o histórii zákazníkov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-koncept-riešenia-špecializovaný-mini-e-shop",
      children: "2. Koncept riešenia: špecializovaný mini e-shop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Namiesto generického e-shopu vzniká ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "špecializovaný systém pre tričká"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchý katalóg,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimum krokov pri objednávke,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "prepojenie objednávky ↔ faktúry ↔ zákazníka."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-architektonický-pohľad-high-level",
      children: "3. Architektonický pohľad (high-level)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Frontend:"
        }), " webová aplikácia pre zákazníkov + jednoduchý admin pre predávajúceho."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backend API:"
        }), " správa produktov, objednávok, používateľov, faktúr."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Databáza:"
        }), " tabuľky pre produkty, varianty, objednávky, položky objednávok, zákazníkov, faktúry."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integrácie (budúcnosť):"
        }), " platobná brána, externý fakturačný systém, export do CSV."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-ux-princípy",
      children: "4. UX princípy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Jednoduchá navigácia: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Vyber tričko → Vyplň údaje → Potvrď"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Žiadne zbytočné polia (len to, čo je nutné na výrobu a doručenie)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zrozumiteľné stavy objednávok (bez „IT slovníka“)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Začni jednoduchým MVP:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Najskôr len tričká, pár variantov, manuálna fakturácia – postupne pridávať automatizáciu podľa reálnych potrieb."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nehraj sa na všeobecný e-shop:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Čím špecializovanejší flow pre tričká, tým lepšia použiteľnosť pre cieľovú skupinu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mysli na škálovanie:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Už pri návrhu dátového modelu myslieť na to, že neskôr môže pribudnúť: mikina, doplnky, iné typy merchu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prepojenie s realitou:"
        }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Vývoj konzultovať s reálnymi používateľmi (napr. malé značky, ktoré už dnes predávajú merch)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TShirt Print System rieši ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "konkrétny problém"
        }), " malých značiek, klubov a tvorcov – chaos v objednávkach a faktúrach."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Prináša ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jedno miesto"
        }), ", kde sú produkty, objednávky, zákazníci a faktúry prepojené."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Je navrhnutý tak, aby bol:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "jednoduchý na používanie,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "rozšíriteľný z technického pohľadu,"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "použiteľný aj mimo školského prostredia (reálny produktový základ)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " IT, E-commerce, Startup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " návod + prípadová štúdia (knowledge contribution z reálneho projektu)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " tshirt-print, web-app, e-commerce, sme, sthdf, knife"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vlastné skúsenosti z práce na projekte TShirt Print System."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozorovanie procesov malých značiek a tvorcov merchu (komunikácia cez chaty, e-maily, formuláre)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inšpirácia štruktúrou klasických e-shopov, ale zjednodušená na use-case merch/tričká."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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