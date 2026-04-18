---
name: getRange
cbbaseinfo:
  description: "Retrieves calendar events within a date range.

Returns full event objects for all events that overlap with the
specified date range."
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: Optional filter options including date range boundaries
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEvent[]>"
    description: A promise that resolves to an array of CalendarEvent objects in the range
data:
  name: getRange
  category: calendar
  link: getRange.md
---
# getRange

```typescript
client.calendar.getRange(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```

Retrieves calendar events within a date range.

Returns full event objects for all events that overlap with the
specified date range.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ | Optional filter options including date range boundaries |

## Returns

**`Promise<CalendarEvent[]>`** — A promise that resolves to an array of CalendarEvent objects in the range

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.getRange();
```
