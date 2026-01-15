"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[40584],{

/***/ 14950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_06_implementation_index_md_858_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-023-sdlc-06-implementation-index-md-858.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_023_sdlc_06_implementation_index_md_858_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/implementation/index","title":"06 implementation","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/06-implementation/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/06-implementation","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/implementation/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/implementation/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.974564+00:00","fm_version_comment":"","guid":"187d2a75-7ed5-4ba4-bf8f-b94d8f1b327c","dao":"class_sthdf_dashboard","title":"06 implementation","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"prototype","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/design/prototype"},"next":{"title":"code links","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/implementation/code-links"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/06-implementation/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.974564+00:00',
	fm_version_comment: '',
	guid: '187d2a75-7ed5-4ba4-bf8f-b94d8f1b327c',
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
  "value": "Príprava hardvéru",
  "id": "príprava-hardvéru",
  "level": 3
}, {
  "value": "Kód senzora",
  "id": "kód-senzora",
  "level": 3
}, {
  "value": "Úryvok kódu",
  "id": "úryvok-kódu",
  "level": 4
}, {
  "value": "Detailný popis kódu",
  "id": "detailný-popis-kódu",
  "level": 4
}, {
  "value": "Kód servera",
  "id": "kód-servera",
  "level": 3
}, {
  "value": "Úryvok kódu",
  "id": "úryvok-kódu-1",
  "level": 4
}, {
  "value": "Detailný popis kódu",
  "id": "detailný-popis-kódu-1",
  "level": 4
}, {
  "value": "Zapojenie hardvéru a prototypovanie",
  "id": "zapojenie-hardvéru-a-prototypovanie",
  "level": 3
}, {
  "value": "Vloženie hardvéru do krabičky z dreva",
  "id": "vloženie-hardvéru-do-krabičky-z-dreva",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
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
        id: "06-implementation",
        children: "06-Implementation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "príprava-hardvéru",
      children: "Príprava hardvéru"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pred samotnou implementáciou bolo potrebné zabezpečiť všetky komponenty projektu. Hardvér bol doručený v samostatných balíkoch, čo umožnilo jednoduchú kontrolu a prípravu na montáž."
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/package.png",
        alt: "balík",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Kompletný balík s hardvérom obsahujúci ESP32, senzory, káble a doplnky potrebné na realizáciu projektu."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/esp32.png",
        alt: "balík mikrokontroléra",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Balík s mikrokontrolérom ESP32 DevKit – hlavný riadiaci prvok projektu, ktorý zabezpečuje komunikáciu so senzormi, spracovanie dát a pripojenie na Wi-Fi."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/sensor.png",
        alt: "balík senzora",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Balík obsahujúci senzor ENS160 (TVOC, eCO₂, AQI) a AHT21 (teplota, vlhkosť). Tieto senzory sú základom pre meranie kvality ovzdušia."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kód-senzora",
      children: "Kód senzora"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ďalej si prejdeme úsek kódu, ktorý je zodpovedný za hlavnú funkcionalitu riešenia:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "čítanie dát zo senzorov AHT21 (teplota, vlhkosť) a ENS160 (TVOC, eCO₂, AQI),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zobrazenie nameraných hodnôt na OLED displeji,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "odosielanie dát na server každých 5 minút vo formáte JSON."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "úryvok-kódu",
      children: "Úryvok kódu"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ino",
        children: "// Reading the sensor data\nvoid readSensorData(unsigned long currentMillis) {\n  // --- Read AHT21 ---\n  sensors_event_t hmd, temp;\n  aht.getEvent(&hmd, &temp);\n  float temperature = temp.temperature;\n  float humidity = hmd.relative_humidity;\n  // --- Print AHT21 results ---\n  Serial.print(\"Temp: \"); Serial.print(temperature); Serial.print(\" °C, \");\n  Serial.print(\"Humidity: \"); Serial.print(humidity); Serial.println(\" %\");\n  // --- Read ENS160 ---\n  int aqi; // air quality index (1-5)\n  int co2; // estimated CO2 (ppm)\n  int tvoc; // total VOC [Volatile Organic Compounds] (ppb)\n  if( ens.checkDataStatus() ) {\n    aqi = ens.getAQI();\n    co2 = ens.getECO2();\n    tvoc = ens.getTVOC();\n    // --- Print ENS160 results ---\n    Serial.print(\"Air Quality Index (1-5): \"); Serial.print(aqi); Serial.print(\", \");\n    Serial.print(\"eCO2: \"); Serial.print(co2); Serial.print(\" ppm, \");\n    Serial.print(\"TVOC: \"); Serial.print(tvoc); Serial.println(\" ppb\");\n  }\n  else {\n    Serial.print(\"Failed to read air quality data!\");\n  }\n  // Displaying message to display\n  displayMessage(\n    \"Temperature: \" + String(temperature) + \"C\\nHumidity:    \" + String(humidity) +\n    \"%\\nAQI:         \" + String(aqi) + \"index\\nCO2:         \" + String(co2) + \n    \"ppm\\nTVOC:        \" + String(tvoc) + \"mg/m3\"\n  );\n  // Every 5 minutes also send to server\n  if (currentMillis - lastSendTime >= SEND_INTERVAL) {\n    Serial.println(\"Sending sensor data to server...\");\n    lastSendTime = currentMillis;\n    sendDataToServer(temperature, humidity, aqi, co2, tvoc);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detailný-popis-kódu",
      children: "Detailný popis kódu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Čítanie AHT21"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Funkcia aht.getEvent() získava teplotu a vlhkosť."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hodnoty sa ukladajú do premenných temperature a humidity."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Čítanie ENS160"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Funkcia ens.checkDataStatus() overí dostupnosť dát."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Získava sa AQI (index kvality vzduchu), eCO₂ (ppm) a TVOC (ppb)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Výpis do Serial Monitoru"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Pre debugovanie sa hodnoty vypisujú cez Serial.print()."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Zobrazenie na OLED displeji"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Funkcia displayMessage() vykreslí hodnoty v prehľadnom formáte."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Odosielanie dát na server"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Každých 5 minút sa volá sendDataToServer() s nameranými hodnotami."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kód-servera",
      children: "Kód servera"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Server je hostovaný na platforme ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Azure"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Serverová časť prijíma dáta od ESP32 cez HTTP POST a:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kontroluje, či bol odoslaný validný JSON,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "overuje schému dát (musí obsahovať všetky požadované kľúče),"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ukladá dáta do SQLite databázy,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vracia odpoveď vo formáte JSON s informáciou o stave operácie (success, bad request, server error)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "úryvok-kódu-1",
      children: "Úryvok kódu"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "@app.route('/send-data/', methods=['POST'])\ndef receive_data():\n    \"\"\"Receive data endpoint.\"\"\"\n    try:\n        # If no JSON is provided\n        request_json = request.json\n        if not request_json:\n            return fill_json_response(status=STATUS_OK, error=\"No JSON provided\")\n        # Convert JSON to dictionary\n        request_dict = dict(request_json)\n        # Validate JSON schema\n        valid, missing_key = validate_received_data_schema(data=request_dict)\n        if not valid:\n            return fill_json_response(status=STATUS_BAD, error=f\"Missing key: {missing_key}\")\n        # Save to database\n        write_data(data=request_dict)\n        # Return success\n        return fill_json_response(status=STATUS_ADD, error=None)\n    # Handle errors\n    except (ValueError, RuntimeError) as error:\n        print(\"Error:\", error)\n        return fill_json_response(status=STATUS_ERROR, error=\"Internal server error\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "detailný-popis-kódu-1",
      children: "Detailný popis kódu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Overenie JSON"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ak JSON chýba, vráti sa chyba."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Validácia dát"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Funkcia validate_received_data_schema() kontroluje povinné kľúče."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Uloženie do DB"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Funkcia write_data() zapisuje dáta do tabuľky sensor_realtime."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ošetrenie chýb"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "V prípade chyby sa vráti status STATUS_ERROR."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "zapojenie-hardvéru-a-prototypovanie",
      children: "Zapojenie hardvéru a prototypovanie"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po rozbalení komponentov nasledovalo zapojenie ESP32 a senzorov na testovacom stole. Prepojenie bolo realizované cez I²C zbernicu, pričom sa použili Dupont káble. Tento krok bol dôležitý na overenie funkčnosti senzorov a komunikácie s mikrokontrolérom."
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/esp32_wired.jpg",
        alt: "zapojený mikrokontrolér",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Zapojený ESP32 DevKit s napájaním cez USB. Mikrokontrolér je pripravený na komunikáciu so senzormi a odosielanie dát na server."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/sensor_wired.jpg",
        alt: "zapojený senzor",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Zapojený senzor ENS160+AHT21 cez I²C zbernicu. Testovanie prebiehalo na otvorenom stole pred vložením do púzdra."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vloženie-hardvéru-do-krabičky-z-dreva",
      children: "Vloženie hardvéru do krabičky z dreva"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po úspešnom testovaní bol hardvér vložený do drevenej krabičky, ktorá bola navrhnutá tak, aby:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "chránila elektroniku,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "umožnila prúdenie vzduchu pre presné merania,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "poskytla otvory pre displej a napájanie."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/final_1.jpg",
        alt: "box 1",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Otvor na vzduch – zabezpečuje správny prietok vzduchu cez senzory, čím sa minimalizuje skreslenie meraní."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/final_2.jpg",
        alt: "box 2",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Otvor na displej – umožňuje používateľovi sledovať aktuálne hodnoty priamo na OLED displeji."
      })]
    }), "\n", (0,jsx_runtime.jsxs)("figure", {
      children: [(0,jsx_runtime.jsx)("img", {
        src: "../../images/final_3.jpg",
        alt: "box 3",
        width: "700"
      }), (0,jsx_runtime.jsx)("figcaption", {
        children: "Obr.:  Otvor na napájanie – prístup k USB konektoru pre napájanie ESP32."
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/implementation/code-links",
          children: "Odkazy na kód / repozitáre"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ023/",
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


/***/ })

}]);