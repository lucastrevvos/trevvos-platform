# Estratégia de Dados

PostgreSQL será o banco principal. A fundação possui `TrevvosDbContext` sem entidades de negócio, portanto não há migrations nesta etapa.

## Diretrizes

- Instantes em UTC.
- Fuso horário como identificador IANA.
- Dados pessoais mínimos e com finalidade clara.
- Auditoria para ações administrativas sensíveis.
- Ledger de IA append-only ou com garantia equivalente.
- Prompts e respostas de IA não devem ser armazenados integralmente por padrão.
- Retenção, redaction e anonimização devem ser definidas antes de produção.

Schemas por módulo podem ser adotados no futuro, quando os módulos forem implementados.
