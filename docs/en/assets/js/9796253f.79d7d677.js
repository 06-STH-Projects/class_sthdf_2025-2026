"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[26338],{

/***/ 3630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000090_vmware_fusion_nat_2_dhcp_index_md_979_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000090-vmware-fusion-nat-2-dhcp-index-md-979.json
const site_docs_sk_knifes_k_000090_vmware_fusion_nat_2_dhcp_index_md_979_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/K000090","title":"K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max","description":"","source":"@site/docs/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/index.md","sourceDirName":"sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP","slug":"/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/","permalink":"/en/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-09","fm_version_comment":"","id":"K000090","guid":"ea330316-5451-4251-be58-caf1c163e86a","dao":"knife","title":"K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max","description":"","author":"romankazicka","authors":[],"category":"","type":"","priority":"","tags":[],"locale":"sk","created":"2025-11-11","modified":"","status":"backlog","privacy":"public","rights_holder_content":"","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 <autor>","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"","origin_imported_from":"","origin_import_date":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max"},"sidebar":"tutorialSidebar","previous":{"title":"K000089 – Kedy SSh a kedy HTTPS?","permalink":"/en/sk/knifes/K000089-SmartGit-Nastavenie/"},"next":{"title":"K000091 – Krátka história Git – Linus Torvalds","permalink":"/en/sk/knifes/K000091-Zrodenie-git-sveta/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-09',
	fm_version_comment: '',
	id: 'K000090',
	guid: 'ea330316-5451-4251-be58-caf1c163e86a',
	dao: 'knife',
	title: 'K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max',
	description: '',
	author: 'romankazicka',
	authors: [],
	category: '',
	type: '',
	priority: '',
	tags: [],
	locale: 'sk',
	created: '2025-11-11',
	modified: '',
	status: 'backlog',
	privacy: 'public',
	rights_holder_content: '',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 <autor>',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_branch: '',
	origin_system: 'CAA',
	origin_author: '',
	origin_imported_from: '',
	origin_import_date: '',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_label: 'K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "🧩 Kontext",
  "id": "-kontext",
  "level": 2
}, {
  "value": "Inštalácia VMWARE Fusion (Free)",
  "id": "inštalácia-vmware-fusion-free",
  "level": 2
}, {
  "value": "🔍 Diagnostika",
  "id": "-diagnostika",
  "level": 2
}, {
  "value": "🛠️ Obnova NAT/DHCP",
  "id": "️-obnova-natdhcp",
  "level": 2
}, {
  "value": "🌐 Testovanie konektivity",
  "id": "-testovanie-konektivity",
  "level": 2
}, {
  "value": "🖥️ Problém s čiernou obrazovkou",
  "id": "️-problém-s-čiernou-obrazovkou",
  "level": 2
}, {
  "value": "💡 Lessons Learned",
  "id": "-lessons-learned",
  "level": 2
}, {
  "value": "✅ Záver",
  "id": "-záver",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    br: "br",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
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
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
          children: "Detaily"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "vmware-fusion-nat2dhcp-resurrection--mac-os-srquoia-and-m2-max",
      children: "VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ea330316-5451-4251-be58-caf1c163e86a"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " romankazicka · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "k000090--vmware-fusion-natdhcp-resurrection--macos-sequoia--m2-max",
      children: "K000090 – VMware Fusion NAT/DHCP Resurrection – macOS Sequoia & M2 Max"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-kontext",
      children: "🧩 Kontext"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po prechode na ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "macOS Sequoia"
      }), " (M2 Max) prestal VMware Fusion správne vytvárať NAT/DHCP adaptéry (", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmnet1"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmnet8"
      }), ").", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Všetky virtuálne stroje stratili konektivitu.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Nové politiky Apple a zmeny po odkúpení ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VMware firmou Broadcom"
      }), " (nové licencie, sťahovanie) situáciu ešte sťažili.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Najnovšiu verziu Fusion už ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "nebolo možné stiahnuť priamo z oficiálneho portálu"
      }), ", museli sme ju získať z ", (0,jsx_runtime.jsx)(_components.em, {
        children: "technického mirroru"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "inštalácia-vmware-fusion-free",
      children: "Inštalácia VMWARE Fusion (Free)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak sa nechceš trápiť s Broadcom portálom:\nPouži oficiálne zrkadlo s podpisom (od VMware ešte pred akvizíciou):\n👉 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.techspot.com/downloads/2755-vmware-fusion-mac.html",
        children: "https://www.techspot.com/downloads/2755-vmware-fusion-mac.html"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tu je VMware Fusion 13.5.2 (Universal) – beží na Intel aj M1/M2, a po spustení\nlen zvolíš “Use for personal use” → Continue without license."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-diagnostika",
      children: "🔍 Diagnostika"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sudo /Applications/VMware\\ Fusion.app/Contents/Library/vmnet-cli --status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Výstup:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DHCP service on vmnet1 is running\nHostonly virtual adapter on vmnet1 is disabled\nDHCP service on vmnet8 is running\nNAT service on vmnet8 is running\nHostonly virtual adapter on vmnet8 is disabled\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Niektoré služby bežali, ale ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "adaptéry boli vypnuté"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "ifconfig"
      }), " potvrdil, že ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmnet8"
      }), " a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmnet1"
      }), " neexistujú v systéme."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-obnova-natdhcp",
      children: "🛠️ Obnova NAT/DHCP"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Rekonfigurácia všetkých sietí:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo /Applications/VMware\\ Fusion.app/Contents/Library/vmnet-cli --configure\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po rekonfigurácii sa obnovili súbory v:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/Library/Preferences/VMware Fusion/networking\n/Library/Preferences/VMware Fusion/dhcpd.conf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reštart služieb:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo /Applications/VMware\\ Fusion.app/Contents/Library/vmnet-cli --stop\nsudo /Applications/VMware\\ Fusion.app/Contents/Library/vmnet-cli --start\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Overenie, že ", (0,jsx_runtime.jsx)(_components.code, {
        children: "vmnet8"
      }), " má pridelený IP rozsah 192.168.223.0/24 a DHCP funguje."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-testovanie-konektivity",
      children: "🌐 Testovanie konektivity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po pripojení VM k NAT sa objavila IP adresa z rozsahu 223.x.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "ping 8.8.8.8"
      }), " bol úspešný – internet prístup obnovený.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Pri bridge pripojení však dochádzalo k prerušeniam – ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ping"
      }), " potvrdil občasný timeout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-problém-s-čiernou-obrazovkou",
      children: "🖥️ Problém s čiernou obrazovkou"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po niekoľkých reštartoch Fusion VM začal zobrazenie úplne černieť pri RDP.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Riešenie:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Display settings VM"
        }), " → aktivovať „Use Retina display for virtual machine“"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["zmeniť farebnú hĺbku z ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "16 bit"
        }), " na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "32 bit"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "vypnúť „Accelerate 3D graphics“ (dočasne)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RDP sa po týchto zmenách správal stabilne, bez zamŕzania."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-lessons-learned",
      children: "💡 Lessons Learned"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Broadcom prebral VMware a zmenil prístup k licenciám – ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Fusion Player Free"
        }), " už nie je otvorene dostupný."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Zálohovať pred updatom:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "/Library/Preferences/VMware Fusion/\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak po update zmiznú adaptér ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vmnet8"
        }), " alebo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vmnet1"
        }), ", ich ručné znovuvytvorenie cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vmnet-cli --configure"
        }), " je bezpečné a funkčné."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["RDP problém bol spôsobený kombináciou ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Retina off"
        }), " + ", (0,jsx_runtime.jsx)(_components.em, {
          children: "low bit-depth"
        }), ", nie chybným Fusion buildom."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "🧠 Odporúčanie: pred každým macOS upgrade → zálohovať Fusion nastavenia a testovať NAT cez dummy VM."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-záver",
      children: "✅ Záver"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po dvoch dňoch hľadania a kombinovania riešení sme dokázali obnoviť plnú funkcionalitu NAT/DHCP aj obrazový výstup vo Fusion.", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "Zdanlivo jednoduchý problém ukázal, ako veľmi sa zmenila architektúra správy sietí po príchode Sequoie a ako krehká je kompatibilita s uzavretými ovládačmi Broadcom VMware."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_BLOG",
          children: "⬅ KNIFES – Prehľad"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_LIST",
          children: "Zoznam"
        }), " • ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/knifes_overview/KNIFE_OVERVIEW_DETAILS",
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