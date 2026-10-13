export type Language = "pt" | "en";

const pt = {
  nav: { home: "Início", clinic: "Clínica", pricing: "Preços", treatments: "Tratamentos", results: "Resultados", team: "Equipa", contacts: "Contactos", booking: "Marcação", menu: "Abrir menu", close: "Fechar menu" },
  hero: { eyebrow: "SAÚDE · BELEZA · BEM-ESTAR", title: "Clínica Beleza", copy: "Saúde Interna Cuidados Externos", primary: "Marcar avaliação", secondary: "Encontrar o meu tratamento", note: "Saldanha | Avenidas Novas · Lisboa", imageAlt: "Interior luminoso de uma clínica contemporânea" },
  intro: { eyebrow: "Clínica Beleza", title: "A clínica", p1: "Acreditamos numa beleza que se reconhece ao espelho. Nos traços que contam a sua história. E no cuidado que faz sentido para a vida que quer viver.", principles: [
    { title: "Beleza natural", text: "O que a torna única merece ser preservado. A nossa ideia de beleza valoriza a sua expressão e os seus traços, sem perseguir um rosto ideal." },
    { title: "Escolhas conscientes", text: "Mais tratamentos não significam mais bem-estar. Acreditamos em escolhas ponderadas, com espaço para compreender as opções e decidir o que faz sentido para si." },
    { title: "Cuidado ao seu ritmo", text: "Cuidar de si deve caber na sua vida. Valorizamos um percurso gradual, que respeita o seu tempo, as suas prioridades e a forma como se quer sentir." },
  ] },
  categories: { eyebrow: "Tratamentos", title: "Um cuidado completo, pensado à sua medida.", intro: "Seis áreas complementares, organizadas para tornar simples a escolha do acompanhamento certo.", explore: "Explorar tratamentos", items: [
    { name: "Medicina Estética", description: "Tratamentos médicos para realçar, prevenir e cuidar com naturalidade." },
    { name: "Estética Facial", description: "Protocolos avançados para a saúde, textura e luminosidade da pele." },
    { name: "Estética Corporal", description: "Planos personalizados para contorno, firmeza e bem-estar corporal." },
    { name: "Medicina Capilar", description: "Diagnóstico e cuidado integrado para a saúde do cabelo e couro cabeludo." },
    { name: "Nutrição & Bem-estar", description: "Acompanhamento que une hábitos, equilíbrio e objetivos sustentáveis." },
    { name: "Serviços Complementares", description: "Cuidados especializados que completam o seu plano clínico." },
  ] },
  featured: { eyebrow: "Mais procurados", title: "Tratamentos em destaque", view: "Ver tratamento", items: [
    { category: "Medicina estética", name: "Harmonização facial", description: "Uma abordagem subtil e global à proporção, estrutura e frescura do rosto.", duration: "Avaliação individual" },
    { category: "Estética facial", name: "Rejuvenescimento da pele", description: "Protocolos combinados para devolver luminosidade, textura e vitalidade.", duration: "Plano personalizado" },
    { category: "Medicina capilar", name: "Saúde capilar", description: "Diagnóstico clínico e opções de tratamento ajustadas à causa e evolução.", duration: "Consulta especializada" },
  ] },
  why: { eyebrow: "Porquê a Clínica Beleza", title: "Cuidado clínico. Resultados que respeitam quem é.", intro: "Cada decisão começa por ouvir, avaliar e compreender. O tratamento certo é aquele que faz sentido para si.", items: [
    { title: "Avaliação personalizada", text: "Escuta atenta e um plano definido para as suas necessidades reais." },
    { title: "Equipa especializada", text: "Profissionais qualificados, com acompanhamento próximo em cada etapa." },
    { title: "Tecnologia avançada", text: "Protocolos atuais e equipamentos selecionados com critério clínico." },
    { title: "Resultados naturais", text: "Intervenções responsáveis que preservam expressão, identidade e equilíbrio." },
  ] },
  team: { eyebrow: "A nossa equipa", title: "A nossa equipa", intro: "Conheça os profissionais da Clínica Beleza.", profile: "Ver perfil" },
  results: { eyebrow: "Resultados", title: "Resultados dos tratamentos", copy: "Cada resultado é individual. A avaliação clínica permite definir expectativas responsáveis e um plano adequado à anatomia, saúde e objetivos de cada pessoa.", before: "Antes", after: "Depois", disclaimer: "Imagens ilustrativas de espaço reservado para casos clínicos. Os resultados variam de pessoa para pessoa e não podem ser garantidos." },
  training: { title: "Formações", status: "Em breve" },
  testimonials: { eyebrow: "Experiência de quem nos visita", title: "Avaliações de clientes", reviews: "Mais de 250 avaliações de clientes", items: [
    { quote: "A Clínica Beleza oferece um serviço de excelência. O atendimento foi personalizado e os resultados naturais e harmoniosos. Voltarei certamente!", name: "Sofia Ferreira" },
    { quote: "Desde a primeira consulta, senti confiança total. A equipa é atenciosa e muito qualificada. Adorei o resultado e recomendo a 100%!", name: "João Nogueira" },
    { quote: "Profissionalismo, simpatia e inovação! A clínica proporcionou-me um tratamento de qualidade e um acompanhamento impecável. Experiência fantástica!", name: "Sandra Mendes" },
    { quote: "Um espaço moderno, uma equipa incrível e resultados surpreendentes! Fiquei encantada com o atendimento e com a atenção ao detalhe em cada procedimento.", name: "Marta Oliveira" },
    { quote: "Fui atendida com um profissionalismo incrível. Os resultados superaram as minhas expectativas e senti-me sempre em boas mãos. Recomendo sem hesitação!", name: "Ana Marques" },
  ] },
  space: { eyebrow: "A clínica", title: "O nosso espaço", copy: "Em Saldanha, entre tons suaves e luz natural, há um lugar para abrandar e dedicar tempo a si.", alts: ["Entrada e receção da Clínica Beleza", "Sala de tratamento luminosa", "Corredor da Clínica Beleza com o logótipo dourado"] },
  financing: { eyebrow: "Facilidade de pagamento", title: "Opções de pagamento", copy: "Pagamento disponível até 6x sem juros.*", action: "Saber mais", disclaimer: "*Sujeito às condições aplicáveis e aprovação. Informação detalhada disponível na clínica." },
  location: { eyebrow: "Saldanha · Lisboa", title: "Contactos e localização", address: "Av. João Crisóstomo 63 A, 1050-126 Lisboa", note: "Estamos no coração de Lisboa (Saldanha), junto ao centro comercial El Corte Inglés e à emblemática Gulbenkian.", parking: "Estacionamento público disponível na própria rua.", phone: "+351 211 500 899", email: "info@clinicabeleza.pt", hoursLabel: "Horário", hoursWeekdays: "Segunda–Sexta · 10:00–19:00", hoursSaturday: "Sábado · 09:00–14:00", directions: "Obter direções", booking: "Falar no WhatsApp", map: "Mapa da localização da Clínica Beleza em Saldanha" },
  finalCta: { eyebrow: "O primeiro passo", title: "Comece por uma avaliação personalizada.", copy: "Descubra o tratamento mais adequado aos seus objetivos com o acompanhamento da nossa equipa.", action: "Marcar avaliação", whatsapp: "Falar no WhatsApp" },
  footer: { copy: "Medicina estética, beleza e bem-estar com uma abordagem clínica, personalizada e responsável.", navigation: "Navegação", contact: "Contacto", social: "Acompanhe-nos", regulatory: "Entidades e informação oficial", complaints: "Livro de Reclamações", privacy: "Privacidade", cookies: "Cookies", terms: "Termos", rights: "© 2026 Clínica Beleza. Todos os direitos reservados." },
};

const en: typeof pt = {
  nav: { home: "Home", clinic: "Clinic", pricing: "Pricing", treatments: "Treatments", results: "Results", team: "Team", contacts: "Contact", booking: "Book now", menu: "Open menu", close: "Close menu" },
  hero: { eyebrow: "HEALTH · BEAUTY · WELLBEING", title: "Clínica Beleza", copy: "Inner Health, Outer Care", primary: "Book consultation", secondary: "Find my treatment", note: "Saldanha | Avenidas Novas · Lisbon", imageAlt: "Bright interior of a contemporary clinic" },
  intro: { eyebrow: "Clínica Beleza", title: "About the clinic", p1: "We believe in beauty you recognise in the mirror. In the features that tell your story. And in care that makes sense for the life you want to live.", principles: [
    { title: "Natural beauty", text: "What makes you distinctive deserves to be preserved. Our idea of beauty values your expression and your features, without chasing an ideal face." },
    { title: "Considered choices", text: "More treatments do not mean more wellbeing. We believe in considered choices, with room to understand your options and decide what feels right for you." },
    { title: "Care at your pace", text: "Looking after yourself should fit into your life. We value a gradual approach that respects your time, your priorities and how you want to feel." },
  ] },
  categories: { eyebrow: "Treatments", title: "Complete care, considered around you.", intro: "Six complementary areas, organised to make finding the right care simple.", explore: "Explore treatments", items: [
    { name: "Aesthetic Medicine", description: "Medical treatments to enhance, prevent and care with a natural approach." },
    { name: "Facial Aesthetics", description: "Advanced protocols for skin health, texture and radiance." },
    { name: "Body Aesthetics", description: "Personalised plans for contour, firmness and body wellbeing." },
    { name: "Hair Medicine", description: "Integrated diagnosis and care for hair and scalp health." },
    { name: "Nutrition & Wellbeing", description: "Guidance bringing together habits, balance and sustainable goals." },
    { name: "Complementary Services", description: "Specialist care that completes your clinical plan." },
  ] },
  featured: { eyebrow: "Most requested", title: "Featured treatments", view: "View treatment", items: [
    { category: "Aesthetic medicine", name: "Facial harmonisation", description: "A subtle, considered approach to facial proportion, structure and freshness.", duration: "Individual assessment" },
    { category: "Facial aesthetics", name: "Skin rejuvenation", description: "Combined protocols to restore radiance, texture and vitality.", duration: "Personalised plan" },
    { category: "Hair medicine", name: "Hair health", description: "Clinical diagnosis and treatment options adapted to cause and progression.", duration: "Specialist consultation" },
  ] },
  why: { eyebrow: "Why Clínica Beleza", title: "Clinical care. Results that respect who you are.", intro: "Every decision starts by listening, assessing and understanding. The right treatment is the one that makes sense for you.", items: [
    { title: "Personal assessment", text: "Attentive listening and a plan defined around your real needs." },
    { title: "Specialist team", text: "Qualified professionals, with close follow-up at every stage." },
    { title: "Advanced technology", text: "Current protocols and equipment selected with clinical judgement." },
    { title: "Natural results", text: "Responsible treatments that preserve expression, identity and balance." },
  ] },
  team: { eyebrow: "Our team", title: "Our team", intro: "Meet the professionals at Clínica Beleza.", profile: "View profile" },
  results: { eyebrow: "Results", title: "Treatment results", copy: "Every result is individual. A clinical assessment helps set responsible expectations and a plan suited to each person's anatomy, health and goals.", before: "Before", after: "After", disclaimer: "Illustrative space reserved for clinical cases. Results vary from person to person and cannot be guaranteed." },
  training: { title: "Training", status: "Coming soon" },
  testimonials: { eyebrow: "Patient experience", title: "Client reviews", reviews: "More than 250 client reviews", items: [
    { quote: "Clínica Beleza offers an excellent service. The care was personalised and the results natural and harmonious. I will certainly return!", name: "Sofia Ferreira" },
    { quote: "From the first consultation, I felt completely confident. The team is attentive and highly qualified. I loved the result and recommend them 100%!", name: "João Nogueira" },
    { quote: "Professionalism, kindness and innovation! The clinic provided a quality treatment and impeccable follow-up. A fantastic experience!", name: "Sandra Mendes" },
    { quote: "A modern space, an incredible team and surprising results! I was delighted with the care and attention to detail throughout every procedure.", name: "Marta Oliveira" },
    { quote: "I was treated with incredible professionalism. The results exceeded my expectations and I always felt in safe hands. Highly recommended!", name: "Ana Marques" },
  ] },
  space: { eyebrow: "The clinic", title: "Our clinic space", copy: "In Saldanha, soft colours and natural light create a place to slow down and make time for yourself.", alts: ["Clínica Beleza entrance and reception", "Bright treatment room", "Clínica Beleza hallway with its gold logo"] },
  financing: { eyebrow: "Flexible payment", title: "Payment options", copy: "Payment available in up to 6 interest-free instalments.*", action: "Learn more", disclaimer: "*Subject to applicable conditions and approval. Full information is available at the clinic." },
  location: { eyebrow: "Saldanha · Lisbon", title: "Contact and location", address: "Av. João Crisóstomo 63 A, 1050-126 Lisbon", note: "We are at the heart of Lisbon (Saldanha), next to El Corte Inglés shopping mall and the emblematic Gulbenkian.", parking: "Public parking is available on the same street.", phone: "+351 211 500 899", email: "info@clinicabeleza.pt", hoursLabel: "Hours", hoursWeekdays: "Monday–Friday · 10am–7pm", hoursSaturday: "Saturday · 9am–2pm", directions: "Get directions", booking: "Chat on WhatsApp", map: "Map showing Clínica Beleza in Saldanha" },
  finalCta: { eyebrow: "The first step", title: "Begin with a personalised assessment.", copy: "Discover the treatment best suited to your goals with the guidance of our team.", action: "Book assessment", whatsapp: "Chat on WhatsApp" },
  footer: { copy: "Aesthetic medicine, beauty and wellbeing with a clinical, personalised and responsible approach.", navigation: "Navigation", contact: "Contact", social: "Follow us", regulatory: "Official information and bodies", complaints: "Complaints Book", privacy: "Privacy", cookies: "Cookies", terms: "Terms", rights: "© 2026 Clínica Beleza. All rights reserved." },
};

export const translations = { pt, en };
export type Translation = typeof pt;
