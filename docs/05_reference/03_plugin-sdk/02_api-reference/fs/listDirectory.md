---
name: listDirectory
cbbaseinfo:
  description: listDirectory
cbparameters:
  parameters:
    - name: params
      typeName: object
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<ListDirectoryResponse>"
    description: A promise that resolves with the directory listing result.
data:
  name: listDirectory
  category: fs
  link: listDirectory.md
---
# listDirectory

```typescript
plugin.fs.listDirectory(params: object): Promise<ListDirectoryResponse>
```

listDirectory

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `object` |  |

## Returns

**`Promise<ListDirectoryResponse>`** — A promise that resolves with the directory listing result.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fs.listDirectory(/* object */);
```
