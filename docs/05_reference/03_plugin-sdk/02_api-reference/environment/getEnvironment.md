---
title: getEnvironment
---

# `getEnvironment`

```typescript
plugin.environment.getEnvironment(environmentId: string): Promise<any>
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

const result = await plugin.environment.getEnvironment('environmentId');
console.log(result);
```
