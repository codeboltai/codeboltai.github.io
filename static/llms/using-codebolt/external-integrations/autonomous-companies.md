# Autonomous Companies

> Use Codebolt to model autonomous company workflows with virtual employees, shared goals, external communication channels, and continuous monitoring.

Many teams exploring **autonomous companies** are not looking for a single chatbot. They are looking for a small operating system of persistent AI workers:

- a fixed set of role-based agents
- clear goals and work queues
- communication across external platforms
- coordination rules so agents do not trip over each other
- event-driven monitoring so work starts without a human typing first

Codebolt maps well to this model because the pieces already exist in the product. You do not need to invent a separate architecture for "virtual employees" first and then figure out how they talk to tools later.

## How the idea maps to Codebolt

| Autonomous company concept | Codebolt building block |
|---|---|
| **Virtual employees** | Long-lived or repeatedly invoked [Agents](../04_agents/01_what-is-an-agent.md) with stable roles |
| **Company goals** | [Tasks](../06_planning/07_tasks.md), jobs, and roadmap-driven work items |
| **Cross-channel communication** | [Routing Gateway](./02_routing-gateway.md) plus [channel plugins](./03_chat-platforms.md) |
| **Project system access** | [Project tool integrations](./04_project-tools.md), MCP servers, and plugins |
| **Autonomous triggering** | [Webhooks, hooks, and schedules](../08d_auto-interactivity/01_overview.md) |
| **Team coordination** | [Jobs, swarms, mail, and orchestrators](../07c_agent-coordination/01_overview.md) |
| **Non-verbal coordination** | [Stigmergic coordination](../07d_stigmergic-coordination/01_overview.md) with pheromones and locks |

In other words, Codebolt can be positioned as the runtime layer for an autonomous company: agents are the workers, the gateway is the communication fabric, tasks are the goals, and plugins/MCP/webhooks connect the company to real systems.

## Virtual employees

In an autonomous company setup, each agent is usually not a generic assistant. It has a stable function such as:

- support employee
- product operations employee
- engineering triage employee
- incident response employee
- revenue operations employee

In Codebolt, these virtual employees are typically implemented as named agents with clear instructions, tool access, and connected channels. The [Routing Gateway](./02_routing-gateway.md) lets the same agent be reachable from Telegram, webhook-driven systems, or custom plugins without changing the core agent logic.

This matters because companies usually want the employee identity to stay stable even if the communication surface changes. A support agent may answer in Telegram today, in Slack next month, and from a website chat widget later. Gateway-based routing preserves that model.

## Goals are tasks

Autonomous companies still need explicit goals. In Codebolt, the simplest and most concrete way to express those goals is through [Tasks](../06_planning/07_tasks.md).

Tasks give you a practical work model:

- a queue of work to do
- status and priority
- assignment to users or agents
- message history for steering and feedback
- parent and subtask structure for decomposition

This is useful for companies evaluating autonomous systems because it moves the conversation away from vague "agent autonomy" and toward tractable operational units. Your virtual employees can pick up tasks, update status, leave notes, and trigger follow-up work.

## Communication layer: the gateway as company infrastructure

The gateway is the core of the autonomous company story.

It provides:

- **thread resolution** so external conversations map to the right Codebolt thread
- **agent routing** so incoming requests reach the correct virtual employee
- **response delivery** so the agent can answer back on the originating platform

That makes it suitable as the communication backbone for:

- Telegram or other messaging platforms via channel plugins
- project systems that call into Codebolt via webhooks
- internal tools that need request/response style agent handling
- monitoring systems that emit structured events

The existing Telegram plugin is a concrete example of this pattern. It registers itself as a channel, sends incoming messages into `plugin.gateway.routeMessage(...)`, and receives outbound replies through `plugin.gateway.onReply(...)`. That is exactly the adapter model you want when a virtual employee must exist on external communication platforms.

## Autonomous company patterns Codebolt supports

### 1. Channel-native employees

A virtual employee lives in Telegram, Slack, Discord, Teams, or another platform and behaves like a persistent team member. Messages enter through a channel plugin, are routed by the gateway, and stay attached to the right thread strategy.

Use this when you want:

- a support or operations employee reachable from chat
- one employee per customer conversation
- one employee per team channel

See [Chat Platforms](./03_chat-platforms.md) and [Building a Channel Plugin](./05_building-a-channel-plugin.md).

### 2. Project-tool employees

A virtual employee is attached to systems like Linear, GitHub, Jira, or Notion. It reacts to events, comments on issues, updates tasks, or continues work based on project state.

Use this when you want:

- issue triage
- backlog grooming
- PR review and follow-up
- status synchronization between external tools and Codebolt tasks

The Linear integration pattern is already reflected in the docs and plugin ecosystem: external events create agent sessions, and the agent works against project context instead of waiting in a chat window.

See [Project Tools](./04_project-tools.md).

### 3. Monitoring employees

A virtual employee monitors a system and reacts when something changes:

- website logs
- webhook payloads
- git activity
- file updates
- agent completion events
- scheduled checks

This is where Codebolt's automation layer matters. [Webhooks](../08d_auto-interactivity/02_webhooks.md) let external systems push events in. [Hooks](../08d_auto-interactivity/04_hooks.md) let internal events trigger actions. Plugins can also watch or poll external systems and forward structured messages into the gateway.

Use this when you want an incident responder, QA monitor, release watcher, or growth analyst that works continuously instead of only on request.

## Coordination between virtual employees

Once you move from one agent to several, the problem is no longer "can the model answer?" but "can the workers coordinate?"

Codebolt has two layers for that:

### Coordination tools

[Agent Coordination](../07c_agent-coordination/01_overview.md) gives you explicit coordination mechanisms:

- jobs for distributing work
- mail for asynchronous agent-to-agent communication
- deliberation for shared decisions
- swarms for grouped workers
- orchestrators for higher-level task routing

This is the right layer when your autonomous company has named roles and deliberate work handoffs.

### Stigmergic coordination

[Stigmergic Coordination](../07d_stigmergic-coordination/01_overview.md) gives you indirect coordination:

- pheromones to signal interest, blockage, or saturation
- locks to claim exclusive work
- file update intents to prevent overlapping edits

This is the right layer when you want decentralized behavior without a single manager agent micromanaging every step.

Together, these two layers let you position Codebolt not just as "multi-agent", but as infrastructure for agent organizations.

## Reference architecture

A common autonomous company setup in Codebolt looks like this:

```text
External channels and systems
Telegram | Linear | GitHub | Website logs | Webhooks | Schedules
                 │
                 ▼
           Routing Gateway
                 │
     Routes to the right virtual employee
                 ▼
     Role-based agents with tools and memory
                 │
     Create/update tasks, jobs, notes, replies
                 ▼
   Coordination + automation + observability
```

You can start small:

1. One agent
2. One channel or webhook
3. One task queue
4. One or two monitoring triggers

Then expand into multiple employees, more channels, and more coordination rules as the system proves itself.

## Positioning for companies evaluating autonomous-company workflows

When presenting Codebolt for this use case, lead with these points:

- **It already has a communication fabric.** The Routing Gateway is the core abstraction for external conversations and event delivery.
- **It already has worker structure.** Agents, tasks, jobs, swarms, and orchestrators map naturally to role-based autonomous teams.
- **It already has integration surfaces.** Plugins, channel plugins, MCP servers, hooks, and webhooks cover both human-facing and system-facing entry points.
- **It already has coordination primitives.** Mail, deliberation, pheromones, locks, and file intents are the difference between a demo swarm and an operable one.
- **It supports both reactive and proactive work.** Agents can respond to incoming messages, monitor systems, and send outbound updates when work completes.

That makes Codebolt a strong fit for companies that want to build:

- AI support teams
- AI operations teams
- AI engineering assistants with persistent ownership
- AI incident-response workers
- AI back-office workflows spanning chat, task systems, and monitoring tools

## See also

- [Routing Gateway](./02_routing-gateway.md)
- [Chat Platforms](./03_chat-platforms.md)
- [Project Tools](./04_project-tools.md)
- [Automation Overview](../08d_auto-interactivity/01_overview.md)
- [Tasks](../06_planning/07_tasks.md)
- [Coordination Overview](../07c_agent-coordination/01_overview.md)
- [Stigmergic Coordination](../07d_stigmergic-coordination/01_overview.md)
