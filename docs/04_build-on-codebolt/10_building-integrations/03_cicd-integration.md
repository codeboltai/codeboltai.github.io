---
sidebar_position: 3
title: CI/CD Integration
---

# CI/CD Integration

Trigger Codebolt agent runs from your CI/CD pipeline — on push, PR open, deployment, or any pipeline event.

## Two approaches

| Approach | When to use |
|---|---|
| **Headless clientsdk** | You control the CI runner; you want full run streaming and trace access |
| **Plugin hook** | You want Codebolt to react to git/CI events without an external runner |

## Headless clientsdk (GitHub Actions example)

```yaml
# .github/workflows/codebolt-review.yml
name: Codebolt PR Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Codebolt review agent
        run: npx @codebolt/cli agent start code-reviewer \
               --task "Review PR #${{ github.event.pull_request.number }}" \
               --wait \
               --output-format json > review.json
        env:
          CODEBOLT_URL: ${{ secrets.CODEBOLT_URL }}
          CODEBOLT_TOKEN: ${{ secrets.CODEBOLT_TOKEN }}
      - name: Post review comment
        uses: actions/github-script@v7
        with:
          script: |
            const review = require('./review.json');
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: review.output,
            });
```

## Plugin hook approach

React to push/PR events inside the Codebolt plugin bus without an external runner:

```ts
import { definePlugin } from '@codebolt/plugin-sdk';

export default definePlugin({
  activate(ctx) {
    ctx.hooks.on('git.push', async (event) => {
      if (event.branch === 'main') {
        await ctx.agents.start('post-merge-checks', {
          task: `Run post-merge checks for commit ${event.commitSha}`,
        });
      }
    });
  },
});
```

## See also

- [Custom UIs — clientsdk](../04_custom-uis/01_overview.md)
- [Plugins — Hooks](../05_plugins/01_overview.md)
- [Project Tool Integration](./04_project-tool-integration.md)
