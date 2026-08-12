# Mobile Sync Contract

KM One remains offline-first. The Android app should continue working without connectivity and sync events when the network is available.

## Event Envelope

Future sync events should use a stable envelope:

```json
{
  "eventId": "01JEXAMPLEEVENTID",
  "eventType": "ride_saved",
  "occurredAt": "2026-08-04T12:00:00Z",
  "schemaVersion": 1,
  "deviceId": "android-device-id",
  "userId": "future-user-id",
  "payload": {}
}
```

## Rules

- Events must be idempotent by `eventId`.
- `schemaVersion` is required for payload evolution.
- Server processing should tolerate retries and out-of-order delivery where possible.
- The mobile app remains the source for offline-captured events until acknowledged.
- Sensitive events must include enough audit metadata for consent and support investigations.

## Initial Event Types

- `seen_offer_recorded`
- `ride_saved`
- `fuel_entry_added`
- `tracking_record_saved`
- `driver_profile_updated`
- `recommendation_feedback_sent`
