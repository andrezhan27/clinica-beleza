# Clínica Beleza

Premium bilingual landing page for Clínica Beleza, an aesthetic medicine clinic in Saldanha, Lisbon.

## Stack

- Next.js 16 App Router with TypeScript
- Tailwind CSS 4 and custom CSS properties
- Framer Motion 12
- Lucide React
- Local PT / EN translations through React Context

## Development

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Production

```bash
npm run build
npm run start
```

The project is ready for Vercel through the standard Next.js deployment flow. It also includes optional `sites:dev`, `sites:build`, and `sites:start` scripts for the Sites runtime used by the hosted preview.

## Content updates

- Replace placeholder photography in `data/images.ts`.
- Brand assets live in `public/images/brand`, including the approved logo, favicon, and marble background.

## Image organization

- Shared homepage assets live directly in `public/images` and use descriptive names such as `home-hero.webp`, `space-1.webp`, and `before-1.webp`.
- Each treatment category has one cover at `public/images/treatments/<category>/category.webp`. It is used on the treatment catalogue, the homepage category grid, the category page hero, and category social metadata. When replacing a category cover in place, update its `?v=` content hash in `data/treatment-categories.ts` so Next.js generates a fresh optimized render.
- Each treatment stores only `gallery-01.webp`, `gallery-02.webp`, and any additional numbered gallery images in `public/images/treatments/<category>/<treatment>/`. The first gallery image is also the treatment cover used by cards, the treatment page hero, and social metadata.
- Team, clinic-space, and one illustrative results pair currently use the remote image URLs centralized in `data/images.ts`.
- Update placeholder team credentials, social links, and clinical result imagery before launch.
- All visible translations live in `data/translations.ts`.

## Accessibility and SEO

The site includes semantic landmarks, keyboard focus styles, accessible mobile navigation, reduced-motion support, bilingual document language updates, local medical clinic structured data, and Open Graph metadata.
