# Treatment detail template

Every treatment, price variant group and programme uses
`components/treatments/TreatmentPageContent.tsx` and its CSS module.

## Page order

1. Back to the catalogue, retaining the selected area and search.
2. Category, treatment name and a concise treatment-specific description.
3. A summary of duration, sessions and recovery.
4. Programme contents, when these are available in the clinic's price list.
5. How the treatment or assessment works.
6. What to expect.
7. Frequently asked questions.
8. Prices and exact variants, with a treatment-specific WhatsApp booking link.
   This sits alongside the content on desktop and before the summary on mobile.

## Content sources

- `data/treatments.ts`: existing descriptions, process, results and FAQs in Portuguese and English.
- `data/pricing.ts`: the confirmed prices, starting prices, quantities, durations and pack contents.
- `data/treatment-catalogue.ts`: explicit grouping and stable detail routes.
- `data/catalogue.ts`: the assembled catalogue, enriched with search terms from the existing concern guide.

Add clinical detail to the treatment data in both languages. Replace generic defaults
with approved treatment-specific information when the clinic supplies it. The template
is deliberately text-led and does not require treatment photographs.

For price-only entries, the page shows the factual category, published options and
contents, followed by the shared assessment process. It does not invent benefits,
recovery times or results. A default duration of 30–60 minutes in the original data
is shown as “Confirmed at consultation” until a specific duration is supplied.

Keep pricing in `data/pricing.ts`, rather than copying it into descriptions. Every
source pricing row appears exactly once in the catalogue and on its detail page.
Group equivalent variants (such as zones, brands or session packs); keep different
indications or distinct named programmes separate. Treatments without a confirmed
standalone price remain available with a request to confirm the value with the team.
