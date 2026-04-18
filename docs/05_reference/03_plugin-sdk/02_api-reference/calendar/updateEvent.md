---
name: updateEvent
cbbaseinfo:
  description: Update an existing calendar event
cbparameters:
  parameters:
    - name: params
      typeName: IUpdateEventParams
      description: Event update parameters including eventId
      isOptional: false
  returns:
    signatureTypeName: "Promise<IUpdateEventResponse>"
    description: Promise resolving to the updated event
data:
  name: updateEvent
  category: calendar
  link: updateEvent.md
---
# updateEvent

```typescript
plugin.calendar.updateEvent(params: IUpdateEventParams): Promise<IUpdateEventResponse>
```

Update an existing calendar event

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IUpdateEventParams` | Event update parameters including eventId |

## Returns

**`Promise<IUpdateEventResponse>`** — Promise resolving to the updated event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.updateEvent(/* IUpdateEventParams */);
```
