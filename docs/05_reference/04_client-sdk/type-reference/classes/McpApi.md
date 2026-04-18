---
title: McpApi
---

[**@codebolt/client-sdk**](../index)

***

# Class: McpApi

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:11

Provides API methods for managing Model Context Protocol (MCP) servers.

MCP servers extend CodeBolt's capabilities by exposing external tools, resources, and
prompts through a standardized protocol. This API handles the full lifecycle of MCP
servers including discovery, installation, configuration, and tool management.

## Constructors

### Constructor

```ts
new McpApi(http: HttpClient): McpApi;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `http` | [`HttpClient`](HttpClient) |

#### Returns

`McpApi`

## Methods

### browserNavigate()

```ts
browserNavigate(data: McpBrowserNavigateRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:120

Navigates to a URL using the browser MCP server.

Sends a navigation command to the browser automation MCP server, instructing it to
load a specific web page. Requires the browser MCP server to be installed and enabled.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `McpBrowserNavigateRequest` | The navigation request |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the navigation has been initiated

#### Example

```typescript
await client.mcp.browserNavigate({ url: 'https://example.com' });
```

***

### configure()

```ts
configure(data: McpConfigureRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:60

Applies global MCP configuration settings.

Updates the workspace-level MCP settings that affect how all MCP servers are managed,
including default timeout values, transport preferences, and security policies.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `McpConfigureRequest` | The global MCP configuration to apply |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the configuration has been saved

***

### configureServer()

```ts
configureServer(serverName: string, data: McpConfigureServerRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:81

Configures a specific MCP server's settings.

Updates the connection parameters, environment variables, and other settings for a
named MCP server. The server may need to be restarted for changes to take effect.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serverName` | `string` | The name of the MCP server to configure |
| `data` | `McpConfigureServerRequest` | The server-specific configuration to apply |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the server configuration has been saved

#### Example

```typescript
await client.mcp.configureServer('github', {
  env: { GITHUB_TOKEN: 'ghp_...' },
});
```

***

### create()

```ts
create(data: McpCreateRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:234

Creates a new custom MCP server configuration.

Registers a custom MCP server that is not part of the standard catalog. This is useful
for connecting to proprietary or locally developed MCP-compatible services.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `McpCreateRequest` | The custom server creation payload |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the server has been created

#### Example

```typescript
await client.mcp.create({
  name: 'my-custom-mcp',
  command: 'node',
  args: ['./my-mcp-server.js'],
});
```

***

### getAll()

```ts
getAll(): Promise<McpServer[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:28

Retrieves all MCP servers currently registered in the workspace.

Returns every MCP server regardless of its enabled/disabled status, including
connection details, available tools, and current health information.

#### Returns

`Promise`\<`McpServer`[]\>

A promise that resolves to an array of all registered MCP servers

#### Example

```typescript
const servers = await client.mcp.getAll();
const enabled = servers.filter(s => s.enabled);
```

***

### getAvailableAll()

```ts
getAvailableAll(): Promise<McpAvailableServer[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:169

Retrieves all available MCP servers including both marketplace and community servers.

Returns the full unfiltered catalog of MCP servers from all sources. This includes
official, community-contributed, and locally developed servers.

#### Returns

`Promise`\<`McpAvailableServer`[]\>

A promise that resolves to an array of all available MCP servers

***

### getAvailableDetail()

```ts
getAvailableDetail(mcpId: string): Promise<McpAvailableServer>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:157

Retrieves detailed information about a specific available MCP server.

Returns comprehensive details about an MCP server from the catalog, including its
description, supported tools, configuration schema, and installation requirements.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `mcpId` | `string` | The identifier of the available MCP server to inspect |

#### Returns

`Promise`\<`McpAvailableServer`\>

A promise that resolves to the detailed MCP server information

#### Example

```typescript
const detail = await client.mcp.getAvailableDetail('mcp-github');
console.log(`Description: ${detail.description}`);
```

***

### getAvailableList()

```ts
getAvailableList(): Promise<McpAvailableServer[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:138

Retrieves the catalog of MCP servers available for installation.

Returns a curated list of MCP servers that can be installed from the marketplace or
registry. Use this to discover new capabilities to add to the workspace.

#### Returns

`Promise`\<`McpAvailableServer`[]\>

A promise that resolves to an array of available MCP servers

#### Example

```typescript
const available = await client.mcp.getAvailableList();
console.log(`${available.length} servers available for installation`);
```

***

### getByName()

```ts
getByName(serverName: string): Promise<McpServer>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:47

Retrieves a specific MCP server by its registered name.

Returns the full configuration and status of a single MCP server, including its
tool definitions, resource list, and connection parameters.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serverName` | `string` | The registered name of the MCP server to retrieve |

#### Returns

`Promise`\<`McpServer`\>

A promise that resolves to the MCP server details

#### Example

```typescript
const server = await client.mcp.getByName('filesystem');
console.log(`Tools: ${server.tools?.length}`);
```

***

### getConfiguredMcps()

```ts
getConfiguredMcps(): Promise<McpServer[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:181

Retrieves all MCP servers that have been configured in the workspace.

Returns only servers that have been explicitly set up (installed and configured),
as opposed to all available servers in the catalog.

#### Returns

`Promise`\<`McpServer`[]\>

A promise that resolves to an array of configured MCP servers

***

### getLocalMcpList()

```ts
getLocalMcpList(): Promise<McpServer[]>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:246

Retrieves the list of locally defined MCP servers.

Returns MCP servers that are defined in the local workspace configuration rather than
installed from the marketplace. These are typically custom or development servers.

#### Returns

`Promise`\<`McpServer`[]\>

A promise that resolves to an array of local MCP servers

***

### getMcpConfigPath()

```ts
getMcpConfigPath(): Promise<McpConfigPath>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:264

Retrieves the filesystem path to the MCP configuration file.

Returns the absolute path where the MCP configuration is stored on disk. Useful for
manual editing or backup of MCP server configurations.

#### Returns

`Promise`\<`McpConfigPath`\>

A promise that resolves to the MCP configuration file path

#### Example

```typescript
const { path } = await client.mcp.getMcpConfigPath();
console.log(`MCP config at: ${path}`);
```

***

### install()

```ts
install(data: McpInstallRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:212

Installs an MCP server from the available catalog.

Downloads and registers an MCP server, making it available for configuration and use.
The server may require additional configuration (e.g., API keys) before it can be started.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `McpInstallRequest` | The installation request specifying which server to install |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the installation has completed

#### Example

```typescript
await client.mcp.install({ serverId: 'mcp-github' });
```

***

### toggle()

```ts
toggle(data: McpToggleRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:101

Toggles an MCP server between enabled and disabled states.

Enables or disables a registered MCP server. Disabled servers will not be started
or connected to, and their tools will not be available to agents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `McpToggleRequest` | The toggle request specifying the server and desired state |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the toggle operation has completed

#### Example

```typescript
await client.mcp.toggle({ serverName: 'browser', enabled: true });
```

***

### updateTools()

```ts
updateTools(data: McpUpdateToolsRequest): Promise<unknown>;
```

Defined in: CodeBolt/packages/clientsdk/src/api/mcp.api.ts:194

Updates the tool configurations for MCP servers.

Modifies which tools are exposed or hidden from agents, and updates tool-specific
settings like descriptions, parameter defaults, or access permissions.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | `McpUpdateToolsRequest` | The tool update configuration |

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the tool configurations have been updated
