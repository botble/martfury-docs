import { DefaultTheme } from 'vitepress'

export default [
  { text: 'Overview', link: '/martfury/' },
  {
    text: 'Prologue',
    items: [
      { text: 'Release Notes', link: '/martfury/releases' },
      { text: 'Upgrade Guide', link: '/martfury/upgrade' },
    ],
  },
  {
    text: 'Getting Started',
    items: [
      { text: 'Installation', link: '/martfury/installation' },
      { text: 'SSL', link: '/martfury/ssl' },
      { text: 'License', link: '/martfury/license' },
    ],
  },
  {
    text: 'Available plugins',
    items: [
      { text: 'Backup', link: '/martfury/plugin-backup' },
    ],
  },
  {
    text: 'Usage',
    items: [
      { text: 'Custom CSS/JS', link: '/martfury/usage-custom-css-js' },
      { text: 'Translation', link: '/martfury/usage-translation' },
      { text: 'Email', link: '/martfury/usage-email' },
      { text: 'Multi-language', link: '/martfury/usage-multi-language' },
      { text: 'Currencies', link: '/martfury/usage-currencies' },
      { text: 'Media - Setup Amazon S3', link: '/martfury/usage-media-s3' },
      { text: 'Media - Setup BunnyCDN', link: '/martfury/usage-media-bunnycdn' },
      { text: 'Media - Setup Wasabi', link: '/martfury/usage-media-wasabi' },
      { text: 'Analytics', link: '/martfury/usage-analytics' },
      { text: 'Rename theme', link: '/martfury/theme-rename' },
      { text: 'Backup', link: '/martfury/usage-backup' },
      { text: 'Location', link: '/martfury/usage-location' },
      { text: 'Invoice template', link: '/martfury/invoice-template' },
    ],
  },
] satisfies DefaultTheme.SidebarItem[];
