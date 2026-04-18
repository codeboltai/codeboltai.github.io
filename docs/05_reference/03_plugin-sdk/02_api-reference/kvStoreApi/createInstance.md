---
name: createInstance
cbbaseinfo:
  description: Call createInstance on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: data
      typeName: CreateKvStoreInstanceRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvStoreInstance>"
    description: ""
data:
  name: createInstance
  category: kvStoreApi
  link: createInstance.md
---
# createInstance

```typescript
plugin.kvStoreApi.createInstance(data: CreateKvStoreInstanceRequest): Promise<KvStoreInstance>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `CreateKvStoreInstanceRequest` |  |

## Returns

**`Promise<KvStoreInstance>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.createInstance(/* CreateKvStoreInstanceRequest */);
```
