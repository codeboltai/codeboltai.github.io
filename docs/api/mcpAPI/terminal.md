---
title: Terminal MCP
sidebar_label: codebolt.terminal
sidebar_position: 4
---

# codebolt.terminal

Command execution and terminal operations for running system commands and scripts.

## Available Tools

- `execute_command` - Execute terminal commands

## Sample Usage

```javascript
// Execute a simple command
const result = await codeboltMCP.executeTool(
  "codebolt.terminal",
  "execute_command",
  { command: "ls -la" }
);

// Execute command with working directory
const dirResult = await codeboltMCP.executeTool(
  "codebolt.terminal",
  "execute_command",
  { 
    command: "npm install",
    cwd: "/path/to/project"
  }
);

// Execute command with environment variables
const envResult = await codeboltMCP.executeTool(
  "codebolt.terminal",
  "execute_command",
  { 
    command: "node app.js",
    env: { NODE_ENV: "production" }
  }
);
```

:::info
This functionality is similar to the [terminal API](/docs/api/apiaccess/terminal) and provides command execution through MCP interface.
::: 