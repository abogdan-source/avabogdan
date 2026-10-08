import type { DesignCard } from './types';

export const design: DesignCard[] = [
  {
    category: 'Graphic design',
    title: 'Event Posters',
    description: 'Type-led posters and flyers for launches and shows.',
    visual: 'poster',
    posterText: 'Open\nStudio\nFri 10/24',
  },
  {
    category: 'Campaign concept',
    title: 'Campaign Concepts',
    description: 'Moodboards, scripts and shot lists that take a brand from idea to set.',
    visual: 'image',
    photos: [
      {
        label: 'Moodboard · SS27',
        alt: 'SS27 campaign moodboard',
        ratio: '1/1',
        tones: ['--tone-4', '--tone-1'],
      },
    ],
  },
  {
    category: 'Branding',
    title: 'Identity Systems',
    description: 'Wordmarks, palettes and packaging. Shown: the Bogè identity.',
    visual: 'wordmark',
  },
  {
    category: 'Social media',
    title: 'Feed Concepts',
    description: 'Grid planning, content series and launch rollouts.',
    visual: 'feed',
    photos: (
      [
        ['--tone-4', '--tone-5'],
        ['--tone-6', '--tone-3'],
        ['--tone-2', '--tone-1'],
        ['--tone-2', '--tone-3'],
        ['--tone-4', '--tone-1'],
        ['--tone-6', '--tone-1'],
        ['--tone-5', '--tone-1'],
        ['--tone-4', '--tone-3'],
        ['--tone-2', '--tone-5'],
      ] as const
    ).map((tones, i) => ({ alt: `Feed post ${i + 1}`, ratio: '1/1' as const, tones: [...tones] })),
  },
];
