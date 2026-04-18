---
name: duplicatePipeline
cbbaseinfo:
  description: "Creates a copy of an existing ingestion pipeline.

Duplicates the pipeline configuration, optionally with modifications. Useful for
creating variations of working pipelines without starting from scratch."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to duplicate
      isOptional: false
    - name: data
      typeName: DuplicateIngestionPipelineRequest
      description: Optional modifications to apply to the duplicated pipeline
      isOptional: true
  returns:
    signatureTypeName: "Promise<IngestionPipeline>"
    description: A promise that resolves to the newly created duplicate pipeline
data:
  name: duplicatePipeline
  category: memoryIngestion
  link: duplicatePipeline.md
---
# duplicatePipeline

```typescript
client.memoryIngestion.duplicatePipeline(id: string, data?: DuplicateIngestionPipelineRequest): Promise<IngestionPipeline>
```

Creates a copy of an existing ingestion pipeline.

Duplicates the pipeline configuration, optionally with modifications. Useful for
creating variations of working pipelines without starting from scratch.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to duplicate |
| `data` | `DuplicateIngestionPipelineRequest` _(optional)_ | Optional modifications to apply to the duplicated pipeline |

## Returns

**`Promise<IngestionPipeline>`** — A promise that resolves to the newly created duplicate pipeline

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.duplicatePipeline('id');
```
