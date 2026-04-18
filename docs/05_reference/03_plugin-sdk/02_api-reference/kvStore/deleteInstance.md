---
title: deleteInstance
---

# `deleteInstance`

```typescript
plugin.kvStore.deleteInstance(instanceId: string): Promise<KVDeleteResponse>
```

Delete a KV store instance

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

## Returns

`Promise<KVDeleteResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.deleteInstance('instanceId');
console.log(result);
```
