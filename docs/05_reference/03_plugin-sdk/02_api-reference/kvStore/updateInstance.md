---
name: updateInstance
cbbaseinfo:
  description: Update a KV store instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
    - name: updates
      typeName: UpdateKVInstanceParams
      description: Update parameters
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVInstanceResponse>"
    description: ""
data:
  name: updateInstance
  category: kvStore
  link: updateInstance.md
---
# updateInstance

```typescript
plugin.kvStore.updateInstance(instanceId: string, updates: UpdateKVInstanceParams): Promise<KVInstanceResponse>
```

Update a KV store instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `updates` | `UpdateKVInstanceParams` | Update parameters |

## Returns

**`Promise<KVInstanceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.updateInstance('instanceId', /* UpdateKVInstanceParams */);
```
