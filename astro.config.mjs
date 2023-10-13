import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "",
			social: {
				github: "https://github.com/jovanblazek/elitehub-astro",
			},
			defaultLocale: "sk",
			customCss: [
				// Relative path to your custom CSS file
				"./src/styles/custom.css",
			],
			logo:{
				src: "/src/assets/logo.png",
				alt: "Elitehub",
			},
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
				ContentPanel: './src/components/ContentPanel.astro'
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Example Guide", link: "/guides/example/" },
					],
				},
				{
					label: "Advanced Guides",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
})
