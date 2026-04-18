---
title: getRepoMap
---

# `getRepoMap`

```typescript
plugin.project.getRepoMap(message: any): Promise<GetProjectPathResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `any` | Yes |  |

## Returns

`Promise<GetProjectPathResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.project.getRepoMap(/* any */);
console.log(result);
```
