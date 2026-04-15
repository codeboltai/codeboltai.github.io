---
sidebar_position: 1
title: Hooks Overview
---

# Hooks Overview

Hooks are the lightest-weight way to intervene in Codebolt's behaviour. If a custom agent is writing a whole program and a custom tool is adding a new verb to the vocabulary, a hook is saying "when X happens, run this small piece of code".

## When to use a hook

Use a hook when you want to **observe or modify something that Codebolt is already doing**, without owning the process. Good candidates:

- **Enforce a policy** — "never let `codebolt_fs.write_file` touch `infra/` outside business hours".
- **Audit for compliance** — "log every tool call to our SIEM".
- **Redact sensitive data** — "strip customer emails from prompts before they leave the workspace".
- **Emit metrics** — "increment a counter every time an agent run completes".
- **Integrate with external systems** — "notify Slack when a merge request is opened".
- **Throttle or rate-limit** — "no more than 100 LLM calls per agent per hour".

Anything cross-cutting that doesn't belong in one specific agent or tool belongs in a hook.

## When NOT to use a hook

- **You're changing how an agent thinks** → write a custom agent or a [processor](../03_processors/01_what-are-processors.md) instead.
- **You're adding a new capability** → write a [tool](../04_custom-tools-and-mcp/01_overview.md) instead.
- **You need heavy per-request computation** → hooks should be fast. Anything expensive should be async or pushed to a tool.

## Hook phases

Hooks fire at well-defined events on the `applicationEventBus`. The main ones:

| Phase | Fires when | Typical use |
|---|---|---|
| `before_tool_call` | Just before a tool executes | Policy enforcement, parameter rewriting, denial |
| `after_tool_call` | Just after a tool returns | Redaction, audit logging, result transformation |
| `before_llm_call` | Just before an LLM call | Prompt logging, last-mile redaction |
| `after_llm_call` | After the LLM returns | Response logging, usage metrics |
| `on_file_save` | When a file write is committed | Lint, format, notify |
| `on_commit` | When shadow git commits | Trigger follow-up work |
| `on_run_start` | When an agent run begins | Set up context, rate-limit check |
| `on_run_end` | When an agent run ends | Report metrics, clean up |
| `on_checkpoint` | When a checkpoint is created | Custom snapshot logic |
| `on_guardrail_verdict` | When a guardrail produces a verdict | Escalate, notify |

See [Hook types](./02_hook-types.md) for the full list and signatures.

## What a hook can do

Each phase gives the hook a **context object** (the current state — tool call, LLM request, file path, etc.) and expects a **verdict**:

| Verdict | Effect |
|---|---|
| `allow` | Let it proceed unchanged (the default) |
| `allow with modification` | Proceed, but with the modified context |
| `deny` | Stop this operation. The agent gets a structured denial. |
| `observe` | Don't change anything. Used by hooks that only log. |

Hooks that can deny run before the operation. Hooks that only observe can run after.

## Shape of a hook definition

Hooks can be declared in YAML (for simple cases) or written as code (for anything beyond pattern matching).

### YAML form

```yaml
name: no-infra-writes-outside-hours
phase: before_tool_call
match:
  tool: "codebolt_fs.write_file"
  args:
    path_starts_with: "infra/"
when:
  hour_range: "09:00-18:00"
  timezone: "America/Los_Angeles"
  invert: true
verdict: deny
reason: "Writes to infra/ are only allowed during business hours"
```

No code needed for anything that's a pattern match on the context.

### Code form

```ts
// hooks/redact-emails.ts
export default {
  phase: "before_llm_call",
  handler: async (ctx) => {
    const redacted = ctx.messages.map(m => ({
      ...m,
      content: m.content.replace(/[\w.]+@[\w.]+/g, "[redacted]"),
    }));
    return { verdict: "allow_with_modification", context: { ...ctx, messages: redacted } };
  },
};
```

Code hooks run in a sandboxed worker, managed by `PluginProcessManager` (same isolation as MCP servers). A slow or crashing hook won't take down the server.

## Registration and scope

Hooks can be scoped at three levels:

- **Workspace** — live in `.codebolt/hooks/` in the project, apply to that project only.
- **User** — in your user config, apply everywhere you work.
- **Server** — declared in the server config, apply to all users of that server. Self-host only.

Hooks are evaluated in workspace → user → server order, and all matching hooks at the same phase run in declared priority.

## Hook ordering

When multiple hooks match, they run in a deterministic order:

1. By priority (explicit `priority: N`, default 100).
2. Higher-scope first (workspace beats user beats server). You can invert this with a flag.
3. Declaration order as tiebreaker.

The first `deny` stops evaluation — subsequent hooks don't run. `allow_with_modification` threads the modified context through the rest.

## Guardrails vs hooks

If you've read [Guardrails](../08_internals/03_subsystems/09_guardrails-and-eval.md), you'll notice the overlap. The distinction:

- **Guardrails** are the *built-in* policy mechanism: rule evaluator + LLM evaluator, with a dedicated config surface and data service. Used for the core security story.
- **Hooks** are the *general* extension mechanism for "run my code when X happens". Hooks can implement guardrail-like behaviour, and the guardrail engine itself is effectively a well-wired set of hooks.

Rule of thumb: if it's about policy/safety and fits the guardrail config model, use guardrails. If it's custom logic you want to run at a specific lifecycle point, use a hook.

## See also

- [Hook types](./02_hook-types.md)
- [Hook examples](./03_hook-examples.md)
- [Guardrails & Eval internals](../08_internals/03_subsystems/09_guardrails-and-eval.md)
- [Processors](../03_processors/01_what-are-processors.md) — the sibling concept inside the agent loop
- [Guide: write a simple hook](../../03_guides/04_mcp-and-tools/write-a-simple-hook.md)
