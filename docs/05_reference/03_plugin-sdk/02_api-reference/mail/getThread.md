---
title: getThread
---

# `getThread`

```typescript
plugin.mail.getThread(params: IGetThreadParams): Promise<IGetThreadResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetThreadParams` | Yes |  |

## Returns

`Promise<IGetThreadResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.getThread(/* IGetThreadParams */);
console.log(result);
```
