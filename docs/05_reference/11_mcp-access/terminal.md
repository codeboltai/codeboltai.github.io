---
title: Terminal MCP
sidebar_label: codebolt.terminal
sidebar_position: 16
---

# codebolt.terminal

Terminal command execution operations.

## Available Tools

- `execute_command` - Execute a terminal command

## Tool Parameters

### `execute_command`

Execute a CLI command on the system. Use this when you need to perform system operations or run specific commands to accomplish any step in the user's task. You must tailor your command to the user's system and provide a clear explanation of what the command does. Prefer to execute complex CLI commands over creating executable scripts, as they are more flexible and easier to run. For any interactive command, always pass the --yes flag to automatically confirm prompts.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| command | string | Yes | The CLI command to execute. This should be valid for the current operating system. Ensure the command is properly formatted and does not contain any harmful instructions. |
| explanation | string | No | One sentence explanation as to why this tool is being used, and how it contributes to the goal. Use correct tenses: I'll or Let me for future actions, past tense for past actions, present tense for current actions. |

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