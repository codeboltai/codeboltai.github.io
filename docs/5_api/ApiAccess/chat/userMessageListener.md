---
name: userMessageListener
cbbaseinfo:
  description: >-
    Sets up a listener for incoming WebSocket messages and emits a custom event
    when a message is received.
cbparameters:
  parameters: []
  returns:
    description: The event emitter used for emitting custom events.
    typeArgs: []
data:
  name: userMessageListener
  category: chat
  link: userMessageListener.md
---
<CBBaseInfo/> 
 <CBParameters/>

### Response Structure

This method returns an event emitter that can be used to listen for incoming WebSocket messages. The emitter allows you to set up custom event handlers for processing messages.

### Example

```js
// Set up a user message listener
const emitter = codebolt.chat.userMessageListener();

// Listen for custom events
emitter.on('message', (message) => {
  console.log('Received message:', message);
});
```

### Explanation

This function sets up a listener for incoming WebSocket messages and returns an event emitter for handling custom events when messages are received.
