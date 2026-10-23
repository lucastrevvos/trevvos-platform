# Foundation 001 — Local infrastructure guide

This branch is a **starting baseline**, not production-ready infrastructure.

## Prerequisites

- Docker Engine/Desktop with Compose v2
- .NET SDK specified in `global.json` for local CLI use
- `kind` and `kubectl` for Kubernetes exercises

## Compose: existing .NET API + PostgreSQL + RabbitMQ

At repository root:

```bash
cp .env.example .env
# Edit .env and set a unique local password for RABBITMQ_DEFAULT_PASS
docker compose -f docker-compose.yml -f compose.local.yml config --quiet
docker compose -f docker-compose.yml -f compose.local.yml up --build -d
curl --fail http://127.0.0.1:8080/health
docker compose -f docker-compose.yml -f compose.local.yml logs -f api
```

Endpoints bound to **loopback only**: API at `127.0.0.1:8080`, PostgreSQL at `127.0.0.1:55432`, RabbitMQ management at `127.0.0.1:15672`. The RabbitMQ AMQP listener is not published to the host: containers access it by service name `rabbitmq:5672`. Local passwords are not acceptable for production.

This first increment intentionally does **not** connect the API to RabbitMQ. A correct event contract and Outbox belong to a later vertical slice.

```bash
docker compose -f docker-compose.yml -f compose.local.yml down
# CAUTION: adding -v permanently deletes local development DB / RabbitMQ volumes.
```

## kind laboratory: API health, deployment, service, probes

```bash
kind create cluster --name trevvos-local --config ops/kind/cluster.yaml
docker build -f src/backend/Trevvos.Api/Dockerfile -t trevvos-api:dev .
kind load docker-image trevvos-api:dev --name trevvos-local
kubectl apply -f ops/k8s/local/namespace.yaml
kubectl apply -f ops/k8s/local/trevvos-api.yaml
kubectl -n trevvos-local rollout status deployment/trevvos-api
kubectl -n trevvos-local port-forward service/trevvos-api 18080:8080
# In a second terminal: curl --fail http://127.0.0.1:18080/health
```

This Kubernetes exercise currently checks the API's **process health only**. It does not validate database connectivity, end-to-end business operations or production security. DB/secrets and NestJS manifests are added when those services are operational.

Destroy the learning cluster with: `kind delete cluster --name trevvos-local`.

## Important support-window warning

The existing .NET projects target `net8.0`; this first Dockerfile therefore uses ASP.NET 8 runtime until the migration PR. .NET 8 support ends **2026-11-10**. **Do not deploy this image to production.** Move to .NET 10 and revalidate EF Core/Npgsql before launch.

Official references:
- https://dotnet.microsoft.com/en-us/platform/support/policy
- https://kind.sigs.k8s.io/docs/user/quick-start
