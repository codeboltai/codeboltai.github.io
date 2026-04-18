---
title: checkProjectName
---

# `checkProjectName`

```typescript
plugin.projectsApi.checkProjectName(data: CheckProjectNameRequest): Promise<object>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckProjectNameRequest` | Yes |  |

## Returns

`Promise<object>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.checkProjectName(/* CheckProjectNameRequest */);
console.log(result);
```
