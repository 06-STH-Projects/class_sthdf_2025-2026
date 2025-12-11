"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[2874],{

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

/***/ 37653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_034_deliverables_01_about_me_md_8b6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-034-deliverables-01-about-me-md-8b6.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_034_deliverables_01_about_me_md_8b6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/about-me","title":"ST_034-about me","description":"Stručné predstavenie – profesionálne skúsenosti, vzdelanie, zručnosti a osobný profil.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST034/deliverables/01_about-me.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST034/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/about-me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/about-me","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"profile","permalink":"/docs/tags/profile"},{"inline":true,"label":"about-me","permalink":"/docs/tags/about-me"},{"inline":true,"label":"career","permalink":"/docs/tags/career"},{"inline":true,"label":"skills","permalink":"/docs/tags/skills"},{"inline":true,"label":"ai","permalink":"/docs/tags/ai"}],"version":"current","sidebarPosition":1,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.815822+00:00","fm_version_comment":"","guid":"98a25ed9-ba17-4e57-a2fe-c290226f83de","dao":"class_sthdf_dashboard","title":"ST_034-about me","description":"Stručné predstavenie – profesionálne skúsenosti, vzdelanie, zručnosti a osobný profil.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"profile","type":"case","priority":"medium","tags":["profile","about-me","career","skills","ai"],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"Študentské deliverables","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/"},"next":{"title":"📚 Knowledge Contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/deliverables/knowledge-contribution"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST034/deliverables/01_about-me.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.815822+00:00',
	fm_version_comment: '',
	guid: '98a25ed9-ba17-4e57-a2fe-c290226f83de',
	dao: 'class_sthdf_dashboard',
	title: 'ST_034-about me',
	description: 'Stručné predstavenie – profesionálne skúsenosti, vzdelanie, zručnosti a osobný profil.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: 'profile',
	type: 'case',
	priority: 'medium',
	tags: [
		'profile',
		'about-me',
		'career',
		'skills',
		'ai'
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
const contentTitle = 'ST034 — about-me';

const assets = {

};



const toc = [{
  "value": "🧑‍💼 O mne",
  "id": "-o-mne",
  "level": 2
}, {
  "value": "💼 Pracovné skúsenosti",
  "id": "-pracovné-skúsenosti",
  "level": 2
}, {
  "value": "<strong>Programátor – Realtime, s.r.o.</strong>",
  "id": "programátor--realtime-sro",
  "level": 3
}, {
  "value": "<strong>Študentská stáž – BECOM, s.r.o.</strong>",
  "id": "študentská-stáž--becom-sro",
  "level": 3
}, {
  "value": "🎓 Vzdelanie",
  "id": "-vzdelanie",
  "level": 2
}, {
  "value": "<strong>STU – FIIT Bratislava</strong>",
  "id": "stu--fiit-bratislava",
  "level": 3
}, {
  "value": "<strong>STU – FIIT Bratislava</strong>",
  "id": "stu--fiit-bratislava-1",
  "level": 3
}, {
  "value": "<strong>Masarykova univerzita – Fakulta informatiky</strong>",
  "id": "masarykova-univerzita--fakulta-informatiky",
  "level": 3
}, {
  "value": "<strong>Stredná priemyselná škola elektrotechnická</strong>",
  "id": "stredná-priemyselná-škola-elektrotechnická",
  "level": 3
}, {
  "value": "🛠 Zručnosti",
  "id": "-zručnosti",
  "level": 2
}, {
  "value": "Programovanie",
  "id": "programovanie",
  "level": 3
}, {
  "value": "Ostatné technológie",
  "id": "ostatné-technológie",
  "level": 3
}, {
  "value": "🌐 Jazykové znalosti",
  "id": "-jazykové-znalosti",
  "level": 2
}, {
  "value": "🪪 Certifikáty",
  "id": "-certifikáty",
  "level": 2
}, {
  "value": "❤️ Záujmy",
  "id": "️-záujmy",
  "level": 2
}, {
  "value": "🚗 Vodičský preukaz",
  "id": "-vodičský-preukaz",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "st034--about-me",
        children: "ST034 — about-me"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-o-mne",
      children: "🧑‍💼 O mne"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Som priateľský a zodpovedný človek, ktorý rád trávi čas s ľuďmi, spoznáva ich a spolupracuje v tíme.\nViem dodržiavať slovo a prinášať výsledky aj v náročných situáciách.\nZaujímam sa o informatiku, programovanie a moderné technológie, pričom rád kombinujem technické schopnosti s organizovaním podujatí a tímovou prácou."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pracovné-skúsenosti",
      children: "💼 Pracovné skúsenosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "programátor--realtime-sro",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Programátor – Realtime, s.r.o."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bratislava | 07/2023 – 06/2024"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vývoj informačných systémov pre laboratóriá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tvorba dátových riešení pre lekárov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spolupráca v tíme na softvérových projektoch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "študentská-stáž--becom-sro",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Študentská stáž – BECOM, s.r.o."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "05/2019 – 08/2019"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pomocné práce pri montáži"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-vzdelanie",
      children: "🎓 Vzdelanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stu--fiit-bratislava",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STU – FIIT Bratislava"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bakalárske štúdium Informatika (2021 – 2024)"
      }), " – úspešne ukončené"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stu--fiit-bratislava-1",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "STU – FIIT Bratislava"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inteligentné softvérové systémy (denné, prezenčné)"
      }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2024 – súčasnosť"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "masarykova-univerzita--fakulta-informatiky",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Masarykova univerzita – Fakulta informatiky"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2019 – 2020"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stredná-priemyselná-škola-elektrotechnická",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stredná priemyselná škola elektrotechnická"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Informačné a telekomunikačné systémy (2015 – 2019)"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-zručnosti",
      children: "🛠 Zručnosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "programovanie",
      children: "Programovanie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python"
        }), " – pokročilý"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SQL"
        }), " – pokročilý"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C, Java, InterSystems Caché, Vue.js, HTML"
        }), " – skúsený"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C#, Bash, CSS"
        }), " – základná až mierne pokročilá úroveň"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ostatné-technológie",
      children: "Ostatné technológie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git, Linux, Haskell, Wireshark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-jazykové-znalosti",
      children: "🌐 Jazykové znalosti"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Slovenský jazyk"
        }), " – C1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Anglický jazyk"
        }), " – B2"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Poľský jazyk"
        }), " – A2"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-certifikáty",
      children: "🪪 Certifikáty"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Level Up – Hemisféra (2018 – 2019)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C# Intermediate – Udemy (2020)"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "C# Basics – Udemy (2020)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-záujmy",
      children: "❤️ Záujmy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lezenie (Bouldering), posilka, organizovanie eventov a táborov pre mládež.\nSkúsenosti z týchto aktivít mi priniesli schopnosti v oblasti komunikácie, práce v tíme, riešenia problémov a organizácie."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-vodičský-preukaz",
      children: "🚗 Vodičský preukaz"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Skupina B"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST034/",
        children: "⬅️ Nahor"
      })]
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