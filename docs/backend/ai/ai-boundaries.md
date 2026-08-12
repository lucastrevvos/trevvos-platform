# AI Boundaries

Trevvos should use AI as a shared capability through an `AiGateway`, not as scattered direct calls from each product feature.

## Future AI Surfaces

- Contact Assistant: helps visitors understand Trevvos, KM One, products, articles and contact paths.
- Copiloto KM One: helps drivers interpret their context and receive personalized guidance.

## Boundaries

- AI must not perform deterministic calculations that belong to normal code.
- AI must not promise rides, demand, income or platform behavior.
- AI must not hide uncertainty.
- Recommendations must show evidence, origin, validity window and confidence.
- AI output should be traceable enough for debugging, quality review and safety evaluation.

## Shared Gateway

The future `AiGateway` should centralize:

- Provider selection.
- Prompt templates.
- Model configuration.
- Safety filters.
- Logging and evaluation metadata.
- Cost and rate controls.
