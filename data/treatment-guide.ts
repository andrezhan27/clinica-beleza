import type { LocalizedText } from "./treatment-categories";
import type { PriceCategory, PriceItem } from "./pricing";
import type { Language } from "./translations";

export type TreatmentGuideOffer = {
  id: string;
  priceRef: { categoryId: string; name: string; detail?: string };
  treatmentSlug?: string;
  name?: LocalizedText;
};
export type TreatmentGuideGoal = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  treatmentIds: string[];
  programmeIds: string[];
};
export type TreatmentGuideArea = { id: string; name: LocalizedText; description: LocalizedText; goals: TreatmentGuideGoal[] };
export const UNSURE_CONCERN_ID = "not-sure";
export const ASSESSMENT_OFFER_ID = "assessment";
const text = (pt: string, en: string): LocalizedText => ({ pt, en });
const offer = (id: string, categoryId: string, name: string, detail?: string, treatmentSlug?: string, displayName?: LocalizedText): TreatmentGuideOffer => ({ id, priceRef: { categoryId, name, detail }, treatmentSlug, name: displayName });
const goal = (id: string, pt: string, en: string, descriptionPt: string, descriptionEn: string, treatmentIds: string[], programmeIds: string[] = []): TreatmentGuideGoal => ({ id, name: text(pt, en), description: text(descriptionPt, descriptionEn), treatmentIds, programmeIds });

// The clinic's Portuguese funnel brief defines the concern-to-offer mappings.
// Prices are resolved from the same catalogue used by /pricing, including variants.
const offers: TreatmentGuideOffer[] = [
  offer("assessment", "medicina-estetica", "Consulta de avaliação", undefined, "consulta-de-avaliacao"),
  offer("botox-one", "medicina-estetica", "Botox · 1 zona", undefined, "toxina-botulinica"),
  offer("botox-azzalure", "medicina-estetica", "Botox · 3 zonas", "Azzalure", "toxina-botulinica"),
  offer("botox-relfydess", "medicina-estetica", "Botox · 3 zonas", "Relfydess", "toxina-botulinica"),
  offer("botox-underarms", "medicina-estetica", "Botox · Axilas", undefined, "toxina-botulinica"),
  offer("botox-hands", "medicina-estetica", "Botox · Mãos", undefined, "toxina-botulinica"),
  offer("botox-bruxism", "medicina-estetica", "Botox · Bruxismo", undefined, "toxina-botulinica"),
  offer("botox-migraines", "medicina-estetica", "Botox · Enxaquecas", undefined, "toxina-botulinica"),
  offer("filler-face", "medicina-estetica", "Preenchimento facial", undefined, "fillers"),
  offer("filler-lips", "medicina-estetica", "Preenchimento de lábios", undefined, "fillers"),
  offer("filler-eyes", "medicina-estetica", "Preenchimento de olheiras", undefined, "fillers"),
  offer("filler-nose", "medicina-estetica", "Preenchimento de nariz", undefined, "fillers"),
  offer("radiesse", "medicina-estetica", "Bioestimuladores · Radiesse", undefined, "bioestimuladores"),
  offer("sculptra", "medicina-estetica", "Bioestimuladores · Sculptra", undefined, "bioestimuladores"),
  offer("threads-mono", "medicina-estetica", "Fios tensores · Mono", undefined, "fios-tensores"),
  offer("threads-traction", "medicina-estetica", "Fios tensores · Tração", undefined, "fios-tensores"),
  offer("skin-booster", "medicina-estetica", "Skin Booster"),
  offer("profhilo", "medicina-estetica", "Profhilo", undefined, "profhilo"),
  offer("nctf-mesotherapy", "medicina-estetica", "NCTF · Mesoterapia", undefined, "mesoterapia"),
  offer("nctf-nanosoft", "medicina-estetica", "NCTF · Nanosoft"),
  offer("ultracol", "medicina-estetica", "Ultracol"),
  offer("ultracol-face", "medicina-estetica", "Ultracol · Full Face"),
  offer("exosomes", "medicina-estetica", "Exossomas"),
  offer("exosomes-six", "medicina-estetica", "Exossomas · Pack de 6 tratamentos"),
  offer("photo", "medicina-estetica", "Foto-biodinâmica", undefined, "terapia-fotobiodinamica"),
  offer("medical-peel", "medicina-estetica", "Peeling", undefined, "peeling-quimico", text("Peeling médico", "Medical peel")),
  offer("peel-microneedling", "medicina-estetica", "Peeling com microneedling"),
  offer("hifu-face", "estetica-facial", "HIFU · Rosto completo", undefined, "hifu-rosto"),
  offer("hifu-eyes", "estetica-facial", "HIFU · Maçãs do rosto e contorno dos olhos", undefined, "hifu-rosto"),
  offer("hifu-neck", "estetica-facial", "HIFU · Pescoço", undefined, "hifu-rosto"),
  offer("microblading", "estetica-facial", "Microblading"),
  offer("drainage-face", "estetica-facial", "Drenagem facial", "25 minutos", "drenagem-facial"),
  offer("stellar-peel", "estetica-facial", "Peeling das Estrelas"),
  offer("microneedling", "estetica-corporal", "Microneedling corporal", undefined, "microneedling", text("Microneedling", "Microneedling")),
  offer("cavitation", "estetica-corporal", "Cavitação"),
  offer("hifu-abdomen", "estetica-corporal", "HIFU · Abdómen", undefined, "hifu-corpo"),
  offer("hifu-arms", "estetica-corporal", "HIFU · Braços", undefined, "hifu-corpo"),
  offer("hifu-buttocks", "estetica-corporal", "HIFU · Glúteos", undefined, "hifu-corpo"),
  offer("rf-body", "estetica-corporal", "Radiofrequência corporal", undefined, "radiofrequencia-corpo"),
  offer("massage-cellulite", "estetica-corporal", "Massagem anticelulite / redutora", undefined, "massagens-redutoras-modeladoras-anticeluliticas"),
  offer("drainage-40", "estetica-corporal", "Drenagem linfática manual", "40 minutos", "drenagem-linfatica"),
  offer("drainage-60", "estetica-corporal", "Drenagem linfática manual", "60 minutos", "drenagem-linfatica"),
  offer("exfoliation", "estetica-corporal", "Esfoliação corporal", undefined, "esfoliacao-corporal"),
  offer("massage-relax", "estetica-corporal", "Massagem relaxante completa", undefined, "massagem-relaxante"),
  offer("massage-hawaiian", "estetica-corporal", "Massagem havaiana"),
  offer("massage-sport", "estetica-corporal", "Massagem desportiva / recuperação", undefined, "massagem-desportiva"),
  offer("massage-therapeutic", "estetica-corporal", "Massagem terapêutica"),
  offer("hair-first", "medicina-capilar", "Consulta de medicina capilar", "Primeira consulta", "consulta-avaliacao-medicina-capilar"),
  offer("hair-followup", "medicina-capilar", "Consulta de medicina capilar", "Consultas seguintes", "consulta-avaliacao-medicina-capilar"),
  offer("dutasteride", "medicina-capilar", "Mesoterapia com dutasterida", undefined, "mesoterapia-capilar"),
  offer("dutasteride-vitamins", "medicina-capilar", "Mesoterapia com dutasterida e vitaminas", undefined, "mesoterapia-capilar"),
  offer("dutasteride-three", "medicina-capilar", "Mesoterapia com dutasterida", "3 sessões", "mesoterapia-capilar"),
  offer("mesotherapy-eight", "medicina-capilar", "Mesoterapia capilar", "8 sessões", "mesoterapia-capilar"),
  offer("prp", "medicina-capilar", "PRP", undefined, "prp-capilar"),
  offer("prp-three", "medicina-capilar", "PRP", "3 sessões", "prp-capilar"),
  offer("genetic-test", "medicina-capilar", "Teste genético"),
  offer("glow-renova", "packs-programas", "Glow Renova"),
  offer("collagen-pro", "packs-programas", "Colagénio Pro"),
  offer("vitamin-c", "packs-programas", "Glow Vitamina C"),
  offer("ice-lifting", "packs-programas", "Ice Lifting"),
  offer("slim-detox", "packs-programas", "Slim Detox"),
  offer("massage-five", "packs-programas", "Pack de massagens anticelulite / redutoras"),
  offer("endermotherapy", "packs-programas", "Pack de endermoterapia, radiofrequência e pressoterapia"),
  offer("silhouette-total", "packs-programas", "Silhueta Total"),
  offer("body-sculpt", "packs-programas", "Body Sculpt"),
  offer("rf-massage", "packs-programas", "Pack de radiofrequência e massagens modeladoras"),
  offer("deep-drainage", "packs-programas", "Drenagem Profunda"),
  offer("massage-four", "packs-programas", "Pack de 4 massagens"),
  offer("lifting-rf", "packs-programas", "Lifting RF"),
  offer("premium-eyes", "packs-programas", "Olhar Premium"),
  offer("glow-face", "programas-medicos", "Glow Face"),
  offer("natural-face", "programas-medicos", "Natural Face"),
  offer("new-eyes", "programas-medicos", "New Eyes"),
  offer("shining-face", "programas-medicos", "Shining Face"),
  offer("clean-face", "programas-medicos", "Clean Face"),
  offer("perfect-lips", "programas-medicos", "Perfect Lips"),
  offer("perfect-smile", "programas-medicos", "Perfect Smile"),
  offer("be-young", "programas-medicos", "Be Young"),
  offer("co2-face", "programas-medicos", "CO₂ · Rosto completo"),
  offer("morpheus-face", "programas-medicos", "Morpheus · Rosto"),
  offer("morpheus-neck", "programas-medicos", "Morpheus · Pescoço"),
  offer("morpheus-eyes", "programas-medicos", "Morpheus · Periocular"),
  offer("morpheus-face-three", "programas-medicos", "Morpheus · Rosto", "3 sessões"),
  offer("morpheus-neck-three", "programas-medicos", "Morpheus · Pescoço", "3 sessões"),
  offer("morpheus-eyes-three", "programas-medicos", "Morpheus · Periocular", "3 sessões"),
  offer("morpheus-body-three", "programas-medicos", "Morpheus · Corpo 750", "Pack de 3 sessões"),
  offer("surgery-consultation", "cirurgia-plastica", "Consulta de cirurgia plástica"),
  offer("nutrition-first", "nutricao", "Primeira consulta de nutrição clínica funcional", undefined, "nutricao-funcional"),
  offer("nutrition-followup", "nutricao", "Consultas seguintes de nutrição", undefined, "nutricao-funcional"),
];
export const treatmentGuideOffers: Record<string, TreatmentGuideOffer> = Object.fromEntries(offers.map((entry) => [entry.id, entry]));

export const treatmentGuideAreas: TreatmentGuideArea[] = [
  {
    id: "face", name: text("Rosto", "Face"), description: text("Linhas, volume, lábios, olhar", "Lines, volume, lips, eye area"),
    goals: [
      goal("expression-lines", "Linhas de expressão", "Expression lines", "Testa, entre sobrancelhas, pés de galinha", "Forehead, between the brows, crow’s feet", ["botox-one", "botox-azzalure", "botox-relfydess"], ["glow-face", "natural-face", "new-eyes"]),
      goal("volume-firmness", "Perda de volume e flacidez", "Volume loss and sagging", "Rosto mais vazio ou contorno menos definido", "Loss of facial volume or definition", ["filler-face", "radiesse", "sculptra", "threads-mono", "threads-traction", "hifu-face"], ["shining-face", "clean-face"]),
      goal("lips", "Lábios", "Lips", "Hidratação, contorno ou volume", "Hydration, contour or volume", ["filler-lips"], ["perfect-lips", "natural-face", "perfect-smile"]),
      goal("tired-eyes", "Olheiras e olhar cansado", "Dark circles and tired eyes", "Sombras, bolsas ou pálpebra descaída", "Shadows, puffiness or drooping eyelids", ["filler-eyes", "nctf-nanosoft", "hifu-eyes", "morpheus-eyes"], ["morpheus-eyes-three", "new-eyes", "premium-eyes"]),
      goal("neck-chin", "Pescoço e papada", "Neck and double chin", "Flacidez e linhas no pescoço", "Sagging and neck lines", ["hifu-neck", "morpheus-neck"], ["morpheus-neck-three"]),
      goal("nose", "Nariz", "Nose", "Corrigir o perfil sem cirurgia", "Explore profile refinement without surgery", ["filler-nose", "surgery-consultation"]),
      goal("bruxism", "Bruxismo e maxilar", "Bruxism and jaw", "Ranger os dentes, músculo tenso", "Teeth grinding and jaw tension", ["botox-bruxism"]),
      goal("eyebrows", "Sobrancelhas", "Eyebrows", "Falhas ou falta de definição", "Gaps or lack of definition", ["microblading"]),
      goal("facial-puffiness", "Inchaço facial", "Facial puffiness", "Acordar com o rosto inchado", "Waking up with a puffy face", ["drainage-face"]),
    ],
  },
  {
    id: "skin", name: text("Pele", "Skin"), description: text("Manchas, acne, textura, luminosidade", "Pigmentation, acne, texture, radiance"),
    goals: [
      goal("acne", "Acne e oleosidade", "Acne and oily skin", "Borbulhas ativas e poros obstruídos", "Active breakouts and blocked pores", ["photo", "medical-peel"], ["glow-renova"]),
      goal("pigmentation", "Manchas", "Pigmentation", "Sol, idade ou marcas de acne", "Sun, age or acne marks", ["photo", "medical-peel", "peel-microneedling", "co2-face", "stellar-peel"]),
      goal("redness", "Rosácea e vermelhidão", "Rosacea and redness", "Pele sensível e reativa", "Sensitive, reactive skin", ["photo"]),
      goal("texture", "Cicatrizes, poros e textura", "Scars, pores and texture", "Marcas de acne, pele irregular", "Acne marks and uneven skin", ["microneedling", "peel-microneedling", "co2-face", "morpheus-face"], ["collagen-pro", "morpheus-face-three"]),
      goal("hydration", "Pele baça ou desidratada", "Dull or dehydrated skin", "Falta de brilho e hidratação", "Lack of radiance and hydration", ["skin-booster", "profhilo", "nctf-mesotherapy", "ultracol", "ice-lifting"], ["vitamin-c", "glow-face"]),
    ],
  },
  {
    id: "body", name: text("Corpo", "Body"), description: text("Gordura localizada, celulite, firmeza", "Localised fat, cellulite, firmness"),
    goals: [
      goal("localised-fat", "Gordura localizada", "Localised fat", "Abdómen, flancos, coxas", "Abdomen, flanks, thighs", ["cavitation", "hifu-abdomen"], ["slim-detox", "morpheus-body-three"]),
      goal("cellulite", "Celulite", "Cellulite", "Aspeto casca de laranja", "Dimpled, orange-peel appearance", ["massage-cellulite"], ["massage-five", "endermotherapy", "silhouette-total"]),
      goal("body-firmness", "Flacidez corporal", "Body sagging", "Braços, abdómen, glúteos", "Arms, abdomen, buttocks", ["hifu-arms", "hifu-abdomen", "hifu-buttocks", "rf-body"], ["body-sculpt", "rf-massage"]),
      goal("fluid-retention", "Retenção de líquidos", "Fluid retention", "Pernas pesadas, inchaço", "Heavy legs and swelling", ["drainage-40", "drainage-60"], ["deep-drainage", "slim-detox"]),
      goal("sweating", "Transpiração excessiva", "Excessive sweating", "Axilas ou mãos", "Underarms or hands", ["botox-underarms", "botox-hands"]),
      goal("body-skin", "Pele do corpo", "Body skin", "Renovar e suavizar", "Renewal and softness", ["exfoliation", "microneedling"]),
    ],
  },
  {
    id: "hair", name: text("Cabelo", "Hair"), description: text("Queda e densidade capilar", "Hair loss and density"),
    goals: [
      goal("hair-loss", "Queda de cabelo", "Hair loss", "Mais cabelo na almofada ou no duche", "More hair on your pillow or in the shower", ["hair-first", "hair-followup", "dutasteride", "dutasteride-vitamins", "prp"], ["dutasteride-three", "prp-three"]),
      goal("hair-density", "Cabelo mais fino ou com falhas", "Thinning or patchy hair", "Perda de densidade", "Loss of density", ["hair-first", "exosomes"], ["mesotherapy-eight", "prp-three", "exosomes-six"]),
      goal("hair-cause", "Perceber a causa", "Understand the cause", "Diagnóstico antes de tratar", "Diagnosis before treatment", ["hair-first", "genetic-test"]),
    ],
  },
  {
    id: "wellbeing", name: text("Bem-estar", "Wellbeing"), description: text("Relaxar, recuperar, nutrição", "Relaxation, recovery, nutrition"),
    goals: [
      goal("stress", "Stress e tensão", "Stress and tension", "Desligar e relaxar", "Switch off and relax", ["massage-relax", "massage-hawaiian"], ["massage-four"]),
      goal("muscle-pain", "Dores musculares", "Muscle aches", "Recuperação após treino ou esforço", "Recovery after exercise or exertion", ["massage-sport", "massage-therapeutic"], ["massage-four"]),
      goal("migraines", "Enxaquecas", "Migraines", "Dores de cabeça frequentes", "Frequent headaches", ["botox-migraines"]),
      goal("nutrition-weight", "Alimentação e peso", "Nutrition and weight", "Plano alimentar acompanhado", "A guided nutrition plan", ["nutrition-first", "nutrition-followup"]),
      goal("lightness", "Sensação de leveza", "A feeling of lightness", "Desinchar e renovar", "Less puffiness and a fresh start", ["drainage-60", "exfoliation"], ["deep-drainage"]),
    ],
  },
  {
    id: "rejuvenation", name: text("Rejuvenescimento", "Rejuvenation"), description: text("Prevenir e tratar sinais de idade", "Prevent and address signs of ageing"),
    goals: [
      goal("first-signs", "Prevenir os primeiros sinais", "Prevent early signs", "Manter a pele com bom aspeto", "Maintain healthy-looking skin", ["skin-booster", "botox-one", "profhilo"], ["glow-face", "lifting-rf"]),
      goal("collagen", "Firmeza e colagénio", "Firmness and collagen", "Pele mais firme e com melhor qualidade", "Firmer skin and improved skin quality", ["sculptra", "radiesse", "ultracol-face", "morpheus-face", "hifu-face"], ["morpheus-face-three"]),
      goal("lifting", "Efeito lifting sem cirurgia", "Lifting without surgery", "Rosto mais definido e descansado", "A more defined, rested appearance", ["threads-traction", "threads-mono"], ["be-young", "shining-face", "lifting-rf"]),
      goal("regeneration", "Regeneração da pele", "Skin regeneration", "Recuperar qualidade e luminosidade", "Restore skin quality and radiance", ["exosomes", "photo", "co2-face"], ["exosomes-six"]),
      goal("surgery-assessment", "Consulta de avaliação", "Assessment consultation", "Falar com o cirurgião plástico", "Speak with a plastic surgeon", ["surgery-consultation"]),
    ],
  },
];

export function getTreatmentGuidePrice(entry: TreatmentGuideOffer, categories: PriceCategory[]): PriceItem {
  const matches = categories.find((category) => category.id === entry.priceRef.categoryId)?.items.filter((price) =>
    price.name.pt === entry.priceRef.name && price.detail?.pt === entry.priceRef.detail,
  ) ?? [];
  // Some uniquely named entries have descriptive detail, which need not be repeated in the reference.
  const candidates = matches.length || entry.priceRef.detail !== undefined ? matches
    : categories.find((category) => category.id === entry.priceRef.categoryId)?.items.filter((price) => price.name.pt === entry.priceRef.name) ?? [];
  if (candidates.length !== 1) throw new Error(`Missing or ambiguous price for guide offer: ${entry.id}`);
  return candidates[0];
}

export function getTreatmentGuideOptions(areaId: string, goalId: string) {
  const area = treatmentGuideAreas.find((entry) => entry.id === areaId);
  if (!area) return undefined;
  if (goalId === UNSURE_CONCERN_ID) return { treatments: [treatmentGuideOffers[ASSESSMENT_OFFER_ID]], programmes: [] };
  const concern = area.goals.find((entry) => entry.id === goalId);
  if (!concern) return undefined;
  return { treatments: concern.treatmentIds.map((id) => treatmentGuideOffers[id]), programmes: concern.programmeIds.map((id) => treatmentGuideOffers[id]) };
}

export function formatTreatmentGuidePrice(price: PriceItem, language: Language) {
  if (price.price === null) return language === "pt" ? "Confirmar valor" : "Confirm price";
  const value = new Intl.NumberFormat(language === "pt" ? "pt-PT" : "en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(price.price);
  return `${price.from ? (language === "pt" ? "Desde " : "From ") : ""}${value}${price.unit === "ml" ? "/ml" : ""}`;
}

export function createTreatmentGuideMessage(language: Language, area: TreatmentGuideArea, concern: LocalizedText, entry: TreatmentGuideOffer, price: PriceItem, isProgramme: boolean) {
  const name = entry.name?.[language] ?? price.name[language];
  return language === "pt"
    ? `Olá! Vim através do site da Clínica Beleza.\n\nÁrea: ${area.name.pt}\nPreocupação: ${concern.pt}\n${isProgramme ? "Programa" : "Interesse"}: ${name}${price.detail ? ` · ${price.detail.pt}` : ""}\nPreço indicado: ${formatTreatmentGuidePrice(price, language)}${price.unit === "session" ? " por sessão" : price.unit === "pack" ? " (total do pack)" : ""}\n\nGostaria de receber orientação e agendar uma avaliação. Podem ajudar-me, por favor?`
    : `Hello! I found Clínica Beleza through the website.\n\nArea: ${area.name.en}\nConcern: ${concern.en}\n${isProgramme ? "Programme" : "Interest"}: ${name}${price.detail ? ` · ${price.detail.en}` : ""}\nListed price: ${formatTreatmentGuidePrice(price, language)}${price.unit === "session" ? " per session" : price.unit === "pack" ? " (full pack)" : ""}\n\nI would like guidance and to arrange an assessment. Could you help me, please?`;
}
