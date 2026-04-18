---
name: listPipelines
cbbaseinfo:
  description: "Lists all ingestion pipelines with optional filtering.

Returns the collection of configured ingestion pipelines. Each pipeline defines a
sequence of processing steps for transforming raw data into memory entries."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering and pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<IngestionPipeline[]>"
    description: A promise that resolves to an array of ingestion pipelines
data:
  name: listPipelines
  category: memoryIngestion
  link: listPipelines.md
---
# listPipelines

```typescript
client.memoryIngestion.listPipelines(params?: Record<string, unknown>): Promise<IngestionPipeline[]>
```

Lists all ingestion pipelines with optional filtering.

Returns the collection of configured ingestion pipelines. Each pipeline defines a
sequence of processing steps for transforming raw data into memory entries.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering and pagination |

## Returns

**`Promise<IngestionPipeline[]>`** — A promise that resolves to an array of ingestion pipelines

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.listPipelines();
```
