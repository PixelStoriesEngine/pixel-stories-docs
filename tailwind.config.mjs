import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-primary) / <alpha-value>)",
        text: "--sl-color-text",
        "color-accent-low": "var(--sl-color-accent-low)",
        "color-accent": "var(--sl-color-accent)",
        "color-accent-high": "var(--sl-color-accent-high)",
        "color-white": "var(--sl-color-white)",
        "color-gray-1": "var(--sl-color-gray-1)",
        "color-gray-2": "var(--sl-color-gray-2)",
        "color-gray-3": "var(--sl-color-gray-3)",
        "color-gray-4": "var(--sl-color-gray-4)",
        "color-gray-5": "var(--sl-color-gray-5)",
        "color-gray-6": "var(--sl-color-gray-6)",
        "color-black": "var(--sl-color-black)",
        "color-text-accent": "var(--sl-color-text-accent)",
      },
    },
  },
  plugins: [starlightPlugin()],
};
