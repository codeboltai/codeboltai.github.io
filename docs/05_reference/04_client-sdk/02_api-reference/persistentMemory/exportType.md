---
name: exportType
cbbaseinfo:
  description: "Exports a persistent memory type configuration as a portable format.

Serializes the type definition for sharing, backup, or migration to another workspace.
The exported data can be imported using ."
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: The unique identifier of the type to export
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves to the exported type configuration
data:
  name: exportType
  category: persistentMemory
  link: exportType.md
---
# exportType

```typescript
client.persistentMemory.exportType(id: string): Promise<unknown>
```

Exports a persistent memory type configuration as a portable format.

Serializes the type definition for sharing, backup, or migration to another workspace.
The exported data can be imported using .

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` | The unique identifier of the type to export |

## Returns

**`Promise<unknown>`** — A promise that resolves to the exported type configuration

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.exportType('id');
```
