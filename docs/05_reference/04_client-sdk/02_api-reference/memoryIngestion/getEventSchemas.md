---
name: getEventSchemas
cbbaseinfo:
  description: "Retrieves all event schemas that define the structure of ingestion events.

Returns the schema definitions for each event type emitted by the ingestion system,
describing the fields and data types contained in each event."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<IngestionEventSchema[]>"
    description: A promise that resolves to an array of event schema definitions
data:
  name: getEventSchemas
  category: memoryIngestion
  link: getEventSchemas.md
---
# getEventSchemas

```typescript
client.memoryIngestion.getEventSchemas(): Promise<IngestionEventSchema[]>
```

Retrieves all event schemas that define the structure of ingestion events.

Returns the schema definitions for each event type emitted by the ingestion system,
describing the fields and data types contained in each event.

## Parameters

_None_

## Returns

**`Promise<IngestionEventSchema[]>`** — A promise that resolves to an array of event schema definitions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.getEventSchemas();
```
