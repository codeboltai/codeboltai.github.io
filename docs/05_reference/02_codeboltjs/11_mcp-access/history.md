---
title: History MCP
sidebar_label: codebolt.history
sidebar_position: 10
---

# codebolt.history

Chat history summarization tools for condensing conversation history and managing context.

## Available Tools

- `history_summarize` - Summarize a specific part of chat history
- `history_summarize_all` - Summarize entire chat history

## Tool Parameters

### `history_summarize`

Summarizes a specific part of the chat history. Takes an array of messages and a depth parameter to control how far back in history to consider.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| messages | array | Yes | Array of message objects to summarize, each containing role and content. |
| depth | number | Yes | How far back in history to consider for summarization. |

**Message Object Structure:**
- `role` (string): The role of the message sender (e.g., "user", "assistant")
- `content` (string): The content of the message

### `history_summarize_all`

Summarizes the entire chat history. Returns a summary of all messages in the conversation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| - | - | - | No parameters required |

## Sample Usage

```javascript
// Summarize specific messages with depth
const summarizeResult = await codebolt.tools.executeTool(
  "codebolt.history",
  "history_summarize",
  {
    messages: [
      {
        role: "user",
        content: "Can you help me refactor this code?"
      },
      {
        role: "assistant",
        content: "Sure! I'll help you refactor the code. First, let me analyze the structure..."
      },
      {
        role: "user",
        content: "Thanks! Can you also add error handling?"
      },
      {
        role: "assistant",
        content: "Absolutely. I'll add comprehensive error handling..."
      }
    ],
    depth: 10
  }
);

// Summarize entire chat history
const summarizeAllResult = await codebolt.tools.executeTool(
  "codebolt.history",
  "history_summarize_all",
  {}
);
```

## Use Cases

### Context Management

Use history summarization to manage context window limits:

```javascript
async function manageContext(currentMessages) {
  // If conversation is getting long, summarize older messages
  if (currentMessages.length > 50) {
    const oldMessages = currentMessages.slice(0, 30);
    
    const summary = await codebolt.tools.executeTool(
      "codebolt.history",
      "history_summarize",
      {
        messages: oldMessages,
        depth: 20
      }
    );
    
    // Use summary to replace old messages and save context
    return {
      summary: summary,
      recentMessages: currentMessages.slice(30)
    };
  }
  
  return { recentMessages: currentMessages };
}
```

### Session Recap

Generate a recap of the entire conversation:

```javascript
async function generateSessionRecap() {
  const recap = await codebolt.tools.executeTool(
    "codebolt.history",
    "history_summarize_all",
    {}
  );
  
  console.log("Session Summary:", recap);
  return recap;
}
```

### Selective Summarization

Summarize specific conversation segments:

```javascript
async function summarizeTaskDiscussion(taskMessages) {
  // Summarize messages related to a specific task
  const taskSummary = await codebolt.tools.executeTool(
    "codebolt.history",
    "history_summarize",
    {
      messages: taskMessages,
      depth: 5
    }
  );
  
  return taskSummary;
}
```

## Best Practices

1. **Use appropriate depth values** - Higher depth considers more context but may be slower
2. **Summarize periodically** - Don't wait until context limits are reached
3. **Keep recent messages** - Summarize older messages while keeping recent ones intact
4. **Store summaries** - Save summaries for future reference or context restoration
5. **Balance detail and brevity** - Adjust depth based on how much detail you need preserved

## Error Handling

```javascript
async function safeSummarize(messages, depth) {
  try {
    const result = await codebolt.tools.executeTool(
      "codebolt.history",
      "history_summarize",
      { messages, depth }
    );
    
    if (result.error) {
      console.error("Summarization failed:", result.error.message);
      return null;
    }
    
    return result;
  } catch (error) {
    console.error("Unexpected error during summarization:", error);
    return null;
  }
}
```

:::info
This functionality provides chat history summarization through the MCP interface. Use it to manage context windows and maintain conversation continuity.
:::

## Related Tools

- [Memory MCP](./memory.md) - Long-term memory storage
- [Chat MCP](./chat.md) - Chat operations
- [Context MCP](./context.md) - Context management
