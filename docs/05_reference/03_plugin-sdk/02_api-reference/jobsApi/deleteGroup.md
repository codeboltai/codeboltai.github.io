---
title: deleteGroup
---

# `deleteGroup`

```typescript
plugin.jobsApi.deleteGroup(id: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.deleteGroup('id');
console.log(result);
```
