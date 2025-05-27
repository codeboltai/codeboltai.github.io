---
name: setRequestHandler
cbbaseinfo:
  description: Sets a global request handler for all incoming messages.
cbparameters:
  parameters:
    - name: handler
      typeName: RequestHandler
      description: The async handler function that processes incoming messages.
  returns:
    signatureTypeName: void
    description: ' '
    typeArgs: []
data:
  name: setRequestHandler
  category: chat
  link: setRequestHandler.md
---
<CBBaseInfo/> 
<CBParameters/>

### Example

```js
// Set up a handler for all incoming WebSocket messages
codebolt.chat.setRequestHandler(async (request, response) => {
  // Process the incoming request
  console.log("Received request:", request);
  
  // Send a response back
  response({ success: true, data: "Request processed" });
});
```

### Explanation

This function sets up a global handler for processing all incoming WebSocket messages. The handler receives the parsed request object and a response callback function that can be used to send data back to the server. 