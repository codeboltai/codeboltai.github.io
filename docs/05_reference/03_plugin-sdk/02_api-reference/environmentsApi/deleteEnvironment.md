---
title: deleteEnvironment
---

# `deleteEnvironment`

```typescript
plugin.environmentsApi.deleteEnvironment(id: string): Promise<unknown>
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

const result = await plugin.environmentsApi.deleteEnvironment('id');
console.log(result);
```
