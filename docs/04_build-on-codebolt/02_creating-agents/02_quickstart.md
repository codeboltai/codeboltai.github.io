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

When you need more than a prompt override — custom tool logic, structured output, or a non-standard loop — create a framework agent using the agent template.

### Step 1 — scaffold

```bash
codebolt agent create --framework --name my-planner
```

The `--framework` flag tells the CLI to use the agent framework template from the Codebolt registry. It downloads the template and scaffolds a project with `codeboltagent.yaml` (manifest), `index.ts` (handler entry point), `package.json`, and `tsconfig.json`.

You can also pass `--description` and `--path` to customise:

```bash
codebolt agent create --framework --name my-planner --description "Produces a structured plan" --path ./my-planner
```

### Step 2 — customise the manifest and handler

Open the scaffolded `codeboltagent.yaml` to configure your agent's name, description, allowed tools, and model. Then edit `index.ts` to implement your agent's logic — this is where you handle incoming tasks, call LLMs, execute tools, and return results.

### Step 3 — install and test

```bash
cd my-planner
npm install
```

Once installed, select your agent from the desktop app's agent dropdown and send it a task to verify it works.

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
