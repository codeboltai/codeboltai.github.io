---
title: disable
---

# `disable`

```typescript
plugin.hooksApi.disable(id: string): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hooksApi.disable('id');
console.log(result);
```
