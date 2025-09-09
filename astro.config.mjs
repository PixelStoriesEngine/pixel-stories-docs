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
        "Pixel Stories, the modern no-code game maker for story-driven games",
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
              label: "Features",
              link: "/features",
            },
            {
              label: "Quick start tutorial",
              link: "/getting-started/",
            },
            {
              label: "Interface tour",
              link: "/tour/",
            },
          ],
        },
        {
          label: "Map editor",
          items: [
            { label: "Overview", link: "/map-editor/overview" },
            { label: "Tilesets", link: "/map-editor/tilesets" },
            { label: "Autotile terrains", link: "/map-editor/autotile" },
            { label: "Map objects", link: "/map-editor/map-objects" },
            { label: "Collisions", link: "/map-editor/collisions" },
          ],
        },
        {
          label: "Events system",
          items: [
            { label: "Events", link: "/events-editor/events" }, // goes through how events play and map initial events play on first load
            {
              label: "Event groups",
              link: "/events-editor/event-groups",
            },
            {
              label: "Conditional branches",
              link: "/events-editor/conditionals",
            },
            {
              label: "Dialog event",
              link: "/events-editor/dialog-event",
            },
            {
              label: "Player events",
              link: "/events-editor/player-events",
            },
            {
              label: "NPC events",
              link: "/events-editor/npc-events",
            },
            {
              label: "Control flow events",
              link: "/events-editor/control-flow-events",
            },
          ],
        },
        {
          label: "Game assets",
          items: [
            { label: "Asset library", link: "/game-assets/asset-library" },
            { label: "NPCs", link: "/game-assets/npcs" },
            { label: "Inventory items", link: "/game-assets/inventory-items" },
            { label: "Dialog UI", link: "/game-assets/dialog-ui" },
          ],
        },
        // {
        //   label: "Guides",
        //   autogenerate: { directory: "/guides" },
        // },
        /*
          Build a Door (map transfer + trigger)

          NPC Basics: Spawn, Talk, Despawn

          Choices & Branching Dialogue

          Chase & Patrol (ties together movement + triggers)

          Inventory Pickup & Use

          Switch Maps from a Cutscene

          Customize the Dialogue Box Theme

          Each guide uses the standard page template (What/When/Steps/Tips/Related).
            */
        {
          label: "Resources",
          items: [
            {
              label: "Changelog",
              link: "/changelog/",
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
