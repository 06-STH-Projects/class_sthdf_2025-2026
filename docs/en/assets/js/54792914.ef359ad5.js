"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[66184],{

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

/***/ 33091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/nodyne-device-front-ec156f82abe72cf2e4851ce9c68ddd63.png");

/***/ }),

/***/ 53761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dashboard-full-5a4cb6908bb8b7ff1ed3b18baa54bb21.png");

/***/ }),

/***/ 56585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_045_deliverables_05_pitch_presentation_md_547_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-045-deliverables-05-pitch-presentation-md-547.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_045_deliverables_05_pitch_presentation_md_547_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/pitch_presentation","title":"🎤 Pitch Presentation - Nodyne","description":"Autor: Pavlo Spirin (ST045)","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables/05_pitch_presentation.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/pitch_presentation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/pitch_presentation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"📦 Project Outcomes","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/project-outcomes"},"next":{"title":"Nodyne: Systém detekcie spánku","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST045/deliverables/05_pitch_presentation.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = '🎤 Pitch Presentation - Nodyne';

const assets = {

};



const toc = [{
  "value": "1. Problém",
  "id": "1-problém",
  "level": 2
}, {
  "value": "Ospalosť za volantom zabíja",
  "id": "ospalosť-za-volantom-zabíja",
  "level": 3
}, {
  "value": "2. Riešenie",
  "id": "2-riešenie",
  "level": 2
}, {
  "value": "💡 Nodyne - Nositeľný detektor spánku za €35",
  "id": "-nodyne---nositeľný-detektor-spánku-za-35",
  "level": 3
}, {
  "value": "3. Hodnota",
  "id": "3-hodnota",
  "level": 2
}, {
  "value": "Pre koho je Nodyne",
  "id": "pre-koho-je-nodyne",
  "level": 3
}, {
  "value": "Čo získajú",
  "id": "čo-získajú",
  "level": 3
}, {
  "value": "4. Biznis model",
  "id": "4-biznis-model",
  "level": 2
}, {
  "value": "Trh: €2.5 miliardy globálne",
  "id": "trh-25-miliardy-globálne",
  "level": 3
}, {
  "value": "5. Tím",
  "id": "5-tím",
  "level": 2
}, {
  "value": "Pavlo Spirin - Founder &amp; Developer",
  "id": "pavlo-spirin---founder--developer",
  "level": 3
}, {
  "value": "6. Call to Action",
  "id": "6-call-to-action",
  "level": 2
}, {
  "value": "Čo potrebujem",
  "id": "čo-potrebujem",
  "level": 3
}, {
  "value": "Čo ponúkam",
  "id": "čo-ponúkam",
  "level": 3
}, {
  "value": "Demo",
  "id": "demo",
  "level": 2
}, {
  "value": "Quick Start Guide",
  "id": "quick-start-guide",
  "level": 3
}, {
  "value": "Real-World Test",
  "id": "real-world-test",
  "level": 3
}, {
  "value": "Kontakt",
  "id": "kontakt",
  "level": 2
}, {
  "value": "Ďakujem za pozornosť!",
  "id": "ďakujem-za-pozornosť",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
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
        id: "-pitch-presentation---nodyne",
        children: "🎤 Pitch Presentation - Nodyne"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Autor:"
      }), " Pavlo Spirin (ST045)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Projekt:"
      }), " PRJ_025_ST_045_Nodyne\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dátum:"
      }), " Januar 2026"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-problém",
      children: "1. Problém"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ospalosť-za-volantom-zabíja",
      children: "Ospalosť za volantom zabíja"
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
        children: ["Existujúce riešenia stoja ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "€500-1000"
        }), " - príliš drahé pre bežných vodičov"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-riešenie",
      children: "2. Riešenie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "-nodyne---nositeľný-detektor-spánku-za-35",
      children: "💡 Nodyne - Nositeľný detektor spánku za €35"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Nodyne zariadenie",
        src: (__webpack_require__(33091)/* ["default"] */ .A) + "",
        width: "800",
        height: "500"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ako to funguje:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMU senzor"
        }), " monitoruje polohu hlavy v reálnom čase"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5 detekčných algoritmov"
        }), " rozpoznávajú vzory zaspávania"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**Detekcia < 1 sekunda ** → zvukový alarm prebudí vodiča"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tri kroky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nasaď čelenku"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kalibruj 3 sekundy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Jazdi bezpečne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-hodnota",
      children: "3. Hodnota"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pre-koho-je-nodyne",
      children: "Pre koho je Nodyne"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vodiči kamiónov"
        }), " - dlhé trasy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Doručovatelia"
        }), " - DHL, Amazon, pošta"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nočné smeny"
        }), " - zdravotníci, záchranári"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Osobná doprava"
        }), " - dlhé cesty"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-získajú",
      children: "Čo získajú"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "€35 vs €500-1000"
        }), " (10x lacnejšie)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zachraňuje životy"
        }), " - prevencia nehôd"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nenápadné"
        }), " - žiadna inštalácia do vozidla"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "5-8 hodín"
        }), " výdrž batérie"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-biznis-model",
      children: "4. Biznis model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "trh-25-miliardy-globálne",
      children: "Trh: €2.5 miliardy globálne"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fáza 1: B2C Hardware"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predaj: €50, náklady: €35, marža: 30%"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rok 1: 10,000 kusov = €500K tržby"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fáza 2: B2B Licencie"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Partnerstvá s logistickými firmami"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SaaS platforma: €5-10/zariadenie/mesiac"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rok 2: €1.2M"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fáza 3: Premium Features"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mobilná aplikácia, cloud analytics, GPS tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rok 3: €5M+"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tím",
      children: "5. Tím"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pavlo-spirin---founder--developer",
      children: "Pavlo Spirin - Founder & Developer"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo som dosiahol:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Funkčný MVP za ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "8 týždňov"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "100% splnenie"
        }), " cieľov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-world testovanie"
        }), " (>2 hodiny v reálnom vozidle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open-source"
        }), " na GitHub"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Kompetencie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Embedded systémy (Arduino, ESP32)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Full-stack development (Web Serial API, Three.js)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Kompletný SDLC (9 fáz)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-call-to-action",
      children: "6. Call to Action"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-potrebujem",
      children: "Čo potrebujem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "€50,000 - €100,000 seed funding"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Použitie kapitálu:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "€30K - Výroba prvých 1,000 kusov"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "€15K - Certifikácia (CE)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "€10K - Marketing & Kickstarter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "€25K - Plat vývojára (6 mesiacov)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "čo-ponúkam",
      children: "Čo ponúkam"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "10-20% equity"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ROI 300-500%"
        }), " v 2 rokoch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Impact"
        }), " - technológia, ktorá zachraňuje životy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "demo",
      children: "Demo"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-start-guide",
      children: "Quick Start Guide"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/abc9rMlaIgM",
        children: "Nodyne - Ako používať"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-test",
      children: "Real-World Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "https://youtu.be/x0nncwOG13A",
        children: "Testovanie v reálnom vozidle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Dashboard",
        src: (__webpack_require__(53761)/* ["default"] */ .A) + "",
        width: "1862",
        height: "965"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kontakt",
      children: "Kontakt"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pavlo Spirin"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:xspirin@stuba.sk",
          children: "xspirin@stuba.sk"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://github.com/paulintheclub",
          children: "@paulintheclub"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/paulintheclub/nodyne-firmware",
              children: "Firmware"
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "https://github.com/paulintheclub/nodyne-web",
              children: "Dashboard"
            })
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dokumentácia:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
          children: "PRJ025 - SDLC"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/knowledge-contribution",
          children: "KNIFE článok"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ďakujem-za-pozornosť",
      children: "Ďakujem za pozornosť!"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Nodyne - Technológia, ktorá zachraňuje životy."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/",
          children: "↩️ Späť"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
          children: "📊 Projekt PRJ025"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST045/deliverables/final_presentation",
          children: "🎤 Final Presentation"
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