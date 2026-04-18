---
title: deleteTaskGroup
---

# `deleteTaskGroup`

```typescript
plugin.projectsApi.deleteTaskGroup(groupId: string): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `groupId` | `string` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.deleteTaskGroup('groupId');
console.log(result);
```
