---
sidebar_position: 1
title: Custom Tools & MCP Overview
---

# Custom Tools & MCP

How to give agents new capabilities. "Write a new tool" is usually the second extension you build after "tweak an agent" — and it's often cheaper and more reusable than building a whole custom agent.

## The three ways to add a tool

Codebolt agents see a single flat namespace of callable tools. Under the hood, a tool can be one of three things:

| Kind | How you build it | When to use |
|---|---|---|
| **Built-in tool** | Fork the server. Add to `toolService`. | Only for contributors to Codebolt itself. Almost never the right choice for a team. |
| **MCP server** | A standalone process speaking the MCP protocol. | Almost everything. Portable, isolated, community-standard. |
| **Capability bundle** | A packaged bundle that declares tools + prompts + UI. | When you need more than just a tool — e.g. a "Stripe integration" that also ships prompts and a UI panel. |

**Default choice: MCP server.** It's the well-trodden path, your tool is reusable outside Codebolt (other MCP hosts can use it), and you don't have to learn a Codebolt-specific packaging format.

## Why not just edit the built-in tools

Because:

1. **Upgrades.** Every time you update Codebolt, your local changes to built-ins need to merge.
2. **Isolation.** Built-ins run in the server process. A bug in your tool takes down the server. An MCP server runs in its own process — a bug there just crashes your tool, and [`PluginProcessManager`](../08_internals/03_subsystems/02_mcp-and-tools.md) restarts it.
3. **Permissions.** You can constrain an MCP server's tool allowlist per workspace, per user, per agent. Built-ins are all-or-nothing.
4. **Portability.** MCP is a standard. Your tool works in any MCP host, not just Codebolt.

The only time you'd add a built-in is if you're modifying something that must be in-process for latency or access reasons, and you'd almost always prefer a capability bundle to a fork.

## Anatomy of an MCP tool

An MCP tool is three things:

1. **A name** — what the LLM calls it. Namespaced: `myserver.do_thing`.
2. **A schema** — the typed parameters the LLM provides.
3. **An implementation** — what actually runs when the tool is called.

```ts
// minimal example (pseudo-code)
server.addTool({
  name: "ticker.latest",
  description: "Get the latest price for a stock ticker. Use this when the user asks about a specific stock.",
  parameters: {
    type: "object",
    properties: {
      symbol: { type: "string", description: "The ticker symbol, e.g. AAPL" },
    },
    required: ["symbol"],
  },
  handler: async ({ symbol }) => {
    const price = await fetch(`https://api.example.com/price/${symbol}`).then(r => r.json());
    return { ok: true, content: `${symbol}: $${price.value}` };
  },
});
```

The description is critical — the LLM decides whether to call your tool based on this string, not on its name. See [Tool schema](./03_tool-schema.md) for the full shape.

## What you learn by building a tool

A good tool is mostly about **description writing** and **error shaping**, not about the implementation:

- **Good description:** "Look up the current price of a stock by ticker symbol. Only works for US-listed equities. Returns price in USD. Use when the user explicitly asks about a specific ticker."
- **Bad description:** "Returns stock data."

- **Good error:** `{ ok: false, reason: "ticker not found", suggestions: ["APPL", "AAPL"] }` — the agent can recover.
- **Bad error:** `{ ok: false, reason: "404" }` — the agent has no idea what happened.

This section has pages on each of these: [Tool schema](./03_tool-schema.md), [Parameter validation](./03_tool-schema.md), [Error handling](./06_error-handling.md), [Streaming results](./06_error-handling.md).

## Lifecycle in Codebolt

When you install your MCP server into a workspace:

1. [`PluginProcessManager`](../08_internals/03_subsystems/02_mcp-and-tools.md) spawns the server process.
2. [`mcpService`](../08_internals/03_subsystems/02_mcp-and-tools.md) performs the MCP handshake and lists the tools.
3. Each tool is registered in the workspace's tool namespace.
4. [`providerRegistryService`](../08_internals/03_subsystems/02_mcp-and-tools.md) tracks health.
5. On crash, the server is restarted with exponential backoff; after repeated failures the circuit breaks and the tools become unavailable until manually re-enabled.

From the agent's point of view, none of this is visible — it just sees tools show up in its namespace.

## Packaging and publishing

- **[Packaging](./07_packaging.md)** — how to wrap your MCP server for distribution.
- **[Publishing](../02_custom-agents/07_publishing.md)** — pushing to a registry (public or private).

## See also

- [MCP & Tools internals](../08_internals/03_subsystems/02_mcp-and-tools.md) — how the three kinds merge into one namespace
- [Tool call end-to-end](../08_internals/04_data-flow-walkthroughs/tool-call-end-to-end.md) — the full trace of what happens when an agent calls a tool
- [Hooks](../06_hooks-and-capabilities/01_hooks-overview.md) — an even lighter-weight way to intervene
- [Guide: build your first MCP server](../../03_guides/04_mcp-and-tools/build-your-first-mcp-server.md)
- [Reference: built-in tools](../../05_reference/01_overview.md)
