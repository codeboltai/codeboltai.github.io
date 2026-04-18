---
name: markEventComplete
cbbaseinfo:
  description: Mark a single event as complete
cbparameters:
  parameters:
    - name: params
      typeName: IMarkEventCompleteParams
      description: Parameters including eventId
      isOptional: false
  returns:
    signatureTypeName: "Promise<IMarkEventCompleteResponse>"
    description: Promise resolving to the completed event
data:
  name: markEventComplete
  category: calendar
  link: markEventComplete.md
---
# markEventComplete

```typescript
plugin.calendar.markEventComplete(params: IMarkEventCompleteParams): Promise<IMarkEventCompleteResponse>
```

Mark a single event as complete

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IMarkEventCompleteParams` | Parameters including eventId |

## Returns

**`Promise<IMarkEventCompleteResponse>`** — Promise resolving to the completed event

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.markEventComplete(/* IMarkEventCompleteParams */);
```
