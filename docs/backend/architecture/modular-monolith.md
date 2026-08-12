# Modular Monolith

Trevvos API starts as a modular monolith.

This means:

- One deployable API.
- One PostgreSQL database.
- Internal modules separated by business responsibility.
- Clear dependency direction between API, Application, Domain and Infrastructure.
- No distributed system until there is a concrete operational reason.

## Why This Fits Now

The platform needs to learn, launch and evolve quickly. A modular monolith keeps the system understandable, cheap to operate and easy to debug while the product boundaries are still being validated.

It also avoids premature service extraction. Identity, billing, AI, audit, public site and KM One can evolve as modules first. If one boundary later needs independent scaling, deployment or ownership, it can be separated with clearer evidence.

## Initial Modules

- `PublicSite`: leads, app catalog, contact assistant and articles.
- `Identity`: future login and account model.
- `Billing`: future plans, payments and invoices.
- `Ai`: shared AI gateway, prompts, safety and evaluation.
- `KmOne`: mobile bootstrap, city context, copilot and sync.
- `Audit`: consent, user actions and operational traceability.
