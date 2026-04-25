# Communication and Channels

> Use the Routing Gateway and channel plugins as the communication fabric for virtual employees across external platforms.

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

## Why the gateway matters

Companies usually want a worker identity that persists even while interfaces change. A support employee may start in Telegram, later move to Slack, and eventually also exist in a custom company UI.

The [Routing Gateway](../08e_external-integrations/02_routing-gateway.md) supports that model by separating:

- the worker identity
- the incoming source
- the thread strategy
- the outbound reply path

## Channel-native employees

A virtual employee can live in Telegram, Slack, Discord, Teams, or another platform and behave like a persistent team member. Messages enter through a channel plugin, are routed by the gateway, and stay attached to the right thread strategy.

Use this when you want:

- a support or operations employee reachable from chat
- one employee per customer conversation
- one employee per team channel

See [Chat Platforms](../08e_external-integrations/03_chat-platforms.md) and [Building a Channel Plugin](../08e_external-integrations/05_building-a-channel-plugin.md).

## Plugin-backed company surfaces

The existing Telegram plugin is a concrete example of this pattern. It registers itself as a channel, sends incoming messages into `plugin.gateway.routeMessage(...)`, and receives outbound replies through `plugin.gateway.onReply(...)`.

That adapter model is exactly what you want when a virtual employee must exist on external communication platforms without hardcoding those platforms into the core server.

## Project-tool communication

Not all company communication is chat. Sometimes the "conversation" happens inside:

- Linear issues
- GitHub pull requests
- Jira tickets
- Notion pages

Those flows still fit the same model. The source is different, but the employee still needs a route in, a thread strategy, and a route back out.

## Related

- [Project Tools](../08e_external-integrations/04_project-tools.md)
- [Monitoring and Automation](./05_monitoring-and-automation.md)
- [Reference Architecture](./07_reference-architecture.md)
