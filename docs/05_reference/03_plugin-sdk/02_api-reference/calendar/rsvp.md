---
title: rsvp
---

# `rsvp`

```typescript
plugin.calendar.rsvp(params: IRSVPParams): Promise<IRSVPResponse>
```

RSVP to a calendar event

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IRSVPParams` | Yes | Parameters including eventId, participantId, and status |

## Returns

`Promise<IRSVPResponse>` — Promise resolving to the updated event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.calendar.rsvp(/* IRSVPParams */);
console.log(result);
```
