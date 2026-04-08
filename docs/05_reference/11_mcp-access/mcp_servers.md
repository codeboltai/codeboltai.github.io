---
title: MCP Servers MCP
sidebar_label: codebolt.mcp
sidebar_position: 36
---

# codebolt.mcp

Tools for managing and interacting with Model Context Protocol (MCP) servers and their tools.

## Available Tools

- `mcp_list_servers` - Lists all enabled MCP servers that are currently active
- `mcp_get_tools` - Gets available MCP tools, optionally filtered by server name
- `mcp_execute_tool` - Executes an MCP tool on a specified server with parameters
- `mcp_configure_server` - Configures an MCP server with settings, credentials, or other options

## Tool Parameters

### `mcp_list_servers`

Lists all enabled MCP (Model Context Protocol) servers. Returns information about the currently active MCP servers.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| *(none)* | - | - | This tool takes no parameters |

### `mcp_get_tools`

Gets available MCP tools. Can optionally filter by a specific server name.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| serverName | string | No | Optional: The name of the MCP server to get tools from. If not provided, returns tools from all enabled servers. |

### `mcp_execute_tool`

Executes an MCP tool on a specified server with parameters.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| serverName | string | Yes | The name of the MCP server containing the tool to execute. |
| toolName | string | Yes | The name of the tool to execute on the specified server. |
| params | object | No | Optional: An object containing parameters to pass to the tool. |

### `mcp_configure_server`

Configures an MCP server with the provided configuration object.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| serverName | string | Yes | The name of the MCP server to configure. |
| config | object | Yes | Configuration object containing the settings to apply to the MCP server. |

## Sample Usage

### Listing MCP Servers

```javascript
// List all enabled MCP servers
const servers = await codebolt.tools.executeTool(
  "codebolt.mcp",
  "mcp_list_servers",
  {}
);
```

### Getting Available Tools

```javascript
// Get tools from all enabled servers
const allTools = await codebolt.tools.executeTool(
  "codebolt.mcp",
  "mcp_get_tools",
  {}
);

// Get tools from a specific server
const serverTools = await codebolt.tools.executeTool(
  "codebolt.mcp",
  "mcp_get_tools",
  { serverName: "github-server" }
);
```

### Executing MCP Tools

```javascript
// Execute a tool on an MCP server
const result = await codebolt.tools.executeTool(
  "codebolt.mcp",
  "mcp_execute_tool",
  {
    serverName: "github-server",
    toolName: "create_issue",
    params: {
      repository: "owner/repo",
      title: "Bug Report",
      body: "Description of the issue",
      labels: ["bug"]
    }
  }
);
```

### Configuring MCP Servers

```javascript
// Configure an MCP server
const configured = await codebolt.tools.executeTool(
  "codebolt.mcp",
  "mcp_configure_server",
  {
    serverName: "custom-server",
    config: {
      apiKey: "your-api-key",
      baseUrl: "https://api.example.com",
      timeout: 30000,
      retries: 3
    }
  }
);
```

:::info
MCP (Model Context Protocol) servers extend the capabilities of your agent by providing access to external tools and services. Use `mcp_list_servers` to discover available servers, `mcp_get_tools` to see what tools they provide, and `mcp_execute_tool` to invoke those tools with the appropriate parameters.
:::
