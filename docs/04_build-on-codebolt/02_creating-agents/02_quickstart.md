---
sidebar_position: 2
title: Custom Agent Quickstart
---

# Custom Agent Quickstart

Build and run a minimal custom agent in ~15 minutes. Covers level 0 (remix), level 1 (framework), and remote agents. For the full surface see [Overview](./01_overview.md) and the [creation levels](./03_creation-levels/level-0-remix.md).

**You'll need:** Codebolt installed, a provider configured, a project open. If any of that isn't true, do [Getting Started → Quickstart](../../../01_getting-started/02_quickstart.md) first.

## Part 1 — Remix (level 0)

The cheapest thing that counts as a custom agent: take an existing one and change its prompt.

### Step 1 — create the remix

From a terminal in your project:

```bash
codebolt agent create --remix
```

This starts an interactive flow:

1. **Pick an agent** — you'll see a list of available agents. Select the one you want to remix (e.g. `Act`).
2. **Name your remix** — enter a name (e.g. `my-reviewer`).
3. **Description** — add a short description (optional).
4. **Custom instructions** — enter any custom instructions for the agent (optional). For example: `You are a code reviewer focused on finding subtle bugs. Never suggest stylistic changes. Only flag things that could cause incorrect behaviour at runtime.`

The command creates a markdown file at `.codebolt/agents/remix/my-reviewer.md` with YAML frontmatter:

```yaml
---
name: my-reviewer
description: A focused code reviewer
remixedFromId: c4d3fdb9-cf9e-4f82-8a1d-0160bbfc9ae9
remixedFromTitle: Act
version: 1.0.0
type: remix
createdAt: '2026-04-18T12:00:00.000Z'
updatedAt: '2026-04-18T12:00:00.000Z'
---

You are a code reviewer focused on finding subtle bugs.
Never suggest stylistic changes. Only flag things that
could cause incorrect behaviour at runtime.
```

### Step 2 — customise further (optional)

Open `.codebolt/agents/remix/my-reviewer.md` and edit directly. You can add fields like `model`, `provider`, `tools`, or update the custom instructions (the markdown body after `---`).

### Step 3 — run it

From the desktop app: new chat tab → pick `my-reviewer` from the agent dropdown → send a message.

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

## Part 3 — Remote agent

A remote agent lives outside your project — it's a standalone process that connects to Codebolt. Use this when your agent is a separate codebase, runs on a different machine, or is built with a non-Codebolt framework.

There are two execution modes:

### Option A — CodeBolt-executed

Codebolt launches and manages the agent process for you. You provide the absolute path to the agent on disk.

**From the CLI:**

```bash
codebolt agent create-remote --name my-remote-agent --execution-mode codeboltExecuted --remote-path /absolute/path/to/agent
```

**From the desktop app:** Open the agent creation panel → select "Create Remote Agent" → enter a name and description → choose "Executed by CodeBolt" → provide the full absolute path to the agent → click Create.

### Option B — Self-executed

You run the agent yourself (from your own terminal, CI, or a remote server). The agent connects to Codebolt using a thread token.

**From the CLI:**

```bash
codebolt agent create-remote --name my-remote-agent --execution-mode selfExecuted
```

**From the desktop app:** Open the agent creation panel → select "Create Remote Agent" → enter a name and description → choose "Self-executed" → click Create.

After creation, you'll need to pass the thread token to your agent's environment so it can connect back to Codebolt.

### When to use remote agents

- Your agent is written in a language Codebolt doesn't scaffold (Python, Go, Rust).
- Your agent runs on a different machine or in the cloud.
- You want to wrap an existing tool (Claude Code, Codex, etc.) as a Codebolt agent — see [Third-Party Wrapping](./04_third-party-agents.md).

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
