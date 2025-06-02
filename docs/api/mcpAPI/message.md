---
title: Message MCP
sidebar_label: codebolt.message
sidebar_position: 20
---

# codebolt.message

Message processing and communication system for handling inter-agent and user communication.

## Available Tools

- `message_send` - Send a message
- `ask_followup_question` - Ask a follow-up question
- `message_process_started` - Mark message processing as started
- `message_process_stopped` - Mark message processing as stopped

## Sample Usage

```javascript
// Send a message
const sendResult = await codeboltMCP.executeTool(
  "codebolt.message",
  "message_send",
  { 
    recipient: "agent-123",
    content: "Please analyze the code in src/utils.js",
    type: "task_request",
    priority: "high"
  }
);

// Ask a follow-up question
const questionResult = await codeboltMCP.executeTool(
  "codebolt.message",
  "ask_followup_question",
  { 
    conversationId: "conv-456",
    question: "What specific error handling should be implemented?",
    context: {
      previousMessage: "msg-789",
      relatedFiles: ["src/error-handler.js"]
    }
  }
);

// Mark message processing as started
const startedResult = await codeboltMCP.executeTool(
  "codebolt.message",
  "message_process_started",
  { 
    messageId: "msg-123",
    processorId: "agent-456",
    estimatedDuration: 30000
  }
);

// Mark message processing as stopped
const stoppedResult = await codeboltMCP.executeTool(
  "codebolt.message",
  "message_process_stopped",
  { 
    messageId: "msg-123",
    processorId: "agent-456",
    result: "completed",
    output: "Analysis completed successfully"
  }
);

// Send broadcast message
const broadcastResult = await codeboltMCP.executeTool(
  "codebolt.message",
  "message_send",
  { 
    recipients: ["agent-123", "agent-456"],
    content: "System maintenance scheduled for tonight",
    type: "broadcast",
    broadcast: true
  }
);
```

:::info
This functionality provides a comprehensive messaging system for agent coordination and user communication.
::: 