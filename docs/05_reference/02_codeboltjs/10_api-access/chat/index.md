---
cbapicategory:
  - name: getChatHistory
    link: /docs/api/apiaccess/chat/getChatHistory
    description: Retrieves the chat history from the server for a specific thread.
  - name: sendMessage
    link: /docs/api/apiaccess/chat/sendMessage
    description: Sends a message through the WebSocket connection to the chat server.
  - name: setRequestHandler
    link: /docs/api/apiaccess/chat/setRequestHandler
    description: Sets a global request handler for all incoming chat messages.
  - name: waitforReply
    link: /docs/api/apiaccess/chat/waitforReply
    description: Waits for a reply to a sent message from the server.
  - name: processStarted
    link: /docs/api/apiaccess/chat/processStarted
    description: Notifies the server that a process has started and sets up stop handlers.
  - name: stopProcess
    link: /docs/api/apiaccess/chat/stopProcess
    description: Stops the ongoing process by sending a stop signal to the server.
  - name: processFinished
    link: /docs/api/apiaccess/chat/processFinished
    description: Notifies the server that a process has finished execution.
  - name: sendConfirmationRequest
    link: /docs/api/apiaccess/chat/sendConfirmationRequest
    description: Sends a confirmation request to the server with customizable buttons.
  - name: askQuestion
    link: /docs/api/apiaccess/chat/askQuestion
    description: Asks a question to the user with customizable button options.
  - name: sendNotificationEvent
    link: /docs/api/apiaccess/chat/sendNotificationEvent
    description: Sends a notification event to the server with a specific type.
  - name: userMessageListener
    link: /docs/api/apiaccess/chat/userMessageListener
    description: Sets up a listener for incoming WebSocket messages and emits custom events.

---
# Chat API

The Chat API provides real-time messaging and communication capabilities, enabling agents to interact with users, send messages, wait for responses, and manage process states.

## Overview

The chat module enables you to:
- **Send Messages**: Exchange messages with users and other agents
- **Chat History**: Retrieve and manage conversation history
- **Request Handling**: Set up handlers for incoming messages
- **Process Management**: Control process lifecycle (start, stop, finish)
- **User Interaction**: Request confirmations and ask questions
- **Notifications**: Send notifications of various types

## Quick Start Example

```typescript
import codebolt from '@codebolt/codeboltjs';

// Wait for connection
await codebolt.waitForReady();

// Send a message
codebolt.chat.sendMessage('Hello! I\'m ready to help.');

// Wait for a reply
const reply = await codebolt.chat.waitforReply('What would you like me to do?');
console.log('User replied:', reply.message);

// Ask for confirmation
const confirmed = await codebolt.chat.sendConfirmationRequest(
  'Should I proceed with the task?',
  ['Yes, proceed', 'No, cancel']
);

if (confirmed === 'Yes, proceed') {
  // Start a process
  const processControl = codebolt.chat.processStarted(() => {
    console.log('User clicked stop!');
  });

  // Do some work...

  // Notify when finished
  codebolt.chat.processFinished();
}
```

## Response Structure

Chat API functions return various response structures:

```typescript
// Chat history response
interface ChatMessage {
  threadId: string;
  messages: Array<{
    role: string;
    content: string;
    timestamp: string;
  }>;
}

// Reply response
interface UserMessage {
  message: string;
  timestamp: string;
  metadata?: any;
}

// Confirmation response
interface ConfirmationResponse {
  choice: string;
  feedback?: string;
}
```

## Common Use Cases

### Interactive Task Execution

```typescript
// Ask user what to do
const task = await codebolt.chat.askQuestion(
  'What task would you like me to perform?',
  ['Code Review', 'Bug Fix', 'Feature Implementation']
);

// Start the process
codebolt.chat.processStarted();

try {
  // Execute the task
  await executeTask(task);

  // Send completion notification
  codebolt.chat.sendNotificationEvent(
    'Task completed successfully!',
    'terminal'
  );
} finally {
  codebolt.chat.processFinished();
}
```

### Setting Up Message Handlers

```typescript
// Set up a handler for incoming messages
codebolt.chat.setRequestHandler(async (request, respond) => {
  console.log('Received request:', request);

  // Process the request
  const result = await processRequest(request);

  // Send response
  respond({
    success: true,
    data: result
  });
});
```

### Sending Notifications

```typescript
// Send different types of notifications
codebolt.chat.sendNotificationEvent(
  'Starting build process...',
  'terminal'
);

codebolt.chat.sendNotificationEvent(
  'Git repository updated',
  'git'
);

codebolt.chat.sendNotificationEvent(
  'Browser automation started',
  'browser'
);
```

<CBAPICategory />
