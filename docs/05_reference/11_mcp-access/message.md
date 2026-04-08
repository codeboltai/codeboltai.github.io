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

## Tool Parameters

### `message_send`

Sends a message through the message system.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The message content to send |

### `message_process_start`

Starts a message processing operation with a specified process name.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| process | string | Yes | The name/identifier of the process to start |
| message | string | Yes | The message associated with the process |

### `message_process_stop`

Stops a running message processing operation.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| process | string | Yes | The name/identifier of the process to stop |
| message | string | Yes | The message associated with stopping the process |

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