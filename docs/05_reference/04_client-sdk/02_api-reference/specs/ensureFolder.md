---
name: ensureFolder
cbbaseinfo:
  description: "Ensures the specs folder exists in the workspace.

Creates the specification directory if it doesn't already exist,
establishing a location for storing spec files and related documentation.
This operation is idempotent and safe to call multiple times."
cbparameters:
  parameters:
    - name: data
      typeName: EnsureSpecFolderRequest
      description: Optional parameters for folder creation
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: A promise that resolves when the folder is ensured
data:
  name: ensureFolder
  category: specs
  link: ensureFolder.md
---
# ensureFolder

```typescript
client.specs.ensureFolder(data?: EnsureSpecFolderRequest): Promise<unknown>
```

Ensures the specs folder exists in the workspace.

Creates the specification directory if it doesn't already exist,
establishing a location for storing spec files and related documentation.
This operation is idempotent and safe to call multiple times.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `EnsureSpecFolderRequest` _(optional)_ | Optional parameters for folder creation |

## Returns

**`Promise<unknown>`** — A promise that resolves when the folder is ensured

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.specs.ensureFolder();
```
