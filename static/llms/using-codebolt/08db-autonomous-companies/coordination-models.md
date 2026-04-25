# Coordination Models

> Coordinate many virtual employees through explicit orchestration tools and stigmergic primitives.

Once you move from one agent to several, the problem is no longer "can the model answer?" but "can the workers coordinate?"

Codebolt has two layers for that.

## Explicit coordination

[Agent Coordination](../07c_agent-coordination/01_overview.md) gives you direct coordination mechanisms:

- jobs for distributing work
- mail for asynchronous agent-to-agent communication
- deliberation for shared decisions
- swarms for grouped workers
- orchestrators for higher-level task routing

This is the right layer when your autonomous company has named roles, deliberate handoffs, and clear work distribution.

## Stigmergic coordination

[Stigmergic Coordination](../07d_stigmergic-coordination/01_overview.md) gives you indirect coordination:

- pheromones to signal interest, blockage, or saturation
- locks to claim exclusive work
- file update intents to prevent overlapping edits

This is the right layer when you want decentralized behavior without a single manager agent micromanaging every step.

## When to use which model

Use explicit coordination when:

- roles are specialized
- work handoffs must be visible
- approvals or shared decisions matter

Use stigmergic coordination when:

- many agents may notice the same work
- agents need to self-select based on local signals
- you want resilience without a central orchestrator bottleneck

Most serious deployments use both. Tasks and jobs provide structure. Pheromones, locks, and intents prevent collisions.

## Why this matters for positioning

Many products stop at "multi-agent". Companies evaluating autonomous-company systems care about the next question: how do these workers avoid duplication, deadlock, or chaotic edits?

This coordination layer is one of the strongest reasons to position Codebolt as infrastructure for agent organizations rather than a set of disconnected bots.

## Related

- [Goals and Task Systems](./03_goals-and-task-systems.md)
- [Reference Architecture](./07_reference-architecture.md)
- [Coordination Overview](../07c_agent-coordination/01_overview.md)
