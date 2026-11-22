export interface SectorApplication {
  t: string;
  p: string;
  s: string;
  b: string;
  reg?: string;
  image?: {
    src: string;
    alt: string;
    position: string;
    mobilePosition: string;
    framing?: "context";
  };
}
export interface Sector {
  name: string;
  items: SectorApplication[];
}
// Possibilidades de aplicação, não projetos já entregues.
export const sectors: Sector[] = [
  {
    name: "Jurídico",
    items: [
      {
        t: "Análise e revisão assistida de contratos",
        image: {
          src: "/images/services/juridico-contratos.webp",
          alt: "Profissional analisando documentos contratuais em uma mesa de escritório",
          position: "55% 42%",
          mobilePosition: "50% 5%",
        },
        p: "Equipes gastam muito tempo lendo contratos para localizar cláusulas críticas e divergências.",
        s: "IA que lê os contratos, destaca cláusulas relevantes e inconsistências em relação a modelos e políticas da empresa, para revisão humana.",
        b: "Revisões mais ágeis e padronizadas, com profissionais focados na análise.",
      },
      {
        t: "Copilotos para consultas jurídicas internas",
        image: {
          src: "/images/services/juridico-consultas.webp",
          alt: "Profissional consultando documentos e livros em um escritório jurídico",
          position: "75% 35%",
          mobilePosition: "55% 5%",
        },
        p: "Áreas internas recorrem ao jurídico para dúvidas repetitivas.",
        s: "Assistente conectado a políticas, modelos e documentos, que responde com indicação das fontes e encaminha o que exige um profissional.",
        b: "Menos demandas repetitivas e respostas rastreáveis.",
      },
    ],
  },
  {
    name: "Indústria",
    items: [
      {
        t: "Manutenção preditiva de equipamentos",
        image: {
          src: "/images/services/industria-manutencao.webp",
          alt: "Profissional com equipamentos de proteção consultando um tablet ao lado de máquinas industriais",
          position: "62% 42%",
          mobilePosition: "50% 5%",
        },
        p: "Paradas inesperadas de máquinas geram custos e atrasos na produção.",
        s: "Modelos que analisam dados de sensores e históricos de manutenção para sinalizar sinais de falha antes que aconteçam.",
        b: "Manutenção melhor planejada e maior previsibilidade da operação.",
      },
      {
        t: "Inspeção de qualidade por visão computacional",
        image: {
          src: "/images/services/industria-inspecao.webp",
          framing: "context",
          alt: "Técnico acompanhando uma câmera de inspeção sobre peças em uma linha industrial",
          position: "25% 40%",
          mobilePosition: "50% 5%",
        },
        p: "A inspeção visual manual é lenta e sujeita a variações entre pessoas.",
        s: "Visão computacional para identificar possíveis defeitos em imagens da linha de produção, com apoio à decisão da equipe de qualidade.",
        b: "Critérios de inspeção mais consistentes e registro das ocorrências.",
      },
    ],
  },
  {
    name: "Varejo",
    items: [
      {
        t: "Recomendações personalizadas de produtos",
        image: {
          src: "/images/services/varejo-personalizacao.webp",
          alt: "Profissional de varejo utilizando um tablet em uma loja com produtos e clientes",
          position: "40% 40%",
          mobilePosition: "50% 20%",
        },
        p: "Clientes encontram poucos produtos relevantes entre catálogos extensos.",
        s: "Sistema de recomendação baseado em comportamento de navegação, buscas e histórico de compras.",
        b: "Experiência de compra mais relevante e novas oportunidades de venda.",
      },
      {
        t: "Previsão de demanda e otimização de estoque",
        image: {
          src: "/images/services/varejo-estoque.webp",
          alt: "Profissional conferindo produtos nas prateleiras com um coletor de dados",
          position: "48% 45%",
          mobilePosition: "50% 5%",
        },
        p: "Excesso ou falta de produtos prejudica o caixa e as vendas.",
        s: "Modelos que projetam a demanda e apoiam as decisões de reposição.",
        b: "Decisões de estoque apoiadas em dados.",
      },
    ],
  },
  {
    name: "Saúde",
    items: [
      {
        t: "Apoio à documentação e elaboração de relatórios clínicos",
        image: {
          src: "/images/services/saude-prontuarios.webp",
          alt: "Médica utilizando um computador no consultório, com documentos clínicos sobre a mesa",
          position: "45% 40%",
          mobilePosition: "50% 5%",
        },
        p: "Profissionais dedicam tempo significativo a registros e relatórios.",
        s: "Assistentes que organizam informações e geram rascunhos de documentação para revisão e validação do profissional.",
        b: "Menos tempo em tarefas administrativas.",
      },
      {
        t: "Apoio à análise de imagens médicas",
        image: {
          src: "/images/services/saude-exames.webp",
          alt: "Profissional de saúde observando imagens de exames em um monitor",
          position: "45% 42%",
          mobilePosition: "50% 8%",
        },
        p: "O volume de exames exige apoio para priorizar e organizar análises.",
        s: "Ferramentas de apoio à análise de imagens, sempre como suporte ao profissional.",
        b: "Apoio à organização e à priorização de análises.",
        reg: "Sujeito a validação profissional e a requisitos regulatórios.",
      },
    ],
  },
  {
    name: "Finanças",
    items: [
      {
        t: "Detecção de possíveis fraudes",
        image: {
          src: "/images/services/financas-fraudes.webp",
          alt: "Analista observando gráficos e alertas em monitores de dados financeiros",
          position: "42% 40%",
          mobilePosition: "50% 20%",
        },
        p: "Transações suspeitas precisam ser identificadas rapidamente entre grandes volumes de dados.",
        s: "Modelos que sinalizam padrões atípicos para análise da equipe responsável.",
        b: "Mais agilidade na identificação de casos para investigação.",
      },
      {
        t: "Modelos de apoio à avaliação de crédito",
        image: {
          src: "/images/services/financas-credito.webp",
          framing: "context",
          alt: "Profissional apresentando gráficos e indicadores financeiros em um computador durante uma reunião",
          position: "45% 40%",
          mobilePosition: "50% 5%",
        },
        p: "A análise de crédito envolve muitas variáveis e exige consistência.",
        s: "Modelos que apoiam a avaliação, com controles de risco e conformidade.",
        b: "Análises mais consistentes e documentadas.",
        reg: "Exige controles de risco e conformidade.",
      },
    ],
  },
  {
    name: "Educação",
    items: [
      {
        t: "Tutores virtuais personalizados",
        image: {
          src: "/images/services/educacao-tutoria.webp",
          alt: "Professora orientando um estudante enquanto utilizam um computador",
          position: "50% 0%",
          mobilePosition: "50% 0%",
        },
        p: "Estudantes têm ritmos e dúvidas diferentes, e o atendimento individual é limitado.",
        s: "Tutores virtuais que explicam conteúdos, respondem dúvidas e adaptam as interações ao perfil do estudante.",
        b: "Apoio ao aprendizado fora do horário de aula.",
      },
    ],
  },
  {
    name: "Logística",
    items: [
      {
        t: "Planejamento e otimização de rotas de entrega",
        image: {
          src: "/images/services/logistica-rotas.webp",
          alt: "Profissional de logística consultando mapas e um computador em um centro de distribuição",
          position: "50% 45%",
          mobilePosition: "50% 15%",
        },
        p: "Rotas pouco eficientes aumentam custos e prazos.",
        s: "Algoritmos que planejam rotas considerando endereços, janelas de entrega e restrições da operação.",
        b: "Rotas melhor planejadas e uso mais eficiente da frota.",
      },
    ],
  },
];
