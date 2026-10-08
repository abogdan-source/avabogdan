import type { Site } from './types';

// To use a real photo: drop it in src/assets/photos/hero/, import it at the top,
//   import look07 from '../assets/photos/hero/look-07.jpg';
// then add `src: look07` to the photo below.

export const site: Site = {
  name: 'A. Bogdan',
  roles: ['Fashion PR', 'Stylist', 'Photographer', 'Creative Director'],
  location: 'New York City · 40.7° N',
  indexLabel: 'Index / 2026',
  thesis:
    'I style it, shoot it, design the campaign and throw the party. One eye across the whole picture.',
  bio: {
    lead: 'A New York creative working where fashion, image and culture meet.',
    paragraphs: [
      "I'm a stylist, photographer and creative director based in New York. I build looks, shoot them on film, design the campaigns around them and produce the events where people finally see them in person.",
      'I run **Bogè**, my own fashion label, and I model and write on the side. Every part feeds the others: the styling informs the photographs, the photographs shape the brand, and the writing keeps the whole thing honest.',
      'By day I work in fashion PR at **Lucien Pagès** in New York, which keeps me close to how designers, press and talent come together around a collection.',
      "Previously: [brands, agencies or studios you've worked with].",
    ],
  },
  facts: [
    { label: 'Based', value: 'New York, NY' },
    { label: 'Currently', value: 'PR, Lucien Pagès' },
    { label: 'Focus', value: 'Fashion · Image · Brand' },
    { label: 'Shoots on', value: '35mm · Polaroid · Digital' },
    { label: 'Label', value: 'Bogè' },
    { label: 'Available', value: '● Booking now', accent: true },
  ],
  contact: {
    email: '[hello@yourname.com]',
    instagram: '[@yourhandle]',
    instagramUrl: 'https://www.instagram.com/',
    representation: 'Modeling: [agency or self-represented]',
  },
  marquee: [
    'Fashion PR',
    'Styling',
    'Creative Direction',
    '35mm',
    'Polaroid',
    'Bogè',
    'Campaigns',
    'Production',
    'Modeling',
    'Poetry',
  ],
  hero: [
    {
      photo: { alt: 'Editorial styling, look 07', ratio: '2/3', tones: ['--tone-4', '--tone-5'] },
      variant: 'plain',
      label: 'Editorial',
      caption: ['Look 07', 'Styling'],
    },
    {
      photo: {
        alt: 'Polaroid taken on the Bowery at 2am',
        ratio: '1/1',
        tones: ['--tone-2', '--tone-3'],
      },
      variant: 'polaroid',
      handwritten: 'Bowery, 2am',
      caption: ['Polaroid', 'i-Type'],
    },
    {
      photo: {
        alt: 'Backstage at a show, shot on 35mm film',
        ratio: '3/2',
        tones: ['--tone-2', '--tone-1'],
      },
      variant: 'film',
      edge: '400 · 35MM',
      frame: '▸ 14A',
      caption: ['Backstage', '35mm'],
    },
  ],
  seo: {
    title: 'A. Bogdan — Fashion PR, Styling & Creative Direction, NYC',
    description:
      'A. Bogdan is a New York stylist, photographer and creative director working in fashion PR at Lucien Pagès, and founder of the label Bogè.',
    modelingUrl: undefined, // add your modeling site URL here
  },
};
