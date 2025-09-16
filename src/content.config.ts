import { defineCollection, z, type SchemaContext } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "./blogSchema";
import { glob } from "astro/loaders";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  blog: defineCollection({
    loader: glob({
      pattern: ["**/*.md", "**/*.mdx"],
      base: "./src/content/blog",
    }),
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
};
