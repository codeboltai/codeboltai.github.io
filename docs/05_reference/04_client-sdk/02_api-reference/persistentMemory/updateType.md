---
name: updateType
cbbaseinfo:
  description: "Updates an existing persistent memory type's configuration.

Modifies the type's processing steps, name, or other settings. Changes affect
subsequent executions but do not alter previously generated memories."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the type to update
      isOptional: false
    - name: data
      typeName: UpdatePersistentMemoryTypeRequest
      description: The fields to update
      isOptional: false
  returns:
    signatureTypeName: "Promise<PersistentMemoryType>"
    description: A promise that resolves to the updated persistent memory type
data:
  name: updateType
  category: persistentMemory
  link: updateType.md
---
# updateType

```typescript
client.persistentMemory.updateType(id: string, data: UpdatePersistentMemoryTypeRequest): Promise<PersistentMemoryType>
```

Updates an existing persistent memory type's configuration.

Modifies the type's processing steps, name, or other settings. Changes affect
subsequent executions but do not alter previously generated memories.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the type to update |
| `data` | `UpdatePersistentMemoryTypeRequest` | The fields to update |

## Returns

**`Promise<PersistentMemoryType>`** — A promise that resolves to the updated persistent memory type

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.updateType('id', /* UpdatePersistentMemoryTypeRequest */);
```
