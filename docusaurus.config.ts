import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KNIFE Preview - Knowledge in Friendly Examples',
  tagline: 'Context Aware Approach',
  url: 'https://06-sth-projects.github.io',
  baseUrl: '/',            // GH Pages repo base – ponechať
  favicon: 'img/favicon.ico',

  organizationName: '06-STH-Projects',
  projectName: 'class_sthdf_2025-2026',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'warn',
  future: { v4: true },

  // i18n: SK ako default na root, EN pod /en/
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk', 'en'],
    localeConfigs: {
      sk: {
        label: 'Slovensky',
        // dôležité: pre defaultLocale NEnastavuj path -> ostane na root-e
      },
      en: {
        label: 'English',
        path: 'en' // EN bude pod /en/
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/',                // ⬅️ docs sú homepage (so sidebarom)
          numberPrefixParser: false,
          editCurrentVersion: false,
          editUrl: undefined,
          exclude: ['**/README.migrated.md', '**/README_.md'],
          // sidebarPath: require.resolve('./sidebars.ts'), // ak nepoužívaš, nechaj zakomentované
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      } satisfies Preset.Options,
    ],
  ],
// ⬇⬇⬇ PRIDANÉ: GA4 plugin
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-GVPTFWRR1P',
        anonymizeIP: true,
        // optional: odoslať page_view aj pri route zmenách (SPA)
        // respektíve default správanie už page views posiela
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      title: 'KNIFE',
      logo: { alt: 'KNIFE Logo', src: 'img/logo.png' },
      items: [
        { to: '/', label: 'Home', position: 'left' }, // SK root
        { to: '/sk/knifes/', label: 'KNIFES (SK)', position: 'left' },
        { to: '/7Ds/', label: '7Ds (SK)', position: 'left' },
        { to: '/', label: 'Docs (SK)', position: 'left' },
        { to: '/en/', label: 'Docs (EN)', position: 'left' },
        { href: 'https://github.com/06-sth-projects/class_sthdf_2025-2026', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Context Aware Solutions. Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },

    // ⬇️ Sidebar správanie
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true, // 7Ds a iné sa nebudú všetky otvárať naraz
      },
    },
  } satisfies Preset.ThemeConfig,

  headTags: [
    { tagName: 'link', attributes: { rel: 'apple-touch-icon', sizes: '180x180', href: 'img/apple-touch-icon.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'img/favicon-32x32.png' } },
    { tagName: 'link', attributes: { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'img/favicon-16x16.png' } },
    { tagName: 'link', attributes: { rel: 'manifest', href: 'img/site.webmanifest' } },
  ],
};

export default config;