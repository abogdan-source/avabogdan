import type { LedgerRow } from './types';

// Newest first. Use "Now" for a current role.
export const events: LedgerRow[] = [
  {
    year: 'Now',
    event: 'Lucien Pagès',
    role: 'Fashion PR',
    scope: '[Clients, shows, press days or showroom work you support]',
  },
  {
    year: '2026',
    event: 'Bogè launch',
    role: 'Producer',
    scope: 'Venue, run of show, casting, styling, guest list',
  },
  {
    year: '2026',
    event: '[Brand] runway show',
    role: 'Backstage lead',
    scope: 'Dressers, looks board, line-up',
  },
  {
    year: '2025',
    event: '[Campaign] shoot',
    role: 'Production',
    scope: 'Call sheets, locations, crew, budget',
  },
  {
    year: '2025',
    event: 'Open studio night',
    role: 'Organizer',
    scope: 'Pop-up gallery, DJ, design and promo',
  },
];
