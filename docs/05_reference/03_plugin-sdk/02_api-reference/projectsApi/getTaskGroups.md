---
title: getTaskGroups
---

# `getTaskGroups`

```typescript
plugin.projectsApi.getTaskGroups(): Promise<TaskGroup[]>
```



## Parameters

_No parameters._

## Returns

`Promise<TaskGroup[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getTaskGroups();
console.log(result);
```
