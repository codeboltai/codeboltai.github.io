---
sidebar_position: 12
title: Orchestration Flows
---

import ExampleFlowDAG from '@site/src/components/diagrams/ExampleFlowDAG';

# Orchestration Flows

How a multi-agent **pattern** becomes a **runnable graph**.

<ExampleFlowDAG />

## Flows in one sentence

A **flow** is a directed graph of agent invocations with typed inputs, typed outputs, and edges expressing dependencies. The runtime executes the graph, parallelizing where possible.

## Why flows, not scripts

You could write a TypeScript script that calls agents in sequence. Why use a flow definition instead?

- **Declarative.** A flow's structure is visible at a glance — no following call chains across files.
- **Parallelism for free.** The runtime sees the graph and runs independent nodes in parallel.
- **Resumable.** A flow that fails partway can resume from the last successful node.
- **Replayable.** Like everything else, flows are recorded in the event log.
- **Composable.** A flow can be a node inside another flow.

## Anatomy of a flow

```yaml
name: my-flow
inputs:
  task: { type: string, required: true }

nodes:
  - id: planner
    agent: planner-agent
    input:
      task: "{{inputs.task}}"

  - id: executor
    agent: executor-agent
    input:
      plan: "{{planner.output}}"

  - id: reviewer
    agent: reviewer-agent
    input:
      result: "{{executor.output}}"

edges:
  - from: planner
    to: executor
  - from: executor
    to: reviewer

outputs:
  result: "{{executor.output}}"
  review: "{{reviewer.output}}"
```

Three agents, two edges, one output. The runtime knows planner must finish before executor starts, etc. If you added a second independent path, it would run in parallel automatically.

## Node types

- **Agent node** — invoke an agent.
- **Tool node** — call a tool directly without an agent (cheap glue).
- **Human node** — pause and wait for human input.
- **Sub-flow node** — invoke another flow.
- **Conditional node** — branch on a value.

## What flows are *not*

- **Not a workflow engine** for general business processes. They're specifically for orchestrating LLM agents.
- **Not a substitute for a single agent.** If one agent can do it, use one agent.

## See also

- [Multi-agent patterns](../07_multi-agent/01_multi-agent-patterns.md)
- [Agent flows (build)](../../04_build-on-codebolt/08_orchestration-design/04_agent-flows.md)
- [Reading a flow (using)](../../02_using-codebolt/07_multi-agent-usage/03_reading-a-flow.md)
