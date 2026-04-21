---
sidebar_position: 4
title: Project Tool Integration
---

# Project Tool Integration

Connect Codebolt to project management tools like Linear, Jira, or GitHub Issues. Route tickets to agents, post results back, and keep project state in sync.

## When to Use

- Automatically triage incoming tickets with an agent.
- Run an agent when a ticket is assigned or status changes.
- Post agent results (code review, test results, deployment status) as comments on tickets.
- Sync task state between Codebolt and your project tool.

## Architecture

```
Project Tool (Linear, Jira, etc.)
  │
  │ Webhook / WebSocket
  ▼
Channel Plugin (your plugin)
  │
  │ plugin.gateway.routeMessage()
  ▼
Codebolt Gateway → Agent
  │
  │ Agent completes task
  ▼
plugin.gateway.onReply() → Post back to project tool API
```

## How It Works

Project tool integrations follow the same **channel plugin** pattern as chat integrations:

1. **Receive events** from the project tool (via webhook or WebSocket).
2. **Route to an agent** using `plugin.gateway.routeMessage()`.
3. **Listen for replies** via `plugin.gateway.onReply()`.
4. **Post results** back to the project tool using its API.

### Example: Linear integration pattern

The `linear-agent-plugin` connects to Linear via a Cloudflare Worker that receives Linear webhooks and forwards them over WebSocket:

```
Linear → Webhook → Cloudflare Worker → WebSocket → Plugin → Gateway → Agent
                                                                         │
Agent reply → Plugin → Linear API (post comment, update issue)
```

The plugin:
- Connects to an external WebSocket endpoint that receives webhooks.
- Parses incoming events (issue created, comment added, etc.).
- Routes them as messages to the configured agent.
- Posts agent responses back via the Linear API.

### Plugin SDK APIs used

```typescript
import plugin from '@codebolt/plugin-sdk';

// Route incoming project tool event to an agent
await plugin.gateway.routeMessage({
  source: 'channel',
  sourceId: 'plugin-linear',
  threadStrategy: 'per-conversation',
  agentId: config.agentId,
  text: issue.description,
  userId: issue.creatorId,
  externalThreadId: issue.id,
  replyTo: {
    channelId: 'linear',
    externalThreadId: issue.id,
    userId: issue.creatorId,
  },
  metadata: { issueId: issue.id, issueTitle: issue.title },
  timestamp: new Date().toISOString(),
});

// Handle agent replies
plugin.gateway.onReply(async (reply) => {
  // Post reply back to the project tool
  await linearClient.commentCreate({
    issueId: reply.metadata?.issueId,
    body: reply.text,
  });
});
```

## Building Your Own

To integrate a new project tool:

1. Create a channel plugin (type: `channel` in `package.json`).
2. Set up a way to receive events — webhook endpoint, polling, or WebSocket.
3. Parse events and call `plugin.gateway.routeMessage()` to send them to agents.
4. Handle replies via `plugin.gateway.onReply()` and post back using the tool's API.
5. Add a UI panel for configuration (API keys, project selection, agent mapping).

See [Chat Integrations](./02_chat-integrations/01_overview.md) for the full channel plugin pattern — project tools follow the same architecture.

## See Also

- [Chat Integrations](./02_chat-integrations/01_overview.md) — the channel plugin pattern
- [Gateway](./02_chat-integrations/02_gateway.md) — message routing and thread management
- [Build Your First Dynamic Panel](../04_custom-uis/07_build-your-first-dynamic-panel.md) — add a config UI
