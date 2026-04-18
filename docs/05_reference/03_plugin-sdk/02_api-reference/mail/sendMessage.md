---
title: sendMessage
---

# `sendMessage`

```typescript
plugin.mail.sendMessage(params: ISendMessageParams): Promise<ISendMessageResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `ISendMessageParams` | Yes |  |

## Returns

`Promise<ISendMessageResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.sendMessage(/* ISendMessageParams */);
console.log(result);
```
