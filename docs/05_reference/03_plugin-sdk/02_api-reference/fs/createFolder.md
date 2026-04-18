---
name: createFolder
cbbaseinfo:
  description: createFolder
cbparameters:
  parameters:
    - name: folderName
      typeName: string
      description: The name of the folder to create.
      isOptional: false
    - name: folderPath
      typeName: string
      description: The path where the folder should be created.
      isOptional: false
  returns:
    signatureTypeName: "Promise<CreateFolderResponse>"
    description: A promise that resolves with the server response.
data:
  name: createFolder
  category: fs
  link: createFolder.md
---
# createFolder

```typescript
plugin.fs.createFolder(folderName: string, folderPath: string): Promise<CreateFolderResponse>
```

createFolder

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `folderName` | `string` | The name of the folder to create. |
| `folderPath` | `string` | The path where the folder should be created. |

## Returns

**`Promise<CreateFolderResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.createFolder('folderName', 'folderPath');
```
