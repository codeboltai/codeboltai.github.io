---
name: disablePipeline
cbbaseinfo:
  description: "Disables an active ingestion pipeline.

Prevents the pipeline from being triggered or executed until it is reactivated.
Any in-progress executions may continue to completion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the pipeline to disable
      isOptional: false
    - name: data
      typeName: Record<string, unknown>
      description: Optional deactivation parameters
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the pipeline has been disabled
data:
  name: disablePipeline
  category: memoryIngestion
  link: disablePipeline.md
---
# disablePipeline

```typescript
client.memoryIngestion.disablePipeline(id: string, data?: Record<string, unknown>): Promise<unknown>
```

Disables an active ingestion pipeline.

Prevents the pipeline from being triggered or executed until it is reactivated.
Any in-progress executions may continue to completion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the pipeline to disable |
| `data` | `Record<string, unknown>` _(optional)_ | Optional deactivation parameters |

## Returns

**`Promise<unknown>`** — A promise that resolves when the pipeline has been disabled

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.disablePipeline('id');
```
