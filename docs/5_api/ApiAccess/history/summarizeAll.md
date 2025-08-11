# summarizeAll

Summarizes the entire chat history into a condensed format.

## Syntax

```typescript
chatSummary.summarizeAll(): Promise<Array<{role: string, content: string}>>
```

## Parameters

This function takes no parameters.

## Returns

- `Promise<Array<{role: string, content: string}>>` - A promise that resolves to an array of summarized message objects

## Description

The `summarizeAll` function processes the complete conversation history and creates a condensed summary while preserving the essential information and context. This is useful for:

- Maintaining conversation context when history becomes too long
- Creating conversation overviews
- Reducing memory usage while preserving important information
- Preparing context for new conversation sessions

## Example

```typescript
import chatSummary from '@codebolt/history';

async function getConversationSummary() {
  try {
    const summary = await chatSummary.summarizeAll();
    
    console.log("Conversation Summary:");
    summary.forEach((message, index) => {
      console.log(`${index + 1}. ${message.role}: ${message.content}`);
    });
    
    return summary;
  } catch (error) {
    console.error("Failed to summarize conversation:", error);
    return [];
  }
}

// Usage
const summary = await getConversationSummary();
```

## Response Format

The function returns an array of message objects with the following structure:

```typescript
[
  {
    role: "user",
    content: "User asked about implementing authentication"
  },
  {
    role: "assistant", 
    content: "Assistant provided JWT implementation guide with code examples"
  },
  {
    role: "user",
    content: "User requested clarification on token refresh"
  },
  {
    role: "assistant",
    content: "Assistant explained refresh token mechanism and best practices"
  }
]
```

## Use Cases

### Context Preservation
```typescript
// Save conversation context before starting new session
const conversationContext = await chatSummary.summarizeAll();
localStorage.setItem('chatContext', JSON.stringify(conversationContext));
```

### Memory Management
```typescript
// Periodically summarize to manage memory
setInterval(async () => {
  const summary = await chatSummary.summarizeAll();
  // Replace full history with summary if it gets too long
  if (fullHistory.length > 100) {
    fullHistory = summary;
  }
}, 300000); // Every 5 minutes
```

### Analytics and Reporting
```typescript
// Generate conversation reports
const summary = await chatSummary.summarizeAll();
const report = {
  totalExchanges: summary.length,
  topics: extractTopics(summary),
  timestamp: new Date().toISOString()
};
```

## Error Handling

```typescript
async function safeSummarizeAll() {
  try {
    const summary = await chatSummary.summarizeAll();
    return summary;
  } catch (error) {
    console.error("Summarization failed:", error);
    
    // Fallback strategies
    if (error.message.includes('network')) {
      // Retry after delay
      await new Promise(resolve => setTimeout(resolve, 5000));
      return chatSummary.summarizeAll();
    }
    
    // Return empty array as fallback
    return [];
  }
}
```

## Performance Considerations

- The function processes the entire conversation history, which may take time for very long conversations
- Consider caching results if calling frequently
- Use this function when you need a complete overview rather than recent context

## Related Functions

- [`summarize()`](summarize.md) - For summarizing specific message sets with depth control 