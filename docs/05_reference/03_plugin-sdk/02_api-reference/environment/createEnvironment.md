---
title: createEnvironment
---

# `createEnvironment`

```typescript
plugin.environment.createEnvironment(environmentData: object): Promise<any>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentData` | `object` | Yes |  |

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.createEnvironment(/* object */);
console.log(result);
```
