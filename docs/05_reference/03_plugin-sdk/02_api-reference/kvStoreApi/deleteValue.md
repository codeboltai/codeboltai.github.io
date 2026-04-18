---
title: deleteValue
---

# `deleteValue`

```typescript
plugin.kvStoreApi.deleteValue(instanceId: string, namespace: string, key: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes |  |
| `namespace` | `string` | Yes |  |
| `key` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.deleteValue('instanceId', 'namespace', 'key');
console.log(result);
```
