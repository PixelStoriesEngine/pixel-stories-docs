import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelstories.io",
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  redirects: {
    "/tutorials/basic": "/tutorials/project-setup",
  },
  integrations: [
    starlight({
      title:
        "Pixel Stories, the modern no-code game engine for story-driven games",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        youtube: "https://www.youtube.com/channel/UC62czApVKmYFH8clyDqKiVQ",
        github: "https://github.com/PixelStoriesEngine/pixel-stories-docs",
        discord: "https://discord.gg/XN9EaUh26g",
      },
      components: {
        // Override the default `SocialIcons` component.
        SocialIcons: "./src/overrides/SocialIcons.astro",
        Hero: "./src/overrides/Hero.astro",
        ThemeSelect: "./src/overrides/ThemeSelect.astro",
      },
      editLink: {
        baseUrl: "https://github.com/PixelStoriesEngine/pixel-stories-docs",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/tailwind.css",
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Getting started",
          items: [
            {
              label: "Overview",
              link: "/overview",
            },
            {
              label: "Quick start",
              link: "/getting-started/",
            },
            // {
            //   label: "Interface tour",
            //   link: "/",
            // },
            // {
            //   label: "Examples",
            //   link: "/",
            // },
          ],
        },
        {
          label: "Concepts",
          items: [
            {
              label: "Events system",
              link: "/features/events-system/",
            },
            {
              label: "Conditional branching",
              link: "/features/variables-and-branching/",
            },
            {
              label: "Map editor",
              link: "/features/map-editor/",
            },
            {
              label: "Game assets",
              link: "/features/game-assets/",
            },
          ],
        },
        {
          label: "How-to guides",
          autogenerate: { directory: "/guides" },
        },
        {
          label: "Resources",
          items: [
            {
              label: "Events reference",
              link: "/events/",
            },
            {
              label: "Video tutorials 🔗",
              link: "https://www.youtube.com/@PixelStoriesEngine",
              attrs: { target: "_blank" },
            },
            {
              label: "Official Discord 🔗",
              link: "https://discord.gg/XN9EaUh26g",
              attrs: { target: "_blank" },
            },
          ],
        },
      ],
    }),
    tailwind(),
  ],
});
