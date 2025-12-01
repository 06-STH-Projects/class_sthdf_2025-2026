"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[84815],{

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

/***/ 47944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/OBS-Structure-776016120043ad901c0af2010abee05d.drawio");

/***/ }),

/***/ 94074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_02_obs_fundamentals_index_md_89a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000085-obs-fundamentals-k-000085-02-obs-fundamentals-index-md-89a.json
const site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_02_obs_fundamentals_index_md_89a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/K000085_02","title":"K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","source":"@site/docs/sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/index.md","sourceDirName":"sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals","slug":"/sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/","permalink":"/en/sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"webinars","permalink":"/en/docs/tags/webinars"},{"inline":true,"label":"tutorials","permalink":"/en/docs/tags/tutorials"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000085_02","guid":"44c57f49-30f3-468c-ab27-583972c5ee3a","dao":"knife","title":"K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"howto","type":"tutorial","priority":"top","tags":["webinars","tutorials"],"locale":"en","created":"2025-10-19","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"inprogress","privacy":"private","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"knifes_overview","origin_repo_url":"https://github.com/KNIFE-Framework/knifes_overview","origin_commit":"","origin_system":"","author_id":"RomanKazicka","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén"},"sidebar":"tutorialSidebar","previous":{"title":"K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice","permalink":"/en/sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/"},"next":{"title":"K000085_03 – OBS Fundamentals – Active Presenter Essential","permalink":"/en/sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000085_02',
	guid: '44c57f49-30f3-468c-ab27-583972c5ee3a',
	dao: 'knife',
	title: 'K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén',
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
	sidebar_label: 'K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén'
};
const contentTitle = '🎥 OBS Fundamentals – Základy nahrávania a správy scén';

const assets = {

};



const toc = [{
  "value": "1️⃣ Prečo OBS",
  "id": "1️⃣-prečo-obs",
  "level": 2
}, {
  "value": "2️⃣ Kľúčové pojmy",
  "id": "2️⃣-kľúčové-pojmy",
  "level": 2
}, {
  "value": "3️⃣ Profily vs. Kolekcie (macOS umiestnenie)",
  "id": "3️⃣-profily-vs-kolekcie-macos-umiestnenie",
  "level": 2
}, {
  "value": "4️⃣ Odporúčaný setup (SystemThinking 2025)",
  "id": "4️⃣-odporúčaný-setup-systemthinking-2025",
  "level": 2
}, {
  "value": "5️⃣ Export / Import",
  "id": "5️⃣-export--import",
  "level": 2
}, {
  "value": "6️⃣ Best Practices",
  "id": "6️⃣-best-practices",
  "level": 2
}, {
  "value": "7️⃣ OBS ↔ Active Presenter",
  "id": "7️⃣-obs--active-presenter",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "44c57f49-30f3-468c-ab27-583972c5ee3a"
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
      id: "1️⃣-prečo-obs",
      children: "1️⃣ Prečo OBS"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Open‑source nástroj na nahrávanie, PiP, scény a stream. Stabilný, modulárny, scriptovateľný."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-kľúčové-pojmy",
      children: "2️⃣ Kľúčové pojmy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene Collection"
        }), " – balík scén (layouty)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene"
        }), " – zostava zdrojov (Display, Camera, Audio, Image, Text)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source"
        }), " – vrstva v scéne"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filter"
        }), " – maska, rozostrenie, farebná korekcia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile"
        }), " – výstup (rozlíšenie, FPS, bitrate, codec)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hotkeys"
        }), " – klávesové skratky (prepínanie scén, Beep marker)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Transition"
        }), " – prechod (Cut, Fade)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marker/Beep"
        }), " – zvuková záložka do timeline"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-profily-vs-kolekcie-macos-umiestnenie",
      children: "3️⃣ Profily vs. Kolekcie (macOS umiestnenie)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Profile: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/Library/Application Support/obs-studio/basic/profiles"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Scenes:  ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/Library/Application Support/obs-studio/basic/scenes"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Hotkeys sú viazané na ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile"
        }), " (po importe kolekcie nastav ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → Beep)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-odporúčaný-setup-systemthinking-2025",
      children: "4️⃣ Odporúčaný setup (SystemThinking 2025)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SystemThinking_2025"
        }), " (1080p/30fps, H.264, ~8–10 Mbps, AAC 160 kbps)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scene Collection:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SystemThinking-LetItGrow-2025"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scény:"
        }), " Lecture (CamON/CamOFF), Demo (CamON/CamOFF), Reflection, Lab"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PiP kamera:"
        }), " ~480×480, ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "kruhová maska"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Marker:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "beep.wav"
        }), " (100 ms, 1 kHz)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-export--import",
      children: "5️⃣ Export / Import"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Export: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Scene Collection → Export"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".json"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Import: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Scene Collection → Import"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".json"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Po importe „prelinkuj“ kameru a monitory (Display1/Display2)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-best-practices",
      children: "6️⃣ Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Statické pozadie, logá PNG s alfa, zamknuté (🔒) zdroje."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Peak na vstupe okolo −10 dB, bez clippingu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Studio Mode pred prechodom scény."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zálohy: export Profile + Scene Collection do Gitu."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7️⃣-obs--active-presenter",
      children: "7️⃣ OBS ↔ Active Presenter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Beep → rýchly strih podľa špičiek."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Titulky: YouTube/Whisper ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " (SK) → preklad (EN)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Export: MP4 1080p/30fps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(47944)/* ["default"] */ .A) + "",
        children: "OBS-Structure.drawio"
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