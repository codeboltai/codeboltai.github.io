---
name: updateFile
cbbaseinfo:
  description: updateFile
cbparameters:
  parameters:
    - name: filename
      typeName: string
      description: The name of the file to update.
      isOptional: false
    - name: filePath
      typeName: string
      description: The path of the file to update.
      isOptional: false
    - name: newContent
      typeName: string
      description: The new content to write into the file.
      isOptional: false
  returns:
    signatureTypeName: "Promise<UpdateFileResponse>"
    description: A promise that resolves with the server response.
data:
  name: updateFile
  category: fs
  link: updateFile.md
---
# updateFile

```typescript
plugin.fs.updateFile(filename: string, filePath: string, newContent: string): Promise<UpdateFileResponse>
```

updateFile

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `filename` | `string` | The name of the file to update. |
| `filePath` | `string` | The path of the file to update. |
| `newContent` | `string` | The new content to write into the file. |

## Returns

**`Promise<UpdateFileResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.updateFile('filename', 'filePath', 'newContent');
```
