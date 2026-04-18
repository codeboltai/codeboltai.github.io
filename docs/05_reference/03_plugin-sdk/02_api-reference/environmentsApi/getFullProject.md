---
title: getFullProject
---

# `getFullProject`

```typescript
plugin.environmentsApi.getFullProject(id: string): Promise<unknown>
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

const result = await plugin.environmentsApi.getFullProject('id');
console.log(result);
```
