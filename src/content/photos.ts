import type { PhotoItem } from './types';

// medium picks the frame: '35mm' = film strip, 'polaroid' = polaroid, 'digital' = thin border.
// categories feed the filter chips: 'bts', 'portraits', 'events'.

export const photos: PhotoItem[] = [
  {
    medium: '35mm',
    categories: ['portraits'],
    subject: 'Portrait, LES',
    edge: '400 · 35MM',
    frame: '▸ 03A',
    photo: {
      alt: 'Portrait on the Lower East Side, 35mm',
      ratio: '3/2',
      tones: ['--tone-4', '--tone-1'],
    },
  },
  {
    medium: 'polaroid',
    categories: ['portraits'],
    subject: 'Fitting',
    handwritten: 'fitting, look 3',
    photo: {
      alt: 'Polaroid from a fitting, look 3',
      ratio: '1/1',
      tones: ['--tone-4', '--tone-5'],
    },
  },
  {
    medium: 'digital',
    categories: ['events'],
    subject: 'Launch night',
    photo: { alt: 'Launch night, digital', ratio: '4/5', tones: ['--tone-6', '--tone-1'] },
  },
  {
    medium: '35mm',
    categories: ['bts'],
    subject: 'Backstage',
    edge: '400 · 35MM',
    frame: '▸ 21A',
    photo: { alt: 'Backstage, 35mm', ratio: '3/2', tones: ['--tone-2', '--tone-3'] },
  },
  {
    medium: 'polaroid',
    categories: ['bts'],
    subject: 'On set',
    handwritten: 'set, hour 9',
    photo: { alt: 'Polaroid on set, hour nine', ratio: '1/1', tones: ['--tone-2', '--tone-1'] },
  },
  {
    medium: 'digital',
    categories: ['portraits'],
    subject: 'Studio portrait',
    photo: { alt: 'Studio portrait, digital', ratio: '4/5', tones: ['--tone-4', '--tone-3'] },
  },
  {
    medium: '35mm',
    categories: ['events'],
    subject: 'Afterparty',
    edge: '800 · 35MM',
    frame: '▸ 36',
    photo: { alt: 'Afterparty, 35mm', ratio: '3/2', tones: ['--tone-5', '--tone-1'] },
  },
  {
    medium: 'polaroid',
    categories: ['portraits'],
    subject: 'Portrait',
    handwritten: 'M., Greenpoint',
    photo: {
      alt: 'Polaroid portrait in Greenpoint',
      ratio: '1/1',
      tones: ['--tone-6', '--tone-3'],
    },
  },
];
