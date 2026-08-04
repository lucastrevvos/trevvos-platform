# Azure Services Plan

## M0 Local Dev

- Run API locally.
- Run PostgreSQL through Docker Compose.
- Keep secrets outside source control.
- Validate with `dotnet build` and `dotnet test`.

## M1 API on App Service

- Deploy ASP.NET Core API to Azure App Service.
- Configure environment-specific settings.
- Keep health endpoint available for platform checks.

## M2 PostgreSQL Azure

- Provision Azure Database for PostgreSQL Flexible Server.
- Move connection string to managed configuration.
- Introduce migrations only after real entities exist.

## M3 Key Vault and Application Insights

- Store secrets in Azure Key Vault.
- Enable Application Insights for logs, traces and metrics.
- Correlate requests, errors and background jobs.

## M4 Storage

- Add Azure Storage Account for files, article media, exports or future attachments.

## M5 AI Foundry/OpenAI

- Introduce Azure AI Foundry or Azure OpenAI behind the shared AI gateway.
- Add safety, evaluation, cost tracking and prompt versioning.

## M6 Entra External ID

- Add Microsoft Entra External ID for future public login.
- Keep authentication and authorization isolated in the Identity module.

## M7 Billing/Payments

- Add billing and payment integrations after product packaging is defined.
- Keep external payment providers behind infrastructure adapters.
