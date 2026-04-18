---
title: onMessageToChannel
---

# `onMessageToChannel`

```typescript
plugin.gateway.onMessageToChannel(callback: Function): void
```

Register a callback for proactive messages from the application.
When the server wants to send a notification/message to a platform user,
it pushes a gateway.messageToChannel event which triggers this callback.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `callback` | `Function` | Yes | Called with targetId, text, and optional metadata |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.gateway.onMessageToChannel(/* Function */);
console.log(result);
```
