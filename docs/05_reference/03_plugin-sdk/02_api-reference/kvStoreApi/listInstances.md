---
name: listInstances
cbbaseinfo:
  description: Call listInstances on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: params
      typeName: Record<string, unknown>
      description: ""
      isOptional: true
  returns:
    signatureTypeName: "Promise<KvStoreInstance[]>"
    description: ""
data:
  name: listInstances
  category: kvStoreApi
  link: listInstances.md
---
# listInstances

```typescript
plugin.kvStoreApi.listInstances(params?: Record<string, unknown>): Promise<KvStoreInstance[]>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `params` | `Record<string, unknown>` _(optional)_ |  |

## Returns

**`Promise<KvStoreInstance[]>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.listInstances();
```
