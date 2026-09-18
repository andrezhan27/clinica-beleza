import type { LocalizedText } from "./treatment-categories";
import { treatmentCategories } from "./treatment-categories";

export type TreatmentFAQ = { question: LocalizedText; answer: LocalizedText };

export type Treatment = {
  id: string;
  slug: string;
  category: string;
  name: LocalizedText;
  eyebrow?: LocalizedText;
  shortDescription: LocalizedText;
  introduction?: LocalizedText;
  benefits?: { pt: string[]; en: string[] };
  indications?: { pt: string[]; en: string[] };
  process?: LocalizedText;
  duration?: string;
  sessions?: string;
  recovery?: LocalizedText;
  results?: LocalizedText;
  faq?: TreatmentFAQ[];
  coverImage: string;
  gallery: string[];
  featured?: boolean;
  relatedTreatments?: string[];
  searchTerms?: string[];
};

type Seed = {
  slug: string;
  category: string;
  pt: string;
  en: string;
  descriptionPt: string;
  descriptionEn: string;
  featured?: boolean;
  related?: string[];
  searchTerms?: string[];
  galleryCount?: number;
};

const makeTreatment = (seed: Seed): Treatment => {
  const root = `/images/treatments/${seed.category}/${seed.slug}`;
  return {
    id: seed.slug,
    slug: seed.slug,
    category: seed.category,
    name: { pt: seed.pt, en: seed.en },
    shortDescription: { pt: seed.descriptionPt, en: seed.descriptionEn },
    introduction: {
      pt: `${seed.descriptionPt} Na Clínica Beleza, cada protocolo começa com uma avaliação cuidada para respeitar as suas características, prioridades e ritmo.`,
      en: `${seed.descriptionEn} At Clínica Beleza, every protocol begins with a careful assessment to respect your individual features, priorities and pace.`,
    },
    benefits: {
      pt: ["Plano adaptado às necessidades individuais", "Abordagem cuidada e acompanhamento próximo", "Resultados progressivos, naturais e responsáveis"],
      en: ["A plan adapted to individual needs", "Careful approach and close follow-up", "Progressive, natural and responsible results"],
    },
    indications: {
      pt: ["Pessoas que procuram uma abordagem personalizada", "Quem valoriza resultados equilibrados e acompanhamento especializado", "Casos considerados adequados após avaliação"],
      en: ["People looking for a personalised approach", "Those who value balanced results and specialist follow-up", "Cases considered suitable after assessment"],
    },
    process: {
      pt: "Começamos por compreender as suas expectativas e história clínica. Depois da avaliação, a equipa explica as opções adequadas, o protocolo, os cuidados necessários e o acompanhamento recomendado.",
      en: "We begin by understanding your expectations and clinical history. After assessment, the team explains the suitable options, protocol, required care and recommended follow-up.",
    },
    duration: "30–60 min",
    sessions: "Plano individual",
    recovery: { pt: "Varia consoante o protocolo", en: "Varies by protocol" },
    results: {
      pt: "A evolução varia de pessoa para pessoa. Os resultados esperados e respetivos prazos são explicados de forma responsável durante a avaliação.",
      en: "Progress varies from person to person. Expected outcomes and timing are explained responsibly during the assessment.",
    },
    faq: [
      { question: { pt: "Este tratamento é indicado para mim?", en: "Is this treatment right for me?" }, answer: { pt: "A indicação depende dos seus objetivos, condição de saúde e avaliação individual. A consulta permite definir a opção mais adequada e segura.", en: "Suitability depends on your goals, health and individual assessment. A consultation helps define the safest and most appropriate option." } },
      { question: { pt: "Quantas sessões são necessárias?", en: "How many sessions will I need?" }, answer: { pt: "O número de sessões depende do ponto de partida, da resposta individual e do plano recomendado pela equipa.", en: "The number of sessions depends on your starting point, individual response and the plan recommended by the team." } },
      { question: { pt: "Quando poderei observar resultados?", en: "When will I see results?" }, answer: { pt: "Cada tratamento tem uma evolução própria. Na avaliação explicamos quando poderá esperar alterações e como acompanhar os resultados.", en: "Each treatment progresses differently. During your assessment we explain when changes may appear and how results are monitored." } },
    ],
    coverImage: `${root}/gallery-01.webp`,
    gallery: Array.from({ length: seed.galleryCount ?? 2 }, (_, index) => `${root}/gallery-${String(index + 1).padStart(2, "0")}.webp`),
    featured: seed.featured,
    relatedTreatments: seed.related,
    searchTerms: seed.searchTerms,
  };
};

const seeds: Seed[] = [
  { slug: "consulta-de-avaliacao", category: "medicina-estetica", pt: "Consulta de Avaliação", en: "Aesthetic Assessment", descriptionPt: "Uma consulta dedicada a compreender os seus objetivos e construir um plano clínico personalizado.", descriptionEn: "A dedicated consultation to understand your goals and build a personalised clinical plan.", related: ["toxina-botulinica", "bioestimuladores", "fillers"], galleryCount: 4 },
  { slug: "toxina-botulinica", category: "medicina-estetica", pt: "Toxina Botulínica", en: "Botulinum Toxin", descriptionPt: "Uma abordagem médica para suavizar linhas de expressão, preservando a naturalidade do rosto.", descriptionEn: "A medical approach to soften expression lines while preserving a natural appearance.", featured: true, related: ["bioestimuladores", "fillers", "profhilo"], searchTerms: ["botox"] },
  { slug: "fios-tensores", category: "medicina-estetica", pt: "Fios Tensores", en: "Thread Lift", descriptionPt: "Fios absorvíveis para suporte dos tecidos e melhoria progressiva dos contornos faciais.", descriptionEn: "Absorbable threads designed to support tissue and progressively refine facial contours.", related: ["bioestimuladores", "fillers", "hifu-rosto"] },
  { slug: "bioestimuladores", category: "medicina-estetica", pt: "Bioestimuladores", en: "Biostimulators", descriptionPt: "Estimulação gradual de colagénio para melhorar firmeza, textura e qualidade da pele.", descriptionEn: "Gradual collagen stimulation to improve skin firmness, texture and quality.", featured: true, related: ["toxina-botulinica", "profhilo", "microneedling"], galleryCount: 3 },
  { slug: "fillers", category: "medicina-estetica", pt: "Fillers", en: "Dermal Fillers", descriptionPt: "Preenchimento médico para harmonizar volumes e contornos de forma subtil e individualizada.", descriptionEn: "Medical filler treatment to harmonise volume and contours in a subtle, individual way.", related: ["toxina-botulinica", "bioestimuladores", "profhilo"], searchTerms: ["preenchimento", "ácido hialurónico"] },
  { slug: "peeling-quimico", category: "medicina-estetica", pt: "Peeling Químico", en: "Chemical Peel", descriptionPt: "Renovação controlada da pele para melhorar textura, luminosidade e uniformidade.", descriptionEn: "Controlled skin renewal to improve texture, radiance and evenness.", related: ["microneedling", "mesoterapia", "terapia-fotobiodinamica"] },
  { slug: "plasma-rico-em-plaquetas", category: "medicina-estetica", pt: "Plasma Rico em Plaquetas", en: "Platelet-Rich Plasma", descriptionPt: "Protocolo autólogo que utiliza componentes do próprio sangue para apoiar a regeneração da pele.", descriptionEn: "An autologous protocol using components from your own blood to support skin regeneration.", related: ["mesoterapia", "microneedling", "profhilo"], searchTerms: ["prp"] },
  { slug: "mesoterapia", category: "medicina-estetica", pt: "Mesoterapia", en: "Mesotherapy", descriptionPt: "Microinjeções de ativos selecionados para responder a necessidades específicas da pele.", descriptionEn: "Microinjections of selected actives to address specific skin needs.", related: ["profhilo", "microneedling", "plasma-rico-em-plaquetas"] },
  { slug: "terapia-fotobiodinamica", category: "medicina-estetica", pt: "Terapia Fotobiodinâmica", en: "Photobiomodulation Therapy", descriptionPt: "Utilização controlada de luz para apoiar processos naturais de recuperação e equilíbrio cutâneo.", descriptionEn: "Controlled use of light to support natural skin recovery and balance.", related: ["peeling-quimico", "microneedling", "mesoterapia"] },
  { slug: "profhilo", category: "medicina-estetica", pt: "Profhilo", en: "Profhilo", descriptionPt: "Bioremodelação injetável orientada para hidratação profunda, elasticidade e qualidade da pele.", descriptionEn: "Injectable bioremodelling focused on deep hydration, elasticity and skin quality.", related: ["bioestimuladores", "fillers", "mesoterapia"] },
  { slug: "microneedling", category: "medicina-estetica", pt: "Microneedling", en: "Microneedling", descriptionPt: "Microperfuração controlada para estimular renovação e melhorar a aparência da pele.", descriptionEn: "Controlled micro-needling to stimulate renewal and improve the appearance of the skin.", related: ["peeling-quimico", "mesoterapia", "plasma-rico-em-plaquetas"] },

  { slug: "consulta-avaliacao-medicina-capilar", category: "medicina-capilar", pt: "Consulta de Avaliação Medicina Capilar", en: "Hair Medicine Assessment", descriptionPt: "Avaliação clínica do cabelo e couro cabeludo para identificar causas e orientar o plano de cuidado.", descriptionEn: "Clinical assessment of hair and scalp to identify causes and guide a care plan.", related: ["tratamentos-capilares", "prp-capilar", "mesoterapia-capilar"] },
  { slug: "tratamentos-capilares", category: "medicina-capilar", pt: "Tratamentos Capilares", en: "Hair Treatments", descriptionPt: "Planos combinados e ajustados à causa, condição do couro cabeludo e evolução individual.", descriptionEn: "Combined plans adapted to the cause, scalp condition and individual progress.", related: ["prp-capilar", "mesoterapia-capilar", "consulta-avaliacao-medicina-capilar"] },
  { slug: "prp-capilar", category: "medicina-capilar", pt: "Terapia Capilar com Plasma Rico em Plaquetas (PRP)", en: "Platelet-Rich Plasma Hair Therapy (PRP)", descriptionPt: "Aplicação de plasma autólogo no couro cabeludo para apoiar a vitalidade e o ciclo capilar.", descriptionEn: "Application of autologous plasma to the scalp to support vitality and the hair cycle.", featured: true, related: ["mesoterapia-capilar", "tratamentos-capilares", "consulta-avaliacao-medicina-capilar"], searchTerms: ["prp"] },
  { slug: "mesoterapia-capilar", category: "medicina-capilar", pt: "Mesoterapia Capilar", en: "Hair Mesotherapy", descriptionPt: "Aplicação localizada de ativos selecionados como parte de um plano personalizado de saúde capilar.", descriptionEn: "Local application of selected actives as part of a personalised hair health plan.", related: ["prp-capilar", "tratamentos-capilares", "consulta-avaliacao-medicina-capilar"] },

  { slug: "nutricao-funcional", category: "nutricao", pt: "Consulta Nutrição Funcional", en: "Functional Nutrition Consultation", descriptionPt: "Uma visão integrada da alimentação, rotina e bem-estar para criar hábitos sustentáveis.", descriptionEn: "An integrated view of food, routine and wellbeing to build sustainable habits.", related: ["nutricao-emagrecimento", "plano-detox"] },
  { slug: "nutricao-emagrecimento", category: "nutricao", pt: "Consulta de Nutrição para Emagrecimento", en: "Weight Management Nutrition Consultation", descriptionPt: "Acompanhamento nutricional individual para uma gestão de peso realista, saudável e continuada.", descriptionEn: "Individual nutrition guidance for realistic, healthy and lasting weight management.", related: ["nutricao-funcional", "reducao-medidas", "plano-detox"] },

  { slug: "plano-detox", category: "estetica-corporal", pt: "Plano Detox", en: "Detox Plan", descriptionPt: "Um protocolo integrado orientado para leveza, equilíbrio e bem-estar corporal.", descriptionEn: "An integrated protocol focused on lightness, balance and body wellbeing.", related: ["drenagem-linfatica", "nutricao-funcional", "reducao-medidas"] },
  { slug: "reducao-medidas", category: "estetica-corporal", pt: "Tratamento Redução Medidas", en: "Body Measurement Reduction", descriptionPt: "Plano personalizado que combina técnicas selecionadas para trabalhar contorno e medidas corporais.", descriptionEn: "A personalised plan combining selected techniques to address body contour and measurements.", related: ["criolipolise", "hifu-corpo", "radiofrequencia-corpo"] },
  { slug: "lipo-gordura", category: "estetica-corporal", pt: "Lipo Gordura", en: "Lipo Fat Treatment", descriptionPt: "Protocolo não cirúrgico orientado para zonas de adiposidade localizada, após avaliação.", descriptionEn: "A non-surgical protocol for localised fat areas, following assessment.", related: ["criolipolise", "reducao-medidas", "hifu-corpo"] },
  { slug: "radiofrequencia-corpo", category: "estetica-corporal", pt: "Radiofrequência Corpo", en: "Body Radiofrequency", descriptionPt: "Tecnologia que utiliza energia térmica controlada para apoiar firmeza e qualidade da pele.", descriptionEn: "Technology using controlled thermal energy to support firmness and skin quality.", related: ["hifu-corpo", "coolfit", "reducao-medidas"] },
  { slug: "hifu-corpo", category: "estetica-corporal", pt: "HIFU", en: "Body HIFU", descriptionPt: "Ultrassons focalizados aplicados em protocolos corporais para trabalhar contorno e firmeza.", descriptionEn: "Focused ultrasound used in body protocols to address contour and firmness.", featured: true, related: ["radiofrequencia-corpo", "criolipolise", "reducao-medidas"], searchTerms: ["hifu"] },
  { slug: "massagens-redutoras-modeladoras-anticeluliticas", category: "estetica-corporal", pt: "Massagens Redutoras, Modeladoras e Anticelulíticas", en: "Contouring and Anti-Cellulite Massage", descriptionPt: "Técnicas manuais adaptadas para trabalhar tecidos, contorno e sensação de leveza.", descriptionEn: "Adapted manual techniques to work on tissue, contour and a feeling of lightness.", related: ["drenagem-linfatica", "reducao-medidas", "plano-detox"], searchTerms: ["massagem"] },
  { slug: "criolipolise", category: "estetica-corporal", pt: "Criolipólise", en: "Cryolipolysis", descriptionPt: "Tecnologia de arrefecimento controlado para áreas de gordura localizada selecionadas em avaliação.", descriptionEn: "Controlled cooling technology for localised fat areas selected during assessment.", related: ["lipo-gordura", "hifu-corpo", "reducao-medidas"] },
  { slug: "drenagem-linfatica", category: "estetica-corporal", pt: "Drenagem Linfática", en: "Lymphatic Drainage", descriptionPt: "Técnica manual suave que promove conforto, leveza e apoio à circulação linfática.", descriptionEn: "A gentle manual technique that promotes comfort, lightness and lymphatic circulation.", related: ["plano-detox", "massagens-redutoras-modeladoras-anticeluliticas", "drenagem-facial"], searchTerms: ["massagem"] },
  { slug: "coolfit", category: "estetica-corporal", pt: "Coolfit", en: "Coolfit", descriptionPt: "Tecnologia integrada num plano corporal personalizado para trabalhar tonificação e contorno.", descriptionEn: "Technology integrated into a personalised body plan to address tone and contour.", related: ["radiofrequencia-corpo", "hifu-corpo", "reducao-medidas"] },

  { slug: "radiofrequencia-rosto", category: "estetica-facial", pt: "Radiofrequência Rosto", en: "Facial Radiofrequency", descriptionPt: "Energia térmica controlada para apoiar a firmeza e melhorar a qualidade da pele do rosto.", descriptionEn: "Controlled thermal energy to support firmness and improve facial skin quality.", related: ["hifu-rosto", "bioestimuladores", "profhilo"] },
  { slug: "hifu-rosto", category: "estetica-facial", pt: "HIFU Rosto", en: "Facial HIFU", descriptionPt: "Ultrassons focalizados para trabalhar suporte e contorno facial de forma não cirúrgica.", descriptionEn: "Focused ultrasound to address facial support and contour without surgery.", related: ["radiofrequencia-rosto", "fios-tensores", "bioestimuladores"], searchTerms: ["hifu"] },
  { slug: "drenagem-facial", category: "estetica-facial", pt: "Drenagem Facial", en: "Facial Drainage", descriptionPt: "Manobras suaves orientadas para conforto, descongestionamento e bem-estar facial.", descriptionEn: "Gentle techniques focused on comfort, decongestion and facial wellbeing.", related: ["limpeza-de-pele", "radiofrequencia-rosto", "drenagem-linfatica"] },

  { slug: "limpeza-de-pele", category: "servicos", pt: "Limpeza de Pele", en: "Deep Skin Cleansing", descriptionPt: "Cuidado profundo e adaptado para remover impurezas e devolver conforto e luminosidade à pele.", descriptionEn: "Deep, adapted care to remove impurities and restore comfort and radiance to the skin.", related: ["esfoliacao-corporal", "drenagem-facial", "peeling-quimico"] },
  { slug: "esfoliacao-corporal", category: "servicos", pt: "Esfoliação Corporal", en: "Body Exfoliation", descriptionPt: "Ritual corporal que promove renovação superficial, suavidade e uma pele mais uniforme.", descriptionEn: "A body ritual promoting surface renewal, softness and more even-looking skin.", related: ["massagem-relaxante", "plano-detox", "drenagem-linfatica"] },
  { slug: "reflexologia", category: "servicos", pt: "Reflexologia", en: "Reflexology", descriptionPt: "Técnica de pressão em pontos específicos dos pés orientada para relaxamento e equilíbrio.", descriptionEn: "A pressure technique on specific points of the feet focused on relaxation and balance.", related: ["massagem-relaxante", "massagem-com-velas", "massagem-desportiva"] },
  { slug: "massagem-relaxante", category: "servicos", pt: "Massagem Relaxante", en: "Relaxation Massage", descriptionPt: "Movimentos suaves e ritmados para aliviar tensão e criar uma pausa profunda de bem-estar.", descriptionEn: "Gentle, rhythmic movements to ease tension and create a deeply restorative pause.", related: ["massagem-com-velas", "reflexologia", "massagem-desportiva"], searchTerms: ["massagem"] },
  { slug: "massagem-com-velas", category: "servicos", pt: "Massagem com Velas", en: "Candle Massage", descriptionPt: "Ritual envolvente com óleo morno de vela para relaxamento, conforto e hidratação da pele.", descriptionEn: "An immersive ritual using warm candle oil for relaxation, comfort and skin nourishment.", related: ["massagem-relaxante", "reflexologia", "esfoliacao-corporal"], searchTerms: ["massagem"] },
  { slug: "massagem-desportiva", category: "servicos", pt: "Massagem Desportiva", en: "Sports Massage", descriptionPt: "Técnicas direcionadas para tensão muscular, recuperação e necessidades de pessoas ativas.", descriptionEn: "Targeted techniques for muscle tension, recovery and the needs of active people.", related: ["massagem-relaxante", "reflexologia", "drenagem-linfatica"], searchTerms: ["massagem"] },
];

export const treatments = seeds.map(makeTreatment);

export const getTreatment = (category: string, slug: string) => treatments.find((treatment) => treatment.category === category && treatment.slug === slug);
export const getTreatmentBySlug = (slug: string) => treatments.find((treatment) => treatment.slug === slug);
export const getTreatmentsByCategory = (category: string) => treatments.filter((treatment) => treatment.category === category);
export const featuredTreatments = treatments.filter((treatment) => treatment.featured);

export function validateTreatmentCatalogue() {
  const errors: string[] = [];
  const duplicateValues = (values: string[]) => values.filter((value, index) => values.indexOf(value) !== index);
  const treatmentSlugs = treatments.map(({ slug }) => slug);
  const categorySlugs = treatmentCategories.map(({ slug }) => slug);
  duplicateValues(treatmentSlugs).forEach((slug) => errors.push(`Duplicate treatment slug: ${slug}`));
  duplicateValues(categorySlugs).forEach((slug) => errors.push(`Duplicate category slug: ${slug}`));
  treatments.forEach((treatment) => {
    const category = treatmentCategories.find(({ slug }) => slug === treatment.category);
    if (!category) errors.push(`Missing category for ${treatment.slug}: ${treatment.category}`);
    if (category && !category.treatments.includes(treatment.slug)) errors.push(`${treatment.slug} is not indexed by ${category.slug}`);
    treatment.relatedTreatments?.forEach((slug) => { if (!treatmentSlugs.includes(slug)) errors.push(`Invalid related treatment ${slug} in ${treatment.slug}`); });
  });
  treatmentCategories.forEach((category) => category.treatments.forEach((slug) => { if (!treatmentSlugs.includes(slug)) errors.push(`Missing treatment ${slug} referenced by ${category.slug}`); }));
  if (featuredTreatments.some(({ slug }) => !treatmentSlugs.includes(slug))) errors.push("Invalid featured treatment reference");
  if (treatments.length !== 35) errors.push(`Expected 35 treatments, received ${treatments.length}`);
  return errors;
}

const catalogueErrors = validateTreatmentCatalogue();
if (process.env.NODE_ENV !== "production" && catalogueErrors.length) throw new Error(`Invalid treatment catalogue:\n${catalogueErrors.join("\n")}`);
