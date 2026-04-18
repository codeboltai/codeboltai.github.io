---
name: listTypes
cbbaseinfo:
  description: "Lists all persistent memory type definitions with optional filtering.

Returns the collection of defined persistent memory types, each describing a reusable
processing pipeline for generating memory entries."
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: Optional query parameters for filtering and pagination
      isOptional: true
  returns:
    signatureTypeName: "Promise<PersistentMemoryType[]>"
    description: A promise that resolves to an array of persistent memory types
data:
  name: listTypes
  category: persistentMemory
  link: listTypes.md
---
# listTypes

```typescript
client.persistentMemory.listTypes(params?: Record<string, unknown>): Promise<PersistentMemoryType[]>
```

Lists all persistent memory type definitions with optional filtering.

Returns the collection of defined persistent memory types, each describing a reusable
processing pipeline for generating memory entries.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ | Optional query parameters for filtering and pagination |

## Returns

**`Promise<PersistentMemoryType[]>`** — A promise that resolves to an array of persistent memory types

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.listTypes();
```
