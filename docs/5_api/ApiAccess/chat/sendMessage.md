---
name: sendMessage
cbbaseinfo:
  description: Sends a message through the WebSocket connection.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The message to be sent.
    - name: payload
      typeName: any
      description: Additional data to send along with the message.
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: sendMessage
  category: chat
  link: sendMessage.md
---
<CBBaseInfo/> 
<CBParameters/>

### Response Structure

This method returns `void` and does not provide a response. The message is sent immediately when the method is called.

### Examples

```js
// Example 1: Send a simple text message
codebolt.chat.sendMessage("Hello, CodeBolt!");

// Example 3: Send a message with payload data
codebolt.chat.sendMessage("File processing complete", {
    timestamp: new Date().toISOString(),
    source: 'codeboltjs-script',
    fileCount: 5,
    status: 'success'
});
```

![sendMessage](/img/processStarted.png)

