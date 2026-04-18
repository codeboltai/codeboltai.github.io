---
name: getInstance
cbbaseinfo:
  description: Call getInstance on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: id
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvStoreInstance>"
    description: ""
data:
  name: getInstance
  category: kvStoreApi
  link: getInstance.md
---
# getInstance

```typescript
plugin.kvStoreApi.getInstance(id: string): Promise<KvStoreInstance>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `id` | `string` |  |

## Returns

**`Promise<KvStoreInstance>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.getInstance('id');
```
