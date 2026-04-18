---
name: getUpcoming
cbbaseinfo:
  description: "Retrieves upcoming calendar events.

Returns events scheduled in the near future, sorted chronologically.
Useful for displaying \"what's next\" views."
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: Optional filter options to customize the results
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEvent[]>"
    description: A promise that resolves to an array of upcoming CalendarEvent objects
data:
  name: getUpcoming
  category: calendar
  link: getUpcoming.md
---
# getUpcoming

```typescript
client.calendar.getUpcoming(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```

Retrieves upcoming calendar events.

Returns events scheduled in the near future, sorted chronologically.
Useful for displaying "what's next" views.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ | Optional filter options to customize the results |

## Returns

**`Promise<CalendarEvent[]>`** — A promise that resolves to an array of upcoming CalendarEvent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.getUpcoming();
```
