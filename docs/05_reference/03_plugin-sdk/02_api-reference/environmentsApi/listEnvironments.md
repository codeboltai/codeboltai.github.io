---
title: listEnvironments
---

# `listEnvironments`

```typescript
plugin.environmentsApi.listEnvironments(params?: Record<string, unknown>): Promise<Environment[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `Record<string, unknown>` | No |  |

## Returns

`Promise<Environment[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.listEnvironments();
console.log(result);
```
