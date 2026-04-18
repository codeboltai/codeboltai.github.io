---
title: getRoot
---

# `getRoot`

```typescript
plugin.projectsApi.getRoot(): Promise<Project>
```



## Parameters

_No parameters._

## Returns

`Promise<Project>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getRoot();
console.log(result);
```
