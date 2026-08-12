# Observabilidade e Operação

## Fundação

- Logs estruturados em JSON no backend.
- Correlation ID por requisição via `X-Correlation-ID`.
- Health checks `/health/live` e `/health/ready`.
- Docker Compose com health check do PostgreSQL.

## Futuro

- Métricas e traces com OpenTelemetry.
- Readiness e liveness separados por ambiente.
- Alertas de orçamento de IA e abuso.
- Alertas de falha de integrações.
- Jobs de reconciliação.
- Backups testados e plano de recuperação.
- Retenção de dados e auditoria de ações administrativas.
