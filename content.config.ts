import { defineContentConfig, defineCollection, defineCollectionSource, z } from '@nuxt/content'
import { glob } from 'glob';
import { readFileSync } from 'node:fs';

const GalleryItemSchema = z.object({
  date: z.string(),
  description: z.string().optional(),
  cursor: z.string(),
  img: z.string(),
  sequence: z.number().optional(),
});

const GalleryMetaSchema = z.array(
  z.object({
    rule: z.string(),
    description: z.string().optional(),
  })
);

const galleryMeta = GalleryMetaSchema.parse(JSON.parse(readFileSync('./content/photography/meta.json').toString()));
const gallerySource = defineCollectionSource({
  getKeys: async () =>  {
    const files = await glob('./public/photography/**/*.jpg');
    // pass it as .json to avoid being ignored by the content module
    return files.map(filePath => filePath.replace(/\.jpg$/, '.json'));
  },
  getItem: async (key: string) => {
    const img = key.replace(/\.json$/, '.jpg').replace(/^public\//, '');
    // extract type and date from the file path
    const match = img.match(/photography\/(\d{8})(-\d+)?/);
    const date = match?.[1];

    if (!date) {
      throw new Error(`Invalid image filename: ${img}`);
    }

    const sequence = match && match[2] ? parseInt(match[2].replace('-', ''), 10) : 0;

    let obj = {
      date,
      cursor: `p-${date}-${sequence}`,
      img,
    };
    galleryMeta.forEach((metaItem) => {
      if (img.match(new RegExp(metaItem.rule))) {
        obj = {
          ...obj,
          description: metaItem.description,
        };
      }
    });

    return JSON.stringify(GalleryItemSchema.parse(obj));
  },
});

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
    videography: defineCollection({
      type: 'page',
      source: 'videography/*.md',
      schema: z.object({
        date: z.string(),
        title: z.string().optional(),
        tags: z.array(z.string()),
        link: z.object({
          type: z.literal('youtube'),
          videoId: z.string(),
        }),
      }),
    }),
    photography: defineCollection({
      type: 'data',
      source: gallerySource,
      schema: GalleryItemSchema,
    })
  }
})
