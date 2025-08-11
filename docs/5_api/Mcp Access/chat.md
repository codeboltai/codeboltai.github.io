---
title: Chat MCP
sidebar_label: codebolt.chat
sidebar_position: 19
---

# codebolt.chat

Chat summarization and history tools.

## Available Tools

- `chat_summarize_all` - Summarize all chat history
- `chat_summarize` - Summarize a specific set of messages

## Sample Usage

```javascript
// Summarize all chat history
const allSummary = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_summarize_all",
  {}
);

// Summarize a specific set of messages
const sampleMessages = [
  { sender: 'user', text: 'Hello, how are you?' },
  { sender: 'assistant', text: 'I am fine, thank you! How can I help you today?' },
  { sender: 'user', text: 'Summarize our conversation.' }
];
const summary = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_summarize",
  { messages: sampleMessages, depth: 1 }
);
```

:::info
This functionality provides chat summarization through the MCP interface.
::: 