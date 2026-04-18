---
name: getTriggered
cbbaseinfo:
  description: "Retrieves triggered calendar events.

Returns events whose trigger conditions have been met and are
pending action or acknowledgment."
cbparameters:
  parameters:
    - name: params
      typeName: CalendarFilterOptions
      description: Optional filter options
      isOptional: true
  returns:
    signatureTypeName: "Promise<CalendarEvent[]>"
    description: A promise that resolves to an array of triggered CalendarEvent objects
data:
  name: getTriggered
  category: calendar
  link: getTriggered.md
---
# getTriggered

```typescript
client.calendar.getTriggered(params?: CalendarFilterOptions): Promise<CalendarEvent[]>
```

Retrieves triggered calendar events.

Returns events whose trigger conditions have been met and are
pending action or acknowledgment.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `CalendarFilterOptions` _(optional)_ | Optional filter options |

## Returns

**`Promise<CalendarEvent[]>`** — A promise that resolves to an array of triggered CalendarEvent objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.getTriggered();
```
