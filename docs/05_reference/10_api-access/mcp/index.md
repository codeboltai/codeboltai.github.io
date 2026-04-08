---
cbapicategory:
  - name: getEnabledMCPServers
    link: /docs/api/apiaccess/mcp/getEnabledMCPServers
    description: Gets the list of currently enabled MCP servers.
  - name: getLocalMCPServers
    link: /docs/api/apiaccess/mcp/getLocalMCPServers
    description: Gets the list of locally available MCP servers.
  - name: getMentionedMCPServers
    link: /docs/api/apiaccess/mcp/getMentionedMCPServers
    description: Gets MCP servers mentioned in a user message.
  - name: searchAvailableMCPServers
    link: /docs/api/apiaccess/mcp/searchAvailableMCPServers
    description: Searches for available MCP servers matching a query.
  - name: listMcpFromServers
    link: /docs/api/apiaccess/mcp/listMcpFromServers
    description: Lists all tools from specified MCP servers.
  - name: configureMCPServer
    link: /docs/api/apiaccess/mcp/configureMCPServer
    description: Configures a specific MCP server with provided configuration.
  - name: getTools
    link: /docs/api/apiaccess/mcp/getTools
    description: Gets detailed information about specific tools.
  - name: executeTool
    link: /docs/api/apiaccess/mcp/executeTool
    description: Executes a specific tool with provided parameters.
  - name: getMcpTools
    link: /docs/api/apiaccess/mcp/getMcpTools
    description: Gets MCP tools from specified servers.
  - name: getMcpList
    link: /docs/api/apiaccess/mcp/getMcpList
    description: Gets the list of available MCP servers.
  - name: getAllMcpTools
    link: /docs/api/apiaccess/mcp/getAllMcpTools
    description: Gets all tools from all enabled MCP servers.
  - name: getEnabledMcps
    link: /docs/api/apiaccess/mcp/getEnabledMcps
    description: Gets the list of enabled MCP servers.
  - name: configureMcpTool
    link: /docs/api/apiaccess/mcp/configureMcpTool
    description: Configures a specific MCP tool with provided configuration.
---

# MCP API

The MCP (Model Context Protocol) API provides comprehensive access to MCP servers and tools, enabling you to discover, configure, and execute tools across multiple servers.

## Overview

The MCP module enables you to:
- **Discover Servers**: Find available and enabled MCP servers
- **Manage Tools**: List, configure, and execute tools
- **Search**: Search for servers and tools by query
- **Configure**: Set up servers and tools with custom configurations

## Quick Start Example

```js
// Get enabled MCP servers
const enabledServers = await codebolt.mcp.getEnabledMCPServers();
console.log('Enabled servers:', enabledServers);

// Get all tools from enabled servers
const allTools = await codebolt.mcp.getAllMcpTools();
console.log('Available tools:', allTools);

// Execute a tool
const result = await codebolt.mcp.executeTool(
  'server-name',
  'tool-name',
  { param1: 'value1' }
);
console.log('Execution result:', result);
```

## Common Use Cases

### Tool Discovery
Discover and explore available tools:

```js
async function discoverTools() {
  // Get list of all MCP servers
  const servers = await codebolt.mcp.getMcpList();

  // Get tools from specific servers
  const tools = await codebolt.mcp.getMcpTools(['server1', 'server2']);

  return { servers, tools };
}
```

### Tool Execution
Execute tools with parameters:

```js
async function runTool(server, tool, params) {
  const result = await codebolt.mcp.executeTool(server, tool, params);
  return result;
}
```

## Response Structure

MCP API functions return typed responses:

**Server Discovery:**
- [`GetEnabledMCPSResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetEnabledMCPSResponse): List of enabled servers
- [`GetMcpListResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetMcpListResponse): List of all available servers
- [`GetLocalToolBoxesResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetLocalToolBoxesResponse): Local server information

**Tool Operations:**
- [`GetAllMCPToolsResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetAllMCPToolsResponse): All tools from enabled servers
- [`ExecuteToolResponse`](/docs/api/11_doc-type-ref/types/interfaces/ExecuteToolResponse): Tool execution results
- [`GetToolsResponse`](/docs/api/11_doc-type-ref/types/interfaces/GetToolsResponse): Detailed tool information

<CBAPICategory />
