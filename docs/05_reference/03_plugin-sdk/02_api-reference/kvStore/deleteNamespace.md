---
name: deleteNamespace
cbbaseinfo:
  description: Delete an entire namespace from the KV store
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
    - name: namespace
      typeName: string
      description: Namespace to delete
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVDeleteNamespaceResponse>"
    description: ""
data:
  name: deleteNamespace
  category: kvStore
  link: deleteNamespace.md
---
# deleteNamespace

```typescript
plugin.kvStore.deleteNamespace(instanceId: string, namespace: string): Promise<KVDeleteNamespaceResponse>
```

Delete an entire namespace from the KV store

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |
| `namespace` | `string` | Namespace to delete |

## Returns

**`Promise<KVDeleteNamespaceResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.deleteNamespace('instanceId', 'namespace');
```
