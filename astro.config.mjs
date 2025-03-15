// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import starlightThemeRapidePlugin from 'starlight-theme-rapide'
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Elitehub',
      logo: {
        src: './src/assets/logo.png',
        alt: 'Elitehub Logo',
        replacesTitle: true,
      },
      customCss: ['./src/styles/custom.css'],
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      plugins: [
        starlightSidebarTopicsPlugin([
          {
            label: 'Pre začiatočníkov',
            link: '/beginners/introduction',
            icon: 'rocket',
            items: ['beginners/introduction'],
          },
          {
            label: 'Wiki',
            link: '/wiki/introduction',
            icon: 'open-book',
            items: ['wiki/introduction'],
          },
        ]),
        starlightThemeRapidePlugin(),
      ],
      social: {
        discord: 'https://discord.gg/invite/a7Zsx6a',
        github: 'https://github.com/jovanblazek/elitehub',
      },
      editLink: {
        baseUrl: 'https://github.com/jovanblazek/elitehub/edit/main',
      },
      locales: {
        root: {
          label: 'Slovensky',
          lang: 'sk',
        },
      },
    }),
  ],
})
