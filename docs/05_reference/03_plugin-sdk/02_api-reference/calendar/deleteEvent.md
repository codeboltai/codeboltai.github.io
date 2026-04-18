---
name: deleteEvent
cbbaseinfo:
  description: Delete a calendar event
cbparameters:
  parameters:
    - name: params
      typeName: IDeleteEventParams
      description: Parameters including eventId
      isOptional: false
  returns:
    signatureTypeName: "Promise<IDeleteEventResponse>"
    description: Promise resolving to deletion confirmation
data:
  name: deleteEvent
  category: calendar
  link: deleteEvent.md
---
# deleteEvent

```typescript
plugin.calendar.deleteEvent(params: IDeleteEventParams): Promise<IDeleteEventResponse>
```

Delete a calendar event

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IDeleteEventParams` | Parameters including eventId |

## Returns

**`Promise<IDeleteEventResponse>`** — Promise resolving to deletion confirmation

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.deleteEvent(/* IDeleteEventParams */);
```
