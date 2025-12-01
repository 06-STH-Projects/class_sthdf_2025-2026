"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[53759],{

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

/***/ 32636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_class_sthdf_about_index_md_2ff_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-class-sthdf-about-index-md-2ff.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_class_sthdf_about_index_md_2ff_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/class-sthdf/about/Home","title":"📘 About the Course","description":"Overview of the STHDF 2025–2026 course – goals, format, tooling, and outcomes.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/class-sthdf/about/index.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/class-sthdf/about","slug":"/","permalink":"/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"course","permalink":"/docs/tags/course"},{"inline":true,"label":"overview","permalink":"/docs/tags/overview"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-28T15:54:47.767015+00:00","fm_version_comment":"","id":"Home","guid":"dc14de04-7845-4c96-9117-aedb7d0474e7","dao":"class_sthdf_dashboard","title":"📘 About the Course","description":"Overview of the STHDF 2025–2026 course – goals, format, tooling, and outcomes.","author":"Roman Kazicka","authors":["Roman Kazicka"],"category":"","type":"","priority":"","tags":["course","overview"],"locale":"sk","created":"2025-11-28 16:54","modified":"2025-11-28 16:54","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazicka","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazicka","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_branch":"","origin_system":"CAA","origin_author":"Roman Kazicka","origin_imported_from":"","origin_import_date":"","slug":"/","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"🧭 Class STHDF – Overview","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/class-sthdf/"},"next":{"title":"✨ Showcase — Best of 2025","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/class-sthdf/showcase/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/class-sthdf/about/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-28T15:54:47.767015+00:00',
	fm_version_comment: '',
	id: 'Home',
	guid: 'dc14de04-7845-4c96-9117-aedb7d0474e7',
	dao: 'class_sthdf_dashboard',
	title: '📘 About the Course',
	description: 'Overview of the STHDF 2025–2026 course – goals, format, tooling, and outcomes.',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazicka'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'course',
		'overview'
	],
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
	slug: '/',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'System thinking in IT and Digital Fabrication';

const assets = {

};



const toc = [{
  "value": "Vision",
  "id": "vision",
  "level": 2
}, {
  "value": "Mission",
  "id": "mission",
  "level": 2
}, {
  "value": "Commitment",
  "id": "commitment",
  "level": 2
}, {
  "value": "Strategy",
  "id": "strategy",
  "level": 2
}, {
  "value": "Time Roadmap",
  "id": "time-roadmap",
  "level": 2
}, {
  "value": "Technical conditions/requirements",
  "id": "technical-conditionsrequirements",
  "level": 2
}, {
  "value": "Conditions for completing the course 2023-2024",
  "id": "conditions-for-completing-the-course-2023-2024",
  "level": 2
}, {
  "value": "Meet the team",
  "id": "meet-the-team",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: "keywords: [STHDF, course, overview]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/",
        children: "🏠 Domov"
      }), " · ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/class-sthdf/",
        children: "⬅️ Nahor"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "system-thinking-in-it-and-digital-fabrication",
        children: "System thinking in IT and Digital Fabrication"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "Journey-Banner.png",
        src: (__webpack_require__(57375)/* ["default"] */ .A) + "",
        width: "1141",
        height: "336"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "vision",
      children: "Vision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["We are building Trusted Single source of truth ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "3Rs: Right Information - For Right Role - in Right Time"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Our Vision is to empower our students with the knowledge and skills necessary to excel in the world of IT and Digital Fabrication by fostering a deep understanding of system thinking."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "We aspire to create a community where innovative problem-solving thrives, enabling our students to become architects of the  'trusted single source of truth' in the digital age."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Furthermore, we aim to bridge the gaps among 'Islands of Knowledge,' promoting a holistic perspective in an interconnected world.\""
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mission",
      children: "Mission"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "\"Our Mission is to provide a comprehensive educational experience that cultivates the core values of Communication, Understanding, Trust, Cooperation, and Success Solutions."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Through rigorous curriculum, hands-on learning, and collaborative projects, we aim to equip our students with the ability to analyze complex systems, make informed decisions, and implement sustainable solutions."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "We are dedicated to nurturing a learning environment that encourages critical thinking, creativity, and ethical responsibility, preparing our students to lead and innovate in the ever-evolving fields of IT and Digital Fabrication."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In addition, we are committed to building synergies among internal teams and external partners,"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Fostering collaborations that enrich our students' experiences and broaden their horizons."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "By actively connecting knowledge and resources, we seek to create a dynamic ecosystem where the power of collective wisdom drives progress and innovation.\""
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "commitment",
      children: "Commitment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Without COMMUNICATION      There is NO UNDERSTANDING       a"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Without Understanding there is NO TRUST"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Without Trust there is NO SUCCESSFUL SOLUTION"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "We are committed  to:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "bridging knowledge gaps"
          }), " and"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "fostering collaborations"
          }), " among internal and external stakeholders,"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["aligning with the principles of ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "system thinking and holistic problem-solving"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "strategy",
      children: "Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Based on 5 principles of Self learning organisation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Peter Senge, 5th Principle of self learning organisation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personal Mastery.\nIt is the process of continuous learning and self-improvement."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mental Models.\nIt is the ability to recognize and challenge the assumptions and beliefs that shape our perceptions of the world."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared Vision.\nIt is the ability to create a common goal that motivates and aligns the efforts of all members of an organization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Team Learning.\nIt is the ability to learn and work together as a team to achieve a common goal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systems Thinking.\nIt is the ability to see the big picture and understand how the different parts of a system interact with each other."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "time-roadmap",
      children: "Time Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Winter Semester 2023-2024, september 2023 - January 2024"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "technical-conditionsrequirements",
      children: "Technical conditions/requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "For team collaboation is used Atlassian Confluence and Bitbuct"
      }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Every student has got own organisation with Confluence and Bitbucket\nCoordinations, Templates, communication is performed via Class confluence\nFinal Students Outputs is via class Bitbucket"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conditions-for-completing-the-course-2023-2024",
      children: "Conditions for completing the course 2023-2024"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are defined 5 maturity levels:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "F - Passive approach"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "E - Slide show maker"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "D - Activity keep tracker"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "C - Conceptual Diagram maker"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "B - Feature based knowledge worker"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A - Real World Modeler"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "Presentation of final outputs in Confluence."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Original in own organization, copy in SystemThinking-In-IT, Bitbucket"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Minimum requirements to pass the assessment for Systems Thinking ", (0,jsx_runtime.jsx)("br", {}), "\nMinimum requirements for Digital Fabrication ", (0,jsx_runtime.jsx)("br", {}), "\nCommentsThe final mark will be the average of the marks from both areas. ", (0,jsx_runtime.jsx)("br", {}), "\nThe minimum must be met in both sections."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "right"
            },
            children: "Grade"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "System thinking"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Digital Fabrication"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Comments"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Fx"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ignoracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "ignoracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "minimum effort and level of cooperation required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "E"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Own space for the knowledge system. ", (0,jsx_runtime.jsx)("br", {}), " Presentation of final outputs in Confluence. ", (0,jsx_runtime.jsx)("br", {}), " Original in own organization, copy in SystemThinking-In-IT, ", (0,jsx_runtime.jsx)("br", {}), " GitHub"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Creating a 3D object with a SMARTLAB CVTI technology.Documentation on GitHub"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Each student must have his or her own space for the knowledge system. ", (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub Pages."
            }), " ", (0,jsx_runtime.jsx)("br", {}), " Each student must create an GitHub presentation of the output of their work. ", (0,jsx_runtime.jsx)("br", {}), " This is at the level of previous years' work."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "D"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Demonstrable record of knowledge during the creation of the resulting deliverables in Confluence following the 7Ds methodology using drawing tools (e.g. EA, Draw.io)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Mastery of the basics of at least two SMARTLAB CVTI technologies.Documentation on GitHub"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["The student must demonstrate ongoing systematic work throughout the semester by recording the various parts of the 7Ds methodology in their knowledge system. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub, GitHub Pages"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "C"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Presentable model in some modeler with implemented 7Ds methodology, Enterprise Architect is recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Implementation of the \"materialization\" of an individual idea, project using several SMARTLAB CVTI technologies, including generative and parametric design.Documentation on GitHub"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["On this level are diagrams ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enterprise Architect, GitHub, GitHub Sites"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "B"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Demonstration of ability to work with the model and git workflow."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Implementation of the \"materialization\" of the idea, project using several FABLAB CVTI technologies, including generative and parametric design. In a team of min. 2 members and Documentation on GitHub in the form of detailed step-by-step instructions."
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Decentralized versioning system enables PARALLEL Modeling, workflows that significantly accelerate the delivery of sw solutions, support the quality of delivered solutions, protect the work of all involved from stasis and damage. Recommended technologies- ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "GitHub, GITbash,  SmartGIT"
            }), " ", (0,jsx_runtime.jsx)(_components.em, {
              children: "The only technology for parallel modeling with GIT workflow support is Enterprise Architect and Lemontree"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "right"
            },
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "A"
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Presentable custom model with implemented AUV methodology.Demonstration of understanding of the concepts of Taxonomy, Ontology, Visual Management through concrete diagrams and demonstration of the model. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommended modeler Enterprise Architect"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Implementation of the \"materialization\" of the idea, the project using several SMARTLAB CVTI technologies, including generative and parametric design and also the use of machine learning (AI) in a team of at least 2 members.Documentation on GitHub in the form of detailed step-by-step instructions, understandable for some age groups. ", (0,jsx_runtime.jsx)("br", {})]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["Work at the level of models. The student must demonstrate the ability to distinguish what an image is, what a model is, what a taxonomy is, what an ontology is. How he/she has used this in his/her work. Just within the scope of the solution provided. This to create a digital twin of the student's solution. Visual Management is also part of it. ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Enterprise Architect, Draw.io"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "meet-the-team",
      children: "Meet the team"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Person"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Responsibility"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Contact"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ing. Roman Kazička, PhD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Course supervisor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            }
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Ing. Roman Kazička, PhD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Knowledge Management Enterprise Architect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Teacher"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: [(0,jsx_runtime.jsx)("img", {
              src: "./img/Detail-05.png",
              alt: "kazicka",
              width: "180"
            }), (0,jsx_runtime.jsx)("br", {}), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "mailto:roman.kazicka@systemthinking.sk",
              children: "roman.kazicka@systemthinking.sk"
            }), ">"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/class-sthdf/",
        children: "Back to Home"
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

/***/ 57375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/Journey-Banner-3535af1417e5d07a4e92c57ae84ad855.png");

/***/ })

}]);