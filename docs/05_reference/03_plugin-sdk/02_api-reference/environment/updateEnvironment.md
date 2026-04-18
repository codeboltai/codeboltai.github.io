---
title: updateEnvironment
---

# `updateEnvironment`

```typescript
plugin.environment.updateEnvironment(environmentId: string, updateData: any): Promise<any>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |
| `updateData` | `any` | Yes |  |

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.updateEnvironment('environmentId', /* any */);
console.log(result);
```
