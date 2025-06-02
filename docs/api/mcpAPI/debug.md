---
title: Debug MCP
sidebar_label: codebolt.debug
sidebar_position: 12
---

# codebolt.debug

Debugging and logging utilities for troubleshooting and monitoring applications.

## Available Tools

- `debug_log` - Log debug messages
- `debug_info` - Log informational messages
- `debug_error` - Log error messages
- `debug_open_browser` - Open browser for debugging

## Sample Usage

```javascript
// Log debug message
const logResult = await codeboltMCP.executeTool(
  "codebolt.debug",
  "debug_log",
  { 
    message: "Processing user request",
    level: "debug",
    context: { userId: "123", action: "login" }
  }
);

// Log info message
const infoResult = await codeboltMCP.executeTool(
  "codebolt.debug",
  "debug_info",
  { 
    message: "Service started successfully",
    timestamp: Date.now()
  }
);

// Log error message
const errorResult = await codeboltMCP.executeTool(
  "codebolt.debug",
  "debug_error",
  { 
    message: "Database connection failed",
    error: "Connection timeout",
    stack: "Error stack trace..."
  }
);

// Open browser for debugging
const browserResult = await codeboltMCP.executeTool(
  "codebolt.debug",
  "debug_open_browser",
  { 
    url: "http://localhost:3000/debug",
    devTools: true
  }
);
```

:::info
This functionality is similar to the [debug API](/docs/api/apiaccess/debug) and provides debugging capabilities through MCP interface.
::: 