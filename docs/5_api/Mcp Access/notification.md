---
title: Notification MCP
sidebar_label: codebolt.notification
sidebar_position: 12
---

# codebolt.notification

Notification system for sending event-based notifications.

## Available Tools

- `notification_send` - Send a notification with a specific event type

## Event Types

The following event types are supported:
- `debug` - Debug notifications
- `git` - Git operation notifications
- `planner` - Planner notifications
- `browser` - Browser operation notifications
- `editor` - Editor notifications
- `terminal` - Terminal notifications
- `console` - Console notifications
- `preview` - Preview notifications

## Sample Usage

```javascript
// Send a notification with event type
const result = await codebolt.tools.executeTool(
  "codebolt.notification",
  "notification_send",
  {
    message: "Test notification for debug",
    eventType: "debug"
  }
);

// Send a notification for git operations
const gitResult = await codebolt.tools.executeTool(
  "codebolt.notification",
  "notification_send",
  {
    message: "Test notification for git",
    eventType: "git"
  }
);

// Send a notification for browser operations
const browserResult = await codebolt.tools.executeTool(
  "codebolt.notification",
  "notification_send",
  {
    message: "Test notification for browser",
    eventType: "browser"
  }
);
```

:::info
This functionality provides event-based notifications through the MCP interface.
::: 