---
name: importType
cbbaseinfo:
  description: "Imports a persistent memory type configuration from an exported format.

Creates a new persistent memory type from previously exported data. This enables
sharing pipeline configurations between workspaces or restoring from backups."
cbparameters:
  parameters:
    - name: data
      typeName: ImportPersistentMemoryRequest
      description: The import payload containing the exported type configuration
      isOptional: false
  returns:
    signatureTypeName: "Promise<PersistentMemoryType>"
    description: A promise that resolves to the newly imported persistent memory type
data:
  name: importType
  category: persistentMemory
  link: importType.md
---
# importType

```typescript
client.persistentMemory.importType(data: ImportPersistentMemoryRequest): Promise<PersistentMemoryType>
```

Imports a persistent memory type configuration from an exported format.

Creates a new persistent memory type from previously exported data. This enables
sharing pipeline configurations between workspaces or restoring from backups.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `ImportPersistentMemoryRequest` | The import payload containing the exported type configuration |

## Returns

**`Promise<PersistentMemoryType>`** — A promise that resolves to the newly imported persistent memory type

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.persistentMemory.importType(/* ImportPersistentMemoryRequest */);
```
