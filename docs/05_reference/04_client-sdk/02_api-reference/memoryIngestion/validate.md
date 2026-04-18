---
name: validate
cbbaseinfo:
  description: "Validates an ingestion pipeline configuration without creating or executing it.

Checks that the pipeline definition is well-formed, all referenced processors exist,
and the processor chain is compatible. Use this to catch errors before saving."
cbparameters:
  parameters:
    - name: data
      typeName: ValidateIngestionPipelineRequest
      description: The pipeline configuration to validate
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the validation result
data:
  name: validate
  category: memoryIngestion
  link: validate.md
---
# validate

```typescript
client.memoryIngestion.validate(data: ValidateIngestionPipelineRequest): Promise<unknown>
```

Validates an ingestion pipeline configuration without creating or executing it.

Checks that the pipeline definition is well-formed, all referenced processors exist,
and the processor chain is compatible. Use this to catch errors before saving.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ValidateIngestionPipelineRequest` | The pipeline configuration to validate |

## Returns

**`Promise<unknown>`** — A promise that resolves to the validation result

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.validate(/* ValidateIngestionPipelineRequest */);
```
