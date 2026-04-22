---
sidebar_position: 6
title: Agent Blocks
---

# Agent Blocks

An **agent block** is an in-agent composable unit — a reusable piece of an agent's loop that agents drop into their handler by name. Where an [action block](./05_action-blocks/01_overview.md) is a procedural sequence invoked as a whole, an agent block is a *chunk of loop behaviour* — "assemble context with codemap + directory + rules", "reflect on tool results and decide next step", "summarise the run for memory".

Agent blocks let you share phases or mini-pipelines across multiple agents without copying code.

## When agent blocks are the right shape

- Multiple agents perform the same phase (e.g. "build context the same way"). Factor it as a block and share.
- You want to publish a standardised reflection/summarisation step across your team's agents.
- You're composing an agent from pre-built phases rather than writing one from scratch.
- You're building agents from configuration and want named building blocks rather than raw processors.

## Agent block vs. processor vs. skill

| Axis | Processor | Agent Block | Skill |
|---|---|---|---|
| **Where it lives** | Inside the framework's loop slots | Inside an agent's handler as a reusable unit | Registered in server, delegated to |
| **Who writes it** | Framework author or agent author | Shared library / capability author | Anyone who registers |
| **Loop access** | Deep (phase-level) | Moderate (handler-level) | None (black box from agent's view) |
| **Swap without rewriting?** | Partial (you pick which to compose) | Yes (by name) | Yes (by name) |

Processors are lower-level and framework-specific. Agent blocks sit above processors — they often *compose* processors — and are framework-agnostic.

## Shape

```ts
// a reusable agent block
import { defineAgentBlock } from "@codebolt/agent/blocks";

export const CodemapContextBlock = defineAgentBlock({
  name: "codemap-context",
  description: "Assemble context with codemap + dir + rules + open files",
  async run(ctx) {
    return ctx.context.assemble({
      include: ["codemap", "directory", "rules", "open_files"],
      compress: true,
    });
  },
});
```

Consume it in an agent:

```ts
import { createCodeboltAgent } from "@codebolt/agent";
import { CodemapContextBlock } from "@myorg/agent-blocks";

export default createCodeboltAgent({
  name: "code-reviewer",
  async run(ctx, input) {
    const context = await CodemapContextBlock.run(ctx);
    const response = await ctx.llm.chat({
      messages: [{ role: "system", content: context }, ...input.messages],
    });
    return response;
  },
});
```

## Registering for discovery

Blocks registered with the server are discoverable by name from any agent:

```yaml
# .codebolt/agent-blocks/codemap-context/block.yaml
name: codemap-context
description: Standard context assembly
version: 1.0.0
entry: ./block.ts
```

Then:

```ts
const context = await ctx.blocks.agentBlock("codemap-context").run(ctx);
```

This is the "swap without rewriting" path — you can update the registered block's implementation and every consumer picks it up without code changes.

## Composition

Blocks compose:

```ts
export const StandardReviewBlock = defineAgentBlock({
  name: "standard-review",
  compose: [
    CodemapContextBlock,
    ReflectionBlock,
    MemoryWriteBlock,
  ],
});
```

Composed blocks run in sequence, sharing the run context. Use composition when a named pipeline recurs across agents.

## Agent block vs. capability

A capability *ships* agent blocks (among other things). An agent block is one thing; a capability is a distributable bundle. If you're publishing a set of blocks together, wrap them in a capability.

## See also

- [Processors](../02_creating-agents/07_processors/01_what-are-processors.md) — lower-level loop composition
- [Skills](./03_skills/01_overview.md) — delegation rather than in-line composition
- [Action Blocks](./05_action-blocks/01_overview.md) — procedural sequences rather than loop fragments
- [Capabilities](./02_capabilities/01_overview.md) — bundling blocks for distribution
