---
title: getInstance
---

# `getInstance`

```typescript
plugin.kvStore.getInstance(instanceId: string): Promise<KVInstanceResponse>
```

Get a KV store instance by ID

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |

## Returns

`Promise<KVInstanceResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.getInstance('instanceId');
console.log(result);
```
