---
sidebar_position: 2
title: Quickstart — Local MCP Server
---

# Quickstart: Build a Local MCP Server

Write a working MCP server in ~15 minutes, install it into your Codebolt workspace, and have an agent call its tools. This covers the minimum path; the detail pages cover each step in depth.

**You'll need:** Codebolt installed and running, Node.js 18+ (or Python 3.10+), a project open.

## What we're building

A minimal server with one tool: `greet.hello(name)` — returns a greeting. Trivial, but end-to-end: schema, implementation, registration, agent invocation.

## Step 1 — scaffold

```bash
cd /path/to/your/project
mkdir -p .codebolt/tools/greet
cd .codebolt/tools/greet
npm init -y
npm install @modelcontextprotocol/sdk
```

This gives you a Node package with the MCP SDK installed. The SDK handles the protocol wire format so you only write the tool logic.

## Step 2 — write the server

Create `server.js`:

```js
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  { name: "greet", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "hello",
      description: "Return a friendly greeting for the given name. Use when the user asks to be greeted.",
      inputSchema: {
        type: "object",
        properties: {
          name: { type: "string", description: "Person's name" },
        },
        required: ["name"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  if (req.params.name === "hello") {
    const name = req.params.arguments?.name ?? "stranger";
    return { content: [{ type: "text", text: `Hello, ${name}!` }] };
  }
  throw new Error(`Unknown tool: ${req.params.name}`);
});

const transport = new StdioServerTransport();
await server.connect(transport);
```

What's here:
- One tool declared in `ListTools`.
- The schema is the JSON Schema the LLM will see.
- The `description` is what the LLM reads to decide when to call the tool. **Make it specific.**
- The `CallTool` handler runs the tool.
- `StdioServerTransport` is how local MCP servers communicate with their host.

## Step 3 — register with Codebolt

Add to `.codebolt/mcp-servers.yaml` in your project root:

```yaml
servers:
  greet:
    command: node
    args: [".codebolt/tools/greet/server.js"]
```

Within a few seconds, **Settings → Tools** should show `greet` as `running` with `greet.hello` listed.

## Step 4 — let an agent use it

By default, agents must explicitly allow a new tool. Edit the agent's manifest:

```yaml
# .codebolt/agents/my-agent/agent.yaml
tools:
  allow:
    - codebolt_fs.*
    - greet.*
```

Reload the agent (`codebolt agent reload my-agent`) or restart the server.

## Step 5 — test from chat

Open a chat tab with that agent. Send: `Please greet me. My name is Alice.`

In the stream:

```
calling greet.hello({ name: "Alice" })
tool result: "Hello, Alice!"
```

That's a custom MCP tool, installed and usable. The rest of this section is about making it production-quality.

## Making it real

Before shipping, you'll want to:

1. **[Write a better schema](./03_tool-schema.md).** Required vs optional, constraints, examples.
2. **[Validate parameters](./03_tool-schema.md).** Structured rejections with helpful error messages.
3. **[Handle errors well](./06_error-handling.md).** Agents recover from structured errors; they don't recover from exceptions.
4. **[Stream long results](./06_error-handling.md)** instead of returning everything at once.
5. **[Package it](./07_packaging.md)** for distribution.
6. **[Publish it](../../02_creating-agents/10_publishing.md)** to a registry.

## Python version

If you'd rather write the server in Python:

```bash
pip install mcp
```

```python
# server.py
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent

app = Server("greet")

@app.list_tools()
async def list_tools():
    return [
        Tool(
            name="hello",
            description="Return a friendly greeting for the given name.",
            inputSchema={
                "type": "object",
                "properties": {"name": {"type": "string"}},
                "required": ["name"],
            },
        )
    ]

@app.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "hello":
        return [TextContent(type="text", text=f"Hello, {arguments['name']}!")]
    raise ValueError(f"Unknown tool: {name}")

async def main():
    async with stdio_server() as (read, write):
        await app.run(read, write, app.create_initialization_options())

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

Register:

```yaml
servers:
  greet:
    command: python
    args: [".codebolt/tools/greet/server.py"]
```

Same semantics, different language.

## Common pitfalls

- **Vague tool descriptions.** "Greet someone" is worse than "Return a friendly greeting for the given name. Use when the user asks to be greeted." The LLM picks tools by description; specific wins.
- **Forgetting the allowlist.** New tools aren't auto-allowed. Add to `tools.allow` explicitly.
- **Throwing instead of returning errors.** Exceptions become opaque failures. Return structured error objects so the agent can recover.
- **Writing to stdout during handling.** Stdio transport uses stdout for protocol messages. Your `console.log` will corrupt the stream. Use stderr or a file for logging.

## See also

- [MCP Tools Overview](./01_overview.md)
- [Tool schema](./03_tool-schema.md)
- [Parameter validation](./03_tool-schema.md)
- [Error handling](./06_error-handling.md)
- [Publishing](../../02_creating-agents/10_publishing.md)
- [Tool call end-to-end (internals)](../../09_internals/04_data-flow-walkthroughs/tool-call-end-to-end.md)
