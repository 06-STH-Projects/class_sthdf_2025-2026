"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[82395],{

/***/ 26047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/files/Multilingual-Publishing-f0a604a4a419c4f5f9c5a7b164bbed22.drawio");

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

/***/ 69545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_04_multilingual_video_publishing_index_md_c0e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000085-obs-fundamentals-k-000085-04-multilingual-video-publishing-index-md-c0e.json
const site_docs_sk_knifes_k_000085_obs_fundamentals_k_000085_04_multilingual_video_publishing_index_md_c0e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/K000085_04","title":"K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","source":"@site/docs/sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/index.md","sourceDirName":"sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing","slug":"/sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"webinars","permalink":"/docs/tags/webinars"},{"inline":true,"label":"tutorials","permalink":"/docs/tags/tutorials"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000085_04","guid":"bcadd10f-a1fa-4797-8eda-565d63d4443b","dao":"knife","title":"K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing","description":" Základy práce s OBS v kontexte tvorny multimediálneho obsahu","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"howto","type":"tutorial","priority":"top","tags":["webinars","tutorials"],"locale":"en","created":"2025-10-19","modified":"YYYY-MM-DDTHH:MM:SSZ","status":"inprogress","privacy":"private","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"knifes_overview","origin_repo_url":"https://github.com/KNIFE-Framework/knifes_overview","origin_commit":"","origin_system":"","author_id":"RomanKazicka","author_did":"","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing"},"sidebar":"tutorialSidebar","previous":{"title":"K000085_03 – OBS Fundamentals – Active Presenter Essential","permalink":"/sk/knifes/K000085-obs-fundamentals/K000085_03-active-presenter-essentials/"},"next":{"title":"K000086 – Docusaurus-ID-a-jeho-pouzitie","permalink":"/sk/knifes/K000086-docusaurus-id-a-jeho-pouzitie/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000085-obs-fundamentals/K000085_04-multilingual-video-publishing/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000085_04',
	guid: 'bcadd10f-a1fa-4797-8eda-565d63d4443b',
	dao: 'knife',
	title: 'K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing',
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
	sidebar_label: 'K000085_04 – OBS Fundamentals – Multilingual - Video - Publishing'
};
const contentTitle = '🌍 Multilingual Video Publishing – SK originál, EN titulky a EN voice';

const assets = {

};



const toc = [{
  "value": "1️⃣ Ciele",
  "id": "1️⃣-ciele",
  "level": 2
}, {
  "value": "2️⃣ Varianty riešenia",
  "id": "2️⃣-varianty-riešenia",
  "level": 2
}, {
  "value": "3️⃣ Odporúčaný workflow",
  "id": "3️⃣-odporúčaný-workflow",
  "level": 2
}, {
  "value": "4️⃣ Štruktúra úložiska",
  "id": "4️⃣-štruktúra-úložiska",
  "level": 2
}, {
  "value": "5️⃣ Frontmatter (príklad)",
  "id": "5️⃣-frontmatter-príklad",
  "level": 2
}, {
  "value": "6️⃣ Best Practices",
  "id": "6️⃣-best-practices",
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
    ol: "ol",
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
        id: "-multilingual-video-publishing--sk-originál-en-titulky-a-en-voice",
        children: "🌍 Multilingual Video Publishing – SK originál, EN titulky a EN voice"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bcadd10f-a1fa-4797-8eda-565d63d4443b"
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
      id: "1️⃣-ciele",
      children: "1️⃣ Ciele"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Jeden ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SK originál"
        }), " → viacjazyčné výstupy bez duplicitného strihu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Automatizovateľný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "preklad titulkov"
        }), " a voliteľný ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "anglický voiceover"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2️⃣-varianty-riešenia",
      children: "2️⃣ Varianty riešenia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["A) YouTube auto-captions → export ", (0,jsx_runtime.jsx)(_components.code, {
            children: ".srt"
          }), " → preklad (EN) → upload späť"]
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B) Whisper CLI:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--task transcribe"
            }), " (SK ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".srt"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "--task translate"
            }), " (EN ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".srt"
            }), ")"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "C) TTS Voiceover (EN):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ElevenLabs / OpenAI TTS API → vygeneruj EN audio → vlož do AP → export ", (0,jsx_runtime.jsx)(_components.code, {
              children: "video_en.mp4"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3️⃣-odporúčaný-workflow",
      children: "3️⃣ Odporúčaný workflow"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OBS → MP4 (SK)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["AP → strih + export SK ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " (alebo Whisper/YouTube)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Preklad ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " → EN (", (0,jsx_runtime.jsx)(_components.code, {
          children: "translate_subs.py"
        }), " / API)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Voliteľne: vygeneruj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "EN voice"
        }), " → nahradiť/zmixovať v AP"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publikuj:", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "YouTube: SK video + SK/EN titulky"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["GitHub: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "index.md"
            }), " s FM, odkazy na ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".srt"
            }), " a MP4"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4️⃣-štruktúra-úložiska",
      children: "4️⃣ Štruktúra úložiska"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "videos/2025/K0061-WEB01/\n  original_sk.mp4\n  subtitles_sk.srt\n  subtitles_en.srt\n  voice_en.wav        # voliteľné\n  video_en.mp4        # voliteľné\n  index.md            # frontmatter + popis\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5️⃣-frontmatter-príklad",
      children: "5️⃣ Frontmatter (príklad)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "id: \"K0064-WEB01\"\nlanguage: \"sk\"\ntranslated: [\"en\"]\nrecord_date: \"2025-10-19\"\noutputs:\n  mp4_sk: \"videos/2025/K0064-WEB01/original_sk.mp4\"\n  srt_sk: \"videos/2025/K0064-WEB01/subtitles_sk.srt\"\n  srt_en: \"videos/2025/K0064-WEB01/subtitles_en.srt\"\n  mp4_en: \"videos/2025/K0064-WEB01/video_en.mp4\"\n  voice_en: \"videos/2025/K0064-WEB01/voice_en.wav\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6️⃣-best-practices",
      children: "6️⃣ Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Terminológiu drž v CSV/Glossary (SK→EN) – konzistentnosť medzi videami."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Segmentuj dlhé videá podľa markerov – jednoduchšie titulky a preklady."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Uchovávaj verzie ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".srt"
        }), " (v Gite) – kontrola zmien."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diagram:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        target: "_blank",
        "data-noBrokenLinkCheck": true,
        href: (__webpack_require__(26047)/* ["default"] */ .A) + "",
        children: "Multilingual-Publishing.drawio"
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