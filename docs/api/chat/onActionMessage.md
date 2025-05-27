---
name: onActionMessage
cbbaseinfo:
  description: Sets up a listener for incoming WebSocket messages and emits custom events.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: EventEmitter
    description: The event emitter used for emitting custom events.
    typeArgs: []
data:
  name: onActionMessage
  category: chat
  link: onActionMessage.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// Set up a listener for incoming user messages
const emitter = codebolt.chat.onActionMessage();

// Listen for the 'userMessage' event
emitter.on("userMessage", (response, sendResponse) => {
  console.log("Received user message:", response);
  
  // Send a response back to the user
  sendResponse("I received your message!");
});
```

### Explanation

This function sets up a listener for incoming WebSocket messages and emits custom events when specific message types are received. It returns an EventEmitter that you can use to listen for these events. The most common event is 'userMessage', which is emitted when a message of type 'messageResponse' is received. 