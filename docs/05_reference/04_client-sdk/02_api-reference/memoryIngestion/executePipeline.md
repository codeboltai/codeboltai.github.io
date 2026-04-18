---
name: executePipeline
cbbaseinfo:
  description: "Manually triggers execution of an ingestion pipeline.

Runs the pipeline's processor chain against the provided input data or its configured
data source. The execution is asynchronous; monitor progress through events."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to execute
      isOptional: false
    - name: data
      typeName: ExecuteIngestionPipelineRequest
      description: Optional execution parameters and input data
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the execution has been initiated
data:
  name: executePipeline
  category: memoryIngestion
  link: executePipeline.md
---
# executePipeline

```typescript
client.memoryIngestion.executePipeline(id: string, data?: ExecuteIngestionPipelineRequest): Promise<unknown>
```

Manually triggers execution of an ingestion pipeline.

Runs the pipeline's processor chain against the provided input data or its configured
data source. The execution is asynchronous; monitor progress through events.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to execute |
| `data` | `ExecuteIngestionPipelineRequest` _(optional)_ | Optional execution parameters and input data |

## Returns

**`Promise<unknown>`** — A promise that resolves when the execution has been initiated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.executePipeline('id');
```
