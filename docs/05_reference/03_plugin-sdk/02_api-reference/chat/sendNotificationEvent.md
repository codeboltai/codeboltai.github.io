---
title: sendNotificationEvent
---

# `sendNotificationEvent`

```typescript
plugin.chat.sendNotificationEvent(notificationMessage: string, type: "editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"): void
```

Sends a notification event to the server.

## Parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `notificationMessage` | `string` | Yes | The message to be sent in the notification. |
| `type` | `"editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"` | Yes |  |

## Returns

`void`

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

const result = await plugin.chat.sendNotificationEvent('notificationMessage', /* "editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview" */);
console.log(result);
```
