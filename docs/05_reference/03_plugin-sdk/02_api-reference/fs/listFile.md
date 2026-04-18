---
name: listFile
cbbaseinfo:
  description: listFile
cbparameters:
  parameters:
    - name: folderPath
      typeName: string
      description: ""
      isOptional: false
    - name: isRecursive
      typeName: boolean
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<FileListResponse>"
    description: A promise that resolves with the list of files.
data:
  name: listFile
  category: fs
  link: listFile.md
---
# listFile

```typescript
plugin.fs.listFile(folderPath: string, isRecursive: boolean): Promise<FileListResponse>
```

listFile

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `folderPath` | `string` |  |
| `isRecursive` | `boolean` |  Default: `false` |

## Returns

**`Promise<FileListResponse>`** — A promise that resolves with the list of files.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.listFile('folderPath', true);
```
