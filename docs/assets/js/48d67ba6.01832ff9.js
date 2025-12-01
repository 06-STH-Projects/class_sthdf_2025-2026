"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[59031],{

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

/***/ 89775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000089_smart_git_nastavenie_index_md_48d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000089-smart-git-nastavenie-index-md-48d.json
const site_docs_sk_knifes_k_000089_smart_git_nastavenie_index_md_48d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000089-SmartGit-Nastavenie/K000089","title":"K000089 – Kedy SSh a kedy HTTPS?","description":"","source":"@site/docs/sk/knifes/K000089-SmartGit-Nastavenie/index.md","sourceDirName":"sk/knifes/K000089-SmartGit-Nastavenie","slug":"/sk/knifes/K000089-SmartGit-Nastavenie/","permalink":"/sk/knifes/K000089-SmartGit-Nastavenie/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"knife","permalink":"/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-11-07","fm_version_comment":"","id":"K000089","guid":"8d84e744-939c-4b00-8369-0493275c5d4c","dao":"knife","title":"K000089 – Kedy SSh a kedy HTTPS?","description":"","author":"Roman Kazička","authors":["Roman Kazička"],"category":"","type":"","priority":"","tags":["knife"],"locale":"sk","created":"2025-11-07","modified":"","status":"Inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"CAA / KNIFE / LetItGrow","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"mix","fm_reserved1":"","fm_reserved2":"","sidebar_label":"K000089 – Kedy SSh a kedy HTTPS?"},"sidebar":"tutorialSidebar","previous":{"title":"K000088 – RCA-OBDII Wifi Adaptér nekomunikuje s autom(Android OS?)","permalink":"/sk/knifes/K000088-RCA-OBD-Wifi-Android/"},"next":{"title":"K000090 – VMWare Fusion NAT2DHCP Resurrection -mac OS Srquoia and M2 Max","permalink":"/sk/knifes/K000090-VMWARE-Fusion-NAT2DHCP/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000089-SmartGit-Nastavenie/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-11-07',
	fm_version_comment: '',
	id: 'K000089',
	guid: '8d84e744-939c-4b00-8369-0493275c5d4c',
	dao: 'knife',
	title: 'K000089 – Kedy SSh a kedy HTTPS?',
	description: '',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička'
	],
	category: '',
	type: '',
	priority: '',
	tags: [
		'knife'
	],
	locale: 'sk',
	created: '2025-11-07',
	modified: '',
	status: 'Inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'CAA / KNIFE / LetItGrow',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: 'mix',
	fm_reserved1: '',
	fm_reserved2: '',
	sidebar_label: 'K000089 – Kedy SSh a kedy HTTPS?'
};
const contentTitle = 'Kedy SSh a kedy HTTPS?';

const assets = {

};



const toc = [{
  "value": "Prečo tento KNIFE",
  "id": "prečo-tento-knife",
  "level": 2
}, {
  "value": "Rozhodovacia tabuľka",
  "id": "rozhodovacia-tabuľka",
  "level": 2
}, {
  "value": "Rýchle odpovede",
  "id": "rýchle-odpovede",
  "level": 2
}, {
  "value": "Setup A — HTTPS (PAT) v SmartGit (2 min)",
  "id": "setup-a--https-pat-v-smartgit-2-min",
  "level": 2
}, {
  "value": "Setup B — SSH v SmartGit (GUI, 5 min)",
  "id": "setup-b--ssh-v-smartgit-gui-5-min",
  "level": 2
}, {
  "value": "Setup C — SSH s OpenSSH (terminál, 5–7 min)",
  "id": "setup-c--ssh-s-openssh-terminál-57-min",
  "level": 2
}, {
  "value": "Tipy a best practices",
  "id": "tipy-a-best-practices",
  "level": 2
}, {
  "value": "Poznámky k Windows 11 ARM (VM)",
  "id": "poznámky-k-windows-11-arm-vm",
  "level": 2
}, {
  "value": "Troubleshooting (quick)",
  "id": "troubleshooting-quick",
  "level": 2
}, {
  "value": "Mini check-list (výučba)",
  "id": "mini-check-list-výučba",
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
    header: "header",
    hr: "hr",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "kedy-ssh-a-kedy-https",
        children: "Kedy SSh a kedy HTTPS?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["KNIFE K000089 created by Roman Kazička on 2025-11-07", (0,jsx_runtime.jsx)(_components.br, {}), "\n", "GUID: 8d84e744-939c-4b00-8369-0493275c5d4c"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: "k000089--smartgit--github-https-vs-ssh-rozhodnutie-setup-best-practices",
      children: "K000089 — SmartGit + GitHub: HTTPS vs SSH (rozhodnutie, setup, best practices)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prečo-tento-knife",
      children: "Prečo tento KNIFE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pri integrácii SmartGit ↔ GitHub potrebujeme zvoliť prístupový režim. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HTTPS (PAT token)"
      }), " je najjednoduchší pre jednotlivcov a študentov; ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "SSH"
      }), " je ideál pre automatizácie, servery a profesionálne tímy. Tento KNIFE dáva jasné ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rozhodnutie"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2 rýchle setupy"
      }), " a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "best practices"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rozhodovacia-tabuľka",
      children: "Rozhodovacia tabuľka"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenár"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Odporúčané"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prečo"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bežná práca v SmartGit / LemonTree / EA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTPS (PAT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jednoduché nastavenie, dobré UX v GUI, ľahká rotácia práv"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GitHub Classroom (študenti)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "HTTPS (PAT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "najmenšie riziko chýb, minimum podpory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI/CD, servery, NAS/QNAP backup, skripty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bez hesiel/tokens v skriptoch, agent, stabilita"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VM/ARM testy bez browser loginov"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SSH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "lokálna identita cez kľúč, bez OAuth flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-account (work/personal) v jednom stroji"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["SSH s ", (0,jsx_runtime.jsx)(_components.code, {
                children: "~/.ssh/config"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "oddelenie identít, host aliasy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rýchle-odpovede",
      children: "Rýchle odpovede"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Je HTTPS bezpečné?"
        }), " Áno, s PAT a správnym scope je to štandard."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Je SSH bezpečnejšie?"
        }), " Pri správnej správe kľúčov (passphrase + agent) je veľmi bezpečné a lepšie pre automaty."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Môžem mať oboje?"
        }), " Áno. SmartGit zvládne viac účtov (jeden HTTPS, iný SSH)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ARM/VM špecifiká?"
        }), " Na W11 ARM sa zídu SSH kľúče (menej závislosti na browser/OAuth). Poznámky na konci."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setup-a--https-pat-v-smartgit-2-min",
      children: "Setup A — HTTPS (PAT) v SmartGit (2 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["GitHub → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → Developer settings → Personal access tokens (Fine-grained)"
        }), " → vytvor PAT (repo + read", ":org", " podľa potreby)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SmartGit → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preferences → Hosting Providers → Add → GitHub"
        }), " → vlož token."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Hotovo. Clone/push/pull pôjde cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "https://github.com/..."
        }), " a token v credential cache."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Kedy použiť:"
      }), " jednotlivci, študenti, rýchly štart, GUI-only."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setup-b--ssh-v-smartgit-gui-5-min",
      children: "Setup B — SSH v SmartGit (GUI, 5 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Vhodné, keď chceš SSH bez terminalu, s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "interným SSH klientom SmartGit"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["SmartGit → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Preferences → Authentication → SSH"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "SSH client:"
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SmartGit internal"
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate Key…"
            }), " → Typ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ed25519"
            }), " (alebo ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rsa"
            }), "), nastav ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "passphrase"
            }), " → uloží sa do ", (0,jsx_runtime.jsx)(_components.code, {
              children: "…\\AppData\\Roaming\\syntevo\\SmartGit\\ssh\\"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy Public Key"
        }), " → vlož do GitHub: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Settings → SSH and GPG keys → New SSH key"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Otestuj v SmartGit: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Test"
        }), " (alebo clone SSH URL ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git@github.com:owner/repo.git"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["(Voliteľné) ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Enable SSH Agent"
        }), " v SmartGit, aby si nemusel zadávať passphrase pri každom pushi."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pozor:"
      }), " Interný SSH klient si spravuje vlastný ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ssh"
      }), " priečinok oddelene od systémového ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.ssh"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setup-c--ssh-s-openssh-terminál-57-min",
      children: "Setup C — SSH s OpenSSH (terminál, 5–7 min)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Vhodné, keď chceš jednotnú identitu pre SmartGit, VS Code, Git Bash, CI skripty."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vytvor kľúče"
        }), " (PowerShell):", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-powershell",
            children: "ssh-keygen -t ed25519 -C \"tvoj_email@domain.tld\"\n# uložiť do: C:\\Users\\<user>\\.ssh\\id_ed25519\n# nastav passphrase\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spusť agent a nahraj kľúč"
        }), ":", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-powershell",
            children: "Start-Service ssh-agent\nssh-add $env:USERPROFILE\\.ssh\\id_ed25519\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pridaj public key na GitHub"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["skopíruj obsah ", (0,jsx_runtime.jsx)(_components.code, {
              children: "id_ed25519.pub"
            }), " → GitHub ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings → SSH and GPG keys → New SSH key"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "~/.ssh/config"
        }), " (ak máš viac účtov/orgov):", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-sshconfig",
            children: "Host github.com\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/id_ed25519\n  AddKeysToAgent yes\n  IdentitiesOnly yes\n\n# príklad pre pracovný alias:\nHost github-work\n  HostName github.com\n  User git\n  IdentityFile ~/.ssh/id_ed25519_work\n  AddKeysToAgent yes\n  IdentitiesOnly yes\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test"
        }), ":", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-powershell",
            children: "ssh -T git@github.com\n# očakávané: \"Hi <username>! You've successfully authenticated…\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SmartGit"
        }), " → Preferences → Authentication → ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH client: OpenSSH"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tipy-a-best-practices",
      children: "Tipy a best practices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Typ kľúča:"
        }), " uprednostni ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ed25519"
        }), "; ak infra vyžaduje, použi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rsa -b 4096"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Passphrase:"
        }), " vždy nastav, ulož si do password managera."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Agent:"
        }), " povoliť ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh-agent"
        }), " (Windows služba) alebo ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SmartGit internal agent"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rotácia:"
        }), " pri odchode člena tímu zruš jeho public key v GitHube (Settings → SSH keys)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CI/CD:"
        }), " nepoužívaj osobné PAT; použi ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "deploy keys"
        }), " (repo-level SSH public key) alebo GitHub App."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-account:"
        }), " používaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.ssh/config"
        }), " + ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Host aliasy"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "github-work"
        }), "), v ", (0,jsx_runtime.jsx)(_components.code, {
          children: "origin"
        }), " URL potom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "git@github-work:org/repo.git"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LemonTree/EA:"
        }), " protokol (SSH/HTTPS) je nezávislý od integrácie – vyber podľa kontextu vyššie."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "poznámky-k-windows-11-arm-vm",
      children: "Poznámky k Windows 11 ARM (VM)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pri ARM emulácii sa môžu ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "líšiť registry pohľady"
        }), " (x86 vs x64). Pre SmartGit/LemonTree to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "neovplyvňuje protokol (SSH/HTTPS)"
        }), ", ale môže ovplyvniť ", (0,jsx_runtime.jsx)(_components.em, {
          children: "detekciu"
        }), " aplikácie."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH"
        }), " je v ARM VM často praktickejší (menej závislosti na browser OAuth)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak LemonTree „nevidí“ SmartGit, pomôže ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "bridge kľúč"
        }), " do ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HKLM\\SOFTWARE\\syntevo\\SmartGit"
        }), " (viď samostatný KNIFE RCA)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-quick",
      children: "Troubleshooting (quick)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "Permission denied (publickey)"
          })
        }), " → chýba key na GitHube, alebo SmartGit používa iný SSH klient než kde je kľúč. Zjednoť na OpenSSH alebo skopíruj key aj do SmartGit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pýta passphrase stále dokola"
        }), " → nie je spustený agent (", (0,jsx_runtime.jsx)(_components.code, {
          children: "Start-Service ssh-agent"
        }), ", potom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ssh-add …"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTPS pýta login"
        }), " → použije sa PAT (nie GitHub password). Skontroluj scope a expiraciu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kolegovia/študenti"
        }), " → pre nich drž HTTPS (PAT). SSH zaveď len tam, kde ho vedia spravovať."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mini-check-list-výučba",
      children: "Mini check-list (výučba)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Študentské repozitáre: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTPS (PAT)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Učiteľ/CI/NAS: ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "SSH (OpenSSH)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~/.ssh/config"
        }), " pre viac účtov"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Agent beží, kľúč nahratý"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Dokumentované rotačné pravidlá (odvolanie kľúčov/PAT)"]
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