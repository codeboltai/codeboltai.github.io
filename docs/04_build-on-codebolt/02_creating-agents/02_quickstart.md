---
sidebar_position: 2
title: Custom Agent Quickstart
---

# Custom Agent Quickstart

Build and run a minimal custom agent in ~15 minutes. Covers level 0 (remix) and the start of level 1 (framework). For the full surface see [Overview](./01_overview.md) and the [creation levels](./03_creation-levels/level-0-remix.md).

**You'll need:** Codebolt installed, a provider configured, a project open. If any of that isn't true, do [Getting Started → Quickstart](../../../01_getting-started/02_quickstart.md) first.

## Part 1 — Remix (level 0)

The cheapest thing that counts as a custom agent: take an existing one and change its prompt.

### Step 1 — scaffold

From a terminal in your project:

```bash
codebolt agent create --remix
```

This starts an interactive flow:

1. **Pick an agent** — you'll see a list of all installed agents. Select the one you want to remix (e.g. `generalist`).
2. **Name your remix** — enter a name (e.g. `my-reviewer`).

The command creates `.codebolt/agents/my-reviewer/agent.yaml` with a copy of the selected agent's manifest plus a `remix:` block where you override fields.

### Step 2 — customise

Open `.codebolt/agents/my-reviewer/agent.yaml` and edit the remix block:

```yaml
name: my-reviewer
remix_of: generalist
remix:
  system_prompt: |
    You are a code reviewer focused on finding subtle bugs.
    Never suggest stylistic changes. Only flag things that
    could cause incorrect behaviour at runtime.
  tools:
    allow:
      - codebolt_fs.read_file
      - codebolt_fs.search
      - codebolt_code.analyze_code
    deny:
      - codebolt_fs.write_file
  model: claude-sonnet-4-6
```

Three things just happened:
- The agent has a new system prompt.
- It can only read, not write (important for a reviewer).
- It uses a specific model rather than the project default.

### Step 3 — run it

```bash
codebolt agent start my-reviewer --task "review the changes in src/auth/"
```

Or from the desktop app: new chat tab → pick `my-reviewer` from the agent dropdown → send a message.

That's a custom agent. No code written. For many use cases, this is all you need.

## When remix isn't enough

Go to level 1 when:
- You need behaviour that isn't just a different prompt (custom tool calling logic, specialised memory use, non-standard phases).
- You want to compose multiple processors to shape the loop.
- You need to emit structured output consumed by another agent or a flow.

If none of those apply, stay at level 0.

## Part 2 — Framework agent (level 1)

A minimal level-1 agent is ~30 lines of TypeScript. Here's the shape.

### Step 1 — scaffold

```bash
codebolt agent create --framework --name my-planner
```

This creates:

```
.codebolt/agents/my-planner/
  agent.yaml          ← manifest
  index.ts            ← handler entry point
  package.json        ← dependencies
  tsconfig.json
```

### Step 2 — the manifest

`agent.yaml`:

```yaml
name: my-planner
version: 0.1.0
description: Produces a structured plan for a given task.
framework: true
entrypoint: index.ts
default_model: claude-opus-4-6
tools:
  allow:
    - codebolt_fs.read_file
    - codebolt_fs.search
    - codebolt_code.*
    - codebolt_codebase.*
inputs:
  task: { type: string, required: true }
outputs:
  plan: { type: object }
```

Note that this agent has **read tools only** and declares a structured output — it's designed to be the "plan" stage of a [plan-execute-review](../08_multi-agent-orchestration/03_patterns/plan-execute-review.md) pipeline, not a standalone chat agent.

### Step 3 — the handler

`index.ts`:

```ts
import { createCodeboltAgent } from "@codebolt/agent";

export default createCodeboltAgent({
  name: "my-planner",
  async run(ctx, input) {
    const { task } = input;

    const codemap = await ctx.tools.call("codebolt_codebase.get_codemap", {});
    const response = await ctx.llm.chat({
      messages: [
        { role: "system", content: "You produce structured JSON plans." },
        { role: "user", content: `Task: ${task}\n\nCodemap:\n${codemap.content}\n\nProduce a plan.` },
      ],
      response_format: "json",
    });

    return { plan: JSON.parse(response.content) };
  },
});
```

`createCodeboltAgent` is the [Unified Agent](./06_patterns/unified-agent.md) pattern — it handles the loop, the context, the heartbeats, everything. You provide the `run` handler.

### Step 4 — install and test

```bash
cd .codebolt/agents/my-planner
npm install
codebolt agent test my-planner --input '{"task": "add a /health endpoint"}'
```

You should see the agent start, query the codemap, call the LLM, and return a JSON plan.

### Step 5 — use it from a flow

Now that the agent has a structured output, you can use it as a node in an [agent flow](../08_multi-agent-orchestration/04_agent-flows.md):

```yaml
nodes:
  - id: plan
    agent: my-planner
    input: { task: "{{inputs.task}}" }
```

## Where to go next

- **Understand the creation levels fully** → [Creation levels](./03_creation-levels/level-0-remix.md)
- **Pick a pattern for non-trivial agents** → [Patterns overview](./06_patterns/overview.md)
- **Add custom behaviour via processors** → [Processors](./07_processors/01_what-are-processors.md)
- **Test your agent rigorously** → [Testing and debugging](./09_testing-and-debugging.md)
- **Ship it** → [Publishing](./10_publishing.md)

## Common pitfalls (first-time agent authors)

- **Too broad tool allowlist.** Start restrictive. An agent with `allow: [*]` is hard to reason about.
- **Chat-shaped agent for a pipeline slot.** If the agent is going to be a flow node, give it a typed `inputs` and `outputs` block — don't rely on free-form chat.
- **Re-implementing planning.** The [planning hierarchy](../09_internals/03_subsystems/08_planning-hierarchy.md) already exists. Use it instead of rolling your own.
- **No tests.** An agent without replay tests will silently regress when you change its prompt. Set up [testing](./09_testing-and-debugging.md) from day one.
