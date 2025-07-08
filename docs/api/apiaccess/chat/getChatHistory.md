---
name: getChatHistory
cbbaseinfo:
  description: Retrieves the chat history from the server.
cbparameters:
  parameters: []
  returns:
    signatureTypeName: Promise
    description: >-
      A promise that resolves with an array of ChatMessage objects representing
      the chat history.
    typeArgs:
      - type: array
        name: ChatMessage
data:
  name: getChatHistory
  category: chat
  link: getChatHistory.md
---
<CBBaseInfo/> 
 <CBParameters/>


### Response Structure

The method returns a Promise that resolves to a `GetChatHistoryResponse` object with the following properties:

- **`type`** (string): Always "getChatHistoryResponse".
- **`messages`** (array, optional): An array of chat message objects containing the conversation history. Each message has:
  - **`id`** (string): Unique identifier for the message
  - **`content`** (string): The actual message content/text
  - **`sender`** (string): Who sent the message ('agent' or 'user')
  - **`timestamp`** (string): When the message was sent (ISO 8601 format)
  - **`type`** (string): Type of the message
- **`agentId`** (string, optional): Identifier for the agent associated with the chat history
- **`success`** (boolean, optional): Indicates if the operation was successful.
- **`message`** (string, optional): A message with additional information.
- **`error`** (string, optional): Error details if the operation failed.
- **`messageId`** (string, optional): A unique identifier for the message.
- **`threadId`** (string, optional): The thread identifier.

### Example

```js
// Retrieve the chat history from the server
const chatHistory = await codebolt.chat.getChatHistory();
console.log('Chat history retrieved:', chatHistory);

// Access individual chat messages
const messages = chatHistory.chats;
messages.forEach((message, index) => {
    console.log(`Message ${index + 1}:`, {
        sender: message.sender,
        content: message.content,
        timestamp: message.timestamp,
        actionType: message.actionType
    });
});

// Filter messages by sender
const agentMessages = chatHistory.chats.filter(msg => msg.sender === 'agent');
const userMessages = chatHistory.chats.filter(msg => msg.sender === 'user');

console.log(`Found ${agentMessages.length} agent messages and ${userMessages.length} user messages`);
```

### Explanation

This function basically helps us get all the previous messages from our Codebolt chats. It returns a comprehensive history including message content, metadata, and timing information for each interaction in the conversation thread. 