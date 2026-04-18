---
name: getIndex
cbbaseinfo:
  description: "Retrieves the calendar index.

Returns an indexed view of calendar events, optimized for fast
lookups and navigation across large numbers of events."
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: Optional filter options
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarIndexEntry[]>"
    description: A promise that resolves to an array of CalendarIndexEntry objects
data:
  name: getIndex
  category: calendar
  link: getIndex.md
---
# getIndex

```typescript
client.calendar.getIndex(params?: CalendarFilterOptions): Promise<CalendarIndexEntry[]>
```

Retrieves the calendar index.

Returns an indexed view of calendar events, optimized for fast
lookups and navigation across large numbers of events.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ | Optional filter options |

## Returns

**`Promise<CalendarIndexEntry[]>`** — A promise that resolves to an array of CalendarIndexEntry objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.getIndex();
```
