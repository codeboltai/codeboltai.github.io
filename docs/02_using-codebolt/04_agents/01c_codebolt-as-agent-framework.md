---
sidebar_position: 1.5
title: Codebolt as an Agent Framework
description: Codebolt isn't only an app you chat with — it is also an agent framework. Define agents in code with @codebolt/agent and call them from any application using @codebolt/client-sdk.
---

import FrameworkComparison from '@site/src/components/diagrams/FrameworkComparison';
import AgentFrameworkPatterns from '@site/src/components/diagrams/AgentFrameworkPatterns';

# Codebolt as an Agent Framework

Codebolt is most visible as the desktop / CLI / TUI you chat with — but underneath, it is also an **agent framework**. If you have used [LangChain](https://js.langchain.com), [Mastra](https://mastra.ai), the [Vercel AI SDK](https://sdk.vercel.ai), or AutoGen, the mental model is familiar: you define an agent in code with instructions, a model, tools, and memory, then call it from your application.

The difference is that Codebolt agents don't run *inside* your application process. They run inside a **Codebolt server** — local, in a container, or in the cloud — and your application talks to that server through a typed client SDK. You keep the same flexibility a framework gives you, plus everything else Codebolt provides: persistent memory, multi-agent coordination, MCP tools, observability, and the marketplace.

<FrameworkComparison />

## The two packages

| Package | What it is | Where it runs |
|---|---|---|
| **[`@codebolt/agent`](https://www.npmjs.com/package/@codebolt/agent)** | The framework you write agents in — `ComposableAgent`, `createTool`, workflows, memory adapters | Inside the Codebolt server (your laptop, a container, or a cloud sandbox) |
| **[`@codebolt/client-sdk`](https://www.npmjs.com/package/@codebolt/client-sdk)** | The client you call agents from — REST + WebSocket modules typed end-to-end | Your application (Next.js, Express, a CLI, a worker) |

You can use them together (define agent + drive it from a Next.js app), or independently — the agent package is also what every marketplace agent is built on, and the client SDK works against any Codebolt server regardless of which agents are installed.

## Side-by-side: defining an agent

The shape that LangChain and Mastra teach is exactly the shape Codebolt uses.

**Mastra**

```ts
import { Agent } from '@mastra/core/agent';

export const testAgent = new Agent({
  id: 'test-agent',
  name: 'Test Agent',
  instructions: 'You are a helpful assistant.',
  model: 'openai/gpt-5.4',
});
```

**LangChain**

```ts
import { createAgent, tool } from 'langchain';
import * as z from 'zod';

const getWeather = tool(
  (input) => `It's always sunny in ${input.city}!`,
  {
    name: 'get_weather',
    description: 'Get the weather for a given city',
    schema: z.object({ city: z.string().describe('The city to get the weather for') }),
  }
);

const agent = createAgent({
  model: 'gpt-5.4',
  tools: [getWeather],
});
```

**Codebolt** (`@codebolt/agent` — composable pattern)

```ts
import { ComposableAgent, createTool, createCodeBoltAgentMemory } from '@codebolt/agent/composable';
import { z } from 'zod';

const getWeather = createTool({
  id: 'get_weather',
  description: 'Get the weather for a given city',
  inputSchema: z.object({ city: z.string() }),
  outputSchema: z.object({ summary: z.string() }),
  execute: async ({ context }) => ({ summary: `It's always sunny in ${context.city}!` }),
});

export const testAgent = new ComposableAgent({
  name: 'Test Agent',
  instructions: 'You are a helpful assistant.',
  model: 'openai/gpt-5.4',
  tools: { getWeather },
  memory: createCodeBoltAgentMemory('test_agent'),
});

const result = await testAgent.execute('What is the weather in New York?');
```

If you have a Mastra or LangChain agent you want to port, the migration is largely the same primitives — `Agent` → `ComposableAgent`, `tool(...)` → `createTool(...)` — plus an optional `memory:` you can wire up to a persistent layer.

## Three patterns, not one

`@codebolt/agent` exposes three patterns so you can scale up complexity without rewriting. Most users start composable; you only reach for builder or processor when you actually need them.

<AgentFrameworkPatterns />

Switch to builder when you want to control prompt assembly (file injection, task templating). Reach for processor when the loop itself changes — a non-tool-calling agent, a deliberation flow, or a custom retry policy.

For deeper coverage of each pattern see [Build on Codebolt → Custom Agents → Patterns](../../04_build-on-codebolt/02_creating-agents/06_patterns/01_overview.md).

## Calling agents from your application

This is where Codebolt diverges from "framework runs in your process." Your Next.js route, your Express server, or your worker doesn't import the agent — it imports the **client SDK** and talks to a Codebolt server, which is the runtime that holds agents, memory, and tools.

```ts
// app/api/chat/route.ts
import { CodeBoltClient } from '@codebolt/client-sdk';

const client = new CodeBoltClient({
  host: 'localhost',
  port: 12345,
  defaultPreset: 'minimal',
});

export async function POST(req: Request) {
  const { message } = await req.json();

  // Subscribe to streaming agent output before kicking off the run
  client.addConnections(['chat']);
  const chunks: string[] = [];
  client.onEvents('chat.message', (data) => chunks.push(data.text));

  // Drive the agent
  const thread = await client.threads.create({ agentId: 'test-agent' });
  await client.sockets.chat.sendMessage({ threadId: thread.id, content: message });

  return new Response(chunks.join(''));
}
```

The same SDK exposes everything else the server runs: tasks, jobs, swarms, vector store, knowledge graph, browser automation, terminal, git — see the [client SDK README](https://www.npmjs.com/package/@codebolt/client-sdk) for the full module list.

### What the server gives your app

When your Next.js app talks to a Codebolt server, it inherits — without writing any of it — the runtime features the desktop and CLI use:

- **Persistent memory** — KV, JSON, vector, knowledge graph, episodic, [event log](../07_memory/07_event-log.md) ([Memory & Context](../07_memory/01_overview.md)).
- **Tools and MCP** — built-in tool families plus any [MCP server](../05a_tools-and-mcp/01_overview.md) you install.
- **Multi-agent coordination** — [jobs, swarms, deliberation, stigmergic primitives](../07c_agent-coordination/01_overview.md).
- **Observability** — [Agent Debug](../05c_agent-observability/02_agent-debug.md), [AI Debug](../05c_agent-observability/03_ai-debug-and-console.md), [event log](../07_memory/07_event-log.md).
- **Environments** — run agent code [locally, in Docker, E2B, Daytona, or remote](../08a_environments/01_overview.md).
- **Marketplace** — install, publish, version any agent built on `@codebolt/agent` ([Marketplace Publishing](../08f_cloud/05_marketplace-publishing.md)).

## How this is different from "framework in your process"

| Concern | LangChain / Mastra in your app | Codebolt agent + client SDK |
|---|---|---|
| Where the LLM call originates | Your Next.js process | Codebolt server (local or remote) |
| Where memory lives | Wherever you wire it (Redis, Postgres, …) | Built-in memory layers, scoped per agent / project |
| Adding a tool | Edit your app code, redeploy | Edit the agent in the server, optionally publish to marketplace |
| Switching execution environment | App-level concern | Pick an [environment](../08a_environments/01_overview.md); agent code unchanged |
| Sharing the agent across apps | Re-import the package, re-wire memory | One server, many client apps via the SDK |
| Long-running runs / queues | Build it yourself | [Jobs](../07c_agent-coordination/02_jobs.md) and [background agents](./03_running-agents.md) ship with the runtime |
| Observability of a run | Wire OpenTelemetry / LangSmith / etc. | [Agent Debug](../05c_agent-observability/02_agent-debug.md) and [event log](../07_memory/07_event-log.md) work out of the box |

The cost is one extra hop: your app → Codebolt server → LLM provider, instead of your app → LLM provider. The win is everything in the right column.

## When to use which surface

- **You're building an internal AI feature in a Next.js / SaaS product.** Use `@codebolt/agent` to define the agent and `@codebolt/client-sdk` to call it. Run a Codebolt server alongside your app.
- **You're building a developer tool.** Same as above, plus consider publishing the agent to the marketplace so users install it inside their own Codebolt.
- **You don't need custom code, just a configured assistant.** Skip the framework — use the [marketplace](./04_the-marketplace.md) and configure with [agent.yaml](../../04_build-on-codebolt/02_creating-agents/05_agent-anatomy/agent-yaml.md).
- **You're embedding agents into a CLI / job runner / cron.** Use `@codebolt/client-sdk` against a [headless Codebolt server](../02_surfaces/05_headless.md).

## See also

- [What is an Agent](./01_what-is-an-agent.md) — the user view
- [Build on Codebolt → Custom Agents](../../04_build-on-codebolt/02_creating-agents/01_overview.md) — full builder docs, all three patterns
- [Creating Agents → Quickstart](../../04_build-on-codebolt/02_creating-agents/02_quickstart.md) — first agent in 10 minutes
- [Agent Subsystem (internals)](../../04_build-on-codebolt/09_internals/03_subsystems/01_agent-subsystem.md) — how the server runs agents
- [Marketplace Publishing](../08f_cloud/05_marketplace-publishing.md) — ship the agent you built
