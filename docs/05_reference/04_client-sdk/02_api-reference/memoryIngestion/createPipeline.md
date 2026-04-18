---
name: createPipeline
cbbaseinfo:
  description: "Creates a new ingestion pipeline with the specified processor chain.

Defines a new data processing workflow that can be triggered manually or automatically
in response to events. The pipeline chains processors together to transform data
before storing it in memory."
cbparameters:
  parameters:
    - name: data
      typeName: CreateIngestionPipelineRequest
      description: The pipeline creation payload
      isOptional: false
  returns:
    signatureTypeName: "Promise<IngestionPipeline>"
    description: A promise that resolves to the newly created pipeline
data:
  name: createPipeline
  category: memoryIngestion
  link: createPipeline.md
---
# createPipeline

```typescript
client.memoryIngestion.createPipeline(data: CreateIngestionPipelineRequest): Promise<IngestionPipeline>
```

Creates a new ingestion pipeline with the specified processor chain.

Defines a new data processing workflow that can be triggered manually or automatically
in response to events. The pipeline chains processors together to transform data
before storing it in memory.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateIngestionPipelineRequest` | The pipeline creation payload |

## Returns

**`Promise<IngestionPipeline>`** — A promise that resolves to the newly created pipeline

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.createPipeline(/* CreateIngestionPipelineRequest */);
```
