---
title: getValue
---

# `getValue`

```typescript
plugin.kvStoreApi.getValue(instanceId: string, namespace: string, key: string): Promise<KvValue>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes |  |
| `namespace` | `string` | Yes |  |
| `key` | `string` | Yes |  |

## Returns

`Promise<KvValue>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.getValue('instanceId', 'namespace', 'key');
console.log(result);
```
