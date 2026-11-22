# ADR 0001 — Portal institucional com Next.js e exportação estática

Data: 2026-11-22. Status: aceito para a branch `deploy/trevvos-nextjs`.

## Contexto

O responsável solicitou substituir o portal Angular pela aplicação Next.js desenvolvida em `C:/dev/PROJETOS/TREVVOS`, preservando seu conteúdo, recursos visuais, formulários e interações. A versão Angular está preservada em `backup/trevvos-web-angular-2026-11-22`.

## Decisão

Publicar o código completo em `src/frontend/trevvos-web`, com `output: "export"` e `images.unoptimized: true`. O comando `npm run build` gera `out`, consumido pelo workflow Azure já preparado. Preservar as fontes existentes e também os recursos públicos legados, sem dependência do runtime Angular.

Os dois formulários usam diretamente o Formspree `xyzebnjv`. O ID público de contato é o padrão quando não há variável de ambiente; Commerce herda esse ID quando sua variável está vazia. As variáveis públicas continuam permitindo configuração explícita, e valores inválidos bloqueiam o envio. O workflow existente define ambos como `xyzebnjv`.

## Consequências e limites

Não há dependência obrigatória de SSR, API Routes, Server Actions ou backend. Os componentes de servidor executam durante o build, e as interações React e submissões Formspree executam no navegador. As imagens são servidas como arquivos estáticos, sem serviço de otimização em tempo de execução. Fontes Google são obtidas durante o build e incluídas na exportação.

As antigas rotas e implementações Angular são removidas desta aplicação; não são adicionadas rotas que não existam no novo site aprovado. A aplicação original Next.js permanece intacta fora do worktree. Não há mudança em `main`, workflows, domínios, recursos Azure, KM One ou backend. O push na branch de implantação não dispara o workflow atual, cujo gatilho automático é `main`.

A validação de formulários usa rede simulada para não criar leads reais. Entrega de e-mail e configuração administrativa do Formspree não são comprovadas por esses testes.
