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


### Example

```js
// Send a simple message through the WebSocket connection
codebolt.chat.sendMessage("Hi!", null);

// Send a message with additional payload data
codebolt.chat.sendMessage("Process complete", { 
  status: "success", 
  items: 5 
});
```

![sendMessage](/img/processStarted.png)


### Explanation

The codebolt.chat.sendMessage function sends a message through the WebSocket connection, optionally with additional payload data. This function enables real-time communication by allowing the script to send text messages and structured data to the Codebolt chat.