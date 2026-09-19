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
    introduction: { pt: "Cuidado médico que valoriza os seus traços, com decisões seguras e resultados naturais.", en: "Medical care that enhances your features through considered decisions and natural-looking results." },
    coverImage: "/images/treatments/medicina-estetica/category.webp?v=ceeb7a4a",
    treatments: ["consulta-de-avaliacao", "toxina-botulinica", "fios-tensores", "bioestimuladores", "fillers", "peeling-quimico", "plasma-rico-em-plaquetas", "mesoterapia", "terapia-fotobiodinamica", "profhilo", "microneedling"],
  },
  {
    id: "hair-medicine",
    slug: "medicina-capilar",
    name: { pt: "Medicina Capilar", en: "Hair Medicine" },
    shortDescription: { pt: "Diagnóstico e cuidado integrado para o cabelo e couro cabeludo.", en: "Integrated diagnosis and care for hair and scalp health." },
    introduction: { pt: "Diagnóstico primeiro. Um plano capilar definido pela causa, pela saúde do couro cabeludo e pela sua evolução.", en: "Diagnosis comes first. Your hair plan is guided by the cause, scalp health and how your condition evolves." },
    coverImage: "/images/treatments/medicina-capilar/category.webp?v=3a25e96f",
    treatments: ["consulta-avaliacao-medicina-capilar", "tratamentos-capilares", "prp-capilar", "mesoterapia-capilar"],
  },
  {
    id: "nutrition",
    slug: "nutricao",
    name: { pt: "Nutrição", en: "Nutrition" },
    shortDescription: { pt: "Acompanhamento nutricional para objetivos reais e sustentáveis.", en: "Nutritional guidance for real, sustainable goals." },
    introduction: { pt: "Nutrição ajustada à sua rotina, à sua saúde e a objetivos que consegue manter.", en: "Nutrition tailored to your routine, your health and goals you can sustain." },
    coverImage: "/images/treatments/nutricao/category.webp?v=9f9b12bc",
    treatments: ["nutricao-funcional", "nutricao-emagrecimento"],
  },
  {
    id: "body-aesthetics",
    slug: "estetica-corporal",
    name: { pt: "Estética Corporal", en: "Body Aesthetics" },
    shortDescription: { pt: "Protocolos personalizados para contorno, firmeza e bem-estar.", en: "Personalised protocols for contour, firmness and wellbeing." },
    introduction: { pt: "Protocolos corporais escolhidos com critério para cuidar do contorno, da firmeza e do bem-estar.", en: "Body protocols selected with care to support contour, firmness and wellbeing." },
    coverImage: "/images/treatments/estetica-corporal/category.webp?v=b813b2f2",
    treatments: ["plano-detox", "reducao-medidas", "lipo-gordura", "radiofrequencia-corpo", "hifu-corpo", "massagens-redutoras-modeladoras-anticeluliticas", "criolipolise", "drenagem-linfatica", "coolfit"],
  },
  {
    id: "facial-aesthetics",
    slug: "estetica-facial",
    name: { pt: "Estética Facial", en: "Facial Aesthetics" },
    shortDescription: { pt: "Cuidados avançados para firmeza, textura e luminosidade.", en: "Advanced care for firmness, texture and radiance." },
    introduction: { pt: "Cuidados faciais personalizados para fortalecer a pele, melhorar a textura e preservar a sua naturalidade.", en: "Personalised facial care to strengthen the skin, improve texture and preserve your natural appearance." },
    coverImage: "/images/treatments/estetica-facial/category.webp?v=9099da31",
    treatments: ["radiofrequencia-rosto", "hifu-rosto", "drenagem-facial"],
  },
  {
    id: "services",
    slug: "servicos",
    name: { pt: "Serviços", en: "Services" },
    shortDescription: { pt: "Rituais especializados que completam o seu plano de cuidado.", en: "Specialist rituals that complement your care plan." },
    introduction: { pt: "Cuidados complementares para recuperar, equilibrar e prolongar os benefícios do seu plano.", en: "Complementary care to restore balance and extend the benefits of your plan." },
    coverImage: "/images/treatments/servicos/category.webp?v=ef4a8a84",
    treatments: ["limpeza-de-pele", "esfoliacao-corporal", "reflexologia", "massagem-relaxante", "massagem-com-velas", "massagem-desportiva"],
  },
];

export const getCategory = (slug: string) => treatmentCategories.find((category) => category.slug === slug);
