"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[61187],{

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

/***/ 40429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_023_deliverables_02_knowledge_contribution_md_ba4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-023-deliverables-02-knowledge-contribution-md-ba4.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_023_deliverables_02_knowledge_contribution_md_ba4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/knowledge-contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"about-me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST023/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST023/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = '📚 Knowledge Contribution';

const assets = {

};



const toc = [{
  "value": "🔖 Názov a stručný popis",
  "id": "-názov-a-stručný-popis",
  "level": 2
}, {
  "value": "Téma, ktorou prispievam",
  "id": "téma-ktorou-prispievam",
  "level": 3
}, {
  "value": "Prečo je dôležitá",
  "id": "prečo-je-dôležitá",
  "level": 3
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši princíp",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "1 Doménová analýza → výber puzzle typov",
  "id": "1-doménová-analýza--výber-puzzle-typov",
  "level": 3
}, {
  "value": "2 Onshape ako „single source of truth“",
  "id": "2-onshape-ako-single-source-of-truth",
  "level": 3
}, {
  "value": "3 Digitálny release balík",
  "id": "3-digitálny-release-balík",
  "level": 3
}, {
  "value": "🧪 Ako to použiť",
  "id": "-ako-to-použiť",
  "level": 2
}, {
  "value": "Navrhnuté puzzle v Onshape",
  "id": "navrhnuté-puzzle-v-onshape",
  "level": 3
}, {
  "value": "Výstupy",
  "id": "výstupy",
  "level": 3
}, {
  "value": "⚡ Rýchly návod",
  "id": "-rýchly-návod",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "1 Typológia hlavolamov a dopad na návrh",
  "id": "1-typológia-hlavolamov-a-dopad-na-návrh",
  "level": 3
}, {
  "value": "2 Prečo je drevo špecifické",
  "id": "2-prečo-je-drevo-špecifické",
  "level": 3
}, {
  "value": "3 Onshape workflow - čo sa v praxi osvedčilo",
  "id": "3-onshape-workflow---čo-sa-v-praxi-osvedčilo",
  "level": 3
}, {
  "value": "4 Rozšíriteľnosť portfólia",
  "id": "4-rozšíriteľnosť-portfólia",
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
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "téma-ktorou-prispievam",
      children: "Téma, ktorou prispievam"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ako systematicky navrhovať drevené hlavolamy ako digitálny produkt v Onshape – od analýzy po exporty"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-je-dôležitá",
      children: "Prečo je dôležitá"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pri drevených hlavolamoch je kľúčová ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "presnosť dielov, tolerancie a montážna logika"
      }), ". Ak návrh nie je konzistentný a „výrobne čitateľný“, výsledok, aj hypoteticky bude:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ťažko vyrobiteľný na CNC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zle skladateľný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ťažko dokumentovateľný a opakovateľný"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento prístup spája ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "systémové myslenie"
      }), " - proces, artefakty, stakeholderi s praktickým CAD workflow v ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Onshape"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rieši otázku:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Ako navrhnúť a odovzdať drevený hlavolam ako digitálny balík tak, aby bol zrozumiteľný, overiteľný a pripravený pre CNC – aj bez fyzickej výroby?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Konkrétne cieľom je mať:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jasnú klasifikáciu typov hlavolamov a výber vhodných kandidátov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednotný návrhový proces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CAD modely + assembly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výkresy PDF a 3D exporty STEP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "možnosť jednoducho dopĺňať ďalšie puzzle do portfólia."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši princíp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Princíp riešenia je postavený na troch pilieroch:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-doménová-analýza--výber-puzzle-typov",
      children: "1 Doménová analýza → výber puzzle typov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z analýzy typov hlavolamov vyplýva, že pre CAD-only projekt je vhodné kombinovať viac mechaník:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interlocking"
        }), " napr. burr – demonštruje tolerancie a blokovanie dielov,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "3D assembly"
        }), " napr. cube puzzle – demonštruje modulárnosť a viacero riešení,"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2D assembly"
        }), " tangram – demonštruje jednoduchú vyrobiteľnosť a škálovanie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-onshape-ako-single-source-of-truth",
      children: "2 Onshape ako „single source of truth“"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Onshape sa používa ako hlavné miesto, kde existuje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Part Studios - diely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assemblies - zostavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drawings - výkresy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výstupy PDF a STEP sa generujú priamo z tohto zdroja."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-digitálny-release-balík",
      children: "3 Digitálny release balík"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každý hlavolam sa dá odovzdať ako konzistentný balík:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP"
        }), " - diely + zostava"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PDF výkresy"
        }), " - kľúčové diely"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "priestor na ďalšie verzie a rozšírenie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť",
      children: "🧪 Ako to použiť"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento prístup bol aplikovaný v projekte Woodies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navrhnuté-puzzle-v-onshape",
      children: "Navrhnuté puzzle v Onshape"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Knot Burr puzzle"
        }), " interlocking – viac dielov, dôraz na zárezy a presnosť skladania"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cube puzzle"
        }), " 3D assembly – 6 rôznych dielov, viacero možných riešení"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tangram puzzle"
        }), " assembly – 7 dielikov + podstava/rám, dôraz na rovinu a výšku rámika"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "výstupy",
      children: "Výstupy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["vytvorené ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Drawings"
        }), "  výkresy pre kľúčové diely"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["exportované ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP súbory"
        }), " diely aj zostavy"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "doplnené vizualizácie a screenshots pre prezentáciu návrhov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod",
      children: "⚡ Rýchly návod"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Vyber puzzle typy"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V Onshape vytvor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Part Studio"
        }), " pre diely."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vytvor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Assembly"
        }), " a skontroluj, že diely sa dajú zložiť."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre kľúčové diely vytvor ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Drawings"
        }), " a doplň základné kvóty a tolerancie, ak treba."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Exportuj:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "STEP"
            }), " pre parts a assembly"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PDF"
            }), " drawings"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["voliteľne ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "DXF"
            }), " pre 2D rezanie napr. tangram."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skompletizuj to ako jeden balik."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-typológia-hlavolamov-a-dopad-na-návrh",
      children: "1 Typológia hlavolamov a dopad na návrh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Základné kategórie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sequential discovery"
        }), ": puzzle boxy – vysoké nároky na tolerancie a sekvenciu krokov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interlocking"
        }), ": burr – presnosť zárezov, montážne poradie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Disentanglement"
        }), ": šnúra a krúžky – jednoduchšie diely, dôležitá geometria pohybu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assembly"
        }), ": tangram, pentomino, cube – modulárnosť, veľa riešení"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Z pohľadu CAD návrhu je kritické pochopiť, ", (0,jsx_runtime.jsx)(_components.em, {
        children: "kde vzniká funkčný kontakt medzi dielmi"
      }), " - zárezy, styčné plochy, drážky."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-prečo-je-drevo-špecifické",
      children: "2 Prečo je drevo špecifické"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Drevo „pracuje“ a mení rozmery s vlhkosťou, preto:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dizajn musí počítať s vôľami, typicky rádovo desatiny mm"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "príliš tesné spoje môžu viesť k zaseknutiu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "príliš voľné spoje znižujú kvalitu a pocit z puzzle"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-onshape-workflow---čo-sa-v-praxi-osvedčilo",
      children: "3 Onshape workflow - čo sa v praxi osvedčilo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Part Studios"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "modelovať diely čisto a prehľadne - jednoduché skice, jasné rozmery"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "držať konzistentnú hrúbku a „modul“ tam, kde to dáva zmysel - cube puzzle, tangram dieliky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assemblies"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "skladanie v assembly je virtuálna náhrada prototypovania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pomáha odhaliť kolízie a nelogické poradie skladania."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Drawings"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "výkres je forma „kontraktu“: jednoznačne popisuje rozmery a kritické miesta"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "je dobrý aj pre hodnotenie projektu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STEP export"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "STEP slúži ako neutrálny 3D export do iných CAD/CAM systémov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vhodné exportovať diely aj zostavu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-rozšíriteľnosť-portfólia",
      children: "4 Rozšíriteľnosť portfólia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aby sa dali pridávať ďalšie puzzle, napr. puzzle box, ring-and-string, snake cube je vhodné mať:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednotný naming dielov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opakujúcu sa štruktúru výstupov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimálny checklist pred exportom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "STEP je dobrý default"
        }), " pre 3D export. PDF drawings sú často ešte dôležitejšie pre „CNC-ready“ prezentáciu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pri puzzle, ktoré sú ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "ploché"
        }), ", sa často oplatí doplniť aj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "DXF"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V projekte bez výroby má veľkú hodnotu:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "assembly kontrola"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "konzistentná dokumentácia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "jasný proces a „release“ balík."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tento prístup poskytuje praktický a opakovateľný spôsob, ako:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "z doménovej analýzy drevených hlavolamov vybrať vhodné puzzle pre CAD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "navrhnúť ich v Onshape"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "odovzdať ich ako profesionálny digitálny balík - Drawings + STEP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a pripraviť systém tak, aby sa portfólio dalo ďalej rozširovať"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kategória:"
      }), " IT, Startup, CAD/Engineering, System Thinking", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typ:"
      }), " návod + prípadová štúdia, praktická aplikácia v projekte\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tagy:"
      }), " wood puzzles, Onshape, CAD, STEP, drawings, CNC-ready, system thinking, interlocking, tangram, cube puzzle, burr puzzle"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Karakuri Creation Group (puzzle box, sequential discovery): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.karakuri.gr.jp/en/",
          children: "https://www.karakuri.gr.jp/en/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["John Rausch – Puzzling World (burr puzzles, mechanické skladačky): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "http://www.johnrausch.com/PuzzlingWorld/chap03.html",
          children: "http://www.johnrausch.com/PuzzlingWorld/chap03.html"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Kickstarter – puzzles (trendy hybrid digitálno-fyzické): ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.kickstarter.com/discover/categories/puzzles",
          children: "https://www.kickstarter.com/discover/categories/puzzles"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vstupná analýza projektu ", (0,jsx_runtime.jsx)(_components.code, {
          children: "analysis.md"
        }), " – typológia, top 10, trendy a materiálové aspekty"]
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