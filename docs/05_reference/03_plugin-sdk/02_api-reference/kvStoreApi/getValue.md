---
name: getValue
cbbaseinfo:
  description: Call getValue on the Plugin SDK kvStoreApi module.
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
    signatureTypeName: "Promise<KvValue>"
    description: ""
data:
  name: getValue
  category: kvStoreApi
  link: getValue.md
---
# getValue

```typescript
plugin.kvStoreApi.getValue(instanceId: string, namespace: string, key: string): Promise<KvValue>
```



## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` |  |
| `namespace` | `string` |  |
| `key` | `string` |  |

## Returns

**`Promise<KvValue>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStoreApi.getValue('instanceId', 'namespace', 'key');
```
