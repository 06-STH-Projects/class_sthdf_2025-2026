"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[16023],{

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

/***/ 29902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000083_aktualizacia_komponentov_pre_docusaurus_setup_md_f24_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000083-aktualizacia-komponentov-pre-docusaurus-setup-md-f24.json
const site_docs_sk_knifes_k_000083_aktualizacia_komponentov_pre_docusaurus_setup_md_f24_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_02","title":"KNIFE – K000083_02","description":"-","source":"@site/docs/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/SETUP.md","sourceDirName":"sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus","slug":"/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_02","permalink":"/en/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_02","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"-","permalink":"/en/docs/tags"}],"version":"current","frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000083_02","guid":"74cc1121-c916-4a8d-b1cd-78b93bda064f","dao":"knife","title":"KNIFE – K000083_02","description":"-","author":"Roman Kazička","authors":["Roman Kazička",""],"category":"deliverable","type":"knife","priority":"no","tags":["-"],"locale":"sk","created":"2025-09-26","modified":"2025-09-26","status":"inprogress","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Educational content. Use at your own risk.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"-","author_did":"-","fm_reserved1":"","fm_reserved2":""},"sidebar":"tutorialSidebar","previous":{"title":"KNIFE – K000083_04","permalink":"/en/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_04"},"next":{"title":"KNIFE – K000083_03","permalink":"/en/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/K000083_03"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000083-aktualizacia-komponentov-pre-docusaurus/SETUP.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000083_02',
	guid: '74cc1121-c916-4a8d-b1cd-78b93bda064f',
	dao: 'knife',
	title: 'KNIFE – K000083_02',
	description: '-',
	author: 'Roman Kazička',
	authors: [
		'Roman Kazička',
		''
	],
	category: 'deliverable',
	type: 'knife',
	priority: 'no',
	tags: [
		'-'
	],
	locale: 'sk',
	created: '2025-09-26',
	modified: '2025-09-26',
	status: 'inprogress',
	privacy: 'public',
	rights_holder_content: 'Roman Kazička',
	rights_holder_system: 'Roman Kazička (CAA/KNIFE/LetItGrow)',
	license: 'CC-BY-NC-SA-4.0',
	disclaimer: 'Educational content. Use at your own risk.',
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
const contentTitle = 'Rýchla cesta k Node 22 (vyber si 1 možnosť)';

const assets = {

};



const toc = [{
  "value": "A) Homebrew (najjednoduchšie na Macu)",
  "id": "a-homebrew-najjednoduchšie-na-macu",
  "level": 2
}, {
  "value": "B) NVM (flexibilný správca verzií)",
  "id": "b-nvm-flexibilný-správca-verzií",
  "level": 2
}, {
  "value": "C) Volta (rýchly per-user manager)",
  "id": "c-volta-rýchly-per-user-manager",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "rýchla-cesta-k-node-22-vyber-si-1-možnosť",
        children: "Rýchla cesta k Node 22 (vyber si 1 možnosť)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "74cc1121-c916-4a8d-b1cd-78b93bda064f"
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
      id: "a-homebrew-najjednoduchšie-na-macu",
      children: "A) Homebrew (najjednoduchšie na Macu)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "## skontroluj, že máš brew\nbrew --version\n\n## nainštaluj Node 22\nbrew install node@22\n\n## nastav do PATH (Apple Silicon vs Intel)\n## Apple Silicon (M1/M2/M3)\necho 'export PATH=\"/opt/homebrew/opt/node@22/bin:$PATH\"' >> ~/.zshrc\n## Intel\n## echo 'export PATH=\"/usr/local/opt/node@22/bin:$PATH\"' >> ~/.zshrc\n\nsource ~/.zshrc\nnode -v   # očakávaj v22.x\nnpm -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "b-nvm-flexibilný-správca-verzií",
      children: "B) NVM (flexibilný správca verzií)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "## inštalácia nvm\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\n\n## aktivácia v zsh\necho 'export NVM_DIR=\"$HOME/.nvm\"' >> ~/.zshrc\necho '[ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\"' >> ~/.zshrc\necho '[ -s \"$NVM_DIR/bash_completion\" ] && . \"$NVM_DIR/bash_completion\"' >> ~/.zshrc\nsource ~/.zshrc\n\n## Node 22\nnvm install 22\nnvm use 22\n\n## pripni verziu do repozitára\necho \"22\" > .nvmrc\n\nnode -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "c-volta-rýchly-per-user-manager",
      children: "C) Volta (rýchly per-user manager)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "curl https://get.volta.sh | bash\nsource ~/.zshrc\nvolta install node@22 npm@latest\nnode -v\n"
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