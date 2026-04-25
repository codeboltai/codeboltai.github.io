# Agents

> An agent is a configured loop that takes a task, asks an LLM what to do next, calls tools, observes results, and repeats until the task is done (or a budget is.

An **agent** is a configured loop that takes a task, asks an LLM what to do next, calls tools, observes results, and repeats until the task is done (or a budget is hit).

That's it. Everything else — system prompts, allowed tools, memory, budgets — is configuration on top of that loop.

## What an agent is *not*

- Not a chatbot. A chat tab is a UI; the agent behind it is what does the work.
- Not a workflow. Workflows are deterministic; agents decide the next step turn by turn.
- Not a model. The model is one component the agent calls.

## The four creation levels

Codebolt agents can be authored at four levels of abstraction. Pick the lowest one that fits.

| Level | What you write | When to use |
|---|---|---|
| **0 — Remix** | A YAML file that inherits from an existing agent and overrides a few fields | Tweaking prompts, restricting tools, branding |
| **1 — Framework** | A YAML manifest + a handler function from the agent framework | Most custom agents |
| **2 — codeboltjs** | TypeScript using the `@codebolt/codeboltjs` SDK directly | Need fine-grained control over the loop |
| **3 — Raw WebSocket** | Speak the wire protocol yourself | Building a non-JS runtime, or a brand-new framework |

Most teams stay at level 0 or 1.

## What's inside an agent

- **Manifest** (`agent.yaml`) — name, version, model, allowed tools, budgets, inputs, outputs.
- **System prompt** — the agent's instructions and constraints.
- **Handler** — the code that runs each turn (only at level 1+).
- **Memory access rules** — what the agent can read/write across memory layers.

## The deliberation loop

Each turn:
1. **Assemble context** — pull system prompt, conversation, relevant memory, file snippets (see [Context and memory](../04_runtime/02_context-and-memory.md)).
2. **Call the LLM** — get back text + optional tool calls.
3. **Vet tool calls** — guardrails plane checks each one (see [Guardrails](../06_quality/01_guardrails.md)).
4. **Execute tools** — observe results.
5. **Record everything** — append to the event log.
6. Repeat until the LLM produces a final answer or a budget is exhausted.

## See also

- [Agents in Using Codebolt](../../02_using-codebolt/04_agents/01_what-is-an-agent.md)
- [Custom Agents](../../04_build-on-codebolt/02_creating-agents/01_overview.md)
- [Agent patterns](../../04_build-on-codebolt/02_creating-agents/06_patterns/overview.md)
