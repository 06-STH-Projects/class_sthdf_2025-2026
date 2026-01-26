"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[27146],{

/***/ 7848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_05_design_index_md_09d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-025-sdlc-05-design-index-md-09d.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_025_sdlc_05_design_index_md_09d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/index","title":"05 design","description":"{{DESCRIPTION}}","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/05-design/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/05-design","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.961516+00:00","fm_version_comment":"","guid":"b8ca3f4f-1e6b-4f8b-8ed0-aee840ec42c2","dao":"class_sthdf_dashboard","title":"05 design","description":"{{DESCRIPTION}}","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"backlog","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/analysis/backlog"},"next":{"title":"prototype","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/design/prototype"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/05-design/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.961516+00:00',
	fm_version_comment: '',
	guid: 'b8ca3f4f-1e6b-4f8b-8ed0-aee840ec42c2',
	dao: 'class_sthdf_dashboard',
	title: '05 design',
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
const contentTitle = '05-Design';

const assets = {

};



const toc = [{
  "value": "Obrazovky systému",
  "id": "obrazovky-systému",
  "level": 2
}, {
  "value": "1. Úvodná obrazovka (Welcome Screen)",
  "id": "1-úvodná-obrazovka-welcome-screen",
  "level": 3
}, {
  "value": "2. Kalibračná obrazovka (Calibration Screen)",
  "id": "2-kalibračná-obrazovka-calibration-screen",
  "level": 3
}, {
  "value": "3. Obrazovka pripravenosti (Ready Screen)",
  "id": "3-obrazovka-pripravenosti-ready-screen",
  "level": 3
}, {
  "value": "4. Monitorovacia obrazovka (Monitoring Screen)",
  "id": "4-monitorovacia-obrazovka-monitoring-screen",
  "level": 3
}, {
  "value": "5. Alarmová obrazovka (Alert Screen)",
  "id": "5-alarmová-obrazovka-alert-screen",
  "level": 3
}, {
  "value": "6. Obrazovka štatistík (Statistics Screen)",
  "id": "6-obrazovka-štatistík-statistics-screen",
  "level": 3
}, {
  "value": "Poznámky k implementácii",
  "id": "poznámky-k-implementácii",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
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
        id: "05-design",
        children: "05-Design"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "obrazovky-systému",
      children: "Obrazovky systému"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-úvodná-obrazovka-welcome-screen",
      children: "1. Úvodná obrazovka (Welcome Screen)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trvanie:"
      }), " 2 sekundy po zapnutí\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Branding a potvrdenie zapnutia"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozadie: Čierna (#000000)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Logo: Text \"NODYNE\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podnadpis: \"Advanced Sleep Detector\" a \"5 detection modes\" malým písmom pod logom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Centrované na obrazovke"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Úvodná obrazovka",
        src: (__webpack_require__(45317)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Úvodná obrazovka"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-kalibračná-obrazovka-calibration-screen",
      children: "2. Kalibračná obrazovka (Calibration Screen)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trvanie:"
      }), " 5 sekúnd (2s pauza + 3s kalibrácia)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Informovať vodiča o procese kalibrácie"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozadie: Modrá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hlavný text: \"CALIBRATING\" veľkým písmom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Podnadpis: \"Sit normally\" a \"Look forward\" stredným písmom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Farba textu: Biela"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layout: Vertikálne usporiadanie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Kalibračná obrazovka",
        src: (__webpack_require__(49213)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Kalibračná obrazovka"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-obrazovka-pripravenosti-ready-screen",
      children: "3. Obrazovka pripravenosti (Ready Screen)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trvanie:"
      }), " 2 sekundy, potom prechod na monitoring\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Potvrdiť dokončenie kalibrácie"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozadie: Zelená"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hlavný text: \"READY!\" veľkým písmom"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Farba textu: Biela"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layout: Centrované vertikálne"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Obrazovka pripravenosti",
        src: (__webpack_require__(41948)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Ready Screen"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-monitorovacia-obrazovka-monitoring-screen",
      children: "4. Monitorovacia obrazovka (Monitoring Screen)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Screen: Monitoring Screen"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trvanie:"
      }), " Počas celej jazdy\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Zobrazovať aktuálne metriky v reálnom čase"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozadie: Čierna"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text: Biely (hlavný text), farebné indikátory podľa stavu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layout: Vertikálne sekcie s progress barmi"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Header:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NODYNE"
        }), " - názov aplikácie vľavo hore (biely text)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CHG"
        }), " - indikátor nabíjania vpravo hore (zelený text)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ikona batérie"
        }), " - grafické zobrazenie stavu batérie (svetlo modrá)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stav (dynamický):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"Monitoring...\""
        }), " - normálny stav monitorovania (biely text)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "\"ALERT\""
        }), " - aktívny alert (červený text) - nahrádza \"Monitoring...\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zobrazované údaje:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fwd:6 Side:3"
        }), " - Forward a Side hodnoty naklonenia hlavy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nodes: 0/3"
        }), " - Počet detegovaných \"nods\" (kývnutí) zo 3 možných"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Move: 2.0"
        }), " - Celkový pohyb hlavy"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Varovné stavy (farebné kódovanie):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alert"
        }), " - Zelený text - nízka úroveň rizika"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning"
        }), " - Žltý text - stredná úroveň rizika (ako na obrázku)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HIGH RISK"
        }), " - Červený text - vysoká úroveň rizika"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Progress bary:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dva horizontálne progress bary (sivé pozadie, čierna výplň)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zobrazujú aktuálne hodnoty relatívne k prahovým hodnotám"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Farba výplne sa môže meniť podľa stavu (zelená/žltá/červená)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tlačidlá/Akcie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A: Cal"
        }), " - Kalibrácia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B: Stop/Stats"
        }), " - Štatistiky alebo zastavenie alarmu"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Monitorovacia obrazovka",
        src: (__webpack_require__(78859)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Monitoring Screen - real-time metriky"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-alarmová-obrazovka-alert-screen",
      children: "5. Alarmová obrazovka (Alert Screen)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trvanie:"
      }), " Pokým vodič nezareaguje (minimálne 1 sekunda v normálnej polohe na automatické vypnutie)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Maximálne upútať pozornosť vodiča"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozadie: Červená- celá obrazovka"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hlavný text: \"ALERT!\" veľkými písmenami hore"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dôvod alarmu: Typ detekcie v strede"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Farba textu: Biela"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layout: Vertikálne usporiadanie"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typy alarmov a zobrazované texty:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Strong Nod: \"STRONG NOD\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Micro Nods: \"MICRO NODS\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Slow Drift: \"SLOW DRIFT\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Freeze: \"NO MOVEMENT\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Side Tilt: \"SIDE TILT\""
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Charakteristiky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Celá obrazovka červená pre maximálny vizuálny dopad"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synchronizované so zvukovým alarmom (1000Hz/1500Hz tóny)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RGB LED na zariadení svieti červenou"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Možnosť vypnutia tlačidlom B alebo automaticky po prebratí"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Alarmová obrazovka",
        src: (__webpack_require__(96087)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Alert Screen - Červená obrazovka s textom ALERT, typ detekcie"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-obrazovka-štatistík-statistics-screen",
      children: "6. Obrazovka štatistík (Statistics Screen)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trvanie:"
      }), " 2 sekundy po stlačení tlačidla \"B\"\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Účel:"
      }), " Zobraziť súhrnné štatistiky z jazdy"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Design:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pozadie: Modrá"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Text: Biely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layout: Vertikálny zoznam metrík"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Zobrazované štatistiky:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Max tilt: 3.1"
        }), " - Maximálny náklon hlavy zaznamenaný počas jazdy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Avg move: 1.74"
        }), " - Priemerný pohyb hlavy počas celej jazdy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Total nods: 0"
        }), " - Celkový počet detegovaných kývnutí hlavou"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        alt: "Obrazovka štatistík",
        src: (__webpack_require__(29956)/* ["default"] */ .A) + "",
        width: "900",
        height: "500"
      }), "\n", (0,jsx_runtime.jsx)(_components.em, {
        children: "Statistics Screen"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "poznámky-k-implementácii",
      children: "Poznámky k implementácii"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Technológia:"
      }), " M5StickC Plus 2 LCD library (ST7789V driver)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Refresh rate:"
      }), " 20 Hz (synchronizované s main loop)\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimalizácia:"
      }), " Len zmenené časti obrazovky sa prekresľujú (nie celá obrazovka)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Display API použité funkcie:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Display.fillScreen(color)"
        }), " - Pozadie"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Display.setTextColor(color)"
        }), " - Farba textu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Display.setTextSize(size)"
        }), " - Veľkosť textu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Display.setCursor(x, y)"
        }), " - Pozícia textu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Display.println(text)"
        }), " - Výpis textu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "Display.drawRect()"
        }), " - Progress bary"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Navigation:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/analysis/",
        children: "⬅️ Analysis"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/",
        children: "⬆️ SDLC"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/",
        children: "⬅️ Projekt"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ025/sdlc/implementation/",
        children: "➡️ Implementation"
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


/***/ }),

/***/ 29956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ui-screen-stats-a3742d1bf8d28ccf4e709afedd5e2eb9.png");

/***/ }),

/***/ 41948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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BCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIQShAAAAKEEIQAAQChBCAAAEEoQAgAAhBKEAAAAoQQhAABAKEEIAAAQShACAACEEoQAAAChBCEAAEAoQQgAABBKEAIAAIT6f40RTmzARJCLAAAAAElFTkSuQmCC");

/***/ }),

/***/ 45317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ui-screen-welcome-8381fea1bfdd91ffdc5bb60f9d77c48c.png");

/***/ }),

/***/ 49213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ui-screen-calibration-568ed581e50ea3de0bfc700847420f38.png");

/***/ }),

/***/ 78859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/ui-screen-monitoring-01068e0bba91168bd8e5d0aaed83c90f.png");

/***/ }),

/***/ 96087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA4QAAAH0CAYAAABl8+PTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB3NSURBVHgB7d3xcdxEGwdg5Rv+h1QAVJB0EFNBkgpiKkhSAaECTAWEChIqSFIBpAKggkAF/r53/GkshO60klZ3kt/nmWhi30na1Z48sz/vWnvvumn+9w8AAIBs/tMAAACQkkAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQlEAIAACQ1GcNAHV98UXTPHzYzPLbb03z11/N6krreKr61HZx0czyxx83W21z61PTkmubWv/375tZvvrqZiu11ufVKq3P3OsF2ILr//2z2Ww2W8XtyZPr2S4vT1PHV6+2VZ+a28XF9WwvXmyrPjW9fTuv/g8fXk/21Vfzynr37nqSq6t176XS+kQbrVkPm81mW3EzZRSgtrmjg2HK6MgSDx6U7bfkWs5lSZ1L22WKGI3dgrnXNueenPsZTD1u7Z+X0vPv8ecE4P8EQoDalnRSv/yyOYnSkPL5583uLAlg9+831W0lLMxtlzn389yyph639s9L6bVvJfQDzCAQAmRU2oE91YhlTUs653sMwKVOFdK2fswaBEJgxwRCgIzucgdW5/z89hzuAJIRCAEAAJISCAEyKn1U/99/N7uz5jIEGc1ZdmTOZ3CqY9awx6VZAP5PIASobUkn9c8/m5MoLWeP4WpJ53yN691KG8aaknPMac+5n8HWglXpZ+eXEMCOCYQAtS3pHM7ttE9V2vHeY0d3a4H8VJ/pmLlha079534GU4/7+LFZVWl9jBACO/ZZA0Adz5/fLDGw5OEYcY7Hj5vmw4emef26Wc1dHPm4vGyaR4+WtX8c/9NPN9f9/fdNFaVhocZn3t6DQ6Jd4tq6fv65ad6/b46acw9EPVrHrivq2t136me39v1Z+guCrYR+gBkEQoBaIpAsXXPu4uL2/zUDYelyEntaduLZs9v2m6s9PkJcrUBY2obX13UC4SFxb/bvz/gb0bFAOOeejp+F7vGH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NenmdkRrBoYlSupxjjXpStunZqA9xy8Uata/9OekRGlbrD2SeI7PDuDEBEKAMaWdvZod4rU74TXrukRJPUrrumRh976an3np+nQ1Q3rNNis91znqv/Z9/OFD2X4CIbBj966b5roBAAAgHSOEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASQmEAAAASX3WALBtDx/ebK0//mia9+//vd+TJ03zxRc3X8f7sR/UFPdX3Gett2+b5q+/GgD2SyAE2LrogH/33e33EfaGAuFPP90Gwu+/b5pXrxqo6quvbu6zVoTBCIUA7JYpowB3RRsGAQAKCYQAWzc0Je/i4t+vdaeImsbHGvr3lfsMYPdMGQXYuv7IX4TBmLr39deH9zNayBrcVwB3jhFCgD2KQNins87a+veYew5g9wRCgD0aeoKop4qytv49ZsoowO4JhAB7FCOE19fDI4XHxHTTOG5o6y4nUNOLFzfnj6dR9suP+v/66+33nz41s+t/eXm8/LHzd+txdTW9/EPnj3aN9+L8sXxId//4/t27f752TP/4oe1Q+bG1TwiNeg4d232C6NDxv//+z/f6dY/NqCHArgiEAHdFSTg8ts9aHfn2vJ9/3gzWZ+2/fSw9f/e9obpOLavVriEZ7w1Nuex/Jks/o/7x3WPu3//3a13t+4eOLyEQAuyKQAhwV5RMGT02xW+t6X/nKHNpGX//Xe9c7ecSxw4d33/t2OdYUv7S+2Ap00gBdkUgBNi6bgc7vv7mm9uF6WOK39AC9P1O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AQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkhIIAQAAkvovdyynjyLQFy4AAAAASUVORK5CYII=");

/***/ })

}]);