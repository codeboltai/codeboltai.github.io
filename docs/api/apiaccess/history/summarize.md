# summarize

Summarizes a specific part of the chat history with configurable depth control.

## Syntax

```typescript
chatSummary.summarize(
  messages: Array<{role: string, content: string}>, 
  depth: number
): Promise<Array<{role: string, content: string}>>
```

## Parameters

- `messages` (Array) - Array of message objects to summarize
  - `role` (string) - The role of the message sender (e.g., "user", "assistant", "system")
  - `content` (string) - The content of the message
- `depth` (number) - How far back in history to consider for context when creating the summary

## Returns

- `Promise<Array<{role: string, content: string}>>` - A promise that resolves to an array of summarized message objects

## Description

The `summarize` function processes a specific set of messages and creates a condensed summary while considering a configurable depth of historical context. This provides fine-grained control over what gets summarized and how much context is considered.

The depth parameter determines how many previous messages are considered when creating the summary, allowing for:
- Focused summaries of recent exchanges (low depth)
- Context-aware summaries that consider broader conversation history (high depth)
- Balanced summaries that maintain relevance while preserving important context

## Example

```typescript
import chatSummary from '@codebolt/history';

async function summarizeRecentConversation() {
  const messages = [
    { role: "user", content: "How do I implement user authentication in my React app?" },
    { role: "assistant", content: "For React authentication, you can use several approaches. The most common is JWT tokens with a library like react-router for protected routes. Here's a basic implementation..." },
    { role: "user", content: "What about password hashing?" },
    { role: "assistant", content: "For password hashing, never store plain text passwords. Use bcrypt on the backend. Here's how to implement it with Node.js..." },
    { role: "user", content: "Can you show me the complete login flow?" },
    { role: "assistant", content: "Here's a complete login flow: 1. User submits credentials, 2. Backend validates and hashes password, 3. Generate JWT token, 4. Store token in localStorage/cookies..." }
  ];

  try {
    // Summarize with moderate context depth
    const summary = await chatSummary.summarize(messages, 3);
    
    console.log("Conversation Summary:");
    summary.forEach((msg, index) => {
      console.log(`${index + 1}. ${msg.role}: ${msg.content}`);
    });
    
    return summary;
  } catch (error) {
    console.error("Failed to summarize messages:", error);
    return messages; // Fallback to original messages
  }
}
```

## Depth Parameter Guide

### Low Depth (1-3)
Best for recent context and focused summaries:

```typescript
// Focus on immediate context
const recentSummary = await chatSummary.summarize(messages, 2);
```

### Medium Depth (4-7)
Balanced approach for most use cases:

```typescript
// Balanced context and summary
const balancedSummary = await chatSummary.summarize(messages, 5);
```

### High Depth (8+)
For comprehensive context consideration:

```typescript
// Deep context analysis
const comprehensiveSummary = await chatSummary.summarize(messages, 10);
```

## Use Cases

### 1. Selective Summarization
```typescript
// Summarize only specific conversation segments
const technicalDiscussion = messages.filter(msg => 
  msg.content.includes('API') || msg.content.includes('code')
);
const techSummary = await chatSummary.summarize(technicalDiscussion, 4);
```

### 2. Progressive Context Building
```typescript
// Build context progressively
const layers = [];
for (let depth = 2; depth <= 8; depth += 2) {
  const summary = await chatSummary.summarize(messages, depth);
  layers.push({ depth, summary });
}
```

### 3. Topic-Focused Summarization
```typescript
// Summarize messages about specific topics
const authMessages = messages.filter(msg => 
  msg.content.toLowerCase().includes('auth') || 
  msg.content.toLowerCase().includes('login')
);
const authSummary = await chatSummary.summarize(authMessages, 3);
```

### 4. Time-Based Summarization
```typescript
// Summarize messages from specific time periods
const recentMessages = getMessagesFromLast(messages, '1 hour');
const recentSummary = await chatSummary.summarize(recentMessages, 5);
```

## Advanced Examples

### Batch Processing
```typescript
async function batchSummarize(messageGroups, depth = 5) {
  const summaries = await Promise.all(
    messageGroups.map(group => 
      chatSummary.summarize(group, depth)
    )
  );
  return summaries;
}

// Usage
const groups = chunkMessages(allMessages, 10); // Split into groups of 10
const summaries = await batchSummarize(groups, 3);
```

### Adaptive Depth
```typescript
async function adaptiveSummarize(messages) {
  // Adjust depth based on message count
  const depth = Math.min(Math.max(messages.length / 5, 2), 10);
  return await chatSummary.summarize(messages, Math.floor(depth));
}
```

### Quality Control
```typescript
async function qualitySummarize(messages, depth) {
  // Validate input messages
  const validMessages = messages.filter(msg => 
    msg.role && msg.content && msg.content.trim().length > 0
  );
  
  if (validMessages.length === 0) {
    throw new Error("No valid messages to summarize");
  }
  
  return await chatSummary.summarize(validMessages, depth);
}
```

## Error Handling

```typescript
async function robustSummarize(messages, depth) {
  try {
    // Validate inputs
    if (!Array.isArray(messages) || messages.length === 0) {
      throw new Error("Invalid messages array");
    }
    
    if (typeof depth !== 'number' || depth < 1) {
      throw new Error("Depth must be a positive number");
    }
    
    const summary = await chatSummary.summarize(messages, depth);
    return summary;
    
  } catch (error) {
    console.error("Summarization error:", error);
    
    // Fallback strategies
    if (error.message.includes('network')) {
      // Retry with reduced depth
      return await chatSummary.summarize(messages, Math.max(1, depth - 2));
    }
    
    // Return original messages as fallback
    return messages;
  }
}
```

## Performance Tips

1. **Optimal Depth**: Use depth values between 3-7 for best performance/quality balance
2. **Message Filtering**: Pre-filter messages to reduce processing time
3. **Batch Processing**: Process multiple message groups in parallel
4. **Caching**: Cache summaries for frequently accessed message sets

```typescript
// Performance-optimized summarization
const summaryCache = new Map();

async function cachedSummarize(messages, depth) {
  const key = `${JSON.stringify(messages)}-${depth}`;
  
  if (summaryCache.has(key)) {
    return summaryCache.get(key);
  }
  
  const summary = await chatSummary.summarize(messages, depth);
  summaryCache.set(key, summary);
  
  return summary;
}
```

## Related Functions

- [`summarizeAll()`](summarizeAll.md) - For summarizing the complete conversation history 