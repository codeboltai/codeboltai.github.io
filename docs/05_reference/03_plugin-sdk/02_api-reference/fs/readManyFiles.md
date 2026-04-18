---
name: readManyFiles
cbbaseinfo:
  description: readManyFiles
cbparameters:
  parameters:
    - name: params
      typeName: object
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ReadManyFilesResponse>"
    description: A promise that resolves with the read operation result.
data:
  name: readManyFiles
  category: fs
  link: readManyFiles.md
---
# readManyFiles

```typescript
plugin.fs.readManyFiles(params: object): Promise<ReadManyFilesResponse>
```

readManyFiles

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `object` |  |

## Returns

**`Promise<ReadManyFilesResponse>`** — A promise that resolves with the read operation result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.readManyFiles(/* object */);
```
