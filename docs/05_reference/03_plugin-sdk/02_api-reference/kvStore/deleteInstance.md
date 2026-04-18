---
name: deleteInstance
cbbaseinfo:
  description: Delete a KV store instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVDeleteResponse>"
    description: ""
data:
  name: deleteInstance
  category: kvStore
  link: deleteInstance.md
---
# deleteInstance

```typescript
plugin.kvStore.deleteInstance(instanceId: string): Promise<KVDeleteResponse>
```

Delete a KV store instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |

## Returns

**`Promise<KVDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.deleteInstance('instanceId');
```
