---
title: startEnvironment
---

# `startEnvironment`

```typescript
plugin.environment.startEnvironment(environmentId: string): Promise<any>
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

const result = await plugin.environment.startEnvironment('environmentId');
console.log(result);
```
