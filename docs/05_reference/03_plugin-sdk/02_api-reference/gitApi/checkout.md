---
title: checkout
---

# `checkout`

```typescript
plugin.gitApi.checkout(data: GitCheckoutRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GitCheckoutRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gitApi.checkout(/* GitCheckoutRequest */);
console.log(result);
```
