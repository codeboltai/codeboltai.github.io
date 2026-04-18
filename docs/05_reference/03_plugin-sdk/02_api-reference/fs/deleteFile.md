---
name: deleteFile
cbbaseinfo:
  description: deleteFile
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to delete.
      isOptional: false
    - name: filePath
      typeName: string
      description: The path of the file to delete.
      isOptional: false
  returns:
    signatureTypeName: "Promise<DeleteFileResponse>"
    description: A promise that resolves with the server response.
data:
  name: deleteFile
  category: fs
  link: deleteFile.md
---
# deleteFile

```typescript
plugin.fs.deleteFile(filename: string, filePath: string): Promise<DeleteFileResponse>
```

deleteFile

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `filename` | `string` | The name of the file to delete. |
| `filePath` | `string` | The path of the file to delete. |

## Returns

**`Promise<DeleteFileResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.deleteFile('filename', 'filePath');
```
