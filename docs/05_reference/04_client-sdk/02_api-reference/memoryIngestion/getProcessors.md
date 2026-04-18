---
name: getProcessors
cbbaseinfo:
  description: "Retrieves all available processor types that can be used in pipelines.

Returns the catalog of processors (text splitters, embedders, classifiers, etc.)
that can be chained together in ingestion pipelines."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<IngestionProcessor[]>"
    description: A promise that resolves to an array of available processor definitions
data:
  name: getProcessors
  category: memoryIngestion
  link: getProcessors.md
---
# getProcessors

```typescript
client.memoryIngestion.getProcessors(): Promise<IngestionProcessor[]>
```

Retrieves all available processor types that can be used in pipelines.

Returns the catalog of processors (text splitters, embedders, classifiers, etc.)
that can be chained together in ingestion pipelines.

## Parameters

_None_

## Returns

**`Promise<IngestionProcessor[]>`** — A promise that resolves to an array of available processor definitions

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.memoryIngestion.getProcessors();
```
