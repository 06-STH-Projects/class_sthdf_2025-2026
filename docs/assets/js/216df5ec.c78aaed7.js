"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[62717],{

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

/***/ 62951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_makefile_appendix_md_216_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000067-github-deployment-strategie-k-000067-makefile-appendix-md-216.json
const site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_makefile_appendix_md_216_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000067-github-deployment-strategie/K000067_makefile_appendix","title":"K000067 Appendix – Makefile pre GitHub Pages (A/B režimy)","description":"-","source":"@site/docs/sk/knifes/K000067-github-deployment-strategie/K000067_makefile_appendix.md","sourceDirName":"sk/knifes/K000067-github-deployment-strategie","slug":"/sk/knifes/K000067-github-deployment-strategie/K000067_makefile_appendix","permalink":"/sk/knifes/K000067-github-deployment-strategie/K000067_makefile_appendix","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000067_makefile_appendix","guid":"da331cd7-ea63-41fc-ab47-216b48f9eed9","dao":"knife","title":"K000067 Appendix – Makefile pre GitHub Pages (A/B režimy)","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"K000067 Appendix – docusaurus.config.ts (ENV‑driven)","permalink":"/sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix"},"next":{"title":"K000067 GitHub Deployment Strategie","permalink":"/sk/knifes/K000067-github-deployment-strategie/K000067-github-deployment-strategie-01"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000067-github-deployment-strategie/K000067_makefile_appendix.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000067_makefile_appendix',
	guid: 'da331cd7-ea63-41fc-ab47-216b48f9eed9',
	dao: 'knife',
	title: 'K000067 Appendix – Makefile pre GitHub Pages (A/B režimy)',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: '-',
	type: '-',
	priority: 'no',
	tags: [
		'KNIFE'
	],
	locale: 'sk',
	created: '2025-09-24',
	modified: '-',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.',
	copyright: '© 2025 Roman Kazička / SystemThinking',
	origin_repo: '',
	origin_repo_url: '',
	origin_commit: '',
	origin_system: '',
	author_id: '-',
	author_did: '-',
	fm_reserved1: '',
	fm_reserved2: ''
};
const contentTitle = 'K000067 Appendix – Makefile pre GitHub Pages (A/B režimy)';

const assets = {

};



const toc = [{
  "value": "Predpoklady",
  "id": "predpoklady",
  "level": 2
}, {
  "value": "<code>package.json</code> – minimálne skripty",
  "id": "packagejson--minimálne-skripty",
  "level": 2
}, {
  "value": "Makefile (kompletný)",
  "id": "makefile-kompletný",
  "level": 2
}, {
  "value": "Poznámky k použitiu",
  "id": "poznámky-k-použitiu",
  "level": 2
}, {
  "value": "Hromadný init (pre desiatky repozitárov)",
  "id": "hromadný-init-pre-desiatky-repozitárov",
  "level": 2
}, {
  "value": "Troubleshooting (skratka)",
  "id": "troubleshooting-skratka",
  "level": 2
}, {
  "value": "Súvisiace",
  "id": "súvisiace",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "k000067-appendix--makefile-pre-github-pages-ab-režimy",
        children: "K000067 Appendix – Makefile pre GitHub Pages (A/B režimy)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "da331cd7-ea63-41fc-ab47-216b48f9eed9"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento appendix obsahuje ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "kompletný Makefile"
      }), " pre šablónu ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git_class_template_v1"
      }), " s dvomi nasadzovacími režimami:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "A – Branch deploy (default pre triedy)"
        }), ": používa vstavané ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus deploy"
        }), " → push na ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "B – Actions deploy (oficiálny Pages workflow)"
        }), ": build v CI → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy-pages@v4"
        }), " → environment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "github-pages"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Hlavný článok a kritériá výberu nájdeš v ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "K000067 – GitHub Pages – stratégie nasadzovania (A/B/C)"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "predpoklady",
      children: "Predpoklady"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Node.js 20 (pozri ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".nvmrc"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NPM (alebo pnpm/yarn – prispôsob príkazy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre režim B: povolené GitHub Actions a Pages v repozitári"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "packagejson--minimálne-skripty",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "package.json"
      }), " – minimálne skripty"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-json",
        children: "{\n  \"scripts\": {\n    \"start\": \"docusaurus start\",\n    \"build\": \"CUSTOM_DOMAIN=${CUSTOM_DOMAIN:-} docusaurus build\",\n    \"deploy\": \"docusaurus deploy\"\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus deploy"
        }), " automaticky pushuje na vetvu ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "makefile-kompletný",
      children: "Makefile (kompletný)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Vlož do koreňa repozitára ako ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Makefile"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-make",
        children: "## =========================\n## Makefile – Docusaurus + GitHub Pages (A/B)\n## =========================\nSHELL := /bin/bash\nNODE  := node\nNPM   := npm\n\n## Režim (len informačný – skutočný prepínač robia ciele use-branch/use-actions)\nMODE ?= branch     # branch | actions\nDOMAIN ?=          # pre custom doménu (CNAME)\n\n.PHONY: install dev build serve mode \\\n        set-domain unset-domain \\\n        use-branch use-actions \\\n        init-pages-branch deploy-branch \\\n        init-pages-actions deploy-actions \\\n        gh-init-pages gh-pages-status\n\n## -------------------------\n## Základ\n## -------------------------\ninstall: ; $(NPM) ci\n\ndev: ; $(NPM) start\n\nbuild: ; $(NPM) run build\n\nserve: ; $(NPM) run serve\n\nmode:\n\t@echo \"MODE=$(MODE)\"; \\\n\tif [ \"$(MODE)\" = \"branch\" ]; then \\\n\t  echo \"→ Branch deploy (gh-pages)\"; \\\n\telse \\\n\t  echo \"→ Actions deploy (GitHub Pages workflow)\"; \\\n\tfi\n\n## -------------------------\n## Custom domain helper (CNAME)\n## -------------------------\nset-domain:\n\t@if [ -z \"$(DOMAIN)\" ]; then echo \"Použitie: make set-domain DOMAIN=sub.domain.tld\"; exit 1; fi\n\tmkdir -p static && echo \"$(DOMAIN)\" > static/CNAME\n\tgit add static/CNAME && git commit -m \"chore: set CNAME $(DOMAIN)\" || true\n\t@echo \"✅ CNAME uložený. Nezabudni DNS CNAME → <org>.github.io\"\n\nunset-domain:\n\trm -f static/CNAME || true\n\tgit add -A && git commit -m \"chore: unset CNAME\" || true\n\t@echo \"✅ CNAME odstránený\"\n\n## -------------------------\n## A) Branch deploy (jednoduchý)\n## -------------------------\nuse-branch:\n\t@[ -f .github/workflows/deploy.yml ] && mv .github/workflows/deploy.yml .github/workflows/deploy.yml.disabled || true\n\tgit add -A && git commit -m \"ci: use Branch deploy (disable Actions)\" || true\n\t@echo \"🔧 ENABLED Branch deploy. Teraz nastav v UI: Settings → Pages → Source: gh-pages (root).\"\n\ninit-pages-branch:\n\t@echo \"➡️  V UI nastav: Settings → Pages → Build and deployment = Deploy from branch\" \\\n\t      \"→ branch: gh-pages, folder: /(root)\"\n\n## Vstavané v Docusauruse – push na gh-pages\ndeploy-branch:\n\t$(NPM) run deploy\n\n## -------------------------\n## B) Actions deploy (oficiálny)\n## -------------------------\nuse-actions:\n\t@mkdir -p .github/workflows\n\t@[ -f .github/workflows/deploy.yml.disabled ] && mv .github/workflows/deploy.yml.disabled .github/workflows/deploy.yml || true\n\tgit add -A && git commit -m \"ci: enable Actions deploy\" || true\n\t@echo \"🔧 ENABLED Actions workflow. Spusť: make init-pages-actions\"\n\n## Manuálny init – ak nechceš používať gh CLI\ninit-pages-actions:\n\t@echo \"➡️  Settings → Pages → Source = GitHub Actions (uložiť)\"; \\\n\techo \"➡️  Settings → Environments → create 'github-pages' (bez reviewers/wait timer)\"; \\\n\techo \"➡️  Settings → Actions → Workflow permissions: Read & write\";\n\n## V CI stačí push do main alebo Run workflow\ndeploy-actions:\n\t@echo \"Pushni do main alebo spusti workflow ručne (Run workflow v Actions).\"\n\n## -------------------------\n## (Voliteľné) Automatizovaný init cez gh CLI\n## -------------------------\n## Požiadavky: gh auth login; práva na repo\nORG ?= $(shell git config --get remote.origin.url | sed -E 's#.*/([^/]+)/[^/]+(\\.git)?#\\1#')\nREPO ?= $(shell basename -s .git `git rev-parse --show-toplevel`)\n\n## Vytvorí env, zapne Pages=Actions, nastaví permissions\ngh-init-pages:\n\t@echo \"🔧 gh-init-pages pre $(ORG)/$(REPO)…\"; \\\n\tgh api -X PUT repos/$(ORG)/$(REPO)/environments/github-pages >/dev/null; \\\n\tgh api -X POST repos/$(ORG)/$(REPO)/pages -f build_type=workflow >/dev/null 2>&1 || true; \\\n\tgh api -X PUT  repos/$(ORG)/$(REPO)/pages -F build_type=workflow >/dev/null; \\\n\tgh api -X PUT repos/$(ORG)/$(REPO)/actions/permissions -f enabled=true -f allowed_actions=all >/dev/null; \\\n\techo \"✅ Hotovo. Teraz pushni do main a sleduj Actions.\"\n\ngh-pages-status:\n\t@gh api repos/$(ORG)/$(REPO)/pages | jq '{status, cname, https_enforced, build_type}' || echo \"⚠️ Pages ešte nie sú inicializované\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "poznámky-k-použitiu",
      children: "Poznámky k použitiu"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Default pre triedy"
        }), ": použi ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use-branch"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy-branch"
        }), " a raz nastav Pages na ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages (root)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actions režim"
        }), ": používaj tam, kde chceš audit/deploymenty a pravidlá. Iniciuj cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "use-actions"
        }), " + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "init-pages-actions"
        }), " (alebo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-init-pages"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom doména"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make set-domain DOMAIN=…"
        }), " + DNS CNAME. V ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus.config.ts"
        }), " nech rozhoduje ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CUSTOM_DOMAIN"
        }), " (pozri súbor ", (0,jsx_runtime.jsx)(_components.em, {
          children: "K000067_docusaurus_configuration.md"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hromadný-init-pre-desiatky-repozitárov",
      children: "Hromadný init (pre desiatky repozitárov)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "## vyžaduje: gh auth login\nORG=\"06-STH-Projects\"\nfor REPO in $(gh repo list $ORG --limit 200 --json name -q '.[].name' | grep '^class_'); do\n  echo \">>> $ORG/$REPO\"\n  gh api -X PUT repos/$ORG/$REPO/environments/github-pages >/dev/null\n  gh api -X POST repos/$ORG/$REPO/pages -f build_type=workflow >/dev/null 2>&1 || true\n  gh api -X PUT  repos/$ORG/$REPO/pages -F build_type=workflow >/dev/null\n  gh api -X PUT repos/$ORG/$REPO/actions/permissions -f enabled=true -f allowed_actions=all >/dev/null\n  echo \"OK\"\ndone\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-skratka",
      children: "Troubleshooting (skratka)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "404: Ensure GitHub Pages has been enabled"
        }), " → chýba env ", (0,jsx_runtime.jsx)(_components.code, {
          children: "github-pages"
        }), " alebo Pages=Actions (init podľa vyššie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Chýba ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pages-build-deployment"
          })]
        }), " → objaví sa až po prvom úspešnom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy-pages@v4"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Žltý banner o ", (0,jsx_runtime.jsx)(_components.code, {
            children: "baseUrl"
          })]
        }), " → zlá kombinácia ", (0,jsx_runtime.jsx)(_components.code, {
          children: "url/baseUrl"
        }), "; pozri ", (0,jsx_runtime.jsx)(_components.em, {
          children: "K000067_docusaurus_configuration.md"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTPS nejde na custom doméne"
        }), " → invalid CNAME (napr. podčiarkovník) alebo čakáš na DNS."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "súvisiace",
      children: "Súvisiace"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.em, {
          children: "K000067 – GitHub Pages – stratégie nasadzovania (A/B/C)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "K000067_docusaurus_configuration.md"
        }), " – univerzálny ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus.config.ts"
        }), " (ENV-driven)"]
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



/***/ })

}]);