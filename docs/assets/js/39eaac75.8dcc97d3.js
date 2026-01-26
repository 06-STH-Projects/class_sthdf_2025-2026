"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[98065],{

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

/***/ 40836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_014_presentation_slides_md_39e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-014-presentation-slides-md-39e.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_014_presentation_slides_md_39e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation/slides","title":"slides","description":"Prezentácia projektu zameraného na návrh, realizáciu a prevádzku malého serverového riešenia s dôrazom na efektivitu, automatizáciu a použitie repasovaného hardvéru.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation/slides","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation/slides","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"sdlc","permalink":"/docs/tags/sdlc"},{"inline":true,"label":"infrastructure","permalink":"/docs/tags/infrastructure"},{"inline":true,"label":"automation","permalink":"/docs/tags/automation"},{"inline":true,"label":"ansible","permalink":"/docs/tags/ansible"},{"inline":true,"label":"homelab","permalink":"/docs/tags/homelab"},{"inline":true,"label":"intermediate","permalink":"/docs/tags/intermediate"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.946383+00:00","fm_version_comment":"","guid":"98ab3b4e-7f74-4916-877a-590cd19edaff","dao":"class_sthdf_dashboard","title":"slides","description":"Prezentácia projektu zameraného na návrh, realizáciu a prevádzku malého serverového riešenia s dôrazom na efektivitu, automatizáciu a použitie repasovaného hardvéru.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"project","type":"presentation","priority":"medium","tags":["sdlc","infrastructure","automation","ansible","homelab","intermediate"],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_system":"CAA","origin_author":"Roman Kazicka","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ014","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/"},"next":{"title":"sdlc","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ014/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.946383+00:00',
	fm_version_comment: '',
	guid: '98ab3b4e-7f74-4916-877a-590cd19edaff',
	dao: 'class_sthdf_dashboard',
	title: 'slides',
	description: 'Prezentácia projektu zameraného na návrh, realizáciu a prevádzku malého serverového riešenia s dôrazom na efektivitu, automatizáciu a použitie repasovaného hardvéru.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'project',
	type: 'presentation',
	priority: 'medium',
	tags: [
		'sdlc',
		'infrastructure',
		'automation',
		'ansible',
		'homelab',
		'intermediate'
	],
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
	origin_system: 'CAA',
	origin_author: 'Roman Kazicka',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'PRJ014 — Presentation';

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
  "value": "01-Business",
  "id": "01-business",
  "level": 2
}, {
  "value": "Motivácia",
  "id": "motivácia",
  "level": 3
}, {
  "value": "Použitie repasovaného hardvéru",
  "id": "použitie-repasovaného-hardvéru",
  "level": 3
}, {
  "value": "02-Top Level Architecture",
  "id": "02-top-level-architecture",
  "level": 2
}, {
  "value": "Prehľad",
  "id": "prehľad",
  "level": 3
}, {
  "value": "Kľúčové vlastnosti",
  "id": "kľúčové-vlastnosti",
  "level": 3
}, {
  "value": "03-Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "Softvérové vrstvy",
  "id": "softvérové-vrstvy",
  "level": 3
}, {
  "value": "Izolácia",
  "id": "izolácia",
  "level": 3
}, {
  "value": "04-Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "Požiadavky",
  "id": "požiadavky",
  "level": 3
}, {
  "value": "Riziká",
  "id": "riziká",
  "level": 3
}, {
  "value": "05-Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "Architektonické rozhodnutia",
  "id": "architektonické-rozhodnutia",
  "level": 3
}, {
  "value": "Prečo Ansible",
  "id": "prečo-ansible",
  "level": 3
}, {
  "value": "06-Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "Použitie Ansible (kľúčová časť projektu)",
  "id": "použitie-ansible-kľúčová-časť-projektu",
  "level": 3
}, {
  "value": "Príklady automatizácie",
  "id": "príklady-automatizácie",
  "level": 4
}, {
  "value": "07-Testing &amp; Verification",
  "id": "07-testing--verification",
  "level": 2
}, {
  "value": "Overovanie",
  "id": "overovanie",
  "level": 3
}, {
  "value": "Prístup",
  "id": "prístup",
  "level": 3
}, {
  "value": "08-Operation",
  "id": "08-operation",
  "level": 2
}, {
  "value": "Prevádzka",
  "id": "prevádzka",
  "level": 3
}, {
  "value": "Údržba",
  "id": "údržba",
  "level": 3
}, {
  "value": "09-Change Management",
  "id": "09-change-management",
  "level": 2
}, {
  "value": "Zmeny",
  "id": "zmeny",
  "level": 3
}, {
  "value": "Budúci rozvoj",
  "id": "budúci-rozvoj",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj014--presentation",
        children: "PRJ014 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "headline",
      children: "Headline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-014-ST_014-ST_014 – Efektívny server z dostupného hardvéru"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt sa zameriava na návrh a realizáciu malého serverového riešenia s dôrazom na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nízke náklady"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "automatizáciu"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dlhodobú udržateľnosť"
      }), ". Praktický dôkaz, že aj repasovaný hardvér dokáže poskytovať profesionálne výsledky."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-014-ST_014-ST_014 – Efektívny server z dostupného hardvéru"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cieľom projektu je ukázať, že:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "modernú infraštruktúru nie je nutné stavať na drahom novom hardvéri,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "automatizácia (Ansible) výrazne znižuje chybovosť a čas potrebný na správu,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "princípy SDLC sú použiteľné aj pri malých a osobných projektoch."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt prepája ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "technické rozhodnutia"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "architektúru"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementáciu"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "prevádzku"
      }), " do jedného konzistentného celku."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "Obsah"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/business/",
          children: "01-Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/top-level-architecture/",
          children: "02-Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/solution-architecture/",
          children: "03-Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/analysis/",
          children: "04-Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/design/",
          children: "05-Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/implementation/",
          children: "06-Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/testing-verification/",
          children: "07-Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/operation/",
          children: "08-Operation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/Change-Management/",
          children: "09-Change Management"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01-Business"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motivácia",
      children: "Motivácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimalizovať náklady na infraštruktúru"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zvýšiť kontrolu nad dátami a službami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Získať praktické skúsenosti so serverovou architektúrou"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "použitie-repasovaného-hardvéru",
      children: "Použitie repasovaného hardvéru"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Projekt cielene počíta s ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "použitým / repasovaným počítačom"
      }), " ako validnou voľbou."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Konkrétny príklad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lenovo M720q Mini PC"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intel i5-9400T (6 jadier)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "16 GB DDR4 RAM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "256 GB NVMe SSD"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spotreba ~65 W"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cena: ~170 €"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["➡️ Pomer ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cena / výkon / spotreba"
      }), " je výrazne lepší než pri novom hardvéri v rovnakej kategórii."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02-Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)("img", {
      width: "1478",
      height: "847",
      alt: "proxmox",
      src: "https://github.com/user-attachments/assets/47fe71cc-ef3f-4742-b40b-cd755f14bfa9"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prehľad",
      children: "Prehľad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1× fyzický server (mini PC)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linux OS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docker / kontajnerové služby"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatizovaná konfigurácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kľúčové-vlastnosti",
      children: "Kľúčové vlastnosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nízka spotreba energie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "tichá prevádzka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchá rozšíriteľnosť"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03-Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "softvérové-vrstvy",
      children: "Softvérové vrstvy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OS: Linux (server-oriented distro)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runtime: Docker"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatizácia: Ansible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitoring a logging (voliteľné)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "izolácia",
      children: "Izolácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "každá služba beží v samostatnom kontajneri"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jasne definované porty a volume mounty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04-Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "požiadavky",
      children: "Požiadavky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "stabilná prevádzka 24/7"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduchý redeploy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "možnosť rýchlej obnovy systému"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "riziká",
      children: "Riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zlyhanie disku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ľudská chyba pri konfigurácii"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➡️ Obe riešené pomocou automatizácie a záloh."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05-Design"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/user-attachments/assets/8d0ed585-6640-4675-b5b7-8ca65b87c318",
        alt: "RPI_Networking_Diagram"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        src: "https://github.com/user-attachments/assets/430ff8e9-93c2-4bcc-9cf6-f218cab05767",
        alt: "decision_flowchart"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "architektonické-rozhodnutia",
      children: "Architektonické rozhodnutia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "preferencia jednoduchosti pred komplexitou"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "infraštruktúra ako kód"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opakovateľné deploymenty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-ansible",
      children: "Prečo Ansible"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "bez agentov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čitateľné YAML playbooky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ideálne pre malé aj stredné prostredia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06-Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "použitie-ansible-kľúčová-časť-projektu",
      children: "Použitie Ansible (kľúčová časť projektu)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ansible sa používa na:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "základnú konfiguráciu servera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inštaláciu balíkov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nastavenie Docker prostredia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "deployment služieb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "správu používateľov a SSH prístupov"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "príklady-automatizácie",
      children: "Príklady automatizácie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "inicializácia nového servera jedným príkazom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opätovné nasadenie systému po zlyhaní"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "konzistentné prostredie medzi testom a produkciou"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "➡️ Výsledok: menej manuálnych zásahov, menej chýb, vyššia istota."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-testing--verification",
      children: "07-Testing & Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "overovanie",
      children: "Overovanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "testovanie dostupnosti služieb"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontrola kontajnerov po deployi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "validácia konfigurácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prístup",
      children: "Prístup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "jednoduché sanity testy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "opakovateľné scenáre"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-operation",
      children: "08-Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prevádzka",
      children: "Prevádzka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "server beží autonómne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "aktualizácie riadené skriptami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "monitoring základných metrík"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "údržba",
      children: "Údržba"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "minimálna manuálna interakcia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rýchla obnova v prípade problému"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-change-management",
      children: "09-Change Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zmeny",
      children: "Zmeny"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "verzovanie konfigurácií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dokumentované úpravy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rollback možný vďaka automatizácii"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "budúci-rozvoj",
      children: "Budúci rozvoj"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "rozšírenie o ďalšie služby"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lepší monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "centralizovaný logging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Záver:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Projekt ukazuje, že kombinácia ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repasovaného hardvéru"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dobrého návrhu"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "automatizácie pomocou Ansible"
      }), " dokáže vytvoriť spoľahlivý a profesionálny serverový systém s minimálnymi nákladmi."]
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