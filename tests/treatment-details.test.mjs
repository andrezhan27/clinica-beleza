import assert from "node:assert/strict";
import test from "node:test";
import { priceCategories } from "../data/pricing.ts";
import { treatmentCategories } from "../data/treatment-categories.ts";
import { createTreatmentCatalogue } from "../data/treatment-catalogue.ts";
import { getTreatmentDetail, treatmentDetails } from "../data/treatment-details.ts";

// Combine the original indexed routes with price-only entries to check coverage.
const indexedTreatments = treatmentCategories.flatMap((category) => category.treatments.map((slug) => ({
  slug, category: category.slug, name: { pt: slug, en: slug },
  shortDescription: { pt: slug, en: slug },
})));
const entries = createTreatmentCatalogue(priceCategories, indexedTreatments, treatmentCategories).flatMap(({ items }) => items);
const find = (id) => entries.find((entry) => entry.id === id);

test("every priced and unpriced detail route has dedicated Portuguese and English content", () => {
  assert.deepEqual(Object.keys(treatmentDetails).sort(), entries.map(({ id }) => id).sort());
  for (const entry of entries) {
    const content = getTreatmentDetail(entry);
    for (const section of [content.overview, content.involves]) {
      assert.ok(section.pt.trim().length > 40, `${entry.id}: missing PT content`);
      assert.ok(section.en.trim().length > 40, `${entry.id}: missing EN content`);
      assert.notEqual(section.pt, section.en, `${entry.id}: untranslated content`);
    }
  }
});

test("programme inclusions use published pricing contents without treating alternative Morpheus options as one bundle", () => {
  for (const entry of entries.filter(({ category }) => category === "packs-programas" || category === "programas-medicos")) {
    const expected = entry.slug === "morpheus" ? [] : entry.variants.flatMap(({ detail }) => detail ? [detail] : []);
    assert.deepEqual(getTreatmentDetail(entry).contents, expected, entry.id);
  }
  const glow = find("packs-programas/glow-renova");
  assert.equal(getTreatmentDetail(glow).contents[0], glow.variants[0].detail);
  assert.deepEqual(getTreatmentDetail(find("medicina-estetica/toxina-botulinica")).contents, []);
});

test("distinct toxin indications explain their own purpose rather than inheriting cosmetic copy", () => {
  const indications = [
    ["toxina-botulinica", /expression lines/],
    ["botox-axilas", /underarm sweating/],
    ["botox-maos", /palms/],
    ["botox-bruxismo", /clenching or grinding/],
    ["botox-enxaquecas", /chronic migraine/],
  ];
  for (const [slug, purpose] of indications) {
    assert.match(getTreatmentDetail(find(`medicina-estetica/${slug}`)).overview.en, purpose);
  }
});

test("unconfirmed names do not assert a specific device, injection or light modality", () => {
  for (const id of ["estetica-corporal/lipo-gordura", "estetica-corporal/coolfit", "medicina-estetica/terapia-fotobiodinamica", "estetica-facial/peeling-das-estrelas"]) {
    const { overview, involves } = getTreatmentDetail(find(id));
    assert.doesNotMatch(`${overview.en} ${involves.en}`, /cryolipolysis|electromagnetic|lipolytic injection|photobiomodulation|intense pulsed light|photosensiti[sz]er/i);
  }
  assert.ok(!entries.some(({ id }) => /menopaus/.test(id)));
});

test("reading detail content preserves every price variant and gives future routes a bilingual fallback", () => {
  const before = JSON.stringify(entries.map(({ variants }) => variants));
  entries.forEach(getTreatmentDetail);
  assert.equal(JSON.stringify(entries.map(({ variants }) => variants)), before);
  const unknown = { id: "new/new", slug: "new", category: "new", description: { pt: "Descrição publicada.", en: "Published description." }, variants: [] };
  const content = getTreatmentDetail(unknown);
  assert.deepEqual(content.overview, unknown.description);
  assert.ok(content.involves.pt && content.involves.en);
});
