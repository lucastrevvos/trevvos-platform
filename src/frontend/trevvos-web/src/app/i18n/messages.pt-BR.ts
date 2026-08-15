export const messages = {
  home: {
    eyebrow: 'Trevvos',
    title: 'Trevvos',
    summary:
      'Ecossistema de tecnologia para mobilidade, organização operacional e IA aplicada com foco em produtos objetivos.',
    nav: {
      kmOne: 'KM One',
      flow: 'Flow',
      central: 'Central',
      impact: 'Impacto',
    },
    kmOne: {
      priority: 'Produto principal',
      name: 'KM One',
      title: 'KM One ajuda motoristas profissionais e de aplicativo a analisar ofertas e organizar a operação',
      summary:
        'O produto apoia a leitura de ofertas de corrida e a organização de registros operacionais e financeiros do motorista, sem prometer ganhos, demanda, corridas ou resultados financeiros.',
      audience:
        'Feito para quem precisa comparar informações de deslocamento, valores e rotina de trabalho antes de tomar decisões no dia a dia.',
      capabilitiesTitle: 'Capacidades apresentadas',
      capabilities: [
        'Análise de ofertas com valor, distância e valor por quilômetro.',
        'Classificação de ofertas e histórico de ofertas visualizadas ou salvas.',
        'Registros de corridas, abastecimentos, deslocamentos e corridas particulares.',
        'Painel operacional diário, resumos financeiros e alertas de Lista de Bloqueio por via ou bairro.',
        'Resumos compartilháveis para apoiar a organização profissional do motorista.',
      ],
      cta: {
        label: 'Entrar no KM One',
        ariaLabel: 'Conhecer o KM One na landing page externa do produto',
        href: 'https://kmone.trevvos.com.br/',
      },
      instagram: {
        label: '@kmone.app',
        ariaLabel: 'Abrir Instagram do KM One',
        href: 'https://www.instagram.com/kmone.app/',
      },
    },
    trevvosFlow: {
      priority: 'Produto secundário',
      name: 'Trevvos Flow',
      title: 'Trevvos Flow organiza listas e tarefas com apoio inteligente sob escolha do usuário',
      summary:
        'Listas, tarefas e rotinas compartilhadas com apoio inteligente sempre escolhido pelo usuário.',
      intelligence:
        'A área orientada a IA pode apoiar sugestões inteligentes, sempre escolhidas manualmente pelo usuário e sem executar ações autônomas.',
      capabilitiesTitle: 'Capacidades em escopo',
      capabilities: [
        'Listas locais e listas compartilhadas.',
        'Listas de compras e tarefas.',
        'Acompanhamento de progresso.',
        'Colaboração em organizações compartilhadas.',
        'Área orientada a IA com sugestões inteligentes selecionadas pelo usuário.',
      ],
      cta: {
        label: 'Conhecer o Flow',
        ariaLabel: 'Conhecer a página do Trevvos Flow',
        href: '/flow',
      },
    },
    central: {
      priority: 'Linha editorial',
      name: 'Central Trevvos',
      title: 'Central Trevvos organiza a narrativa, os aprendizados e os conteúdos do ecossistema',
      summary:
        'Um espaço editorial para explicar tecnologia, mobilidade, IA aplicada e bastidores de produto com clareza pública.',
      cta: {
        label: 'Explorar conteúdos',
        ariaLabel: 'Conhecer a página da Central Trevvos',
        href: '/central',
      },
    },
    impact: {
      priority: 'Programa futuro',
      name: 'Trevvos Impacto',
      title: 'Trevvos Impacto prepara pilotos com comunidades, igrejas, ONGs e associações',
      summary:
        'Uma trilha futura para captar interessados em pilotos comunitários, validar necessidades reais e orientar um MVP de baixo atrito.',
      cta: {
        label: 'Programa piloto',
        ariaLabel: 'Conhecer a página do Trevvos Impacto',
        href: '/impacto',
      },
    },
  },
  flow: {
    eyebrow: 'Trevvos Flow',
    title: 'Listas, tarefas e rotinas em fluxo',
    summary:
      'Aplicativo Android já disponível no Google Play para criar listas, acompanhar tarefas, compartilhar rotinas e preparar o uso de IA com revisão do usuário.',
    cta: {
      primary: 'Baixar no Google Play',
      secondary: 'Voltar para a Home',
      playStoreHref: 'https://play.google.com/store/apps/details?id=com.lucasamaral.todolistrevvos',
    },
    sections: [
      {
        title: 'Listas que viram rotina',
        text:
          'Crie listas locais ou compartilhadas para compras, tarefas, pequenos projetos e combinações do dia a dia.',
      },
      {
        title: 'Progresso sem bagunça',
        text:
          'Acompanhe o que já foi resolvido, o que ainda falta e onde uma rotina começou a perder clareza.',
      },
      {
        title: 'Sugestões inteligentes sob comando',
        text:
          'A IA pode sugerir próximos passos, organização e agrupamentos, mas a decisão continua com o usuário.',
      },
    ],
    useCasesTitle: 'Casos de uso',
    useCases: ['Compras recorrentes', 'Rotina pessoal', 'Times pequenos', 'Projetos simples'],
    note:
      'O Trevvos Flow está publicado para Android. A área de Inteligência Trevvos evolui para sugerir itens, listas e rotinas, sempre com revisão do usuário antes de adicionar ou alterar qualquer coisa.',
  },
  central: {
    eyebrow: 'Central Trevvos',
    title: 'Conteúdo, bastidores e IA aplicada sem enrolação',
    summary:
      'A Central será o espaço editorial da Trevvos para explicar produtos, decisões, aprendizados e tecnologia aplicada em linguagem clara.',
    cta: {
      primary: 'Ver trilhas',
      secondary: 'Voltar para a Home',
    },
    featured: {
      label: 'Primeiro eixo editorial',
      title: 'Da operação real para produtos com IA',
      text:
        'A linha editorial nasce para mostrar como a Trevvos transforma dores observadas em campo em interfaces, automações assistidas e produtos que respeitam a decisão do usuário.',
    },
    tracksTitle: 'Trilhas editoriais',
    tracks: [
      {
        title: 'Mobilidade e operação',
        text:
          'Conteúdos sobre rotina de motoristas, análise de ofertas, organização financeira e leitura prática da operação.',
      },
      {
        title: 'Produtos Trevvos',
        text:
          'Bastidores de evolução do KM One, Trevvos Flow, Impacto e futuros módulos do ecossistema.',
      },
      {
        title: 'IA aplicada',
        text:
          'Explicações sobre uso de IA, RAG, captura de leads e automações com revisão humana.',
      },
    ],
    queueTitle: 'Próximos formatos',
    queue: ['Artigos curtos', 'Guias práticos', 'Notas de produto', 'Áudios e cortes para redes'],
    note:
      'A Central reúne publicações editoriais da Trevvos sobre mobilidade, produto, IA aplicada e construção do ecossistema.',
  },
  contact: {
    eyebrow: 'Contato Trevvos',
    title: 'Fale com a Trevvos',
    summary:
      'Um canal direto para conversas sobre produtos, conteúdo editorial, parcerias, pilotos comunitários e construção do ecossistema Trevvos.',
    cta: {
      primary: 'Enviar e-mail',
      secondary: 'Voltar para a Home',
      mailHref:
        'mailto:ceo@trevvos.com.br?subject=Contato%20pelo%20site%20Trevvos',
    },
    channelsTitle: 'Caminhos de conversa',
    channels: [
      {
        title: 'Produtos Trevvos',
        text:
          'Conversas sobre KM One, Trevvos Flow, evolução de módulos e uso prático das soluções.',
      },
      {
        title: 'Central e conteúdo',
        text:
          'Sugestões de pauta, linha editorial, entrevistas, cortes, áudio e publicações da Central Trevvos.',
      },
      {
        title: 'IA Trevvos',
        text:
          'Caminho planejado para identificar intenção, organizar contexto e direcionar o atendimento certo.',
      },
      {
        title: 'Impacto e comunidades',
        text:
          'Primeiro contato para ONGs, igrejas, associações e grupos interessados em pilotos comunitários.',
      },
    ],
    contactCards: [
      {
        label: 'E-mail',
        value: 'ceo@trevvos.com.br',
        href: 'mailto:ceo@trevvos.com.br',
      },
      {
        label: 'IA Trevvos',
        value: 'Intenção e atendimento',
        href: '/ia',
      },
      {
        label: 'Central Trevvos',
        value: 'Conteúdo e bastidores',
        href: '/central',
      },
      {
        label: 'Trevvos Flow',
        value: 'Produto Android',
        href: '/flow',
      },
      {
        label: 'Instagram',
        value: '@trevvos.ia',
        href: 'https://www.instagram.com/trevvos.ia/',
      },
      {
        label: 'Spotify',
        value: 'Podcast Trevvos',
        href: 'https://open.spotify.com/show/7xvDpbP6wuoZi8coSgTFkY',
      },
      {
        label: 'LinkedIn',
        value: 'Trevvos',
        href: 'https://www.linkedin.com/company/trevvos/',
      },
      {
        label: 'Grupo de testadores',
        value: 'Comunidade WhatsApp',
        href: 'https://chat.whatsapp.com/K1cepLtEEoY6pScVRTNvg9',
      },
    ],
    note:
      'A página de contato prioriza canais diretos e assuntos claros. Formulários, automações e integrações entram depois, quando a estrutura de atendimento estiver definida.',
  },
  ai: {
    eyebrow: 'IA Trevvos',
    title: 'Intenção, contexto e atendimento orientado',
    summary:
      'A IA Trevvos será o ponto de entrada para entender a necessidade de cada pessoa, consultar conteúdos do ecossistema e orientar o próximo caminho com revisão e clareza.',
    cta: {
      primary: 'Falar com a Trevvos',
      secondary: 'Voltar para contato',
      contactHref: '/contato',
    },
    intentsTitle: 'O que a IA deve identificar',
    intents: [
      {
        title: 'Interesse em produtos',
        text:
          'Separar dúvidas sobre KM One, Trevvos Flow e módulos futuros, levando a pessoa para o conteúdo ou canal correto.',
      },
      {
        title: 'Conteúdo e conhecimento',
        text:
          'Responder usando materiais da Central, documentação pública e bases controladas da Trevvos.',
      },
      {
        title: 'Parcerias e impacto',
        text:
          'Reconhecer sinais de ONGs, igrejas, associações e comunidades para orientar pilotos e captação estruturada.',
      },
    ],
    principlesTitle: 'Princípios',
    principles: ['Sem decisão escondida', 'Sem execução autônoma crítica', 'Contexto antes da resposta', 'Encaminhamento claro'],
    note:
      'Nesta fase, a página apresenta a direção do módulo de IA. O atendimento automatizado será implementado quando a base de conhecimento e as regras de direcionamento estiverem prontas.',
  },
  impact: {
    eyebrow: 'Trevvos Impacto',
    title: 'Pilotos comunitários em preparação',
    summary:
      'Uma frente para aproximar a Trevvos de ONGs, igrejas, associações e comunidades que precisam organizar demandas, captar interessados e validar soluções simples com impacto real.',
    cta: {
      primary: 'Falar sobre impacto',
      secondary: 'Voltar para a Home',
      contactHref: '/contato',
    },
    sectionsTitle: 'O que estamos preparando',
    sections: [
      {
        title: 'Captação com clareza',
        text:
          'Estruturar o primeiro contato com grupos e instituições para entender necessidades reais antes de propor tecnologia.',
      },
      {
        title: 'MVP de baixo atrito',
        text:
          'Criar caminhos simples para testar formulários, triagem, organização de interessados e acompanhamento de ações.',
      },
      {
        title: 'IA com contexto social',
        text:
          'Preparar uma base de conhecimento capaz de responder, orientar e encaminhar demandas sem substituir a decisão humana.',
      },
    ],
    audiencesTitle: 'Quem pode se aproximar',
    audiences: ['ONGs', 'Igrejas', 'Associações', 'Comunidades locais'],
    note:
      'O Trevvos Impacto está em fase de preparação pública. O objetivo agora é abrir conversa, ouvir demandas e desenhar pilotos responsáveis.',
  },
} as const;
