---
title: Terminal MCP
sidebar_label: codebolt.terminal
sidebar_position: 16
---

# codebolt.terminal

Terminal command execution operations.

## Available Tools

- `terminal_execute_command` - Execute a terminal command

## Sample Usage

```javascript
// Execute a terminal command
const execResult = await codebolt.tools.executeTool(
  "codebolt.terminal",
  "terminal_execute_command",
  { command: "echo \"Hello from MCP\"" }
);
```

:::info
This functionality provides terminal command execution through the MCP interface.
::: 