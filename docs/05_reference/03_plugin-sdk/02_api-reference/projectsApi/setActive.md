---
title: setActive
---

# `setActive`

```typescript
plugin.projectsApi.setActive(data: SetActiveProjectRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `SetActiveProjectRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.setActive(/* SetActiveProjectRequest */);
console.log(result);
```
