---
title: delete
---

# `delete`

```typescript
plugin.kvStore.delete(instanceId: string, namespace: string, key: string): Promise<KVDeleteResponse>
```

Delete a value from the KV store

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace |
| `key` | `string` | Yes | Key |

## Returns

`Promise<KVDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.delete('instanceId', 'namespace', 'key');
console.log(result);
```
