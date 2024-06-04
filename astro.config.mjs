import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://stargazers.club",
  integrations: [
    starlight({
      title: "Pixel Stories User Guide",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/tdgao/pixel-stories-docs",
        discord: "https://discord.gg/XN9EaUh26g",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Tutorials",
          items: [
            { label: "Getting Started", link: "/getting-started/" },
            {
              label: "Basic Pixel Stories",
              link: "/tutorials/tutorials-in-progress/basic-pixel-stories/",
            },
            {
              label: "Advanced Pixel Stories",
              link: "/tutorials/tutorials-in-progress/advanced-pixel-stories/",
            },
          ],
        },
        {
          label: "Explainations",
          autogenerate: { directory: "Explanations" },
        },
        {
          label: "How-to Guides",
          autogenerate: { directory: "Guides" },
        },
      ],
    }),
  ],
});
