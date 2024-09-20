import { defineCollection, z, type SchemaContext } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { blogSchema } from "./blogSchema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema(),
  }),
  blog: defineCollection({
    schema: docsSchema({
      extend: (context) => blogSchema(context),
    }),
  }),
};
