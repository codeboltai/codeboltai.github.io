---
title: delete
---

# `delete`

```typescript
plugin.hooksApi.delete(id: string): Promise<unknown>
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

const result = await plugin.hooksApi.delete('id');
console.log(result);
```
