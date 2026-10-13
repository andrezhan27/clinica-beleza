import { images } from "./images";
import type { LocalizedText } from "./treatment-categories";

const text = (pt: string, en: string): LocalizedText => ({ pt, en });

type ProfileSection = {
  title: LocalizedText;
  subtitle?: LocalizedText;
  paragraphs?: LocalizedText[];
  topics?: { title: LocalizedText; description: LocalizedText }[];
};

export type TeamMember = {
  slug: string;
  name: string;
  image: string;
  portraitCrop?: { zoom: number; origin: string; position?: string; profileOrigin?: string; profilePosition?: string };
  biography?: {
    role: LocalizedText;
    specialty: LocalizedText;
    introduction: LocalizedText;
    sections: ProfileSection[];
    booking: { title: LocalizedText; subtitle: LocalizedText; description: LocalizedText; message?: LocalizedText };
  };
};

// Portuguese biography supplied by the clinic; preserve its wording.
export const teamMembers: TeamMember[] = [
  {
    slug: "luiz-moura", name: "Dr. Luiz Moura", image: images.doctor1,
    portraitCrop: { zoom: 1.25, origin: "60% 57%" },
    biography: {
      role: text("Médico", "Physician"),
      specialty: text("Endocrinologia e Metabologia", "Endocrinology and Metabology"),
      introduction: text(
        "Médico com mais de 29 anos de experiência, com atuação dedicada à Endocrinologia e Metabologia, integrando também conhecimentos em Nutrologia e Medicina do Exercício e do Esporte.",
        "A physician with more than 29 years of experience, whose practice focuses on Endocrinology and Metabology, also drawing on knowledge of Nutritional Medicine and Exercise and Sports Medicine.",
      ),
      sections: [{
        title: text("Perfil", "Profile"),
        paragraphs: [
          text(
            "Ao longo do seu percurso profissional, desenvolveu uma abordagem médica centrada na avaliação global e individualizada do paciente, com especial atenção à saúde hormonal e metabólica, composição corporal, controlo do peso, preservação da massa muscular, menopausa, saúde hormonal masculina, prevenção e longevidade.",
            "Throughout his career, he has developed a medical approach centred on a comprehensive, individualised assessment of each patient, with particular attention to hormonal and metabolic health, body composition, weight management, preservation of muscle mass, menopause, men’s hormonal health, prevention and longevity.",
          ),
          text(
            "A sua prática procura compreender não apenas sintomas ou resultados isolados de exames, mas a interação entre metabolismo, hormônios, nutrição, atividade física, sono e estilo de vida, construindo estratégias de acompanhamento adaptadas às necessidades de cada pessoa.",
            "His practice seeks to understand not only symptoms or individual test results, but also the interaction between metabolism, hormones, nutrition, physical activity, sleep and lifestyle, developing care strategies tailored to each person’s needs.",
          ),
          text(
            "O Dr. Luiz Moura defende uma medicina baseada em conhecimento científico, prevenção e acompanhamento responsável, com o objetivo de promover saúde, vitalidade, capacidade física e qualidade de vida ao longo dos anos.",
            "Dr. Luiz Moura advocates medicine grounded in scientific knowledge, prevention and responsible ongoing care, with the aim of promoting health, vitality, physical capacity and quality of life over the years.",
          ),
        ],
      }],
      booking: {
        title: text("Marcação", "Booking"),
        subtitle: text("Comece o seu acompanhamento", "Begin Your Care"),
        description: text("Marque uma consulta com o Dr. Luiz Moura.", "Book a consultation with Dr. Luiz Moura."),
        message: text(
          "Olá! Gostaria de marcar uma consulta com o Dr. Luiz Moura na Clínica Beleza. Podem ajudar-me com a disponibilidade?",
          "Hello! I would like to book a consultation with Dr. Luiz Moura at Clínica Beleza. Could you help me with availability?",
        ),
      },
    },
  },
  {
    slug: "sara-mateus", name: "Dra. Sara Mateus", image: images.doctor2,
    portraitCrop: { zoom: 1.8, origin: "22% 8%", profileOrigin: "22% 15%" },
    biography: {
      role: text("Nutricionista Clínica", "Clinical Nutritionist"),
      specialty: text("Nutrição de Precisão e Medicina do Estilo de Vida", "Precision Nutrition and Lifestyle Medicine"),
      introduction: text(
        "Uma abordagem personalizada à nutrição, que integra ciência, estilo de vida e individualidade para promover saúde e longevidade.",
        "A personalised approach to nutrition that brings together science, lifestyle and individual needs to promote health and longevity.",
      ),
      sections: [
        {
          title: text("Perfil", "Profile"),
          paragraphs: [
            text(
              "A Dra. Sara Mateus é Nutricionista Clínica e membro efetivo da Ordem dos Nutricionistas em Portugal, com a cédula profissional n.º 6025N.",
              "Dra. Sara Mateus is a Clinical Nutritionist and a full member of Portugal’s Order of Nutritionists, with professional registration number 6025N.",
            ),
            text(
              "Licenciada em Dietética e Nutrição, o seu percurso académico inclui uma Pós-Graduação em Nutrição Funcional e Suplementação Individualizada na Prática Clínica e formação em Medicina Funcional pelo Institute for Functional Medicine, onde frequentou o programa Applying Functional Medicine in Clinical Practice, em Londres, Reino Unido. Mestranda em Nutrição Humana e Metabolismo pela NOVA Medical School, em Lisboa, aprofunda a sua formação nas áreas da saúde metabólica e da longevidade.",
              "She holds a degree in Dietetics and Nutrition. Her academic background includes postgraduate study in Functional Nutrition and Individualised Supplementation in Clinical Practice, as well as training in Functional Medicine at the Institute for Functional Medicine, where she attended the Applying Functional Medicine in Clinical Practice programme in London, United Kingdom. She is currently studying for a master’s degree in Human Nutrition and Metabolism at NOVA Medical School in Lisbon, further developing her expertise in metabolic health and longevity.",
            ),
            text(
              "A sua prática clínica baseia-se nos princípios da Nutrição de Precisão e da Medicina do Estilo de Vida, integrando ciência, individualidade e contexto na definição de estratégias de saúde personalizadas.",
              "Her clinical practice is based on the principles of Precision Nutrition and Lifestyle Medicine, integrating science, individual needs and personal circumstances to develop personalised health strategies.",
            ),
          ],
        },
        {
          title: text("Abordagem", "Approach"),
          subtitle: text("Nutrição de Precisão e Medicina do Estilo de Vida", "Precision Nutrition and Lifestyle Medicine"),
          paragraphs: [
            text(
              "A Nutrição de Precisão reconhece que não existe uma abordagem nutricional universal. Cada pessoa apresenta características biológicas, metabólicas, comportamentais e de estilo de vida distintas, que devem ser consideradas na definição da sua estratégia nutricional.",
              "Precision Nutrition recognises that there is no universal approach to nutrition. Each person has distinct biological, metabolic, behavioural and lifestyle characteristics that should be considered when developing their nutritional strategy.",
            ),
            text(
              "A avaliação pode, quando clinicamente indicado, ser complementada por exames nutrigenéticos especializados, contribuindo para uma compreensão mais aprofundada de determinadas predisposições individuais e para uma maior personalização da estratégia nutricional.",
              "When clinically indicated, the assessment may be complemented by specialised nutrigenetic tests, helping to provide a deeper understanding of certain individual predispositions and to further personalise the nutritional strategy.",
            ),
            text(
              "A Medicina do Estilo de Vida complementa esta abordagem, considerando fatores como alimentação, sono, atividade física, gestão do stress, ritmos diários e comportamento alimentar como componentes fundamentais da saúde.",
              "Lifestyle Medicine complements this approach by considering factors such as diet, sleep, physical activity, stress management, daily rhythms and eating behaviour as fundamental components of health.",
            ),
          ],
        },
        {
          title: text("Consulta de Nutrição Clínica", "Clinical Nutrition Consultation"),
          paragraphs: [
            text(
              "A Consulta de Nutrição Clínica inicia-se com uma avaliação aprofundada da história clínica e nutricional, composição corporal, hábitos alimentares, estilo de vida e parâmetros bioquímicos relevantes. Quando clinicamente indicado, poderão ser solicitados exames complementares para aprofundar a avaliação.",
              "The Clinical Nutrition Consultation begins with an in-depth assessment of medical and nutritional history, body composition, eating habits, lifestyle and relevant biochemical markers. When clinically indicated, additional tests may be requested to explore the assessment further.",
            ),
            text(
              "A partir desta análise, são identificadas as principais necessidades e prioridades, sendo definida uma estratégia de intervenção personalizada. O acompanhamento é ajustado ao longo do tempo em função da evolução e da resposta à intervenção, permitindo adaptar a estratégia às necessidades de cada pessoa e aos seus objetivos de saúde.",
              "This analysis identifies the main needs and priorities, forming the basis of a personalised intervention strategy. Follow-up care is adjusted over time according to progress and response to the intervention, allowing the strategy to evolve with each person’s needs and health goals.",
            ),
            text("1.ª consulta · 80 €", "First consultation · €80"),
            text("Consultas de acompanhamento · 60 €", "Follow-up consultations · €60"),
            text(
              "Não é necessário apresentar uma condição clínica ou um objetivo específico para realizar uma consulta. A consulta pode também constituir um ponto de partida para avaliar e otimizar a saúde.",
              "You do not need to have a medical condition or a specific goal to attend a consultation. A consultation can also be a starting point for assessing and optimising your health.",
            ),
          ],
        },
        {
          title: text("Áreas de Atuação", "Areas of Practice"),
          topics: [
            {
              title: text("Saúde Metabólica", "Metabolic Health"),
              description: text(
                "Resistência à insulina, alterações da glicemia, pré-diabetes, diabetes tipo 2, dislipidemias, hipertensão arterial e outros fatores de risco cardiometabólico. O acompanhamento procura melhorar o controlo metabólico e reduzir o risco associado ao desenvolvimento de doença crónica.",
                "Insulin resistance, changes in blood glucose, prediabetes, type 2 diabetes, abnormal blood lipid levels, high blood pressure and other cardiometabolic risk factors. Care aims to improve metabolic control and reduce the risk associated with developing chronic disease.",
              ),
            },
            {
              title: text("Emagrecimento e Composição Corporal", "Weight Management and Body Composition"),
              description: text(
                "Gestão do peso, redução de massa gorda e preservação ou desenvolvimento de massa magra. O acompanhamento é orientado para uma otimização da composição corporal e para resultados sustentáveis a longo prazo.",
                "Weight management, reduction of body fat, and preservation or development of lean mass. Care focuses on optimising body composition and achieving sustainable long-term results.",
              ),
            },
            {
              title: text("Saúde Intestinal e Microbiota", "Gut Health and Microbiota"),
              description: text(
                "Disbiose intestinal, alterações da permeabilidade intestinal, distensão e desconforto abdominal, irregularidade do trânsito intestinal, obstipação, diarreia e determinadas intolerâncias alimentares.",
                "Imbalances in gut microbiota, changes in intestinal permeability, abdominal bloating and discomfort, irregular bowel movements, constipation, diarrhoea and certain food intolerances.",
              ),
            },
            {
              title: text("Saúde da Mulher e Menopausa", "Women’s Health and Menopause"),
              description: text(
                "Acompanhamento das necessidades nutricionais da mulher ao longo das diferentes fases da vida, com particular foco na perimenopausa e menopausa, incluindo alterações da composição corporal, metabolismo, saúde óssea e saúde cardiovascular.",
                "Support for women’s nutritional needs through different stages of life, with a particular focus on perimenopause and menopause, including changes in body composition, metabolism, bone health and cardiovascular health.",
              ),
            },
            {
              title: text("Longevidade & Envelhecimento Saudável", "Longevity & Healthy Ageing"),
              description: text(
                "Acompanhamento orientado para a otimização dos processos associados ao envelhecimento saudável, com particular atenção à saúde mitocondrial, proteção celular, equilíbrio redox, inflamação, densidade nutricional e aporte de compostos bioativos e fitoquímicos. A estratégia integra ainda a preservação da massa magra e das funções metabólica, cardiovascular, óssea e cognitiva, com o objetivo de promover saúde e funcionalidade ao longo do tempo.",
                "Care focused on optimising the processes associated with healthy ageing, with particular attention to mitochondrial health, cellular protection, redox balance, inflammation, nutrient density, and intake of bioactive compounds and phytochemicals. The strategy also includes preserving lean mass and metabolic, cardiovascular, bone and cognitive function, with the aim of promoting health and functional ability over time.",
              ),
            },
          ],
        },
        {
          title: text("O que esperar da consulta", "What to Expect from the Consultation"),
          subtitle: text("Avaliação → Estratégia → Acompanhamento", "Assessment → Strategy → Follow-up"),
          paragraphs: [text(
            "Cada acompanhamento começa com uma avaliação aprofundada do contexto clínico, nutricional e individual. A partir dessa avaliação, são definidas prioridades e uma estratégia personalizada, posteriormente ajustada de acordo com a evolução e resposta à intervenção.",
            "Each care programme begins with an in-depth assessment of the person’s clinical, nutritional and individual circumstances. This assessment establishes priorities and a personalised strategy, which is then adjusted according to progress and response to the intervention.",
          )],
        },
      ],
      booking: {
        title: text("Marcação", "Booking"),
        subtitle: text("Comece o seu acompanhamento", "Begin Your Care"),
        description: text("Dê o primeiro passo para uma abordagem mais individualizada à sua saúde.", "Take the first step towards a more individualised approach to your health."),
      },
    },
  },
  { slug: "jerusa-oliveira", name: "Dra. Jerusa Oliveira", image: images.doctor3, portraitCrop: { zoom: 1, origin: "center" } },
  { slug: "erika-siordia", name: "Dra. Erika Siordia", image: images.doctor4, portraitCrop: { zoom: 1, origin: "center", position: "50% 39%", profilePosition: "50% 12%" } },
];

export const getTeamMember = (slug: string) => teamMembers.find((member) => member.slug === slug);
