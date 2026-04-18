---
title: getMessage
---

# `getMessage`

```typescript
plugin.mail.getMessage(params: IGetMessageParams): Promise<IGetMessageResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IGetMessageParams` | Yes |  |

## Returns

`Promise<IGetMessageResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.getMessage(/* IGetMessageParams */);
console.log(result);
```
