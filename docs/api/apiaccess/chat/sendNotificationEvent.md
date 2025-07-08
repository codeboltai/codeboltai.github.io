---
name: sendNotificationEvent
cbbaseinfo:
  description: Sends a notification event to the server.
cbparameters:
  parameters:
    - name: notificationMessage
      typeName: string
      description: The message to be sent in the notification.
    - name: type
      typeName: "'debug' | 'git' | 'planner' | 'browser' | 'editor' | 'terminal' | 'preview'"
      description: The type of notification to send.
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: sendNotificationEvent
  category: chat
  link: sendNotificationEvent.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

This method returns `void` and does not provide a response. The notification event is sent immediately when the method is called.

### Example

```js
// Send a debug notification
codebolt.chat.sendNotificationEvent("File processing complete", "debug");

// Send a terminal notification
codebolt.chat.sendNotificationEvent("Command executed successfully", "terminal");
```

### Explanation

The `sendNotificationEvent` function sends a notification event to the server with a specified message and type. This allows you to communicate different types of events or status updates to the user through the Codebolt interface. 