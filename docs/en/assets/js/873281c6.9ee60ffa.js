"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[91609],{

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

/***/ 50726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/OBS-Structure-a499b37ff3b76f5739252e17609eed74.drawio");

/***/ }),

/***/ 96869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_01_video_workflow_index_md_873_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000085-obs-fundamentals-k-000085-01-video-workflow-index-md-873.json
const site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_01_video_workflow_index_md_873_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/K000085_01","title":"K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","source":"@site/docs/sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/index.md","sourceDirName":"sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow","slug":"/sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/","permalink":"/en/sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"webinars","permalink":"/en/docs/tags/webinars"},{"inline":true,"label":"tutorials","permalink":"/en/docs/tags/tutorials"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000085_01","guid":"e93b08eb-d3f0-481a-a892-025eebcd68b9","dao":"knife","title":"K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"howto","type":"tutorial","priority":"top","tags":["webinars","tutorials"],"locale":"en","created":"2025-10-19","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"inprogress","privacy":"private","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"knifes_overview","origin_repo_url":"https://github.com/KNIFE-Framework/knifes_overview","origin_commit":"","origin_system":"","author_id":"RomanKazicka","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice"},"sidebar":"tutorialSidebar","previous":{"title":"K000085 – OBS Fundamentals – Základy nahrávania a správy scén","permalink":"/en/sk/knifes/K000085-obs-fundamentals/"},"next":{"title":"K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén","permalink":"/en/sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000085-obs-fundamentals/K000085_01-video-workflow/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000085_01',
	guid: 'e93b08eb-d3f0-481a-a892-025eebcd68b9',
	dao: 'knife',
	title: 'K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice',
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
	sidebar_label: 'K000085_01 – OBS Fundamentals – Video Workflow (SK originál → EN titulky/voice'
};
const contentTitle = '🎬 Video Workflow (SK originál → EN titulky/voice)';

const assets = {

};



const toc = [{
  "value": "1️⃣ Záznam (OBS)",
  "id": "1️⃣-záznam-obs",
  "level": 2
}, {
  "value": "2️⃣ Strih (Active Presenter)",
  "id": "2️⃣-strih-active-presenter",
  "level": 2
}, {
  "value": "3️⃣ Titulky",
  "id": "3️⃣-titulky",
  "level": 2
}, {
  "value": "4️⃣ Preklad do EN",
  "id": "4️⃣-preklad-do-en",
  "level": 2
}, {
  "value": "5️⃣ Voice-over EN (voliteľné)",
  "id": "5️⃣-voice-over-en-voliteľné",
  "level": 2
}, {
  "value": "6️⃣ Publikovanie a evidencia",
  "id": "6️⃣-publikovanie-a-evidencia",
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
        id: "-video-workflow-sk-originál--en-titulkyvoice",
        children: "🎬 Video Workflow (SK originál → EN titulky/voice)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e93b08eb-d3f0-481a-a892-025eebcd68b9"
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
      id: "1️⃣-záznam-obs",
      children: "1️⃣ Záznam (OBS)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PiP scény, marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Q"
        }), " (beep.wav), dlhé sekvencie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-strih-active-presenter",
      children: "2️⃣ Strih (Active Presenter)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "import MP4, strih podľa markerov, doplnenie titulkov a kvízov."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-titulky",
      children: "3️⃣ Titulky"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variant A:"
        }), " YouTube auto-captions (stiahnuť ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Variant B:"
        }), " Whisper CLI (", (0,jsx_runtime.jsx)(_components.code, {
          children: "--task transcribe"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "--task translate"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-preklad-do-en",
      children: "4️⃣ Preklad do EN"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["preklad ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " (DeepL/ChatGPT), kontrola terminológie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-voice-over-en-voliteľné",
      children: "5️⃣ Voice-over EN (voliteľné)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["TTS (ElevenLabs / OpenAI TTS) → import do AP → export ", (0,jsx_runtime.jsx)(_components.code, {
          children: "video_en.mp4"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-publikovanie-a-evidencia",
      children: "6️⃣ Publikovanie a evidencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub ", (0,jsx_runtime.jsx)(_components.code, {
          children: "index.md"
        }), " s FM (SSOT), YouTube link, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "video_registry.csv"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "markers.csv"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Šablóna FM pre webinár/video"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "id: \"K0061-WEB01\"\ntitle: \"Názov webinára\"\nlanguage: \"sk\"\nrecord_date: \"2025-10-19\"\noutputs:\n  mp4_sk: \"videos/2025/final/K0061_WEB01_sk.mp4\"\n  srt_sk: \"videos/2025/final/K0061_WEB01_sk.srt\"\n  srt_en: \"videos/2025/final/K0061_WEB01_en.srt\"\n  mp4_en: \"videos/2025/final/K0061_WEB01_en.mp4\"\n"
      })
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



/***/ })

}]);