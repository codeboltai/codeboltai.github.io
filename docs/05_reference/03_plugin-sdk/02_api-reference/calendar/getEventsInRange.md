---
name: getEventsInRange
cbbaseinfo:
  description: Get events within a specific date range
cbparameters:
  parameters:
    - name: params
      typeName: IGetEventsInRangeParams
      description: Parameters including startDate and endDate
      isOptional: false
  returns:
    signatureTypeName: "Promise<IGetEventsInRangeResponse>"
    description: Promise resolving to events in range
data:
  name: getEventsInRange
  category: calendar
  link: getEventsInRange.md
---
# getEventsInRange

```typescript
plugin.calendar.getEventsInRange(params: IGetEventsInRangeParams): Promise<IGetEventsInRangeResponse>
```

Get events within a specific date range

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `IGetEventsInRangeParams` | Parameters including startDate and endDate |

## Returns

**`Promise<IGetEventsInRangeResponse>`** — Promise resolving to events in range

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.calendar.getEventsInRange(/* IGetEventsInRangeParams */);
```
