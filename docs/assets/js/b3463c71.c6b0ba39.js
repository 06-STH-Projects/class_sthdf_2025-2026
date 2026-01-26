"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[80262],{

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

/***/ 61728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_007_deliverables_02_knowledge_contribution_md_b34_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-students-st-007-deliverables-02-knowledge-contribution-md-b34.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_students_st_007_deliverables_02_knowledge_contribution_md_b34_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/deliverables/knowledge-contribution","title":"📚 Knowledge Contribution","description":"🔖 Názov a stručný popis","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST007/deliverables/02_knowledge-contribution.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST007/deliverables","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/deliverables/knowledge-contribution","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/deliverables/knowledge-contribution","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"fm_version":"1.0.1","fm_version_comment":"","locale":"sk","fm_build":"2025-12-09T21:04:48Z"},"sidebar":"tutorialSidebar","previous":{"title":"about-me","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/deliverables/about-me"},"next":{"title":"📝 Project Summary","permalink":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/deliverables/project-summary"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/students/ST007/deliverables/02_knowledge-contribution.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_version_comment: '',
	locale: 'sk',
	fm_build: '2025-12-09T21:04:48Z'
};
const contentTitle = '📚 Knowledge Contribution';

const assets = {

};



const toc = [{
  "value": "🔖 Názov a stručný popis",
  "id": "-názov-a-stručný-popis",
  "level": 2
}, {
  "value": "🎯 Čo rieši (účel, cieľ)",
  "id": "-čo-rieši-účel-cieľ",
  "level": 2
}, {
  "value": "🧩 Ako to rieši (princíp)",
  "id": "-ako-to-rieši-princíp",
  "level": 2
}, {
  "value": "🧪 Ako to použiť (aplikácia)",
  "id": "-ako-to-použiť-aplikácia",
  "level": 2
}, {
  "value": "Predpoklady",
  "id": "predpoklady",
  "level": 3
}, {
  "value": "Setup (5 krokov)",
  "id": "setup-5-krokov",
  "level": 3
}, {
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "Prečo Git Auto-Update?",
  "id": "prečo-git-auto-update",
  "level": 3
}, {
  "value": "Ako to funguje pod kapotou",
  "id": "ako-to-funguje-pod-kapotou",
  "level": 3
}, {
  "value": "Edge cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 3
}, {
  "value": "Anti-patterns",
  "id": "anti-patterns",
  "level": 3
}, {
  "value": "Security",
  "id": "security",
  "level": 3
}, {
  "value": "Monitoring",
  "id": "monitoring",
  "level": 3
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}, {
  "value": "Prínosy",
  "id": "prínosy",
  "level": 3
}, {
  "value": "Kedy použiť",
  "id": "kedy-použiť",
  "level": 3
}, {
  "value": "Kedy nepoužiť",
  "id": "kedy-nepoužiť",
  "level": 3
}, {
  "value": "ROI",
  "id": "roi",
  "level": 3
}, {
  "value": "🗂️ Taxonómia KNIFE",
  "id": "️-taxonómia-knife",
  "level": 2
}, {
  "value": "🌍 Referencie",
  "id": "-referencie",
  "level": 2
}, {
  "value": "Navigácia",
  "id": "navigácia",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "-knowledge-contribution",
        children: "📚 Knowledge Contribution"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-názov-a-stručný-popis",
      children: "🔖 Názov a stručný popis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Auto-Update pre Embedded Systémy"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Automatická aktualizácia aplikácie z GitHub repozitára pri každom boote zariadenia"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminuje potrebu fyzického prístupu k zariadeniu pre nasadenie nových verzií kódu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Problém"
        }), ": Embedded zariadenia (Raspberry Pi) vyžadujú fyzický prístup alebo SSH pre update kódu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Riešenie"
        }), ": Automatický git pull pri každom štarte systému"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Benefit"
        }), ": Continuous deployment bez manuálneho zásahu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use case"
        }), ": IoT zariadenia, displeje, kiosky, weather stations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Systemd service"
        }), " spúšťa bash script pri boote"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bash script"
        }), " vykoná ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git fetch"
        }), " a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git reset --hard origin/main"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH autentifikácia"
        }), " cez SSH kľúč (bez hesla)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fail-safe"
        }), ": Ak git pull zlyhá, spustí poslednú lokálnu verziu"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging"
        }), ": Každý update sa loguje do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "update.log"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "predpoklady",
      children: "Predpoklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi s Git"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub repozitár"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH prístup do Pi"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "setup-5-krokov",
      children: "Setup (5 krokov)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Vygeneruj SSH kľúč na Pi"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "   ssh-keygen -t ed25519 -C \"project-name\"\n   cat ~/.ssh/id_ed25519.pub  # skopíruj\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Pridaj SSH kľúč do GitHubu"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GitHub → Settings → SSH keys → Add new"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Vytvor update script"
          }), " (", (0,jsx_runtime.jsx)(_components.code, {
            children: "update_and_run.sh"
          }), ")"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "   #!/bin/bash\n   REPO_URL=\"git@github.com:user/repo.git\"\n   APP_DIR=\"/home/user/app\"\n   \n   if [ ! -d \"$APP_DIR/.git\" ]; then\n       git clone \"$REPO_URL\" \"$APP_DIR\"\n   else\n       cd \"$APP_DIR\"\n       git fetch origin\n       git reset --hard origin/main\n   fi\n   \n   python3 main.py\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vytvor systemd service"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "/etc/systemd/system/app.service"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ini",
        children: "   [Unit]\n   Description=Auto-updating Application\n   After=network-online.target\n   \n   [Service]\n   Type=simple\n   User=user\n   ExecStart=/home/user/app/update_and_run.sh\n   Restart=on-failure\n   \n   [Install]\n   WantedBy=multi-user.target\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Aktivuj service"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "   sudo systemctl enable app.service\n   sudo systemctl start app.service\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1. SSH kľúč\nssh-keygen -t ed25519\ncat ~/.ssh/id_ed25519.pub  # → GitHub\n\n# 2. Update script\nnano update_and_run.sh\n# [vložiť script vyššie]\nchmod +x update_and_run.sh\n\n# 3. Systemd service\nsudo nano /etc/systemd/system/app.service\n# [vložiť config vyššie]\n\n# 4. Enable & start\nsudo systemctl enable app.service\nsudo systemctl start app.service\n\n# 5. Push do GitHub → automatický update pri ďalšom boote\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prečo-git-auto-update",
      children: "Prečo Git Auto-Update?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tradičný prístup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SSH do zariadenia → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git pull"
        }), " → restart služby"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problém: Desiatky zariadení = desiatky SSH spojení"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Riziko: Ľudská chyba, zabudnuté zariadenia"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Auto-update prístup:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Push do GitHub → zariadenia sa automaticky updatujú pri reštarte"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Zero-touch deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Všetky zariadenia vždy na najnovšej verzii"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ako-to-funguje-pod-kapotou",
      children: "Ako to funguje pod kapotou"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Boot sequence"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   Power On → Systemd → network-online.target → app.service\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Git operations"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git fetch origin"
            }), " - stiahne zmeny bez merge"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "git reset --hard origin/main"
            }), " - prepíše lokálne zmeny"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Prečo ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reset"
            }), " a nie ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pull"
            }), "? → Žiadne merge konflikty"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "SSH autentifikácia"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["SSH kľúč v ", (0,jsx_runtime.jsx)(_components.code, {
              children: "~/.ssh/id_ed25519"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GitHub pozná verejný kľúč"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bezpečné, bez hesla"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo ak nie je internet pri boote?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Systemd: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "After=network-online.target"
        }), " → čaká na sieť"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak timeout, spustí poslednú lokálnu verziu"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo ak GitHub spadne?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Git fetch zlyhá → pokračuje s lokálnou verziou"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aplikácia beží aj bez update"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Čo ak sú konflikty?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "git reset --hard"
        }), " → prepíše všetko"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nikdy neupravuj kód lokálne na Pi!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Používaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " branch pre production"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Testuj zmeny lokálne pred push"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Verzionuj pomocou Git tags (", (0,jsx_runtime.jsx)(_components.code, {
          children: "v1.0.0"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Loguj update operations do súboru"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ Používaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Restart=on-failure"
        }), " v systemd"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anti-patterns",
      children: "Anti-patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Neupravuj súbory lokálne na Pi (git reset ich prepíše)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Nedávaj heslá do repo (použij environment variables)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Netestuj priamo na production zariadení"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security",
      children: "Security"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SSH kľúč je read-only (GitHub deploy key)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Neposkytuje write prístup do repo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak Pi je kompromitované, útočník nemôže meniť kód"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "monitoring",
      children: "Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Check update log\ncat ~/app/update.log\n\n# Check service status\nsystemctl status app.service\n\n# Manual update test\ncd ~/app && git pull\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prínosy",
      children: "Prínosy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🚀 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Continuous Deployment"
        }), " - Push to production okamžite"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🔄 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-touch Updates"
        }), " - Žiadny manuálny zásah"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📊 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Škálovateľnosť"
        }), " - 1 zariadenie = 100 zariadení"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["🛡️ ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Bezpečnosť"
        }), " - SSH kľúče, žiadne heslá"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["📝 ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Audit Trail"
        }), " - Git história všetkých zmien"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kedy-použiť",
      children: "Kedy použiť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ IoT zariadenia v teréne"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Digital signage / kiosky"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Embedded dashboardy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Weather stations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Smart home controllers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kedy-nepoužiť",
      children: "Kedy nepoužiť"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Kritické systémy (medicína, aerospace)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Zariadenia bez stabilného internetu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "❌ Prostredie s prísnou change control"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "roi",
      children: "ROI"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pred"
        }), ": 10 zariadení × 5 min update = 50 min"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Po"
        }), ": 1× git push = 1 min"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Úspora"
        }), ": 98% času"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "️-taxonómia-knife",
      children: "🗂️ Taxonómia KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kategória:"
        }), " IT / DevOps / Embedded Systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ:"
        }), " Technický návod, Best Practice"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tagy:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raspberry-pi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "automation"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continuous-deployment"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "systemd"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "embedded"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iot"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "auto-update"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "devops"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-referencie",
      children: "🌍 Referencie"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.freedesktop.org/software/systemd/man/systemd.service.html",
          children: "Systemd Service Documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh",
          children: "GitHub SSH Key Setup"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://stackoverflow.com/questions/3639342/whats-the-difference-between-git-reset-and-git-checkout",
          children: "Git Reset vs Pull"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://www.raspberrypi.com/documentation/computers/using_linux.html#the-systemd-daemon",
          children: "Raspberry Pi Systemd Services"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navigácia",
      children: "Navigácia"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/students/ST007/",
          children: "↩️ Späť"
        })
      }), "\n"]
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