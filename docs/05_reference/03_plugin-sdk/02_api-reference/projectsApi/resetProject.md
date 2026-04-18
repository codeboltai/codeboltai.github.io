---
title: resetProject
---

# `resetProject`

```typescript
plugin.projectsApi.resetProject(data: ResetProjectRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ResetProjectRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.resetProject(/* ResetProjectRequest */);
console.log(result);
```
