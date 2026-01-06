"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[59793],{

/***/ 7278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_9610-3f5ac269b11ccd49825308c6e5356243.JPG");

/***/ }),

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

/***/ 49410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_013_sdlc_04_app_index_md_f42_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-013-sdlc-04-app-index-md-f42.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_013_sdlc_04_app_index_md_f42_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/app/index","title":"04 analysis","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/04-app/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/04-app","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/app/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/app/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.957242+00:00","fm_version_comment":"","guid":"9d17e2e5-0153-42a7-b309-00fbc6cd8b2c","dao":"class_sthdf_dashboard","title":"04 analysis","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"backlog","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/analysis/backlog"},"next":{"title":"05 design","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/design/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/04-app/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.957242+00:00',
	fm_version_comment: '',
	guid: '9d17e2e5-0153-42a7-b309-00fbc6cd8b2c',
	dao: 'class_sthdf_dashboard',
	title: '04 analysis',
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
const contentTitle = '04-App';

const assets = {

};



const toc = [{
  "value": "04-App",
  "id": "04-app-1",
  "level": 2
}, {
  "value": "Roadmap",
  "id": "roadmap",
  "level": 2
}, {
  "value": "Teraz (MVP)",
  "id": "teraz-mvp",
  "level": 3
}, {
  "value": "Ďalej",
  "id": "ďalej",
  "level": 3
}, {
  "value": "Neskôr",
  "id": "neskôr",
  "level": 3
}, {
  "value": "Odkazy",
  "id": "odkazy",
  "level": 2
}, {
  "value": "EA",
  "id": "ea",
  "level": 2
}, {
  "value": "Use Case diagram – WorkNest",
  "id": "use-case-diagram--worknest",
  "level": 3
}, {
  "value": "Activity diagram – WorkNest",
  "id": "activity-diagram--worknest",
  "level": 3
}, {
  "value": "Component diagram – WorkNest",
  "id": "component-diagram--worknest",
  "level": 3
}, {
  "value": "Sequence diagram – WorkNest",
  "id": "sequence-diagram--worknest",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "04-app",
        children: "04-App"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ013/",
        children: "⬅️ Projekt"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-app-1",
      children: "04-App"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľ začína onboardingom, kde WorkNest stručne vysvetľuje svoje ciele — zlepšenie držania tela, organizáciu káblov a vytvorenie estetického pracovného priestoru."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "280",
        alt: "image",
        src: "https://github.com/user-attachments/assets/982f868d-2fc8-4a04-aa37-2da5f1c44303"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Následne zadá svoje základné telesné parametre, ako sú výška, hmotnosť a voliteľne aj pohlavie, aby aplikácia mohla vypočítať personalizované ergonomické odporúčania."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "280",
        alt: "image",
        src: "https://github.com/user-attachments/assets/bff4fb15-59fd-4cee-83a6-2e353b391d63"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V ďalšom kroku si používateľ vyberá typ stola — štandardný, stojaci alebo nastaviteľný — a potom určí typ stoličky."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "280",
        alt: "image",
        src: "https://github.com/user-attachments/assets/2d68f4e1-029d-4f58-8a28-9abd0c0c6029"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pred dokončením nastavenia zobrazí WorkNest prehľadovú sumarizačnú obrazovku so všetkými zvolenými parametrami."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "280",
        alt: "image",
        src: "https://github.com/user-attachments/assets/42f23b7b-188d-45a4-9505-5bd50a89b870"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po spustení sa používateľ dostáva na domácu nástenku, kde vidí stav svojho ergonomického nastavenia, štatistiku „sedenie vs. státie“, časovač prestávok a rýchle tipy na úpravu káblov."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "280",
        alt: "image",
        src: "https://github.com/user-attachments/assets/7bbb161a-0e2d-4290-b273-ee2c4848ee5d"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Z tohto miesta môže prejsť na detailné odporúčania pre nastavenie výšky stoličky, stola, monitora a periférií, používať Pomodoro časovač alebo otvoriť sekciu pre správu káblov. Celý postup je navrhnutý tak, aby rýchlo získal potrebné údaje a okamžite poskytol užitočné personalizované tipy na zlepšenie pracovného prostredia."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "260",
        alt: "image",
        src: "https://github.com/user-attachments/assets/ffb48e1f-ee3d-478a-92c4-272b4efe7eab"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Používateľ sa tiež dostáva na hlavný časovač, kde môže vybrať režim práce, sledovať priebeh relácie a dostávať pripomienky na prestávky či zmenu polohy."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "260",
        alt: "image",
        src: "https://github.com/user-attachments/assets/cecda1c6-cea9-4046-854d-156eda2e4d07"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V sekcii Cable Management si prezerá stav organizácie káblov a získava personalizované odporúčania, ako napríklad použitie držiakov alebo káblových návlekov."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "260",
        alt: "image",
        src: "https://github.com/user-attachments/assets/3117dbe1-1916-46a5-9463-bd4e97a538ef"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Obrazovka Ergonomics zobrazuje presné odporúčané hodnoty pre výšku stoličky, stola a vzdialenosť monitora, ktoré si môže označiť ako upravené."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "240",
        alt: "image",
        src: "https://github.com/user-attachments/assets/01d1d0c1-e4cd-4515-9eca-29371f8bcc94"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V profile používateľ spravuje svoje údaje, typy nábytku a upozornenia, môže meniť jazyk a kontrolovať nové funkcie, ako napríklad tmavý režim."
    }), "\n", (0,jsx_runtime.jsx)("p", {
      align: "center",
      children: (0,jsx_runtime.jsx)("img", {
        width: "260",
        alt: "image",
        src: "https://github.com/user-attachments/assets/36b07485-e54c-49e5-9958-2667cb60c018"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Všetky sekcie sú prepojené jednoduchou navigáciou, ktorá umožňuje rýchlo zlepšovať pracovné prostredie a sledovať svoje návyky."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "roadmap",
      children: "Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "teraz-mvp",
      children: "Teraz (MVP)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Onboarding s telesnými údajmi a typom stola/stoličky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základné ergonomické odporúčania (výška sedenia/stola, umiestnenie monitora)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pripomienky prestávok a striedania sedenia/státia, Pomodoro"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Základný profil a checklist nastavenia setupu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ďalej",
      children: "Ďalej"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personalizované kompenzačné cvičenia a tréningové bloky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Štatistiky „sedenie vs. státie“, ciele, gamifikácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI tipy pre cable management na základe fotky setupu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "neskôr",
      children: "Neskôr"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrácie: standing desk, smart svetlá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Senzory: vzduch/CO₂, svetlo, hluk (otvorené protokoly)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zdieľateľné profily a tímové nastavenia (B2B piloty)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "odkazy",
      children: "Odkazy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Figma prototyp: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.figma.com/make/x6OcLtSWBVfoPrO1ktyxl8/Smart-Cable-Management-App?node-id=0-4&t=ov0OmfD7uj8mJ02F-1",
          children: "Smart Cable Management App"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ea",
      children: "EA"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "use-case-diagram--worknest",
      children: "Use Case diagram – WorkNest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use Case diagram zobrazuje, ako používateľ interaguje s aplikáciou WorkNest pri nastavovaní svojho pracovného miesta. Ukazuje hlavné činnosti, ako sú registrácia, pridanie pracovného stola, zariadení a káblov a získanie odporúčaní na ergonómiu a organizáciu káblov. V diagrame je vidno, že všetky dôležité funkcie (ergonomické odporúčania, prehľad setupu, synchronizácia do cloudu) vychádzajú z akcií jedného hlavného aktéra – používateľa. Pomáha to vysvetliť rozsah aplikácie a to, ktoré funkcie musia byť implementované, aby WorkNest dával používateľovi praktickú pridanú hodnotu."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80348)/* ["default"] */ .A) + "",
        width: "749",
        height: "1000"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "activity-diagram--worknest",
      children: "Activity diagram – WorkNest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Activity diagram opisuje typický tok krokov, ktorým používateľ prechádza od otvorenia WorkNest až po získanie odporúčaní. Začína sa kontrolou, či je používateľ prihlásený, pokračuje vytvorením pracovného miesta, pridaním zariadení a káblov a generovaním odporúčaní. Rozhodovacie uzly ukazujú, kde sa tok vetví (napríklad pri prihlasovaní alebo pri opakovanom generovaní odporúčaní po úprave setupu). Diagram tak pomáha pochopiť logiku obrazoviek a to, v akom poradí má aplikácia jednotlivé funkcie ponúkať."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(77739)/* ["default"] */ .A) + "",
        width: "597",
        height: "1280"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "component-diagram--worknest",
      children: "Component diagram – WorkNest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Component diagram rozdeľuje WorkNest na hlavné technické časti: mobilnú aplikáciu, backendovú službu a databázu. Ukazuje, že mobilná appka obsahuje UI pre správu pracovísk, zariadení a odporúčaní a komunikuje s backendom cez jednotné API. Backend je zasa rozdelený na moduly pre správu používateľov, výpočet odporúčaní a generovanie dát pre vizuálne schémy, pričom všetky ukladajú dáta do spoločnej databázy. Tento pohľad vysvetľuje, ako je systém navrhnutý z hľadiska architektúry a kde majú jednotlivé časti zodpovednosť."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(7278)/* ["default"] */ .A) + "",
        width: "673",
        height: "562"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sequence-diagram--worknest",
      children: "Sequence diagram – WorkNest"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sequence diagram pre WorkNest zobrazuje časovú postupnosť správ medzi používateľom, mobilnou aplikáciou, backendom a modulom odporúčaní. Scenár ukazuje, ako používateľ zadá údaje o svojom pracovisku (stôl, zariadenia, káble), aplikácia ich odošle na server a backend spolu s RecommendationEngine vypočíta ergonomické a káblové odporúčania. Následne sa výsledky vrátia späť do mobilnej aplikácie, ktorá používateľovi zobrazí odporúčania a vizuálnu schému setupu. Tento diagram pomáha pochopiť, ktorá časť systému za čo zodpovedá počas jedného konkrétneho použitia funkcie „získať odporúčania“."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(80576)/* ["default"] */ .A) + "",
        width: "1148",
        height: "774"
      })
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



/***/ }),

/***/ 77739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_9611-5e46c9162e312a5c18be234469111c85.JPG");

/***/ }),

/***/ 80348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_9612-60c26d79c1cdfc888169116d3e034f5c.JPG");

/***/ }),

/***/ 80576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/IMG_9609-5520e9739a7feae741e3b01c040c78c3.JPG");

/***/ })

}]);