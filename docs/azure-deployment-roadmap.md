# Azure Deployment Roadmap

Este documento e apenas um roteiro. Nenhum recurso Azure, DNS ou deploy foi criado nesta tarefa.

## Etapa A - Urgente

Publicar `kmone.trevvos.com.br` usando `src/frontend/kmone-landing`.

- Framework: React 19 com Vite 6 e Tailwind CSS 4.
- Instalacao: `npm install`.
- Build: `npm run build`.
- Output: `dist`.
- Roteamento: usa `BrowserRouter`; manter fallback SPA para `index.html`.
- Formspree: usa `@formspree/react` com form id `xyzebnjv`.
- Variaveis de ambiente: nenhuma `VITE_*` foi encontrada.
- Arquivos nao versionados: `node_modules`, `dist`, arquivos `.env` reais e secrets.

Configuracao esperada para Azure Static Web Apps:

- App location: `src/frontend/kmone-landing`
- Api location: vazio
- Output location: `dist`
- Build command: `npm run build`

## Etapa B

Publicar `trevvos.com.br` usando `src/frontend/trevvos-web` quando o portal estiver pronto ou quando for decidida uma experiencia temporaria de "Em construcao".

Estado atual observado:

- Tecnologia: Angular 21.
- Build: `npm run build`.
- Output esperado: `dist/trevvos-web/browser` se configurado como application builder padrao; confirmar apos build.
- SSR/prerender: nao ha configuracao SSR/prerender no `angular.json` atual.
- Rotas atuais: somente `/`.

Opcoes futuras:

- Hospedar uma versao estatica/prerenderizada em Azure Static Web Apps quando todas as rotas publicas puderem ser geradas como HTML estatico.
- Hospedar SSR real em servico com runtime Node, como Azure App Service ou Container Apps, caso seja necessario render dinamico por requisicao.

## Etapa C

Estudar e publicar `Trevvos.Api` na infraestrutura Azure adequada.

O backend nao faz parte do deploy desta tarefa.
