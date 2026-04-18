---
name: deleteValue
cbbaseinfo:
  description: Call deleteValue on the Plugin SDK kvStoreApi module.
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
    - name: key
      typeName: string
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "Promise<unknown>"
    description: ""
data:
  name: deleteValue
  category: kvStoreApi
  link: deleteValue.md
---
# deleteValue

```typescript
plugin.kvStoreApi.deleteValue(instanceId: string, namespace: string, key: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` |  |
| `namespace` | `string` |  |
| `key` | `string` |  |

## Returns

**`Promise<unknown>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.deleteValue('instanceId', 'namespace', 'key');
```
