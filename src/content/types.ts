import type { ImageMetadata } from 'astro';

export type Ratio = '4/5' | '3/2' | '1/1' | '2/3';
export type FrameVariant = 'plain' | 'film' | 'polaroid' | 'digital';
export type Tone = '--tone-1' | '--tone-2' | '--tone-3' | '--tone-4' | '--tone-5' | '--tone-6';

export interface Photo {
  src?: ImageMetadata; // import from src/assets; omit → tinted placeholder
  alt: string; // required, describe the image
  ratio: Ratio;
  tones?: [Tone, Tone]; // placeholder gradient tokens, e.g. ['--tone-4','--tone-1']
}

export interface Site {
  name: string;
  roles: string[];
  location: string;
  thesis: string;
  indexLabel: string;
  bio: { lead: string; paragraphs: string[] };
  facts: { label: string; value: string; accent?: boolean }[];
  contact: {
    email: string;
    instagram: string;
    instagramUrl: string;
    representation: string;
  };
  marquee: string[];
  hero: {
    photo: Photo;
    variant: FrameVariant;
    label?: string;
    caption: [string, string];
    edge?: string;
    frame?: string;
    handwritten?: string;
  }[];
  seo: { title: string; description: string; modelingUrl?: string };
}

export interface WorkItem {
  slug: string;
  title: string;
  category: 'Styling' | 'Project' | 'Creative Direction' | 'Editorial';
  year: number;
  photo: Photo;
  credits: string;
  span: 4 | 5 | 6 | 7 | 8 | 12;
  anchor?: string;
}

export interface Boge {
  paragraphs: string[];
  photos: (Photo & { label: string })[]; // 3: one tall + two squares
}

export interface PhotoItem {
  photo: Photo;
  medium: '35mm' | 'polaroid' | 'digital';
  categories: ('bts' | 'portraits' | 'events')[];
  subject: string;
  edge?: string;
  frame?: string;
  handwritten?: string;
}

export interface DesignCard {
  category: string;
  title: string;
  description: string;
  visual: 'poster' | 'image' | 'wordmark' | 'feed';
  photos?: (Photo & { label?: string })[]; // image: 1, feed: 9
  posterText?: string;
}

export interface Modeling {
  selects: (Photo & { label: string })[]; // exactly 4
  stats: { label: string; value: string }[];
  bookUrl: string;
}

export interface LedgerRow {
  year: string;
  event: string;
  role: string;
  scope: string;
}

export interface WritingPiece {
  kind: 'Poem' | 'Essay';
  year: number;
  title: string;
  excerpt: string;
  url?: string;
}
