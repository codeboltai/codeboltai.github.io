---
name: getType
cbbaseinfo:
  description: "Retrieves a specific persistent memory type by its unique identifier.

Returns the full type definition including its processing steps, configuration,
and metadata."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the persistent memory type
      isOptional: false
  returns:
    signatureTypeName: "Promise<PersistentMemoryType>"
    description: A promise that resolves to the persistent memory type definition
data:
  name: getType
  category: persistentMemory
  link: getType.md
---
# getType

```typescript
client.persistentMemory.getType(id: string): Promise<PersistentMemoryType>
```

Retrieves a specific persistent memory type by its unique identifier.

Returns the full type definition including its processing steps, configuration,
and metadata.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the persistent memory type |

## Returns

**`Promise<PersistentMemoryType>`** — A promise that resolves to the persistent memory type definition

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.getType('id');
```
