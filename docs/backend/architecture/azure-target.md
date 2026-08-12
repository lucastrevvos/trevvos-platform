# Azure Target Architecture

Azure is the default future cloud target for Trevvos API.

## Services

- Azure App Service: hosts the ASP.NET Core API.
- Azure Database for PostgreSQL Flexible Server: managed PostgreSQL database.
- Azure Key Vault: secrets, connection strings and provider credentials.
- Azure Application Insights: logs, traces, metrics and production diagnostics.
- Azure Storage Account: files, media, exports and future attachments.
- Azure AI Foundry / Azure OpenAI: LLM capabilities through the shared AI gateway.
- Microsoft Entra External ID: future customer identity and login.
- Worker Service or Azure Functions: future background jobs for climate, events, sync processing and scheduled tasks.

## Principles

Local development must work before Azure is required. Azure integrations should be introduced behind infrastructure adapters and configuration boundaries, not scattered through product code.
