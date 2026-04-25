---
sidebar_position: 1
title: Autonomous Companies Overview
description: Use Codebolt to model autonomous company workflows with virtual employees, shared goals, communication channels, monitoring triggers, and coordination rules.
---

import FivePlanes from '@site/src/components/diagrams/FivePlanes';

# Autonomous Companies

Many teams exploring **autonomous companies** are not looking for a single chatbot. They are looking for a small operating system of persistent AI workers:

- a fixed set of role-based agents
- clear goals and work queues
- communication across external platforms
- coordination rules so agents do not trip over each other
- event-driven monitoring so work starts without a human typing first

Codebolt maps well to this model because the underlying pieces already exist in the product. You do not need to invent a separate architecture for "virtual employees" first and then figure out how they talk to tools later.

<FivePlanes />

## How the idea maps to Codebolt

| Autonomous company concept | Codebolt building block |
|---|---|
| **Virtual employees** | [Agents](../04_agents/01_what-is-an-agent.md) with stable roles |
| **Company goals** | [Tasks](../06_planning/07_tasks.md), jobs, and roadmap-driven work items |
| **Communication layer** | [Routing Gateway](../08e_external-integrations/02_routing-gateway.md) plus channel plugins |
| **Project system access** | MCP servers, plugins, and project-tool integrations |
| **Autonomous triggering** | [Webhooks, hooks, and schedules](../08d_auto-interactivity/01_overview.md) |
| **Team coordination** | [Jobs, swarms, mail, and orchestrators](../07c_agent-coordination/01_overview.md) |
| **Non-verbal coordination** | [Stigmergic coordination](../07d_stigmergic-coordination/01_overview.md) |

In practice, Codebolt can be positioned as the runtime layer for an autonomous company: agents are the workers, tasks are the goals, the gateway is the communication fabric, and plugins/MCP/webhooks connect the company to real systems.

## In this section

| Page | What it covers |
|---|---|
| [Virtual Employees](./02_virtual-employees.md) | How to model role-based agents as persistent AI workers |
| [Goals and Task Systems](./03_goals-and-task-systems.md) | How company goals map to tasks, jobs, and operational work queues |
| [Communication and Channels](./04_communication-and-channels.md) | How the gateway and channel plugins let virtual employees exist across platforms |
| [Monitoring and Automation](./05_monitoring-and-automation.md) | How webhooks, hooks, schedules, and plugins create always-on autonomous behavior |
| [Coordination Models](./06_coordination-models.md) | How explicit coordination and stigmergic primitives let many agents work together |
| [Reference Architecture](./07_reference-architecture.md) | A practical deployment model and positioning guidance for company use cases |

## Why this framing matters

Most teams evaluating autonomous-company workflows do not fail because the model cannot answer questions. They fail because the system has no durable worker model, no operational queue, no shared communication layer, and no safe coordination path between multiple agents.

Codebolt already has those layers. This section explains how to present and structure them for companies that want AI workers embedded into support, operations, engineering, project tooling, and monitoring workflows.

## See also

- [Custom Agentic Application](../08da_custom-agentic-application/01_overview.md)
- [External Integrations](../08e_external-integrations/01_overview.md)
- [Automation Overview](../08d_auto-interactivity/01_overview.md)
- [Tasks](../06_planning/07_tasks.md)
- [Coordination Overview](../07c_agent-coordination/01_overview.md)
