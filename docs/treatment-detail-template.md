# Treatment detail template

Every treatment, price variant group, consultation and programme uses
`components/treatments/TreatmentPageContent.tsx` and its CSS module.

## Page order

1. Back to the catalogue, retaining the selected area and search.
2. Category and treatment name.
3. **O que é / What it is**: a short, treatment-specific explanation in plain,
   professional language.
4. **Em que consiste / What the treatment involves**: how the procedure is carried
   out or what the consultation covers. Published programme contents appear as a
   paragraph in this section.
5. Prices and exact variants, with a treatment-specific WhatsApp booking link.
   This sits alongside the content on desktop and before the content on mobile.

There are no summary cards, standalone results sections or FAQs.

## Content sources

- `data/treatment-details.ts`: bilingual descriptions for every detail route,
  indexed by category and slug; the source of the two main sections.
- `data/pricing.ts`: confirmed prices, quantities, durations and pack contents.
  Programme contents are read directly rather than duplicated in descriptions.
  Morpheus has alternative zones and packs, not one bundle.
- `data/treatments.ts`: original names, brief catalogue descriptions and search terms.
- `data/treatment-catalogue.ts`: grouping and stable detail routes.
- `docs/treatment-content-sources.md`: clinical references and editorial boundaries.

Keep both languages in sync. Explain technical terms in ordinary language and
avoid guaranteed outcomes, unconfirmed schedules or assertions that the clinic
uses a specific product or device when this is not known.

Lipo Gordura, Coolfit, Foto-biodinâmica and Peeling das Estrelas retain general
descriptions until the clinic confirms its protocols. Other incompletely specified
options, such as Olhar Premium and the genetic-test panel, describe only what is
known. No menopause service is added without clinic confirmation.

Keep prices in `data/pricing.ts`. Every source pricing row appears exactly once
in the catalogue and on its detail page. Treatments without a confirmed standalone
price remain available with a request to confirm the value with the team.

When adding a route, add its PT/EN content to `data/treatment-details.ts` and run
the content-coverage tests along with the catalogue and guide tests.
