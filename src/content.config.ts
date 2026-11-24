import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const releases = defineCollection({
  loader: glob({ pattern: '*.md', base: './content/music' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string(),
      artists: z.array(z.string()).min(1),
      roles: z.array(z.string()),
      links: z.array(z.object({ title: z.string(), url: z.url() })).min(1),
      types: z.array(z.string()),
      img: image(),
    }),
});

export const collections = { releases };
