---
title: create
---

# `create`

```typescript
plugin.projectsApi.create(data: Record<string, unknown>): Promise<Project>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `Record<string, unknown>` | Yes |  |

## Returns

`Promise<Project>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.create(/* Record<string, unknown> */);
console.log(result);
```
