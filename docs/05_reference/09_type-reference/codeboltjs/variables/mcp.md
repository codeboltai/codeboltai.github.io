---
title: mcp
---

[**@codebolt/codeboltjs**](../index)

***

# Variable: mcp

```ts
const mcp: {
  configureMCPServer: (name: string, config: MCPConfiguration) => Promise<ConfigureToolBoxResponse>;
  configureMcpTool: (mcpName: string, toolName: string, config: Record<string, unknown>) => Promise<ConfigureMCPToolResponse>;
  executeTool: (toolbox: string, toolName: string, params: ToolParameters) => Promise<ExecuteToolResponse>;
  getAllMcpTools: () => Promise<GetAllMCPToolsResponse>;
  getEnabledMcps: () => Promise<GetEnabledMCPSResponse>;
  getEnabledMCPServers: () => Promise<GetEnabledToolBoxesResponse>;
  getLocalMCPServers: () => Promise<GetLocalToolBoxesResponse>;
  getMcpList: () => Promise<GetMcpListResponse>;
  getMcpTools: (mcpNames?: string[]) => Promise<GetMcpToolsResponse>;
  getMentionedMCPServers: (userMessage: MCPUserMessage) => Promise<GetAvailableToolBoxesResponse>;
  getTools: (toolRequests: {
     toolbox: string;
     toolName: string;
  }[]) => Promise<GetToolsResponse>;
  listMcpFromServers: (toolBoxes: string[]) => Promise<ListToolsFromToolBoxesResponse>;
  searchAvailableMCPServers: (query: string) => Promise<SearchAvailableToolBoxesResponse>;
};
```

Defined in: packages/codeboltjs/src/modules/mcp.ts:65

Object containing methods for interacting with Codebolt MCP (Model Context Protocol) tools.
Provides functionality to discover, list, and execute tools.

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="configuremcpserver"></a> `configureMCPServer()` | (`name`: `string`, `config`: `MCPConfiguration`) => `Promise`\<`ConfigureToolBoxResponse`\> | Configures a specific toolbox with provided configuration. | [packages/codeboltjs/src/modules/mcp.ts:180](packages/codeboltjs/src/modules/mcp.ts#L180) |
| <a id="configuremcptool"></a> `configureMcpTool()` | (`mcpName`: `string`, `toolName`: `string`, `config`: `Record`\<`string`, `unknown`\>) => `Promise`\<`ConfigureMCPToolResponse`\> | Configures a specific MCP tool with provided configuration. | [packages/codeboltjs/src/modules/mcp.ts:399](packages/codeboltjs/src/modules/mcp.ts#L399) |
| <a id="executetool"></a> `executeTool()` | (`toolbox`: `string`, `toolName`: `string`, `params`: `ToolParameters`) => `Promise`\<`ExecuteToolResponse`\> | Executes a specific tool with provided parameters. | [packages/codeboltjs/src/modules/mcp.ts:249](packages/codeboltjs/src/modules/mcp.ts#L249) |
| <a id="getallmcptools"></a> `getAllMcpTools()` | () => `Promise`\<`GetAllMCPToolsResponse`\> | Gets all tools from all enabled MCP servers. | [packages/codeboltjs/src/modules/mcp.ts:358](packages/codeboltjs/src/modules/mcp.ts#L358) |
| <a id="getenabledmcps"></a> `getEnabledMcps()` | () => `Promise`\<`GetEnabledMCPSResponse`\> | Gets the list of enabled MCP servers. | [packages/codeboltjs/src/modules/mcp.ts:381](packages/codeboltjs/src/modules/mcp.ts#L381) |
| <a id="getenabledmcpservers"></a> `getEnabledMCPServers()` | () => `Promise`\<`GetEnabledToolBoxesResponse`\> | Gets the list of currently enabled toolboxes. | [packages/codeboltjs/src/modules/mcp.ts:71](packages/codeboltjs/src/modules/mcp.ts#L71) |
| <a id="getlocalmcpservers"></a> `getLocalMCPServers()` | () => `Promise`\<`GetLocalToolBoxesResponse`\> | Gets the list of locally available toolboxes. | [packages/codeboltjs/src/modules/mcp.ts:86](packages/codeboltjs/src/modules/mcp.ts#L86) |
| <a id="getmcplist"></a> `getMcpList()` | () => `Promise`\<`GetMcpListResponse`\> | Gets the list of available MCP servers. | [packages/codeboltjs/src/modules/mcp.ts:343](packages/codeboltjs/src/modules/mcp.ts#L343) |
| <a id="getmcptools"></a> `getMcpTools()` | (`mcpNames?`: `string`[]) => `Promise`\<`GetMcpToolsResponse`\> | Gets MCP tools from the specified servers. | [packages/codeboltjs/src/modules/mcp.ts:308](packages/codeboltjs/src/modules/mcp.ts#L308) |
| <a id="getmentionedmcpservers"></a> `getMentionedMCPServers()` | (`userMessage`: `MCPUserMessage`) => `Promise`\<`GetAvailableToolBoxesResponse`\> | Gets toolboxes mentioned in a user message. | [packages/codeboltjs/src/modules/mcp.ts:102](packages/codeboltjs/src/modules/mcp.ts#L102) |
| <a id="gettools"></a> `getTools()` | (`toolRequests`: \{ `toolbox`: `string`; `toolName`: `string`; \}[]) => `Promise`\<`GetToolsResponse`\> | Gets detailed information about specific tools. | [packages/codeboltjs/src/modules/mcp.ts:198](packages/codeboltjs/src/modules/mcp.ts#L198) |
| <a id="listmcpfromservers"></a> `listMcpFromServers()` | (`toolBoxes`: `string`[]) => `Promise`\<`ListToolsFromToolBoxesResponse`\> | Lists all tools from the specified toolboxes. | [packages/codeboltjs/src/modules/mcp.ts:135](packages/codeboltjs/src/modules/mcp.ts#L135) |
| <a id="searchavailablemcpservers"></a> `searchAvailableMCPServers()` | (`query`: `string`) => `Promise`\<`SearchAvailableToolBoxesResponse`\> | Searches for available toolboxes matching a query. | [packages/codeboltjs/src/modules/mcp.ts:118](packages/codeboltjs/src/modules/mcp.ts#L118) |
