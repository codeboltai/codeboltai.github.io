---
sidebar_position: 1
title: Auto Interactivity Overview
---

# Auto Interactivity

Auto Interactivity covers everything that causes agents to act *automatically* — without a user typing a message. Instead of you starting a conversation, a system event, an incoming HTTP request, a scheduled time, or a code lifecycle event starts it for you.

## How it works

All automatic triggers ultimately route through the same central mechanism: the **Routing Gateway**. It receives a message from a source, decides which agent and thread to use, and delivers the message.

```
External HTTP request  ──▶ Webhooks ──┐
Scheduled time         ──▶ Calendar ──┤
File / git / agent event ─▶ Hooks ────┤──▶ Routing Gateway ──▶ Agent
Application event      ──▶ Pipelines ─┘
```

## Tools in this section

| Tool | What triggers it | What happens |
|---|---|---|
| [Webhooks](./02_webhooks.md) | Incoming HTTP POST to a unique URL | Gateway routes the payload to an agent |
| [Calendar & Scheduled Events](./03_calendar-events.md) | A scheduled time or cron expression | Gateway notifies participants, optionally triggers an agent |
| [Hooks](./04_hooks.md) | File saved, git commit, agent completed, etc. | An agent, action block, or shell command runs |
| [Event Log](./05_event-log.md) | All of the above | Audit trail of every event that flowed through the system |

## The Routing Gateway

The Routing Gateway is the shared delivery layer. Every auto-triggered message passes through it. It decides:

- **Which agent** receives the message (based on source configuration)
- **Which thread** to use — a new thread per message, a shared thread per user, a single global thread, or an existing thread
- **How to reply** — if a webhook provides a `targetUrl`, the agent's response is POSTed back to it

See [Guardrails & Settings → Routing Gateway](../09a_guardrails-and-settings/03_routing-gateway.md) for gateway configuration.
