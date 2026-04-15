---
sidebar_position: 7
title: Debugging an Agent
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Debugging an Agent

Agents are programs. When they misbehave, the tools for debugging them are **trace**, **inspect**, and **replay** — plus common patterns for recognising what's gone wrong.

## The main tools

### Trace — full phase-by-phase record of a run

<Tabs groupId="surface">
<TabItem value="desktop" label="Desktop" default>

Agents panel → click a run → **Trace** tab. Tree of phases with timing, inputs, outputs, tool calls, LLM calls. Click any phase to expand its full payload.

</TabItem>
<TabItem value="cli" label="CLI">

```bash
codebolt agent trace <run_id>
codebolt agent trace <run_id> --phase 3
codebolt agent trace <run_id> --type llm.chat
codebolt agent trace <run_id> --type tool.call
codebolt agent trace <run_id> --tail 20
```

</TabItem>
<TabItem value="api" label="HTTP API">

```http
GET /api/runs/:runId/trace
GET /api/runs/:runId/trace?type=llm.chat
GET /api/runs/:runId/trace?phase=3
```

</TabItem>
</Tabs>

### Inspect — interactive REPL into a recorded run

<Tabs groupId="surface">
<TabItem value="cli" label="CLI" default>

```bash
codebolt agent inspect <run_id>
```

Step through phases, re-execute one with modified inputs, query memory-as-it-was, diff assembled contexts. The deepest debugging view available.

</TabItem>
<TabItem value="desktop" label="Desktop">

In the trace view, click **Inspect this phase** on any phase. Opens an inspector pane on the right with the same step / re-execute / query controls as the CLI inspector.

</TabItem>
</Tabs>

### Replay — re-run a recorded trace against the current agent

<Tabs groupId="surface">
<TabItem value="cli" label="CLI" default>

```bash
codebolt agent record my-agent --task "..." > trace.json
# edit the agent
codebolt agent replay trace.json
```

Shows divergences between the recorded behaviour and the current agent's behaviour.

</TabItem>
<TabItem value="desktop" label="Desktop">

Agents panel → run → **Record** to capture, **Replay against current version** to compare. Divergences appear as a diff in the trace tree.

</TabItem>
</Tabs>

Useful for catching regressions after editing an agent.

## Common failure patterns

### "Agent keeps calling the same tool in a loop"

Check the trace for repeated `tool_call → tool_result → tool_call` sequences with the same args.

- `LoopDetectionModifier` should catch this. If it isn't, tune the threshold or add the modifier explicitly.
- Usually the tool is returning a confusing result the agent misinterprets as "try again". Look at the tool result — does it clearly communicate success/failure?
- Sometimes the LLM is genuinely stuck. A system prompt nudge like "if a tool returns an error, do not retry the same call" helps.

### "Agent ignores an instruction from the user"

Check the assembled context for the turn that ignored it (`trace --phase N`).

- Was the instruction compressed away? (ChatCompressionModifier will mark compressed turns.)
- Is it present but buried under noise? Too much context can dilute the instruction.
- Pin the instruction with an `@`-mention to force it into context.
- Add a context rule for important instructions.

### "Agent calls a tool that doesn't exist"

The LLM is hallucinating a tool name. Check the agent's `tools.allow`:

- Too many tools → the LLM is confusing similar names. Tighten the allowlist.
- Tool description is too similar to another → clarify descriptions.
- The agent hasn't been given the tool schema properly → look for processor bugs.

### "Tool call rejected by guardrail"

Check the trace for a `guardrail.denied` event.

- The denial reason explains why. Often a path restriction, a writable-ness check, or a specific tool block.
- The agent is expected to handle denials — it should explain to the user rather than retry. If it keeps retrying, the system prompt needs an instruction like "if a guardrail denies an action, report it and do not retry".

### "Agent runs for a long time doing nothing visible"

In-flight for a while with no phase transitions.

- **Heartbeat-timeout risk.** Check if a tool call is hanging. `codebolt agent trace <run_id> --tail` to see the last activity.
- **Slow LLM.** The provider is slow; check provider health in Settings.
- **Long context assembly.** For huge projects, assembly can take seconds. Not a bug, just slow.

### "Agent makes the wrong tool call"

Check the LLM response that produced it (`trace --type llm.chat --phase N`).

- Look at the tools list in the request. Was the right tool available?
- Look at the system prompt. Was the right tool described clearly?
- Often the fix is in `toolDescriptions` — steer the LLM with a more explicit description.

### "Agent says it did X but didn't"

This is the "LLM lies about its output" failure. Check the trace:

- Did the tool call actually happen? Look for the tool_call event.
- Did the tool return success? Look for the tool_result event.
- If yes on both: the agent is confused about what "done" means. Tighten the system prompt on what success looks like.

### "Agent output is structurally wrong"

The agent returned a shape that doesn't match its declared `outputs` schema.

- If using a typed output, the framework rejects and fails the run. Fix by either: relaxing the schema or making the system prompt more specific about the output shape.

### "Agent is too expensive"

Cost is in the trace. Usually one of:

- Too much context being assembled. Check the message sizes in `trace --type llm.chat`.
- Too many iterations. The agent is looping unnecessarily.
- Wrong model. Flagship models are 10-20x more expensive than mid-tier.

Most cost wins come from trimming context rather than switching models.

## Debugging custom agents

For level-1 framework agents, add logging inside your handler:

```ts
async run(ctx, input) {
  ctx.log.info("run starting", { input });
  // ...
  ctx.log.debug("about to call LLM", { messageCount: messages.length });
  // ...
}
```

These show up in the trace. Use `trace --log-level debug` to see debug-level entries.

For level-2/3 agents, log to stderr (never stdout — that's the protocol channel). Logs appear in `codebolt app logs --agent <run_id>`.

## The debug mindset

When an agent is misbehaving:

1. **Read the trace first.** The full trace is the ground truth. Don't guess what happened; look.
2. **Find the first phase that went wrong.** Not the last failing phase, the first odd decision. Fixes upstream prevent downstream breakage.
3. **Check what context the LLM actually saw.** Most "why did the agent do X" answers live in the assembled messages.
4. **Reproduce with replay.** Once you have a recorded failure, you can iterate on fixes without waiting for real LLM calls.
5. **Pin the fix with a test.** Add the recorded trace as a regression test so the same failure doesn't recur.

## See also

- [What is an agent](./01_what-is-an-agent.md)
- [Running agents](./03_running-agents.md)
- [Testing and debugging (for builders)](../../04_build-on-codebolt/02_creating-agents/09_testing-and-debugging.md)
- [Agent run end-to-end (internals)](../../04_build-on-codebolt/09_internals/04_data-flow-walkthroughs/agent-run-end-to-end.md)
