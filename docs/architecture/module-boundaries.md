# Limites de Módulos

Módulos previstos:

- Identity
- Profiles
- Skills
- Partnerships
- Scheduling
- Messaging
- Moderation
- AiOperations
- CommunityFunding
- Sponsorships
- Notifications
- Administration
- Audit

Nesta fundação, esses módulos existem apenas como documentação. Projetos, pastas e schemas dedicados só devem surgir quando houver comportamento real.

## Regras

- `SharedKernel` não depende da API nem de módulos de domínio.
- `Api` compõe dependências e expõe endpoints.
- Módulos futuros não devem acessar tabelas internas de outros módulos diretamente.
- Alterações em autenticação, ledger de IA e fundo comunitário exigem ADR.
- Administração e auditoria devem ser transversais, mas não podem virar atalho para burlar autorização.
