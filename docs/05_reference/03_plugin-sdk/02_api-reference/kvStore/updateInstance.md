---
title: updateInstance
---

# `updateInstance`

```typescript
plugin.kvStore.updateInstance(instanceId: string, updates: UpdateKVInstanceParams): Promise<KVInstanceResponse>
```

Update a KV store instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `updates` | `UpdateKVInstanceParams` | Yes | Update parameters |

## Returns

`Promise<KVInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.updateInstance('instanceId', /* UpdateKVInstanceParams */);
console.log(result);
```
