---
title: deleteNamespace
---

# `deleteNamespace`

```typescript
plugin.kvStore.deleteNamespace(instanceId: string, namespace: string): Promise<KVDeleteNamespaceResponse>
```

Delete an entire namespace from the KV store

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace to delete |

## Returns

`Promise<KVDeleteNamespaceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.deleteNamespace('instanceId', 'namespace');
console.log(result);
```
