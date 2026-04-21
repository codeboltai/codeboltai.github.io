---
sidebar_position: 1
title: Evaluation & Optimization Overview
---

import EvalOptimizationOverview from '@site/src/components/diagrams/EvalOptimizationOverview';

# Evaluation & Optimization

Agents are programs. Like any program, you get better results by measuring them and iterating. Codebolt ships a developer-facing eval and optimization system for exactly that.

This section is about **refining what you built** — systematically, with evidence. It's distinct from [guardrails](../../02_using-codebolt/01_overview.md), which are runtime safety for the person *using* an agent.

## What this is for

- **Quality regression.** Did my change to the prompt make the agent worse on tasks it used to handle?
- **A/B comparison.** Agent A vs. Agent B on the same inputs — which one performs better, and on what kinds of tasks?
- **Prompt optimization.** Systematically tune prompt text, temperature, tool selection, or context rules, guided by scores.
- **Tool quality.** Is my new MCP tool actually being called correctly and producing good results?
- **Capability tuning.** Does activating a capability improve the behaviour it's meant to improve?

## The pieces

| Piece | Purpose | Reference |
|---|---|---|
| **Replay & traces** | Re-run recorded conversations against a new agent version | [Replay and Traces](./02_replay-and-traces.md) |
| **Eval sets** | Curated input/expected-output fixtures | [Writing Evals](./03_writing-evals.md) |
| **Optimization loop** | Server-driven tuning — generate variants, evaluate, pick winners | [Optimization Loop](./04_optimization-loop.md) |
| **Metrics & scoring** | Measurable dimensions (correctness, cost, latency, tool choice quality) | [Metrics & Scoring](./05_metrics-and-scoring.md) |

## The mental model

<EvalOptimizationOverview />

Production runs become eval material. Eval results drive the optimization loop. The loop produces candidate agents; you pick the one that wins and deploy it.

## When to reach for it

- Before a significant change to a production agent — baseline first, change, compare.
- When behaviour regresses in a way you can't pin to a specific run.
- When you want to experiment with many small variations and need a tiebreaker better than intuition.
- Before publishing a capability or agent to the marketplace.

When *not* to reach for it: early exploration. Eval overhead is real — don't build an eval set before you know what "good" looks like.

## Eval vs. guardrails

| Axis | Eval | Guardrails |
|---|---|---|
| **When it runs** | Offline, during development | Inline, at runtime |
| **What it does** | Scores outputs | Blocks / rewrites outputs |
| **Who consumes** | Developer refining the agent | End user running the agent |
| **Where it lives in docs** | Build on Codebolt (this section) | Using Codebolt |

They complement: guardrails catch runtime issues; evals catch quality regressions before they reach runtime.

## See also

- [Replay and Traces](./02_replay-and-traces.md)
- [Writing Evals](./03_writing-evals.md)
- [Optimization Loop](./04_optimization-loop.md)
- [Metrics & Scoring](./05_metrics-and-scoring.md)
- [Testing and debugging](../02_creating-agents/09_testing-and-debugging.md) — single-run development loop
