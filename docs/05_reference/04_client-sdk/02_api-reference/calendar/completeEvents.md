---
name: completeEvents
cbbaseinfo:
  description: "Bulk-completes multiple calendar events.

Marks multiple events as complete in a single operation, useful for
batch processing of finished events."
cbparameters:
  parameters:
    - name: data
      typeName: BulkCompleteEventsRequest
      description: The bulk completion payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when all specified events have been completed
data:
  name: completeEvents
  category: calendar
  link: completeEvents.md
---
# completeEvents

```typescript
client.calendar.completeEvents(data: BulkCompleteEventsRequest): Promise<void>
```

Bulk-completes multiple calendar events.

Marks multiple events as complete in a single operation, useful for
batch processing of finished events.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `BulkCompleteEventsRequest` | The bulk completion payload |

## Returns

**`Promise<void>`** — A promise that resolves when all specified events have been completed

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.completeEvents(/* BulkCompleteEventsRequest */);
```
