---
sidebar_position: 2
title: Hook Types
---

# Hook Types

The list of hook phases and what each sees. For what hooks are and when to use them, see [Hooks Overview](./01_hooks-overview.md).

## Tool call hooks

### `before_tool_call`
Fires before a tool runs. The most common hook. Used for policy enforcement, parameter rewriting, denial.

**Context:**
```ts
{
  tool: string,          // e.g. "codebolt_fs.write_file"
  args: object,          // tool arguments
  agent: string,         // which agent is calling
  runId: string,
  phaseId: string,
}
```

**Can:** allow, allow with modification, deny, observe.

### `after_tool_call`
Fires after a tool completes. Used for redaction, audit logging, result transformation.

**Context:**
```ts
{
  tool: string,
  args: object,
  result: ToolResult,
  duration_ms: number,
  runId: string,
}
```

**Can:** allow, transform result, observe.

## LLM hooks

### `before_llm_call`
Fires before each LLM invocation. Used for prompt logging, last-mile redaction, model selection override.

**Context:**
```ts
{
  messages: Message[],
  tools: ToolSchema[],
  model: string,
  temperature: number,
  runId: string,
}
```

### `after_llm_call`
Fires after the LLM responds. Used for response logging, usage metrics, response transformation.

**Context:**
```ts
{
  response: LLMResponse,
  tokens_input: number,
  tokens_output: number,
  duration_ms: number,
  cost_usd: number,
  runId: string,
}
```

## File system hooks

### `before_file_write`
Fires before any file write, via `fileUpdateIntentService`. Used for safety checks, path validation, staging.

**Context:**
```ts
{
  path: string,
  content: string,
  intent: "create" | "modify" | "delete",
  by_agent: string,
  runId: string,
}
```

### `after_file_write`
Fires after a write commits. Used for lint, format, notification.

**Context:**
```ts
{
  path: string,
  bytes: number,
  runId: string,
}
```

### `on_file_save`
Fires when the user (not an agent) saves a file in the editor. Used for trigger-based agent activation.

## Git hooks

### `on_shadow_commit`
Fires when shadow git commits a change. Used for custom snapshot logic, external indexing.

### `before_real_git_push`
Fires before any `codebolt_git.push` call runs. Useful for enforcing "don't push from agents" policies.

## Run lifecycle hooks

### `on_run_start`
Fires when an agent run begins. Used for context setup, rate-limit checks, budget enforcement.

**Context:**
```ts
{
  runId: string,
  agent: string,
  parentRunId?: string,
  input: object,
  triggeredBy: "chat" | "cli" | "cron" | "webhook" | "file_change" | "delegation",
}
```

### `on_run_end`
Fires when a run ends (any terminal state). Used for metrics, cleanup, notification.

**Context:**
```ts
{
  runId: string,
  agent: string,
  status: "completed" | "failed" | "rejected" | "killed",
  duration_ms: number,
  phases: number,
  tool_calls: number,
  tokens: number,
  cost_usd: number,
  output?: object,
  error?: string,
}
```

### `on_phase_start` / `on_phase_end`
Fire at the boundaries of each agent phase (deliberate, execute, reflect). Fine-grained but high-volume — usually the run-level hooks are enough.

## Checkpoint hooks

### `on_checkpoint_create`
Fires when a checkpoint is written. Used for external backup, audit trail, external snapshot systems.

### `on_checkpoint_rollback`
Fires when a rollback happens. Used for audit logging, external state reconciliation.

## Guardrail hooks

### `on_guardrail_verdict`
Fires whenever `guardrailEngine` issues a verdict. Used for escalation, alerting, policy audit.

**Context:**
```ts
{
  phase: "before_tool_call" | "before_write" | "run_end",
  target: { tool?: string, path?: string, ... },
  verdict: "allow" | "allow_with_modification" | "deny",
  reason: string,
  by: "rule" | "llm" | "hook",
  runId: string,
}
```

## Agent messaging hooks

### `on_agent_message`
Fires when one agent sends a message to another (in a swarm or flow). Used for tracing, debugging, policy.

### `on_child_run_start` / `on_child_run_end`
Fire when an agent spawns or finishes a child run. Used for orchestration monitoring.

## Choosing the right phase

If you're not sure which hook to use, ask: "what's the earliest point where the information I need is available, and the latest point where I can still intervene?"

- **Enforcing policy** → `before_*` hooks (you need to be able to deny).
- **Logging and metrics** → `after_*` hooks (you want the outcome).
- **Reacting to state changes** → lifecycle hooks (`on_run_end`, `on_checkpoint_*`).
- **Auditing decisions** → `on_guardrail_verdict`, `on_agent_message`.

## Matching

Hooks can declare match patterns so they only fire on relevant events:

```yaml
name: audit-writes
phase: before_tool_call
match:
  tool: "codebolt_fs.write_file"
  args:
    path_starts_with: "infra/"
verdict: allow
handler: ./audit-handler.ts
```

A hook that doesn't match on a given event is simply skipped — no overhead.

## See also

- [Hooks Overview](./01_hooks-overview.md)
- [Hook Examples](./03_hook-examples.md)
- [Guardrails & Eval (internals)](../08_internals/03_subsystems/09_guardrails-and-eval.md)
