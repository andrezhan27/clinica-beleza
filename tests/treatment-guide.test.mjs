import assert from "node:assert/strict";
import test from "node:test";
import { priceCategories } from "../data/pricing.ts";
import {
  ASSESSMENT_OFFER_ID, UNSURE_CONCERN_ID, createTreatmentGuideMessage, formatTreatmentGuidePrice,
  getTreatmentGuideOptions, getTreatmentGuidePrice, treatmentGuideAreas, treatmentGuideOffers,
} from "../data/treatment-guide.ts";
import { createBookingWhatsAppUrl } from "../lib/booking.ts";

const priceFor = (id) => getTreatmentGuidePrice(treatmentGuideOffers[id], priceCategories);

test("the PDF's six areas and 33 concerns are available in Portuguese and English", () => {
  assert.deepEqual(treatmentGuideAreas.map((area) => area.name.pt), ["Rosto", "Pele", "Corpo", "Cabelo", "Bem-estar", "Rejuvenescimento"]);
  assert.deepEqual(treatmentGuideAreas.map((area) => area.name.en), ["Face", "Skin", "Body", "Hair", "Wellbeing", "Rejuvenation"]);
  assert.equal(treatmentGuideAreas.flatMap((area) => area.goals).length, 33);
  for (const area of treatmentGuideAreas) {
    assert.ok(area.description.pt && area.description.en);
    assert.equal(new Set(area.goals.map((goal) => goal.id)).size, area.goals.length);
    for (const goal of area.goals) {
      assert.ok(goal.name.pt && goal.name.en && goal.description.pt && goal.description.en);
      assert.ok(goal.treatmentIds.length > 0);
      for (const id of [...goal.treatmentIds, ...goal.programmeIds]) assert.ok(treatmentGuideOffers[id], `Unknown offer: ${id}`);
    }
  }
});

test("every offer resolves to exactly one bilingual price from the shared catalogue", () => {
  for (const entry of Object.values(treatmentGuideOffers)) {
    const price = getTreatmentGuidePrice(entry, priceCategories);
    assert.ok(price.name.pt && price.name.en);
    assert.ok(Number.isFinite(price.price) && price.price > 0, entry.id);
  }
});

test("expression lines includes the three Botox variants and the PDF's three programmes", () => {
  const options = getTreatmentGuideOptions("face", "expression-lines");
  assert.deepEqual(options.treatments.map((entry) => getTreatmentGuidePrice(entry, priceCategories).price), [140, 340, 400]);
  assert.deepEqual(options.programmes.map((entry) => entry.id), ["glow-face", "natural-face", "new-eyes"]);
  assert.equal(priceFor("botox-azzalure").detail.pt, "Azzalure");
  assert.equal(priceFor("botox-relfydess").detail.pt, "Relfydess");
});

test("nutrition is available under wellbeing and skin concerns remain separate from face", () => {
  assert.deepEqual(getTreatmentGuideOptions("wellbeing", "nutrition-weight").treatments.map((entry) => getTreatmentGuidePrice(entry, priceCategories).price), [80, 60]);
  assert.equal(getTreatmentGuideOptions("face", "acne"), undefined);
  assert.equal(getTreatmentGuideOptions("skin", "acne").programmes[0].id, "glow-renova");
});

test("not sure always leads to the confirmed 90 EUR assessment, including hair", () => {
  for (const area of treatmentGuideAreas) {
    const options = getTreatmentGuideOptions(area.id, UNSURE_CONCERN_ID);
    assert.deepEqual(options.treatments.map((entry) => entry.id), [ASSESSMENT_OFFER_ID]);
    assert.equal(getTreatmentGuidePrice(options.treatments[0], priceCategories).price, 90);
    assert.deepEqual(options.programmes, []);
  }
  assert.equal(priceFor("hair-first").price, 100);
  assert.equal(priceFor("hair-followup").price, 80);
});

test("session and pack variants resolve independently, including the PDF's Morpheus body pack", () => {
  assert.equal(priceFor("prp").price, 350);
  assert.equal(priceFor("prp").unit, "session");
  assert.equal(priceFor("prp-three").price, 890);
  assert.equal(priceFor("prp-three").unit, "pack");
  assert.equal(priceFor("morpheus-body-three").price, 750);
  assert.equal(priceFor("morpheus-body-three").unit, "pack");
});

test("price labels preserve starting prices and per-ml quantities in both languages", () => {
  assert.match(formatTreatmentGuidePrice(priceFor("sculptra"), "pt"), /^Desde .*580/);
  assert.match(formatTreatmentGuidePrice(priceFor("sculptra"), "en"), /^From .*580/);
  assert.match(formatTreatmentGuidePrice(priceFor("filler-lips"), "pt"), /350.*\/ml$/);
  assert.match(formatTreatmentGuidePrice(priceFor("filler-lips"), "en"), /350.*\/ml$/);
});

test("WhatsApp messages preserve area, concern, exact variant, price and language", () => {
  const area = treatmentGuideAreas.find((entry) => entry.id === "face");
  const concern = area.goals.find((entry) => entry.id === "expression-lines").name;
  for (const language of ["pt", "en"]) {
    const message = createTreatmentGuideMessage(language, area, concern, treatmentGuideOffers["botox-relfydess"], priceFor("botox-relfydess"), false);
    const url = new URL(createBookingWhatsAppUrl(message));
    assert.equal(url.searchParams.get("phone"), "351935486918");
    assert.equal(url.searchParams.get("text"), message);
    assert.ok(message.includes(area.name[language]));
    assert.ok(message.includes(concern[language]));
    assert.ok(message.includes("Relfydess"));
    assert.ok(message.includes("400"));
    assert.ok(message.includes("\n\n"));
    assert.match(message, language === "pt" ? /^Olá!/ : /^Hello!/);
  }
  const pack = createTreatmentGuideMessage("en", area, concern, treatmentGuideOffers["morpheus-face-three"], priceFor("morpheus-face-three"), true);
  assert.match(pack, /Programme: Morpheus · Face · 3 sessions/);
  assert.match(pack, /\(full pack\)/);
});

test("unknown routes and invalid or ambiguous price references cannot silently recommend an offer", () => {
  assert.equal(getTreatmentGuideOptions("unknown", "acne"), undefined);
  assert.equal(getTreatmentGuideOptions("skin", "unknown"), undefined);
  assert.throws(() => getTreatmentGuidePrice({ id: "missing", priceRef: { categoryId: "medicina-estetica", name: "Unknown" } }, priceCategories), /Missing or ambiguous/);
  assert.throws(() => getTreatmentGuidePrice({ id: "ambiguous", priceRef: { categoryId: "medicina-capilar", name: "Consulta de medicina capilar" } }, priceCategories), /Missing or ambiguous/);
});
