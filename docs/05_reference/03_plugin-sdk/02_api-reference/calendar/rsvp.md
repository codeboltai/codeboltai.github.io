---
name: rsvp
cbbaseinfo:
  description: RSVP to a calendar event
cbparameters:
  parameters:
    - name: params
      typeName: IRSVPParams
      description: Parameters including eventId, participantId, and status
      isOptional: false
  returns:
    signatureTypeName: "Promise<IRSVPResponse>"
    description: Promise resolving to the updated event
data:
  name: rsvp
  category: calendar
  link: rsvp.md
---
# rsvp

```typescript
plugin.calendar.rsvp(params: IRSVPParams): Promise<IRSVPResponse>
```

RSVP to a calendar event

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IRSVPParams` | Parameters including eventId, participantId, and status |

## Returns

**`Promise<IRSVPResponse>`** — Promise resolving to the updated event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.rsvp(/* IRSVPParams */);
```
