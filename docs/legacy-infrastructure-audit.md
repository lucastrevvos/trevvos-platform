# Inventário de infraestrutura legada — auditoria de 22/11/2026

## Confirmado no GitHub

- `lucastrevvos/trevvos-platform`: repositório ativo, com dois workflows independentes **Azure Static Web Apps**.
- `lucastrevvos/portaltrevvos`: repositório **arquivado**; contém scripts antigos de VPS/Hostinger e workflow `deploy-api-vps.yml` para SSH. Última execução registrada de `Deploy VPS`: **08/07/2026**. Arquivamento impede que esse repo seja mantido como pipeline ativa.
- `lucastrevvos/trevvos-neural-portal`: repositório **arquivado** e substituído pelo monorepo.
- `trevvos-platform/docker-compose.yml`: PostgreSQL **local**, não é serviço VPS; preservar.

## Endpoints históricos mencionados nos arquivos de Caddy (não são validação ao vivo)

O arquivo antigo `portaltrevvos/deploy/vps/Caddyfile` contém referências a:
- `trevvos.com.br` e `www.trevvos.com.br` (antigo portal, hoje migrou para Azure);
- `kmone.trevvos.com.br` (site atual na Azure);
- `api.trevvos.com.br` (antiga API);
- `vps.trevvos.com.br`;
- `kmoneconnect.trevvos.com.br`.

Nenhuma dessas entradas confirma o estado DNS, existência de recursos ou dependências atuais.

## Itens que NÃO foram removidos

1. Servidor VPS/Hostinger, VMs, volumes, snapshots, bancos, certificados e regras de rede. **Sem acesso administrativo ao provedor**, não é possível verificar backup e consumidores, nem excluir recursos.
2. `api.trevvos.com.br` e bancos de dados: **não foi comprovado** que a API ou seus consumidores foram migrados/desativados.
3. Repositórios arquivados: são histórico versionado e não deploy ativo.
4. Integração Vercel: o commit de produção apresentou um status `Vercel: success`; pode ser uma integração remanescente. Conferir projeto/assinatura no painel Vercel antes de desvincular ou excluir; não presumir domínio em uso.
5. Backups/branches de rollback ou projetos independentes, inclusive KM One e backend.

## Checagens para descomissionamento definitivo (painéis de provedores)

- No painel **Hostinger**, conferir existência e cobrança da VPS, tráfego, serviços, backups/snapshots e workloads além dos sites; exportar dados necessários antes de cancelar.
- No DNS, verificar entradas antigas de API, VPS e KM One Connect somente após inventariar consumidores.
- No painel **Vercel**, identificar o projeto que gera status `Vercel` para o repositório `trevvos-platform`, seus domínios e deployments; desvincular apenas quando confirmado redundante.
- No **Azure**, manter o recurso `trevvos-web`, `kmone-web`, domínios associados e configurações de deploy; nenhum recurso foi apagado nesta auditoria.

## Decisão

Não excluir infraestrutura com dados ou custos recorrentes sem comprovação da ausência de dependências. Os únicos ajustes seguros automáticos nesta etapa são correção de documentação desatualizada e do script local de desenvolvimento.
