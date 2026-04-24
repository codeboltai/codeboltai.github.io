---
sidebar_position: 5
title: Event Log
---

# Event Log

The Event Log is a real-time audit trail of every application event that flows through Codebolt — agent starts, file changes, thread completions, job updates, and more. Use it to understand what happened, when, and in what order.

Open via: **Debug Tools dropdown → Event Log**

## What it shows

Every event in the system is captured with:

- **Event type** — the category of event (e.g., `agent:completed`, `file:updated`, `job:assigned`)
- **Timestamp** — when the event occurred
- **Payload** — the full event data (expand to inspect)
- **Source** — which subsystem emitted the event

## View modes

| Mode | Description |
|---|---|
| **List** | Chronological stream of all events |
| **Detail** | Full payload inspection for a selected event |
| **Query** | Filter and search events by type, field, or value |

## Event categories

Events are grouped by the subsystem that emits them:

| Prefix | Source |
|---|---|
| `agent:*` | Agent lifecycle (started, completed, error) |
| `thread:*` | Thread lifecycle (created, completed, message added) |
| `job:*` | Job state changes (created, assigned, completed, split) |
| `task:*` | Task lifecycle (created, started, completed, failed) |
| `file:*` | Filesystem changes (created, updated, deleted) |
| `git:*` | Git events (commit, push, pull request) |
| `swarm:*` | Swarm state changes |
| `conversation:*` | Conversation events |
| `calendar:*` | Calendar triggers and reminders |

## Querying events

In Query mode, filter events by:
- **Event type** — select one or more event types from the dropdown
- **Field conditions** — filter on payload fields using operators: `=`, `!=`, `>`, `<`, `contains`, `startsWith`, `matches`, `exists`
- **Time range** — narrow to a specific window

Conditions can be combined with `AND`, `OR`, and `NOT` logic.

## Real-time updates

The Event Log receives push events over WebSocket. New events appear immediately as they occur. Use this alongside the Debug panels when tracing a multi-agent workflow — you can watch events from hooks, webhooks, agent completions, and job assignments arrive in sequence.

## Relation to Hooks and Webhooks

The Event Log is read-only — it observes, not acts. To *react* to events automatically, use [Hooks](./04_hooks.md) (for lifecycle triggers) or [Webhooks](./02_webhooks.md) (for external HTTP triggers). The Event Log helps you verify that the right events are being emitted before writing a hook or debugging why one didn't fire.
