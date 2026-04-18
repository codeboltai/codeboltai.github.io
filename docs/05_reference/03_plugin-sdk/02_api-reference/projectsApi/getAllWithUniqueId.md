---
title: getAllWithUniqueId
---

# `getAllWithUniqueId`

```typescript
plugin.projectsApi.getAllWithUniqueId(data: GetAllProjectsRequest): Promise<Project[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `GetAllProjectsRequest` | Yes |  |

## Returns

`Promise<Project[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getAllWithUniqueId(/* GetAllProjectsRequest */);
console.log(result);
```
