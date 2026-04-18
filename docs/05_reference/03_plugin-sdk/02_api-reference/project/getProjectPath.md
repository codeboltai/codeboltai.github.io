---
title: getProjectPath
---

# `getProjectPath`

```typescript
plugin.project.getProjectPath(): Promise<GetProjectPathResponse>
```

Retrieves the path of the current project.

## Parameters

_No parameters._

## Returns

`Promise<GetProjectPathResponse>` — A promise that resolves with the project path response.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.project.getProjectPath();
console.log(result);
```
