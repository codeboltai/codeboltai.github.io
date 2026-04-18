---
name: sendNotificationEvent
cbbaseinfo:
  description: Sends a notification event to the server.
cbparameters:
  parameters:
    - name: notificationMessage
      typeName: string
      description: The message to be sent in the notification.
      isOptional: false
    - name: type
      typeName: "editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"
      description: ""
      isOptional: false
  returns:
    signatureTypeName: "void"
    description: ""
data:
  name: sendNotificationEvent
  category: chat
  link: sendNotificationEvent.md
---
# sendNotificationEvent

```typescript
plugin.chat.sendNotificationEvent(notificationMessage: string, type: "editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"): void
```

Sends a notification event to the server.

## Parameters

| Parameter | Type | Description |
|---|---|---|
| `notificationMessage` | `string` | The message to be sent in the notification. |
| `type` | `"editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview"` |  |

## Returns

**`void`**

## Example

```typescript
import plugin from '@codebolt/plugin-sdk';

await plugin.chat.sendNotificationEvent('notificationMessage', /* "editor" | "browser" | "terminal" | "git" | "debug" | "planner" | "preview" */);
```
