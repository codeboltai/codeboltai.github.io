---
title: updateThreadStatus
---

# `updateThreadStatus`

```typescript
plugin.mail.updateThreadStatus(params: IUpdateThreadStatusParams): Promise<IUpdateThreadStatusResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IUpdateThreadStatusParams` | Yes |  |

## Returns

`Promise<IUpdateThreadStatusResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.updateThreadStatus(/* IUpdateThreadStatusParams */);
console.log(result);
```
