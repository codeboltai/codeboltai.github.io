---
name: unload
cbbaseinfo:
  description: "Unloads a model from system memory.

Releases the memory (RAM/VRAM) occupied by a loaded model. The model remains on disk
and can be loaded again later. Use this to free resources when a model is no longer needed."
cbparameters:
  parameters:
    - name: data
      typeName: UnloadLocalModelRequest
      description: The unload request configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the model has been unloaded from memory
data:
  name: unload
  category: localModels
  link: unload.md
---
# unload

```typescript
client.localModels.unload(data: UnloadLocalModelRequest): Promise<unknown>
```

Unloads a model from system memory.

Releases the memory (RAM/VRAM) occupied by a loaded model. The model remains on disk
and can be loaded again later. Use this to free resources when a model is no longer needed.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `UnloadLocalModelRequest` | The unload request configuration |

## Returns

**`Promise<unknown>`** — A promise that resolves when the model has been unloaded from memory

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.localModels.unload(/* UnloadLocalModelRequest */);
```
