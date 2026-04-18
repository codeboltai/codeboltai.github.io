---
title: getRecordCount
---

# `getRecordCount`

```typescript
plugin.kvStore.getRecordCount(instanceId: string, namespace?: string): Promise<KVRecordCountResponse>
```

Get record count for an instance or namespace

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes | Instance ID |
| `namespace` | `string` | No | Optional namespace filter |

## Returns

`Promise<KVRecordCountResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStore.getRecordCount('instanceId');
console.log(result);
```
