import assert from "node:assert/strict";
import test from "node:test";
import { priceCategories } from "../data/pricing.ts";
import { createTreatmentCatalogue, filterTreatmentCatalogue, formatCataloguePrice } from "../data/treatment-catalogue.ts";

const catalogue = createTreatmentCatalogue(priceCategories, [], []);
const entries = catalogue.flatMap(({ items }) => items);
const find = (category, slug) => entries.find((entry) => entry.category === category && entry.slug === slug);

test("grouping keeps every original price exactly once and gives every entry a unique detail route", () => {
  const original = priceCategories.flatMap(({ items }) => items);
  const grouped = entries.flatMap(({ variants }) => variants);
  assert.equal(grouped.length, original.length);
  for (const price of original) assert.equal(grouped.filter((variant) => variant === price).length, 1, price.name.pt);
  assert.equal(new Set(entries.map(({ href }) => href)).size, entries.length);
  for (const entry of entries) assert.match(entry.href, /^\/tratamentos\/[^/]+\/[^/]+$/);
});

test("equivalent cosmetic Botox options group together while distinct indications remain separate", () => {
  const cosmetic = find("medicina-estetica", "toxina-botulinica");
  assert.deepEqual(cosmetic.variants.map(({ price }) => price), [140, 340, 400]);
  assert.equal(find("medicina-estetica", "botox-bruxismo").variants[0].price, 430);
  assert.equal(find("medicina-estetica", "botox-axilas").variants[0].price, 500);
  assert.equal(find("medicina-estetica", "fillers").variants.length, 4);
});

test("session, quantity and pack pricing remains explicit in both languages", () => {
  const prp = find("medicina-capilar", "prp-capilar");
  assert.equal(prp.variants.length, 2);
  assert.match(formatCataloguePrice(prp.variants[0], "en"), /350.*\/session/);
  assert.match(formatCataloguePrice(prp.variants[1], "en"), /890.*full pack/);
  assert.match(formatCataloguePrice(find("medicina-estetica", "fillers").variants[0], "pt"), /325.*\/ml/);
  assert.match(formatCataloguePrice(find("medicina-estetica", "botox-axilas").variants[0], "pt"), /^Desde .*500/);
  assert.equal(find("programas-medicos", "morpheus").variants.find(({ name }) => name.pt === "Morpheus · Corpo 750").price, 750);
  assert.equal(formatCataloguePrice(find("cirurgia-plastica", "cirurgias").variants[0], "en"), "After assessment");
});

test("search finds brands inside grouped options and works across languages and accents", () => {
  assert.equal(filterTreatmentCatalogue(catalogue, "all", "Relfydess")[0].items[0].slug, "toxina-botulinica");
  assert.equal(filterTreatmentCatalogue(catalogue, "medicina-capilar", "hair prp")[0].items[0].slug, "prp-capilar");
  assert.equal(filterTreatmentCatalogue(catalogue, "all", "bioestimulacao inexistente").length, 0);
  assert.ok(filterTreatmentCatalogue(catalogue, "all", "nutricao").length);
  assert.equal(filterTreatmentCatalogue(catalogue, "unknown", "").length, 0);
});

test("existing unpriced treatments and their descriptions remain accessible without assigning pack prices", () => {
  const treatment = { slug: "limpeza-de-pele", category: "servicos", name: { pt: "Limpeza de Pele", en: "Skin Cleansing" }, shortDescription: { pt: "Remover impurezas da pele.", en: "Remove skin impurities." }, searchTerms: ["poros"] };
  const merged = createTreatmentCatalogue(priceCategories, [treatment], [{ slug: "servicos", name: { pt: "Serviços", en: "Services" }, shortDescription: { pt: "Cuidados complementares", en: "Complementary care" } }]);
  const result = filterTreatmentCatalogue(merged, "all", "poros").flatMap(({ items }) => items);
  assert.equal(result.length, 1);
  assert.equal(result[0].treatment, treatment);
  assert.equal(result[0].variants.length, 0);
  assert.equal(result[0].href, "/tratamentos/servicos/limpeza-de-pele");
});
