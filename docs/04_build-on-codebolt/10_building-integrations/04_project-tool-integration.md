---
sidebar_position: 4
title: Project Tool Integration
---

# Project Tool Integration

Connect Codebolt to Linear, Jira, GitHub Issues, or any project management tool — so agents can create, update, and respond to tickets automatically.

## Architecture

```
Project tool (Linear/Jira)
      ↓ webhook
  [Plugin webhook handler]
      ↓ plugin bus
  Codebolt server → agent run
      ↓ agent output
  [Plugin] → API call → update ticket
```

## Linear example: issue → agent run → comment back

```ts
import { definePlugin } from '@codebolt/plugin-sdk';
import { LinearClient } from '@linear/sdk';

export default definePlugin({
  activate(ctx) {
    const linear = new LinearClient({ apiKey: ctx.config.linearApiKey });

    // Incoming webhook from Linear (registered in Linear settings)
    ctx.webhooks.register('/linear', async (req) => {
      const { type, data } = req.body;
      if (type !== 'Issue' || data.action !== 'create') return;

      const issue = data.issue;
      const run = await ctx.agents.start('issue-handler', {
        task: `Handle Linear issue: ${issue.title}\n\n${issue.description}`,
      });

      const result = await run.wait();

      await linear.issueAddComment(issue.id, {
        body: result.output,
      });
    });
  },
});
```

## Bidirectional sync

For two-way sync (agent creates a ticket; ticket update triggers agent):

1. **Outbound:** agent calls an MCP tool that wraps the project tool's API.
2. **Inbound:** webhook handler triggers an agent run.

Keep the webhook handler idempotent — delivery is at-least-once.

## See also

- [Plugins](../05_plugins/01_overview.md)
- [CI/CD Integration](./03_cicd-integration.md)
- [Chat Integrations](./02_chat-integrations.md)
