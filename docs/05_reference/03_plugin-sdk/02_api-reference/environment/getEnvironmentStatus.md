---
title: getEnvironmentStatus
---

# `getEnvironmentStatus`

```typescript
plugin.environment.getEnvironmentStatus(environmentId: string): Promise<any>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.getEnvironmentStatus('environmentId');
console.log(result);
```
