import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    music: defineCollection({
      type: 'data',
      source: 'music/*.md',
      schema: z.object({
        title: z.string(),
        year: z.string().optional(),
        artists: z.array(z.string()),
        roles: z.array(z.string()),
        links: z.array(z.object({
          title: z.string(),
          url: z.string().url(),
        })),
        types: z.array(z.string()),
        img: z.string().optional(),
      }),
    }),
    photography: defineCollection({
      type: 'data',
      source: 'photography/*.md',
      schema: z.object({
        date: z.string().optional(),
        title: z.string().optional(),
        tags: z.array(z.string()),
        photos: z.array(z.string()),
      }),
    })
  }
})
