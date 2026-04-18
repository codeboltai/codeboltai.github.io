---
name: writeToFile
cbbaseinfo:
  description: writeToFile
cbparameters:
  parameters:
    - name: relPath
      typeName: string
      description: The relative path of the file to write to.
      isOptional: false
    - name: newContent
      typeName: string
      description: The new content to write into the file.
      isOptional: false
  returns:
    signatureTypeName: "Promise<any>"
    description: A promise that resolves with the write operation result.
data:
  name: writeToFile
  category: fs
  link: writeToFile.md
---
# writeToFile

```typescript
plugin.fs.writeToFile(relPath: string, newContent: string): Promise<any>
```

writeToFile

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `relPath` | `string` | The relative path of the file to write to. |
| `newContent` | `string` | The new content to write into the file. |

## Returns

**`Promise<any>`** — A promise that resolves with the write operation result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.writeToFile('relPath', 'newContent');
```
