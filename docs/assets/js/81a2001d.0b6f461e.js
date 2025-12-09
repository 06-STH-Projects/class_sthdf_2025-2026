"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[96460],{

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

/***/ 41618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/GitHub-Sites-Concepts-e0bddb9f48a9c20237e8fc83b2ffb299.png");

/***/ }),

/***/ 60273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_knifes_k_000027_git_for_dummies_central_concepts_index_md_81a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-knifes-k-000027-git-for-dummies-central-concepts-index-md-81a.json
const site_docs_sk_knifes_k_000027_git_for_dummies_central_concepts_index_md_81a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/knifes/K000027-git-for-dummies-central-concepts/K000027","title":"K000027 – Git For Dummies – Central Concepts","description":"Jednoduché vysvetlenie Git základov pre začiatočníkov v GitEA (organizácia, repozitár, working directory, atď.)","source":"@site/docs/sk/knifes/K000027-git-for-dummies-central-concepts/index.md","sourceDirName":"sk/knifes/K000027-git-for-dummies-central-concepts","slug":"/sk/knifes/K000027-git-for-dummies-central-concepts/","permalink":"/sk/knifes/K000027-git-for-dummies-central-concepts/","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"KNIFE","permalink":"/docs/tags/knife"},{"inline":true,"label":"images","permalink":"/docs/tags/images"}],"version":"current","sidebarPosition":27,"frontMatter":{"fm_version":"1.0.1","fm_build":"2025-10-12T10:35:00Z","fm_version_comment":"Added field fm_version_comment to document reasons for FM updates","id":"K000027","guid":"3264251d-6fb5-41f2-b8eb-9b726c2542f2","dao":"knife","title":"K000027 – Git For Dummies – Central Concepts","description":"Jednoduché vysvetlenie Git základov pre začiatočníkov v GitEA (organizácia, repozitár, working directory, atď.)","author":"Roman Kazicka","authors":["Roman Kazička",""],"category":"","type":"","priority":"no","tags":["KNIFE","images"],"locale":"sk","created":"2025-09-17","modified":"2025-09-17","status":"backlog","privacy":"public","rights_holder_content":"Roman Kazička","rights_holder_system":"Roman Kazička (CAA/KNIFE/LetItGrow)","license":"CC-BY-NC-SA-4.0","disclaimer":"Use at your own risk. Methods provided as-is; participation is voluntary and context-aware.","copyright":"© 2025 Roman Kazička / SystemThinking","origin_repo":"","origin_repo_url":"","origin_commit":"","origin_system":"","author_id":"","author_did":"","fm_reserved1":"","fm_reserved2":"","date":"2025-09-17","sidebar_position":27,"sidebar_label":"K000027 – Git For Dummies – Central Concepts"},"sidebar":"tutorialSidebar","previous":{"title":"K000025 – Kategorizácia TERNO podľa SDLC a 7D","permalink":"/sk/knifes/K000025-kategorizacia-terno-podla-sdlc-a-7d/"},"next":{"title":"K000028 – Context Aware System Ontology, Approach","permalink":"/sk/knifes/K000028-context-aware-system-ontology-approach/"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/knifes/K000027-git-for-dummies-central-concepts/index.md


const frontMatter = {
	fm_version: '1.0.1',
	fm_build: '2025-10-12T10:35:00Z',
	fm_version_comment: 'Added field fm_version_comment to document reasons for FM updates',
	id: 'K000027',
	guid: '3264251d-6fb5-41f2-b8eb-9b726c2542f2',
	dao: 'knife',
	title: 'K000027 – Git For Dummies – Central Concepts',
	description: 'Jednoduché vysvetlenie Git základov pre začiatočníkov v GitEA (organizácia, repozitár, working directory, atď.)',
	author: 'Roman Kazicka',
	authors: [
		'Roman Kazička',
		''
	],
	category: '',
	type: '',
	priority: 'no',
	tags: [
		'KNIFE',
		'images'
	],
	locale: 'sk',
	created: '2025-09-17',
	modified: '2025-09-17',
	status: 'backlog',
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
	author_id: '',
	author_did: '',
	fm_reserved1: '',
	fm_reserved2: '',
	date: '2025-09-17',
	sidebar_position: '27',
	sidebar_label: 'K000027 – Git For Dummies – Central Concepts'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
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
  "value": "⚡ Rýchly návod (Top)",
  "id": "-rýchly-návod-top",
  "level": 2
}, {
  "value": "📜 Detailný článok",
  "id": "-detailný-článok",
  "level": 2
}, {
  "value": "💡 Tipy a poznámky",
  "id": "-tipy-a-poznámky",
  "level": 2
}, {
  "value": "✅ Hodnota / Zhrnutie",
  "id": "-hodnota--zhrnutie",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.blockquote, {
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
      id: "knife-k000027--git-for-dummies--central-concepts",
      children: "KNIFE K000027 – Git For Dummies – Central Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUID:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3264251d-6fb5-41f2-b8eb-9b726c2542f2"
        }), "\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Status:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "backlog"
        }), " · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Author:"
        }), " Roman Kazička · ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "License:"
        }), " CC-BY-NC-SA-4.0"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-čo-rieši-účel-cieľ",
      children: "🎯 Čo rieši (účel, cieľ)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Aká je základná architektúra decentralizovaného verziovacieho systému na základe GIT?\nTáto znalosť je veľmi dôležitá pre efektívnu a zmysluplnú prácu s rôznými implementáciami GIT workflow.\nV tomto knife sa zameriame na GitHub a jeho implementáciu."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-rieši-princíp",
      children: "🧩 Ako to rieši (princíp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decentralizovaný systém predpokladá, že obsah servera sa nachádza u každého klienta. To vytvára predpoklady, že práca a obsah na klientovi ej absolútne nezávislý od servera.\nV ľobovľnom okamihu je možné synchronizovať obsah na konkrétnom klientovi so serverom.\nPredstavme si situáciu, že neznámi počet používateľov pracuje na obsahu, kotrý je na serveri.\nPri synchronizácií obsahov, vzniká niekoľko typických scenárov, ale výsledok je:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dokážeme cestovať v čase"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Máme chránenú svoju prácu v podobe lokálnych a serverových kópií"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sme nezávislí na serveri a ostatných členov tímu (závisí od kontextu)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-ako-to-použiť-aplikácia",
      children: "🧪 Ako to použiť (aplikácia)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "V tomto Knife si vysvetlíme ako sa pracuje s GitHub serverom s využitím Sites, to je generovanie statickej HTML stánky priamo z obsahu servere (súbory v md formáte sa pretransformujú na html stránky)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perfektné je, že tento obsah nemusíme konzumovať cez technoické rozhranie GitHub poertálu, ale je možné vygenerovať statické HTML stránky, ktorým GitHub poskytne doménové meno"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ak máme vlastnú doménu, môžeme namapovať svoju doménu na obsah na GitHube a tak máme vlastne web hosting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tento web hosting je pre široké spetrum použití v rámci Fee plánu za darmo."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Páčil by sa Vám free hosting web stránky pre Vašu doménu."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Navyše máte možnosť mať aj súkromie. Repozitáre sú PUBLIC a PRIVATE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Public repozitáre sú v cene - zadarmo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Privátne stránky sú v cene 3€/mesiac."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Detailenjšie o cenových plánoch je v KNIFE_066 ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/sk/knifes/K000066-porovnanie-biznis-planov-github/",
          children: "K000066-Porovnanie bizbis plánov GitHub"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-rýchly-návod-top",
      children: "⚡ Rýchly návod (Top)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub nie je len úložisko s možnosťou verziovania. Na to sú iné riešenia (Google drive, OneDrive, Sharepoint)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Github je ucelený ekosystém pre vytváranie riešení pomocou obsahu na úložisku."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Obsah môže byť akýkoľvek obsah v rôzných  formátoch. Zámerne nehovorím len o súboroch rôznych programovacích jazykoch. To je doména programátorov."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tento KNIFE je ale pre NIE technikov, NIE programátorov."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Ak pracujete s akýmikoľvek súbormi, ktoré majú svoj vlastný životný cyklus, tak ste skvelý kandidát na používateľa Git worklow filozofie a bude Vám to na úžitok vo viacerých smeroch", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "zálohy mimo svojho počítača"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "možnosť kreatívneho prístupu pri práci bez obavy poškodenia chodivých verzií"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "možnosť tímovej spolupráce"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "v prípade individuálnej práce by nebolo potrebné ani vzdialený server"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "vysoká miera autonómnosti"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "poriadok v procese tvorby riešenia -vytváranie metadát o aktivitách nad danými súbormi"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "poriadok v súboroch - možnosť uchovávať, porovnávať rôzne verzie súborov (textových, pre binárne súbory jepotrebné dedikované aplikácie)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-detailný-článok",
      children: "📜 Detailný článok"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Na obrázku sú niektoré základné komponenty GitHub riešenia."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pre poípsanie všetkých vlasností, pre rôzne prípady použitia doplníme priebežne."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["#TODO 20250925-1948-treba vysvetliť komponenty na obrázku.\n", (0,jsx_runtime.jsx)(_components.img, {
          alt: "Koncept Github s využitím Sites",
          src: (__webpack_require__(41618)/* ["default"] */ .A) + "",
          width: "814",
          height: "1243"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-tipy-a-poznámky",
      children: "💡 Tipy a poznámky"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-hodnota--zhrnutie",
      children: "✅ Hodnota / Zhrnutie"
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