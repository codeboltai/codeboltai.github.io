---
title: waitforReply
---

# `waitforReply`

```typescript
plugin.chat.waitforReply(message: string): Promise<UserMessage>
```

Waits for a reply to a sent message.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | The message for which a reply is expected. |

## Returns

`Promise<UserMessage>` — A promise that resolves with the reply.

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.waitforReply('message');
console.log(result);
```
