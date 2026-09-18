export type Language = "pt" | "en";

const pt = {
  nav: { home: "Início", clinic: "Clínica", treatments: "Tratamentos", results: "Resultados", team: "Equipa", contacts: "Contactos", booking: "Marcação", menu: "Abrir menu", close: "Fechar menu" },
  hero: { eyebrow: "MEDICINA ESTÉTICA · SALDANHA, LISBOA", title: "Clínica Beleza", copy: "Cuidado médico personalizado para resultados naturais, com saúde, beleza e bem-estar em equilíbrio.", primary: "Marcar avaliação", secondary: "Conhecer tratamentos", note: "Saldanha · Lisboa", imageAlt: "Interior luminoso de uma clínica contemporânea" },
  intro: { eyebrow: "A nossa filosofia", title: "Ciência, cuidado e naturalidade.", p1: "Cada plano começa com uma avaliação atenta e respeita o que a torna única.", principles: [
    { title: "Especialistas", text: "Profissionais de saúde dedicados ao seu cuidado." },
    { title: "Segurança", text: "Rigor clínico num ambiente tranquilo." },
    { title: "À sua medida", text: "Planos ajustados aos seus objetivos." },
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
  team: { eyebrow: "A nossa equipa", title: "Especialistas dedicados ao seu cuidado.", intro: "Uma equipa multidisciplinar, unida por uma visão exigente, humana e responsável da medicina estética.", profile: "Ver perfil", members: [
    { name: "Dra. Sofia Almeida", role: "Medicina Estética", credential: "Cédula profissional · informação a confirmar" },
    { name: "Dra. Marta Ribeiro", role: "Medicina Capilar", credential: "Cédula profissional · informação a confirmar" },
    { name: "Dr. João Matos", role: "Estética Avançada", credential: "Cédula profissional · informação a confirmar" },
    { name: "Dr. Miguel Santos", role: "Medicina Regenerativa", credential: "Cédula profissional · informação a confirmar" },
    { name: "Dra. Leonor Costa", role: "Nutrição Clínica", credential: "Cédula profissional · informação a confirmar" },
    { name: "Dra. Beatriz Ferreira", role: "Saúde e Bem-estar", credential: "Cédula profissional · informação a confirmar" },
  ] },
  results: { eyebrow: "Resultados", title: "Resultados reais, sempre com naturalidade.", copy: "Cada resultado é individual. A avaliação clínica permite definir expectativas responsáveis e um plano adequado à anatomia, saúde e objetivos de cada pessoa.", before: "Antes", after: "Depois", disclaimer: "Imagens ilustrativas de espaço reservado para casos clínicos. Os resultados variam de pessoa para pessoa e não podem ser garantidos." },
  testimonials: { eyebrow: "Experiência de quem nos visita", title: "Cuidado que se sente, confiança que permanece.", reviews: "Mais de 250 avaliações de clientes", items: [
    { quote: "A Clínica Beleza oferece um serviço de excelência. O atendimento foi personalizado e os resultados naturais e harmoniosos. Voltarei certamente!", name: "Sofia Ferreira" },
    { quote: "Desde a primeira consulta, senti confiança total. A equipa é atenciosa e muito qualificada. Adorei o resultado e recomendo a 100%!", name: "João Nogueira" },
    { quote: "Profissionalismo, simpatia e inovação! A clínica proporcionou-me um tratamento de qualidade e um acompanhamento impecável. Experiência fantástica!", name: "Sandra Mendes" },
    { quote: "Um espaço moderno, uma equipa incrível e resultados surpreendentes! Fiquei encantada com o atendimento e com a atenção ao detalhe em cada procedimento.", name: "Marta Oliveira" },
    { quote: "Fui atendida com um profissionalismo incrível. Os resultados superaram as minhas expectativas e senti-me sempre em boas mãos. Recomendo sem hesitação!", name: "Ana Marques" },
  ] },
  space: { eyebrow: "A clínica", title: "Um espaço pensado para cuidar de si.", copy: "No centro de Lisboa, criámos um ambiente reservado, sereno e contemporâneo — onde o rigor clínico convive com uma hospitalidade discreta.", alts: ["Receção de clínica contemporânea", "Sala de tratamento luminosa", "Detalhe de ambiente clínico sereno"] },
  financing: { eyebrow: "Facilidade de pagamento", title: "Cuidar de si também deve ser simples.", copy: "Pagamento disponível até 6x sem juros.*", action: "Saber mais", disclaimer: "*Sujeito às condições aplicáveis e aprovação. Informação detalhada disponível na clínica." },
  location: { eyebrow: "Saldanha · Lisboa", title: "No centro da cidade, perto de si.", address: "Av. João Crisóstomo 63 A, 1050-126 Lisboa", phone: "+351 211 500 899", email: "info@clinicabeleza.pt", hoursLabel: "Horário", hoursWeekdays: "Segunda–Sexta · 10:00–19:00", hoursSaturday: "Sábado · 09:00–14:00", directions: "Obter direções", booking: "Falar no WhatsApp", map: "Mapa da localização da Clínica Beleza em Saldanha" },
  finalCta: { eyebrow: "O primeiro passo", title: "Comece por uma avaliação personalizada.", copy: "Descubra o tratamento mais adequado aos seus objetivos com o acompanhamento da nossa equipa.", action: "Marcar avaliação", whatsapp: "Falar no WhatsApp" },
  footer: { copy: "Medicina estética, beleza e bem-estar com uma abordagem clínica, personalizada e responsável.", navigation: "Navegação", contact: "Contacto", social: "Acompanhe-nos", regulatory: "Entidades e informação oficial", complaints: "Livro de Reclamações", privacy: "Privacidade", cookies: "Cookies", terms: "Termos", rights: "© 2026 Clínica Beleza. Todos os direitos reservados." },
};

const en: typeof pt = {
  nav: { home: "Home", clinic: "Clinic", treatments: "Treatments", results: "Results", team: "Team", contacts: "Contact", booking: "Book now", menu: "Open menu", close: "Close menu" },
  hero: { eyebrow: "AESTHETIC MEDICINE · SALDANHA, LISBON", title: "Clínica Beleza", copy: "Personalised medical care for natural results, bringing health, beauty and wellbeing into balance.", primary: "Book assessment", secondary: "Explore treatments", note: "Saldanha · Lisbon", imageAlt: "Bright interior of a contemporary clinic" },
  intro: { eyebrow: "Our philosophy", title: "Science, care and natural results.", p1: "Every plan begins with an attentive assessment and respects what makes you unique.", principles: [
    { title: "Specialists", text: "Healthcare professionals dedicated to your care." },
    { title: "Safety", text: "Clinical rigour in a calm environment." },
    { title: "Made for you", text: "Plans shaped around your goals." },
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
  team: { eyebrow: "Our team", title: "Specialists dedicated to your care.", intro: "A multidisciplinary team united by a rigorous, human and responsible vision of aesthetic medicine.", profile: "View profile", members: [
    { name: "Dr Sofia Almeida", role: "Aesthetic Medicine", credential: "Professional registration · details to be confirmed" },
    { name: "Dr Marta Ribeiro", role: "Hair Medicine", credential: "Professional registration · details to be confirmed" },
    { name: "Dr João Matos", role: "Advanced Aesthetics", credential: "Professional registration · details to be confirmed" },
    { name: "Dr Miguel Santos", role: "Regenerative Medicine", credential: "Professional registration · details to be confirmed" },
    { name: "Dr Leonor Costa", role: "Clinical Nutrition", credential: "Professional registration · details to be confirmed" },
    { name: "Dr Beatriz Ferreira", role: "Health and Wellbeing", credential: "Professional registration · details to be confirmed" },
  ] },
  results: { eyebrow: "Results", title: "Real results, always with a natural look.", copy: "Every result is individual. A clinical assessment helps set responsible expectations and a plan suited to each person's anatomy, health and goals.", before: "Before", after: "After", disclaimer: "Illustrative space reserved for clinical cases. Results vary from person to person and cannot be guaranteed." },
  testimonials: { eyebrow: "Patient experience", title: "Care you can feel. Trust that lasts.", reviews: "More than 250 client reviews", items: [
    { quote: "Clínica Beleza offers an excellent service. The care was personalised and the results natural and harmonious. I will certainly return!", name: "Sofia Ferreira" },
    { quote: "From the first consultation, I felt completely confident. The team is attentive and highly qualified. I loved the result and recommend them 100%!", name: "João Nogueira" },
    { quote: "Professionalism, kindness and innovation! The clinic provided a quality treatment and impeccable follow-up. A fantastic experience!", name: "Sandra Mendes" },
    { quote: "A modern space, an incredible team and surprising results! I was delighted with the care and attention to detail throughout every procedure.", name: "Marta Oliveira" },
    { quote: "I was treated with incredible professionalism. The results exceeded my expectations and I always felt in safe hands. Highly recommended!", name: "Ana Marques" },
  ] },
  space: { eyebrow: "The clinic", title: "A space designed to care for you.", copy: "In central Lisbon, we created a private, serene and contemporary environment — where clinical precision meets discreet hospitality.", alts: ["Contemporary clinic reception", "Bright treatment room", "Detail of a serene clinical environment"] },
  financing: { eyebrow: "Flexible payment", title: "Caring for yourself should feel simple too.", copy: "Payment available in up to 6 interest-free instalments.*", action: "Learn more", disclaimer: "*Subject to applicable conditions and approval. Full information is available at the clinic." },
  location: { eyebrow: "Saldanha · Lisbon", title: "In the centre of the city, close to you.", address: "Av. João Crisóstomo 63 A, 1050-126 Lisbon", phone: "+351 211 500 899", email: "info@clinicabeleza.pt", hoursLabel: "Hours", hoursWeekdays: "Monday–Friday · 10am–7pm", hoursSaturday: "Saturday · 9am–2pm", directions: "Get directions", booking: "Chat on WhatsApp", map: "Map showing Clínica Beleza in Saldanha" },
  finalCta: { eyebrow: "The first step", title: "Begin with a personalised assessment.", copy: "Discover the treatment best suited to your goals with the guidance of our team.", action: "Book assessment", whatsapp: "Chat on WhatsApp" },
  footer: { copy: "Aesthetic medicine, beauty and wellbeing with a clinical, personalised and responsible approach.", navigation: "Navigation", contact: "Contact", social: "Follow us", regulatory: "Official information and bodies", complaints: "Complaints Book", privacy: "Privacy", cookies: "Cookies", terms: "Terms", rights: "© 2026 Clínica Beleza. All rights reserved." },
};

export const translations = { pt, en };
export type Translation = typeof pt;
