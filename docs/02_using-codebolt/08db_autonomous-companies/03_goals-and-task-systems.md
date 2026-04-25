---
sidebar_position: 3
title: Goals and Task Systems
description: Represent autonomous-company goals in Codebolt through tasks, jobs, and structured operational queues.
---

# Goals and Task Systems

Autonomous companies still need explicit goals. In Codebolt, the simplest and most concrete way to express those goals is through [Tasks](../06_planning/07_tasks.md).

Tasks give you a practical work model:

- a queue of work to do
- status and priority
- assignment to users or agents
- message history for steering and feedback
- parent and subtask structure for decomposition

This is useful because it moves the conversation away from vague "agent autonomy" and toward tractable operational units.

## Tasks as company goals

For many teams, tasks are the operational expression of a goal:

- "resolve incoming support requests"
- "triage new Linear issues"
- "review every pull request opened on main repositories"
- "monitor production logs for failures"

At the company level, those may be strategic goals. Inside Codebolt, they become recurring or discrete units of work that agents can pick up, update, and complete.

## When to use tasks vs jobs

Use [Tasks](../06_planning/07_tasks.md) when you want a visible operational backlog with status, ownership, and message history.

Use [Jobs](../07c_agent-coordination/02_jobs.md) when you want a stronger multi-agent coordination model with bidding, splitting, locking, and explicit work distribution.

In many autonomous-company deployments:

- **tasks** represent the business queue
- **jobs** represent the coordination layer for the worker swarm

## Why goals should stay concrete

Companies evaluating autonomous-company systems often start with abstract goals like:

- improve support efficiency
- reduce engineering toil
- run backlog grooming continuously

Those are useful business outcomes, but they are too broad for a working system. The implementation needs concrete work units, ownership, and observable state. Tasks are the bridge between strategic goals and agent execution.

## Common goal patterns

### Human-originated goals

A user or operator creates tasks directly for virtual employees.

Example:
- "Investigate all urgent support tickets from the last 24 hours."

### Tool-originated goals

An external system triggers the creation of tasks.

Example:
- a Linear issue moves to `In Progress`
- a monitoring system creates a production incident task

### Agent-originated goals

An agent creates follow-up tasks for downstream work.

Example:
- a release monitor opens a docs update task and a regression review task after a deployment

## Related

- [Virtual Employees](./02_virtual-employees.md)
- [Monitoring and Automation](./05_monitoring-and-automation.md)
- [Coordination Models](./06_coordination-models.md)
