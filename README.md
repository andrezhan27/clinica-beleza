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
- Replace `public/images/logo.svg` with the final approved brand asset if supplied.
- Update placeholder phone, team credentials, social links, opening hours, and clinical result imagery before launch.
- All visible translations live in `data/translations.ts`.

## Accessibility and SEO

The site includes semantic landmarks, keyboard focus styles, accessible mobile navigation, reduced-motion support, bilingual document language updates, local medical clinic structured data, and Open Graph metadata.
