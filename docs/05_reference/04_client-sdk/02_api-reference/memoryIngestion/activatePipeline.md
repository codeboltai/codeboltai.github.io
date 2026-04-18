---
name: activatePipeline
cbbaseinfo:
  description: "Activates a disabled ingestion pipeline.

Enables the pipeline so it can be triggered by events or manual execution. A pipeline
must be activated before it will process any data."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to activate
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional activation parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pipeline has been activated
data:
  name: activatePipeline
  category: memoryIngestion
  link: activatePipeline.md
---
# activatePipeline

```typescript
client.memoryIngestion.activatePipeline(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Activates a disabled ingestion pipeline.

Enables the pipeline so it can be triggered by events or manual execution. A pipeline
must be activated before it will process any data.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to activate |
| `data` | `Record<string, unknown>` _(optional)_ | Optional activation parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pipeline has been activated

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.activatePipeline('id');
```
