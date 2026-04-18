---
name: deletePipeline
cbbaseinfo:
  description: "Permanently deletes an ingestion pipeline.

Removes the pipeline configuration. Previously ingested data is not affected.
The pipeline must be disabled before deletion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pipeline has been deleted
data:
  name: deletePipeline
  category: memoryIngestion
  link: deletePipeline.md
---
# deletePipeline

```typescript
client.memoryIngestion.deletePipeline(id: string): Promise<unknown>
```

Permanently deletes an ingestion pipeline.

Removes the pipeline configuration. Previously ingested data is not affected.
The pipeline must be disabled before deletion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pipeline has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.deletePipeline('id');
```
