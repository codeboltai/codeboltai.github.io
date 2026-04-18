---
name: getPipeline
cbbaseinfo:
  description: "Retrieves a specific ingestion pipeline by its unique identifier.

Returns the full pipeline configuration including its processor chain, trigger
conditions, and execution history."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to retrieve
      isOptional: false
  returns:
    signatureTypeName: "Promise<IngestionPipeline>"
    description: A promise that resolves to the ingestion pipeline details
data:
  name: getPipeline
  category: memoryIngestion
  link: getPipeline.md
---
# getPipeline

```typescript
client.memoryIngestion.getPipeline(id: string): Promise<IngestionPipeline>
```

Retrieves a specific ingestion pipeline by its unique identifier.

Returns the full pipeline configuration including its processor chain, trigger
conditions, and execution history.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to retrieve |

## Returns

**`Promise<IngestionPipeline>`** — A promise that resolves to the ingestion pipeline details

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.getPipeline('id');
```
