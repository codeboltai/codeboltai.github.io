---
title: replyMessage
---

# `replyMessage`

```typescript
plugin.mail.replyMessage(params: IReplyMessageParams): Promise<IReplyMessageResponse>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params` | `IReplyMessageParams` | Yes |  |

## Returns

`Promise<IReplyMessageResponse>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mail.replyMessage(/* IReplyMessageParams */);
console.log(result);
```
