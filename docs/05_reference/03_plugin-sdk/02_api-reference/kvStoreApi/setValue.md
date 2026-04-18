---
name: setValue
cbbaseinfo:
  description: Call setValue on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: data
      typeName: SetKvValueRequest
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<KvValue>"
    description: ""
data:
  name: setValue
  category: kvStoreApi
  link: setValue.md
---
# setValue

```typescript
plugin.kvStoreApi.setValue(data: SetKvValueRequest): Promise<KvValue>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `data` | `SetKvValueRequest` |  |

## Returns

**`Promise<KvValue>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.setValue(/* SetKvValueRequest */);
```
