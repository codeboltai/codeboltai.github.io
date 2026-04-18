---
name: getEventSchema
cbbaseinfo:
  description: "Retrieves the schema for a specific ingestion event type.

Returns the field definitions and validation rules for a single event type,
useful for building event handlers or display components."
cbparameters:
  parameters:
    - name: eventType
      typeName: string
      description: The event type identifier to get the schema for
      isOptional: false
  returns:
    signatureTypeName: "Promise<IngestionEventSchema>"
    description: A promise that resolves to the event schema definition
data:
  name: getEventSchema
  category: memoryIngestion
  link: getEventSchema.md
---
# getEventSchema

```typescript
client.memoryIngestion.getEventSchema(eventType: string): Promise<IngestionEventSchema>
```

Retrieves the schema for a specific ingestion event type.

Returns the field definitions and validation rules for a single event type,
useful for building event handlers or display components.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `eventType` | `string` | The event type identifier to get the schema for |

## Returns

**`Promise<IngestionEventSchema>`** — A promise that resolves to the event schema definition

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.getEventSchema('eventType');
```
