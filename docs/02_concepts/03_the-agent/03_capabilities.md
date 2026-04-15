---
sidebar_position: 5
title: Capabilities
---

import CapabilityStack from '@site/src/components/diagrams/CapabilityStack';

# Capabilities

Most agent frameworks let you extend an agent in exactly two ways: **change the prompt** or **add a tool**. Everything else — structured workflows, lifecycle management, state-aware extensions — requires forking the agent loop itself.

Codebolt takes a different approach. **Capabilities** are a layered system for extending the agent loop *without modifying it*, stacking from lightweight context injection all the way up to structured multi-step execution units with their own lifecycle and environment.

<CapabilityStack />

## Why extension is hard

The history of agent customization is a trail of half-measures:

| Era | Mechanism | Problem |
|---|---|---|
| **Raw code agents** | Write the whole loop | No reuse |
| **Frameworks** (LangChain, Mastra) | Abstract the loop | Limited control |
| **Closed apps** (Cursor, Claude Code) | No loop access | Can't customize |
| **Hook-based extension** (Skills, MCP, custom instructions) | Context injection only | Can't do structured execution |

Each moved the bar but left a gap. Skills and custom instructions can *tell* the agent things but can't *do* things. MCP tools can *do* one thing but can't orchestrate a workflow. Hooks can observe but can't host a lifecycle.

**Capabilities fill the gap.** They're reusable, composable, lifecycle-aware execution units that agents invoke like tools but which behave like scoped sub-workflows — all without changing the agent loop.

## The four layers

Capabilities are organized as a stack. Each layer builds on the one above it, and each layer is the right answer for a different kind of extension.

### Layer 1 — Side Execution

The lightest extension: a process that runs **alongside** the agent, not inside its loop. A background compiler, a deployment watcher, a file-change indexer. Side executions are started by the agent (or by an event), run independently, and report results back through the environment.

- **Use for:** long-running background work, watchers, parallel tools that shouldn't block the loop.
- **Example:** `background-build` — watches source files and rebuilds in the background, posting results when the agent asks.

### Layer 2 — Action Blocks

The core unit. An **action block** is a structured execution unit with:

- **Defined inputs and outputs** (typed, like a function signature)
- **A lifecycle**: `onStart → execute → onComplete` with guaranteed cleanup
- **Environment API access**: it can open terminals, send messages, touch memory, call tools — anything the agent can do
- **State awareness**: it knows what phase of its own lifecycle it's in, and the runtime enforces that contract

Action blocks are **shareable** and **reusable**. An action block for "deploy to staging" is the same block whether invoked by your agent or someone else's.

- **Use for:** multi-step workflows that you want to package, name, and reuse.
- **Example:** a `deploy` action block — opens a terminal, builds, deploys, runs health checks, cleans up the terminal on completion.

### Layer 3 — Capability Executors

A **capability executor** is a generalized program that consumes a **configuration** and turns it into context injection + action. It's the "generic engine" layer — one executor can handle many specific capabilities because the *what* is in the config, not the code.

Examples:

- **Skill executor** — reads a skill folder and injects its instructions into the agent's context at the right moment.
- **API generator executor** — reads an `endpoints.xlsx` file and, during the agent's loop, generates route handlers, schemas, tests, and documentation.
- **Deployment executor** — reads a `deploy.yaml` and runs the full deployment lifecycle as an orchestrated sequence of action blocks.

Executors are where generic behaviour lives.

### Layer 4 — Capability Configurations

A **capability configuration** is a declarative file that an executor consumes. `skill.md`, `endpoints.xlsx`, `deploy.yaml`. No code. Anyone can author one.

This is the level most users interact with: you pick an executor and drop in a config. The executor handles the rest.

**Stacking** is the payoff: an agent can load a skill config (L4) consumed by the skill executor (L3) that invokes several action blocks (L2) which spawn side executions (L1) — all reusable, all composable, all without touching the agent loop.

## How this compares

| | Skills | MCP Tools | Hooks | **Capabilities (Action Blocks)** |
|---|---|---|---|---|
| **Purpose** | Knowledge injection | One action | Lifecycle observation | Structured execution |
| **Trigger** | Agent recognizes need | Agent picks by name | Phase events | Agent invokes explicitly |
| **State** | Stateless | Stateless | Point-in-time | Lifecycle-managed |
| **Output** | Context change | Return value | Side effect | Environment transformation |
| **Reusable** | ✓ | ✓ | Partial | ✓ |
| **Composable** | ✗ | Manual | ✗ | **Built-in** |

Capabilities don't replace skills, tools, or hooks — they complement them. Use a **skill** for instructions, a **tool** for one action, a **hook** for cross-cutting observation, and an **action block** when you need a reusable multi-step workflow with a lifecycle.

## Environment APIs

Every capability layer has access to the **environment API** — the same surface the agent uses to touch the world: `sendMessage`, `openTerminal`, `callTool`, `readFile`, `writeMemory`, and so on. The runtime manages cleanup: if an action block opens a terminal, the runtime closes it on completion, even on error.

This is what makes capabilities more than "fancy functions". They can hold resources across steps and release them deterministically.

## How an agent uses one

Declare capabilities in the manifest:

```yaml
capabilities:
  - marketplace/deploy@1.2.0         # an action block
  - marketplace/api-generator@0.4.0  # an executor + its config
  - ./caps/my-skill                  # a local skill config
```

At load time, the runtime resolves each capability, downloads it if needed, validates its requirements (tools, env APIs, permissions) against the agent's allowlist, and mounts it into the execution context. From then on, the agent can invoke any of them by name, and the runtime handles lifecycle, state, and cleanup.

## Why this is a first-class concept

Without capabilities, every custom behaviour has to live inside the agent: a longer prompt, a bigger toolbox, or a forked loop. That doesn't scale. The agent gets brittle, the prompt gets crowded, and reuse across projects is copy-paste.

Capabilities let you treat agent extensions like **packages**: name them, version them, share them, compose them. The agent loop stays small and stable; the capability stack does the heavy lifting.

## See also

- [Capabilities (build)](../../04_build-on-codebolt/03_agent-extensions/02_capabilities/01_overview.md)
- [Publishing capabilities](../../04_build-on-codebolt/03_agent-extensions/02_capabilities/05_publishing.md)
- [Tools and MCP](./02_tools-and-mcp.md) — the layer beneath capabilities
- [Hooks and Processors](../04_runtime/01_hooks-and-processors.md) — point interception, not structured execution
