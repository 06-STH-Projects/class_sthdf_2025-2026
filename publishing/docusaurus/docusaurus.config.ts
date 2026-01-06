import type {Config} from '@docusaurus/types';
import {themes as prismThemes} from 'prism-react-renderer';
import path from 'path';

const {
  RELEASE_TAG = 'dev',
  COMMIT_SHA = 'local',
  BUILD_DATE = '',
  GITHUB_REPO_URL = '',
  SITE_URL = 'https://sthdf-2025.systemthinking.sk',
  BASE_URL = '/',
} = process.env;

const commitLink =
  GITHUB_REPO_URL && COMMIT_SHA ? `${GITHUB_REPO_URL}/commit/${COMMIT_SHA}` : '';

const releaseLink =
  GITHUB_REPO_URL ? `${GITHUB_REPO_URL}/releases` : '';

const config: Config = {
  title: 'KNIFE - Class STHDF 2025-2026- Dashboard',
  url: SITE_URL,
  baseUrl: BASE_URL,
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  // Serve default site assets from `publishing/docusaurus/static` AND additionally
  // serve files directly from `publishing/docusaurus/docs` as static files.
  // This can help with legacy HTML <img src="..."> paths when they resolve to URLs under /sk/...
  // NOTE: Exposes the `docs/` tree as static files.
  staticDirectories: [
    path.join(__dirname, 'static'),
    path.join(__dirname, 'docs'),
  ],

  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          includeCurrentVersion: true,
          editCurrentVersion: false,
          // Aktivujeme tag stránky pre dokumentáciu a zároveň im dáme jasný prefix,
          // aby sme predišli kolíziám (duplicitným /doc-tags počas buildu)
          tagsBasePath: 'docs/tags',
        },
        // Blog nepoužívame – vypneme, aby nevznikal duplicitný /tags
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],

  // (Optional) Plugins — buildInfoPlugin disabled (file not present)
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // vygeneruje lokálny (Lunr) index priamo do buildu, bez Algolie
        hashed: true,
        // Lunr nepodporuje 'sk' ako jazykový modul, použijeme default 'en' (funguje aj pre SK texty bez špeciálneho stemmingu)
        language: ['en'],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,              // umožní používateľovi zložiť/rozbaliť sidebar
        autoCollapseCategories: false, // nechávame sekcie otvorené (Home uvidí celý strom)
      },
    },
    navbar: {
      title: 'KNIFE - Class STHDF 2025-2026- Dashboard',
      logo: {
        alt: 'KNIFE',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
        target: '_self', // alebo '_blank' ak chceš nové okno
        href: '/', // ← sem vložíš svoj cieľový link
      },
      items: [
        { type: 'localeDropdown', position: 'left' },
        { to: '/sk/about', label: 'About', position: 'right' },
        { to: '/sk/help',  label: 'Help',  position: 'right' },
        { to: '/docs/tags', label: 'Tags', position: 'right' },
        {
          href: releaseLink || '#',
          label: `Release ${RELEASE_TAG} • ${COMMIT_SHA}`,
          position: 'right',
        },
      ],
    },

    // Announcement bar hore (možno kedykoľvek vypnúť/komentovať)
   // announcementBar: {
    //  id: 'build_info',
    //  content: commitLink
    //    ? `🔖 <strong>Release:</strong> ${RELEASE_TAG} &nbsp;•&nbsp; <strong>Commit:</strong> <a href="${commitLink}" target="_blank" rel="noopener noreferrer">${COMMIT_SHA}</a> &nbsp;•&nbsp; <strong>Build:</strong> ${BUILD_DATE}`
    //    : `🔖 <strong>Release:</strong> ${RELEASE_TAG} &nbsp;•&nbsp; <strong>Commit:</strong> ${COMMIT_SHA} &nbsp;•&nbsp; <strong>Build:</strong> ${BUILD_DATE}`,
   //   backgroundColor: '#f7f70aff',
    //  textColor: '#091E42',
   //   isCloseable: true,
   // },

    footer: {
      style: 'dark',
      copyright: `
  <div style="text-align:center;">
    © ${new Date().getFullYear()} SystemThinking<br/>
    🔖 Release: <strong>${RELEASE_TAG}</strong><br/>
    💡 Commit: <code>${COMMIT_SHA}</code><br/>
    🕒 Build: ${BUILD_DATE}
  </div>
`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  future: {
    experimental_faster: false, // disables experimental minifier causing build crashes
  },
};

export default config;
