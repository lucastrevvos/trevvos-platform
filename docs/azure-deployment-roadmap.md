# Publicação Azure — estado verificado em 22/11/2026

## Frontends publicados

| Aplicação | Caminho | Build | Saída | GitHub Actions |
| --- | --- | --- | --- | --- |
| Trevvos institucional | `src/frontend/trevvos-web` | `npm run build` (Next.js static export) | `out` | `azure-static-web-apps-nice-flower-0494eb010.yml` |
| KM One Landing | `src/frontend/kmone-landing` | `npm run build` (React/Vite) | `dist` | `azure-static-web-apps-delightful-hill-04248b510.yml` |

- O Next.js substituiu o Angular institucional pela PR #17 (22/11/2026).
- O workflow de produção de Trevvos Web concluiu deploy com sucesso: https://github.com/lucastrevvos/trevvos-platform/actions/runs/44984969982.
- Os workflows são separados por caminhos de arquivo; a alteração do site institucional não implica alteração no KM One.
- Os domínios informados pelo responsável são `trevvos.com.br` e `kmone.trevvos.com.br`.
- O Formspree do site institucional utiliza o ID público compartilhado `xyzebnjv`. A entrega de mensagens à caixa de e-mail exige verificação separada.

## Backend

O código fonte .NET encontra-se em `src/backend`. Não foi verificado, nesta auditoria de documentação, um deploy de produção do backend na Azure. Não interpretar a publicação dos frontends como prova de migração de API, banco ou workers.

O `docker-compose.yml` da raiz é um ambiente PostgreSQL **local**; mantê-lo.

## Histórico / migração

O roteiro antigo descrevia Trevvos Web como Angular não publicado. Esse estado não é mais válido. As configurações de produção atuais são os workflows versionados e os recursos configurados na Azure.

Antigas configurações de VPS estão no repositório histórico arquivado `portaltrevvos` e não fazem parte desta pipeline. Veja `docs/legacy-infrastructure-audit.md`.
