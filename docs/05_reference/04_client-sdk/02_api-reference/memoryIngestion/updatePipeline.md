---
name: updatePipeline
cbbaseinfo:
  description: "Updates an existing ingestion pipeline's configuration.

Modifies the pipeline's processor chain, triggers, or metadata. Changes affect
subsequent executions but do not alter previously ingested data."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to update
      isOptional: false
    - name: data
      typeName: UpdateIngestionPipelineRequest
      description: The fields to update on the pipeline
      isOptional: false
  returns:
    signatureTypeName: "Promise<IngestionPipeline>"
    description: A promise that resolves to the updated pipeline
data:
  name: updatePipeline
  category: memoryIngestion
  link: updatePipeline.md
---
# updatePipeline

```typescript
client.memoryIngestion.updatePipeline(id: string, data: UpdateIngestionPipelineRequest): Promise<IngestionPipeline>
```

Updates an existing ingestion pipeline's configuration.

Modifies the pipeline's processor chain, triggers, or metadata. Changes affect
subsequent executions but do not alter previously ingested data.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to update |
| `data` | `UpdateIngestionPipelineRequest` | The fields to update on the pipeline |

## Returns

**`Promise<IngestionPipeline>`** — A promise that resolves to the updated pipeline

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.updatePipeline('id', /* UpdateIngestionPipelineRequest */);
```
