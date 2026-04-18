---
cbapicategory:
  - name: askQuestion
    link: /docs/reference/plugin-sdk/api-reference/chat/askQuestion
    description: askQuestion
  - name: checkForSteeringMessage
    link: /docs/reference/plugin-sdk/api-reference/chat/checkForSteeringMessage
    description: Checks if any steering message has been received.
  - name: getChatHistory
    link: /docs/reference/plugin-sdk/api-reference/chat/getChatHistory
    description: Retrieves the chat history from the server.
  - name: onSteeringMessageReceived
    link: /docs/reference/plugin-sdk/api-reference/chat/onSteeringMessageReceived
    description: Waits for a steering message.
  - name: processFinished
    link: /docs/reference/plugin-sdk/api-reference/chat/processFinished
    description: "Stops the ongoing process.
Sends a specific message to the server to stop the process."
  - name: processStarted
    link: /docs/reference/plugin-sdk/api-reference/chat/processStarted
    description: Notifies the server that a process has started and sets up a listener for stopProcessClicked events.
  - name: sendConfirmationRequest
    link: /docs/reference/plugin-sdk/api-reference/chat/sendConfirmationRequest
    description: "Sends a confirmation request to the server with two options: Yes or No."
  - name: sendMessage
    link: /docs/reference/plugin-sdk/api-reference/chat/sendMessage
    description: Sends a message through the WebSocket connection.
  - name: sendNotificationEvent
    link: /docs/reference/plugin-sdk/api-reference/chat/sendNotificationEvent
    description: Sends a notification event to the server.
  - name: setRequestHandler
    link: /docs/reference/plugin-sdk/api-reference/chat/setRequestHandler
    description: Sets a global request handler for all incoming messages
  - name: stopProcess
    link: /docs/reference/plugin-sdk/api-reference/chat/stopProcess
    description: "Stops the ongoing process.
Sends a specific message to the server to stop the process."
  - name: waitforReply
    link: /docs/reference/plugin-sdk/api-reference/chat/waitforReply
    description: Waits for a reply to a sent message.
---
# Chat API

The `chat` module of the Plugin SDK.

<CBAPICategory />

## Methods

- [`askQuestion()`](./askQuestion) — 
- [`checkForSteeringMessage()`](./checkForSteeringMessage) — Checks if any steering message has been received.
- [`getChatHistory()`](./getChatHistory) — Retrieves the chat history from the server.
- [`onSteeringMessageReceived()`](./onSteeringMessageReceived) — Waits for a steering message.
- [`processFinished()`](./processFinished) — Stops the ongoing process.
Sends a specific message to the server to stop the process.
- [`processStarted()`](./processStarted) — Notifies the server that a process has started and sets up a listener for stopProcessClicked events.
- [`sendConfirmationRequest()`](./sendConfirmationRequest) — Sends a confirmation request to the server with two options: Yes or No.
- [`sendMessage()`](./sendMessage) — Sends a message through the WebSocket connection.
- [`sendNotificationEvent()`](./sendNotificationEvent) — Sends a notification event to the server.
- [`setRequestHandler()`](./setRequestHandler) — Sets a global request handler for all incoming messages
- [`stopProcess()`](./stopProcess) — Stops the ongoing process.
Sends a specific message to the server to stop the process.
- [`waitforReply()`](./waitforReply) — Waits for a reply to a sent message.
