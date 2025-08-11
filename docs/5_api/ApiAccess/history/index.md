# History Module

The History module provides functionality for managing and summarizing chat conversation history. It enables agents to maintain context across conversations and create concise summaries of past interactions.

## Overview

The History module offers:

- **Chat Summarization**: Create summaries of entire conversation history
- **Selective Summarization**: Summarize specific parts of conversations with depth control
- **Message Management**: Handle message objects with role and content structure
- **Context Preservation**: Maintain conversation context for better AI responses

## Core Functions

### summarizeAll()

Summarizes the entire chat history into a condensed format.

**Syntax:**
```typescript
chatSummary.summarizeAll(): Promise<Array<{role: string, content: string}>>
```

**Returns:**
- `Promise<Array<{role: string, content: string}>>` - Array of summarized message objects

**Example:**
```typescript
import chatSummary from '@codebolt/history';

const summary = await chatSummary.summarizeAll();
console.log(summary);
// Output: [
//   { role: "user", content: "User asked about API documentation" },
//   { role: "assistant", content: "Assistant provided comprehensive API guide" }
// ]
```

### summarize()

Summarizes a specific part of the chat history with configurable depth.

**Syntax:**
```typescript
chatSummary.summarize(
  messages: Array<{role: string, content: string}>, 
  depth: number
): Promise<Array<{role: string, content: string}>>
```

**Parameters:**
- `messages` (Array) - Array of message objects to summarize
  - `role` (string) - The role of the message sender (e.g., "user", "assistant")
  - `content` (string) - The content of the message
- `depth` (number) - How far back in history to consider for context

**Returns:**
- `Promise<Array<{role: string, content: string}>>` - Array of summarized message objects

**Example:**
```typescript
import chatSummary from '@codebolt/history';

const messages = [
  { role: "user", content: "How do I create a React component?" },
  { role: "assistant", content: "To create a React component, you can use function components..." },
  { role: "user", content: "Can you show me an example?" },
  { role: "assistant", content: "Here's a simple example: function MyComponent() { return <div>Hello</div>; }" }
];

const summary = await chatSummary.summarize(messages, 2);
console.log(summary);
// Output: Condensed version of the conversation about React components
```

## Message Structure

All functions work with message objects that follow this structure:

```typescript
interface Message {
  role: string;    // The role of the message sender
  content: string; // The actual message content
}
```

**Common Roles:**
- `"user"` - Messages from the user
- `"assistant"` - Messages from the AI assistant
- `"system"` - System messages or instructions

## Use Cases

### 1. Context Management
Maintain conversation context when the chat history becomes too long:

```typescript
// Get current conversation summary
const currentSummary = await chatSummary.summarizeAll();

// Use summary to maintain context in new conversations
const contextualPrompt = `Previous conversation summary: ${JSON.stringify(currentSummary)}`;
```

### 2. Memory Optimization
Reduce memory usage by summarizing old conversations:

```typescript
// Summarize older messages to save memory
const oldMessages = getMessagesOlderThan(7); // Get messages older than 7 days
const summarizedOld = await chatSummary.summarize(oldMessages, 10);

// Replace old messages with summary
replaceOldMessagesWithSummary(summarizedOld);
```

### 3. Conversation Analysis
Analyze conversation patterns and topics:

```typescript
// Get summary of recent conversations
const recentSummary = await chatSummary.summarizeAll();

// Analyze topics discussed
const topics = extractTopicsFromSummary(recentSummary);
console.log("Recent topics:", topics);
```

### 4. Progressive Summarization
Create layered summaries with different levels of detail:

```typescript
// Create detailed summary of recent messages
const recentMessages = getLastNMessages(10);
const detailedSummary = await chatSummary.summarize(recentMessages, 5);

// Create high-level summary of entire conversation
const overallSummary = await chatSummary.summarizeAll();

// Combine for multi-level context
const contextLayers = {
  detailed: detailedSummary,
  overview: overallSummary
};
```

## Best Practices

### 1. Depth Selection
Choose appropriate depth values based on your use case:

```typescript
// For recent context (last few exchanges)
const recentContext = await chatSummary.summarize(messages, 3);

// For broader context (longer conversation history)
const broadContext = await chatSummary.summarize(messages, 10);

// For full context (entire conversation)
const fullContext = await chatSummary.summarizeAll();
```

### 2. Performance Optimization
- Use `summarize()` with specific messages for better performance
- Avoid calling `summarizeAll()` too frequently
- Cache summaries when possible

```typescript
// Cache summary to avoid repeated calls
let cachedSummary = null;
let lastSummaryTime = 0;

async function getCachedSummary() {
  const now = Date.now();
  if (!cachedSummary || now - lastSummaryTime > 300000) { // 5 minutes
    cachedSummary = await chatSummary.summarizeAll();
    lastSummaryTime = now;
  }
  return cachedSummary;
}
```

### 3. Error Handling
Always handle potential errors when summarizing:

```typescript
try {
  const summary = await chatSummary.summarizeAll();
  // Use summary
} catch (error) {
  console.error("Failed to summarize chat:", error);
  // Fallback to original messages or default behavior
}
```

### 4. Message Validation
Validate message structure before summarizing:

```typescript
function validateMessages(messages) {
  return messages.every(msg => 
    msg && 
    typeof msg.role === 'string' && 
    typeof msg.content === 'string'
  );
}

if (validateMessages(messages)) {
  const summary = await chatSummary.summarize(messages, depth);
} else {
  console.error("Invalid message format");
}
```

## Integration Examples

### With Chat Module
```typescript
import cbchat from '@codebolt/chat';
import chatSummary from '@codebolt/history';

// Get chat history and summarize
const chatHistory = await cbchat.getChatHistory();
const summary = await chatSummary.summarizeAll();

// Use summary for context in new messages
await cbchat.sendMessage(`Context: ${JSON.stringify(summary)}\n\nNew question: How do I deploy my app?`);
```

### With Agent Module
```typescript
import codeboltAgent from '@codebolt/agent';
import chatSummary from '@codebolt/history';

// Create agent with conversation context
const summary = await chatSummary.summarizeAll();
const agent = await codeboltAgent.createAgent({
  context: summary,
  instructions: "Use the conversation history to provide relevant responses"
});
```

The History module is essential for maintaining conversation continuity and managing chat context effectively in AI applications. 