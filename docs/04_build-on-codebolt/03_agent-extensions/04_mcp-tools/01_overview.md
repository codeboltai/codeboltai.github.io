---
sidebar_position: 1
title: MCP Tools Overview
description: How to add MCP tools to a Codebolt app and how to build new MCP servers for agents.
---

# MCP Tools

How to add MCP tools to a Codebolt app and how to build new MCP servers for agents.

"Write a new tool" is usually the second extension you build after "tweak an agent" and it is often cheaper and more reusable than building a whole custom agent.

## In This Section

- [Quickstart: local MCP server](./02_quickstart-local-mcp.md)
- [Tool schema](./03_tool-schema.md)
- [Custom tools](./04_custom-tools.md)
- [Error handling](./06_error-handling.md)
- [Packaging and publishing](./07_packaging.md)

## Adding MCP tools to an app

Tools exposed over the Model Context Protocol are the primary way to add new capabilities to any agent without touching the agent's code. Install an MCP server and every agent in the project can discover and call its tools.

There are two ways to add MCP tools:

### 1. Local project tools

Place your MCP tool in the `.codebolt/tools/` directory with a `codebolttool.yaml` config. Codebolt automatically discovers and registers it:

```
.codebolt/tools/
└── my-tool/
    ├── codebolttool.yaml    # Tool configuration
    ├── index.js             # MCP server entry point
    └── package.json
```

See [Quickstart: Local MCP Server](./02_quickstart-local-mcp.md) for the full walkthrough.

### 2. External MCP servers

Configure external MCP servers in `~/.codebolt/mcp_servers.json`:

```json
{
  "servers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "my-postgres-mcp-server"],
      "env": {
        "DATABASE_URL": "postgresql://..."
      }
    }
  }
}
```

## The three ways to add a tool

Codebolt agents see a single flat namespace of callable tools. Under the hood, a tool can be one of three things:

| Kind | How you build it | When to use |
|---|---|---|
| **Local project tool** | A `.codebolt/tools/{name}/` directory with `codebolttool.yaml` and `index.js` | Project-specific tools, quick iteration |
| **MCP server** | A standalone process speaking the MCP protocol | Portable, community-standard tools |
| **Capability bundle** | A packaged bundle that declares tools + prompts + UI | When you need more than just a tool |

**Default choice: local project tool** for project-specific needs, **MCP server** for reusable/portable tools.

## Anatomy of an MCP tool

An MCP tool is three things:

1. **A name** — what the LLM calls it. Namespaced: `myserver.do_thing`.
2. **A schema** — the typed parameters the LLM provides.
3. **An implementation** — what actually runs when the tool is called.

```ts
// minimal example using @codebolt/codeboltjs
import { startCodeboltMcpServer } from '@codebolt/codeboltjs/mcp-server';

const handle = await startCodeboltMcpServer({
  transport: 'stdio',
  serverName: 'stock-price',
  toolFilter: ['latest'],   // expose only the 'latest' tool
  toolPrefix: 'stocks',     // tools namespaced as stocks_latest
});
```

The description is critical — the LLM decides whether to call your tool based on this string, not on its name. See [Tool schema](./03_tool-schema.md) for the full shape.

## Codebolt MCP APIs

The `codebolt.mcp` module provides APIs for managing and executing MCP tools from your agent code:

```ts
import codebolt from '@codebolt/codeboltjs';

// Execute an MCP tool
const result = await codebolt.mcp.executeTool('serverName', 'toolName', { param: 'value' });

// List tools from specific servers
const tools = await codebolt.mcp.listMcpFromServers(['codebolt']);

// Get tools for mentioned MCPs
const mcpTools = await codebolt.mcp.getTools(mentionedMCPs);

// Discover MCP servers
const enabled = await codebolt.mcp.getEnabledMcpServers();
const local = await codebolt.mcp.getLocalMcpServers();
const available = await codebolt.mcp.getAvailableMcpServers();

// Search and configure
const results = await codebolt.mcp.searchAvailableMcpServers('database');
await codebolt.mcp.configureMcpServer('serverName', config);
```

## Available MCP tools for LLM agents

Agents can manage MCP servers and tools during their reasoning loop:

| Tool | Description |
|---|---|
| `McpListServersTool` | List all enabled MCP servers |
| `McpGetToolsTool` | Get available tools (optionally filtered by server) |
| `McpExecuteToolTool` | Execute an MCP tool by server name, tool name, and params |
| `McpConfigureServerTool` | Configure an MCP server |

## Tool execution flow

When an agent calls a tool, here's what happens:

1. **Agent framework** — the response executor parses the LLM's tool call from its response.
2. **Tool routing** — `codebolt.mcp.executeTool(toolboxName, toolName, params)` sends the request to the server.
3. **CLI service** — the server-side MCP CLI service routes the call based on tool category (browser, git, terminal, fs, etc.).
4. **UI confirmation** — for certain tools, a confirmation prompt is shown to the user before execution.
5. **Execution** — the tool runs and returns the result.
6. **Result** — the result flows back to the agent's reasoning loop as a tool response message.

## Tool injection into agents

The agent framework's `ToolInjectionModifier` automatically injects available tools into the agent's prompt:

- Fetches tools from the `codebolt` built-in server via `codebolt.mcp.listMcpFromServers(['codebolt'])`
- Fetches tools from any mentioned MCP servers via `codebolt.mcp.getTools(mentionedMCPs)`
- Injects tool definitions into the agent's system prompt or as tool objects

## Creating an MCP server with CodeboltJS

You can create MCP servers programmatically using the `startCodeboltMcpServer()` API:

```ts
import { startCodeboltMcpServer } from '@codebolt/codeboltjs/mcp-server';

const handle = await startCodeboltMcpServer({
  transport: 'stdio',           // or 'sse'
  serverName: 'my-server',
  toolFilter: ['tool1', 'tool2'],  // optional: subset of tools to expose
  toolPrefix: 'myprefix',         // optional: prefix for tool names
});
```

See [Quickstart](./02_quickstart-local-mcp.md) for details on both local tool creation and the server API.

## See also

- [Tool schema](./03_tool-schema.md) — designing good tool schemas
- [Custom tools](./04_custom-tools.md) — building custom tools with CodeboltJS
- [Error handling](./06_error-handling.md) — making tools recoverable
- [Packaging](./07_packaging.md) — distributing MCP servers
