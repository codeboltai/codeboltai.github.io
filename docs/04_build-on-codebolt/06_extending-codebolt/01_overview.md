---
sidebar_position: 1
title: Extending Codebolt
---

# Extending Codebolt

This section is about adding new capabilities **to the Codebolt application itself** — not to individual agents, but to the platform every agent runs on.

The mechanism for all of these is the [Plugin SDK](../05_plugins/01_overview.md). What this section adds is the *patterns* — concrete recipes for each class of extension, using that SDK.

## What you can extend

| What | Pattern | Section |
|---|---|---|
| **LLM / embedding backends** | Register a custom provider; route models to your backend | [Custom LLM Providers](./02_custom-llm-providers.md) |
| **UI panels and views** | Embed a React panel in the Codebolt interface | [UI Extensions](./03_ui-extensions.md) |
| **Themes** | Override CSS variables, supply icon sets, ship a dark/light theme | [Themes](./04_themes.md) |
| **Custom commands** | Add slash commands, toolbar actions, keyboard shortcuts | [Custom Commands](./05_custom-commands.md) |
| **Execution backends** | Plug in a custom sandbox / remote execution provider | [Custom Execution Backends](./06_execution-backends.md) |

## How it differs from Custom UIs and Plugins

- **[Custom UIs](../04_custom-uis/01_overview.md)** — you're building a *separate* interface (your own chat panel, CLI, editor extension) that talks to the server over WebSocket. You own the whole surface.
- **[Plugins](../05_plugins/01_overview.md)** — the SDK and lifecycle reference. Read this for the *how*; read this section for the *what to build*.
- **Extending Codebolt** — you're adding *into* the existing Codebolt UI or runtime. Users of your extension see it inside Codebolt, not in a separate app.

## Where extensions live

All extensions ship as plugins. The plugin manifest declares what the plugin contributes:

```yaml
# plugin.yaml
name: my-llm-extension
contributes:
  llmProviders:
    - id: my-provider
      label: My LLM
  uiPanels:
    - id: my-panel
      entry: ./dist/panel.js
  themes:
    - id: my-theme
      label: Corporate Dark
      entry: ./themes/corporate-dark.css
  commands:
    - id: my-cmd
      label: Run My Command
      keybinding: ctrl+shift+m
```

Each `contributes` key maps to one of the sections in this guide.

## See also

- [Plugin SDK](../05_plugins/01_overview.md) — the lifecycle and API surface
- [Building Integrations](../10_building-integrations/01_overview.md) — connecting Codebolt to external services
