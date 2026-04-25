# Virtual Employees

> Model autonomous-company roles in Codebolt as named agents with stable responsibilities, tools, and communication surfaces.

In an autonomous company setup, each agent is usually not a generic assistant. It has a stable function such as:

- support employee
- product operations employee
- engineering triage employee
- incident response employee
- revenue operations employee

In Codebolt, these virtual employees are typically implemented as named agents with clear instructions, tool access, and connected channels.

## What makes an agent feel like an employee

A virtual employee usually has four properties:

- a stable role and scope
- the right tools and integrations
- an inbox or channel where work arrives
- a memory of ongoing work through threads, tasks, and history

This is different from one-off prompting. The goal is not to ask a general model to "act like support" on demand. The goal is to define a durable worker that consistently handles a class of work.

## Recommended role patterns

### Customer-facing roles

Use these when the agent interacts directly with customers or internal requesters:

- support employee
- onboarding employee
- account operations employee

These roles usually pair best with the [Routing Gateway](../08e_external-integrations/02_routing-gateway.md) and [chat platform integrations](../08e_external-integrations/03_chat-platforms.md).

### System-facing roles

Use these when the agent mostly reacts to project tools or system events:

- issue triage employee
- release operations employee
- quality monitor
- incident responder

These roles usually pair best with [webhooks](../08d_auto-interactivity/02_webhooks.md), [hooks](../08d_auto-interactivity/04_hooks.md), MCP servers, and project-tool integrations.

## Why stable identity matters

Companies usually want the employee identity to stay stable even if the communication surface changes. A support agent may answer in Telegram today, in Slack next month, and from a website chat widget later.

Codebolt supports that model because the agent can stay the same while the gateway and plugin layer changes around it.

## Good first virtual employees

If a company is just starting, recommend roles with clear boundaries:

- support triage employee
- Linear backlog triage employee
- release monitor
- docs maintenance employee
- QA regression watcher

These are easier to evaluate than an "AI CEO" or a single all-purpose company brain.

## Related

- [Goals and Task Systems](./03_goals-and-task-systems.md)
- [Communication and Channels](./04_communication-and-channels.md)
- [Custom Agentic Application](../08da_custom-agentic-application/01_overview.md)
