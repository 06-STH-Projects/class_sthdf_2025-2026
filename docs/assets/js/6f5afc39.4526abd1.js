"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[30820],{

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

/***/ 39043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_019_presentation_slides_md_6f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-019-presentation-slides-md-6f5.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_019_presentation_slides_md_6f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.051119+00:00","fm_version_comment":"","guid":"49f84570-e083-4b52-bb9a-3a8d489be6ab","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ019","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ019/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.051119+00:00',
	fm_version_comment: '',
	guid: '49f84570-e083-4b52-bb9a-3a8d489be6ab',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
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
const contentTitle = 'PRJ019 — Presentation';

const assets = {

};



const toc = [{
  "value": "Headline",
  "id": "headline",
  "level": 2
}, {
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Obsah",
  "id": "obsah",
  "level": 2
}, {
  "value": "01 – Business",
  "id": "01--business",
  "level": 2
}, {
  "value": "Prehľad projektu",
  "id": "prehľad-projektu",
  "level": 3
}, {
  "value": "Vízia",
  "id": "vízia",
  "level": 3
}, {
  "value": "Prínos projektu",
  "id": "prínos-projektu",
  "level": 3
}, {
  "value": "02 – Top Level Architecture",
  "id": "02--top-level-architecture",
  "level": 2
}, {
  "value": "Vysoká úroveň architektúry",
  "id": "vysoká-úroveň-architektúry",
  "level": 3
}, {
  "value": "Hlavné komponenty systému",
  "id": "hlavné-komponenty-systému",
  "level": 3
}, {
  "value": "Tok dát",
  "id": "tok-dát",
  "level": 3
}, {
  "value": "03 – Solution Architecture",
  "id": "03--solution-architecture",
  "level": 2
}, {
  "value": "Hardvérová architektúra",
  "id": "hardvérová-architektúra",
  "level": 3
}, {
  "value": "Softvérová architektúra",
  "id": "softvérová-architektúra",
  "level": 3
}, {
  "value": "04 – Analysis",
  "id": "04--analysis",
  "level": 2
}, {
  "value": "Analýza potrieb",
  "id": "analýza-potrieb",
  "level": 3
}, {
  "value": "Funkčné požiadavky",
  "id": "funkčné-požiadavky",
  "level": 3
}, {
  "value": "Nefunkčné požiadavky",
  "id": "nefunkčné-požiadavky",
  "level": 3
}, {
  "value": "Riziká",
  "id": "riziká",
  "level": 3
}, {
  "value": "05 – Design",
  "id": "05--design",
  "level": 2
}, {
  "value": "Návrh používateľského rozhrania",
  "id": "návrh-používateľského-rozhrania",
  "level": 3
}, {
  "value": "Mechanický dizajn",
  "id": "mechanický-dizajn",
  "level": 3
}, {
  "value": "Dizajnové rozhodnutia",
  "id": "dizajnové-rozhodnutia",
  "level": 3
}, {
  "value": "06 – Implementation",
  "id": "06--implementation",
  "level": 2
}, {
  "value": "Implementácia hardvéru",
  "id": "implementácia-hardvéru",
  "level": 3
}, {
  "value": "Implementácia softvéru",
  "id": "implementácia-softvéru",
  "level": 3
}, {
  "value": "Organizácia repozitára",
  "id": "organizácia-repozitára",
  "level": 3
}, {
  "value": "07 – Testing &amp; Verification",
  "id": "07--testing--verification",
  "level": 2
}, {
  "value": "Testovanie",
  "id": "testovanie",
  "level": 3
}, {
  "value": "Overenie",
  "id": "overenie",
  "level": 3
}, {
  "value": "08 – Operation",
  "id": "08--operation",
  "level": 2
}, {
  "value": "Prevádzka systému",
  "id": "prevádzka-systému",
  "level": 3
}, {
  "value": "Údržba",
  "id": "údržba",
  "level": 3
}, {
  "value": "Používateľská podpora",
  "id": "používateľská-podpora",
  "level": 3
}, {
  "value": "09 – Change Management",
  "id": "09--change-management",
  "level": 2
}, {
  "value": "Riadenie zmien",
  "id": "riadenie-zmien",
  "level": 3
}, {
  "value": "Riadenie verzií",
  "id": "riadenie-verzií",
  "level": 3
}, {
  "value": "Budúci rozvoj",
  "id": "budúci-rozvoj",
  "level": 3
}, {
  "value": "10 – Device diagram",
  "id": "10--device-diagram",
  "level": 2
}, {
  "value": "11 – Screen",
  "id": "11--screen",
  "level": 2
}, {
  "value": "12 – Models",
  "id": "12--models",
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
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj019--presentation",
        children: "PRJ019 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- Headline ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headline",
      children: "Headline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-019-ST_019-ST_019-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Uvodny obrazok: ", (0,jsx_runtime.jsx)(_components.img, {
          src: "https://github.com/user-attachments/assets/5e52e238-2086-45f7-8af9-b8d98f4fcb9b",
          alt: "IMG_20260113_185551"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["--- Headline ---\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Smart Retro Display"
      }), " je dotykový displej zasadený do štýlového retro vizuálu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- introduction ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-019-ST_019-ST_019-Nazov projektu"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["--- introduction ---\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Smart Retro Display"
      }), " je dotykový displej zasadený do štýlového retro vizuálu. Zariadenie je navrhnuté tak, aby bolo multifunkčné a prispôsobiteľné pre rôzne scenáre:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ovládanie:"
        }), " Interaktívny panel pre iné smart zariadenia."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Informácie:"
        }), " Zobrazovanie aktuálnych dát z internetu (počasie, správy, notifikácie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Umenie:"
        }), " Platforma pre vizuálne zaujímavé digitálne umenie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DIY:"
        }), " Otvorený systém vhodný pre ďalšie domáce projekty a experimenty."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Vďaka pripojeniu na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "internet"
      }), " a architektúre, ktorá umožňuje ľahké nasadenie nového kódu, sa počíta s tým, že schopnosti zariadenia sa budú časom rozširovať."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "--- obsah ---"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/business/",
          children: "01-Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/top-level-architecture/",
          children: "02-Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/solution-architecture/",
          children: "03-Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/analysis/",
          children: "04-Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/design/",
          children: "05-Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/implementation/",
          children: "06-Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/testing-verification/",
          children: "07-Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/operation/",
          children: "08-Operation"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ019/sdlc/Change-Management/",
          children: "09-Change Management"
        }), "\n--- obsah ---"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01--business",
      children: "01 – Business"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prehľad-projektu",
      children: "Prehľad projektu"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Retro displej je inteligentné stolové zariadenie, ktoré spája funkcie informačného displeja, interaktívneho ovládacieho rozhrania a platformy pre ďalší rozvoj IoT aplikácií. Projekt je navrhnutý s dôrazom na modularitu, udržateľnosť a dlhodobú rozšíriteľnosť."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cieľom projektu nie je len vytvoriť jedno konkrétne zariadenie, ale ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "overiť koncept univerzálneho smart displeja"
      }), ", ktorý môže slúžiť ako základ pre ďalšie projekty v oblasti domácej automatizácie a embedded systémov."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vízia",
      children: "Vízia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Víziou projektu Retro displej je vytvoriť otvorenú, rozšíriteľnú a energeticky efektívnu platformu, ktorá umožní:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchý prístup k relevantným informáciám v reálnom čase,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zníženie potreby používania energeticky náročných zariadení (PC, telefón),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "experimentovanie s modernými technológiami v oblasti IoT."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prínos-projektu",
      children: "Prínos projektu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vzdelávacia hodnota v oblasti embedded systémov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Praktická ukážka prepojenia hardvéru, softvéru a dizajnu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základ pre ďalší vývoj a rozšírenia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02--top-level-architecture",
      children: "02 – Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vysoká-úroveň-architektúry",
      children: "Vysoká úroveň architektúry"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém je postavený na centrálnom mikrokontroléri, ktorý zabezpečuje spracovanie dát, komunikáciu so sieťou a vykresľovanie používateľského rozhrania."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hlavné-komponenty-systému",
      children: "Hlavné komponenty systému"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riadiaca jednotka (ESP32)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dotykový displej"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardvérové tlačidlá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájací modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Externé dátové zdroje (API)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tok-dát",
      children: "Tok dát"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Používateľ → Vstupy (dotyk/tlačidlá)\n           → Riadiaca logika (ESP32)\n           → Zobrazenie / sieťová komunikácia\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Nasledujúci diagram znázorňuje komponentovú architektúru systému Retro displej na vysokej úrovni. Diagram ilustruje rozdelenie systému na jednotlivé softvérové moduly, ich vzájomné vzťahy, ako aj interakciu s externými hardvérovými komponentmi a sieťovými službami."
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "691",
      height: "682",
      alt: "usecase diagram",
      src: "https://github.com/user-attachments/assets/68830290-2055-4869-90a4-2654578bf1de"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03--solution-architecture",
      children: "03 – Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hardvérová-architektúra",
      children: "Hardvérová architektúra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ESP32 slúži ako hlavný výpočtový a komunikačný prvok"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Displej poskytuje výstupné informácie a dotykové ovládanie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tlačidlá umožňujú rýchlu a spoľahlivú interakciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Napájanie je riešené externým zdrojom"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "softvérová-architektúra",
      children: "Softvérová architektúra"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Softvér je navrhnutý modulárne, aby bolo možné:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoducho pridávať nové funkcie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "izolovať chyby,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zjednodušiť testovanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Moduly:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "UI modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Network modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Data provider modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input handler modul"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System services modul"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04--analysis",
      children: "04 – Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "analýza-potrieb",
      children: "Analýza potrieb"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľ potrebuje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchly prístup k informáciám bez nutnosti používať telefón,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduché a intuitívne ovládanie,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "spoľahlivú prevádzku bez častých zásahov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "funkčné-požiadavky",
      children: "Funkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazenie počasia v reálnom čase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazenie správ alebo notifikácií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možnosť prepínania obrazoviek"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripojenie na Wi-Fi sieť"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nefunkčné-požiadavky",
      children: "Nefunkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nízka spotreba energie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rýchly štart systému"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stabilita a plynulosť UI"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jednoduchá údržba"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riziká",
      children: "Riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nestabilita externých API"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obmedzené HW zdroje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Komplexnosť UI na malom displeji"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05--design",
      children: "05 – Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/user-attachments/assets/edcf22c8-0a60-4d4d-bf82-4ffba263c3b4",
        alt: "IMG_20260113_185346"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/user-attachments/assets/6b12d47b-7aae-40aa-a663-257243f2d8cb",
        alt: "IMG_20260113_185356"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "návrh-používateľského-rozhrania",
      children: "Návrh používateľského rozhrania"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľské rozhranie je navrhnuté s dôrazom na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čitateľnosť,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimalizmus,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konzistentnosť ovládania."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mechanický-dizajn",
      children: "Mechanický dizajn"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D tlačený kryt"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modulárna konštrukcia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prístup k portom bez demontáže"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dizajnové-rozhodnutia",
      children: "Dizajnové rozhodnutia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Preferencia fyzických tlačidiel ako zálohy k dotyku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jednoduché farebné schémy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimalizácia rozloženia prvkov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06--implementation",
      children: "06 – Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementácia-hardvéru",
      children: "Implementácia hardvéru"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zapojenie mikrokontroléra, displeja a tlačidiel"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie napájania a stability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrácia do krytu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementácia-softvéru",
      children: "Implementácia softvéru"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Firmware implementovaný v Arduino / PlatformIO"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie externých knižníc"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Komunikácia s API službami"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "organizácia-repozitára",
      children: "Organizácia repozitára"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/firmware"
        }), " – zdrojový kód"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/docs"
        }), " – dokumentácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/3d"
        }), " – modely krytu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07--testing--verification",
      children: "07 – Testing & Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "testovanie",
      children: "Testovanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčné testy jednotlivých modulov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie interakcie používateľa"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie sieťovej komunikácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overenie",
      children: "Overenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overenie správnosti zobrazovaných dát"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overenie odozvy systému"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dlhodobý beh bez reštartu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08--operation",
      children: "08 – Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevádzka-systému",
      children: "Prevádzka systému"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatické spustenie po pripojení napájania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripojenie k Wi-Fi sieti"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spustenie predvolenej obrazovky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "údržba",
      children: "Údržba"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktualizácia firmvéru"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možnosť rozšírenia funkcionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "používateľská-podpora",
      children: "Používateľská podpora"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokumentácia v README"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základné návody na riešenie problémov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09--change-management",
      children: "09 – Change Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riadenie-zmien",
      children: "Riadenie zmien"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetky zmeny sú evidované v Git repozitári"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Použitie vetiev pre vývoj nových funkcií"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riadenie-verzií",
      children: "Riadenie verzií"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Postupné verziovanie projektu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evidencia zmien v changelogu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "budúci-rozvoj",
      children: "Budúci rozvoj"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrácia ďalších senzorov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podpora domácich automatizačných systémov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozšírenie UI o nové režimy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimalizácia spotreby energie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10--device-diagram",
      children: "10 – Device diagram"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "2532",
      height: "1600",
      alt: "nakres",
      src: "https://github.com/user-attachments/assets/dd43698a-2c0d-4554-9a6e-f6b46bbb0bb7"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "1254",
      height: "732",
      alt: "zapojenie",
      src: "https://github.com/user-attachments/assets/f72809f6-fbf7-40f8-9706-68dd35a03a67"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11--screen",
      children: "11 – Screen"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "405",
      height: "305",
      alt: "obrazovka",
      src: "https://github.com/user-attachments/assets/7669ec5f-929b-4d0a-8503-211d9bf72d6b"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12--models",
      children: "12 – Models"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "1102",
      height: "669",
      alt: "history",
      src: "https://github.com/user-attachments/assets/06905b05-95a4-41c2-856b-8ee9928fab76"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "820",
      height: "699",
      alt: "3dwithelectr",
      src: "https://github.com/user-attachments/assets/66b190f5-75dc-448c-9339-1749aa036df6"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "1152",
      height: "505",
      alt: "3dfinal",
      src: "https://github.com/user-attachments/assets/5941b46d-2fe2-4200-86b5-9391f7444e1c"
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