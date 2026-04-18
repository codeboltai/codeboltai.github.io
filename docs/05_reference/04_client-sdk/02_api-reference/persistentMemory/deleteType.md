---
name: deleteType
cbbaseinfo:
  description: "Permanently deletes a persistent memory type definition.

Removes the type and its pipeline configuration. Previously generated memory entries
are not affected by the deletion."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the type to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the type has been deleted
data:
  name: deleteType
  category: persistentMemory
  link: deleteType.md
---
# deleteType

```typescript
client.persistentMemory.deleteType(id: string): Promise<unknown>
```

Permanently deletes a persistent memory type definition.

Removes the type and its pipeline configuration. Previously generated memory entries
are not affected by the deletion.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the type to delete |

## Returns

**`Promise<unknown>`** — A promise that resolves when the type has been deleted

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.deleteType('id');
```
