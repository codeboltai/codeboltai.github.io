---
name: listEvents
cbbaseinfo:
  description: List calendar events with optional filters
cbparameters:
  parameters:
    - name: params
      typeName: IListEventsParams
      description: Optional filter parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<IListEventsResponse>"
    description: Promise resolving to list of events
data:
  name: listEvents
  category: calendar
  link: listEvents.md
---
# listEvents

```typescript
plugin.calendar.listEvents(params: IListEventsParams): Promise<IListEventsResponse>
```

List calendar events with optional filters

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IListEventsParams` | Optional filter parameters Default: `{}` |

## Returns

**`Promise<IListEventsResponse>`** — Promise resolving to list of events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.listEvents(/* IListEventsParams */);
```
