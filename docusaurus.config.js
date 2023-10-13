// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require('dotenv').config()

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Global State Management Library for React and React Native",
  tagline: "GX is very easy to use and has a very small footprint.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://gx.dilane3.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "GX", // Usually your GitHub org/user name.
  projectName: "GX WebSite", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/react-gx/gx-doc/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/gx-social-card.png",
      navbar: {
        title: "",
        logo: {
          alt: "Gx Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          { to: "/docs/guide/signals", label: "Guide", position: "left" },
          {
            to: "https://codesandbox.io/s/gx-playground-react-m608mx",
            label: "Playground",
            position: "left",
            target: '_blank'
          },
          {
            label: "current: v1.4.0",
            position: "right",
            className: "version",
            style: {
              color: '#3e4bff',
              fontWeight: 'bold',
              fontSize: '0.7rem',
              borderRadius: '5rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#eee',
            },
            to: "#"
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: "https://github.com/react-gx/gx",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Guide",
                to: "/docs/guide/signals",
              },
              {
                label: "Tutorial",
                to: "/docs/tutorial/intro",
              },
              {
                label: "Throubleshooting",
                to: "/docs/throubleshooting",
              },
            ],
          },
          {
            title: "About",
            items: [
              {
                label: "FAQ",
                href: "/docs/faq",
              },
              {
                label: "Team",
                href: "/about/team",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/react-gx/gx",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dilane3.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.REACT_APP_ALGOLIA_APP_ID || "APP_ID",
  
        // Public API key: it is safe to commit it
        apiKey: process.env.REACT_APP_ALGOLIA_API_KEY || "API_KEY",
  
        indexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME || "INDEX_NAME",
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/docs/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
