"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[30349],{

/***/ 27722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/AP-Workflow-6d75f69516dbcd1ac0952c93a4b408de.drawio");

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

/***/ 32293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_03_active_presenter_essentials_index_md_bc8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000085-obs-fundamentals-k-000085-03-active-presenter-essentials-index-md-bc8.json
const site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_03_active_presenter_essentials_index_md_bc8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/K000085_03","title":"K000085_03 – OBS Fundamentals – Active Presenter Essential","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","source":"@site/docs/sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/index.md","sourceDirName":"sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials","slug":"/sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"webinars","permalink":"/docs/tags/webinars"},{"inline":true,"label":"tutorials","permalink":"/docs/tags/tutorials"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000085_03","guid":"29137d69-fb85-41f5-8f98-69c2da54208a","dao":"knife","title":"K000085_03 – OBS Fundamentals – Active Presenter Essential","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"howto","type":"tutorial","priority":"top","tags":["webinars","tutorials"],"locale":"en","created":"2025-10-19","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"inprogress","privacy":"private","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"knifes_overview","origin_repo_url":"https://github.com/KNIFE-Framework/knifes_overview","origin_commit":"","origin_system":"","author_id":"RomanKazicka","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000085_03 – OBS Fundamentals – Active Presenter Essential"},"sidebar":"tutorialSidebar","previous":{"title":"K000085_02 – OBS Fundamentals – Základy nahrávania a správy scén","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_02-obs-fundamentals/"},"next":{"title":"K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000085_03',
	guid: '29137d69-fb85-41f5-8f98-69c2da54208a',
	dao: 'knife',
	title: 'K000085_03 – OBS Fundamentals – Active Presenter Essential',
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
	sidebar_label: 'K000085_03 – OBS Fundamentals – Active Presenter Essential'
};
const contentTitle = '🧰 Active Presenter Essentials – Strih, titulky, kvízy, export';

const assets = {

};



const toc = [{
  "value": "1️⃣ Čo s AP riešim",
  "id": "1️⃣-čo-s-ap-riešim",
  "level": 2
}, {
  "value": "2️⃣ Typický postup",
  "id": "2️⃣-typický-postup",
  "level": 2
}, {
  "value": "3️⃣ Titulky (SK) a preklad (EN)",
  "id": "3️⃣-titulky-sk-a-preklad-en",
  "level": 2
}, {
  "value": "4️⃣ Šablóna pre kvízy (Takeaway)",
  "id": "4️⃣-šablóna-pre-kvízy-takeaway",
  "level": 2
}, {
  "value": "5️⃣ Export presety",
  "id": "5️⃣-export-presety",
  "level": 2
}, {
  "value": "6️⃣ Evidencia",
  "id": "6️⃣-evidencia",
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
        id: "-active-presenter-essentials--strih-titulky-kvízy-export",
        children: "🧰 Active Presenter Essentials – Strih, titulky, kvízy, export"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "29137d69-fb85-41f5-8f98-69c2da54208a"
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
      id: "1️⃣-čo-s-ap-riešim",
      children: "1️⃣ Čo s AP riešim"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["rýchly strih podľa ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "markerov (Beep)"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "titulky (SK), zvýraznenia, šípky,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["interaktívne ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Question Slides"
        }), " (Takeaways),"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["export do ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "MP4"
        }), " (YouTube) a/alebo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTML5"
        }), " (interaktívne)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-typický-postup",
      children: "2️⃣ Typický postup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "New Project → Blank"
        }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert → Video → From File"
        }), " (OBS MP4)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timeline:"
        }), " nájdi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "špičky"
        }), " (Beep) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Split"
        }), " na kapitoly"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Annotations:"
        }), " titulky, tvary, zvýraznenia"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interaction:"
        }), " Question Slide (MCQ, TF)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Export:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MP4 (1080p, 30fps, AAC 160 kbps) – pre YouTube"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "alebo HTML5 (ak potrebujem interakciu)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-titulky-sk-a-preklad-en",
      children: "3️⃣ Titulky (SK) a preklad (EN)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["V AP: ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Annotations → Subtitle"
        }), " alebo import ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Alternatíva: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Whisper"
        }), " vygeneruje ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " (SK) → preklad (EN)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Export ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " priložím k videu (YouTube / GitHub assets)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-šablóna-pre-kvízy-takeaway",
      children: "4️⃣ Šablóna pre kvízy (Takeaway)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "1–3 otázky na konci kapitoly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "formát: MCQ/True-False, max 20–40 s"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logika: fixovať vedomosti, nie známkovať"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-export-presety",
      children: "5️⃣ Export presety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MP4 FullHD, 30 fps, bitrate 8–10 Mbps, AAC 160 kbps"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fade in/out 300–500 ms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vodoznak (logo) voliteľne vpravo hore"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-evidencia",
      children: "6️⃣ Evidencia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ukladaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".approj"
        }), " spolu s finálnym MP4 a ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre KNIFE vyplň frontmatter (id, dĺžka, tagy, väzby)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(27722)/* ["default"] */ .A) + "",
        children: "AP-Workflow.drawio"
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