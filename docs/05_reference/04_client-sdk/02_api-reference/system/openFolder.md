---
name: openFolder
cbbaseinfo:
  description: "Opens a folder in the system's native file manager.

Launches the default file explorer or Finder window for the specified
folder path. This provides convenient access to project directories
and workspace locations directly from the application."
cbparameters:
  parameters:
    - name: data
      typeName: OpenFolderRequest
      description: Request containing folder information
      isOptional: false
  returns:
    signatureTypeName: "Promise<OpenFolderResponse>"
    description: A promise that resolves when the folder has been opened
data:
  name: openFolder
  category: system
  link: openFolder.md
---
# openFolder

```typescript
client.system.openFolder(data: OpenFolderRequest): Promise<OpenFolderResponse>
```

Opens a folder in the system's native file manager.

Launches the default file explorer or Finder window for the specified
folder path. This provides convenient access to project directories
and workspace locations directly from the application.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `OpenFolderRequest` | Request containing folder information |

## Returns

**`Promise<OpenFolderResponse>`** — A promise that resolves when the folder has been opened

## Example

```typescript
import { CodeBoltClient } from '@codebolt/clientsdk';

const client = new CodeBoltClient();

await client.system.openFolder(/* OpenFolderRequest */);
```
