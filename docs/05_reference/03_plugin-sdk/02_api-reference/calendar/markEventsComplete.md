---
name: markEventsComplete
cbbaseinfo:
  description: Mark multiple events as complete
cbparameters:
  parameters:
    - name: params
      typeName: IMarkEventsCompleteParams
      description: Parameters including array of eventIds
      isOptional: false
  returns:
    signatureTypeName: "Promise<IMarkEventsCompleteResponse>"
    description: Promise resolving to the completed events
data:
  name: markEventsComplete
  category: calendar
  link: markEventsComplete.md
---
# markEventsComplete

```typescript
plugin.calendar.markEventsComplete(params: IMarkEventsCompleteParams): Promise<IMarkEventsCompleteResponse>
```

Mark multiple events as complete

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IMarkEventsCompleteParams` | Parameters including array of eventIds |

## Returns

**`Promise<IMarkEventsCompleteResponse>`** — Promise resolving to the completed events

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.markEventsComplete(/* IMarkEventsCompleteParams */);
```
