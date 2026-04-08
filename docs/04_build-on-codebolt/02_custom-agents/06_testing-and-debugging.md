---
sidebar_position: 6
title: Testing & Debugging
---

# Testing and Debugging Agents

Agents are programs. Test them like programs. The framework makes three kinds of testing easy: **unit**, **replay**, and **trace**. All three should be part of your workflow for any agent that matters.

## Unit tests

For anything you can isolate from the agent loop — a utility function, a parsing helper, a custom processor — standard unit tests work. Use your language's normal testing framework.

```ts
// my-agent/index.test.ts
import { extractTickets } from "./index";

test("extractTickets parses a description", () => {
  expect(extractTickets("Fixes ABC-123, ABC-456")).toEqual(["ABC-123", "ABC-456"]);
});
```

Nothing Codebolt-specific here.

## Testing the agent loop

For the loop itself — "given this input, my agent should do X" — the framework provides a test runner:

```bash
codebolt agent test my-agent --input '{"task": "..."}'
```

This:
1. Spawns the agent in a sandboxed environment.
2. Feeds it the input.
3. Records every phase, every tool call, every LLM call.
4. Prints the full trace.
5. Does **not** commit any file changes — writes go to a throwaway shadow git branch.

Use this for smoke testing after changes. It's not deterministic (LLM calls vary), but it catches gross failures fast.

## Replay tests

This is the important one. Replay is how you catch regressions in an LLM-based system without depending on LLM determinism.

### The pattern

1. **Record** a real run that did the right thing:

```bash
codebolt agent record my-agent --task "..." --output trace.json
```

`trace.json` contains the full sequence of events, including LLM responses and tool results.

2. **Replay** the recorded trace against your agent:

```bash
codebolt agent replay trace.json
```

Replay mode swaps out the LLM and tool services for mocks that return the *recorded* responses. Your agent runs against fixed inputs and should produce a deterministic output path.

3. **Compare** what your agent did on replay to what it did on the original record. If the two diverge, something changed in your agent's logic — usually the thing you just edited.

### What replay catches

- **Logic changes** — you refactored a handler and broke the branch for one input shape.
- **Processor regressions** — you added a new message modifier and it removed important context.
- **Tool wiring bugs** — you renamed a tool and forgot to update a caller.

### What replay doesn't catch

- **Prompt regressions** — the LLM response was recorded, so you're not testing the actual prompt. For that, see golden prompts below.
- **Real-world changes** — the codebase moved; the recorded answers are now stale.

### Golden prompts

To test prompt changes, separate the prompt assembly from the LLM call and snapshot the assembled messages:

```ts
test("system prompt contains workspace name", async () => {
  const messages = await agent.assemblePrompt({ task: "test" });
  expect(messages[0].content).toContain("workspace: test-project");
});
```

Snapshot-testing the assembled messages catches accidental prompt changes and makes every prompt change a reviewable diff.

## Tracing

When a run fails or misbehaves in production, you don't need a debugger — the event log already has everything.

```bash
codebolt agent trace <run_id>
```

Prints a hierarchical view of the run:

```
run_xyz  (completed, 14 phases, 47s)
├── phase 1: deliberate (2.3s)
│   ├── context.assemble (180ms)
│   └── llm.chat → 2 tool_calls (1.8s)
├── phase 2: execute (1.1s)
│   ├── tool: codebolt_fs.read_file → ok (120ms)
│   └── tool: codebolt_fs.search → ok (950ms)
├── phase 3: deliberate (1.8s)
│   └── llm.chat → 1 tool_call (1.7s)
...
```

Options:

- `--json` — machine-readable output for scripting.
- `--phase N` — zoom into one phase and see its full inputs / outputs.
- `--since <timestamp>` — only events after a given point.
- `--type llm.chat` — filter to one event type.

## Inspect mode

For deeper interactive debugging:

```bash
codebolt agent inspect <run_id>
```

Opens an interactive REPL where you can:

- Step through phases.
- Re-execute a single phase with modified inputs (doesn't commit).
- Query memory as it was at a point in the run.
- Inspect the assembled context for any LLM call.
- Diff the assembled context at phase N vs phase N+1 to see what changed.

This is the debugger for multi-step runs. Use it when trace output isn't enough.

## Common failure patterns and how to catch them

### "Agent keeps calling the same tool in a loop"
`LoopDetectionModifier` should catch this automatically. If it's not catching your specific loop, tune its threshold. Symptom in trace: identical `llm.chat → tool_call` sequences repeating.

### "Agent ignores a tool you added"
The LLM isn't picking your tool. Usually the tool's description is too generic. Override it via `toolDescriptions` in Unified Agent (see [Unified Agent](./05_patterns/unified-agent.md)). Symptom: tool is in the allowlist but never appears in `llm.chat.response.tool_calls`.

### "Agent makes up tool calls that don't exist"
The LLM hallucinating tool names. Usually means the allowlist is too big and the LLM is confusing tool names. Tighten the allowlist. Symptom: `tools.call` returns `tool_not_found`.

### "Agent just stops"
Usually a heartbeat timeout or a silent error. Check the terminal state of the run — if it's `killed` with reason `heartbeat_timeout`, a tool call or handler took too long. If it's `failed` with no reason, check `run_ended` event for the exception.

### "Tests pass locally, production fails"
Almost always a prompt or context difference. The production run has different environment context, different codemap, different memory state. Compare the assembled messages at phase 1 between the two runs using `inspect`.

## Testing hooks and processors separately

If you wrote a custom [hook](../06_hooks-and-capabilities/01_hooks-overview.md) or [processor](../03_processors/04_writing-a-custom-processor.md), test it in isolation before wiring it into an agent:

```ts
import { MyRedactor } from "./my-redactor";

test("redactor removes emails", async () => {
  const modifier = new MyRedactor();
  const messages = [{ role: "user", content: "my email is alice@example.com" }];
  const result = await modifier.modify(messages);
  expect(result[0].content).toBe("my email is [redacted]");
});
```

Pattern: processors and hooks are just functions. Test them as functions.

## CI integration

For agents that matter, set up CI to run:

1. **Unit tests** — fast, always run.
2. **Replay tests** against a committed set of `trace.json` files — medium speed, run on every PR.
3. **Smoke tests** — one `codebolt agent test` run against a real provider, maybe nightly. Catches real-world drift.

Commit the trace files to your repo. They're small and they serve as both tests and examples of intended behaviour.

## See also

- [Lifecycle](./04_agent-anatomy/lifecycle.md) — what each stage looks like in a trace
- [Publishing](./07_publishing.md) — don't publish without tests
- [Event Log internals](../08_internals/03_subsystems/12_persistence-and-eventlog.md) — where trace data comes from
- [Guide: debug a hung agent](../../03_guides/03_everyday-workflows/debug-a-hung-agent.md)
