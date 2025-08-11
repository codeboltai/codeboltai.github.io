---
title: Debug MCP
sidebar_label: codebolt.debug
sidebar_position: 12
---

# codebolt.debug

Debugging utilities for troubleshooting and monitoring applications.

## Available Tools

- `debug_open_browser` - Open browser for debugging

## Sample Usage

```javascript
// Open browser for debugging
const browserResult = await codebolt.tools.executeTool(
  "codebolt.debug",
  "debug_open_browser",
  { url: "https://example.com", port: 3000 }
);
```

:::info
This functionality provides debugging capabilities through the MCP interface.
::: 