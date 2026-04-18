---
title: assignThreadToGroup
---

# `assignThreadToGroup`

```typescript
plugin.projectsApi.assignThreadToGroup(data: AssignThreadToGroupRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `AssignThreadToGroupRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.assignThreadToGroup(/* AssignThreadToGroupRequest */);
console.log(result);
```
