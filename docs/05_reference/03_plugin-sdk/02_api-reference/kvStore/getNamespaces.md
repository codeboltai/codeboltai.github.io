---
name: getNamespaces
cbbaseinfo:
  description: Get all namespaces in an instance
cbparameters:
  parameters:
    - name: instanceId
      typeName: string
      description: Instance ID
      isOptional: false
  returns:
    signatureTypeName: "Promise<KVNamespacesResponse>"
    description: ""
data:
  name: getNamespaces
  category: kvStore
  link: getNamespaces.md
---
# getNamespaces

```typescript
plugin.kvStore.getNamespaces(instanceId: string): Promise<KVNamespacesResponse>
```

Get all namespaces in an instance

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `instanceId` | `string` | Instance ID |

## Returns

**`Promise<KVNamespacesResponse>`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.kvStore.getNamespaces('instanceId');
```
