# KM One — Production Readiness Gates

**Status:** Initial checklist, not a claim that any gate currently passes.

## Before merging a feature

- [ ] Requirement and acceptance criteria are recorded; failure cases are understood
- [ ] Unit/integration/contract tests cover key behavior and unauthorized access
- [ ] CI builds the change, executes tests and rejects failures
- [ ] Dependencies and images are reviewed for security and support lifecycle
- [ ] No secrets, tokens, driver-sensitive data or personal information appear in commits or logs
- [ ] Database migrations are reviewed for backward compatibility, indexes and data integrity
- [ ] API contracts are versioned or backward compatible; error semantics documented
- [ ] Timeouts, cancellation, retry/backoff and idempotency considered at remote boundaries
- [ ] Observability and error handling are proportional to risk
- [ ] Owner and rollback or mitigation path documented

## Before any production release carrying real user data

- [ ] Authorized identity solution with resource-level ownership enforcement
- [ ] Separate dev/staging/prod configuration and credentials
- [ ] TLS, private DB/broker networking and least-privilege service principals
- [ ] Automated CI/CD with controlled rollout, release provenance and rollback tested
- [ ] Signed-off staging smoke tests, database migration/rollback strategy
- [ ] Documented LGPD lawful basis, privacy notice, retention/deletion/access workflows
- [ ] Backups configured **and successfully restored** in an isolated rehearsal
- [ ] Written RPO/RTO and realistic availability goals; escalation and incident runbook
- [ ] Logs/metrics/traces without personal data, with actionable monitoring and alerts
- [ ] Dependency and container vulnerability scanning and a remediation policy
- [ ] Rate limiting, abuse controls and authentication failure handling
- [ ] Performance test with realistic data volumes and agreed load targets
- [ ] Android offline sync protocol designed and tested for duplication, conflicts and deletes

No single checklist line is proof by itself. Record evidence and date in a release record.

## The first learning/engineering milestone

1. Obtain a clean .NET baseline build and tests with the pinned SDK.
2. Build and run the existing API in a Linux container.
3. Bring up a private RabbitMQ locally without connecting it to transactional code.
4. Exercise the local kind cluster and health probes.
5. Bootstrap the NestJS service with a lockfile and independent tests.
6. Upgrade .NET projects and EF Core/Npgsql packages to a supported major together.
7. Implement first audited feature through API, persistence and user-based authorization.
8. Implement Outbox -> RabbitMQ -> Insights only when a real business event exists.

**Explicit non-goals of Foundation 001:** production deployment, user accounts, migration of customer data, claiming security certification.
