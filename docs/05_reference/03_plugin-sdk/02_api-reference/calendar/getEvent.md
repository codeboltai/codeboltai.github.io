---
name: getEvent
cbbaseinfo:
  description: Get a single calendar event by ID
cbparameters:
  parameters:
    - name: params
      typeName: IGetEventParams
      description: Parameters including eventId
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetEventResponse>"
    description: Promise resolving to the event
data:
  name: getEvent
  category: calendar
  link: getEvent.md
---
# getEvent

```typescript
plugin.calendar.getEvent(params: IGetEventParams): Promise<IGetEventResponse>
```

Get a single calendar event by ID

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetEventParams` | Parameters including eventId |

## Returns

**`Promise<IGetEventResponse>`** — Promise resolving to the event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.getEvent(/* IGetEventParams */);
```
