---
title: list
---

# `list`

```typescript
plugin.hooksApi.list(params?: Record<string, unknown>): Promise<Hook[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<Hook[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hooksApi.list();
console.log(result);
```
