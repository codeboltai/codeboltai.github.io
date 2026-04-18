---
title: updateEnvironment
---

# `updateEnvironment`

```typescript
plugin.environmentsApi.updateEnvironment(id: string, data: UpdateEnvironmentRequest): Promise<Environment>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |
| `data` | `UpdateEnvironmentRequest` | Yes |  |

## Returns

`Promise<Environment>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.updateEnvironment('id', /* UpdateEnvironmentRequest */);
console.log(result);
```
