---
name: read
cbbaseinfo:
  description: Call read on the Plugin SDK fileReadApi module.
cbparameters:
  parameters:
    - name: params
      typeName: FileReadParams
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: read
  category: fileReadApi
  link: read.md
---
# read

```typescript
plugin.fileReadApi.read(params?: FileReadParams): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `FileReadParams` _(optional)_ |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.fileReadApi.read();
```
