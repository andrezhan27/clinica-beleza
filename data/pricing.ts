import type { Language } from "./translations";

type Localized = Record<Language, string>;
export type PriceItem = {
  name: Localized;
  price: number | null;
  detail?: Localized;
  from?: boolean;
  unit?: "ml" | "session" | "pack";
  pending?: boolean;
};
export type PriceCategory = { id: string; name: Localized; description: Localized; items: PriceItem[] };
const text = (pt: string, en: string): Localized => ({ pt, en });
const item = (pt: string, en: string, price: number | null, options: Omit<PriceItem, "name" | "price"> = {}): PriceItem => ({ name: text(pt, en), price, ...options });

// Transcribed from the clinic's two 2026 price lists (231.HEIC and 232.HEIC).
// The later clinic funnel brief specifies 750 EUR for the 3-session Morpheus body pack.
// Slim Detox's cropped offer is omitted; its visible contents and price are retained.
export const priceCategories: PriceCategory[] = [
  {
    id: "medicina-estetica", name: text("Medicina estética", "Aesthetic medicine"),
    description: text("Consultas, tratamentos injetáveis e cuidados médicos do rosto.", "Consultations, injectable treatments and medical facial care."),
    items: [
      item("Consulta de avaliação", "Assessment consultation", 90),
      item("Botox · 1 zona", "Botox · 1 area", 140),
      item("Botox · 3 zonas", "Botox · 3 areas", 340, { detail: text("Azzalure", "Azzalure") }),
      item("Botox · 3 zonas", "Botox · 3 areas", 400, { detail: text("Relfydess", "Relfydess") }),
      item("Botox · Axilas", "Botox · Underarms", 500, { from: true }),
      item("Botox · Mãos", "Botox · Hands", 490, { from: true }),
      item("Botox · Bruxismo", "Botox · Bruxism", 430, { from: true }),
      item("Botox · Enxaquecas", "Botox · Migraines", 370),
      item("Fios tensores · Mono", "Thread lift · Mono", 250, { from: true }),
      item("Fios tensores · Tração", "Thread lift · Traction", 310, { from: true }),
      item("Skin Booster", "Skin Booster", 250),
      item("Preenchimento facial", "Facial filler", 325, { unit: "ml" }),
      item("Preenchimento de olheiras", "Under-eye filler", 350, { unit: "ml" }),
      item("Preenchimento de lábios", "Lip filler", 350, { unit: "ml" }),
      item("Preenchimento de nariz", "Nose filler", 350, { unit: "ml" }),
      item("Bioestimuladores · Radiesse", "Biostimulators · Radiesse", 500, { from: true }),
      item("Bioestimuladores · Sculptra", "Biostimulators · Sculptra", 580, { from: true }),
      item("Exossomas", "Exosomes", 370),
      item("Exossomas · Pack de 6 tratamentos", "Exosomes · 6-treatment pack", 1230, { unit: "pack" }),
      item("Ultracol", "Ultracol", 590, { unit: "ml" }),
      item("Ultracol · Full Face", "Ultracol · Full Face", 620, { from: true }),
      item("Peeling", "Peel", 240),
      item("Peeling com microneedling", "Peel with microneedling", 310),
      item("NCTF · Mesoterapia", "NCTF · Mesotherapy", 250),
      item("NCTF · Nanosoft", "NCTF · Nanosoft", 310),
      item("Profhilo", "Profhilo", 345),
      item("Foto-biodinâmica", "Photo-biodynamic treatment", 680, { detail: text("Rosácea, acne, manchas e rejuvenescimento", "Rosacea, acne, pigmentation and rejuvenation") }),
    ],
  },
  {
    id: "estetica-facial", name: text("Estética facial", "Facial aesthetics"),
    description: text("Cuidados de pele e tratamentos do rosto e pescoço.", "Skincare and treatments for the face and neck."),
    items: [
      item("Drenagem facial", "Facial drainage", 30, { detail: text("25 minutos", "25 minutes") }),
      item("HIFU · Maçãs do rosto e contorno dos olhos", "HIFU · Cheeks and eye contour", 120),
      item("HIFU · Pescoço", "HIFU · Neck", 120),
      item("HIFU · Rosto completo", "HIFU · Full face", 200),
      item("Microblading", "Microblading", 150, { detail: text("Inclui retoque", "Touch-up included") }),
      item("Peeling das Estrelas", "Peeling das Estrelas", 40),
      item("Peeling Glow Verão", "Summer Glow Peel", 40, { detail: text("1 peeling estelar facial", "1 stellar facial peel") }),
      item("Radiofrequência facial", "Facial radiofrequency", 40, { unit: "session" }),
    ],
  },
  {
    id: "estetica-corporal", name: text("Estética corporal", "Body aesthetics"),
    description: text("Massagens, drenagem e tratamentos corporais.", "Massage, drainage and body treatments."),
    items: [
      item("Cavitação", "Cavitation", 40),
      item("Drenagem linfática manual", "Manual lymphatic drainage", 50, { detail: text("40 minutos", "40 minutes") }),
      item("Drenagem linfática manual", "Manual lymphatic drainage", 79, { detail: text("60 minutos", "60 minutes") }),
      item("Esfoliação corporal", "Body exfoliation", 30),
      item("HIFU · Abdómen", "HIFU · Abdomen", 180),
      item("HIFU · Braços", "HIFU · Arms", 180),
      item("HIFU · Glúteos", "HIFU · Buttocks", 180),
      item("Massagem desportiva / recuperação", "Sports / recovery massage", 60),
      item("Massagem havaiana", "Hawaiian massage", 60),
      item("Massagem relaxante completa", "Full relaxing massage", 60, { detail: text("60 minutos", "60 minutes") }),
      item("Massagem terapêutica", "Therapeutic massage", 60),
      item("Massagem anticelulite / redutora", "Anti-cellulite / slimming massage", 45, { unit: "session" }),
      item("Microneedling corporal", "Body microneedling", 90, { unit: "session" }),
      item("Radiofrequência corporal", "Body radiofrequency", 40, { unit: "session" }),
    ],
  },
  {
    id: "medicina-capilar", name: text("Medicina capilar", "Hair medicine"),
    description: text("Consultas e tratamentos para o cabelo e couro cabeludo.", "Consultations and treatments for hair and scalp."),
    items: [
      item("Consulta de medicina capilar", "Hair medicine consultation", 100, { detail: text("Primeira consulta", "First consultation") }),
      item("Consulta de medicina capilar", "Hair medicine consultation", 80, { detail: text("Consultas seguintes", "Follow-up consultations") }),
      item("Mesoterapia com dutasterida", "Mesotherapy with dutasteride", 250, { unit: "session" }),
      item("Mesoterapia com dutasterida e vitaminas", "Mesotherapy with dutasteride and vitamins", 310),
      item("Mesoterapia com dutasterida", "Mesotherapy with dutasteride", 620, { detail: text("3 sessões", "3 sessions"), unit: "pack" }),
      item("Mesoterapia capilar", "Hair mesotherapy", 860, { detail: text("8 sessões", "8 sessions"), unit: "pack" }),
      item("PRP", "PRP", 350, { unit: "session" }),
      item("PRP", "PRP", 890, { detail: text("3 sessões", "3 sessions"), unit: "pack" }),
      item("Teste genético", "Genetic test", 350),
    ],
  },
  {
    id: "packs-programas", name: text("Packs e programas", "Packs and programmes"),
    description: text("Cuidados faciais e corporais combinados. O preço indicado é o total do pack ou programa.", "Combined facial and body care. Prices shown are for the complete pack or programme."),
    items: [
      item("Pack de endermoterapia, radiofrequência e pressoterapia", "Endermotherapy, radiofrequency and pressotherapy pack", 259, { detail: text("4 endermoterapias vibratórias + 4 radiofrequências + 4 pressoterapias", "4 vibratory endermotherapy + 4 radiofrequency + 4 pressotherapy treatments"), unit: "pack" }),
      item("Pack de 4 massagens", "4-massage pack", 200, { unit: "pack" }),
      item("Pack de radiofrequência e massagens modeladoras", "Radiofrequency and sculpting massage pack", 199, { detail: text("4 radiofrequências + 4 massagens modeladoras", "4 radiofrequency treatments + 4 sculpting massages"), unit: "pack" }),
      item("Pack de massagens anticelulite / redutoras", "Anti-cellulite / slimming massage pack", 150, { detail: text("5 tratamentos", "5 treatments"), unit: "pack" }),
      item("Glow Renova", "Glow Renova", 69, { detail: text("1 limpeza de pele + 1 microneedling", "1 skin cleansing + 1 microneedling treatment"), unit: "pack" }),
      item("Body Sculpt", "Body Sculpt", 199, { detail: text("4 sessões de radiofrequência + massagem modeladora", "4 radiofrequency sessions + sculpting massage"), unit: "pack" }),
      item("Colagénio Pro", "Colagénio Pro", 199, { detail: text("4 sessões de microneedling", "4 microneedling sessions"), unit: "pack" }),
      item("Drenagem Profunda", "Drenagem Profunda", 229, { detail: text("4 sessões de drenagem linfática manual", "4 manual lymphatic drainage sessions"), unit: "pack" }),
      item("Glow Vitamina C", "Glow Vitamina C", 169, { detail: text("4 sessões de radiofrequência + tratamento de vitamina C", "4 radiofrequency sessions + vitamin C treatment"), unit: "pack" }),
      item("Lifting RF", "Lifting RF", 120, { detail: text("4 tratamentos de radiofrequência", "4 radiofrequency treatments"), unit: "pack" }),
      item("Olhar Premium", "Olhar Premium", 389, { detail: text("4 tratamentos de olhos", "4 eye treatments"), unit: "pack" }),
      item("Silhueta Total", "Silhueta Total", 259, { detail: text("4 endermologias + 4 radiofrequências + 4 pressoterapias · 12 sessões", "4 endermology + 4 radiofrequency + 4 pressotherapy treatments · 12 sessions"), unit: "pack" }),
      item("Slim Detox", "Slim Detox", 159, { detail: text("4 sessões de cavitação + 4 sessões de pressoterapia", "4 cavitation sessions + 4 pressotherapy sessions"), unit: "pack" }),
      item("Ice Lifting", "Ice Lifting", 89, { detail: text("1 radiofrequência + hidrodermoabrasão + crioterapia", "1 radiofrequency treatment + hydrodermabrasion + cryotherapy") }),
    ],
  },
  {
    id: "programas-medicos", name: text("Programas de medicina estética", "Aesthetic medicine programmes"),
    description: text("Protocolos combinados, laser CO₂ e Morpheus. Nos packs, o valor corresponde ao conjunto de sessões.", "Combined protocols, CO₂ laser and Morpheus. Pack prices cover all listed sessions."),
    items: [
      item("Glow Face", "Glow Face", 700, { detail: text("Skin Booster + Botox", "Skin Booster + Botox") }),
      item("Perfect Lips", "Perfect Lips", 700, { detail: text("Lábios + Skin Booster", "Lips + Skin Booster") }),
      item("Shining Face", "Shining Face", 800, { detail: text("Bioestimulador + Botox", "Biostimulator + Botox") }),
      item("Natural Face", "Natural Face", 700, { detail: text("Lábios + Botox", "Lips + Botox") }),
      item("Perfect Smile", "Perfect Smile", 700, { detail: text("Lábios + Nanosoft", "Lips + Nanosoft") }),
      item("Clean Face", "Clean Face", 700, { detail: text("Peeling + bioestimulador", "Peel + biostimulator") }),
      item("New Eyes", "New Eyes", 700, { detail: text("Botox + Nanosoft periocular", "Botox + periocular Nanosoft") }),
      item("Be Young", "Be Young", 900, { detail: text("HIFU + bioestimulador", "HIFU + biostimulator") }),
      item("CO₂ · Rosto completo", "CO₂ · Full face", 350),
      item("Morpheus · Rosto", "Morpheus · Face", 600),
      item("Morpheus · Pescoço", "Morpheus · Neck", 550),
      item("Morpheus · Periocular", "Morpheus · Eye area", 400),
      item("Morpheus · Rosto", "Morpheus · Face", 1600, { detail: text("3 sessões", "3 sessions"), unit: "pack" }),
      item("Morpheus · Pescoço", "Morpheus · Neck", 1500, { detail: text("3 sessões", "3 sessions"), unit: "pack" }),
      item("Morpheus · Periocular", "Morpheus · Eye area", 1000, { detail: text("3 sessões", "3 sessions"), unit: "pack" }),
      item("Morpheus · Corpo 750", "Morpheus · Body 750", 750, { detail: text("Pack de 3 sessões", "3-session pack"), unit: "pack" }),
    ],
  },
  {
    id: "cirurgia-plastica", name: text("Cirurgia plástica", "Plastic surgery"),
    description: text("Consulta e orçamento individual após avaliação.", "Consultation and an individual quote following assessment."),
    items: [item("Consulta de cirurgia plástica", "Plastic surgery consultation", 90), item("Cirurgias", "Surgery", null)],
  },
  {
    id: "nutricao", name: text("Nutrição", "Nutrition"),
    description: text("Acompanhamento em nutrição clínica funcional.", "Functional clinical nutrition consultations."),
    items: [item("Primeira consulta de nutrição clínica funcional", "First functional clinical nutrition consultation", 80), item("Consultas seguintes de nutrição", "Nutrition follow-up consultations", 60)],
  },
];

export function normalizePriceSearch(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

export function filterPriceCategories(categoryId: string, query: string) {
  const search = normalizePriceSearch(query);
  return priceCategories
    .filter((category) => categoryId === "all" || category.id === categoryId)
    .map((category) => ({ ...category, items: category.items.filter((entry) => normalizePriceSearch([
      ...Object.values(category.name), ...Object.values(entry.name), ...Object.values(entry.detail ?? {}),
    ].join(" ")).includes(search)) }))
    .filter((category) => category.items.length > 0);
}
