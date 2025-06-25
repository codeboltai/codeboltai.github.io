---
title: Config MCP
sidebar_label: codebolt.config
sidebar_position: 22
---

# codebolt.config

Configuration management for MCP servers.

## Available Tools

- `configure_mcp` - Configure MCP server settings

## Sample Usage

```javascript
// Configure filesystem MCP server
const configResult = await codebolt.tools.executeTool(
  "codebolt.config",
  "configure_mcp",
  {
    serverName: "filesystem",
    config: {
      command: "npx",
      args: [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/path/to/other/allowed/dir"
      ]
    }
  }
);
```

## Parameters

### configure_mcp
- `serverName` (required) - Name of the server to configure (e.g., "filesystem")
- `config` (required) - Configuration object containing server settings
  - `command` - Command to run the server (e.g., "npx")
  - `args` - Array of command arguments
    - "-y" - Non-interactive mode for npx
    - Package name (e.g., "@modelcontextprotocol/server-filesystem")
    - Additional arguments like allowed directories

:::info
This functionality provides server configuration management through the MCP interface. Currently supports filesystem server configuration.
::: 