---
name: createFile
cbbaseinfo:
  description: createFile
cbparameters:
  parameters:
    - name: fileName
      typeName: string
      description: The name of the file to create.
      isOptional: false
    - name: source
      typeName: string
      description: The source content to write into the file.
      isOptional: false
    - name: filePath
      typeName: string
      description: The path where the file should be created.
      isOptional: false
  returns:
    signatureTypeName: "Promise<CreateFileResponse>"
    description: A promise that resolves with the server response.
data:
  name: createFile
  category: fs
  link: createFile.md
---
# createFile

```typescript
plugin.fs.createFile(fileName: string, source: string, filePath: string): Promise<CreateFileResponse>
```

createFile

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `fileName` | `string` | The name of the file to create. |
| `source` | `string` | The source content to write into the file. |
| `filePath` | `string` | The path where the file should be created. |

## Returns

**`Promise<CreateFileResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.createFile('fileName', 'source', 'filePath');
```
