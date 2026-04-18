---
title: sendMessageToEnvironment
---

# `sendMessageToEnvironment`

```typescript
plugin.environment.sendMessageToEnvironment(environmentId: string, message: any): Promise<any>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `environmentId` | `string` | Yes |  |
| `message` | `any` | Yes |  |

## Returns

`Promise<any>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.environment.sendMessageToEnvironment('environmentId', /* any */);
console.log(result);
```
