import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'CentroFuturoCiudades Docs',
  tagline: 'Documentación técnica de proyectos urbanos inteligentes',
  favicon: 'img/favicon.ico',

  url: 'https://centrofuturociudades.github.io',
  baseUrl: '/docs-hub/',

  organizationName: 'CentroFuturoCiudades',
  projectName: 'docs-hub',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/CentroFuturoCiudades/docs-hub/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'CFC Docs',
      logo: {
        alt: 'Logo CentroFuturoCiudades',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Proyectos',
          items: [
            { label: 'MicrosimuladorMTY', to: '/microsimuladorMty/overview' },
            { label: 'Crowd Counting', to: '/crowdcounting/overview' },
          ],
        },
        {
          href: 'https://github.com/CentroFuturoCiudades',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} CentroFuturoCiudades.`,
    },
    colorMode: {
      defaultMode: 'light',
    },
  },
};

export default config;
