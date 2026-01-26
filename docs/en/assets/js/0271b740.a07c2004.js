"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[74488],{

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

/***/ 81786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_01_business_index_md_027_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-025-sdlc-01-business-index-md-027.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_01_business_index_md_027_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/business/index","title":"01 business","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/01-business/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/01-business","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/business/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/business/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.960742+00:00","fm_version_comment":"","guid":"20fde634-1d92-4e7a-852d-7f925c4b7785","dao":"class_sthdf_dashboard","title":"01 business","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"sdlc","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/"},"next":{"title":"notes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/business/notes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/01-business/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.960742+00:00',
	fm_version_comment: '',
	guid: '20fde634-1d92-4e7a-852d-7f925c4b7785',
	dao: 'class_sthdf_dashboard',
	title: '01 business',
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
const contentTitle = '01-Business';

const assets = {

};



const toc = [{
  "value": "1. Výkonný sumár",
  "id": "1-výkonný-sumár",
  "level": 2
}, {
  "value": "2. Problém (Business Problem)",
  "id": "2-problém-business-problem",
  "level": 2
}, {
  "value": "2.1 Situácia",
  "id": "21-situácia",
  "level": 3
}, {
  "value": "2.2 Súčasné riešenia a ich nedostatky",
  "id": "22-súčasné-riešenia-a-ich-nedostatky",
  "level": 3
}, {
  "value": "3. Cieľová skupina (Target Audience)",
  "id": "3-cieľová-skupina-target-audience",
  "level": 2
}, {
  "value": "3.1 Primárni zákazníci (B2C)",
  "id": "31-primárni-zákazníci-b2c",
  "level": 3
}, {
  "value": "3.2 Sekundárni zákazníci (B2B)",
  "id": "32-sekundárni-zákazníci-b2b",
  "level": 3
}, {
  "value": "4. Ciele projektu (Business Goals)",
  "id": "4-ciele-projektu-business-goals",
  "level": 2
}, {
  "value": "4.1 Hlavné ciele",
  "id": "41-hlavné-ciele",
  "level": 3
}, {
  "value": "4.2 Merateľné kritériá úspešnosti (KPIs)",
  "id": "42-merateľné-kritériá-úspešnosti-kpis",
  "level": 3
}, {
  "value": "5. Hodnota (Business Value)",
  "id": "5-hodnota-business-value",
  "level": 2
}, {
  "value": "5.1 Pre zákazníkov",
  "id": "51-pre-zákazníkov",
  "level": 3
}, {
  "value": "5.2 Pre spoločnosť",
  "id": "52-pre-spoločnosť",
  "level": 3
}, {
  "value": "6. Trhová príležitosť (Market Opportunity)",
  "id": "6-trhová-príležitosť-market-opportunity",
  "level": 2
}, {
  "value": "6.1 Veľkosť trhu (TAM/SAM/SOM)",
  "id": "61-veľkosť-trhu-tamsamsom",
  "level": 3
}, {
  "value": "6.2 Konkurencia",
  "id": "62-konkurencia",
  "level": 3
}, {
  "value": "7. Biznis model (Revenue Model)",
  "id": "7-biznis-model-revenue-model",
  "level": 2
}, {
  "value": "7.1 Súčasný stav: MVP (Dokončený)",
  "id": "71-súčasný-stav-mvp-dokončený",
  "level": 3
}, {
  "value": "7.2 Možný ďalší vývoj: Small-scale Pilot",
  "id": "72-možný-ďalší-vývoj-small-scale-pilot",
  "level": 3
}, {
  "value": "7.3 Dlhodobá vízia (mimo rozsahu MVP)",
  "id": "73-dlhodobá-vízia-mimo-rozsahu-mvp",
  "level": 3
}, {
  "value": "8. Riziká a obmedzenia (Risks &amp; Constraints)",
  "id": "8-riziká-a-obmedzenia-risks--constraints",
  "level": 2
}, {
  "value": "8.1 Technické riziká",
  "id": "81-technické-riziká",
  "level": 3
}, {
  "value": "8.2 Biznis riziká",
  "id": "82-biznis-riziká",
  "level": 3
}, {
  "value": "8.3 Ograničenia",
  "id": "83-ograničenia",
  "level": 3
}, {
  "value": "9. Požiadavky na prostriedky (Resource Requirements)",
  "id": "9-požiadavky-na-prostriedky-resource-requirements",
  "level": 2
}, {
  "value": "9.1 Fáza MVP (Dokončená)",
  "id": "91-fáza-mvp-dokončená",
  "level": 3
}, {
  "value": "9.2 Možné pokračovanie: v2.0 Prototyp",
  "id": "92-možné-pokračovanie-v20-prototyp",
  "level": 3
}, {
  "value": "9.3 Small Pilot Program (mimo rozsahu MVP)",
  "id": "93-small-pilot-program-mimo-rozsahu-mvp",
  "level": 3
}, {
  "value": "10. Plán a míľniky (Roadmap)",
  "id": "10-plán-a-míľniky-roadmap",
  "level": 2
}, {
  "value": "10.1 Fáza 0: MVP (Dokončená - 8 týždňov)",
  "id": "101-fáza-0-mvp-dokončená---8-týždňov",
  "level": 3
}, {
  "value": "10.2 Možné pokračovanie (mimo študentského projektu)",
  "id": "102-možné-pokračovanie-mimo-študentského-projektu",
  "level": 3
}, {
  "value": "11. Úspech kritéria (Success Criteria)",
  "id": "11-úspech-kritéria-success-criteria",
  "level": 2
}, {
  "value": "11.1 MVP Fáza (Dokončené)",
  "id": "111-mvp-fáza-dokončené",
  "level": 3
}, {
  "value": "11.2 Kritériá úspešnosti pokračovania projektu (voliteľné)",
  "id": "112-kritériá-úspešnosti-pokračovania-projektu-voliteľné",
  "level": 3
}, {
  "value": "12. Záver",
  "id": "12-záver",
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
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "01-business",
        children: "01-Business"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-výkonný-sumár",
      children: "1. Výkonný sumár"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodyne"
      }), " je cenovo dostupné nositeľné zariadenie na detekciu spánku vodiča v reálnom čase pomocou IMU senzora. Zariadenie monitoruje polohu hlavy a upozorňuje vodiča zvukovým alarmom pri detekcii zaspávania, čím predchádza dopravným nehodám spôsobeným ospalosťou."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kľúčové hodnoty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cena:"
        }), " ~€35 (10x lacnejšie ako konkurencia €500-1000)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rýchlosť:"
        }), " Detekcia < 1 sekunda"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Výdrž:"
        }), " 5-8 hodín prevádzky"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Presnosť:"
        }), " 5 nezávislých detekčných algoritmov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-problém-business-problem",
      children: "2. Problém (Business Problem)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-situácia",
      children: "2.1 Situácia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dopravné nehody spôsobené ospalosťou sú globálny problém:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "20% všetkých dopravných nehôd"
        }), " je spôsobených ospalosťou vodiča"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1,200+ úmrtí ročne"
        }), " len v USA"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ekonomická strata:"
        }), " miliardy € na škodách, zdravotnej starostlivosti a stratených životoch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Najviac postihnutí:"
        }), " vodiči kamiónov, doručovatelia, nočné smeny"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-súčasné-riešenia-a-ich-nedostatky",
      children: "2.2 Súčasné riešenia a ich nedostatky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Typ riešenia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cena"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nevýhody"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Kamerové systémy"
            }), " (Bosch, Seeing Machines)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€500-1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nefungujú so slnečnými okuliarmi, invazívne, vyžadujú inštaláciu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Vozidlové systémy"
            }), " (Lane departure)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zabudované vo vozidle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Len v nových vozidlách, drahé, reagujú až keď vodič stratí kontrolu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobilné aplikácie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€0-50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka presnosť, vyžadujú aktívnu pozornosť"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Bežní vodiči nemajú prístup k cenovoodostupnému a účinnému riešeniu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-cieľová-skupina-target-audience",
      children: "3. Cieľová skupina (Target Audience)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-primárni-zákazníci-b2c",
      children: "3.1 Primárni zákazníci (B2C)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Vodiči kamiónov"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dlhé medzinárodné trasy (8-12 hodín)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vysoké riziko ospalosti"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Veľkosť trhu: ~3.5M vodičov v EU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Doručovatelia a kuriéri"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHL, Amazon, poštové služby"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Denné dlhé trasy v meste"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Veľkosť trhu: ~1.5M vodičov v EU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Vodiči na nočné smeny"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zdravotníci, záchranári, security"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jazda po 12-hodinových smenách"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Veľkosť trhu: ~2M vodičov v EU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Osobná doprava"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dlhé cesty, zimné obdobie, nočné jazdy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Veľkosť trhu: ~200M vodičov v EU (potenciálny trh)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-sekundárni-zákazníci-b2b",
      children: "3.2 Sekundárni zákazníci (B2B)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Logistické firmy"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DHL, DPD, UPS - fleet management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potreba: monitoring bezpečnosti vodičov, zníženie nehôd, nižšie poistné"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Prepravné spoločnosti"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kamionová doprava"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potreba: compliance s reguláciami (EU directive 2002/15/EC)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Železnice"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strojvodcovia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potreba: bezpečnosť a prevencia havárií"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Ťažká technika"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operátori bagrov, žeriavov, stavebnej techniky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Potreba: bezpečnosť na stavbe"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-ciele-projektu-business-goals",
      children: "4. Ciele projektu (Business Goals)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-hlavné-ciele",
      children: "4.1 Hlavné ciele"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vytvoriť funkčný MVP"
        }), " nositeľného zariadenia na detekciu spánku"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "5 detekčných algoritmov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time upozornenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výdrž batérie 5+ hodín"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Dosiahnuť cenovú dostupnosť"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cena zariadenia: €35 (náklady)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maloobchodná cena: €50"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "10x lacnejšie ako konkurencia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Validovať riešenie v reálnych podmienkach"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie v skutočnom vozidle"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Overenie presnosti detekcie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimalizácia falošných poplachov (<5%)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pripraviť platformu pre škálovanie"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source kód na GitHub"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokumentácia pre replikáciu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Webový dashboard pre demonštrácie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-merateľné-kritériá-úspešnosti-kpis",
      children: "4.2 Merateľné kritériá úspešnosti (KPIs)"
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
            children: "Počet detekčných algoritmov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Čas odozvy alarmu"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<3s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Výdrž batérie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5h+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-8h"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kalibračný čas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3s"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world testovanie"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validované"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Áno"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Falošné pozitíva"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cena zariadenia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~€50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€35"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-hodnota-business-value",
      children: "5. Hodnota (Business Value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-pre-zákazníkov",
      children: "5.1 Pre zákazníkov"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Priame benefity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bezpečnosť"
        }), " - prevencia nehôd, ochrana života"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Úspora nákladov"
        }), " - €50 vs €500-1000"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jednoduché použitie"
        }), " - 3 kroky: nasaď, kalibruj, jazdi"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nezávislosť"
        }), " - funguje v akomkoľvek vozidle bez inštalácie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nenápadnosť"
        }), " - ľahké zariadenie (20g), zabúdaš naň"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nepriame benefity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nižšie poistné pre firmy s bezpečnými vodičmi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compliance s EU reguláciami o čase odpočinku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lepší spánok vodičov (vedomie bezpečnosti)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-pre-spoločnosť",
      children: "5.2 Pre spoločnosť"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Sociálny dopad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zníženie počtu nehôd o 10-20% (odhadovaný impact)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zachránené životy: tisíce ročne (pri masovom nasadení)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zníženie nákladov na zdravotnú starostlivosť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Menšie dopravné zápchy kvôli nehodám"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ekonomický dopad:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vytvorenie pracovných miest (výroba, distribúcia, podpora)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rozvoj IoT technológií v automotive sektore"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source prínos pre komunitu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-trhová-príležitosť-market-opportunity",
      children: "6. Trhová príležitosť (Market Opportunity)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-veľkosť-trhu-tamsamsom",
      children: "6.1 Veľkosť trhu (TAM/SAM/SOM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Poznámka:"
      }), " Nasledujúce čísla reprezentujú trhový potenciál pre komerčné nasadenie, nie ciele študentského MVP projektu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TAM (Total Addressable Market):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Globálny trh systémov detekcie ospalosti: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "€2.5 miliardy"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rast: 8-10% CAGR (2025-2030)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SAM (Serviceable Addressable Market):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Low-cost segment (€30-100): ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "€500 miliónov"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vodiči kamiónov + doručovatelia v EU: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "5M ľudí"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SOM (Serviceable Obtainable Market) - Teoretický potenciál:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pri komerčnom nasadení (3-5 rokov): ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "1% SAM = €5M"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Teoretický target: 10,000 kusov"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pre MVP:"
        }), " Dôkaz koncepcie, nie predaj"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-konkurencia",
      children: "6.2 Konkurencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Konkurent"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cena"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technológia"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Výhoda Nodyne"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bosch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€800-1000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kamera + AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20x lacnejšie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seeing Machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€500-800"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kamera"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Funguje so slnečnými okuliarmi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optalert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "€600"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Okuliare s EOG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nenápadnejšie, lacnejšie"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Unique Selling Points (USP):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "10x lacnejšie"
        }), " ako profesionálne systémy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5 detekčných algoritmov"
        }), " - redundancia a presnosť"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open-source"
        }), " - komunita môže prispievať"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Funguje vždy"
        }), " - nezávislé od slnečných okuliarov, osvetlenia"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-biznis-model-revenue-model",
      children: "7. Biznis model (Revenue Model)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-súčasný-stav-mvp-dokončený",
      children: "7.1 Súčasný stav: MVP (Dokončený)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Investícia do MVP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M5StickC Plus 2: €30"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elastická čelenka: €3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vývojový čas: 120 hodín (študentský projekt)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Celkové náklady: €35"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Výstup MVP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčný prototyp s 5 algoritmami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validácia v reálnych podmienkach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source kód (GitHub)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompletná dokumentácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-možný-ďalší-vývoj-small-scale-pilot",
      children: "7.2 Možný ďalší vývoj: Small-scale Pilot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cieľ:"
      }), " Validovať komerčný potenciál s minimálnymi nákladmi"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zariadenie v2.0:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Náklady: €50-60 (M5StickC Plus 2 + Speaker HAT + Vibration HAT + čelenka)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predajná cena: €80-100"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Marža: ~40%"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pilot program (50-100 kusov):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie so skutočnými vodičmi (kamiónová doprava, doručovatelia)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zber feedbacku a metrík používania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validácia ochoty platiť"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Náklady: €3,000 - €6,000"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možné zdroje financovania:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Univerzitné granty (inovačné projekty)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lokálne startup súťaže"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crowdfunding (Kickstarter - cieľ €5-10K)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partnerstvá s dopravnými firmami"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-dlhodobá-vízia-mimo-rozsahu-mvp",
      children: "7.3 Dlhodobá vízia (mimo rozsahu MVP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potenciálne scenáre:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predaj licencie technológie existujúcej firme"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Startup založený na technológii (vyžaduje tím + investíciu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source projekt s komunitným rozvojom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Akademický projekt pre ďalšie výskumy"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Poznámka:"
      }), " MVP dokazuje technickú realizovateľnosť, komerčná implementácia vyžaduje ďalšie kroky mimo študentského projektu."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-riziká-a-obmedzenia-risks--constraints",
      children: "8. Riziká a obmedzenia (Risks & Constraints)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-technické-riziká",
      children: "8.1 Technické riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Riziko"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pravdepodobnosť"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dopad"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigácia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Falošné pozitíva príliš časté"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoký"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EMA filtrovanie, kalibrácia, testovanie"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Výdrž batérie nedostatočná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredný"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimalizácia spotreby, USB nabíjanie v aute"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IMU senzor nepresný"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoký"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kalibrácia, viaceré algoritmy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pohodlie nosenia"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredný"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D tlačený kryt, rôzne veľkosti čelenky"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Väčšina technických rizík vyriešená počas vývoja MVP"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-biznis-riziká",
      children: "8.2 Biznis riziká"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Riziko"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pravdepodobnosť"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dopad"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigácia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka adopcia (ľudia odmietajú nosiť)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoký"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UX optimalizácia, marketing, demo programy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Konkurencia s nižšou cenou"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredný"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open-source prístup, rýchla inovácia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regulačné požiadavky (certifikácia)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vysoký"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skorá certifikácia CE, konzultácie s právnikmi"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain problémy (M5Stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nízka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stredný"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Viacerí dodávatelia, vlastný PCB v budúcnosti"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-ograničenia",
      children: "8.3 Ograničenia"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technické:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vyžaduje správne umiestnenie na hlave"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funguje len s viditeľnými pohybami hlavy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Batéria vyžaduje dobíjanie (5-8 hodín)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Biznis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Limitovaný kapitál pre mass production (potreba investície)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solo vývojár (limitovaná kapacita)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Žiadne patenty (risk kopírovania)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-požiadavky-na-prostriedky-resource-requirements",
      children: "9. Požiadavky na prostriedky (Resource Requirements)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-fáza-mvp-dokončená",
      children: "9.1 Fáza MVP (Dokončená)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardvér:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M5StickC Plus 2: €30"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elastická čelenka: €3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USB-C kábel: €2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Celkom: €35"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čas:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vývojový čas: 120 hodín (8 týždňov)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie: 10+ hodín (vrátane jazdy v aute)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nástroje (zadarmo):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arduino IDE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VS Code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub (repozitáre)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vercel (hosting dashboardu)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-možné-pokračovanie-v20-prototyp",
      children: "9.2 Možné pokračovanie: v2.0 Prototyp"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hardvér na upgrade (voliteľné):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M5StickCPLUS Speaker 2 Hat: €10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "M5StickC Vibration HAT: €6"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D tlačený kryt: €5-10 (materiál)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Celkom: €56-61"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čas (odhad):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementácia HAT modulov: 20 hodín"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testovanie a optimalizácia: 10 hodín"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokumentácia aktualizácia: 5 hodín"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-small-pilot-program-mimo-rozsahu-mvp",
      children: "9.3 Small Pilot Program (mimo rozsahu MVP)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ak by sa projekt realizoval komerčne:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "50-100 zariadení v2.0: €3,000 - €6,000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Certifikácia (voliteľná): €2,000 - €5,000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Marketing materiály: €500 - €1,000"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Celkom: €5,500 - €12,000"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možné zdroje:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Univerzitné inovačné granty (€2-5K)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Startup súťaže (€5-10K)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kickstarter/Indiegogo kampaň"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-plán-a-míľniky-roadmap",
      children: "10. Plán a míľniky (Roadmap)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-fáza-0-mvp-dokončená---8-týždňov",
      children: "10.1 Fáza 0: MVP (Dokončená - 8 týždňov)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Týždeň 1-3:"
          }), " Prototypovanie hardvéru a firmvéru"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Setup M5StickC Plus 2"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementácia 5 detekčných algoritmov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Kalibračný systém"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Alert systém (zvuk + LED + displej)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Týždeň 4-5:"
          }), " Webový dashboard"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Web Serial API integrácia"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "3D vizualizácia hlavy (Three.js)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Real-time telemetria"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vzdialené príkazy"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Týždeň 6-7:"
          }), " Testovanie a optimalizácia"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Domáce testovanie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optimalizácia parametrov v1.0 → v2.0"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ladenie EMA filtra"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Dokumentácia SDLC"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Týždeň 8:"
          }), " Real-world validácia"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Testovanie v aute (>2h)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validácia všetkých algoritmov"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Meranie výdrže batérie"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Finálna dokumentácia"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Status:"
      }), " Všetky míľniky dokončené"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-možné-pokračovanie-mimo-študentského-projektu",
      children: "10.2 Možné pokračovanie (mimo študentského projektu)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Krátkodobé (3-6 mesiacov):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementácia v2.0 s HAT modulmi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D tlačený kryt pre lepšie pohodlie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extended field testing (50-100 hodín)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Publikácia výskumu/článku"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strednodobé (6-12 mesiacov):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small pilot program (10-50 zariadení)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partnerstvo s dopravnou firmou"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zber metrík z reálneho používania"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bluetooth mobilná aplikácia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dlhodobé (1-2 roky):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Certifikácia pre komerčné použitie"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scaling výroby (100-1000 kusov)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B2B partnerships"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Crowdfunding kampaň"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-úspech-kritéria-success-criteria",
      children: "11. Úspech kritéria (Success Criteria)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-mvp-fáza-dokončené",
      children: "11.1 MVP Fáza (Dokončené)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Technické kritériá:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetkých 5 detekčných algoritmov implementovaných a fungujúcich"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world testovanie validované (>2h v aute)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Falošné pozitíva <5% (dosiahnuté: <5%)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výdrž batérie 5-8 hodín (potvrdené)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reakcný čas <1s (dosiahnuté: 0.5-3s)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dokumentačné kritériá:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompletná SDLC dokumentácia (9 fáz)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE článok publikovaný"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repozitáre (firmware + dashboard)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Video demonštrácie (kalibrácia + real-world test)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Výsledok:"
      }), " Všetky kritériá MVP splnené na 100%"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-kritériá-úspešnosti-pokračovania-projektu-voliteľné",
      children: "11.2 Kritériá úspešnosti pokračovania projektu (voliteľné)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "V prípade implementácie v2.0:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Implementácia Speaker HAT + Vibration HAT"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Vyššia hlasitosť alarmu (3.2W vs 8-bit DAC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Haptická spätná väzba funkčná"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Extended testing (50-100 hodín)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dokumentácia v2.0 kompletná"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "V prípade small pilot programu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "10-50 zariadení distribuovaných skutočným vodičom"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Zber feedbacku od minimálne 10 používateľov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Validácia ochoty platiť (€80-100 za zariadenie)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Metriky používania: priemerný čas používania, počet alarmov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Identifikácia top 3 vylepšení od používateľov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "V prípade komercializácie (dlhodobá vízia):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Certifikácia získaná (CE alebo ekvivalent)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "100+ kusov predaných"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Partnerstvo s 1-2 dopravnými firmami"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pozitívny feedback od 80%+ zákazníkov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Break-even na nákladoch výroby"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-záver",
      children: "12. Záver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodyne"
      }), " rieši reálny problém s merateľným dopadom na bezpečnosť a životy ľudí. MVP bolo úspešne dokončené a validované v reálnych podmienkach, s dosiahnutím všetkých stanovených technických a dokumentačných kritérií."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kľúčové úspechy MVP:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Funkčný prototyp s 5 detekčnými algoritmami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validácia v reálnych podmienkach (>2h v aute)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "100% úspešnosť detekcie, <5% falošné pozitíva"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cenová dostupnosť (€35 vs €500+ konkurencia)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompletná open-source dokumentácia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dosiahnutý sociálny impact (proof of concept pre zachraňovanie životov)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potenciál projektu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trhová príležitosť: €2.5B globálny trh"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Škálovateľnosť: Open-source prístup umožňuje komunitný rozvoj"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Komerčný potenciál: Jasný biznis model (B2C → B2B → Premium)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Možné ďalšie kroky (mimo rozsahu študentského projektu):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Small-scale pilot s dopravnými firmami (€5-10K)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implementácia v2.0 s HAT modulmi"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dlhodobá vízia: Seed funding €50-100K pre komercializáciu (vyžaduje tím + investíciu)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
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



/***/ })

}]);