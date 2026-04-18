---
name: duplicateType
cbbaseinfo:
  description: "Creates a copy of an existing persistent memory type.

Duplicates the type definition, optionally with modifications such as a new name.
Useful for creating variations of working pipelines."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the type to duplicate
      isOptional: false
    - name: data
      typeName: DuplicatePersistentMemoryRequest
      description: Optional modifications to apply to the duplicated type
      isOptional: true
  returns:
    signatureTypeName: "Promise<PersistentMemoryType>"
    description: A promise that resolves to the newly created duplicate type
data:
  name: duplicateType
  category: persistentMemory
  link: duplicateType.md
---
# duplicateType

```typescript
client.persistentMemory.duplicateType(id: string, data?: DuplicatePersistentMemoryRequest): Promise<PersistentMemoryType>
```

Creates a copy of an existing persistent memory type.

Duplicates the type definition, optionally with modifications such as a new name.
Useful for creating variations of working pipelines.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the type to duplicate |
| `data` | `DuplicatePersistentMemoryRequest` _(optional)_ | Optional modifications to apply to the duplicated type |

## Returns

**`Promise<PersistentMemoryType>`** — A promise that resolves to the newly created duplicate type

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.duplicateType('id');
```
