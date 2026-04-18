---
title: stopEnvironment
---

# `stopEnvironment`

```typescript
plugin.environment.stopEnvironment(environmentId: string): Promise<any>
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

const result = await plugin.environment.stopEnvironment('environmentId');
console.log(result);
```
