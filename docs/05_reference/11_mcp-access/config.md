---
title: Config MCP
sidebar_label: codebolt.config
sidebar_position: 22
---

# codebolt.config

Configuration management for MCP servers.

## Available Tools

- `mcp_configure_server` - Configure MCP server settings

## Tool Parameters

### `mcp_configure_server`

Configures an MCP (Model Context Protocol) server with the provided configuration object. Use this to update server settings, credentials, or other configuration options.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| serverName | string | Yes | The name of the MCP server to configure |
| config | object | Yes | Configuration object containing the settings to apply to the MCP server |

#### Config Object Properties

The `config` object can contain various settings depending on the server type. Common properties include:

| Property | Type | Description |
|----------|------|-------------|
| command | string | Command to run the server (e.g., "npx") |
| args | array | Array of command arguments |

## Sample Usage

```javascript
// Configure filesystem MCP server
const configResult = await codebolt.tools.executeTool(
  "codebolt.config",
  "mcp_configure_server",
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

:::info
This functionality provides server configuration management through the MCP interface. Currently supports filesystem server configuration.
::: 