# Validação da publicação — 22/11/2026

Destino: `lucastrevvos/trevvos-platform`, branch `deploy/trevvos-nextjs`, aplicação `src/frontend/trevvos-web`.

Ambiente: Windows, Node.js 24.15.0, npm 11.12.1, Next.js 16.4.6. Código preparado em worktree isolado a partir de `3475b99`, sem incorporar as alterações locais de backend e KM One existentes no checkout principal.

## Verificações executadas

| Verificação                             | Resultado                                                                                                                         |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `npm ci`                                | Aprovado; 120 pacotes instalados; auditoria sem vulnerabilidades                                                                  |
| `npm test`                              | 33 testes aprovados em 2 arquivos                                                                                                 |
| `npm run typecheck`                     | Aprovado, após o build e a inclusão dos testes estáticos                                                                          |
| `npm run format:check`                  | Aprovado                                                                                                                          |
| `npm run build`                         | Aprovado; 3/3 páginas geradas; `/` e `/_not-found` estáticos                                                                      |
| `TREVVOS_STATIC_E2E=1 npm run test:e2e` | 11 testes Chromium aprovados em 28,6 s, servindo apenas `out`                                                                     |
| Arquivos de `public`                    | 42 arquivos presentes em `out`, todos com hash SHA-256 idêntico                                                                   |
| Fontes                                  | 35 arquivos WOFF/WOFF2 empacotados; carregamento no navegador aprovado                                                            |
| Formspree                               | Contato e Commerce confirmados no endpoint `https://formspree.io/f/xyzebnjv`, com respostas interceptadas                         |
| Recursos incompatíveis                  | Não há dependência obrigatória de SSR, API Routes ou Server Actions; nenhum recurso foi removido para contornar incompatibilidade |

`next.config.ts` contém `output: "export"` e `images.unoptimized: true`. A exportação contém `index.html`, `404.html`, CSS/JavaScript em `_next`, imagens, logotipos e fontes. Foram gerados 104 arquivos, totalizando 14.884.363 bytes. `out`, dependências, caches e capturas de testes permanecem ignorados pelo Git.

A suíte de navegador cobre os dois formulários, validação, sucesso, falha de limite com preservação dos dados, reinício, CTAs e foco, acessibilidade com axe, larguras de 360/375/768/1440 px e as 12 fotografias dos setores. O teste estático também verifica marcas e fontes, ausência de erros JavaScript/HTTP e ausência de chamadas ao otimizador `/_next/image`.

## Preservação e limites

Antes dos ajustes, os 57 arquivos de código, recursos públicos, testes e referências foram conferidos por hash contra a origem. Todos os componentes, estilos, hooks, dados, imagens e referências permanecem idênticos. No código da aplicação, somente `src/lib/formspree-config.ts` mudou para fornecer o ID público padrão. Configurações, documentação e testes receberam os ajustes de publicação.

O código Next.js original em `C:/dev/PROJETOS/TREVVOS` permanece intacto. Os recursos públicos legados do portal também foram mantidos. O Angular antigo está preservado na branch `backup/trevvos-web-angular-2026-11-22`, em `f78e5fbe034de1c7b829b31916aa72f5ebd403a4`.

Não houve alteração de workflows, `main`, backend, aplicações KM One, domínios ou recursos Azure. O workflow preparado já aponta para `out` e define os dois IDs públicos; seu gatilho automático continua restrito a `main`. Esta publicação na branch de implantação não executa implantação Azure.

Não foram enviados leads reais. Os testes não comprovam entrega por e-mail, destinatários, limites ou regras administrativas da conta Formspree. A obtenção das fontes Google exige rede durante o build; o site exportado as serve localmente.
