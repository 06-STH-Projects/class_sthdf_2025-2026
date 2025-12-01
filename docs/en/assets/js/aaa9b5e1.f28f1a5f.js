"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[36418],{

/***/ 6692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_docusaurus_config_ts_appendix_md_aaa_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000067-github-deployment-strategie-k-000067-docusaurus-config-ts-appendix-md-aaa.json
const site_docs_sk_knifes_k_000067_github_deployment_strategie_k_000067_docusaurus_config_ts_appendix_md_aaa_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix","title":"K000067 Appendix – docusaurus.config.ts (ENV‑driven)","description":"-","source":"@site/docs/sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix.md","sourceDirName":"sk/knifes/K000067-github-deployment-strategie","slug":"/sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/en/docs/tags/knife"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000067_docusaurus_config_ts_appendix","guid":"7c3ff713-c422-450c-a765-fe0ab6edc560","dao":"knife","title":"K000067 Appendix – docusaurus.config.ts (ENV‑driven)","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"-","type":"-","priority":"no","tags":["KNIFE"],"locale":"sk","created":"2025-09-24","modified":"-","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"GitHub Deployment Strategie - Pre Zvedavých","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/K000067-github-deployment-strategie"},"next":{"title":"K000067 Appendix – Makefile pre GitHub Pages (A/B režimy)","permalink":"/en/sk/knifes/K000067-github-deployment-strategie/K000067_makefile_appendix"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000067-github-deployment-strategie/K000067_docusaurus_config_ts_appendix.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000067_docusaurus_config_ts_appendix',
	guid: '7c3ff713-c422-450c-a765-fe0ab6edc560',
	dao: 'knife',
	title: 'K000067 Appendix – docusaurus.config.ts (ENV‑driven)',
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
const contentTitle = 'K000067 Appendix – docusaurus.config.ts (ENV‑driven)';

const assets = {

};



const toc = [{
  "value": "Kompletný príklad <code>docusaurus.config.ts</code>",
  "id": "kompletný-príklad-docusaurusconfigts",
  "level": 2
}, {
  "value": "Ako nastavujem ENV premenné",
  "id": "ako-nastavujem-env-premenné",
  "level": 2
}, {
  "value": "1) GitHub Actions",
  "id": "1-github-actions",
  "level": 3
}, {
  "value": "2) Lokálny build",
  "id": "2-lokálny-build",
  "level": 3
}, {
  "value": "Navbar/Linky – odporúčania",
  "id": "navbarlinky--odporúčania",
  "level": 2
}, {
  "value": "Docs‑only mód (ak nechceš homepage)",
  "id": "docsonly-mód-ak-nechceš-homepage",
  "level": 2
}, {
  "value": "Voliteľné: banner režimu pre DEV",
  "id": "voliteľné-banner-režimu-pre-dev",
  "level": 2
}, {
  "value": "Rýchly checklist (pred deployom)",
  "id": "rýchly-checklist-pred-deployom",
  "level": 2
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 2
}, {
  "value": "Súvisiace",
  "id": "súvisiace",
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
    h3: "h3",
    header: "header",
    hr: "hr",
    input: "input",
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
        id: "k000067-appendix--docusaurusconfigts-envdriven",
        children: "K000067 Appendix – docusaurus.config.ts (ENV‑driven)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "7c3ff713-c422-450c-a765-fe0ab6edc560"
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
      children: ["Tento appendix prináša ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "univerzálny"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.ts"
      }), ", ktorý sa prispôsobí:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GitHub Pages – project site"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "url = https://ORG.github.io"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baseUrl = /REPO/"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom doména"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "url = https://sub.domain.tld"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baseUrl = /"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Prepínanie sa deje cez ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ENV premennú"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUSTOM_DOMAIN"
      }), ". Ak je prázdna/nenastavená ⇒ GitHub Pages režim. Ak je vyplnená ⇒ custom doména."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "kompletný-príklad-docusaurusconfigts",
      children: ["Kompletný príklad ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docusaurus.config.ts"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Ulož ako ", (0,jsx_runtime.jsx)(_components.code, {
          children: "docusaurus.config.ts"
        }), " do koreňa projektu. Ponechaj TypeScript (Docusaurus ho podporuje)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "import type {Config} from '@docusaurus/types';\nimport {themes as prismThemes} from 'prism-react-renderer';\n\n// Bezpečné čítanie premenných z prostredia\nconst env = process.env as Record<string, string | undefined>;\n\n// Z GitHub Actions poskytovaná premenná v tvare \"ORG/REPO\"\nconst repoPath = env.GITHUB_REPOSITORY || '';\nconst [org = 'ORG', repo = 'REPO'] = repoPath.split('/');\n\n// Prepínač: ak CUSTOM_DOMAIN existuje → vlastná doména, inak GH Pages project site\nconst usingCustom = !!env.CUSTOM_DOMAIN && env.CUSTOM_DOMAIN.trim() !== '';\nconst siteUrl = usingCustom\n  ? `https://${env.CUSTOM_DOMAIN}`\n  : `https://${org}.github.io`;\nconst baseUrl = usingCustom ? '/' : `/${repo}/`;\n\nconst config: Config = {\n  title: 'Class Site',\n  tagline: 'Docs & projects',\n  url: siteUrl,        // ↪️ mení sa podľa CUSTOM_DOMAIN\n  baseUrl: baseUrl,    // ↪️ '/' (custom) vs '/REPO/' (GH Pages)\n  trailingSlash: true, // stabilné URL (menej 301/404)\n\n  // užitočné meta\n  organizationName: org,\n  projectName: repo,\n\n  // build prísnosť\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n\n  // i18n (ponechaj podľa projektu)\n  i18n: { defaultLocale: 'sk', locales: ['sk'] },\n\n  // Preset – Classic\n  presets: [\n    [\n      'classic',\n      {\n        docs: {\n          routeBasePath: 'docs', // alebo '/' pre docs-only mód\n          sidebarPath: require.resolve('./sidebars.js'),\n        },\n        blog: false,\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      },\n    ],\n  ],\n\n  themeConfig: {\n    navbar: {\n      title: 'Class',\n      items: [\n        {to: '/docs/intro', label: 'Docs', position: 'left'},\n        // ⚠️ Používaj `to:` (nie absolútne URL), Docusaurus pridá baseUrl sám\n      ],\n    },\n    footer: {\n      style: 'dark',\n      copyright: `© ${new Date().getFullYear()} Class`,\n    },\n    prism: {\n      theme: prismThemes.github,\n      darkTheme: prismThemes.dracula,\n    },\n  },\n};\n\nexport default config;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ako-nastavujem-env-premenné",
      children: "Ako nastavujem ENV premenné"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-github-actions",
      children: "1) GitHub Actions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["V ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".github/workflows/deploy.yml"
      }), " priraď ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CUSTOM_DOMAIN"
      }), " z repo/environ. variables (alebo nechaj prázdne):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "jobs:\n  build:\n    runs-on: ubuntu-latest\n    env:\n      CUSTOM_DOMAIN: ${{ vars.CUSTOM_DOMAIN || '' }}\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with: { node-version: 20 }\n      - run: npm ci\n      - run: npm run build\n      - uses: actions/upload-pages-artifact@v3\n        with: { path: build }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project URL (GH Pages)"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vars.CUSTOM_DOMAIN"
        }), " nechaj prázdne → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "url=https://ORG.github.io"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baseUrl=/${repo}/"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom doména"
        }), ": nastav ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vars.CUSTOM_DOMAIN = sub.domain.tld"
        }), " (v ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Settings → Environments → github-pages → Variables"
        }), "), plus vlož ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static/CNAME"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-lokálny-build",
      children: "2) Lokálny build"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "## GH Pages (project URL)\nCUSTOM_DOMAIN='' npm run build\n\n## Custom doména\nCUSTOM_DOMAIN=mysite.example.com npm run build\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "package.json"
        }), " by mal mať skript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "build: \"CUSTOM_DOMAIN=${CUSTOM_DOMAIN:-} docusaurus build\""
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["⚠️ Poznámka: názov subdomény nesmie obsahovať ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_"
        }), " (podtržník). Dodrž naming konvenciu, pozri ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/en/sk/knifes/K000067-github-deployment-strategie/K000067-02",
          children: "Appendix – Naming Convention"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "navbarlinky--odporúčania",
      children: "Navbar/Linky – odporúčania"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Používaj ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "relatívne cesty"
        }), " s ", (0,jsx_runtime.jsx)(_components.code, {
          children: "to:"
        }), " (nie absolútne s pevnou doménou). Príklad:", "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-js",
            children: "{ to: '/docs/intro', label: 'Docs' }\n"
          })
        }), "\n", "Docusaurus k tomu automaticky pridá správny ", (0,jsx_runtime.jsx)(_components.code, {
          children: "baseUrl"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pre obrázky a assety začínaj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/img/…"
        }), " alebo používaj importy; Docusaurus prefixuje baseUrl pri buildu."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "docsonly-mód-ak-nechceš-homepage",
      children: "Docs‑only mód (ak nechceš homepage)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Zmeň ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routeBasePath"
      }), " na ", (0,jsx_runtime.jsx)(_components.code, {
        children: "'/'"
      }), " a uisti sa, že máš ", (0,jsx_runtime.jsx)(_components.code, {
        children: "docs/index.md"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-ts",
        children: "presets: [\n  ['classic', {\n    docs: { routeBasePath: '/' },\n    blog: false,\n  }],\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "voliteľné-banner-režimu-pre-dev",
      children: "Voliteľné: banner režimu pre DEV"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-tsx",
        children: "// src/theme/Root.tsx\nimport React from 'react';\nexport default function Root({children}) {\n  const mode = process.env.CUSTOM_DOMAIN ? 'custom-domain' : 'gh-pages';\n  return (\n    <>\n      {process.env.NODE_ENV === 'development' ? (\n        <div style={{position:'fixed',bottom:8,right:8,padding:'4px 8px',border:'1px solid',borderRadius:8,opacity:.7,background:'#fff'}}>\n          mode: {mode}\n        </div>\n      ) : null}\n      {children}\n    </>\n  );\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "rýchly-checklist-pred-deployom",
      children: "Rýchly checklist (pred deployom)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CUSTOM_DOMAIN"
        }), " je správne nastavený (prázdny pre project URL, vyplnený pre custom)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pri custom doméne existuje ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static/CNAME"
        }), " s ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "presne rovnakou"
        }), " hodnotou."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "V ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Settings → Pages"
        }), " máš zvolený správny ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Source"
        }), " (Branch alebo Actions podľa zvolenej stratégie)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", "Pri Actions existuje environment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "github-pages"
        }), " (bez reviewers pri prvom deployi)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Žltý banner o ", (0,jsx_runtime.jsx)(_components.code, {
            children: "baseUrl"
          })]
        }), " – pravdepodobne nesedí ", (0,jsx_runtime.jsx)(_components.code, {
          children: "url/baseUrl"
        }), " kombinácia. Skontroluj ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CUSTOM_DOMAIN"
        }), " a hodnoty vypočítané v konfigu."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "404 po deployi"
        }), " – ak používaš Actions a zlyhá ", (0,jsx_runtime.jsx)(_components.code, {
          children: "deploy-pages@v4"
        }), " s 404, chýba init Pages/", (0,jsx_runtime.jsx)(_components.code, {
          children: "github-pages"
        }), " env. (pozri hlavný K000067 alebo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-init-pages"
        }), " v Makefile appendixe)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "HTTPS nevzniká"
        }), " – ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CNAME"
        }), " neplatný (napr. obsahuje ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_"
        }), ") alebo ešte nepropagovaný DNS."]
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
          children: "K000067_makefile_appendix.md"
        }), " – Makefile a hromadný init cez ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh"
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