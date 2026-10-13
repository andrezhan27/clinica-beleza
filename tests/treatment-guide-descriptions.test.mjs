import assert from "node:assert/strict";
import test from "node:test";
import { treatmentGuideOffers } from "../data/treatment-guide.ts";
import { getTreatmentGuideDescription } from "../data/treatment-guide-descriptions.ts";

test("technical guide options have short explanations in both page languages", () => {
  for (const offer of Object.values(treatmentGuideOffers)) {
    if (/^(botox-|hifu-|morpheus-|threads-|nctf-|dutasteride|prp|exosomes|ultracol)/.test(offer.id)) {
      assert.ok(getTreatmentGuideDescription(offer.id), `Missing technical explanation: ${offer.id}`);
    }
    const description = getTreatmentGuideDescription(offer.id);
    if (!description) continue;
    for (const language of ["pt", "en"]) {
      assert.ok(description[language].trim(), `${offer.id}: ${language}`);
      assert.ok(description[language].split(/\s+/).length <= 40, `${offer.id}: keep ${language} brief`);
    }
  }
});

test("familiar care and consultations do not acquire unnecessary info icons", () => {
  for (const id of ["assessment", "hair-first", "hair-followup", "nutrition-first", "nutrition-followup", "surgery-consultation", "massage-relax", "massage-sport", "exfoliation"]) {
    assert.equal(getTreatmentGuideDescription(id), undefined, id);
  }
  assert.equal(getTreatmentGuideDescription("unknown"), undefined);
});

test("distinct toxin indications and uncertain treatments keep appropriate explanations", () => {
  assert.match(getTreatmentGuideDescription("botox-migraines").en, /prevent chronic migraine/);
  assert.match(getTreatmentGuideDescription("botox-underarms").en, /sweating/);
  assert.match(getTreatmentGuideDescription("botox-bruxism").en, /grinding or clenching/);
  assert.match(getTreatmentGuideDescription("exosomes").en, /still being studied/);
  assert.doesNotMatch(getTreatmentGuideDescription("photo").en, /IPL|LED|photodynamic/i);
  assert.doesNotMatch(getTreatmentGuideDescription("stellar-peel").en, /acid|laser|injection/i);
});
