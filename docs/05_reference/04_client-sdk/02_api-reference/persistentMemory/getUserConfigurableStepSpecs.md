---
name: getUserConfigurableStepSpecs
cbbaseinfo:
  description: "Retrieves step specifications that are user-configurable.

Returns a subset of step specifications that expose user-facing configuration options,
filtering out internal-only or system-managed steps."
cbparameters:
  parameters:
    []
  returns:
    signatureTypeName: "Promise<PersistentMemoryStepSpec[]>"
    description: A promise that resolves to an array of user-configurable step specifications
data:
  name: getUserConfigurableStepSpecs
  category: persistentMemory
  link: getUserConfigurableStepSpecs.md
---
# getUserConfigurableStepSpecs

```typescript
client.persistentMemory.getUserConfigurableStepSpecs(): Promise<PersistentMemoryStepSpec[]>
```

Retrieves step specifications that are user-configurable.

Returns a subset of step specifications that expose user-facing configuration options,
filtering out internal-only or system-managed steps.

## Parameters

_None_

## Returns

**`Promise<PersistentMemoryStepSpec[]>`** — A promise that resolves to an array of user-configurable step specifications

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.getUserConfigurableStepSpecs();
```
