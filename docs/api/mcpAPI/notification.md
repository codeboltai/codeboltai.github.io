---
title: Notification MCP
sidebar_label: codebolt.notification
sidebar_position: 11
---

# codebolt.notification

Notification and messaging system for sending alerts and updates to users.

## Available Tools

- `notification_send` - Send a general notification
- `notification_info` - Send an info notification
- `notification_warning` - Send a warning notification
- `notification_error` - Send an error notification
- `notification_success` - Send a success notification

## Sample Usage

```javascript
// Send a general notification
const sendResult = await codeboltMCP.executeTool(
  "codebolt.notification",
  "notification_send",
  { 
    title: "Task Update",
    message: "Your task has been updated",
    recipient: "user@example.com"
  }
);

// Send an info notification
const infoResult = await codeboltMCP.executeTool(
  "codebolt.notification",
  "notification_info",
  { 
    message: "Process started successfully",
    duration: 5000
  }
);

// Send a warning notification
const warningResult = await codeboltMCP.executeTool(
  "codebolt.notification",
  "notification_warning",
  { 
    message: "Low disk space detected",
    action: "cleanup_required"
  }
);

// Send an error notification
const errorResult = await codeboltMCP.executeTool(
  "codebolt.notification",
  "notification_error",
  { 
    message: "Failed to save file",
    error: "Permission denied"
  }
);

// Send a success notification
const successResult = await codeboltMCP.executeTool(
  "codebolt.notification",
  "notification_success",
  { 
    message: "File uploaded successfully",
    details: "Upload completed in 2.3 seconds"
  }
);
```

:::info
This functionality provides a unified notification system for user alerts and system messages.
::: 