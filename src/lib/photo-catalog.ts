import type { ImageMetadata } from 'astro';

const monthFormatter = new Intl.DateTimeFormat('en', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function createPhotoCatalog(
  originals: Record<string, ImageMetadata>,
  descriptions: Record<string, string>,
  captions: { rule: string; description: string }[],
) {
  const rules = captions.map(({ rule, description }) => ({
    pattern: new RegExp(rule),
    description,
  }));
  const photos = Object.entries(originals)
    .map(([path, image]) => {
      const name = path
        .split('/')
        .pop()!
        .replace(/\.jpg$/, '');
      const match = /^(\d{4})(\d{2})(\d{2})(?:-\d+)*$/.exec(name);
      if (!match) throw new Error('Invalid photograph filename: ' + name);
      const month = match[1] + '-' + match[2];
      const day = month + '-' + match[3];
      const date = new Date(day + 'T00:00:00Z');
      if (
        !Number.isFinite(date.getTime()) ||
        date.toISOString().slice(0, 10) !== day
      ) {
        throw new Error('Invalid photograph date: ' + name);
      }
      const alt = descriptions[name]?.trim();
      if (!alt) throw new Error('Missing photo description: ' + name);
      return {
        name,
        image,
        month,
        label: monthFormatter.format(date),
        alt,
        caption: rules.find((rule) => rule.pattern.test(name))?.description,
      };
    })
    .sort((a, b) => b.name.localeCompare(a.name, 'en', { numeric: true }));

  const groups = new Map<string, typeof photos>();
  for (const photo of photos) {
    const group = groups.get(photo.month);
    if (group) group.push(photo);
    else groups.set(photo.month, [photo]);
  }
  return { photos, groups };
}
