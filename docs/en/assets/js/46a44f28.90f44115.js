"use strict";
(globalThis["webpackChunkknife_preview"] = globalThis["webpackChunkknife_preview"] || []).push([[66650],{

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

/***/ 42516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_014_sdlc_06_implementation_ansible_playbooks_readme_md_46a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-sk-class-sthdf-dashboard-01-class-sthdf-dashboard-2025-2026-projects-prj-014-sdlc-06-implementation-ansible-playbooks-readme-md-46a.json
const site_docs_sk_class_sthdf_dashboard_01_class_sthdf_dashboard_2025_2026_projects_prj_014_sdlc_06_implementation_ansible_playbooks_readme_md_46a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/implementation/AnsiblePlaybooks/README","title":"AnsiblePlaybooks","description":"End-to-end automation for creating Proxmox LXC guests and hardening their SSH access.","source":"@site/docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/06-implementation/AnsiblePlaybooks/README.md","sourceDirName":"sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/06-implementation/AnsiblePlaybooks","slug":"/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/implementation/AnsiblePlaybooks/","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/implementation/AnsiblePlaybooks/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"06 implementation","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/implementation/"},"next":{"title":"code links","permalink":"/en/sk/class_sthdf_dashboard/class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/implementation/code-links"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/sk/class_sthdf_dashboard/01-class_sthdf_dashboard_2025-2026/projects/PRJ014/sdlc/06-implementation/AnsiblePlaybooks/README.md


const frontMatter = {};
const contentTitle = 'AnsiblePlaybooks';

const assets = {

};



const toc = [{
  "value": "Layout",
  "id": "layout",
  "level": 2
}, {
  "value": "Adding a New Container",
  "id": "adding-a-new-container",
  "level": 2
}, {
  "value": "Adding New SSH Keys for Access",
  "id": "adding-new-ssh-keys-for-access",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "ansibleplaybooks",
        children: "AnsiblePlaybooks"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "End-to-end automation for creating Proxmox LXC guests and hardening their SSH access."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "layout",
      children: "Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "playbooks/site.yml"
        }), " – Main playbook that provisions LXCs on Proxmox, then configures them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "roles/proxmox_lxc"
        }), " – Interacts with the Proxmox API to create, start, and manage LXC containers, and dynamically adds new containers to the inventory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "roles/lxc_general"
        }), " – Configures user accounts, syncs SSH keys, applies SSH hardening and firewall rules inside the LXCs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "roles/lxc_networking"
        }), " – (Optional) Configures Nginx reverse proxy and manages Let's Encrypt certificates."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-a-new-container",
      children: "Adding a New Container"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Edit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "inventory/group_vars/proxmox/main.yml"
        }), " and add a new container entry to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "proxmox_lxc_instances"
        }), " list with required parameters like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "name"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "vmid"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cores"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memory"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ip_octet"
        }), ", etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optionally define any extra roles for that container by adding ", (0,jsx_runtime.jsx)(_components.code, {
          children: "extra_roles"
        }), " to the container entry."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Save your changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run the playbook to provision and configure the container."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The container will be created on Proxmox, started, added dynamically to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_lxcs"
        }), " group, then configured with users, SSH keys, firewall, and any extra roles."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "adding-new-ssh-keys-for-access",
      children: "Adding New SSH Keys for Access"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Update the SSH keys file that your configuration fetches, currently defined by ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lxc_general_authorized_keys_url"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "group_vars/all.yml"
        }), " or other relevant group vars."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add the new public keys to that remote URL or the file path your setup uses."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Run the playbook again on the target hosts or the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "new_lxcs"
        }), " group to sync the new keys:"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This will update the authorized keys for the configured administrative user without recreating containers."
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