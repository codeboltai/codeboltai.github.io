---
title: deleteNamespace
---

# `deleteNamespace`

```typescript
plugin.kvStoreApi.deleteNamespace(instanceId: string, namespace: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `instanceId` | `string` | Yes |  |
| `namespace` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.deleteNamespace('instanceId', 'namespace');
console.log(result);
```
