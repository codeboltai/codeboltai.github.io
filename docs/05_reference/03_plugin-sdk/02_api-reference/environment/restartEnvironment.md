---
title: restartEnvironment
---

# `restartEnvironment`

```typescript
plugin.environment.restartEnvironment(environmentId: string): Promise<any>
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

const result = await plugin.environment.restartEnvironment('environmentId');
console.log(result);
```
