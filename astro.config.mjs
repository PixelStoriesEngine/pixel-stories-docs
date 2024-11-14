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
          label: "Start Here",
          items: [
            {
              label: "Getting Started",
              link: "/getting-started/",
            },
          ],
        },
        {
          label: "Introductory Tutorial",
          items: [
            {
              label: "Project Set-up",
              link: "/tutorials/project-setup",
            },
            {
              label: "Drawing the Map",
              link: "/tutorials/mapping",
            },
            {
              label: "Characters",
              link: "/tutorials/characters",
            },
            {
              label: "Dialog and Interactions",
              link: "/tutorials/interactive-dialog",
            },
            {
              label: "Conditional branching",
              link: "/tutorials/conditional-branching",
            },
            {
              label: "Music/Sound",
              link: "/tutorials/music-sound",
            },
            {
              label: "Exporting Your Game",
              link: "/tutorials/exporting",
            },
          ],
        },
        {
          label: "Core Features",
          items: [
            {
              label: "Events system",
              link: "/features/events-system/",
            },
            {
              label: "Variables and Branching",
              link: "/features/variables-and-branching/",
            },
            {
              label: "Map Editor",
              link: "/features/map-editor/",
            },
            {
              label: "Asset Management",
              link: "/features/asset-management/",
            },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "/guides" },
        },
        {
          label: "Events Reference",
          items: [
            {
              label: "Spawn Actor",
              link: "/events/spawn-actor/",
            },
            {
              label: "Remove Actor",
              link: "/events/remove-actor/",
            },
            {
              label: "Move Actor",
              link: "/events/move-actor/",
            },
            {
              label: "Transfer Player",
              link: "/events/transfer-player/",
            },
            {
              label: "Dialog",
              link: "/events/dialog/",
            },
          ],
        },
      ],
    }),
    tailwind(),
  ],
});
