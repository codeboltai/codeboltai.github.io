---
title: getConfigs
---

# `getConfigs`

```typescript
plugin.projectsApi.getConfigs(): Promise<ProjectConfig>
```



## Parameters

_No parameters._

## Returns

`Promise<ProjectConfig>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getConfigs();
console.log(result);
```
