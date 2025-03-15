// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import starlightThemeRapidePlugin from "starlight-theme-rapide"

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Elitehub",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Elitehub Logo",
        replacesTitle: true,
      },
      customCss: ["./src/styles/custom.css"],
      components: {
        ThemeProvider: "./src/components/ThemeProvider.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      plugins: [starlightThemeRapidePlugin()],
      social: {
        discord: "https://discord.gg/invite/a7Zsx6a",
        github: "https://github.com/jovanblazek/elitehub",
      },
      editLink: {
        baseUrl: "https://github.com/jovanblazek/elitehub/edit/main",
      },
      locales: {
        root: {
          label: "Slovensky",
          lang: "sk",
        },
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
})
