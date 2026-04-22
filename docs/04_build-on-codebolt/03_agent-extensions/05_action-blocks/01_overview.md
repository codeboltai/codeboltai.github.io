---
sidebar_position: 1
title: Action Blocks
---

# Action Blocks

An **action block** is a reusable, self-contained TypeScript module that an agent can invoke by name. Each action block receives a thread context with parameters, executes its logic, and returns a structured result.

Action blocks run as isolated side-executions managed by the Codebolt runtime. They can use LLM inference, Codebolt APIs, or any Node.js logic internally.

## In This Section

- [Block Schema](./02_block-schema.md) — the `actionblock.yml` configuration file
- [Authoring](./03_authoring.md) — creating and building an action block
- [Publishing](./04_publishing.md) — distributing action blocks

## When to use action blocks

- Encapsulating a reusable procedure that multiple agents need (e.g. "break a task into jobs", "create a plan from requirements").
- Operations that combine LLM reasoning with structured output parsing.
- Team-standardized operations that should execute identically across agents.
- Replacing inline logic with a named, versioned, independently deployable unit.

## Invoking from an agent

Use `codebolt.actionBlock.start()` to invoke a registered action block by name:

```ts
import codebolt from '@codebolt/codeboltjs';

codebolt.onMessage(async (message) => {
  const result = await codebolt.actionBlock.start('break-task-into-jobs', {
    plan: { planId: 'plan-1', name: 'My Plan', description: '...', tasks: [] },
    task: { taskId: 'task-1', name: 'Build API', description: '...' },
  });

  if (result.success) {
    console.log('Sub-jobs:', result.result.subJobs);
  }
});
```

**Real-world example** — the orchestrator agent uses action blocks for planning and task breakdown:

```ts
// Phase 1: Create a plan using an action block
const planResult = await codebolt.actionBlock.start('create-plan-for-given-task', {
  userMessage: reqMessage,
});

// Phase 2: Break each task into jobs using another action block
const jobsResult = await codebolt.actionBlock.start('break-task-into-jobs', {
  plan, task, existingJobs,
});
```

## Action block vs. skill vs. subagent

| Concern | Action Block | Skill | Subagent |
|---|---|---|---|
| **Execution** | Side-execution, isolated process | Delegated within server | Full agent instance |
| **LLM involvement** | Optional (block decides) | Usually yes | Yes |
| **Returns** | Structured result object | Varies | Conversation output |
| **Scope** | Single focused operation | Single focused operation | Open-ended task |

Use an action block when you need a named, reusable operation with structured inputs and outputs. Use a skill for delegation within the agent server. Use a subagent for open-ended work that needs a full agent loop.

## See also

- [Skills](../03_skills/01_overview.md) — delegation rather than side-execution
- [Subagents](../08_subagents.md) — full agent instances for open-ended tasks
- [Multi-Agent Orchestration](../../08_multi-agent-orchestration/01_overview.md)
