---
title: get
---

# `get`

```typescript
plugin.kvStore.get(instanceId: string, namespace: string, key: string): Promise<KVGetResponse>
```

Get a value from the KV store

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | Yes | Namespace |
| `key` | `string` | Yes | Key |

## Returns

`Promise<KVGetResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.get('instanceId', 'namespace', 'key');
console.log(result);
```
