---
sidebar_position: 1
title: Custom Agentic Application Overview
---

# Custom Agentic Application

Build a product-specific application on top of Codebolt when the default desktop, web, and IDE surfaces are not enough.

A custom agentic application usually combines:

- A custom interface tailored to your workflow or users
- One or more agents with domain-specific instructions and tools
- Routing rules, automation, and integrations that connect the app to external systems

## When to use this

- You want a branded app for a team, customer workflow, or vertical use case
- You need a UI shape that does not fit the built-in Codebolt clients
- You want to package agents, automations, and external integrations into one focused product

## Recommended starting points

| Topic | What it gives you |
|---|---|
| [Client SDK](../../04_build-on-codebolt/04_custom-uis/02_client-sdk.md) | Typed APIs and realtime transport for a standalone application |
| [Custom Interfaces Overview](../../04_build-on-codebolt/04_custom-uis/01_overview.md) | The main paths for building your own frontend on top of Codebolt |
| [Agents](../04_agents/01_what-is-an-agent.md) | Agent setup, instructions, tools, and execution patterns |
| [Auto Interactivity](../08d_auto-interactivity/01_overview.md) | Event-driven triggers like webhooks, schedules, and hooks |
| [External Integrations](../08e_external-integrations/01_overview.md) | Connections to chat apps, project tools, and gateway-based channels |

## Typical architecture

1. Build the client experience with the [Client SDK](../../04_build-on-codebolt/04_custom-uis/02_client-sdk.md) or related custom UI primitives.
2. Define the agent behaviour, tools, and memory model.
3. Add automation with webhooks, schedules, or hooks when the app needs to act without direct user input.
4. Connect external systems through the routing gateway, project tools, or channel plugins.

## See also

- [Cloud](../08f_cloud/01_overview.md) for hosted runtimes and remote execution
- [Plugins](../07z_plugins/01_overview.md) for extending runtime capabilities
