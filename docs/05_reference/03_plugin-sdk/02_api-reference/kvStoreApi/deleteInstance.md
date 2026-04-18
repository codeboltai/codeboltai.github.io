---
name: deleteInstance
cbbaseinfo:
  description: Call deleteInstance on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteInstance
  category: kvStoreApi
  link: deleteInstance.md
---
# deleteInstance

```typescript
plugin.kvStoreApi.deleteInstance(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.deleteInstance('id');
```
