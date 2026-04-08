---
title: Debug MCP
sidebar_label: codebolt.debug
sidebar_position: 12
---

# codebolt.debug

Debugging utilities for troubleshooting and monitoring applications.

## Available Tools

- `debug_open_browser` - Open browser for debugging
- `debug_add_log` - Add a debug log message

## Tool Parameters

### `debug_open_browser`

Requests to open a debug browser at the specified URL and port.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| url | string | Yes | The URL where the debug browser should be opened |
| port | number | Yes | The port on which the debug browser will listen |

---

### `debug_add_log`

Sends a log message to the debug system.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| log | string | Yes | The log message to send |
| type | string | Yes | The type of log message: "info", "error", or "warning" |

## Sample Usage

```javascript
// Open browser for debugging
const browserResult = await codebolt.tools.executeTool(
  "codebolt.debug",
  "debug_open_browser",
  { url: "https://example.com", port: 3000 }
);

// Add a debug log
const logResult = await codebolt.tools.executeTool(
  "codebolt.debug",
  "debug_add_log",
  { log: "Debug message here", type: "info" }
);
```

:::info
This functionality provides debugging capabilities through the MCP interface.
::: 