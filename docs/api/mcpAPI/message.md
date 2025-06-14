---
title: Message MCP
sidebar_label: codebolt.message
sidebar_position: 11
---

# codebolt.message

Message handling and process management operations.

## Available Tools

- `message_send` - Send a message
- `message_process_start` - Start a message processing
- `message_process_stop` - Stop a message processing

## Sample Usage

```javascript
// Send a message
const sendResult = await codebolt.tools.executeTool(
  "codebolt.message",
  "message_send",
  { message: "Hello MCP" }
);

// Start message processing
const startResult = await codebolt.tools.executeTool(
  "codebolt.message",
  "message_process_start",
  { 
    process: "testProcess",
    message: "Hello MCP"
  }
);

// Stop message processing
const stopResult = await codebolt.tools.executeTool(
  "codebolt.message",
  "message_process_stop",
  { 
    process: "testProcess",
    message: "Hello MCP"
  }
);
```

:::info
This functionality provides message handling and process management through the MCP interface.
::: 