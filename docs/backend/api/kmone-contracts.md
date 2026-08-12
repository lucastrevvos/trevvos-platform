# KM One Contracts

Future contracts for KM One mobile and product experiences.

These endpoints are conceptual and not implemented yet.

## Bootstrap

`POST /v1/kmone/mobile/bootstrap`

Initializes mobile context after install, login or sync reset. Expected future data may include feature flags, schema versions, sync cursors and city context availability.

## Driver Profile

`PUT /v1/kmone/driver/profile`

Updates driver profile data relevant to personalization and recommendations.

## Vehicle Profile

`PUT /v1/kmone/vehicle/profile`

Updates vehicle attributes used by deterministic calculations and context-aware guidance.

## City Today

`GET /v1/kmone/city/today`

Returns today's city context, initially for Florianopolis as the pilot city. Context can include weather, events, relevant time windows and data validity.

## Copilot Now

`GET /v1/kmone/copilot/now`

Returns current Copilot guidance based on driver, vehicle, day and city context. It must include evidence, origin, validity and confidence when recommendations are provided.
