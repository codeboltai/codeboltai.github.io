---
name: completeTriggered
cbbaseinfo:
  description: "Marks triggered events as complete.

Acknowledges and completes triggered events, removing them from
the pending triggered events list."
cbparameters:
  parameters:
    - name: data
      typeName: CompleteTriggeredRequest
      description: The completion payload identifying which triggered events to complete
      isOptional: false
  returns:
    signatureTypeName: "Promise<void>"
    description: A promise that resolves when the events have been marked complete
data:
  name: completeTriggered
  category: calendar
  link: completeTriggered.md
---
# completeTriggered

```typescript
client.calendar.completeTriggered(data: CompleteTriggeredRequest): Promise<void>
```

Marks triggered events as complete.

Acknowledges and completes triggered events, removing them from
the pending triggered events list.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CompleteTriggeredRequest` | The completion payload identifying which triggered events to complete |

## Returns

**`Promise<void>`** — A promise that resolves when the events have been marked complete

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.calendar.completeTriggered(/* CompleteTriggeredRequest */);
```
