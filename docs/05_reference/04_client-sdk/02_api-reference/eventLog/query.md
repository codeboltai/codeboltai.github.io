---
name: query
cbbaseinfo:
  description: "Queries events using filter criteria.

Searches across event log instances to find events matching specific
types, time ranges, or other filter conditions."
cbparameters:
  parameters:
    - name: data
      typeName: EventLogQueryRequest
      description: Query parameters specifying filters and sorting
      isOptional: false
  returns:
    signatureTypeName: "Promise<EventLogEvent[]>"
    description: A promise that resolves to an array of matching  objects
data:
  name: query
  category: eventLog
  link: query.md
---
# query

```typescript
client.eventLog.query(data: EventLogQueryRequest): Promise<EventLogEvent[]>
```

Queries events using filter criteria.

Searches across event log instances to find events matching specific
types, time ranges, or other filter conditions.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `EventLogQueryRequest` | Query parameters specifying filters and sorting |

## Returns

**`Promise<EventLogEvent[]>`** — A promise that resolves to an array of matching  objects

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.eventLog.query(/* EventLogQueryRequest */);
```
