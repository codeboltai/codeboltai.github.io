---
sidebar_position: 7
title: Reference Architecture
description: A practical architecture and positioning model for deploying Codebolt in autonomous-company scenarios.
---

import AutonomousCompaniesArchitecture from '@site/src/components/diagrams/AutonomousCompaniesArchitecture';

# Reference Architecture

A common autonomous company setup in Codebolt looks like this:

<AutonomousCompaniesArchitecture />

## Start small

You can start with:

1. one agent
2. one channel or webhook
3. one task queue
4. one or two monitoring triggers

Then expand into multiple employees, more channels, more monitoring surfaces, and more coordination rules as the system proves itself.

## Common deployment patterns

### AI support team

- customer messages arrive from a chat channel
- support employees route through the gateway
- tasks track escalations and follow-ups

### AI operations team

- webhooks and schedules trigger recurring work
- project-tool integrations update external systems
- monitoring employees push proactive updates

### AI engineering support layer

- Linear or GitHub events trigger work
- tasks and jobs organize execution
- coordination primitives reduce collision between workers

## Positioning points

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

## Productization path

If the company wants a dedicated internal console or customer-facing surface around these workflows, see [Custom Agentic Application](../08da_custom-agentic-application/01_overview.md). That section covers when to build inside Codebolt, beside a local Codebolt server, or against hosted runtimes.

## Related

- [Autonomous Companies Overview](./01_overview.md)
- [Custom Agentic Application](../08da_custom-agentic-application/01_overview.md)
- [External Integrations](../08e_external-integrations/01_overview.md)
