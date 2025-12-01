"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[23077],{

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

/***/ 46384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000085_obs_fundamentals_index_md_fee_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000085-obs-fundamentals-index-md-fee.json
const site_docs_sk_knifes_k_000085_obs_fundamentals_index_md_fee_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000085-obs-fundamentals/K000085","title":"K000085 – OBS Fundamentals – Základy nahrávania a správy scén","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","source":"@site/docs/sk/knifes/K000085-obs-fundamentals/index.md","sourceDirName":"sk/knifes/K000085-obs-fundamentals","slug":"/sk/knifes/K000085-obs-fundamentals/","permalink":"/sk/knifes/K000085-obs-fundamentals/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"webinars","permalink":"/docs/tags/webinars"},{"inline":true,"label":"tutorials","permalink":"/docs/tags/tutorials"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000085","guid":"2c1bdac4-6f59-49d9-9840-3f353ef9b9f7","dao":"knife","title":"K000085 – OBS Fundamentals – Základy nahrávania a správy scén","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"howto","type":"tutorial","priority":"top","tags":["webinars","tutorials"],"locale":"en","created":"2025-10-19","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"inprogress","privacy":"private","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"knifes_overview","origin_repo_url":"https://github.com/KNIFE-Framework/knifes_overview","origin_commit":"","origin_system":"","author_id":"RomanKazicka","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000085 – OBS Fundamentals – Základy nahrávania a správy scén"},"sidebar":"tutorialSidebar","previous":{"title":"K000035 – Context Aware Solutions / paradigma, solution","permalink":"/sk/knifes/K000035-context-aware-solutions-paradigma-solution/"},"next":{"title":"K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000085-obs-fundamentals/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000085',
	guid: '2c1bdac4-6f59-49d9-9840-3f353ef9b9f7',
	dao: 'knife',
	title: 'K000085 – OBS Fundamentals – Základy nahrávania a správy scén',
	description: ' Základy práce s OBS v kontexte tvorny multimediálneho obsahu',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: 'howto',
	type: 'tutorial',
	priority: 'top',
	tags: [
		'webinars',
		'tutorials'
	],
	locale: 'en',
	created: '2025-10-19',
	modified: 'YYYY-MM-DDTHH:MM:SSZ',
	status: 'inprogress',
	privacy: 'private',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: 'knifes_overview',
	origin_repo_url: 'https://github.com/KNIFE-Framework/knifes_overview',
	origin_commit: '',
	origin_system: '',
	author_id: 'RomanKazicka',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_label: 'K000085 – OBS Fundamentals – Základy nahrávania a správy scén'
};
const contentTitle = '🎥 OBS Fundamentals – Základy nahrávania a správy scén';

const assets = {

};



const toc = [{
  "value": "1️⃣ Čo je OBS Studio",
  "id": "1️⃣-čo-je-obs-studio",
  "level": 2
}, {
  "value": "2️⃣ Kľúčové pojmy",
  "id": "2️⃣-kľúčové-pojmy",
  "level": 2
}, {
  "value": "3️⃣ Profile vs. Scene Collection (macOS)",
  "id": "3️⃣-profile-vs-scene-collection-macos",
  "level": 2
}, {
  "value": "4️⃣ Odporúčaný režim",
  "id": "4️⃣-odporúčaný-režim",
  "level": 2
}, {
  "value": "5️⃣ Export/Import scén",
  "id": "5️⃣-exportimport-scén",
  "level": 2
}, {
  "value": "6️⃣ Best Practices",
  "id": "6️⃣-best-practices",
  "level": 2
}, {
  "value": "7️⃣ OBS ↔ Active Presenter",
  "id": "7️⃣-obs--active-presenter",
  "level": 2
}, {
  "value": "8️⃣ Ďalšie kroky",
  "id": "8️⃣-ďalšie-kroky",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "-obs-fundamentals--základy-nahrávania-a-správy-scén",
        children: "🎥 OBS Fundamentals – Základy nahrávania a správy scén"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2c1bdac4-6f59-49d9-9840-3f353ef9b9f7"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inprogress"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1️⃣-čo-je-obs-studio",
      children: "1️⃣ Čo je OBS Studio"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open-source nástroj na nahrávanie, PiP, scény a stream."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-kľúčové-pojmy",
      children: "2️⃣ Kľúčové pojmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene Collection"
        }), " (projekt layouts)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene"
        }), " (zostava zdrojov)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source"
        }), " (vrstva: obrazovka, kamera, audio, text, logo)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filter"
        }), " (maska, rozostrenie, farby)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile"
        }), " (výstup: rozlíšenie, codec, bitrate)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hotkeys"
        }), " (prepínanie, marker Beep)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition"
        }), " (Fade, Cut)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bookmark/Marker"
        }), " (záložka, „Beep“)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-profile-vs-scene-collection-macos",
      children: "3️⃣ Profile vs. Scene Collection (macOS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Profile: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/Library/Application Support/obs-studio/basic/profiles"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scenes:  ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/Library/Application Support/obs-studio/basic/scenes"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hotkeys sú viazané na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-odporúčaný-režim",
      children: "4️⃣ Odporúčaný režim"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Profile: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SystemThinking_2025"
        }), " (1080p/30fps, H.264, AAC)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scene Collection: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SystemThinking-LetItGrow-2025"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Scény: Lecture, Reflection, Demo, Lab (CamON/CamOFF varianty)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hotkey: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → Beep (marker)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Výstup: MP4, 48kHz, 160kbps"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Úložisko: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/Documents/SystemThinking-LetItGrow-2025/"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-exportimport-scén",
      children: "5️⃣ Export/Import scén"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Export: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene Collection → Export"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".json"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Import: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene Collection → Import"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".json"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Po importe „prelinkuj“ kameru a monitory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-best-practices",
      children: "6️⃣ Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "statické pozadie, PiP 480×480 (kruhová maska), -10 dB peak na vstupe,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beep.wav"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "duplikuj scény na CamON/CamOFF,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "exportuj MP4 1080p/30fps,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "zálohuj Profile & Scenes v Gite."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-obs--active-presenter",
      children: "7️⃣ OBS ↔ Active Presenter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beep → strih podľa špičiek v audio stope,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["titulky ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " (YouTube/Whisper),"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "kvízy v AP,"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "publikácia: YouTube + GitHub dashboard."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8️⃣-ďalšie-kroky",
      children: "8️⃣ Ďalšie kroky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE K0061 – Video Workflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE K0063 – Active Presenter Essentials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "KNIFE K0064 – Multilingual Video Publishing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(50726)/* ["default"] */ .A) + "",
        children: "Diagram OBS štruktúry"
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

/***/ 50726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/OBS-Structure-a499b37ff3b76f5739252e17609eed74.drawio");

/***/ })

}]);