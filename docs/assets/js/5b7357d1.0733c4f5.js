"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[6733],{

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

/***/ 95636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000088_rca_obd_wifi_android_index_md_5b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000088-rca-obd-wifi-android-index-md-5b7.json
const site_docs_sk_knifes_k_000088_rca_obd_wifi_android_index_md_5b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000088-RCA-OBD-Wifi-Android/K000088","title":"K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)","description":"Ako diagnostikovať závadu v aute keď sa nedá naštartovať a servis je ďaleko? OBDII môže byť pomôcka","source":"@site/docs/sk/knifes/K000088-RCA-OBD-Wifi-Android/index.md","sourceDirName":"sk/knifes/K000088-RCA-OBD-Wifi-Android","slug":"/sk/knifes/K000088-RCA-OBD-Wifi-Android/","permalink":"/sk/knifes/K000088-RCA-OBD-Wifi-Android/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-07","fm_version_comment":"","id":"K000088","guid":"eb2e1db1-04e1-47df-b143-29b1113c2ca0","dao":"knife","title":"K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)","description":"Ako diagnostikovať závadu v aute keď sa nedá naštartovať a servis je ďaleko? OBDII môže byť pomôcka","author":"Roman Kazička","authors":["Roman Kazička"],"category":"Diagnostic","type":"RCA-Root Cause Analysis","priority":"","tags":["knife"],"locale":"sk","created":"2025-11-07","modified":"","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"mix","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)"},"sidebar":"tutorialSidebar","previous":{"title":"K000087 – GitHub-Create Release","permalink":"/sk/knifes/K000087-GitHub-Create-release/"},"next":{"title":"K000089 – Kedy SSh a kedy HTTPS?","permalink":"/sk/knifes/K000089-SmartGit-Nastavenie/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000088-RCA-OBD-Wifi-Android/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-07',
	fm_version_comment: '',
	id: 'K000088',
	guid: 'eb2e1db1-04e1-47df-b143-29b1113c2ca0',
	dao: 'knife',
	title: 'K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)',
	description: 'Ako diagnostikovať závadu v aute keď sa nedá naštartovať a servis je ďaleko? OBDII môže byť pomôcka',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička'
	],
	category: 'Diagnostic',
	type: 'RCA-Root Cause Analysis',
	priority: '',
	tags: [
		'knife'
	],
	locale: 'sk',
	created: '2025-11-07',
	modified: '',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: 'mix',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_label: 'K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)'
};
const contentTitle = 'RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)';

const assets = {

};



const toc = [{
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Testovací protokol",
  "id": "-testovací-protokol",
  "level": 2
}, {
  "value": "1️⃣ Sieťová konektivita",
  "id": "1️⃣-sieťová-konektivita",
  "level": 3
}, {
  "value": "2️⃣ Android-špecifické nastavenia",
  "id": "2️⃣-android-špecifické-nastavenia",
  "level": 3
}, {
  "value": "3️⃣ Krížový test",
  "id": "3️⃣-krížový-test",
  "level": 3
}, {
  "value": "4️⃣ Korelačná tabuľka výsledkov",
  "id": "4️⃣-korelačná-tabuľka-výsledkov",
  "level": 3
}, {
  "value": "🧠 Interpretácia",
  "id": "-interpretácia",
  "level": 2
}, {
  "value": "🧰 Odporúčané riešenia",
  "id": "-odporúčané-riešenia",
  "level": 2
}, {
  "value": "📚 Použité nástroje",
  "id": "-použité-nástroje",
  "level": 2
}, {
  "value": "🧾 Záver RCA",
  "id": "-záver-rca",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
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
        id: "rca-obdii-wifi-adaptér-nekomunikuje-s-automandroid-os",
        children: "RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["KNIFE K000088 created by Roman Kazička on 2025-11-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "GUID: eb2e1db1-04e1-47df-b143-29b1113c2ca0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Používateľ úspešne pingá Wi-Fi adaptér ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mobilly OBD-II WiFi (192.168.0.10)"
      }), ",", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "ale aplikácie (Car Scanner, ELM327 Identifier, Torque) hlásia ", (0,jsx_runtime.jsx)(_components.em, {
        children: "„Failed to connect to vehicle“"
      }), " alebo ", (0,jsx_runtime.jsx)(_components.em, {
        children: "„Unable to connect“"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Cieľom je určiť, či ide o ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "problém Android OS (softvérový)"
      }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adaptéra (hardvérový klon)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-testovací-protokol",
      children: "🧩 Testovací protokol"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1️⃣-sieťová-konektivita",
      children: "1️⃣ Sieťová konektivita"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postup"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Výsledok"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ping test"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Použi ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "PingTools → Ping 192.168.0.10"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ odpovede 2–4 ms – Wi-Fi vrstva funkčná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ELM327 Identifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spusť scan verzií 1.0–2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ „Unable to connect“ – nekomunikuje ELM čip"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Záver:"
      }), " Android komunikuje s IP vrstvou, ale adaptér neodpovedá na OBD príkazy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2️⃣-android-špecifické-nastavenia",
      children: "2️⃣ Android-špecifické nastavenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Nastavenie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Možná príčina"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Odporúčané riešenie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mobilné dáta"
            }), " zapnuté"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android presmeruje TCP na 4G"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "🔴 vypnúť počas testu"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Automatické prepínanie sietí"
            }), " („Switch to mobile data“)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi bez internetu sa zahodí"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vypnúť"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Private MAC / Randomized MAC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "adaptér nevie MAC rozpoznať"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "nastaviť „Použiť pôvodnú MAC“"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Povolenie lokálnej siete"
            }), " (Android 13+)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "appka blokovaná"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "povoliť Car Scanner prístup k „lokálnej sieti“"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Úspora batérie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ukončí sockety po 10 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pridať Car Scanner do výnimiek"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3️⃣-krížový-test",
      children: "3️⃣ Krížový test"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Test"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interpretácia"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pripoj adaptér k ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "iPhone / staršiemu Androidu (8–9)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ak tam funguje → problém Android OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Skús ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bluetooth adaptér (VGate iCar2 BT)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ak funguje → Wi-Fi časť chybná"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Použi ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "port scanner (1–40000)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ak žiadny otvorený port → falošný klon"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4️⃣-korelačná-tabuľka-výsledkov",
      children: "4️⃣ Korelačná tabuľka výsledkov"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Ping"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Port otvorený"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Car Scanner pripojenie"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Root Cause"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptér úplne nefunkčný"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wi-Fi živé, OBD čip mŕtvy (falošný klon)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Android blokuje socket / port"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OK – adaptér aj OS v poriadku"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-interpretácia",
      children: "🧠 Interpretácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Výsledky ukazujú scenár ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "✅ Ping, ❌ Port, ❌ ELM komunikácia"
      }), ",", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "čo potvrdzuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "falošný ELM327 v2.1 klon"
      }), " – Wi-Fi len vysiela, ale OBD časť neodpovedá."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-odporúčané-riešenia",
      children: "🧰 Odporúčané riešenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Úroveň"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Riešenie"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "🔹 Krátkodobé"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "použiť Bluetooth verziu (Car Scanner → Bluetooth 4.0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "🔹 Dlhodobé"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["vymeniť za ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "VGate iCar2 BT"
            }), " alebo ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "OBDLink LX/MX+"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "🔹 Overenie OS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "vypnúť mobilné dáta, zapnúť „zachovať Wi-Fi bez internetu“, povoliť prístup k lokálnej sieti"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-použité-nástroje",
      children: "📚 Použité nástroje"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Car Scanner ELM OBD2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ELM327 Identifier"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PingTools Network Utilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Android 11 Settings (Network, Battery, Permissions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-záver-rca",
      children: "🧾 Záver RCA"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Wi-Fi komunikácia funguje, OS Android paket prenáša,", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "ale ELM327-firmvér v zariadení ", (0,jsx_runtime.jsx)(_components.em, {
        children: "Mobilly OBD-II WiFi"
      }), " neodpovedá.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Príčina: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hardvérový klon bez plnohodnotného OBD čipu"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Odporúčanie: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reklamácia a náhrada za certifikovaný adaptér (VGate / OBDLink / UniCarScan)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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