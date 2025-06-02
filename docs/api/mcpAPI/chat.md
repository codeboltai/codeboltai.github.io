---
title: Chat MCP
sidebar_label: codebolt.chat
sidebar_position: 16
---

# codebolt.chat

Chat and conversation management for handling chat sessions and message processing.

## Available Tools

- `chat_summarize_all` - Summarize all chat conversations
- `chat_summarize` - Summarize a specific chat conversation

## Sample Usage

```javascript
// Summarize all chat conversations
const summarizeAllResult = await codeboltMCP.executeTool(
  "codebolt.chat",
  "chat_summarize_all",
  { 
    timeRange: "last_24_hours",
    includeMetrics: true
  }
);

// Summarize a specific chat conversation
const summarizeResult = await codeboltMCP.executeTool(
  "codebolt.chat",
  "chat_summarize",
  { 
    chatId: "chat-123",
    maxLength: 500,
    includeKeyPoints: true
  }
);

// Summarize with custom options
const customSummaryResult = await codeboltMCP.executeTool(
  "codebolt.chat",
  "chat_summarize",
  { 
    chatId: "chat-456",
    options: {
      focusOn: ["decisions", "action_items"],
      format: "bullet_points",
      language: "en"
    }
  }
);
```

:::info
This functionality is similar to the [chat API](/docs/api/apiaccess/chat) and provides conversation management through MCP interface.
::: 