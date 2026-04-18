---
name: listEvents
cbbaseinfo:
  description: "Lists ingestion events with optional filtering.

Returns records of ingestion pipeline executions, including success/failure status,
processing metrics, and error details. Useful for monitoring and debugging pipelines."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering events
      isOptional: true
  returns:
    signatureTypeName: "Promise<IngestionEvent[]>"
    description: A promise that resolves to an array of ingestion events
data:
  name: listEvents
  category: memoryIngestion
  link: listEvents.md
---
# listEvents

```typescript
client.memoryIngestion.listEvents(params?: Record<string, unknown>): Promise<IngestionEvent[]>
```

Lists ingestion events with optional filtering.

Returns records of ingestion pipeline executions, including success/failure status,
processing metrics, and error details. Useful for monitoring and debugging pipelines.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering events |

## Returns

**`Promise<IngestionEvent[]>`** — A promise that resolves to an array of ingestion events

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.listEvents();
```
