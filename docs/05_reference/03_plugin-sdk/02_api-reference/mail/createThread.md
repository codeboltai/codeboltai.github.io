---
title: createThread
---

# `createThread`

```typescript
plugin.mail.createThread(params: ICreateThreadParams): Promise<ICreateThreadResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ICreateThreadParams` | Yes |  |

## Returns

`Promise<ICreateThreadResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.createThread(/* ICreateThreadParams */);
console.log(result);
```
