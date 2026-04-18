---
name: getStepSpecs
cbbaseinfo:
  description: "Retrieves all available processing step specifications.

Returns the catalog of step types that can be used when building persistent memory
pipelines. Each spec describes a step's inputs, outputs, and configurable parameters."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PersistentMemoryStepSpec[]>"
    description: A promise that resolves to an array of step specifications
data:
  name: getStepSpecs
  category: persistentMemory
  link: getStepSpecs.md
---
# getStepSpecs

```typescript
client.persistentMemory.getStepSpecs(): Promise<PersistentMemoryStepSpec[]>
```

Retrieves all available processing step specifications.

Returns the catalog of step types that can be used when building persistent memory
pipelines. Each spec describes a step's inputs, outputs, and configurable parameters.

## Parameters

_None_

## Returns

**`Promise<PersistentMemoryStepSpec[]>`** — A promise that resolves to an array of step specifications

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.getStepSpecs();
```
