import type { CatalogueTreatment } from "./treatment-catalogue";
import type { LocalizedText } from "./treatment-categories";

export type TreatmentDetail = {
  overview: LocalizedText;
  involves: LocalizedText;
};

const detail = (pt: string, en: string, involvesPt: string, involvesEn: string): TreatmentDetail => ({
  overview: { pt, en },
  involves: { pt: involvesPt, en: involvesEn },
});

// General educational descriptions, checked against the references in
// docs/treatment-content-sources.md. Clinic-specific products, devices and
// unconfirmed protocols are deliberately left open; prices remain in pricing.ts.
export const treatmentDetails: Record<string, TreatmentDetail> = {
  "medicina-estetica/consulta-de-avaliacao": detail(
    "A consulta de avaliação é o primeiro passo para perceber quais os cuidados estéticos adequados ao seu rosto, à sua pele e aos seus objetivos. Permite distinguir necessidades de tratamento e conhecer as opções disponíveis.",
    "An aesthetic assessment helps identify which treatments suit your face, skin and goals. It is an opportunity to understand your concerns and discuss the available options.",
    "Inclui uma conversa sobre os seus objetivos, antecedentes de saúde e tratamentos anteriores, seguida da observação das zonas que pretende cuidar. São discutidas as opções, os seus limites, os riscos e os cuidados associados, para definir um plano consigo.",
    "The consultation covers your goals, health history and previous treatments, followed by an examination of the areas you would like to address. Options, limitations, risks and aftercare are discussed to develop a plan with you.",
  ),
  "medicina-estetica/toxina-botulinica": detail(
    "A toxina botulínica é um medicamento injetável que reduz temporariamente a atividade de músculos específicos. Em estética facial, é utilizada para suavizar linhas de expressão, como as da testa, entre as sobrancelhas e junto aos olhos.",
    "Botulinum toxin is an injectable medicine that temporarily reduces the activity of selected muscles. In facial aesthetics, it is used to soften expression lines on the forehead, between the eyebrows and around the eyes.",
    "Após avaliar a expressão e a anatomia do rosto, o médico administra pequenas injeções nos músculos escolhidos. A dose e os pontos de aplicação são ajustados ao seu caso. As opções de uma ou três zonas e as marcas disponíveis estão identificadas nos preços.",
    "After assessing facial movement and anatomy, the doctor gives small injections into the selected muscles. The dose and injection sites are tailored to you. The price options identify one-area and three-area treatments and the available brands.",
  ),
  "medicina-estetica/botox-axilas": detail(
    "A toxina botulínica pode ser utilizada para reduzir a transpiração excessiva das axilas, também chamada hiperidrose. Atua temporariamente nos sinais nervosos que estimulam as glândulas sudoríparas da zona tratada.",
    "Botulinum toxin can reduce excessive underarm sweating, also called hyperhidrosis. It temporarily interrupts the nerve signals that activate sweat glands in the treated area.",
    "A avaliação procura compreender a intensidade da transpiração, as suas possíveis causas e os tratamentos já realizados. Quando indicada, a aplicação é feita através de pequenas injeções superficiais distribuídas pelas axilas. O médico explica o controlo dos sintomas e o acompanhamento.",
    "An assessment considers the severity of sweating, possible causes and treatments already tried. When suitable, small superficial injections are distributed across the underarms. The doctor explains symptom management and follow-up.",
  ),
  "medicina-estetica/botox-maos": detail(
    "Este tratamento utiliza toxina botulínica para reduzir temporariamente a transpiração excessiva das palmas das mãos. Pode ser considerado quando a transpiração interfere com tarefas do dia a dia e outras medidas não são suficientes.",
    "This treatment uses botulinum toxin to temporarily reduce excessive sweating of the palms. It may be considered when sweating affects everyday tasks and other measures have been insufficient.",
    "O médico avalia os sintomas e realiza pequenas injeções nas áreas selecionadas das palmas. Antes de tratar, explica as medidas de conforto e a possibilidade de dor local ou diminuição temporária da força da mão, para ajudar a decidir se a opção é adequada.",
    "The doctor assesses your symptoms and gives small injections into selected areas of the palms. Comfort measures and possible effects, including local pain or temporary hand weakness, are discussed before treatment to help you decide whether it is suitable.",
  ),
  "medicina-estetica/botox-bruxismo": detail(
    "O bruxismo é o hábito involuntário de apertar ou ranger os dentes. Em casos selecionados, a toxina botulínica pode diminuir a força de contração dos músculos da mastigação, ajudando a controlar a tensão muscular.",
    "Bruxism is involuntary teeth clenching or grinding. In selected cases, botulinum toxin may reduce the strength of chewing-muscle contractions to help manage muscular tension.",
    "A avaliação considera a dor, os hábitos de apertamento e a função da mandíbula. Se houver indicação, são feitas injeções nos músculos selecionados. É uma opção complementar, que exige avaliação dos riscos e pode ser articulada com cuidados dentários e outras medidas para o bruxismo.",
    "The assessment considers pain, clenching habits and jaw function. If appropriate, injections are given into selected muscles. This is a complementary option that requires a discussion of risks and may be combined with dental care and other measures for bruxism.",
  ),
  "medicina-estetica/botox-enxaquecas": detail(
    "A toxina botulínica é uma opção preventiva para alguns casos de enxaqueca crónica. O objetivo é reduzir a frequência das crises; a indicação depende do diagnóstico médico e dos tratamentos anteriormente utilizados.",
    "Botulinum toxin is a preventive option for some people with chronic migraine. It aims to reduce attack frequency, with suitability depending on a medical diagnosis and treatments previously tried.",
    "A consulta revê a frequência das dores de cabeça, os sintomas e a medicação. Quando indicada, a aplicação segue um protocolo médico com injeções em pontos da cabeça e do pescoço. A resposta é acompanhada ao longo do tempo para decidir a continuidade do tratamento.",
    "The consultation reviews headache frequency, symptoms and medication. When appropriate, injections follow a medical protocol involving sites on the head and neck. Your response is monitored over time to decide whether treatment should continue.",
  ),
  "medicina-estetica/fios-tensores": detail(
    "Os fios tensores são fios absorvíveis colocados sob a pele. Os fios de tração permitem dar suporte aos tecidos; os fios mono são utilizados sobretudo em protocolos dirigidos à qualidade e firmeza da pele. A escolha depende da zona e do grau de flacidez.",
    "Thread treatments place absorbable threads beneath the skin. Traction threads provide tissue support, while mono threads are mainly used in protocols addressing skin quality and firmness. The choice depends on the area and degree of sagging.",
    "O médico define o tipo, o número e a posição dos fios, que são introduzidos através de pontos de entrada na pele. A avaliação esclarece o alcance do tratamento e os cuidados posteriores. Pode haver inchaço, nódoas negras ou desconforto temporário.",
    "The doctor selects the type, number and placement of threads, which are inserted through small entry points in the skin. The assessment explains the treatment's scope and aftercare. Temporary swelling, bruising or discomfort may occur.",
  ),
  "medicina-estetica/skin-booster": detail(
    "Um Skin Booster é um tratamento injetável dirigido à hidratação e à qualidade da pele. Muitas formulações utilizam ácido hialurónico, uma substância que retém água, para melhorar a aparência de pele desidratada e de linhas finas.",
    "A Skin Booster is an injectable treatment focused on skin hydration and quality. Many formulations use hyaluronic acid, a water-binding substance, to improve the appearance of dehydrated skin and fine lines.",
    "O produto é aplicado em pequenas quantidades nas zonas selecionadas após avaliação da pele. A formulação, a técnica e o plano de sessões são definidos pelo médico. O tratamento visa a qualidade da pele, sem ter como objetivo principal aumentar volumes faciais.",
    "Small amounts of product are injected into areas selected after a skin assessment. The doctor determines the formulation, technique and session plan. The main aim is to improve skin quality rather than add facial volume.",
  ),
  "medicina-estetica/fillers": detail(
    "Os preenchimentos faciais utilizam produtos injetáveis, frequentemente à base de ácido hialurónico, para repor volume ou ajustar contornos. Podem ser aplicados no rosto, nos lábios ou, em casos selecionados, nas olheiras e no nariz.",
    "Dermal fillers use injectable products, often based on hyaluronic acid, to restore volume or refine contours. They may be used on the face, lips or, in selected cases, under the eyes and on the nose.",
    "O médico avalia as proporções e a anatomia antes de escolher o produto, a quantidade e os pontos de aplicação. O preenchimento é realizado com agulha ou cânula. Os riscos são explicados, incluindo complicações vasculares raras mas graves, sobretudo em zonas de maior risco, como o nariz.",
    "The doctor assesses proportions and anatomy before selecting the product, amount and injection sites. Fillers are placed using a needle or cannula. Risks are explained, including rare but serious vascular complications, particularly in higher-risk areas such as the nose.",
  ),
  "medicina-estetica/bioestimuladores": detail(
    "Os bioestimuladores são tratamentos injetáveis que promovem a produção de colagénio, uma proteína que dá suporte à pele. Radiesse utiliza hidroxiapatite de cálcio e Sculptra utiliza ácido poli-L-láctico; são produtos diferentes, escolhidos conforme a necessidade clínica.",
    "Biostimulators are injectable treatments that encourage production of collagen, a protein that supports the skin. Radiesse uses calcium hydroxylapatite and Sculptra uses poly-L-lactic acid. They are different products selected according to clinical needs.",
    "Após observar a pele e os volumes faciais, o médico seleciona o produto e aplica-o nas zonas adequadas. O objetivo pode ser melhorar firmeza, suporte ou volume, consoante a técnica. A evolução é gradual e o plano de sessões e os cuidados são individualizados.",
    "After examining the skin and facial volume, the doctor selects a product and injects it into suitable areas. Depending on the technique, the aim may be improved firmness, support or volume. Changes develop gradually, with an individual session and aftercare plan.",
  ),
  "medicina-estetica/exossomas": detail(
    "Os exossomas são pequenas partículas libertadas por células, estudadas pela sua participação na comunicação entre células. A sua utilização em estética é uma área em desenvolvimento, e os efeitos dependem do produto e da forma de aplicação.",
    "Exosomes are tiny particles released by cells and studied for their role in cell communication. Their use in aesthetics is an evolving field, and effects depend on the product and method of application.",
    "Antes de escolher esta opção, a equipa esclarece qual o produto utilizado, a sua finalidade e como é aplicado. A evidência disponível e os limites do tratamento são discutidos na avaliação. A opção avulsa e o pack de seis tratamentos estão identificados nos preços.",
    "Before choosing this option, the team explains the product used, its purpose and how it is applied. Available evidence and treatment limitations are discussed at assessment. Individual treatment and six-treatment pack options are identified in the prices.",
  ),
  "medicina-estetica/ultracol": detail(
    "Ultracol é um produto injetável que utiliza micropartículas de polidioxanona, ou PDO, um material absorvível. É utilizado em medicina estética em protocolos dirigidos ao suporte dos tecidos, com indicação definida após avaliação médica.",
    "Ultracol is an injectable product containing microparticles of polydioxanone, or PDO, an absorbable material. It is used in aesthetic medicine in protocols addressing tissue support, following medical assessment.",
    "O médico confirma a formulação adequada, as zonas a tratar e a quantidade necessária antes da aplicação. A técnica e os cuidados dependem do plano escolhido. As opções por mililitro e Full Face estão apresentadas na tabela de preços.",
    "The doctor confirms the appropriate formulation, treatment areas and amount before injection. Technique and aftercare depend on the chosen plan. Per-millilitre and Full Face options are shown in the price list.",
  ),
  "medicina-estetica/peeling-quimico": detail(
    "O peeling químico aplica uma solução na pele para provocar uma renovação controlada das camadas superficiais. Pode ser escolhido para melhorar textura, manchas ou determinadas alterações associadas à acne, dependendo da fórmula e da profundidade.",
    "A chemical peel applies a solution to the skin to produce controlled renewal of its outer layers. Depending on the formulation and depth, it may address uneven texture, pigmentation or certain acne-related concerns.",
    "A pele é avaliada e preparada antes da aplicação do peeling. O profissional seleciona a solução e o tempo de contacto. A opção com microneedling combina o peeling com microperfurações controladas, quando adequado. São explicados os cuidados de hidratação e proteção solar após o procedimento.",
    "The skin is assessed and prepared before the peel is applied. The practitioner selects the solution and contact time. The microneedling option combines the peel with controlled tiny skin punctures when suitable. Hydration and sun-protection guidance is provided for aftercare.",
  ),
  "medicina-estetica/plasma-rico-em-plaquetas": detail(
    "O plasma rico em plaquetas, ou PRP, é preparado a partir de uma pequena amostra do seu sangue. Concentra plaquetas e os seus fatores de crescimento, sendo utilizado em alguns protocolos médicos dirigidos à qualidade da pele.",
    "Platelet-rich plasma, or PRP, is prepared from a small sample of your own blood. It concentrates platelets and their growth factors and is used in some medical protocols addressing skin quality.",
    "O procedimento envolve uma colheita de sangue, a separação dos componentes por centrifugação e a aplicação do plasma nas zonas selecionadas. A técnica é definida pelo médico. Os possíveis benefícios, a evidência e o plano de tratamento são discutidos na avaliação.",
    "The procedure involves taking a blood sample, separating its components by centrifugation and applying the plasma to selected areas. The doctor determines the technique. Potential benefits, evidence and the treatment plan are discussed at assessment.",
  ),
  "medicina-estetica/mesoterapia": detail(
    "A mesoterapia facial consiste em pequenas injeções superficiais dirigidas à hidratação e à qualidade da pele. Neste catálogo, as opções NCTF combinam ácido hialurónico com outros componentes, como vitaminas e aminoácidos.",
    "Facial mesotherapy uses small superficial injections to address skin hydration and quality. The NCTF options in this catalogue combine hyaluronic acid with other components, including vitamins and amino acids.",
    "O produto é aplicado em pontos selecionados do rosto ou de outras zonas indicadas pelo médico. Nanosoft é um dispositivo de microagulhas utilizado para realizar aplicações superficiais. A opção adequada e o plano de sessões dependem da avaliação da pele.",
    "The product is injected at selected points on the face or other areas indicated by the doctor. Nanosoft is a microneedle device used for superficial injections. The appropriate option and session plan depend on your skin assessment.",
  ),
  "medicina-estetica/terapia-fotobiodinamica": detail(
    "Foto-biodinâmica é a designação de um tratamento do catálogo dirigido a cuidados da pele. A indicação e a abordagem são esclarecidas pela equipa conforme a preocupação apresentada, como acne, vermelhidão, manchas ou sinais de envelhecimento.",
    "Photo-biodynamic treatment is a catalogue option for skin care. The team clarifies its suitability and approach according to the concern, such as acne, redness, pigmentation or signs of ageing.",
    "A sessão é definida após observar a pele e rever os seus antecedentes. A equipa explica o equipamento, os produtos eventualmente utilizados e os cuidados necessários antes de iniciar. O protocolo específico e o número de sessões devem ser confirmados na avaliação.",
    "The session is planned after examining the skin and reviewing your health history. The team explains the equipment, any products used and the necessary care before proceeding. The specific protocol and number of sessions should be confirmed at assessment.",
  ),
  "medicina-estetica/profhilo": detail(
    "Profhilo é um tratamento injetável à base de ácido hialurónico dirigido à hidratação e à elasticidade da pele. É utilizado para melhorar a qualidade cutânea e abordar a perda de firmeza, com uma aplicação diferente da de um preenchimento de volume.",
    "Profhilo is a hyaluronic-acid injectable treatment focused on skin hydration and elasticity. It is used to improve skin quality and address reduced firmness, with an approach that differs from volume-enhancing fillers.",
    "O médico avalia a pele e aplica pequenas quantidades do produto em pontos selecionados. O plano pode envolver várias sessões e é definido conforme a zona e as necessidades individuais. São explicados os cuidados posteriores e possíveis efeitos locais, como pequenas marcas, inchaço ou nódoas negras.",
    "The doctor assesses the skin and injects small amounts of product at selected points. The plan may involve several sessions, depending on the area and individual needs. Aftercare and possible local effects, such as small marks, swelling or bruising, are explained.",
  ),
  "medicina-estetica/microneedling": detail(
    "O microneedling utiliza microagulhas para criar pequenas perfurações controladas na pele. Este estímulo desencadeia processos de reparação e produção de colagénio, podendo melhorar a aparência de textura irregular, linhas finas e algumas cicatrizes.",
    "Microneedling uses tiny needles to create controlled punctures in the skin. This stimulates repair and collagen production and may improve the appearance of uneven texture, fine lines and certain scars.",
    "Após preparar a pele, o profissional passa o dispositivo nas zonas escolhidas, ajustando a profundidade ao objetivo e à área. São explicados os cuidados de recuperação, incluindo hidratação e proteção solar. O número de sessões depende da alteração a tratar e da resposta da pele.",
    "After preparing the skin, the practitioner moves the device over selected areas, adjusting needle depth to the goal and location. Recovery care, including hydration and sun protection, is explained. The number of sessions depends on the concern and skin response.",
  ),
  "medicina-capilar/consulta-avaliacao-medicina-capilar": detail(
    "A consulta de medicina capilar avalia a queda de cabelo, a diminuição da densidade e alterações do couro cabeludo. Identificar a causa é essencial, porque diferentes tipos de queda exigem abordagens diferentes.",
    "A hair medicine consultation assesses hair loss, thinning and scalp changes. Identifying the cause is essential because different types of hair loss require different approaches.",
    "Inclui a revisão da evolução dos sintomas, antecedentes, medicação e hábitos, seguida da observação do cabelo e couro cabeludo. O médico pode recomendar exames quando necessários e discutir opções de tratamento. Nas consultas seguintes, é acompanhada a evolução e ajustado o plano.",
    "It includes a review of symptom progression, health history, medication and habits, followed by examination of the hair and scalp. The doctor may recommend tests where needed and discuss treatment options. Follow-up consultations review progress and adjust the plan.",
  ),
  "medicina-capilar/tratamentos-capilares": detail(
    "Os tratamentos capilares são planos de cuidado definidos de acordo com a causa da queda e a condição do couro cabeludo. Podem reunir diferentes medidas médicas para controlar a queda e apoiar a saúde do cabelo.",
    "Hair treatments are care plans based on the cause of hair loss and the condition of the scalp. They may combine different medical measures to manage shedding and support hair health.",
    "O plano começa por uma avaliação capilar. Conforme o diagnóstico, o médico pode discutir cuidados do couro cabeludo, medicação ou procedimentos, como PRP e mesoterapia. As opções efetivamente recomendadas e o acompanhamento são definidos para cada pessoa.",
    "The plan begins with a hair assessment. Depending on the diagnosis, the doctor may discuss scalp care, medication or procedures such as PRP and mesotherapy. The recommended options and follow-up are determined individually.",
  ),
  "medicina-capilar/prp-capilar": detail(
    "O PRP capilar utiliza plasma rico em plaquetas preparado a partir do seu próprio sangue. É aplicado no couro cabeludo para apoiar o crescimento em alguns tipos de queda de cabelo, sobretudo quando os folículos ainda estão ativos.",
    "Hair PRP uses platelet-rich plasma prepared from your own blood. It is injected into the scalp to support growth in some types of hair loss, particularly where follicles remain active.",
    "A sessão envolve uma pequena colheita de sangue, centrifugação para concentrar as plaquetas e aplicação no couro cabeludo através de injeções. A indicação depende do diagnóstico capilar. O catálogo apresenta a sessão individual e o pack de três sessões.",
    "The session involves taking a small blood sample, centrifuging it to concentrate platelets and injecting the plasma into the scalp. Suitability depends on the hair-loss diagnosis. The catalogue offers an individual session and a three-session pack.",
  ),
  "medicina-capilar/mesoterapia-capilar": detail(
    "A mesoterapia capilar consiste em injeções no couro cabeludo de substâncias selecionadas pelo médico. As opções deste catálogo incluem dutasterida, um medicamento que atua numa via hormonal associada à queda de cabelo de padrão hereditário, e protocolos com vitaminas.",
    "Hair mesotherapy involves scalp injections of substances selected by the doctor. Catalogue options include dutasteride, a medicine acting on a hormonal pathway involved in hereditary-pattern hair loss, and protocols with vitamins.",
    "Após diagnóstico, o médico define a composição e realiza as aplicações nas áreas escolhidas. A utilização local de dutasterida exige discussão dos benefícios, riscos e limites da evidência. Existem opções individuais e packs; a composição de cada protocolo é confirmada antes do tratamento.",
    "Following diagnosis, the doctor selects the formulation and injects it into chosen areas. Local dutasteride use requires discussion of benefits, risks and evidence limitations. Individual options and packs are available; each protocol's formulation is confirmed before treatment.",
  ),
  "medicina-capilar/teste-genetico": detail(
    "Um teste genético analisa características do ADN, o material que contém a informação genética. Em medicina capilar, pode ser usado como informação complementar à avaliação; o seu significado depende dos genes analisados e da validação do teste.",
    "A genetic test examines features of DNA, the material carrying genetic information. In hair medicine, it may provide information alongside a clinical assessment. Its meaning depends on the genes examined and the test's validation.",
    "A equipa explica o teste disponível, o tipo de amostra e o que os resultados podem esclarecer. Após a análise, os resultados devem ser interpretados no contexto da história clínica. O painel utilizado, os prazos e a consulta de interpretação são confirmados com a equipa.",
    "The team explains the available test, sample type and what the results may clarify. Results should be interpreted in the context of your health history. The panel used, turnaround time and arrangements for interpreting the results are confirmed with the team.",
  ),
  "nutricao/nutricao-funcional": detail(
    "A consulta de nutrição clínica funcional analisa a alimentação em conjunto com a saúde, a rotina e os objetivos pessoais. Procura estabelecer escolhas alimentares adequadas às necessidades individuais e hábitos que possam ser mantidos no dia a dia.",
    "A functional clinical nutrition consultation considers diet alongside health, daily routine and personal goals. It aims to develop food choices suited to individual needs and habits that can be maintained in everyday life.",
    "A primeira consulta revê os hábitos alimentares, antecedentes de saúde, preferências e dificuldades, para definir orientações práticas e um plano alimentar quando adequado. Nas consultas seguintes, são acompanhados os progressos e ajustadas as recomendações. Os exames são considerados apenas quando clinicamente justificados.",
    "The first consultation reviews eating habits, health history, preferences and difficulties to provide practical guidance and, where appropriate, a meal plan. Follow-up consultations review progress and adjust recommendations. Tests are considered only where clinically justified.",
  ),
  "nutricao/nutricao-emagrecimento": detail(
    "O acompanhamento nutricional para gestão do peso ajuda a adaptar a alimentação às suas necessidades e objetivos de saúde. Considera a rotina, as preferências e os fatores que dificultam manter hábitos, para procurar mudanças realistas e sustentáveis.",
    "Nutrition support for weight management helps adapt eating patterns to your needs and health goals. It considers routine, preferences and barriers to maintaining habits, with an emphasis on realistic, sustainable changes.",
    "A consulta inclui a avaliação da alimentação, antecedentes e evolução do peso. São definidas metas e orientações ajustadas ao seu contexto, com acompanhamento para rever dificuldades e adaptar o plano. O ritmo de mudança varia de pessoa para pessoa.",
    "The consultation assesses your diet, health history and weight changes. Goals and guidance are tailored to your circumstances, with follow-up to review difficulties and adapt the plan. The pace of change varies between individuals.",
  ),
  "estetica-corporal/plano-detox": detail(
    "Plano Detox é a designação de um plano de cuidados corporais orientado para conforto e bem-estar. O nome identifica uma proposta do catálogo; os tratamentos concretos são definidos na avaliação.",
    "Detox Plan is the name of a body-care plan focused on comfort and wellbeing. The name identifies a catalogue option; its specific treatments are determined at assessment.",
    "A equipa avalia os seus objetivos e explica quais os cuidados recomendados, a sua sequência e o número de sessões. A composição e o valor são confirmados antes de avançar. Este plano é distinto do programa Slim Detox, que tem conteúdos próprios publicados no catálogo.",
    "The team assesses your goals and explains the recommended care, its sequence and the number of sessions. Contents and price are confirmed before proceeding. This plan is separate from the Slim Detox programme, which has its own published catalogue contents.",
  ),
  "estetica-corporal/reducao-medidas": detail(
    "O tratamento de redução de medidas é um plano de contorno corporal dirigido a zonas específicas. A abordagem depende de fatores como gordura localizada, firmeza da pele e retenção de líquidos, que exigem cuidados diferentes.",
    "Body measurement reduction is a contouring plan for specific areas. The approach depends on concerns such as localised fat, skin firmness and fluid retention, which require different types of care.",
    "A avaliação identifica as zonas a cuidar e permite escolher as técnicas apropriadas. O plano, as sessões e a forma de acompanhar as medidas são explicados antes do início. Os tratamentos de contorno corporal têm um objetivo local e não substituem a gestão clínica do peso.",
    "An assessment identifies the areas to address and helps select appropriate techniques. The plan, sessions and approach to monitoring measurements are explained before starting. Body contouring has a local aim and does not replace clinical weight management.",
  ),
  "estetica-corporal/lipo-gordura": detail(
    "Lipo Gordura é a designação de um cuidado corporal do catálogo dirigido a preocupações com gordura localizada e contorno. A abordagem concreta depende da avaliação e do protocolo disponível na clínica.",
    "Lipo Gordura is a catalogue body-care option addressing concerns about localised fat and contour. The specific approach depends on assessment and the protocol available at the clinic.",
    "A equipa observa a zona e esclarece qual a técnica proposta, o que a sessão envolve e os cuidados associados. O número de sessões e o valor são definidos antes de iniciar o plano, de acordo com as suas necessidades.",
    "The team examines the area and explains the proposed technique, what the session involves and the associated care. The number of sessions and price are agreed before the plan begins, according to your needs.",
  ),
  "estetica-corporal/coolfit": detail(
    "Coolfit é uma opção de cuidados corporais do catálogo, integrada num plano definido após avaliação. A equipa esclarece a tecnologia utilizada e a sua adequação aos objetivos de contorno ou tonificação apresentados.",
    "Coolfit is a catalogue body-care option included in a plan following assessment. The team explains the technology used and its suitability for your contouring or toning goals.",
    "A sessão é adaptada à zona selecionada e ao protocolo proposto. Antes de avançar, são explicados o procedimento, as sensações durante a aplicação e os cuidados necessários. A duração, as sessões e o preço são confirmados com a equipa.",
    "The session is adapted to the selected area and proposed protocol. The procedure, sensations during treatment and necessary care are explained beforehand. Duration, sessions and price are confirmed with the team.",
  ),
  "estetica-corporal/radiofrequencia-corpo": detail(
    "A radiofrequência corporal utiliza energia para aquecer os tecidos de forma controlada. É aplicada em cuidados de firmeza da pele e contorno corporal, com o objetivo de estimular alterações no colagénio e melhorar a aparência da zona tratada.",
    "Body radiofrequency uses energy to heat tissue in a controlled way. It is used in skin-firmness and body-contouring care to stimulate changes in collagen and improve the appearance of the treated area.",
    "O profissional aplica o dispositivo nas zonas escolhidas, ajustando os parâmetros à pele e ao objetivo. Durante a sessão sente-se habitualmente calor. O plano de sessões depende da área, do equipamento e da resposta individual; os cuidados são explicados antes do início.",
    "The practitioner applies the device to selected areas and adjusts its settings to the skin and goal. A warming sensation is common during the session. The session plan depends on the area, equipment and individual response; care is explained before starting.",
  ),
  "estetica-corporal/hifu-corpo": detail(
    "HIFU significa ultrassons focalizados de alta intensidade. Em tratamentos corporais, concentra energia a profundidades selecionadas para abordar a firmeza e, conforme o dispositivo, o contorno da zona. A indicação depende da pele e dos tecidos a tratar.",
    "HIFU means high-intensity focused ultrasound. In body treatments, it concentrates energy at selected depths to address firmness and, depending on the device, contour. Suitability depends on the skin and tissue being treated.",
    "Após avaliação, o profissional aplica o dispositivo sobre a pele na área definida. As opções publicadas incluem abdómen, braços e glúteos. Os parâmetros, os cuidados e o plano são ajustados ao caso, sem estabelecer um número fixo de sessões para todas as pessoas.",
    "Following assessment, the practitioner applies the device to the skin in the selected area. Published options include the abdomen, arms and buttocks. Settings, care and the plan are tailored individually, without a fixed session count for everyone.",
  ),
  "estetica-corporal/massagens-redutoras-modeladoras-anticeluliticas": detail(
    "Estas massagens utilizam manobras manuais dirigidas aos tecidos das zonas com celulite ou preocupações de contorno. Podem proporcionar conforto e uma melhoria temporária da aparência da pele, mas não removem gordura de forma permanente.",
    "These massages use manual techniques on areas with cellulite or contour concerns. They may improve comfort and temporarily improve skin appearance, but do not permanently remove fat.",
    "O profissional trabalha as áreas selecionadas com movimentos e pressão ajustados à sua tolerância. A sessão pode integrar um plano de cuidados corporais, conforme a avaliação. As opções individuais e os packs estão identificados nos preços, com os respetivos números de tratamentos.",
    "The practitioner works on selected areas using movements and pressure suited to your comfort. The session may form part of a body-care plan following assessment. Individual options and packs are identified in the prices with their treatment counts.",
  ),
  "estetica-corporal/criolipolise": detail(
    "A criolipólise utiliza arrefecimento controlado para reduzir pequenos depósitos de gordura localizada. As células de gordura afetadas são eliminadas gradualmente pelo organismo. É um tratamento de contorno corporal, com indicação para zonas e pessoas selecionadas.",
    "Cryolipolysis uses controlled cooling to reduce small deposits of localised fat. Affected fat cells are gradually cleared by the body. It is a contouring treatment for selected areas and suitable individuals.",
    "Após avaliar a zona, é colocado um aplicador que mantém o arrefecimento durante o procedimento. A avaliação esclarece as contraindicações e os riscos, incluindo a possibilidade rara de aumento da gordura na zona tratada. O plano depende da área e da resposta individual.",
    "After assessing the area, an applicator delivers cooling during the procedure. The assessment explains contraindications and risks, including rare enlargement of fat in the treated area. The plan depends on the area and individual response.",
  ),
  "estetica-corporal/drenagem-linfatica": detail(
    "A drenagem linfática manual utiliza movimentos suaves e ritmados para favorecer o movimento da linfa, o líquido que circula no sistema linfático. Pode ajudar no conforto de algumas situações de inchaço, quando existe indicação adequada.",
    "Manual lymphatic drainage uses gentle, rhythmic movements to support the movement of lymph, the fluid circulating through the lymphatic system. It may improve comfort in certain swelling conditions when appropriately indicated.",
    "O profissional realiza manobras leves nas zonas selecionadas, respeitando os trajetos da drenagem linfática. O catálogo apresenta sessões de 40 ou 60 minutos. A origem do inchaço e a adequação da técnica devem ser avaliadas antes do tratamento.",
    "The practitioner uses light movements on selected areas, following lymphatic drainage pathways. The catalogue lists 40-minute and 60-minute sessions. The cause of swelling and suitability of the technique should be assessed before treatment.",
  ),
  "estetica-corporal/cavitacao": detail(
    "A cavitação é uma técnica de contorno corporal que utiliza ultrassons em zonas de gordura localizada. A aplicação e o efeito dependem do equipamento utilizado e da indicação definida na avaliação.",
    "Cavitation is a body-contouring technique using ultrasound on areas of localised fat. The application and effect depend on the equipment used and suitability established at assessment.",
    "O dispositivo é aplicado sobre a pele nas áreas escolhidas. O profissional ajusta os parâmetros e explica o plano de sessões e os cuidados associados. Trata-se de uma abordagem local de contorno, que não tem como objetivo tratar obesidade ou provocar perda de peso generalizada.",
    "The device is applied to the skin over selected areas. The practitioner adjusts the settings and explains the session plan and associated care. This is a local contouring approach, rather than a treatment for obesity or overall weight loss.",
  ),
  "estetica-corporal/microneedling-corporal": detail(
    "O microneedling corporal utiliza microagulhas para estimular a reparação da pele em zonas do corpo. Pode ser considerado para melhorar a aparência de algumas estrias, cicatrizes e alterações de textura, conforme a avaliação.",
    "Body microneedling uses tiny needles to stimulate skin repair on body areas. Depending on assessment, it may be considered to improve the appearance of certain stretch marks, scars and texture changes.",
    "A zona é preparada e o dispositivo é aplicado com profundidade ajustada à pele e à alteração a tratar. São explicados os cuidados de recuperação e proteção solar. A extensão da área e a resposta individual orientam o plano de sessões.",
    "The area is prepared and the device is applied at a depth suited to the skin and concern. Recovery and sun-protection guidance is provided. The size of the area and individual response guide the session plan.",
  ),
  "estetica-facial/radiofrequencia-rosto": detail(
    "A radiofrequência facial utiliza energia para produzir calor controlado nos tecidos. Este estímulo pode favorecer a remodelação do colagénio, sendo utilizado em cuidados dirigidos à firmeza e à qualidade da pele do rosto.",
    "Facial radiofrequency uses energy to produce controlled heat in tissue. This may support collagen remodelling and is used in care addressing facial skin firmness and quality.",
    "O profissional aplica o dispositivo nas zonas selecionadas e acompanha a resposta da pele durante a sessão. Os parâmetros e o plano são adaptados à avaliação. É habitual sentir calor, e os cuidados posteriores são explicados conforme o equipamento e a aplicação.",
    "The practitioner applies the device to selected areas and monitors the skin during the session. Settings and the plan are adapted to assessment. A warming sensation is common, and aftercare is explained according to the equipment and application.",
  ),
  "estetica-facial/hifu-rosto": detail(
    "O HIFU facial utiliza ultrassons focalizados para concentrar energia em camadas selecionadas dos tecidos. É uma abordagem sem cirurgia dirigida à firmeza e ao suporte do rosto, cuja adequação depende do grau de flacidez.",
    "Facial HIFU uses focused ultrasound to concentrate energy in selected tissue layers. It is a non-surgical approach to facial firmness and support, with suitability depending on the degree of sagging.",
    "O dispositivo é aplicado sobre a pele após definir as zonas e os parâmetros. As opções incluem maçãs do rosto e contorno dos olhos, pescoço ou rosto completo. O profissional explica os limites da técnica e ajusta o tratamento à anatomia e às necessidades de cada zona.",
    "The device is applied to the skin after defining areas and settings. Options include cheeks and eye contour, neck or full face. The practitioner explains the technique's limitations and adapts treatment to the anatomy and needs of each area.",
  ),
  "estetica-facial/drenagem-facial": detail(
    "A drenagem facial é uma técnica manual suave aplicada no rosto e, conforme o plano, no pescoço. Os movimentos procuram favorecer a drenagem dos líquidos nos tecidos e proporcionar conforto em algumas situações de inchaço facial.",
    "Facial drainage is a gentle manual technique applied to the face and, depending on the plan, the neck. The movements aim to support tissue-fluid drainage and improve comfort in certain cases of facial puffiness.",
    "A sessão utiliza manobras leves, ajustadas à sensibilidade da pele. A duração publicada é de 25 minutos. Antes de tratar, é importante perceber a origem do inchaço e informar a equipa sobre procedimentos recentes ou alterações de saúde.",
    "The session uses light movements adapted to skin sensitivity. The published duration is 25 minutes. Before treatment, the cause of swelling should be considered, and the team informed of recent procedures or health changes.",
  ),
  "estetica-facial/microblading": detail(
    "O microblading é uma técnica de pigmentação semipermanente das sobrancelhas. Utiliza pequenos traços na superfície da pele para imitar pelos e melhorar a definição ou preencher visualmente zonas com falhas.",
    "Microblading is a semi-permanent eyebrow pigmentation technique. Fine strokes are made at the skin surface to imitate hairs, improve definition or visually fill sparse areas.",
    "O procedimento começa pela definição do desenho e da cor, de acordo com o rosto e as preferências. O pigmento é aplicado manualmente com uma lâmina de pequenas agulhas. O preço publicado inclui retoque; a equipa explica a cicatrização e o momento adequado para o realizar.",
    "The procedure begins by agreeing the shape and colour according to your face and preferences. Pigment is applied manually using a blade of tiny needles. The published price includes a touch-up; the team explains healing and when to schedule it.",
  ),
  "estetica-facial/peeling-das-estrelas": detail(
    "Peeling das Estrelas é a designação de um cuidado facial do catálogo dirigido à renovação da superfície da pele. A composição e a intensidade do protocolo são esclarecidas pela equipa conforme o seu tipo de pele.",
    "Peeling das Estrelas is a named facial-care option in the catalogue addressing surface skin renewal. The team explains the protocol's formulation and intensity according to your skin type.",
    "A sessão começa pela observação e preparação da pele, seguida dos passos definidos no protocolo da clínica. Antes da aplicação, a equipa explica os produtos utilizados e os cuidados posteriores, incluindo a proteção solar adequada.",
    "The session begins with skin assessment and preparation, followed by the steps in the clinic's protocol. Before application, the team explains the products used and aftercare, including suitable sun protection.",
  ),
  "estetica-facial/peeling-glow-verao": detail(
    "Peeling Glow Verão é uma opção de cuidado facial do catálogo para renovação superficial da pele. O protocolo publicado inclui um peeling estelar facial, cuja composição e adequação são esclarecidas na avaliação.",
    "Summer Glow Peel is a catalogue facial-care option for surface skin renewal. The published protocol includes one stellar facial peel, with its formulation and suitability clarified at assessment.",
    "Inclui a preparação da pele e a aplicação do peeling previsto no protocolo. A equipa explica os cuidados de hidratação e proteção solar. A escolha e o momento do tratamento devem considerar a sensibilidade da pele e a exposição ao sol.",
    "It involves skin preparation and application of the peel specified in the protocol. The team explains hydration and sun protection. Treatment choice and timing should take skin sensitivity and sun exposure into account.",
  ),
  "servicos/limpeza-de-pele": detail(
    "A limpeza de pele é um cuidado facial dirigido à remoção de impurezas e à desobstrução de poros, quando adequado. A abordagem é adaptada ao tipo de pele, à sensibilidade e à presença de oleosidade ou comedões, como pontos negros.",
    "Skin cleansing is a facial treatment addressing impurities and blocked pores where appropriate. The approach is adapted to skin type, sensitivity, oiliness and comedones, such as blackheads.",
    "A sessão pode envolver limpeza, esfoliação suave e extração seletiva quando indicada, seguida de cuidados de conforto e hidratação. Os passos são escolhidos conforme a observação da pele, evitando manipular lesões inflamatórias que necessitem de avaliação médica.",
    "The session may involve cleansing, gentle exfoliation and selective extraction where appropriate, followed by soothing and hydrating care. Steps are chosen after examining the skin, avoiding manipulation of inflamed lesions that need medical assessment.",
  ),
  "servicos/esfoliacao-corporal": detail(
    "A esfoliação corporal remove células mortas da superfície da pele através de um cuidado esfoliante. Ajuda a deixar a pele mais suave e prepara-a para outros cuidados de hidratação.",
    "Body exfoliation removes dead cells from the skin surface using an exfoliating treatment. It helps leave the skin smoother and prepares it for moisturising care.",
    "O produto é aplicado com movimentos adaptados às zonas do corpo e à sensibilidade da pele, sendo depois removido. A intensidade e os cuidados finais são ajustados ao seu caso. Áreas irritadas, lesionadas ou recentemente tratadas exigem atenção antes da esfoliação.",
    "The product is applied with movements adapted to body areas and skin sensitivity, then removed. Intensity and finishing care are tailored to you. Irritated, injured or recently treated areas require attention before exfoliation.",
  ),
  "servicos/reflexologia": detail(
    "A reflexologia utiliza pressão em pontos dos pés como uma prática de relaxamento. Pode proporcionar uma pausa de conforto e bem-estar, sem substituir a avaliação ou o tratamento de problemas de saúde.",
    "Reflexology uses pressure on points of the feet as a relaxation practice. It may provide comfort and wellbeing, without replacing assessment or treatment of health problems.",
    "O profissional aplica pressão manual em pontos selecionados, ajustando a intensidade à sua tolerância. Antes da sessão, são consideradas a sensibilidade dos pés e possíveis lesões. O objetivo é o relaxamento, sem prometer efeitos sobre órgãos ou doenças específicas.",
    "The practitioner applies manual pressure at selected points, adjusting intensity to your comfort. Foot sensitivity and possible injuries are considered beforehand. The aim is relaxation, without promising effects on organs or specific diseases.",
  ),
  "servicos/massagem-relaxante": detail(
    "A massagem relaxante utiliza movimentos suaves e ritmados para promover relaxamento e aliviar a sensação de tensão muscular. É um cuidado de bem-estar adaptado ao conforto e às preferências de cada pessoa.",
    "Relaxation massage uses gentle, rhythmic movements to encourage relaxation and ease the feeling of muscular tension. It is a wellbeing treatment adapted to each person's comfort and preferences.",
    "O profissional ajusta a pressão e as zonas trabalhadas após uma breve conversa sobre as suas necessidades. A opção de massagem relaxante completa publicada no catálogo tem 60 minutos. Pode indicar as áreas onde sente maior tensão e as suas preferências de pressão.",
    "The practitioner adjusts pressure and areas treated after a brief discussion of your needs. The published full relaxation massage option lasts 60 minutes. You can identify areas of tension and your preferred pressure.",
  ),
  "servicos/massagem-com-velas": detail(
    "A massagem com velas utiliza um produto próprio para massagem que, ao aquecer, se transforma num óleo morno. Combina movimentos relaxantes com a aplicação desse óleo para proporcionar conforto e suavidade à pele.",
    "Candle massage uses a product made specifically for massage that melts into a warm oil. It combines relaxing movements with the oil's application to provide comfort and soften the skin.",
    "O óleo é aplicado a uma temperatura confortável e a massagem é adaptada às zonas escolhidas. A equipa verifica a sensibilidade ao calor e aos ingredientes. O produto utilizado deve ser próprio para contacto com a pele.",
    "The oil is applied at a comfortable temperature and massage is adapted to selected areas. The team checks heat sensitivity and ingredient sensitivities. The product used must be intended for skin contact.",
  ),
  "servicos/massagem-desportiva": detail(
    "A massagem desportiva trabalha músculos e tecidos sujeitos ao esforço físico. Pode ajudar no conforto muscular e na sensação de recuperação após atividade, sendo adaptada ao tipo de exercício e às áreas de maior tensão.",
    "Sports massage works on muscles and soft tissues affected by physical activity. It may improve muscular comfort and the feeling of recovery after exercise, with techniques adapted to your activity and areas of tension.",
    "A sessão utiliza manobras direcionadas, com pressão ajustada à tolerância e às necessidades identificadas. O profissional considera a atividade recente e possíveis lesões. Dor persistente, lesão aguda ou limitação importante do movimento devem ser avaliadas antes da massagem.",
    "The session uses targeted techniques, with pressure suited to your comfort and identified needs. The practitioner considers recent activity and possible injuries. Persistent pain, acute injury or significant movement restriction should be assessed before massage.",
  ),
  "estetica-corporal/massagem-havaiana": detail(
    "A massagem havaiana é uma abordagem de relaxamento que utiliza movimentos amplos, fluidos e ritmados. Procura proporcionar conforto corporal e uma sensação de continuidade ao longo da sessão.",
    "Hawaiian massage is a relaxation approach using broad, flowing, rhythmic movements. It aims to provide bodily comfort and a sense of continuity throughout the session.",
    "O profissional adapta a sequência, a pressão e as áreas trabalhadas às suas preferências. Os movimentos podem utilizar mãos e antebraços. A técnica concreta e os cuidados são explicados pela equipa antes do início.",
    "The practitioner adapts the sequence, pressure and areas treated to your preferences. Movements may use the hands and forearms. The team explains the specific technique and care before the session begins.",
  ),
  "estetica-corporal/massagem-terapeutica": detail(
    "A massagem terapêutica utiliza técnicas manuais dirigidas a zonas de tensão e desconforto muscular. A abordagem depende dos sintomas e da avaliação, com o objetivo de melhorar o conforto e facilitar o movimento.",
    "Therapeutic massage uses manual techniques on areas of muscular tension and discomfort. The approach depends on symptoms and assessment, aiming to improve comfort and ease movement.",
    "A sessão começa pela identificação das áreas de desconforto e utiliza manobras com intensidade ajustada à sua tolerância. A equipa considera possíveis contraindicações. Sintomas persistentes ou sinais de lesão podem exigir avaliação clínica antes de continuar.",
    "The session begins by identifying areas of discomfort and uses techniques at an intensity suited to your tolerance. The team considers contraindications. Persistent symptoms or signs of injury may require clinical assessment before proceeding.",
  ),
  "packs-programas/pack-de-endermoterapia-radiofrequencia-e-pressoterapia": detail(
    "Este pack combina três técnicas de cuidado corporal: endermoterapia, que trabalha os tecidos por ação mecânica; radiofrequência, que utiliza calor controlado; e pressoterapia, que aplica compressão em ciclos. O plano é dirigido ao conforto e à aparência das zonas selecionadas.",
    "This pack combines three body-care techniques: endermotherapy, which works on tissue mechanically; radiofrequency, which uses controlled heat; and pressotherapy, which applies compression in cycles. The plan addresses comfort and the appearance of selected areas.",
    "As sessões são organizadas conforme a avaliação e a tolerância a cada técnica. O profissional seleciona as zonas e ajusta os parâmetros, esclarecendo como distribuir os tratamentos ao longo do programa.",
    "Sessions are organised according to assessment and tolerance of each technique. The practitioner selects the areas and adjusts the settings, explaining how treatments are scheduled throughout the programme.",
  ),
  "packs-programas/pack-de-4-massagens": detail(
    "Este pack reúne quatro sessões de massagem para dar continuidade aos cuidados de conforto e bem-estar corporal. A abordagem pode ser adaptada às suas necessidades e às modalidades abrangidas pelo pack.",
    "This pack brings together four massage sessions for continued body comfort and wellbeing care. The approach can be adapted to your needs and the massage types covered by the pack.",
    "Em cada sessão, o profissional ajusta a pressão e as áreas trabalhadas. As modalidades incluídas, a duração e a marcação das quatro sessões são confirmadas com a equipa antes de iniciar.",
    "At each session, the practitioner adjusts pressure and the areas treated. The included massage types, duration and scheduling of the four sessions are confirmed with the team before starting.",
  ),
  "packs-programas/pack-de-radiofrequencia-e-massagens-modeladoras": detail(
    "Este pack combina radiofrequência corporal e massagem modeladora. A radiofrequência utiliza aquecimento controlado dos tecidos, enquanto a massagem aplica manobras manuais nas zonas de contorno corporal selecionadas.",
    "This pack combines body radiofrequency and sculpting massage. Radiofrequency uses controlled tissue heating, while massage applies manual techniques to selected body-contouring areas.",
    "O profissional adapta os parâmetros da radiofrequência e a pressão da massagem à avaliação e ao seu conforto. A sequência dos tratamentos e a distribuição das sessões são definidas com a equipa.",
    "The practitioner adapts radiofrequency settings and massage pressure to the assessment and your comfort. Treatment sequence and session scheduling are agreed with the team.",
  ),
  "packs-programas/pack-de-massagens-anticelulite-redutoras": detail(
    "Este pack reúne sessões de massagem dirigidas a zonas com celulite ou preocupações de contorno. As manobras trabalham os tecidos e podem melhorar temporariamente o conforto e a aparência da pele.",
    "This pack brings together massage sessions for areas with cellulite or contour concerns. The techniques work on soft tissues and may temporarily improve comfort and skin appearance.",
    "As áreas e a pressão são ajustadas ao seu caso ao longo das sessões. O profissional explica o alcance da massagem e acompanha a sua tolerância. As alterações de aparência podem ser temporárias, e a massagem não elimina gordura de forma permanente.",
    "Areas and pressure are tailored throughout the sessions. The practitioner explains the scope of massage and monitors your comfort. Changes in appearance may be temporary, and massage does not permanently remove fat.",
  ),
  "packs-programas/glow-renova": detail(
    "Glow Renova combina limpeza de pele e microneedling num programa facial. A limpeza aborda impurezas e poros, enquanto o microneedling utiliza microagulhas para estimular os processos de reparação da pele.",
    "Glow Renova combines skin cleansing and microneedling in a facial programme. Cleansing addresses impurities and pores, while microneedling uses tiny needles to stimulate skin-repair processes.",
    "A pele é observada para adaptar os passos da limpeza e os parâmetros do microneedling. A equipa define a sequência e o momento adequado de cada procedimento, com orientações de hidratação e proteção solar.",
    "The skin is assessed to adapt cleansing steps and microneedling settings. The team determines the sequence and appropriate timing of each procedure, with hydration and sun-protection guidance.",
  ),
  "packs-programas/body-sculpt": detail(
    "Body Sculpt é um programa corporal que associa radiofrequência e massagem modeladora. Combina o aquecimento controlado dos tecidos com trabalho manual das zonas selecionadas, num plano dirigido à firmeza e ao contorno.",
    "Body Sculpt is a body programme combining radiofrequency and sculpting massage. It brings controlled tissue heating together with manual work on selected areas in a plan addressing firmness and contour.",
    "A avaliação orienta as áreas trabalhadas, os parâmetros e a intensidade da massagem. A equipa confirma como a massagem se integra nas sessões de radiofrequência e organiza o calendário do programa.",
    "Assessment guides the treatment areas, settings and massage intensity. The team confirms how massage is incorporated into the radiofrequency sessions and organises the programme schedule.",
  ),
  "packs-programas/colagenio-pro": detail(
    "Colagénio Pro é um programa de microneedling. As microagulhas criam perfurações controladas que estimulam a reparação e a produção de colagénio, com o objetivo de melhorar a aparência da textura da pele.",
    "Colagénio Pro is a microneedling programme. Tiny needles create controlled punctures that stimulate repair and collagen production, aiming to improve the appearance of skin texture.",
    "A profundidade e as zonas são ajustadas após avaliação da pele. As sessões são distribuídas com intervalos adequados à recuperação, e a equipa explica os cuidados entre aplicações, incluindo proteção solar.",
    "Needle depth and treatment areas are adjusted following skin assessment. Sessions are spaced to allow recovery, and the team explains care between treatments, including sun protection.",
  ),
  "packs-programas/drenagem-profunda": detail(
    "Drenagem Profunda é um programa de sessões de drenagem linfática manual. Apesar do nome, a técnica utiliza movimentos suaves para favorecer a circulação da linfa e o conforto em situações de inchaço consideradas adequadas para tratamento.",
    "Drenagem Profunda is a programme of manual lymphatic drainage sessions. Despite the name, the technique uses gentle movements to support lymph flow and comfort in swelling conditions considered suitable for treatment.",
    "O profissional avalia as zonas e realiza manobras leves orientadas pelos trajetos linfáticos. A frequência e a duração das sessões são confirmadas com a equipa, considerando a origem do inchaço e o seu estado de saúde.",
    "The practitioner assesses the areas and uses light movements following lymphatic pathways. Session frequency and duration are confirmed with the team, considering the cause of swelling and your health.",
  ),
  "packs-programas/glow-vitamina-c": detail(
    "Glow Vitamina C associa radiofrequência a um cuidado com vitamina C. A radiofrequência utiliza calor controlado para trabalhar a firmeza; o cuidado com vitamina C integra a componente de tratamento da pele do programa.",
    "Glow Vitamina C combines radiofrequency with a vitamin C treatment. Radiofrequency uses controlled heat to address firmness, while vitamin C care forms the programme's skincare component.",
    "Os parâmetros e o cuidado de vitamina C são escolhidos conforme a avaliação da pele. A formulação utilizada e a forma de integrar esse cuidado nas sessões são esclarecidas pela equipa antes do início.",
    "Settings and vitamin C care are selected according to the skin assessment. The formulation used and how this care is incorporated into the sessions are explained by the team before starting.",
  ),
  "packs-programas/lifting-rf": detail(
    "Lifting RF é um programa de radiofrequência dirigido à firmeza da pele. O dispositivo produz calor controlado nos tecidos para favorecer a remodelação do colagénio, com uma abordagem sem cirurgia.",
    "Lifting RF is a radiofrequency programme focused on skin firmness. The device produces controlled tissue heating to support collagen remodelling through a non-surgical approach.",
    "O profissional ajusta os parâmetros à zona e à condição da pele. A equipa define a distribuição das sessões e explica o alcance do programa, os cuidados necessários e a forma de acompanhar a evolução.",
    "The practitioner adjusts settings to the area and skin condition. The team schedules the sessions and explains the programme's scope, necessary care and approach to reviewing progress.",
  ),
  "packs-programas/olhar-premium": detail(
    "Olhar Premium é um programa de cuidados para a zona dos olhos. Reúne quatro tratamentos, escolhidos no contexto do protocolo da clínica e da avaliação das necessidades desta área delicada.",
    "Olhar Premium is an eye-area care programme. It brings together four treatments within the clinic's protocol, guided by assessment of this delicate area's needs.",
    "A equipa esclarece quais os procedimentos abrangidos e como são adaptados à pele da zona dos olhos. A técnica, os intervalos e os cuidados são confirmados antes de iniciar o programa.",
    "The team explains which procedures are covered and how they are adapted to the skin around the eyes. Technique, intervals and care are confirmed before starting the programme.",
  ),
  "packs-programas/silhueta-total": detail(
    "Silhueta Total combina endermologia, radiofrequência e pressoterapia em cuidados corporais. Estas técnicas utilizam, respetivamente, ação mecânica nos tecidos, calor controlado e compressão em ciclos, para abordar necessidades diferentes no mesmo plano.",
    "Silhueta Total combines endermology, radiofrequency and pressotherapy in a body-care programme. These techniques use mechanical tissue stimulation, controlled heat and compression in cycles respectively, addressing different needs within one plan.",
    "A avaliação define as zonas e a adequação de cada técnica. O profissional ajusta os parâmetros e organiza a sequência das sessões, tendo em conta o conforto e possíveis contraindicações à compressão ou ao aquecimento.",
    "Assessment determines the areas and suitability of each technique. The practitioner adjusts settings and organises the session sequence, considering comfort and possible contraindications to compression or heating.",
  ),
  "packs-programas/slim-detox": detail(
    "Slim Detox combina cavitação, que utiliza ultrassons em cuidados de contorno corporal, e pressoterapia, que aplica compressão em ciclos. É um programa de cuidados locais; o nome não significa que elimine toxinas ou provoque emagrecimento geral.",
    "Slim Detox combines cavitation, using ultrasound in body-contouring care, and pressotherapy, applying compression in cycles. It is a local body-care programme; its name does not mean it removes toxins or produces overall weight loss.",
    "O profissional seleciona as zonas e adapta os parâmetros de cada técnica. A equipa confirma a adequação da compressão e dos ultrassons, explica os cuidados e organiza as sessões de acordo com a avaliação.",
    "The practitioner selects areas and adapts each technique's settings. The team checks suitability for compression and ultrasound, explains care and schedules sessions according to assessment.",
  ),
  "packs-programas/ice-lifting": detail(
    "Ice Lifting associa radiofrequência, hidrodermoabrasão e crioterapia num cuidado de pele. Combina calor controlado, um procedimento de limpeza e esfoliação com água ou soluções próprias, e aplicação de frio conforme o protocolo.",
    "Ice Lifting combines radiofrequency, hydrodermabrasion and cryotherapy in a skincare treatment. It brings together controlled heat, cleansing and exfoliation using water or suitable solutions, and cold application according to the protocol.",
    "A equipa avalia a pele e adapta a sequência e a intensidade das aplicações. Os produtos, o equipamento e os cuidados finais são explicados antes do procedimento, considerando a sensibilidade ao calor e ao frio.",
    "The team assesses the skin and adapts the sequence and intensity of applications. Products, equipment and finishing care are explained before the procedure, considering heat and cold sensitivity.",
  ),
  "programas-medicos/glow-face": detail(
    "Glow Face combina Skin Booster e toxina botulínica num programa facial. O Skin Booster dirige-se à hidratação e qualidade da pele; a toxina botulínica reduz temporariamente a atividade de músculos que formam linhas de expressão.",
    "Glow Face combines a Skin Booster and botulinum toxin in a facial programme. The Skin Booster addresses skin hydration and quality; botulinum toxin temporarily reduces the activity of muscles that create expression lines.",
    "A avaliação médica define as zonas, o produto e os pontos de aplicação de cada componente. A sequência e o momento dos procedimentos são ajustados ao seu caso, com explicação dos riscos e dos cuidados posteriores.",
    "Medical assessment defines the areas, product and injection sites for each component. Procedure sequence and timing are tailored to you, with a discussion of risks and aftercare.",
  ),
  "programas-medicos/perfect-lips": detail(
    "Perfect Lips associa um tratamento dos lábios a Skin Booster. A componente dos lábios é dirigida ao contorno, hidratação ou volume, conforme a avaliação; o Skin Booster integra cuidados da qualidade da pele.",
    "Perfect Lips combines a lip treatment with a Skin Booster. The lip component addresses contour, hydration or volume according to assessment, while the Skin Booster contributes to skin-quality care.",
    "O médico avalia as proporções dos lábios e as necessidades da pele para definir o plano. O produto, as quantidades, as zonas do Skin Booster e a sequência são confirmados antes da aplicação.",
    "The doctor assesses lip proportions and skin needs to define the plan. Product choice, amounts, Skin Booster areas and sequence are confirmed before application.",
  ),
  "programas-medicos/shining-face": detail(
    "Shining Face combina um bioestimulador e toxina botulínica. O bioestimulador é dirigido ao suporte e à produção de colagénio; a toxina botulínica suaviza linhas associadas à contração de determinados músculos faciais.",
    "Shining Face combines a biostimulator and botulinum toxin. The biostimulator addresses tissue support and collagen production, while botulinum toxin softens lines associated with contraction of selected facial muscles.",
    "A consulta define o bioestimulador adequado, as zonas e o plano de aplicação dos dois componentes. O médico explica a evolução gradual da componente de colagénio e os cuidados específicos de cada procedimento.",
    "The consultation determines the appropriate biostimulator, areas and injection plan for both components. The doctor explains gradual collagen-related changes and care specific to each procedure.",
  ),
  "programas-medicos/natural-face": detail(
    "Natural Face combina tratamento dos lábios e toxina botulínica. Reúne cuidados do contorno ou volume labial e das linhas de expressão, com a abordagem definida de acordo com a anatomia e as preferências pessoais.",
    "Natural Face combines lip treatment and botulinum toxin. It brings together care for lip contour or volume and expression lines, with an approach based on anatomy and personal preferences.",
    "O médico avalia o rosto e os lábios e define os produtos, as quantidades e os pontos de aplicação. Os dois procedimentos podem ter momentos distintos, conforme o plano, e os respetivos riscos e cuidados são explicados na consulta.",
    "The doctor assesses the face and lips and selects products, amounts and injection sites. The two procedures may be scheduled separately according to the plan, with their risks and aftercare explained at consultation.",
  ),
  "programas-medicos/perfect-smile": detail(
    "Perfect Smile associa um tratamento dos lábios à aplicação com Nanosoft. Nanosoft é um dispositivo de microagulhas para injeções superficiais, utilizado em cuidados dirigidos à qualidade da pele.",
    "Perfect Smile combines lip treatment with application using Nanosoft. Nanosoft is a microneedle device for superficial injections, used in care addressing skin quality.",
    "A avaliação define o objetivo do tratamento labial e as zonas da aplicação com Nanosoft. O produto utilizado em cada componente, as quantidades e a sequência são confirmados pelo médico antes dos procedimentos.",
    "Assessment defines the aim of lip treatment and the areas for Nanosoft application. The doctor confirms the product for each component, amounts and sequence before the procedures.",
  ),
  "programas-medicos/clean-face": detail(
    "Clean Face combina peeling e bioestimulador num programa médico facial. O peeling atua na renovação da superfície da pele, enquanto o bioestimulador é utilizado para estimular colagénio e trabalhar o suporte dos tecidos.",
    "Clean Face combines a peel and biostimulator in a medical facial programme. The peel addresses surface skin renewal, while the biostimulator is used to stimulate collagen and support tissue.",
    "O médico escolhe o tipo de peeling, o bioestimulador e as zonas conforme a avaliação. O plano define a sequência e os intervalos entre os procedimentos, respeitando a recuperação da pele e os cuidados de cada técnica.",
    "The doctor selects the peel type, biostimulator and areas according to assessment. The plan determines sequence and intervals between procedures, allowing for skin recovery and the care required by each technique.",
  ),
  "programas-medicos/new-eyes": detail(
    "New Eyes combina toxina botulínica e aplicação periocular com Nanosoft. A toxina atua em músculos responsáveis por linhas de expressão; a aplicação superficial é dirigida aos cuidados da pele em redor dos olhos.",
    "New Eyes combines botulinum toxin and eye-area application using Nanosoft. The toxin acts on muscles responsible for expression lines, while superficial injections address skin care around the eyes.",
    "O médico avalia a anatomia, a expressão e a pele desta zona antes de definir os pontos de aplicação. O produto utilizado com Nanosoft, a sequência e os cuidados são confirmados na consulta.",
    "The doctor assesses anatomy, facial movement and skin in this area before selecting injection sites. The product used with Nanosoft, procedure sequence and care are confirmed at consultation.",
  ),
  "programas-medicos/be-young": detail(
    "Be Young associa HIFU a um bioestimulador. O HIFU utiliza ultrassons focalizados em camadas selecionadas dos tecidos, enquanto o bioestimulador é um tratamento injetável dirigido à produção de colagénio e ao suporte da pele.",
    "Be Young combines HIFU with a biostimulator. HIFU uses focused ultrasound in selected tissue layers, while the biostimulator is an injectable treatment addressing collagen production and skin support.",
    "A avaliação médica identifica as zonas e confirma a adequação de cada componente. Os parâmetros do HIFU, o produto injetável e o intervalo entre tratamentos são definidos no plano, com explicação dos cuidados e possíveis efeitos locais.",
    "Medical assessment identifies the areas and checks suitability for each component. HIFU settings, the injectable product and the interval between treatments are determined in the plan, with care and possible local effects explained.",
  ),
  "programas-medicos/co-rosto-completo": detail(
    "O laser CO₂ é um tratamento de renovação da pele que utiliza energia laser para atuar em camadas selecionadas. Pode ser considerado para textura irregular, algumas cicatrizes e sinais de envelhecimento, com intensidade ajustada à pele e ao objetivo.",
    "CO₂ laser is a skin-resurfacing treatment using laser energy on selected layers. It may address uneven texture, certain scars and signs of ageing, with intensity adapted to the skin and goal.",
    "O médico avalia o rosto, prepara a pele e define os parâmetros e as medidas de conforto. A opção publicada abrange o rosto completo. O plano explica o período de recuperação, os cuidados com a pele e a proteção solar, que são essenciais após este procedimento.",
    "The doctor assesses the face, prepares the skin and determines settings and comfort measures. The published option covers the full face. The plan explains recovery, skin care and sun protection, which are essential after this procedure.",
  ),
  "programas-medicos/morpheus": detail(
    "Morpheus combina microagulhas com energia de radiofrequência aplicada nos tecidos. Esta associação permite estimular a remodelação do colagénio e trabalhar a aparência da textura e firmeza da pele em áreas selecionadas.",
    "Morpheus combines microneedles with radiofrequency energy delivered into tissue. This approach stimulates collagen remodelling and addresses the appearance of skin texture and firmness in selected areas.",
    "Após avaliação médica, o dispositivo é aplicado com profundidade e energia ajustadas à zona. O catálogo distingue rosto, pescoço, zona periocular e corpo, com sessões e packs próprios. O médico explica as medidas de conforto, os riscos e os cuidados de recuperação antes do procedimento.",
    "Following medical assessment, the device is applied at a depth and energy suited to the area. The catalogue distinguishes face, neck, eye-area and body options, with their own sessions and packs. The doctor explains comfort measures, risks and recovery care beforehand.",
  ),
  "cirurgia-plastica/consulta-de-cirurgia-plastica": detail(
    "A consulta de cirurgia plástica permite avaliar uma preocupação estética ou funcional e conhecer as opções cirúrgicas adequadas. É um espaço para discutir objetivos, perceber os limites dos procedimentos e esclarecer dúvidas com o cirurgião.",
    "A plastic surgery consultation assesses an aesthetic or functional concern and explores suitable surgical options. It is an opportunity to discuss goals, understand procedure limitations and ask the surgeon questions.",
    "Inclui a revisão dos antecedentes, a observação das áreas em questão e a discussão das alternativas. O cirurgião explica o procedimento proposto, riscos, recuperação e preparação necessária. A indicação cirúrgica e o orçamento são definidos de forma individual.",
    "It includes a review of health history, examination of the areas concerned and discussion of alternatives. The surgeon explains the proposed procedure, risks, recovery and preparation. Surgical suitability and the quote are determined individually.",
  ),
  "cirurgia-plastica/cirurgias": detail(
    "A cirurgia plástica reúne procedimentos para modificar ou reconstruir estruturas do corpo, de acordo com uma indicação médica. A opção adequada depende da preocupação apresentada, da anatomia e das condições de saúde de cada pessoa.",
    "Plastic surgery includes procedures to modify or reconstruct body structures according to medical indications. The appropriate option depends on the concern, anatomy and each person's health.",
    "A consulta com o cirurgião define o procedimento e esclarece a preparação, a anestesia, os riscos e a recuperação. Os serviços efetivamente incluídos, o local da intervenção, o acompanhamento e o orçamento são confirmados no plano cirúrgico individual.",
    "A consultation with the surgeon defines the procedure and explains preparation, anaesthesia, risks and recovery. Included services, the surgery location, follow-up and quote are confirmed in the individual surgical plan.",
  ),
};

export function getTreatmentDetail(entry: CatalogueTreatment): TreatmentDetail & { contents: LocalizedText[] } {
  const content = treatmentDetails[entry.id] ?? detail(
    entry.description.pt,
    entry.description.en,
    "A equipa esclarece o protocolo, as opções disponíveis e os cuidados associados na avaliação. A composição do plano e o valor são confirmados antes de iniciar.",
    "The team explains the protocol, available options and associated care at assessment. The plan's contents and price are confirmed before treatment begins.",
  );
  // Published programme contents are sourced directly from pricing, not copied
  // into clinical copy. Morpheus groups alternative areas and packs, not one bundle.
  const isProgramme = entry.category === "packs-programas" || entry.category === "programas-medicos";
  const contents = isProgramme && entry.slug !== "morpheus"
    ? entry.variants.flatMap(({ detail }) => detail ? [detail] : [])
    : [];
  return { ...content, contents };
}
