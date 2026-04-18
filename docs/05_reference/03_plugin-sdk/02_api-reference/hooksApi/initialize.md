---
title: initialize
---

# `initialize`

```typescript
plugin.hooksApi.initialize(data?: InitializeHooksRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `InitializeHooksRequest` | No |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.hooksApi.initialize();
console.log(result);
```
