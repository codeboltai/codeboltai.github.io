---
name: readFile
cbbaseinfo:
  description: readFile
cbparameters:
  parameters:
    - name: filePath
      typeName: string
      description: The path of the file to read.
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReadFileResponse>"
    description: A promise that resolves with the server response.
data:
  name: readFile
  category: fs
  link: readFile.md
---
# readFile

```typescript
plugin.fs.readFile(filePath: string): Promise<ReadFileResponse>
```

readFile

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `filePath` | `string` | The path of the file to read. |

## Returns

**`Promise<ReadFileResponse>`** — A promise that resolves with the server response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.readFile('filePath');
```
