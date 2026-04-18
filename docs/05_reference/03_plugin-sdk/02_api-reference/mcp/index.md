---
title: Mcp API
---

# Mcp API

The `mcp` module of the `@codebolt/plugin-sdk`.

```typescript
import plugin from '@codebolt/plugin-sdk';
```

## Quick Reference

| Method | Description |
|---|---|
| [`configureMCPServer`](./configureMCPServer) | Configures a specific toolbox with provided configuration. |
| [`configureMcpTool`](./configureMcpTool) | Configures a specific MCP tool with provided configuration. |
| [`executeTool`](./executeTool) | Executes a specific tool with provided parameters. |
| [`getAllMcpTools`](./getAllMcpTools) | Gets all tools from all enabled MCP servers. |
| [`getEnabledMcps`](./getEnabledMcps) | Gets the list of enabled MCP servers. |
| [`getEnabledMCPServers`](./getEnabledMCPServers) | Gets the list of currently enabled toolboxes. |
| [`getLocalMCPServers`](./getLocalMCPServers) | Gets the list of locally available toolboxes. |
| [`getMcpList`](./getMcpList) | Gets the list of available MCP servers. |
| [`getMcpTools`](./getMcpTools) | Gets MCP tools from the specified servers. |
| [`getMentionedMCPServers`](./getMentionedMCPServers) | Gets toolboxes mentioned in a user message. |
| [`getTools`](./getTools) | Gets detailed information about specific tools. |
| [`listMcpFromServers`](./listMcpFromServers) | Lists all tools from the specified toolboxes. |
| [`searchAvailableMCPServers`](./searchAvailableMCPServers) | Searches for available toolboxes matching a query. |

## Methods

---

### `configureMCPServer`

```typescript
plugin.mcp.configureMCPServer(name: string, config: MCPConfiguration): Promise<ConfigureToolBoxResponse>
```

Configures a specific toolbox with provided configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | `string` | Yes |  |
| `config` | `MCPConfiguration` | Yes |  |

**Returns:** `Promise<ConfigureToolBoxResponse>`

[Full reference →](./configureMCPServer)

---

### `configureMcpTool`

```typescript
plugin.mcp.configureMcpTool(mcpName: string, toolName: string, config: Record<string, unknown>): Promise<ConfigureMCPToolResponse>
```

Configures a specific MCP tool with provided configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `mcpName` | `string` | Yes |  |
| `toolName` | `string` | Yes |  |
| `config` | `Record<string, unknown>` | Yes |  |

**Returns:** `Promise<ConfigureMCPToolResponse>`

[Full reference →](./configureMcpTool)

---

### `executeTool`

```typescript
plugin.mcp.executeTool(toolbox: string, toolName: string, params: ToolParameters): Promise<ExecuteToolResponse>
```

Executes a specific tool with provided parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `toolbox` | `string` | Yes |  |
| `toolName` | `string` | Yes |  |
| `params` | `ToolParameters` | Yes |  |

**Returns:** `Promise<ExecuteToolResponse>`

[Full reference →](./executeTool)

---

### `getAllMcpTools`

```typescript
plugin.mcp.getAllMcpTools(): Promise<GetAllMCPToolsResponse>
```

Gets all tools from all enabled MCP servers.

_No parameters._

**Returns:** `Promise<GetAllMCPToolsResponse>`

[Full reference →](./getAllMcpTools)

---

### `getEnabledMcps`

```typescript
plugin.mcp.getEnabledMcps(): Promise<GetEnabledMCPSResponse>
```

Gets the list of enabled MCP servers.

_No parameters._

**Returns:** `Promise<GetEnabledMCPSResponse>`

[Full reference →](./getEnabledMcps)

---

### `getEnabledMCPServers`

```typescript
plugin.mcp.getEnabledMCPServers(): Promise<GetEnabledToolBoxesResponse>
```

Gets the list of currently enabled toolboxes.

_No parameters._

**Returns:** `Promise<GetEnabledToolBoxesResponse>`

[Full reference →](./getEnabledMCPServers)

---

### `getLocalMCPServers`

```typescript
plugin.mcp.getLocalMCPServers(): Promise<GetLocalToolBoxesResponse>
```

Gets the list of locally available toolboxes.

_No parameters._

**Returns:** `Promise<GetLocalToolBoxesResponse>`

[Full reference →](./getLocalMCPServers)

---

### `getMcpList`

```typescript
plugin.mcp.getMcpList(): Promise<GetMcpListResponse>
```

Gets the list of available MCP servers.

_No parameters._

**Returns:** `Promise<GetMcpListResponse>`

[Full reference →](./getMcpList)

---

### `getMcpTools`

```typescript
plugin.mcp.getMcpTools(mcpNames?: string[]): Promise<GetMcpToolsResponse>
```

Gets MCP tools from the specified servers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `mcpNames` | `string[]` | No |  |

**Returns:** `Promise<GetMcpToolsResponse>`

[Full reference →](./getMcpTools)

---

### `getMentionedMCPServers`

```typescript
plugin.mcp.getMentionedMCPServers(userMessage: MCPUserMessage): Promise<GetAvailableToolBoxesResponse>
```

Gets toolboxes mentioned in a user message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `userMessage` | `MCPUserMessage` | Yes |  |

**Returns:** `Promise<GetAvailableToolBoxesResponse>`

[Full reference →](./getMentionedMCPServers)

---

### `getTools`

```typescript
plugin.mcp.getTools(toolRequests: object[]): Promise<GetToolsResponse>
```

Gets detailed information about specific tools.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `toolRequests` | `object[]` | Yes |  |

**Returns:** `Promise<GetToolsResponse>`

[Full reference →](./getTools)

---

### `listMcpFromServers`

```typescript
plugin.mcp.listMcpFromServers(toolBoxes: string[]): Promise<ListToolsFromToolBoxesResponse>
```

Lists all tools from the specified toolboxes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `toolBoxes` | `string[]` | Yes |  |

**Returns:** `Promise<ListToolsFromToolBoxesResponse>`

[Full reference →](./listMcpFromServers)

---

### `searchAvailableMCPServers`

```typescript
plugin.mcp.searchAvailableMCPServers(query: string): Promise<SearchAvailableToolBoxesResponse>
```

Searches for available toolboxes matching a query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `query` | `string` | Yes |  |

**Returns:** `Promise<SearchAvailableToolBoxesResponse>`

[Full reference →](./searchAvailableMCPServers)

