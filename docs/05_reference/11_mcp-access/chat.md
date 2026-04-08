---
title: Chat MCP
sidebar_label: codebolt.chat
sidebar_position: 19
---

# codebolt.chat

Chat interaction, summarization, history, and notification tools.

## Available Tools

### Summarization Tools

- `chat_summarize_all` - Summarize all chat history
- `chat_summarize` - Summarize a specific set of messages

### Communication Tools

- `chat_notify` - Sends a notification event to the server with a specific type (debug, git, planner, browser, editor, terminal, preview)
- `chat_wait_reply` - Waits for a reply to a sent message and returns the user's response

### History Tools

- `chat_get_history` - Retrieves the chat history for a specified thread

### Control Tools

- `chat_stop_process` - Stops the ongoing process by sending a stop signal to the server

### Interaction Tools

- `chat_send` - Sends a message through the WebSocket connection
- `chat_confirm` - Sends a confirmation request to the user with customizable buttons
- `chat_ask` - Asks a question to the user with customizable response options

## Tool Parameters

### `chat_get_history`

Retrieves the chat history for a specified thread.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| threadId | string | Yes | The unique identifier of the thread to retrieve chat history for |

### `chat_send`

Sends a message through the WebSocket connection.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The message to send |
| payload | object | No | Optional additional payload data to include with the message |

### `chat_wait_reply`

Waits for a reply to a sent message and returns the user's response.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The message for which a reply is expected |

### `chat_confirm`

Sends a confirmation request to the user with customizable buttons.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The confirmation message to display to the user |
| buttons | array | No | Optional array of custom button labels for the confirmation dialog |
| withFeedback | boolean | No | Whether to include a feedback option in the confirmation dialog |

### `chat_ask`

Asks a question to the user with customizable response options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| question | string | Yes | The question to ask the user |
| buttons | array | No | Optional array of custom button labels for response options |
| withFeedback | boolean | No | Whether to include a feedback option with the question |

### `chat_notify`

Sends a notification event to the server with a specific type.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| message | string | Yes | The notification message to send |
| type | string | Yes | The type of notification: 'debug', 'git', 'planner', 'browser', 'editor', 'terminal', or 'preview' |

### `chat_stop_process`

Stops the ongoing process by sending a stop signal to the server.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

## Sample Usage

### Summarizing Chat Messages

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

### Sending Notifications

```javascript
// Send a debug notification
const notification = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_notify",
  {
    message: "Debugging authentication module",
    type: "debug"
  }
);

// Send a git notification
const gitNotification = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_notify",
  {
    message: "Committed changes to feature branch",
    type: "git"
  }
);
```

### Managing Chat History

```javascript
// Get chat history for a thread
const history = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_get_history",
  { threadId: "thread-12345" }
);
```

### Waiting for User Reply

```javascript
// Wait for a reply to a message
const reply = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_wait_reply",
  { message: "Please confirm the changes" }
);
```

### Stopping a Process

```javascript
// Stop the ongoing process
const stopped = await codebolt.tools.executeTool(
  "codebolt.chat",
  "chat_stop_process",
  {}
);
```

:::info
The chat tools provide comprehensive interaction capabilities. Notification types include: `debug` for debugging messages, `git` for version control events, `planner` for planning updates, `browser` for browser events, `editor` for editor events, `terminal` for terminal output, and `preview` for preview events.
::: 