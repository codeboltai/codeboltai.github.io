---
title: removeDependency
---

# `removeDependency`

```typescript
plugin.jobsApi.removeDependency(id: string, targetId: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `targetId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.jobsApi.removeDependency('id', 'targetId');
console.log(result);
```
