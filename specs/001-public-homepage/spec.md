# Feature Specification: Public Trevvos Homepage

**Feature Branch**: `001-trevvos-home`

**Created**: 2026-08-13

**Status**: Draft

**Input**: User description: "Create the product specification for the new public Trevvos homepage."

## Clarifications

### Session 2026-08-13

- Q: What should the KM One and Trevvos Flow homepage CTAs do? → A: KM One CTA points to the existing KM One landing destination; Trevvos Flow CTA scrolls/navigates to its homepage section only.
- Q: Should Copiloto KM One appear on this first public homepage? → A: Do not mention Copiloto KM One on this first homepage.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand Trevvos and KM One First (Priority: P1)

Um visitante sem conhecimento previo acessa a homepage publica e entende rapidamente que Trevvos e uma empresa/plataforma de tecnologia que cria produtos digitais praticos, com KM One como produto principal para motoristas profissionais e de aplicativo.

**Why this priority**: Esta e a proposta central da pagina. Se o visitante nao entende Trevvos e KM One no primeiro contato, a homepage falha em sua funcao principal.

**Independent Test**: Pode ser testado exibindo a homepage para uma pessoa sem contexto previo e verificando se ela consegue explicar, sem ajuda, o que e Trevvos, que KM One e o produto principal e qual problema KM One ajuda a organizar.

**Acceptance Scenarios**:

1. **Given** um visitante acessando a homepage pela primeira vez, **When** a primeira area visivel da pagina e carregada, **Then** ela comunica que Trevvos cria produtos digitais e apresenta KM One como produto em destaque.
2. **Given** um visitante interessado em mobilidade ou trabalho como motorista, **When** ele le o conteudo principal sobre KM One, **Then** ele encontra uma explicacao clara sobre analise de ofertas, organizacao operacional e acompanhamento financeiro sem promessas de ganhos, demanda, corridas ou resultados financeiros.
3. **Given** um visitante em dispositivo movel, **When** ele acessa a homepage, **Then** a hierarquia de conteudo continua clara e KM One permanece mais proeminente que Trevvos Flow.

---

### User Story 2 - Compare Current Trevvos Products (Priority: P2)

Um visitante explora a homepage para entender quais produtos Trevvos existem atualmente e como KM One e Trevvos Flow se diferenciam.

**Why this priority**: A homepage deve apresentar Trevvos como plataforma de produtos, nao como um unico aplicativo, mantendo a primazia de KM One.

**Independent Test**: Pode ser testado verificando se a pagina apresenta, em conteudo indexavel e acessivel, pelo menos KM One e Trevvos Flow com descricoes distintas, verdadeiras e proporcionalmente hierarquizadas.

**Acceptance Scenarios**:

1. **Given** um visitante navegando pela secao de produtos, **When** ele compara os cards ou blocos de produto, **Then** ele identifica KM One como produto principal e Trevvos Flow como outro produto relevante.
2. **Given** um visitante lendo sobre Trevvos Flow, **When** ele avalia suas capacidades, **Then** ele entende que o produto organiza listas e tarefas com progresso, colaboracao e sugestoes inteligentes acionadas por escolha explicita do usuario.
3. **Given** um visitante lendo sobre capacidades futuras de IA, **When** o conteudo menciona areas ou assistencia de IA, **Then** a pagina evita apresentar sugestoes inteligentes como acoes autonomas ja amplamente disponiveis e nao menciona Copiloto KM One nesta primeira homepage.

---

### User Story 3 - Continue Exploration From the Homepage (Priority: P3)

Um visitante decide continuar explorando Trevvos, KM One ou Trevvos Flow a partir de chamadas de acao ou navegacao presentes na homepage.

**Why this priority**: A homepage deve orientar proximos passos, mas sem ampliar o escopo para paginas completas de produto, cadastro, checkout, login ou fluxos backend.

**Independent Test**: Pode ser testado verificando se cada chamada de acao possui texto claro e destino definido antes da implementacao, sem depender de interacoes complexas para revelar informacao essencial.

**Acceptance Scenarios**:

1. **Given** um visitante interessado em KM One, **When** ele procura um proximo passo, **Then** a homepage oferece uma chamada de acao clara para continuar explorando KM One.
2. **Given** um visitante interessado em Trevvos Flow, **When** ele procura mais informacoes, **Then** a homepage oferece uma chamada de acao clara para continuar explorando Trevvos Flow.
3. **Given** conteudo essencial para SEO e entendimento da marca, **When** a pagina e acessada sem interacoes adicionais, **Then** as informacoes principais sobre Trevvos, KM One e Trevvos Flow permanecem presentes como conteudo real da pagina.

### Edge Cases

- Em telas pequenas, o conteudo deve manter ordem de leitura clara: Trevvos primeiro, KM One com maior destaque, Trevvos Flow depois, e chamadas de acao sem competir com o entendimento principal.
- Se imagens, animacoes ou recursos visuais nao carregarem, o texto semantico deve continuar comunicando a proposta de Trevvos e dos produtos.
- Se o visitante usa teclado, leitor de tela, zoom ou preferencias de movimento reduzido, a pagina deve continuar navegavel, compreensivel e sem exigir animacao para acesso a informacao essencial.
- Chamadas de acao devem usar somente destinos aprovados: KM One deve apontar para a landing existente de KM One; Trevvos Flow deve navegar para sua secao na propria homepage.
- A pagina deve evitar linguagem que possa ser interpretada como garantia de renda, corridas, economia, demanda, lucro, disponibilidade geografica, estatisticas de uso, depoimentos, parcerias ou resultados financeiros.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: A homepage MUST present Trevvos as a technology company and product platform that creates practical digital products.
- **FR-002**: A homepage MUST make KM One visibly and textually more prominent than Trevvos Flow.
- **FR-003**: A homepage MUST explain KM One as a product for ride-hailing and professional drivers that helps analyze ride offers and organize operational and financial information.
- **FR-004**: KM One content MUST prioritize the core value proposition of ride-offer analysis and operational/financial organization. The supported capability inventory acts as a product-truth whitelist: the homepage MAY select useful supporting capabilities from ride-offer analysis with value, distance and value per kilometer; offer classification; viewed and saved offer records; daily operational dashboard; ride and refueling records; earnings summaries; displacement and private-ride tracking; road or neighborhood Block List alerts; and shareable driver summaries, but it MUST NOT invent unsupported capabilities or be required to display every whitelisted capability.
- **FR-005**: KM One content MUST NOT claim or imply guaranteed rides, income, demand, savings, profitability, financial results, ratings, customer counts, driver counts, partnerships, awards, geographic availability or release dates.
- **FR-006**: Copiloto KM One MUST NOT be mentioned on this first homepage. Any generic future-AI wording that remains in scope MUST NOT be presented as generally available, autonomous or capable of promising rides, demand, income or earnings.
- **FR-007**: A homepage MUST explain Trevvos Flow as an intelligent list and task organization product.
- **FR-008**: Trevvos Flow content MUST remain limited to supported capabilities: local and shared lists, shopping and task lists, progress tracking, manually selected intelligent suggestions, collaboration and an AI-oriented area.
- **FR-009**: Trevvos Flow content MUST make explicit that intelligent suggestions remain under user choice and MUST NOT represent suggestions as autonomous actions performed without user selection.
- **FR-010**: A homepage MUST provide clear navigation or calls to action for visitors who want to continue exploring KM One and Trevvos Flow: the KM One CTA MUST point to the existing KM One landing destination, and the Trevvos Flow CTA MUST scroll or navigate to the Trevvos Flow section on the homepage.
- **FR-011**: A homepage MUST include real, indexable page content for the core company and product information rather than relying on interaction, animation, hidden states or non-text media to communicate essential meaning.
- **FR-012**: A homepage MUST work for mobile and desktop visitors with a clear information hierarchy, readable content and accessible navigation.
- **FR-013**: A homepage MUST use meaningful semantic content so assistive technologies can identify page purpose, major sections, product descriptions and navigation targets.
- **FR-014**: A homepage MUST maintain a modern, technical, product-oriented brand impression aligned with a software/product environment and the internal "Trevvos Operating Environment" concept, without inventing unsupported product functionality from that concept.
- **FR-015**: A homepage MUST remain scoped to the public Trevvos homepage and MUST NOT introduce backend development, authentication, account management, admin systems, CMS/article implementation, checkout, subscriptions, full KM One product pages, full Trevvos Flow product pages or unrelated repository refactors.

### Key Entities *(include if feature involves data)*

- **Trevvos**: The company and product platform. Key public attributes are its role as a technology company, its product-oriented positioning and its relationship to current products.
- **KM One**: The primary Trevvos product for ride-hailing and professional drivers. Key public attributes are its target audience, supported operational and financial organization capabilities, product prominence, omission of Copiloto KM One from this first homepage and limits on claims.
- **Trevvos Flow**: A Trevvos product for intelligent list and task organization. Key public attributes are supported list/task capabilities, collaboration, progress tracking, AI-oriented area and explicit user control over suggestions.
- **Homepage Navigation Target**: A destination offered from the homepage for continued exploration. Key attributes are label, product association and approved destination behavior. For this homepage, KM One uses the existing KM One landing destination, while Trevvos Flow uses its section on the same homepage.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In unaided first-time visitor comprehension review, participants can identify that Trevvos builds software products and that KM One is the primary product without moderator explanation.
- **SC-002**: In unaided first-time visitor comprehension review, participants can describe KM One's purpose as helping drivers analyze ride offers and organize operational or financial information after reading the homepage.
- **SC-003**: In unaided first-time visitor comprehension review, participants can describe Trevvos Flow as a list and task organization product after reading the homepage.
- **SC-004**: 100% of core claims on the homepage can be traced to the approved feature description or existing repository documentation.
- **SC-005**: 0 homepage statements imply guaranteed rides, income, demand, savings, profitability, customer counts, driver counts, partnerships, awards, ratings, geographic availability or unsupported release dates.
- **SC-006**: A manual accessibility review confirms that the page has a meaningful title, one clear primary heading, section headings, keyboard-reachable navigation and product information understandable by assistive technology.
- **SC-007**: A manual SEO content review confirms that Trevvos, KM One and Trevvos Flow descriptions are present in crawlable page content without requiring animation or interactive expansion.
- **SC-008**: On representative mobile and desktop viewport reviews, the KM One section is visually and structurally more prominent than Trevvos Flow while both products remain discoverable.

## Assumptions

- The homepage content language is Brazilian Portuguese, consistent with repository product documentation, unless a later requirement explicitly asks for multilingual content.
- The feature targets public, unauthenticated visitors.
- Existing repository documentation and the user-provided product context are the only approved sources for product claims in this specification.
- The homepage may link toward product information, but it does not itself define or implement account creation, lead capture, checkout, subscriptions, support chat or complete product pages.
- Animation, advanced interaction and visual effects may support the brand impression later, but the core message must be understandable without them.
- The internal "Trevvos Operating Environment" concept is a visual and experiential direction only, not a source of additional product capabilities.

## Scope

- Create the specification for the public Trevvos homepage.
- Define the homepage's product truth, user value, information hierarchy, required content, accessibility expectations, SEO expectations and bounded calls to action.
- Cover Trevvos as company/platform, KM One as primary product and Trevvos Flow as a secondary current product.

## Non-Goals

- No backend development or backend contract design.
- No authentication, login, user accounts, profiles or permissions.
- No admin system, CMS, article publishing workflow or content management implementation.
- No checkout, subscription, payment or pricing flow.
- No complete KM One product page.
- No complete Trevvos Flow product page.
- No unrelated repository refactor.
- No architectural design for frontend components, services, styles, libraries, deployment or integration.
- No unsupported claims about product availability, statistics, guarantees, financial results, partnerships, awards or future release dates.
