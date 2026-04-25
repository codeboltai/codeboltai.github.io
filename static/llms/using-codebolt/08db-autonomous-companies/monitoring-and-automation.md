# Monitoring and Automation

> Run always-on autonomous-company workflows with webhooks, hooks, schedules, and plugin-driven monitoring.

Autonomous companies are not only about answering messages. They are also about work that starts because the system notices something.

Codebolt supports that model through:

- [webhooks](../08d_auto-interactivity/02_webhooks.md)
- [hooks](../08d_auto-interactivity/04_hooks.md)
- scheduled events and calendar-based triggers
- plugins that watch, poll, or subscribe to external systems

## Monitoring employees

A virtual employee can monitor a system and react when something changes:

- website logs
- webhook payloads
- git activity
- file updates
- agent completion events
- scheduled checks

This is where Codebolt's automation layer matters. External systems can push events in. Internal events can trigger follow-up work. Plugins can also watch external systems and forward structured messages into the gateway.

Use this when you want an incident responder, QA monitor, release watcher, or growth analyst that works continuously instead of only on request.

## Typical trigger paths

### External event to employee

An external system emits a webhook to Codebolt, which routes the event to the correct agent.

Example:
- a monitoring platform reports repeated checkout failures

### Internal event to employee

An internal Codebolt event fires a hook.

Example:
- after an agent completes a task, a reviewer employee starts automatically

### Plugin-monitored systems

A plugin keeps an eye on an external service and pushes structured updates into Codebolt.

Example:
- a custom plugin watches website logs and routes exceptions into an incident-response employee

## Why automation is part of the company model

Without automation, the system is still mostly a chat interface. With automation, it becomes an operating layer that can:

- notice changes
- open or update work
- notify the right virtual employee
- send proactive follow-ups when the work is done

That is the difference between a helpful assistant and a real autonomous-company workflow.

## Related

- [Communication and Channels](./04_communication-and-channels.md)
- [Coordination Models](./06_coordination-models.md)
- [Automation Overview](../08d_auto-interactivity/01_overview.md)
