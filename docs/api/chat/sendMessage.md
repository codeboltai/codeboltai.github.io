---
name: sendMessage
cbbaseinfo:
  description: Sends a message through the WebSocket connection.
cbparameters:
  parameters:
    - name: message
      typeName: string
      description: The message to be sent.
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
// Send a message through the WebSocket connection
const message = await codebolt.chat.sendMessage("Hello, everyone!");

```

![sendMessage](../../../static/img/sendMessage.png)


### Explanation

The codebolt.chat.sendMessage(message: string) function is used to send a message  on the codebolt chat . This function enables real-time communication by allowing the script to send text messages on the codebolt chat.