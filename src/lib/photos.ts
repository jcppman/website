import type { ImageMetadata } from 'astro';
import captions from '../../content/photography/meta.json';
import descriptions from '../../content/photography/descriptions.json';
import { createPhotoCatalog } from './photo-catalog';

const originals = import.meta.glob<ImageMetadata>(
  '../assets/photography/*.jpg',
  {
    eager: true,
    import: 'default',
  },
);
export const { photos, groups } = createPhotoCatalog(
  originals,
  descriptions,
  captions,
);
export type Photo = (typeof photos)[number];

export function featuredPhoto(name: string) {
  const photo = photos.find((photo) => photo.name === name);
  if (!photo) throw new Error('Unknown featured photograph: ' + name);
  return photo;
}
