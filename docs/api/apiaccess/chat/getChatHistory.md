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


## Response Structure

The `getChatHistory` function returns a response object with the following structure:

```js
{
  type: 'getChatHistoryResponse',
  chats: [
    {
      type: 'message',
      content: 'Test message waiting for reply from CodeboltJS',
      actionType: 'waitforReply',
      sender: 'agent',
      templateType: 'agentChat',
      messageId: 'q2mpskkftknsudeuv1wy8',
      data: {}, // Additional message data
      agentInstanceId: '3b1ab5e8-f367-4e19-9984-d20e6949aaed',
      agentId: '6dd799b5-43c2-4c55-ba49-cae6cbac2498',
      threadId: '3de168de-d7f9-4c58-8650-4d3029b3477c',
      timestamp: '2025-06-24T05:18:57.474Z'
    },
    {
      type: 'message',
      content: 'This is a test question from CodeboltJS. Do you want to continue?',
      actionType: 'confirmationRequest',
      sender: 'agent',
      templateType: 'confirmationChat',
      messageId: 'zhkmrrla0s9gjpf7pz7ipj',
      threadId: '3de168de-d7f9-4c58-8650-4d3029b3477c',
      data: {}, // Additional message data
      agentInstanceId: '3b1ab5e8-f367-4e19-9984-d20e6949aaed',
      agentId: '6dd799b5-43c2-4c55-ba49-cae6cbac2498',
      timestamp: '2025-06-24T05:18:59.488Z'
    }
    // ... more chat messages
  ]
}
```

### Key Response Fields

- **`type`**: Always 'getChatHistoryResponse' for this function
- **`chats`**: Array of chat message objects containing the conversation history

### Chat Message Fields

- **`type`**: Type of the message (usually 'message')
- **`content`**: The actual message content/text
- **`actionType`**: Type of action associated with the message (e.g., 'waitforReply', 'confirmationRequest')
- **`sender`**: Who sent the message ('agent' or 'user')
- **`templateType`**: Template used for the message display
- **`messageId`**: Unique identifier for the message
- **`threadId`**: Identifier for the conversation thread
- **`agentId`** and **`agentInstanceId`**: Identifiers for the agent
- **`timestamp`**: When the message was sent (ISO 8601 format)
- **`data`**: Additional message-specific data

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