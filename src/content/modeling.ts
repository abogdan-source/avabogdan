import type { Modeling } from './types';

export const modeling: Modeling = {
  selects: [
    {
      label: 'Editorial',
      alt: 'Modeling: editorial',
      ratio: '2/3',
      tones: ['--tone-4', '--tone-5'],
    },
    { label: 'Digitals', alt: 'Modeling: digitals', ratio: '2/3', tones: ['--tone-2', '--tone-1'] },
    { label: 'Campaign', alt: 'Modeling: campaign', ratio: '2/3', tones: ['--tone-6', '--tone-3'] },
    { label: 'Runway', alt: 'Modeling: runway', ratio: '2/3', tones: ['--tone-2', '--tone-5'] },
  ],
  stats: [
    { label: 'Height', value: '[—]' },
    { label: 'Chest / Bust', value: '[—]' },
    { label: 'Waist', value: '[—]' },
    { label: 'Hips', value: '[—]' },
    { label: 'Shoe', value: '[—]' },
    { label: 'Hair / Eyes', value: '[—]' },
  ],
  bookUrl: 'https://example.com',
};
