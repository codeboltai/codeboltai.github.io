---
title: sendMessage
---

# `sendMessage`

```typescript
plugin.chat.sendMessage(message: string, payload?: object): void
```

Sends a message through the WebSocket connection.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `message` | `string` | Yes | The message to be sent. |
| `payload` | `object` | No | Optional additional payload data. |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.sendMessage('message');
console.log(result);
```
