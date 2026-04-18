---
title: getByWorkspace
---

# `getByWorkspace`

```typescript
plugin.projectsApi.getByWorkspace(workspaceId: string): Promise<Project[]>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `workspaceId` | `string` | Yes |  |

## Returns

`Promise<Project[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getByWorkspace('workspaceId');
console.log(result);
```
