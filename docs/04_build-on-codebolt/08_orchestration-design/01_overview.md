---
sidebar_position: 1
title: Orchestration Design
---

# Orchestration Design

Designing multi-agent systems in Codebolt. This section is for the person *architecting* how agents cooperate, not for the person who wants to *run* an already-designed swarm (for that, see [Multi-Agent Usage](../../02_using-codebolt/07_multi-agent-usage/01_overview.md)).

## What this section covers

1. **[When multi-agent](./02_when-multi-agent.md)** — an honest answer to "do I actually need more than one agent?" (often: no).
2. **[Patterns](./03_patterns/manager-worker.md)** — the small number of orchestration patterns that cover almost every real use case.
3. **[Agent flows](./04_agent-flows.md)** — the graph runtime for fixed pipelines.
4. **[Stigmergy and reputation](./05_stigmergy-and-reputation.md)** — emergent coordination through shared state.
5. **[Drift detection](./06_drift-detection.md)** — keeping long-running swarms on-task.
6. **[Review & merge design](./07_review-and-merge-design.md)** — human-in-the-loop patterns.

## Where this sits in Codebolt

Orchestration is not a separate product — it's a set of features of the [Agent Subsystem](../09_internals/03_subsystems/01_agent-subsystem.md):

| Feature | Provides | Pages |
|---|---|---|
| **Swarms** | Dynamic groups of cooperating agents | [Patterns](./03_patterns/manager-worker.md), [Stigmergy](./05_stigmergy-and-reputation.md) |
| **Agent flows** | Graph runtime for fixed pipelines | [Agent flows](./04_agent-flows.md) |
| **Roles & teams** | High-level vocabulary on top of swarms | [Patterns](./03_patterns/manager-worker.md) |
| **Portfolios** | Curated sets of agents per workspace | [Multi-Agent Usage](../../02_using-codebolt/07_multi-agent-usage/01_overview.md) |
| **Review & merge** | Human-in-the-loop with LLM reviewers | [Review & merge design](./07_review-and-merge-design.md) |

## The core design principle

**Multi-agent is a cost, not a feature.** Every additional agent multiplies your token bill, adds coordination overhead, and introduces new ways to fail. The goal of good orchestration design is *not* to use many agents — it's to use the smallest number of agents that gives you a capability a single agent can't.

Common reasons a single agent isn't enough:

- **Separation of concerns** — a reviewer that reads code with fresh eyes is more useful than the coder second-guessing itself.
- **Parallelism** — embarrassingly parallel work (e.g. refactor N independent files) benefits from real concurrency.
- **Specialization** — different agents can use different models, different prompts, different tool allowlists.
- **Safety** — a privileged "committer" agent reviewing proposals from unprivileged "worker" agents is a real security boundary.

If none of these apply, use one agent.

## See also

- [Agent Subsystem](../09_internals/03_subsystems/01_agent-subsystem.md) — the runtime this section builds on
- [Planning Hierarchy](../09_internals/03_subsystems/08_planning-hierarchy.md) — orchestration often shows up as planned blocks assigned to different agents
- [Multi-Agent Usage](../../02_using-codebolt/07_multi-agent-usage/01_overview.md) — running, not designing
