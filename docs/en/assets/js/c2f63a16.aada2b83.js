"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[66289],{

/***/ 5806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screenshot 2026-01-21 at 09.59.49-175ea88bb68ac18cbbefad9636f3ffc7.png");

/***/ }),

/***/ 6213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screenshot 2026-01-21 114312-90f0352d2908c6c44e727b013ebeeecb.png");

/***/ }),

/***/ 8603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/EF96C3C2-569E-4300-95EB-A962F5F7EF59_1_201_a-2698fc3c878f62537a77480140cdda53.jpeg");

/***/ }),

/***/ 20564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screenshot 2026-01-21 at 10.01.22-5c09ca493875b2aa507912c3bdc02f89.png");

/***/ }),

/***/ 21025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/5E4DDC31-4A59-448B-81BE-36D6428EC286_1_102_a-fb934311822684f7f4176a193df8c1b9.jpeg");

/***/ }),

/***/ 23751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/BusinessUseCaseModel-00967997e19eb65452deb9834ac3376c.png");

/***/ }),

/***/ 27812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/C6BD51E8-13A9-482B-B15A-60911F70799D_4_5005_c-7a2eba48bc0da62415feee1f9dc12068.jpeg");

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

/***/ 38754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img_3-2279ca4883ea4ca4c1963b68043f9811.png");

/***/ }),

/***/ 39816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img-b2f89662e021ec798ae7b930090a105c.png");

/***/ }),

/***/ 43586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/DE9768B1-0EEB-4348-ABAD-E67708930FD0_4_5005_c-d9dcdcb2338a9a6cc9906c09fde21bbc.jpeg");

/***/ }),

/***/ 47549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/FA18A87B-B8BF-4D6E-9DED-8BC230335C62_4_5005_c-204c7bed036d715dbec802bd638039b0.jpeg");

/***/ }),

/***/ 50479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ActivityDiagram-fd0f7a64fedcbf0ded0eb9fb7da3c1b3.png");

/***/ }),

/***/ 52359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/F13AED86-6A30-4FC5-B396-E0BE0C759C41_1_105_c-64f4029fab00b712e0322755c3c3e4fd.jpeg");

/***/ }),

/***/ 52389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Component TYpe DIagram-74df2d3730854c995eda06f3cea3bcf2.png");

/***/ }),

/***/ 57867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/SequenceDiagram-5f88b747af5941374121b4985bede965.png");

/***/ }),

/***/ 59883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img_2-8e5b7be9da473d6eeea4cb1b25d41e97.png");

/***/ }),

/***/ 65056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/22EDD2A3-B990-49E9-A3BC-E955EB0C69DB_4_5005_c-1de2a0f4aec32544f53006034f981798.jpeg");

/***/ }),

/***/ 86297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/321283E4-E2F4-43E6-9EBC-1280F3AE8236_4_5005_c-6d869fd7fcf997a8dd9f64c1e50547e3.jpeg");

/***/ }),

/***/ 86481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ACBA4687-114E-4B9E-B313-99C9FB38CF3F_4_5005_c-b32a406b330f3332ad44280bf2470450.jpeg");

/***/ }),

/***/ 88159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Screenshot 2026-01-21 at 10.03.01-4ab9689e8c453de238019205e70bbdef.png");

/***/ }),

/***/ 90032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/img_1-61d3e12bd6b197f31e6901ce34ecc16e.png");

/***/ }),

/***/ 97615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_020_presentation_slides_md_c2f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-020-presentation-slides-md-c2f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_020_presentation_slides_md_c2f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation/slides","title":"slides","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation/slides.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation/slides","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation/slides","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:48.070805+00:00","fm_version_comment":"","guid":"4e15a52c-c703-4219-8d7e-777995a65422","dao":"class_sthdf_dashboard","title":"slides","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"PRJ020","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/"},"next":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ020/sdlc/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ020/presentation/slides.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:48.070805+00:00',
	fm_version_comment: '',
	guid: '4e15a52c-c703-4219-8d7e-777995a65422',
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
const contentTitle = 'PRJ020 — Presentation';

const assets = {

};



const toc = [{
  "value": "PixelPet",
  "id": "pixelpet",
  "level": 2
}, {
  "value": "OBSAH",
  "id": "obsah",
  "level": 2
}, {
  "value": "01 Business",
  "id": "01-business",
  "level": 2
}, {
  "value": "1.1 Čo je PixelPet?",
  "id": "11-čo-je-pixelpet",
  "level": 2
}, {
  "value": "1.2 Prečo PixelPet vznikol?",
  "id": "12-prečo-pixelpet-vznikol",
  "level": 2
}, {
  "value": "Screenshot 2026-01-21 at 09.59.49.png\nScreenshot 2026-01-21 at 10.01.22.png",
  "id": "screenshot-2026-01-21-at-095949pngscreenshot-2026-01-21-at-100122png",
  "level": 2
}, {
  "value": "Čo už existuje na trhu?",
  "id": "čo-už-existuje-na-trhu",
  "level": 3
}, {
  "value": "Čo robí PixelPet inak?",
  "id": "čo-robí-pixelpet-inak",
  "level": 3
}, {
  "value": "1.3 Pre koho je PixelPet určený?",
  "id": "13-pre-koho-je-pixelpet-určený",
  "level": 2
}, {
  "value": "<strong>Študenti</strong> 🎓",
  "id": "študenti-",
  "level": 3
}, {
  "value": "<strong>Home office pracovníci</strong> 💼",
  "id": "home-office-pracovníci-",
  "level": 3
}, {
  "value": "<strong>DIY nadšenci</strong> 🔧",
  "id": "diy-nadšenci-",
  "level": 3
}, {
  "value": "1.4 Business Use Cases",
  "id": "14-business-use-cases",
  "level": 2
}, {
  "value": "<strong>UC-01: Pozeranie sa na čas</strong>",
  "id": "uc-01-pozeranie-sa-na-čas",
  "level": 3
}, {
  "value": "<strong>UC-02: Sledovanie prostredia</strong>",
  "id": "uc-02-sledovanie-prostredia",
  "level": 3
}, {
  "value": "<strong>UC-03: Používanie Pomodoro</strong>",
  "id": "uc-03-používanie-pomodoro",
  "level": 3
}, {
  "value": "<strong>UC-04: Dostávanie pripomienok</strong>",
  "id": "uc-04-dostávanie-pripomienok",
  "level": 3
}, {
  "value": "<strong>UC-05: Prezeranie štatistík</strong>",
  "id": "uc-05-prezeranie-štatistík",
  "level": 3
}, {
  "value": "<strong>UC-06: Interakcia s miláčikom</strong>",
  "id": "uc-06-interakcia-s-miláčikom",
  "level": 3
}, {
  "value": "02 Top Level Architecture",
  "id": "02-top-level-architecture",
  "level": 2
}, {
  "value": "2.1 Ako je to celé postavené?",
  "id": "21-ako-je-to-celé-postavené",
  "level": 2
}, {
  "value": "Hlavné časti:",
  "id": "hlavné-časti",
  "level": 3
}, {
  "value": "2.2 Hardvér - čo je vnútri",
  "id": "22-hardvér---čo-je-vnútri",
  "level": 2
}, {
  "value": "Hlavné komponenty:",
  "id": "hlavné-komponenty",
  "level": 3
}, {
  "value": "Prečo ESP32?",
  "id": "prečo-esp32",
  "level": 3
}, {
  "value": "2.3 Softvér - ako to funguje",
  "id": "23-softvér---ako-to-funguje",
  "level": 2
}, {
  "value": "Programovací stack:",
  "id": "programovací-stack",
  "level": 3
}, {
  "value": "Hlavné knižnice:",
  "id": "hlavné-knižnice",
  "level": 3
}, {
  "value": "Ako to beží:",
  "id": "ako-to-beží",
  "level": 3
}, {
  "value": "03 Solution Architecture",
  "id": "03-solution-architecture",
  "level": 2
}, {
  "value": "3.1 Architektúra riešenia",
  "id": "31-architektúra-riešenia",
  "level": 2
}, {
  "value": "<strong>PageManager</strong> - Mozog navigácie",
  "id": "pagemanager---mozog-navigácie",
  "level": 3
}, {
  "value": "<strong>SensorManager</strong> - Zberač dát",
  "id": "sensormanager---zberač-dát",
  "level": 3
}, {
  "value": "<strong>FaceAnimator</strong> - Tvorca emócií",
  "id": "faceanimator---tvorca-emócií",
  "level": 3
}, {
  "value": "<strong>PomodoroEngine</strong> - Časovač productivity",
  "id": "pomodoroengine---časovač-productivity",
  "level": 3
}, {
  "value": "<strong>ReminderSystem</strong> - Strážca zdravia",
  "id": "remindersystem---strážca-zdravia",
  "level": 3
}, {
  "value": "<strong>StorageManager</strong> - Pamäť systému",
  "id": "storagemanager---pamäť-systému",
  "level": 3
}, {
  "value": "3.2 Komunikácia medzi modulmi",
  "id": "32-komunikácia-medzi-modulmi",
  "level": 2
}, {
  "value": "04 Analysis",
  "id": "04-analysis",
  "level": 2
}, {
  "value": "4.1 Funkčné požiadavky",
  "id": "41-funkčné-požiadavky",
  "level": 2
}, {
  "value": "FR-01: Zobrazovanie stránok",
  "id": "fr-01-zobrazovanie-stránok",
  "level": 3
}, {
  "value": "FR-02: Čítanie senzorov",
  "id": "fr-02-čítanie-senzorov",
  "level": 3
}, {
  "value": "FR-03: Animácia tváre",
  "id": "fr-03-animácia-tváre",
  "level": 3
}, {
  "value": "FR-04: Pomodoro časovač",
  "id": "fr-04-pomodoro-časovač",
  "level": 3
}, {
  "value": "FR-05: Systém pripomienok",
  "id": "fr-05-systém-pripomienok",
  "level": 3
}, {
  "value": "FR-06: Ukladanie dát",
  "id": "fr-06-ukladanie-dát",
  "level": 3
}, {
  "value": "4.2 Nefunkčné požiadavky",
  "id": "42-nefunkčné-požiadavky",
  "level": 2
}, {
  "value": "Performance (Výkon)",
  "id": "performance-výkon",
  "level": 3
}, {
  "value": "Reliability (Spoľahlivosť)",
  "id": "reliability-spoľahlivosť",
  "level": 3
}, {
  "value": "Usability (Použiteľnosť)",
  "id": "usability-použiteľnosť",
  "level": 3
}, {
  "value": "Maintainability (Udržiavateľnosť)",
  "id": "maintainability-udržiavateľnosť",
  "level": 3
}, {
  "value": "4.3 Use Case Scenarios",
  "id": "43-use-case-scenarios",
  "level": 2
}, {
  "value": "Scenár 1: Ranný štart",
  "id": "scenár-1-ranný-štart",
  "level": 3
}, {
  "value": "Scenár 2: Touch Navigation",
  "id": "scenár-2-touch-navigation",
  "level": 3
}, {
  "value": "05 Design",
  "id": "05-design",
  "level": 2
}, {
  "value": "5.1 Hardware dizajn",
  "id": "51-hardware-dizajn",
  "level": 2
}, {
  "value": "Pin Mapping (Pripojenie pinov)",
  "id": "pin-mapping-pripojenie-pinov",
  "level": 3
}, {
  "value": "5.2 Software dizajn",
  "id": "52-software-dizajn",
  "level": 2
}, {
  "value": "Vlastný dizajn krabičky (Custom Enclosure)",
  "id": "vlastný-dizajn-krabičky-custom-enclosure",
  "level": 3
}, {
  "value": "Štruktúra kódu",
  "id": "štruktúra-kódu",
  "level": 3
}, {
  "value": "Dátové štruktúry",
  "id": "dátové-štruktúry",
  "level": 3
}, {
  "value": "Konštanty a thresholdy",
  "id": "konštanty-a-thresholdy",
  "level": 3
}, {
  "value": "5.3 UI dizajn",
  "id": "53-ui-dizajn",
  "level": 2
}, {
  "value": "Farebná paleta",
  "id": "farebná-paleta",
  "level": 3
}, {
  "value": "Typografia",
  "id": "typografia",
  "level": 3
}, {
  "value": "Layout stránok",
  "id": "layout-stránok",
  "level": 3
}, {
  "value": "06 Implementation",
  "id": "06-implementation",
  "level": 2
}, {
  "value": "6.1 Vývojové prostredie",
  "id": "61-vývojové-prostredie",
  "level": 2
}, {
  "value": "Softvér",
  "id": "softvér",
  "level": 3
}, {
  "value": "Build konfigurácia",
  "id": "build-konfigurácia",
  "level": 3
}, {
  "value": "6.2 Kľúčové implementačné detaily",
  "id": "62-kľúčové-implementačné-detaily",
  "level": 2
}, {
  "value": "Touch debouncing",
  "id": "touch-debouncing",
  "level": 3
}, {
  "value": "Kalibrácia mikrofónu",
  "id": "kalibrácia-mikrofónu",
  "level": 3
}, {
  "value": "Optimalizácia displeja",
  "id": "optimalizácia-displeja",
  "level": 3
}, {
  "value": "6.3 Výzvy a riešenia",
  "id": "63-výzvy-a-riešenia",
  "level": 2
}, {
  "value": "Problém 1: Display flicker (blikanie)",
  "id": "problém-1-display-flicker-blikanie",
  "level": 3
}, {
  "value": "Problém 2: Mikrofón šum",
  "id": "problém-2-mikrofón-šum",
  "level": 3
}, {
  "value": "Problém 3: Stack overflow",
  "id": "problém-3-stack-overflow",
  "level": 3
}, {
  "value": "Problém 4: EEPROM wear",
  "id": "problém-4-eeprom-wear",
  "level": 3
}, {
  "value": "07 Testing &amp; Verification",
  "id": "07-testing--verification",
  "level": 2
}, {
  "value": "7.1 Testové scenáre",
  "id": "71-testové-scenáre",
  "level": 2
}, {
  "value": "TC-01: Touch Navigation",
  "id": "tc-01-touch-navigation",
  "level": 3
}, {
  "value": "TC-02: Pomodoro Auto-Start",
  "id": "tc-02-pomodoro-auto-start",
  "level": 3
}, {
  "value": "TC-03: Vodná pripomienka",
  "id": "tc-03-vodná-pripomienka",
  "level": 3
}, {
  "value": "TC-04: Teplotný senzor",
  "id": "tc-04-teplotný-senzor",
  "level": 3
}, {
  "value": "TC-05: Emočná reakcia na chlad",
  "id": "tc-05-emočná-reakcia-na-chlad",
  "level": 3
}, {
  "value": "TC-06: Long Press Reset",
  "id": "tc-06-long-press-reset",
  "level": 3
}, {
  "value": "TC-07: Persistent Storage",
  "id": "tc-07-persistent-storage",
  "level": 3
}, {
  "value": "TC-08: Tiché hodiny",
  "id": "tc-08-tiché-hodiny",
  "level": 3
}, {
  "value": "7.2 Integračné testy",
  "id": "72-integračné-testy",
  "level": 2
}, {
  "value": "IT-01: 8-hodinový test",
  "id": "it-01-8-hodinový-test",
  "level": 3
}, {
  "value": "IT-02: Presnosť senzorov",
  "id": "it-02-presnosť-senzorov",
  "level": 3
}, {
  "value": "08 Operation",
  "id": "08-operation",
  "level": 2
}, {
  "value": "8.1 Používateľská príručka",
  "id": "81-používateľská-príručka",
  "level": 2
}, {
  "value": "Prvé spustenie",
  "id": "prvé-spustenie",
  "level": 3
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 3
}, {
  "value": "Používanie Pomodoro",
  "id": "používanie-pomodoro",
  "level": 3
}, {
  "value": "Display Modes",
  "id": "display-modes",
  "level": 3
}, {
  "value": "8.2 Údržba",
  "id": "82-údržba",
  "level": 2
}, {
  "value": "Denná",
  "id": "denná",
  "level": 3
}, {
  "value": "Týždenná",
  "id": "týždenná",
  "level": 3
}, {
  "value": "Mesačná",
  "id": "mesačná",
  "level": 3
}, {
  "value": "8.3 Riešenie problémov",
  "id": "83-riešenie-problémov",
  "level": 2
}, {
  "value": "Displej je biely/prázdny",
  "id": "displej-je-bielyprázdny",
  "level": 3
}, {
  "value": "Zlá teplota",
  "id": "zlá-teplota",
  "level": 3
}, {
  "value": "Dotyk nefunguje",
  "id": "dotyk-nefunguje",
  "level": 3
}, {
  "value": "09 Change Management",
  "id": "09-change-management",
  "level": 2
}, {
  "value": "9.1 História verzií",
  "id": "91-história-verzií",
  "level": 2
}, {
  "value": "Verzia 1.0 (Október 2024)",
  "id": "verzia-10-október-2024",
  "level": 3
}, {
  "value": "Verzia 2.0 (November 2024)",
  "id": "verzia-20-november-2024",
  "level": 3
}, {
  "value": "Verzia 2.1 (Január 2025) - <strong>Aktuálna</strong>",
  "id": "verzia-21-január-2025---aktuálna",
  "level": 3
}, {
  "value": "10 Future Work",
  "id": "10-future-work",
  "level": 2
}, {
  "value": "10.1 Plánované rozšírenia hardvéru",
  "id": "101-plánované-rozšírenia-hardvéru",
  "level": 2
}, {
  "value": "<strong>WiFi Konektivita</strong> 📡",
  "id": "wifi-konektivita-",
  "level": 3
}, {
  "value": "<strong>Batériové napájanie</strong> 🔋",
  "id": "batériové-napájanie-",
  "level": 3
}, {
  "value": "<strong>Väčší  a Dotykový displej</strong> 📺",
  "id": "väčší--a-dotykový-displej-",
  "level": 3
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
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "../",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "prj020--presentation",
        children: "PRJ020 — Presentation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "pixelpet",
      children: "PixelPet"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2025-PRJ-020-ST_020-ST_020-PixelPet"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Verzia:"
      }), " 2.1", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dátum:"
      }), " Január 2025", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Autor:"
      }), " Alexandra Vetrov", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typ projektu:"
      }), " IoT Stolný Spoločník"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "projektová-dokumentácia",
      children: "Projektová Dokumentácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obsah",
      children: "OBSAH"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#01-business",
          children: "Business"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#02-top-level-architecture",
          children: "Top Level Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#03-solution-architecture",
          children: "Solution Architecture"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#04-analysis",
          children: "Analysis"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#05-design",
          children: "Design"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#06-implementation",
          children: "Implementation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#07-testing--verification",
          children: "Testing & Verification"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#08-operation",
          children: "Operation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#09-change-management",
          children: "Change Management"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "#10-future-work",
          children: "Future Work"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "01-business"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "01-business",
      children: "01 Business"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-čo-je-pixelpet",
      children: "1.1 Čo je PixelPet?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PixelPet"
      }), " je inteligentný stolný spoločník, ktorý vám pomôže byť produktívnejší a zdravší. Je to malé zariadenie s farebným displejom, ktoré sedí na vašom stole a stará sa o vás - pripomína pitie vody, pomáha udržať koncentráciu pomocou Pomodoro techniky a sleduje, či máte v miestnosti dobrú teplotu a dostatok svetla."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najlepšie na tom je, že to nie je len nudný nástroj - PixelPet je virtuálny miláčik s emóciami. Keď je chladno, triasi sa. Keď ho pohladkáte (klepnete na displej), ukáže vám srdiečko. Je to váš malý pomocník, ktorý robí prácu príjemnejšou."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "5E4DDC31-4A59-448B-81BE-36D6428EC286_1_102_a.jpeg",
        src: (__webpack_require__(21025)/* ["default"] */ .A) + "",
        width: "1718",
        height: "1828"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo všetko vie:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🐱 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Virtuálny miláčik"
        }), " - má 9 rôznych emócií (veselý, smutný, ospalý, prekvapený...)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⏱️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pomodoro časovač"
        }), " - pomáha pracovať efektívne (25 min práca, 5 min pauza)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["💧 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pripomienky na vodu"
        }), " - každých 90 minút vám pripomenie zapiť"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🌡️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Monitorovanie miestnosti"
        }), " - sleduje teplotu, vlhkosť, svetlo a hluk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📊 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Štatistiky"
        }), " - ukáže vám koľko vody ste vypili a koľko Pomodoro sessionov absolvovali"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-prečo-pixelpet-vznikol",
      children: "1.2 Prečo PixelPet vznikol?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Keď pracujete alebo študujete niekoľko hodín pri počítači, často sa stáva toto:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zabudnete piť"
      }), " - celý deň len káva, žiadna voda", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Žiadne pauzy"
      }), " - sedíte 4 hodiny v kuse, potom ste vyčerpaní", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zlé prostredie"
      }), " - príliš teplo, málo svetla, hlučno", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "❌ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strata motivácie"
      }), " - nevieme ako dlho pracujeme, cítime sa neproduktívni"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PixelPet všetky tieto problémy rieši."
      }), "\nPripomenie vodu, rozdelí prácu na efektívne bloky, upozorní ak je zle nasvietené alebo prehriaté, a ešte vás poteší vtipnou animáciou."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "screenshot-2026-01-21-at-095949pngscreenshot-2026-01-21-at-100122png",
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2026-01-21 at 09.59.49.png",
        src: (__webpack_require__(5806)/* ["default"] */ .A) + "",
        width: "2570",
        height: "1648"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2026-01-21 at 10.01.22.png",
        src: (__webpack_require__(20564)/* ["default"] */ .A) + "",
        width: "2632",
        height: "1822"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-už-existuje-na-trhu",
      children: "Čo už existuje na trhu?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Riešenie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Čo robí"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cena"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problém"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pomodoro appky"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Časovač na telefóne"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free-5€"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Telefón rozptyľuje"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Smart reproduktory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Časovač, hlasové príkazy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50€+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potrebujú WiFi, reklamy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Monitory vzduchu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merajú CO2, teplotu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "150-300€"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drahé, len meranie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tamagotchi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtuálny miláčik"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20€"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Len zábava, žiadna praktickosť"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-robí-pixelpet-inak",
      children: "Čo robí PixelPet inak?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Všetko v jednom"
      }), " - časovač + monitoring + miláčik + pripomienky", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Offline"
      }), " - žiadne WiFi, žiadne trackovanie, žiadne reklamy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Lacný"
      }), " - ~40€ komponenty (DIY)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bez rozptyľovania"
      }), " - nie je to telefón, má jednu úlohu", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Osobný"
      }), " - open-source, môžete si ho prispôsobiť", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "✅ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Roztomilý"
      }), " - emócie robia prácu príjemnejšou"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hlavný diferenciátor:"
      }), " PixelPet je jediný produkt, ktorý spája produktivitu, zdravie a zábavu bez potreby internetu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-pre-koho-je-pixelpet-určený",
      children: "1.3 Pre koho je PixelPet určený?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "študenti-",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Študenti"
      }), " 🎓"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potrebujú štruktúru pri učení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Často zabudnú na pitný režim"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ocenia gamifikáciu a roztomilého miláčika"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technicky zdatní, radi si zariadenie zostavia sami"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "home-office-pracovníci-",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Home office pracovníci"
      }), " 💼"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dlhé hodiny pri počítači"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potrebujú produktivitné nástroje"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chcú sledovať kvalitu vzduchu doma"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Oceňujú pekný dizajn workspace"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "diy-nadšenci-",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "DIY nadšenci"
      }), " 🔧"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Majú záujem o IoT projekty"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chcú sa učiť programovať ESP32"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Radi si veci prispôsobujú"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-business-use-cases",
      children: "1.4 Business Use Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "BusinessUseCaseModel.png",
        src: (__webpack_require__(23751)/* ["default"] */ .A) + "",
        width: "837",
        height: "580"
      }), "\nFigure 2: Business Use Case Diagram"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-01-pozeranie-sa-na-čas",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-01: Pozeranie sa na čas"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Najjednoduchšia vec - keď sa pozriete na displej, vidíte aktuálny čas a dátum. Face page (tvár miláčika) vždy zobrazuje čas v strede, takže nemusíte zapínať telefón."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prečo je to užitočné:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Telefón rozptyľuje - otvoríte ho pre čas a skončíte na sociálnych sieťach. PixelPet jednoducho ukazuje čas bez rozptyľovania."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-02-sledovanie-prostredia",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-02: Sledovanie prostredia"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Klepnete na displej a dostanete sa na Info page, kde vidíte všetky parametre:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🌡️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Teplota:"
        }), " 22.5°C (ideálne 20-24°C)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["💧 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Vlhkosť:"
        }), " 45% (ideálne 40-60%)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["☀️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Svetlo:"
        }), " číselná hodnota (čím nižšie, tým svetlejšie)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔊 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Zvuk:"
        }), " vizuálny bargraf"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bonus:"
      }), " PixelPet aj reaguje emóciami - ak je chladno, triasi sa. Ak je teplo, potí sa. Ak je veľmi tmavo, je smutný."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "22EDD2A3-B990-49E9-A3BC-E955EB0C69DB_4_5005_c.jpeg",
        src: (__webpack_require__(65056)/* ["default"] */ .A) + "",
        width: "438",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-03-používanie-pomodoro",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-03: Používanie Pomodoro"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto je srdce produktivity. Princíp je jednoduchý:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigujete na Pomodoro page"
        }), " (niekoľko klepnutí)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Počkáte 3.5 sekundy"
        }), " - časovač sa automaticky spustí"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pracujete 25 minút"
        }), " - displej odpočítava čas"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prestávka 5 minút"
        }), " - PixelPet vás upozorní pípnutím"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Opakujete 4x"
        }), " - potom dostanete dlhú prestávku 15 minút"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kedykoľvek môžete:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Klepnúť"
        }), " = pauza/pokračovanie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pridržať 2 sekundy"
        }), " = reset na začiatok"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "ActivityDiagram.png",
        src: (__webpack_require__(50479)/* ["default"] */ .A) + "",
        width: "653",
        height: "918"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure 3: Activity Diagram - Pomodoro Flow"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prečo to funguje:"
      }), (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Pomodoro technika je vedecky overená metóda. Krátke bloky práce s prestávkami udržiavajú vysokú koncentráciu a predchádzajú vyhoreniu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-04-dostávanie-pripomienok",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-04: Dostávanie pripomienok"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PixelPet sa sám stará o vaše zdravie:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "💧 Pripomienka na vodu"
      }), " - každých 90 minút (8:00-22:00)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "C6BD51E8-13A9-482B-B15A-60911F70799D_4_5005_c.jpeg",
        src: (__webpack_require__(27812)/* ["default"] */ .A) + "",
        width: "582",
        height: "360"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "💊 Pripomienka na vitamíny"
      }), " - presne o 9:00 ráno"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "EF96C3C2-569E-4300-95EB-A962F5F7EF59_1_201_a.jpeg",
        src: (__webpack_require__(8603)/* ["default"] */ .A) + "",
        width: "720",
        height: "565"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "🚶 Pripomienka na pohyb"
      }), " - každých 60 minút\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "887F9D19-81DB-4E5E-9A06-308F860ED6A4_1_201_a.jpeg",
        src: (__webpack_require__(98171)/* ["default"] */ .A) + "",
        width: "983",
        height: "578"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-05-prezeranie-štatistík",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-05: Prezeranie štatistík"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Na konci dňa sa môžete pozrieť čo ste dokázali:\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "DE9768B1-0EEB-4348-ABAD-E67708930FD0_4_5005_c.jpeg",
        src: (__webpack_require__(43586)/* ["default"] */ .A) + "",
        width: "440",
        height: "360"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivácia:"
      }), " Keď vidíte čísla, máte motiváciu ich zlepšiť. Včera 4 Pomodoro, dnes chcem 6!"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dáta sa ukladajú do EEPROM (trvalá pamäť), takže aj po reštarte zostávajú. O polnoci (00:00) sa štatistiky resetujú a začína nový deň."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "uc-06-interakcia-s-miláčikom",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "UC-06: Interakcia s miláčikom"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Toto je to čo robí PixelPet výnimočným - nie je to len nástroj, je to spoločník."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "9 rôznych emócií:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Emócia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Spúšťač"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Vizuál"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "😐 Normal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Základný stav"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normálne oči, úsmev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "😊 Happy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideálne podmienky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Veľký úsmev"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "❤️ Love"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Klepnutie na displej"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Srdiečka miesto očí (2s)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "😴 Sleepy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nočný čas (22:00-6:00)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zavreté oči, zívanie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "😲 Surprised"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hlasný zvuk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Veľké oči, otvorené ústa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "😢 Sad"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Príliš tmavo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kvapky sĺz"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "🥶 Cold"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teplota < 18°C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trasenie sa"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "🥵 Hot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teplota > 28°C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potenie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "😑 Blink"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Každých 3-6s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rýchle žmurknutie (150ms)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automatické animácie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mrká každých 3-6 sekúnd (náhodne)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozerá sa do strán každých 15-30 sekúnd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reaguje okamžite na dotyk"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Emočná hodnota:"
      }), " Keď pracujete sami doma, malý roztomilý miláčik na monitore robí prácu príjemnejšou. Keď vás pochváli srdiečkom, cítite sa lepšie."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "02-top-level-architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "02-top-level-architecture",
      children: "02 Top Level Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-ako-je-to-celé-postavené",
      children: "2.1 Ako je to celé postavené?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PixelPet je ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "embedded systém"
      }), " - to znamená malý počítač zabudovaný v zariadení s konkrétnou úlohou. Postavený je na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ESP32"
      }), ", čo je lacný ale výkonný mikrokontrolér.\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "Component TYpe DIagram.png",
        src: (__webpack_require__(52389)/* ["default"] */ .A) + "",
        width: "1272",
        height: "928"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure 4: Component/Context Diagram"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hlavné-časti",
      children: "Hlavné časti:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "User (Používateľ)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Komunikuje cez dotykový senzor"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dostáva vizuálny feedback na displeji"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Počuje zvukové signály z buzzera"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "PixelPet System (Srdce zariadenia)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ESP32 mikrokontrolér"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Spracováva všetky dáta"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Riadi displej a senzory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ukladá štatistiky"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Physical Environment (Prostredie)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Poskytuje teplotu a vlhkosť (DHT22)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Poskytuje úroveň svetla (LDR fotoresistor)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Poskytuje úroveň zvuku (MAX4466 mikrofón)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Sensor Array (Senzorové pole)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DHT22"
            }), " - poskytuje teplotu a vlhkosť"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "LDR fotoresistor"
            }), " - poskytuje úroveň svetla"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "MAX4466 mikrofón"
            }), " - poskytuje úroveň zvuku"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "DS3231 RTC"
            }), " - poskytuje presný čas"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Všetky dáta zbiera SensorManager"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-hardvér---čo-je-vnútri",
      children: "2.2 Hardvér - čo je vnútri"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hlavné-komponenty",
      children: "Hlavné komponenty:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Komponent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Funkcia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cena"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mikrokontrolér"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ESP32 DevKit v1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mozog celého systému"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Displej"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ST7735 128x160 TFT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Farebná obrazovka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~8€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Senzor teploty"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DHT22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teplota + vlhkosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~5€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Svetelný senzor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LDR Photoresistor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Úroveň svetla"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mikrofón"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MAX4466"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Úroveň zvuku"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hodiny"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DS3231 RTC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presný čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3€"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dotykové tlačidlo"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTP223B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dotykový vstup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2€"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Celková cena:"
      }), " ~25€ (vrátane káblov a konektorov)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "F13AED86-6A30-4FC5-B396-E0BE0C759C41_1_105_c.jpeg",
        src: (__webpack_require__(52359)/* ["default"] */ .A) + "",
        width: "768",
        height: "1024"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-esp32",
      children: "Prečo ESP32?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["⚡ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Výkonný"
        }), " - dual-core 240 MHz procesor"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["💾 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dosť pamäte"
        }), " - 520 KB SRAM, 4 MB Flash"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔌 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Veľa pinov"
        }), " - SPI, I2C, ADC, GPIO, PWM"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["💰 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Lacný"
        }), " - len ~5€"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📚 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dobrá podpora"
        }), " - Arduino knižnice, veľa tutoriálov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📡 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bonus"
        }), " - má WiFi a Bluetooth (zatiaľ nepoužívam)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-softvér---ako-to-funguje",
      children: "2.3 Softvér - ako to funguje"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "programovací-stack",
      children: "Programovací stack:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Platform:"
        }), " Arduino Framework (C++)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IDE:"
        }), " Arduino IDE 2.x"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jazyk:"
        }), " C++ s Arduino knižnicami"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Architektúra:"
        }), " Event-driven (riadené udalosťami)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hlavné-knižnice",
      children: "Hlavné knižnice:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Knižnica"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Účel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adafruit_GFX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kreslenie (čiary, kruhy, text)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adafruit_ST7735"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ovládanie TFT displeja"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DHT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Čítanie DHT22 senzora"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RTClib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Práca s DS3231 hodinami"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wire"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I2C komunikácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPI komunikácia s displejom"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EEPROM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ukladanie do pamäte"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-to-beží",
      children: "Ako to beží:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void loop() {\n  // Hlavný cyklus, beží stále dookola\n  \n  handleTouch();        // Skontroluj dotyk\n  readSensors();        // Prečítaj senzory (každé 2s)\n  updatePage();         // Aktualizuj aktuálnu stránku\n  checkReminders();     // Skontroluj pripomienky\n  updateAnimations();   // Aktualizuj animácie (mrk, pohľad)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systém funguje ako nekonečná slučka - každých pár milisekúnd kontroluje všetko dôležité a reaguje."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "03-solution-architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "03-solution-architecture",
      children: "03 Solution Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-architektúra-riešenia",
      children: "3.1 Architektúra riešenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["PixelPet používa ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "modulárnu architektúru"
      }), " - celý kód je rozdelený do logických celkov, aby bol prehľadný a ľahko rozšíriteľný."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "pagemanager---mozog-navigácie",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PageManager"
      }), " - Mozog navigácie"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stará sa o:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prechod medzi stránkami (Face → Info → Audio → Pomodoro → Stats → Modes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kreslenie aktuálnej stránky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reakciu na dotyky"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5 hlavných stránok:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Face"
        }), " - animovaný miláčik s časom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Info"
        }), " - detailné senzorové údaje"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Audio"
        }), " - vizualizér zvuku"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pomodoro"
        }), " - časovač"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stats"
        }), " - denná štatistika"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Plus špeciálna stránka ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Modes"
      }), " s rôznymi režimami displeja."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "sensormanager---zberač-dát",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "SensorManager"
      }), " - Zberač dát"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Každé 2 sekundy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prečíta teplotu a vlhkosť z DHT22"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prečíta svetlo z LDR"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prečíta zvuk z mikrofónu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aktualizuje min/max hodnoty"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kalibrácia mikrofónu:"
      }), " Pri štarte nameeria 50 vzoriek na určenie \"tichej\" úrovne (noise floor)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "faceanimator---tvorca-emócií",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "FaceAnimator"
      }), " - Tvorca emócií"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Zodpovedný za:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kreslenie očí (kruhy s bodkami)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kreslenie úsmevu alebo smútku (oblúky)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Špeciálne efekty (srdiečka, slzy, pot)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatické mrkanie (každých 3-6s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pohľad do strán (každých 15-30s)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "State machine:"
      }), " Emócie sa prepínajú podľa podmienok (teplota, svetlo, čas, dotyk)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "pomodoroengine---časovač-productivity",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PomodoroEngine"
      }), " - Časovač productivity"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Riadi stavy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Idle"
        }), " - čaká na spustenie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Work"
        }), " - 25 minút práce"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Break"
        }), " - 5 minút pauza"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LongBreak"
        }), " - 15 minút po 4 cykloch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Paused"
        }), " - pozastavený"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Počíta cykly a automaticky prepína medzi prácou a prestávkami."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "remindersystem---strážca-zdravia",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ReminderSystem"
      }), " - Strážca zdravia"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sleduje:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čas od poslednej vody (90 min interval)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dennú pripomienku vitamínov (9:00)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pohybovú pripomienku (60 min)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tiché hodiny (22:00-8:00)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pri spustení pripomienky:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepne displej na špeciálnu obrazovku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pípne (ak nie sú tiché hodiny)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Čaká na potvrdenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inkrementuje počítadlo"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "storagemanager---pamäť-systému",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "StorageManager"
      }), " - Pamäť systému"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ukladá do EEPROM:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počet Pomodoro za deň"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počet vypitých pohárov vody"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počet prestávok"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deň posledného resetu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "O polnoci (00:00) sa všetko resetuje a uloží."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "EEPROM mapa:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Address 0-3:   Pomodoro count\nAddress 4-7:   Water count\nAddress 8-11:  Break count\nAddress 12-15: Last day\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-komunikácia-medzi-modulmi",
      children: "3.2 Komunikácia medzi modulmi"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "User (dotyk) → TouchHandler → PageManager → Draw next page\n                                          ↓\n                                    DisplayDriver → TFT\n\nEnvironment → Sensors → SensorManager → PageManager → Show data\n                                      ↓\n                                  FaceAnimator → Emotions\n\nTime → RTC → PomodoroEngine → Timer countdown\n           ↓\n       ReminderSystem → Trigger reminder\n\nPomodoroEngine → StorageManager → EEPROM → Persistent stats\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Všetky moduly spolu komunikujú cez jasne definované rozhrania. Napríklad ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FaceAnimator"
      }), " nepristupuje priamo k senzorom - pýta sa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SensorManager"
      }), " na teplotu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "04-analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "04-analysis",
      children: "04 Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "41-funkčné-požiadavky",
      children: "4.1 Funkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-01-zobrazovanie-stránok",
      children: "FR-01: Zobrazovanie stránok"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systém musí podporovať minimálne 5 hlavných stránok"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navigácia jedným klepnutím (tap)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plynulé prechody (bez blikania)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-02-čítanie-senzorov",
      children: "FR-02: Čítanie senzorov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teplota a vlhkosť každé 2 sekundy (DHT22 limit)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Svetlo a zvuk priebežne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibrácia mikrofónu pri štarte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Graceful handling chýb (ak senzor nefunguje, zobrazí \"N/A\")"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-03-animácia-tváre",
      children: "FR-03: Animácia tváre"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "9 emočných stavov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatické mrkanie každých 3-6 sekúnd (random)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pohľad do strán každých 15-30 sekúnd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Okamžitá reakcia na dotyk (< 100ms)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-04-pomodoro-časovač",
      children: "FR-04: Pomodoro časovač"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work: 25 minút"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Short Break: 5 minút"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Long Break: 15 minút (po 4 cykloch)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možnosť pauzy (tap) a resetu (long press)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatický štart po 3.5s na stránke"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-05-systém-pripomienok",
      children: "FR-05: Systém pripomienok"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Voda každých 90 minút (8:00-22:00)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vitamíny o 9:00"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pohyb každých 60 minút"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bez zvuku v nočných hodinách (22:00-8:00)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zvýšenie počítadla po potvrdení"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fr-06-ukladanie-dát",
      children: "FR-06: Ukladanie dát"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Denná štatistika do EEPROM"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reset o polnoci (00:00)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Min/max teplota a vlhkosť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prežitie reštartu zariadenia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "42-nefunkčné-požiadavky",
      children: "4.2 Nefunkčné požiadavky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-výkon",
      children: "Performance (Výkon)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metrika"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cieľ"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dosiahnuté"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Touch response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~50ms ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Page transition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~200ms ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Animation FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~30 ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2s interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2s presne ✅"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reliability-spoľahlivosť",
      children: "Reliability (Spoľahlivosť)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uptime: 99%+ (zariadenie beží týždne bez reštartu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error handling: Graceful degradation (zobrazí \"N/A\" namiesto crashu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EEPROM writes: Optimalizované (len pri zmene, nie každú sekundu)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usability-použiteľnosť",
      children: "Usability (Použiteľnosť)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning curve:"
        }), " Nový používateľ pochopí všetko za < 5 minút"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-button interface:"
        }), " Všetko ovládateľné jedným dotykovým tlačidlom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual feedback:"
        }), " Každá akcia má okamžitú odozvu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No configuration:"
        }), " Plug & play, žiadne nastavenie"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maintainability-udržiavateľnosť",
      children: "Maintainability (Udržiavateľnosť)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modularita:"
        }), " Nová stránka = ~100 riadkov kódu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comments:"
        }), " Každá sekcia má hlavičku"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constants:"
        }), " Všetky magic numbers sú konštanty s názvom"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "43-use-case-scenarios",
      children: "4.3 Use Case Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenár-1-ranný-štart",
      children: "Scenár 1: Ranný štart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7:55 - User zapne zariadenie (USB)\n7:56 - PixelPet sa inicializuje, kalibruje senzory\n      → Zobrazí Face page s \"Good Morning\"\n9:00 - Vitamínová pripomienka\n      → User tapne, potvrdí\n9:15 - User naviguje na Pomodoro page\n      → Počká 3.5s, automatický štart\n9:40 - Koniec prvého Pomodoro\n      → Pípnutie, 5 min break\n9:45 - Automatický návrat na Work\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scenár-2-touch-navigation",
      children: "Scenár 2: Touch Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "SequenceDiagram.png",
        src: (__webpack_require__(57867)/* ["default"] */ .A) + "",
        width: "934",
        height: "927"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Figure 5: Sequence Diagram - Touch Navigation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "05-design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "05-design",
      children: "05 Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "51-hardware-dizajn",
      children: "5.1 Hardware dizajn"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pin-mapping-pripojenie-pinov",
      children: "Pin Mapping (Pripojenie pinov)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ESP32 → TFT Displej (SPI):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "TFT_CS  = GPIO 5   (Chip Select)\nTFT_DC  = GPIO 2   (Data/Command)\nTFT_RST = GPIO 4   (Reset)\nTFT_LED = GPIO 15  (Backlight)\nMOSI    = GPIO 23  (Data)\nSCK     = GPIO 18  (Clock)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ESP32 → RTC DS3231 (I2C):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SDA = GPIO 21\nSCL = GPIO 22\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "ESP32 → Senzory:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DHT22      = GPIO 13  (OneWire)\nTouch      = GPIO 27  (Digital Input, Active HIGH)\nMicrophone = GPIO 35  (ADC, Analog)\nLight LDR  = GPIO 34  (ADC, Analog, inverted)\nBuzzer     = GPIO 25  (PWM Output)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "52-software-dizajn",
      children: "5.2 Software dizajn"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vlastný-dizajn-krabičky-custom-enclosure",
      children: "Vlastný dizajn krabičky (Custom Enclosure)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivácia:"
      }), " PixelPet potrebuje profesionálne puzdro ktoré:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Chráni elektroniku pred prachom a poškodením"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyzerá esteticky na stole"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Má výrezy pre displej, senzory a USB kábel"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Je kompaktné a ľahko prenosné\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "FA18A87B-B8BF-4D6E-9DED-8BC230335C62_4_5005_c.jpeg",
          src: (__webpack_require__(47549)/* ["default"] */ .A) + "",
          width: "450",
          height: "360"
        }), "\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "321283E4-E2F4-43E6-9EBC-1280F3AE8236_4_5005_c.jpeg",
          src: (__webpack_require__(86297)/* ["default"] */ .A) + "",
          width: "568",
          height: "304"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dizajn proces:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Krabička bola ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kompletne navrhnutá a modelovaná"
      }), " špecificky pre tento projekt. Celý proces zahŕňal:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Meranie komponentov"
        }), " - presné rozmery ESP32, displeja, senzorov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CAD modelovanie"
        }), " - vytvorenie 3D modelu v CAD softvéri"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimalizácia dizajnu"
        }), " - iterácie pre najlepšie umiestnenie výrezov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Príprava na výrobu"
        }), " - export do formátu vhodného pre 3D tlač alebo laser cutting\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "img.png",
          src: (__webpack_require__(39816)/* ["default"] */ .A) + "",
          width: "939",
          height: "956"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "img_1.png",
          src: (__webpack_require__(90032)/* ["default"] */ .A) + "",
          width: "889",
          height: "955"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "img_2.png",
          src: (__webpack_require__(59883)/* ["default"] */ .A) + "",
          width: "832",
          height: "909"
        }), (0,jsx_runtime.jsx)(_components.img, {
          alt: "img_3.png",
          src: (__webpack_require__(38754)/* ["default"] */ .A) + "",
          width: "914",
          height: "674"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "štruktúra-kódu",
      children: "Štruktúra kódu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Celý kód je v jednom súbore ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PixelPet.ino"
      }), " rozdelený na sekcie:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// ===== CONFIGURATION =====\n// Piny, konštanty, thresholdy\n\n// ===== LIBRARIES =====\n// Include všetkých knižníc\n\n// ===== GLOBALS =====\n// Globálne premenné\n\n// ===== SETUP =====\nvoid setup() {\n  // Inicializácia\n}\n\n// ===== MAIN LOOP =====\nvoid loop() {\n  // Hlavný cyklus\n}\n\n// ===== TOUCH HANDLING =====\nvoid handleTouch() { }\nvoid onSingleTap() { }\nvoid onLongPress() { }\n\n// ===== PAGE MANAGEMENT =====\nvoid drawPage() { }\nvoid updatePage() { }\nvoid nextPage() { }\n\n// ===== FACE MODULE =====\nvoid updateFace() { }\nvoid drawFaceEyes() { }\nvoid drawSmile() { }\n\n// ===== SENSOR MODULE =====\nvoid readSensors() { }\nvoid calibrateMic() { }\n\n// ===== POMODORO MODULE =====\nvoid updatePomo() { }\nvoid startPomo() { }\nvoid resetPomo() { }\n\n// ===== REMINDER MODULE =====\nvoid checkReminders() { }\nvoid showWaterReminder() { }\nvoid confirmReminder() { }\n\n// ===== STORAGE MODULE =====\nvoid saveStats() { }\nvoid loadStats() { }\nvoid checkNewDay() { }\n\n// ===== UTILITY =====\n// Pomocné funkcie\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dátové-štruktúry",
      children: "Dátové štruktúry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Výčtové typy (enums)\nenum Page {\n  PAGE_FACE,\n  PAGE_INFO,\n  PAGE_AUDIO,\n  PAGE_POMO,\n  PAGE_STATS,\n  PAGE_MODES\n};\n\nenum FaceState {\n  FACE_NORMAL,\n  FACE_HAPPY,\n  FACE_LOVE,\n  FACE_SLEEPY,\n  FACE_SURPRISED,\n  FACE_SAD,\n  FACE_COLD,\n  FACE_HOT,\n  FACE_BLINK\n};\n\nenum PomoState {\n  POMO_IDLE,\n  POMO_WORK,\n  POMO_BREAK,\n  POMO_LONG,\n  POMO_PAUSED\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "konštanty-a-thresholdy",
      children: "Konštanty a thresholdy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Časovanie\n#define SENSOR_INTERVAL 2000      // 2 sekundy\n#define BLINK_DURATION 150        // 150ms\n#define WATER_INTERVAL 5400000    // 90 minút\n#define POMO_WORK 1500            // 25 minút (v sekundách)\n#define POMO_BREAK 300            // 5 minút\n#define POMO_LONG 900             // 15 minút\n\n// Thresholdy\n#define TEMP_COLD 18.0            // °C\n#define TEMP_HOT 28.0             // °C\n#define LIGHT_BRIGHT 800          // ADC hodnota\n#define LIGHT_DARK 3500           // ADC hodnota\n\n// Farby (RGB565)\n#define COLOR_BLACK 0x0000\n#define COLOR_WHITE 0xFFFF\n#define COLOR_GREEN 0x07E0\n#define COLOR_RED 0xF800\n#define COLOR_BLUE 0x001F\n#define COLOR_CYAN 0x07FF\n#define COLOR_PINK 0xFC18\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "53-ui-dizajn",
      children: "5.3 UI dizajn"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "farebná-paleta",
      children: "Farebná paleta"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Farba"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kód"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Použitie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Čierna"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pozadie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Biela"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFFF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text, oči"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zelená"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x07E0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OK stav, Work timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Červená"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xF800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warning, chyby"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modrá"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x001F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Voda"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cyan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x07FF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break timer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Žltá"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFFE0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long Break"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ružová"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xFC18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Love emócia"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typografia",
      children: "Typografia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Veľký text (čas):"
        }), " Size 3-4 (18-24px výška)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normálny text:"
        }), " Size 2 (12px)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Malý text (hints):"
        }), " Size 1 (8px)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pravidlo:"
      }), " Všetok text je centrovaný pre lepšiu čitateľnosť."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "layout-stránok",
      children: "Layout stránok"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌──────────────────────┐  ← 0px\n│      HEADER          │\n│     (title)          │  ← 25px\n├──────────────────────┤\n│                      │\n│                      │\n│   CONTENT AREA       │  ← 28-110px\n│                      │\n│                      │\n├──────────────────────┤\n│  FOOTER / HINTS      │  ← 115px\n│   (tap instructions) │\n└──────────────────────┘  ← 128px\n    128px wide\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "ACBA4687-114E-4B9E-B313-99C9FB38CF3F_4_5005_c.jpeg",
        src: (__webpack_require__(86481)/* ["default"] */ .A) + "",
        width: "360",
        height: "360"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "06-implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "06-implementation",
      children: "06 Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-vývojové-prostredie",
      children: "6.1 Vývojové prostredie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "softvér",
      children: "Softvér"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IDE:"
        }), " Arduino IDE 2.3.x"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ESP32 Board Package:"
        }), " verzia 2.x"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Driver:"
        }), " CP2102 USB-to-UART (pre Mac/Windows/Linux)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-konfigurácia",
      children: "Build konfigurácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Board: ESP32 Dev Module\nUpload Speed: 921600\nCPU Frequency: 240 MHz\nFlash Frequency: 80 MHz\nFlash Mode: QIO\nFlash Size: 4MB (Default partition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-kľúčové-implementačné-detaily",
      children: "6.2 Kľúčové implementačné detaily"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "touch-debouncing",
      children: "Touch debouncing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "unsigned long touchStartTime = 0;\nbool touchPressed = false;\n\nvoid handleTouch() {\n  bool currentTouch = digitalRead(TOUCH_PIN);\n  \n  if (currentTouch && !touchPressed) {\n    // Začiatok dotyku\n    touchStartTime = millis();\n    touchPressed = true;\n  }\n  else if (!currentTouch && touchPressed) {\n    // Koniec dotyku\n    unsigned long duration = millis() - touchStartTime;\n    \n    if (duration < 2000) {\n      onSingleTap();  // Krátke klepnutie\n    } else {\n      onLongPress();  // Dlhé podržanie\n    }\n    \n    touchPressed = false;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kalibrácia-mikrofónu",
      children: "Kalibrácia mikrofónu"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void calibrateMic() {\n  int sum = 0;\n  for (int i = 0; i < 50; i++) {\n    sum += analogRead(MIC_PIN);\n    delay(10);\n  }\n  micBaseline = sum / 50;  // Priemer 50 vzoriek\n  micBaseline += 50;       // Pridať margin\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "optimalizácia-displeja",
      children: "Optimalizácia displeja"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problém:"
      }), " Celé prekreslenie displeja spôsobuje blikanie."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      }), " Čiastočné aktualizácie - prekresliť len to čo sa zmenilo."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Zlé - prekresľuje všetko\nvoid badUpdate() {\n  tft.fillScreen(BLACK);\n  drawEverything();\n}\n\n// Dobré - len nové hodnoty\nvoid goodUpdate() {\n  // Len ak sa teplota zmenila\n  if (temp != lastTemp) {\n    tft.fillRect(x, y, w, h, BLACK);  // Vymaž starú hodnotu\n    tft.setCursor(x, y);\n    tft.print(temp);\n    lastTemp = temp;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-výzvy-a-riešenia",
      children: "6.3 Výzvy a riešenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problém-1-display-flicker-blikanie",
      children: "Problém 1: Display flicker (blikanie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Príčina:"
      }), " Volanie ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fillScreen()"
      }), " každý frame."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parciálne aktualizácie (len zmenené časti)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Double buffering tam kde je to potrebné"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Používať ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fillRect()"
        }), " namiesto celého screenu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Plynulé animácie bez blikania ✅"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problém-2-mikrofón-šum",
      children: "Problém 2: Mikrofón šum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Príčina:"
      }), " Mikrofón číta elektrický šum aj v tichej miestnosti."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibrácia pri štarte (50 vzoriek)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Určenie noise floor (baseline)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Odpočítanie baseline od každého merania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Margin (+50) pre istotu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Presná detekcia zvuku ✅"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problém-3-stack-overflow",
      children: "Problém 3: Stack overflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Príčina:"
      }), " Príliš veľa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "String"
      }), " objektov a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sprintf()"
      }), " volaní."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použiť ", (0,jsx_runtime.jsx)(_components.code, {
          children: "const char*"
        }), " namiesto ", (0,jsx_runtime.jsx)(_components.code, {
          children: "String"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Použiť ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " namiesto ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sprintf()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimalizovať rekurziu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Stabilný beh týždne bez crashu ✅"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problém-4-eeprom-wear",
      children: "Problém 4: EEPROM wear"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Príčina:"
      }), " Časté zapisovanie opotrebúva EEPROM (~100,000 cyklov)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zapisovať len pri skutočnej zmene (nie každú sekundu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ukladať o polnoci + pri shutdown"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Používať wear leveling (rôzne adresy)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Životnosť roky namiesto týždňov ✅"]
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "07-testing--verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "07-testing--verification",
      children: "07 Testing & Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-testové-scenáre",
      children: "7.1 Testové scenáre"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-01-touch-navigation",
      children: "TC-01: Touch Navigation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Klepnutie na Face page", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Prechod na Info page", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čas odozvy:"
      }), " ~50ms"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-02-pomodoro-auto-start",
      children: "TC-02: Pomodoro Auto-Start"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Zostať na Pomodoro page 4 sekundy", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Časovač sa automaticky spustí", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Poznámka:"
      }), " Spúšťa sa presne po 3.5s"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-03-vodná-pripomienka",
      children: "TC-03: Vodná pripomienka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Počkať 90 minút (alebo simulovať v kóde)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Zobrazenie Water Reminder + pípnutie", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Poznámka:"
      }), " Funguje len v rozmedzí 8:00-22:00"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-04-teplotný-senzor",
      children: "TC-04: Teplotný senzor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " DHT22 pripojený, teplota ~22°C", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Zobrazenie teploty s presnosťou ±1°C", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Presnosť:"
      }), " ±0.5°C (lepšie ako očakávané)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-05-emočná-reakcia-na-chlad",
      children: "TC-05: Emočná reakcia na chlad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Teplota klesne pod 18°C", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Cold emócia (trasenie)", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čas reakcie:"
      }), " ~3s (čakanie na update cycle)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-06-long-press-reset",
      children: "TC-06: Long Press Reset"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Podržať dotyk 2+ sekundy na aktívnom Pomodoro", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Reset na Idle stav", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-07-persistent-storage",
      children: "TC-07: Persistent Storage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Dokončiť 1 Pomodoro, reštartovať zariadenie", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Stats page ukazuje 1 Pomodoro", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Poznámka:"
      }), " Dáta prežijú aj vypnutie"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tc-08-tiché-hodiny",
      children: "TC-08: Tiché hodiny"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vstup:"
      }), " Nastaviť čas na 23:00, spustiť pripomienku", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Očakávaný výsledok:"
      }), " Vizuálna pripomienka BEZ zvuku", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-integračné-testy",
      children: "7.2 Integračné testy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "it-01-8-hodinový-test",
      children: "IT-01: 8-hodinový test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scenár:"
      }), " Nechať zariadenie bežať 8 hodín s pravidelnými interakciami."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " ✅ PASS"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Žiadny crash"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetky pripomienky fungovali"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pamäť stabilná (žiadny leak)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "it-02-presnosť-senzorov",
      children: "IT-02: Presnosť senzorov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Metodika:"
      }), " Porovnanie s referenčnými zariadeniami"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Parameter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "PixelPet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Referencia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rozdiel"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Teplota"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22.3°C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22.1°C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+0.2°C ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Vlhkosť"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "46%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2% ✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Svetlo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "920 ADC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Záver:"
      }), " Presnosť vyhovuje pre home use."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "08-operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "08-operation",
      children: "08 Operation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "81-používateľská-príručka",
      children: "8.1 Používateľská príručka"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prvé-spustenie",
      children: "Prvé spustenie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pripojte USB kábel"
        }), " k ESP32 a počítaču/adaptéru"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Počkajte 2 sekundy"
        }), " - displej sa inicializuje"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vidíte Face page"
        }), " - PixelPet je pripravený!\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Screenshot 2026-01-21 at 10.03.01.png",
          src: (__webpack_require__(88159)/* ["default"] */ .A) + "",
          width: "2834",
          height: "1700"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Jedno klepnutie (TAP)"
      }), " = Ďalšia stránka"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Poradie stránok:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Face → Info → Audio → Pomodoro → Stats → Modes → Face (loop)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dlhé podržanie (2 sekundy)"
      }), " = Špeciálna akcia"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stránka"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Long Press akcia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Face"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Otvoriť Modes menu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pomodoro"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset časovača"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detail view (zatiaľ neimplementované)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit modes, späť na Face"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "používanie-pomodoro",
      children: "Používanie Pomodoro"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigujte na Pomodoro page"
        }), " (tap tap tap...)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Počkajte 3.5 sekundy"
        }), " ALEBO ihneď tapnite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Časovač sa spustí"
        }), " - zobrazuje 25:00 → 24:59 → ..."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pracujte 25 minút"
        }), " bez rozptyľovania"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pípnutie"
        }), " - čas na prestávku!"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5 minút pauza"
        }), " - naťahnite sa, voda, pohyb"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatický návrat"
        }), " na ďalší Work cycle"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Po 4 cykloch"
        }), " - 15 minút dlhá prestávka"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ovládanie počas timera:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TAP"
        }), " = Pauza / Pokračovať"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LONG PRESS"
        }), " = Úplný reset (späť na Idle)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "display-modes",
      children: "Display Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Long press na Face page otvorí Modes menu:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Normal"
        }), " - Štandardné stránky"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Big Clock"
        }), " - Veľké hodiny na celom displeji"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slideshow"
        }), " - Automatické prepínanie stránok každých 10s"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Emotions"
        }), " - Len emócie, žiadne dáta"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Night"
        }), " - Tmavý režim, minimálna jas"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výber módu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TAP = Cykluj cez režimy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Počkaj 2 sekundy = Aktivuj vybraný režim"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LONG PRESS = Návrat na Normal"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "82-údržba",
      children: "8.2 Údržba"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "denná",
      children: "Denná"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Žiadna akcia potrebná! PixelPet sa o seba stará sám."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "týždenná",
      children: "Týždenná"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skontrolujte presnosť času (porovnajte s telefónom)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak je rozdiel > 5 minút, možno treba nastaviť RTC"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mesačná",
      children: "Mesačná"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Otrite displej jemnou handričkou (prach)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skontrolujte USB kábel (nech nie je poškodený)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "83-riešenie-problémov",
      children: "8.3 Riešenie problémov"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "displej-je-bielyprázdny",
      children: "Displej je biely/prázdny"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možné príčiny:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zlé SPI zapojenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nesprávny init kód displeja"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nesprávny typ displeja v kóde"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skontrolujte káble (CS, DC, RST)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V kóde skontrolujte ", (0,jsx_runtime.jsx)(_components.code, {
          children: "initR(INITR_BLACKTAB)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zlá-teplota",
      children: "Zlá teplota"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možné príčiny:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHT22 je zle zapojený"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHT22 je pokazený"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHT22 potrebuje 3.3V (nie 5V!)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skontrolujte zapojenie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyskúšajte iný DHT22 senzor"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dotyk-nefunguje",
      children: "Dotyk nefunguje"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možné príčiny:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TTP223B je zle zapojený"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kábel na GPIO 27 je voľný"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skontrolujte GPIO 27"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dotknite sa priamo plochy TTP223B (nie okolie)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)("a", {
      id: "09-change-management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "09-change-management",
      children: "09 Change Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "91-história-verzií",
      children: "9.1 História verzií"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verzia-10-október-2024",
      children: "Verzia 1.0 (Október 2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prvá funkčná verzia"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Základná Face animácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Čítanie senzorov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Jednoduchá navigácia medzi stránkami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Žiadne pripomienky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Žiadne Pomodoro"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Žiadne ukladanie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problém:"
      }), " Displej blikal, mikrofón šumel"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verzia-20-november-2024",
      children: "Verzia 2.0 (November 2024)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Veľká aktualizácia"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Pomodoro časovač"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Systém pripomienok (voda, vitamíny, pohyb)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Stats page s EEPROM ukladaním"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Display Modes (Big Clock, Slideshow...)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Oprava blikania displeja"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Kalibrácia mikrofónu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "verzia-21-január-2025---aktuálna",
      children: ["Verzia 2.1 (Január 2025) - ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aktuálna"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Vylepšenia UX"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Nová Emotions mode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Vylepšená vizualizácia vodnej pripomienky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Všetok text je centrovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Pripomienka na vitamíny presne o 9:00"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Optimalizácia EEPROM (menej zápisov)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Bug fixes a stabilizácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("a", {
      id: "10-future-work"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-future-work",
      children: "10 Future Work"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "101-plánované-rozšírenia-hardvéru",
      children: "10.1 Plánované rozšírenia hardvéru"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "wifi-konektivita-",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "WiFi Konektivita"
      }), " 📡"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivácia:"
      }), " ESP32 má WiFi chip, zatiaľ nepoužitý."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možnosti:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Automatická synchronizácia času"
        }), " (NTP server)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "OTA Updates"
        }), " (Over-The-Air firmware update)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud sync štatistík"
        }), " (backup do Google Drive / Dropbox)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Weather forecast"
        }), " (zobrazenie počasia z API)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Notifications"
        }), " (z kalendára, emailov)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "batériové-napájanie-",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Batériové napájanie"
      }), " 🔋"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivácia:"
      }), " Byť mobilný, nie viazaný na USB."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Riešenie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LiPo batéria 3.7V (2000mAh)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výhody:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prenosnosť (brať na kúpeľňu, kuchyňu...)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup pri výpadku prúdu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Odhadovaná výdrž:"
      }), " 12-16 hodín pri plnom použití"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "väčší--a-dotykový-displej-",
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Väčší  a Dotykový displej"
      }), " 📺"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Motivácia:"
      }), " 128x160 je malé, ťažko čitateľné z diaľky."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výhody:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lepšia čitateľnosť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Viac priestoru pre grafy"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Možnosť viacerých widgetov naraz\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Nové možnosti:"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swipe gestures (posúvanie stránok)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tap na konkrétnu vec (nie len celý displej)\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Výzva:"
        }), " Vyššia spotreba, pomalší refresh (E-Ink)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "záver",
      children: "ZÁVER"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PixelPet je viac ako len projekt - je to váš osobný asistent, ktorý sa stará o vaše zdravie a produktivitu. Kombinuje praktickosť s emóciami, čo je zriedkavé v tech svete."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kľúčové úspechy:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Fungujúci prototyp s 5 hlavnými stránkami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Modulárna architektúra pripravená na rozšírenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Offline-first dizajn (privacy & reliability)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Reálna hodnota pre používateľa (ROI < 2 dni)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Open-source potenciál"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo som sa naučila:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded programming (ESP32, Arduino)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardware integrácia (senzory, displeje)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "User experience dizajn"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ďakujem za pozornosť!"
      }), " 🙏"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Screenshot 2026-01-21 114312.png",
        src: (__webpack_require__(6213)/* ["default"] */ .A) + "",
        width: "1919",
        height: "1023"
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

/***/ 98171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/887F9D19-81DB-4E5E-9A06-308F860ED6A4_1_201_a-9cba6cb5514de7b84c8a600d79ba9475.jpeg");

/***/ })

}]);