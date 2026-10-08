# avabogdan

Portfolio site for A. Bogdan, a fashion PR, stylist, photographer and creative director in New York. Covers fashion and styling, the Bogè label, 35mm and Polaroid photography, design, modeling, events and writing. Built with [Astro](https://astro.build) and hosted on GitHub Pages.

**Live site:** https://abogdan-source.github.io/avabogdan/

---

## How updates go live

Every change merged into the `main` branch is built and published automatically by
`.github/workflows/deploy.yml`. It takes about a minute. You can watch it under the repo's **Actions** tab.

You can edit everything below straight on github.com: open the file, click the pencil icon, make the change and click **Commit changes**.

## Where the words live

All text is in `src/content/`. You only ever edit these files, never the layout code.

| File | What's in it |
|---|---|
| `site.ts` | Name, roles, bio, facts list, contact details, marquee words, hero photos, page title |
| `fashion.ts` | Fashion projects and the Bogè block |
| `photos.ts` | Photography grid |
| `design.ts` | Creative & design cards |
| `modeling.ts` | Modeling photos, comp card stats, link to the full book |
| `events.ts` | PR / events table |
| `writing.ts` | Poems and short prose |

Anything in `[square brackets]` is a placeholder. It shows up on the site underlined in blue so it's easy to spot. Replace the whole thing, brackets included. To see what's left, run `node scripts/check-placeholders.mjs`.

Use `**double asterisks**` around words you want in bold (as in the bio).

## Add a photo

1. Upload the image to the right folder in `src/assets/photos/` (for example `src/assets/photos/fashion/concrete-summer.jpg`). JPG or PNG, as large as you have. The site makes smaller, faster versions automatically.
2. Open the matching content file and add an import line at the very top:
   ```ts
   import concreteSummer from '../assets/photos/fashion/concrete-summer.jpg';
   ```
3. Find the item and add `src:` to its `photo`:
   ```ts
   photo: { src: concreteSummer, alt: 'Model in a white suit on a rooftop', ratio: '3/2' },
   ```
   - `alt` describes the picture for screen readers and search engines. Always fill it in.
   - `ratio` is the shape: `'4/5'` portrait, `'2/3'` tall, `'3/2'` landscape, `'1/1'` square. The photo is cropped to fit.
   - You can delete `tones`. It only sets the colour of the placeholder.

## Add a fashion project

Copy one of the `{ ... },` blocks in `src/content/fashion.ts`, paste it where you want it in the list, and change the details:

```ts
{
  slug: 'new-project',            // short id, no spaces
  title: 'New Project',
  category: 'Styling',            // 'Styling' | 'Project' | 'Creative Direction' | 'Editorial'
  year: 2026,
  span: 6,                        // width out of 12 on desktop (rows should add up to 12)
  photo: { alt: 'Describe the photo', ratio: '4/5' },
  credits: 'Styling: A. Bogdan · Photography: Jane Doe',
},
```

## Add a photo to the photography grid

Add a block to `src/content/photos.ts`:

```ts
{
  medium: '35mm',                 // '35mm' (film strip) | 'polaroid' | 'digital'
  categories: ['bts'],            // any of 'bts', 'portraits', 'events'
  subject: 'Backstage',
  edge: '400 · 35MM',             // 35mm only: text on the film edge
  frame: '▸ 12A',                 // 35mm only: frame number
  // handwritten: 'set, hour 9', // polaroid only
  photo: { src: myPhoto, alt: 'Backstage at the show', ratio: '3/2' },
},
```

The filter buttons pick it up automatically.

## Add a row to PR & events

Add a line near the top of the list in `src/content/events.ts` (newest first):

```ts
{ year: '2026', event: 'Brand X showroom', role: 'Press', scope: 'Press days, samples, editor appointments' },
```

## Add a poem

Add a block to `src/content/writing.ts`. Line breaks are written as `\n`:

```ts
{
  kind: 'Poem',
  year: 2026,
  title: 'Canal Street',
  excerpt: 'First line\nsecond line\nthird line',
  url: 'https://…',               // optional "Read in full" link
},
```

## Use a custom domain

1. In the repo go to **Settings → Pages → Custom domain** and enter it.
2. Follow GitHub's DNS instructions for your domain registrar.

The deploy workflow detects the domain and builds the site for it. You don't need to change any code.

## For developers

```bash
npm install
npm run dev        # local dev server at http://localhost:4321/avabogdan/
npm run build      # production build into dist/
npm run check      # type check
```

- Stack: Astro (static), plain CSS with tokens in `src/styles/tokens.css`, and a small amount of vanilla JS for the photo filter and the copy-email button. Fonts are self-hosted via Fontsource.
- `npm run build` lists any placeholders left in `src/content`. Set `STRICT_PLACEHOLDERS=1` to make the build fail instead.
- Theme follows the OS setting. Set `data-theme="light"` or `data-theme="dark"` on `<html>` to force one.
