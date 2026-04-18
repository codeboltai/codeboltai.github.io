---
name: createEvent
cbbaseinfo:
  description: Create a new calendar event
cbparameters:
  parameters:
    - name: params
      typeName: ICreateEventParams
      description: Event creation parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<ICreateEventResponse>"
    description: Promise resolving to the created event
data:
  name: createEvent
  category: calendar
  link: createEvent.md
---
# createEvent

```typescript
plugin.calendar.createEvent(params: ICreateEventParams): Promise<ICreateEventResponse>
```

Create a new calendar event

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `ICreateEventParams` | Event creation parameters |

## Returns

**`Promise<ICreateEventResponse>`** — Promise resolving to the created event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.createEvent(/* ICreateEventParams */);
```
