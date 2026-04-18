---
title: getEnvironment
---

# `getEnvironment`

```typescript
plugin.environmentsApi.getEnvironment(id: string): Promise<Environment>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes |  |

## Returns

`Promise<Environment>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environmentsApi.getEnvironment('id');
console.log(result);
```
