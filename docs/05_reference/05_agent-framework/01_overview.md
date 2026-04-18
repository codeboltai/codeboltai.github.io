---
sidebar_position: 1
title: Agent Framework
---

# Agent Framework Reference

The `@codebolt/agent` package is the framework agents run on top of. It provides the agent loop, processor pipeline, tool system, memory integration, and multi-agent coordination — everything below `ctx.*` that makes an agent tick.

## Architectural Patterns

The framework supports three patterns depending on how much control you need:

| Pattern | Import | Best for |
|---|---|---|
| **Composable** | `@codebolt/agent/composable` | Simple agents with tools and memory |
| **Builder** | `@codebolt/agent/builder` | Step-by-step pipeline construction |
| **Processor** | `@codebolt/agent/processor` | Full control over inference pipeline |
| **Unified** | `@codebolt/agent/unified` | Multi-agent teams and orchestration |

## Quick Start

```typescript
import { ComposableAgent, createTool } from '@codebolt/agent/composable';
import { z } from 'zod';

const myTool = createTool({
  id: 'my-tool',
  description: 'Does something useful',
  inputSchema: z.object({ input: z.string() }),
  execute: async ({ context }) => ({ result: context.input }),
});

const agent = new ComposableAgent({
  name: 'My Agent',
  instructions: 'You are a helpful assistant.',
  model: 'claude-sonnet-4-6',
  tools: { myTool },
});

const result = await agent.execute('Do the thing');
```

## What's in this section

| Section | What it covers |
|---|---|
| [Type Reference](./type-reference/) | Full TypeScript types — agent classes, processor pipeline, team coordination |

## See also

- [codeboltjs Reference](../02_codeboltjs/01_overview.md) — `ctx.*` API methods agents call
- [Creating Agents](../../04_build-on-codebolt/02_creating-agents/01_overview.md) — authoring guide
- [Plugin SDK](../03_plugin-sdk/01_overview.md) — extending the Codebolt app
