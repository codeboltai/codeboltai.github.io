---
sidebar_position: 5
title: Custom Commands
---

# Custom Commands

Register new slash commands, toolbar actions, and keyboard shortcuts that users can invoke inside Codebolt.

## When to add custom commands

- You've built a UI panel and want a keyboard shortcut to open it.
- You want a `/deploy` slash command that triggers an agent run with a fixed task.
- You're building a workflow that needs a one-click action in the toolbar.

## Declaring commands

```yaml
# plugin.yaml
contributes:
  commands:
    - id: my-plugin.deploy
      label: Deploy current branch
      description: Runs the deploy agent on the current git branch
      keybinding: ctrl+shift+d     # optional
      icon: deploy                  # optional — built-in icon id
    - id: my-plugin.open-panel
      label: Open My Panel
      keybinding: ctrl+shift+m
```

## Implementing command handlers

```ts
import { definePlugin } from '@codebolt/plugin-sdk';

export default definePlugin({
  activate(ctx) {
    ctx.commands.register('my-plugin.deploy', async () => {
      const branch = await ctx.git.currentBranch();
      await ctx.agents.start('deploy-agent', {
        task: `Deploy branch ${branch}`,
      });
    });

    ctx.commands.register('my-plugin.open-panel', () => {
      ctx.ui.panels.open('my-panel');
    });
  },
});
```

## Slash commands in chat

To expose a command as a `/slash-command` in the chat input:

```yaml
contributes:
  chatCommands:
    - id: my-plugin.deploy
      trigger: deploy
      description: Deploy the current branch
      argumentHint: "[environment]"
```

Users type `/deploy staging` in the chat panel; your handler receives `{ args: 'staging' }`.

## See also

- [UI Extensions](./03_ui-extensions.md) — open panels from commands
- [Plugin SDK](../05_plugins/01_overview.md)
