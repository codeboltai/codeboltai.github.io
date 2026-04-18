---
name: delete
cbbaseinfo:
  description: Delete a value from the KV store
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
    - name: namespace
      typeName: string
      description: Namespace
      isOptional: false
    - name: key
      typeName: string
      description: Key
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVDeleteResponse>"
    description: ""
data:
  name: delete
  category: kvStore
  link: delete.md
---
# delete

```typescript
plugin.kvStore.delete(instanceId: string, namespace: string, key: string): Promise<KVDeleteResponse>
```

Delete a value from the KV store

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `namespace` | `string` | Namespace |
| `key` | `string` | Key |

## Returns

**`Promise<KVDeleteResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.delete('instanceId', 'namespace', 'key');
```
