---
title: replyToMessage
---

# `replyToMessage`

```typescript
plugin.mailApi.replyToMessage(data: ReplyToMessageRequest): Promise<MailMessage>
```



## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `data` | `ReplyToMessageRequest` | Yes |  |

## Returns

`Promise<MailMessage>`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.mailApi.replyToMessage(/* ReplyToMessageRequest */);
console.log(result);
```
