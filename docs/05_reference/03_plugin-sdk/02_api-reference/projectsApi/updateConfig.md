---
title: updateConfig
---

# `updateConfig`

```typescript
plugin.projectsApi.updateConfig(data: UpdateProjectConfigRequest): Promise<void>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `UpdateProjectConfigRequest` | Yes |  |

## Returns

`Promise<void>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.updateConfig(/* UpdateProjectConfigRequest */);
console.log(result);
```
