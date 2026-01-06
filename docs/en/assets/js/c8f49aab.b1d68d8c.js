"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[13571],{

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

/***/ 49767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_012_sdlc_06_implementation_index_md_c8f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-012-sdlc-06-implementation-index-md-c8f.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_012_sdlc_06_implementation_index_md_c8f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/implementation/index","title":"06 implementation","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/06-implementation/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/06-implementation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/implementation/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/implementation/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.986461+00:00","fm_version_comment":"","guid":"cafba725-a893-42af-b7c6-b788d925923b","dao":"class_sthdf_dashboard","title":"06 implementation","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"prototype","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/design/prototype"},"next":{"title":"code links","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/implementation/code-links"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/06-implementation/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.986461+00:00',
	fm_version_comment: '',
	guid: 'cafba725-a893-42af-b7c6-b788d925923b',
	dao: 'class_sthdf_dashboard',
	title: '06 implementation',
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
const contentTitle = '06-Implementation';

const assets = {

};



const toc = [{
  "value": "Project Roadmap",
  "id": "project-roadmap",
  "level": 2
}, {
  "value": "Dosiahnuté ciele",
  "id": "dosiahnuté-ciele",
  "level": 2
}, {
  "value": "Skúsenosti",
  "id": "skúsenosti",
  "level": 2
}, {
  "value": "Pozitívne skúsenosti",
  "id": "pozitívne-skúsenosti",
  "level": 3
}, {
  "value": "Možné vylepšenia",
  "id": "možné-vylepšenia",
  "level": 3
}, {
  "value": "Project Status",
  "id": "project-status",
  "level": 2
}, {
  "value": "Finálny produkt",
  "id": "finálny-produkt",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "06-implementation",
        children: "06-Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-roadmap",
      children: "Project Roadmap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Úvodný koncept"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pôvodná myšlienka bola vytvoriť iba samozavlažovací kvetináč pomocou 3D tlače."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Po diskusii s kolegom však vznikla myšlienka projekt rozšíriť o elektronickú časť, ktorá bude vedieť sledovať vlhkosť pôdy."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Papierové návrhy"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ručný náčrt tvaru kvetináča, zásobníka vody a umiestnenia elektroniky."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Náčrt zapojenia senzora, Arduina a displeja."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tieto náčrty tvorili prvú verziu architektúry pred spracovaním v EA."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Modelovanie architektúry v Enterprise Architect (EA)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Business Layer"
            }), " – definovanie potrieb používateľa a základného procesu."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "System Layer (Top Level Architecture)"
            }), " – návrh architektúry: senzor → Arduino → displej → používateľ."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Technology Layer"
            }), " – technická schéma zapojenia + komponenty použité pre prototyp."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D modelovanie kvetináča"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kompletný návrh vo Fusion 360."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Export modelu a príprava pre 3D tlač."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "3D tlač prototypu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tlač prebehla vo FabLabe."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Priebežné úpravy a drobné iterácie podľa potreby."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Zostavenie HW a programovania (paralelne s 3D tlačou)"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provný prototyp predstavoval prepojenie vlhkostného senzora, OLED displeja a Arduina na breadboarde."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Programovanie základnej funkcionality:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "čítanie vlhkosti,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "prepočet na percentá,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "zobrazenie na displeji,"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "smajlík podľa stavu pôdy."
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Integrácia HW s vytlačeným 3D modelom"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Druhý prototyp predstavoval zapojenie komponentov bez breadboardu do finálneho 3D tela."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Umiestnenie senzora do rastliny a testovanie v reálnych podmienkach."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Finálna úprava kódu."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Testovanie a ladenie"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Test reakcií displeja pri rôznych úrovniach vlhkosti."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kontrola kompatibility 3D modelu s elektronikou."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Finalizácia projektu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dokončenie dokumentácie."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pridanie fotografií prototypu."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dosiahnuté-ciele",
      children: "Dosiahnuté ciele"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dosiahli sme všetky ciele, ktoré sme si na začiatku projektu stanovili. Máme plne funkčný prototyp SmartPot, ktorý spoľahlivo meria vlhkosť pôdy a prehľadne zobrazuje namerané dáta na OLED displeji. Systém poskytuje intuitívny vizuálny indikátor, takže používateľ okamžite vie, či rastlina potrebuje zálievku."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "skúsenosti",
      children: "Skúsenosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Počas práce na projekte sme zaznamenali niekoľko zaujímavých skúseností. 3D model kvetináča sme museli niekoľkokrát upravovať, pretože pôvodné rozmery nezodpovedali reálnej tlači. Pri zapájaní elektroniky sme narazili na problémy, napríklad nedostatok jumper káblov a komplikácie s knižnicou pre OLED displej. Výrobca uvádzal podporu určitej knižnice, ktorá však nefungovala, takže sme museli nájsť alternatívne riešenie."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pozitívne-skúsenosti",
      children: "Pozitívne skúsenosti"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pozitívne skúsenosti zahŕňajú výbornú tímovú spoluprácu, keďže všetko prebiehalo hladko a bez akýchkoľvek nedorozumení. Tiež sme si mohli prakticky vyskúšať zapojenie a programovanie Arduino Nano spolu s integráciou senzora a displeja, čo sme si chceli už dlhšie vyskúšať. Okrem toho sme získali praktické skúsenosti aj so samotnou 3D tlačou a doladením prototypu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "možné-vylepšenia",
      children: "Možné vylepšenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do budúcnosti vidíme niekoľko možností, ako prototyp vylepšiť. Mohli by sme pridať automatickú pumpu, ktorá by sama dopĺňala vodu zo zásobníka alebo integrovať Bluetooth či Wi-Fi pre odosielanie upozornení priamo do telefónu používateľa. Ďalšou možnosťou je pridať zvukový indikátor, ktorý by upozorňoval, že pôda je suchá, čím by sa zvýšila interaktivita a použiteľnosť zariadenia."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "project-status",
      children: "Project Status"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Všetky stanovené ciele sme úspešne splnili. Máme funkčný prototyp SmartPot, ktorý spoľahlivo meria vlhkosť pôdy a zobrazuje výsledky na OLED displeji. Systém je stabilný a plne použiteľný."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "finálny-produkt",
      children: "Finálny produkt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Projekt priniesol plne funkčný SmartPot, ktorý obsahuje 3D tlačený kvetináč so vstavaným zásobníkom vody, vlhkostný senzor a displej, ktorý poskytuje okamžitú vizuálnu spätnú väzbu. Meranie vlhkosti je presné a používateľ je notifikovaný o stave pôdy jednoduchým vizuálnym indikátorom na displeji (percento + smajlík)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "finalny produkt",
        src: (__webpack_require__(72767)/* ["default"] */ .A) + "",
        width: "1282",
        height: "1709"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/implementation/code-links",
          children: "Odkazy na kód / repozitáre"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ012/",
        children: "⬅️ Projekt"
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



/***/ }),

/***/ 72767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/kvetinac_so_senzorom-30b4f696c4afa330e197f88726c292c0.png");

/***/ })

}]);