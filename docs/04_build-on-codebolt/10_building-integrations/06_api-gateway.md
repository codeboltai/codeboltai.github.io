---
sidebar_position: 6
title: API Gateway
---

# API Gateway

Expose Codebolt agent runs over a custom HTTP API — so external systems, scripts, or services can trigger runs without speaking the Codebolt WebSocket protocol directly.

## When to write an API gateway

- You want a simple `POST /run` REST endpoint for external systems.
- You need custom auth (API keys, OAuth) in front of Codebolt.
- You're routing different request shapes to different agents based on content or caller identity.

## Plugin gateway example

```ts
import { definePlugin } from '@codebolt/plugin-sdk';

export default definePlugin({
  activate(ctx) {
    ctx.http.route('POST', '/api/run', async (req, res) => {
      // Validate custom auth
      const token = req.headers['x-api-key'];
      if (!await ctx.auth.validateApiKey(token)) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { agent, task, webhook } = req.body;
      const run = await ctx.agents.start(agent, { task });

      if (webhook) {
        // Fire-and-forget: notify caller when done
        run.wait().then(result =>
          fetch(webhook, { method: 'POST', body: JSON.stringify(result) })
        );
        return res.json({ runId: run.id, status: 'started' });
      }

      // Synchronous: wait and return
      const result = await run.wait();
      res.json({ runId: run.id, output: result.output });
    });
  },
});
```

## Streaming responses

For callers that support SSE or chunked responses:

```ts
ctx.http.route('POST', '/api/run/stream', async (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  const run = await ctx.agents.start(req.body.agent, { task: req.body.task });

  for await (const event of run.events()) {
    if (event.type === 'agent_message') {
      res.write(`data: ${JSON.stringify(event)}\n\n`);
    }
  }
  res.end();
});
```

## See also

- [Plugins](../05_plugins/01_overview.md)
- [CI/CD Integration](./03_cicd-integration.md) — headless clientsdk alternative
- [Chat Integrations](./02_chat-integrations.md)
