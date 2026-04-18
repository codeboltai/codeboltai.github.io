---
title: createInDefault
---

# `createInDefault`

```typescript
plugin.projectsApi.createInDefault(data: Record<string, unknown>): Promise<Project>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `Record<string, unknown>` | Yes |  |

## Returns

`Promise<Project>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.projectsApi.createInDefault(/* Record<string, unknown> */);
console.log(result);
```
