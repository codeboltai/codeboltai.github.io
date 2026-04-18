---
name: updateInstance
cbbaseinfo:
  description: Call updateInstance on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
    - name: data
      typeName: UpdateKvStoreInstanceRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvStoreInstance>"
    description: ""
data:
  name: updateInstance
  category: kvStoreApi
  link: updateInstance.md
---
# updateInstance

```typescript
plugin.kvStoreApi.updateInstance(id: string, data: UpdateKvStoreInstanceRequest): Promise<KvStoreInstance>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |
| `data` | `UpdateKvStoreInstanceRequest` |  |

## Returns

**`Promise<KvStoreInstance>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.updateInstance('id', /* UpdateKvStoreInstanceRequest */);
```
