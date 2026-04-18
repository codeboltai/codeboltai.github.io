---
title: setValue
---

# `setValue`

```typescript
plugin.kvStoreApi.setValue(data: SetKvValueRequest): Promise<KvValue>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SetKvValueRequest` | Yes |  |

## Returns

`Promise<KvValue>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.kvStoreApi.setValue(/* SetKvValueRequest */);
console.log(result);
```
