export type LocalizedText = { pt: string; en: string };

export type TreatmentCategory = {
  id: string;
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  introduction: LocalizedText;
  coverImage: string;
  treatments: string[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    id: "aesthetic-medicine",
    slug: "medicina-estetica",
    name: { pt: "Medicina Estética", en: "Aesthetic Medicine" },
    shortDescription: { pt: "Tratamentos médicos para cuidar, prevenir e realçar com naturalidade.", en: "Medical treatments designed to care, prevent and enhance naturally." },
    introduction: { pt: "Uma abordagem médica rigorosa e personalizada, orientada para a harmonia, a saúde da pele e resultados subtis que respeitam a sua expressão.", en: "A rigorous, personalised medical approach focused on harmony, skin health and subtle results that respect your expression." },
    coverImage: "/images/treatments/medicina-estetica/category.webp?v=ceeb7a4a",
    treatments: ["consulta-de-avaliacao", "toxina-botulinica", "fios-tensores", "bioestimuladores", "fillers", "peeling-quimico", "plasma-rico-em-plaquetas", "mesoterapia", "terapia-fotobiodinamica", "profhilo", "microneedling"],
  },
  {
    id: "hair-medicine",
    slug: "medicina-capilar",
    name: { pt: "Medicina Capilar", en: "Hair Medicine" },
    shortDescription: { pt: "Diagnóstico e cuidado integrado para o cabelo e couro cabeludo.", en: "Integrated diagnosis and care for hair and scalp health." },
    introduction: { pt: "A saúde capilar começa por compreender a causa. Avaliamos cada caso e combinamos acompanhamento clínico com protocolos ajustados à sua evolução.", en: "Hair health starts with understanding the cause. We assess each case and combine clinical guidance with protocols adapted over time." },
    coverImage: "/images/treatments/medicina-capilar/category.webp?v=3a25e96f",
    treatments: ["consulta-avaliacao-medicina-capilar", "tratamentos-capilares", "prp-capilar", "mesoterapia-capilar"],
  },
  {
    id: "nutrition",
    slug: "nutricao",
    name: { pt: "Nutrição", en: "Nutrition" },
    shortDescription: { pt: "Acompanhamento nutricional para objetivos reais e sustentáveis.", en: "Nutritional guidance for real, sustainable goals." },
    introduction: { pt: "Planos alimentares construídos a partir da sua rotina, saúde e objetivos, com acompanhamento próximo e uma visão funcional do bem-estar.", en: "Nutrition plans built around your routine, health and goals, with close guidance and a functional view of wellbeing." },
    coverImage: "/images/treatments/nutricao/category.webp?v=9f9b12bc",
    treatments: ["nutricao-funcional", "nutricao-emagrecimento"],
  },
  {
    id: "body-aesthetics",
    slug: "estetica-corporal",
    name: { pt: "Estética Corporal", en: "Body Aesthetics" },
    shortDescription: { pt: "Protocolos personalizados para contorno, firmeza e bem-estar.", en: "Personalised protocols for contour, firmness and wellbeing." },
    introduction: { pt: "Tecnologias e técnicas complementares, selecionadas após avaliação, para cuidar do contorno corporal, textura da pele e sensação de leveza.", en: "Complementary technologies and techniques, selected after assessment, to care for body contour, skin texture and a sense of lightness." },
    coverImage: "/images/treatments/estetica-corporal/category.webp?v=b813b2f2",
    treatments: ["plano-detox", "reducao-medidas", "lipo-gordura", "radiofrequencia-corpo", "hifu-corpo", "massagens-redutoras-modeladoras-anticeluliticas", "criolipolise", "drenagem-linfatica", "coolfit"],
  },
  {
    id: "facial-aesthetics",
    slug: "estetica-facial",
    name: { pt: "Estética Facial", en: "Facial Aesthetics" },
    shortDescription: { pt: "Cuidados avançados para firmeza, textura e luminosidade.", en: "Advanced care for firmness, texture and radiance." },
    introduction: { pt: "Protocolos não cirúrgicos que cuidam da qualidade da pele e dos contornos do rosto, sempre adaptados às necessidades de cada pessoa.", en: "Non-surgical protocols that care for skin quality and facial contours, always adapted to each person's needs." },
    coverImage: "/images/treatments/estetica-facial/category.webp?v=9099da31",
    treatments: ["radiofrequencia-rosto", "hifu-rosto", "drenagem-facial"],
  },
  {
    id: "services",
    slug: "servicos",
    name: { pt: "Serviços", en: "Services" },
    shortDescription: { pt: "Rituais especializados que completam o seu plano de cuidado.", en: "Specialist rituals that complement your care plan." },
    introduction: { pt: "Cuidados de rosto e corpo pensados para complementar o acompanhamento clínico e criar momentos de recuperação, equilíbrio e bem-estar.", en: "Face and body care designed to complement clinical guidance and create moments of recovery, balance and wellbeing." },
    coverImage: "/images/treatments/servicos/category.webp?v=ef4a8a84",
    treatments: ["limpeza-de-pele", "esfoliacao-corporal", "reflexologia", "massagem-relaxante", "massagem-com-velas", "massagem-desportiva"],
  },
];

export const getCategory = (slug: string) => treatmentCategories.find((category) => category.slug === slug);
