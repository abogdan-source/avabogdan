import type { WritingPiece } from './types';

// Keep excerpts to 3–6 lines. Line breaks are kept exactly as typed.
// Add `url: 'https://…'` to show a "Read in full" link.
export const writing: WritingPiece[] = [
  {
    kind: 'Poem',
    year: 2026,
    title: '[Poem title]',
    excerpt: 'Paste the first few lines here.\nKeep the line breaks\nthe way you wrote them.',
  },
  {
    kind: 'Poem',
    year: 2025,
    title: '[Poem title]',
    excerpt: 'A short excerpt works best,\nthree to six lines,\nthen link to the full piece.',
  },
  {
    kind: 'Essay',
    year: 2025,
    title: '[Essay title]',
    excerpt: 'Or a short prose piece on style, the city, or how you work.',
  },
];
