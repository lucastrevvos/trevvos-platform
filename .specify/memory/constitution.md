<!--
Sync Impact Report
Version change: template scaffold -> 1.0.0
Modified principles:
- Template principle placeholder 1 -> I. Product Truth
- Template principle placeholder 2 -> II. Small, Reviewable Changes
- Template principle placeholder 3 -> III. Evidence Before Completion
- Template principle placeholder 4 -> IV. Human-Owned Architecture
- Template principle placeholder 5 -> V. Simplicity Before Abstraction
Added principles:
- VI. Explicit Boundaries
- VII. Quality Is Part of the Feature
- VIII. AI Output Is Untrusted Until Validated
- IX. Specification Before Implementation
- X. No Silent Assumptions
Added sections:
- Repository Scope
- Development Workflow
Removed sections:
- None
Follow-up TODOs:
- None
-->

# Trevvos Platform Constitution

## Core Principles

### I. Product Truth

Implementation MUST NOT invent product capabilities, availability, guarantees, metrics,
business rules, or behavior. Product-facing changes MUST be grounded in approved
requirements, existing repository documentation, accepted specifications, or explicit human
direction. When those sources conflict, agents MUST surface the conflict before proceeding.

Rationale: A brownfield platform must preserve real product behavior and avoid converting
assumptions into shipped commitments.

### II. Small, Reviewable Changes

Changes MUST be small, bounded, reviewable, and reversible. Feature work MUST NOT include
broad unrelated refactors, formatting churn, dependency swaps, or repository reshaping unless
the approved scope explicitly requires them. When a larger change is unavoidable, it MUST be
split into coherent review units where practical.

Rationale: The monorepo stays safer when reviewers can understand the intent, blast radius,
and rollback path of each change.

### III. Evidence Before Completion

No task may be declared complete without executing the applicable validation steps, such as
build, automated tests, linting, static analysis, contract checks, or documented acceptance
checks. Agents and contributors MUST report exactly which validations were executed and MUST
NOT claim a validation passed if it was not executed.

Rationale: Completion is an evidence-based state, not a confidence statement.

### IV. Human-Owned Architecture

AI agents may propose architectural options, tradeoffs, and implementation paths, but durable
architectural decisions remain human-owned. Significant architectural changes MUST receive
explicit human approval and MUST be documented through Architecture Decision Records before
or as part of the change. Existing ADR requirements for authentication, authorization, AI
ledger, and community fund behavior remain mandatory.

Rationale: Architecture encodes product, operational, and governance commitments that cannot
be delegated to generated output.

### V. Simplicity Before Abstraction

The repository MUST avoid speculative architecture, premature abstractions, unnecessary
dependencies, microservices, Kubernetes, queues, event buses, or infrastructure patterns
without a concrete current requirement. New projects, folders, schemas, modules, or shared
abstractions MUST exist because real behavior needs them now.

Rationale: Simplicity protects the modular monolith from unnecessary operational and
cognitive cost.

### VI. Explicit Boundaries

Contributors MUST respect boundaries between backend, frontends, products, modules, and
deployment units in this monorepo. Changes MUST NOT modify unrelated areas unless explicitly
required by the accepted scope. Module boundaries documented in
`docs/architecture/module-boundaries.md` are binding, including the rule that future modules
do not directly access internal tables of other modules.

Rationale: Clear boundaries preserve the modular monolith while allowing the repository to
evolve safely.

### VII. Quality Is Part of the Feature

Maintainability, testability, accessibility, security, and SEO where applicable are part of
the Definition of Done. Feature plans and reviews MUST include the quality work necessary for
the changed surface, and MUST NOT defer required quality controls as optional follow-up work
without explicit acceptance of the exception.

Rationale: Quality attributes determine whether a change is usable, operable, and safe in
production.

### VIII. AI Output Is Untrusted Until Validated

Generated code, documentation, tests, plans, specifications, and architectural suggestions
MUST be reviewed and validated before acceptance. AI-generated tests MUST NOT be treated as
proof unless they are relevant, executable, and have been run. Generated documentation MUST be
checked against repository reality and approved requirements.

Rationale: AI output can accelerate work, but it can also encode plausible errors with high
confidence.

### IX. Specification Before Implementation

Meaningful features MUST begin with an approved specification that defines intent, user
value, requirements, scope, non-goals, and acceptance criteria before implementation begins.
Small maintenance changes may proceed without a full feature specification when they do not
change product behavior, architecture, or module boundaries.

Rationale: Specifications keep implementation aligned with product intent and make review
criteria explicit.

### X. No Silent Assumptions

Agents and contributors MUST surface material ambiguity, conflicts, or missing product
decisions rather than silently inventing behavior. Minor implementation details may be
resolved locally only when they do not alter product behavior, user commitments,
architecture, security, authorization, accounting, or module boundaries.

Rationale: Silent assumptions turn unknowns into hidden requirements and increase rework.

## Repository Scope

This constitution governs the entire `trevvos-platform` repository, including backend,
frontends, tests, documentation, infrastructure definitions, Spec Kit artifacts, and future
repository-local modules. It is not limited to `trevvos-web`.

The repository is a brownfield monorepo. The backend follows a modular monolith architecture.
Contributors MUST preserve the single-repository strategy and the backend modular monolith
unless an approved ADR explicitly changes either direction. Existing `AGENTS.md` files may add more specific local instructions, but they MUST
NOT contradict this constitution.

The repository MUST NOT use, copy, modify, or depend on `lucastrevvos/portaltrevvos`.
Secrets MUST NOT be committed. AI model tokens MUST NOT be treated as authentication tokens.
Community credits, promotional credits, donated infrastructure, and cash on hand MUST remain
distinct concepts. Donations MUST support the global community fund and MUST NOT create an
individual donor advantage.

## Development Workflow

Before implementation, contributors MUST identify the applicable specification, accepted
requirement, issue, ADR, or explicit human instruction that authorizes the change. Changes that
affect product behavior, architecture, security, authorization, accounting, deployment units,
or module boundaries MUST document scope and acceptance criteria before code changes begin.

During implementation, contributors MUST keep code identifiers, class names, method names,
variable names, branch names, and commit messages in English. Product documentation may remain
in Brazilian Portuguese unless there is an explicit reason to use another language.

Before completion, contributors MUST execute validations compatible with the change and report
the results. If validation cannot be executed, contributors MUST state the reason, the residual
risk, and the exact command or check that remains pending.

Durable exceptions to this constitution MUST be explicit, human-approved, and documented in an
ADR or other repository governance artifact that references the affected principle.

## Governance

This constitution has precedence over feature specifications, implementation plans, generated
tasks, and local workflow preferences when they conflict. Existing `AGENTS.md` files may define
stricter local rules, but they MUST NOT weaken or contradict constitutional rules.

Changes to constitutional principles require explicit human approval. Amendments MUST include
a Sync Impact Report, updated semantic version, amendment date, and a concise explanation of
the affected principles, sections, and downstream workflow impact.

Constitution versions follow semantic versioning:

- MAJOR: backward-incompatible governance changes, principle removals, or principle
  redefinitions.
- MINOR: new principles, new governance sections, or materially expanded guidance.
- PATCH: clarifications, wording improvements, typo fixes, and non-semantic refinements.

Compliance review is required for feature specifications, implementation plans, task lists,
code reviews, and completion summaries. Reviewers and agents MUST check that the proposed work
respects product truth, repository boundaries, validation requirements, and ADR obligations.

**Version**: 1.0.0 | **Ratified**: 2026-08-13 | **Last Amended**: 2026-08-13
