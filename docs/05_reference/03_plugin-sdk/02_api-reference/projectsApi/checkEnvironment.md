---
title: checkEnvironment
---

# `checkEnvironment`

```typescript
plugin.projectsApi.checkEnvironment(data: CheckEnvironmentRequest): Promise<unknown>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `CheckEnvironmentRequest` | Yes |  |

## Returns

`Promise<unknown>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.checkEnvironment(/* CheckEnvironmentRequest */);
console.log(result);
```
