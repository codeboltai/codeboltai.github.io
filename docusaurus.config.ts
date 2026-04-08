import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Codebolt',
  tagline: 'Codebolt Documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.codebolt.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  markdown: {
    mermaid: true,
    format: 'mdx',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Typedoc-generated content has thousands of inherited-property cross-
  // references whose anchor IDs don't survive Docusaurus's normalization
  // (collisions with sibling properties, inherited-member mangling, etc.).
  // These are internal to the auto-generated reference and not navigation
  // any reader clicks — ignoring them keeps the build clean.
  onBrokenAnchors: 'ignore',

  customFields: {
    onDuplicatePresets: 'warn',
    onExtraPlugins: 'warn',
  },
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'codeboltai', // Usually your GitHub org/user name.
  projectName: 'codeboltai.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [],

  themes: [
    '@docusaurus/theme-mermaid',
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        docsRouteBasePath: '/docs',
        indexBlog: true,
        indexDocs: true,
        // Exclude auto-generated type-reference pages from the search index.
        // They balloon the index past Cloudflare Workers' 25 MiB per-asset cap
        // and add little search value (most are interface dumps).
        ignoreFiles: [
          /reference\/type-reference\/types\//,
          /reference\/type-reference\/codeboltjs\//,
          /reference\/api-access\//,
          /reference\/mcp-access\//,
          /reference\/utility-functions/,
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CodeBolt',
      logo: {
        alt: 'CodeBolt Logo',
        src: 'img/logo.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'usingCodeboltSidebar',
          position: 'left',
          label: 'Using Codebolt',
        },
        {
          type: 'docSidebar',
          sidebarId: 'conceptsSidebar',
          position: 'left',
          label: 'Concepts',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guidesSidebar',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'docSidebar',
          sidebarId: 'buildSidebar',
          position: 'left',
          label: 'Build on Codebolt',
        },
        {
          type: 'docSidebar',
          sidebarId: 'referenceSidebar',
          position: 'left',
          label: 'Reference',
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'devSidebar',
        //   position: 'left',
        //   label: 'Developer Guide',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'toolSidebar',
        //   position: 'left',
        //   label: 'Tools',
        // },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'appSidebar',
        //   position: 'left',
        //   label: 'Apps',
        // },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },

      ],
    },
    footer: {
      links: [],
      copyright: `© ${new Date().getFullYear()} CodeBolt`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
