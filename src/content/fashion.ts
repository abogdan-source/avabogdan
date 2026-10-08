import type { Boge, WorkItem } from './types';

// Projects appear in this order. `span` is the width on desktop out of 12
// columns: use 7 + 5 for a row of two, or 4 + 4 + 4 for a row of three.

export const work: WorkItem[] = [
  {
    slug: 'concrete-summer',
    title: 'Concrete Summer',
    category: 'Editorial',
    year: 2026,
    span: 7,
    anchor: 'f-editorial',
    photo: { alt: 'Concrete Summer editorial', ratio: '3/2', tones: ['--tone-4', '--tone-1'] },
    credits:
      'Styling & creative direction: A. Bogdan · Photography: [name] · Model: [name] · Publication: [magazine]',
  },
  {
    slug: 'lookbook',
    title: 'Lookbook for [brand]',
    category: 'Styling',
    year: 2026,
    span: 5,
    anchor: 'f-styling',
    photo: { alt: 'Lookbook styling', ratio: '4/5', tones: ['--tone-2', '--tone-5'] },
    credits: 'Styling: A. Bogdan · Photography: [name]',
  },
  {
    slug: 'night-shift',
    title: 'Night Shift',
    category: 'Creative Direction',
    year: 2025,
    span: 4,
    anchor: 'f-cd',
    photo: { alt: 'Night Shift creative direction', ratio: '4/5', tones: ['--tone-6', '--tone-1'] },
    credits: 'Concept, casting, set and styling by A. Bogdan.',
  },
  {
    slug: 'thrift-to-runway',
    title: 'Thrift to Runway',
    category: 'Project',
    year: 2025,
    span: 4,
    anchor: 'f-projects',
    photo: {
      alt: 'Thrift to Runway upcycled capsule',
      ratio: '4/5',
      tones: ['--tone-4', '--tone-3'],
    },
    credits: 'Upcycled capsule styled from secondhand finds.',
  },
  {
    slug: 'artist-portraits',
    title: 'Artist Portraits',
    category: 'Styling',
    year: 2025,
    span: 4,
    photo: {
      alt: 'Artist portrait wardrobe styling',
      ratio: '4/5',
      tones: ['--tone-2', '--tone-1'],
    },
    credits: 'Wardrobe for [musician / artist].',
  },
];

export const boge: Boge = {
  paragraphs: [
    'Bogè is my own fashion line: [one or two sentences on what it is, e.g. small-batch pieces made in New York].',
    'I design the pieces, style the shoots, direct the campaigns and run the launches.',
  ],
  photos: [
    {
      label: 'Bogè · Campaign',
      alt: 'Bogè campaign image',
      ratio: '2/3',
      tones: ['--tone-6', '--tone-3'],
    },
    { label: 'Detail', alt: 'Bogè garment detail', ratio: '1/1', tones: ['--tone-4', '--tone-5'] },
    { label: 'Launch', alt: 'Bogè launch event', ratio: '1/1', tones: ['--tone-2', '--tone-1'] },
  ],
};
