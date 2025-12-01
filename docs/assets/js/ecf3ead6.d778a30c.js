"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[29142],{

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

/***/ 74297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_help_howto_release_release_flow_and_operations_md_ecf_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-help-howto-release-release-flow-and-operations-md-ecf.json
const site_docs_sk_help_howto_release_release_flow_and_operations_md_ecf_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/help/howto/Release/RELEASE-flow-and-operations","title":"KNIFE Overview – Release flow & operations (CLI)","description":"Tento dokument popisuje odporúčaný základny postup pri publikovaní novej verzie","source":"@site/docs/sk/help/howto/Release/RELEASE-flow-and-operations.md","sourceDirName":"sk/help/howto/Release","slug":"/sk/help/howto/Release/RELEASE-flow-and-operations","permalink":"/sk/help/howto/Release/RELEASE-flow-and-operations","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Release Notes","permalink":"/sk/help/howto/Release/NewReleaseinGitHub"},"next":{"title":"GitHub Classroom – Úvod a navigácia","permalink":"/sk/help/howto/github-classroom/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/help/howto/Release/RELEASE-flow-and-operations.md


const frontMatter = {};
const contentTitle = 'KNIFE Overview – Release flow & operations (CLI)';

const assets = {

};



const toc = [{
  "value": "1. Lokálna kontrola zmien",
  "id": "1-lokálna-kontrola-zmien",
  "level": 2
}, {
  "value": "2. Lokálny build (Docusaurus)",
  "id": "2-lokálny-build-docusaurus",
  "level": 2
}, {
  "value": "3. Príprava commitu",
  "id": "3-príprava-commitu",
  "level": 2
}, {
  "value": "4. Commit",
  "id": "4-commit",
  "level": 2
}, {
  "value": "5. Tag releasu (voliteľné, ale odporúčané)",
  "id": "5-tag-releasu-voliteľné-ale-odporúčané",
  "level": 2
}, {
  "value": "6. Push na GitHub",
  "id": "6-push-na-github",
  "level": 2
}, {
  "value": "7. Deploy (GitHub Pages / Docusaurus)",
  "id": "7-deploy-github-pages--docusaurus",
  "level": 2
}, {
  "value": "8. Rýchly checklist pred release",
  "id": "8-rýchly-checklist-pred-release",
  "level": 2
}, {
  "value": "9. Skripty v <code>core/operations</code>",
  "id": "9-skripty-v-coreoperations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "knife-overview--release-flow--operations-cli",
        children: "KNIFE Overview – Release flow & operations (CLI)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tento dokument popisuje odporúčaný základny postup pri publikovaní novej verzie\nrepozitára ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knifes_overview-03"
      }), " na GitHub + GitHub Pages (Docusaurus build)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "⚠️ Predpoklady:"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["pracuješ v hlavnej vetve ", (0,jsx_runtime.jsx)(_components.code, {
            children: "main"
          }), ","]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["máš nastavený vzdialený repozitár ", (0,jsx_runtime.jsx)(_components.code, {
            children: "origin"
          }), ","]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Makefile ciele ", (0,jsx_runtime.jsx)(_components.code, {
            children: "build-fast"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "W40-deploy"
          }), " sú funkčné,"]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Node, Python, git sú nainštalované."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-lokálna-kontrola-zmien",
      children: "1. Lokálna kontrola zmien"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 1.1 Pozri aktuálny stav\ngit status\n\n# 1.2 Skontroluj diff\ngit diff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak sú tam nechcené zmeny, uprav ich alebo vráť."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-lokálny-build-docusaurus",
      children: "2. Lokálny build (Docusaurus)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# v koreňovom priečinku repozitára\nmake build-fast\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "build-fast"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vygeneruje KNIFE overview (knife_overview_generate.py),"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["skopíruje ", (0,jsx_runtime.jsx)(_components.code, {
              children: "content/docs"
            }), " do ", (0,jsx_runtime.jsx)(_components.code, {
              children: "publishing/docusaurus/docs"
            }), ","]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["spustí ", (0,jsx_runtime.jsx)(_components.code, {
              children: "npm run build -- --no-minify"
            }), " v ", (0,jsx_runtime.jsx)(_components.code, {
              children: "publishing/docusaurus"
            }), ","]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "skopíruje assets podľa Makefile (napr. ActivePresenter HTML5 výstupy)."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak build prebehne úspešne bez ERROR, môžeš pokračovať.\nV prípade Warnings je potrebné zhodnotiť, či sú akceptovateľné\n(napr. dočasne neexistujúce linky v rozpracovaných témach)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-príprava-commitu",
      children: "3. Príprava commitu"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 3.1 Skontroluj zmenené súbory po builde\ngit status\n\n# 3.2 Ak si spokojný, pridaj všetko do indexu\ngit add -A\n\n# 3.3 Posledná rýchla kontrola\ngit status\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ak vidíš medzi staged súbormi niečo, čo nechceš commitovať,\nmôžeš to vybrať príkazom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git restore --staged <súbor>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-commit",
      children: "4. Commit"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git commit -m \"Release: v0.3.0 – KNIFE overview + helpers\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Odporúčaný formát správy:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Release:"
        }), " alebo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Feature:"
        }), " alebo ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Fix:"
        }), ","]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "krátky popis,"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["voliteľne číslo verzie (napr. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "v0.3.0"
        }), ")."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po commite si môžeš pozrieť krátku históriu:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git log --oneline -n 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-tag-releasu-voliteľné-ale-odporúčané",
      children: "5. Tag releasu (voliteľné, ale odporúčané)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tag sa používa na označenie stabilného bodu v histórii:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 5.1 Vytvor anotovaný tag (napr. v0.3.0)\ngit tag -a v0.3.0 -m \"KNIFE overview – prvý public release\"\n\n# 5.2 Skontroluj tagy\ngit tag --list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tag môžeš vytvoriť aj neskôr, ale je praktické robiť to\nbezprostredne po commite, ktorý považuješ za release-ready."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-push-na-github",
      children: "6. Push na GitHub"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# 6.1 Push vetvy main\ngit push origin main\n\n# 6.2 Ak si vytvoril tag, pushni aj tagy\ngit push origin --tags\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Po úspešnom pushnutí sú commit aj tag dostupné na GitHube.\nV prípade, že máš GitHub Actions pripravené na tagy, môžu sa\nspúšťať automaticky – zatiaľ ich v tomto projekte používame minimálne."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-deploy-github-pages--docusaurus",
      children: "7. Deploy (GitHub Pages / Docusaurus)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ak používaš deploy cez Makefile (napr. worktree + gh-pages vetvu),\nspustíš:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# kontrola/obnova worktree\nmake W10-check-worktree\n\n# build + deploy (podľa tvojej konfigurácie)\nmake W40-deploy\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Typický scenár:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "W10-check-worktree"
        }), " vytvorí alebo opraví worktree pre ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gh-pages"
        }), ","]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "W40-deploy"
        }), " skopíruje vybuildovaný obsah do worktree a urobí commit/push."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Po úspešnom deploy by si mal vidieť aktuálnu verziu webu\nna adrese ", (0,jsx_runtime.jsx)(_components.code, {
        children: "https://knifes.systemthinking.sk"
      }), " (alebo inej podľa ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SITE_URL"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-rýchly-checklist-pred-release",
      children: "8. Rýchly checklist pred release"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["✅ ", (0,jsx_runtime.jsx)(_components.code, {
          children: "make build-fast"
        }), " prebehol bez ERROR."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Navigácia (sidebar, HELP, 7Ds, SDLC, Q12, KNIFE overview) funguje."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Neobsahuješ privátne alebo citlivé dáta."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Commit message jasne hovorí, čo sa zmenilo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ Tag (ak chceš) zodpovedá obsahu releasu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "✅ GitHub Pages zobrazuje novú verziu bez chýb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "9-skripty-v-coreoperations",
      children: ["9. Skripty v ", (0,jsx_runtime.jsx)(_components.code, {
        children: "core/operations"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "V tomto ZIP-e nájdeš aj ukážkové skripty:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "new-knife.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "new-sthdf.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "new-7ds.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "new-sdlc.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "new-q12.sh"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "new-thesis.sh"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Odporúčaný postup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rozbaľ ZIP."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Skripty skopíruj do ", (0,jsx_runtime.jsx)(_components.code, {
            children: "core/operations/"
          }), " v projekte."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Nastav im spustiteľný príznak:"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "chmod +x core/operations/new-*.sh\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prispôsob defaultné hodnoty (ID, názvy) podľa svojich potrieb."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tieto skripty sú len tenký wrapper nad ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new_item_instance.py"
      }), " –\ncieľ je mať ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jednoduché, zapamätateľné príkazy"
      }), " typu:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "core/operations/new-7ds.sh 7ds_PlatobnyPortal \"7Ds – Platobný portál\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ktoré urobia všetky nízkoúrovňové kroky za teba."
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