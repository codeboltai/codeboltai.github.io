# Quickstart — Local MCP Server

> Create a local MCP tool, register it with Codebolt, and have an agent call it. This covers two approaches:

# Quickstart: Build a Local MCP Tool

Create a local MCP tool, register it with Codebolt, and have an agent call it. This covers two approaches:

1. **Local project tool** — place in `.codebolt/tools/` with a YAML config
2. **MCP server via CodeboltJS** — use `startCodeboltMcpServer()` API

**You'll need:** Codebolt installed and running, Node.js 18+, a project open.

---

## Approach 1: Local Project Tool

### Step 1 — Create the tool directory

```bash
cd /path/to/your/project
mkdir -p .codebolt/tools/greet
cd .codebolt/tools/greet
npm init -y
npm install @codebolt/codeboltjs
```

### Step 2 — Create `codebolttool.yaml`

This is the configuration file that Codebolt uses to discover and register your tool:

```yaml
# .codebolt/tools/greet/codebolttool.yaml
name: Greeting Tool
uniqueName: greet
version: 1.0.0
description: A simple greeting tool that returns friendly messages
# env_required:
#   - env_name: API_KEY
#     env_description: API key for the greeting service
```

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Display name of the tool |
| `uniqueName` | Yes | Unique identifier — used as the MCP server name |
| `version` | Yes | Semver version string |
| `description` | Yes | What the tool does |
| `env_required` | No | Array of required environment variables (`env_name`, `env_description`) |

### Step 3 — Write the MCP server

Create `index.js` — this is the entry point that Codebolt runs as an MCP server via `node index.js`:

```js

// Create the MCP server with Codebolt's built-in tool registry
const server = createCodeboltMcpServer({
  serverName: 'greet',
  serverVersion: '1.0.0',
  toolFilter: ['hello'],        // expose only the 'hello' tool
  toolPrefix: 'greet',          // tools namespaced as greet_hello
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

Alternatively, use `startCodeboltMcpServer()` for a higher-level API that handles transport setup automatically:

```js

const handle = await startCodeboltMcpServer({
  transport: 'stdio',
  serverName: 'greet',
  toolFilter: ['hello'],
  toolPrefix: 'greet',
});
```

### Step 4 — How discovery works

Codebolt automatically discovers your tool:

1. **toolService** scans `.codebolt/tools/` for subdirectories containing `codebolttool.yaml`
2. Parses the YAML and generates an MCP server config:
   ```json
   {
     "greet": {
       "command": "node",
       "args": ["/path/to/project/.codebolt/tools/greet/index.js"]
     }
   }
   ```
3. Registers the server in `mcp_servers.json`
4. **mcpService** connects via `StdioClientTransport` and lists the tools
5. Tools appear in the agent's tool namespace

### Step 5 — Use from an agent

Your agent can now call the tool:

```ts

// Execute the tool directly
const result = await codebolt.mcp.executeTool('greet', 'hello', { name: 'Alice' });

// Or list available tools from the server
const tools = await codebolt.mcp.listMcpFromServers(['greet']);
```

When an LLM agent encounters the tool, it will see it in its tool list and can call it during its reasoning loop.

### Step 6 — Test from chat

Open a chat tab with an agent. Send: `Please greet me. My name is Alice.`

The agent will discover and call the `greet.hello` tool, returning the greeting.

---

## Approach 2: MCP Server via CodeboltJS API

Use `startCodeboltMcpServer()` to create an MCP server programmatically. This exposes Codebolt's built-in tools (or a filtered subset) as an MCP server.

### Basic example

```ts

const handle = await startCodeboltMcpServer({
  transport: 'stdio',       // 'stdio' or 'sse'
  serverName: 'my-server',
});

// Server is now running and accepting MCP connections
```

### SSE transport (HTTP-based)

```ts
const handle = await startCodeboltMcpServer({
  transport: 'sse',
  port: 3001,                // default: 0 (random available port)
  hostname: '127.0.0.1',    // default: '127.0.0.1'
  serverName: 'my-server',
});

console.log(`MCP server running at ${handle.url}`);
// Endpoints:
//   GET  /sse       — SSE event stream
//   POST /messages  — send messages
//   GET  /health    — health check
```

### Filtering tools

Expose only specific tools:

```ts
const handle = await startCodeboltMcpServer({
  transport: 'sse',
  toolFilter: ['read_file', 'write_file', 'search'],  // only these tools
  toolPrefix: 'codebolt',    // prefix tool names (default: 'codebolt')
});
```

### Options reference

| Option | Type | Default | Description |
|---|---|---|---|
| `transport` | `'sse' \| 'stdio'` | `'sse'` | Communication transport |
| `port` | `number` | `0` (random) | Port for SSE transport |
| `hostname` | `string` | `'127.0.0.1'` | Hostname for SSE transport |
| `serverName` | `string` | `'codebolt'` | Server name in MCP handshake |
| `toolFilter` | `string[]` | all tools | Subset of tool names to expose |
| `toolPrefix` | `string` | `'codebolt'` | Prefix for tool names (set `''` for no prefix) |

### Return value

```ts
{
  port: number;       // Actual port (useful when port was 0)
  url: string;        // Full URL (e.g., 'http://127.0.0.1:3001/sse')
  server: Server;     // Underlying MCP Server instance
  close(): Promise<void>;  // Graceful shutdown
}
```

### Shutdown

```ts
await handle.close();  // Gracefully stop the server
```

---

## Common pitfalls

- **Missing `codebolttool.yaml`** — without this file, Codebolt won't discover your tool.
- **Wrong entry point** — the tool directory must contain an `index.js` file (the default entry point).
- **Vague tool descriptions** — "Greet someone" is worse than "Return a friendly greeting for the given name. Use when the user asks to be greeted."
- **Writing to stdout during handling** — stdio transport uses stdout for protocol messages. Use stderr for logging.
- **Throwing instead of returning errors** — exceptions become opaque failures. Return structured error objects.

## See also

- [MCP Tools Overview](./01_overview.md)
- [Tool schema](./03_tool-schema.md)
- [Error handling](./06_error-handling.md)
- [Packaging](./07_packaging.md)
