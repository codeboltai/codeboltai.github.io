---
name: deleteNamespace
cbbaseinfo:
  description: Call deleteNamespace on the Plugin SDK kvStoreApi module.
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: ""
      isOptional: false
    - name: namespace
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteNamespace
  category: kvStoreApi
  link: deleteNamespace.md
---
# deleteNamespace

```typescript
plugin.kvStoreApi.deleteNamespace(instanceId: string, namespace: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` |  |
| `namespace` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.deleteNamespace('instanceId', 'namespace');
```
