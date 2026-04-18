---
title: read
---

# `read`

```typescript
plugin.fileReadApi.read(params?: FileReadParams): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `FileReadParams` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.fileReadApi.read();
console.log(result);
```
