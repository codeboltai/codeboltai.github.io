---
title: updateProjectConfigs
---

# `updateProjectConfigs`

```typescript
plugin.projectsApi.updateProjectConfigs(data: UpdateProjectConfigRequest): Promise<void>
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

const result = await plugin.projectsApi.updateProjectConfigs(/* UpdateProjectConfigRequest */);
console.log(result);
```
