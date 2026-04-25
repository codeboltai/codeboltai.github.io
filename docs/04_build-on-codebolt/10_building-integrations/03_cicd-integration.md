---
sidebar_position: 3
title: CI/CD Integration
description: Trigger Codebolt agent runs from CI/CD pipelines — on push, pull request, deployment, or any pipeline event.
---

# CI/CD Integration

Trigger Codebolt agent runs from CI/CD pipelines — on push, pull request, deployment, or any pipeline event.

## When to Use

- Run a code review agent on every PR.
- Trigger a test-writing agent after a push to main.
- Run a deployment agent as part of your release pipeline.
- Generate changelogs or documentation on merge.

## Approach: Client SDK from CI

Use the `@codebolt/client-sdk` to call the Codebolt server's REST API from your CI runner. The server must be accessible from the CI environment.

### Install

```bash
npm install @codebolt/client-sdk
```

### Start an agent run

```typescript
import { CodeBoltClient } from '@codebolt/client-sdk';

const client = new CodeBoltClient({
  host: process.env.CODEBOLT_HOST || 'localhost',
  port: parseInt(process.env.CODEBOLT_PORT || '2719'),
  autoConnect: false,
});

// Start an agent
const agent = await client.agents.startAgent({
  agentId: 'code-reviewer',
  task: 'Review the latest PR changes',
});

console.log('Agent started:', agent);
```

### GitHub Actions example

```yaml
name: Codebolt Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Run Codebolt review agent
        env:
          CODEBOLT_HOST: ${{ secrets.CODEBOLT_HOST }}
          CODEBOLT_PORT: ${{ secrets.CODEBOLT_PORT }}
        run: |
          npm install @codebolt/client-sdk
          node scripts/run-review.js
```

### Direct REST API

You can also call the server's REST endpoints directly without the SDK:

```bash
# Start an agent
curl -X POST http://$CODEBOLT_HOST:$CODEBOLT_PORT/api/agent/startAgent \
  -H "Content-Type: application/json" \
  -d '{"agentId": "code-reviewer", "task": "Review the latest changes"}'

# Check task status
curl http://$CODEBOLT_HOST:$CODEBOLT_PORT/api/tasks/search \
  -H "Content-Type: application/json" \
  -d '{"status": "in_progress", "limit": 5}'
```

## Requirements

- The Codebolt server must be reachable from the CI environment (network access).
- The agent must be installed on the server.
- For cloud CI (GitHub Actions, GitLab CI), you may need to expose the server or use a tunnel.

## See Also

- [Client SDK](../04_custom-uis/02_client-sdk.md) — full API reference
- [Custom Agents](../02_creating-agents/01_overview.md) — create agents for CI tasks
