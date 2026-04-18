---
title: get
---

# `get`

```typescript
plugin.hooksApi.get(id: string): Promise<Hook>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<Hook>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hooksApi.get('id');
console.log(result);
```
