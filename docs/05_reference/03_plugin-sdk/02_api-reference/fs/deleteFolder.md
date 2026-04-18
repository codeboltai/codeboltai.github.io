---
name: deleteFolder
cbbaseinfo:
  description: deleteFolder
cbparameters:
  parameters:
    - name: foldername
      typeName: string
      description: The name of the folder to delete.
      isOptional: false
    - name: folderpath
      typeName: string
      description: The path of the folder to delete.
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeleteFolderResponse>"
    description: A promise that resolves with the server response.
data:
  name: deleteFolder
  category: fs
  link: deleteFolder.md
---
# deleteFolder

```typescript
plugin.fs.deleteFolder(foldername: string, folderpath: string): Promise<DeleteFolderResponse>
```

deleteFolder

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `foldername` | `string` | The name of the folder to delete. |
| `folderpath` | `string` | The path of the folder to delete. |

## Returns

**`Promise<DeleteFolderResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.deleteFolder('foldername', 'folderpath');
```
