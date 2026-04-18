---
title: getThreadGroupMappings
---

# `getThreadGroupMappings`

```typescript
plugin.projectsApi.getThreadGroupMappings(): Promise<ThreadGroupMapping[]>
```



## Parameters

_No parameters._

## Returns

`Promise<ThreadGroupMapping[]>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.getThreadGroupMappings();
console.log(result);
```
